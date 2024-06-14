
/*@preserve
***Version 1.40.1***
*/

/*@license
 *                       Copyright 2002 - 2018 Qualtrics, LLC.
 *                        CONFIDENTIAL.  All rights reserved.
 *
 * Notice: All code, text, concepts, and other information herein (collectively, the
 * "Materials") are the sole property of Qualtrics, LLC, except to the extent
 * otherwise indicated. The Materials are proprietary to Qualtrics and are protected
 * under all applicable laws, including copyright, patent (as applicable), trade
 * secret, and contract law. Disclosure or reproduction of any Materials is strictly
 * prohibited without the express prior written consent of an authorized signatory
 * of Qualtrics. For disclosure requests, please contact notice@qualtrics.com.
 */
 
try {
  /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"1":"f104be500350429ad42f","2":"7d8e7094d4cacc1bfefa","3":"5972fa8612e068987ea0","4":"65356fb12e6404c79838","5":"d7c709b3a743309fc345","6":"fb00e28b4861997f6965","7":"8f3c97a7753cb6a47943","8":"fac9701ccde697a5e202","9":"cd0e4e91a817d30d9f86","10":"fe357135035c8c88df64","11":"53201edcaf7ce764d9cc","12":"1173ab24522de3c01167","13":"a8d8fb071c203b78053f","14":"da9f96818bc85e860096"}[chunkId] + ".chunk.js?Q_CLIENTVERSION=1.40.1&Q_CLIENTTYPE=hostedjs&Q_DEBUG=1"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["WAFQualtricsWebpackJsonP-debug-hosted-1.40.1"] = window["WAFQualtricsWebpackJsonP-debug-hosted-1.40.1"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UtilityModules_HistoryModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _UtilityModules_HistoryModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_UtilityModules_HistoryModule__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UtilityModules_ProfileModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _UtilityModules_ProfileModule__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UtilityModules_ProfileModule__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrchestratorModules_UtilPreloadModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _OrchestratorModules_UtilPreloadModule__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_OrchestratorModules_UtilPreloadModule__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OrchestratorModules_ContactFrequencyModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _OrchestratorModules_ContactFrequencyModule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OrchestratorModules_ContactFrequencyModule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _OrchestratorModules_AssetManagerModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _OrchestratorModules_AssetManagerModule__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_OrchestratorModules_AssetManagerModule__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _Orchestrator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _LatencyLog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _DebugLog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _ClientLog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _CookieStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);
// TODO make all of these types of imports go away














var debugLog = new _DebugLog__WEBPACK_IMPORTED_MODULE_9__[/* DebugLog */ "a"]();
var latencyLog = new _LatencyLog__WEBPACK_IMPORTED_MODULE_8__[/* LatencyLog */ "a"](debugLog);
window.QSI.API = window.QSI.API || new _API__WEBPACK_IMPORTED_MODULE_13__[/* API */ "a"]();
window.QSI.ClientLog = new _ClientLog__WEBPACK_IMPORTED_MODULE_10__[/* ClientLog */ "a"]();
window.QSI.dbg = debugLog;
window.QSI.LatencyLog = latencyLog;
window.QSI.EventTracker = new _core_EventTracker__WEBPACK_IMPORTED_MODULE_5__[/* EventTracker */ "a"]();
window.QSI.cookie = new _Cookie__WEBPACK_IMPORTED_MODULE_11__[/* Cookie */ "a"]();
window.QSI.CookieStorage = new _CookieStorage__WEBPACK_IMPORTED_MODULE_12__[/* CookieStorage */ "a"]();
window.QSI.Orchestrator = new _Orchestrator__WEBPACK_IMPORTED_MODULE_7__[/* Orchestrator */ "a"]();
if (typeof window.Promise !== "function") {
    var polyfillPromise = window.QSI.AssetManager.promiseLoadScript("Polyfills", _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_6__[/* OrchestratorConfig */ "a"].global.clientVersion, _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_6__[/* OrchestratorConfig */ "a"], latencyLog);
    polyfillPromise.then(function () {
        window.QSI.Orchestrator.init(latencyLog, debugLog);
    });
}
else {
    window.QSI.Orchestrator.init(latencyLog, debugLog);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*****************
 * History Module
 ****************/
if (!QSI.history || window.QTest) {

  QSI.historyStorage = {

    historySessionName: 'QSI_HistorySession',
    get useCookie(){ return (QSI.historyStorageType !== 'sessionStorage') ? true : false; },
    get limit() {
      return this.useCookie ?  2000: 10000;
    },
    
    getHistorySessionData: function(){
      if (this.useCookie){
        return QSI.cookie.get(this.historySessionName);
      }

      return sessionStorage.getItem(this.historySessionName);
    },

    eraseHistorySessionData: function(){
      if (this.useCookie){
        QSI.cookie.erase(this.historySessionName);
        return;
      }

      sessionStorage.removeItem(this.historySessionName);
    },

    setHistorySessionData: function(data){
      if (this.useCookie)
      {
        QSI.cookie.set(this.historySessionName, data, 0);
        return;
      }

      sessionStorage.setItem(this.historySessionName, data);
    },
  };

  QSI.history = {

    //default cookie size is 2kb
    historyStorage: QSI.historyStorage,

    logVisit: function() {

      this.logCurrentURL();
      this.logSearch();
      this.startFocusTracking();
      this.logReferrer();
    },
    startFocusTracking: function() {
      if (this.started) {
        return;
      }
      try {
        this.started = true;

        this.focusTime = this.getFocusTimeFromBrowserStorage();
        this.blurTime = this.getBlurTimeFromBrowserStorage();

        var interval = 1;
        var that = this;
        setInterval(function() {
          try {
            if (that.focused) {
              that.focusTime += interval;
            } else {
              that.blurTime += interval;
            }
          } catch(e) {
            if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
              QSI.dbg.e(e);
            }
          }
        }, interval * 1000);
        var focus = function() {
          try {
            that.focused = true;
          } catch(e) {
            if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
              QSI.dbg.e(e);
            }
          }
        };
        var blur = function() {
          try {
            that.focused = false;
          } catch(e) {
            if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
              QSI.dbg.e(e);
            }
          }
        };
        focus();

        QSI.util.observe(window, 'focus', focus);
        QSI.util.observe(window, 'blur', blur);

        // We write the Time On Site to session storage on an unload event
        // Mobile Browsers do not trigger unload event on page change, they only trigger unload
        // on forced page refresh. To handle Mobile Browsers we need to use pagehide event instead.
        var unloadEventName;
        if (QSI.Browser.isMobile) {
          unloadEventName = 'pagehide';
        } else {
          unloadEventName = 'unload';
        }
        QSI.util.observe(window, unloadEventName, function() {
          try {
            QSI.profile.set('History', 'BlurTime', that.blurTime);
            QSI.profile.set('History', 'FocusTime', that.focusTime);
          } catch(e) {
            if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
              QSI.dbg.e(e);
            }
          }
        });
      }
      catch (e) {
        QSI.dbg.e(e);
      }
    },

    logSite: function(url, openTime) {

      var hist = this.historyStorage.getHistorySessionData();

      var lastURL;

      if (hist) {
        hist = decodeURIComponent(hist);
        var histArray = hist.split('|');
        var last = histArray[histArray.length - 1];
        lastURL = last.split('~')[0];
        hist += '|';
      }
      else {
        hist = '';
        lastURL = '';
      }
      if (url !== lastURL) {
        var newEntry = url + '~' + openTime;
        hist += newEntry;
        this.writeHistory(hist);
      }
    },

    writeHistory: function(val, sizeLimit) {
      if ((sizeLimit !== null && sizeLimit !== undefined) && sizeLimit <= 0) {
        this.historyStorage.eraseHistorySessionData();
        return;
      }

      sizeLimit = sizeLimit || QSI.historyStorageSize || QSI.global.maxCookieSize || this.historyStorage.limit;
      var encodedVal = encodeURIComponent(val);
      var shortenedEncodedVal = this.limitSize(encodedVal, sizeLimit);
      try {
        this.historyStorage.setHistorySessionData(shortenedEncodedVal);
      }
      catch (e) {
        val = decodeURIComponent(shortenedEncodedVal);
        this.writeHistory(val, (sizeLimit - 500));
      }
      // QSI.profile.set('History','History',val);
    },
    limitSize: function(val, limit) {
      if (!val.length) {
        return val;
      }
      limit = limit || this.historyStorage.limit;
      while (val.length > limit) {
        var decoded = decodeURIComponent(val);
        var histArray = decoded.split('|');
        histArray.splice(0, 1);
        val = histArray.join('|');
        val = encodeURIComponent(val);
      }
      return val;
    },
    get: function() {
      //var hist = window.name;
      // var hist = QSI.profile.get('History','History') || [];
      var history = this.historyStorage.getHistorySessionData();
      var hist = history;
      if (!hist) {
        hist = [];
      }
      hist = this.limitSize(hist);
      return decodeURIComponent(hist);
    },
    logCurrentURL: function() {
      var url = window.location.href;
      var currentTime = new Date() * 1;
      this.logSite(url, currentTime);
    },
    getReferrer: function() {
      return document.referrer;
    },
    logSearch: function() {
      var searchRegex, result;
      var referrer = this.getReferrer();
      if (referrer.search(/(google.com)|(bing.com)|(yahoo.com)/) >= 0) {
        var search = '';
        if (referrer.search(/(google.com)|(bing.com)/) >= 0) {
          searchRegex = /q=(.*?)\&/;
          result = referrer.match(searchRegex);
          if (result && result.length && result[1]) {
            search = result[1];
          }
        }
        else if (referrer.search(/yahoo.com/) >= 0) {
          searchRegex = /p=(.*?)\&/;
          result = referrer.match(searchRegex);
          if (result && result.length && result[1]) {
            search = result[1];
          }
        }
        search = decodeURIComponent(search);
        QSI.profile.set('History', 'SearchTerm', search);
      }

    },
    logReferrer: function() {
      var referrer = this.getReferrer();
      if (referrer) {
        var a = QSI.util.build('a', {href: referrer});

        if (a.hostname !== document.location.host) {
          QSI.profile.set("History", "SiteReferrer", referrer);
        }
        QSI.profile.set("History", "PageReferrer", referrer);
      }
    },
    logIntercept: function(siid, asid) {
      if (asid) {
        this.logActionSet(asid);
      }
    },
    logActionSet: function(asid) {
      if (asid.search('AS_') >= 0) {
        var key = asid;
        var currentTime = new Date() * 1;
        QSI.profile.set('ActionSetHistory', key, currentTime);
        QSI.profile.set('ActionSetHistory', key, currentTime, 1);
      }
    },
    logSurvey: function(sid, ssid) {
      QSI.profile.set('QualtricsSurveyHistory', sid, ssid, 1);
    },
    getSiteReferrer: function() {
      return QSI.profile.get("History", 'SiteReferrer');
    },
    getPageReferrer: function() {
      return QSI.profile.get('History', 'PageReferrer');
    },
    getSearch: function() {
      var search = QSI.profile.get('History', 'SearchTerm');
      if (!search) {
        search = '';
      }
      return search;
    },
    getTimeOnSite: function() {
      var f = this.focusTime;
      var b = this.blurTime;
      return f + b + '|' + f;
    },
    getFocusTimeFromBrowserStorage: function() {
      var time = QSI.profile.get('History', 'FocusTime');
      if (!time) {
        time = 0;
      }
      return time;
    },
    getBlurTimeFromBrowserStorage: function() {
      var time = QSI.profile.get('History', 'BlurTime');
      if (!time) {
        time = 0;
      }
      return time;
    },
    getActionSetHistory: function(asid, permanent) {
      var ts = QSI.profile.get('ActionSetHistory', asid, permanent);
      if (!ts) {
        ts = 0;
      }
      return ts;
    },
    getPageCount: function() {
      var hist = this.historyStorage.getHistorySessionData();
      var pageCount = 0;
      var pages = [];
      var i, ilen;
      if (hist) {
        hist = decodeURIComponent(hist);
        var histArray = hist.split("|");
        ilen = histArray.length;
        for (i = 0; i < ilen; i++) {
          pages.push(histArray[i].split("~")[0]);
        }
        var uniquePages = {};
        ilen = pages.length;
        for (i = 0; i < ilen; i++) {
          if (!uniquePages[pages[i]]) {
            pageCount++;
            uniquePages[pages[i]] = true;
          }
        }
      }
      return {unique: pageCount, total: pages.length};
    }
  };
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*****************
 * Profile Module
 ****************/
if (!QSI.profile) {
  QSI.profile = {
    namespace: "QSI_",
    set: function(category, name, value, permanent) {
      if (category === undefined ||
        name === undefined ||
        value === undefined) {
        throw new Error('To few arguments');
      }

      try {
        var storage = this.getStorage(permanent),
            key = this.namespace + category,
            data = storage.getItem(key);

        data = (data) ? JSON.parse(data) : {};
        data[name] = value;
        data = JSON.stringify(data);
        storage.setItem(key, data);
      } catch (e) {
        QSI.dbg.e('error setting profile item');
        QSI.dbg.e(e);
      }
    },
    get: function(category, name, permanent) {
      var storage = this.getStorage(permanent),
          key = this.namespace + category,
          data = storage.getItem(key);

      if (data) {
        data = JSON.parse(data);
        if (name) {
          return (data[name]) ? data[name] : null;
        }
        return data;

      }
      return null;
    },
    erase: function(category, name, permanent) {
      var storage = this.getStorage(permanent),
          key = this.namespace + category;

      if (!name) {
        storage.removeItem(key);
      }
      else {
        var data = JSON.parse(storage.getItem(key));
        delete data[name];
        data = JSON.stringify(data);
        storage.setItem(key, data);
      }
    },
    getStorage: function(perm) {
      if (this.hasSessionStorage()) {
        if (perm) {
          return localStorage;
        } else {
          return sessionStorage;
        }
      }
      else if (QSI.UserDataStorage) {
        var userdata = QSI.UserDataStorage;
        if (perm) {
          userdata.isPermanent(true);
        } else {
          userdata.isPermanent(false);
        }
        return userdata;
      }
      else {
        return QSI.CookieStorage;
      }
    },
    hasSessionStorage: function() {
      // https://gist.github.com/paulirish/5558557
      var testKey = 'qualtricssessionstoragetestkey', storage = window.sessionStorage;
      try {
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
      }
      catch (e) {
        return false;
      }
    }
  };  
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

if(QSI.util === undefined) {
  QSI.util = {
    $: function(n) {
      if (typeof n === 'string') {
        n = document.getElementById(n);
      }
      return n;
    },
    forOwn: function(obj, callback) {
      // TODO add check for callback
      if (obj && obj instanceof Object && this.isFunction(callback)) {
        for (var index in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, index)) {
            callback(obj[index], index, obj);
          }
        }
      }
    },
    build: function(type, att, inner) {
      var el = document.createElement(type);

      if (att) {
        var that = this;
        QSI.util.forOwn(att, function(value, id) {
          switch (id) {
            case 'style':
              that.setStyle(el, att[id]);
              break;
            case 'className':
              el.className = att[id];
              break;
            case 'id':
              el.id = att[id];
              break;
            default:
              el.setAttribute(id, att[id]);
          }
        });
      }
      if (inner) {

        if (QSI.util.isString(inner)) {
          if (type === 'style' && el.styleSheet) {
            el.styleSheet.cssText = inner;
          }
          else {
            el.appendChild(document.createTextNode(String(inner)));
          }
        }
        else if (QSI.util.isArray(inner)) {
          for (var i = 0, ilen = inner.length; i < ilen; i++) {
            var ch = inner[i];
            if (typeof ch === 'string' || typeof ch === 'number') {
              el.appendChild(document.createTextNode(String(ch)));
            }
            else if (ch) {
              if (ch.nodeType) {
                el.appendChild(ch);
              }
            }
          }
        }
      }
      return el;
    },
    setStyle: function(el, s) {
      QSI.util.forOwn(s, function(value, sid) {
        try {
          el.style[sid] = s[sid];
        } catch (e) {
          QSI.dbg.e(e);
        }
      });
    },
    isString: function(s) {
      return (typeof(s) === 'string');
    },
    isArray: function(a) {
      return typeof(a) === 'object' && (a instanceof Array);
    },
    getQueryParam: function(url, key) {
      key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\?&]" + key + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(url);
      if (results === null) {
        return "";
      } else {
        return results[1];
      }
    },
    observe: function(el, e, f, preventRemove) {
      this.obs = this.obs || [];
      if (el) {
        this.obs.push({
          el: el,
          e: e,
          f: f,
          preventRemove: preventRemove || false
        });
        if (el.addEventListener) {
          el.addEventListener(e, f, false);
        }
        else if (el.attachEvent) {
          el.attachEvent("on" + e, f);
        }
        else if (el['on' + this.capFirst(e)]) {
          el['on' + this.capFirst(e)] = f;
        }
      }

    },
    stopObserving: function(el, e, f) {
      if (el.removeEventListener) {
        el.removeEventListener(e, f, false);
      }
      else if (el.detachEvent) {
        el.detachEvent("on" + e, f);
      }
      else if (el['on' + this.capFirst(e)]) {
        el['on' + this.capFirst(e)] = null;
      }
    },
    removeObservers: function() {
      var that = this;
      this.each(this.obs || [], function(ob) {
        if (!ob.preventRemove) {
          that.stopObserving(ob.el, ob.e, ob.f);
        }
      });
    },
    remove: function(el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    },
    isFunction: function(a) {
      return typeof a === 'function' || false;
    },
    capFirst: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    each: function(array, callback) {
      var length = array.length;
      if (length) {
        for (var i = 0; i < length; i++) {
          callback(array[i], i);
        }
      }
    }
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

QSI.ContactFrequency = {
    // NOTE: this timeout should always be greater than that set on the server-side
    contactFrequencyRequestTimeout: 10000,
    contactFrequencyCheckResults: {},
    contactFrequencyCheckStates: {
        CAN_CONTACT: 'CAN_CONTACT',
        DO_NOT_CONTACT: 'DO_NOT_CONTACT',
        NOT_CHECKED: 'NOT_CHECKED'
    },

    checkContactFrequencyRules: function(intercepts, brandId) {
        var deferred = QSI.Orchestrator.Deferred();

        var contactFrequencyRequestData = {};

        QSI.util.forOwn(intercepts, (function(intercept, interceptId) {
            this.contactFrequencyCheckResults[interceptId] = {
                    status: this.contactFrequencyCheckStates.NOT_CHECKED,
                    brandId: null,
                    surveyId: null
                }
            
            // make sure the intercept action set is not sampled out
            if (intercept.Targeting.Decision.ActionSetID === null) {
                return;
            }

            var interceptDef = intercept.Intercept;

            // filter out any intercepts that will trigger Prevent Repeated Display
            if (QSI.util.shouldPreventRepeatedDisplay(interceptId, interceptDef.DisplayOptions)) {
                return;
            }

            // filter out intercepts that do not have contact frequency check enabled
            if (!this.shouldCheckContactFrequency(interceptDef)) {
                return;
            }

            // get contact frequency check settings
            var iqDirectorySettings = this.getIQDirectorySettings(interceptDef);

            // default to do not contact if settings are invalid
            if (!iqDirectorySettings) {
                this.contactFrequencyCheckResults[interceptId].status =
                        this.contactFrequencyCheckStates.DO_NOT_CONTACT;
                return;
            }

            // get survey ID if target is survey
            var targetSurveyId = this.getTargetSurveyId(interceptDef, intercept.Targeting);
            if (targetSurveyId) {
                iqDirectorySettings['surveyId'] = targetSurveyId;

                // this will be used later for recording that an intercept has been shown
                this.contactFrequencyCheckResults[interceptId].surveyId = targetSurveyId;
            }

            // this will be used later for recording that an intercept has been shown
            this.contactFrequencyCheckResults[interceptId].brandId = brandId;

            iqDirectorySettings['brandId'] = brandId;

            contactFrequencyRequestData[interceptId] = iqDirectorySettings;

            // at this point this Intercept will be checked against its contact frequency rules
            // in case of failure, we opt not to show the intercept
            this.contactFrequencyCheckResults[interceptId].status = this.contactFrequencyCheckStates.DO_NOT_CONTACT;
        }).bind(this));

        if(Object.keys(contactFrequencyRequestData).length !== 0 ) {
            // call check contact frequency endpoint
            this.sendContactFrequencyRequest(contactFrequencyRequestData, deferred);
        } else {
            // skip contact frequency check if none require it
            deferred.resolve();
        }

        return deferred.promise();
    },
    shouldCheckContactFrequency: function (interceptDef) {
        return interceptDef.DisplayOptions && interceptDef.DisplayOptions.useContactFrequencyRules;
    },
    getIQDirectorySettings: function (interceptDef) {
        if (!interceptDef.DisplayOptions) {
            return null;
        }

        var displayOptions = interceptDef.DisplayOptions;

        var externalReferenceId;
        if(QSI.global.featureFlags['DX.ContactFrequencyV2']) {
            if(QSI.config && QSI.config.externalReference) {
                externalReferenceId = QSI.config.externalReference;
            }
        } else {
            externalReferenceId = this.resolveContactFrequencyExternalReference(
                displayOptions.contactFrequencyRefLocator,
                displayOptions.contactFrequencyRefExpression);
        }
        

        if (!externalReferenceId) {
            QSI.dbg.e('Could not retrieve external reference ID for Contact Frequency Check')
            return null;
        }

        if (!(typeof externalReferenceId === 'string' || externalReferenceId instanceof String)) {
            QSI.dbg.e('External reference ID must be a string for Contact Frequency Check')
            return null;
        }

        var directoryId = displayOptions.contactFrequencyDirectoryID;

        if (!directoryId) {
            QSI.dbg.e('Missing directoryId for Contact Frequency Check');
            return null;
        }

        var contactFrequencyUserId = displayOptions.contactFrequencyUserID;
        if (!contactFrequencyUserId) {
            QSI.dbg.e('Missing User Id for Contact Frequency Check');
            return null;
        }

        return {
            extRef: externalReferenceId,
            directoryId: directoryId,
            userId: contactFrequencyUserId
        }
    },
    getTargetSurveyId: function (interceptDef, targetingDef) {
        // did not pass targeting
        if (!targetingDef.Decision || !targetingDef.Decision.ActionSetID) {
            return null;
        }
        var actionSetId = targetingDef.Decision.ActionSetID;

        // target type not survey
        if (!interceptDef.ActionSets ||
                !interceptDef.ActionSets[actionSetId] ||
                !interceptDef.ActionSets[actionSetId].Target ||
                !(interceptDef.ActionSets[actionSetId].Target.Type === 'Survey')) {
            return null;
        }

        return interceptDef.ActionSets[actionSetId].Target.PrimaryElement;
    },
    resolveContactFrequencyExternalReference: function(referenceLocator, referenceExpression) {

        if (!referenceExpression) {
            QSI.dbg.e('No reference expression used for contact frequency check');
            return null;
        }

        switch (referenceLocator) {
            case 'JavaScript':
                return QSI.EmbeddedData.getJavaScriptValue(referenceExpression.expression);
            case 'Cookie':
                return QSI.cookie.get(referenceExpression.expression);
            default:
                QSI.dbg.e('Reference locator used for contact frequency check is unsupported:' + referenceLocator);
                return null;
        }
    },
    sendContactFrequencyRequest: function(contactFrequencyRequestData, deferred) {
        var dxIqdProxyEndpoint = 'https://' + QSI.global.brandDC + '/dx-iqd-proxy/check-frequency-rules';
        QSI.LatencyLog.startComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY);

        QSI.util.sendHttpRequest({
            type: 'POST',
            url: dxIqdProxyEndpoint,
            header: {
              'Content-type': 'application/json'
            },
            data: JSON.stringify(contactFrequencyRequestData),
            successCallback: onSuccess.bind(this),
            errorCallback: onFailure.bind(this),
            timeout: this.contactFrequencyRequestTimeout,
            timeoutCallback: onTimeout
        });

        return;

        /******************************************
         * DEFINITION OF CALLBACKS FOR HTTP REQUEST
         ******************************************/

        function onSuccess(http) {
            try {
                var response;

                if (http.response) {
                    response = JSON.parse(http.response);
                }

                if (typeof response !== 'object') {
                    throw new Error('ContactFrequency check came back with invalid response: ' + results);
                }

                QSI.util.forOwn(response, (function(checkResult, interceptId) {
                    if (checkResult === null) {
                        QSI.dbg.e('ContactFrequency check for intercept:' + interceptId + ' errored; defaulting to no show');
                        return;
                    }

                    if (checkResult.passesFrequencyRules === true) {
                        this.contactFrequencyCheckResults[interceptId].status =
                                this.contactFrequencyCheckStates.CAN_CONTACT;
                        this.contactFrequencyCheckResults[interceptId].contactId = checkResult.contactId;
                    }
                }).bind(this));
            } catch(e) {
                QSI.dbg.e(e);
            } finally {
                QSI.LatencyLog.endComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY);
                // even in case  failure, we resolve the promise so that the failed call does not block other intercepts
                // from running.  This is safe because we default intercepts that require contact frequency checks
                // to DO_NOT_CONTACT
                deferred.resolve();
            }
        }

        function onFailure(http) {
            var failureMessage = 'Call to ContactFrequency endpoint: ' + dxIqdProxyEndpoint + ' failed.';
            if (http.status) {
                failureMessage = failureMessage + ' Status:' + http.status;
            }
            if (http.response) {
                failureMessage = failureMessage + ' Response:' + http.response;
            }
            QSI.dbg.e(failureMessage);

            QSI.LatencyLog.endComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY);

            // despite failure, we resolve the promise so that the failed call does not block other intercepts
            // from running.  This is safe because we default intercepts that require contact frequency checks
            // to DO_NOT_CONTACT
            deferred.resolve();
        }

        function onTimeout() {
            QSI.dbg.e('ContactFrequency check POST request to:' + dxIqdProxyEndpoint +' timed out');

            QSI.LatencyLog.endComponentTimer(QSI.LatencyLog.components.CONTACT_FREQUENCY);

            // despite failure, we resolve the promise so that the failed call does not block other intercepts
            // from running.  This is safe because we default intercepts that require contact frequency checks
            // to DO_NOT_CONTACT
            deferred.resolve();
        }
    },

    recordContactFrequencyRequest: function(contactFrequencyRequestData) {
        var dxIqdProxyEndpoint = 'https://' + QSI.global.brandDC + '/dx-iqd-proxy/record-contact';

        QSI.util.sendHttpRequest({
            type: 'POST',
            url: dxIqdProxyEndpoint,
            header: {
              'Content-type': 'application/json'
            },
            data: JSON.stringify(contactFrequencyRequestData),
            errorCallback: onFailure.bind(this),
            timeout: this.contactFrequencyRequestTimeout,
            timeoutCallback: onTimeout
        });

        return;

        /******************************************
         * DEFINITION OF CALLBACKS FOR HTTP REQUEST
         ******************************************/
        function onFailure(http) {
            var failureMessage = 'Call to ContactFrequency endpoint: ' + dxIqdProxyEndpoint + ' failed.';
            if (http.status) {
                failureMessage = failureMessage + ' Status:' + http.status;
            }
            if (http.response) {
                failureMessage = failureMessage + ' Response:' + http.response;
            }
            QSI.dbg.e(failureMessage);
        }

        function onTimeout() {
            QSI.dbg.e('ContactFrequency record POST request to:' + dxIqdProxyEndpoint +' timed out');
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

QSI.AssetManager = {
  promiseFetch: function(method, route, data) {
    var deferred = QSI.Orchestrator.Deferred();

    var http = new XMLHttpRequest();
    http.open(method, route, true);

    // This allows cookies to be sent
    http.withCredentials = true;

    // This option is for dependency resolver requests
    if (method === 'POST') {
       http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    http.onreadystatechange = function() {
      if (4 === http.readyState) {
        if (200 === http.status) {
          deferred.resolve(http.responseText);
        } else {
          deferred.reject(http.responseText);
        }
      }
    };

    http.send(data);
    return deferred.promise();
  },
  generateDefinitionRequestURL: function(module, version, inputParams, interceptId) {
    var url = QSI.baseURL + 'Asset.php?';
    var params = [];

    //inputParams.version is the version requested via query params, while version is from the targeting call
    //inputParams.version should be set only if the editing version is requested, and it will be 0
    //if something does not have an editing version, version will give use the latest version, which can never change due to how our revisions are published
    //because of this, we want version to take precedence, to take advantage of our akamai cache
    version = version || inputParams.version;
    params.push('Module=' + module);
    params.push('Version=' + version);

    if (typeof interceptId !== 'undefined' && interceptId !== null) {
      params.push('Q_InterceptID=' + interceptId);
    }
    if (inputParams.Q_NOCACHE === null) {
      params.push('Q_NOCACHE');
    }
    if (QSI.CORSOrigin) {
      params.push('Q_ORIGIN=' + QSI.CORSOrigin);
    }
    if (typeof inputParams.Q_CLIENTVERSION !== 'undefined' && inputParams.Q_CLIENTVERSION !== null) {
      params.push('Q_CLIENTVERSION=' + inputParams.Q_CLIENTVERSION);
    }
    if (typeof inputParams.Q_CLIENTTYPE !== 'undefined' && inputParams.Q_CLIENTTYPE !== null) {
      var clientType = 'Q_CLIENTTYPE=' + inputParams.Q_CLIENTTYPE

      params.push(clientType);
    }

    url += params.join('&');

    return url;
  },
  loadDefinition: function(url, callback) {
    var deferred = QSI.Orchestrator.Deferred();
    var http = new XMLHttpRequest();

    http.open('GET', url, true);

    http.onreadystatechange = function() {
      if (4 === http.readyState) {
        if (200 === http.status) {
          try {
            // Attempt to parse response text
            var response = JSON.parse(http.responseText);

            if (!response.Error) {
              callback(response);
              deferred.resolve(http.responseText);
            } else {
              deferred.reject(response);
            }
          } catch (e) {
            deferred.reject(http.responseText);
          }
        } else {
          deferred.reject(http.responseText);
        }
      }
    };

    http.send();

    return deferred.promise();
  },
  promiseLoadIntercept: function(id, intercept, inputParams, latencyLog) {
    var interceptId = intercept.InterceptID;
    var url = QSI.AssetManager.generateDefinitionRequestURL(interceptId,
      intercept.InterceptRevision, inputParams);

    latencyLog.startComponentTimer('AssetDefinition-' + interceptId);

    return QSI.AssetManager.loadDefinition(url, function(intercept) {
      latencyLog.endComponentTimer('AssetDefinition-' + interceptId);
      QSI.Request[id].Intercepts[interceptId].Intercept = intercept.InterceptDefinition;
    });
  },
  promiseLoadCreative: function(id, intercept, inputParams, latencyLog) {
    var creativeId = intercept.Decision.Creative.ID;
    if (creativeId !== 'CR_NoCreative') {
      var url = QSI.AssetManager.generateDefinitionRequestURL(creativeId,
        intercept.Decision.Creative.Revision, inputParams, intercept.InterceptID);

      latencyLog.startComponentTimer('AssetDefinition-' + creativeId);

      return QSI.AssetManager.loadDefinition(url, function(creative) {
        latencyLog.endComponentTimer('AssetDefinition-' + creativeId);

        if(QSI.util.isLegacyCreative(creative.CreativeDefinition.Type)) {
          creative.CreativeDefinition = QSI.AssetManager.sortCreativeDefinition(creative.CreativeDefinition);
        }
        QSI.Request[id].Intercepts[intercept.InterceptID].Creative = creative.CreativeDefinition;
      });
    } else {
      QSI.Request[id].Intercepts[intercept.InterceptID].Creative = null;
      return QSI.Orchestrator.Deferred().resolve(null);
    }
  },
  promiseLoadPopUnderTarget: function(id, intercept, inputParams) {
    var url = QSI.AssetManager.generateDefinitionRequestURL(intercept.Decision.PopUnderTarget.ID,
      intercept.Decision.PopUnderTarget.Revision, inputParams, intercept.InterceptID);

    return QSI.AssetManager.loadDefinition(url, function(creative) {
      QSI.Request[id].Intercepts[intercept.InterceptID].PopUnderTarget = creative.CreativeDefinition;
    });
  },

  promiseLoadScript: function(scriptName, version, orchestratorConfig, latencyLog) {
    var deferred;

    // string to identify a versioned module, that we use to track
    // whether or not it has already been fetched
    var moduleIdentifier = scriptName + ':' + QSI.global.clientVersion;
    if (orchestratorConfig.global.alreadyFetchedJSModules.indexOf(moduleIdentifier) !== -1) {
      latencyLog.markComponentAlreadyFetched('JSModule-' + scriptName);
      deferred = QSI.Orchestrator.Deferred();
      deferred.resolve();
      return deferred.promise();
    }

    deferred = QSI.Orchestrator.Deferred();

    var script = document.createElement('script');
    script.src = QSI.global.hostedJSLocation + scriptName + "Module.js" + '?';

    var params = [];
    if(typeof QSI.Orchestrator !== 'undefined' && typeof QSI.Orchestrator.getClientVersionQueryString !== 'undefined') {
      params.push(QSI.Orchestrator.getClientVersionQueryString());
    }

    if (window.location.href.indexOf('Q_DEBUG') !== -1 || QSI.config.debug) {
      params.push('Q_DEBUG=true');
    }

    script.src += params.join('&');

    script.defer = true;

    script.addEventListener('load', function() {
      try {
        if (QSI.wrongModuleVersionRequested === true) {
          deferred.reject();
          QSI.dbg.e('Script: ' + scriptName + ' failed to load because an unavailable version (' + version + ') was requested.');
        }

        orchestratorConfig.global.alreadyFetchedJSModules.push(moduleIdentifier);

        latencyLog.endComponentTimer('JSModule-' + scriptName);

        deferred.resolve();
      } catch(e) {
        if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
          QSI.dbg.e(e);
        }
      }
    }, false);

    script.addEventListener('error', function() {
      try {
        deferred.reject();
        QSI.dbg.e('Script: ' + scriptName + ' failed to load.');
      } catch(e) {
        if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
          QSI.dbg.e(e);
        }
      }
    });

    latencyLog.startComponentTimer('JSModule-' + scriptName);

    document.body.appendChild(script);

    return deferred.promise();
  },

  // This function is used to sort the creativeDefiniton for accessibility reasons. We need all creative elements to be in a top left to bottom right
  // positional order so elements are keyboard accessible in a logical order.
  sortCreativeDefinition:function(definition)
  {
    if (definition && definition.Options && definition.Options.elements && definition.Options.elements.Elements) {
      // get elements from creative definition
      var elementsArray = definition.Options.elements.Elements;

      // sort by z-index position
      elementsArray = QSI.util.stableSort(elementsArray, function(p1, p2) {
        if (Number(p1.style.zIndex) < Number(p2.style.zIndex)) {
          return -1;
        }
        if (Number(p1.style.zIndex) > Number(p2.style.zIndex)) {
          return 1;
        }
        return 0;
      });
      for (var i = 0; i < elementsArray.length; i++) {
        // In the creative editor, all elements are added with a zIndex of 2000000000 so elements are rendered on top or behind other elements
        // based on order in DOM. Only when an element is "brought forward" or "put behind" do we adjust zIndex values in the elements style
        // to fix this for accessibility we need sorted by Z-index above while respecting order (so elements with the same zIndex are in the right order)
        // and now we want to set their zIndex in an increasing fashion so that when we sort again by left and top position below, zIndex is respected
        if (elementsArray[i].style && elementsArray[i].style.zIndex) {
          elementsArray[i].style.zIndex = QSI.global.currentZIndex++;
        }
      }

      // sort by left position
      elementsArray = QSI.util.stableSort(elementsArray, function(p1, p2) {
        if (Number(p1.position.left) < Number(p2.position.left)) {
          return -1;
        }
        if (Number(p1.position.left) > Number(p2.position.left)) {
          return 1;
        }
        return 0;
      });

      // sort by top position
      elementsArray = QSI.util.stableSort(elementsArray, function(p1, p2) {
        if (Number(p1.position.top) < Number(p2.position.top)) {
          return -1;
        }
        if (Number(p1.position.top) > Number(p2.position.top)) {
          return 1;
        }
        return 0;
      });

      definition.Options.elements.Elements = elementsArray;

      return definition;
    }
    return definition;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTracker; });
/* harmony import */ var _util_UtilityTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var EventTracker = /** @class */ (function () {
    function EventTracker() {
        var _this = this;
        this.trackElements = function () {
            if (_this.loaded == false) {
                _this.loadCounts();
                var _a = window.QSI, dbg_1 = _a.dbg, global_1 = _a.global;
                var trackers_1 = global_1.eventTrackers;
                // PHP Engine returns trackers as an array
                // dx-targeting returns trackers as an object
                Object.keys(trackers_1).forEach(function (name) {
                    var id = trackers_1[name];
                    _this.trackElement(id, name);
                });
                Object(_util_UtilityTools__WEBPACK_IMPORTED_MODULE_0__["observe"])(window, "beforeunload", function () {
                    try {
                        _this.storeCounts();
                    }
                    catch (e) {
                        if (typeof window.QSI !== "undefined" && dbg_1 && dbg_1.e) {
                            dbg_1.e(e);
                        }
                    }
                });
                _this.loaded = true;
            }
        };
        /**
         * Tracks the element with the given id for clicks, if it exists.
         *
         * @param string id
         * @param string name
         */
        this.trackElement = function (id, name) {
            var dbg = window.QSI.dbg;
            var el = Object(_util_UtilityTools__WEBPACK_IMPORTED_MODULE_0__["$"])(id);
            if (el) {
                Object(_util_UtilityTools__WEBPACK_IMPORTED_MODULE_0__["observe"])(el, "click", function () {
                    try {
                        _this.track(name);
                    }
                    catch (e) {
                        if (typeof window.QSI !== "undefined" && dbg && dbg.e) {
                            dbg.e(e);
                        }
                    }
                });
            }
        };
        /**
         * Increments the counter for the given name.
         *
         * @param string name
         */
        this.track = function (name) {
            _this.clicked = true;
            if (_this.counts[name]) {
                _this.counts[name]++;
            }
            else {
                _this.counts[name] = 1;
            }
        };
        /**
         * Stores the counts in a cookie.
         */
        this.storeCounts = function () {
            if (_this.clicked === true) {
                var cookie = window.QSI.cookie;
                var output = JSON.stringify(_this.counts);
                cookie.set(_this.cookieName, output);
            }
        };
        /**
         * Loads the counts from a cookie, if it exists.
         */
        this.loadCounts = function () {
            var cookie = window.QSI.cookie;
            var input = cookie.get(_this.cookieName);
            if (input) {
                _this.counts = JSON.parse(input);
            }
        };
        /**
         * Gets the value of a tracker, if it exists. If not, returns 0;
         *
         * @param string name
         * @returns integer
         */
        this.get = function (name) {
            if (_this.counts[name]) {
                return _this.counts[name];
            }
            return 0;
        };
        /**
         * Increments the counts for all events listed in window._qsie
         */
        this.incrementEventList = function () {
            if ("_qsie" in window) {
                if (Object(_util_UtilityTools__WEBPACK_IMPORTED_MODULE_0__["isArray"])(window._qsie)) {
                    for (var i = 0, ilen = window._qsie.length; i < ilen; i++) {
                        var name_1 = window._qsie[i];
                        if (Object(_util_UtilityTools__WEBPACK_IMPORTED_MODULE_0__["isString"])(name_1)) {
                            _this.track(name_1);
                        }
                    }
                }
            }
        };
        this.counts = {};
        this.cookieName = "QSI_CT";
        this.loaded = false;
        this.clicked = false;
    }
    return EventTracker;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creativeTypes", function() { return creativeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originalDocumentOverflow", function() { return originalDocumentOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTempID", function() { return getTempID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateNow", function() { return getDateNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementHTML", function() { return getElementHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginInterceptOfMessage", function() { return getOriginInterceptOfMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToStyleElements", function() { return addToStyleElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return buildQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendFocusToFirstTabbableElement", function() { return sendFocusToFirstTabbableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendFocusToFirstTabbableElementOnKeydown", function() { return sendFocusToFirstTabbableElementOnKeydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForFocus", function() { return waitForFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeObservers", function() { return removeObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopObserving", function() { return stopObserving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForExitIntent", function() { return waitForExitIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateString", function() { return truncateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE8", function() { return isIE8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpera", function() { return isOpera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFF", function() { return isFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArrayFromArguments", function() { return createArrayFromArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forOwn", function() { return forOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageSize", function() { return getPageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWin", function() { return openWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startScrolling", function() { return startScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopScrolling", function() { return stopScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostToStart", function() { return usePostToStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeResponsiveEmbeddedTarget", function() { return closeResponsiveEmbeddedTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjLiteral", function() { return isObjLiteral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strIncludes", function() { return strIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrIncludes", function() { return arrIncludes; });
// Shared module-level observers
var observers = [];
var creativeTypes = {
    EMPTY: "Empty",
    FEEDBACK_LINK: "FeedbackLink",
    HTTP_REDIRECT: "HTTPRedirect",
    IFRAME: "IFrame",
    INFO_BAR: "InfoBar",
    LINK: "Link",
    NO_CREATIVE: "NoCreative",
    POP_OVER: "PopOver",
    POP_UNDER: "PopUnder",
    POP_UP: "PopUp",
    RELAY: "Relay",
    SLIDER: "Slider",
    USER_DEFINED_HTML: "UserDefinedHTML",
};
var originalDocumentOverflow = "auto";
var $ = function (n) {
    var result = n;
    if (typeof n === "string") {
        result = document.getElementById(n);
    }
    return result;
};
var setStyle = function (el, styles) {
    var debugLog = window.QSI.dbg;
    for (var styleId in styles) {
        try {
            el.style[styleId] = styles[styleId];
        }
        catch (e) {
            debugLog.e(e);
        }
    }
};
// Courtesy of jQuery - https://github.com/jquery/jquery/blob/1.11.3/src/css/curCSS.js
var getStyle = function (el, propName) {
    var computed = getStyles(el);
    var ret;
    try {
        ret = computed ? computed[propName] || computed.getPropertyValue(propName) : undefined;
    }
    catch (e) {
        ret = undefined;
    }
    // Support: IE
    // IE returns zIndex value as an integer.
    return ret === undefined ? ret : ret + "";
};
var getStyles = function (el) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    if (el.ownerDocument.defaultView.opener) {
        return el.ownerDocument.defaultView.getComputedStyle(el, null);
    }
    return window.getComputedStyle(el, null);
};
var getTempID = function () {
    return "QSI_" + Math.floor(Math.random() * 100000 + 1);
};
var getDateNow = function () {
    if (!Date.now) {
        return new Date().valueOf();
    }
    // the valueOf() below here is to fix SI-2474. www.sapstore.com overwrites the browsers
    // native Date code, and adding valueOf() here casts "Date.now()" into the proper
    // return type, which is "number". On all other websites, Date.now() automatically
    // returns a "number", so calling valueOf() in that case doesn't do anything.
    return Date.now().valueOf();
};
var getElementHTML = function (el) {
    var wrap = document.createElement("div");
    wrap.appendChild(el.cloneNode(true));
    return wrap.innerHTML;
};
var getOriginInterceptOfMessage = function (sourceWindow) {
    var reg = window.QSI.reg;
    if (!reg) {
        return null;
    }
    // loops through the intercepts on the page and checks to see if the
    // message's source window is the embedded target or embedded window
    // of any of the intercept
    for (var interceptID in reg) {
        if (reg[interceptID]) {
            var intercept = reg[interceptID];
            if (intercept.embeddedTargets) {
                for (var i = 0; i < intercept.embeddedTargets.length; i++) {
                    if (intercept.embeddedTargets[i].contentWindow === sourceWindow) {
                        return reg[interceptID];
                    }
                }
            }
            if (intercept.embeddedWindows) {
                for (var j = 0; j < intercept.embeddedWindows.length; j++) {
                    if (intercept.embeddedWindows[j].targetIframe.contentWindow === sourceWindow) {
                        return reg[interceptID];
                    }
                }
            }
        }
    }
    // for new creative types (e.g. feedback button), we no longer store a reference to
    // the embedded windows. Instead, we will find the origin intercept by searching
    // through the iframes on the page with the data-interceptId attribute
    var targetIframes = document.querySelectorAll('iframe:not([data-interceptId=""])');
    for (var i = 0; i < targetIframes.length; i++) {
        if (targetIframes[i].contentWindow === sourceWindow) {
            var interceptID = targetIframes[i].getAttribute("data-interceptId");
            return reg[interceptID];
        }
    }
    return null;
};
var addToStyleElements = function (element) {
    var QSI = window.QSI;
    QSI.styleElements = QSI.styleElements || [];
    QSI.styleElements.push(element);
};
// construct query string based on key-value object
// map of key value pairs
// {foo: "bar"}     ---> "foo=bar"
// {foo: ""}        ---> "foo="
// {foo: undefined} ---> "foo"
var buildQueryString = function (queryParams) {
    var str = [];
    for (var param in queryParams) {
        var value = queryParams[param];
        if (typeof value === "undefined") {
            str.push(encodeURIComponent(param));
        }
        else {
            str.push(encodeURIComponent(param) + "=" + encodeURIComponent(value));
        }
    }
    return str.join("&");
};
var sendFocusToFirstTabbableElement = function () {
    var firstFocusable = document.querySelector('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
        firstFocusable.focus();
    }
};
var sendFocusToFirstTabbableElementOnKeydown = function (event, callback) {
    if (event.which === 13 || event.which === 32) {
        //ENTER or SPACE
        event.preventDefault();
        // To be WCAG compliant, focus on the first tabbable element
        sendFocusToFirstTabbableElement();
        callback();
    }
};
var waitForFocus = function () {
    var debugLog = window.QSI.dbg;
    return new Promise(function (resolve) {
        if (document.hasFocus()) {
            resolve();
        }
        else {
            observe(window, "focus", function () {
                try {
                    resolve();
                }
                catch (e) {
                    debugLog.e(e);
                }
            });
        }
    });
};
var observe = function (elementToObserve, eventName, eventHandler, preventRemove) {
    if (preventRemove === void 0) { preventRemove = false; }
    observers = observers || [];
    if (elementToObserve) {
        observers.push({
            elementToObserve: elementToObserve,
            eventName: eventName,
            eventHandler: eventHandler,
            preventRemove: preventRemove || false,
        });
        elementToObserve.addEventListener(eventName, eventHandler, false);
    }
};
var removeObservers = function () {
    observers.forEach(function (observer) {
        if (!observer.preventRemove) {
            stopObserving(observer.elementToObserve, observer.eventName, observer.eventHandler);
        }
    });
};
var stopObserving = function (elementToObserve, eventName, eventHandler) {
    elementToObserve.removeEventListener(eventName, eventHandler, false);
};
var waitForExitIntent = function () {
    var _a = window.QSI, debugLog = _a.dbg, config = _a.config, Browser = _a.Browser;
    return new Promise(function (resolve) {
        observe(window, "mouseout", function (e) {
            try {
                if (!document.hasFocus()) {
                    return;
                }
                //For Microsoft browsers we have a special case because clientX and clientY attributes of the mouseout event do no reflect the actual values when the event happens.
                if (isEdge() || isIE()) {
                    if (!e.relatedTarget && !e.toElement) {
                        //We want to resolve only when the cursor has moved out of the window from the top.
                        //This condition is a best attempt way to check if the cursor has exited from top.
                        //With this condition we will have an edge case where if the window is exited from the left or right from the top 10% we will see the creative show up.
                        var cursorYPercentage = (e.clientY / window.innerHeight) * 100;
                        var mouseOutRange = config.ieEdgeMouseOutRange || 5;
                        if (cursorYPercentage > mouseOutRange) {
                            return;
                        }
                        resolve();
                    }
                }
                else {
                    // Check if the mouseout event is triggered inside the innerWindow
                    // If so that means it was most likely triggered by a right click or hovering over the scrollbar
                    // in which case we do not want to trigger exit intent. Only if the event is positioned outside the innerWindow
                    // do we want to trigger exit intent.
                    if (e.clientY > 0) {
                        return;
                    }
                    // Handles a bug in Firefox where select inputs are detected as out of window bounds
                    if (Browser.name === "Firefox" && e.target.tagName === "SELECT") {
                        return;
                    }
                    resolve();
                }
            }
            catch (ex) {
                debugLog.e(ex);
            }
        });
    });
};
var truncateString = function (str, len) {
    var ellipsis = "...";
    if (str === null || str === undefined) {
        return null;
    }
    if (str.length <= len) {
        return str;
    }
    return str.slice(0, len) + ellipsis;
};
var build = function (type, attributes, inner) {
    var el = document.createElement(type);
    if (attributes) {
        for (var attribute in attributes) {
            switch (attribute) {
                case "style":
                    setStyle(el, attributes[attribute]);
                    break;
                case "className":
                    el.className = attributes[attribute];
                    break;
                case "id":
                    el.id = attributes[attribute];
                    break;
                default:
                    el.setAttribute(attribute, attributes[attribute]);
            }
        }
    }
    if (inner) {
        if (isString(inner)) {
            el.appendChild(document.createTextNode(String(inner)));
        }
        else if (isArray(inner)) {
            for (var i = 0, ilen = inner.length; i < ilen; i++) {
                var ch = inner[i];
                if (typeof ch === "string" || typeof ch === "number") {
                    el.appendChild(document.createTextNode(String(ch)));
                }
                else if (ch) {
                    if (ch.nodeType) {
                        el.appendChild(ch);
                    }
                }
            }
        }
    }
    return el;
};
var isString = function (s) {
    return typeof s === "string";
};
var isArray = function (a) {
    return typeof a === "object" && a instanceof Array;
};
var isFunction = function (a) {
    return typeof a === "function" || false;
};
var isIE8 = function () {
    return isIE(8);
};
var isIE = function (version) {
    var Browser = window.QSI.Browser;
    if (Browser.name !== "Internet Explorer") {
        return false;
    }
    if (!version) {
        return true;
    }
    return version === Browser.version;
};
var isEdge = function () {
    var Browser = window.QSI.Browser;
    // PHP-Engine targeting response returns "Microsoft Edge" as browser name for Edge
    // Dx-targeting targeting response returns "Edge" as browser name for Edge
    // Need both "Microsoft Edge" and "Edge" here to account for both targeting responses
    return Browser.name === "Microsoft Edge" || Browser.name === "Edge";
};
var isChrome = function () {
    var Browser = window.QSI.Browser;
    return Browser.name === "Chrome";
};
var isOpera = function () {
    var Browser = window.QSI.Browser;
    return Browser.name === "Opera";
};
var isFF = function () {
    var Browser = window.QSI.Browser;
    return Browser.name === "Firefox";
};
var isAndroid = function () {
    var OS = window.QSI.OS;
    return OS.name === "Android";
};
//From prototype.js
var createArrayFromArguments = function (iterable) {
    if (!iterable) {
        return [];
    }
    return Array.prototype.slice.call(iterable);
};
var forOwn = function (obj, callback) {
    if (obj && obj instanceof Object && isFunction(callback)) {
        for (var index in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, index)) {
                callback(obj[index], index, obj);
            }
        }
    }
};
var getPageSize = function (win) {
    if (win === void 0) { win = window; }
    var doc = win.document.documentElement || {};
    // Prefer doc.clientWidth/doc.clientHeight to
    // window.innerWidth/window.innerHeight. Typically, they are equivalent,
    // so this doesn't matter most of the time. However, there is a case when
    // they are not equivalent: pinch-zooming on Mobile Browsers.
    // After zooming-in on Mobile Browsers,
    // window.innerWidth/window.innerHeight will shrink. This is because
    // these properties represent the size of the viewport, which effectively shrinks
    // upon zooming-in. doc.clientWidth/doc.clientHeight will
    // remain unaffected by zooming. They will still hold the values of the original
    // page's dimensions. Because this is a 'getPAGESize()' function, this
    // zoom-agnostic behavior is likely preferred.
    // Also, doc.clientWidth/Height excludes scrollbars on IE/Edge.
    // See SI-2883 for more info.
    return {
        width: doc.clientWidth || win.innerWidth,
        height: doc.clientHeight || win.innerHeight,
    };
};
var openWin = function (url, name, options, interceptId, targetType) {
    if (options === void 0) { options = {}; }
    var features = [];
    for (var option in options) {
        features.push(option + "=" + options[option]);
    }
    var featureString = features.join(",");
    if (usePostToStart(targetType)) {
        var WindowUtils = window.QSI.WindowUtils;
        var embeddedDataArray = window.QSI.EmbeddedData.getEmbeddedDataAsArray(interceptId);
        return WindowUtils.getOpenNewWindowOnclickHandler(url, embeddedDataArray, featureString, null, name).onclickHandler();
    }
    return window.open(url, name, featureString);
};
var startScrolling = function () {
    setStyle(document.body, { overflow: originalDocumentOverflow });
    document.removeEventListener("touchmove", preventDefault);
};
var stopScrolling = function () {
    originalDocumentOverflow = originalDocumentOverflow || getStyle(document.body, "overflow");
    setStyle(document.body, { overflow: "hidden" });
    //passive:false required since passive defaulted to true for touchmove events
    document.addEventListener("touchmove", preventDefault, { passive: false });
};
var preventDefault = function (evt) {
    evt.preventDefault();
};
var remove = function (el) {
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
};
var usePostToStart = function (targetURLType) {
    if (window.QSI.global.featureFlags["DX.PostToStart"] && targetURLType === "Survey") {
        return true;
    }
    return false;
};
var closeResponsiveEmbeddedTarget = function (embeddedTarget, elementToApplyFocus) {
    remove(embeddedTarget);
    if (elementToApplyFocus) {
        elementToApplyFocus.focus();
    }
    startScrolling();
};
// Verified solution from https://stackoverflow.com/questions/1173549/how-to-determine-if-an-object-is-an-object-literal-in-javascript
var isObjLiteral = function (obj) {
    var test = obj;
    var checkObjLiteral = function () {
        var loop = true;
        while (loop) {
            if (Object.getPrototypeOf((test = Object.getPrototypeOf(test))) === null) {
                loop = false;
            }
        }
        return Object.getPrototypeOf(obj) === test;
    };
    return typeof obj !== "object" || obj === null ? false : checkObjLiteral();
};
// Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
var strIncludes = function (str, search, start) {
    if (start === void 0) { start = 0; }
    return str.indexOf(search, start) !== -1;
};
// Adapted from https://mariusschulz.com/articles/ecmascript-2016-array-prototype-includes
var arrIncludes = function (arr, search, start) {
    if (start === void 0) { start = 0; }
    var len = arr.length >>> 0;
    // 1. If len is 0, return false.
    if (len === 0) {
        return false;
    }
    // 2. Let n be ? ToInteger(fromIndex).
    var n = start;
    // 3. If n ≥ 0, then
    //  a. Let k be n.
    // 4. Else n < 0,
    //  a. Let k be len + n.
    //  b. If k < 0, let k be 0.
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    function sameValueZero(x, y) {
        return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
    }
    // 5. Repeat, while k < len
    while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(arr[k], search)) {
            return true;
        }
        // c. Increase k by 1.
        k++;
    }
    // 6. Return false
    return false;
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initOrchestratorConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrchestratorConfig; });
/* harmony import */ var _PublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function initOrchestratorConfig() {
    var initConfig = window.QSI;
    var QSIConfig = (window.QSI = __assign(__assign({}, initConfig), { reg: initConfig.reg || {}, ed: initConfig.ed || {}, reqID: initConfig.reqID || {}, overrides: initConfig.overrides || {}, shouldStripQueryParamsInQLoc: !!initConfig.shouldStripQueryParamsInQLoc, config: __assign({ zoneId: "", brandId: "" }, initConfig.config), global: __assign(__assign({ currentZIndex: 2000000000, intercepts: {}, eventTrackers: [], featureFlags: {}, enableJSSanitization: false, latencySamplePercentage: 0.02, alreadyFetchedJSModules: [], maxCookieSize: null }, initConfig.global), { 
            // Everything below this line will always be defined as written
            isHostedJS: function () { return "" + "hostedjs" === "hostedjs"; }, clientType: "" + "hostedjs", clientVersion: "" + "1.40.1", hostedJSLocation: initConfig.config.hostedJSLocation || initConfig.config.clientBaseURL, legacyId: initConfig.config.interceptId ||
                initConfig.config.zoneId ||
                initConfig.config.targetingId ||
                initConfig.global.ID }), isFullDbgInitialized: false, baseURL: "", LoadingState: initConfig.LoadingState || [], PendingQueue: initConfig.PendingQueue || [], debugConfig: initConfig.debugConfig || {}, getBaseURLFromConfigAndOverrides: function () {
            var baseURL = "";
            if (QSIConfig.overrides.baseURL) {
                baseURL = QSIConfig.overrides.baseURL;
            }
            else if (QSIConfig.config.baseURL) {
                baseURL = QSIConfig.config.baseURL;
            }
            else {
                baseURL = "siteintercept.qualtrics.com";
                if (QSIConfig.config.brandId) {
                    if (!QSIConfig.config.zoneId) {
                        throw "You must specify a zoneId";
                    }
                    var zoneBrandSubdomain = QSIConfig.config.zoneId.replace("_", "").toLowerCase() + "-" + QSIConfig.config.brandId.toLowerCase();
                    baseURL = zoneBrandSubdomain + "." + baseURL;
                }
            }
            // Make baseURL protocol relative
            if (baseURL.indexOf("https://") === 0) {
                baseURL = baseURL.substring(8);
            }
            else if (baseURL.indexOf("http://") === 0) {
                baseURL = baseURL.substring(7);
            }
            else if (baseURL.indexOf("//") === 0) {
                baseURL = baseURL.substring(2);
            }
            return "https://" + baseURL;
        }, 
        // Legacy function that must exist to ensure debug logging works.
        initFullDbg: function () {
            QSIConfig.isFullDbgInitialized = true;
        }, getClientVersionQueryString: function () {
            var queryStrings = {
                Q_CLIENTVERSION: QSIConfig.global.clientVersion || "unknown",
                Q_CLIENTTYPE: QSIConfig.global.clientType || "unknown",
            };
            if (typeof QSIConfig.clientTypeVariant !== "undefined") {
                queryStrings["Q_CLIENTTYPE"] += QSIConfig.clientTypeVariant;
            }
            return QSIConfig.generateQueryString(queryStrings);
        }, generateQueryString: function (options) {
            var qsOptions = [];
            for (var i in options) {
                if (Object.prototype.hasOwnProperty.call(options, i)) {
                    var optString = i;
                    if (options[i]) {
                        optString += "=" + encodeURIComponent(options[i]);
                    }
                    qsOptions.push(optString);
                }
            }
            return qsOptions.join("&");
        } }));
    // Post-initialization steps
    if (!QSIConfig.global.legacyId) {
        throw "You must specify a zoneId or zoneId and interceptId";
    }
    QSIConfig.global.baseURL = QSIConfig.getBaseURLFromConfigAndOverrides();
    if (QSIConfig.global.isHostedJS()) {
        QSIConfig.global.enableJSSanitization = QSIConfig.config.enableJSSanitization || true;
    }
    QSIConfig.baseURL =
        QSIConfig.baseURL || QSIConfig.overrides.siBaseURL || QSIConfig.global.baseURL + "/WRSiteInterceptEngine/";
    Object(_PublicPath__WEBPACK_IMPORTED_MODULE_0__[/* setWebpackPublicPath */ "a"])(QSIConfig.global.hostedJSLocation);
    return QSIConfig;
}
var OrchestratorConfig = initOrchestratorConfig();


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setWebpackPublicPath; });
// This module configures Webpack at runtime to lazy-load chunks from the same location
// that the Orchestrator was downloaded from
/* eslint-disable @typescript-eslint/camelcase */
function setWebpackPublicPath(publicPath) {
    __webpack_require__.p = publicPath;
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orchestrator; });
/* harmony import */ var _LatencyLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _QSITypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _BackOffRetryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};




var Orchestrator = /** @class */ (function () {
    function Orchestrator() {
        var _this = this;
        this.init = function (latencyLog, debugLog) {
            _this.latencyLog = latencyLog;
            _this.debugLog = debugLog;
            _this.setupJFEMessageEventHandlerForIOSOptimization();
            // Init QSI.windows = {}
            // Set up post message listener to add popunder window handles.
            // The post message that this listens for is sent from PopUnderWatcherModule
            window.QSI.windows = {};
            window.addEventListener("message", _this.addWindowHandlersPostMessageListener);
            // set start time for latency logging
            _this.latencyLog.startTimer();
            if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.evaluate) {
                _this.handleSPAEvaluation();
            }
            if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.legacyId) {
                if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request) {
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request = {};
                }
                _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].debugConfig = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].debugConfig || {};
                var id = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.legacyId;
                var legacyParams = { id: id };
                _this.latencyLog.setRequestId(id);
                if (~Object.keys(_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request).indexOf(id)) {
                    latencyLog.markDuplicateScriptExecution();
                }
                if (id.indexOf("ZN") === 0) {
                    legacyParams.ZoneID = id;
                }
                else {
                    legacyParams.InterceptID = id;
                }
                var qsParams = void 0;
                if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.isHostedJS()) {
                    qsParams = _this.parseQueryString(window.location.href);
                    if (typeof qsParams.Q_DEBUG !== "undefined" || _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.debug) {
                        legacyParams.Q_DEBUG = null;
                        _this.debugLog.enableFullDebug();
                    }
                    if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.editing || _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.version === "0") {
                        legacyParams.version = "0";
                    }
                }
                else {
                    // Retrieve a reference to this script src to determine nocache, bookmarklet, debug, version
                    var legacyScriptSrc = void 0;
                    if (document.currentScript) {
                        legacyScriptSrc = document.currentScript.src;
                    }
                    else {
                        try {
                            // Fallback for IE
                            var rawScripts = document.querySelectorAll("script");
                            var legacyScripts = [];
                            for (var j in rawScripts) {
                                if (Object.prototype.hasOwnProperty.call(rawScripts, j)) {
                                    legacyScripts[j] = rawScripts[j];
                                }
                            }
                            var sieBaseUrl_1 = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.baseURL;
                            if (sieBaseUrl_1.indexOf("https://") === 0) {
                                sieBaseUrl_1 = sieBaseUrl_1.substring(8);
                            }
                            else if (sieBaseUrl_1.indexOf("http://") === 0) {
                                sieBaseUrl_1 = sieBaseUrl_1.substring(7);
                            }
                            else if (sieBaseUrl_1.indexOf("//") === 0) {
                                sieBaseUrl_1 = sieBaseUrl_1.substring(2);
                            }
                            var siScripts = legacyScripts.filter(function (o) {
                                if (o.src.indexOf(sieBaseUrl_1 + "/WRSiteInterceptEngine/?") !== -1 ||
                                    o.src.indexOf(sieBaseUrl_1 + "/SIE/?") !== -1) {
                                    return (o.src.indexOf("Q_Impress") === -1 &&
                                        o.src.indexOf("Q_Redirect") === -1 &&
                                        o.src.indexOf("Q_Click") === -1 &&
                                        o.src.indexOf("Q_DPR") === -1);
                                }
                                return false;
                            });
                            legacyScriptSrc = siScripts[0].src;
                        }
                        catch (e) {
                            _this.debugLog.e("An error occurred while loading the intercept. " + e);
                        }
                    }
                    qsParams = _this.parseQueryString(legacyScriptSrc);
                    // Copy over relevant querystring parameters for use on SIE requests (querystring key:value)
                    if (typeof qsParams.Q_NOCACHE !== "undefined") {
                        legacyParams.Q_NOCACHE = null;
                    }
                    if (typeof qsParams.Q_BOOKMARKLET !== "undefined") {
                        legacyParams.Q_BOOKMARKLET = null;
                        legacyParams.Q_DEBUG = null;
                        _this.debugLog.enableFullDebug();
                    }
                    if (typeof qsParams.Q_DEBUG !== "undefined") {
                        legacyParams.Q_DEBUG = null;
                        _this.debugLog.enableFullDebug();
                    }
                    if (typeof qsParams.Q_VERSION !== "undefined") {
                        legacyParams.version = qsParams.Q_VERSION;
                    }
                }
                if (typeof _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientVersion !== "undefined" &&
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientVersion !== null) {
                    legacyParams.Q_CLIENTVERSION = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientVersion;
                }
                if (typeof _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientType !== "undefined" &&
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientType !== null) {
                    legacyParams.Q_CLIENTTYPE = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientType;
                    if (typeof _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].clientTypeVariant !== "undefined") {
                        legacyParams.Q_CLIENTTYPE += _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].clientTypeVariant;
                    }
                }
                // short circuit in preview mode
                if (window.location.search.indexOf("Q_WAF_PREVIEWER") !== -1) {
                    return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, 22))
                        .then(function (_a) {
                        var LivePreviewer = _a.LivePreviewer;
                        new LivePreviewer();
                    })
                        .catch(function (e) {
                        _this.debugLog.e("An error occurred while loading the live previewer. " + e);
                    });
                }
                else {
                    _this.load(legacyParams, false);
                    return Promise.resolve(null);
                }
            }
            else {
                // mwu: I believe this else block is not used; we should remove it - DUX-3060
                if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request) {
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request = {};
                    var scripts = document.querySelectorAll("[data-siteinterceptscript]");
                    for (var i = 0; i < scripts.length; i++) {
                        var script = scripts[i];
                        // Determine debug
                        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug =
                            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug ||
                                script.hasAttribute("data-qdebug") ||
                                window.location.href.indexOf("Q_DEBUG") !== -1;
                        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug) {
                            _this.debugLog.enableFullDebug();
                        }
                        // Parse input
                        var params = {};
                        if (script.hasAttribute("data-interceptid")) {
                            params.InterceptID = script.getAttribute("data-interceptid");
                            params.id = params.InterceptID;
                        }
                        if (script.hasAttribute("data-zoneid")) {
                            params.ZoneID = script.getAttribute("data-zoneid");
                            params.id = params.ZoneID;
                        }
                        if (script.hasAttribute("data-qnocache")) {
                            params.Q_NOCACHE = null;
                        }
                        if (script.hasAttribute("data-qbookmarklet")) {
                            params.Q_BOOKMARKLET = null;
                        }
                        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug) {
                            params.Q_DEBUG = null;
                        }
                        if (script.hasAttribute("data-version")) {
                            params.version = script.getAttribute("data-version");
                        }
                        _this.load(params, false);
                        return Promise.resolve(null);
                    }
                }
            }
        };
        this.generateQueryString = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].generateQueryString;
        this.getClientVersionQueryString = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].getClientVersionQueryString;
        this.Deferred = function () {
            var deferred = {};
            var state = "pending";
            var resolvedArgs = [];
            var rejectedArgs = [];
            var resolveCallbacks = [];
            var rejectCallbacks = [];
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var orchestratorInstance = _this; // An unfortunate necessity while we have this Deferred stuff defined.
            var promise = {
                state: function () {
                    return state;
                },
                then: function (doneCallback, failCallback) {
                    this.done(doneCallback).fail(failCallback);
                    return this;
                },
                done: function (callback) {
                    if (state === "pending" && callback) {
                        resolveCallbacks.push(callback);
                    }
                    else if (state === "resolved") {
                        try {
                            callback.apply(this, resolvedArgs);
                        }
                        catch (e) {
                            orchestratorInstance.debugLog.e(e);
                        }
                    }
                    return this;
                },
                fail: function (callback) {
                    if (state === "pending" && callback) {
                        rejectCallbacks.push(callback);
                    }
                    else if (state === "rejected") {
                        try {
                            callback.apply(this, rejectedArgs);
                        }
                        catch (e) {
                            orchestratorInstance.debugLog.e(e);
                        }
                    }
                    return this;
                },
                promise: function () {
                    return promise;
                },
            };
            _this.forOwn(promise, function (value, funcName) {
                deferred[funcName] = promise[funcName];
            });
            deferred.resolve = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (state === "pending") {
                    state = "resolved";
                    resolvedArgs = args;
                    orchestratorInstance.each(resolveCallbacks, function (callback) {
                        try {
                            callback.apply(orchestratorInstance, args);
                        }
                        catch (e) {
                            orchestratorInstance.debugLog.e(e);
                        }
                    });
                }
            };
            deferred.reject = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (state === "pending") {
                    state = "rejected";
                    rejectedArgs = args;
                    orchestratorInstance.each(rejectCallbacks, function (callback) {
                        try {
                            callback.apply(orchestratorInstance, args);
                        }
                        catch (e) {
                            orchestratorInstance.debugLog.e(e);
                        }
                    });
                }
            };
            return deferred;
        };
    }
    Orchestrator.prototype.doSPAReload = function () {
        if (window.QSI && window.QSI.API) {
            var API_1 = window.QSI.API;
            API_1.unload();
            API_1.load().then(function () {
                API_1.run();
            });
        }
    };
    Orchestrator.prototype.handleSPAEvaluation = function () {
        var _this = this;
        var evaluationConfig = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.evaluate;
        if (evaluationConfig && !window.QSI.spaEvaluation) {
            window.QSI.spaEvaluation = true;
            if (evaluationConfig.onUrlPathChange) {
                if (window.history.pushState) {
                    var originalPushState_1 = window.history.pushState;
                    window.history.pushState = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        originalPushState_1.apply(window.history, args);
                        try {
                            this.doSPAReload();
                        }
                        catch (e) {
                            this.debugLog.e("An error occurred while handling SPA reload on pushState. " + e);
                        }
                    }.bind(this);
                }
                if (window.history.replaceState) {
                    var originalReplaceState_1 = window.history.replaceState;
                    window.history.replaceState = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        originalReplaceState_1.apply(window.history, args);
                        try {
                            this.doSPAReload();
                        }
                        catch (e) {
                            this.debugLog.e("An error occurred while handling SPA reload on replaceState. " + e);
                        }
                    }.bind(this);
                }
                window.addEventListener("popstate", function () {
                    try {
                        _this.doSPAReload();
                    }
                    catch (e) {
                        _this.debugLog.e("An error occurred while handling SPA reload on popstate. " + e);
                    }
                });
            }
            else if (evaluationConfig.onHashChange) {
                window.addEventListener("hashchange", function () {
                    try {
                        _this.doSPAReload();
                    }
                    catch (e) {
                        _this.debugLog.e("An error occurred while handling SPA reload on hashchange. " + e);
                    }
                });
            }
        }
    };
    Orchestrator.prototype.addWindowHandlersPostMessageListener = function (event) {
        var eventName = "QSI_popunderwatcher_addWindowHandler";
        if (typeof event.data === "string" && event.data.indexOf(eventName) != -1) {
            var optInIDsAndWindowNames = "QSI_OptInIDsAndWindowNames";
            var _a = event.data.split("|"), interceptID = _a[1], windowName = _a[2];
            var windowHandle = event.source;
            var windows = void 0;
            try {
                windows = JSON.parse(window.sessionStorage.getItem(optInIDsAndWindowNames));
                if (windows[interceptID] === windowName && !window.QSI.windows[windowName]) {
                    window.QSI.windows[windowName] = windowHandle;
                }
            }
            catch (e) {
                this.debugLog.e(e);
            }
        }
    };
    Orchestrator.prototype.load = function (params, isRetry) {
        var _this = this;
        // TODO: Convert AssetManager to an ES6 module
        var AssetManager = window.QSI.AssetManager;
        if (!isRetry) {
            // setting configurations to retry targeting if response from endpoint
            // asks client-side to retry later;
            //
            // we do not want to re-instantiate the retrier if load() was invoked
            // from a retry; otherwise we loop infinitely
            var targetingRetryerIdentifier = "Targeting Call";
            var targetingRetryLimit = 3;
            var calculateTargetingRetryBackOff = function (retryCount) {
                return Math.pow(2, retryCount - 1) * 2000; // exponential backoff
            };
            this.targetingRetryer = new _BackOffRetryer__WEBPACK_IMPORTED_MODULE_3__[/* BackOffRetryer */ "a"](targetingRetryerIdentifier, targetingRetryLimit, calculateTargetingRetryBackOff);
            // when we are retry targeting, we have not popped
            // LoadingState; therefore, we do not need to push another
            // instance onto the queue
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].LoadingState.push(true);
        }
        var requestUrl = this.generateTargetingURL(params);
        var xmdDebugRetryerIdentifier = "Q_XMD_DEBUG Call";
        var xmdDebugRetryLimit = 3;
        var xmdDebugRetryBackOff = function (retryCount) {
            return Math.pow(2, retryCount - 1) * 2000; // exponential backoff
        };
        this.xmdDebugRetryer = new _BackOffRetryer__WEBPACK_IMPORTED_MODULE_3__[/* BackOffRetryer */ "a"](xmdDebugRetryerIdentifier, xmdDebugRetryLimit, xmdDebugRetryBackOff);
        var targetingTimerName = isRetry
            ? _LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.TARGETING + "_retry_" + this.targetingRetryer.getRetryCount()
            : _LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.TARGETING;
        this.latencyLog.startComponentTimer(targetingTimerName);
        var targetingPostData = this.getTargetingPostData();
        var targetingPromise = AssetManager.promiseFetch("POST", requestUrl, targetingPostData);
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id] = {
            Intercepts: {},
            Params: params,
        };
        targetingPromise
            .then(function () {
            _this.latencyLog.endComponentTimer(targetingTimerName);
        })
            .then(this.handleTargetingResponse.bind(this, params), function (error) {
            _this.debugLog.e( true ? error.Message : undefined);
            if (params.deferred) {
                params.deferred.reject();
            }
        });
    };
    Orchestrator.prototype.getTargetingPostData = function () {
        var postData;
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].shouldStripQueryParamsInQLoc) {
            postData = "Q_LOC=" + encodeURIComponent(window.location.href.split("?")[0]);
        }
        else {
            postData = "Q_LOC=" + encodeURIComponent(window.location.href);
        }
        if (typeof _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.externalReference !== "undefined") {
            postData += "&extRef=" + _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.externalReference;
        }
        return postData;
    };
    Orchestrator.prototype.generateTargetingURL = function (inputParams) {
        var baseURL = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].baseURL + "Targeting.php?";
        var params = [];
        if (inputParams.InterceptID) {
            params.push("Q_InterceptID=" + inputParams.InterceptID);
        }
        if (inputParams.ZoneID) {
            params.push("Q_ZoneID=" + inputParams.ZoneID);
        }
        if (inputParams.Q_XMD_DEBUG) {
            params.push("Q_XMD_DEBUG");
        }
        else {
            if (inputParams.Q_DEBUG === null) {
                params.push("Q_DEBUG");
                _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug = true;
            }
            if (inputParams.Q_BOOKMARKLET === null) {
                params.push("Q_BOOKMARKLET");
            }
        }
        if (inputParams.Q_NOCACHE === null) {
            params.push("Q_NOCACHE");
        }
        if (typeof inputParams.version !== "undefined" && inputParams.version !== null) {
            params.push("Version=" + inputParams.version);
        }
        // @ts-ignore TODO: convert the profile module to ES6/Typescript
        var surveyTaken = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].profile.get("QualtricsSurveyHistory", "", 1);
        if (surveyTaken) {
            var surveys = encodeURIComponent(Object.keys(surveyTaken).toString());
            params.push("Q_QualtricsSurveyTaken=" + surveys);
        }
        if (typeof inputParams.Q_CLIENTVERSION !== "undefined" && inputParams.Q_CLIENTVERSION !== null) {
            params.push("Q_CLIENTVERSION=" + inputParams.Q_CLIENTVERSION);
        }
        if (typeof inputParams.Q_CLIENTTYPE !== "undefined" && inputParams.Q_CLIENTTYPE !== null) {
            params.push("Q_CLIENTTYPE=" + inputParams.Q_CLIENTTYPE);
        }
        return baseURL + params.join("&");
    };
    Orchestrator.prototype.isMessageEventOriginAllowed = function (origin) {
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reg) {
            for (var index in _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reg) {
                if (Object.prototype.hasOwnProperty.call(_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reg, index)) {
                    if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reg[index] && _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reg[index].options) {
                        var creativeOptions = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reg[index].options;
                        if (creativeOptions.targetURLOrigin === origin) {
                            return true;
                        }
                        if (creativeOptions.target && creativeOptions.target.OriginalURLOrigin === origin) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    Orchestrator.prototype.doCSTargetingEvaluation = function (ioSiResponse, ioRequest, clientVersion) {
        var _this = this;
        var TargetDisplayTypes;
        (function (TargetDisplayTypes) {
            TargetDisplayTypes["EMBEDDED_TARGET"] = "EmbeddedTarget";
        })(TargetDisplayTypes || (TargetDisplayTypes = {}));
        if (!Array.isArray(ioSiResponse.ClientSideIntercepts)) {
            return;
        }
        var ClientSideTargeting = window.QSI.ClientSideTargeting;
        ioSiResponse.Intercepts = [];
        var debugInfo = {
            Intercepts: {},
            Type: _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.editing ? "Editing" : "Published",
        };
        ioSiResponse.ClientSideIntercepts.forEach(function (intercept) {
            if (intercept) {
                if (intercept.Error) {
                    _this.debugLog.log(intercept.Message);
                }
                else {
                    // Determine passing Action Set by evaluating PRD, COOKIES, LOCAL STORAGE, and LOGIC TREES
                    // And get intercept object to add to QSI.Request and ioSiResponse
                    var _a = ClientSideTargeting.evaluateIntercept(intercept, _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug), interceptEntry = _a.interceptEntry, interceptDebugInfo = _a.interceptDebugInfo;
                    debugInfo.Intercepts[intercept.InterceptID] = interceptDebugInfo;
                    if (interceptEntry) {
                        ioRequest.Intercepts[intercept.InterceptID] = {};
                        ioRequest.Intercepts[intercept.InterceptID].Targeting = interceptEntry;
                        ioSiResponse.Intercepts.push(interceptEntry);
                        // Populate ioSiResponse.Modules so we load all necessary modules
                        if (interceptEntry.Decision.Creative) {
                            if (interceptEntry.Decision.Creative.Type) {
                                ioSiResponse.Modules[interceptEntry.Decision.Creative.Type] = clientVersion;
                            }
                            if (interceptEntry.Decision.PopUnderTarget) {
                                ioSiResponse.Modules.PopUnder = clientVersion;
                            }
                        }
                        if (interceptEntry.Decision.Target &&
                            interceptEntry.Decision.Target.DisplayType === TargetDisplayTypes.EMBEDDED_TARGET) {
                            ioSiResponse.Modules.EmbeddedTarget = clientVersion;
                        }
                    }
                }
            }
        });
        if (ioSiResponse.Intercepts.length > 0) {
            ioSiResponse.Modules.ScreenCapture = clientVersion;
        }
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug) {
            ioSiResponse.DebugInfo = JSON.stringify(debugInfo);
        }
        delete ioSiResponse.Modules.DependencyResolver;
    };
    Orchestrator.prototype.handleTargetingResponse = function (params, response) {
        var _this = this;
        // TODO: Convert AssetManager, HistoryModule, API, and EventTracker to an ES6 module
        var _a = window.QSI, AssetManager = _a.AssetManager, API = _a.API, EventTracker = _a.EventTracker, history = _a.history;
        try {
            var siResponse_1;
            // this is the response sent if the request was rejected due to server-side sampling
            if (response === "SampleRejected") {
                return;
            }
            try {
                siResponse_1 = JSON.parse(response);
            }
            catch (e) {
                this.debugLog.e("Failed to parse JSON of targeting response: " + response);
                return;
            }
            if (siResponse_1.Error) {
                this.debugLog.e(siResponse_1.Message);
                return;
            }
            if (siResponse_1.Message === "XMD_RETRY") {
                this.targetingRetryer.backOffAndRetry(function () {
                    _this.load(params, true);
                });
                return;
            }
            this.setGlobalVars(siResponse_1);
            var modules = siResponse_1.Modules;
            // TODO: Convert HistoryModule to an ES6 module
            history.logVisit();
            if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].hasDependencies ||
                !_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].hasBeenResolved) {
                EventTracker.trackElements();
                EventTracker.incrementEventList();
                window._qsie = API.Events;
            }
            var browserIsSupported = this.isBrowserSupported();
            // Load the core modules
            if (modules.Core && browserIsSupported) {
                var corePromise = AssetManager.promiseLoadScript("Core", modules.Core, _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"], this.latencyLog);
                // PREACT PROTOTYPE
                // TODO NEVER MERGE THIS CODE
                // modules.EmbeddedFeedback = "latest";
                corePromise.then(function () {
                    try {
                        var ClientSideTargeting = window.QSI.ClientSideTargeting;
                        // All evals of client side logic needs to go here. Once we generate a valid QSI.Request object and update the siResponse just call loadModules.
                        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DUX.ClientSideTargetingM1"] &&
                            siResponse_1.ClientSideIntercepts &&
                            siResponse_1.ClientSideIntercepts.length > 0) {
                            // Initiate Client Side Targeting
                            ClientSideTargeting.setEnabled(true);
                            _this.doCSTargetingEvaluation(siResponse_1, _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id], _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientVersion);
                        }
                        else {
                            if (siResponse_1.Intercepts) {
                                siResponse_1.Intercepts.forEach(function (intercept) {
                                    if (intercept) {
                                        if (intercept.Error) {
                                            _this.debugLog.log(intercept.Message);
                                        }
                                        else {
                                            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].Intercepts[intercept.InterceptID] = {};
                                            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].Intercepts[intercept.InterceptID].Targeting = intercept;
                                        }
                                    }
                                });
                            }
                        }
                        if (siResponse_1.Dependencies &&
                            !(_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DUX.ClientSideTargetingM1"] &&
                                siResponse_1.ClientSideIntercepts &&
                                siResponse_1.ClientSideIntercepts.length > 0)) {
                            _this.handleDependencyResolver(params, siResponse_1);
                        }
                        else {
                            //Add a handler for beforeunload event for popunder embedded data.
                            __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 34)).then(function (_a) {
                                var addPopunderEmbeddedDataHandler = _a.addPopunderEmbeddedDataHandler, updatePopunderEDCallback = _a.updatePopunderEDCallback;
                                addPopunderEmbeddedDataHandler(updatePopunderEDCallback);
                            });
                            // TODO: DUX-2491 Remove XMD DEBUG once we've re-architected
                            // ContactFrequency to be returned with first targeting response
                            if (_this.shouldMakeXMDDebugCall(siResponse_1)) {
                                params.Q_XMD_DEBUG = true;
                                _this.handleXMDDebug(params, siResponse_1);
                            }
                            else {
                                _this.loadModules(params, siResponse_1);
                            }
                        }
                    }
                    catch (e) {
                        _this.debugLog.e(e);
                    }
                }, function () {
                    // In case of script load failure, do nothing and abort execution.
                    // promiseLoadScript already uses this.debugLog.e to log an error message
                    // about the failure.
                });
            }
            else {
                this.doneLoading(params);
            }
        }
        catch (e) {
            this.debugLog.e(e);
        }
    };
    Orchestrator.prototype.shouldMakeXMDDebugCall = function (siResponse) {
        var ClientSideTargeting = window.QSI.ClientSideTargeting;
        // As part of Segmentation GA, we are changing the Targeting API to return a key telling
        // us whether there are any ContactFrequency-enabled; therefore we will move to relying
        // on that to let us know whether or not to make the XMD Debug calls
        if (ClientSideTargeting.isEnabled()) {
            var hasContactFrequencyEnabledIntercept = (function () {
                for (var i = 0; i < siResponse.Intercepts.length; i++) {
                    if (siResponse.Intercepts[i].ContactFrequencyRulesEnabled) {
                        return true;
                    }
                }
                return false;
            })();
            return !!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.externalReference && hasContactFrequencyEnabledIntercept;
        }
        // For non-client-side-targeting case
        //
        // If we are showing the debugger, and using contact frequency, we need the logic evaluation and debugInfo
        // from Q_DEBUG Targeting, but then need the contact frequency results from Q_XMD_DEBUG Targeting. Here we
        // are chaining the Q_XMD_DEBUG Targeting request and merging the responses together.
        return (!!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].config.externalReference &&
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DX.ContactFrequencyV3"] &&
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug);
    };
    Orchestrator.prototype.handleDependencyResolver = function (params, siResponse) {
        var _this = this;
        // TODO: Convert AssetManager to an ES6 module
        var AssetManager = window.QSI.AssetManager;
        var url = this.generateTargetingURL(params);
        url += "&t=" + new Date().getTime();
        url += "&Q_VSI=" + encodeURIComponent(JSON.stringify(siResponse.RequestData.validIntercepts));
        url += "&Q_DPR=true";
        // set DPR start time
        this.latencyLog.startComponentTimer(_LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.DPR_TARGETING);
        var postData = "";
        for (var type in siResponse.Dependencies) {
            if (Object.prototype.hasOwnProperty.call(siResponse.Dependencies, type)) {
                if (type === "SiteCatalyst") {
                    // @ts-ignore TODO: make module resolution more understandable
                    // eslint-disable-next-line no-undef
                    QSI["Resolve" + type].rootName = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].adobeVar;
                }
                // @ts-ignore TODO: make module resolution more understandable
                // eslint-disable-next-line no-undef
                postData += QSI["Resolve" + type].prepare(siResponse.Dependencies[type]);
            }
        }
        postData += "&" + this.getTargetingPostData();
        var dprPromise = AssetManager.promiseFetch("POST", url, postData);
        dprPromise
            .then(function () {
            this.latencyLog.endComponentTimer(_LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.DPR_TARGETING);
        })
            .then(this.handleTargetingResponse.bind(this, params), function (error) {
            _this.debugLog.e( true ? error.Message : undefined);
            if (params.deferred) {
                params.deferred.reject();
            }
        });
    };
    // TODO: DUX-2491 Remove XMD DEBUG
    Orchestrator.prototype.handleXMDDebug = function (params, siResponse) {
        var _this = this;
        var AssetManager = window.QSI.AssetManager;
        var passingIntercepts = {};
        siResponse.Intercepts.forEach(function (intercept) {
            if (intercept.Decision && intercept.Decision.ActionSetID) {
                var interceptID = intercept.InterceptID;
                var actionSetID = intercept.Decision.ActionSetID;
                passingIntercepts[interceptID] = actionSetID;
            }
        });
        var url = this.generateTargetingURL(params);
        var postData = "";
        postData += this.getTargetingPostData();
        postData += "&ContactFrequencyDebugIntercepts=" + JSON.stringify(passingIntercepts);
        // Add on the retry count to the log to distinguish retry requests from the original request
        var latencyLogTag = "" + _LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.XMD_DEBUG_TARGETING + this.xmdDebugRetryer.getRetryCount();
        // set DPR start time
        this.latencyLog.startComponentTimer(latencyLogTag);
        var xmdDebugPromise = AssetManager.promiseFetch("POST", url, postData);
        xmdDebugPromise.then(function (response) {
            _this.latencyLog.endComponentTimer(latencyLogTag);
            _this.handleXMDDebugResponse(params, siResponse, passingIntercepts, response);
        });
    };
    Orchestrator.prototype.hasXMDCacheFailure = function (siResponse) {
        for (var i = 0; i < siResponse.Intercepts.length; i++) {
            var intercept = siResponse.Intercepts[i];
            if (intercept.Decision && intercept.Decision.ContactFrequencyInfo) {
                var failureMode = intercept.Decision.ContactFrequencyInfo.FailureMode;
                // OTHER_INTERCEPT_PASSED means that > 1 Intercept has the same contact frequency rules
                // and this particular intercept did not pass and should not be retried since only
                // one intercept can pass in this situation.
                var failed = !!_QSITypes__WEBPACK_IMPORTED_MODULE_2__[/* CONTACT_FREQUENCY_CACHE_STATUS */ "a"][failureMode] &&
                    failureMode !== _QSITypes__WEBPACK_IMPORTED_MODULE_2__[/* CONTACT_FREQUENCY_CACHE_STATUS */ "a"].OTHER_INTERCEPT_PASSED &&
                    failureMode !== _QSITypes__WEBPACK_IMPORTED_MODULE_2__[/* CONTACT_FREQUENCY_CACHE_STATUS */ "a"].INVALID;
                if (failed) {
                    return failed;
                }
            }
        }
        return false;
    };
    Orchestrator.prototype.handleXMDDebugResponse = function (params, siResponse, passingIntercepts, response) {
        var _this = this;
        var xmdDebugResponse;
        var debugInfo;
        try {
            xmdDebugResponse = JSON.parse(response);
        }
        catch (e) {
            this.debugLog.e("Failed to parse JSON of Q_XMD_DEBUG targeting response: " + response);
            return;
        }
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug) {
            try {
                debugInfo = JSON.parse(siResponse.DebugInfo);
            }
            catch (e) {
                this.debugLog.e("Failed to parse debugInfo JSON of Q_DEBUG targeting response: " + siResponse);
                return;
            }
        }
        if (this.hasXMDCacheFailure(xmdDebugResponse)) {
            this.xmdDebugRetryer.backOffAndRetry(function () {
                if (debugInfo) {
                    xmdDebugResponse.DebugInfo = siResponse.DebugInfo;
                }
                var siResponseIntercepts = {};
                // For failed cache responses there is no actionset id so we
                // copy over the actionset ids from the previous response
                // into the retry response
                siResponse.Intercepts.forEach(function (intercept) {
                    siResponseIntercepts[intercept.InterceptID] = intercept;
                });
                xmdDebugResponse.Intercepts.forEach(function (intercept) {
                    if (intercept.Decision) {
                        intercept.Decision.ActionSetID = siResponseIntercepts[intercept.InterceptID].Decision.ActionSetID;
                    }
                });
                _this.handleXMDDebug(params, xmdDebugResponse);
            });
            return;
        }
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug) {
            xmdDebugResponse.Intercepts.forEach(function (xmdDebugIntercept) {
                if (xmdDebugIntercept) {
                    var interceptID = xmdDebugIntercept.InterceptID;
                    if (Object.prototype.hasOwnProperty.call(debugInfo.Intercepts, interceptID) &&
                        Object.prototype.hasOwnProperty.call(passingIntercepts, interceptID)) {
                        if (xmdDebugIntercept.Error) {
                            _this.debugLog.log(xmdDebugIntercept.Message);
                            debugInfo.Intercepts[interceptID].contactFrequencyPassed = false;
                        }
                        else {
                            debugInfo.Intercepts[interceptID].contactFrequencyPassed = xmdDebugIntercept.Decision.ActionSetID
                                ? true
                                : false;
                        }
                    }
                }
            });
            xmdDebugResponse.DebugInfo = JSON.stringify(debugInfo);
            xmdDebugResponse.Modules.Debug = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.clientVersion;
        }
        xmdDebugResponse.Intercepts.forEach(function (xmdResponseIntercept) {
            if (xmdResponseIntercept) {
                if (xmdResponseIntercept.Error) {
                    _this.debugLog.log(xmdResponseIntercept.Message);
                }
                else {
                    // If these fields are already defined in the original siResponse,
                    // use that instead of the one returned by Q_XMD_DEBUG
                    var xmdSIResponseIntercept = void 0;
                    for (var i = 0; i < siResponse.Intercepts.length; i++) {
                        if (xmdResponseIntercept.InterceptID === siResponse.Intercepts[i].InterceptID) {
                            xmdSIResponseIntercept = siResponse.Intercepts[i];
                        }
                    }
                    if (xmdSIResponseIntercept) {
                        xmdResponseIntercept.ContactID = xmdSIResponseIntercept.ContactID || xmdResponseIntercept.ContactID;
                        xmdResponseIntercept.DirectoryID = xmdSIResponseIntercept.DirectoryID || xmdResponseIntercept.DirectoryID;
                        xmdResponseIntercept.SurveyID = xmdSIResponseIntercept.SurveyID || xmdResponseIntercept.SurveyID;
                        xmdResponseIntercept.DistributionID =
                            xmdSIResponseIntercept.DistributionID || xmdResponseIntercept.DistributionID;
                    }
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].Intercepts[xmdResponseIntercept.InterceptID] = {};
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].Intercepts[xmdResponseIntercept.InterceptID].Targeting = xmdResponseIntercept;
                }
            }
        });
        this.loadModules(params, xmdDebugResponse);
    };
    Orchestrator.prototype.loadModules = function (params, siResponse) {
        var _this = this;
        // TODO: Convert AssetManager and ContactFrequncy to an ES6 module
        var _a = window.QSI, AssetManager = _a.AssetManager, ContactFrequency = _a.ContactFrequency;
        var promises = [];
        var modules = siResponse.Modules;
        this.latencyLog.startComponentTimer(_LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.ASSETS_AND_MODULES);
        // prefetch InterceptDependencies to prevent serial requests.
        __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 36));
        for (var module_1 in modules) {
            if (Object.prototype.hasOwnProperty.call(modules, module_1)) {
                //we don't want to load screen capture unless we need it, but we can't remove it from the response because of hosted
                if (module_1 === "ScreenCapture") {
                    this.setupScreenCaptureListener(modules[module_1]);
                    continue;
                }
                // ClientLogModule is now being bundled into the Orchestrator, no longer need to fetch it
                if (module_1 === "ClientLog") {
                    continue;
                }
                // DependencyResolver no longer exists
                if (module_1 === "DependencyResolver") {
                    continue;
                }
                if ((module_1 === "HTTPRedirect" || module_1 === "LatencyLog") && _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.isHostedJS()) {
                    this.debugLog.c("Module type '" + module_1 + "' is not supported when using Site Intercept Hosted JS");
                    continue;
                }
                // We do not have a separate-built module for EmbeddedFeedback
                // instead,starting with EmbeddedFeedback we are leveraging webpack
                // for dynamic import of creative-type modules; therefore, we do not
                // want to attempt to import EmbeddedFeedback the legacy way
                if (module_1 === "EmbeddedFeedback") {
                    continue;
                }
                var modulePromise = AssetManager.promiseLoadScript(module_1, modules[module_1], _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"], this.latencyLog);
                promises.push(modulePromise);
            }
        }
        for (var i = 0; i < siResponse.Intercepts.length; i++) {
            var intercept = siResponse.Intercepts[i];
            if (intercept && !intercept.Error && intercept.Decision.ActionSetID !== null) {
                var interceptPromise = AssetManager.promiseLoadIntercept(params.id, intercept, params, this.latencyLog);
                var creativePromise = AssetManager.promiseLoadCreative(params.id, intercept, params, this.latencyLog);
                promises.push(interceptPromise, creativePromise);
                if (intercept.Decision.PopUnderTarget &&
                    intercept.Decision.PopUnderTarget.ID &&
                    intercept.Decision.PopUnderTarget.ID !== "Target") {
                    var popUnderTargetPromise = AssetManager.promiseLoadPopUnderTarget(params.id, intercept, params);
                    promises.push(popUnderTargetPromise);
                }
            }
        }
        // eslint-disable-next-line prefer-spread
        this.when.apply(this, promises).then(function () {
            try {
                _this.latencyLog.endComponentTimer(_LatencyLog__WEBPACK_IMPORTED_MODULE_0__[/* LatencyLog */ "a"].components.ASSETS_AND_MODULES);
                // DUX-1584: remove ff on GA
                if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DX.ContactFrequencyV3"] &&
                    (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DX.ContactFrequencyV2"] ||
                        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DX.ContactFrequency"])) {
                    var contactFrequencyPromise = ContactFrequency.checkContactFrequencyRules(_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].Intercepts, _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.brandID);
                    contactFrequencyPromise.then(function () {
                        _this.prepareIntercepts(params, siResponse);
                    });
                }
                else {
                    _this.prepareIntercepts(params, siResponse);
                }
            }
            catch (e) {
                _this.debugLog.e(e);
            }
        }, function (error) {
            var errorMessage = "";
            if (typeof error === "string") {
                errorMessage = error;
            }
            else if (error && typeof error.Message === "string") {
                errorMessage = error;
            }
            _this.debugLog.e("An error occurred while loading the intercept. " + errorMessage);
            if (params.deferred) {
                params.deferred.reject();
            }
        });
    };
    Orchestrator.prototype.setInterceptDisplayOptionCallback = function (displayInterceptType, interceptCallback) {
        // TODO convert UtilityToolsModule to ES6/TypeScript
        var UtilityTools = window.QSI.util;
        switch (displayInterceptType) {
            case "":
            case "onfocus":
                UtilityTools.waitForFocus().then(interceptCallback);
                break;
            case "onload":
                interceptCallback();
                break;
            case "onexit":
                UtilityTools.waitForExitIntent().then(interceptCallback);
                break;
            default:
                return;
        }
    };
    Orchestrator.prototype.prepareIntercepts = function (params, siResponse) {
        var _this = this;
        return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 36)).then(function () {
            // TODO: Make RunInterceptsModule an ES6 module
            var RunIntercepts = window.QSI.RunIntercepts;
            // end time
            if (params.loadingFromAPI !== true) {
                _this.latencyLog.endTimer();
                // If there were retries due to xmd cache hydration, always send the latency log.
                if (_this.xmdDebugRetryer.getRetryCount() > 0) {
                    _this.latencyLog.send();
                }
                else {
                    _this.latencyLog.sampledSend(_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.latencySamplePercentage);
                }
            }
            _this.setGlobalIncludes(params, siResponse);
            var displayInterceptType = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].displayInterceptType;
            var clientSideTargetingEnabled = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags["DUX.ClientSideTargetingM1"] &&
                siResponse.ClientSideIntercepts &&
                siResponse.ClientSideIntercepts.length > 0;
            if (!(displayInterceptType === "manual" || _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].zoneManualDisplay) ||
                (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].hasDependencies && !clientSideTargetingEnabled)) {
                RunIntercepts(params.id, false);
            }
            _this.doneLoading(params);
            // Resolve promise, if one was passed in
            if (params.deferred) {
                params.deferred.resolve();
            }
        });
    };
    Orchestrator.prototype.isBrowserSupported = function () {
        // Support Chrome 20 and higher
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser.name === "Chrome" && _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser.version <= 20) {
            return false;
        }
        // Support Firefox 60 and higher
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser.name === "Firefox" && _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser.version <= 59) {
            return false;
        }
        // Support IE 11
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser.name === "Internet Explorer" && _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser.version <= 10) {
            return false;
        }
        return true;
    };
    Orchestrator.prototype.setGlobalIncludes = function (params, siResponse) {
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].isDebug && siResponse.DebugInfo) {
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].Debug = {
                debugInfo: JSON.parse(siResponse.DebugInfo),
                version: siResponse.RequestData.bVersion,
            };
            var debugConfig = {
                version: siResponse.RequestData.bVersion,
                debugInfo: JSON.parse(siResponse.DebugInfo),
            };
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].debugConfig = debugConfig;
        }
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].version = siResponse.RequestData.bVersion;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].InterceptsRan = false;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].hasDependencies = siResponse.RequestData.hasDependencies;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].hasBeenResolved = siResponse.RequestData.hasBeenResolved;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].displayInterceptType = siResponse.RequestData.displayInterceptType;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Request[params.id].zoneManualDisplay = siResponse.RequestData.zoneManualDisplay;
    };
    Orchestrator.prototype.setGlobalVars = function (siResponse) {
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].Browser = {
            name: siResponse.RequestData.browser,
            version: siResponse.RequestData.browserVersion,
            isMobile: siResponse.RequestData.isMobile,
            isBrowserSupported: siResponse.RequestData.isBrowserSupported,
        };
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].CORSOrigin = siResponse.RequestData.CORSOrigin;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].OS = {
            name: siResponse.RequestData.osName,
            version: siResponse.RequestData.osVersion,
        };
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.brandID = siResponse.RequestData.brandID;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.brandDC = siResponse.RequestData.brandDC;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.graphicPath =
            "https://" + _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.brandDC + "/WRQualtricsSiteIntercept/Graphic.php?IM=";
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.imagePath = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.baseURL + "/WRQualtricsShared/Graphics/";
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.maxCookieSize = siResponse.RequestData.maxCookieSize;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.featureFlags = siResponse.FeatureFlags;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.screenCaptureServiceBaseURL = siResponse.RequestData.screenCaptureServiceBaseURL;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].global.eventTrackers = siResponse.RequestData.eventTrackers;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].adobeVar = siResponse.RequestData.adobeSCVariable;
        // This is used by IE to get the stored user data off the storage element
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].id = siResponse.RequestData.ID;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].reqID[siResponse.RequestData.ID] = true;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].CookieDomain = siResponse.RequestData.cookieDomain;
        // Use for history storage
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].historyStorageType = siResponse.RequestData.historyStorageType;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].historyStorageSize = siResponse.RequestData.historyStorageSize;
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].currentURL = window.location.href.split("?")[0];
        (function () {
            // Create the measurement node
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "scrollbar-measure";
            scrollDiv.style.width = "100px";
            scrollDiv.style.height = "100px";
            scrollDiv.style.overflow = "scroll";
            scrollDiv.style.position = "absolute";
            scrollDiv.style.top = "-99999px";
            document.body.appendChild(scrollDiv);
            // Get the scrollbar width
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].scrollbarWidth = scrollbarWidth; // Mac:  15
            // Delete the DIV
            document.body.removeChild(scrollDiv);
        })();
    };
    Orchestrator.prototype.parseQueryString = function (url) {
        var options = {};
        if (url && url.indexOf("?") !== -1) {
            var queryString = url.split("?", 2)[1];
            var queryStringArr = queryString.split("&");
            for (var i = 0; i < queryStringArr.length; i++) {
                var option = queryStringArr[i].split("=", 2);
                if (option[0] === "Q_LOC" && option[1].indexOf("Q_DEBUG") !== -1) {
                    options.Q_DEBUG = true;
                }
                if (option[0]) {
                    options[option[0]] = decodeURIComponent(option[1]);
                }
            }
        }
        return options;
    };
    Orchestrator.prototype.replaceAll = function (str, value, replacement) {
        value = value.replace(/([.*+?^${}()|[\]\\=!:/])/g, "\\$1");
        return str.replace(new RegExp(value, "g"), replacement);
    };
    Orchestrator.prototype.when = function (childDeferred) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var orchestratorInstance = this; // An unfortunate necessity while we have this Deferred stuff defined.
        var deferreds = __spreadArrays([childDeferred], args);
        var length = deferreds.length;
        var remaining = length;
        var deferred = remaining === 1 ? childDeferred : this.Deferred();
        var update = function (i, values) {
            return function (value) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                values[i] = arguments.length > 1 ? value : orchestratorInstance.createArrayFromArguments(__spreadArrays([value], rest));
                if (!--remaining) {
                    deferred.resolve(values);
                }
            };
        };
        if (length > 1) {
            for (var i = 0; i < length; i++) {
                if (deferreds[i] && deferreds[i].promise) {
                    deferreds[i]
                        .promise()
                        .done(update(i, deferreds))
                        .fail(deferred.reject);
                }
                else {
                    remaining--;
                }
            }
        }
        if (remaining < 1) {
            deferred.resolve(deferreds);
        }
        return deferred.promise();
    };
    //From prototype.js
    Orchestrator.prototype.createArrayFromArguments = function (iterable) {
        if (!iterable) {
            return [];
        }
        return Array.prototype.slice.call(iterable);
    };
    Orchestrator.prototype.isFunction = function (a) {
        return typeof a === "function" || false;
    };
    Orchestrator.prototype.forOwn = function (obj, callback) {
        // TODO add check for callback
        if (obj && obj instanceof Object && this.isFunction(callback)) {
            for (var index in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, index)) {
                    callback(obj[index], index, obj);
                }
            }
        }
    };
    Orchestrator.prototype.each = function (array, callback) {
        var length = array.length;
        if (length) {
            for (var i = 0; i < length; i++) {
                callback(array[i], i);
            }
        }
    };
    Orchestrator.prototype.doneLoading = function (params) {
        // SI resources finished loading so remove one loading flag from the array
        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].LoadingState.pop();
        // if all snippets are done loading then emit event and execute API functions that are in the queue
        if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].LoadingState.length === 0) {
            // if load was triggered by the Snippet code and not from OrchestratorConfig.API.load()
            // then emit event notifying that SI finishes loading all resources
            if (params.loadingFromAPI !== true) {
                var loadingEvent = document.createEvent("Event");
                loadingEvent.initEvent("qsi_js_loaded", true, true);
                window.dispatchEvent(loadingEvent);
            }
            var length_1 = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].PendingQueue.length;
            for (var i = 0; i < length_1; i++) {
                var func = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].PendingQueue.shift();
                func();
            }
        }
    };
    // iOS Browsers have quirks when the embedded target is a JFE survey.
    // See SI-1905 and SI-2820 for more information.
    Orchestrator.prototype.setupJFEMessageEventHandlerForIOSOptimization = function () {
        var _this = this;
        if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].JFEListenerRegistered) {
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].JFEListenerRegistered = true;
            var isSurveyIFrameOnIOS_1 = function (msgData) {
                var data = null;
                if (typeof msgData === "string") {
                    try {
                        data = JSON.parse(msgData);
                    }
                    catch (e) {
                        return false;
                    }
                }
                return (data !== null &&
                    data.from === "JFE" &&
                    data.to === "SI" &&
                    data.event === "JFELoaded" &&
                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].OS.name === "iOS");
            };
            // By informing the surveys that they're being viewed through
            // <iframe>s on iOS, it will optimize their CSS for
            // iOS. The surveys are black-boxed b/c of CORS,
            // so we must communicate with them via postMessage.
            var informSurveyIFrameOfIOS_1 = function (iframeWindow, iframeOrigin) {
                iframeWindow.postMessage({
                    event: "addIOSSIWorkaround",
                    from: "SI",
                    to: "JFE",
                }, iframeOrigin);
            };
            // When should we postMessage to the survey? If we do it before the survey fully
            // loads, it won't work b/c the corresponding event listener isn't setup yet.
            // We should do it after the survey fully loads. But how do we know when the
            // survey fully loads? We can't do 'iframe.onload' b/c our surveys are SPAs.
            // 'iframe.onload' would correspond to the 'onload' of the survey's
            // SPA-javascript. But we need to know when the SPA-javascript has finished
            // executing -- that is the 'true onload'. Currently, we have JFE send us
            // a 'canScreenCapture' event when the survey truly loads. Originally, this
            // event was specifically for screencapture-related purposes. However, because
            // it's always sent on survey true-load, we can use it as well. In the future,
            // we will generalize the 'canScreenCapture' event's name to 'surveyHasLoaded',
            // or something similar for better semantics. See SI-2987 for more information.
            return window.addEventListener("message", function (event) {
                try {
                    if (!_this.isMessageEventOriginAllowed(event.origin)) {
                        return;
                    }
                    if (isSurveyIFrameOnIOS_1(event.data)) {
                        informSurveyIFrameOfIOS_1(event.source, event.origin);
                    }
                }
                catch (e) {
                    _this.debugLog.e(e);
                }
            });
        }
    };
    Orchestrator.prototype.setupScreenCaptureListener = function (version) {
        var _this = this;
        if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureListenerRegistered) {
            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureListenerRegistered = true;
            // listens for post messages from survey iframes
            // This return does nothing for the code, but makes it testable
            return window.addEventListener("message", function (event) {
                try {
                    if (!_this.isMessageEventOriginAllowed(event.origin)) {
                        return;
                    }
                    // TODO convert AssetManager + UtilityToolsModule to ES6/TypeScript
                    var _a = window.QSI, AssetManager = _a.AssetManager, UtilityTools = _a.util;
                    // gets the intercept that contains the embedded target that the message originated from
                    var intercept_1 = UtilityTools.getOriginInterceptOfMessage(event.source);
                    // if intercept is null, then the message did not originate from the embedded target
                    // of an intercept and we should just ignore it.  This check is also our security.
                    // We won't post screen capture data back  to a source unless it's the embedded target
                    // of one of the registered intercepts on the page
                    if (!intercept_1) {
                        return;
                    }
                    var messageObject_1 = event.data;
                    if (typeof messageObject_1 === "string") {
                        try {
                            messageObject_1 = JSON.parse(messageObject_1);
                        }
                        catch (e) {
                            return;
                        }
                    }
                    if (!messageObject_1 || messageObject_1.from !== "JFE" || messageObject_1.to !== "SI") {
                        return;
                    }
                    if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers) {
                        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers = {};
                    }
                    // let's the embedded target know that it is contained by an intercept that can handle
                    // screen capture requests
                    if (messageObject_1.event === "canScreenCapture") {
                        if (typeof _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureModulePromise === "undefined") {
                            _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureModulePromise = AssetManager.promiseLoadScript("ScreenCapture", version, _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"], _this.latencyLog);
                        }
                        var canScreenCaptureMessage = {
                            event: "canScreenCapture",
                            from: "SI",
                            to: "JFE",
                            canScreenCapture: true,
                        };
                        event.source.postMessage(JSON.stringify(canScreenCaptureMessage), event.origin);
                        return;
                    }
                    if (typeof _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureModulePromise !== "undefined") {
                        _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureModulePromise.then(function () {
                            // TODO Convert ScreenCaptureHandler to ES6 Module.
                            var ScreenCaptureHandler = window.QSI.ScreenCaptureHandler;
                            if (!_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers[messageObject_1.sessionId]) {
                                _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers[messageObject_1.sessionId] = new ScreenCaptureHandler(intercept_1, event.source, messageObject_1.sessionId, messageObject_1.translations, event.origin);
                            }
                            switch (messageObject_1.event) {
                                case "startScreenCapture":
                                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers[messageObject_1.sessionId].captureScreen(messageObject_1.questionId);
                                    break;
                                case "editScreenCapture":
                                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers[messageObject_1.sessionId].editAnnotations(messageObject_1.questionId);
                                    break;
                                case "removeScreenCapture":
                                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers[messageObject_1.sessionId].removeScreenCapture(messageObject_1.questionId);
                                    break;
                                case "sessionFinished":
                                    _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_1__[/* OrchestratorConfig */ "a"].screenCaptureHandlers[messageObject_1.sessionId].removeAllScreenCaptures();
                                    break;
                                default:
                                    return;
                            }
                        });
                    }
                }
                catch (e) {
                    _this.debugLog.e(e);
                }
            });
        }
    };
    return Orchestrator;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatencyLog; });
/* harmony import */ var _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var LatencyLog = /** @class */ (function () {
    function LatencyLog(debugLog) {
        var _this = this;
        // Make non-static copies of these values for legacy reasons. Remove once legacy code is gone.
        this.metricName = LatencyLog.metricName;
        this.components = LatencyLog.components;
        this.overallLatencyStartTime = null;
        this.overallLatency = null;
        this.componentStartTimes = {};
        this.componentLatencies = {};
        this.isDuplicateScriptExecution = false;
        this.setRequestId = function (requestId) {
            _this.requestId = requestId;
        };
        this.startTimer = function () {
            _this.latencyStartTime = Date.now();
        };
        this.endTimer = function () {
            if (_this.latencyStartTime === null) {
                _this.debugLog.e("Tried to log overall end time without a start time.");
                return;
            }
            _this.overallLatency = Date.now() - _this.latencyStartTime;
        };
        this.startComponentTimer = function (componentName) {
            _this.componentStartTimes[componentName] = Date.now();
        };
        this.endComponentTimer = function (componentName) {
            var componentStartTime = _this.componentStartTimes[componentName];
            if (typeof componentStartTime === "undefined") {
                _this.debugLog.e("Tried to log a component end time without a component start time.  Component name: " + componentName);
                return;
            }
            _this.componentLatencies[componentName] = Date.now() - componentStartTime;
        };
        // We have logic in AssetManager to prevent redudant fetches of already-loaded
        // resources. This function marks the component latency with an indicator so
        // that, in our logs, we know that the component was needed, but did not incur
        // additional latency since it was already loaded by something else
        this.markComponentAlreadyFetched = function (componentName) {
            // if there is already a value for the component latency, then the fact
            // that it was already fetched was because of this instance of the script
            // execution; therefore, we'd want to keep that recorded latency
            if (_this.componentLatencies[componentName]) {
                return;
            }
            _this.componentLatencies[componentName] = LatencyLog.alreadyFetchedMarker;
        };
        // set a flag in that will be recorded in our logging to know if we hit a
        // case where the same script tag is being executed on the same page.
        // This will not include re-execution from using QSI.API; instead, this is
        // to catch cases where customers have accidentally put the same script tag
        // multiple times (e.g. misconfigured tag managers)
        this.markDuplicateScriptExecution = function () {
            _this.isDuplicateScriptExecution = true;
        };
        /**
         * This will make a request back to SI endpoint to log our overall RUM latency and its components.
         */
        this.send = function () {
            try {
                if (_this.overallLatency === null) {
                    _this.debugLog.e("Incomplete Latency Data Provided");
                    return;
                }
                var baseURL = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].baseURL;
                var qs = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].getClientVersionQueryString();
                var latencyEndpointUrl = baseURL + "Ajax.php?action=LatencyLog&" + qs;
                var otherRequestIds = [];
                // adding log information to know if other WAF scripts for other Intercepts/Zones
                // were run on the page prior to this one
                for (var requestId in _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].Request) {
                    if (Object.prototype.hasOwnProperty.call(_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].Request, requestId) &&
                        requestId !== _this.requestId) {
                        otherRequestIds.push(requestId);
                    }
                }
                var loggingData = {
                    MetricName: LatencyLog.metricName,
                    Latency: _this.overallLatency,
                    ComponentLatencies: _this.componentLatencies,
                    AdditionalData: {
                        RequestID: _this.requestId,
                        ClientURL: _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].currentURL,
                        UserAgent: navigator.userAgent,
                        BrandID: _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].global.brandID,
                        BrandDC: _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].global.brandDC,
                        OtherRequestIDsExecuted: otherRequestIds,
                        IsDuplicateScriptExecution: _this.isDuplicateScriptExecution,
                    },
                };
                // TODO: TypeScriptify + Webpackify the non-orchestrator files (see: UtilityToolsModule.js)
                //@ts-ignore
                // eslint-disable-next-line
                QSI.util.sendHttpRequest({
                    type: "POST",
                    url: latencyEndpointUrl,
                    header: {
                        "Content-type": "application/x-www-form-urlencoded",
                    },
                    includeCookies: false,
                    // TODO: TypeScriptify + Webpackify the non-orchestrator files (see: UtilityToolsModule.js)
                    //@ts-ignore
                    // eslint-disable-next-line
                    data: QSI.util.buildQueryString({ LoggingData: JSON.stringify(loggingData) }),
                });
            }
            catch (e) {
                _this.debugLog.e(e);
            }
        };
        /**
         * This will make a request back to SI endpoint to log RUM latency if sampling logic passes.
         *
         * @param samplingPercentage: numeric percentage value out of 100 that we want to sample at
         */
        this.sampledSend = function (samplingPercentage) {
            try {
                if (Math.random() <= samplingPercentage / 100 === true) {
                    // log latency
                    _this.send();
                }
            }
            catch (e) {
                _this.debugLog.e(e);
            }
        };
        this.debugLog = debugLog;
    }
    LatencyLog.metricName = "si.SILatency";
    LatencyLog.alreadyFetchedMarker = "ALREADY_FETCHED";
    LatencyLog.components = {
        CORE_MODULE: "coreModuleRequest",
        TARGETING: "targetingRequest",
        DPR_TARGETING: "dprTargetingRequest",
        // TODO: DUX-2491 Remove XMD DEBUG
        XMD_DEBUG_TARGETING: "xmdDebugTargetingRequest",
        ASSETS_AND_MODULES: "allAssetDefinitionsAndJSModules",
        CONTACT_FREQUENCY: "contactFrequencyCheck",
    };
    return LatencyLog;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACT_FREQUENCY_CACHE_STATUS; });
var CONTACT_FREQUENCY_CACHE_STATUS = {
    OTHER_INTERCEPT_PASSED: "OTHER_INTERCEPT_PASSED",
    MISSING: "MISSING",
    PENDING: "PENDING",
    INVALID: "INVALID",
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOffRetryer; });
var BackOffRetryer = /** @class */ (function () {
    function BackOffRetryer(retryerName, retryLimit, retryBackOffFormula) {
        this.retryerName = retryerName;
        this.retryLimit = retryLimit;
        this.retryBackOffFormula = retryBackOffFormula;
        this.retryCount = 0;
    }
    BackOffRetryer.prototype.backOffAndRetry = function (retryFunction) {
        if (this.retryCount < this.retryLimit) {
            this.retryCount++;
            setTimeout(retryFunction, this.retryBackOffFormula(this.retryCount));
        }
        else {
            var debugLog = window.QSI.dbg;
            debugLog.e("Retryer for " + this.retryerName + " - Exceeded retry limit of " + this.retryLimit + "; No longer retrying");
        }
    };
    BackOffRetryer.prototype.getRetryCount = function () {
        return this.retryCount;
    };
    BackOffRetryer.prototype.resetRetryCount = function () {
        this.retryCount = 0;
    };
    return BackOffRetryer;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugLog; });
var DebugLog = /** @class */ (function () {
    function DebugLog() {
        var _this = this;
        this.isFullDbgInitialized = window.location.href.indexOf("Q_DEBUG") !== -1;
        this.safeConsole = function (funcName, message) {
            if (_this.isFullDbgInitialized) {
                try {
                    // eslint-disable-next-line
                    console[funcName](message);
                    // eslint-disable-next-line
                }
                catch (e) { }
            }
        };
        this.enableFullDebug = function () {
            _this.isFullDbgInitialized = true;
        };
        this.disableFullDebug = function () {
            _this.isFullDbgInitialized = false;
        };
        this.log = function (message, includeStackTrace, levelName) {
            // TODO expose these as importable modules + types
            var _a = window.QSI, ClientLog = _a.ClientLog, OrchestratorGlobalConfig = _a.global;
            if (ClientLog) {
                if (OrchestratorGlobalConfig.featureFlags.isClientLoggingEnabled) {
                    ClientLog.send(message, includeStackTrace, levelName);
                }
                else {
                    var samplingPercentage = 0.02;
                    ClientLog.sampledSend(message, includeStackTrace, levelName, samplingPercentage);
                }
            }
        };
        this.c = function (m) {
            _this.safeConsole("log", m);
            _this.log(m);
        };
        this.d = function (m) {
            _this.safeConsole("dir", m);
            _this.log(m);
        };
        this.t = function (m) {
            _this.safeConsole("trace", m);
            _this.log(m);
        };
        this.e = function (m) {
            _this.safeConsole("log", (m && m.message) || "error");
            _this.safeConsole("error", m);
            _this.log(m);
        };
    }
    return DebugLog;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientLog; });
var ClientLog = /** @class */ (function () {
    function ClientLog() {
    }
    /**
     * This will make a request back to SI endpoint to log the client message.
     *
     * @method send
     * @example
     *  ClientLog.send('This is an error that happened in the browser');
     */
    ClientLog.prototype.send = function (message, includeStackTrace, levelName) {
        if (includeStackTrace === void 0) { includeStackTrace = true; }
        if (levelName === void 0) { levelName = "error"; }
        try {
            var _a = window.QSI, baseURL = _a.baseURL, getClientVersionQueryString = _a.getClientVersionQueryString;
            var loggingEndpointUrl = baseURL + "Ajax.php?action=ClientLog&" + getClientVersionQueryString();
            // Get site intercept and zone id
            var reqID = window.QSI.reqID;
            var requestIds = "";
            for (var requestID in reqID) {
                if (reqID[requestID]) {
                    requestIds += requestID + " ";
                }
            }
            if (includeStackTrace && message.stack) {
                message = message.stack;
            }
            var userAgent = navigator.userAgent;
            var currentURL = window.QSI.currentURL;
            var requestParams = {
                LevelName: levelName,
                Message: "requestId: " + requestIds + "\n currentURL: " + currentURL + "\n userAgent: " + userAgent + "\n message: " + message,
            };
            // TODO: TypeScriptify + Webpackify the non-orchestrator files (see: UtilityToolsModule.js)
            //@ts-ignore
            // eslint-disable-next-line
            QSI.util.sendHttpRequest({
                type: "POST",
                url: loggingEndpointUrl,
                header: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                includeCookies: false,
                // TODO: TypeScriptify + Webpackify the non-orchestrator files (see: UtilityToolsModule.js)
                //@ts-ignore
                // eslint-disable-next-line
                data: QSI.util.buildQueryString(requestParams),
            });
        }
        catch (e) {
            // Do not call QSI.dbg.e(e) here to avoid indirect recursion
            // since this function is called by QSI.dbg.e
            // Still though, only log if we have enabled debugging
            var isDebug = window.QSI.isDebug;
            if (isDebug) {
                console.log(e); // eslint-disable-line
            }
        }
    };
    /**
     * This will make a request back to SI endpoint to log client side error if sampling logic passes.
     *
     * @method sampledSend
     * @example
     *  ClientLog.sampledSend(message, true, 'Error', 0.02);
     */
    ClientLog.prototype.sampledSend = function (message, includeStackTrace, levelName, samplingPercentage) {
        if (Math.random() <= samplingPercentage / 100) {
            this.send(message, includeStackTrace, levelName);
        }
    };
    return ClientLog;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cookie; });
/* harmony import */ var _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var Cookie = /** @class */ (function () {
    function Cookie() {
        var _this = this;
        this.cookieSize = 0;
        document.cookie.split(";").forEach(function (cookie) {
            var idx = cookie.indexOf("QSI");
            if (~idx) {
                _this.cookieSize += cookie.length - idx;
            }
        });
    }
    Cookie.prototype.set = function (name, value, daysToExpire, domain, options) {
        if (options === void 0) { options = {}; }
        var maxCookieSize = _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].global.maxCookieSize;
        var currentCookieValue = this.get(name);
        var currentCookieSize = this.getCookieSize();
        if (currentCookieValue) {
            currentCookieSize -= (name + "=" + currentCookieValue).length;
        }
        var expiresString = "";
        if (daysToExpire) {
            var f = new Date();
            f.setTime(f.getTime() + daysToExpire * 86400000);
            expiresString = "; expires=" + f.toUTCString();
        }
        var dmn = "";
        if (domain) {
            dmn = "domain=" + domain;
        }
        else if (_OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].CookieDomain) {
            dmn = "domain=" + _OrchestratorConfig__WEBPACK_IMPORTED_MODULE_0__[/* OrchestratorConfig */ "a"].CookieDomain;
        }
        var cookieVal = name + "=" + value;
        var newCookieSize = currentCookieSize + cookieVal.length;
        if (options.force || (maxCookieSize !== null && newCookieSize <= maxCookieSize) || maxCookieSize === null) {
            // Don't check if this is null
            if (!options.erase) {
                this.cookieSize = newCookieSize;
            }
            else {
                this.cookieSize = currentCookieSize;
            }
            var cookieStr = "" + cookieVal + expiresString + "; path=/; " + dmn;
            // set secure cookie flag if protocol is https
            if (location.protocol === "https:") {
                cookieStr += "; secure";
            }
            // set the cookie
            document.cookie = cookieStr;
        }
        else {
            throw new Error("Cannot exceed the specified maximum cookie size");
        }
    };
    Cookie.prototype.get = function (name) {
        var e = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            var idx = c.indexOf(e);
            if (~idx) {
                return c.substring(idx + e.length, c.length);
            }
        }
        return null;
    };
    Cookie.prototype.erase = function (name, domain) {
        this.set(name, "", -1, domain, { force: true, erase: true });
    };
    Cookie.prototype.getCookieSize = function () {
        return this.cookieSize;
    };
    Cookie.prototype.areCookiesEnabled = function () {
        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
        // navigator.cookieEnabled cannot detect custom or nuanced cookie blocking
        // configurations. For example, when blocking cookies via the Advanced
        // Privacy Settings in IE9, it always returns true. And there have been
        // issues in the past with site-specific exceptions.
        // Don't rely on it.
        // try..catch because some in situations `document.cookie` is exposed but throws a
        // SecurityError if you try to access it; e.g. documents created from data URIs
        // or in sandboxed iframes (depending on flags/context)
        try {
            // Create cookie
            document.cookie = "cookietest=1";
            var ret = document.cookie.indexOf("cookietest=") !== -1;
            // Delete cookie
            document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
            return ret;
        }
        catch (e) {
            return false;
        }
    };
    return Cookie;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieStorage; });
var CookieStorage = /** @class */ (function () {
    function CookieStorage() {
        this.storageCache = {};
        this.cookieName = "QSI_DATA";
        this.refreshFromCookie();
    }
    CookieStorage.prototype.refreshFromCookie = function () {
        try {
            var cookieVal = window.QSI.cookie.get(this.cookieName);
            if (cookieVal) {
                this.storageCache = JSON.parse(cookieVal);
            }
        }
        catch (e) {
            this.storageCache = {};
        }
    };
    CookieStorage.prototype.setToCookie = function () {
        try {
            window.QSI.cookie.set(this.cookieName, JSON.stringify(this.storageCache));
        }
        catch (e) {
            // error setting the cookie
        }
    };
    CookieStorage.prototype.setItem = function (name, value) {
        this.storageCache[name] = value;
        this.setToCookie();
    };
    CookieStorage.prototype.getItem = function (name) {
        return this.storageCache[name] || null;
    };
    CookieStorage.prototype.removeItem = function (name) {
        delete this.storageCache[name];
        this.setToCookie();
    };
    CookieStorage.prototype.reload = function () {
        this.refreshFromCookie();
    };
    CookieStorage.prototype.clear = function () {
        this.storageCache = {};
        this.setToCookie();
    };
    return CookieStorage;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _InterceptAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);


var API = /** @class */ (function () {
    function API() {
        var _this = this;
        /**
         * The Site Intercept JavaScript API is provided as a simple, constant interface that allows users to have
         * more control over their intercepts.
         *
         */
        this.unloading = false;
        this.Events = new _Events__WEBPACK_IMPORTED_MODULE_0__[/* Events */ "a"]();
        /**
         * Loads the script tags for any intercepts/zones on the page. This will make a request back to the Site Intercept servers
         * simulating a normal page refresh.
         *
         * @method load
         * @example
         *  // Loads the Site Intercept code for any defined intercepts or creatives
         *  window.QSI.API.load();
         *  // Starts the intercept code evaluation.
         *  window.QSI.API.run();
         */
        this.load = function () {
            try {
                var deferred = window.QSI.Orchestrator.Deferred();
                var promise = deferred.promise();
                if (!window.QSI.PendingQueue) {
                    window.QSI.PendingQueue = [];
                }
                if (window.QSI.LoadingState && window.QSI.LoadingState.length > 0) {
                    window.QSI.PendingQueue.push(_this.loadHelper.bind(_this, deferred));
                }
                else {
                    _this.loadHelper.bind(_this, deferred)();
                }
                return promise;
            }
            catch (e) {
                window.QSI.dbg.e(e);
            }
        };
        /**
         * Unloads any intercepts on the page. All creatives are removed and the main QSI object is returned to a blank state.
         *
         * @method unload
         * @example
         *  // Removes any currently displaying creatives
         *  window.QSI.API.unload();
         *  // Loads the Site Intercept code for any defined intercepts or creatives
         *  window.QSI.API.load();
         */
        this.unload = function () {
            try {
                if (!window.QSI.PendingQueue) {
                    window.QSI.PendingQueue = [];
                }
                if (window.QSI.LoadingState && window.QSI.LoadingState.length > 0) {
                    window.QSI.PendingQueue.push(window.QSI.API.unload);
                    return;
                }
                _this.unloading = true;
                if (window.QSI.reg) {
                    window.QSI.util.forOwn(window.QSI.reg, function (value, id) {
                        var creative = window.QSI.reg[id];
                        creative.remove();
                    });
                    window.QSI.util.removeObservers();
                }
                if (window.QSI.debug) {
                    window.QSI.util.remove(window.QSI.util.$("QSI_Debug"));
                    window.QSI.debuggerHasDisplayed = false;
                }
                if (window.QSI.styleElements) {
                    var styleElements = window.QSI.styleElements;
                    for (var i = 0; i < styleElements.length; i++) {
                        window.QSI.util.remove(styleElements[i]);
                    }
                }
                window.QSI.reg = undefined;
                window.QSI.Request = undefined;
                window.QSI.styleElements = undefined;
                _this.unloading = false;
            }
            catch (e) {
                window.QSI.dbg.e(e);
            }
        };
        /**
         * Runs all defined intercepts on the page. When manually loading intercepts this <b>MUST</b> be called after
         * loading the page or calling window.QSI.API.load() for the intercept to show.
         *
         * @method run
         * @example
         *  // Loads the Site Intercept code for any defined intercepts or creatives
         *  window.QSI.API.load();
         *  // Starts the intercept code evaluation.
         *  window.QSI.API.run();
         */
        this.run = function () {
            try {
                if (!window.QSI.PendingQueue) {
                    window.QSI.PendingQueue = [];
                }
                if (window.QSI.LoadingState && window.QSI.LoadingState.length > 0) {
                    window.QSI.PendingQueue.push(window.QSI.API.run);
                    return;
                }
                if (!window.QSI.InterceptsRan && window.QSI.reg !== undefined) {
                    window.QSI.RunIntercepts(null, true);
                }
            }
            catch (e) {
                window.QSI.dbg.e(e);
            }
        };
        this.getIntercept = function (interceptId) {
            return finishLoading()
                .then(function () {
                if (!window.QSI.reg[interceptId]) {
                    throw interceptId + " is not a valid Intercept ID";
                }
                return _InterceptAPI__WEBPACK_IMPORTED_MODULE_1__[/* InterceptAPI */ "a"].getInstance(interceptId);
            })
                .catch(function (e) {
                window.QSI.dbg.e(e);
                throw e;
            });
        };
    }
    API.prototype.loadHelper = function (deferred) {
        try {
            // If window.QSI.API.load is called multiple times we do not want to call window.QSI.Orchestrator.load multiple times
            // window.QSI.reg is only defined by window.QSI.API.load and undefined by window.QSI.API.unload
            // we also dont want to call load if window.QSI.API.unload is currently running
            if (window.QSI.reg || this.unloading) {
                deferred.reject();
                return;
            }
            if (window.QSI === undefined) {
                // @ts-ignore
                window.QSI = {};
            }
            if (window.QSI.reg === undefined) {
                window.QSI.reg = {};
            }
            if (window.QSI.ed === undefined) {
                window.QSI.ed = {};
            }
            if (window.QSI.reqID === undefined) {
                window.QSI.reqID = {};
            }
            if (window.QSI.Request === undefined) {
                window.QSI.Request = {};
            }
            if (window.QSI.styleElements === undefined) {
                window.QSI.styleElements = [];
            }
            window.QSI.util.forOwn(window.QSI.reqID, function (value, id) {
                var requestParams = {};
                requestParams.loadingFromAPI = true;
                requestParams.id = id;
                if (window.QSI.version === "Editing") {
                    requestParams.version = "0";
                }
                if (typeof window.QSI.global.clientVersion !== "undefined" && window.QSI.global.clientVersion !== null) {
                    requestParams.Q_CLIENTVERSION = window.QSI.global.clientVersion;
                }
                if (typeof window.QSI.global.clientType !== "undefined" && window.QSI.global.clientType !== null) {
                    requestParams.Q_CLIENTTYPE = window.QSI.global.clientType;
                    if (typeof window.QSI.clientTypeVariant !== "undefined") {
                        requestParams.Q_CLIENTTYPE += window.QSI.clientTypeVariant;
                    }
                }
                if (id.search(/ZN/) === 0) {
                    requestParams.ZoneID = id;
                }
                else {
                    requestParams.InterceptID = id;
                }
                if (window.QSI.isDebug) {
                    requestParams.Q_DEBUG = null;
                }
                requestParams.deferred = deferred;
                window.QSI.Orchestrator.load(requestParams, false);
            });
        }
        catch (e) {
            window.QSI.dbg.e(e);
        }
    };
    return API;
}());

function finishLoading() {
    return new Promise(function (resolve, reject) {
        try {
            if (!window.QSI.PendingQueue) {
                window.QSI.PendingQueue = [];
            }
            if (window.QSI.LoadingState && window.QSI.LoadingState.length > 0) {
                window.QSI.PendingQueue.push(function () {
                    resolve();
                });
            }
            else {
                resolve();
            }
        }
        catch (e) {
            reject(e);
        }
    });
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
var Events = /** @class */ (function () {
    function Events() {
    }
    /**
     * Tracking events allows a user to know how many times a client has performed a certain action. Any events being tracked
     * can be passed as embedded data to the intercept target.
     *
     * An event can be tracked by using the following:
     * @example
     *  // gets the window._qsie variable or sets it to an array
     *  window._qsie = window._qsie || [];
     *  window._qsie.push('eventName');
     */
    Events.prototype.increment = function (name) {
        try {
            window.QSI.EventTracker.track(name);
        }
        catch (e) {
            window.QSI.dbg.e(e);
        }
    };
    /**
     * Gets the number of times the given event occurred.
     *
     * @method Events.count
     * @param {String} name The name of the event
     * @return {Number} The number of times the event has occurred.
     * @example
     *  // Gets the event count
     *  var count = window.QSI.API.Events.count('eventName');
     */
    Events.prototype.count = function (name) {
        try {
            return window.QSI.EventTracker.get(name);
        }
        catch (e) {
            window.QSI.dbg.e(e);
        }
    };
    Events.prototype.push = function (name) {
        try {
            window.QSI.EventTracker.track(name);
        }
        catch (e) {
            window.QSI.dbg.e(e);
        }
    };
    return Events;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptAPI; });
var InterceptAPI = /** @class */ (function () {
    function InterceptAPI(id) {
        var _this = this;
        this.id = id;
        this.closeCallbacks = {};
        this.closeCallbackCounter = 0;
        this.runCloseCallbacks = function () {
            Object.keys(_this.closeCallbacks).forEach(function (callbackId) {
                _this.closeCallbacks[callbackId]();
            });
        };
        /**
         * Registers a callback that that will be triggered when any creative
         * in the intercept is closed.
         *
         * @remarks
         * This function can be called multiple times. Registered callbacks will be
         * called in the order they were added.
         *
         * @param closeFn - The function to run when the intercept is closed
         * @returns a function that can be called to unregister the event handler that was added.
         */
        this.onClose = function (closeFn) {
            var callbackID = String(_this.closeCallbackCounter++);
            _this.closeCallbacks[callbackID] = closeFn;
            window.QSI.callbacks[_this.id].onClose = _this.runCloseCallbacks;
            // Return a function that can remove the onClose handler that was added
            return function () {
                if (_this.closeCallbacks[callbackID]) {
                    delete _this.closeCallbacks[callbackID];
                }
            };
        };
        window.QSI.callbacks = window.QSI.callbacks || {};
        window.QSI.callbacks[id] = window.QSI.callbacks[id] || {};
    }
    InterceptAPI.instanceCache = {};
    InterceptAPI.getInstance = function (id) {
        if (!InterceptAPI.instanceCache[id]) {
            InterceptAPI.instanceCache[id] = new InterceptAPI(id);
        }
        return InterceptAPI.instanceCache[id];
    };
    return InterceptAPI;
}());



/***/ })
/******/ ]);
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}