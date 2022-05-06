<template>
<body>
    <!--logo导航-->
	<nav id="myLogoNay">
		<div class="container-fluid navbar-fixed-top">
			<div class="row logoNavTop">
				<div class="col-lg-4 col-md-5 col-sm-6 mytop">
					<a href="#">学生</a><span>|</span>
					<a href="#">教职工</a><span>|</span>
					<a href="#">校友学生</a><span>|</span>
					<a href="#">考生与访客</a>
				</div>
				<div class="col-lg-5 col-md-6 col-sm-6 hidden-xs">
					<span class="glyphicon glyphicon-folder-close"></span>&nbsp;办公系统
					<span class="glyphicon glyphicon-briefcase"></span>&nbsp;OA手机版
					<span class="glyphicon glyphicon-envelope"></span>&nbsp;邮件系统
				</div>
			</div>
			<div class="row hidden-lg hidden-md hidden-sm logoNavTop1">
				<div class="col-xs-12">
					<span class="glyphicon glyphicon-folder-close"></span>&nbsp;办公系统
					<span class="glyphicon glyphicon-briefcase"></span>&nbsp;OA手机版
					<span class="glyphicon glyphicon-envelope"></span>&nbsp;邮件系统
				</div>
			</div>
			<div class="row">
				<nav class="navbar navbar-default">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="modal" data-target="#myModal" aria-expanded="false" >
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<!--显示学校图标-->
						<a class="navbar-brand" href="#" style="position: relative; bottom: 28px;">
							<img src="../assets/img/gxwzimg/a.jpg" width="200px">
						</a>
					</div>
					<!--导航-->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav" id="myNay">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">学校概况</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">学校简介</a></li>
									<li><a href="#">学校领导</a></li>
									<li><a href="#">学校章程</a></li>
									<li><a href="#">学校校历</a></li>
									<li><a href="#">联系我们</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">机构设置</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">院系设置</a></li>
									<li><a href="#">职能部门</a></li>
									<li><a href="#">群团组织</a></li>
									<li><a href="#">直属单位</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">学科建设</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">重点学科</a></li>
									<li><a href="#">硕士点建设</a></li>
									<li><a href="#">博士点建设</a></li>
									<li><a href="#">发展规划与学科建设</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">人才培养</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">本科教育</a></li>
									<li><a href="#">研究生教育</a></li>
									<li><a href="#">继续教育</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">科学研究</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">科研概况</a></li>
									<li><a href="#">科研机构</a></li>
									<li><a href="#">科研处</a></li>
									<li><a href="#">国晒中心</a></li>
									<li><a href="#">国粮技转中心</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">人才队伍</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">高层次人才</a></li>
									<li><a href="#">特聘学者</a></li>
									<li><a href="#">专家名师</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">招生就业</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">招生就业</a></li>
									<li><a href="#">就业工作</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">校园文化</a>
								<ul class="dropdown-menu" id="myMenu">
									<li><a href="#">视觉识别系统</a></li>
									<li><a href="#">共青团</a></li>
									<li><a href="#">学生会</a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class=" modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									<img src="../assets/img/gxwzimg/a.jpg" width="200px">
								</div>
								<div class="modal-body">
									<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
										<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">学校概况</a>
												</h4>
											</div>
											<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
												<div class="panel-body">
													<a href="http://www.whpu.edu.cn">学校简介</a>
													<a href="#">学校领导</a>
													<a href="#">学校章程</a>
													<a href="#">学校校历</a>
													<a href="#">联系我们</a>
												</div>			
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne2">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne2" aria-expanded="false" aria-controls="collapseOne">机构设置</a>
												</h4>
											</div>
											<div id="collapseOne2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne2">
												<div class="panel-body">
													<a href="#">院系设置</a>
													<a href="#">职能部门</a>
													<a href="#">群团组织</a>
													<a href="#">直属单位</a>
												</div>			
											</div>
										</div>
									
									<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne3">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne3" aria-expanded="false" aria-controls="collapseOne">学科建设</a>
												</h4>
											</div>
											<div id="collapseOne3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
												<div class="panel-body">
													<a href="#">重点学科</a>
													<a href="#">硕士点建设</a>
													<a href="#">博士点建设</a>
													<a href="#">发展规划与学科建设</a>
												</div>			
											</div>
										</div>
									
									<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne4">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne4" aria-expanded="false" aria-controls="collapseOne">人才培养</a>
												</h4>
											</div>
											<div id="collapseOne4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne4">
												<div class="panel-body">
													<a href="#">本科教育</a>
													<a href="#">研究生教育</a>
													<a href="#">继续教育</a>
												</div>			
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne5">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne5" aria-expanded="false" aria-controls="collapseOne">科学研究</a>
												</h4>
											</div>
											<div id="collapseOne5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne5">
												<div class="panel-body">
													<a href="#">科研概况</a>
													<a href="#">科研机构</a>
													<a href="#">科研处</a>
													<a href="#">国晒中心</a>
													<a href="#">国粮技转中心</a>
												</div>			
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne6">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne6" aria-expanded="false" aria-controls="collapseOne">人才队伍</a>
												</h4>
											</div>
											<div id="collapseOne6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne6">
												<div class="panel-body">
													<a href="#">高层次人才</a>
													<a href="#">特聘学者</a>
													<a href="#">专家名师</a>
												</div>			
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne7">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne7" aria-expanded="false" aria-controls="collapseOne">招生就业</a>
												</h4>
											</div>
											<div id="collapseOne7" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne7">
												<div class="panel-body">
													<a href="#">招生就业</a>
													<a href="#">就业工作</a>
												</div>			
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading" role="tab" id="headingOne8">
												<h4 class="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne8" aria-expanded="false" aria-controls="collapseOne">校园文化</a>
												</h4>
											</div>
											<div id="collapseOne8" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne8">
												<div class="panel-body">
													<a href="#">视觉识别系统</a>
													<a href="#">共青团</a>
													<a href="#">学生会</a>
												</div>			
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</nav>
			</div>
		</div>
	</nav>
	<!--轮播图-->
	<section id="myCarousel">
		<section id="lb-carousel" class="carousel slibe" data-ride="carousel">
			<!--指示器，右下角小圆圈-->
			<ol class="carousel-indicators"> 
				<li data-target="#lb-carousel" data-slide-to="0" class="active"></li>
				<li data-target="#lb-carousel" data-slide-to="1"></li>
				<li data-target="#lb-carousel" data-slide-to="2"></li>
				<li data-target="#lb-carousel" data-slide-to="3"></li>
			</ol>
			<!--轮播图片-->
			<div class="carousel-inner" role="listbox">
				<div class="item active" data-sm-img="./assets/img/gxwzimg/lbt11.jpg" data-lg-img="./assets/img/gxwzimg/lbt11.jpg"></div>
				<div class="item" data-sm-img="./assets/img/gxwzimg/lbt22.jpg" data-lg-img="./assets/img/gxwzimg/lbt22.jpg"></div>
				<div class="item" data-sm-img="./assets/img/gxwzimg/lbt33.jpg" data-lg-img="./assets/img/gxwzimg/lbt33.jpg"></div>
				<div class="item" data-sm-img="./assets/img/gxwzimg/lbt44.jpg" data-lg-img="./assets/img/gxwzimg/lbt44.jpg"></div>
			</div>
			<a class="left carousel-control" href="#lb-carousel" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
				</span>
			</a>
			<a class="right carousel-control" href="#lb-carousel" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true">
				</span>
			</a>
		</section>
	</section>
	<!--学校新闻-->
	<section id="mySchoolContent">
		<!--学校新闻标题部分-->
		<div class="container-fluid" id="mulNews">
			<div class="row" id="mulNewsTop">
				<div class="col-md-10 col-sm-6 col-xs-6 text-left">
					<a href="#">学校要闻</a>
				</div>
				<div class="col-md-2 col-sm-5 col-xs-5 text-right">
					<a href="#">进入新闻网&nbsp;<b>&raquo;</b></a>
				</div>
			</div>
		<!--学校新闻内容部分-->
			<div class="row" id="mulNewsBottom">
				<!--学校新闻内容第一列-->
				<div class="col-md-4">
					<!--这一列使用bootstrap的缩略图实现-->
					<div class="thumbnail">
						<img src="../assets/img/gxwzimg/1.jpg" alt="武汉轻工大学">
						<div class="caption">
							<a href="#">
								<h4><strong>积极防控 众志成城 致全体师生和校友的一封信</strong></h4>
							</a>
							<a href="#">
								<p>各位老师、同学。广大校友及退休教职工：大家新年好！</p>
								<p>学校2021年校友工作会议在江西南昌隆重召开。校长董仕节出席会议，会议由校党委副书记刘丰林主持。</p>
							</a>
						</div>
					</div>
				</div>
			<!--学校新闻内容第二列-->
			<div class="col-md-4 news2">
				<!--下面是第二列的第一行-->
				<div class="row">
					<!--这一行使用bootstrap的媒体对象实现-->
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/2.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">【疫情防控 我们在行动】之五十一 助力战“疫” 情暖“疫”...</a>
							</h4>
							<a href="#">
								“40000个消毒水杯，3000个医用口罩，500套防护服，400个口罩...”...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/3.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">恩施州“世界硒都·中国硒谷”建设专题调研报告研讨会在我校召开</a>
							</h4>
							<a href="#" class="text">
								7月13日，恩施州“世界硒都·中国硒谷”建设专题调研报告研讨会在硒科学与工程现代产业学院...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/4.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">【永远跟党走 奋进新时代】之一 土建学院开展“擦亮...</a>
							</h4>
							<a href="#">
								开拓高校专业劳动教育新阵地，土建学院“健行”暑期“三下乡”社会实践队（以下简称“健行”实践队）...
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 news2">
				<!--下面是第三列的第一行-->
				<div class="row">
					<!--这一行使用bootstrap的媒体对象实现-->
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/5.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">学校召开防汛工作动员部署会...</a>
							</h4>
							<a href="#">
								7月14日上午，学校在行政楼第一会议室召开防汛工作动员部署会...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/7.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">学校与湖北省粮油集团签订战略合作协议...</a>
							</h4>
							<a href="#">
								学校与湖北省粮油集团（以下简称粮油集团）战略合作签约仪式在行政楼四会议室举行...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/6.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">沙顺利为土建学院党委委员及纪检监察党支部讲专题党课...</a>
							</h4>
							<a href="#">
								校纪委书记、省监委驻校监察专员沙顺利以“纪律建设的百年历程和经验启示”为题...
							</a>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
	<!--综合内容-->
	<section id="mySchoolContent">
		<div class="container-fluid" id="mulNews">
			<div class="row" id="mulNewsTop2">
				
			</div>
			
		<!--学校新闻内容部分-->
			<div class="row" id="mulNewsBottom">
				<!--学校新闻内容第一列-->
				<div class="col-md-4 news2">
					<div class="row" id="mulNewsTop1">
						<div  class="text-left">
							<a href="#">学术讲座</a>
						</div>
						<div class="text-right">
							<a href="#">更多&nbsp;<b>&raquo;</b></a>
						</div>
					</div>
				<!--下面是第二列的第一行-->
				<div class="row">
					<!--这一行使用bootstrap的媒体对象实现-->
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/2.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">【疫情防控 我们在行动】之五十一 助力战“疫” 情暖“疫”...</a>
							</h4>
							<a href="#">
								“40000个消毒水杯，3000个医用口罩，500套防护服，400个口罩...”...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/3.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">恩施州“世界硒都·中国硒谷”建设专题调研报告研讨会在我校召开</a>
							</h4>
							<a href="#" class="text">
								7月13日，恩施州“世界硒都·中国硒谷”建设专题调研报告研讨会在硒科学与工程现代产业学院（以下简称硒产业学院）...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/4.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">【永远跟党走 奋进新时代】之一 土建学院开展“擦亮小城镇”...</a>
							</h4>
							<a href="#">
								为推动乡村振兴，开拓高校专业劳动教育新阵地，土建学院“健行”暑期“三下乡”社会实践队（以下简称“健行”实践队）...
							</a>
						</div>
					</div>
				</div>
			</div>
			<!--学校新闻内容第二列-->
			<div class="col-md-4 news2">
				<div class="row" id="mulNewsTop1">
						<div  class="text-left">
							<a href="#">综合新闻</a>
							<a href="#" class="mtxw">媒体新闻</a>
						</div>
						<div class="text-right">
							<a href="#">更多&nbsp;<b>&raquo;</b></a>
						</div>
					</div>
				<!--下面是第二列的第一行-->
				<div class="row">
					<!--这一行使用bootstrap的媒体对象实现-->
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/2.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">【疫情防控 我们在行动】之五十一 助力战“疫” 情暖“疫”...</a>
							</h4>
							<a href="#">
								“40000个消毒水杯，3000个医用口罩，500套防护服，400个口罩...”...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/3.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">恩施州“世界硒都·中国硒谷”建设专题调研报告研讨会在我校召开</a>
							</h4>
							<a href="#" class="text">
								7月13日，恩施州“世界硒都·中国硒谷”建设专题调研报告研讨会在硒科学与工程现代产业学院（以下简称硒产业学院）...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/4.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">【永远跟党走 奋进新时代】之一 土建学院开展“擦亮小城镇”...</a>
							</h4>
							<a href="#">
								为推动乡村振兴，开拓高校专业劳动教育新阵地，土建学院“健行”暑期“三下乡”社会实践队（以下简称“健行”实践队）...
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 news2">
				<div class="row" id="mulNewsTop1">
						<div  class="text-left">
							<a href="#">通知公告</a>
						</div>
						<div class="text-right">
							<a href="#">更多&nbsp;<b>&raquo;</b></a>
						</div>
					</div>
				<!--下面是第三列的第一行-->
				<div class="row">
					<!--这一行使用bootstrap的媒体对象实现-->
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/5.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">学校召开防汛工作动员部署会...</a>
							</h4>
							<a href="#">
								7月14日上午，学校在行政楼第一会议室召开防汛工作动员部署会...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/7.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">学校与湖北省粮油集团签订战略合作协议...</a>
							</h4>
							<a href="#">
								学校与湖北省粮油集团（以下简称粮油集团）战略合作签约仪式在行政楼四会议室举行...
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="media">
						<div class="media-left">
							<a href="#">
								<img class="media-object" src="../assets/img/gxwzimg/6.jpg" alt="...">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<a href="#">沙顺利为土建学院党委委员及纪检监察党支部讲专题党课...</a>
							</h4>
							<a href="#">
								校纪委书记、省监委驻校监察专员沙顺利以“纪律建设的百年历程和经验启示”为题...
							</a>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
	<!--友情链接-->
	<section id="mySchoolContent">
		
	</section>
	<!--版权页-->
	<section id="myCopyright">
		<div class="container-fluid" id="footer">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 footerLeft">
				<p>版权所有©武汉轻工大学 鄂ICP备15021561号-1 鄂公网安备420112020000327号</p>
				<p>常青校区：湖北省武汉市常青花园学府南路68号邮编：430023</p>
				<p>金银湖校区：湖北省武汉市东西湖区环湖中路36号  邮编：430048</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-right footerRight">
				<ul class="list-unstyled list-inline">
					<li><a href="#">联系我们</a></li>
					<li><a href="#">新闻投稿</a></li>
					<li><a href="#">网络中心</a></li>
					<li><a href="#">纪检举报</a></li>
					<li><a href="#"><img src="../assets/img/gxwzimg/8.jpg" alt="..."></a></li>
				</ul>
			</div>
		</div>
	</section>
</body>
</template> 
<script type="text/javascript">
//         export default {   
//                 mounted() {
//                     $(".dropdown-toggle").on("mouseover",function(){
// 						$(this).dropdown("toggle")
// 					});
// 					$("#myMenu").on("mouseout",function(){
// 						$(this).dropdown("toggle")
// 					});
// /*轮播图*/
// $(function () {
//     $(window).on("resize",function(){
//         var clientW=$(window).width();
//         var isShowBigImage=clientW>=800;
//         var $allItems = $("#lb-carousel .item");
//         $allItems.each(function(index,item){
//             var src=isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
//             var imgUrl='url("'+  src +' ")';
//             $(item).css({
//                 backgroundImage:imgUrl
//             });
//             if(!isShowBigImage){
//                 var $img="<img src='"+ src +" '>";
//                     $(item).empty().append($img);
//             }
//             else{
//                 $(item).empty();
//             }
//         });
//     })
//     $(window).trigger("resize")//使用trigger可以一开始进来就调用resize方法
// })
                                
//                 }
//                 }

</script>


<style lang="css" scoped>
    @import "../assets/css/gxwz.css";
</style>