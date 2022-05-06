<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-col :span="5">
        <el-button type="primary" @click="addDialogVisible = true"
          >添加用户</el-button
        >
      </el-col>

      <el-table :data="RolesList" border style="width: 100%" stripe>
        <!--展开列 -->
        <el-table-column type="expand">
          <template v-slot:default="slotExpand">
            <el-row
              :class="['bdbottom', index === 0 ? 'bdtop' : '', 'vcenter']"
              v-for="(item1, index) in slotExpand.row.children"
              :key="item1.id"
            >
              <!-- 渲染一级权限列表 -->
              <el-col :span="5">
                <el-tag
                  closable
                  @close="removeRightById(slotExpand.row, item1.id)"
                >
                  {{ item1.authName }}
                </el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二级和三级权限列表 -->
              <el-col :span="19">
                <el-row
                  :class="[index === 0 ? '' : 'bdtop', 'vcenter']"
                  v-for="(item2, index) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="8"
                    ><el-tag
                      closable
                      type="success"
                      @close="removeRightById(slotExpand.row, item2.id)"
                    >
                      {{ item2.authName }}
                    </el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="16">
                    <el-tag
                      type="warning"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                      @close="removeRightById(slotExpand.row, item3.id)"
                    >
                      {{ item3.authName }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column prop="level" label="操作" width="330">
          <template v-slot:default="slotRolesList">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(slotRolesList.row.id)"
              >编辑</el-button
            >

            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeUserById(slotRolesList.row.id)"
              >删除</el-button
            >

            <el-button
              type="warning"
              icon="el-icon-s-tools"
              size="mini"
              @click="showSetRightDialog(slotRolesList.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加用户的对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form
        :model="addFrom"
        :rules="addFromRules"
        ref="addFromRef"
        label-width="80px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addFrom.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addFrom.roleDesc"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑用户的对话框 -->
    <el-dialog
      title="编辑用户"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editDialogClosed"
      class="dialogEdit"
    >
      <el-form
        :model="editForm"
        :rules="addFromRules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editForm.roleName" disabled></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo(editForm.roleId)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 分配权限的对话框 -->
    <el-dialog
      title="分配权限"
      :visible.sync="setRightDialogVisible"
      width="50%"
      @close="setRightDialogClosed"
    >
      <el-tree
        default-expand-all
        node-key="id"
        show-checkbox
        :default-checked-keys="defKeys"
        :data="rightslist"
        :props="treeProps"
        ref="treeRef"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Roles',
  data() {
    return {
      //角色列表
      RolesList: [],
      //控制添加用户对话框的显示与隐藏
      addDialogVisible: false,

      //存储添加用户的表单数据
      addFrom: {
        roleName: '',
        roleDesc: '',
      },
      // 表单验证规则对象
      addFromRules: {
        // 验证用户名是否合法
        roleName: [
          { required: true, message: '请输入角色名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在3-6个字符', trigger: 'blur' },
        ],
        // 验证用户名是否合法
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 3, max: 19, message: '长度在3-9个字符', trigger: 'blur' },
        ],
      },
      // 控制修改用户对话框的显示与隐藏
      editDialogVisible: false,
      // 保存修改用户里获取的数据
      editForm: {},

      // 控制权限分配的对话框的显示与隐藏
      setRightDialogVisible: false,

      // 保存获取的权限数据
      rightslist: [],
      // 树形控件的属性绑定对象
      treeProps: {
        label: 'authName',
        children: 'children',
      },
      // 默认选中的id
      defKeys: [],
      //当前即将分配权限的角色的id
      roleId: '',
    }
  },
  created() {
    // 全部的角色列表
    this.getRolesList()
  },
  methods: {
    // 发送请求获取角色列表数据
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')

      if (res.meta.status !== 200)
        return this.$message.error('获取角色列表失败')
      this.RolesList = res.data
    },
    //权限管理删除的事件
    async removeRightById(role, id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).catch((err) => err) //如果用户点击取消，则运行
      //如果用户确认删除，则返回值为字符串confirm
      //如果用户取消了删除，则返回值为字符串cancel
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')
      //发送删除的请求
      const { data: res } = await this.$http.delete(
        `roles/${role.id}/rights/${id}`
      )
      if (res.meta.status !== 200) return this.$message.error('删除权限失败')
      this.$message.success('删除权限成功')
      //刷新权限列表,因为删除完了返回的是新的值，直接赋值
      role.children = res.data
    },

    // 监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFromRef.resetFields()
    },
    // 监听添加用户框的确定按钮的事件
    addUser() {
      this.$refs.addFromRef.validate(async (valid) => {
        if (!valid) return this.$message.error('表单填写错误，请重新输入')
        // 可以发起添加用户的网络请求
        const { data: res } = await this.$http.post('roles', this.addFrom)

        if (res.meta.status !== 201) return this.$message.error('添加用户失败')
        this.$message.success('添加用户成功')
        //关闭添加用户的对话框
        this.addDialogVisible = false
        // 重新获取用户列表刷新数据
        this.getRolesList()
      })
    },

    // 展示编辑用户的对话框,根据 ID 查询角色
    async showEditDialog(id) {
      const { data: res } = await this.$http.get(`roles/${id}`)
      if (res.meta.status !== 200)
        return this.$message.error('查询用户信息失败')
      this.editForm = res.data
      this.editDialogVisible = true
    },
    // 监听修改对话框的关闭事件
    editDialogClosed() {
      // resetFields方法element自带的方法
      this.$refs.editFormRef.resetFields()
    },
    // 监听修改对话框的确定按钮的事件
    editUserInfo(id) {
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return this.$message.error('表单填写错误,请稍后重试')
        // 可以发起添加用户的网络请求
        const { data: res } = await this.$http.put(
          `roles/${id}` + this.editForm,
          {
            roleName: this.editForm.roleName,
            roleDesc: this.editForm.roleDesc,
          }
        )
        if (res.meta.status !== 200)
          return this.$message.error('更新用户信息失败')
        this.$message.success('修改用户成功')
        //关闭添加用户的对话框
        this.editDialogVisible = false
        // 重新获取用户列表刷新数据
        this.getRolesList()
      })
    },

    // 点击删除触发的事件
    async removeUserById(id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).catch((err) => err) //如果用户点击取消，则运行
      //如果用户确认删除，则返回值为字符串confirm
      //如果用户取消了删除，则返回值为字符串cancel
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')
      //发送删除的请求
      const { data: res } = await this.$http.delete('roles/' + id)
      if (res.meta.status !== 200) return this.$message.error('删除用户失败')
      this.$message.success('删除用户成功')
      //刷新用户列表
      this.getRolesList()
    },
    //展示分配权限的对话框
    async showSetRightDialog(role) {
      this.roleId = role.id
      const { data: res } = await this.$http.get('rights/tree')
      if (res.meta.status !== 200)
        return this.$message.error('获取权限信息失败')
      // 把获取的权限数据保存到rightslist中
      this.rightslist = res.data

      //递归获取三级节点的id
      this.getLeafKeys(role, this.defKeys)
      this.setRightDialogVisible = true
    },

    //通过递归的形式，获取角色下所有的三级权限的id,并且保存到defKeys数组中
    getLeafKeys(node, arr) {
      //如果当前node节点不包含children属性，则是三级节点
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach((item) => {
        this.getLeafKeys(item, arr)
      })
    },
    //监听分配权限对话框的关闭事件
    setRightDialogClosed() {
      this.defKeys = []
    },
    // 点击为角色分配权限
    async allotRights() {
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys(),
      ]
      const idStr = keys.join(',')
      const { data: res } = await this.$http.post(
        `roles/${this.roleId}/rights`,
        { rids: idStr }
      )
      if (res.meta.status !== 200)
        return this.$message.error('分配角色权限失败')

      this.$message.success('分配角色权限成功')
      this.getRolesList()
      this.setRightDialogVisible = false
    },
  },
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 60px;
}
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
// 给编辑用户里内容不换行
.dialogEdit {
  .el-form-item {
    white-space: nowrap;
    .el-input {
      margin-left: 10px;
    }
  }
}
</style>
