<template>
  <div class="one">
    <el-card class="box-card">
      <p>我的第一个网页</p>
      <span>小米商城</span> <span>时间: 2021-07</span>
      <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
    </el-card>
    <el-card class="box-card">
      <p>我的第一个网页</p>
      <span>小米商城</span> <span>时间: 2021-07</span>
      <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
    </el-card>
    <el-card class="box-card">
      <p>我的第一个网页</p>
      <span>小米商城</span> <span>时间: 2021-07</span>
      <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
    </el-card>
    <el-card class="box-card">
      <p>我的第一个网页</p>
      <span>小米商城</span> <span>时间: 2021-07</span>
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
.one{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.box-card{
  width: 500px;
  
  margin: 50px;
}
</style>
