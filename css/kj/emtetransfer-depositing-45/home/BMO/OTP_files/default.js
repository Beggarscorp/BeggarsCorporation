/* 2013-03-13 */

$(document).ready(function($){

/*******************************************************/
/* Add class if JavaScript is enabled
/*******************************************************/

$("body").addClass("td-JS-enabled");

/*******************************************************/
/* Add First/Last classes to nested grid
/*******************************************************/

$(".td-layout-row .td-layout-column:first-child").addClass("td-layout-column-first");
$(".td-layout-row .td-layout-column:last-child").addClass("td-layout-column-last");

$(".td-callout .td-layout-column:first-child").addClass("td-layout-column-first");
$(".td-callout .td-layout-column:last-child").addClass("td-layout-column-last");

/*******************************************************/
/* Add First/Last classes to left nav
/*******************************************************/

$("#td-nav-left ul li ul li:first-child").addClass("td-nav-left-first-child");
$("#td-nav-left ul li ul li:last-child").addClass("td-nav-left-last-child");
$("#td-nav-left ul li.td-nav-left-fauxlevel1:last-child").addClass("td-nav-left-fauxlevel1-last-child");


/*******************************************************/
/* Detect Internet Explorer
/*******************************************************/

if ($.browser.msie) {
    $("body").addClass("browser-IE");
}


/*******************************************************/
/* Find query string
/*******************************************************/
// http://jquery-howto.blogspot.ca/2009/09/get-url-parameters-values-with-jquery.html

$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }

});

// var allVars = $.getUrlVars(); // Get object of URL parameters
// var byName = $.getUrlVar('name'); // Getting URL var by its name


/*******************************************************/
/* Add last class to last element in callout
/*******************************************************/
if ($.browser.msie) {
    $(".td-callout-content").each(function () {
        $(this).children().last().addClass("td-lastelement");
    });
}

/*******************************************************/
/* Add extra width to callout if it will have scrollbars
/*******************************************************/

$(".td-callout-withscrollbar").each(function () {
    var width = $(this).innerWidth();
    $(this).width(width);
});


/*******************************************************/
/* Equal heights plugin
/*******************************************************/

/**
 * Set all passed elements to the same height as the highest element.
 *
 * Copyright (c) 2010 Ewen Elder
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author: Ewen Elder <glomainn at yahoo dot co dot uk> <ewen at jainaewen dot com>
 * @version: 1.0
 *
**/
(function($){$.fn.equalHeightColumns=function(options){var height,elements;options=$.extend({},$.equalHeightColumns.defaults,options);height=options.height;elements=$(this);$(this).each(function(){if(options.children){elements=$(this).children(options.children)}if(!options.height){if(options.children){elements.each(function(){if($(this).height()>height){height=$(this).height()}})}else{if($(this).height()>height){height=$(this).height()}}}});if(options.minHeight&&height<options.minHeight){height=options.minHeight}if(options.maxHeight&&height>options.maxHeight){height=options.maxHeight}elements.animate({height:height},options.speed);return $(this)};$.equalHeightColumns={version:1.0,defaults:{children:false,height:0,minHeight:0,maxHeight:0,speed:0}}})($);

$(".td-equalcalloutheight").each(function(){
	$(this).find(".td-callout:not(.td-modal)").equalHeightColumns();
});

/*******************************************************/
/* Force PIE to update buttons when this function is called
/*******************************************************/

if ($.browser.msie) {
    function PIErefresh() {
        if (window.PIE) {
            $("a.td-link-toggle span.td-triggericon, hr.td-divider-fade, .td-button, .td-callout:not(.td-modal), .td-fauxbgimage, .td-banner img, .td-modal-mask").each(function () {
                PIE.attach(this);
            });
        }
    }

    PIErefresh();
}

/*******************************************************/
/* Popup Windows
/*******************************************************/

$(function () {

    $.fn.popupwindow = function (p) {

        var profiles = p || {};

        return this.each(function (index) {
            var settings, parameters, mysettings, b, a, winObj;

            // for overrideing the default settings
            mysettings = ($(this).attr("rel") || "").split(",");

            settings = {
                height: 530, // sets the height in pixels of the window.
                width: 400, // sets the width in pixels of the window.
                toolbar: 0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
                scrollbars: 1, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
                status: 0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
                resizable: 1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
                left: 0, // left position when the window appears.
                top: 0, // top position when the window appears.
                center: 1, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
                createnew: 1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
                location: 0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
                menubar: 0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
                onUnload: null // function to call when the window is closed
            };

            // if mysettings length is 1 and not a value pair then assume it is a profile declaration
            // and see if the profile settings exists

            if (mysettings.length == 1 && mysettings[0].split(":").length == 1) {
                a = mysettings[0];
                // see if a profile has been defined
                if (typeof profiles[a] != "undefined") {
                    settings = $.extend(settings, profiles[a]);
                }
            } else {
                // overrides the settings with parameter passed in using the rel tag.
                for (var i = 0; i < mysettings.length; i++) {
                    b = mysettings[i].split(":");
                    if (typeof settings[b[0]] != "undefined" && b.length == 2) {
                        settings[b[0]] = b[1];
                    }
                }
            }

            // center the window
            if (settings.center == 1) {
                settings.top = ((screen.height - (settings.height)) / 2) - 50;
                settings.left = (screen.width - settings.width) / 2;
            }

            parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left + ",screenX=" + settings.left + ",top=" + settings.top + ",screenY=" + settings.top;

            $(this).bind("click", function () {
                var name = settings.createnew ? "PopUpWindow" + index : "PopUpWindow";
                winObj = window.open(this.href, name, parameters);

                if (settings.onUnload) {
                    // Incremental check for window status
                    // Attaching directly to window.onunlaod event causes invoke when document within window is reloaded
                    // (i.e. an inner refresh)
                    unloadInterval = setInterval(function () {
                        if (!winObj || winObj.closed) {
                            clearInterval(unloadInterval);
                            settings.onUnload.call($(this));
                        }
                    }, 500);
                }

                //winObj.focus();

                return false;
            });
        });

    };

    $(".td-popupwindow").popupwindow();

});


/*******************************************************/
/* Stand Alone Links
/*******************************************************/


$(".td-link-header").html(function(){
    var text= $(this).text().split(" ");
    var last = text.pop();
    return text.join(" ")+ (" <span class='td-copy-nowrap'>"+ last + "&#65279;<span class='td-link-icon'>&#8250;</span></span>");
});

$(".td-link-standalone").html(function(){
    var text= $(this).text().split(" ");
    var last = text.pop();
    return text.join(" ")+ (" <span class='td-copy-nowrap'>"+ last + "<span class='td-link-icon'></span></span>");
});

/*******************************************************/
/* Expand/Collapse (Toggle)
/*******************************************************/

$(".td-link-toggle").each(function () {

    var triggerelement = $(this);
    var targetelement = $(this).metadata().targetelement;
    var triggericon = $(this).find(".td-triggericon");
    var fx = $(this).metadata().fx;

    function toggleClose() {
        $(triggericon).removeClass("td-triggericon-expanded");

        if ($(triggericon).length) {
            var alt = $(triggericon).html();
            alt = alt.replace("Collapse", "Expand");
            $(triggericon).text(alt);
        }

        if (($(targetelement).is("table,tr,th,td")) || fx == 'quickfade') {
            $(targetelement).animate({
                opacity: 0
            }, 250, function () {
                $(targetelement).hide();
            });

        } else if (fx == 'none') {

            $(targetelement).animate({
                opacity: 0
            }, 0, function () {
                $(targetelement).hide();
            });

        } else {

            $(targetelement).animate({
                height: "toggle",
                opacity: "toggle"
            });

        }
    }

    function toggleOpen() {
        $(triggericon).addClass("td-triggericon-expanded");

        if ($(triggericon).length) {
            var alt = $(triggericon).html();
            alt = alt.replace("Expand", "Collapse");
            $(triggericon).text(alt);
        }

        if (($(targetelement).is("table,tr,th,td")) || fx == 'quickfade') {
            $(targetelement).show();
            $(targetelement).css({
                'opacity': '0'
            });
            $(targetelement).animate({
                opacity: 1
            }, 500, function () {});

       } else if (fx == 'none') {

            $(targetelement).show();
            $(targetelement).css({
                'opacity': '0'
            });
            $(targetelement).animate({
                opacity: 1
            }, 0, function () {});

        } else {

            $(targetelement).animate({
                height: "toggle",
                opacity: "toggle"
            });

        }

    }

    $(triggerelement).click(function () {
        if (!($(targetelement).is(":visible"))) {
            toggleOpen();
            $(triggerelement).focus();
            return false;
        }

        if ($(targetelement).is(":visible")) {
            toggleClose();
            return false;
        }


    });

});

/*******************************************************/
/* Tables
/*******************************************************/


(function(C){var A=function(Q){var S=Q.rows;var K=S.length;var P=[];for(var I=0;I<K;I++){var R=S[I].cells;var O=R.length;for(var H=0;H<O;H++){var N=R[H];var M=N.rowSpan||1;var J=N.colSpan||1;var L=-1;if(!P[I]){P[I]=[]}var E=P[I];while(E[++L]){}N.realIndex=L;for(var G=I;G<I+M;G++){if(!P[G]){P[G]=[]}var D=P[G];for(var F=L;F<L+J;F++){D[F]=1}}}}};var B=function(H){var E=0,F,D,G=(H.tHead)?H.tHead.rows:0;if(G){for(F=0;F<G.length;F++){G[F].realRIndex=E++}}for(D=0;D<H.tBodies.length;D++){G=H.tBodies[D].rows;if(G){for(F=0;F<G.length;F++){G[F].realRIndex=E++}}}G=(H.tFoot)?H.tFoot.rows:0;if(G){for(F=0;F<G.length;F++){G[F].realRIndex=E++}}};C.fn.tableHover=function(D){var E=C.extend({allowHead:true,allowBody:true,allowFoot:true,headRows:false,bodyRows:true,footRows:false,spanRows:true,headCols:false,bodyCols:true,footCols:false,spanCols:true,ignoreCols:[],headCells:false,bodyCells:true,footCells:false,rowClass:"hover",colClass:"",cellClass:"",clickClass:""},D);return this.each(function(){var N=[],M=[],J=this,F,K=0,O=[-1,-1];if(!J.tBodies||!J.tBodies.length){return }var G=function(U,X){var W,V,T,R,Q,S;for(T=0;T<U.length;T++,K++){V=U[T];for(R=0;R<V.cells.length;R++){W=V.cells[R];if((X=="TBODY"&&E.bodyRows)||(X=="TFOOT"&&E.footRows)||(X=="THEAD"&&E.headRows)){S=W.rowSpan;while(--S>=0){M[K+S].push(W)}}if((X=="TBODY"&&E.bodyCols)||(X=="THEAD"&&E.headCols)||(X=="TFOOT"&&E.footCols)){S=W.colSpan;while(--S>=0){Q=W.realIndex+S;if(C.inArray(Q+1,E.ignoreCols)>-1){break}if(!N[Q]){N[Q]=[]}N[Q].push(W)}}if((X=="TBODY"&&E.allowBody)||(X=="THEAD"&&E.allowHead)||(X=="TFOOT"&&E.allowFoot)){W.thover=true}}}};var L=function(R){var Q=R.target;while(Q!=this&&Q.thover!==true){Q=Q.parentNode}if(Q.thover===true){H(Q,true)}};var I=function(R){var Q=R.target;while(Q!=this&&Q.thover!==true){Q=Q.parentNode}if(Q.thover===true){H(Q,false)}};var P=function(T){var R=T.target;while(R&&R!=J&&!R.thover){R=R.parentNode}if(R.thover&&E.clickClass!=""){var Q=R.realIndex,U=R.parentNode.realRIndex,S="";C("td."+E.clickClass+", th."+E.clickClass,J).removeClass(E.clickClass);if(Q!=O[0]||U!=O[1]){if(E.rowClass!=""){S+=",."+E.rowClass}if(E.colClass!=""){S+=",."+E.colClass}if(E.cellClass!=""){S+=",."+E.cellClass}if(S!=""){C("td, th",J).filter(S.substring(1)).addClass(E.clickClass)}O=[Q,U]}else{O=[-1,-1]}}};var H=function(R,T){if(T){C.fn.tableHoverHover=C.fn.addClass}else{C.fn.tableHoverHover=C.fn.removeClass}var V=N[R.realIndex]||[],S=[],U=0,Q,W;if(E.colClass!=""){while(E.spanCols&&++U<R.colSpan&&N[R.realIndex+U]){V=V.concat(N[R.realIndex+U])}C(V).tableHoverHover(E.colClass)}if(E.rowClass!=""){Q=R.parentNode.realRIndex;if(M[Q]){S=S.concat(M[Q])}U=0;while(E.spanRows&&++U<R.rowSpan){if(M[Q+U]){S=S.concat(M[Q+U])}}C(S).tableHoverHover(E.rowClass)}if(E.cellClass!=""){W=R.parentNode.parentNode.nodeName.toUpperCase();if((W=="TBODY"&&E.bodyCells)||(W=="THEAD"&&E.headCells)||(W=="TFOOT"&&E.footCells)){C(R).tableHoverHover(E.cellClass)}}};A(J);B(J);for(F=0;F<J.rows.length;F++){M[F]=[]}if(J.tHead){G(J.tHead.rows,"THEAD")}for(F=0;F<J.tBodies.length;F++){G(J.tBodies[F].rows,"TBODY")}if(J.tFoot){G(J.tFoot.rows,"TFOOT")}C(this).bind("mouseover",L).bind("mouseout",I).click(P)})}})($);


/* Add row striping */
$("table.td-table-stripe-row tr:odd").addClass("td-table-alt-row");
/* Add column striping */
$("table.td-table-stripe-column th:nth-child(even)").addClass("td-table-alt-column");
$("table.td-table-stripe-column td:nth-child(even)").addClass("td-table-alt-column");

/* Add row hover */
$("table.td-table-hover-row").tableHover({
    rowClass: 'td-table-hover-row',
    spanRows: false,
    spanCols: false
});
/* Add column hover */
$("table.td-table-hover-column").tableHover({
    colClass: 'td-table-hover-column',
    spanRows: false,
    spanCols: false
});

$("table.td-table tr:first-child").addClass("td-table-row-first");
$("table.td-table tr:last-child").addClass("td-table-row-last");

$(".td-table-superhighlight-column").prev().addClass("td-table-superhighlight-column-before");
$(".td-table-superhighlight-column").next().addClass("td-table-superhighlight-column-after");

$(".td-table-superhighlight-row").prev().addClass("td-table-superhighlight-row-before");
$(".td-table-superhighlight-row").next().addClass("td-table-superhighlight-row-after");
$(".td-table-superhighlight-row td:last-child").addClass("td-table-superhighlight-column-last");


/*******************************************************/
/* Make parent div clickable
/*******************************************************/

$(".td-makeclickable").click(function (event) {

    var url = $(this).find("a.td-makeclickable-target").attr("href");
    var name = $(this).find("a.td-makeclickable-target").attr("target");
    var $target = $(event.target);

    if (($target.is("a") || ($target.parent().is("a")))) {

    } else {
        if (!(name)) {
            window.open(url, '_self', '', '');
        }
        if (name) {
            window.open(url, name, '', '');
        }
        return false;
    }

});


/*******************************************************/
/* Open link in new window
/*******************************************************/

$("a.td-link-newwindow").each(function () {
    var titlevar = $(this).attr("title");
    var randomNumber = Math.floor(Math.random()*99999);
    $(this).attr("aria-describedby", "aria-" + randomNumber);
    $(this).append("<span class='td-accesstext' id='aria-" + randomNumber + "'>" + titlevar + "</span>");
    $(this).removeAttr("title");
});

$("a.td-link-newwindow-withicon").each(function () {
    var titlevar = $(this).attr("title");
    var randomNumber = Math.floor(Math.random()*99999);
    $(this).attr("aria-describedby", "aria-" + randomNumber);
    $(this).wrapInner("<span class='td-link-newwindow-label'></span>");
    $(this).append("&nbsp;<span class='td-link-newwindow-icon' id='aria-" + randomNumber + "'>" + titlevar + "</span>");
    $(this).removeAttr("title");
});


/*******************************************************/
/* Tabs
/*******************************************************/

/* General Tabs */
$(".td-tabs-vertical ul li").prepend("<span class='td-tabs-vertical-top'></span>");
$(".td-tabs-vertical ul li").append("<span class='td-tabs-vertical-bottom'></span>");

$(".td-tabs ul li span a").focus(function () {
    $(this).parent().parent().addClass("td-tabs-focused");
});
$(".td-tabs ul li span a").blur(function () {
    $(this).parent().parent().removeClass("td-tabs-focused");
});
$(".td-tabs ul li").hover(function () {
    $(this).addClass("td-tabs-focused");
}, function () {
    $(this).removeClass("td-tabs-focused");
});

$("li.td-tabs-active").each(function () {
    var titlevar = $(this).find("a").attr("title");
    $(this).find("a").prepend("<span class='td-accesstext'>" + titlevar + "</span> ");
    $(this).find("a").removeAttr("title");
});

$(".td-tabs-vertical.td-tabs ul li.td-tabs-active").each(function () {
    $(this).next().addClass("td-tabs-afteractive");
});


/* Dynamic Tabs */
$(".td-tabs-dynamic").each(function () {

    var titlevar = $(this).find(".td-accesstext").html();

    var contentwrapper = $(this).metadata().contentwrapper;
    var contentwrapperID = "#" + contentwrapper;
    var equalizecontentheight = $(this).metadata().equalizecontentheight;
    var fx = $(this).metadata().fx;

    var initialactivecontent = $(this).find(".td-tabs-active span a").attr("href");
    $(contentwrapperID).find(".td-tabs-content").hide();
    $(initialactivecontent).show();

    if (equalizecontentheight == 'true') {
        var heights = $(contentwrapperID).find(".td-tabs-content").map(function () {
            return $(this).height();
        }).get(),
            maxHeight = Math.max.apply(null, heights);
        $(contentwrapperID).height(maxHeight);
    }

    function tabsDeactivate() {
        $(clickedtab).parent().find("li").removeClass("td-tabs-active");
        $(clickedtab).parent().find("li").removeClass("td-tabs-afteractive");
        $(clickedtab).parent().find(".td-accesstext").remove();
    }

    function tabActivate() {
        $(clickedtab).addClass("td-tabs-active");
        $(clickedtab).next().addClass("td-tabs-afteractive");
        $(clickedtab).find("a").prepend("<span class='td-accesstext'>" + titlevar + "</span> ");
    }

    function tabContentToggle() {
        $(contentwrapperID).find(".td-tabs-content").hide();
        $(activecontent).show();

        if ($.browser.msie) {
            PIErefresh();
        }

        if (fx == 'fade') {
            $(activecontent).css({
                opacity: 0
            });
            $(activecontent).animate({
                opacity: 1
            });
        }

        if (fx == 'slide') {
            var activecontentwidth = $(activecontent).width();
            $(activecontent).css({
                opacity: 0
            });
            $(activecontent).css({
                width: activecontentwidth,
                position: 'absolute',
                left: '-200px'
            });
            $(activecontent).animate({
                opacity: 1,
                left: '12px'
            });
        }

        if (fx == '') {
            $(activecontent).css({
                opacity: 1
            });
        }
    }

    if (typeof $.getUrlVar(contentwrapper) != 'undefined') {
        var queryactivecontent = $.getUrlVar(contentwrapper);
        activecontent = '#' + queryactivecontent;
        clickedtab = $(this).find("a[href=" + activecontent + "]").parent().parent();
        tabsDeactivate();
        tabActivate();
        tabContentToggle();
    }


    $(this).find("ul li").click(function () {
        clickedtab = $(this);
        activecontent = $(clickedtab).find("a").attr("href");
        tabsDeactivate();
        tabActivate();
        tabContentToggle();
        return false;

    });

});



/*******************************************************/
/* Swap image with active state on hover
/*******************************************************/

$(".td-link-activeimageonhover").each(function () {

    $(this)
        .mouseenter(function () {

        if ($(this).find("img").length != 0) {
            var src = $(this).find("img").attr("src");
            src = src.replace(".", "-active.");
            $(this).find("img").attr("src", src);
        }
        $(this).find(".td-link-icon").addClass("td-link-icon-active");

    })
        .mouseleave(function () {

        if ($(this).find("img").length != 0) {
            var src = $(this).find("img").attr("src");
            src = src.replace("-active.", ".");
            $(this).find("img").attr("src", src);
        }
        $(this).find(".td-link-icon").removeClass("td-link-icon-active");

    });

});


/*******************************************************/
/* Hide element via JS
/*******************************************************/

$(".td-JShide").hide();

/*******************************************************/
/* Evenly spaced nav
/*******************************************************/

$(".td-nav-level2-fullwidth-evenlyspaced").each(function () {
    var fullwidth = $(this).outerWidth() - 24;
    var numberofitems = $(this).find("li").length;
    var itemwidth = (fullwidth / numberofitems);
    $(".td-nav-level2-fullwidth-evenlyspaced > ul > li").css({
        width: itemwidth
    });
});

/*******************************************************/
/* Top Nav Level 2 Flyouts
/*******************************************************/

$("#td-nav-level2.td-nav-flyouts > ul > li.td-nav-flyout").each(function () {

    var hideDelayTimer = null;
    var showDelay = 125;
    var hideDelay = 400;

    var triggerelement = $(this);
    var position = $(this).metadata().position;

    var label = $(this).find(".td-nav-level2-label");
    var labelHeight = $(label).innerHeight();
    var labelWidth = $(label).innerWidth();
    var labelOffset = $(label).offset();
    var labelOffsetTop = labelOffset.top + labelHeight;

    var flyout = $(this).find("ul");
    var flyoutWidth = $(this).find("ul").innerWidth();

    if ((position == "left") || (position === undefined) || (position != "right") || (position != "containerleft")) {
        $(this).metadata().labelOffsetLeft = labelOffset.left;
    }
    if (position == "right") {
        $(this).metadata().labelOffsetLeft = labelOffset.left - flyoutWidth + labelWidth;
    }
    if (position == "containerleft" || position == "containerright") {

        $(this).metadata().targetContainer = $("#td-container");

        if (position == "containerleft") {
            $(this).metadata().calculateOffset = function () {
                return this.targetContainer.offset().left;
            };
        } else if (position == "containerright") {
            $(this).metadata().flyoutWidth = flyoutWidth;
            $(this).metadata().calculateOffset = function () {
                return this.targetContainer.offset().left + ($("#td-container").innerWidth()) - this.flyoutWidth + 2;
            };
        }

        $(window).resize({
            sender: this
        }, function (eventObject) {
            $(eventObject.data.sender).metadata().labelOffsetLeft = $(eventObject.data.sender).metadata().calculateOffset();
        });

        $(this).metadata().labelOffsetLeft = $(this).metadata().calculateOffset();

    }

    function showOverlay() {
        $(triggerelement).addClass("td-nav-level2-label-hover");
        $(triggerelement).children("ul").offset({
            top: labelOffsetTop,
            left: $(triggerelement).metadata().labelOffsetLeft
        });
    }


    function hideOverlay() {

        $("> ul", triggerelement).offset({
            left: "-9999"
        });
        $(triggerelement).removeClass("td-nav-level2-label-hover");
    }

    $(this).mouseenter(function () {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);

        $(triggerelement).data("delay", setTimeout(function () {
            $("#td-nav-level2 > ul > li.td-nav-flyout > ul").offset({
                left: "-9999"
            });
            $("#td-nav-level2 > ul > li.td-nav-flyout").removeClass("td-nav-level2-label-hover");
            showOverlay();
        }, showDelay));

    }).mouseleave(function () {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);

        if ($(flyout).not(":visible")) {
            clearTimeout($(triggerelement).data("delay"));
        }

        hideDelayTimer = setTimeout(function () {
            hideDelayTimer = null;
            hideOverlay();
        }, hideDelay);
    });

    $(this).on('focusin', function () {
        showOverlay();
    });

    $(this).on('focusout', function () {
        hideOverlay();
    });

});

/*******************************************************/
/* Overlays
/*******************************************************/

$(".td-link-overlay").each(function () {
    var distance = 5;
    var time = 250;
    var showDelay = 150;
    var hideDelay = 500;
    var buffer = 4;
    var offsetxvar = 0;
    var offsetyvar = 0;

    var hideDelayTimer = null;
    var triggerelement = $(this);
    var triggertype = $(triggerelement).metadata().triggertype;
    var targetelement = $(triggerelement).metadata().targetelement;
    var targetelement = $(targetelement);

    var position = $(triggerelement).metadata().position;
    var opentext = $(triggerelement).metadata().opentext;
    var closetext = $(triggerelement).metadata().closetext;

    var triggericon = $(triggerelement).find(".td-triggericon");
    if ($(triggericon).length) {
        var alt = $(triggericon).html();
        alt = alt.replace("Expand", "Collapse");
        $(triggericon).text(alt);
    }

    $(targetelement).hide();
    $(triggerelement).prepend("<span class='td-accesstext'>" + opentext + "</span> ");

    $(targetelement).prepend("<a class='td-link-icon td-link-icon-close' href='#'>" + closetext + "</a>");
    var closebutton = $(targetelement).find(".td-link-icon-close");
    $(targetelement).append("<a class='td-link-icon td-link-icon-exit' href='#'>" + closetext + "</a>");
    var closebuttonhidden = $(targetelement).find(".td-link-icon-exit");

    function styleOverlay() {

        var triggerelementWidth = triggerelement.innerWidth();
        var triggerelementHeight = triggerelement.innerHeight();
        var triggerposition = $(triggerelement).position();
        offsetx = $(triggerelement).metadata().offsetx;
        offsety = $(triggerelement).metadata().offsety;
        if ((offsetx) != undefined) {
            offsetxvar = offsetx
        };
        if ((offsety) != undefined) {
            offsetyvar = offsety
        };

        var targetelementWidth = $(targetelement).outerWidth();
        var targetelementHeight = $(targetelement).outerHeight();

        if (position == "upwardleft") {
            $(targetelement).addClass("td-callout-gradient-ttb");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-upwardleft"></div>');
        }
        if (position == "upward") {
            $(targetelement).addClass("td-callout-gradient-ttb");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-upward"></div>');
        }
        if (position == "upwardright") {
            $(targetelement).addClass("td-callout-gradient-ttb");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-upwardright"></div>');
        }
        if (position == "rightwardup") {
            $(targetelement).addClass("td-callout-gradient-rtl");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-rightwardup"></div>');
        }
        if (position == "rightward") {
            $(targetelement).addClass("td-callout-gradient-rtl");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-rightward"></div>');
        }
        if (position == "rightwarddown") {
            $(targetelement).addClass("td-callout-gradient-rtl");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-rightwarddown"></div>');
        }
        if (position == "downwardright") {
            $(targetelement).addClass("");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-downwardright"></div>');
        }
        if (position == "downward") {
            $(targetelement).addClass("");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-downward"></div>');
        }
        if (position == "downwardleft") {
            $(targetelement).addClass("");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-downwardleft"></div>');
        }
        if (position == "leftwarddown") {
            $(targetelement).addClass("td-callout-gradient-ltr");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-leftwarddown"></div>');
        }
        if (position == "leftward") {
            $(targetelement).addClass("td-callout-gradient-ltr");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-leftward"></div>');
        }
        if (position == "leftwardup") {
            $(targetelement).addClass("td-callout-gradient-ltr");
            $(targetelement).prepend('<div class="td-callout-arrow td-callout-arrow-leftwardup"></div>');
        }

        if (position == "upwardleft") {
            overlayPositionLeft = -targetelementWidth + triggerelementWidth;
            overlayPositionTop = -targetelementHeight - 15 - buffer;
        };
        if (position == "upward") {
            overlayPositionLeft = -((targetelementWidth / 2) - (triggerelementWidth / 2));
            overlayPositionTop = -targetelementHeight - 15 - buffer;
        };
        if (position == "upwardright") {
            overlayPositionLeft = +0;
            overlayPositionTop = -targetelementHeight - 15 - buffer;
        };
        if (position == "rightwardup") {
            overlayPositionLeft = +triggerelementWidth + 11 + buffer;
            overlayPositionTop = +triggerelementHeight - targetelementHeight - 5;
        };
        if (position == "rightward") {
            overlayPositionLeft = +triggerelementWidth + 11 + buffer;
            overlayPositionTop = -((targetelementHeight / 2) - (triggerelementHeight / 2)) - 5;
        };
        if (position == "rightwarddown") {
            overlayPositionLeft = +triggerelementWidth + 11 + buffer;
            overlayPositionTop = -5;
        };
        if (position == "downwardright") {
            overlayPositionLeft = +0;
            overlayPositionTop = triggerelementHeight + 6 + buffer;
        };
        if (position == "downward") {
            overlayPositionLeft = -((targetelementWidth / 2) - (triggerelementWidth / 2));
            overlayPositionTop = +triggerelementHeight + 6 + buffer;
        };
        if (position == "downwardleft") {
            overlayPositionLeft = +triggerelementWidth - targetelementWidth;
            overlayPositionTop = triggerelementHeight + 6 + buffer;
        };
        if (position == "leftwarddown") {
            overlayPositionLeft = -targetelementWidth - 11 - buffer;
            overlayPositionTop = -5;
        };
        if (position == "leftward") {
            overlayPositionLeft = -targetelementWidth - 11 - buffer;
            overlayPositionTop = -((targetelementHeight / 2) - (triggerelementHeight / 2)) - 5;
        };
        if (position == "leftwardup") {
            overlayPositionLeft = -targetelementWidth - 11 - buffer;
            overlayPositionTop = -targetelementHeight + triggerelementHeight - 5;
        };


        $(targetelement).css({
            top: triggerposition.top + parseInt(offsetyvar) + distance + overlayPositionTop + 'px',
            left: triggerposition.left + parseInt(offsetxvar) + overlayPositionLeft + 'px'
        })


        $(triggericon).addClass("td-triggericon-expanded");

    }

    function unstyleOverlay() {
        $(triggericon).removeClass("td-triggericon-expanded");
        $(targetelement).removeClass("td-callout-gradient-ttb");
        $(targetelement).removeClass("td-callout-gradient-ltr");
        $(targetelement).removeClass("td-callout-gradient-rtl");
        $(targetelement).find(".td-callout-arrow").remove();
    }

    function showOverlay() {
        styleOverlay();

        targetelement.css({
            display: 'block'
        });
        $(targetelement).animate({
            opacity: 1
        });

    }

    function hideOverlay() {
        $(".td-overlay").css({
            display: 'none',
            opacity: 0
        });
        unstyleOverlay();
        forcedOpen = false;
    }

    $(document).click(function () {
        hideOverlay();
    });

    $([targetelement.get(0)]).click(function (e) {
        e.stopPropagation();
    });

    $(closebutton).click(function () {
        hideOverlay();
        $(triggerelement).focus();
        return false;
    });

    $(closebuttonhidden).focus(function () {
        hideOverlay();
        $(triggerelement).focus();
    });

    function isTouchDevice() {
       var el = document.createElement('div');
       el.setAttribute('ongesturestart', 'return;');
       if(typeof el.ongesturestart == "function"){
          return true;
       }else {
          return false
       }
    }

    if ((triggertype == 'mouseover') && (!(isTouchDevice()))) {
        $([triggerelement.get(0), targetelement.get(0)]).mouseenter(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);

            $(triggerelement).data("delay", setTimeout(function () {
                showOverlay();
            }, showDelay));

        }).mouseleave(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);

            if ($(targetelement).not(":visible")) {
                clearTimeout($(triggerelement).data("delay"));
            }

            hideDelayTimer = setTimeout(function () {
                hideDelayTimer = null;
                hideOverlay();
            }, hideDelay);
        });
    };

    if ((triggertype == 'click') || (triggertype == 'mouseover')) {

        $([triggerelement.get(0)]).click(function () {

            if ($(targetelement).css('display') == 'none') {
                $(".td-overlay").css({
                    display: 'none',
                    opacity: 0
                });
                showOverlay();
                $(targetelement).find(".td-link-icon-close").focus();
                return false;
            } else {
                if ((triggertype != 'mouseover')) {
                    hideOverlay();
                    $(triggerelement).focus();
                }
                return false;
            }

        })
    };


});


/*******************************************************/
/* Modal Windows
/*******************************************************/

$(".td-link-modal").each(function () {

	var triggerelement = $(this);
    var targetelement = $(triggerelement).metadata().targetelement;
    var truemodal = $(triggerelement).metadata().truemodal;
    var opentext = $(triggerelement).metadata().opentext;
    var closetext = $(triggerelement).metadata().closetext;
    var endtext = $(triggerelement).metadata().endtext;
    var targetelementID = targetelement.substring(1);
    
    if (opentext != null) {
    	$(triggerelement).append("<span class='td-accesstext' id='aria-" + targetelementID + "'>" + opentext + "</span> ");
    }
	$(triggerelement).attr("title","");
	$(triggerelement).attr("aria-describedby", "aria-" + targetelementID);

	function applyAnchors() {
        if (!(truemodal)) {
            $(targetelement).prepend("<a class='td-link-icon td-link-icon-close' href='#'>" + closetext + "</a>");
            $(targetelement).prepend("<a class='td-link-icon td-link-icon-prefauxclose' tabindex='0'></a>");
            $(targetelement).append("<a class='td-link-icon td-link-icon-exit' href='#'>" + closetext + "</a>");
        }
        if (truemodal) {
            $(targetelement).prepend("<a class='td-link-modal-top' href='#'>Top of window anchor</a>");
            $(targetelement).prepend("<a class='td-link-modal-top-capture' href='#'>Window starts anchor</a>");
            $(targetelement).append("<a class='td-link-modal-bottom' href='#'>Bottom of window anchor</a>");
            $(targetelement).append("<a class='td-link-modal-bottom-capture' href='#'>Window ends anchor</a>");
        }
    }

    applyAnchors();

});

$(".td-link-modal").on("click", function(e){

    var triggerelement = $(this);
    var targetelement = $(triggerelement).metadata().targetelement;
    var truemodal = $(triggerelement).metadata().truemodal;

    function showModal() {
        $(document.body).append($(targetelement).detach());

        $.fn.center = function () {
            this.css("position", "absolute");
            this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop()) + "px");
            this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
            return this;
        }

        if (!(truemodal)) {
            $("body").prepend("<div class='td-modal-mask td-modal-mask-escapable'>&nbsp;</div>");
        } else {
            $("body").prepend("<div class='td-modal-mask'>&nbsp;</div>");
        }
        $(".td-modal-mask").css("height", $(document).height() + "px");

        $(targetelement).center();
        $(targetelement).show();

        if (!(truemodal)) {
            $(targetelement).find(".td-link-icon-close").focus();
        }
        if (truemodal) {
            $(targetelement).find(".td-link-modal-top").focus();
        }

        $(targetelement).addClass("td-modal-active");

    }

    function hideModal() {

        $(targetelement).removeClass("td-modal-active");
        $(targetelement).hide();
        $(".td-modal-mask").remove();
        $(triggerelement).focus();

    }


    if (!(truemodal)) {

		$(targetelement).on("click", ".td-link-icon-close, .td-link-icon-exit", function(e){
		  	hideModal();
		  	return false;
		});

		$(targetelement).on("focus", ".td-link-icon-exit, .td-link-icon-prefauxclose", function(e){
		  	hideModal();
		});

        $('body').on("click", ".td-modal-mask-escapable", function (e) {
             hideModal();
        });

    }

    if (truemodal) {
        $(targetelement).on("click", ".td-link-closemodal", function (e) {
            hideModal();
            return false;
        });

        $(targetelement).on("focus", ".td-link-modal-top-capture", function (e) {
            $(".td-link-modal-bottom").focus();
        });
        $(targetelement).on("focus", ".td-link-modal-bottom-capture", function (e) {
            $(".td-link-modal-top").focus();
        });
        $(targetelement).on("click", ".td-link-modal-top", function (e) {
            return false;
        });
        $('body').on("click", ".td-modal-mask", function (e) {
            $(".td-link-modal-top").focus();
            return false;
        });

    }


     /* Show/hide modal on trigger click */
     if (!$(targetelement).hasClass("td-modal-active")) {
        showModal();
   	 }

    return false;

});


/*******************************************************/
/* Row Lists
/*******************************************************/

$("ul.td-rowlist li > :first-child").addClass("first-child");
$("ul.td-rowlist li > :last-child").addClass("last-child");

$("ul.td-rowlist li:first-child").each(function() {
    $(this).prepend("<div class='td-rowlist-divider td-rowlist-divider-first'>");
});

$("ul.td-rowlist li").each(function() {
    $(this).append("<div class='td-rowlist-divider'>");
});
$("img.td-rowlist-icon").each(function() {
    var iconHeight = $(this).height();
    iconHeight = 0 - (iconHeight/2);
    $(this).css("margin-top", iconHeight);
});
$("ul.td-rowlist li").has(".td-rowlist-icon-right").each(function() {
    var padding = ($(this).find("img.td-rowlist-icon-right").width()) + 24;
    $(this).css("padding-right", padding);
});
$("ul.td-rowlist li").has(".td-rowlist-icon-left").each(function() {
    var padding = ($(this).find("img.td-rowlist-icon-left").width()) + 24;
    $(this).css("padding-left", padding);
});









});