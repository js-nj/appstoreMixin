<template>
    <div class="" style="background-color:#f6f6f6;">
        <div class="bh-ph-16 bh-pv-8" style="border-bottom:solid 1px #eee;background-color: #fff;">
            <div class="bh-clearfix">
                <h5 class="bh-pull-left" style="font-size: 15px;font-weight: 600;display:inline-block;">{{questionInfo.TITLE}}有问题,问我们啊啊啊</h5>
                <span class="bh-pull-right" style="font-size: 12px;color: #999;line-height: 27px;">
                    {{questionInfo.CREATE_TIME}}09-23 16:02
                </span>
            </div>
            <p class="" style="font-size: 12px;">
                {{questionInfo.CONTENT}}问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊
            </p>
            <div class="bh-clearfix bh-pt-4">
                <div class="bh-l-inline bh-pull-left qc-item-tag" style="font-size:12px;">
                    <mt-badge>{{questionInfo.APPNAME}}</mt-badge>
                    <mt-badge>{{questionInfo.PRODUCT_NAME}}</mt-badge>
                    <mt-badge>{{questionInfo.SCHOOL_CODE}}</mt-badge>
                </div>
            </div>
        </div>
        <div class="bh-mt-8" style="border-top:solid 1px #eee;    background-color: #fff;">
            <div class="bh-ph-16 bh-pv-8" v-for="answer in answers" style="border-bottom:solid 1px #eee;">
                <div class="bh-clearfix">
                    <div class="bh-pull-left" >
                        <img :src="'./static/assets/ask.png'" style="margin-top:-4px;width:24px;height:24px;"/>
                        <h5 class="" style="font-size: 12px;font-weight: 600;display:inline-block;">{{answer.TITLE}}有问题,问我们</h5>
                    </div>
                    <span class="bh-pull-right" style="font-size: 12px;color: #999;    line-height: 27px;">
                        {{answer.TITLE}}09-23 16:02
                    </span>
                </div>
                <p class="bh-pt-8" style="font-size: 12px;">
                    {{answer.TITLE}}问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊有问题,问我们啊啊啊
                </p>
            </div>
        </div>
        <div class="bh-ph-16 bh-pv-8 contact-buttonContainer">
           <mt-button type="warning" size="large" class="contact-button" @click="addReplay">添加回答</mt-button> 
        </div>
    </div>
</template>
<style>
.qc-item-tag .mint-badge.is-size-normal {
    font-size: 10px !important;
    border-radius:4px !important;
}
</style>
<script>
    import { Button ,MessageBox,Field,Toast} from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    export default {
        data () {
            return {
                questionInfo:{},
                answers:[{},{}]
            }
        },
        methods:{
            addReplay(){
                this.$router.push({
                    name: 'quickAskContent',
                    query: {
                        type:'addReplay',
                        questionId:this.questionInfo.WID
                    }
                });    
            }
        },
        created() {
            var that = this;
            that.questionInfo = that.$route.query;
            //获取问题相关回答
            axios({
              method:"POST",
              url:api.querySolveQuestionList,
              params:{
                  questionId:that.questionInfo.WID
              }
            }).then(function(response){
             if (response.data.code == 0) {
                var responseDatas = response.data.datas.list.rows;
                if (responseDatas) {
                    that.answers = responseDatas;
                } 
             }else {
              Toast('获取问题相关回答失败');
             }
            }).catch(function(err){
             Toast(err);
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