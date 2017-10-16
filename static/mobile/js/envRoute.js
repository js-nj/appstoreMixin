// 授权，完成后重定向到项目
(function() {
    console.log(navigator.userAgent.toLowerCase());
    /*钉钉环境下*/
    console.log('/dingtalk/');
    window.env = 'dt';
    console.log('window.env:' + window.env + '----------------------------------------')
    window.scrollCallback = function(evt) {
        if (!evt._isScroller) {
            evt.preventDefault();
        }
    };
})();