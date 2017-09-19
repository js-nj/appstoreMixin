// 授权，完成后重定向到项目
(function() {
    console.log(navigator.userAgent.toLowerCase());
    if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
        /*微信环境下*/
        window.env = 'wx';
        var appUrl = window.location.href;
        if (appUrl.indexOf(',') > -1) {
            var totalUrl = appUrl.split(',');
            var targetIndex = totalUrl[0];
            var targetHash = totalUrl[1];
            //一个地址两个微信分享标识
            if (targetIndex && targetIndex.indexOf('&from=') > -1 && targetHash && targetHash.indexOf('&from=') > -1) {
                targetIndex = targetIndex.split('&from=')[0];
            }
            appUrl = targetIndex + '#/' + targetHash;

            //console.log('888888:' + appUrl);
            var shareTag = appUrl.indexOf('&from=');
            //console.log('appdetail:' + shareTag);
            //从分享页面进入的，需要授权操作
            //console.log('要不要授权奥');
            if (shareTag > -1) {
                //console.log('我在授权奥');
                if (appUrl.indexOf('appstoretest') > -1) {
                    var wechat_appid = 'wxda8a6bcfc4cd5518'; //   员工 wxda8a6bcfc4cd5518
                } else {
                    var wechat_appid = 'wx3580fbc434aacf74'; //cplus  wx3580fbc434aacf74,
                }
                var wechat_redirect_uri = appUrl.split('&from=')[0];
                var wechat_redirect_uri_index = wechat_redirect_uri.split('?code=')[0];
                //console.log('wechat_redirect_uri_index:' + wechat_redirect_uri_index);

                if (wechat_redirect_uri.indexOf('&state=123') > -1) {
                    var wechat_redirect_uri_hash = wechat_redirect_uri.split('&state=123')[1];
                } else if (wechat_redirect_uri.indexOf('&state=wxShare') > -1) {
                    var wechat_redirect_uri_hash = wechat_redirect_uri.split('&state=wxShare')[1];
                }
                wechat_redirect_uri = wechat_redirect_uri_index + wechat_redirect_uri_hash;
                wechat_redirect_uri = encodeURIComponent(wechat_redirect_uri);
                var wechat_state = 'wxShare';


                var authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + wechat_appid + '&redirect_uri=' + wechat_redirect_uri + '&response_type=code&scope=snsapi_userinfo&state=' + wechat_state + '#wechat_redirect';
                //console.log('authUrl:' + authUrl);
                window.location.href = authUrl;
            }
        } else {
            console.log('分享首页');
        }
    } else if (/wisedu/.test(navigator.userAgent.toLowerCase())) {
        /*今日校园环境下*/
        window.env = 'bh';
    } else if (/dingtalk/.test(navigator.userAgent.toLowerCase())) {
        /*钉钉环境下*/
        window.env = 'dt';
        // let url = 'https://g.alicdn.com/ilw/ding/0.9.2/scripts/dingtalk.js'; // 远端文件地址
        // var script = document.createElement("script");
        // script.src = url;
        // document.head.appendChild(script);
        // script.onload = function() {
        //     ajax();
        // };
        ajax();

        function initDingTalk(params) {
            dd.config({
                agentId: params.agentId,
                corpId: params.corpId,
                timeStamp: params.timeStamp,
                nonceStr: params.nonceStr,
                signature: params.signature,
                jsApiList: [
                        'runtime.info',
                        'biz.contact.choose',
                        'device.notification.confirm',
                        'device.notification.alert',
                        'device.notification.prompt',
                        'biz.ding.post',
                        'biz.util.openLink'
                    ] //必填，需要使用的jsapi列表
            });
            dd.runtime.permission.requestAuthCode({
                corpId: params.corpId, //企业id
                onSuccess: function(info) {
                    console.log('authcode' + info.code);
                    window.authcode = info.code;
                },
                onFail: function(err) {
                    console.log('requestAuthCode fail: ' + JSON.stringify(err));
                }
            });
            // dd.ready(function() {
            //     dd.biz.user.get({
            //         onSuccess: function(resp) {
            //             global.employeeId = resp.emplId;
            //         }
            //     });
            // });
            // dd.error(function(err) {
            //     dd.device.notification.alert({
            //         "message": JSON.stringify(err),
            //         "title": "提示",
            //         "buttonName": "确定"
            //     })
            // });
        }

        function ajax() {
            //先声明一个异步请求对象
            var xmlHttpReg = null;
            if (window.ActiveXObject) { //如果是IE
                xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");
            } else if (window.XMLHttpRequest) {
                xmlHttpReg = new XMLHttpRequest(); //实例化一个xmlHttpReg
            }
            //如果实例化成功,就调用open()方法,就开始准备向服务器发送请求
            if (xmlHttpReg != null) {
                xmlHttpReg.open("get", "http://appstoretest.wisedu.com:8080/emap/sys/appstoreservice/dingding/getConfig.do", true);
                xmlHttpReg.send(null);
                xmlHttpReg.onreadystatechange = doResult; //设置回调函数
            }
            //回调函数
            //一旦readyState的值改变,将会调用这个函数,readyState=4表示完成相应
            //设定函数doResult()
            function doResult() {
                if (xmlHttpReg.readyState == 4) { //4代表执行完成
                    if (xmlHttpReg.status == 200) { //200代表执行成功
                        //将xmlHttpReg.responseText的值赋给ID为resText的元素
                        //alert(JSON.stringify(xmlHttpReg.responseText));
                        console.log(xmlHttpReg.responseText);
                        initDingTalk(xmlHttpReg.responseText);
                    }
                }
            }
        }
    } else {
        /*今日校园环境下*/
        window.env = 'bh';
    }
    //alert('window.env:' + window.env + '----------------------------------------')
    console.log('window.env:' + window.env + '----------------------------------------')
    window.scrollCallback = function(evt) {
        if (!evt._isScroller) {
            evt.preventDefault();
        }
    };
})();