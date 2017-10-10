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