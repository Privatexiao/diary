<template>
  <div class="guide" @click="fixedShowBlur($event)">
    <!-- 联系客服在最右边固定 -->

    <p class="fixed-kf" @click.prevent.stop="fixedShow">
      <img src="../assets/images/kefu.png" alt="" /> 联系客服
    </p>
    <transition name="fixedShow" mode="out-in">
      <div class="fixed-show" v-show="isFixedShow">
        <div class="showX" @click="fixedShow">X</div>
        <div class="feature-flex">
          <img src="../assets/images/qrcode.jpg" alt="" />
        </div>
        <p>微信扫码咨询即可免费使用</p>
      </div>
    </transition>

    <!-- 标题栏 -->
    <div
      :class="{ 'content-Top': true, scrollTop: scrollTop }"
      ref="contentTop"
    >
      <div>
        <img class="Top-img1" src="../assets/images/logo.png" alt="" />
        <img class="Top-img2" src="../assets/images/top-btn.png" alt="" />
      </div>
      <div class="content-Top-Li">
        <li>
          <a
            href="javascript:;"
            :class="TopLiHr === index ? 'Top-Li-hr' : ' '"
            v-for="(item, index) in contentTopLi"
            :key="index"
            @click="getItem(index)"
            >{{ item }}</a
          >
          <!-- 点击事件传过去当前的index，在mounted里面拿到这个index赋值给TopLiHr，因为是动态class，只要相等样式就添加成功了 -->
        </li>
      </div>
      <div class="content-Top-right">
        <a href="">登录</a>
        <button>立即免费使用</button>
      </div>
    </div>
    <!-- 主体 -->
    <div class="header">
      <p class="header-p1 header-p1-top">公众号+企微私域营销管理双引擎</p>
      <p class="header-p1">免费的企微裂变获客私域流量运营工具</p>
      <p class="header-p2 header-p2-top">
        打通公众号和企微的客户数据，将公域流量转化为私域流量
      </p>
      <p class="header-p2">
        助力企业搭建私域流量池，提供全面专业的企业微信解决方案
      </p>
      <button class="header-button">立即免费使用</button>
    </div>
    <!-- 第一个 -->
    <div class="feature">
      <p class="feature-p1 feature-flex feature-p1-top">
        公众号+企微私域营销管理双引擎
      </p>
      <p class="feature-p1 feature-flex">让企业微信和公众号更好的联通</p>
      <p class="feature-p2 feature-flex header-p2-top">
        芝麻小客服团队共服务30万+公众号，5000+企业微信，累计服务粉丝数量6亿+
      </p>
      <p class="feature-p2 feature-flex">
        现倾力打造企微助手，支持企微和公众号数据互通，助力企业更精细化运营私域流量
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-flex feature-img">
        <img src="../assets/images/feature0.png" alt="" />
      </div>
    </div>
    <!-- 第二个 -->
    <div class="feature-twoimg">
      <p class="feature-p1 feature-flex feature-p1-top">
        搭建私域流量池，高效引流客户
      </p>
      <p class="feature-p2 feature-flex">
        客户通过渠道活码添加员工，自动打标签，实时统计引流情况，发送个性化的欢迎语，第一时间送上问候
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-flex feature-img">
        <img src="../assets/images/feature1.png" alt="" />
      </div>
    </div>
    <!-- 第三个 -->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">
        将企业公域流量通过引流裂变转化为私域流量
      </p>
      <p class="feature-p2 feature-flex">
        生成引流裂变海报，通过老用户奖励式分享拉新，实现用户指数级增长，加强用户联系
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-flex feature-img">
        <img src="../assets/images/feature2.png" alt="" />
      </div>
    </div>

    <!-- 第四个引流客户 -->
    <div class="feature-twoimg">
      <p class="feature-p1 feature-flex feature-p1-top">引流客户</p>
      <p class="feature-p2 feature-flex">
        客户通过引流方式添加员工，自动打标签，实时统计引流情况
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">企微渠道活码</p>
          <div class="feature3-pdiv"></div>
          <p>
            根据业务配置多个员工，并把这些员工二维码进行整合，统一生成一个支持投放的二维码，客户可扫渠道活码添加员工；支持自动打标签；添加员工的方式可以设置轮流和顺序添加；可设置员工周期上下线；可批量创建/修改/下载渠道活码；一次最多可发送10条欢迎语；实时统计引流情况；可订阅渠道活码添加通知，实时掌控客户添加数据
          </p>
        </div>
        <div>
          <img src="../assets/images/feature4.png" alt="" />
        </div>
      </div>

      <!-- 客户群活码 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature5.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">客户群活码</p>
          <div class="feature3-pdiv"></div>
          <p>
            根据业务配置多个群聊码，并把这些二维码进行整合，统一生成一个支持投放的二维码。可设置客户入群顺序；群码到期提醒；实际群码可随时变更，同时支持统计不同群聊的客户数据
          </p>
        </div>
      </div>

      <!--点单活码 -->
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">点单活码</p>
          <div class="feature3-pdiv"></div>
          <p>
            用户扫码点单，添加员工企业微信，推送点单链接，自动给客户打上标签，锁定门店客源流量，门店引流专用工具
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_0.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 第五个消息群发 -->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">消息群发</p>
      <p class="feature-p2 feature-flex">
        每个月可给每个客户和每个群聊推送30条消息，像公众号一样运营您的企微用户
      </p>
      <p class="feature-p2 feature-flex">
        粉丝标签和公众号数据打通，消息群发更精准
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">好友群发</p>
          <div class="feature3-pdiv"></div>
          <p>
            由成员在企业微信客户端确认发送给客户,可把通知、祝福、活动等消息批量发送给不同的客户，创建成功后，由成员发送给客户并进行后续的服务
          </p>
          <p>
            每天可给每个客户发送1条消息，同时支持周期提醒发送，让您像公众号一样运营企微客户
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_1.png" alt="" />
        </div>
      </div>

      <!-- 群群发 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature_2.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">群群发</p>
          <div class="feature3-pdiv"></div>
          <p>
            由群主在企业微信客户端确认发送给群聊。可把通知、祝福、活动等消息批量发送给不同的群聊，创建成功后，由群主选择发送给指定群聊并进行后续的服务。
          </p>
          <p>
            每个客户群每天可收到1条消息，同时支持周期提醒发送，让您像公众号一样运营企微客户群
          </p>
        </div>
      </div>

      <!--企微朋友圈 -->
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">企微朋友圈</p>
          <div class="feature3-pdiv"></div>
          <p>
            管理员可直接在微客后台为员工创建朋友圈，员工收到朋友圈新消息提醒后，可快捷将管理员创建的朋友圈发送出去
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_3.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 第六个风险管控 -->
    <div class="feature-twoimg">
      <p class="feature-p1 feature-flex feature-p1-top">风险管控</p>
      <p class="feature-p2 feature-flex">
        掌握员工和客户的聊天记录，可针对员工的处理状态做聊天质检，提升企业服务质量
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">会话存档</p>
          <div class="feature3-pdiv"></div>
          <p>
            消息存档功能对员工与客户的文字、图片、语音等聊天记录永久保存，且支持关键词搜索等筛选，一旦出现争议，可随时调取查看，保障企业和客户的利益
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_4.png" alt="" />
        </div>
      </div>

      <!-- 单聊质检 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature_5.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">单聊质检</p>
          <div class="feature3-pdiv"></div>
          <p>
            主要是监测单聊未及时回复客户消息的功能，掌握员工服务客户的进度，提升企业服务质量，适合所有企业使用，通过在后台设置质检规则
          </p>
          <p>
            如：客户发送的消息超过10分钟员工未回复时，将通知指定员工，提醒员工及时处理客户消息
          </p>
        </div>
      </div>

      <!--群聊质检 -->
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">群聊质检</p>
          <div class="feature3-pdiv"></div>
          <p>
            管理员可直接在微客后台为员工创建朋友圈，员工收到朋友圈新消息提醒主要是监测群聊未及时回复客户消息的功能，掌握员工服务客户的进度，提升企业服务质量，适合所有企业使用，通过在后台设置质检规则
          </p>
          <p>
            如：群内客户发送的消息超过10分钟员工未回复时，将通知指定员工，提醒员工及时处理客户消息
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_6.png" alt="" />
        </div>
      </div>
      <!-- 敏感词提醒 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature_5.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">敏感词提醒</p>
          <div class="feature3-pdiv"></div>
          <p>
            主要是监测员工复客户消息的内容，发送敏感词时发送通知给管理员，可防止企业客户外流和员工和客户之间的私下交易，保护企业资产不受损失，适合所有企业使用，通过在后台设置质检规则
          </p>
          <p>
            如：员工和客户聊天中涉及到“私聊”“红包”“电话号码”等敏感词时，发送提醒给指定员工
          </p>
        </div>
      </div>
    </div>

    <!-- 第七个企微工单 -->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">企微工单</p>
      <p class="feature-p2 feature-flex">
        企微工单系统用于记录，处理，跟踪一项工作的完成情况，是企业内部部门工作传达的系统，可提升跨部门高效协同效率，使进度管理透明化
      </p>
      <p class="feature-p2 feature-flex">
        粉丝标签和公众号数据打通，消息群发更精准
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">企微工单</p>
          <div class="feature3-pdiv"></div>
          <p>
            可通过企业微信侧边栏快速创建工单或邀请客户填写工单，支持在工单内查看员工和客户的会话记录，自定义工单流转流程，一键通知客户查看工单，群工单和单聊工单分开管理，可在工单侧边栏直接打开和客户或群聊的对话框
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_8.png" alt="" />
        </div>
      </div>

      <!-- 企微表单 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature_9.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">企微表单</p>
          <div class="feature3-pdiv"></div>
          <p>
            可通过企业微信侧边栏快速创建工单或邀请客户填写表单，记录客户资料，可根据客户填写的内容自动填充到客户资料备注中，可以设置表单填写题目逻辑自定义，可在员工内部共享流转，表单可对客户不可见，更加方便企业管理客户的CRM
          </p>
        </div>
      </div>
    </div>

    <!-- 第八个裂变活动 -->
    <div class="feature-twoimg">
      <p class="feature-p1 feature-flex feature-p1-top">裂变活动</p>
      <p class="feature-p2 feature-flex">
        实时将消息发送给客户，方便客户和客户群的
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">客户裂变</p>
          <div class="feature3-pdiv"></div>
          <p>
            企业邀请客户参与活动，客户完成任务并领取奖励。通过以旧带新的方式提高已有企业微信客户留存率以及企业微信客户的裂变增涨的工具
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_10.png" alt="" />
        </div>
      </div>

      <!-- 群裂变 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature_11.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">群裂变</p>
          <div class="feature3-pdiv"></div>
          <p>
            企业可邀请客户参与活动，客户关注公众号并添加员工后即完成任务，是一个通过以旧带新的方式提高公众号和企微内客户量增长的工具
          </p>
        </div>
      </div>

      <!-- 公众号裂变 -->
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">公众号裂变</p>
          <div class="feature3-pdiv"></div>
          <p>
            企业可邀请客户参与活动，客户关注公众号并添加员工后即完成任务，是一个通过以旧带新的方式提高公众号和企微内客户量增长的工具
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_12.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 第九个运营自动化-->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">运营自动化</p>
      <p class="feature-p2 feature-flex">
        置顶运营规则，自动将客户拉到群聊，自动在群众发送运营消息
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">自动化拉群</p>
          <div class="feature3-pdiv"></div>
          <p>
            通过不同的添加方式，可以将不同的客户拉到指定群聊中，减少人工操作，更加方便企业运营，支持自动拉500人大群
          </p>
        </div>
        <div>
          <img src="../assets/images/feature_13.png" alt="" />
        </div>
      </div>

      <!-- 群发推送 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature_14.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">群发推送</p>
          <div class="feature3-pdiv"></div>
          <p>
            设置规则，周期性在客户群内发送消息，支持自动发送运营内容到指定群内。此推送不收企微群发条数限制
          </p>
        </div>
      </div>
    </div>
    <!-- 多维度客户画像，客户SCRM管理，促进营销转化 -->
    <div class="feature-twoimg">
      <p class="feature-p1 feature-flex feature-p1-top">
        多维度客户画像，客户SCRM管理，促进营销转化
      </p>
      <p class="feature-p2 feature-flex">
        标准化客户管理、标签管理，洞察客户意向；客户流失给出提醒，员工删除客户给出预警，避免遗失重要客户
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">客户管理</p>
          <div class="feature3-pdiv"></div>
          <p>智能管理所有员工下的客户，洞察客户动态意向，方便及时跟踪客户</p>
          <p>给客户批量打标签，统一客户画像</p>
          <p>同步客户信息，对客户流失情况一目了然</p>
        </div>
        <div>
          <img src="../assets/images/feature001.png" alt="" />
        </div>
      </div>

      <!-- 客户流失提醒 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature002.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">客户流失提醒</p>
          <div class="feature3-pdiv"></div>
          <p>
            当企业成员被客户从微信联系人中删除时，会在客户流失列表中产生一条
            记录，管理员可以实时跟踪哪些客户流失了
          </p>
          <p>
            开启被删除通知后，被删除的成员会收到一条推送提醒，可设置需要额外
            提醒的员工
          </p>
          <p>在员工删除客户时，也会给出提示，避免企业出现重要客户流失</p>
        </div>
      </div>
    </div>
    <!-- 精细化社群运营，有效触达用户-->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">
        精细化社群运营，有效触达用户
      </p>
      <p class="feature-p2 feature-flex">
        自动拉群、标签建群、关键词建群、群SOP等标准化流程，有效触达客户
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">自动拉群</p>
          <div class="feature3-pdiv"></div>
          <p>
            新客户添加员工时，自动发送入群引导语、群活码，客户扫码入群，
            实现自动拉群效果
          </p>
          <p>可设置入群后自动打标签，设置后，将自动对入群新客户打上对应标签</p>
        </div>
        <div>
          <img src="../assets/images/feature003.png" alt="" />
        </div>
      </div>

      <!-- 标签建群 -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature007.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">标签建群</p>
          <div class="feature3-pdiv"></div>
          <p>
            添加标签建群规则，通过对部分标签客户发送入群引导语和群活码，
            引导客户扫码加入群聊
          </p>
          <p>
            标签建群规则是基于客户群发规则实现，同样遵循企业微信限制，
            客户每个月最多接收来自同一企业的管理员的 4 条群发消息
          </p>
        </div>
      </div>
      <!-- 群SOP -->
      <div class="feature-img feature-center">
        <div class="feature3-p">
          <p class="sizeP">群SOP</p>
          <div class="feature3-pdiv"></div>
          <p>
            管理员创建群SOP规则后，员工通过消息通知，在规定时间给规定
            群聊发送规定内容
          </p>
          <p>员工收到群SOP消息提醒后，点击前往「待完成」完成</p>
        </div>
        <div>
          <img src="../assets/images/feature008.png" alt="" />
        </div>
      </div>

      <!-- 朋友圈SOP -->

      <div class="feature-img feature-center">
        <div>
          <img src="../assets/images/feature009.png" alt="" />
        </div>
        <div class="feature3-p">
          <p class="sizeP">朋友圈SOP</p>
          <div class="feature3-pdiv"></div>
          <p>
            管理员创建朋友圈SOP规则后，员工通过消息通知，在规定时间给规
            定可见客户发送规定内容
          </p>
          <p>员工收到朋友圈SOP消息提醒后，点击前往「待完成」页面完成</p>
          <p>「待完成」页面点击发布进入群朋友圈详情页，点击右上角</p>
        </div>
      </div>
    </div>
    <!-- 全力打造企业微信公域到私域流量转化体系 -->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">
        全力打造企业微信公域到私域流量转化体系
      </p>
      <div class="feature-flex feature-hr"></div>
      <div class="conversion-system">
        <div class="conversion">
          <div class="feature-flex">
            <img src="../assets/images/feature10.png" alt="" />
          </div>
          <p>客户画像</p>
          <p class="sizeP_p">
            给用户打标签，描绘客户完整 画像。便于追踪和维护客户
          </p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature11.png" alt="" />
          <p>好友欢迎语</p>
          <p class="sizeP_p">个性化好友欢迎语，给客户 留下好的第一印象</p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature12.png" alt="" />
          <p>渠道活码</p>
          <p class="sizeP_p">
            创建带参数的客服码进行分流，实 时统计客户数据，实现推广引流
          </p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature13.png" alt="" />
          <p>客户群发</p>
          <p class="sizeP_p">
            通知、祝福、活动等消息批量发送 给不同的客户，实现客户转化
          </p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature14.png" alt="" />
          <p>会话存档</p>
          <p class="sizeP_p">合规记录会话内容，高效管理 企业内控，安全有保障</p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature15.png" alt="" />
          <p>社群运营</p>
          <p class="sizeP_p">
            自动拉群、标签建群、关键词建群、 群SOP等标准化流程，有效触达客户
          </p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature16.png" alt="" />
          <p>快捷回复</p>
          <p class="sizeP_p">支持添加各种企业话术，一键发送快速回复客户</p>
        </div>
        <div class="conversion">
          <img src="../assets/images/feature17.png" alt="" />
          <p>裂变引流</p>
          <p class="sizeP_p">
            添加活动，将员工活码放在海报中， 将公域流量转化为私域流量
          </p>
        </div>
      </div>
    </div>

    <!-- 他们都在使用芝麻的服务 -->
    <div>
      <p class="feature-p1 feature-flex feature-p1-top">
        他们都在使用芝麻的服务
      </p>
      <div class="feature-flex feature-hr"></div>

      <div class="service">
        <div v-for="(item, index) in 30" :key="index" class="service_ser">
          <img src="../assets/images/1.png" alt="" />
          <p>MISTINE</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>
        <p class="footer_p1">整合客户线索池，将公域流量转化为私域流量</p>
        <p class="footer_p2">助力每一个企业实现客户裂变、营销增长</p>
      </div>
      <div class="footer_img">
        <img src="../assets/images/logo2.png" alt="" />
        <button>立即免费使用</button>
      </div>
    </div>

    <div class="bottom">
      <div>
        <p class="bottom_p1">产品</p>
        <p>小程序客服系统</p>
        <p>公众号运营助手</p>
      </div>
      <div>
        <p class="bottom_p1">联系我们</p>
        <p>客服微信：zhimaxkf</p>
      </div>
      <div class="bottom_img">
        <img src="../assets/images/qrcode.jpg" alt="" />
        <p>请添加客服企业微信 快速体验系统功能</p>
      </div>
    </div>
    <div class="onnnnnnnnnnne">
      Copyright © 2021, 芝麻小事网络科技（武汉）有限公司 鄂ICP备19019997号-3
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      // 控制这个类的显示与隐藏
      scrollTop: false,
      // 控制客服服务的弹出框的显示与隐藏
      isFixedShow: false,
      // 这个是标题栏的li的数据
      contentTopLi: ['首页', '公众号助手', '客服系统', '帮助文档', '定价'],
      TopLiHr: 0, // 0为默认选择第一个，-1为不选择
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
      if (scrollTop > 60) {
        this.scrollTop = true
      } else {
        this.scrollTop = false
      }
      //利用ref获取状态栏，然后浏览器往下划了，就重新给top赋值
      if(this.$refs.contentTop){
      if (scrollTop > 10) {
        this.$refs.contentTop.style.top = '0' + 'px'
      } else {
        this.$refs.contentTop.style.top = '60' + 'px'
      }
      }
    },
    // 点击客服服务弹 弹出框
    fixedShow() {
      this.isFixedShow = !this.isFixedShow
    },
    //点击弹出框的其他区域就会关闭弹出框，这个地方需要给弹出框加阻止默认行为prevent和阻止冒泡stop
    fixedShowBlur(event) {
      let fixedShow = document.querySelector('.fixed-show')
      if (fixedShow) {
        if (!fixedShow.contains(event.target)) {
          this.isFixedShow = false
        }
      }
    },
    // 拿到传过来的index，赋值
    getItem(index) {
      this.TopLiHr = index //把当前点击元素的index，赋值给TopLiHr
    },
  },
}
</script>

<style type="text/css" scoped>
/* .guide{

} */

/* 对文字设置较小的宽度，以达到一排只能排下一个文字，
这样文字就自动换行，实现垂直竖列排版。 */

/* 设置联系客服固定右边 */
.fixed-kf {
  position: fixed;
  right: 0;
  top: 450px;
  width: 20px;
  word-wrap: break-word;
  background-color: rgb(56, 130, 244);
  padding: 15px 11px;
  color: aliceblue;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}

.fixed-kf:hover {
  background-color: rgb(77, 144, 245);
}
/* 联系客服弹出框右上角的关闭按钮 */
.showX {
  display: flex;
  justify-content: flex-end;
  margin: 15px 30px 0 0;
  cursor: pointer;
}

/* 联系客服弹出框 */
.fixed-show {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  z-index: 999;
  background-color: aliceblue;
  width: 300px;
  height: 340px;
  border-radius: 2%;
}
.fixed-show img {
  width: 230px;
  height: 230px;
  margin-top: 15px;
  overflow: hidden;
}
.fixed-show p {
  font-size: 14px;
  text-align: center;
}

.fixedShow-enter,
.fixedShow-leave-to {
  top: -20%;
  width: 20px;
  height: 20px;
  opacity: 0;
  transform: translateX(900px);
}

.fixedShow-enter-active,
.fixedShow-leave-active {
  transition: all 0.5s ease;
}

/* 标题栏 */
.content-Top {
  background-color: rgb(0, 96, 241);
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1420px;
  padding: 0 280px;
  box-sizing: border-box;
  position: fixed;
  top: 60px;
  left: 0;
}

.scrollTop {
  background: rgba(0, 96, 241, 0.9);
}

/* 芝麻微客图片 */
.Top-img1 {
  height: 34px;
  width: 150px;
}
/* 企业微信服务商图片 */
.Top-img2 {
  height: 25px;
  width: 117px;
  margin-left: 20px;
  position: relative;
  top: -2px;
}
/* 首页列表 */
.content-Top-Li {
  display: flex;
  flex: 1;
  margin-left: 10px;
}
.content-Top-Li a {
  margin-left: 30px;
  color: rgb(255, 255, 255);
  font-size: 13px;
}
/* 标题栏里的首页列表的下划线，如果其他子li需要只添加此class */
.Top-Li-hr {
  border-bottom: 2px solid aliceblue;
  padding-bottom: 9px;
}
/* 登录 */
.content-Top-right a {
  color: aliceblue;
  font-size: 13px;
}
/* button按钮 */
.content-Top-right button {
  margin-left: 30px;
  border: 1px solid aliceblue;
  background-color: rgb(0, 86, 216);
  color: aliceblue;
  font-size: 13px;
  padding: 6px 10px;
  cursor: pointer;
}
.content-Top-right button:hover {
  background-color: rgb(35, 120, 248);
}

/* header */
/* 设置主体的 */
.header {
  width: 100%;
  height: 600px;
  margin-top: -10px;
  background-image: url('../assets/images/header.png');
}
/* 字体距离标题栏的距离 */
.header-p1-top {
  padding-top: 120px;
}
/* 设置字体 */
.header-p1 {
  font-size: 45px;
  margin: 10px 280px;
  color: aliceblue;
  font-weight: bold;
}
.header-p2-top {
  padding-top: 30px;
}
.header-p2 {
  font-size: 15px;
  margin: 8px 280px;
  color: aliceblue;
}
/* 设置button */
.header-button {
  margin: 40px 0 0 280px;
  font-size: 15px;
  padding: 18px 50px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
}
.header-button:hover {
  background-color: rgb(203, 223, 252);
}

/* feature部分 */
.feature {
  height: 1000px;
}
/* 水平居中 */
.feature-flex {
  display: flex;
  justify-content: center;
  align-content: center;
}
.feature-p1-top {
  padding-top: 90px;
}
.feature-p1 {
  color: black;
  font-size: 30px;
  margin: 16px 0;
  min-width: 1425px;
}
.feature-p2 {
  color: black;
  font-size: 15px;
  margin: 5px 0;
}
/* 字体的下划线 */
.feature-hr {
  width: 150px;
  height: 4px;
  border-radius: 50%;
  background-color: rgb(210, 229, 250);
  margin: auto;
  text-align: center;
}

/* 图片 */
.feature-img {
  margin-top: 50px;
  /* margin-left: -6%; */
}
/* 每第二个背景就是灰色 */
.feature-twoimg {
  background-color: rgb(247, 249, 250);
}

/* 第四个位置和图片居中显示 */
.feature-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 设置图片的长度和换行 */
.feature3-p {
  width: 450px;
  white-space: wrap;
}
.feature3-pdiv {
  width: 40px;
  height: 3px;
  background-color: rgb(1, 97, 241);
}

/* 给每个大标题下面的小标题设置字体，比如（企微渠道活码，客户群活码） */
.sizeP {
  font-size: 25px;
  margin-bottom: 13px;
}

/* 全力打造企业微信公域到私域流量转化体系的内容 */
/* 转化体系 */
.conversion-system {
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 300px;
  flex-direction: row;
}
.conversion {
  width: 23%;
  height: 270px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(231, 231, 231);
  border-radius: 4%;
  margin: 10px;
}
/* 每个div里面的图片的位置 */
.conversion img {
  margin-top: 60px;
}

/* 设置字体的 */
.sizeP_p {
  font-size: 15px;
  color: rgb(143, 151, 160);
  padding: 0 30px;
}

/* 他们都在使用芝麻的服务 */
.service {
  margin: 10px 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 1120px;
}
.service_ser {
  width: 8%;
  margin: 13px 10px;
}

/* 底部的背景图片 */
.footer {
  margin: 30px 0;
  background-image: url('../assets/images/footer.png');
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.footer_p1 {
  color: aliceblue;
  font-size: 30px;
}
.footer_p2 {
  color: aliceblue;
}
/* 芝麻客服图标 */
.footer_img img {
  position: relative;
  top: 10px;
  margin-right: 50px;
}
/* 底部的立即免费使用的按钮设置 */
.footer_img button {
  padding: 8px 20px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 112, 224);
  border: 1px solid transparent;
  border-radius: 5%;
}
/* 底部区域 */
.bottom {
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
}
/* 字体加粗 */
.bottom_p1 {
  font-weight: bold;
  font-size: 19px;
}
/* 设置二维码的大小 */
.bottom_img img {
  width: 120px;
  height: 120px;
  margin-bottom: -12px;
}
/* 设置二维码下面文字 */
.bottom_img p {
  width: 120px;
  word-wrap: break-word;
  font-size: 10px;
  text-align: center;
}

.onnnnnnnnnnne {
  text-align: center;
  margin: 50px 0;
}
</style>
