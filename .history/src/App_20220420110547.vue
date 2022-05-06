<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"
        ><router-link to="/">Home</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">项目</template>
        <el-menu-item index="2-1">
          <router-link to="/zmwk">芝麻微客官网</router-link>
        </el-menu-item>
        <el-menu-item index="2-2"
          ><router-link to="/Login">后台管理系统</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="JavaScript:;" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      scrollTop:true
    }
  }
  methods:{
    // 获取浏览器的滑动条
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTops
      if (scrollTop > 60) {
        this.scrollTop = true
      } else {
        this.scrollTop = false
      }
    },
  }
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

.el-menu-demo,
.el-menu {
  border: 0 !important;
}
.el-menu-item > a {
  color: aliceblue;
}
</style>
