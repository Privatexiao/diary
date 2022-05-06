<template>
  <div class="one">
    <el-card class="box-card">
      <span class="p">小米商城</span>
      <p>我的第一个网页</p>
      <span>时间: 2021-07</span>
      <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
      <p>这是第一次接触一个完整的静态网页，当初写起来问题还是很多的，
        里面的定位都是用浮动或者绝对定位了，导致在不同的地方会网页排版错误，不过还好
        当初还是爱写注释的，现在改了一部分的代码，利用了一下flex布局</p>
    </el-card>
    <el-card class="box-card">
      <span class="p">客服助手</span>
      <p>我的第二个网页</p>
      <span>时间: 2021-08</span>
      <p>利用了HTML和Css</p>
    </el-card>
    <el-card class="box-card">
      <span class="p">后台管理系统</span>
      <p>我的第三个网页</p>
      <span>时间: 2022-02</span>
      <p>利用了HTML和Css,javaScript,vue-cil框架,Vue-router、Element-UI、Axios</p>
      <p>这个是第一次在这里学会了用Element-UI按需引入来快速构建页面，学会了如何利用router实现跳转，简单的利用 axios 设置请求，响应拦截对数据请求进行封装管理</p>
    </el-card>
    <el-card class="box-card">
      <span class="p">芝麻微客官网</span>
      <p>我的第四个网页</p>
      <span>时间: 2022-04</span>
      <p>利用了HTML和Css,javaScript，vue-cil框架，</p>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeView',
}
</script>

<style scoped>
.one {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.box-card {
  width: 600px;
  margin: 50px;
}
.p{
  font-weight: bold;
}
</style>
