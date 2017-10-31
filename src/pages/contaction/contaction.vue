<template>
    <div class="contact-content" :style="{height:contactHeight}">
        <div class="contact-forms">
            <mt-field label="联系人" placeholder="联系人" v-model="username" ></mt-field>
            <mt-field label="学校" placeholder="学校" v-model="schoolname" ></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <!-- <mt-field label="联系方式" placeholder="联系方式" type="tel" v-model="phone"></mt-field> -->
        </div>
        <div class="bh-ph-16 bh-pv-8 contact-buttonContainer">
           <mt-button type="warning" size="large" class="contact-button" @click="saveSalesCustomLog">发送资料</mt-button> 
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
            saveSalesCustomLog() {
                var self = this;
                if (!self.username) {
                    Toast('请填写联系人');
                    return;
                }
                if (!self.schoolname) {
                    Toast('请填写学校');
                    return;
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
                  axios({
                      method:"POST",
                      url:api.sendAppCustomLog,
                      params:{
                          custom_name:self.username,
                          custom_school:self.schoolname,
                          appId:parentRouterInfo.appId,//parentRouterInfo.appId
                          custom_email:self.email
                      }
                  }).then(function(response){
                    if (response.data.code == 0) {
                      Toast('资料已发送至客户邮箱');
                      self.$router.go(-1);
                    }else {
                      Toast('发送客户资料失败');
                    }
                  }).catch(function(err){
                    Toast(err);
                  });
            }
        },
        created() {
            var that = this;
            this.contactHeight = document.body.clientHeight + 'px';
            //BH_MIXIN_SDK.setTitleText('发送资料');    
        },
        components:{
            [Button.name]: Button,
            [MessageBox.name]: MessageBox,
            [Field.name]: Field,
            [Toast.name]: Toast
        }
    }
</script>