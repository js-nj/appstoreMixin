<template>
    <div>
        <mt-tab-container v-model="selected" :style="{height:pageHeight}" style="overflow:auto;">
          <!-- 首页，推荐应用 -->
          <mt-tab-container-item id="bestRecomend" >
              <div class="as-index-search-instead" @click="goSubClassification({parentIndex:'index'})"></div>
              <div class="as-index-searchBg" >
                <img class="as-index-searchImg" :src="'./static/assets/indexSearch.png'" />
                <mt-search
                  v-model="value"
                  cancel-text="取消"
                  :placeholder="placeholder" class="as-search">
                </mt-search>
              </div>
              <com-test :imgs="imgs"></com-test>
              <quick-ask></quick-ask>
              <div class="as-content" id="as-index-items">
                <!-- tab模板 -->
                <div v-for="item in mainDatas" v-if="item.tabContent.length>0">
                 <div class="bh-pv-16 as-tab">
                   <div class="as-tab-content bh-ph-16" :class="item.tabType">
                     <p class="as-tab-title">{{item.tabName}}</p>                  
                   </div>
                 </div>
                 <list-item :items="item.tabContent"></list-item>
               </div>
              </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="feedBack">
            <quick-ask></quick-ask>
            <div class="bh-clearfix bh-ph-16 bh-pv-16" style="position:relative;border-top:solid 1px #eee;border-bottom:solid 1px #eee;" @click="getQuestionWithMe">
                <div class="bh-pull-left">
                  <img :src="'./static/assets/replay.png'" style="width: 20px;"/>
                  <h5 class="" style="font-size: 16px;font-weight: 600;display:inline-block;">待我解答的问题</h5>
                </div>
                <div class="" style="    position: absolute;top: 6px;right: 6px;">
                    <mt-badge style="display:inline-block;font-size:10px;" type="error">{{questionLength}}</mt-badge>
                    <i class="iconfont icon-keyboardarrowright" style="color: #b4b4b4;font-size: 30px;vertical-align: sub;"></i>
                </div>
            </div>
            <question-item :items="questionArray"></question-item>
          </mt-tab-container-item>
        </mt-tab-container>
        <!-- tabbar -->
        <mt-tabbar v-model="selected" :fixed='true' class="as-index-tabbar">
          <mt-tab-item id="bestRecomend">
            <div>
              <div class="tab-icon" :class="classBestRecomend"></div>
            </div>
            精品推荐
          </mt-tab-item>
          <mt-tab-item id="feedBack" >
            <div>
              <div class="tab-icon" :class="classFeedBack"></div>
            </div>
            问题反馈
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script type="text/javascript">
    import { 
      Navbar,
      TabItem,
      Swipe, 
      SwipeItem,
      Search,
      Header,
      Button,
      Cell,
      TabContainer,
      TabContainerItem,
      Tabbar,
      Toast,
      Badge
    } from 'bh-mint-ui2';
    import axios  from 'axios';
    import _ from 'lodash'; //引入lodash
    import comTest from '../../components/comTest.vue';
    import listItem from '../../components/listItem.vue';
    import billItem from '../../components/billItem.vue';
    import billGenerated from '../../components/billGenerated.vue';
    import quickAsk from '../../components/quickAsk.vue';
    import questionItem from '../../components/questionItem.vue';
    import wechatShare from '../../../static/mobile/js/wechatShare.js';
    import api from '../../api.js';

    //请求canceltoken列表
    let sources = [];
    export default {
        data(){
            return {
                pageHeight:'',
                mainDatas:[{
                  tabName:'热门应用',
                  tabContent:[],
                  tabType:'as-tabColor-yellow'
                },
                {
                  tabName:'最新应用',
                  tabContent:[],
                  tabType:'as-tabColor-yellow'
                },
                {
                  tabName:'客户案例',
                  tabContent:[],
                  tabType:'as-tabColor-primary'
                }],
                placeholderDefault:'个应用，为您服务',
                placeholder:'',
                billSelected:'toBeGenerated',
                selected:'bestRecomend',
                classBestRecomend:'tab-icon-bestRecomend-selected',
                classFeedBack:'tab-icon-feedBack',
                classAppType:'tab-icon-appType',
                classMyBill:'tab-icon-myBill',
                value:'',
                page: 'about',
                imgs:[],
                removeItems:[],
                hotApps:[],
                newApps:[],
                customerCases:[],
                selfDefineTabs:[],
                selfDefineTabsTmp:[],
                classifications:[],
                totalApp:{
                  TITLE:'全部',
                  APP_COUNT:'',
                  IMG:'./static/assets/all-icon.png',
                  parentIndex:'totalApp'
                },
                billList:[],
                billGenerated:[],
                tagIndex:'',
                subTagCont:'100%',
                subTagAll:true,
                mybillTabcontentWidth:'',
                billSearchTag:false,
                allLoadedIndex:false,
                allLoadedGeneratedIndex:false,
                questionArray:[],
                questionLength:''
                //loadmoreBillItem:'loadmoreBillItem'
            }
        },
        watch:{
          selected:function(value,oldvalue){
            switch(value){
              case 'bestRecomend':
                  localStorage.selectedTab = 'bestRecomend';
                  this.classBestRecomend = 'tab-icon-bestRecomend-selected';
                  this.classFeedBack = 'tab-icon-feedBack';
                  BH_MIXIN_SDK.setTitleText('精品推荐');
                  document.body.removeEventListener('touchmove', scrollCallback);
                  this.requestBestRecomendAjax();
                  //this.queryCurrentUserInfo();
                  //this.login();
                  break;
              case 'feedBack':
                  localStorage.selectedTab = 'feedBack';
                  this.classBestRecomend = 'tab-icon-bestRecomend';
                  this.classFeedBack = 'tab-icon-feedBack-selected';
                  BH_MIXIN_SDK.setTitleText('问题反馈');
                  document.body.removeEventListener('touchmove', scrollCallback);
                  this.queryFeedBackDatas();
                  break;
            }
          }
        },
        created() {
          var that = this;
          console.log('测试钉钉title');
          console.log(BH_MIXIN_SDK);
          BH_MIXIN_SDK.setTitleText('APP STORE');
          that.pageHeight = (document.body.clientHeight) - 50 +'px';
          var indexUrl = window.location.href;
          var routeParam = that.$route.query;
          if (routeParam.selectedTab) {
            that.selected = routeParam.selectedTab;
          }else {
            console.log('localStorage.selectedTab:'+localStorage.selectedTab)
            if (localStorage.selectedTab && localStorage.selectedTab =='feedBack') {
              that.selected = 'feedBack';
            }else {
              that.selected = 'bestRecomend';
              that.requestBestRecomendAjax();
            }
          }
          //that.login();
          //设置bill中间内容部分的高度
          that.mybillTabcontentWidth = (document.body.clientHeight - 51 - 43) + 'px';//51是底部导航栏的高度 43是顶部tab头的高度
          document.getElementsByTagName('body')[0].style.height = document.body.clientHeight+'px';
        },
        methods:{
          requestBestRecomendAjax() {
            var self = this;
            //tab页进来重新请求
            self.mainDatas = [{
              tabName:'热门应用',
              tabContent:[],
              tabType:'as-tabColor-yellow'
            },
            {
              tabName:'最新应用',
              tabContent:[],
              tabType:'as-tabColor-yellow'
            },
            {
              tabName:'客户案例',
              tabContent:[],
              tabType:'as-tabColor-primary'
            }];
            //轮播图数据
            axios({
                method:"POST",
                url:api.appsLbtList,
                params:{
                    syAppClassify:'2',
                    pageNum:1,
                    pageSize:8
                }
            }).then(function(response){
              var responseData = response.data.datas.lbtList.rows;
              if (response.data.code == 0) {
                if (responseData && responseData.length > 0) {
                  self.imgs = responseData.map(function(item){
                      //获取图片src数据流,从id到url
                      item.YDTP = self.setImgUrlFromId(item.YDTP);
                      //item.PIC = item.YDTP;
                      return item;
                  });
                }
              }else {
                Toast('获取轮播图数据失败');
              }
            }).catch(function(err){
              Toast('appsLbtList');
              Toast(err);
            });
            //热门应用
            axios({
                method:"POST",
                url:api.appsRmyyList,
                params:{
                    syAppClassify:'2',
                    pageNum:1,
                    pageSize:15
                }
            }).then(function(response){
              var responseData = response.data.datas.rmyyList.rows;
              if (response.data.code == 0) {
                if (responseData && responseData.length>0) {
                  self.hotApps = responseData.map(function(item){
                    item.TYPE = 'app';
                    //item.PIC = item.IMAGE;
                    item.IMAGE = self.setImgUrlFromId(item.IMAGE);
                    return item;
                  });
                  self.mainDatas[0].tabContent = self.hotApps;
                  //请求用户身份信息，必须在异步的异步中
                  //self.queryCurrentUserInfo();
                } 
              }else {
                Toast('获取热门应用数据失败');
              }
            }).catch(function(err){
              //Toast('appsRmyyList');
              Toast(err);
            });
            //最新应用
            axios({
                method:"POST",
                url:api.appsZxyyList,
                params:{
                    syAppClassify:'2',
                    pageNum:1,
                    pageSize:6
                }
            }).then(function(response){
              var responseData = response.data.datas.zxyyList.rows;
              if (response.data.code == 0 ) {
                if (responseData && responseData.length>0) {
                  self.newApps = responseData.map(function(item){
                      item.TYPE = 'app';
                      //item.PIC = item.IMAGE;
                      item.IMAGE = self.setImgUrlFromId(item.IMAGE);
                      return item;
                  });
                  self.mainDatas[1].tabContent = self.newApps;
                }  
              }else {
                Toast('获取最新应用数据失败');
              }
            }).catch(function(err){
              //Toast('appsZxyyList');
              Toast(err);
            });
            //客户案例
            axios({
                method:"POST",
                url:api.appsKhalList,
                params:{
                    syAppClassify:'2',
                    pageNum:1,
                    pageSize:6
                }
            }).then(function(response){
              var responseData = response.data.datas.khalList.rows;
              if (response.data.code == 0) {
                if (responseData && responseData.length>0) {
                  self.customerCases = responseData.map(function(item){
                      item.TYPE = 'custom';
                      //item.PIC = item.BADGE;
                      item.BADGE = self.setImgUrlFromId(item.BADGE);
                      return item;
                  });
                  self.mainDatas[2].tabContent = self.customerCases;
                }
              }else {
                Toast('获取客户案例数据失败');
              }
            }).catch(function(err){
              //Toast('appsKhalList');
              Toast(err);
            });
            //自定义tab类型
            axios({
                method:"POST",
                url:api.zdyTab,
                params:{
                    pageNum:1,
                    pageSize:15
                }
            }).then(function(response){
              
              if (response.data.code == 0) {
                var responseData = response.data.datas.list.rows;
                if (responseData && responseData.length>0) {
                  self.selfDefineTabs = responseData;
                  //循环每一个自定义的tab
                  //var selfDefineTabsArray = [];
                  self.selfDefineTabs.forEach(function(sub,num){
                      sub.tabType = 'as-tabColor-purple';
                      sub.tabName = sub.NAME1;
                      sub.tabContent = [];
                      //请求对应tab内的list内容
                      axios({
                          method:"POST",
                          url:api.zdyList,
                          params:{
                              syAppClassify:'2',
                              TAB_ID:sub.WID,
                              pageNum:1,
                              pageSize:6
                          }
                      }).then(function(subresponse){
                        var subresponseData = subresponse.data.datas.zdyList.rows;
                        if (subresponse.data.code == 0) {
                          if (subresponseData && subresponseData.length>0) {
                            var tmpObj= {
                              tabContent:[]
                            };
                            tmpObj.tabContent = subresponseData.map(function(app){
                                app.IMAGE = self.setImgUrlFromId(app.IMAGE);
                                app.TYPE = 'app';
                                return app;
                            });
                            // debugger
                            self.$set(self.selfDefineTabs, num, _.extend(sub,tmpObj));
                            //根据请求结构更新父结构的子数据
                            self.$set(self.mainDatas, num + 3, self.selfDefineTabs[num]);   
                          }else {
                            console.log('self.mainDatas:'+self.mainDatas.length)
                            //无子数据的分类删除掉
                            //self.mainDatas.splice(num + 3,1);
                          }
                        }else {
                          Toast('获取自定义栏内容失败');
                        }
                      }).catch(function(err){
                        //Toast('zdyList');
                        Toast(err);
                      });
                      //按照请求数据的顺序先导入父结构
                      self.mainDatas = self.mainDatas.concat(self.selfDefineTabs[num]);
                  });
                }  
              }else {
                Toast('获取自定义栏失败');
              }
            }).catch(function(err){
              Toast(err);
              //Toast('zdyTab')
            });
          },
          queryFeedBackDatas(){
            var that = this;
            that.queryQuestionByProduceId();
            that.queryQuestionByUserId();
          },
          queryQuestionByProduceId() {
            var self = this;
            axios({
                method:"POST",
                url:api.queryQuestionByProduceId,
                params:{}
            }).then(function(response){
              
              if (response.data.code == 0) {
                var responseData = response.data.datas.list.rows;
                if (responseData && responseData.length>0) {
                  self.questionArray = responseData;
                }
              }else {
                Toast('获取相关问题列表失败');
              }
            }).catch(function(err){
              Toast(err);
              //Toast('queryQuestionByProduceId')
            });  
          },
          queryQuestionByUserId(){
            var self = this;
            axios({
                method:"POST",
                url:api.queryQuestionByUserId,
                params:{}
            }).then(function(response){
              //alert(JSON.stringify(response.data));
              //var responseData = response.data.datas.list.rows;
              if (response.data.code == 0) {
                self.questionLength = response.data.datas.list.totalSize;
              }else {
                Toast('获取个人问题数据失败');
              }
            }).catch(function(err){
              Toast(err);
              //Toast('queryQuestionByUserId')
            }); 
          },
          getQuestionWithMe(){
            if (this.questionLength > 0) {
              this.$router.push({
                 name: 'questionReplaying',
                 query: ''
              });
            }
          },
          goSubClassification(item) {
            this.$router.push({
              name: 'subClassification',
              query: {
                  item: JSON.stringify(item)
              }
            });
          },
          setImgUrlFromId(id) {
            return WEBPACK_CONIFG_HOST +'sys/appstoreservice/attrs/preview.do?token=' + id+'&type=3';
          }
        },
        components: {
            [Swipe.name]: Swipe,
            [Search.name]: Search,
            [SwipeItem.name]: SwipeItem,
            [Header.name]: Header,
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [Tabbar.name]: Tabbar,
            [Cell.name]: Cell,
            [Button.name]: Button,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            [Toast.name]: Toast,
            [Badge.name]: Badge,
            comTest,
            listItem,
            billItem,
            billGenerated,
            quickAsk,
            questionItem
        }
    }
</script>
<style>
header.mint-header {
  background-color: #fff;
  color:#333;
}
.index{
    background:#ffffff;
}
.right_icon{
    float: right;
    height: 50px;
    padding-right: 8px;
}
.as-content {
  /*去掉按钮的样式更改*/
  /*padding-bottom: 51px;*/
}
.as-search {
  position: absolute;
  width: 100%;
}
.as-pv-11 {
  padding:11px 0;
}
.as-tab {
  border-top: solid 1px #eee;
  background-color: #fff;
}
.as-tabColor-yellow {
  border-left: solid 4px #FCB711;
}
.as-tabColor-primary {
  border-left: solid 4px #2196F3;
}
.as-tabColor-purple {
  border-left: solid 4px #9B11FC;
}
.as-tab-content .as-tab-title {
  /*line-height: 16px;*/
  font-size: 18px;
  font-weight: 600;
}
.as-tab-title-english {
  font-size:12px;
}
.as-index-search-instead {
  width: 100%;
  height: 45px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.as-index-searchBg {
  position: relative;
}
.as-index-searchImg {
  height:44px;
  width:100%;
  position:absolute;
  z-index: 1;
}
.as-search .mint-searchbar {
    background: none;
}
.as-search .mint-searchbar .mint-searchbar-inner {
    border-radius:16px;
}
.as-search .mint-searchbar .mint-searchbar-inner .mintui-search{
    position: relative;
    left: 2px;
    top: 1px;
}
.as-search .mint-searchbar .mint-searchbar-inner .mint-searchbar-core{
    position: relative;
    left: 4px;
}
input::-webkit-input-placeholder {
　　color:#999 !important;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #999; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #999; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #999; 
}
.appType-header {
  background-color: #f6f6f6;
}
.appType-body {
  background-color: #fff;
}
.appType-item {
  background-color: #fff;
  border-bottom: solid 1px #eee;
}
.appType-item:last-child {
      margin-left: 0px !important;
    padding-left: 14px !important;
}
.appType-item-img {
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
}
.appType-item-title {
  display: inline-block;

}
.appType-item-cout {
  display: inline-block;
  float: right;
  font-size: 12px;
  line-height: 22px;
      margin-right: 6px;
}
.appType-item-arrow {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: solid 2px #eee;
    border-right: solid 2px #eee;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: relative;
    top: 1px;
}
.myBill .mint-navbar .mint-tab-item {
    padding: 13px 0;
}
.myBill .mint-navbar .mint-tab-item.is-selected {
    border-bottom-color:#2196F3 ;
    color: #2196F3;
}
.mybill-empty-content {
  position: absolute;
  top: 50%;
    left: 50%;
    margin-top: -85px;
    margin-left: -90px;
}
.mybill-empty-tips {
  position:relative;
}
.mybill-empty-tips img {
  width: 47px;height: 54px;
}
.mybill-mt-button {
  margin: 0 auto;width: 50%;
}
.mint-swipe .mint-swipe-item img {
  width: 100% !important;
}
.as-index-tabbar.mint-tabbar>.mint-tab-item {
  background-color: #fff !important;
}
.as-index-tabbar.mint-tabbar {
      border-top: solid 1px #ddd;
      background:none; 
}
.as-color-666 {
  color:#666;
}
.tab-icon {
  width: 24px;
  height: 24px;
  position: relative;
  top: -4px;
  margin:0 auto;
}
.tab-icon-bestRecomend {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/bestRecomend-D.png) top center no-repeat;
    background-size: 100% 100%;
}
.tab-icon-bestRecomend-selected {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/bestRecomend-P.png) top center no-repeat;
    background-size: 100% 100%;
}
.tab-icon-feedBack {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/feedBack-P.png) top center no-repeat;
    background-size: 100% 100%;
}
.tab-icon-feedBack-selected {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/feedBack-D.png) top center no-repeat;
    background-size: 100% 100%;
}
.tab-icon-appType {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')
    * 相对vue文件引用图片
    */
    background: url(../../../static/assets/appType-D.png) top center no-repeat;
    background-size: 100% 100%;
}
.tab-icon-appType-selected {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/appType-P.png) top center no-repeat;
    background-size: 100% 100%;
}.tab-icon-myBill {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/myBill-D.png) top center no-repeat;
    background-size: 100% 100%;
}
.tab-icon-myBill-selected {
    /*vue背景图不可以写成这样的路径url('./static/assets/bestRecomend-D.png')*/
    background: url(../../../static/assets/myBill-P.png) top center no-repeat;
    background-size: 100% 100%;
}
.mint-swipe .mint-swipe-indicator.is-active {
  background-color: #FCB711 !important;
  opacity: 1;
}
.sub-class-noresult{
  color:#999;
  font-size:14px;
  text-align:center;    
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -42px;
}
.as-bill-uncheck {
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 4px;
  position: relative;
  top: 0;
  right: -16px;
  display: inline-block;
}
.as-index-tabbar .mint-tab-item .mint-tab-item-label {
  border-right: solid 1px #eee;
}
.as-search input.mint-searchbar-core {
  width:95% !important;
}
</style>