<template>
    <div class="qc-content" :style="{height:contentHeight}">
        <div class="qc-content-body">
           <div class="bh-ph-16 bh-pv-8" style="border-bottom:solid 1px #eee;background-color: #fff;">
               <div class="bh-clearfix">
                   <h5 class="bh-pull-left" style="font-size: 15px;font-weight: 600;display:inline-block;">{{questionInfo.TITLE}}</h5>
                   <span class="bh-pull-right" style="font-size: 12px;color: #999;line-height: 27px;">
                       {{questionInfo.CREATE_TIME}}
                   </span>
               </div>
               <p class="" style="font-size: 14px;word-break: break-all;">
                   {{questionInfo.CONTENT}}
               </p>
               <div class="post-imgs bh-clearfix">
                   <div class="post-img" v-for="(img,index) in imgs">
                       <img @click="previewImg(index)" :src="img.base64">
                   </div>
               </div>
               <div class="bh-clearfix bh-pt-4">
                   <div class="bh-l-inline bh-pull-left qc-item-tag" style="font-size:12px;">
                       <mt-badge>{{questionInfo.PRODUCT_CODE_DISPLAY}}</mt-badge>
                       <mt-badge>{{questionInfo.APP_ID_DISPLAY}}</mt-badge>
                       <mt-badge>{{questionInfo.SCHOOL_CODE}}</mt-badge>
                   </div>
               </div>
           </div>
           <div class="bh-mt-8" style="border-top:solid 1px #eee;    background-color: #fff;">
             <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore"> -->
               <div>
                   <div class="bh-pt-8" v-for="answer in answers" style="border-bottom:solid 1px #eee;">
                       <div class="bh-ph-16">
                           <div class="bh-clearfix">
                               <div class="bh-pull-left" >
                                   <img :src="'./static/assets/person.png'" style="margin-top:-4px;width:24px;height:24px;"/>
                                   <h5 class="" style="font-size: 12px;font-weight: 600;display:inline-block;">{{answer.CREATE_MAN_DISPLAY}}</h5>
                               </div>
                               <span class="bh-pull-right" style="font-size: 12px;color: #999;    line-height: 27px;">
                                   {{answer.CREATE_TIME}}
                               </span>
                           </div>
                           <p class="bh-pt-8 bh-pb-16" style="font-size: 14px;word-break: break-all;">
                               {{answer.ANSWER}}
                           </p>
                           <div class="post-imgs bh-clearfix">
                               <div class="post-img" v-for="(img,index) in answer.answerImgs">
                                   <img @click="previewImg2(answer.answerImgs,index)" :src="img.base64">
                               </div>
                           </div>
                       </div>
                       <div v-if="personId == answer.CREATE_MAN" class="bh-clearfix bh-pv-8 qc-answer-buttons" style="border-top: solid 1px #eee;padding-right:8px;">
                           <mt-button class="bh-pull-right is-plain" type="primary" size="small" style="padding: 2px 10px;" @click="deleteAnswer(answer)">
                               <img :src="'./static/assets/a_delete.png'" height="20" width="20" slot="icon">删除
                           </mt-button>
                           <mt-button class="bh-pull-right is-plain bh-mh-16" type="primary" size="small" style="padding: 2px 10px;" @click="editAnswer(answer)">
                               <img :src="'./static/assets/a_edit.png'" height="20" width="20" slot="icon">编辑
                           </mt-button>
                       </div>
                   </div>
               </div>
              <!-- </mt-loadmore>  -->
           </div> 
        </div>
        <div v-if="isMyQuestion" class="contact-buttonContainer bh-clearfix bh-text-center">
            <div class="contact-button bh-pv-4">
                <div class="contact-col-6" >
                    <img @click="deleteQuestion" :src="'./static/assets/q_delete.png'" style="width:26px;height:42px;" />
                    <!-- <i class="iconfont icon-delete" style="font-size: 30px;"></i>
                    <div class="contact-button-text" style="position:relative;">
                        <a class="contact-tel-line" style="font-size: 10px;position: absolute;left: 20px;top: -6px;" @click="deleteQuestion">删除</a>
                    </div> -->
                </div>   
            </div>
            <div type="warning" class="contact-button as-bgColor-warning-lv2 bh-color-white bh-pv-16" @click="editQuestion">编辑</div>
            <div type="warning" class="contact-button as-bgColor-warning-lv1 bh-color-white bh-pv-16" @click="addReplay">添加回答</div>
        </div>
        <div v-else class="bh-ph-16 bh-pv-8 contact-buttonContainer" >
           <mt-button type="warning" size="large" class="contact-button" @click="addReplay">添加回答</mt-button> 
        </div>
    </div>
</template>
<style>
.qc-content {
    background-color:#f6f6f6;
}
.qc-content-body {
    overflow: auto;
}
.qc-content .mint-button {
    /*overflow: auto !important;*/
}
.qc-item-tag .mint-badge.is-size-normal {
    font-size: 10px !important;
    border-radius:4px !important;
    margin-top: 2px;
}
.contact-button {
    width: 33.33%;
    float: left;
    font-size: 16px;
    position: relative;
}
.contact-buttonContainer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    width: 100%;
    background-color: #fff;
    border-top: solid 1px #f6f6f6;
    display: flex;
}
.post-img {
    position: relative;
    float: left;
    width: 20%;
    box-sizing: border-box;
    margin: 10px;
}

.post-img .post-img-del {
    position: absolute;
    right: -10px;
    top: -10px;
    display: block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    background-color: #000;
}

.post-img:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}

.post-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.contact-col-6 {
    width: 50%;
    float:left;
}
.qc-answer-buttons .mint-button--primary.is-plain {
    border: 1px solid #999;
    background-color: transparent;
    color: #666;
    font-size:12px;
}

</style>
<script>
    import { Button ,MessageBox,Field,Toast,Loadmore } from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    export default {
        data () {
            return {
                isMyQuestion:false,
                //isMyAnswer:false,
                questionInfo:{},
                answers:[],
                imgs:[],
                personId:'',
                answerImgs:[],
                contentHeight:'',
                allLoaded:false,
                num:1,
                totalSize:'',
                pageSize:5
            }
        },
        methods:{
            addReplay(){
                this.$router.push({
                    name: 'quickAskContent',
                    query: {
                        type:'addReplay',
                        question:this.questionInfo
                    }
                });    
            },
            editQuestion(){
                console.log('editQuestion-------------')
                this.$router.push({
                    name: 'quickAskContent',
                    query: {
                        type:'editQuestion',
                        question:this.questionInfo
                    }
                }); 
            },
            deleteQuestion(){
                var that = this;
                DingTalkPC.device.notification.confirm({
                    message: "确定删除吗？",
                    title: "删除",
                    buttonLabels: ['确定', '取消'],
                    onSuccess : function(result) {
                        //onSuccess将在点击button之后回调
                        /*
                        {
                            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
                        }
                        */
                       if (result.buttonIndex == 0) {
                            //删除问题
                            axios({
                              method:"POST",
                              url:api.deleteQuestion,
                              params:{
                                  wid:that.questionInfo.WID
                              }
                            }).then(function(response){
                             if (response.data.code == 0) {
                                Toast('删除问题成功');
                                that.$router.push({
                                name: 'index',
                                query: {
                                    selectedTab:'feedBack'
                                }
                            });
                             }else {
                                Toast('删除问题失败');
                             }
                            }).catch(function(err){
                             Toast(err);
                            });
                       }
                    },
                    onFail : function(err) {}
                });   
            },
            deleteAnswer(item){
                var that = this;
                DingTalkPC.device.notification.confirm({
                    message: "确定删除吗？",
                    title: "删除",
                    buttonLabels: ['确定', '取消'],
                    onSuccess : function(result) {
                        //onSuccess将在点击button之后回调
                        /*
                        {
                            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
                        }
                        */
                       if (result.buttonIndex == 0) {
                            //删除答案
                            axios({
                              method:"POST",
                              url:api.deleteSolveQuestion,
                              params:{
                                  createMan:item.CREATE_MAN,
                                  wid:item.WID
                              }
                            }).then(function(response){
                             if (response.data.code == 0) {
                                Toast('删除答案成功');
                                that.querySolveQuestionList();
                             }else {
                                Toast('删除答案失败');
                             }
                            }).catch(function(err){
                             Toast(err);
                            });
                       }
                    },
                    onFail : function(err) {}
                }); 
            },
            editAnswer(item){
                this.$router.push({
                    name: 'quickAskContent',
                    query: {
                        type:'editReplay',
                        question:item
                    }
                });
            },
            previewImg(index) {
                //alert(1);
                var originUrl = [];
                for (var i = 0; i < this.imgs.length; i++) {
                    originUrl.push(this.imgs[i].url);
                }
                console.log('content-1');
                console.log(originUrl);
                console.log(index);
                DingTalkPC.biz.util.previewImage({
                    urls: originUrl,//图片地址列表
                    current: originUrl[index],//当前显示的图片链接
                    onSuccess : function(result) {
                        /**/
                        console.log(result)
                    },
                    onFail : function(err) {
                      console.log(err)
                    }
                });
                //BH_MIXIN_SDK.preViewImages(this.imgs, index);
            },
            previewImg2(arr,index) {
                //alert(2);
                var originUrl = [];
                for (var i = 0; i < arr.length; i++) {
                    originUrl.push(arr[i].url);
                }
                console.log('content-2');
                console.log(originUrl);
                console.log(index);
                DingTalkPC.biz.util.previewImage({
                    urls: originUrl,//图片地址列表
                    current: originUrl[index],//当前显示的图片链接
                    onSuccess : function(result) {
                        /**/
                        console.log(result)
                    },
                    onFail : function(err) {
                      console.log(err)
                    }
                });
                //BH_MIXIN_SDK.preViewImages(arr, index);
            },
            getImg(token,arr,num){
                var that =this;
                axios({
                  method:"POST",
                  url:api.getImgs+token+'.do',
                  params:{}
                }).then(function(response){
                    if (response.data.success == true) {
                        if (response.data.items && response.data.items.length>0) {
                            if (num || num == 0) {
                                arr.answerImgs = response.data.items.map(function(item){
                                    var hostName = String(WEBPACK_CONIFG_HOST).split('/emap')[0];
                                    return {
                                        base64:hostName+item.fileUrl,
                                        url:hostName+item.fileUrl
                                    }
                                });
                                console.log(that.answers);
                                that.$set(that.answers, num, arr);
                            }else {
                                response.data.items.forEach(function(item){
                                    var hostName = String(WEBPACK_CONIFG_HOST).split('/emap')[0];
                                    arr.push({
                                        base64:hostName+item.fileUrl,
                                        url:hostName+item.fileUrl
                                    });
                                });
                                console.log(arr);
                            }  
                        }   
                    }    
                }).catch(function(err){
                    //Toast(err);
                    console.log(err);
                    //Toast('获取图片');
                }); 
            },
            querySolveQuestionList(num){
                //获取问题相关回答
                var that= this;
                axios({
                  method:"POST",
                  url:api.querySolveQuestionList,
                  params:{
                      questionId:that.questionInfo.WID,
                      //pageSize:that.pageSize,
                      //pageNum:num || 1
                  }
                }).then(function(response){
                    if (response.data.code == 0) {
                        var responseDatas = response.data.datas.list.rows;
                        if (responseDatas && responseDatas.length>0) {
                            that.answers = responseDatas;
                            that.answers.forEach(function(item,index){
                                if (item.ANSWER_DESC_PIC) {
                                    item.answerImgs=[];
                                    that.getImg(item.ANSWER_DESC_PIC,item,index); 
                                }else {
                                    item.answerImgs=[];
                                }
                            });
                            // that.totalSize = response.data.datas.list.totalSize;
                            // if (that.totalSize > responseDatas.length) {
                            //     that.num = that.num + 1;
                            // }
                            // responseDatas.forEach(function(item,index){
                            //     if (item.ANSWER_DESC_PIC) {
                            //         item.answerImgs=[];
                            //         console.log('answers.number:'+Number(index + (that.pageSize * (that.num - 1))))
                            //         that.getImg(item.ANSWER_DESC_PIC,item,Number(index + (that.pageSize * (that.num - 1)))); 
                            //     }else {
                            //         item.answerImgs=[];
                            //     }
                            //     that.answers.push(item);
                            // });
                            // if (that.totalSize > that.answers.length) {
                            //     console.log('可以继续下拉')
                            // }else {
                            //     that.allLoaded = true;
                            //     that.$refs.loadmore.onBottomLoaded(); 
                            // }
                        }else {
                            that.answers = [];
                        }
                    }else {
                      Toast('获取问题相关回答失败');
                    }
                }).catch(function(err){
                    Toast(err);
                    //Toast('获取回答');
                });
            },
            queryQuestionDetail(){
                var that = this;
                axios({
                  method:"POST",
                  url:api.queryQuestionDetail,
                  params:{
                      wid:that.questionInfo.WID
                  }
                }).then(function(response){
                    var responseDatas = response.data.datas.list.rows;
                    if (response.data.code == 0) {
                        if (responseDatas && responseDatas.length>0) {
                            console.log('请求问题详情成功')
                            console.log(responseDatas[0])
                            that.questionInfo = responseDatas[0];
                            if (that.personId == that.questionInfo.CREATE_MAN) {
                                that.isMyQuestion = true;
                            }else {
                                that.isMyQuestion = false;
                            }
                            //再请求问题列表的数据
                            that.querySolveQuestionList();
                        }else {
                            console.log('结果为空')
                        }
                    }else {
                        console.log('请求问题详情失败');
                    }
                }).catch(function(err){
                 Toast(err);
                });
            },
            loadBottom() {
                var that = this;
                // console.log('loadBottom----------');
                // console.log('this.totalSize:'+that.totalSize)
                // console.log('this.answers:'+that.answers.length)
                that.querySolveQuestionList(that.num);
            }
        },
        created() {
            var that = this;
            that.questionInfo = that.$route.query;
            that.answers = [];
            console.log('that.questionInfo---------------');
            console.log(that.questionInfo)
            console.log('localStorage.personId:'+localStorage.personId);
            that.personId = localStorage.personId;

            that.contentHeight = (document.body.clientHeight) + 'px';
            
            if (that.questionInfo.DESC_PIC) {
               that.getImg(that.questionInfo.DESC_PIC,that.imgs); 
            }
            if (that.questionInfo.WID) {
                // if (that.questionInfo.TITLE) {
                //     if (that.personId == that.questionInfo.CREATE_MAN) {
                //         that.isMyQuestion = true;
                //     }else {
                //         that.isMyQuestion = false;
                //     }
                //     //从问题列表页跳进来，携带数据
                //     that.querySolveQuestionList();
                // }else{
                //从钉钉推送消息中进入
                that.queryQuestionDetail();
                // }
            }else {
                Toast('请求地址有误，请重新打开');
            } 
        },
        components:{
            [Button.name]: Button,
            [MessageBox.name]: MessageBox,
            [Field.name]: Field,
            [Toast.name]: Toast,
            [Loadmore.name]: Loadmore
        }
    }
</script>