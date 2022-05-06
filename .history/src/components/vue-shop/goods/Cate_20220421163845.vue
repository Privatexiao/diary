<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-col :span="5">
        <el-button type="primary" @click="showAddCateDialog"
          >添加分类</el-button
        >
      </el-col>

      <!-- :selection-type="false"关闭复选框 -->
      <!-- :expand-type="false"是否为展开类型的表格 -->
      <!-- show-index是否设置序列号 -->
      <tree-table
        class="tree-table"
        :data="cateList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
      >
        <!-- 是否有效列 -->
        <template v-slot:isDel="slotIsDel">
          <i
            :class="[
              slotIsDel.row.cat_delete ? 'el-icon-error' : 'el-icon-success',
            ]"
            style="color: lightgreen"
          ></i
        ></template>
        <!-- 排序列 -->
        <template v-slot:isLev="slotIsLev">
          <el-tag v-if="slotIsLev.row.cat_level === 0">一级</el-tag>
          <el-tag type="success" v-if="slotIsLev.row.cat_level === 1"
            >二级</el-tag
          >
          <el-tag type="warning" v-if="slotIsLev.row.cat_level === 2"
            >三级</el-tag
          >
        </template>
        <!-- 操作 -->
        <template v-slot:isCz>
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="querInfo.pagenum"
        :page-sizes="[1, 2, 5, 8, 10, 30]"
        :page-size="querInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加分类的对话框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      width="50%"
      @close="addCateDialogClosed"
    >
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="80px"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父类分类">
          <!-- options用来指定数据源 -->
          <!-- checkStrictly: 'true', 是否允许选择任意一级的选项-->
          <el-cascader
            v-model="selectedKeys"
            :options="parentCateList"
            :props="{
              expandTrigger: 'hover',
              checkStrictly: 'true',
              value: 'cat_id',
              label: 'cat_name',
              children: 'children',
            }"
            clearable
            @change="parentCateChanged"
          ></el-cascader
        ></el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cate',
  data() {
    return {
      //商品分类的数据
      cateList: [],
      //查询条件
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      // 总数据条数
      total: 0,
      // 为table指定列的定义
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
        },
        {
          label: '是否有效',
          prop: 'cat_delete',
          //表示，将当前列定义为模板列type: 'template'
          type: 'template',
          //表示当前这一列使用模板名称
          template: 'isDel',
        },
        {
          label: '排序',
          prop: 'cat_level',
          //表示，将当前列定义为模板列type: 'template'
          type: 'template',
          //表示当前这一列使用模板名称
          template: 'isLev',
        },
        {
          label: '操作',
          //表示，将当前列定义为模板列type: 'template'
          type: 'template',
          //表示当前这一列使用模板名称
          template: 'isCz',
        },
      ],
      // 控制添加分类的对话框的显示与隐藏
      addCateDialogVisible: false,
      // 添加分类的表单数据对象
      addCateForm: {
        // 将要添加的分类的名称
        cat_name: '',
        cat_pid: 0,
        // 分类的等级默认为一级
        cat_level: 0,
      },
      // 表单验证规则对象
      addCateFormRules: {
        // 验证分类名称是否合法
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在3-16个字符', trigger: 'blur' },
        ],
      },

      // 保存父类分类的列表
      parentCateList: [],
      // 指定级联选择器的配置对象
      // cascaderProps: {
      //   value: 'cat_id',
      //   label: 'cat_name',
      //   children: 'children',
      // },
      // 选中的父级分类的id数组
      selectedKeys: [],
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    //获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.querInfo,
      })
      if (res.meta.status !== 200)
        return this.$message.error('获取商品分类失败')

      this.cateList = res.data.result
      this.total = res.data.total
    },

    // 监听pagesize 改变
    handleSizeChange(newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听pagenum改变
    handleCurrentChange(newPage) {
      this.querInfo.pagenum = newPage
      this.getCateList()
    },
    //点击 添加分类 按钮的事件
    showAddCateDialog() {
      //先获取父类分类的数据列表
      this.getParentCateList()
      //再展示对话框
      this.addCateDialogVisible = true
    },

    //获取父类分类的数据列表
    async getParentCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: { type: 2 },
      })
      if (res.meta.status !== 200)
        return this.$message.error('获取父类分类失败')

      this.parentCateList = res.data
    },

    // 选择项发生变化触发这个函数
    parentCateChanged() {
      //如果selectedKeys 数组中的length 大于0，证明选中的父级分类
      //反之，就说明没有选中任何父级分类
      if (this.selectedKeys.length > 0) {
        // 父级分类的Id
        this.addCateForm.cat_pid =
          this.selectedKeys[this.selectedKeys.length - 1]
        //为当前分类的等级赋值
        this.addCateForm.cat_level = this.selectedKeys.length
        return
      } else {
        // 父级分类的Id
        this.addCateForm.cat_pid = 0
        //为当前分类的等级赋值
        this.addCateForm.cat_level = 0
      }
    },
    // 点击按钮，添加新的分类
    addCate() {
      this.$refs.addCateFormRef.validate(async valid=>{
        if(!valid) return
      const {data:res} = await this.$http.post('categories',this.addCateForm)
      if(res.meta.status !== 201) return this.$message.error('添加分类失败')

      this.$message.success('添加分类成功')
      this.getCateList()
      this.addCateDialogVisible = false
      })
    },
    //监听对话框的关闭事件，重置表单数据
    addCateDialogClosed() {
      this.$refs.addCateFormRef.resetFields()
      this.selectedKeys = []
      // 父级分类的Id
      this.addCateForm.cat_pid = 0
      //为当前分类的等级赋值
      this.addCateForm.cat_level = 0
    },
  },
}
</script>

<style lang="less" scoped>
.tree-table {
  margin-top: 60px;
}
.el-pagination {
  margin-top: 20px;
}
.el-cascader {
  width: 100%;
}
</style>
