<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <!-- 警告区域 -->
      <el-alert
        title="注意:只允许为第三级分类设置相关参数!"
        type="warning"
        show-icon
        :closable="false"
      >
      </el-alert>
      <!-- 选择商品分类区域 -->
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类：</span>
          <!-- @change="handleChange"级联选择框选中会触发这个函数 -->
          <el-cascader
            v-model="selectedCateKeys"
            :options="catelist"
            :props="{
              expandTrigger: 'hover',
              value: 'cat_id',
              label: 'cat_name',
              children: 'children',
            }"
            @change="handleChange"
          ></el-cascader>
        </el-col>
      </el-row>
      <!-- Tab页签区域 -->
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <!-- 动态参数 -->
        <el-tab-pane label="动态参数" name="many">
          <el-button
            type="primary"
            size="mini"
            :disabled="isBtnDisabled"
            @click="addDialogVisible = true"
            >添加参数</el-button
          >
          <el-table :data="manyTableData" border stripe>
            <el-table-column type="expand">
              <template v-slot:default="slotExpand">
                <el-tag
                  closable
                  v-for="(item, index) in slotExpand.row.attr_vals"
                  :key="index"
                  @close="handleClose(index, slotExpand.row)"
                  >{{ item }}</el-tag
                >
                <el-input
                  v-if="slotExpand.row.inputVisible"
                  v-model="slotExpand.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(slotExpand.row)"
                  @blur="handleInputConfirm(slotExpand.row)"
                >
                </el-input>
                <el-button
                  v-else
                  size="small"
                  @click="showInput(slotExpand.row)"
                  >+ New Tag</el-button
                >
              </template>
            </el-table-column>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              label="参数名称"
              prop="attr_name"
            ></el-table-column>
            <el-table-column label="操作">
              <template v-slot:default>
                <el-button type="primary" icon="el-icon-edit" size="mini"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 静态属性 -->
        <el-tab-pane label="静态属性" name="only">
          <el-button
            type="primary"
            size="mini"
            :disabled="isBtnDisabled"
            @click="addDialogVisible = true"
            >添加属性</el-button
          >
          <el-table :data="onlyTableData" border stripe>
            <el-table-column type="expand">
              <template v-slot:default="slotExpand">
                <el-tag
                  closable
                  v-for="(item, index) in slotExpand.row.attr_vals"
                  :key="index"
                  @close="handleClose(index, slotExpand.row)"
                  >{{ item }}</el-tag
                >
                <el-input
                  v-if="slotExpand.row.inputVisible"
                  v-model="slotExpand.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(slotExpand.row)"
                  @blur="handleInputConfirm(slotExpand.row)"
                >
                </el-input>
                <el-button
                  v-else
                  size="small"
                  @click="showInput(slotExpand.row)"
                  >+ New Tag</el-button
                >
              </template>
            </el-table-column>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              label="参数名称"
              prop="attr_name"
            ></el-table-column>
            <el-table-column label="操作">
              <template v-slot:default>
                <el-button type="primary" icon="el-icon-edit" size="mini"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 添加参数的对话框 -->
    <el-dialog
      :title="'添加' + titleText"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <!-- 添加参数的button框 -->
      <el-form
        :model="addForm"
        ref="addFormRef"
        :rules="addFormRules"
        label-width="80px"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Params',
  data() {
    return {
      //保存商品分类的列表数据
      catelist: [],
      // 级联选择器双向绑定到的数组
      selectedCateKeys: [],
      // 指定第一个默认激活的是first页签
      activeName: 'many',
      // 储存动态参数数据
      manyTableData: [],
      //储存静态属性数据
      onlyTableData: [],
      // 控制添加动态和静态的对话框的显示与隐藏
      addDialogVisible: false,
      //添加参数的表单数据对象
      addForm: {
        attr_name: '',
      },
      //添加表单的验证规则对象
      addFormRules: {
        attr_name: [
          {
            required: true,
            message: '请输入参数名称',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    //获取所有的商品分类列表
    async getCateList() {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败')
      }
      this.catelist = res.data
    },

    // 级联选择框选中会触发这个函数
    handleChange() {
      this.getParamsData()
      // 重置储存动态参数数据
      this.manyTableData = []
      // 重置储存静态属性数据
      this.onlyTableData = []
    },

    // Tab页签点击事件的处理函数
    handleTabClick() {
      this.getParamsData()
    },

    //获取参数列表数据
    async getParamsData() {
      //证明选中的不是三级分类
      if (this.selectedCateKeys.length !== 3) {
        this.selectedCateKeys = []
        return
      }

      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        {
          params: { sel: this.activeName },
        }
      )
      if (res.meta.status !== 200) {
        return this.$message.error('获取分类参数失败')
      }
      // 遍历attr_vals,把字符串数据转成数组
      res.data.forEach((item) => {
        // 先判断item.attr_vals是否为空，否则返回空数组
        item.attr_vals = item.attr_vals ? item.attr_vals.split(' ') : []
        // 控制new tag 按钮与文本框的切换显示,让每次的的inputVisible都不一样
        item.inputVisible = false
        // 保存文本框的输入内容
        item.inputValue = ''
      })

      // 如果我们点的是动态参数就挂载到动态参数的储存地方
      if (this.activeName === 'many') {
        this.manyTableData = res.data
      } else {
        this.onlyTableData = res.data
      }
    },
    //监听对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields()
    },
    // 点击按钮添加参数
    addParams() {
      //先进行表单验证
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.post(
          `categories/${this.cateId}/attributes`,
          {
            attr_name: this.addForm.attr_name,
            attr_sel: this.activeName,
          }
        )
        if (res.meta.status !== 201)
          return this.$message.error('添加分类参数失败')
        this.$message.success('添加分类参数成功')
        // 关闭添加对话框
        this.addDialogVisible = false
        this.getParamsData()
      })
    },
    // 监听按钮按下事件
    showInput(row) {
      row.inputVisible = true
      // 让文本框自动获取焦点
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 监听按钮与文本框new tag 失去焦点和回车键弹起事件
    handleInputConfirm(row) {
      // trim()去除input两边的空格，如果等于0就是没有内容，关闭input框
      if (row.inputValue.trim().length === 0) {
        row.inputValue = ''
        row.inputVisible = false
        return
      }
      // 如果没有return出去就是合法的
      row.attr_vals.push(row.inputValue.trim())

      row.inputValue = ''
      row.inputVisible = false
      // 需要发送请求保存数据
      this.saveAttrVals(row)
    },

    async saveAttrVals(row) {
      // 需要发送请求保存数据
      const { data: res } = await this.$http.put(
        `categories/${this.cateId}/attributes/${row.attr_id}`,
        {
          attr_name: row.attr_name,
          attr_sel: row.attr_sel,
          attr_vals: row.attr_vals.join(' '),
        }
      )
      if (res.meta.status !== 200) return this.$message.error('修改参数项失败')
      this.$message.success('修改参数项成功')
    },
    //new tag 按钮的删除事件
    handleClose(i, row) {
      row.attr_vals.splice(i, 1)
      this.saveAttrVals(row)
    },
  },
  computed: {
    // 如果按钮需要被禁用，则返回true,否则返回false
    isBtnDisabled() {
      if (this.selectedCateKeys.length !== 3) {
        return true
      }
      return false
    },
    //获取所选分类的ID
    cateId() {
      if (this.selectedCateKeys.length === 3) {
        return this.selectedCateKeys[2]
      }
      return null
    },
    // 动态计算标题的文本
    titleText() {
      if (this.activeName === 'many') {
        return '动态参数'
      }
      return '静态属性'
    },
  },
}
</script>

<style lang="less" scoped>
.cat_opt {
  margin: 15px 0;
  font-size: 16px;
}
.el-tag {
  margin-right: 10px;
}
.el-table{
  margin-top: 25px;
}
.el-button {
  // margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.el-input {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
