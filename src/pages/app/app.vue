<template>
    <div class="app-content" >
        <div class="app-content-body" :style="{height:appContainerHeight}">
           <div class="bh-ph-16 bh-pt-16 app-name">
               <h5 class="app-name-info">
                   <label class="as-string-cut" style="font-size:18px;width: 210px;display:inline-block;">{{appInfo.NAME1}}</label>
                   <label v-if="Number(appInfo.SCHOOL_COUNT)!=0" class="app-service-school" @click="goSchoolPage(appInfo)">正在服务的学校<span class="app-service-schoolNum bh-ph-8 bh-color-primary-lv1">{{appInfo.SCHOOL_COUNT}}<i class="iconfont icon-keyboardarrowright"></i></span></label>
               </h5>
               <div class="app-name-des bh-pt-8" style="">{{appInfo.INTRODUCTION}}</div>
           </div>
           <div class="bh-clearfix bh-pl-16 bh-pv-8 app-info bh-color-gray-lv2">
               <div style="border-top: solid 1px #eee;">
                   <div class="app-col-6 bh-pv-8">应用分类：<label> {{appInfo.APPCLASSIFY_DISPLAY}}</label></div>
                   <div class="app-col-6 bh-pv-8" style="display:none;">版本号：<label>{{appInfo.VERSION}} </label></div>
                   <div class="app-col-6 bh-pv-8" style="display:none;">价格（￥）：<label>{{appInfo.PRICE}} </label></div>
                   <div class="app-col-6 bh-pv-8">厂商：<label>{{appInfo.FACTORY}} </label></div>
                   <div class="app-col-12 bh-pv-8">标签：<label>{{appInfo.BQ_DISPLAY}} </label></div>
               </div>    
           </div>
           <div class="app-tab-container" :style="{height:appTabContainerHeight}">
               <mt-navbar v-model="selected">
                 <mt-tab-item id="introduction">介绍</mt-tab-item>
                 <mt-tab-item id="case">数据</mt-tab-item>
                 <mt-tab-item id="question">问题</mt-tab-item>
               </mt-navbar>

               <!-- tab-container -->
               <mt-tab-container v-model="selected" class="bh-mt-4">
                 <mt-tab-container-item id="introduction">
                   <div v-if="introduction">
                       <div class="app-intro-video bh-mt-16" v-if="introduction.VIDEO_URL">
                           <video id="my-video" controls poster="" class="video-js"  preload="auto"  data-setup="{}">
                               <source :src="introduction.VIDEO_URL" type='video/mp4'>
                            </video>
                       </div>
                       <div class="app-intro-text bh-ph-8 bh-pt-16" v-html="introduction.APP_INTRODUCE"></div>
                       <!-- 去掉按钮的样式更改 margin-bottom: 60px;-->
                       <div style="width:100%;height:36px;" v-bind:style="{ marginBottom: marginBottomValue}">
                           <button v-if="Number(appInfo.SCHOOL_COUNT)!=0" class="app-intro-button" @click="goSchoolPage(appInfo)">查看所有学校</button>
                       </div>
                   </div>   
                 </mt-tab-container-item>
                 <mt-tab-container-item id="case" >
                   <!-- <custom-case :details="customInfo" :subTag="true" class="app-case-text"></custom-case> -->
                   <div style="background-color:#F6F6F6;" class="bh-pb-32">
                     <div class="data-case bh-ph-16 bh-mh-4 bh-pv-16" style="display:none;">
                       <div class="bh-pb-8 as-color-999">标杆案例数据</div>
                       <div class="data-border-radius bh-ph-8" @click="goCustomerCase">
                         <div class="bh-clearfix bh-pv-16 bh-ph-8">
                           <div class="bh-pull-left data-case-school">{{customerDataTmp.SCHOOL_BM_DISPLAY}}</div>
                           <label class="bh-pull-right data-case-updateTime">
                            更新于 <label>{{customerDataTmp.DATA_UPDATE_TIME}}</label>
                            <span class="data-case-arrow"></span>
                           </label>
                         </div>
                         <div class="bh-clearfix bh-text-center bh-pv-8" style="border-top:solid 1px #ddd;">
                           <div class="as-col-md-4">
                             <h5 class="bh-pv-8 as-font-weight">{{customerDataTmp.HYD}}</h5>
                             <div class="bh-pb-8 as-color-666">活跃度</div>
                           </div>
                           <div class="as-col-md-4">
                             <h5 class="bh-pv-8 as-font-weight">{{customerDataTmp.LLS}}</h5>
                             <div class="bh-pb-8 as-color-666">30日浏览数(PV)</div>
                           </div>
                           <div class="as-col-md-4">
                             <h5 class="bh-pv-8 as-font-weight">{{customerDataTmp.SYS}}</h5>
                             <div class="bh-pb-8 as-color-666">30日使用数(UV)</div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div class="data-main bh-ph-16 bh-mh-4 bh-pv-8">
                         <div class="bh-pb-8 as-color-999">应用核心数据</div>
                         <div class="main-container">
                           <div class="bh-ph-8">
                             <div class="bh-clearfix bh-pv-16 bh-ph-8">
                               <div class="bh-pull-left data-main-title">应用数据概况</div>
                               <label class="bh-pull-right as-color-white-opacity">更新于 <span>{{mainDatas.UPDATE_TIME}}</span></label>
                             </div>
                             <div class="bh-clearfix bh-text-center bh-pv-8">
                               <div class="as-col-md-4">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    <i-count-up :start="0" :end="Number(mainDatas.ZHPM)" :decimals="0" :duration="3" :options="options" ></i-count-up>
                                 </h5>
                                 <div class="bh-pb-8 as-color-white-opacity">综合排名</div>
                               </div>
                               <div class="as-col-md-4">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    <i-count-up :start="0" :end="Number(mainDatas.HYD)" :decimals="1" :duration="3" :options="options" ></i-count-up>%
                                  </h5>
                                 <div class="bh-pb-8 as-color-white-opacity">活跃度</div>
                               </div>
                               <div class="as-col-md-4">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    <i-count-up :start="0" :end="Number(mainDatas.FGL)" :decimals="1" :duration="3" :options="options" ></i-count-up>%
                                  </h5>
                                 <div class="bh-pb-8 as-color-white-opacity">覆盖率</div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     <div v-if="!isAnxinshouhu">
                       <div class="data-sex bh-ph-16 bh-mh-4 bh-pv-8">
                        <div class="data-box">
                          <div class="bh-clearfix bh-pv-16 bh-ph-16">
                              <div class="bh-pull-left data-main-title" style="border-left:solid 2px #278FEF;">用户性别分布</div>
                              <label class="bh-pull-right">更新于 <span>{{mainDatas.UPDATE_TIME}}</span></label>
                           </div>
                          <div class="bh-clearfix bh-pb-24">
                            <div class="as-col-md-6">
                              <div id="sexEchart" class="data-echart">
                                
                              </div>
                            </div>
                            <div class="as-col-md-6">
                              <ul class="sex-uls bh-pl-32">
                                <li><span style="background: #4E7CCC;"></span><label>男</label><label>{{mainDatas.SEX_MAN}}%</label></li>
                                <li><span style="background: #4ECDA5;"></span><label>女</label><label>{{mainDatas.SEX_GIRL}}%</label></li>
                                <li><span style="background: #36B3C3;"></span><label>其他</label><label>{{mainDatas.SEX_OTHER}}%</label></li>
                              </ul>
                            </div>
                          </div>
                        </div> 
                       </div>
                       <div class="data-role bh-ph-16 bh-mh-4 bh-pv-8">
                        <div class="data-box" style="">
                          <div class="bh-clearfix bh-pv-16 bh-ph-16">
                              <div class="bh-pull-left data-main-title" style="border-left:solid 2px #278FEF;">用户角色分布</div>
                              <label class="bh-pull-right" >更新于 <span>{{mainDatas.UPDATE_TIME}}</span></label>
                           </div>
                          <div class="bh-clearfix bh-pb-24">
                            <div class="as-col-md-6">
                              <div id="roleEchart" class="data-echart" style="">
                                
                              </div>
                            </div>
                            <div class="as-col-md-6">
                              <ul class="sex-uls bh-pt-32 bh-pl-32">
                                <li><span style="background: #4E7CCC;"></span><label>教师</label><label>{{mainDatas.ROLE_TEACHER}}%</label></li>
                                <li><span style="background: #4ECDA5;"></span><label>学生</label><label>{{mainDatas.ROLE_STUDENT}}%</label></li>
                              </ul>
                            </div>
                          </div>
                        </div> 
                       </div>
                     </div>
                     <div v-else>
                       <!-- 应用运行数据 -->
                       <div class="data-main bh-ph-16 bh-mh-4 bh-pv-8">
                         <div class="bh-pb-8 as-color-999">应用运行数据</div>
                         <div class="data-box sub-container">
                           <div class="bh-ph-8">
                             <div class="bh-clearfix bh-pv-16 bh-ph-8">
                               <div class="bh-pull-left data-main-title">总体数据</div>
                               <label class="bh-pull-right as-color-black-opacity">更新于 <span>{{runDatas.UPDATE_TIME}}</span></label>
                             </div>
                             <div class="bh-clearfix bh-text-center bh-pv-8">
                               <div class="as-col-md-4">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    <i-count-up :start="0" :end="Number(runDatas.TOTAL_SHXX)" :decimals="0" :duration="3" :options="options" ></i-count-up>
                                 </h5>
                                 <div class="bh-pb-8 as-color-black-opacity">守护学校(所)</div>
                               </div>
                               <div class="as-col-md-4">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    <i-count-up :start="0" :end="Number(runDatas.TOTAL_SHYY)" :decimals="0" :duration="3" :options="options" ></i-count-up>
                                  </h5>
                                 <div class="bh-pb-8 as-color-black-opacity">守护应用(个)</div>
                               </div>
                               <div class="as-col-md-4">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    <i-count-up :start="0" :end="Number(runDatas.TOTAL_SHZJ)" :decimals="0" :duration="3" :options="options" ></i-count-up>
                                  </h5>
                                 <div class="bh-pb-8 as-color-black-opacity">守护主机(台)</div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <!-- 运维数据 -->
                       <div class="data-role bh-ph-16 bh-mh-4 bh-pv-8">
                        <div class="data-box">
                          <div class="bh-clearfix bh-pv-16 bh-ph-16">
                              <div class="bh-pull-left data-main-title" style="border-left:solid 2px #278FEF;">运维数据</div>
                              <label class="bh-pull-right as-color-black-opacity" >更新于 <span>{{runDatas.UPDATE_TIME}}</span></label>
                           </div>
                          <div class="bh-clearfix bh-pb-24">
                            <div class="as-col-md-6">
                              <div id="ywEchart" class="data-echart" style="">
                                
                              </div>
                            </div>
                            <div class="as-col-md-6">
                              <div style="font-size:14px;text-align:right;padding-right:12px;color:#666;">总发现次数 {{runDatas.OPERATE_ZFXCS}}起事件</div>
                              <ul class="sex-uls bh-pt-32">
                                <li style="font-size:15px;"><span style="background: #4E7CCC;"></span><label style="width:108px;">半小时应急恢复</label><label style="width:28px;">{{runDatas.OPERATE_HFL}}%</label></li>
                                <li style="font-size:15px;padding-left: 20px;">{{runDatas.OPERATE_HFCS}}起事件</li>
                              </ul>
                            </div>
                          </div>
                        </div> 
                       </div>
                       <!-- 安全数据 -->
                       <div class="data-main bh-ph-16 bh-mh-4 bh-pv-8">
                         <!-- <div class="bh-pb-8 as-color-999">安全数据</div> -->
                         <div class="sub-container data-box">
                           <div class="bh-ph-8">
                             <div class="bh-clearfix bh-pv-16 bh-ph-8">
                               <div class="bh-pull-left data-main-title">安全数据</div>
                               <label class="bh-pull-right as-color-black-opacity">更新于 <span>{{runDatas.UPDATE_TIME}}</span></label>
                             </div>
                             <div class="bh-clearfix bh-text-center bh-pv-8">
                               <div class="as-col-md-6">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    {{runDatas.SECURITY_JTYMCG}}
                                 </h5>
                                 <div class="bh-pb-8 as-color-black-opacity">监测到页面篡改(起)</div>
                               </div>
                               <div class="as-col-md-6">
                                 <h5 class="bh-pv-8 as-font-weight">
                                    {{runDatas.SECURITY_ZZEYGJ}}万
                                  </h5>
                                 <div class="bh-pb-8 as-color-black-opacity">阻断恶意攻击(次)</div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div> 
                 </mt-tab-container-item>
                 <mt-tab-container-item id="question">

                    <question-item :items="questionArray"></question-item>
                    <div v-show="noQuestion" style="text-align:center;padding-top: 17%;">
                       <div>
                           <img :src="'./static/assets/no.png'" style="width:176px;height:176px;">
                       </div>
                       <p style="padding-top:16px;font-size: 16px;color: #999;">暂无相关问题</p>
                    </div>

                 </mt-tab-container-item>
               </mt-tab-container>
           </div> 
        </div>
        <div class="app-buttonContainer bh-clearfix bh-text-center" :class="{'app-buttonContainer-bh':!envFlag}">
            <!-- <div class="app-button bh-pv-4">
                <div class="app-col-6" style="display:none;">
                    <i class="iconfont icon-dianhua as-color-warning-lv2"></i>
                    <div class="app-button-text">
                        <a class="app-tel-line" :href="telephone">联系我</a>
                    </div>
                </div>   
            </div> -->
            <div type="warning" class="app-button as-bgColor-warning-lv2 bh-color-white bh-pv-16" @click="goQuickAskPage">快速提问</div>
            <div type="warning" class="app-button as-bgColor-warning-lv1 bh-color-white bh-pv-16" @click="goGetInfoPage">获取资料</div>
        </div>
    </div>
</template>

<script>
    import { Button ,Navbar, TabItem, TabContainer,MessageBox,Toast} from 'bh-mint-ui2';
    import customCase from '../../components/customCase.vue';
    import questionItem from '../../components/questionItem.vue';
    import api from '../../api.js';
    import axios  from 'axios';
    import echarts from 'echarts';
    import ICountUp from 'vue-countup-v2';
    //import countUp from 'countup.js';
    import wechatShare from '../../../static/mobile/js/wechatShare.js';
    export default {
        data () {
            return {
                billSelectedTag:true,
                selected:'introduction',
                appInfo:{},
                introduction:{},
                customInfo:{},
                appTabContainerHeight:'',
                telephone:'',
                appContainerHeight:'',
                asBillUncheck:false,
                envFlag:true,
                marginBottomValue:'20px',
                iwantitTag:true,
                userInfo:{},
                questionArray:[],
                noQuestion:false,
                mainDatas:{
                    ZHPM:50,
                    UPDATE_TIME:0,
                    HYD:0,
                    FGL:0
                },
                customerDataTmp:{
                  'SCHOOL_BM_DISPLAY':'1',
                  'DATA_UPDATE_TIME':'2',
                  'HYD':'3',
                  'LLS':'4',
                  'SYS':'5'
                },
                options: {
                  useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  decimal: '.',
                  prefix: '',
                  suffix: ''
                },
                runDatas:{
                  TOTAL_SHXX:0,
                  TOTAL_SHYY:0,
                  TOTAL_SHZJ:0
                },
                isAnxinshouhu:0//是否是安心守护应用
            }
        },
        methods:{
            appMain() {
                var that = this;
                if (window.env == 'wx') {
                    that.envFlag = false;
                    that.marginBottomValue = '20px';
                }else {
                    that.envFlag = true;
                    that.marginBottomValue = '60px';
                }
                var routeApp = {};
                routeApp = that.$route.query;
                if (localStorage.getItem("asBillUncheck") == 'true') {
                    that.asBillUncheck = true;
                }
                //设置billdetail框部分的高度
                //this.appContainerHeight = (document.body.clientHeight) + 'px';
                //下面写法在ios上存在兼容性
                this.appContainerHeight = (document.body.clientHeight) - 47 + 'px';
                //BH_MIXIN_SDK.setTitleText('应用详情');
                //应用详情
                var option = {
                    WID:routeApp.APP_ID?routeApp.APP_ID : routeApp.WID
                };
                var appOption = {
                    APP_ID:routeApp.APP_ID?routeApp.APP_ID : routeApp.WID
                };
                //来自应用列表，应用列表废弃了
                // if (routeApp.TYPEFROM && routeApp.TYPEFROM=='applist') {
                //     option = {
                //         WID:routeApp.WID
                //     };
                //     appOption = {
                //         APP_ID:routeApp.WID
                //     };
                // }
                // 判断是否是安心守护
                if (appOption.APP_ID == '98e54fd6454c4529b8f6629f03b1e0a4') {
                  that.isAnxinshouhu = 1;
                }else {
                  that.isAnxinshouhu = 0;
                }
                axios({
                    method:"POST",
                    url:api.appsDetail,
                    params:option
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.detail.rows && response.data.datas.detail.rows.length>0) {
                        that.appInfo = response.data.datas.detail.rows[0];
                        //钉钉分享
                        // dd.biz.navigation.setRight({
                        //     show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
                        //     control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
                        //     text: '',//控制显示文本，空字符串表示显示默认文本
                        //     onSuccess : function(result) {
                        //         //如果control为true，则onSuccess将在发生按钮点击事件被回调
                        //         /*
                        //         {}
                        //         */
                        //        //保存分享数据
                        //        axios({
                        //            method:"POST",
                        //            url:api.saveLink,
                        //            params:{
                        //              appId:that.$route.query.APP_ID
                        //            }
                        //        }).then(function(response){
                        //          if (response.data.code == 0) {
                        //            //钉钉分享
                        //            dd.biz.util.share({
                        //                type: 0,//分享类型，0:全部组件 默认； 1:只能分享到钉钉；2:不能分享，只有刷新按钮
                        //                url: 'http://appstore.campusphere.cn:28080/emap/sys/appstoreservice/index.html#/app?APP_ID='+ that.$route.query.APP_ID+'&linkWid='+response.data.linkWid,
                        //                title: that.appInfo.NAME1,
                        //                content: that.appInfo.INTRODUCTION,
                        //                image: that.setImgUrlFromId(that.appInfo.IMAGE),
                        //                onSuccess : function() {
                        //                    //alert('分享成功');
                        //                },
                        //                onFail : function(err) {
                        //                  alert(err);
                        //                }
                        //            });
                        //          }else {
                        //            Toast('保存分享数据失败');
                        //          }
                        //        }).catch(function(err){
                        //          Toast(err);
                        //        }); 
                        //     },
                        //     onFail : function(err) {}
                        // });
                        //微信分享
                        // var targetUrl = window.location.href.split('#/')[0];
                        // var targetPage = encodeURIComponent(targetUrl.split('?')[0]);
                        // var targetUrlHash = window.location.href.split('#/')[1];
                        // targetUrlHash = targetUrlHash.split('&type=')[0];
                        // var tmpHref = window.location.href;
                        // tmpHref = tmpHref.replace('#/',',');
                    }
                  }else {
                    Toast('获取详情数据失败');
                  }
                }).catch(function(err){
                  //Toast(err);
                });
                //应用tab介绍
                axios({
                    method:"POST",
                    url:api.appsIntrodure,
                    params:appOption
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.introdure.rows && response.data.datas.introdure.rows.length>0 ) {
                        that.introduction = response.data.datas.introdure.rows[0];
                        if (that.introduction.VIDEO_URL) {
                            that.introduction.VIDEO_URL = that.introduction.VIDEO_URL;
                        }
                        var regString = /\/emap\/sys\/emapcomponent\/file\/getFileByToken\/(\w+)\.do/g;
                        var totalUrl = WEBPACK_CONIFG_HOST + "sys/emapcomponent/file/"+"getSingleImageByToken.do?fileToken=$1&type=3";
                        that.introduction.APP_INTRODUCE = that.introduction.APP_INTRODUCE.replace(regString,totalUrl);
                        that.introduction.APP_INTRODUCE = that.introduction.APP_INTRODUCE.replace(/\\/g,"");
                        //设置图片放大功能
                        wechatShare.setImagePhotoSwipe('.app-intro-text img');
                        //设置视频元素的高度
                        setTimeout(function(){
                          //var width = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
                          //var width = document.getElementsByClassName("main")[0].style.width;
                          var width = 400;
                          console.log('******width******'+document.getElementsByClassName("main")[0].width);
                          var videoStyle = document.getElementsByClassName("video-js")[0];
                          videoStyle.style.height = Math.floor(Number(width) * 9 / 16) + 'px';
                        },50);
                    }else {
                        that.introduction = false; 
                    }
                  }else {
                    Toast('获取介绍数据失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
                //数据-应用核心数据
                axios({
                    method:"POST",
                    url:api.data,
                    params:{
                      appId:appOption.APP_ID
                    }
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.list.rows && response.data.datas.list.rows.length>0) {
                        that.mainDatas = response.data.datas.list.rows[0];
                        //alert('that.mainDatas:'+that.mainDatas.ZHPM);
                        if (!that.isAnxinshouhu) {
                          //性别echart图
                          let sexEchart = echarts.init(document.getElementById('sexEchart'));
                          var echartOptions = {
                            series: [
                                {
                                    name:'',
                                    type:'pie',
                                    radius: ['60%', '95%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:[
                                        {value:Number(that.mainDatas.SEX_MAN), name:'男'},
                                        {value:Number(that.mainDatas.SEX_GIRL), name:'女'},
                                        {value:Number(that.mainDatas.SEX_OTHER), name:'其他'},
                                    ]
                                }
                            ],
                            color:['#4E7CCC','#4ECDA5','#36B3C3']
                          };
                          sexEchart.setOption(echartOptions);
                          //角色echart图
                          let roleEchart = echarts.init(document.getElementById('roleEchart'));
                          var echartOptions = {
                            series: [
                                {
                                    name:'',
                                    type:'pie',
                                    radius: ['60%', '95%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:[
                                        {value:Number(that.mainDatas.ROLE_TEACHER), name:'教师'},
                                        {value:Number(that.mainDatas.ROLE_STUDENT), name:'学生'},
                                    ]
                                }
                            ],
                            color:['#4E7CCC','#4ECDA5']
                          };
                          roleEchart.setOption(echartOptions);
                        }
                    }else {
                      Toast('暂无应用核心数据');
                    }
                  }else {
                    Toast('获取应用核心数据失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
                if (that.isAnxinshouhu) {
                  //安心守护运行数据
                  axios({
                      method:"POST",
                      url:api.runData,
                      params:{
                        appId:appOption.APP_ID
                      }
                  }).then(function(response){
                    if (response.data.code == 0) {
                      if (response.data.datas.list.rows && response.data.datas.list.rows.length>0) {
                          that.runDatas = response.data.datas.list.rows[0];
                          //运维echart图
                          let ywEchart = echarts.init(document.getElementById('ywEchart'));
                          var echartOptions = {
                            series: [
                                {
                                    name:'',
                                    type:'pie',
                                    radius: ['60%', '95%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:[
                                        {value:Number(that.runDatas.OPERATE_ZFXCS) - Number(that.runDatas.OPERATE_HFCS), name:''},
                                        {value:Number(that.runDatas.OPERATE_HFCS), name:''},
                                    ]
                                }
                            ],
                            color:['#4E7CCC','#4ECDA5']
                          };
                          ywEchart.setOption(echartOptions);
                      }else {
                        Toast('暂无运行数据');
                      }
                    }else {
                      Toast('获取暂无运行数据失败');
                    }
                  }).catch(function(err){
                    Toast(err);
                  });
                }

                // //数据-案例卡片
                // axios({
                //     method:"POST",
                //     url:api.customerData,
                //     params:{
                //       appId:appOption.APP_ID
                //     }
                // }).then(function(response){
                //   if (response.data.code == 0) {
                //     var responseData = response.data.datas.list.rows;
                //     if (responseData && responseData.length>0) {
                //       if (!responseData[0].HYD) {
                //         responseData[0].HYD = 0;
                //       }
                //       if (!responseData[0].LLS) {
                //         responseData[0].LLS = 0;
                //       }
                //       if (!responseData[0].SYS) {
                //         responseData[0].SYS = 0;
                //       }
                //       if (!responseData[0].DATA_UPDATE_TIME) {
                //         responseData[0].DATA_UPDATE_TIME = '无';
                //       }
                //       if (!responseData[0].SCHOOL_BM_DISPLAY) {
                //         responseData[0].SCHOOL_BM_DISPLAY = '无';
                //       }
                //       that.customerDataTmp = responseData[0];
                //     }else {
                //       Toast('暂无卡片案例数据数据');
                //     }
                //   }else {
                //     Toast('获取卡片案例数据失败');
                //   }
                // }).catch(function(err){
                //   Toast(err);
                // });
                //应用tab案例
                // axios({
                //     method:"POST",
                //     url:api.appsCustomer,
                //     params:appOption
                // }).then(function(response){
                //   if (response.data.code == 0) {
                //     if (response.data.datas.customer.rows && response.data.datas.customer.rows.length>0) {
                //         // that.customInfo = {};
                //         that.customInfo = response.data.datas.customer.rows[0];
                //         if(that.customInfo.INFORMATION){
                //             // var regString = /getFileByToken\/(\w+)\.do/g;
                //             // that.customInfo.INFORMATION = that.customInfo.INFORMATION.replace(regString,'getSingleImageByToken.do?fileToken=$1&type=3');
                //             var regString = /\/emap\/sys\/emapcomponent\/file\/getFileByToken\/(\w+)\.do/g;
                //             var totalUrl = WEBPACK_CONIFG_HOST + "sys/emapcomponent/file/"+"getSingleImageByToken.do?fileToken=$1&type=3";
                //             that.customInfo.INFORMATION = that.customInfo.INFORMATION.replace(regString,totalUrl);
                //             that.customInfo.INFORMATION = that.customInfo.INFORMATION.replace(/\\/g,'');

                //             //设置图片放大功能
                //             wechatShare.setImagePhotoSwipe('.app-case-text img');
                //         }
                //     }
                //   }else {
                //     Toast('获取案例数据失败');
                //   }
                // }).catch(function(err){
                //   Toast(err);
                // });
                
                //设置app tab框部分的高度
                this.appTabContainerHeight = (document.body.clientHeight - 46 - 79 - 109) + 'px';//46是底部导航栏的高度 79是顶部tab头的高度,109是标签描述
                //查询应用相关的问题
                axios({
                    method:"POST",
                    url:api.queryQuestionByAppId,
                    params:{
                        appId:that.$route.query.APP_ID?that.$route.query.APP_ID:that.$route.query.WID
                    }
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.list.rows) {
                        that.questionArray = response.data.datas.list.rows;
                    }else {
                        //Toast('没有的相关问题');
                        that.noQuestion = true;
                    }
                  }else {
                    Toast('获取相关问题失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
                //查询系统电话
                axios({
                    method:"POST",
                    url:api.sysSetting
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.setting.rows) {
                        that.telephone = 'tel:'+response.data.datas.setting.rows[0].LXFS;
                    }else {
                        that.telephone = 'javascript:void(0)';
                        Toast('请设置系统电话');
                    }
                  }else {
                    Toast('获取系统电话失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            goSchoolPage(item) {
                //var routeApp = this.$route.query;
                if (Number(item.SCHOOL_COUNT)>0) {
                    this.$router.push({
                      name: 'school',
                      query: {
                        item: JSON.stringify(item)
                      }
                    });
                }
            },
            setImgUrlFromId(id) {
                return WEBPACK_CONIFG_HOST +'sys/appstoreservice/attrs/preview.do?token=' + id+'&type=3';
            },
            goQuickAskPage() {
                this.$router.push({
                   name: 'quickAskContent',
                   query: {
                        type:'app',
                        question:this.appInfo
                   }
                });
            },
            goGetInfoPage() {
                this.$router.push({
                   name: 'getInfo',
                   query: {
                    WID:this.appInfo.WID
                  }
                });
            },
            goCustomerCase() {
              var that = this;
              axios({
                  method:"POST",
                  url:api.appsCustomer,
                  params:{'APP_ID':that.$route.query.APP_ID}
              }).then(function(response){
                if (response.data.code == 0) {
                  if (response.data.datas.customer.rows && response.data.datas.customer.rows.length>0) {
                      that.$router.push({
                        name: 'custom',
                        query:response.data.datas.customer.rows[0]
                      });
                  }
                }else {
                  Toast('获取案例数据失败');
                }
              }).catch(function(err){
                Toast(err);
              });
            }
        },
        mounted () {
          //debugger
          
        },
        watch:{
            selected:function(value,oldvalue){
                switch(value){
                  case 'introduction':
                        localStorage.appSelectedTab = 'introduction';
                        break;
                  case 'case':
                        localStorage.appSelectedTab = 'case';
                        break;
                  case 'question':
                        localStorage.appSelectedTab = 'question';
                        break;
                }
            },
            asBillUncheck:function(value,oldvalue) {
                localStorage.setItem("asBillUncheck",value);
                console.log(localStorage.getItem("asBillUncheck"))
            }
        },
        created() {
            var that = this;
            if (localStorage.appSelectedTab) {
              that.selected = localStorage.appSelectedTab;
            }
            // DingTalkPC.device.notification.alert({
            //     message: "app-detail",
            //     title: "提示",//可传空
            //     buttonName: "收到",
            //     onSuccess : function() {
            //         /*回调*/
            //     },
            //     onFail : function(err) {}
            // });
            that.appMain();
        },
        components:{
            [Button.name]: Button,
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [MessageBox.name]: MessageBox,
            [Toast.name]: Toast,
            customCase,
            questionItem,
            ICountUp
        }
    }
</script>
<style>
.app-content {
    font-size: 12px;
    /*overflow:auto;*/
    /*padding-bottom:50px;*/
}
.app-content-body {
    overflow:auto;
    /*border-left:solid 1px #ddd;
    border-right:solid 1px #ddd;*/
}
.app-name {
}
.app-name-info {
    font-weight: 600;
}
.app-info {
    font-size:14px;
    border-bottom:solid 1px #eee;
}
.app-intro-text {
    font-size: 14px;
    line-height: 20px;
    word-wrap: break-word;
}
.app-intro-text img {
    max-width:100% !important;
}
.app-tel-line {
    text-decoration: none;color: #333;
}
.app-col-6 {
    width: 50%;
    float: left;
}
.app-col-12 {
    width: 100%;
    float: left;
}
.as-color-warning-lv2 {
    color: #f8cf12;
}
.as-bgColor-warning-lv2 {
    background-color: #f8cf12;
}
.as-bgColor-warning-lv1 {
    background-color: #f4b711;
}
.app-service-school {
    float: right;
    font-size: 12px;
    /*font-weight: 600;*/
}
.app-service-schoolNum {
    color:#999;
    font-size: 14px;
    display: inline-block;
}
.app-tab-container {
    background-color: #fff;
}
.app-tab-container .mint-tab-item-label {
    font-size: 14px;
    font-weight: 600;
}
.mint-tab-container {
    border-top: solid 1px #eee;
    position: relative;
    top: -1px;
}
 .mint-navbar .mint-tab-item:first-child .mint-tab-item-label{
    border-right: solid 1px #eee;
}
.mint-navbar .mint-tab-item:last-child .mint-tab-item-label {
    border-left: 1px solid #eee;
}
.app-name-des {
    word-wrap: break-word;
    font-size: 14px;color: #999;
}
.app-buttonContainer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    width: 100%;
    background-color: #fff;
    border-top: solid 1px #f6f6f6;
    display: flex;
}
.app-button {
    width: 50%;
    float: left;
    font-size: 16px;
    position: relative;
}
.app-button-text {
    font-size: 12px;
}
.app-content .mint-navbar .mint-tab-item {
    padding: 10px 0;
}
.app-content .mint-navbar .mint-tab-item.is-selected {
    border-bottom-color:#2196F3 ;
    color: #2196F3;
}
.app-button-line {
    width: 0px;
    height: 30px;
    position: absolute;
    border-left:solid 1px #ddd;
    float: left;
    right:50%;
    top: 6px;
}
.app-button-disable {
    color: #fff;
    background-color: #ddd !important;
    border: none;
    cursor: not-allowed;
    opacity: .65;
    box-shadow: 0 0 0 rgba(0,0,0,0);
}
.icon-keyboardarrowright{
    position: relative;
    top: 1px;
    color: #666;
}
.as-bill-uncheck.app-detail{
    top: 5px;
    right: 10px;
    position: absolute;
}
.as-string-cut {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
}
.app-intro-button {
    width: 90%;
    margin: 0 auto;
    height: 36px;
    border: solid 1px #ddd;
    color: #666;
    background-color: #f6f6f6;
    text-align: center;
    display: inherit;
    border-radius: 4px;
}
.app-buttonContainer-wx ,.app-buttonContainer-bh {
    display: none;
}
.app-tab-container figure {
    padding: 0px !important;
    margin: 0px !important;
}
/*去掉按钮的样式更改*/
.mint-tab-container-item {
    background-color: #fff;
}
.video-js {
  width: 100% !important;
  /* height:212px !important; */
}
.data-case-arrow {
  display: inline-block;
  width:8px;
  height: 8px;
  transform: rotate(45deg);
  border-top: solid 1px #666;
  border-right: solid 1px #666;
}
.sex-uls {
  padding: 8px 0;
}
.sex-uls li {
  padding: 4px 4px;
  font-size:16px;
}
.sex-uls li span {
  display: inline-block;
  width:8px;
  height:8px;
  border-radius: 4px;
  margin-right: 8px;
  background: #666;
}
.role-uls {
  padding: 8px 0;
}
.role-uls li {
  padding: 4px 4px;
  font-size:16px;
}
.role-uls li span {
  display: inline-block;
  width:8px;
  height:8px;
  border-radius: 4px;
  margin-right: 8px;
  background: #666;
}
.sex-uls li label {
  display: inline-block;
  width: 50px;
}
.data-main .main-container {
    border:solid 1px #ddd;
    border-radius:4px;
    background-color:#0D152F;
    color:#fff;
}
.data-main .sub-container {
    border:solid 1px #ddd;
    border-radius:4px;
}
 .data-main .main-container > div{
  background: url(../../../static/assets/main-background.png) top center no-repeat;
    background-size: 100% 100%;
 }
 .data-border-radius {
  border:solid 1px #ddd;border-radius:4px;
 }
 .data-case-school {
  font-size:18px;font-weight: 600;
 }
 .data-case-updateTime {
  color:#666;line-height: 24px;
 }
  .data-case-updateTime label{
  display:inline-block;padding:0 4px;
  }
  .data-main-title {
    font-size:14px;line-height: 14px;font-weight: 600;border-left:solid 2px #27EFA6;padding-left:8px;
  }
  .data-main-title label {
    color:rgba(255,255,255,0.23);line-height: 14px;
  }
  .data-main-title label.sub-title {
    color:rgba(0,0,0,0.23);line-height: 14px;
  }
  .data-main-title label span {
    display:inline-block;padding:0 4px;
  }
  .data-echart {
    width:106px;height:106px;margin:0 auto;
  }
  .data-box {
    border:solid 1px #ddd;border-radius:4px;
    background: #fff;
  }
  /*.data-main,.data-role,.data-sex {
    background: #000;
  }*/
</style>