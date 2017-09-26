import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import {
    install as Mint
} from 'bh-mint-ui2';
import route from './router';
// import init from 'bh-mixin-sdk';
import init from 'index.js';
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

init(() => {
    Init();
}, {
    wx: {
        debug: false,
        url: WEBPACK_CONIFG_HOST + 'sys/appstoreservice/users/ticks.do',
        corp: ''
    },
    dd: {
        url: 'http://appstoretest.wisedu.com:8080/emap/sys/appstoreservice/dingding/getConfig.do',
        emapPrefixPath: window.HOST
    }
});