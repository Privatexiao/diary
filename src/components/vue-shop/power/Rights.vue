<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <template>
        <!-- :data="tableData"这个的意思是数据源 -->
        <el-table :data="rightsList" border style="width: 100%" stripe>
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column prop="authName" label="权限名称"> </el-table-column>
          <el-table-column prop="path" label="路径"> </el-table-column>
          <el-table-column prop="level" label="权限等级">
            <template v-slot:default="slotLevel"> 
              <el-tag v-show="slotLevel.row.level === '0'">一级</el-tag>
              <el-tag v-show="slotLevel.row.level === '1'" type="success">二级</el-tag>
              <el-tag v-show="slotLevel.row.level === '2'" type="warning">三级</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rights',
  data() {
    return {
      // 权限列表
      rightsList: [],
    }
  },
  created() {
    // 获取所有的权限
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败')
      }
      this.rightsList = res.data
    },
  },
}
</script>

<style lang="less" scoped></style>
