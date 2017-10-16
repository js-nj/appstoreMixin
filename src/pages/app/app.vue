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
                   <div class="app-col-6 bh-pv-8">终端类型：<label> {{appInfo.TYPE}}</label></div>
                   <div class="app-col-6 bh-pv-8" style="display:none;">版本号：<label>{{appInfo.VERSION}} </label></div>
                   <div class="app-col-6 bh-pv-8" style="display:none;">价格（￥）：<label>{{appInfo.PRICE}} </label></div>
                   <div class="app-col-6 bh-pv-8">厂商：<label>{{appInfo.FACTORY}} </label></div>
                   <div class="app-col-12 bh-pv-8">标签：<label>{{appInfo.BQ_DISPLAY}} </label></div>
               </div>    
           </div>
           <div class="app-tab-container" :style="{height:appTabContainerHeight}">
               <mt-navbar v-model="selected">
                 <mt-tab-item id="introduction">介绍</mt-tab-item>
                 <mt-tab-item id="case">案例</mt-tab-item>
                 <mt-tab-item id="question">问题</mt-tab-item>
               </mt-navbar>

               <!-- tab-container -->
               <mt-tab-container v-model="selected" class="bh-mt-4">
                 <mt-tab-container-item id="introduction">
                   <div v-if="introduction">
                       <div class="app-intro-video bh-mt-16" v-if="introduction.VIDEO_URL">
                           <!-- <iframe class="app-intro-video-iframe" :src="introduction.VIDEO_URL" allowFullScreen="true" quality="high" width="100%" height="230" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></iframe> -->
                           <video id="my-video" class="video-js" controls preload="auto" poster="" data-setup="{}">
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
                 <mt-tab-container-item id="case">
                   <custom-case :details="customInfo" :subTag="true" class="app-case-text"></custom-case>
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
            <div class="app-button bh-pv-4">
                <div class="app-col-6" >
                    <i class="iconfont icon-dianhua as-color-warning-lv2"></i>
                    <div class="app-button-text">
                        <a class="app-tel-line" :href="telephone">联系我</a>
                    </div>
                </div>   
            </div>
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
                noQuestion:false
            }
        },
        // computed:{
        //     marginBottomValue:function(){
        //         if (window.env == 'wx') {
        //             return '20px';
        //         }else {
        //             return '60px';
        //         }
        //     }
        // },
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
                this.appContainerHeight = (document.body.clientHeight) - 50 + 'px';
                BH_MIXIN_SDK.setTitleText('应用详情');
                //应用详情
                var option = {
                    WID:routeApp.APP_ID?routeApp.APP_ID : routeApp.WID
                };
                var appOption = {
                    APP_ID:routeApp.APP_ID?routeApp.APP_ID : routeApp.WID
                };
                if (routeApp.TYPEFROM && routeApp.TYPEFROM=='applist') {
                    option = {
                        WID:routeApp.WID
                    };
                    appOption = {
                        APP_ID:routeApp.WID
                    };
                }
                axios({
                    method:"POST",
                    url:api.appsDetail,
                    params:option
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.detail.rows && response.data.datas.detail.rows.length>0) {
                        that.appInfo = response.data.datas.detail.rows[0];
                        //微信分享
                        var targetUrl = window.location.href.split('#/')[0];
                        var targetPage = encodeURIComponent(targetUrl.split('?')[0]);
                        var targetUrlHash = window.location.href.split('#/')[1];
                        targetUrlHash = targetUrlHash.split('&type=')[0];
                        
                        var tmpHref = window.location.href;
                        //console.log('99999999:'+window.location.href);
                        //tmpHref = tmpHref.replace('123',targetUrlHash);
                        tmpHref = tmpHref.replace('#/',',');
                        //console.log('55555555:'+tmpHref);
                        
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
                            //that.introduction.VIDEO_URL = 'http://player.youku.com/embed/'+ that.introduction.VIDEO_URL;
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
                          var width = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
                          var videoStyle = document.getElementsByClassName("video-js")[0];
                          //debugger
                          //console.log(videoStyle);
                          videoStyle.style.height = (Number(width) * 9 / 16) + 'px';
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
                //应用tab案例
                axios({
                    method:"POST",
                    url:api.appsCustomer,
                    params:appOption
                }).then(function(response){
                  if (response.data.code == 0) {
                    if (response.data.datas.customer.rows && response.data.datas.customer.rows.length>0) {
                        // that.customInfo = {};
                        that.customInfo = response.data.datas.customer.rows[0];
                        if(that.customInfo.INFORMATION){
                            // var regString = /getFileByToken\/(\w+)\.do/g;
                            // that.customInfo.INFORMATION = that.customInfo.INFORMATION.replace(regString,'getSingleImageByToken.do?fileToken=$1&type=3');
                            var regString = /\/emap\/sys\/emapcomponent\/file\/getFileByToken\/(\w+)\.do/g;
                            var totalUrl = WEBPACK_CONIFG_HOST + "sys/emapcomponent/file/"+"getSingleImageByToken.do?fileToken=$1&type=3";
                            that.customInfo.INFORMATION = that.customInfo.INFORMATION.replace(regString,totalUrl);
                            that.customInfo.INFORMATION = that.customInfo.INFORMATION.replace(/\\/g,'');

                            //设置图片放大功能
                            wechatShare.setImagePhotoSwipe('.app-case-text img');
                        }
                    }
                  }else {
                    Toast('获取案例数据失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
                
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
            }
        },
        watch:{
            selected:function(value,oldvalue){
                switch(value){
                  case 'introduction':
                        localStorage.appSelectedTab = 'introduction';
                        document.getElementsByClassName('app-intro-video-iframe')[0].style.display = 'block';
                        break;
                  case 'case':
                        localStorage.appSelectedTab = 'case';
                        document.getElementsByClassName('app-intro-video-iframe')[0].style.display = 'none';
                        break;
                  case 'question':
                        localStorage.appSelectedTab = 'question';
                        //document.getElementsByClassName('app-intro-video-iframe')[0].style.display = 'none';
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
            questionItem
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
    width: 33.33%;
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
</style>