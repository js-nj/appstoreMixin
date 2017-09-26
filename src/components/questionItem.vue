<template>
    <div>
        <div class="bh-ph-16 bh-pv-8" v-for="item in items" @click="goQuestionDetail(item)" style="border-bottom:solid 1px #eee;">
            <div class="bh-clearfix">
                <h5 class="bh-pull-left" style="font-size: 15px;font-weight: 600;display:inline-block;">{{item.TITLE}}Android 4.0或</h5>
                <span class="bh-pull-right" style="font-size: 12px;color: #999;line-height: 27px;">
                    {{item.CREATE_TIME}}09-12 11:11:11
                </span>
            </div>
            <p class="bh-pv-8" style="font-size: 12px;">{{item.CONTENT}}Android 4.0或更高版本您的Android设备上安装了Chrome for Android。</p>
            <div class="bh-clearfix bh-pt-4">
                <div class="bh-l-inline bh-pull-left qi-item-tag" style="font-size:12px;">
                    <mt-badge size="small">{{item.APPNAME}}</mt-badge>
                    <mt-badge size="small">{{item.PRODUCT_NAME}}</mt-badge>
                    <mt-badge size="small">{{item.SCHOOL_CODE}}</mt-badge>
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