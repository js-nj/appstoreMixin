<template>
    <div>
        <div class="bh-pb-8 as-color-999">标杆案例数据</div>
        <div class="data-border-radius bh-ph-8" @click="goCustomerCase">
            <div class="bh-clearfix bh-pv-16 bh-ph-8">
            <div class="bh-pull-left data-case-school">{{customerDataTmp.SCHOOL_BM_DISPLAY}}</div>
            <label class="bh-pull-right data-case-updateTime">
            更新于 <label>{{customerDataTmp.DATA_UPDATE_TIME}}</label>
            <span class="data-case-arrow"></span>
            </label>
            </div>
            <div class="bh-clearfix bh-text-center bh-pv-8" style="border-top:solid 1px #ddd;">
            <div class="as-col-md-4">
                <h5 class="bh-pv-8 as-font-weight">{{customerDataTmp.HYD}}</h5>
                <div class="bh-pb-8 as-color-666">活跃度</div>
            </div>
            <div class="as-col-md-4">
                <h5 class="bh-pv-8 as-font-weight">{{customerDataTmp.LLS}}</h5>
                <div class="bh-pb-8 as-color-666">30日浏览数(PV)</div>
            </div>
            <div class="as-col-md-4">
                <h5 class="bh-pv-8 as-font-weight">{{customerDataTmp.SYS}}</h5>
                <div class="bh-pb-8 as-color-666">30日使用数(UV)</div>
            </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {Toast} from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    export default {
        props:{
            customerDataTmp:Object
        },
        data () {
            return {

            }
        },
        methods:{
            goCustomerCase() {
              var that = this;
              axios({
                  method:"POST",
                  url:api.appsCustomer,
                  params:{'APP_ID':that.$route.query.APP_ID}
              }).then(function(response){
                if (response.data.code == 0) {
                  if (response.data.datas.customer.rows && response.data.datas.customer.rows.length>0) {
                      that.$router.push({
                        name: 'custom',
                        query:response.data.datas.customer.rows[0]
                      });
                  }
                }else {
                  Toast('获取案例数据失败');
                }
              }).catch(function(err){
                Toast(err);
              });
            }
        },
        created() {
         
        },
        components:{
            [Toast.name]: Toast
        }
    }
</script>