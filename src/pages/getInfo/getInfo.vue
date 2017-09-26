<template>
<div>
    <div class="bh-clearfix bh-ph-16 bh-pv-16" style="border-bottom:solid 1px #eee;">
        <div class="bh-pull-left">
            <div>
                <h5 class="" style="font-size: 15px;font-weight: 600;display:inline-block;">销售获取资料</h5>
            </div>
            <div style="font-size: 12px;color: #999;">
                获取产品功能说明书、产品投标模板等相关资料
            </div>
        </div>
        <div class="bh-pull-right" style="height:43px;line-height:43px;">
            <mt-button class=" is-plain" type="primary" size="normal" style="padding: 5px 10px;" @click="getTargetAppInfo">点击获取</mt-button>
        </div>
    </div>
    <div class="bh-clearfix bh-ph-16 bh-pv-16" style="border-bottom:solid 1px #eee;" @click="goSendInfoPage">
        <div class="bh-pull-left">
            <div>
                <h5 class="" style="font-size: 15px;font-weight: 600;display:inline-block;">给客户发送资料</h5>
            </div>
            <div style="font-size: 12px;color: #999;">
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
                this.$router.push({
                   name: 'contaction',
                   query: {appId:1}
                });
            },
            getTargetAppInfo(){
                var self = this;
                axios({
                    method:"POST",
                    url:api.sendAppSalesLog,
                    params:{
                        appId:'d10bf4d5def3430489315ae7181e96c3'
                    }
                }).then(function(response){
                  if (response.data.code == 0) {
                    Toast('发送销售资料成功');
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