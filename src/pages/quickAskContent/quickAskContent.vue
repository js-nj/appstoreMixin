<template>
    <div class="qac-content" :style="{height:qacContainerHeight}" style="background-color:#f6f6f6;">
        <div class="qac-forms bh-pt-16">
        	<div class="qac-border-tp" v-if="!isAddReplay">
                <!-- 选择产品线 -->
    			<div v-on:click="chooseProductionLine" style="position:relative;" class="qac-border-bt">
    		        <div style="width:100%;height:48px;z-index:9;position:absolute;"></div>
    		        <mt-field label="产品线" placeholder="请选择产品线" type="text" v-model="productionLine" ></mt-field>
    		    </div>
                <mt-popup v-model="popupLineVisible" position="bottom" style="width: 100%;">
                    <div class="" style="font-size:14px;">
                      <span class="" @click="cancelLineValue" style="float:left;display:inline-block;padding: 4px 16px;">取消</span>
                      <span class="" @click="okLineValue" style="float:right;color:#26a2ff;display:inline-block;padding: 4px 16px;">确定</span>
                      <div class="" style="clear:both;"></div>
                    </div>
                    <mt-picker :slots="lineSlots" @change="onLineValuesChange" value-key="LBMC"></mt-picker>
                </mt-popup>
                <!-- 选择产品 -->
                <div v-on:click="chooseProduction" style="position:relative;" class="qac-border-bt">
                    <div style="width:100%;height:48px;z-index:9;position:absolute;"></div>
                    <mt-field label="产品" placeholder="请选择产品" type="text" v-model="productionName" ></mt-field>
                </div>
                <mt-popup v-model="popupProductionVisible" position="bottom" style="width: 100%;">
                    <div class="" style="font-size:14px;">
                      <span class="" @click="cancelProductionValue" style="float:left;display:inline-block;padding: 4px 16px;">取消</span>
                      <span class="" @click="okProductionValue" style="float:right;color:#26a2ff;display:inline-block;padding: 4px 16px;">确定</span>
                      <div class="" style="clear:both;"></div>
                    </div>
                    <mt-picker :slots="productionSlots" @change="onProductionValuesChange" value-key="NAME1"></mt-picker>
                </mt-popup>
                <!-- 选择学校 -->
                <div v-on:click="chooseSchool" style="position:relative;" class="qac-border-bt">
                    <div style="width:100%;height:48px;z-index:9;position:absolute;"></div>
                    <mt-field label="学校" placeholder="请选择学校" type="text" v-model="schoolName" ></mt-field>
                </div>
                <mt-popup v-model="popupSchoolVisible" position="bottom" style="width: 100%;">
                    <div class="" style="font-size:14px;">
                      <span class="" @click="cancelSchoolValue" style="float:left;display:inline-block;padding: 4px 16px;">取消</span>
                      <span class="" @click="okSchoolValue" style="float:right;color:#26a2ff;display:inline-block;padding: 4px 16px;">确定</span>
                      <div class="" style="clear:both;"></div>
                    </div>
                    <mt-picker :slots="schoolSlots" @change="onSchoolValuesChange" value-key="KHMC"></mt-picker>
                </mt-popup>
    		    <!-- <mt-field class="qac-border-bt" label="学校" placeholder="学校" v-model="schoolName"></mt-field> -->
        	</div>
        	
			<div class="qac-border-tp bh-mt-16">
				<mt-field v-if="!isAddReplay" class="qac-border-bt" label="问题标题" placeholder="问题标题" v-model="quTitle"></mt-field>
				<mt-field class="qac-border-bt" label="" type="textarea" placeholder="问题描述" rows="4" v-model="introduction"></mt-field>
			</div>
            <!-- <div class="bh-text-center bh-mh-16 bh-mv-16">
                <div style="" class="qac-img-upload  bh-l-inline" @click="uploadImg">
                    <i class="icon-jiahao01 iconfont" style="font-size:20px;color:#ddd;"></i>
                </div>
            </div> -->
            <!-- 上传图片 -->
            <div class="post-imgs bh-clearfix">
                <div class="post-img" v-for="(img,index) in imgs">
                    <img @click="previewImg(index)" :src="img.base64">
                    <span @click="deleteImg(index,img)" class="post-img-del">
                <img :src="'./static/assets/delete.png'"/>
                </span>
                </div>
                <div class="post-img" @click="takePhoto" v-if="imgs.length < imgLimit">
                    <img :src="'./static/assets/post.png'" />
                </div>
            </div>
        </div>
        <div class="bh-ph-16 bh-pv-8 qac-buttonContainer">
           <mt-button type="warning" size="large" class="qac-button" @click="saveQuestion">提交</mt-button> 
        </div>
    </div>
</template>
<style>
.qac-img-upload {
    width:65px;height:65px;border:solid 1px #ddd;padding-top:18px;background: #fff;
}
.qac-forms .mint-cell-text{
    font-size: 16px;
    font-weight: 600;
}
.qac-forms .mint-cell-wrapper {
    padding: 0 16px;
}
.qac-border-tp {
	border-top:solid 1px #eee;
}
.qac-border-bt textarea {
    padding: 0px;
}
.qac-border-bt {
	border-bottom:solid 1px #eee;
}
.qac-content {
    background-color: #fff;
}
.qac-buttonContainer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-top: solid 1px #eee;
}
.qac-button {
    width: 100%;
}
.qac-img {
    width: 100%;
    height: 132px;
}
.qac-forms .mint-cell-wrapper {
    background-image: -webkit-linear-gradient(top, #eee, #eee 50%, transparent 50%);
}
.qac-forms .mint-cell:last-child {
    background-image: -webkit-linear-gradient(top, #eee, #eee 50%, transparent 50%);
}
.mint-field-clear {
    display: none;
}
.qac-form-none {
  display: none !important;
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
</style>
<script>
    import { Button ,MessageBox,Field,Toast,Indicator,} from 'bh-mint-ui2';
    import api from '../../api.js';
    import axios  from 'axios';
    export default {
        data () {
            return {
                isAddReplay:false,
                //选择产品线
                productionLine:'',
                productionLineCode:'',
                lineSlots:[
                    {
                      flex: 1,
                      values: [],
                      className: 'slot1',
                      textAlign: 'center',
                      defaultIndex:1,
                    }
                ],
                popupLineVisible:false,
                //选择产品
                productionName:'',
                productionNameCode:'',
                productionSlots:[
                    {
                      flex: 1,
                      values: [],
                      className: 'slot2',
                      textAlign: 'center',
                      defaultIndex:1
                    }
                ],
                popupProductionVisible:false,
                //选择学校
                schoolName:'',
                schoolNameCode:'',
                schoolSlots:[
                    {
                      flex: 1,
                      values: [],
                      className: 'slot3',
                      textAlign: 'center',
                      defaultIndex:1
                    }
                ],
                popupSchoolVisible:false,

                quTitle:'',
                introduction:'',
                qacContainerHeight:'',
                imgs:[],
                imgLimit: 3,
                parentRouterInfo:{},
                options:{},
                targetUrl:'',
                targetDes:'',
                deleteImgArr:[]
            }
        },
        methods:{
            //选择产品线
            chooseProductionLine(){
                this.popupLineVisible = true;
            },
            cancelLineValue(){
                this.popupLineVisible = false;
            },
            okLineValue(){
                this.popupLineVisible = false;
                this.queryTargetTypeApp(this.productionLineCode,'choose');
            },
            onLineValuesChange(picker, values){
                if (values[0] && values[0].LBMC) {
                    this.productionLine = values[0].LBMC;
                }
              
              console.log('this.productionLineCode:'+this.productionLineCode)
                if (values[0] && values[0].LBDM) {
                    this.productionLineCode = values[0].LBDM;
                }
              
              console.log('this.productionLineCode:'+this.productionLineCode)
            },
            //选择产品
            chooseProduction(){
                this.popupProductionVisible = true;
            },
            cancelProductionValue(){
                this.popupProductionVisible = false;
            },
            okProductionValue(){
                this.popupProductionVisible = false;
            },
            onProductionValuesChange(picker, values){
              if (values[0] && values[0].NAME1) {
                this.productionName = values[0].NAME1;
              }
              if (values[0] && values[0].WID) {
                this.productionNameCode = values[0].WID;
              }
              
            },
            //选择学校
            chooseSchool(){
                this.popupSchoolVisible = true;
            },
            cancelSchoolValue(){
                this.popupSchoolVisible = false;
            },
            okSchoolValue(){
                this.popupSchoolVisible = false;
            },
            onSchoolValuesChange(picker, values){
                if (values[0] && values[0].KHMC) {
                    this.schoolName = values[0].KHMC;
                }
                //this.schoolNameCode = values[0].KHBH;
            },
            //提交保存结果
            saveQuestion(){
                var that = this;
                //删除图片
                var deleteEmapImg = [];
                if (that.deleteImgArr.length>0) {
                    that.deleteImgArr.forEach(function(item){
                        if (item.url.indexOf('emapcomponent')>-1) {
                            deleteEmapImg.push(item.id);
                        }  
                    });
                    if (deleteEmapImg.length>0) {
                        axios({
                          method:"POST",
                          url:api.deleteImgs,
                          params:{
                            wid:deleteEmapImg.join(',')
                          }
                        }).then(function(response){
                            if (response.data.success == true) {
                                
                            }else {
                                console.log(response)
                            } 
                        }).catch(function(err){
                         Toast(err);
                        });
                    }
                }
                //添加回答
                if (that.parentRouterInfo.type && that.parentRouterInfo.type == 'addReplay') {
                    if (!that.introduction) {
                        Toast('请填写回答');
                        return;
                    }
                    that.options = {
                        questionId:that.$route.query.question.WID,
                        answer:that.introduction,
                        answerDescPic:''
                    };
                    that.saveImgToEmap(that.options,that.addReplay);
                }else if (that.parentRouterInfo.type && that.parentRouterInfo.type == 'editReplay') {
                    console.log('editReplay-----------------');
                    if (!that.introduction) {
                        Toast('请填写回答');
                        return;
                    }
                    that.options = {
                        createMan:that.parentRouterInfo.question.CREATE_MAN,
                        answer:that.introduction,
                        answerDescPic:that.parentRouterInfo.question.ANSWER_DESC_PIC || '',
                        wid:that.parentRouterInfo.question.WID
                    };
                    that.saveImgToEmap(that.options,that.updateSolveQuestion);
                }else {
                    if (!that.productionLineCode) {
                        Toast('请选择产品线');
                        return;
                    }
                    if (!that.productionNameCode) {
                        Toast('请选择产品');
                        return;
                    }
                    if (!that.schoolName) {
                        Toast('请选择学校');
                        return;
                    }
                    if (!that.quTitle) {
                        Toast('请填写问题');
                        return;
                    }
                    if (!that.introduction) {
                        Toast('请填写问题内容');
                        return;
                    }
                    //保存问题与更新问题
                    that.options = {
                        productCode:that.productionLineCode,
                        schoolCode:that.schoolName || '',
                        title:that.quTitle,
                        content:that.introduction,
                        descPic:'',
                        appId:that.productionNameCode
                    };
                    if(that.parentRouterInfo.type && that.parentRouterInfo.type == 'editQuestion'){
                        that.targetUrl = api.updateQuestion;
                        that.targetDes = '更新';
                        if (that.parentRouterInfo.question.DESC_PIC) {
                          that.options.descPic = that.parentRouterInfo.question.DESC_PIC;  
                        }
                        that.options.wid = that.parentRouterInfo.question.WID;
                    }else {
                        that.targetUrl = api.saveQuestion;
                        that.targetDes = '保存';
                    }
                    that.saveImgToEmap(that.options,that.postQuestion);
                }

            },
            addReplay (){
                var that = this;
                axios({
                    method:"POST",
                    url:api.solveQuestion,
                    params:that.options
                }).then(function(response){
                  if (response.data.code == 0) {
                    Toast('回答问题成功');
                    that.$router.go(-1);
                  }else {
                    Toast(response.data.msg);
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            updateSolveQuestion (){
                var that = this;
                axios({
                    method:"POST",
                    url:api.updateSolveQuestion,
                    params:that.options
                }).then(function(response){
                  //debugger
                  if (response.data.code == 0) {
                    Toast('更新回答成功');
                    that.$router.go(-1);
                  }else {
                    Toast(response.data.msg);
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            postQuestion (){
                var that = this;
                axios({
                    method:"POST",
                    url:that.targetUrl,
                    params:that.options
                }).then(function(response){
                  //debugger
                  if (response.data.code == 0) {
                    Toast(that.targetDes+'问题成功');
                    if (that.parentRouterInfo.type == 'editQuestion') {//编辑问题
                        that.$router.go(-1);
                    }else if (that.parentRouterInfo.type == 'app'){ //应用详情页的快速提问
                        localStorage.appSelectedTab = 'question';
                        that.$router.go(-1);
                    }else {//首页的两个快速提问
                        that.$router.push({
                            name: 'index',
                            query: {
                                selectedTab:'feedBack'
                            }
                        });
                    }
                  }else {
                    Toast(that.targetDes+'问题失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            saveImgToEmap(options,cb){
                var that = this;
                if (that.imgs.length > 0) {
                    var urls = [];
                    that.imgs.forEach(function(item){
                        if (item.url.indexOf('dingtalk')>-1) {
                           urls.push(item.url);
                        }  
                    });
                    if (urls.length>0) {
                        axios({
                            method:"POST",
                            url:api.upload,
                            params:{
                                fileUrl:urls.join(','),
                                token:options.descPic || options.answerDescPic ||''
                            }
                        }).then(function(response){
                          if (response.data.code == 0) {
                            var pageType = that.parentRouterInfo.type;
                            if (pageType && ((pageType == 'addReplay') || (pageType == 'editReplay'))) {
                               options.answerDescPic = response.data.fileToken; 
                            }else {
                                options.descPic = response.data.fileToken;
                            }
                            cb();
                          }else {
                            Toast('保存图片失败');
                          }
                        }).catch(function(err){
                          Toast(err);
                        });
                    }else {
                      cb();  
                    }   
                }else {
                    cb();
                }
            },
            querySchools(){
                var that = this;
                axios({
                    method:"GET",
                    url:api.getSchools,//  01111019
                    params:{}
                }).then(function(response){
                  var responseData = response.data.datas.queryCustomByUserGh.rows;
                  if (response.data.code == 0) {
                    if (responseData && responseData.length>0) {
                       that.schoolSlots[0].values = responseData;
                    }
                  }else {
                    Toast('查询学校数据失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            queryAppType(){
                var that = this;
                axios({
                    method:"POST",
                    url:api.queryAppType,
                    params:{}
                }).then(function(response){
                  //debugger
                  if (response.data.code == 0) {
                    var responseData = response.data.datas.list.rows;
                    if (responseData && responseData.length>0) {
                       that.lineSlots[0].values = responseData;
                       if (that.parentRouterInfo && that.parentRouterInfo.question) {
                            var targetType = that.parentRouterInfo.question.PRODUCT_CODE ? that.parentRouterInfo.question.PRODUCT_CODE:that.parentRouterInfo.question.APPTYPE;
                            responseData.forEach(function(item,index){
                                 if (item.LBDM == targetType) {
                                     that.lineSlots[0].defaultIndex = index;
                                 }
                            });
                       }
                       that.queryTargetTypeApp(that.lineSlots[0].values[0].LBDM);
                    }
                  }else {
                    Toast('查询产品线失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            queryTargetTypeApp(type,fromTar){
                var that = this;
                var tmpType = type;
                var questionInfo = that.parentRouterInfo.question;
                console.log('queryTargetTypeApp');
                if (that.parentRouterInfo.type && that.parentRouterInfo.type == 'editQuestion') {
                    if (!fromTar) {
                        tmpType = questionInfo.PRODUCT_CODE;
                    }
                }else if (that.parentRouterInfo.type && that.parentRouterInfo.type == 'app') {
                    if (!fromTar) {
                        tmpType = questionInfo.APPTYPE; 
                    }
                }
                axios({
                    method:"POST",
                    url:api.queryAppByType,
                    params:{
                        appType:tmpType
                    }
                }).then(function(response){
                  if (response.data.code == 0) {
                    var responseData = response.data.datas.list.rows;
                    console.log('responseData----------------')
                    console.log(responseData);
                    console.log(that.parentRouterInfo.question);
                    if (responseData && responseData.length>0) {
                       that.productionSlots[0].values = responseData;
                       if (that.parentRouterInfo && that.parentRouterInfo.question) {
                            var targetID = that.parentRouterInfo.question.APP_ID?that.parentRouterInfo.question.APP_ID:that.parentRouterInfo.question.WID;
                           responseData.forEach(function(item,index){
                                if (item.WID == targetID) {
                                    that.productionSlots[0].defaultIndex = index;
                                }else {
                                    console.log("item.WID:"+item.WID+",that.parentRouterInfo.question.APP_ID:"+that.parentRouterInfo.question.APP_ID);
                                }
                           });
                       }
                       if (fromTar && fromTar=='choose') {

                       }else {
                        that.isEditLoadDatas();
                       }
                    }else {
                        Toast('此产品线无应用');
                        that.productionName = '';
                        that.productionNameCode = '';
                        that.productionSlots[0].values = [];
                    }
                  }else {
                    Toast('查询目标产品失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            isEditLoadDatas(){
                console.log('isEditLoadDatas---------------')
                var that = this;
                sessionStorage.isEditLoadDatas = false;
                var questionInfo = that.parentRouterInfo.question;
                if (that.parentRouterInfo.type && that.parentRouterInfo.type == 'editQuestion') {
                    that.productionLine = questionInfo.PRODUCT_CODE_DISPLAY;
                    that.productionLineCode = questionInfo.PRODUCT_CODE;
                    console.log(questionInfo);
                    setTimeout(function(){
                        console.log('11:'+that.productionName);
                        that.productionName = questionInfo.APP_ID_DISPLAY;
                        console.log('222:'+questionInfo.APP_ID_DISPLAY);
                        console.log('22:'+that.productionName);
                        that.productionNameCode = questionInfo.WID; 
                         console.log('33:'+questionInfo.WID); 
                    },200);
                    that.schoolName = questionInfo.SCHOOL_CODE;
                    //that.schoolNameCode = questionInfo.SCHOOL_CODE;
                    that.quTitle=questionInfo.TITLE;
                    that.introduction=questionInfo.CONTENT;
                    if (questionInfo.DESC_PIC) {
                        axios({
                          method:"POST",
                          url:api.getImgs+questionInfo.DESC_PIC+'.do',
                          params:{}
                        }).then(function(response){
                            if (response.data.success == true) {
                                that.imgs = response.data.items.map(function(item){
                                    return {
                                        base64:item.fileUrl,
                                        url:item.fileUrl,
                                        id:item.id
                                    }
                                });
                            }    
                        }).catch(function(err){
                         Toast(err);
                        });
                    }  
                }else if (that.parentRouterInfo.type && that.parentRouterInfo.type == 'app') {
                    console.log(questionInfo);
                    that.productionLine = questionInfo.APPTYPE_DISPLAY;
                    that.productionLineCode = questionInfo.APPTYPE;
                    console.log('1:'+that.productionName);
                    setTimeout(function(){
                        that.productionName = questionInfo.NAME1;
                        console.log('2:'+that.productionName);
                        that.productionNameCode = questionInfo.WID;
                    },200); 
                }
            },
            // takeCamera() {
            //     let takeCamera = BH_MIXIN_SDK.takeCamera;
            //     takeCamera((ret) => {
            //         this.imgs = this.imgs.concat(ret);
            //     })
            //     this.uploadImgType = '拍照';
            // },
            takePhoto() {
                var that = this;
                DingTalkPC.biz.util.uploadImage({
                    multiple: false, //是否多选，默认false
                    max: 3, //最多可选个数
                    onSuccess : function(result) {
                        /*
                        [
                          'https://static.dingtalk.com/media/lADOA9bQH8zIzMg_200_200.jpg'
                        ]
                        */
                       console.log('上传的图片');
                       console.log(result);
                       if (result.length>0) {
                            for (var i = 0; i < result.length; i++) {
                                that.imgs.push({base64:result[i],url:result[i]});
                            }
                       }
                       console.log(that.imgs)
                       //that.imgs = that.imgs.concat(result);
                       //that.saveImgToEmap(that.options);
                    },
                    onFail : function() {}
                });
                // let takePhoto = BH_MIXIN_SDK.takePhoto;
                // takePhoto((ret) => {
                //     this.imgs = this.imgs.concat(ret);
                // }, this.imgLimit - this.imgs.length);
                //this.uploadImgType = '相册';
            },
            deleteImg(index,item) {
                console.log('deleteImg---------index:'+index)
                this.imgs.splice(index, 1);
                this.deleteImgArr.push(item);
            },
            previewImg(index) {
                //alert('ask');
                var originUrl = [];
                for (var i = 0; i < this.imgs.length; i++) {
                    originUrl.push(window.location.origin + this.imgs[i].url);
                }
                console.log('ask-1');
                console.log(originUrl)
                console.log(index)
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
            uploadImage() {
                return BH_MIXIN_SDK.uploadImgsToEmap({
                    urls: this.imgs.map(img => img.url)
                }).then((result) => {
                    return result;
                }).catch((err) => {
                    Toast('上传图片出错啦');
                })
            },
        },
        created() {
            var that = this;
            //设置高度
            that.qacContainerHeight = (document.body.clientHeight) + 'px';
            that.parentRouterInfo = that.$route.query;
            var pageType = that.parentRouterInfo.type;
            var pageInfo = that.parentRouterInfo.question;
            console.log('that.parentRouterInfo.type:'+that.parentRouterInfo.type);
            if (pageType && ((pageType == 'addReplay') || (pageType == 'editReplay'))) {
                that.isAddReplay = true;
                if (pageType == 'editReplay') {
                    that.introduction = pageInfo.ANSWER;
                    if (pageInfo.ANSWER_DESC_PIC) {
                        axios({
                          method:"POST",
                          url:api.getImgs + pageInfo.ANSWER_DESC_PIC + '.do',
                          params:{}
                        }).then(function(response){
                            if (response.data.success == true) {
                                that.imgs = response.data.items.map(function(item){
                                    return {
                                        base64:item.fileUrl,
                                        url:item.fileUrl,
                                        id:item.id
                                    }
                                });
                            }   
                        }).catch(function(err){
                         Toast(err);
                        });
                    }
                }   
            }else {
                //查询产品线
                console.log('编辑新增问题')
                that.isAddReplay = false;
                that.queryAppType(); 
                that.querySchools();
            }
        },
        // watch:{
        //     productionLineCode: function(oldVal,val) {
        //         //查询目标产品名字
        //         if (!val) {
        //             this.queryTargetTypeApp(this.lineSlots[0].values[0].LBDM);
        //         }else {
        //             this.queryTargetTypeApp(val);
        //         }
        //     }
        // },
        components:{
            [Button.name]: Button,
            [MessageBox.name]: MessageBox,
            [Field.name]: Field,
            [Toast.name]: Toast
        }
    }
</script>