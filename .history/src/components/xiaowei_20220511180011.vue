<template>
  <div>
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

      <!-- class="nav_ddd"是移动端的东西在PC端隐藏， class="disp_no"是PC端的东西在移动端隐藏 -->

      <!-- 多企微号聊天聚合 -->
      <div class="back_000">
        <section class="micro back_gray">
          <div class="micro_s micro_marginr">
            <h1>多企微号聊天聚合</h1>
            <div class="disp_no"></div>
            <p class="disp_no">
              支持跨企业，多员工账号消息聚合到一个页面，统一查看回复。支持配置多客服，系统自动分配不同客服。还支持和公众号客服、小程序客服、微信客服消息一起处理。
            </p>
            <p class="nav_ddd">
              支持跨企业，多员工账号消息聚合到一个页面，统一查看回复。支持配置多客服，系统自动分配不同客服。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img src="../assets/images/xiaoweiimg/kefuliaotianjiemian.c47f06ea.png" alt="" />
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
            <p class="nav_ddd">
              支持关键词自动拉群、标签拉群、新客户自动拉群等多种自动拉群模式，群内关键词自动回复，机器人24小时值守。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img
            class="nav_ddd"
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
            <p class="nav_ddd">
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
            <p class="nav_ddd">
              支持企微群不限次数群发，多群转发等多种群发功能，高效触达用户，降低私域转化成本。
            </p>
            <button class="disp_no">免费试用</button>
          </div>
          <img
            class="nav_ddd"
            src="../assets/images/xiaoweiimg/qunuqnfa-m.af089864.png"
            alt=""
          />
        </section>
        <footer class="iph_s nav_ddd">
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
  },
  methods: {
    // 获取浏览器的滑动条
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTops

      let micros = document.querySelectorAll('.micro')

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
  },
}
</script>

