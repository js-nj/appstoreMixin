import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import {
    install as Mint
} from 'bh-mint-ui2';
import route from './router';
import init from 'bh-mixin-sdk';
import axios from 'axios';
import api from './api.js';
import 'bh-mint-ui2/lib/style.css'
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

}
var loginFunc = function() {
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
        dd.runtime.permission.requestAuthCode({
            corpId: 'ding5b727efd1035c355', //企业id
            onSuccess: function(info) {
                console.log('authcode:' + info.code);
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
                        //获取登录人信息
                        queryCurrentUserInfo();
                        //页面以及业务请求的加载与发送
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
                console.log('requestAuthCode fail: ' + JSON.stringify(err));
            }
        });
        localStorage.selectedTab = '';
        localStorage.appSelectedTab = '';
    } else {
        //获取登录人信息
        queryCurrentUserInfo();
        //页面以及业务请求的加载与发送
        Init();
    }
};
init(() => {
    loginFunc();
}, {
    wx: {
        url: WEBPACK_CONIFG_HOST + 'sys/appstoreservice/users/ticks.do',
        signData: '',
        debug: false,
        corp: ''
    },
    dd: {
        url: WEBPACK_CONIFG_HOST + 'sys/appstoreservice/dingding/getConfig.do',
        emapPrefixPath: window.HOST
    }
});