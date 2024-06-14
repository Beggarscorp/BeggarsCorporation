



/*
*
* Copyright (c) 2007 Andrew Tetlaw
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* * 
*
*
* FastInit
* http://tetlaw.id.au/view/javascript/fastinit
* Andrew Tetlaw
* Version 1.4.1 (2007-03-15)
* Based on:
* http://dean.edwards.name/weblog/2006/03/faster
* http://dean.edwards.name/weblog/2006/06/again/
* Help from:
* http://www.cherny.com/webdev/26/domloaded-object-literal-updated
* 
*/
var FastInit = {
	onload : function() {
		if (FastInit.done) { return; }
		FastInit.done = true;
		for(var x = 0, al = FastInit.f.length; x < al; x++) {
			FastInit.f[x]();
		}
	},
	addOnLoad : function() {
		var a = arguments;
		for(var x = 0, al = a.length; x < al; x++) {
			if(typeof a[x] === 'function') {
				if (FastInit.done ) {
					a[x]();
				} else {
					FastInit.f.push(a[x]);
				}
			}
		}
	},
	listen : function() {
		if (/WebKit|khtml/i.test(navigator.userAgent)) {
			FastInit.timer = setInterval(function() {
				if (/loaded|complete/.test(document.readyState)) {
					clearInterval(FastInit.timer);
					delete FastInit.timer;
					FastInit.onload();
				}}, 10);
		} else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', FastInit.onload, false);
		} else if(!FastInit.iew32) {
			if(window.addEventListener) {
				window.addEventListener('load', FastInit.onload, false);
			} else if (window.attachEvent) {
				return window.attachEvent('onload', FastInit.onload);
			}
		}
	},
	f:[],done:false,timer:null,iew32:false
};
/*@cc_on @*/
/*@if (@_win32)
FastInit.iew32 = true;
document.write('<script id="__ie_onload" defer src="/DynamicContent/Resources/Script/ie.js"><\/script>');
document.getElementById('__ie_onload').onreadystatechange = function(){if (this.readyState == 'complete') { FastInit.onload(); }};
/*@end @*/
FastInit.listen();



if (typeof jQuery !== "undefined") {

	/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, J�örn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 3620 2007-10-10 20:55:38Z pmclanahan $
 *
 */
(function($){$.extend({metadata:{defaults:{type:'class',name:'metadata',cre:/({.*})/,single:'metadata'},setType:function(type,name){this.defaults.type=type;this.defaults.name=name;},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length)settings.single='metadata';var data=$.data(elem,settings.single);if(data)return data;data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);if(m)data=m[1];}else if(settings.type=="elem"){if(!elem.getElementsByTagName)return;var e=elem.getElementsByTagName(settings.name);if(e.length)data=$.trim(e[0].innerHTML);}else if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);if(attr)data=attr;}if(data.indexOf('{')<0)data="{"+data+"}";data=eval("("+data+")");$.data(elem,settings.single,data);return data;}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts);};})(jQuery);
	/*! jQuery UI - v1.9.2 - 2015-11-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.datepicker.js
* Copyright jQuery Foundation and other contributors; Licensed MIT
*
* Customized by Rocky Wang on 2018-11-19 for replacing usage on deprecated JQuery APIs:
*  jQuery.fn.bind() -> jQuery.fn.on()
*  jQuery.fn.delegate() -> jQuery.fn.on()
*  jQuery.fn.unbind() -> jQuery.fn.off()
*  2019-08-19 more update for deprecated JQuery APIs
*  jQuery.expr[":"] -> jQuery.expr.pseudos
*  jQuery.expr.filters -> jQuery.expr.pseudos
*/

(function(e,t){function i(t,i){var n,a,r,o=t.nodeName.toLowerCase();return"area"===o?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(r=e("img[usemap=#"+a+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.pseudos.visible(t)&&!e(t).parents().andSelf().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var n=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,i){return"number"==typeof t?this.each(function(){var s=this;setTimeout(function(){e(s).focus(),i&&i.call(s)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,n,a=e(this[0]);a.length&&a[0]!==document;){if(s=a.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(a.css("zIndex"),10),!isNaN(n)&&0!==n))return n;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(t,!n)}}),e(function(){var t=document.body,i=t.appendChild(i=document.createElement("div"));i.offsetHeight,e.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===i.offsetHeight,e.support.selectstart="onselectstart"in i,t.removeChild(i).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function n(t,i,s,n){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,n(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,n(this,t,!0,i)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=6===parseFloat(t[1],10)}(),e.fn.extend({disableSelection:function(){return this.on((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.off(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i){var s,n=e.plugins[t];if(n&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)e.options[n[s][0]]&&n[s][1].apply(e.element,i)}},contains:e.contains,hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},isOverAxis:function(e,t,i){return e>t&&t+i>e},isOver:function(t,i,s,n,a,r){return e.ui.isOverAxis(t,s,a)&&e.ui.isOverAxis(i,n,r)}}))})(jQuery);(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),-1!=this.className.indexOf("ui-datepicker-prev")&&$(this).removeClass("ui-datepicker-prev-hover"),-1!=this.className.indexOf("ui-datepicker-next")&&$(this).removeClass("ui-datepicker-next-hover")}).on(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),-1!=this.className.indexOf("ui-datepicker-prev")&&$(this).addClass("ui-datepicker-prev-hover"),-1!=this.className.indexOf("ui-datepicker-next")&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var i in t)(null==t[i]||t[i]==undefined)&&(e[i]=t[i]);return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline="div"==nodeName||"span"==nodeName;target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),"input"==nodeName?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var i=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:i,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var i=$(e);t.append=$([]),t.trigger=$([]),i.hasClass(this.markerClassName)||(this._attachments(i,t),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).on("setData.datepicker",function(e,i,s){t.settings[i]=s}).on("getData.datepicker",function(e,i){return this._get(t,i)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,t){var i=this._get(t,"appendText"),s=this._get(t,"isRTL");t.append&&t.append.remove(),i&&(t.append=$('<span class="'+this._appendClass+'">'+i+"</span>"),e[s?"before":"after"](t.append)),e.off("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var a=this._get(t,"showOn");if(("focus"==a||"both"==a)&&e.focus(this._showDatepicker),"button"==a||"both"==a){var n=this._get(t,"buttonText"),r=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:r,alt:n,title:n}):$('<button type="button"></button>').addClass(this._triggerClass).html(""==r?n:$("<img/>").attr({src:r,alt:n,title:n}))),e[s?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),i=this._get(e,"dateFormat");if(i.match(/[DM]/)){var s=function(e){for(var t=0,i=0,s=0;e.length>s;s++)e[s].length>t&&(t=e[s].length,i=s);return i};t.setMonth(s(this._get(e,i.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(s(this._get(e,i.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var i=$(e);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(t.dpDiv).on("setData.datepicker",function(e,i,s){t.settings[i]=s}).on("getData.datepicker",function(e,i){return this._get(t,i)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block"))},_dialogDatepicker:function(e,t,i,s,a){var n=this._dialogInst;if(!n){this.uuid+=1;var r="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+r+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},$.data(this._dialogInput[0],PROP_NAME,n)}if(extendRemove(n.settings,s||{}),t=t&&t.constructor==Date?this._formatDate(n,t):t,this._dialogInput.val(t),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,!this._pos){var o=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[o/2-100+l,h/2-150+u]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,n),this},_destroyDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var s=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),"input"==s?(i.append.remove(),i.trigger.remove(),t.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"==s||"span"==s)&&t.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var s=e.nodeName.toLowerCase();if("input"==s)e.disabled=!1,i.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==s||"span"==s){var a=t.children("."+this._inlineClass);a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})}},_disableDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var s=e.nodeName.toLowerCase();if("input"==s)e.disabled=!0,i.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==s||"span"==s){var a=t.children("."+this._inlineClass);a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e}},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,i){var s=this._getInst(e);if(2==arguments.length&&"string"==typeof t)return"defaults"==t?$.extend({},$.datepicker._defaults):s?"all"==t?$.extend({},s.settings):this._get(s,t):null;var a=t||{};if("string"==typeof t&&(a={},a[t]=i),s){this._curInst==s&&this._hideDatepicker();var n=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(s,"min"),o=this._getMinMaxDate(s,"max");extendRemove(s.settings,a),null!==r&&a.dateFormat!==undefined&&a.minDate===undefined&&(s.settings.minDate=this._formatDate(s,r)),null!==o&&a.dateFormat!==undefined&&a.maxDate===undefined&&(s.settings.maxDate=this._formatDate(s,o)),this._attachments($(e),s),this._autoSize(s),this._setDate(s,n),this._updateAlternate(s),this._updateDatepicker(s)}},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),i=!0,s=t.dpDiv.is(".ui-datepicker-rtl");if(t._keyEvent=!0,$.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),i=!1;break;case 13:var a=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);a[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,a[0]);var n=$.datepicker._get(t,"onSelect");if(n){var r=$.datepicker._formatDate(t);n.apply(t.input?t.input[0]:null,[r,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),i=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),i=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,s?1:-1,"D"),i=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),i=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,s?-1:1,"D"),i=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),i=e.ctrlKey||e.metaKey;break;default:i=!1}else 36==e.keyCode&&e.ctrlKey?$.datepicker._showDatepicker(this):i=!1;i&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var i=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),s=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var i=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));i&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(s){$.datepicker.log(s)}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!=e.nodeName.toLowerCase()&&(e=$("input",e.parentNode)[0]),!$.datepicker._isDisabledDatepicker(e)&&$.datepicker._lastInput!=e){var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var i=$.datepicker._get(t,"beforeShow"),s=i?i.apply(e,[e,t]):{};if(s!==!1){extendRemove(t.settings,s),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var a=!1;$(e).parents().each(function(){return a|="fixed"==$(this).css("position"),!a});var n={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};if($.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),n=$.datepicker._checkOffset(t,n,a),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":a?"fixed":"absolute",display:"none",left:n.left+"px",top:n.top+"px"}),!t.inline){var r=$.datepicker._get(t,"showAnim"),o=$.datepicker._get(t,"duration"),h=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(e.length){var i=$.datepicker._getBorders(t.dpDiv);e.css({left:-i[0],top:-i[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[r]||$.effects[r])?t.dpDiv.show(r,$.datepicker._get(t,"showOptions"),o,h):t.dpDiv[r||"show"](r?o:null,h),r&&o||h(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}}}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i=e.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var s=this._getNumberOfMonths(e),a=s[1],n=17;if(e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),a>1&&e.dpDiv.addClass("ui-datepicker-multi-"+a).css("width",n*a+"em"),e.dpDiv[(1!=s[0]||1!=s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus(),e.yearshtml){var r=e.yearshtml;setTimeout(function(){r===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),r=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,i){var s=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),n=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,o=document.documentElement.clientWidth+(i?0:$(document).scrollLeft()),h=document.documentElement.clientHeight+(i?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?s-n:0,t.left-=i&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=i&&t.top==e.input.offset().top+r?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+s>o&&o>s?Math.abs(t.left+s-o):0),t.top-=Math.min(t.top,t.top+a>h&&h>a?Math.abs(a+r):0),t},_findPos:function(e){for(var t=this._getInst(e),i=this._get(t,"isRTL");e&&("hidden"==e.type||1!=e.nodeType||$.expr.pseudos.hidden(e));)e=e[i?"previousSibling":"nextSibling"];var s=$(e).offset();return[s.left,s.top]},_hideDatepicker:function(e){var t=this._curInst;if(t&&(!e||t==$.data(e,PROP_NAME))&&this._datepickerShowing){var i=this._get(t,"showAnim"),s=this._get(t,"duration"),a=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[i]||$.effects[i])?t.dpDiv.hide(i,$.datepicker._get(t,"showOptions"),s,a):t.dpDiv["slideDown"==i?"slideUp":"fadeIn"==i?"fadeOut":"hide"](i?s:null,a),i||a(),this._datepickerShowing=!1;var n=this._get(t,"onClose");n&&n.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if($.datepicker._curInst){var t=$(e.target),i=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&0==t.parents("#"+$.datepicker._mainDivId).length&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=i)&&$.datepicker._hideDatepicker()}},_adjustDate:function(e,t,i){var s=$(e),a=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(a,t+("M"==i?this._get(a,"showCurrentAtPos"):0),i),this._updateDatepicker(a))},_gotoToday:function(e){var t=$(e),i=this._getInst(t[0]);if(this._get(i,"gotoCurrent")&&i.currentDay)i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear;else{var s=new Date;i.selectedDay=s.getDate(),i.drawMonth=i.selectedMonth=s.getMonth(),i.drawYear=i.selectedYear=s.getFullYear()}this._notifyChange(i),this._adjustDate(t)},_selectMonthYear:function(e,t,i){var s=$(e),a=this._getInst(s[0]);a["selected"+("M"==i?"Month":"Year")]=a["draw"+("M"==i?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(s)},_selectDay:function(e,t,i,s){var a=$(e);if(!$(s).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(a[0])){var n=this._getInst(a[0]);n.selectedDay=n.currentDay=$("a",s).html(),n.selectedMonth=n.currentMonth=t,n.selectedYear=n.currentYear=i,this._selectDate(e,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear))}},_clearDate:function(e){var t=$(e);this._getInst(t[0]),this._selectDate(t,"")},_selectDate:function(e,t){var i=$(e),s=this._getInst(i[0]);t=null!=t?t:this._formatDate(s),s.input&&s.input.val(t),this._updateAlternate(s);var a=this._get(s,"onSelect");a?a.apply(s.input?s.input[0]:null,[t,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],"object"!=typeof s.input[0]&&s.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),a=this.formatDate(i,s,this._getFormatConfig(e));$(t).each(function(){$(this).val(a)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var i=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((i-t)/864e5)/7)+1},parseDate:function(e,t,i){if(null==e||null==t)throw"Invalid arguments";if(t="object"==typeof t?""+t:t+"",""==t)return null;var s=(i?i.shortYearCutoff:null)||this._defaults.shortYearCutoff;s="string"!=typeof s?s:(new Date).getFullYear()%100+parseInt(s,10);for(var a=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=-1,l=-1,u=-1,d=-1,c=!1,p=function(t){var i=e.length>y+1&&e.charAt(y+1)==t;return i&&y++,i},f=function(e){var i=p(e),s="@"==e?14:"!"==e?20:"y"==e&&i?4:"o"==e?3:2,a=RegExp("^\\d{1,"+s+"}"),n=t.substring(v).match(a);if(!n)throw"Missing number at position "+v;return v+=n[0].length,parseInt(n[0],10)},m=function(e,i,s){var a=$.map(p(e)?s:i,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),n=-1;if($.each(a,function(e,i){var s=i[1];return t.substr(v,s.length).toLowerCase()==s.toLowerCase()?(n=i[0],v+=s.length,!1):undefined}),-1!=n)return n+1;throw"Unknown name at position "+v},g=function(){if(t.charAt(v)!=e.charAt(y))throw"Unexpected literal at position "+v;v++},v=0,y=0;e.length>y;y++)if(c)"'"!=e.charAt(y)||p("'")?g():c=!1;else switch(e.charAt(y)){case"d":u=f("d");break;case"D":m("D",a,n);break;case"o":d=f("o");break;case"m":l=f("m");break;case"M":l=m("M",r,o);break;case"y":h=f("y");break;case"@":var _=new Date(f("@"));h=_.getFullYear(),l=_.getMonth()+1,u=_.getDate();break;case"!":var _=new Date((f("!")-this._ticksTo1970)/1e4);h=_.getFullYear(),l=_.getMonth()+1,u=_.getDate();break;case"'":p("'")?g():c=!0;break;default:g()}if(t.length>v){var b=t.substr(v);if(!/^\s+/.test(b))throw"Extra/unparsed characters found in date: "+b}if(-1==h?h=(new Date).getFullYear():100>h&&(h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(s>=h?0:-100)),d>-1)for(l=1,u=d;;){var x=this._getDaysInMonth(h,l-1);if(x>=u)break;l++,u-=x}var _=this._daylightSavingAdjust(new Date(h,l-1,u));if(_.getFullYear()!=h||_.getMonth()+1!=l||_.getDate()!=u)throw"Invalid date";return _},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,n=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,o=function(t){var i=e.length>c+1&&e.charAt(c+1)==t;return i&&c++,i},h=function(e,t,i){var s=""+t;if(o(e))for(;i>s.length;)s="0"+s;return s},l=function(e,t,i,s){return o(e)?s[t]:i[t]},u="",d=!1;if(t)for(var c=0;e.length>c;c++)if(d)"'"!=e.charAt(c)||o("'")?u+=e.charAt(c):d=!1;else switch(e.charAt(c)){case"d":u+=h("d",t.getDate(),2);break;case"D":u+=l("D",t.getDay(),s,a);break;case"o":u+=h("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",t.getMonth()+1,2);break;case"M":u+=l("M",t.getMonth(),n,r);break;case"y":u+=o("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":u+=t.getTime();break;case"!":u+=1e4*t.getTime()+this._ticksTo1970;break;case"'":o("'")?u+="'":d=!0;break;default:u+=e.charAt(c)}return u},_possibleChars:function(e){for(var t="",i=!1,s=function(t){var i=e.length>a+1&&e.charAt(a+1)==t;return i&&a++,i},a=0;e.length>a;a++)if(i)"'"!=e.charAt(a)||s("'")?t+=e.charAt(a):i=!1;else switch(e.charAt(a)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":s("'")?t+="'":i=!0;break;default:t+=e.charAt(a)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!=e.lastVal){var i,s,a=this._get(e,"dateFormat"),n=e.lastVal=e.input?e.input.val():null;i=s=this._getDefaultDate(e);var r=this._getFormatConfig(e);try{i=this.parseDate(a,n,r)||s}catch(o){this.log(o),n=t?"":n}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=n?i.getDate():0,e.currentMonth=n?i.getMonth():0,e.currentYear=n?i.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,i){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(i){}for(var s=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,a=s.getFullYear(),n=s.getMonth(),r=s.getDate(),o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=o.exec(t);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":n+=parseInt(h[1],10),r=Math.min(r,$.datepicker._getDaysInMonth(a,n));break;case"y":case"Y":a+=parseInt(h[1],10),r=Math.min(r,$.datepicker._getDaysInMonth(a,n))}h=o.exec(t)}return new Date(a,n,r)},n=null==t||""===t?i:"string"==typeof t?a(t):"number"==typeof t?isNaN(t)?i:s(t):new Date(t.getTime());return n=n&&"Invalid Date"==""+n?i:n,n&&(n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0)),this._daylightSavingAdjust(n)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,a=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),a==e.selectedMonth&&n==e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""==e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),i="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(i,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(i,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(i,this,"Y"),!1}};$(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var i=this._get(e,"isRTL"),s=this._get(e,"showButtonPanel"),a=this._get(e,"hideIfNoPrevNext"),n=this._get(e,"navigationAsDateFormat"),r=this._getNumberOfMonths(e),o=this._get(e,"showCurrentAtPos"),h=this._get(e,"stepMonths"),l=1!=r[0]||1!=r[1],u=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),d=this._getMinMaxDate(e,"min"),c=this._getMinMaxDate(e,"max"),p=e.drawMonth-o,f=e.drawYear;if(0>p&&(p+=12,f--),c){var m=this._daylightSavingAdjust(new Date(c.getFullYear(),c.getMonth()-r[0]*r[1]+1,c.getDate()));for(m=d&&d>m?d:m;this._daylightSavingAdjust(new Date(f,p,1))>m;)p--,0>p&&(p=11,f--)}e.drawMonth=p,e.drawYear=f;var g=this._get(e,"prevText");g=n?this.formatDate(g,this._daylightSavingAdjust(new Date(f,p-h,1)),this._getFormatConfig(e)):g;var v=this._canAdjustMonth(e,-1,f,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+g+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"e":"w")+'">'+g+"</span></a>":a?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+g+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"e":"w")+'">'+g+"</span></a>",y=this._get(e,"nextText");y=n?this.formatDate(y,this._daylightSavingAdjust(new Date(f,p+h,1)),this._getFormatConfig(e)):y;var _=this._canAdjustMonth(e,1,f,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"w":"e")+'">'+y+"</span></a>":a?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"w":"e")+'">'+y+"</span></a>",b=this._get(e,"currentText"),x=this._get(e,"gotoCurrent")&&e.currentDay?u:t;b=n?this.formatDate(b,x,this._getFormatConfig(e)):b;var k=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",w=s?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(i?k:"")+(this._isInRange(e,x)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+b+"</button>":"")+(i?"":k)+"</div>":"",D=parseInt(this._get(e,"firstDay"),10);D=isNaN(D)?0:D;var T=this._get(e,"showWeek"),M=this._get(e,"dayNames");this._get(e,"dayNamesShort");var S=this._get(e,"dayNamesMin"),N=this._get(e,"monthNames"),C=this._get(e,"monthNamesShort"),A=this._get(e,"beforeShowDay"),I=this._get(e,"showOtherMonths"),P=this._get(e,"selectOtherMonths");this._get(e,"calculateWeek")||this.iso8601Week;for(var F=this._getDefaultDate(e),H="",z=0;r[0]>z;z++){var E="";this.maxRows=4;for(var j=0;r[1]>j;j++){var O=this._daylightSavingAdjust(new Date(f,p,e.selectedDay)),L=" ui-corner-all",W="";if(l){if(W+='<div class="ui-datepicker-group',r[1]>1)switch(j){case 0:W+=" ui-datepicker-group-first",L=" ui-corner-"+(i?"right":"left");break;case r[1]-1:W+=" ui-datepicker-group-last",L=" ui-corner-"+(i?"left":"right");break;default:W+=" ui-datepicker-group-middle",L=""}W+='">'}W+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+L+'">'+(/all|left/.test(L)&&0==z?i?_:v:"")+(/all|right/.test(L)&&0==z?i?v:_:"")+this._generateMonthYearHeader(e,p,f,d,c,z>0||j>0,N,C)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";for(var R=T?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"",Y=0;7>Y;Y++){var J=(Y+D)%7;R+="<th"+((Y+D+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+M[J]+'">'+S[J]+"</span></th>"}W+=R+"</tr></thead><tbody>";var B=this._getDaysInMonth(f,p);f==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,B));var K=(this._getFirstDayOfMonth(f,p)-D+7)%7,V=Math.ceil((K+B)/7),q=l?this.maxRows>V?this.maxRows:V:V;this.maxRows=q;for(var U=this._daylightSavingAdjust(new Date(f,p,1-K)),G=0;q>G;G++){W+="<tr>";for(var Q=T?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(U)+"</td>":"",Y=0;7>Y;Y++){var X=A?A.apply(e.input?e.input[0]:null,[U]):[!0,""],Z=U.getMonth()!=p,et=Z&&!P||!X[0]||d&&d>U||c&&U>c;Q+='<td class="'+((Y+D+6)%7>=5?" ui-datepicker-week-end":"")+(Z?" ui-datepicker-other-month":"")+(U.getTime()==O.getTime()&&p==e.selectedMonth&&e._keyEvent||F.getTime()==U.getTime()&&F.getTime()==O.getTime()?" "+this._dayOverClass:"")+(et?" "+this._unselectableClass+" ui-state-disabled":"")+(Z&&!I?"":" "+X[1]+(U.getTime()==u.getTime()?" "+this._currentClass:"")+(U.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+(Z&&!I||!X[2]?"":' title="'+X[2]+'"')+(et?"":' data-handler="selectDay" data-event="click" data-month="'+U.getMonth()+'" data-year="'+U.getFullYear()+'"')+">"+(Z&&!I?"&#xa0;":et?'<span class="ui-state-default">'+U.getDate()+"</span>":'<a class="ui-state-default'+(U.getTime()==t.getTime()?" ui-state-highlight":"")+(U.getTime()==u.getTime()?" ui-state-active":"")+(Z?" ui-priority-secondary":"")+'" href="#">'+U.getDate()+"</a>")+"</td>",U.setDate(U.getDate()+1),U=this._daylightSavingAdjust(U)
    }W+=Q+"</tr>"}p++,p>11&&(p=0,f++),W+="</tbody></table>"+(l?"</div>"+(r[0]>0&&j==r[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),E+=W}H+=E}return H+=w+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,H},_generateMonthYearHeader:function(e,t,i,s,a,n,r,o){var h=this._get(e,"changeMonth"),l=this._get(e,"changeYear"),u=this._get(e,"showMonthAfterYear"),d='<div class="ui-datepicker-title">',c="";if(n||!h)c+='<span class="ui-datepicker-month">'+r[t]+"</span>";else{var p=s&&s.getFullYear()==i,f=a&&a.getFullYear()==i;c+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var m=0;12>m;m++)(!p||m>=s.getMonth())&&(!f||a.getMonth()>=m)&&(c+='<option value="'+m+'"'+(m==t?' selected="selected"':"")+">"+o[m]+"</option>");c+="</select>"}if(u||(d+=c+(!n&&h&&l?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!l)d+='<span class="ui-datepicker-year">'+i+"</span>";else{var g=this._get(e,"yearRange").split(":"),v=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?i+parseInt(e.substring(1),10):e.match(/[+-].*/)?v+parseInt(e,10):parseInt(e,10);return isNaN(t)?v:t},_=y(g[0]),b=Math.max(_,y(g[1]||""));for(_=s?Math.max(_,s.getFullYear()):_,b=a?Math.min(b,a.getFullYear()):b,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';b>=_;_++)e.yearshtml+='<option value="'+_+'"'+(_==i?' selected="selected"':"")+">"+_+"</option>";e.yearshtml+="</select>",d+=e.yearshtml,e.yearshtml=null}return d+=this._get(e,"yearSuffix"),u&&(d+=(!n&&h&&l?"":"&#xa0;")+c),d+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"==i?t:0),a=e.drawMonth+("M"==i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(s,a))+("D"==i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,a,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"==i||"Y"==i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),a=i&&i>t?i:t;return a=s&&a>s?s:a},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var a=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,s+(0>t?t:a[0]*a[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max");return(!i||t.getTime()>=i.getTime())&&(!s||t.getTime()<=s.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var a=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),a,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!=e&&"getDate"!=e&&"widget"!=e?"option"==e&&2==arguments.length&&"string"==typeof arguments[1]?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){"string"==typeof e?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$})(jQuery);

	

//calendar datepicker
jQuery(function($){ 
    $.datepicker.setDefaults({
        clearText:'',
        clearStatus:'',
        closeText:'X',
        closeStatus:'Close without change',
        prevText:'&lt;Prev',
        prevStatus:'Show the previous month',
        nextText:'Next&gt;',
        nextStatus:'Show the next month',
        currentText:'',
        currentStatus:'',
        monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],
        monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        monthStatus:'Show a different month',
        yearStatus:'Show a different year',
        weekHeader:'Wk',
        weekStatus:'Week of the year',
        dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],
        dayStatus:'Set DD as first week day',
        dateStatus:'Select D M d',
        dateFormat:'mm/dd/yy',
        firstDay:0,
        initStatus:'Select a date',
        isRTL:false,
        closeAtTop:true,
        hideIfNoPrevNext:false,
        changeMonth:true,
        
        changeYear:true,
        firstDay:0,
        changeFirstDay:false,
        showOtherMonths:false,
        showWeeks:false,
        defaultDate:"0d",
        
        
        showStatus:true,
        speed:'',
        showOn:'button',
        showAnim:'show',
        buttonText:'View Calendar',
        buttonImage:'/DynamicContent/Resources/Images/Forms/DatePicker/button$v@202202220100.png',
        rangeSelect: false
    });
});
	//Setup generic date fields
jQuery(function($){
    $(".input:has(input.date)").each(function(index) {
            // local references to speedup lookup
            var date  = $(this).find("input.date"),
                props = $(this).find(".meta").metadata({type:"attr", name:"value"});
        var settings = {
            buttonText: props.buttonText,
            dateFormat: props.dateFormat,
            minDate: props.dateMin,
            maxDate: props.dateMax
        };
            if (props.yearRange) {
                settings.yearRange = props.yearRange;
            }
            date.datepicker(settings);
        });
});
	//Setup date range fields
jQuery(function($){
    $(".input.range").each(function(index) {
        //Local references to speedup lookup.
        var startDate  = $(this).find("input.dateRangeStart"),
            endDate    = $(this).find("input.dateRangeEnd"), 
            props = $(this).find(".meta").metadata({type:"attr", name:"value"});
		$(this).find('input.dateRangeStart,input.dateRangeEnd').datepicker({
            buttonText: props.buttonText,
            dateFormat: props.dateFormat,
            minDate: props.dateMin,
            maxDate: props.dateMax,
            beforeShow: function (input) {
                //If either of the date fields are unset we need to use the default value.
                var start_date = startDate.datepicker()[0].value || props.dateMin,
                    end_date = endDate.datepicker()[0].value || props.dateMax;
                return {
                    minDate: ($(input).hasClass("dateRangeEnd") ? start_date : props.dateMin),
                    maxDate: ($(input).hasClass("dateRangeStart") ? end_date : props.dateMax)};
            },
            onSelect: function(txt, inst){
                $(this).parents(".range").change();
            }
        });
    });
});
	
		if (typeof jQuery !== 'undefined'){
	
	jQuery(function ($){ //onload
		$('#PrintApplicationButton').click(function(){printReceipt(true);});
		$('#PrintPageLink').click(function(){printReceipt(true);});
		if($(".stepConfirm").length == 0) {// no focus on confimation page
			var inputElement = $(".formApply :input:visible:enabled:first");
			//prevent auto scroll to the input element if its not currently visible to user
			if(isElementInViewport(inputElement[0])){
				inputElement.focus();
			}
		}	
		$('.printPageLink').click(function(){
			window.print();
			return false;
		});
    });

    jQuery(function ($){ // CRA DD form with accessibility
        $(document).ready(function() {
            var el = $('.craDirectDepositv2Step2 p.agreementTrigger');
            var elExists = el.length > 0;
            if(elExists) {
                el.attr("role", "button");
                var content = $('.craDirectDepositv2Step2 div.agreement');
                if(content[0].style.display !='none') {
                    el.attr("aria-expanded", 'true');
				} else {
                    el.attr("aria-expanded", 'false');
				}
                el.on('click', function() {
                	var expanded = this.getAttribute('aria-expanded');
					if(expanded == 'false') {
                        this.setAttribute('aria-expanded', 'true');
					} else {
                        this.setAttribute('aria-expanded', 'false');
					}
				});
            }
            var accountSelectLabelEn = $('.craDirectDepositv2Step2 .formSection label[for$="Account Selection"]');
            var accountSelectLabelFr = $('.craDirectDepositv2Step2 .formSection label[for$="de compte"]');
            var accountSelect = $('.craDirectDepositv2Step2 .formSection select');
            accountSelectLabelEn.attr('id', 'acctsel1');
            accountSelectLabelFr.attr('id', 'acctsel1');
            accountSelect.attr("aria-labelledby", 'acctsel1');
            accountSelect.attr("aria-required", 'true');
            var errorSection = $('.craDirectDepositv2Step2 #errorMsgId');
            var craSin = $('.craDirectDepositv2Step2 #craSIN');
            var checkboxEl = $(".craDirectDepositv2Step2 input[type='checkbox']");
            errorSection.attr('role', 'alert');
            craSin.attr('aria-required', 'true');
            checkboxEl.attr('aria-required','true');
            if (accountSelect.parent().parent().hasClass('entryError')) {
                accountSelect.attr('aria-invalid', 'true');
            } else {
                accountSelect.attr('aria-invalid', 'false');
			}
            if (craSin.parent().parent().hasClass('entryError')) {
                craSin.attr('aria-invalid', 'true');
			} else {
                craSin.attr('aria-invalid', 'false');
			}
            if (checkboxEl.parent().parent().parent().hasClass('entryError')) {
                checkboxEl.attr('aria-invalid', 'true');
            } else {
                checkboxEl.attr('aria-invalid', 'false');
            }
        });
    });

    jQuery(function ($){ // CEWS form with accessibility
        $(document).ready(function() {
            var busNameEn = $('.cewsDirectDepositv2Step2 .formSection input[id$="tax documentation)"]');
            var busNameFr = $('.cewsDirectDepositv2Step2 .formSection input[id$="documentation fiscale)"]');
            var craBusLabelEn = $('.cewsDirectDepositv2Step2 .formSection label[for$="Payroll Account Number"]');
            var craBusLabelFr = $('.cewsDirectDepositv2Step2 .formSection label[for$="retenues sur la paie"]');
            var craBusInputEn = $('.cewsDirectDepositv2Step2 .formSection input[id$="Payroll Account Number"]');
            var craBusInputFr = $('.cewsDirectDepositv2Step2 .formSection input[id$="retenues sur la paie"]');
            craBusLabelEn.attr('id', 'crabuslabel');
            craBusLabelFr.attr('id', 'crabuslabel');
            craBusInputEn.attr("aria-labelledby", 'crabuslabel');
            craBusInputEn.attr('aria-describedby','examplelabel crabusnumb');
            craBusInputEn.attr('aria-required','true');
            craBusInputFr.attr("aria-labelledby", 'crabuslabel');
            craBusInputFr.attr('aria-describedby','examplelabel crabusnumb');
            craBusInputFr.attr('aria-required','true');
            craBusInputEn.after('<p id="examplelabel" style="display:none">CRA business number example</p>');
            craBusInputFr.after('<p id="examplelabel" style="display:none">CRA business number example</p>');
            craBusInputEn.parent().next().attr('id', 'crabusnumb');
            craBusInputFr.parent().next().attr('id', 'crabusnumb');
            var accountSelectLabelEn = $('.cewsDirectDepositv2Step2 .formSection label[for$="Account Selection"]');
            var accountSelectLabelFr = $('.cewsDirectDepositv2Step2 .formSection label[for$="de compte"]');
            var accountSelect = $('.cewsDirectDepositv2Step2 .formSection select');
            accountSelectLabelEn.attr('id', 'acctsellabel');
            accountSelectLabelFr.attr('id', 'acctsellabel');
            accountSelect.attr("aria-labelledby", 'acctsellabel');
            accountSelect.attr('aria-required','true');
            var craSin = $('.cewsDirectDepositv2Step2 #craSIN');
            craSin.attr('aria-describedby','sinlabel sinexample');
            craSin.after('<p style="display:none" id="sinlabel">social insurance number example</p>');
            craSin.parent().next().attr('id','sinexample');
            var craDob = $('.cewsDirectDepositv2Step2 #craDOB');
            craDob.attr('aria-describedby','doblabel dobhint');
            craDob.parent().next().attr('id','dobhint');
            craDob.parent().next().before('<p style="display:none" id="doblabel">date of birth format</p>');
            var craFirstNameStep2 = $('.cewsDirectDepositv2Step2 #craFirstName');
            var craLastNameStep2 = $('.cewsDirectDepositv2Step2 #craLastName');
            var craFirstNameStep3 = $('.cewsDirectDepositv2Step3 #craFirstName');
            var craLastNameStep3 = $('.cewsDirectDepositv2Step3 #craLastName');
            craFirstNameStep2.attr('aria-required', 'true');
            craLastNameStep2.attr('aria-required', 'true');
            craFirstNameStep3.attr('aria-required', 'true');
            craLastNameStep3.attr('aria-required', 'true');
            var checkboxEl = $(".cewsDirectDepositv2Step3 input[type='checkbox']");
            checkboxEl.attr('aria-required', 'true');
            var el = $('.cewsDirectDepositv2Step3 p.agreementTrigger');
            var elExists = el.length > 0;
            if(elExists) {
                el.attr("role", "button");
                var content = $('.cewsDirectDepositv2Step3 div.agreement');
                if(content[0].style.display !='none') {
                    el.attr("aria-expanded", 'true');
                } else {
                    el.attr("aria-expanded", 'false');
                }
                el.on('click', function() {
                    var expanded = this.getAttribute('aria-expanded');
                    if(expanded == 'false') {
                        this.setAttribute('aria-expanded', 'true');
                    } else {
                        this.setAttribute('aria-expanded', 'false');
                    }
                });
            }
            var errorMessageStep2 = $('.cewsDirectDepositv2Step2 #errorMsgId');
            var errorMessageStep3 = $('.cewsDirectDepositv2Step3 #errorMsgId');
            errorMessageStep2.attr('role', 'alert');
            errorMessageStep3.attr('role', 'alert');
            if (busNameEn.parent().parent().hasClass('entryError')) {
                busNameEn.attr('aria-invalid', 'true');
            } else {
                busNameEn.attr('aria-invalid', 'false');
            }
            if (busNameFr.parent().parent().hasClass('entryError')) {
                busNameFr.attr('aria-invalid', 'true');
            } else {
                busNameFr.attr('aria-invalid', 'false');
            }
            if (accountSelect.parent().parent().hasClass('entryError')) {
                accountSelect.attr('aria-invalid', 'true');
            } else {
                accountSelect.attr('aria-invalid', 'false');
            }
            if (craFirstNameStep2.parent().parent().hasClass('entryError')) {
                craFirstNameStep2.attr('aria-invalid', 'true');
            } else {
                craFirstNameStep2.attr('aria-invalid', 'false');
            }
            if (craLastNameStep2.parent().parent().hasClass('entryError')) {
                craLastNameStep2.attr('aria-invalid', 'true');
            } else {
                craLastNameStep2.attr('aria-invalid', 'false');
            }
            if (craFirstNameStep3.parent().parent().hasClass('entryError')) {
                craFirstNameStep3.attr('aria-invalid', 'true');
            } else {
                craFirstNameStep3.attr('aria-invalid', 'false');
            }
            if (craLastNameStep3.parent().parent().hasClass('entryError')) {
                craLastNameStep3.attr('aria-invalid', 'true');
            } else {
                craLastNameStep3.attr('aria-invalid', 'false');
            }
            if (craBusInputEn.parent().parent().hasClass('entryError')) {
                craBusInputEn.attr('aria-invalid', 'true');
            } else {
                craBusInputEn.attr('aria-invalid', 'false');
            }
            if (craBusInputFr.parent().parent().hasClass('entryError')) {
                craBusInputFr.attr('aria-invalid', 'true');
            } else {
                craBusInputFr.attr('aria-invalid', 'false');
            }
            if (checkboxEl.parent().parent().parent().hasClass('entryError')) {
                checkboxEl.attr('aria-invalid', 'true');
            } else {
                checkboxEl.attr('aria-invalid', 'false');
            }
        });
    });

    /* MRR-24666 */
    jQuery(function ($){
        $(document).ready(function() {
            var el = $('.cewsDirectDepositv2StepConfirm .formPageConfirmation').first().find('.formSection').first();
            var comEl = el.find('.oneColRow');
            $(comEl[0]).css('display', 'inline-block');
            $(comEl[0]).css('width', '180px');
            $(comEl[0]).css('text-align', 'right');
            $(comEl[1]).css('display', 'inline-block');
            $(comEl[1]).css('width', '275px');
            $(comEl[1]).css('margin-left', '12px');
            $(comEl[1]).css('font-weight', 'bold');
        });
    });

    //returns true if el is displayed in current viewport
    function isElementInViewport (el) {
	    if((el !== undefined) && (typeof el.getBoundingClientRect === 'function')) {
	    	//this returns the rectangle enclosing the element el
		    var rect = el.getBoundingClientRect();

		    return (
		        rect.top >= 0 &&
		        rect.left >= 0 &&
		        rect.bottom <= jQuery(window).height() && 
		        rect.right <= jQuery(window).width() 
		    );
	    }
	    else{
	    	return false;
	    }
	    		
	}	

	function printReceipt(isConfirmation){
		jQuery( function($) {
			if(!isConfirmation){
				$('.formPageConfirmation').hide();
			}

			else{
				$('.formPageConfirmation').show();
                		if ($('.printOnly')[0]) {
                    			$('.printOnly').hide();
                		}
			}

			window.print();
			return false;
		});	
	}

	function showHint(hintTriggerId, hintId){
		var hintIcon = jQuery('#' + hintTriggerId);
		var helpHint = jQuery('#' + hintId);
		if( helpHint.length <= 0 ){
			return;
		}
		var topOffset = ( helpHint.outerHeight() - helpHint.height() ) / 2;
		var winWidth = jQuery( window ).width();
		var hintIconX = hintIcon.position().left;
		var hintIconY = hintIcon.position().top;
		var hintIconWinX = hintIcon.offset().left;
		var helpHintX = hintIconX;
		var helpHintMargin = 15;

		helpHint.css( 'max-width', 'none' );
		if( winWidth < helpHint.outerWidth() + ( helpHintMargin * 2 ) ){
            helpHint.css( 'max-width', winWidth - ( helpHintMargin * 2 ) );
        }

        var hintWidth = helpHint.outerWidth();

		if (helpHint.hasClass('hintOpposed')) {
			var hintIconWidth = hintIcon.outerWidth();
			helpHintX = hintIconX - hintWidth + hintIconWidth;
			if( hintIconWinX - hintWidth + hintIconWidth < 0){
				helpHintX = hintIconX - hintIconWinX + helpHintMargin;
			}
		} else {
			if( ( hintIconWinX + hintWidth ) > winWidth ){
				helpHintX = hintIconX - ( ( hintIconWinX + hintWidth ) - winWidth ) - helpHintMargin;
			}
		}

		helpHint.css('left', helpHintX);
		helpHint.css('top', (hintIconY + topOffset) - (helpHint.height() + hintIcon.height()));
		helpHint.css('visibility','visible');
		helpHint.css('display', 'block');

		//mdr is the class on responsive decorators - html.touch / html.touchevents is added by modernizr
		if( jQuery('.mdr').length > 0 && (jQuery('html.touch').length > 0 || jQuery('html.touchevents').length > 0)){
			$('html').on('touchend', function hideHintOnTouch(e){
				hideHint(hintTriggerId, hintId);
				$(this).off('touchend', hideHintOnTouch);
			});
		}
	}

	function hideHint(hintTriggerId, hintId){
		var helpHint = jQuery('#' + hintId);
		var hintTrigger = jQuery('#' + hintTriggerId);
		var hintParent = helpHint.parent(".labelWithInfo");

		helpHint.css('visibility', 'hidden');
		helpHint.mouseover(function(e){ jQuery(this).css('visibility','visible'); });
		helpHint.mouseout(function(e){ jQuery(this).css('visibility','hidden'); });
	}	

	function toggleHints(hintTriggerId,hintId){
		var hintIcon = jQuery('#' + hintTriggerId);
		hintIconX = hintIcon.position().left;
		hintIconY = hintIcon.position().top; 
		var helpHint = jQuery('#' + hintId)
		helpHint.css('left', hintIconX);
		helpHint.css('top', hintIconY - (helpHint.height() + hintIcon.height()));
		helpHint.toggle();
	}

	function toggleAgreement(){
		var e,argreementTrigggerId,agreementId;
		if(arguments.length == 2){
			agreementTriggerId = arguments[0];
			agreementId = arguments[1];
		} else if(arguments.length == 3){
			e = arguments[0];
			agreementTriggerId = arguments[1];
			agreementId = arguments[2];
		}
		var validKeyPresses = [13,32]; // allow only space and enter keys as valid toggle controls
		if(e && e.type == 'keydown' && validKeyPresses.indexOf(e.keyCode) == -1){ return; }
		var agreementTrigger = jQuery('#' + agreementTriggerId);
		var agreement = jQuery('#' + agreementId);
		agreement.toggle();
		agreementTrigger.attr('class', (agreement.is(':visible') ? 'agreementTrigger open' : 'agreementTrigger')); //the arrow			
	}

 	function toggleCollapsible(){
		jQuery('.content').toggle();
		jQuery('.toggleForm').toggle();
 	}

	if(!window.toggleCollapsible){ // make sure it wasn't defined elsewhere, like in formlet.js	
	 	function toggleCollapsible(){
			jQuery( function($) {
				$('.content').toggle();
				$('.toggleForm').toggle();
			});
	 	} 
	}
	
	function setMemorizedFR(selectBox, ignoreBranch, prefix){
		jQuery( function($) {
			
			var reg = /^\s*(\d+)\|(\d+)\s*$/,  //Account values are in the format "xxx|yyyyyyy" where xxx=branchnum and yyyyyy=acctnum
			    parts = [],
			    currentSelection = jQuery('option:selected', $(this));
			if(currentSelection && reg.test(currentSelection.val())){
				parts = reg.exec(currentSelection.val());
                if(!ignoreBranch) {
                    if($('div.formLogin input#branch').length) {
                        $('div.formLogin input#branch').val(parts[1]);
                    }
                    else {
                        $('div.formLogin select#branch').val(parts[1]);
                    }
                }
				 $('div.formLogin input#acctnum').val(prefix + parts[2]);
			}
			else{
				if(!ignoreBranch) {
					$('div.formLogin input#branch').val('');
				}
				$('div.formLogin input#acctnum').val(prefix);
			}
		});
	}

    function autoFormatAmountField(input){
        var clearInput = input.value.replace(/\D/g, '');
        input.value = clearInput.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
		
}


	
	


}

/*cu custom scripts*/

