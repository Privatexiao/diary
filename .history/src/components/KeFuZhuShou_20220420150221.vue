<template>
  <div class="body">
    <div class="head">
      <div class="head_left">
        <img src="../assets/img/kfzsimg/kfxt.png" />
        <span><a href="javaScript:">芝麻客服</a></span>
      </div>
      <div class="head_center">
        <ul>
          <li class="active">
            <a href="javaScript:">客服系统</a
            ><img src="../assets/img/kfzsimg/xhx.png" />
          </li>
          <li><a href="javaScript:">公众号助手</a></li>
          <li><a href="javaScript:">AI机器人</a></li>
          <li><a href="javaScript:">企业微信</a></li>
          <li><a href="javaScript:">工单</a></li>
          <li><a href="javaScript:">价格</a></li>
          <li><a href="javaScript:">帮助文档</a></li>
        </ul>
      </div>
      <div class="head_right">
        <span
          >17720588029
          <div class="head_right_sjx"></div
        ></span>
        <span><a href="javaScript:">客服消息</a></span>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
/* 全局配置 */
a{
    color: rgb(34, 34, 34);
    text-decoration: none;
}
ul,ol{
    list-style: none;
}
em{
    font-style: normal;
}
*{
    margin: 0;
    padding: 0;
}
.body{
    min-width: 1530px;
    width: 1530px;
    height: 1500px;
}

/* 状态栏 */
.body .head{
    width: 100%;
    height: 57px;
    background-color: #7f8fef;
}
/* 芝麻客服 */
.head .head_left a{
    margin-right: 60px;
    line-height: 57px;
    font-size: 18px;
    float: left;
    color: white;
}
/* 芝麻客服图片 */
.head .head_left img{
    position: relative;
    top: 14px;
    left: -10px;
    float: left;
    margin-left:60px;
    
}
/* 客服系统 */
.head .head_center .active a{
    color: white;
}
/* 客服系统下划线 */
.head .head_center .active img{
    position: absolute;
    width: 45px;
    top: 22px;
    left: 265px;
}
/* 客服系统状态栏 */
.head .head_center a{
    color: #d2dcfa;
    font-size: 16px;
    float: left;
    line-height: 57px;
    margin: 0 35px;
}
.head .head_right{
    margin-right: 50px;
}

/* 账号数字 */
.head .head_right span,a{
    font-size: 15px;
    float: right;
    font-size: 13px;
    line-height: 57px;
    color: white;
    margin-right: 8px;
}

/* 客服消息 */
.head .head_right span a{
    letter-spacing: 1px;
    line-height: normal;
    font-size: 13px;
    margin-top: 12px;
    padding: 6px 9px;
    border-radius: 3px;
    border: 1px solid white;
}
/* 账号右边三角形 */
.head .head_right span .head_right_sjx{
    position:relative;
    width: 0;
    top: -30px;
    right: -87px;
    border: 6px solid transparent;
    border-bottom: none;
    border-top-color: rgb(255, 255, 255);
    cursor: pointer;
}
.head a:hover{
    color: white;
}

/* 二级状态栏 */
.navbar{
    height: 55px;
    width: 100%;
    float: left;
    margin-left: 30px;
}

.navbar ul a{
    line-height: normal;
    color: black;
    float: left;
    margin: 12px;
    border-radius: 30px;
}
.navbar ul .navbar_img1 a{
    padding: 5px 18px;
    color: #829cff;
    border: 1px solid #829cff;
}
.navbar ul .navbar_img2 a{
    padding: 7px 13px;
    background-color: #8eb4ff;
    color: white;
}
.navbar ul .navbar_img3 a{
    padding: 7px 13px;
    color: black;
    background-color: #f2f4f5;
}
.navbar ul .navbar_img1 img,.navbar_img3 img{
    width: 14px;
    height: 14px;
    position: relative;
    top: -2px;
    margin-right: 8px;
}
.navbar ul .navbar_right a{
    margin-right: 65px;
    float: right;
    padding: 5px 18px;
    color: #829cff;
    border: 1px solid #829cff;
}
.navbar ul .navbar_right img{
    margin-left: 5px;
}


/* 左边竖目录 */
.left_body{
    float: left;
    width: 175px;
    height: 1080px;
    background-color: #ffffff;
    position: relative;
    font-size: 13px;
}
.left_body ul li{
    margin: 20px 0;
    text-align: left;
    position: relative;
    left: 70px;
}
.left_body ul li span{
    position: relative;
    top: 6px;
}
.left_body ul li .left_body_imgleft{
    position: relative;
    top: 5px;
    margin-right: 8px;
}
.left_body ul li .left_body_imgright{
    position: absolute;
    right: 20px;
    margin:10px 0;
}
.left_body ul li:hover{
    color: #7f8fef;
    cursor: pointer;
}

/* 客服管理弹出框 */
.left_body .left_body_show{
    height: 0;
    width: 260px;
    transition: height 0.3s;
    overflow: hidden;
    
}
.left_body .left_body_show li{
    position: relative;
    left: 0;
    margin: 0;
    text-align: left;
    padding: 5px 15px 20px 99px;
    height: 35px;
    width: 260px;
}
.left_body .left_body_show li span{
    line-height: 30px;
}

.left_body .left_body_show li:hover{
    background-color: #f6f5fa;
    border-right: 4px solid #7f8fef;
}
.left_body ul .abc:hover~.left_body_show,.left_body_show:hover{
    height: 300px;
}


/* 右边主体第一个标题栏 */
.body .right_body{
    height: 830px;
    width: 1270px;
    float: left;
    margin-left: 85px;
    background-color: #f5f5f5;
}
.right_body .right_body_ztl ul a{
    line-height: normal;
    color: black;
    float: left;
    margin: 12px;
    border-radius: 30px;
}
.right_body .right_body_ztl ul .right_body_ztlimg a{
    padding: 5px 10px;
    color: #829cff;
    border: 1px solid #829cff;
}
.right_body .right_body_ztl ul .right_body_ztlimg1 a{
    padding: 5px 8px;
    color: #a7a7a7;
    border: 1px solid #8f8f8f;
}
.right_body .right_body_ztl ul .right_body_ztlimg2 a{
    padding: 5px 18px;
    color: #ffffff;
    background-color: #829cff;
}
.right_body .right_body_ztl ul .right_body_ztlimg img{
    width: 14px;
    height: 14px;
    position: relative;
    top: -1.5px;
    margin-right: 7px;
}

/* AI推荐回复 */
.right_body .right_body_AI{
    height: 150px;
    width: 1220px;
    float: left;
    margin-left: 20px;
    background-color: #ffffff;
    position: relative;
    border: 1px solid #ebebeb;
}
.right_body .right_body_AI .right_body_AIbt{
    width: 200px;
    height: 50px;
    position: relative;
}
.right_body .right_body_AI .right_body_AIbt>p{
    font-weight: bold;
    color: black;
    float: left;
    font-size: 19px;
    padding: 5px;
    margin: 8px;
}
.right_body .right_body_AI .right_body_AIbt span{
    border-radius: 30px;
    background-color: #f9a755;
    padding: 3px 5px;
    float: left;
    font-size: 8px;
    position:absolute;
    top: 17px;
    left: 120px;
}
.right_body .right_body_AI .right_body_AInr img{
    position: absolute;
    top: 66px;
    left: 30px;
}
.right_body .right_body_AI .right_body_AInr{
    width: 1180px;
    height: 80px;
    padding: 15px 35px;
    margin: 1px 15px;
    font-size: 10px;
    background-color: #fffbe6;
    border: 1px solid #f9a755;
}
.right_body .right_body_AI .right_body_AInr>p{
    float: left;
}


/* 临时问答 */
.right_body_body{
    height: 600px;
    width: 1220px;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
}
.right_body_body .temporary{
    height: 47px;
    border-bottom: 1px solid #d8d8d8;
}
.right_body_body .temporary a{
    float: left;
    color: black;
    font-size: 18px;
    margin: 15px;
    line-height: normal;
}
/* 控制临时问答的颜色 */
.right_body_body .temporary p> a{
    color: #7f8fef;
    height: 33px;
    border-bottom: 3px solid #7f8fef;
}
/* 控制临时问答和永久问答的鼠标切换颜色 */
.right_body_body .temporary a:hover{
    color: #7f8fef;
    height: 33px;
    border-bottom: 3px solid #7f8fef;
}
/* 蓝色的提示文字 */
.right_body_body .temporary_warning{
    background-color: #e6f7ff;
    width: 1170px;
    height: 60px;
    border: 1px solid #8eb4ff;
    margin: 18px 18px;
}
/* 调整蓝色文字里面的蓝色感叹号位置 */
.right_body_body .temporary_warning img{
    margin-right: 5px;
    position: relative;
    top:5px;
}
/* 调整蓝色文字格式 */
.right_body_body .temporary_warning p{
    font-size: 10px;
    padding: 10px;
}
.right_body_body .temporary_warning p>span{
    color: #8eb4ff;
}
.right_body_body .temporary_warning p>em{
    color: red;
}


/* 搜索框和时间搜索框 */
.right_body_body .btn{
    width: 100%;
    height: 70px;
    margin: 0 18px;
    float: left;
    box-shadow: none;
}
.right_body_body .btn .btn1,.btn2{
    padding: 3px 10px;
    width: 210px;
    height: 35px;
    float: left;
    margin: 0 50px;
}
.right_body_body .btn .btn3,.btn4,.btn5{
    float: right;
    margin: 0 10px;
}
.right_body_body .btn .btn5{
    margin-right: 35px;
}
.right_body_body .btn .btn3{
    background-color: #7f8fef;
    border: 1px solid #c7c7c7;
    color: #ffffff;
    border-radius: 3px;
    padding: 3px 10px;
}
.right_body_body .btn .btn4,.btn5{
    background-color: #ffffff;
    border: 1px solid #c7c7c7;
    color: #c7c7c7;
    border-radius: 3px;
    padding: 3px 10px;
}
.right_body_body .btn:hover .btn3,.btn4,.btn5{
    cursor: pointer;
}


/* 问答 创建时间 到期时间 操作 */
.right_body_body .temp_footer{
    float: left;
    height: 50px;
    width: 1200px;
}
.right_body_body .temp_footer li{
    float: left;
}
.right_body_body .temp_footer ul{
    height: 40px;
    border-bottom: 1px solid #dddddd;
}
.right_body_body .temp_footer .center1,
.right_body_body .temp_footer .center2{
    margin-left: 360px;
}
.right_body_body .temp_footer .center3{
    margin: 0 20px 0 100px;
}


/* 问答内容 */
.right_body_body .temp_nrfootr_fo{
    float: left;
    height: 55px;
    width: 1200px;
    border-bottom: 1px solid #dddddd;
}
.right_body_body .temp_nrfooter_pone{
    float: left;
}
.right_body_body .temp_nrfooter_pone li{
    margin: 5px 50px;
    font-size: 12px;
}
.right_body_body .temp_nrfooter_ulone{
    width: 900px;
    float: left;
}
.right_body_body .temp_nrfooter_ulone li a{
    float: right;
    margin: 0 8px;
    font-size: 12px;
    color: #1890ff;
}
.right_body_body .temp_nrfooter_ulone .temp_nrfooter span{
    margin: 20px 45px 20px 30px;
    float:right;
    font-size: 12px;
}


/* 跳转导航条 */
.right_body_body .footer{
    float: right;
    height: 30px;
    width: 570px;
}
.right_body_body .footer input{
    width: 35px;
    height: 30px;
    border-radius: 0%;
    background-color: #ffffff;
    border: 1px solid #e7e7e7;
    margin:20px 2px;
    font-size: 12px;
    cursor: pointer;
    color: #888888;
}
.right_body_body .footer span{
    font-size: 12px;
}
.right_body_body .footer .spanbos{
    margin:20px 3px;
    width: 50px;
    border: 1px solid #e7e7e7;
    padding: 5.8px 5px;
}
.right_body_body .footer .acipt{
    background-color: #7f8fef;
    color: white;
}
</style>