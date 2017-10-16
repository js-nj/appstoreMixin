<template>
    <div>
        <ul>
            <li v-for="item in items" class="as-list bh-ph-16 bh-pv-24 bh-clearfix" style="border-bottom:solid 1px #eee;">
                <div class="bill-list-radio bh-pl-8">
                    <label class="bh-checkbox-label" style="vertical-align: bottom;">
                        <input class="mint-checkbox-input" type="checkbox" name="bill" :disabled="!item.token" v-model="selectedItems" :value="item.id">
                        <i class="mint-checkbox-core"></i>
                    </label>
                </div>
                <div style="float:left;overflow:auto;width: 88%;position: relative;top: 2px;">
                    <div class="gc-list-des">
                        <label class="as-list-title">{{item.name}}</label>
                        <div class="as-list-service bh-pull-right" style="line-height: 21px;color:#999;">
                            <span v-if="item.token">更新于 <label>{{item.time}}</label></span>
                            <span v-else=""><label>{{item.time}}</label></span>
                        </div>
                    </div>
                </div> 
            </li>
        </ul>
        <div class="bh-ph-16 bh-pv-8 contact-buttonContainer">
           <mt-button type="warning" size="large" class="contact-button" @click="sendAppSalesLog">发送资料</mt-button> 
        </div>
    </div>  
</template>
<style>
.gc-list-des {
    float: left;
    width: 96%;
}
</style>
<script>
    import { Button,Toast } from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    export default {
        data () {
            return {
               selectedItems:[],
               items:[{
                token:'',
                id:'1',
                name:'产品白皮书',
                time:'暂无'
               },{
                token:'',
                id:'2',
                name:'产品功能说明书',
                time:'暂无'
               },{
                token:'',
                id:'3',
                name:'产品解决方案',
                time:'暂无'
               },{
                token:'',
                id:'4',
                name:'投招标文档',
                time:'暂无'
               },{
                token:'',
                id:'5',
                name:'竞争对手分析',
                time:'暂无'
               }]
            }
        },
        created() {
            var that = this;
            axios({
                method:"POST",
                url:api.queryAppIntroduceFjxx,
                params:{
                    appId:that.$route.query.appId
                }
            }).then(function(response){
              if (response.data.code == 0) {
                var result = response.data.datas.list.rows[0];
                if (result) {
                    that.items = [];
                    that.items.push({
                        token:result.FJID,
                        id:'1',
                        name:'产品白皮书',
                        time:result.FJID_TIME?result.FJID_TIME:'暂无'
                    });
                    that.items.push({
                        token:result.CPGNSMS,
                        id:'2',
                        name:'产品功能说明书',
                        time:result.CPGNSMS_TIME?result.CPGNSMS_TIME:'暂无'
                    });
                    that.items.push({
                        token:result.CPJJFA,
                        id:'3',
                        name:'产品解决方案',
                        time:result.CPJJFA_TIME?result.CPJJFA_TIME:'暂无'
                    });
                    that.items.push({
                        token:result.ZTBWD,
                        id:'4',
                        name:'投招标文档',
                        time:result.ZTBWD_TIME?result.ZTBWD_TIME:'暂无'
                    });
                    that.items.push({
                        token:result.JZDSFX,
                        id:'5',
                        name:'竞争对手分析',
                        time:result.JZDSFX_TIME?result.JZDSFX_TIME:'暂无'
                    });
                }
              }else {
                Toast('获取资料项目失败');
              }
            }).catch(function(err){
              Toast(err);
            });
        },
        methods:{
            sendAppSalesLog(){
                var self = this;
                var options = {
                    appId:self.$route.query.appId,
                    fjid:'',
                    cpgnsms:'',
                    cpjjfa:'',
                    ztbwd:'',
                    jzdsfx:''
                };
                if (self.selectedItems.length>0) {
                    self.selectedItems.forEach(function(item){
                        switch (item) {
                            case '1':
                                options.fjid = self.items[0].token;
                                break;
                            case '2':
                                options.cpgnsms = self.items[1].token;
                                break;
                            case '3':
                                options.cpjjfa = self.items[2].token;
                                break;
                            case '4':
                                options.ztbwd = self.items[3].token;
                                break;
                            case '5':
                                options.jzdsfx = self.items[4].token;
                                break;
                            default:;
                        }
                    });
                    axios({
                        method:"POST",
                        url:api.sendAppSalesLog,
                        params:options
                    }).then(function(response){
                      if (response.data.code == 0) {
                        dd.device.notification.alert({
                            message: "资料已发送至邮箱",
                            title: "",//可传空
                            buttonName: "ok",
                            onSuccess : function() {
                                self.$router.go(-1);
                            },
                            onFail : function(err) {}
                        });
                      }else {
                        Toast('发送销售资料失败');
                      }
                    }).catch(function(err){
                      Toast(err);
                    });
                }else {
                    Toast('请至少选择一项资料');
                }
            }
        },
        components:{
            [Button.name]: Button,
            [Toast.name]: Toast   
        }
    }
</script>