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
                    <mt-picker :slots="schoolSlots" @change="onSchoolValuesChange"></mt-picker>
                </mt-popup>
    		    <!-- <mt-field class="qac-border-bt" label="学校" placeholder="学校" v-model="schoolName"></mt-field> -->
        	</div>
        	
			<div class="qac-border-tp bh-mt-16">
				<mt-field v-if="!isAddReplay" class="qac-border-bt" label="问题标题" placeholder="问题标题" v-model="quTitle"></mt-field>
				<mt-field class="qac-border-bt" label="" type="textarea" placeholder="问题描述1" rows="4" v-model="introduction"></mt-field>
			</div>
            <!-- <div class="bh-text-center bh-mh-16 bh-mv-16">
                <div style="" class="qac-img-upload  bh-l-inline" @click="uploadImg">
                    <i class="icon-jiahao01 iconfont" style="font-size:20px;color:#ddd;"></i>
                </div>
            </div> -->
            <!-- 上传图片 -->
            <div class="post-imgs">
                <div class="post-img" v-for="img in imgs">
                    <img @click="previewImg($index)" :src="img.base64">
                    <span @click="deleteImg($index)" class="post-img-del">
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
                      textAlign: 'center'
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
                      textAlign: 'center'
                    }
                ],
                popupProductionVisible:false,
                //选择学校
                schoolName:'',
                schoolNameCode:'',
                schoolSlots:[
                    {
                      flex: 1,
                      values: [{NAME:'南京大学',ID:'001'},{NAME:'东南大学',ID:'002'}],
                      className: 'slot3',
                      textAlign: 'center'
                    }
                ],
                popupSchoolVisible:false,

                quTitle:'',
                introduction:'',
                qacContainerHeight:'',
                imgs:[],
                imgLimit: 3
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
                this.queryTargetTypeApp(this.productionLineCode);
            },
            onLineValuesChange(picker, values){
              this.productionLine = values[0].LBMC;
              this.productionLineCode = values[0].LBDM;
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
              this.productionName = values[0].NAME1;
              this.productionNameCode = values[0].WID;
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
              this.schoolName = values[0].NAME;
              this.schoolNameCode = values[0].ID;
            },
            saveQuestion(){
                // var options = {
                //     BXRGH: this.$route.params.userId,
                //     XM: this.$route.params.userName,
                //     SJ: this.tel,
                //     GZLXDM: this.selectFault,
                //     BXQY: this.areaCode,
                //     BXDD: this.regionsCode,
                //     XXDD: this.location,
                //     MS: this.des
                // }
                // if (this.imgs.length > 0) {
                //     Indicator.open();
                //     this.uploadImage().then((result) => {
                //         console.log('result:', result);
                //         options.TP = result.token;
                //         Indicator.close();
                //         api.saveRepair.call(this, options);
                //     });
                // } else {
                //     api.saveRepair.call(this, options);
                // }
                var that = this;
                if (that.isAddReplay) {
                    axios({
                        method:"POST",
                        url:api.solveQuestion,
                        params:{
                            questionId:that.$route.query.questionId,
                            answer:that.introduction,
                            answerDescPic:''
                        }
                    }).then(function(response){
                      //debugger
                      if (response.data.code == 0) {
                        Toast('回答问题成功');
                      }else {
                        Toast('回答问题失败');
                      }
                    }).catch(function(err){
                      Toast(err);
                    });
                }else {
                    var option = {
                        productCode:that.productionLineCode,
                        schoolCode:that.schoolNameCode,
                        title:that.quTitle,
                        content:that.introduction,
                        descPic:'',
                        appId:that.productionNameCode
                    };

                    if (that.imgs.length > 0) {
                        Indicator.open();
                        that.uploadImage().then((result) => {
                            console.log('result:', result);
                            options.descPic = result.token;
                            Indicator.close();
                            axios({
                                method:"POST",
                                url:api.saveQuestion,
                                params:option
                            }).then(function(response){
                              //debugger
                              if (response.data.code == 0) {
                                Toast('保存问题成功');
                              }else {
                                Toast('保存问题失败');
                              }
                            }).catch(function(err){
                              Toast(err);
                            });
                        });
                    }
                    
                }
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
                       that.queryTargetTypeApp(that.lineSlots[0].values[0].LBDM);
                    }
                  }else {
                    Toast('查询产品线失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            queryTargetTypeApp(type){
                var that = this;
                axios({
                    method:"POST",
                    url:api.queryAppByType,
                    params:{
                        appType:type
                    }
                }).then(function(response){
                  if (response.data.code == 0) {
                    var responseData = response.data.datas.list.rows;
                    if (responseData && responseData.length>0) {
                       that.productionSlots[0].values = responseData;
                       
                    }else {
                        Toast('此产品线无应用');
                    }
                  }else {
                    Toast('查询目标产品失败');
                  }
                }).catch(function(err){
                  Toast(err);
                });
            },
            // uploadImg(){
            //     BH_MIXIN_SDK.takePhoto();
            // },
            takeCamera() {
                let takeCamera = BH_MIXIN_SDK.takeCamera;
                takeCamera((ret) => {
                    this.imgs = this.imgs.concat(ret);
                })
                this.uploadImgType = '拍照';
            },
            takePhoto() {
                let takePhoto = BH_MIXIN_SDK.takePhoto;
                takePhoto((ret) => {
                    this.imgs = this.imgs.concat(ret);
                }, this.imgLimit - this.imgs.length)
                //this.uploadImgType = '相册';
            },
            deleteImg(index) {
                this.imgs.splice(index, 1);
            },
            previewImg(index) {
                BH_MIXIN_SDK.preViewImages(this.imgs, index);
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

            var parentRouterInfo = that.$route.query;
            if (parentRouterInfo.type && parentRouterInfo.type == 'addReplay') {
                that.isAddReplay = true;
            }else {
               //查询产品线
                that.queryAppType(); 
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