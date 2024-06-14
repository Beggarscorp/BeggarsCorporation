





if (typeof jQuery !== "undefined") {

	

(function($){
	$.extend({
		options:          {},
		promoShowPages:   [],
		autoPlayInterval: null,
		promoShow: function(){
			var options = {
				
				promoShowAutoPlay:                true,					
				promoShowCurrentPage:             1,					
				promoShowFadeSpeed:          	  2000,					
				promoShowPageDuration:      	  4000,					
				
				promoShowElement:            	  "promoShow",			
				promoShowPageClass:          	  "promoShowSlides",  	
				
				promoShowUtilitiesClass:          "promoShowUtilities",	
				promoShowControlsClass:           "promoShowControls",  
				promoShowControlsItemPrefix:      "promoControl",		
				promoShowControlPauseClass:       "promoControlPause",	
				promoShowControlPlayClass:        "promoControlPlay",	
				promoShowPlayBtnActiveClass:      "current",			
				promoShowNavPagesClass:           "promoShowPages",		
				promoShowNavItemPrefix:           "promoShow",			
				promoShowNavItemSelected:         "current",			
				
				promoShowUseTracking:              false,           	  
				promoShowTrackingDebug:            false,           	
				promoShowTrackingPage:             "",	           		
				promoShowTrackingClickPageSuffix:  "(nav page clicked)",
				promoShowTrackingLearnMoreSuffix:  "(learn more)",
				promoShowTrackingMainButtonSuffix: "(page clicked)"
			};
			$.extend(options, this._getOverriddenOptions(options));
			if(typeof options.promoShowAutoPlay == "string"){
				options.promoShowAutoPlay = (options.promoShowAutoPlay === "true") ? true : false;
			}
			this.options = options;
			
			this.promoShowPages = $("." + options.promoShowPageClass + ">li");
			
			$(this.promoShowPages[0]).addClass(options.promoShowNavItemSelected);
			 
			this.createNav();
			
			if(options.promoShowUseTracking){
				this.overridePromoShowPageLinks();
            }
			
			if(options.promoShowAutoPlay && this.promoShowPages.length){
                this.startAutoPlay();
            }
		},
		
		createNav: function(){
			var currPromoShow = this;
			
			var controlsDiv = $("<div></div>");
			controlsDiv.attr("class", this.options.promoShowUtilitiesClass);
			var controlsNav = $("<ul></ul>");
			controlsNav.attr("class", this.options.promoShowControlsClass);
			var playBtn = $("<li tabindex=\"0\" role=\"button\"></li>");
			playBtn.text("play");
			playBtn.addClass(this.options.promoShowControlsItemPrefix + "1");
			playBtn.addClass(this.options.promoShowControlPlayClass);
			if(this.options.promoShowAutoPlay){
				playBtn.addClass(this.options.promoShowPlayBtnActiveClass);
			}
			playBtn.on("click", function(e){ currPromoShow.toggleAutoPlay(e); });
			playBtn.on("keypress", function(e) {
	       		if ((e.which === 13) || (e.which === 32)) {
	           		currPromoShow.toggleAutoPlay(e);
	       		}
			});
			var pauseBtn = $("<li tabindex=\"0\" role=\"button\"></li>");
			pauseBtn.text("pause");
			pauseBtn.addClass(this.options.promoShowControlsItemPrefix + "2");
			pauseBtn.addClass(this.options.promoShowControlPauseClass);
			if(!this.options.promoShowAutoPlay){
				pauseBtn.addClass(this.options.promoShowPlayBtnActiveClass);
			}
			pauseBtn.on("click", function(e){ currPromoShow.toggleAutoPlay(e); });
			pauseBtn.on("keypress", function(e) {
	       		if ((e.which === 13) || (e.which === 32)) {
	           		currPromoShow.toggleAutoPlay(e);
	       		}
			});
			controlsNav.append(playBtn);
			controlsNav.append(pauseBtn);
			
			var pageNav = $("<ul></ul>");
			pageNav.attr("class", this.options.promoShowNavPagesClass);
			
			for(var i=1; i<=this.promoShowPages.length; i++){
				var imageID = "PromoImage" + i;
				$(this.promoShowPages[i-1]).find("img").attr("id", imageID);
				var item = $("<li tabindex=\"0\" role=\"button\" aria-current=\"false\"></li>");
				item.addClass(this.options.promoShowNavItemPrefix + i).attr("aria-labelledby", imageID);
				if(this.options.promoShowCurrentPage == i){
					item.addClass(this.options.promoShowNavItemSelected).attr("aria-current", "true");
                }
				item.on("click", {page: i},  function(e){
                	e.data.isFromUser = true; 
                    currPromoShow.showPage(e); 
                });
                item.on("keypress", function(e) {
		       		if ((e.which === 13) || (e.which === 32)) {
		           		$(this).click();
		       		}
				});
				item.text(i);
				pageNav.append(item);
			};
			
			controlsDiv.append(controlsNav);
			controlsDiv.append(pageNav);
			$("." + this.options.promoShowElement).prepend(controlsDiv);
		},
		
		showPage: function(e){
			var page = e.data.page;
			var opts = this.options;
			if(page == opts.promoShowCurrentPage){
				return;
            }
			this.stopAutoPlay();
			this._updateNavClasses(opts, opts.promoShowCurrentPage, page);
			this._updateAriaCurrent(opts.promoShowCurrentPage, page);
			this.options.promoShowCurrentPage = page;
		},
		
		showNextPage: function(){
			var opts = this.options;
			var currPage = opts.promoShowCurrentPage;
			var nextPage = (currPage % this.promoShowPages.length) + 1;
			this._updateNavClasses(opts, currPage, nextPage);
			this._updateAriaCurrent(currPage, nextPage);
			this.options.promoShowCurrentPage = nextPage;
		},
		startAutoPlay: function(){
			$("." + this.options.promoShowControlPauseClass).removeClass(this.options.promoShowPlayBtnActiveClass);
			$("." + this.options.promoShowControlPlayClass).addClass(this.options.promoShowPlayBtnActiveClass);
			this.options.promoShowAutoPlay = true;
			var currPromoShow = this;
			this.options.promoShowAutoPlayInterval = setInterval(function(){ currPromoShow.showNextPage(); }, this.options.promoShowPageDuration);
		},
		stopAutoPlay: function(){
			$("." + this.options.promoShowControlPauseClass).addClass(this.options.promoShowPlayBtnActiveClass);
			$("." + this.options.promoShowControlPlayClass).removeClass(this.options.promoShowPlayBtnActiveClass);
			window.clearInterval(this.options.promoShowAutoPlayInterval);
			this.options.promoShowAutoPlay = false;
		},
		toggleAutoPlay: function(){
			if(this.options.promoShowAutoPlay){
				this.stopAutoPlay();
			} else {
				
				this.showNextPage();
				this.startAutoPlay();
			}
		},
		overridePromoShowPageLinks: function(){
			var numPages = this.promoShowPages.length;
			var opts = this.options;            
		},                                        
		_getImageAltContent: function(page, opts){
			var images = $("." + opts.promoShowPageClass + page + " img");
			return $(images[0]).attr("alt");
		},
		_updateNavClasses: function(opts, from, to){
			$(this.promoShowPages[from-1]).fadeOut(parseInt(opts.promoShowFadeSpeed));
			$("." + opts.promoShowNavItemPrefix + " ." + opts.promoShowNavItemPrefix + from).removeClass(opts.promoShowNavItemSelected);
			$(this.promoShowPages[to-1]).fadeIn(parseInt(opts.promoShowFadeSpeed));
			$("." + opts.promoShowNavItemPrefix + " ." + opts.promoShowNavItemPrefix + to).addClass(opts.promoShowNavItemSelected);
		},
		_updateAriaCurrent: function(from, to){
			var navItems = $("." + this.options.promoShowNavPagesClass).children("li");
			$(navItems[from-1]).attr("aria-current", "false");
			$(navItems[to-1]).attr("aria-current", "true");
		},
		_cleanTrackingStr: function(str){
			return str.replace(/[^a-zA-Z()+,-.0-9?@_{}\[\] ]/g, "");
		},
		_getOverriddenOptions: function(opts){
			var overriddenOptions = {};
			$.each(opts, function(k, v){
				if($("#" + k).length){
					overriddenOptions[k] = $("#" + k).val();
				}
			});
			return overriddenOptions;
		}
	});
})(jQuery);

    
if (typeof jQuery !== "undefined") {
	jQuery(function(){
		jQuery.promoShow({});
    });
}

}


/*cu custom scripts*/
