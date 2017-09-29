<template>
    <transition :name="transitionName" duration="0">
        <router-view class="child-view"></router-view>  
    </transition>
</template>
<style type="text/css">

.child-view {
  -webkit-transition: all 0.3s cubic-bezier(.55,0,.1,1);
  transition: all 0.3s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0 !important;
  -webkit-transform: translateX(100%) !important;
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0 !important;
  -webkit-transform: translateX(-100%) !important;
}
.hid{
  position: fixed;
}
</style>
<script>
    import style from './style.css';
    import axios  from 'axios';
    import api from './api.js';
    export default {
        data () {
            return {
              transitionName: 'slide-left',
              routeToName:'',
              routeFromName:''
            }
        },
        watch: {
            '$route' (to, from) {
              if (to.name == 'index' || (to.name == this.routeFromName)) {
                this.transitionName = 'slide-right';
              }else {
                this.transitionName = 'slide-left';
              }
              if (to.name == 'index') {
                 this.routeFromName = '';
              }else {
                this.routeFromName = from.name;
              }
              document.body.removeEventListener('touchmove', scrollCallback);
            }
        },
        beforeCreate(){
          var self = this;
          //钉钉上将用户code传递给后台
          //alert(!sessionStorage.login)
          if (!sessionStorage.login) {
            console.log('dingding --------login')
            dd.runtime.permission.requestAuthCode({
                corpId: 'ding5b727efd1035c355', //企业id
                onSuccess: function(info) {
                    console.log('authcode:' + info.code);
                    window.authcode = info.code;
                    axios({
                        method:"POST",
                        url:api.getUserInfo,
                        params:{
                            weiXincode:window.authcode,
                            openId:""
                        }
                    }).then(function(response){
                      if (response.data.code == 0) {
                        //一次对话，表示已经登录
                        sessionStorage.login = true;
                        console.log('sessionStorage:'+sessionStorage);
                        self.queryCurrentUserInfo();
                      }else {
                        sessionStorage.login = false;
                        Toast('发送用户code失败');
                      }
                    }).catch(function(err){
                      Toast(err);
                    });
                },
                onFail: function(err) {
                    console.log('requestAuthCode fail: ' + JSON.stringify(err));
                }
            });
            localStorage.selectedTab = '';
            localStorage.appSelectedTab = '';
          }
        },
        methods:{
          queryCurrentUserInfo(){
            //获取用户身份信息
            axios({
                method:"POST",
                url:api.queryCurrentUserInfo,
                params:{
                    pageNum:1,
                    pageSize:15
                }
            }).then(function(response){
              //alert(JSON.stringify(response));
              if (response.data.code == 0) {
                var responseData = response.data.datas.list.rows;
                localStorage.personId = responseData[0].WID;
                localStorage.personGh = responseData[0].GH;
                console.log('window.personId:'+localStorage.personId)
                console.log('window.personGh:'+localStorage.personGh)
              }else {
                Toast('获取用户身份信息失败');
              }
            }).catch(function(err){
              Toast(err);
              //Toast('queryCurrentUserInfo');
            });
          }
        }
    }
</script>
