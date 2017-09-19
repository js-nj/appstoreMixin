import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import {
    install as Mint
} from 'bh-mint-ui2';
import route from './router';
import init from 'bh-mixin-sdk';
import 'bh-mint-ui2/lib/style.css'
console.log('import start----------------');
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
console.log('init start----------------');
console.log(init);
if (window.env == 'dt') {
    window.BH_MIXIN_SDK = {
        setTitleText: function() {}
    };
    Init();
} else {
    init(() => {
        console.log("init");
        Init();
    }, {
        wx: {
            debug: false,
            url: WEBPACK_CONIFG_HOST + 'sys/appstoreservice/users/ticks.do',
            corp: ''
        }
    })
}