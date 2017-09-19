<template>
    <div class="contact-content" :style="{height:contactHeight}">
        <div>
            <img class="contact-img" :src="'./static/assets/knowmore.png'" />
        </div>
        <div class="contact-forms">
            <mt-field label="联系人" placeholder="联系人" v-model="username" :class="{'contact-form-none':envFlag}"></mt-field>
            <mt-field label="学校" placeholder="学校" v-model="schoolname"  :class="{'contact-form-none':envFlag}"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="联系方式" placeholder="联系方式" type="tel" v-model="phone"></mt-field>
        </div>
        <div class="bh-ph-16 bh-pv-8 contact-buttonContainer">
           <mt-button type="warning" size="large" class="contact-button" @click="contactUs">提交</mt-button> 
        </div>
    </div>
</template>
<style>
.contact-content {
    background-color: #fff;
}
.contact-buttonContainer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-top: solid 1px #eee;
}
.contact-button {
    width: 100%;
}
.contact-img {
    width: 100%;
    height: 132px;
}
.contact-forms .mint-cell-wrapper {
    background-image: -webkit-linear-gradient(top, #eee, #eee 50%, transparent 50%);
}
.contact-forms .mint-cell:last-child {
    background-image: -webkit-linear-gradient(top, #eee, #eee 50%, transparent 50%);
}
.mint-field-clear {
    display: none;
}
.contact-form-none {
  display: none !important;
}
</style>
<script>
    import { Button ,MessageBox,Field,Toast} from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    import wechatShare from '../../../static/mobile/js/wechatShare.js';
    export default {
        data () {
            return {
                username:'',
                schoolname:'',
                email:'',
                phone:'',
                contactHeight:'',
                envFlag:true
            }
        },
        methods:{
            contactUs() {
                var self = this;
                if (window.env == 'wx') {
                  if (!self.username) {
                      Toast('请填写联系人');
                      return;
                  }
                  if (!self.schoolname) {
                      Toast('请填写学校');
                      return;
                  }
                }
                if (self.email) {
                    if (self.email.indexOf('@')==-1) {
                        Toast('邮箱格式不正确');
                        return;
                    }  
                }else {
                    Toast('请填写邮箱');
                    return;
                }
                var parentRouterInfo = self.$route.query;
                 //提交联系人信息
                if (window.env == 'wx') {
                  axios({
                      method:"POST",
                      url:api.saveUserInfo,
                      params:{
                          LXR:self.username,
                          XX:self.schoolname,
                          LXFS:self.phone?self.phone:'',
                          YX:self.email,
                          FLAG:parentRouterInfo.FLAG,
                          APP_ID:parentRouterInfo.APP_ID
                      }
                  }).then(function(response){
                    //debugger
                    if (response.data.code == 0) {
                      Toast('提交信息成功');
                      history.back();
                    }else {
                      Toast('提交信息失败');
                      history.back();
                    }
                  }).catch(function(err){
                    Toast(err);
                  });
                }else {
                  axios({
                      method:"POST",
                      url:api.iWantIt,
                      params:{
                          appId:parentRouterInfo.APP_ID,//应用id
                          userName:parentRouterInfo.info.name,//用户名
                          userBh:parentRouterInfo.info.studentNo,//学号
                          zw:'',//职务
                          schoolBh:parentRouterInfo.info.tenant,//学校编码
                          email:parentRouterInfo.info.email,
                          schoolName:parentRouterInfo.info.tenantShortName,//学校名称
                          userTel:parentRouterInfo.info.telePhone,//电话号码
                          userType:parentRouterInfo.info.userRole,//用户类型
                      }
                  }).then(function(response){
                    if (response.data.code == 0) {
                      Toast('想要成功');
                      // that.billSelectedTag = true;
                      // that.asBillUncheck = true;
                    }else {
                      Toast('再试一次~');
                    }
                  }).catch(function(err){
                    Toast(err);
                  });
                }
            },
            loginUserInfo(){
                var that = this;
                //请求联系人信息
                axios({
                    method:"POST",
                    url:api.loginUserInfo,
                    params:{
                    }
                }).then(function(response){
                  //debugger
                  if (response.data.code == 0) {
                    var responseData = response.data.datas.loginUserInfo.rows;
                    if (responseData && responseData.length>0) {
                        that.username = responseData[0].LXR;
                        that.schoolname = responseData[0].XX;
                        that.email = responseData[0].YX;
                        that.phone = responseData[0].LXFS;
                    }
                  }else {
                    Toast('查询联系人信息失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            }
        },
        created() {
            var that = this;
            if (window.env == 'wx') {
                that.envFlag = false;
                //只有微信环境下才回显联系数据
                that.loginUserInfo();
            }else {
                that.envFlag = true;
            }
            //设置contact中间内容部分的高度
            this.contactHeight = document.body.clientHeight + 'px';
            BH_MIXIN_SDK.setTitleText('了解更多');
            var contactionUrl = window.location.href.split('#/')[0] + '#/?';
            wechatShare.wechatShare({
                 title: '主页', // 分享标题
                 desc: '主页', // 分享描述
                 link: contactionUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                 imgUrl: 'http://www.baidu.com/img/bd_logo1.png', // 分享图标
                 type: '', // 分享类型,music、video或link，不填默认为link
                 dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                 success: function() {
                     // 用户确认分享后执行的回调函数
                     // 统计分享的类型与ID
                     axios({
                         method:"POST",
                         url:api.staticsOfShareApp,
                         params:{
                             TYPE:1
                         }
                     }).then(function(response){

                     });
                 },
                 cancel: function() {
                     // 用户取消分享后执行的回调函数
                 }
            });
        },
        components:{
            [Button.name]: Button,
            [MessageBox.name]: MessageBox,
            [Field.name]: Field,
            [Toast.name]: Toast
        }
    }
</script>