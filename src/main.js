import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import {
    install as Mint
} from 'bh-mint-ui2';
import route from './router';
//import init from 'bh-mixin-sdk';
import 'bh-mint-ui2/lib/style.css';
import axios from 'axios';
import api from './api.js';
import {
    Toast
} from 'bh-mint-ui2';
Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter(route);
let Init = () => {
    console.log("Init!!!");
    new Vue({
        el: '#app',
        router: router,
        render: h => h(App)
    });

};
//验证PC钉钉jssdk
axios({
    method: "POST",
    url: WEBPACK_CONIFG_HOST + 'sys/appstoreservice/dingding/getConfig.do',
    params: {
        newUrl: window.location.href.replace(/#(\S+)?/, '')
    }
}).then(({
    data: resp
}) => {
    if (resp.status == 200 || resp.code == '0') {
        var dtSign = resp.datas;
        DingTalkPC.config({
            agentId: dtSign.agentId, // 必填，微应用ID
            corpId: dtSign.corpId, //必填，企业ID
            timeStamp: dtSign.timeStamp, // 必填，生成签名的时间戳
            nonceStr: dtSign.nonceStr, // 必填，生成签名的随机串
            signature: dtSign.signature, // 必填，签名
            jsApiList: [
                    'device.notification.alert', // alert弹窗, //
                    'device.notification.confirm', // confirm弹窗
                    'device.notification.prompt', //  prompt弹窗
                    'device.notification.toast', //   toast弹窗
                    'device.notification.actionSheet', // actionSheet弹窗
                    'biz.navigation.setLeft', //  设置左侧导航按钮文案，只在SlidePanel里起作用
                    'biz.navigation.setTitle', // 设置标题，只在SlidePanel和Modal里起作用
                    'biz.navigation.quit', // 触发关闭，只在SlidePanel和Modal里起作用
                    'runtime.permission.requestAuthCode', //  获取免登授权码
                    'runtime.permission.requestOperateAuthCode', //   获取微应用反馈式操作的临时授权码
                    'DingTalkPC.biz.cspace.preview', //   预览钉盘文件
                    'biz.util.open', //   打开应用内页面
                    'biz.util.openModal', //  打开模态框
                    'biz.util.openSlidePanel', // 打开侧边面板
                    'biz.util.previewImage', //   预览图片
                    'biz.util.openLink', //   在浏览器上打开链接
                    'biz.util.downloadFile', //   下载文件
                    'biz.util.openLocalFile', //  打开调用下载文件下载后的本地文件
                    'biz.util.isLocalFileExist', //   批量检测下载的文件是否存在
                    'biz.util.ut', // 提供的数据埋点能力
                    'biz.util.uploadImage', //    上传图片
                    'biz.ding.post', //   发送Ding
                    'biz.contact.choose', //  选择企业内的人
                    'biz.customContact.choose', //    单选自定义选人列表
                    'biz.customContact.multipleChoose', //    多选自定义选人列表
                    'biz.user.get', //通用JSAPI接口获取用户信息
                ] // 必填，需要使用的jsapi列表
        });
        DingTalkPC.ready(function(res) {
            var self = this;
            //钉钉上将用户code传递给后台
            // DingTalkPC.device.notification.alert({
            //     message: !sessionStorage.login,
            //     title: "提示", //可传空
            //     buttonName: "收到",
            //     onSuccess: function() {
            //         /*回调*/
            //     },
            //     onFail: function(err) {}
            // });
            var queryCurrentUserInfo = function() {
                //获取用户身份信息
                axios({
                    method: "POST",
                    url: api.queryCurrentUserInfo,
                    params: {
                        pageNum: 1,
                        pageSize: 15
                    }
                }).then(function(response) {
                    //alert(JSON.stringify(response));
                    if (response.data.code == 0) {
                        var responseData = response.data.datas.list.rows;
                        localStorage.personId = responseData[0].WID;
                        localStorage.personGh = responseData[0].GH;
                        console.log('window.personId:' + localStorage.personId)
                        console.log('window.personGh:' + localStorage.personGh)
                    } else {
                        Toast('获取用户身份信息失败');
                    }
                }).catch(function(err) {
                    Toast(err);
                    //Toast('queryCurrentUserInfo');
                });
            };
            if (!sessionStorage.login) {
                console.log('dingding --------login')
                DingTalkPC.runtime.permission.requestAuthCode({
                    corpId: "ding5b727efd1035c355", //企业ID
                    onSuccess: function(info) {
                        console.log('userGet success: ' + JSON.stringify(info));
                        window.authcode = info.code;
                        axios({
                            method: "POST",
                            url: api.getUserInfo,
                            params: {
                                weiXincode: window.authcode,
                                openId: ""
                            }
                        }).then(function(response) {
                            if (response.data.code == 0) {
                                //一次对话，表示已经登录
                                sessionStorage.login = true;
                                console.log('sessionStorage:' + sessionStorage);
                                queryCurrentUserInfo();
                                //页面加载函数
                                //钉钉PC版,无需去引用、验证bh-mixin-sdk
                                Init();
                            } else {
                                sessionStorage.login = false;
                                Toast('发送用户code失败');
                            }
                        }).catch(function(err) {
                            Toast(err);
                        });
                    },
                    onFail: function(err) {
                        console.log('userGet fail: ' + JSON.stringify(err));
                    }
                });
                localStorage.selectedTab = '';
                localStorage.appSelectedTab = '';
            } else {
                //查询用户信息
                queryCurrentUserInfo();
                //页面加载函数
                //钉钉PC版,无需去引用、验证bh-mixin-sdk
                Init();
            }

            /*{
                authorizedAPIList: ['device.notification.alert'], //已授权API列表
                unauthorizedAPIList: [''], //未授权API列表
            }*/
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        DingTalkPC.error(function(error) {
            alert(error);
            /*{
                errorCode: 1001, //错误码
                errorMessage: '', //错误信息
            }*/
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开调试窗口的 console查看，也可以在返回的res参数中查看。
        });
    } else {
        reject(resp)
    }
}, (error) => {
    reject(error)
});