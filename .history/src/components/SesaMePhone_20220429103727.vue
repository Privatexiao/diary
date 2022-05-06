<template>
  <div class="global">
    <header class="header">
      <img src="../assets/images/SesaMeimg/logo.png" alt="" />
      <span>芝麻小客服</span>
    </header>
    <main>
      <!-- 模板消息群发start -->
      <section class="section_head">
        <p class="section_head_p1">模板消息群发</p>
        <p class="section_head_p2">
          不占用公众号群发次数，支持按标签/openID/关注来源/关注时间进行精准推送
        </p>
        <button>免费接入</button>
      </section>
      <section class="section_Rectangle">
        <div>
          <p><b>5</b>种</p>
          <span>支持发送速度</span>
        </div>
        <div class="section_Rectangle701"></div>
        <div>
          <p><b class="section_Rectangle_b">1000</b>万+</p>
          <span>每日稳定推送</span>
        </div>
        <div class="section_Rectangle702"></div>
        <div>
          <p><b>30</b>万+</p>
          <span>已接入公众号</span>
        </div>
        <div class="section_Rectangle_back"></div>
      </section>
      <!-- 模板消息群发end -->

      <!-- 自定义群发对象 -->
      <section
        :class="
          index % 2 !== 0 ? 'section_custom' : 'background_one section_custom'
        "
        v-for="(item, index) in sectionArr"
        :key="index"
      >
        <span>{{ sectionArr[index].span }}</span>
        <p>{{ sectionArr[index].p1 }}</p>
        <p>{{ sectionArr[index].p2 }}</p>
        <img
          :src="
            require('../assets/images/SesaMeimg/' +
              sectionArr[index].img +
              '.png')
          "
          alt=""
        />
      </section>
      <!-- 功能效果 -->
      <section class="section_frame">
        <h3>功能效果</h3>
        <div class="section_frame_back" v-show="1 === isFrame">
          <h4>会员消息通知</h4>
          <p class="section_frame_green">您好，您已成功消费</p>
          <div>
            <p class="section_frame_gray">
              商品名:<span class="section_frame_red">芝麻小商店</span>
            </p>
            <p class="section_frame_gray">
              消费会员卡卡号:<span class="section_frame_red">3858940489</span>
            </p>
            <p class="section_frame_gray">
              消费时间:<span class="section_frame_red">2022-12-12 12:00</span>
            </p>
          </div>
          <p class="section_frame_opt">
            您可以回复文字或者语音对该商品进行评价哦~
          </p>
          <div class="section_frame_span"><span>查看详细</span><i>></i></div>
        </div>

        <!-- 月度账号提醒 -->
        <div class="section_frame_back" v-show="2 === isFrame">
          <h4>月度账号提醒</h4>
          <p class="section_frame_green" style="color: #00000075">
            尊敬的用户，您上月的账号详情如下
          </p>
          <div>
            <p class="section_frame_gray">
              关联号码:<span class="section_frame_red" style="color: #000000"
                >17789090909</span
              >
            </p>
            <p class="section_frame_gray">
              出账月份:<span class="section_frame_red" style="color: #000000"
                >2022-03</span
              >
            </p>
            <p class="section_frame_gray">
              备注:<span class="section_frame_red" style="color: #fa9d3b"
                >本期消费合集40元，较上期上升10元</span
              >
            </p>
          </div>
          <div class="section_frame_span" style="top: 50px">
            <span>查看详细</span><i>></i>
          </div>
        </div>

        <!-- 签收通知 -->
        <div class="section_frame_back" v-show="3 == isFrame">
          <h4>签收通知</h4>
          <p class="section_frame_gray" style="color: #00000075">1月16日</p>
          <p
            class="section_frame_green"
            style="margin-bottom: 3px; margin-top: 18px"
          >
            订单已签收
          </p>
          <div>
            <p class="section_frame_gray">您已签收来自广州的快件</p>
            <p class="section_frame_gray">
              签收时间:<span class="section_frame_red" style="color: #438ad9"
                >2022年01月12日</span
              >
            </p>
            <p class="section_frame_gray">
              快递单号:<span class="section_frame_red" style="color: #438ad9"
                >45678904567850</span
              >
            </p>
          </div>

          <div class="section_frame_span"><span>安心快递</span><i>></i></div>
        </div>
      </section>
      <div class="Rectangle101" ref="Rectangle101">
        <div class="Rectangle101_1" @click="showFrame(2, $event)"></div>
        <div class="Rectangle101_2" @click="showFrame(1, $event)"></div>
        <div class="Rectangle101_3" @click="showFrame(3, $event)"></div>
      </div>

      <!-- 功能亮点 -->
      <section class="section_frame">
        <h3>功能亮点</h3>
        <div
          class="Bright_spot"
          v-for="(item, index) in BrightSpot"
          :key="index"
        >
          <img
            :src="require('../assets/images/SesaMeimg/' + item.img + '.png')"
            alt=""
          />
          <p>{{ item.p }}</p>
          <span>
            {{ item.span }}
          </span>
        </div>
      </section>
      <!-- 常见问题 -->
      <section class="section_frame bottom_90">
        <h3>常见问题</h3>
        <div class="Bugs" v-for="(item, index) in Bugs" :key="index">
          <p>{{ item.p }}</p>
          <span>
            {{ item.span }}
          </span>
        </div>
      </section>
    </main>
    <footer>
      <section class="bottom_of">
        <!-- 产品 -->
        <div class="product">
          <p>产品</p>
          <span>
            公司简介：芝麻小事网络科技（武汉）有限公司成立于2016年8月，主营业务为小程序公众号H5智能客服系统，公众号助手，自成立以来，在全国服务过20多万家企业，获得过多次好评</span
          >
        </div>
        <!-- 联系我们 -->
        <div class="contact">
          <h3>联系我们</h3>
          <p>企业官网：<i>https://xiaokefu.com.cn</i></p>
          <p>公司地址：<i>湖北省武汉市洪山区光谷时代广场A座2107</i></p>
          <p>客服电话：<i>027-87591366</i></p>
          <span>关注芝麻服务号接收客服最新消息</span>
          <img
            src="../assets/images/SesaMeimg/4efd2ca2-f916-4bb3-95c9-e3189e299145__d3312b9634d45826e005be910ffa2c27 1.png"
            alt=""
          />
        </div>
        <div class="the_end">
          <p>
            芝麻小事网络科技（武汉）有限公司 鄂ICP备16019105号-8 鄂公网安备
            42011102001542号
          </p>
          <button>联系客服，免费接入</button>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SesaMePhone',
  data() {
    return {
      sectionArr: [
        {
          span: '自定义群发对象',
          p1: '单个任务群发人数可达10万',
          p2: '支持选择标签、排除标签；支持选择关注来源、关注时间',
          img: 'image 7',
        },
        {
          span: '自定义模板跳转类型',
          p1: '支持网页跳转，并对网页点击量进行实时统计',
          p2: '支持小程序跳转，支持不跳转',
          img: 'image 12',
        },
        {
          span: '多种群发速度自由选择',
          p1: '5种群发速度自由切换，最高可达60万条/小时',
          p2: '群发时间支持立即群发、定时群发或者循环群发',
          img: 'image 17',
        },
        {
          span: '模板实时预览，发送数据实时统计',
          p1: '任务创建成功后支持扫码直接预览',
          p2: '任务发送人数、成功人数实时统计，方便进行效果把控',
          img: 'image 21',
        },
      ],
      // 控制三个切换标签的
      isFrame: 1,

      BrightSpot: [
        {
          img: '路径',
          p: '支持多次群发，打破发文次数限制',
          span: '不占用微信正常的群发配额，突破服务号一个月发送4次的局限，能每天向粉丝发送一次或多次消息，把信息高频率传达给粉丝',
        },
        {
          img: '形状',
          p: '多维度设置，精细化运营推送',
          span: '根据标签、openID、关注来源、关注时间对粉丝进行定向推送，模板消息推送能简单明了的告诉粉丝要推送的内容，让粉丝查看更便捷，信息传递更直接',
        },
        {
          img: '路径2',
          p: '专属内容定制，跳转查看信息',
          span: '支持插入图文链接，超链接、小程序链接，针对不同的用户发送不同的内容，点击直达任意页面',
        },
        {
          img: '形状2',
          p: '多场景应用，唤醒沉睡用户',
          span: '活动、促销、培训课程、线上直播、活动奖品发放等，第一时间使用消息模板推送给粉丝，引导粉丝积极参与活动',
        },
      ],
      Bugs: [
        {
          p: '对比微信有哪些优势？',
          span: '突破微信推送的限制，次数不受限制，针对不同类型粉丝，实现精准推送，帮助公众号推送H5或小程序；如果推广微信小程序，则需要先与对应公众号进行关联',
        },
        {
          p: '模板消息每日推送数量有限制吗？',
          span: '如果您的公众号关注粉丝低于10万，默认每天可发送的上限为10万条（微信限制）；关注粉丝超过10万或满足微信内其他升级规则时，可发送数量将递增',
        },
        {
          p: '可以定向发给特定粉丝吗？',
          span: '可以按标签分组、按照openID、粉丝关注来源、粉丝取关时间进行发送',
        },
        {
          p: '使用芝麻小客服发送模板消息有哪些注意事项？',
          span: '请勿发送过于频繁，避免被用户投诉，微信临时禁用对应的模板，影响公众号功能使用',
        },
      ],
    }
  },
  mounted() {
    this.handWidth()
  },
  methods: {
    showFrame(index, e) {
      let Rectangle101s = this.$refs.Rectangle101.children
      // 默认点击开始前清空全部
      for (let i = 0; i < Rectangle101s.length; i++) {
        Rectangle101s[i].style.background = '#CCCCCC'
      }
      // e.target就是我们当前点击的那个元素
      this.isFrame = index
      e.target.style.background = '#2475FC'
    },

    // 获取浏览器的宽度
    handWidth() {
      let inWidth =
        document.documentElement.clientWidth || document.body.clientWidth
      let elMenu = document.getElementsByClassName('el-menu')[0]
      // 为了避免在别的组件响应，只有这个存在才赋值
      if (elMenu) {
        if (inWidth <= 380) {
          elMenu.style.width = '375'+'px'
          elMenu.style.padding = '0 17'
        } else {
          elMenu.style.display = '100'+'%'
        }
      }
    },
  },
}
</script>

<style scoped>
.global {
  width: 375px !important;
}
/* 状态栏 */
.header {
  display: flex;
  justify-content: flex-start;
}
.header > img {
  margin: 10px 8px 10px 16px;
  height: 24px;
  width: 24px;
}
.header > span {
  margin: 10px 0px;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}

/* 模板消息群发 */
.section_head {
  background-image: url('../assets/images/SesaMeimg/Group 1.png');
  height: 480px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
.section_head .section_head_p1 {
  height: 36px;
  width: 168px;
  font-family: PingFang SC;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 52px 0 0 0;
}
.section_head .section_head_p2 {
  height: 48px;
  width: 334px;
  opacity: 0.85;
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  text-align: center;
  margin: 8px;
}
.section_head > button {
  height: 38px;
  width: 112px;
  border: 0;
  border-radius: 43px;
  background: #ffffff;
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #3f44da;
}

/* Rectangle */
.section_Rectangle {
  height: 100px;
  width: 343px;
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  align-items: center;
  position: relative;
  top: -20px;
  left: 16px;
}

/* 中间的竖线 */
.section_Rectangle701 {
  position: absolute;
  width: 2px;
  height: 36px;
  left: 90px;
  top: 19px;
  border-radius: 17px;
  background: #f0f2f5;
}
/* 中间的竖线 */
.section_Rectangle702 {
  position: absolute;
  width: 2px;
  height: 36px;
  left: 210px;
  top: 19px;
  border-radius: 17px;
  background: #f0f2f5;
}
.section_Rectangle > div {
  margin: 18px 21px;
}
.section_Rectangle > div > span {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #666666;
}
.section_Rectangle > div > p {
  width: 72px;
  height: 20px;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0px;
  text-align: center;
  white-space: nowrap;
  color: rgb(139, 139, 139);
}
.section_Rectangle > div > p > b {
  color: #2475fc;
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 44px;
  text-align: center;
}
.section_Rectangle_b {
  margin-left: -7px;
}
/* section_Rectangle_back背景框 */
.section_Rectangle_back {
  position: absolute;
  top: 8px;
  left: -13px;
  width: 327px;
  height: 83px;
  background: #00034f;
  opacity: 0.05;
  border-radius: 8px;
  z-index: -999;
}

/* 中间内容的隔一个改变背景（利用动态class） */
.background_one {
  background-color: rgb(247, 249, 250);
}
/* 自定义群发对象 */

.section_custom {
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.section_custom > span {
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 8px;
}

.section_custom > p {
  margin: 0;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #666666;
}
.section_custom > img {
  margin: 22.98px;
}

/* 功能效果 */
.section_frame {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #eeeeee77;
}
/* 功能效果文字 */
.section_frame > h3 {
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
}
/* 功能效果背景 */
.section_frame_back {
  width: 320px;
  height: 266px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 0px 10px #9e9e9e69;
}
/* 会员消息通知 */
.section_frame_back > h4 {
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  padding-left: 17px;
  margin-bottom: 0px;
}
/* 您好，您已成功消费 */
.section_frame_green {
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #07c160;
  padding-left: 17px;
  margin-top: 5px;
}
/* 商品名，消费会员卡卡号，消费时间 */
.section_frame_gray {
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #666666;
  padding-left: 17px;
  margin: 9px 0;
}
/* 芝麻小商店， */
.section_frame_red {
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fa5151;
  padding-left: 17px;
}
/* 评价 */
.section_frame_opt {
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #999999;
  padding-left: 17px;
  margin-top: 7px;
}
/* 查看详情 */
.section_frame_span {
  position: relative;
  left: 20px;
  top: 16px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #00000015;
  padding: 10px 0;
}
.section_frame_span span {
  font-family: PingFang SC;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
}
.section_frame_span i {
  color: rgba(0, 0, 0, 0.3);
}

/* Rectangle101 */
/* 下面的切换按钮 */
.Rectangle101 {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #eeeeee77;
}
.Rectangle101 > div {
  margin: 0 3px;
}
.Rectangle101_1 {
  height: 6px;
  width: 20px;
  left: 178px;
  top: 2447px;
  border-radius: 16px;
  background: #cccccc;
}
.Rectangle101_2 {
  height: 6px;
  width: 20px;
  left: 150px;
  top: 2447px;
  border-radius: 16px;
  background: #2475fc;
}
.Rectangle101_3 {
  height: 6px;
  width: 20px;
  left: 150px;
  top: 2447px;
  border-radius: 16px;
  background: #cccccc;
}

/* Bright_spot功能亮点 */
.Bright_spot {
  padding: 40px 0;
  margin-bottom: 15px;
  background: #ffffff;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.Bright_spot > img {
  height: 36px;
  width: 36px;
  padding: 0 100px;
}
.Bright_spot > p {
  height: 24px;
  width: 240px;
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
}
.Bright_spot > span {
  height: 66px;
  width: 295px;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
}

/* 常见问题 */
.Bugs {
  padding: 15px 0;
  margin-bottom: 15px;
  background: #ffffff;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
}
.Bugs > p {
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  color: #2475fc;
  padding: 0 20px;
}
.Bugs > span {
  height: 88px;
  width: 295px;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  color: #999999;
  padding: 0 20px;
}

.bottom_90 {
  padding-bottom: 90px;
}
/* 底部 */

/* 产品 */
.bottom_of {
  background: #383b46;
  height: 650px;
}
.product {
  padding: 5px 25px 25px;
}
.product > p {
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffffff;
}
.product > span {
  color: #999999;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
}

/* 联系我们 */
.contact {
  border-top: 1px solid #ffffff25;
  padding: 10px 25px;
  border-bottom: 1px solid #ffffff25;
}
.contact > h3 {
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffffff;
}

.contact > p {
  color: #999999;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  margin: 7px 0;
}
.contact > p > i {
  color: #ffffffcb;
  font-family: PingFang SC;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
}
.contact > span {
  color: #999999;
}
.contact > img {
  margin: 10px 0 0;
}

/* the_end */
.the_end {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.the_end > p {
  font-family: PingFang SC;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #999999;
  padding: 10px 21px;
}
.the_end > button {
  height: 56px;
  width: 375px;
  border: 0;
  background: #2475fc;
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
}
</style>
