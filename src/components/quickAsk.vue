<template>
    <div class="bh-clearfix bh-ph-16 bh-pv-16 qa-container">
        <div class="bh-pull-left">
            <div>
                <img :src="'./static/assets/ask.png'" style="margin-top:-4px;width:16px;height:16px;"/>
                <h5 class="" style="font-size: 16px;font-weight: 600;display:inline-block;">有问题,问我们</h5>
            </div>
            <div style="font-size: 10px;line-height:15px;color: #999;">
                产品实施技术各种问题，统统快速回答
            </div>
        </div>
        <div class="bh-pull-right" style="height:43px;line-height:43px;">
            <mt-button class=" is-plain" type="primary" size="normal" style="padding: 5px 10px;" @click="goQuickAskContent">快速提问</mt-button>
        </div>
    </div>
</template>
<style>
.qa-container .mint-button--primary.is-plain {
    border: 1px solid #2196F3;
    color: #2196F3!important;
}
.qa-container .mint-button--primary.is-plain .mint-button-text {
    font-weight: 600;
}
</style>
<script>
    import { Button } from 'bh-mint-ui2';
    export default {
        data () {
            return {
               
            }
        },
        created() {},
        methods:{
            goQuickAskContent() {
                this.$router.push({
                   name: 'quickAskContent',
                   query: ''
                });
            }
        },
        components:{
            [Button.name]: Button
        }
    }
</script>