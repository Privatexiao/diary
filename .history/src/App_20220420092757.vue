<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <router-view />
  </div>
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
  min-width: 1700px;
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
