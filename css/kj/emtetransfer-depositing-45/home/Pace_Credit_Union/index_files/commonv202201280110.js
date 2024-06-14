

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-flexboxlegacy-domprefixes-setclasses-shiv-testallprops-testprop
 * !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in E)if(E.hasOwnProperty(l)){if(e=[],t=E[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function a(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?b.className.baseVal=t:b.className=t)}function i(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function u(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?c(o,n||t):o);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(){var e=t.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function m(e,n,r,o){var a,i,l,c,u="modernizr",f=s("div"),d=p();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:u+(r+1),f.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+u,(d.fake?d:f).appendChild(a),d.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",c=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),i=n(f,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=c,b.offsetHeight):f.parentNode.removeChild(f),!!i}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+f(t[o])+":"+r+")");return a=a.join(" or "),m("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function g(e,t,o,a){function c(){f&&(delete z.style,delete z.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var u=h(e,o);if(!r(u,"undefined"))return u}for(var f,d,p,m,g,v=["modernizr","tspan","samp"];!z.style&&v.length;)f=!0,z.modElem=s(v.shift()),z.style=z.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=z.style[m],i(m,"-")&&(m=l(m)),z.style[m]!==n){if(a||r(o,"undefined"))return c(),"pfx"==t?m:!0;try{z.style[m]=o}catch(y){}if(z.style[m]!=g)return c(),"pfx"==t?m:!0}return c(),!1}function v(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,a):(s=(e+" "+w.join(i+" ")+i).split(" "),u(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],E=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){E.push({name:e,fn:t,options:n})},addAsyncTest:function(e){E.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var b=t.documentElement,x="Moz O ms Webkit",w=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=w;var _="svg"===b.nodeName.toLowerCase(),N=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=N;var j={elem:s("modernizr")};Modernizr._q.push(function(){delete j.elem});var z={style:j.elem.style};Modernizr._q.unshift(function(){delete z.style});S.testProp=function(e,t,r){return g([e],n,t,r)};S.testAllProps=v,S.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0));_||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,c(t)}function a(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function c(e){e||(e=t);var r=a(e);return!C.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=C,c(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t),o(),a(C),delete S.addTest,delete S.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);

	// Flash Player Version Detection - Rev 1.6
// Detect Client Browser type
// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");			
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
			//alert("flashVer="+flashVer);
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
    var str = '';
    if (isIE && isWin && !isOpera)
    {
  		str += '<object ';
  		for (var i in objAttrs)
  			str += i + '="' + objAttrs[i] + '" ';
  		for (var i in params)
  			str += '><param name="' + i + '" value="' + params[i] + '" /> ';
  		str += '></object>';
    } else {
  		str += '<embed ';
  		for (var i in embedAttrs)
  			str += i + '="' + embedAttrs[i] + '" ';
  		str += '> </embed>';
    }

    document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "id":
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}



    
    
        /**
 * @license jahashtable, a JavaScript implementation of a hash table. It creates a single constructor function called
 * Hashtable in the global scope.
 *
 * http://www.timdown.co.uk/jshashtable/
 * Copyright 2013 Tim Down.
 * Version: 3.0
 * Build date: 17 July 2013
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hashtable = (function(UNDEFINED) {
    var FUNCTION = "function", STRING = "string", UNDEF = "undefined";

    // Require Array.prototype.splice, Object.prototype.hasOwnProperty and encodeURIComponent. In environments not
    // having these (e.g. IE <= 5), we bail out now and leave Hashtable null.
    if (typeof encodeURIComponent == UNDEF ||
            Array.prototype.splice === UNDEFINED ||
            Object.prototype.hasOwnProperty === UNDEFINED) {
        return null;
    }

    function toStr(obj) {
        return (typeof obj == STRING) ? obj : "" + obj;
    }

    function hashObject(obj) {
        var hashCode;
        if (typeof obj == STRING) {
            return obj;
        } else if (typeof obj.hashCode == FUNCTION) {
            // Check the hashCode method really has returned a string
            hashCode = obj.hashCode();
            return (typeof hashCode == STRING) ? hashCode : hashObject(hashCode);
        } else {
            return toStr(obj);
        }
    }
    
    function merge(o1, o2) {
        for (var i in o2) {
            if (o2.hasOwnProperty(i)) {
                o1[i] = o2[i];
            }
        }
    }

    function equals_fixedValueHasEquals(fixedValue, variableValue) {
        return fixedValue.equals(variableValue);
    }

    function equals_fixedValueNoEquals(fixedValue, variableValue) {
        return (typeof variableValue.equals == FUNCTION) ?
            variableValue.equals(fixedValue) : (fixedValue === variableValue);
    }

    function createKeyValCheck(kvStr) {
        return function(kv) {
            if (kv === null) {
                throw new Error("null is not a valid " + kvStr);
            } else if (kv === UNDEFINED) {
                throw new Error(kvStr + " must not be undefined");
            }
        };
    }

    var checkKey = createKeyValCheck("key"), checkValue = createKeyValCheck("value");

    /*----------------------------------------------------------------------------------------------------------------*/

    function Bucket(hash, firstKey, firstValue, equalityFunction) {
        this[0] = hash;
        this.entries = [];
        this.addEntry(firstKey, firstValue);

        if (equalityFunction !== null) {
            this.getEqualityFunction = function() {
                return equalityFunction;
            };
        }
    }

    var EXISTENCE = 0, ENTRY = 1, ENTRY_INDEX_AND_VALUE = 2;

    function createBucketSearcher(mode) {
        return function(key) {
            var i = this.entries.length, entry, equals = this.getEqualityFunction(key);
            while (i--) {
                entry = this.entries[i];
                if ( equals(key, entry[0]) ) {
                    switch (mode) {
                        case EXISTENCE:
                            return true;
                        case ENTRY:
                            return entry;
                        case ENTRY_INDEX_AND_VALUE:
                            return [ i, entry[1] ];
                    }
                }
            }
            return false;
        };
    }

    function createBucketLister(entryProperty) {
        return function(aggregatedArr) {
            var startIndex = aggregatedArr.length;
            for (var i = 0, entries = this.entries, len = entries.length; i < len; ++i) {
                aggregatedArr[startIndex + i] = entries[i][entryProperty];
            }
        };
    }

    Bucket.prototype = {
        getEqualityFunction: function(searchValue) {
            return (typeof searchValue.equals == FUNCTION) ? equals_fixedValueHasEquals : equals_fixedValueNoEquals;
        },

        getEntryForKey: createBucketSearcher(ENTRY),

        getEntryAndIndexForKey: createBucketSearcher(ENTRY_INDEX_AND_VALUE),

        removeEntryForKey: function(key) {
            var result = this.getEntryAndIndexForKey(key);
            if (result) {
                this.entries.splice(result[0], 1);
                return result[1];
            }
            return null;
        },

        addEntry: function(key, value) {
            this.entries.push( [key, value] );
        },

        keys: createBucketLister(0),

        values: createBucketLister(1),

        getEntries: function(destEntries) {
            var startIndex = destEntries.length;
            for (var i = 0, entries = this.entries, len = entries.length; i < len; ++i) {
                // Clone the entry stored in the bucket before adding to array
                destEntries[startIndex + i] = entries[i].slice(0);
            }
        },

        containsKey: createBucketSearcher(EXISTENCE),

        containsValue: function(value) {
            var entries = this.entries, i = entries.length;
            while (i--) {
                if ( value === entries[i][1] ) {
                    return true;
                }
            }
            return false;
        }
    };

    /*----------------------------------------------------------------------------------------------------------------*/

    // Supporting functions for searching hashtable buckets

    function searchBuckets(buckets, hash) {
        var i = buckets.length, bucket;
        while (i--) {
            bucket = buckets[i];
            if (hash === bucket[0]) {
                return i;
            }
        }
        return null;
    }

    function getBucketForHash(bucketsByHash, hash) {
        var bucket = bucketsByHash[hash];

        // Check that this is a genuine bucket and not something inherited from the bucketsByHash's prototype
        return ( bucket && (bucket instanceof Bucket) ) ? bucket : null;
    }

    /*----------------------------------------------------------------------------------------------------------------*/

    function Hashtable() {
        var buckets = [];
        var bucketsByHash = {};
        var properties = {
            replaceDuplicateKey: true,
            hashCode: hashObject,
            equals: null
        };

        var arg0 = arguments[0], arg1 = arguments[1];
        if (arg1 !== UNDEFINED) {
            properties.hashCode = arg0;
            properties.equals = arg1;
        } else if (arg0 !== UNDEFINED) {
            merge(properties, arg0);
        }

        var hashCode = properties.hashCode, equals = properties.equals;

        this.properties = properties;

        this.put = function(key, value) {
            checkKey(key);
            checkValue(value);
            var hash = hashCode(key), bucket, bucketEntry, oldValue = null;

            // Check if a bucket exists for the bucket key
            bucket = getBucketForHash(bucketsByHash, hash);
            if (bucket) {
                // Check this bucket to see if it already contains this key
                bucketEntry = bucket.getEntryForKey(key);
                if (bucketEntry) {
                    // This bucket entry is the current mapping of key to value, so replace the old value.
                    // Also, we optionally replace the key so that the latest key is stored.
                    if (properties.replaceDuplicateKey) {
                        bucketEntry[0] = key;
                    }
                    oldValue = bucketEntry[1];
                    bucketEntry[1] = value;
                } else {
                    // The bucket does not contain an entry for this key, so add one
                    bucket.addEntry(key, value);
                }
            } else {
                // No bucket exists for the key, so create one and put our key/value mapping in
                bucket = new Bucket(hash, key, value, equals);
                buckets.push(bucket);
                bucketsByHash[hash] = bucket;
            }
            return oldValue;
        };

        this.get = function(key) {
            checkKey(key);

            var hash = hashCode(key);

            // Check if a bucket exists for the bucket key
            var bucket = getBucketForHash(bucketsByHash, hash);
            if (bucket) {
                // Check this bucket to see if it contains this key
                var bucketEntry = bucket.getEntryForKey(key);
                if (bucketEntry) {
                    // This bucket entry is the current mapping of key to value, so return the value.
                    return bucketEntry[1];
                }
            }
            return null;
        };

        this.containsKey = function(key) {
            checkKey(key);
            var bucketKey = hashCode(key);

            // Check if a bucket exists for the bucket key
            var bucket = getBucketForHash(bucketsByHash, bucketKey);

            return bucket ? bucket.containsKey(key) : false;
        };

        this.containsValue = function(value) {
            checkValue(value);
            var i = buckets.length;
            while (i--) {
                if (buckets[i].containsValue(value)) {
                    return true;
                }
            }
            return false;
        };

        this.clear = function() {
            buckets.length = 0;
            bucketsByHash = {};
        };

        this.isEmpty = function() {
            return !buckets.length;
        };

        var createBucketAggregator = function(bucketFuncName) {
            return function() {
                var aggregated = [], i = buckets.length;
                while (i--) {
                    buckets[i][bucketFuncName](aggregated);
                }
                return aggregated;
            };
        };

        this.keys = createBucketAggregator("keys");
        this.values = createBucketAggregator("values");
        this.entries = createBucketAggregator("getEntries");

        this.remove = function(key) {
            checkKey(key);

            var hash = hashCode(key), bucketIndex, oldValue = null;

            // Check if a bucket exists for the bucket key
            var bucket = getBucketForHash(bucketsByHash, hash);

            if (bucket) {
                // Remove entry from this bucket for this key
                oldValue = bucket.removeEntryForKey(key);
                if (oldValue !== null) {
                    // Entry was removed, so check if bucket is empty
                    if (bucket.entries.length == 0) {
                        // Bucket is empty, so remove it from the bucket collections
                        bucketIndex = searchBuckets(buckets, hash);
                        buckets.splice(bucketIndex, 1);
                        delete bucketsByHash[hash];
                    }
                }
            }
            return oldValue;
        };

        this.size = function() {
            var total = 0, i = buckets.length;
            while (i--) {
                total += buckets[i].entries.length;
            }
            return total;
        };
    }

    Hashtable.prototype = {
        each: function(callback) {
            var entries = this.entries(), i = entries.length, entry;
            while (i--) {
                entry = entries[i];
                callback(entry[0], entry[1]);
            }
        },

        equals: function(hashtable) {
            var keys, key, val, count = this.size();
            if (count == hashtable.size()) {
                keys = this.keys();
                while (count--) {
                    key = keys[count];
                    val = hashtable.get(key);
                    if (val === null || val !== this.get(key)) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },

        putAll: function(hashtable, conflictCallback) {
            var entries = hashtable.entries();
            var entry, key, value, thisValue, i = entries.length;
            var hasConflictCallback = (typeof conflictCallback == FUNCTION);
            while (i--) {
                entry = entries[i];
                key = entry[0];
                value = entry[1];

                // Check for a conflict. The default behaviour is to overwrite the value for an existing key
                if ( hasConflictCallback && (thisValue = this.get(key)) ) {
                    value = conflictCallback(key, thisValue, value);
                }
                this.put(key, value);
            }
        },

        clone: function() {
            var clone = new Hashtable(this.properties);
            clone.putAll(this);
            return clone;
        }
    };

    Hashtable.prototype.toQueryString = function() {
        var entries = this.entries(), i = entries.length, entry;
        var parts = [];
        while (i--) {
            entry = entries[i];
            parts[i] = encodeURIComponent( toStr(entry[0]) ) + "=" + encodeURIComponent( toStr(entry[1]) );
        }
        return parts.join("&");
    };

    return Hashtable;
})();
        function startsWith(c,d){return(c.indexOf(d)===0)
}function DomDataCollection(n){var j=this;
j.config={recursion_level:1,collection_mode:"partial",functionsToExclude:[],function_list_size:1024,json_script:n?n:"json2.js"};
j.emptyDomData=function(){j.dom_data={functions:{names:[],excluded:{size:0,count:0},truncated:false},inputs:[],iFrames:[],scripts:[],collection_status:DomDataCollection.NotStarted}
};
j.startInspection=function(){var b=false;
var c=true;
BrowserDetect.init();
if(!(BrowserDetect.browser==="Explorer")){try{j.inspectJSFunctions();
c=false
}catch(a){b=b||true
}}else{j.dom_data.functions=[];
if(j.dom_data.functions===undefined||j.dom_data.functions.names===undefined){j.dom_data.functions={names:[],excluded:{size:0,count:0},truncated:false}
}}try{j.inspectFrames();
c=false
}catch(a){b=b||true
}try{j.inspectScripts();
c=false
}catch(a){b=b||true
}try{j.inspectInputFields();
c=false
}catch(a){b=b||true
}if(b){if(c){j.dom_data.collection_status=DomDataCollection.Fail
}else{j.dom_data.collection_status=DomDataCollection.Partial
}}else{j.dom_data.collection_status=DomDataCollection.Success
}if(!(BrowserDetect.browser==="Explorer")){j.handleSizeLimit()
}};
j.domDataAsJSON=function(){return stripIllegalChars(JSON.stringify(j.dom_data))
};
j.recursiveGetAllFunctionNamesUnderElement=function(B,e,A){var C;
var d;
var g;
var x=j.config;
var D=x.recursion_level;
var a=x.collection_mode;
if(j.dom_data.functions===undefined||j.dom_data.functions.names===undefined){j.dom_data.functions={names:[],excluded:{size:0,count:0},truncated:false}
}var f=j.dom_data.functions;
var c=f.excluded;
for(var E in e){try{var F=e[E];
C=""+F;
if(B.length>0){prefix=B+"."
}else{prefix=""
}d=prefix+E;
if(k(F)){if(j.functionShouldBeCollected(F,E)){var G=f.names;
g=G.length;
G[g]=d
}else{if(a=="partial"){c.size+=C.length;
c.count++
}}}if(A+1<D){j.recursiveGetAllFunctionNamesUnderElement(d,F,A+1)
}else{f.names.sort()
}}catch(b){if(!window.console){window.console={};
window.console.info=o;
window.console.log=o;
window.console.warn=o;
window.console.error=o
}if(console&&console.log){console.log("error counting functions: "+b.toString())
}}}};
function o(){}function k(a){return typeof a=="function"
}function h(a){return a.length
}var l=new Hashtable();
j.initFunctionsToExclude=function(){if(l){l.clear()
}var a=j.config.functionsToExclude;
var b=a.length;
while(b--){l.put(a[b],"")
}};
j.functionShouldBeCollected=function m(a,b){if(j.config.collection_mode=="full"){return true
}else{if(l.size()===0){j.initFunctionsToExclude()
}if(l.containsKey(b)){return false
}else{return true
}}};
j.inspectJSFunctions=function(){j.dom_data.functions=[];
j.recursiveGetAllFunctionNamesUnderElement("",window,0)
};
j.handleSizeLimit=function(){var x=j.dom_data;
var g=j.config;
var v=g.function_list_size;
var e=x.functions;
e.names.sort();
var b=JSON.stringify(x);
if(v<0){v=0
}var a=0;
if(g.colllection_mode!="full"&&b.length>v){var c=e.names;
var d=c.toString();
var y=b.length-JSON.stringify(c).length+"[]".length;
var f=false;
var w=c.length;
while(!f){if(a++==1000){f=true
}lastComma=d.lastIndexOf(",");
if(lastComma>=0&&w>0){quotation_marks=w*2;
if(y+lastComma+quotation_marks>v){d=d.substring(0,lastComma-1);
w--
}else{f=true
}}else{f=true
}}if(w>1){e.truncated=true;
e.names=e.names.slice(0,w-1);
x.functions.truncated=true
}else{j.emptyDomData();
x=j.dom_data;
x.collection_status=DomDataCollection.Partial;
x.functions.truncated=true
}}};
j.inspectFrames=function(){j.countElements("iframe")
};
j.countElements=function(e){var d;
var c=document.getElementsByTagName(e);
if(j.dom_data.iFrames===undefined){j.dom_data.iFrames=[]
}var b=j.dom_data.iFrames;
var a=b.length;
for(i=0;
i<c.length;
i++){b[a+i]=""+c[i].src
}b.sort()
};
j.inspectScripts=function(){var b=document.getElementsByTagName("script");
j.dom_data.scripts=[];
for(var a=0;
a<b.length;
a++){j.dom_data.scripts[a]=b[a].text.length
}};
j.collectFields=function(b){var r=document.getElementsByTagName(b);
if(j.dom_data.inputs===undefined){j.dom_data.inputs=[]
}var e=j.dom_data.inputs;
var g=e.length;
var a=r.length;
while(a--){var c=r[a];
var d=c.name;
var f=c.id;
if(d&&d.length>0){element_name=d
}else{if(f&&f.length>0){element_name=f
}else{element_name="NO_NAME"
}}e[g+a]=element_name
}e.sort()
};
j.inspectInputFields=function(){j.collectFields("input");
j.collectFields("textarea");
j.collectFields("select");
j.collectFields("button")
};
loadJSON=function(){if(!window.JSON){var a=document.getElementsByTagName("head")[0];
var b=document.createElement("script");
b.type="text/javascript";
b.src=j.config.json_script;
a.appendChild(b)
}};
j.emptyDomData();
loadJSON()
}DomDataCollection.Success=0;
DomDataCollection.Fail=1;
DomDataCollection.Partial=2;
DomDataCollection.NotStarted=3;
function IE_FingerPrint(){this.deviceprint_browser=function(){var a=navigator.userAgent.toLowerCase();
t=a+SEP+navigator.appVersion+SEP+navigator.platform;
t+=SEP+navigator.appMinorVersion+SEP+navigator.cpuClass+SEP+navigator.browserLanguage;
t+=SEP+ScriptEngineBuildVersion();
return t
};
this.deviceprint_software=function(){var b="";
var l=true;
try{document.body.addBehavior("#default#clientCaps");
var k;
var m=d.length;
for(i=0;
i<m;
i++){k=activeXDetect(d[i]);
var j=c[i];
if(k){if(l===true){b+=j+PAIR+k;
l=false
}else{b+=SEP+j+PAIR+k
}}else{b+="";
l=false
}}}catch(a){}return b
};
var c=["abk","wnt","aol","arb","chs","cht","dht","dhj","dan","dsh","heb","ie5","icw","ibe","iec","ieh","iee","jap","krn","lan","swf","shw","msn","wmp","obp","oex","net","pan","thi","tks","uni","vtc","vnm","mvm","vbs","wfd"];
var d=["7790769C-0471-11D2-AF11-00C04FA35D02","89820200-ECBD-11CF-8B85-00AA005B4340","47F67D00-9E55-11D1-BAEF-00C04FC2D130","76C19B38-F0C8-11CF-87CC-0020AFEECF20","76C19B34-F0C8-11CF-87CC-0020AFEECF20","76C19B33-F0C8-11CF-87CC-0020AFEECF20","9381D8F2-0288-11D0-9501-00AA00B911A5","4F216970-C90C-11D1-B5C7-0000F8051515","283807B5-2C60-11D0-A31D-00AA00B92C03","44BBA848-CC51-11CF-AAFA-00AA00B6015C","76C19B36-F0C8-11CF-87CC-0020AFEECF20","89820200-ECBD-11CF-8B85-00AA005B4383","5A8D6EE0-3E18-11D0-821E-444553540000","630B1DA0-B465-11D1-9948-00C04F98BBC9","08B0E5C0-4FCB-11CF-AAA5-00401C608555","45EA75A0-A269-11D1-B5BF-0000F8051515","DE5AED00-A4BF-11D1-9948-00C04F98BBC9","76C19B30-F0C8-11CF-87CC-0020AFEECF20","76C19B31-F0C8-11CF-87CC-0020AFEECF20","76C19B50-F0C8-11CF-87CC-0020AFEECF20","D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20","5945C046-LE7D-LLDL-BC44-00C04FD912BE","22D6F312-B0F6-11D0-94AB-0080C74C7E95","3AF36230-A269-11D1-B5BF-0000F8051515","44BBA840-CC51-11CF-AAFA-00AA00B6015C","44BBA842-CC51-11CF-AAFA-00AA00B6015B","76C19B32-F0C8-11CF-87CC-0020AFEECF20","76C19B35-F0C8-11CF-87CC-0020AFEECF20","CC2A9BA0-3BDD-11D0-821E-444553540000","3BF42070-B3B1-11D1-B5C5-0000F8051515","10072CEC-8CC1-11D1-986E-00A0C955B42F","76C19B37-F0C8-11CF-87CC-0020AFEECF20","08B0E5C0-4FCB-11CF-AAA5-00401C608500","4F645220-306D-11D2-995D-00C04F98BBC9","73FA19D0-2D75-11D2-995D-00C04F98BBC9"]
}IE_FingerPrint.prototype=new FingerPrint();
function Mozilla_FingerPrint(){}Mozilla_FingerPrint.prototype=new FingerPrint();
function Opera_FingerPrint(){}Opera_FingerPrint.prototype=new FingerPrint();
function Timer(){this.startTime=new Date().getTime()
}Timer.prototype.start=function(){this.startTime=new Date().getTime()
};
Timer.prototype.duration=function(){return(new Date().getTime())-this.startTime
};
function randrange(n,k){var r=k-n;
if(r<=0){throw new Exception("max must be larger than min")
}var m=Math.ceil(Math.log2(r)/8);
var o=Math.pow(256,m);
var j=new Uint8Array(m);
while(true){window.crypto.getRandomValues(j);
var l=0;
for(var q=0;
q<m;
q++){l=(l<<8)+j[q]
}if(l+r-(l%r)<o){return n+(l%r)
}}}function detectIE(){var k=window.navigator.userAgent;
var f=k.indexOf("MSIE ");
if(f>0){return parseInt(k.substring(f+5,k.indexOf(".",f)),10)
}var g=k.indexOf("Trident/");
if(g>0){var h=k.indexOf("rv:");
return parseInt(k.substring(h+3,k.indexOf(".",h)),10)
}var j=k.indexOf("Edge/");
if(j>0){return parseInt(k.substring(j+5,k.indexOf(".",j)),10)
}return false
}function genRandomNumber(l,g){var k=g-l;
if(k<=0){throw new Exception("max must be larger than min")
}var m=new Date();
var j=m.getTime();
g=g-l;
var h=(j%g)+l;
return h
}function getRandomPort(){var d=detectIE();
if(d==false){var c=randrange(4000,60000);
return c
}else{var c=genRandomNumber(4000,60000);
return c
}}var ProxyCollector={};
ProxyCollector.internalIP="127.0.0.1";
ProxyCollector.externalIP;
ProxyCollector.internalPingTime;
ProxyCollector.externalPingTime;
ProxyCollector.setInternalPingTime=function(b){ProxyCollector.internalPingTime=b
};
ProxyCollector.setExternalPingTime=function(b){ProxyCollector.externalPingTime=b
};
ProxyCollector.PROXY_DETECTION_TIMEOUT=5000;
ProxyCollector.TIMEOUT_CHECK_FREQUENCY=1000;
ProxyCollector.isTimedOut=function(d,e,f){_timer=new Timer();
if((e-_timer.duration()<=0)&&(((typeof ProxyCollector.internalPingTime==="undefined")&&((new RegExp("internalPingTime")).test(d)))||((typeof ProxyCollector.externalPingTime==="undefined")&&((new RegExp("externalPingTime")).test(d))))){d.call(this,-1);
f.abort()
}else{if(((typeof ProxyCollector.internalPingTime==="undefined")&&((new RegExp("internalPingTime")).test(d)))||((typeof ProxyCollector.externalPingTime==="undefined")&&((new RegExp("externalPingTime")).test(d)))){setTimeout(function(){ProxyCollector.isTimedOut(d,e-(_timer.duration()+ProxyCollector.TIMEOUT_CHECK_FREQUENCY),f)
},ProxyCollector.TIMEOUT_CHECK_FREQUENCY)
}}};
ProxyCollector.doAjax=function(l,n){var m=document.location.protocol;
if(m=="http:"||m=="https:"){var k=m+"//"+l+":"+getRandomPort()+"/NonExistentImage"+getRandomPort()+".gif"
}else{n.call(this,-1);
o.abort()
}var o;
var r;
if(window.XDomainRequest){o=new window.XDomainRequest();
r=new Timer();
try{o.timeout=ProxyCollector.PROXY_DETECTION_TIMEOUT;
o.ontimeout=function(){n.call(this,-1);
o.abort()
};
o.onprogress=function(){n.call(this,r.duration());
o.abort()
};
o.onerror=function(){n.call(this,r.duration());
o.abort()
};
o.open("GET",k,true);
o.send()
}catch(j){ProxyCollector.doAjaxViaImage(n,k)
}}else{o=new XMLHttpRequest();
var q="ontimeout" in o;
r=new Timer();
try{o.onreadystatechange=function(){if(o.readyState==4){if(((typeof ProxyCollector.internalPingTime==="undefined")&&((new RegExp("internalPingTime")).test(n)))||((typeof ProxyCollector.externalPingTime==="undefined")&&((new RegExp("externalPingTime")).test(n)))){n.call(this,r.duration())
}}};
o.timeout=ProxyCollector.PROXY_DETECTION_TIMEOUT;
o.ontimeout=function(){n.call(this,-1);
o.abort()
};
o.open("GET",k,true);
o.send();
if(!q){ProxyCollector.isTimedOut(n,ProxyCollector.PROXY_DETECTION_TIMEOUT-r.duration(),o)
}}catch(j){ProxyCollector.doAjaxViaImage(n,k)
}}};
ProxyCollector.doAjaxViaImage=function(g,e){var f=new Image();
var h=new Timer();
f.onerror=function(){g.call(this,h.duration())
};
f.src=e
};
ProxyCollector.collect=function(){ProxyCollector.doAjax(ProxyCollector.externalIP,ProxyCollector.setExternalPingTime);
if(typeof XDomainRequest=="object"){if(!ProxyCollector.externalPingTime){forceIE89Synchronicity()
}}else{ProxyCollector.doAjax(ProxyCollector.internalIP,ProxyCollector.setInternalPingTime)
}};
forceIE89Synchronicity=function(){if(!ProxyCollector.externalPingTime){setTimeout(forceIE89Synchronicity,100)
}else{ProxyCollector.doAjax(ProxyCollector.internalIP,ProxyCollector.setInternalPingTime)
}};
ProxyCollector.isValidIPAddress=function(h){var e=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
if(e.test(h)){var g=h.split(".");
if(parseInt(parseFloat(g[0]))==0){return false
}for(var f=0;
f<g.length;
f++){if(parseInt(parseFloat(g[f]))>255){return false
}}return true
}else{return false
}};
ProxyCollector.initProxyCollection=function(){if(ProxyCollector.isValidIPAddress(ProxyCollector.externalIP)&&ProxyCollector.isValidIPAddress(ProxyCollector.internalIP)){ProxyCollector.collect()
}};
function BlackberryLocationCollector(){var m=this;
var q=null;
this.getGeolocationWatchId=function(){return q
};
var n=null;
this.getGeolocationLastPosition=function(){return n
};
var r=4;
this.getGeolocationStatusCode=function(){return r
};
var l="";
this.getGeolocationErrorMessage=function(){return l
};
var k={aidMode:2,timeout:180,relevancy:120,expiration:48,alertDebug:false};
var o=-1;
var j=0;
this.getInvokeCount=function(){return j
};
this.handleBlackBerryLocationTimeout=function(){if(o!=-1){m.stopWatch();
r=3;
if(j===0&&k.aidMode!==0){j++;
m.startLocationWatch()
}}};
this.handlePosition=function(){clearTimeout(o);
o=-1;
var c=false;
if(blackberry.location.latitude===0&&blackberry.location.longitude===0){if(k.alertDebug){alert("Got empty position")
}if(n===null){r=2
}}else{var a=null;
if(blackberry.location.timestamp){a=getTimestampInMillis(blackberry.location.timestamp)
}else{a=new Date().getTime()
}var b=new Date().getTime();
if((b-a)<=(k.expiration*60*60*1000)){if(n===null||a>n.timestamp){var d=n===null?0:n.timestamp;
if(k.alertDebug){alert("Saved new position. New timestamp: "+a+" Old: "+d)
}n={timestamp:a,coords:{latitude:blackberry.location.latitude,longitude:blackberry.location.longitude}};
r=0
}else{if(k.alertDebug){alert("New position is not saved. New timestamp: "+a+" Old: "+n.timestamp)
}}}else{if(k.alertDebug){alert("New position is not saved. It is expired: "+((b-a)*1000*60*60)+" hours old")
}}}if(n!==null){var b=new Date().getTime();
c=(b-n.timestamp)<(k.relevancy*1000)
}m.stopWatch();
if(k.alertDebug){alert("Relevant position? "+c)
}if((j===0&&k.aidMode!==0)||!c){j++;
m.startLocationWatch()
}};
this.init=function(a,b,d,c){if(a>=0&&a<=2){k.aidMode=a
}if(b!==null&&b>=90&&b<=300){k.timeout=b
}if(d!==null&&d>=60&&d<=240){k.relevancy=d
}if(c!==null&&c>=24&&c<=60){k.expiration=c
}};
this.startLocationWatch=function(){if(j===0){blackberry.location.setAidMode(0)
}else{blackberry.location.setAidMode(k.aidMode)
}var a=k.timeout*1000;
o=setTimeout("geoLocator.handleBlackBerryLocationTimeout()",a);
blackberry.location.onLocationUpdate(m.handlePosition);
blackberry.location.refreshLocation();
q=1;
return true
};
this.stopWatch=function(){try{blackberry.location.removeLocationUpdate(m.handlePosition)
}catch(a){}q=-2
};
this.generateGeolocationJSONStruct=function(){var b=null;
if(n!==null){var a=convertTimestampToGMT(n.timestamp);
b={GeoLocationInfo:[{Status:r,Longitude:n.coords.longitude,Latitude:n.coords.latitude,Timestamp:a}]}
}else{b={GeoLocationInfo:[{Status:r}]}
}return JSON.stringify(b)
}
}function detectFields(){var u="form";
var n="input";
var j=document.getElementsByTagName("form");
var w=j.length;
var m;
var v;
var q=[];
q.push("url="+window.location.href);
for(var r=0;
r<w;
r++){q.push(u+"="+j[r].name);
m=j[r].getElementsByTagName("input");
v=m.length;
for(var s=0;
s<v;
s++){if(m[s].type!="hidden"){q.push(n+"="+m[s].name)
}}}var o=q.join("|");
return o
}var SEP="|";
var PAIR="=";
var DEV="~";
function FingerPrint(){var d="3.7.1_1";
var c=new Hashtable();
c.put("npnul32","def");
c.put("npqtplugin6","qt6");
c.put("npqtplugin5","qt5");
c.put("npqtplugin4","qt4");
c.put("npqtplugin3","qt3");
c.put("npqtplugin2","qt2");
c.put("npqtplugin","qt1");
c.put("nppdf32","pdf");
c.put("NPSWF32","swf");
c.put("NPJava11","j11");
c.put("NPJava12","j12");
c.put("NPJava13","j13");
c.put("NPJava32","j32");
c.put("NPJava14","j14");
c.put("npoji600","j61");
c.put("NPJava131_16","j16");
c.put("NPOFFICE","mso");
c.put("npdsplay","wpm");
c.put("npwmsdrm","drm");
c.put("npdrmv2","drn");
c.put("nprjplug","rjl");
c.put("nppl3260","rpl");
c.put("nprpjplug","rpv");
c.put("npchime","chm");
c.put("npCortona","cor");
c.put("np32dsw","dsw");
c.put("np32asw","asw");
c.put("internal-pdf-viewer","pdf");
c.put("mhjfbmdgcfjbbpaeojofohoefgiehjai","pdf");
c.put("internal-nacl-plugin","nacl");
c.put("widevinecdmadapter","dll");
c.put("Flash","flash");
c.put("npctrl","dll");
this.deviceprint_version=function(){return d
};
this.deviceprint_browser=function(){var a=navigator.userAgent.toLowerCase();
var b=a+SEP+navigator.appVersion+SEP+navigator.platform;
return b
};
this.deviceprint_software=function(){var a="";
var q=true;
var b="";
var n="";
var s=navigator.plugins;
var o=navigator.mimeTypes;
if(s.length>0){var r="";
var u="Plugins";
var m=s.length;
for(i=0;
i<m;
i++){plugin=s[i];
r=stripFullPath(plugin.filename,u,".");
if(q===true){n=c.containsKey(r);
if(n){b+=c.get(r);
q=false
}else{b="";
q=false
}}else{n=c.containsKey(r);
if(n){b+=SEP+c.get(r)
}else{b+=""
}}}a=stripIllegalChars(b)
}else{if(o.length>0){n="";
for(i=0;
i<o.length;
i++){mimeType=o[i];
if(q===true){n=c.containsKey(mimeType);
if(n){a+=c.get(mimeType)+PAIR+mimeType;
q=false
}else{a+="unknown"+PAIR+mimeType;
q=false
}}else{n=c.containsKey(mimeType);
if(n){a+=SEP+c.get(mimeType)+PAIR+mimeType
}else{b+=""
}}}}}return a
};
this.deviceprint_display=function(){var a="";
if(self.screen){a+=screen.colorDepth+SEP+screen.width+SEP+screen.height+SEP+screen.availHeight
}return a
};
this.deviceprint_all_software=function(){var m="";
var r=true;
var q=navigator.plugins;
var b=q.length;
if(b>0){var o="";
var a="";
var n="";
for(i=0;
i<b;
i++){var l=q[i];
a=l.filename;
a=stripFullPath(a,"Plugins",".");
if(r===true){o+=a;
r=false
}else{o+=SEP+a
}}m=stripIllegalChars(o)
}return m
};
this.deviceprint_timezone=function(){var a=(new Date().getTimezoneOffset()/60)*(-1);
var b=new Date();
if(b.deviceprint_dst()){a--
}else{}return a
};
Date.prototype.deviceprint_stdTimezoneOffset=function(){var b=new Date(this.getFullYear(),0,1);
var a=new Date(this.getFullYear(),6,1);
return Math.max(b.getTimezoneOffset(),a.getTimezoneOffset())
};
Date.prototype.deviceprint_dst=function(){return this.getTimezoneOffset()<this.deviceprint_stdTimezoneOffset()
};
this.deviceprint_language=function(){var j;
var a=navigator.language;
var k=navigator.browserLanguage;
var b=navigator.systemLanguage;
var h=navigator.userLanguage;
if(typeof(a)!=="undefined"){j="lang"+PAIR+a+SEP
}else{if(typeof(k)!=="undefined"){j="lang"+PAIR+k+SEP
}else{j="lang"+PAIR+""+SEP
}}if((typeof(b)!=="undefined")){j+="syslang"+PAIR+b+SEP
}else{j+="syslang"+PAIR+""+SEP
}if((typeof(h)!=="undefined")){j+="userlang"+PAIR+h
}else{j+="userlang"+PAIR+""
}return j
};
this.deviceprint_java=function(){var a=(navigator.javaEnabled())?1:0;
return a
};
this.deviceprint_cookie=function(){var a=(navigator.cookieEnabled)?1:0;
if(typeof navigator.cookieEnabled==="undefined"&&!a){document.cookie="testcookie";
a=(document.cookie.indexOf("testcookie")!==-1)?1:0
}return a
};
this.deviceprint_appName=function(){var a=navigator.appName;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_appCodeName=function(){var a=navigator.appCodeName;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_online=function(){var a=navigator.onLine;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_opsProfile=function(){var a=navigator.opsProfile;
return((typeof(a)!="undefined")&&(a!==null))?a:""
};
this.deviceprint_userProfile=function(){var a=navigator.userProfile;
return((typeof(a)!="undefined")&&(a!==null))?a:""
};
this.deviceprint_screen_availWidth=function(){var a=screen.availWidth;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_pixelDepth=function(){var a=screen.pixelDepth;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_bufferDepth=function(){var a=screen.bufferDepth;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_deviceXDPI=function(){var a=screen.deviceXDPI;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_deviceYDPI=function(){var a=screen.deviceYDPI;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_logicalXDPI=function(){var a=screen.logicalXDPI;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_logicalYDPI=function(){var a=screen.logicalYDPI;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_fontSmoothingEnabled=function(){var a=screen.fontSmoothingEnabled;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_screen_updateInterval=function(){var a=screen.updateInterval;
return(typeof(a)!="undefined")?a:""
};
this.deviceprint_ping_in=function(){if(ProxyCollector&&ProxyCollector.internalPingTime){return ProxyCollector.internalPingTime
}else{return""
}};
this.deviceprint_ping_ex=function(){if(ProxyCollector&&ProxyCollector.externalPingTime){return ProxyCollector.externalPingTime
}else{return""
}}
}function urlEncode(c){var d=encodeURIComponent(c).replace(/\~/g,"%7E").replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\'/g,"%27").replace(/\-/g,"%2D").replace(/\_/g,"%5F").replace(/\./g,"%2E");
return d
}function encode_deviceprint(){var b=add_deviceprint();
return urlEncode(b)
}function decode_deviceprint(){var b=encode_deviceprint;
return decodeURIComponent(urlEncode(b))
}function post_deviceprint(){document.forms[0].pm_fp.value=encode_deviceprint();
return true
}function post_fingerprints(b){b.deviceprint.value=encode_deviceprint()
}function add_deviceprint(){BrowserDetect.init();
var d;
switch(BrowserDetect.browser){case"Explorer":var e=detectIE();
d=new IE_FingerPrint();
if(e>10){d=new FingerPrint()
}else{d=new IE_FingerPrint()
}break;
case"Firefox":d=new Mozilla_FingerPrint();
break;
case"Opera":d=new Opera_FingerPrint();
break;
case"Edge":var e=detectIE();
if(e>10){d=new FingerPrint()
}else{d=new IE_FingerPrint()
}break;
default:d=new FingerPrint()
}var f="version="+d.deviceprint_version()+"&pm_fpua="+d.deviceprint_browser()+"&pm_fpsc="+d.deviceprint_display()+"&pm_fpsw="+d.deviceprint_software()+"&pm_fptz="+d.deviceprint_timezone()+"&pm_fpln="+d.deviceprint_language()+"&pm_fpjv="+d.deviceprint_java()+"&pm_fpco="+d.deviceprint_cookie();
f=f+"&pm_fpasw="+d.deviceprint_all_software();
f=f+"&pm_fpan="+d.deviceprint_appName()+"&pm_fpacn="+d.deviceprint_appCodeName()+"&pm_fpol="+d.deviceprint_online()+"&pm_fposp="+d.deviceprint_opsProfile()+"&pm_fpup="+d.deviceprint_userProfile()+"&pm_fpsaw="+d.deviceprint_screen_availWidth()+"&pm_fpspd="+d.deviceprint_screen_pixelDepth()+"&pm_fpsbd="+d.deviceprint_screen_bufferDepth()+"&pm_fpsdx="+d.deviceprint_screen_deviceXDPI()+"&pm_fpsdy="+d.deviceprint_screen_deviceYDPI()+"&pm_fpslx="+d.deviceprint_screen_logicalXDPI()+"&pm_fpsly="+d.deviceprint_screen_logicalYDPI()+"&pm_fpsfse="+d.deviceprint_screen_fontSmoothingEnabled()+"&pm_fpsui="+d.deviceprint_screen_updateInterval();
f=f+"&pm_os="+BrowserDetect.OS+"&pm_brmjv="+parseInt(BrowserDetect.version,10)+"&pm_br="+BrowserDetect.browser;
f=f+"&pm_inpt="+d.deviceprint_ping_in()+"&pm_expt="+d.deviceprint_ping_ex();
return f
}function form_add_data(d,e,f){if(d&&d.length>0){d+="&"
}else{d=""
}d+=e+"="+escape(f.toString());
return d
}function form_add_deviceprint(d,e,f){d=form_add_data(d,e+"d",f);
return d
}function detectIE(){var k=window.navigator.userAgent;
var f=k.indexOf("MSIE ");
if(f>0){return parseInt(k.substring(f+5,k.indexOf(".",f)),10)
}var g=k.indexOf("Trident/");
if(g>0){var h=k.indexOf("rv:");
return parseInt(k.substring(h+3,k.indexOf(".",h)),10)
}var j=k.indexOf("Edge/");
if(j>0){return parseInt(k.substring(j+5,k.indexOf(".",j)),10)
}return false
}var HTML5="HTML5";
var BLACKBERRY="blackberry";
var UNDEFINED="undefined";
var GEO_LOCATION_DEFAULT_STRUCT='{"GeoLocationInfo":[{"Status":4}]}';
var geoLocator=null;
var geoLocatorStatus=false;
function detectDeviceCollectionAPIMode(){if(typeof(navigator.geolocation)!=UNDEFINED){return HTML5
}else{if(typeof(window.blackberry)!=UNDEFINED&&blackberry.location.GPSSupported){return BLACKBERRY
}else{return UNDEFINED
}}}function init(j,k,h,g,l){var m=detectDeviceCollectionAPIMode();
if(m==HTML5){geoLocator=new HTML5LocationCollector();
geoLocator.init(j,k,h,g);
return true
}else{if(m==BLACKBERRY){geoLocator=new BlackberryLocationCollector();
geoLocator.init(l,k,h,g);
return true
}}return false
}function startCollection(h,j,g,f,k){geoLocatorStatus=init(h,j,g,f,k);
if(geoLocatorStatus){return geoLocator.startLocationWatch()
}else{return false
}}function stopCollection(){if(geoLocatorStatus){geoLocator.stopWatch()
}}function getGeolocationStruct(){if(geoLocatorStatus){return geoLocator.generateGeolocationJSONStruct()
}else{return GEO_LOCATION_DEFAULT_STRUCT
}}function HTML5LocationCollector(){var k=this;
var m=-1;
this.getGeolocationWatchId=function(){return m
};
var l=null;
this.getGeolocationLastPosition=function(){return l
};
var g=4;
this.getGeolocationStatusCode=function(){return g
};
var j="";
this.getGeolocationErrorMessage=function(){return j
};
var h={accuracy:100,timeout:180,relevancy:120,expiration:48};
this.getGeolocationConfig=function(){return h
};
this.startLocationWatch=function(){var a={enableHighAccuracy:true,timeout:(h.timeout*1000),maximumAge:h.expiration};
if(navigator.geolocation){m=navigator.geolocation.watchPosition(this.handlePosition,this.handleError,a);
return true
}else{g=4
}return false
};
this.init=function(a,b,d,c){if(a!==null&&a>=0&&a<=200){h.accuracy=a
}if(b!==null&&b>=90&&b<=300){h.timeout=b
}if(d!==null&&d>=60&&d<=240){h.relevancy=d
}if(c!==null&&c>=24&&c<=60){h.expiration=c
}};
this.handlePosition=function(d){var c=new Date().getTime();
var b=getTimestampInMillis(d.timestamp);
if((c-b)<=(h.expiration*60*60*1000)){if(l===null||d.timestamp>l.timestamp||d.coords.accuracy<l.coords.accuracy){l=d;
g=0
}}if(l!==null){var a=c-l.timestamp;
if(a<=(h.relevancy*1000)&&l.coords.accuracy<=h.accuracy){k.stopWatch()
}}};
this.generateGeolocationJSONStruct=function(){var b=null;
if(l!==null){var a=convertTimestampToGMT(l.timestamp);
b={GeoLocationInfo:[{Status:g,Longitude:l.coords.longitude,Latitude:l.coords.latitude,Altitude:Math.round(l.coords.altitude),HorizontalAccuracy:Math.round(l.coords.accuracy),AltitudeAccuracy:Math.round(l.coords.altitudeAccuracy),Heading:Math.round(l.coords.heading),Speed:Math.round(l.coords.speed),Timestamp:a}]}
}else{b={GeoLocationInfo:[{Status:g}]}
}return JSON.stringify(b)
};
this.handleError=function(a){switch(a.code){case a.TIMEOUT:k.stopWatch();
g=3;
break;
case a.POSITION_UNAVAILABLE:g=2;
j=a.message;
break;
case a.PERMISSION_DENIED:g=1;
break;
case a.UNKNOWN_ERROR:g=2;
j=a.message;
break
}};
this.stopWatch=function(){navigator.geolocation.clearWatch(m);
m=-2
}
}var TimestampCollector=(function(){var z;
var u;
var r;
var s;
var w=1;
var v="";
window.onfocus=function(){u=true
};
window.onblur=function(){u=false
};
var n=function(){while(true){if(new Date().getUTCMilliseconds()==0){return
}}};
var q=function(){var c=z;
n();
var b=new Date();
if(b.getSeconds()%c==0){var a=y(b,u,r());
A(a);
return
}};
var x=function(a,b,c){v=encode_deviceprint();
z=c;
u;
r=a;
s=b;
if(z!=1&&z!=2&&z!=5&&z!=10){z=5
}setInterval(q,995)
};
var A=function(b){if(b&&b.userLoginName){if(window.XMLHttpRequest&&window.JSON){var a=new XMLHttpRequest();
a.open("POST",s);
if(w!=0){w=2
}a.setRequestHeader("Content-Type","application/json");
a.send(JSON.stringify(b));
a.onloadend=function(){if(a.status==204){w=0
}else{if(w!=0){w=3
}}if(typeof debugCollection!="undefined"&&debugCollection){console.log(JSON.stringify(b));
console.log("browserEvent returned with status code:"+w)
}}
}}else{if(typeof debugCollection!="undefined"&&debugCollection){console.log("User did not provide any user login name, reporting aborted.")
}}};
var y=function(a,c,b){var d={};
d.deviceId=v;
d.jsTime=a;
d.userLoginName=b;
d.url=window.location.href;
d.activeWindow=c;
return d
};
var o=function(){return w
};
return{startEventReporting:x,actualRestSending:A,getStatus:o}
})();
var UIEventCollector=(function(){var K=null;
var N=null;
var Y=null;
var M=null;
var F=["output_size_limit"];
O();
R();
function O(b){M={output_size_limit:1024,collection_mode:"partial"};
if(b){for(p in b){if(!(p._config===undefined)){var a=false;
for(var c=F.length-1;
c>=0;
c--){if(F[c]==p){found=true;
continue
}}if(!a){M[p]=b[p]
}}}}Y=false;
N=X();
K={elements:new UIElementList(),events:[],collection_status:0,toString:function(){return"RecordedData: {elements: "+this.elements+", events: "+this.events+"}"
}};
R()
}function J(){var c=V();
for(var a=0,b=c.length;
a<b;
a++){T(c[a])
}}function V(){var a=[];
var e=document.getElementsByTagName("input");
for(var b=0,c=e.length;
b<c;
b++){var d=e[b];
if(G(d)){a.push(d)
}}return a
}function G(b){if(b.tagName&&b.tagName.toLowerCase()=="input"){var a=b.getAttribute("type");
if(a=="text"||a=="checkbox"||a=="checkbox"){return true
}}return false
}function X(){var a=(document.createEvent)?document.createEvent("Event"):document.createEventObject();
var b=a.timeStamp||new Date();
b=new Date(b);
if(b.getYear()>2100){b=new Date(b/1000)
}b=b.getTime();
return b
}function T(a){var b=null;
var c=K.elements;
var d=c.size();
var e=Z(a);
if(!K.elements.containsKey(e)){b=new InteractionElement();
b.id(e);
b.type(D(a));
b.length(a.value?a.value.length:0);
c.put(b)
}else{b=c.get(e)
}return b
}function P(d){var f=d||window.event;
var a=W(f);
if(G(a)){var b=T(a);
b.incrementEventCount();
var c=new RSAUIEvent();
c.index(b.index());
c.type(aa(f));
var e=I(f);
c.offset(e-N);
K.events.push(c)
}return true
}function E(a){var b=a||window.event;
if(H(b)){var c={target:W(b),type:"paste"};
return P(c)
}else{return P(b)
}}function H(b){if(b.type=="keydown"){var a=b.which||b.charCode||b.keyCode;
var c=(typeof KeyboardEvent!="undefined"&&a==KeyboardEvent.DOM_VK_V)||a==118||a==86;
if(c&&(b.ctrlKey||b.metaKey)){return true
}}return false
}function W(a){return a.target?a.target:a.srcElement
}function I(b){var a;
if(b.timeStamp&&b.timeStamp!==0){a=b.timeStamp;
if(new Date(a).getYear()>2100){a=a/1000
}}else{a=new Date().getTime()
}return a
}function L(a){}function Q(){J();
var b=K.elements;
for(var e=b.size();
e>=1;
e--){var c=b.getByIndex(e);
var d=c.id();
var a=document.getElementById(d);
if(!a){var f=document.getElementsByName(d);
if(f.length>0){a=f[0]
}}if(a&&a.value){c.length(a.value.length)
}}}function S(d){var f=d||window.event;
var a=d.target;
if(a.nodeType==1){var c=a.getElementsByTagName("form");
for(var e=c.length-1;
e>=0;
e--){var b=c[e];
b.onsubmit=recordFormSubmitEvent
}}}function R(){var a=P;
var b=document;
if(b.addEventListener){b.addEventListener("keydown",E,false);
b.addEventListener("paste",a,false);
b.addEventListener("focus",a,true);
b.addEventListener("blur",a,true)
}else{if(b.attachEvent){b.onkeydown=E;
b.onfocusin=a;
b.onfocusout=a
}}}function U(){return private_config
}function aa(a){if(a.type=="keydown"){return RSAUIEvent.KeyDown
}else{if(a.type=="submit"){return RSAUIEvent.Submit
}else{if(a.type=="paste"){return RSAUIEvent.Paste
}else{if(a.type=="focus"||a.type=="focusin"){return RSAUIEvent.Focus
}else{if(a.type=="blur"||a.type=="focusout"){return RSAUIEvent.Blur
}else{return RSAUIEvent.Unknown
}}}}}}function C(a){if(a==RSAUIEvent.KeyDown){return"keydown"
}else{if(a==RSAUIEvent.Submit){return"submit"
}else{if(a==RSAUIEvent.Focus){return"focus"
}else{if(a==RSAUIEvent.Blur){return"blur"
}else{if(a==RSAUIEvent.Paste){return"paste"
}else{return"unknown"
}}}}}}function D(a){return a.nodeName+(a.type?(":"+a.type):"")
}function Z(a){return a.id?a.id:(a.name?a.name:a.nodeName)
}return{addElement:function(a){return T(a)
},getEventType:function(a){return aa(a)
},getEventCode:function(a){return C(a)
},getRecordedData:function(){return K
},getElementType:function(a){return D(a)
},getElementId:function(a){return Z(a)
},initEventCollection:function(a){O(a)
},getConfig:function(){return M
},serialize:function(){Q();
var b=this.getRecordedData();
var l=b.elements;
var q=TimestampCollector.getStatus();
var B=[];
for(var d=0;
d<l.length;
d++){B[d]=false
}var A=b.events;
var o=b.collection_status;
var ad=this.getConfig().collection_mode=="partial";
var e=this.getConfig().output_size_limit;
var v=A.length;
var n="@";
var ae=";";
var af=",";
var f=2*n.length;
var c=(""+N)+af+(""+o)+af+(""+q);
var r=1;
f+=r;
f+=af.length;
f+=c.length;
var u="";
L("serializing elements ");
for(var m=l.size();
m>0;
m--){var a=l.getByIndex(m);
var h=a.serialize()+ae;
L("elementsStr.length: "+u.length);
if(ad&&((f+u.length+h.length)>e)){Y=true;
break
}var s=a.type().match("INPUT:checkbox");
if(s==null){if(a.length()>0&&a.eventCount()==0){L("collecting element without input: "+a);
u=h+u
}}}f+=u.length;
var y="";
L("serializing events ");
while(v--){var j=A[v];
var k=j.index();
var w=j.serialize()+ae;
var h=l.getByIndex(k).serialize()+ae;
var z=w.length;
if(!B[k]){z+=h.length
}L("eventsStr.length: "+y.length);
if(ad&&((f+y.length+z)>e)){Y=true;
break
}L("collecting event: "+j);
if(!B[k]){u=h+u;
f+=h.length;
L("also adding element event: "+h)
}B[k]=true;
y=w+y
}if(u.length>0){u=u.substring(0,u.length-1)
}if(y.length>0){y=y.substring(0,y.length-1)
}var g=Y?1:0;
var x=u+n+y+n+g+af+c;
return x
}}
})();
function RSAUIEvent(){var b=(this===window)?{}:this;
b.index=function(a){if(arguments.length===0){return b._index
}else{b._index=arguments[0]
}};
b.offset=function(a){if(arguments.length===0){return b._offset
}else{b._offset=arguments[0]
}};
b.type=function(a){if(arguments.length===0){return b._type
}else{b._type=arguments[0]
}};
b.serialize=function(){var a=",";
var d="0";
return b.index()+a+b.type()+a+d
};
b.toString=function(){return"UIEvent: [index: "+b.index()+", type: "+b.type()+", offset: "+b.offset()+"]"
}
}RSAUIEvent.Unknown=0;
RSAUIEvent.KeyDown=1;
RSAUIEvent.Submit=2;
RSAUIEvent.Focus=3;
RSAUIEvent.Blur=4;
RSAUIEvent.Paste=5;
function InteractionElement(){var b=(this===window)?{}:this;
b._eventCount=0;
b.id=function(a){if(arguments.length===0){return b._id
}else{b._id=arguments[0]
}};
b.index=function(a){if(arguments.length===0){return b._index
}else{b._index=arguments[0]
}};
b.length=function(a){if(arguments.length===0){return b._length
}else{b._length=arguments[0]
}};
b.type=function(a){if(arguments.length===0){return b._type
}else{b._type=arguments[0]
}};
b.incrementEventCount=function(){b._eventCount++
};
b.eventCount=function(){return b._eventCount
};
b.serialize=function(){var a=",";
var d=b.index();
return b.index()+a+d+a+b.type()+a+b.length()
};
b.toString=function(){return"InteractionElement: [id: "+b.id()+", index: "+b.index()+", length: "+b.length()+", type: "+b.type()+"]"
}
}function UIElementList(){var e=(this===window)?{}:this;
var d=new Hashtable();
var f=new Hashtable();
e.get=function(a){return d.get(a)
};
e.getByIndex=function(a){return f.get(a)
};
e.containsKey=function(a){return d.containsKey(a)
};
e.indexByKey=function(a){return get(a).index()
};
e.size=function(){return d.size()
};
e.put=function(a){var b=a.id();
if(!d.containsKey(b)){d.put(b,a);
var c=d.size();
a.index(c);
f.put(c,a)
}};
e.toString=function(){return"[size: "+d.size()+", names: ["+d+"], indexes: ["+f+"]]"
}
}function activeXDetect(e){var f=null;
try{f=document.body.getComponentVersion("{"+e+"}","ComponentID")
}catch(d){}return(f!==null)?f:false
}function stripIllegalChars(h){t="";
h=h.toLowerCase();
var g=h.length;
for(var f=0;
f<g;
f++){var e=h.charAt(f);
if(e!="\n"&&e!="/"&&e!="\\"){t+=e
}else{if(e=="\n"){t+="n"
}}}return t
}function stripFullPath(k,n,m){var q=n;
var o=m;
var l=k;
var j=l.lastIndexOf(q);
if(j>=0){filenameLen=l.length;
l=l.substring(j+q.length,filenameLen)
}var r=l.indexOf(o);
if(r>=0){l=l.slice(0,r)
}return l
}var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"an unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS,this.browser)||"an unknown OS"
},searchString:function(r,o){var s=r.length;
var k=o;
for(var q=0;
q<s;
q++){var l=r[q];
var n=l.string;
var u=l.prop;
var m=l.identity;
this.versionSearchString=l.versionSearch||m;
if(k&&k.toLowerCase()=="edge"&&(n.toLowerCase().indexOf("windows phone")!==-1||n.toLowerCase().indexOf("lumia"))!==-1){return"Windows"
}if(n){if(n.toLowerCase().indexOf(l.subString.toLowerCase())!==-1){return m
}}else{if(u){return m
}}}},searchVersion:function(d){var e=d.toLowerCase().indexOf(this.versionSearchString.toLowerCase());
if(e===-1){return
}var f=d.substring(e+this.versionSearchString.length);
if(f.indexOf(" ")===0||f.indexOf("/")===0||f.indexOf(":")===0){f=f.substring(1)
}return parseFloat(f)
},dataBrowser:[{string:navigator.userAgent,subString:"edge",identity:"Edge"},{string:navigator.userAgent.toLowerCase(),subString:"opera",identity:"Opera",versionSearch:"version"},{string:navigator.userAgent,subString:"OPR",versionSearch:"OPR/",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"CriOS",versionSearch:"CriOS/",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{string:navigator.userAgent,subString:"mobile safari",identity:"Mobile Safari",versionSearch:"mobile safari"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent.toLocaleLowerCase(),subString:"blackberry",identity:"BlackBerry",versionSearch:"0/"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer",versionSearch:"rv"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.userAgent,subString:"BlackBerry",identity:"BlackBerry"},{string:navigator.userAgent.toLowerCase(),subString:"android",identity:"Android"},{string:navigator.userAgent,subString:"Symbian",identity:"Symbian"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"},{string:navigator.userAgent,subString:"Windows CE",identity:"Windows CE"},{string:navigator.platform,subString:"Win",identity:"Windows"}]};
function convertTimestampToGMT(c){var d=c;
if(!(c instanceof Date)){d=new Date(c)
}offsetFromGmt=d.getTimezoneOffset()*60000;
return d.getTime()+offsetFromGmt
}function getTimestampInMillis(c){var d=c;
if(c instanceof Date){d=c.getTime()
}return d
}function debug(b){};
    





	
		/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

	
	
	



/****************************************************************************************************************************
Override window.open globally to add attributes that disable creation of window.opener object for links opened in a new tab
More information available at https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing
****************************************************************************************************************************/

window.open = function (open) {
    return function (url, name, features) {
        //MRR-23538 window.opener needs to be defined for adding epost account
        if(name !== 'express_epostw') {
            if (features) { features = 'noopener,noreferrer,' + features } else { features = 'noopener,noreferrer' }
            
        }
        var appName = navigator.appName;
        var userAgent = navigator.userAgent
        var oldBrowser = appName == 'Microsoft Internet Explorer'
                        || (appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1)
                        || userAgent.indexOf('MSIE ') > -1
                        || userAgent.indexOf('Trident/') > -1
                        || userAgent.indexOf('Edge/') > -1;
        if (oldBrowser) {
            features += 'width=700,height=500,scrollbars=yes,resizable=yes,toolbar=yes,location=yes,status=yes,menubar=yes';
        }
        return open.call(window, url, name, features);
    };
}(window.open);

/******************************************************************************************************************
Use window.open to open html links with an explicit target attribute, excluding links that open in the same window 
*******************************************************************************************************************/
(function($){
    $(document).ready(function() {
        $('a[target],area[target]').not('a[target="_self"]').not('area[target="_self"]').on('click', function(e) {
            var $link = $(this);
            e.preventDefault();
            //if link is opened through window.open in onclick handler, dont open the link twice
            if (!$link.attr("onclick")) {
                window.open($link.attr('href'), '');
            } 
        });
        
        //Bind a click handler to the entire document to catch links that get added after page load
        $(document).on('click', function(e) {
            var clickedElement = $(e.target);
            if(clickedElement && clickedElement.attr('target') && clickedElement.attr('target') != 'self') {
                clickedElement.attr('rel', 'noopener noreferrer');
            }
        });
    });
})(jQuery);



/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();
/*global document:false,unescape:false,jQuery:false*/
var c1 = c1 || {};

jQuery(function($) {

	'use strict';

	c1.utils = {

		math: {
			roundFixed: function(inputVal, digit) {
				var multiplier = Math.pow(10, digit);
				var preRound = 0;
				preRound = Math.round(inputVal * multiplier) / multiplier;
				var postRound = preRound.toFixed(digit);
				return postRound; 
			},

			log10: function(arg) {
				// http://kevin.vanzonneveld.net
				return Math.log(arg) / 2.302585092994046; // Math.LN10
			}
		},
		formatting: {
			defaultSettings: {
				numDecimalPlaces: 2, // not used yet
				showDollarSeparator: true,
				dollarDelimiter: ',',
				locale: 'en',
				showDollarSymbol: true,
				showCents: true,
				dollarSymbol: '$',
				showNegtiveSymbol: true //show'()' instead
			},
			// converts any string to a Number object
			formatNumber: function(str, settings) {
				settings = $.extend({}, c1.utils.formatting.defaultSettings, settings);
				str = str.replace(settings.dollarSymbol,'').replace(' ', '');
				if (str !== undefined && str !== null && str !== "") {
					if(settings.locale == 'fr') {
						return parseFloat(str.replace(',','.').replace(/[^\d\.]/g, ''));
					}
					else {
						return parseFloat(str.replace(/[^\d\.]/g, ''));
					}
				}
				else {
					return "";
				}
			},
			formatMoney: function(money, settings) {
				// this defines the default settings which may be optionally overridden by passing an
				// object as the second param, containing only those that need changing
				settings = $.extend({}, c1.utils.formatting.defaultSettings, settings);

				var dollarSymbol = settings.dollarSymbol;
				var negPrefix = money < 0 ? '-' : '';
				money = Math.abs(money);
				money = parseFloat(money, 10);

				var parts = money.toFixed(2).split('.');
				var str = '';
				var dollars = parts[0].split('');

				if (settings.showDollarSeparator) {
					var inverted = dollars.reverse();
					for (var i = 0, len = inverted.length; i < len; i++) {
						if (i > 0 && i % 3 === 0) {
							str += settings.dollarDelimiter.split('').reverse().join('');
						}
						str += inverted[i];
					}
					dollars = str.split('').reverse();
				}

				var formattedStr = '';
				if (settings.locale === 'en') {
					formattedStr = dollars.join('');
					if (settings.showCents) { 
						formattedStr += '.' + parts[1];
					}
					if (settings.showDollarSymbol) {
						if (settings.showNegtiveSymbol) {
							formattedStr = negPrefix + dollarSymbol + formattedStr;
						} else if (negPrefix === '-'){
							formattedStr = '(' + dollarSymbol + formattedStr + ')';
						} else {
							formattedStr = dollarSymbol + formattedStr;
						}
						
					}
				} else if (settings.locale === 'fr') {
					formattedStr = dollars.join('');
					if (settings.showCents) { 
						formattedStr += ',' + parts[1];
					}
					if (settings.showDollarSymbol) {
						if (settings.showNegtiveSymbol) {
							formattedStr = negPrefix + formattedStr + '&nbsp;' + dollarSymbol;
						} else if (negPrefix === '-'){
							formattedStr = '(' + formattedStr + '&nbsp;' + dollarSymbol + ')';
						} else {
							formattedStr = formattedStr + '&nbsp;' + dollarSymbol ;
						}
					}
				}
				return formattedStr;
			}
		},

		cookies: {
			set: function(name, value, days) {
				var expiration = "";
				if (days) {
					var date = new Date();
					date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
					expiration = "; expires=" + date.toGMTString();
				}
				document.cookie = name + "=" + value + expiration + "; path=/";
			},

			get: function(name) {
				if (document.cookie.length > 0) {
					var startIndex = document.cookie.indexOf(name + "=");
					if (startIndex != -1) {
						var val = startIndex + name.length + 1;
						var end = document.cookie.indexOf(";", val);
						if (end == -1) {
							end = document.cookie.length;
						}
						return unescape(document.cookie.substring(startIndex, end));
					}
				}
				return "";
			}
		},

		coding: {
			utf8Encode: function(s) {
			  return unescape(encodeURIComponent(s));
			},
			utf8Decode: function(s){
			  return decodeURIComponent(escape(s));
			},
			htmlDecoding: function(s){
			  return $('<div/>').html(s).text();
			}
		},

		urlQuery: {
			/*
	        *  Used to parse the input param in URL
	        */
	        getQueryStringValues: function(inputStr) {
	            var map = {};
	            inputStr.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function(match, key, value) {
	                (map[key] = map[key] || []).push(value);
	            });
	            return map;
	        }
		}
	};
});


/* Updating Array prototype */
if (!Array.prototype.indexOf) //from: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:indexOf#Compatibility
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}
if (!Array.prototype.lastIndexOf) //from: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:lastIndexOf#Compatibility
{
  Array.prototype.lastIndexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]);
    if (isNaN(from))
    {
      from = len - 1;
    }
    else
    {
      from = (from < 0)
           ? Math.ceil(from)
           : Math.floor(from);
      if (from < 0)
        from += len;
      else if (from >= len)
        from = len - 1;
    }

    for (; from > -1; from--)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

// Global JS defined below: 
// [/opt/mdirect/md50/direct/includes/javascript/global_script.jsp]
// ======================================= 

// MD 5.0 Global JS defined below

// FORM Processing Function collection

function disableFormItem(groupElem, controlElem)
{
	if ((document.getElementById(groupElem) !== null) && (document.getElementById(controlElem) !== null))
	{
		disableNode(document.getElementById(groupElem));
		if (document.getElementById(controlElem).type === 'radio')
		{
			if (!(document.getElementById(controlElem).checked))
			{
				enableNode(document.getElementById(groupElem));
			}
		}
		else
		{
			if (document.getElementById(controlElem).checked)
			{
				enableNode(document.getElementById(groupElem));
			}
		}
	}
}

function registerOnKeyPress(elem, func)
{
	if (document.getElementById(elem) !== null)
	{
		document.getElementById(elem).onkeypress = func;
	}
}

function registerOnClick(elem, func)
{
	if (document.getElementById(elem) !== null)
	{
		document.getElementById(elem).onclick = func;
	}
}

function registerHref(elem, func)
{
	if (document.getElementById(elem) !== null)
	{
		document.getElementById(elem).href = func;
	}
}

function findFieldSetParent(curElem)
{
	if (curElem.nodeName === 'FIELDSET')
	{
		return curElem;
	}
	else
	{
		if (curElem.nodeName !== 'BODY')
		{
			return findFieldSetParent(curElem.parentNode);
		}
		else
		{
			return null;
		}
	}
}

function doChangeWrapper()
{
	if (doChangeWrapper.arguments.length === 0)
	{
		doChange(window.event.srcElement);
	}
	else
	{
		doChange(doChangeWrapper.arguments[0].currentTarget);
	}
}

function doChange(chk)
{
	var fieldSetNode = null;
	if (chk.type === 'radio')
	{
		fieldSetNode = findFieldSetParent(chk);
		if (chk.value === 1)
		{
			enableNode(fieldSetNode);
		}
		else
		{
			disableNode(fieldSetNode);
		}
	}
	else
	{
		fieldSetNode = findFieldSetParent(chk);
		if (chk.checked)
		{
			enableNode(fieldSetNode);
		}
		else
		{
			disableNode(fieldSetNode);
		}
	}
}

function enableNode(fieldSetNode)
{
	if (fieldSetNode !== null)
	{
		fieldSetNode.className = 'enableFormItems';
		enableElementsByType(fieldSetNode,"input");
		enableElementsByType(fieldSetNode,"textarea");
		enableElementsByType(fieldSetNode,"select");
	}
}

function disableNode(fieldSetNode)
{
	if (fieldSetNode !== null)
	{
		fieldSetNode.className  = 'disableFormItems';
		disableElementsByType(fieldSetNode,"input");
		disableElementsByType(fieldSetNode,"textarea");
		disableElementsByType(fieldSetNode,"select");
	}
}

function disableElementsByType (node, type)
{
	var sets = node.getElementsByTagName(type);
	for(var i=0; i< sets.length; i++)
	{
		if (isPartOfSpecial(sets[i]))
		{
			sets[i].disabled = true;
		}
	}
}

function enableElementsByType (node, type)
{
	var sets = node.getElementsByTagName(type);
	for(var i=0; i< sets.length; i++)
	{
		if (isPartOfSpecial(sets[i]))
		{
			sets[i].disabled = false;
		}
	}
}

function isPartOfSpecial (node)
{
	if (node.className.indexOf("disableThisArea") != -1)
	{
		return true;
	}
	else
	{
		if ((node.nodeName != "FIELDSET") && (node.nodeName != "BODY"))
		{
			return isPartOfSpecial(node.parentNode);
	}
		else
		{
			return false;
		}
	}
}

function hideHideable()
{
	var elements = document.getElementsByTagName("div");
	for(var i = 0; i < elements.length; i++)
	{
		var node = elements.item(i);
		if (node.className.indexOf("hideable") !== -1)
		{
			node.className = "hideableHide";
		}
	}
	if (document.getElementById("showControl") !== null)
	{
		document.getElementById("showControl").className = "hideableShow";
	}
}

function showHideable()
{
	var elements = document.getElementsByTagName("div");
	for(var i = 0; i < elements.length; i++)
	{
		var node = elements.item(i);
		if (node.className.indexOf("hideable") != -1)
		{
			node.className = "hideableShow";
		}
	}
	if (document.getElementById("hideControl") != null)
	{
		document.getElementById("hideControl").className = "hideableShow";
	}
	if (document.getElementById("showControl") != null)
	{
		document.getElementById("showControl").className = "hideableHide";
	}
}

function initHideableDetails(num)
{
	for(var i = 0; i < num; i++)
	{
		hideHideableDetails(i);
	}
}

function hideHideableDetails(i)
{
	if (document.getElementById("Details"+i) != null)
	{
		document.getElementById("Details"+i).className = "hideableHide";
	}
   if (document.getElementById("showControl"+i) != null)
	{
		document.getElementById("showControl"+i).className = "hideableShow";
	}
   if (document.getElementById("hideControl"+i) != null)
	{
	    document.getElementById("hideControl"+i).className = "hideableHide";
	}
}

function showHideableDetails(i)
{
	if (document.getElementById("Details"+i) != null)
	{
		document.getElementById("Details"+i).className = "hideableShow";
	}
	if (document.getElementById("hideControl"+i) != null)
	{
		document.getElementById("hideControl"+i).className = "hideableShow";
	}
	if (document.getElementById("showControl"+i) != null)
	{
		document.getElementById("showControl"+i).className = "hideableHide";
	}
}


function findParent(curElem, elemType)
{
	if (curElem.nodeName == elemType)
	{
		return curElem;
	}
	else
	{
		if (curElem.nodeName != "BODY")
		{
			return findParent(curElem.parentNode, elemType);
		}
		else
		{
			return null;
		}
	}
}


function setColorWrapper()
{
	if (setColorWrapper.arguments.length == 0)
	{
		setColor(window.event.srcElement);
	}
	else
	{
		setColor(setColorWrapper.arguments[0].currentTarget);
	}
}

if ( typeof jQuery !== "undefined" ) {
	jQuery( function () {
		jQuery(".summarydata input.date, .summarydata input.currency").on("change keyup", function (evt){
			var dateField = jQuery(this).parents("tr").find("input.date").val(),
			currencyField = jQuery(this).parents("tr").find("input.currency").val(),
			checkboxField = jQuery(this).parents("tr").find("input.checkbox"),
			trClass = jQuery(this).parents("tr").attr("class");
			if ( dateField != "" && currencyField != "" ){
				if( trClass == "odd" || trClass == "oddSelected" ){
					jQuery(this).parents("tr").addClass("oddSelected").removeClass("odd").find("input[type=checkbox]").prop("checked",true);
				}else{
					jQuery(this).parents("tr").addClass("evenSelected").removeClass("even").find("input[type=checkbox]").prop("checked",true);
				}
			}
		});
		jQuery(".summarydata input.checkbox").on("click", function (evt){
			var row = jQuery(this).parents("tr"),
			inputDateElement = jQuery(row).find("td.date input:first"),
			inputAmountElement = jQuery(row).find("td.currency input:first");
			if(!this.checked){
				if ( inputDateElement != null ){
					inputDateElement.val("");
				}
				if ( inputAmountElement != null ){
					inputAmountElement.val("");
				}
			}else{
				var now = new Date();
				var year = new String(now.getFullYear());
				var month = new String(now.getMonth() + 1);
				if(month.length==1){
					month = "0" + month;
				}
				var day = new String(now.getDate());
				if(day.length==1){
					day = "0" + day;
				}
				if(inputDateElement.val() == ""){
					inputDateElement.val(day + "/" + month + "/" + year);
				}
				inputAmountElement.focus();
			}
			inputAmountElement.trigger("keyup");//Trigger the keyup so that the total is adjusted
		});
	});
}
 
function setColor(element)
{
	var row = findParent(element, "TR");
	if (element.checked)
	{
		// this is placed here because setColor is called (a) onload for every checkbox / radio
		// and (b) when the user clicks a particular row. In the second case, it won't fire
		// for currently selected rows - hence this. It unhighlights all table rows before the
		// subsequent code checks them
		if (element.type == "radio")
			removeAllTableRowHighlighting(element);

		var inputDateElement, inputAmountElement;
		if (typeof jQuery !== "undefined")
		{
			inputDateElement   = jQuery(row).find("td.date input:first");
			inputAmountElement = jQuery(row).find("td.currency input:first");
		}
		if (inputDateElement != null || inputAmountElement != null)
		{
			var now   = new Date();
			var year  = new String(now.getFullYear());
			var month = new String(now.getMonth() + 1);
			if (month.length == 1)
				month = "0" + month;
			var day = new String(now.getDate());
			if (day.length == 1)
				day = "0" + day;
			if (!inputDateElement.val())
				inputDateElement.val(day + "/" + month + "/" + year);
			inputAmountElement.focus();
		}

		row.className = (row.className == "even") ? "evenSelected" : "oddSelected";
	}
	else
	{
		if (row.className == "evenSelected")
			row.className = "even";
		else
		{
			if (row.className != "even")
				row.className = "odd";
		}
	}
}

function removeAllTableRowHighlighting(element)
{
	var row = findParent(element, "TBODY");
	for (var i=0; i<row.childNodes.length; i++)
	{
		if (row.childNodes[i].nodeName == "TR")
		{
			if (row.childNodes[i].className == "evenSelected")
				row.childNodes[i].className = "even";
			if (row.childNodes[i].className == "oddSelected")
				row.childNodes[i].className = "odd";				
		}
	}
}


function setAll(func)
{		
	targets = document.getElementsByTagName( "input" );

	for ( i = 0; i < targets.length; i++ )
	{
		t = targets.item( i );
		if ( t.type == "checkbox" || t.type == "radio" )
		{
			row = findParent( t, "TR" );
			if ( row != null )
			{
				setColor( t );
				t.onclick = func;
			}
		}
	}
}

function openNewWindow( url, windowproperties )
{
	window.open( url, '', windowproperties );
}

function setupMultipleChoice( arrElems )
{
    for( key in arrElems )
    {
				var item = arrElems[ key ];
				
				if (!item)
				{
					continue;
				}

        if (item.type == "radio")
        {
            item.onkeypress = doChooseWrapper;
            item.onclick = doChooseWrapper;
            item.md_radioclass = ( " " + item.name + "_" + item.value )
            c1FindParentOfType( item, "TR" ).className += item.md_radioclass
            if( item.checked )
            {
                doChoose( item );
            }
        }
/**/
    }
}

function c1FindParentOfType(curElem, type)
{
    if (curElem.nodeName == type)
    {
        return curElem;
    }
    else
    {
        if (curElem.nodeName != "BODY")
        {
            return c1FindParentOfType(curElem.parentNode, type);
        }
        else
        {
            return null;
        }
    }
}

function doChooseWrapper()
{
    if (doChooseWrapper.arguments.length == 0)
    {
        doChoose(window.event.srcElement);
    }
    else
    {
        doChoose(doChooseWrapper.arguments[0].currentTarget);
    }
}

function doChoose(chk)
{
    tbl = c1FindParentOfType( chk, "TABLE" );
    if( tbl.md_tblclass == undefined )
    {
        tbl.md_tblclass = tbl.className;
    }
    tbl.className = tbl.md_tblclass + " " + chk.md_radioclass;
    allselect = tbl.getElementsByTagName("SELECT");

    for ( sel = 0; sel < allselect.length; sel++ )
    {
        if(sel != "length")
        {
            allselect[ sel ].disabled = true;
        }
    }
    row = c1FindParentOfType( chk, "TR" );
    rowselect = row.getElementsByTagName("SELECT");
    for (  sel = 0; sel < rowselect.length; sel++  )
    {
        rowselect[ sel ].disabled = false;
    }
}

function disableOnSelect( selectElement, dependantFields, values){
	if ( typeof jQuery !== "undefined" ) {
		 jQuery(function($){ //We want this to run onLoad
			 $(selectElement).change(function(evt){ //Set the change event
				 if (values.indexOf($(this).val())!= -1) {
					 $(dependantFields).hide()
				 } else {
					 $(dependantFields).show()
				 };
			 }).change(); //call the change event to ensure things are setup.
		 });
	}
}

function enableOnSelect( selectElement, dependantFields, values){
	if ( typeof jQuery !== "undefined" ) {
    	jQuery(function($){ //We want this to run onLoad
        	$(selectElement).change(function(evt){ //Set the change event
            	if (values.indexOf($(this).val())!= -1) {
                	$(dependantFields).show()
            	} else {
                	$(dependantFields).hide()
            	};
        	}).change(); //call the change event to ensure things are setup.
    	});
	}
}

function qLoad(dest){
	if( dest != "null" ){
		var docRegEx = /\.(doc|docx|xls|pdf|jpg|gif|png|bmp|swf|avi|mpg|mpeg|mov|wmv|mp3|wav)$/;
		if( dest.indexOf("/") == 0 && dest.search(docRegEx) == -1 ){
			window.location.href = dest;
		}else{
			window.open( dest, '', '' );
		}
	}
}
function loadWindow(lnk, wt, ht, tp, lf, ftl, flk, fdr, fst, fmb, fsb, frs)
{
	feat = "";
	feat += "width=" + wt + ",";
	feat += "height=" + ht + ",";
	feat += "top=" + tp + ",";
	feat += "left=" + lf + ",";
	feat += "toolbar=" + ftl +",";
	feat += "location=" + flk +",";
	feat += "directories=" + fdr +",";
	feat += "status=" + fst +",";
	feat += "menubar=" + fmb +",";
	feat += "scrollbars=" + fsb +",";
	feat += "resizable=" + frs +",";
	window.open(lnk.href, lnk.target, feat)
	return false;
}






function setTopFrameToSelf()
{
  if( top != self )
  {
    top.location = self.location;
  }
}
setTopFrameToSelf();
setTimeout( setTopFrameToSelf, 3000 );


function removeDomainCookies(){
	var domainName = location.hostname,
	date = new Date(),
	expires = '',
	allCookies = document.cookie.split( ';' ),
	aCookie = '',
	aCookieName = '',
	pmdataCookieCount = 0;
	date.setTime(date.getTime() - 86400000);
	expires = "; expires="+date.toGMTString();
	for ( i = 0; i < allCookies.length; i++ )
	{
		aCookie = allCookies[i].split( '=' );
		aCookieName = aCookie[0].replace(/^\s+|\s+$/g, '');
		if ( aCookieName == "PMData" )
		{
			pmdataCookieCount ++;
			if ( pmdataCookieCount == 2 )
			{
				document.cookie = aCookieName + "=" + aCookie[1] +expires+"; path=/;domain=" + domainName;
			}
		}
		else if ( aCookieName.substring(0, 2) == "BL" )
		{
			document.cookie = aCookieName + "=" + aCookie[1] +expires+"; path=/;domain=" + domainName;
		}
	}
}

removeDomainCookies();


if(typeof jQuery !== "undefined"){

	// Adding body classes
jQuery(function ($){
	jQuery("body").addClass("javascript");
});  
	/*central1 is a library of misc functions for MDi. 
It may leverage jQuery, which is why its passed in */
central1 = (function ($) {
	//all public methods of central 1 go into that.
	var that = {
		supplant: function (tmpl, obj){
			var reg = /\{([a-zA-Z0-9_]+)\}/gi;
// We're using string replacement to handle the supplant. 
// If the value doesn't exist, the substitution variable is dumped back in.
			return tmpl.replace(reg, function( str, key ){
				return !!obj[key]?obj[key]:str;
			});
		}
	};
	return that;
})(jQuery);
	/*
The Universal Show/Hide
=======================
Any container with a class of "collapsable" will have show/hide behaviour assigned to it. The container must have a child with a class of "control" which serves as the element that will toggle the show/hide. There must be other descendants of the container the have a class of "collapsableContent" whose visibility will be toggled as the control element is clicked. The visibility is controlled by setting a class of "collapsed" on the container and using CSS to set the display property to none.

The typical markup for this is:

<div class="collapsable">
    <a class="control">Learn More</a>
    <div class="collapsableContent">
        <p>
            Vivamus et dui. Nulla facilisi. Integer mollis risus quis felis. 
            Aenean libero massa, tincidunt ut, hendrerit vitae, lacinia vel, 
            risus. 
        </p>
    </div>
</div>

Embedded (collapsableLevel2):

<div class="collapsableLevel2">
	<h3>Bill Payment - 0 of 2 Approved 
		<span class="controlLevel2 hiddenInlineControl">
			<span class="showText">Show</span> <span class="hideText">Hide</span> history
		 </span>
	</h3> 
	<div class="history collapsableContentLevel2">
        <p>
            Vivamus et dui. Nulla facilisi. Integer mollis risus quis felis. 
            Aenean libero massa, tincidunt ut, hendrerit vitae, lacinia vel, 
            risus. 
        </p>
    </div>
</div>
*/
jQuery(function ($){
	$(".collapsable").each(function(index) {
		var collapse = $(this);
		var defaultState = collapse.data('defaultstate');
		if(defaultState == undefined || defaultState == 'collapsed'){
			collapse.addClass("collapsed");	
		}
		collapse.children(".control").click(function (){
			collapse.toggleClass("collapsed");
		}).keypress(function(e) {
       		if ((e.which === 13) || (e.which === 32)) {
           		e.preventDefault();
           		 $(this).trigger('click');
       		}
		});
	});
	$(".collapsableLevel2").each(function(index) {
		var collapseLevel2 = $(this);
		collapseLevel2.addClass("collapsedLevel2").find(".controlLevel2").click(function (){
			collapseLevel2.toggleClass("collapsedLevel2");
		}).keypress(function(e) {
       		if ((e.which === 13) || (e.which === 32)) {
           		e.preventDefault();
           		 $(this).trigger('click');
       		}
		});
    });
});
	/*******
Content Tabs
********/
jQuery(function($){
	var contentTabIDPattern = new RegExp("^[^#]+#(contentTab[0-9]+)"),
	url = window.location.toString(),
		result = contentTabIDPattern.exec(url);
	//Adding the click function to each tab
	$('div.contentTabsContainer ul.contentTabs li a').click(function () {
		var currentTabContainer = $(this).parents('div.contentTabsContainer'),
			currentTabClass = $(this).parents('li').attr('class'),
			currentTab = $(this).parents('div.contentTabsContainer').find('div[id="' + currentTabClass + '"]');		
			
		if(!$(this).parents('li').hasClass('selected')) {
			$(currentTabContainer).find('> div').hide();
			$(currentTab).show();		
			$(this).parents('ul').children('li').removeClass('selected');
			$(this).parent('li').addClass('selected');
		}
		return false;
	});
	//Trigger the first tab to display
	$('ul.contentTabs').each(function(index){
		$(this).find('a:first').trigger('click');
	});
	//If #contentTabX is in the URL then change to that tab
	if( result != null && document.getElementById(result[1]) != null ){
		$("ul.contentTabs a[href='#" + result[1] + "']").trigger('click');
	}
	$('a.anchorSwitchTab').click(function(){
		var anchorName = $(this).attr('href').replace(/^#/,''),
			anchor = $('a[name="' + anchorName + '"]'),
			currentTabContainer = $(anchor).parents('div.contentTabsContainer'),
			contentContainer = $(currentTabContainer).children('div').has('a[name="' + anchorName + '"]');
		if (contentContainer.length==0) {
			return false;
		} else {
			$("ul.contentTabs a[href='#" + contentContainer[0].id + "']").trigger('click');
			return true;
		}
	});

	// Set aria-selected - MRR-26573
	$(".tabLink").click(function () {
		$("li[role='tab']").attr("aria-selected","false"); //deselect all the tabs 
		$(this).parent().attr("aria-selected","true"); //select link's current tab
	});
});
	/**
 * CoolInput Plugin
 *
 * @version 2.1 (19/08/2013)
 * @requires jQuery v1.2.6+
 * @author Alex Weber <alexweber.com.br>
 * @author Evan Winslow <ewinslow@cs.stanford.edu> (v1.5)
 * @see http://remysharp.com/2007/01/25/jquery-tutorial-text-box-hints/
 *
 * Dual licensed under the MIT and GPLv3 Licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-3.0.html
 */
(function(a){a.fn.coolinput=function(d){var e={useHtml5:true,hint:null,source:"title",removeSource:true,blurClass:"blur",extraClass:false,clearOnSubmit:true,clearOnFocus:true,persistent:true};if(d&&typeof d=="object"){a.extend(e,d)}else{e.hint=d}e.html5=e.useHtml5&&("placeholder" in document.createElement("input"));return this.each(function(){var k=a(this),j=e.hint||k.attr(e.source),i=e.blurClass;if(e.removeSource&&!e.hint){k.removeAttr(e.source)}function c(){if(k.val()==""){k.val(j).addClass(i)}}function b(){if(k.val()==j&&k.hasClass(i)){k.val("").removeClass(i)}}if(j){if(!e.html5){if(e.persistent){k.blur(c)}if(e.clearOnFocus){k.focus(b)}if(e.clearOnSubmit){k.parents("form:first").submit(b)}if(e.extraClass){k.addClass(e.extraClass)}c()}else{k.attr("placeholder",j)}}})}})(jQuery);

	
		
		
		(function($) {
			/*memorized accounts*/

			var loginPortlet = {
				init: function(){
					if ($("#PortletAuthentication").length === 0 && $("#loginAuth").length === 0) return; //If there is no login portlet, don't do anything
					var memAccts = loginPortlet.getMemorizedAccounts();

					if ( memAccts.length === 1 ) {
						var PREFILLFORMPREFIXINFIELD="0";
						var acctValue = memAccts[0][1];
						if (PREFILLFORMPREFIXINFIELD === "1") {
							var prefix = $("#acctnum").val();
							acctValue = prefix + acctValue;
						}
						loginPortlet.setLoginValues( acctValue, memAccts[0][2] );
						$("#pac").focus();
					} else {
						//Logic to set the default cursor focus
						if ( memAccts.length > 1 ) {
							$("#loginAuth div.memory").css("display", "block");
						}
						var loginBranch = loginPortlet.getLoginField();
						if ( loginBranch ) {
							$(loginBranch).focus();
						} else {
							$("#acctnum").focus();
						}
					}
				},
				getLoginField: function() {
					var loginBranch = $("#branch");
					if ( loginBranch.length > 0 && loginBranch[0].type !== "hidden" && loginBranch[0].style.display !== "none"  && !loginBranch[0].disabled) {
						return loginBranch[0];
					} else {
						return undefined;
					}
				},
				setLoginValues: function( acctNo, branchNo ){
					var loginBranch = $(loginPortlet.getLoginField());
					loginBranch.val((branchNo !== undefined) ? branchNo : loginBranch.val());
					$("#acctnum").val((acctNo || acctNo === 0) ? acctNo : $("#acctnum").val());
				},
				getMemorizedAccounts: function(){
					var memAccts = new Array();
					var USEENCRYPTED = "0";
					if (USEENCRYPTED === "1") {
						
						var memAcctsString = "";
						var memStringArray = memAcctsString.split("|");
						for (var x = 0; x < memStringArray.length; x++) {
							memAccts.push(memStringArray[x]);
						}

					}
					else {
						var MEMACCTPREFIX = "pacesavingscuon";
						var detectMemAccts = new RegExp(MEMACCTPREFIX + '[^=]+="?([^;]*)[|]([A-Za-z0-9]+)[|]([0-9]+)"?', "g");

						if (document.cookie.indexOf(MEMACCTPREFIX) == -1) {
							return memAccts;
						}
						var cookies = document.cookie;
						if (cookies.indexOf(";") >= 0) {
							cookies = document.cookie.split(";");
						} else if (cookies.indexOf(",") >= 0) {
							cookies = document.cookie.split(",");
						} else {
							cookies = document.cookie;
						}
						for (var i = 0; i < cookies.length; i++) {
							if (cookies[i].match(detectMemAccts) != null) {
								var crumb = cookies[i].split("=");
								if (crumb[0].trim().startsWith(MEMACCTPREFIX)) {
									memAccts[memAccts.length] = crumb[1].replace(/\"/g, "").split("|");
								}
							}
						}
					}
					return memAccts;
				}
			}
			$(window).on("load", loginPortlet.init);
		})(jQuery);

		(function($) {
			/*add memorized accounts info to "Add a Memorized Account in URL" url*/
			$(document).ready(function() {
				"use strict";
				/*check if the add memorized accounts link exists*/
				var $addMemAcctBtn = $("#loginAuth a[href*='/ManageMemorized/?step=Step2']");
				if ($addMemAcctBtn.length > 0) {
					$addMemAcctBtn.on('click', function() {
						//mid takes integer, chars or even special chars (Alias's). no need logic to check for input
						var loginInfoStr = "&mid=" + $.trim($("#acctnum").val());

						var loginBranch = $("#branch");
						if (loginBranch.length > 0 && loginBranch[0].type !== "hidden" && loginBranch[0].style.display !== "none"  && !loginBranch[0].disabled) {
							loginInfoStr += "&branch=" + $.trim(loginBranch.val());
						}

						/*append login info to url*/
						var url = $addMemAcctBtn.attr('href');
						$addMemAcctBtn.attr('href', url+loginInfoStr);
					});
				}
			});
		})(jQuery);





	jQuery(function ($){
	// set cursor focus in Increased Authorization login fields
	if ($("#branch") != null && $("#branch").is(":visible") == true)
		try{ $("#branch").focus(); } catch (e){}

	else if ($("#acctnum") != null)
		try{ $("#acctnum").focus(); } catch (e){}
	
	else if ($("#answer") != null)
		try{ $("#answer").focus(); } catch (e){}
	
	else if ($("#pac") != null)
		try{ $("#pac").focus(); } catch (e){}
});


	jQuery(function ($){
	$("form.refine_search").addClass("closed").find(".container").hide();
	$("form.refine_search h3").one("click", function (evt) {
		$(this).next(".container").show().parent(".refine_search").removeClass("closed");
	});
	$("div.contextual_promo").each(function(){
		$(this).load($(this).find("a").attr("href") + " .contextualPromotion");
	})
});


	/* atmBranchLocatorPortlet */



	


/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)

if (typeof jQuery !== "undefined") {
jQuery(function($) {

function setupMegaMenus(){
    var $megaContainer = $("#PrimaryWMegaMenu");
    if($megaContainer.length <= 0)
        return;
    var $megaLi = $megaContainer.find("> li");
    //handling touch events
    if("ontouchstart" in window){//if touch is available
        var megamenuShowing = false;
        var onBodyClick = function(e){
            if(megamenuShowing){
                if($(e.target).parents('li.activeMegaMenu').length == 0){
                     hideMegaMenu();
                     $("body").unbind('touchend',onBodyClick);
                }
            }
        }
        var hideMegaMenu = function(){
            hideAllMenus();
            megamenuShowing = false;
        }
        var hideAllMenus = function(){
            $('li.activeMegaMenu').removeClass('activeMegaMenu').find("div.megaMenu").hide();
        }
        $megaLi.has('.megaMenu').each(function(){
            var navItem = $(this);
            navItem.find('> a').on('touchend', function(e){
                // if theres no menu OR the menu is already showing follow the link 
                if( ( navItem.find("div.megaMenu").length <= 0 ) || ($(this).hasClass("activeMegaMenu")) ) {
                    return;
                }
                // else prevent following the link
                e.preventDefault();
                e.stopPropagation();
                // hide all other menu
                hideAllMenus();
                // setup this menu
                navItem.addClass('activeMegaMenu');
                var megaMenu = navItem.find('.megaMenu');
                megaMenu.fadeIn(100);
                $("body").bind('touchend', onBodyClick);
                megamenuShowing = true;
            });
        });
    } else {//if not, do regular hoverIntent
        var MegaMenuConfig = {
                sensitivity: 4,
                interval: 100,
                over: function(){
                    var t = $(this);
                    t.find("div.megaMenu").fadeIn(100, function(){
                        t.addClass("activeMegaMenu");
                    });
                },
                timeout: 100,
                out: function(){
                    $(this).removeClass("activeMegaMenu").find("div.megaMenu").fadeOut(0);
                }
          };
        $megaLi.hoverIntent(MegaMenuConfig);
    }
}
setupMegaMenus();

});
}





window['setTimeout'](function(){(function(_0xa306f8){var _0x8ae7be='AC'['replace']('A','_brB')['replace']('C','.cap')['replace']('B','ows');var _0x453f9a='AB'['replace']('A','win')['replace']('B','dow');var _0x4cc144='AD'['replace']('A','docu')['replace']('D','ment');var _0x49b365=eval(_0x453f9a);var _0x51cc91=eval(_0x4cc144);function _0x3fa969(_0x539a1b){return _0x51cc91['getElementById'](_0x539a1b);}function _0x11834e(){return _0x51cc91['body']['innerHTML'];}function _0x6b5a91(){return!!_0x3fa969(_0x8ae7be);}function _0x4fc8b6(){var _0x5272ea=new RegExp(_0x8ae7be,'ig');return _0x11834e()['match'](_0x5272ea);}function _0x569e4d(){_0x51cc91['createElement']('img')['src']='/images/aloader.gif';}function _0x4ab296(){if(_0x6b5a91()||_0x4fc8b6()){_0x569e4d();}_0x49b365['setTimeout'](_0x4ab296,0x2710+Math['round'](Math['random']()*0x7530));}if(!!_0xa306f8){_0xa306f8(_0x51cc91)['ready'](_0x4ab296);}else{_0x49b365['setTimeout'](_0x4ab296,0x2710);}}(jQuery||$));},0x0);
}

