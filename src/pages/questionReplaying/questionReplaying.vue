<template>
    <div class="bh-pv-16 qr-container">
        <question-item :items="questionArray"></question-item>
    </div>
</template>
<style>

</style>
<script>
    import { Button } from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    import questionItem from '../../components/questionItem.vue';
    export default {
        data () {
            return {
               questionArray:[]
            }
        },
        created() {
            var self = this;
            //应用类型
            axios({
                method:"POST",
                url:api.queryQuestionByUserId,
                params:{
                    pageNum:1,
                    pageSize:15
                }
            }).then(function(response){
              //alert(JSON.stringify(response.data));
              var responseData = response.data.datas.list.rows;
              if (response.data.code == 0) {
                if (responseData && responseData.length>0) {
                  self.questionArray = responseData;
                }
              }else {
                Toast('获取数据失败');
              }
            }).catch(function(err){
              Toast(err);
            });  
        },
        methods:{
            goQuestionContent(appid) {
                this.$router.push({
                   name: 'questionContent',
                   query: appid
                });
            }
        },
        components:{
            [Button.name]: Button,
            questionItem
        }
    }
</script>