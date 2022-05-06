<template>
  <div class="one">
    <p class="start">这是start</p>
    <div class="two">
      <el-card class="box-card">
        <span class="p">小米商城</span>
        <p>我的第一个网页</p>
        <span><span class="time">时间: </span>2021-07</span>
        <p>利用了HTML和Css,javaScript实现了一个轮播图</p>
        <p>
          这是第一次接触一个完整的静态网页，当初写起来有的还不会，还需要看别人教程来，问题还是很多的，
          里面的定位都是用浮动或者绝对定位了，导致在不同的地方会网页排版错误，不过还好
          当初还是爱写注释的，现在改了一部分的代码，利用了一下flex布局，把网页重新整了一下。
        </p>
      </el-card>
      <el-card class="box-card">
        <span class="p">客服助手</span>
        <p><span class="time">时间: </span>2021-08</p>
        <p>利用了HTML和Css</p>
        <span
          >这个是属于是加深印象的，总是要面对没有教程的，都是自己一步一步的写的，
          其实也就那几个步骤了的，这个页面是个什么布局，再写那个部分的，分开来就好理解了</span
        >
      </el-card>
      <el-card class="box-card">
        <span class="p">后台管理系统</span>
        <p>我的第一个有数据交互的网页</p>
        <span><span class="time">时间: </span>2022-02</span>
        <p>
          利用了HTML和Css,javaScript,vue-cil框架,Vue-router、Element-UI、Axios
        </p>
        <p>
          这个是一个前后端分离的，虽然后端数据是别人写好的，不过还是学习到了很多，如何发起请求，如何接收数据。在这里学会了用Element-UI按需引入来快速构建页面，学会了如何利用router实现跳转，简单的利用
          axios 设置请求，响应拦截对数据请求进行封装管理。
        </p>
      </el-card>
      <el-card class="box-card">
        <span class="p">芝麻微客官网</span>

        <p><span class="time">时间: </span>2022-04</p>
        <p>利用了HTML和Css,javaScript，vue-cil框架，</p>
        <span
          >这个加入了一些基本的动画，比如右侧的联系客服按钮点击会弹出来，
          关闭的话可以点弹出框的关闭按钮，或者点一下其他位置即可，利用js实现。
          当页面划动，监听页面的滑动来给状态栏动态的添加类，实现一个透明度的效果。
        </span>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeView',
}
</script>

<style scoped>
.one,.two {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.start {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 1px solid #000000;
}
.box-card {
  width: 600px;
  margin: 50px;
}
.p {
  font-weight: bold;
  font-size: 19px;
}
.time {
  font-weight: bold;
}
</style>
