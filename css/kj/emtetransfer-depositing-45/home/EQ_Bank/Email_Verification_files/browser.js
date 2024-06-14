import { environment } from "/assets/environment.js";

(function () {

    var supportedBrowsers = [
        {
            browser: 'Chrome',
            version: 86,
            supported: true
        },
        {
            browser: 'Firefox',
            version: 78,
            supported: true
        },
        {
            browser: 'Opera',
            version: 73,
            supported: true
        },
        {
            browser: 'Safari',
            version: 13.1,
            supported: true
        },
        {
            browser: 'Edge',
            version: 89,
            supported: true
        },
        {
            browser: 'IE',
            version: 0,
            supported: false
        }
    ];

    navigator.sayswho = (function () {
        var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    var str = navigator.sayswho;
    var browser = str.substring(0, str.indexOf(' '));
    var version = str.substring(str.indexOf(' '));
    version = version.trim();
    version = parseInt(version);

    var supported = true;
    for (var i = 0; i < supportedBrowsers.length; i++) {
        if ((supportedBrowsers[i].browser === browser && supportedBrowsers[i].version > version) || (supportedBrowsers[i].browser === browser && !supportedBrowsers[i].supported)) {
            supported = false;
        }
    }

    var continueCookie = sessionStorage.getItem('doContinue');
    var doContinue = continueCookie == 'true';

    if (!supported && !doContinue) {
        const unsupportedUrl = environment + '/unsupported/browser.html'
        if (window.location.href != unsupportedUrl) { //Prevent refreshing for unsupported browsers
            window.location.assign(unsupportedUrl);
        }
    }

})();