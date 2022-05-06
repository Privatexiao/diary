<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <ZMWK />
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import ZMWK from './components/vue-zmwk.vue'

export default {
  name: 'App',
  components: {
    ZMWK,
  },
}
</script>

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
.el-tabs__content {
  padding: 0<!DOCTYPE html>
  <html lang='en'>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script type="text/javascript" src="../../vue.js"></script>
  </head>
  
  <body>
    <div id="root">
  
    </div>
  
    <script type="text/javascript">
    Vue.config.productionTip = false;
  
      const vm = new Vue({
        el : '#root',
        data : { 
  
              },
        methods : { 
  
              },
        computed : {
  
              }
      });
    </script>
  </body>
  
  </html>;
}
</style>
