<template>
    <div>
        <div class="bh-ph-16 bh-pv-8" v-for="item in items" @click="goQuestionDetail(item)" style="border-bottom:solid 1px #eee;">
            <div class="bh-clearfix">
                <h5 class="bh-pull-left qi-item-title" style="">{{item.TITLE}}</h5>
                <span class="bh-pull-right" style="font-size: 12px;color: #999;line-height: 27px;">
                    {{item.CREATE_TIME}}
                </span>
            </div>
            <p class="bh-pv-8" style="font-size: 12px;">{{item.CONTENT}}</p>
            <div class="bh-clearfix bh-pt-4">
                <div class="bh-l-inline bh-pull-left qi-item-tag" style="font-size:12px;">
                    <mt-badge>{{item.PRODUCT_CODE_DISPLAY}}</mt-badge>
                    <mt-badge>{{item.APP_ID_DISPLAY}}</mt-badge>
                    <mt-badge>{{item.SCHOOL_CODE}}</mt-badge>
                </div>
                <div class="bh-pull-right" style="color:#26a2ff;font-size: 12px;">查看{{item.ANSWERCOUNT}}个回答</div>
            </div>
        </div>
    </div>
</template>
<style>
.qi-item-tag .mint-badge.is-size-normal {
    font-size: 10px !important;
    border-radius:4px !important;
}
.qi-item-title{
    font-size: 15px;
    font-weight: 600;
    display:inline-block;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
}
</style>
<script>
    import { Button,Badge } from 'bh-mint-ui2';
    export default {
        data () {
            return {
               
            }
        },
        props:{
            items:Array
        },
        created() {},
        methods:{
            goQuestionDetail(item) {
                this.$router.push({
                   name: 'questionContent',
                   query: item
                });
            }
        },
        components:{
            [Button.name]: Button,
            [Badge.name]: Badge
        }
    }
</script>