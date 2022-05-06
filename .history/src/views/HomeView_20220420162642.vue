<template>
  <div class="one">
    <el-card class="box-card">
      <span>小米商城</span>
      <p>我的第一个网页</p>
      <span>时间: 2021-07</span>
      <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
    </el-card>
    <el-card class="box-card">
      <span>客服助手</span>
      <p>我的第二个网页</p>
      <span>时间: 2021-08</span>
      <p>利用了HTML和Css</p>
    </el-card>
    <el-card class="box-card">
      <span>后台管理系统</span>
      <p>我的第三个网页</p>
      <span>时间: 2022-02</span>
      <p>利用了HTML和Css,javaScript,vue-cil框架,Vue-router、Element-UI、Axios</p>
      <p>在这里学会了用Ele</p>
    </el-card>
    <el-card class="box-card">
      <span>芝麻微客官网</span>
      <p>我的第四个个网页</p>
      <span>时间: 2022-04</span>
      <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
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
</style>
