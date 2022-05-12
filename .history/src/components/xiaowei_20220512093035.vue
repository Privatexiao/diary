<template>
  <div style="width: 100%">
    <!-- 标题栏 -->
    <nav class="flex_main nav_hei">
      <div class="flex_main">
        <img src="../assets/images/xiaoweiimg/logo.png" alt="" />
        <span class="nav_span">小微助手</span>
      </div>
      <div>
        <button class="nav_but1">登录/注册</button>
        <button class="nav_but2">免费下载</button>
      </div>
      <div class="nav_ddd"></div>
      <div class="nav_ddd"></div>
      <div class="nav_ddd"></div>
    </nav>
    <!-- 主体内容 -->
    <main class="main_m">
      <!-- 企微私域社群管家 -->
      <section class="housekeeper">
        <div class="housekeeper_s">
          <h1>企微私域社群管家</h1>
          <p>企微聊天聚合，企微群智能运营，自动加好友，多场景群发</p>
          <button>免费试用</button>
        </div>
      </section>
      <!-- 小微助手，助力企业实现企微私域社群自动化 -->
      <section class="xiaowei">
        <h1 class="disp_no">小微助手，助力企业实现企微私域社群自动化</h1>
        <p class="disp_no">
          取代人工操作，提升企业人效，开启智能化企微社群营销
        </p>
        <h1>助力企业实现企微私域社群自动化</h1>
        <div
          class="xiaowei_form"
          v-for="(item, index) in xiaoWeiForm"
          :key="index"
        >
          <div class="xiaoweis">
            <img
              :src="require('../assets/images/xiaoweiimg/' + item.img + '.png')"
              alt=""
            />
            <p>{{ item.p }}</p>
            <span>{{ item.span }}</span>
          </div>
        </div>
      </section>

      <!-- 多企微号聊天聚合 -->
      <div class="back_000">
        <section class="micro back_gray">
          <div class="micro_s micro_marginr">
            <h1>多企微号聊天聚合</h1>
            <div class="disp_no"></div>
            <p class="disp_no">
              支持跨企业，多员工账号消息聚合到一个页面，统一查看回复。支持配置多客服，系统自动分配不同客服。还支持和公众号客服、小程序客服、微信客服消息一起处理。
            </p>
            <p>
              支持跨企业，多员工账号消息聚合到一个页面，统一查看回复。支持配置多客服，系统自动分配不同客服。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img
            src="../assets/images/xiaoweiimg/kefuliaotianjiemian.c47f06ea.png"
            alt=""
          />
        </section>

        <!-- 智能社群运营管理 -->
        <section class="micro">
          <img
            class="disp_no"
            src="../assets/images/xiaoweiimg/guanjiancizidonglaqun-m.fbe4655e.png"
            alt=""
          />
          <div class="micro_s micro_marginl">
            <h1>智能社群运营管理</h1>
            <div class="disp_no"></div>
            <p class="disp_no">
              支持关键词自动拉群、标签拉群、新客户自动拉群等多种自动拉群模式，群内关键词自动回复，机器人24小时值守。群打卡，群积分，刺激群持续活跃。自动踢人，智能维护社群秩序。
            </p>
            <p class="disp_yes">
              支持关键词自动拉群、标签拉群、新客户自动拉群等多种自动拉群模式，群内关键词自动回复，机器人24小时值守。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img
            class="disp_yes"
            src="../assets/images/xiaoweiimg/guanjiancizidonglaqun-m.fbe4655e.png"
            alt=""
          />
        </section>
        <!-- 自动加好友，助力私域增长 -->
        <section class="micro back_gray">
          <div class="micro_s micro_marginr">
            <h1>自动加好友，助力私域增长</h1>
            <div class="disp_no"></div>
            <p class="disp_no">
              支持批量导入手机号自动加好友、自动加群好友、名片加好友、自动通过好友申请等功能，支持多企微号自动分配客户，可根据昵称关键词、企业名称关键词自动筛选。
            </p>
            <p class="disp_yes">
              批量导入手机号自动加好友、自动加群好友、名片加好友、自动通过好友申请等功能，支持多企微号自动分配客户。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img
            src="../assets/images/xiaoweiimg/xinjianpiliangjiahaoyou-m.f67c82a3.png"
            alt=""
          />
        </section>

        <!-- 多种群发工具，高效触达客户 -->
        <section class="micro">
          <img
            class="disp_no"
            src="../assets/images/xiaoweiimg/qunuqnfa-m.af089864.png"
            alt=""
          />
          <div class="micro_s micro_marginl">
            <h1>多种群发工具，高效触达客户</h1>
            <div class="disp_no"></div>
            <p class="disp_no">
              支持企微群不限次数群发，批量设置群公告、多群转发等多种群发功能，覆盖自动化营销，群直播，群授课等多种场景，高效触达用户，降低私域转化成本。
            </p>
            <p class="disp_yes">
              支持企微群不限次数群发，多群转发等多种群发功能，高效触达用户，降低私域转化成本。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img
            class="disp_yes"
            src="../assets/images/xiaoweiimg/qunuqnfa-m.af089864.png"
            alt=""
          />
        </section>
        <footer class="iph_s disp_yes">
          <button>免费试用</button>
        </footer>
      </div>
    </main>
    <!-- 底部 -->
    <footer>
      <!-- 注册账号领取7天免费试用 -->
      <section class="footer_7 disp_no">
        <p>注册账号领取7天免费试用</p>
        <button>立即下载</button>
        <button>免费试用</button>
      </section>
      <!-- 武汉芝麻小客服网络科技有限公司 鄂ICP备2022002398号-4 -->
      <section class="footer_icp disp_no">
        <p>武汉芝麻小客服网络科技有限公司 鄂ICP备2022002398号-4</p>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      xiaoWeiForm: [
        {
          img: 'qyff',
          p: '企微聊天分发',
          span: '多企微号消息聚合后统一处理，支持客服协同处理客户消息。',
        },
        {
          img: 'jqhy',
          p: '加群好友',
          span: '自动向群成员发送好友申请，根据昵称关键词、企业名称关键词加好友对象。',
        },
        {
          img: 'qyqqf',
          p: '企微群群发',
          span: '企微群自动群发，不限群发次数，支持定时自动群发，支持筛选企微群自动群发。',
        },
        {
          img: 'qywhs',
          p: '多企微号统一管理',
          span: '支持跨企业多号统一配置，实现一人管理多号，一键批量群发。',
        },
        {
          img: 'xkhlq',
          p: '新客户自动拉群',
          span: '新客户自动邀请进群，超过群上限自动建新群。支持根据条件拉不同群。',
        },
        {
          img: 'bqlq',
          p: '标签拉群',
          span: '根据企微标签自动邀请入群，超过群上限自动拉新群。多员工号批量设置。',
        },
        {
          img: 'gjczdhf',
          p: '关键词自动回复',
          span: '企微群聊机器人自动回复，群成员发送指定关键词自动触发。',
        },
        {
          img: 'gjczdlq',
          p: '关键词自动拉群',
          span: '客户发送指定关键词自动邀请入群，超过群上限自动建新群。',
        },
        {
          img: 'qdk',
          p: '群打卡',
          span: '企微群内关键词打卡，自动统计群成员活跃积分，积分兑换奖品，有效激活群聊。',
        },
        {
          img: 'pljhy',
          p: '批量加好友',
          span: '批量导入手机号自动发送好友申请，支持多员工平均分配手机号。',
        },
      ],
    }
  },
  mounted() {
    // 利用mounted生命周期函数，获取可以操作dom节点之后运行的函数，来获取浏览器的滑动条。
    window.addEventListener('scroll', this.handleScroll, true)
    window.addEventListener('scroll', this.windowWidth, true)

    // 清楚默认的html和body和app的min-width大小
    this.MinWidths()
  },
  methods: {
    // 获取浏览器的滑动条
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTops
let windowWidth = document.documentElement.clientWidth
      let micros = document.querySelectorAll('.micro')

if(windowWidth<600){
  
}
      if (scrollTop > 850) {
        let micro_s1 = micros[0].querySelector('.micro_s')
        let micro_img1 = micros[0].querySelector('img')
        micro_s1.classList.add('right')
        micro_img1.classList.add('left')
      }
      if (scrollTop > 1450) {
        let micro_s2 = micros[1].querySelector('.micro_s')
        let micro_img2 = micros[1].querySelector('img')
        micro_s2.classList.add('right')
        micro_img2.classList.add('left')
      }
      if (scrollTop > 2100) {
        let micro_s2 = micros[2].querySelector('.micro_s')
        let micro_img2 = micros[2].querySelector('img')
        micro_s2.classList.add('right')
        micro_img2.classList.add('left')
      }
      if (scrollTop > 2750) {
        let micro_s2 = micros[3].querySelector('.micro_s')
        let micro_img2 = micros[3].querySelector('img')
        micro_s2.classList.add('right')
        micro_img2.classList.add('left')
      }

      // 底部动态添加
      let footer_p = document.querySelector('.footer_7').querySelector('p')
      let footer_btn = document
        .querySelector('.footer_7')
        .querySelectorAll('button')
      if (scrollTop > 3360) {
        footer_p.classList.add('up')
        footer_btn[0].classList.add('up')
        footer_btn[1].classList.add('up')
      }
    },
    // 获取浏览器的宽度
    windowWidth() {
      let windowWidth = document.documentElement.clientWidth
      // 获取小微助的小图标，如果是移动端就删除最后一个图标，为了显示好看一点
      let xiaowei = document.querySelectorAll('.xiaowei_form')
      let elMenu = document.querySelector('.el-menu')

      if (windowWidth < 600) {
        xiaowei[9].classList.add('disp_no')
        elMenu.style.width = 100 + '%'
      } else {
        elMenu.style.width = ''
      }
    },
    MinWidths() {
      let Html = document.documentElement
      let Body = document.body
      let App = document.querySelector('#app')

      Html.style.minWidth = 100 + '%'
      Body.style.minWidth = 100 + '%'
      App.style.minWidth = 100 + '%'
    },
  },
}
</script>

<style scoped>
/* 动画效果 */
@keyframes down {
  0% {
    top: -300px;
    opacity: 0;
  }
  50% {
    top: 0;
    opacity: 0.5;
  }
  75% {
    top: -20px;
    opacity: 0.75;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@keyframes up {
  0% {
    top: 300px;
    opacity: 0;
  }
  50% {
    top: 0;
    opacity: 0.5;
  }
  75% {
    top: 20px;
    opacity: 0.75;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

@keyframes downs {
  0% {
    top: -100px;
    opacity: 0;
  }
  50% {
    top: 0;
    opacity: 0.5;
  }
  75% {
    top: -20px;
    opacity: 0.75;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@keyframes ups {
  0% {
    top: 100px;
    opacity: 0;
  }
  50% {
    top: 0;
    opacity: 0.5;
  }
  75% {
    top: 20px;
    opacity: 0.75;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@keyframes left {
  0% {
    left: 400px;
    opacity: 0;
  }
  50% {
    left: 0;
    opacity: 0.5;
  }
  75% {
    left: 20px;
    opacity: 0.75;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
@keyframes right {
  0% {
    right: 400px;
    opacity: 0;
  }
  50% {
    right: 0;
    opacity: 0.5;
  }
  75% {
    right: 20px;
    opacity: 0.75;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
/* 动态添加类 */
.up {
  animation: up 1s linear;
}
.right {
  animation: right 1s linear;
}
.left {
  animation: left 1s linear;
}

/* 给标题栏设置flex布局 */
.flex_main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 设置标签栏距顶部的距离 */
.nav_hei {
  width: 100%;
  height: 32px;
  padding: 15px 0;
  background: rgb(255, 255, 255);
  /* position: fixed; */
  position: absolute;
  /* top: 62px; */
  /* left: 0; */
  /* z-index: 999; */
}
.nav_ddd {
  display: none;
}
.disp_yes {
  display: none;
}
/* 设置小微助手 */
.nav_span {
  font-weight: 600;
  font-size: 24px;
  margin-left: 15px;
}
/* 登录注册 */
.nav_but1 {
  width: 98px;
  height: 32px;
  font-weight: 400;
  border: 1px solid rgb(36, 117, 252);
  background: rgb(255, 255, 255);
  color: rgb(87, 149, 253);
  font-size: 14px;
  margin-right: 12px;
}
/* 免费下载 */
.nav_but2 {
  border: none;
  font-weight: 400;
  background: rgb(36, 117, 252);
  color: rgb(255, 255, 255);
  width: 98px;
  height: 32px;
}

/* 企微私域社群管家 */
.housekeeper {
  background-image: url('../assets/images/xiaoweiimg/banner.ec52817d.png');
  background-size: 100% 100%;
  width: 100%;
  margin: auto;
  height: 470px;
  /* margin-top: 70px; */
}
.housekeeper_s {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  /* align-content: center; */
  padding-top: 7%;
  padding-left: 20%;
}
.housekeeper h1 {
  position: relative;
  margin: 0;
  font-size: 48px;
  color: rgb(255, 255, 255);
  animation: down 1s ease;
}
.housekeeper p {
  color: rgb(255, 255, 255);
  font-size: 18px;
  margin: 35px 0;
  position: relative;
  animation: down 1s ease;
}
/* 按钮 */
.housekeeper button {
  border: none;
  border-radius: 25px;
  width: 120px;
  height: 40px;
  background: rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  animation: down 1s ease;
}

/* 小微助手，助力企业实现企微私域社群自动化 */
.xiaowei {
  display: flex;
  padding: 10% 19%;
  flex-wrap: wrap;
  align-items: stretch;
}
/* 标题 */
.xiaowei > h1 {
  font-size: 31px;
  width: 100%;
  text-align: center;
  position: relative;
  animation: downs 1s linear;
}
/* 小标题 */
.xiaowei > p {
  color: rgb(134, 134, 134);
  font-size: 23px;
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 5px;
  position: relative;
  animation: ups 1s linear;
}
/* 整个内容的div */
.xiaowei_form {
  width: 228.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
/* 每个div的样式 */
.xiaoweis {
  text-align: center;
  margin-bottom: 80px;
}
.xiaoweis p {
  font-size: 19px;
  position: relative;
  animation: downs 1s linear;
}
.xiaoweis span {
  display: block;
  width: 158px;
  word-wrap: normal;
  text-align: left;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 20px;
  color: rgb(97, 95, 95);
  position: relative;
  animation: ups 1s linear;
}

/* 多企微号聊天聚合 */
.micro {
  width: 100%;
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 左边文字区域 */
.micro_s {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
}
.micro_marginr {
  margin-right: 10%;
}
.micro_marginl {
  margin-left: 10%;
}
/* 标题 */
.micro_s h1 {
  width: 100%;
  font-weight: 400;
}
/* 下划线 */
.micro_s div {
  width: 40px;
  height: 2px;
  background: blue;
}
/* 描述 */
.micro_s p {
  width: 440px;
  word-break: normal;
  font-size: 14px;
  color: rgb(102, 102, 102);
}
/* 按钮 */
.micro_s button {
  width: 120px;
  height: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(36, 117, 252);
  border-radius: 5px;
  color: rgb(36, 117, 252);
  font-size: 15px;
}
/* 右边图片 */
.micro img {
  width: 670px;
  position: relative;
}
/* 背景颜色灰色 */
.back_gray {
  background: rgb(247, 249, 250);
}

/* 底部 */
.footer_7 {
  background-image: url('../assets/images/xiaoweiimg/bg.4943cca2.png');
  width: 100%;
  height: 110px;
  text-align: center;
  padding: 40px 0 100px 0;
}
.footer_7 p {
  font-size: 35px;
  font-weight: 600;
  color: #ffffff;
  position: relative;
  /* animation: up 1s linear; */
}
.footer_7 button {
  background: transparent;
  border: 1px solid #ffffff;
  width: 120px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  color: #ffffff;
  position: relative;
  /* animation: up 1s linear; */
}
.footer_icp {
  text-align: center;
  background: rgb(97, 95, 95);
}
.footer_icp p {
  margin: 0;
  padding: 16px 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.384);
}

@media screen and (max-width: 768px) {
  .disp_yes {
    display: block;
  }
  .flex_main {
    justify-content: center;
  }
  /* 移动端状态栏的三个点 */
  .nav_ddd {
    display: block;
    width: 5px;
    height: 5px;
    background: #000000;
    border-radius: 50%;
    margin-left: 5px;
    position: relative;
    left: 90px;
  }
  .nav_hei > div > img {
    display: none;
  }
  .nav_but1 {
    display: none;
  }
  .nav_but2 {
    display: none;
  }
  /* 不知道是不是其他样式的影响，这个地方只能这样设置了，
  不然宽度不受控制，我在一个干净的vue项目里面是不需要加这个的 */
  main {
    width: 100%;
  }
  .main_m {
    background: rgb(245, 245, 245);
    padding-top: 5px;
  }
  /* 企微私域社群管家 */
  .housekeeper {
    background-image: url('../assets/images/xiaoweiimg/banner.m.png');
    height: 195px;
    border-radius: 10px;
    width: 96%;
    margin-left: 2%;
    margin-top: 70px;
  }
  .housekeeper_s {
    padding: 7% 0 0 4%;
  }
  .housekeeper h1 {
    font-size: 20px;
  }
  .housekeeper p {
    font-size: 13px;
    width: 195px;
    margin: 15px 0;
  }
  /* 按钮 */
  .housekeeper button {
    width: 70px;
    height: 25px;
    font-size: 8px;
    color: rgb(51, 57, 235);
  }

  /* 小微助手，助力企业实现企微私域社群自动化 */
  .disp_no {
    display: none;
  }
  .xiaowei {
    background: #ffffff;
    border-radius: 10px;
    width: 92%;
    margin: 2%;
    padding: 10% 2%;
    justify-content: center;
  }
  /* 标题 */
  .xiaowei > h1 {
    font-size: 19px;
  }
  /* 整个内容的div */
  .xiaowei_form {
    width: 30%;
    margin: 5px;
  }
  /* 每个div的样式 */
  .xiaoweis {
    margin: 5px;
  }
  .xiaoweis img {
    width: 45px;
  }
  .xiaoweis p {
    margin-top: 2px;
    font-size: 14px;
  }
  .xiaoweis span {
    display: none;
  }
  /* 多企微号聊天聚合 */
  /* 背景颜色 */
  .back_000 {
    background: #ffffff;
    border-radius: 10px;
    width: 92%;
    margin: 2%;
    padding: 10% 2%;
  }
  .micro {
    width: 100%;
    height: 670px;
    flex-direction: column;
  }
  /* 左边文字区域 */
  .micro_s {
    justify-content: center;
  }
  .micro_marginr {
    margin-right: 0;
  }
  .micro_marginl {
    margin-left: 0;
  }
  /* 标题 */
  .micro_s h1 {
    text-align: center;
  }
  /* 描述 */
  .micro_s p {
    width: 300px;
    word-break: normal;
    font-size: 14px;
    color: rgb(102, 102, 102);
  }
  /* 右边图片 */
  .micro img {
    width: 100%;
  }
  /* 底部 */
  .iph_s {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
  }
  .iph_s button {
    background: rgb(36, 117, 252);
    border: transparent;
    border-radius: 8px;
    width: 90%;
    height: 50px;
    color: #ffffff;
    font-size: 18px;
  }
}
</style>
