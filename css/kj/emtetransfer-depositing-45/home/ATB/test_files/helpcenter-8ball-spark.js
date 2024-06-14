/* eslint-disable */

// This is a es5 file, we have to gate our code inside an IIFE so we don't pollute the global namespace.
(function helpcenter8ballSpark(root) {
  'use strict';

  // Let's make sure we are using the window object.
  if (typeof window === 'undefined' || root !== window) {
    console.warn('Window is not the root for this script, unexpected behaviour will occur');
  }

  var shouldFetchHelpCenterApiFile = true;   // Keeps track of if we have loaded the minihelp.js or not.
  var helpCenterApiInstance;                 // We use it to instantiate the helpCenterApiClass into this variable.
  var isBrowserIE11 = _isBrowserIE11();
  var sessionName = 'contextual:history-tracker';

  // This code is located here since the node_modules folder who needs it was being packaged BEFORE the app code.
  // Polyfill for Object.assign() - START  // TODO take this out once react-loadable fixes their babel process.
  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true,
    });
  }
// Polyfill for Object.assign() - END

  // Let's only run this code once even if we get added multiple times on a page.
  if (typeof root.helpCenterSpark === 'undefined') {

    // This script is 3rd party JS, let's not break the consumer(s) if any of this file Fails.
    try {
      // This function is executed EVERY time the UI makes a call to: helpCenterSpark(func, ..args)
      // We put helpCenterSpark() on the global namespace since the consumer HTML needs it. eg: root.helpCenterSpark() where root should be the window object.
      root.helpCenterSpark = function (functionNameFromFrontEnd, argsFromFrontEnd) {
        shouldFetchHelpCenterApiFile
          ? fetchHelpCenterApiScript(functionNameFromFrontEnd, argsFromFrontEnd)
          : executeHelpCenterApiFunction(helpCenterApiInstance, functionNameFromFrontEnd, argsFromFrontEnd);
      };

      // let's load the chat api
      loadChatApi();

      // If contextual help aka minihelp was opened and the page was reloaded this will open it again in it's previous state.
      sessionPersistLoader(fetchHelpCenterApiScript);

      // Store client document title into Session
      sessionTitleSaver(root);

      // Adding Click event listener for passing into fieldRefId into recommend API
      updateSessionForClicking(root);
    } catch (err) {
      console.warn('Contextual help error: ', err);
    }
  }

  function fetchHelpCenterApiScript(func, args) {
    var options = {};
    var settings;

    var DEFAULTS = {
      country: 'US',
      locale: 'en_US',
      mountElementSelector: '.contextual-help-app',
    };

    // The consumer code puts `initHelpCenter()` in the global scope which gives this file access to values the minihelp aka helpcenterapi.js needs to be load.
    if (root.initHelpCenter && typeof root.initHelpCenter === 'function') {
      options = root.initHelpCenter();
    }

    settings = options.settings || {};
    settings.country = settings.country || DEFAULTS.country;
    settings.locale = settings.locale || DEFAULTS.locale;
    settings.mountElementSelector = settings.mountElementSelector || DEFAULTS.mountElementSelector;
    settings.apiBaseUrl = _getBaseUrlFromAddressBar() || 'https://www.paypal.com';

    var language = (settings.locale.split('_')[0]).toLowerCase();
    var minihelpCss = _isLocaleRTL(language) ? '/smarthelp/css/minihelp-8ball.rtl.css' : '/smarthelp/css/minihelp-8ball.css';

    loadStyleSheet(settings.apiBaseUrl + minihelpCss);

    var scriptUrl = settings.apiBaseUrl + '/smarthelp/js/helpcenterapi.js';

    loadScript(scriptUrl, settings, function () {

    // If the script does not fail but returns NO values we still need to check.
    if (typeof helpcenterapi !== 'function') {
      console.warn('Contextual Help LoadScript Error');
      // if user Click helper, then redirect to Home page; if users come from persist logic, then no redirect
      if (func) {
        window.location.href = '/smarthelp/home';
      }
      return;
    }

      shouldFetchHelpCenterApiFile = false; // The script was fetched successfully.

      if (_isRequireJsOnPage()) {
        require(['helpcenterapi'], function () {
          loadScriptCallBack(root, helpcenterapi, options, func, args);
        });
      } else {
        loadScriptCallBack(root, helpcenterapi, options, func, args);
      }
    });

    // This prevents tealeaf from being loaded multiple times due to page refresh
    if (typeof root.TLT === 'undefined') {
      var teaLeafUrl = 'https://www.paypalobjects.com/helpcenter/vendor/tealeaf/tealeaf-selfhelp-prod_domcap.min.js';
      loadScript(teaLeafUrl, settings);
    }
  }

  function loadScriptCallBack(root, helpcenterapi, options, functionName, args) {
    // `onLoadComplete()` lives inside `initHelpCenter()` which the consumer of this script puts in the global scope
    if (!helpcenterapi || typeof helpcenterapi !== 'function' || typeof options.onLoadComplete !== 'function') {
      return;
    }

    var delay = isBrowserIE11 ? 1350 : 0;
    setTimeout(function () {
      helpCenterApiInstance = new helpcenterapi(options.settings);
      executeHelpCenterApiFunction(helpCenterApiInstance, functionName, args);
    }, delay);

  }

  function sessionTitleSaver(_root) {
    var title = _root.document.title;
    var tracker = _root.sessionStorage.getItem(sessionName);

    if (typeof tracker === 'string') {
      var trackerHistory = tracker.split('|');
      if (!Array.isArray(trackerHistory) || trackerHistory.indexOf(title) >= 0) return; // Prevent duplicated Title

      trackerHistory.push(title);

      // Remote the oldest page track in the history, if the history pages are more than 1
      if (trackerHistory.length > 1) {
        trackerHistory.shift();
      }
      _root.sessionStorage.setItem(sessionName, trackerHistory.join('|'));
    } else {
      _root.sessionStorage.setItem(sessionName, title);
    }
  }

  function updateSessionForClicking(_root) {
    _root.document.addEventListener('click', function (element) {
      element = element || _root.event;
      var target = element.target || element.srcElement;
      var text = target.textContent || target.innerText;

      // Contextual Help checker
      var trackerSet = ['a', 'p', 'div', 'button', 'span', 'input'];

      if (typeof target.tagName === 'string' && trackerSet.indexOf(target.tagName.toLowerCase()) >= 0) {
        var contextualHelp = _root.document.getElementById('contextual-help');
        if (contextualHelp && contextualHelp.contains(target)) return null; // No tracking click in the Contextual Help

        var tracker = _root.sessionStorage.getItem(sessionName);
        if (typeof tracker === 'string' && typeof text === 'string' && text.length > 0) {
          _root.sessionStorage.setItem(sessionName, (tracker + '[' + text + ']'));
        }
      }
    }, false) ;
  }

  // Executes functions inside the exported HelpCenterApi class, the setTimeout is there to ensure the helpcenterapi did load
  function executeHelpCenterApiFunction(HelpApiInstance, functionName, args) {
    if (!HelpApiInstance || !functionName) {
      return;
    }

    try {
      setTimeout(function () {
        // Let's make sure the function exists so we don't do: `variable()`
        if (typeof HelpApiInstance[functionName] === 'function') {
          HelpApiInstance[functionName](args);
        }
      }, 300); // We need at least ~300ms for the `HelpApiInstance` code to boot, using `0` doesn't work.
    } catch (error) {
      console.error('[executeHelpCenterApiFunction] -> HelpCenterApi class execution error: ', error);
    }
  }

  function loadScript(url, params, callback) {
    var script;
    var ready;
    var tag;

    ready = false;
    script = document.createElement('script');
    script.type = 'text/javascript';


    // Since it's 2 for now this is fine, if we need to set more params then let's turn this into a loop.
    if (params && params.locale) {
      script.setAttribute('locale', params.locale);
    }

    if (params && params.country) {
      script.setAttribute('country', params.country);
    }

    script.onload = script.onreadystatechange = function onReadyStateChange() {
      if (!ready && (!this.readyState || this.readyState === 'complete')) {
        ready = true;
        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    };

    script.onerror = function (error) {
      var source = error && error.target && error.target.url;
      console.error('The script \'' + source + '\'is not found, please check the country and locale code');
    };

    // If a script is cached, IE may execute it immediately, which breaks
    // JavaScript's run-to-completion semantics. So, don't try to load the
    // script until a later turn of the event loop.
    //
    // See http://www.guypo.com/ies-premature-execution-problem/
    var delay = isBrowserIE11 ? 350 : 0;
    setTimeout(function () {
      script.src = url;

      try {
        tag = document.getElementsByTagName('script')[0];
        tag.parentNode.insertBefore(script, tag);
      } catch (error) {
        console.warn('Could not load the file into the dom', error);
      }
    }, delay);
  }

  function loadStyleSheet(filename) {
    var tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.href = filename;
    try {
      document.getElementsByTagName('head')[0].appendChild(tag);
    } catch (error) {
      console.warn('Could not load the css into the dom', error);
    }
  }

  function sessionPersistLoader(callback) {
    var contextualPersistShow = 'contextual:display-tracker';

    // Loading script if the session display is equal to true
    if (sessionStorage && sessionStorage['reduxPersist:viewport']
      && JSON.parse(sessionStorage['reduxPersist:viewport']).show
      && typeof callback === 'function') {
      callback();

      window.sessionStorage.setItem(contextualPersistShow, true);
    } else {
      window.sessionStorage.setItem(contextualPersistShow, false);
    }
  }

  // url derived from address bar
  function _getBaseUrlFromAddressBar() {
    if (typeof location === 'undefined' || !location.protocol || !location.host) {
      return '';
    }

    return location.protocol + '//' + location.host;
  }

  function _isRequireJsOnPage() {
    return (typeof require === 'function' && typeof require.specified === 'function');
  }

  function _isLocaleRTL(language) {
    return ['ar', 'he', 'ku', 'az', 'fa', 'ur'].indexOf(language) >= 0;
  }

  function _isBrowserIE11() {
    return (navigator.userAgent.indexOf('Trident/') >= 0);
  }

  // The Beyond help team controls/maintains this `loadChatApi()` function
  function loadChatApi() {
    var apiBaseUrl = _getBaseUrlFromAddressBar();

    if (apiBaseUrl && apiBaseUrl.indexOf('localhost') >= 0) {
      apiBaseUrl = 'https://msmaster.qa.paypal.com';
    }

    function loadChatJS() {
      var chatScript = document.createElement('script');
      chatScript.src = apiBaseUrl + '/smarthelp/js/chat/node-chat.js';

      var tag = document.getElementsByTagName('script')[0];
      tag.parentNode.insertBefore(chatScript, tag);
    }

    if (!window.Promise) {
      var script = document.createElement('script');
      script.src = 'https://www.paypalobjects.com/helpcenter/vendor/bluebird.js';

      if (script.readyState) {
        script.onreadystatechange = function () {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null;
            loadChatJS();
          }
        };
      } else {
        script.onload = loadChatJS;
      }
      var tag = document.getElementsByTagName('script')[0];
      tag.parentNode.insertBefore(script, tag);
    } else {
      loadChatJS();
    }
  }

})(this); // Should point to the global: `window` object
