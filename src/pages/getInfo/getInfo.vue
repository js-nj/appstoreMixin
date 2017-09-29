<template>
<div>
    <div class="bh-clearfix bh-ph-16 bh-pv-16" style="border-bottom:solid 1px #eee;">
        <div class="bh-pull-left" style="">
            <div class="bh-ph-4">
                <h5 class="" style="font-size: 15px;font-weight: 600;display:inline-block;">销售获取资料</h5>
            </div>
            <div style="font-size: 14px;color: #999;">
                获取功能说明书、投标模板等相关资料
            </div>
        </div>
        <div class="bh-pull-right gi-button" style="height:43px;line-height:43px;">
            <mt-button class=" is-plain" type="primary" size="normal" style="padding: 0px 10px;" @click="getTargetAppInfo">点击获取</mt-button>
        </div>
    </div>
    <div class="bh-clearfix bh-ph-16 bh-pv-16" style="border-bottom:solid 1px #eee;" @click="goSendInfoPage">
        <div class="bh-pull-left">
            <div class="bh-ph-4">
                <h5 class="" style="font-size: 15px;font-weight: 600;display:inline-block;">给客户发送资料</h5>
            </div>
            <div style="font-size: 14px;color: #999;">
                将产品相关资料发送至用户邮箱
            </div>
        </div>
        <div class="bh-pull-right" style="height:43px;line-height:43px;">
            <i class="iconfont icon-keyboardarrowright" style="color: #b4b4b4;font-size: 30px;vertical-align: sub;"></i>
        </div>
    </div>
</div>
    
</template>
<style>
.gi-button .mint-button--primary.is-plain {
    border: 1px solid #2196f3;
    background-color: transparent;
    color: #2196f3;
    font-size:14px;
    font-weight: 600;
}
</style>
<script>
    import { Button,Toast } from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    export default {
        data () {
            return {
               
            }
        },
        created() {},
        methods:{
            goSendInfoPage(appid) {
                var self = this;
                this.$router.push({
                   name: 'contaction',
                   query: {appId:self.$route.query.WID}
                });
            },
            getTargetAppInfo(){
                var self = this;
                axios({
                    method:"POST",
                    url:api.sendAppSalesLog,
                    params:{
                        appId:self.$route.query.WID
                    }
                }).then(function(response){
                  if (response.data.code == 0) {
                    //Toast('发送销售资料成功');
                    dd.device.notification.alert({
                        message: "资料已发送至邮箱",
                        title: "",//可传空
                        buttonName: "ok",
                        onSuccess : function() {
                            //onSuccess将在点击button之后回调
                            /*回调*/
                        },
                        onFail : function(err) {}
                    });
                  }else {
                    Toast('发送销售资料失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            }
        },
        components:{
            [Button.name]: Button,
            [Toast.name]: Toast   
        }
    }
</script>