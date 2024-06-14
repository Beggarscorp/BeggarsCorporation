/*******************************************************/
/* Modal Window
/*******************************************************/

$(document).ready(function(){
		
		var isInTree = function(element, set){
			var inTree = false;
			set.each(function(){
				if($(this)[0] == element[0]){
					inTree = true;
				}
			});
			return inTree;
		};

		var isRelated = function(element, set){
			var related = false;
			set.each(function(){
				if($(this).parent()[0] == element.parent()[0]){
					related = true;
				}
			});
			return related;
		};

		var hideNonRelated = function(hide){
			var modalParents = $(targetelement).parents();
				
			modalParents.each(function(){
				var children = $(this).children();
				children.each(function(){
					var next = $(this);
					if(!isInTree(next, modalParents) && isRelated(next, modalParents)){
						if(hide){
							next.attr('aria-hidden', 'true');
						}else{
							next.removeAttr('aria-hidden');
						}
					}
				});
			});
		};
	
    	var targetelement = "#modalWindow";
    	if(window.modalWindowId != "")
    	{
    		targetelement = "#"+ window.modalWindowId;
    	}
    	
		var closebutton = $(targetelement+' .rbc-modalwindow-close');
		var modalWindow = $(targetelement);
		var modalWindowTitleObj = $(targetelement + ' #rbc-dialog-title');
		var modalWindowTitleObj2 = $(targetelement);
		var oldFocusElement;
		
        window.showModalWindow = function() {
			//Hide the scroll bar while the modal window is visible
			$(document.body).css('overflow', 'hidden');
			
			//grab the element that currently has focus so we can return the user there after the modal is closed.
			oldFocusElement = document.activeElement;
			
			hideNonRelated(true);
			
			//set the z-index to make sure th emodal appears above all other elements
			$(targetelement).css('z-index', '999998');
			$(targetelement).fadeIn(200, function(){
				$('div.rbc-modalwindow-inner2').find('span').first().focus();
				$('iframe').not('#interceptModalIFrame').css('display', 'none');
				
				// Sets the tabindex to -1 to all elements behind the modal.
				$('a,area,button,input,object,select,textarea').not('#modalWindowCloseButton').attr('tabindex', '-1');			
				
				// Sets the tabindex of anchors to -1
				$('a[name]').attr('tabindex', '-1');
			});
			$('body').prepend('<div class="rbc-modalwindow-mask" style="z-index: 999997;">&nbsp;</div>');
			$(".rbc-modalwindow-mask").stop().animate({
				opacity: .5
				}, 100, function() {
			});

			$(targetelement).attr('aria-hidden', 'false');
       	 };
		 
		 
		 window.hideModalWindow = function() {
		 	
			$(".rbc-modalwindow-mask").stop().animate({
				opacity: 0
				}, 100, function() {
				$(".rbc-modalwindow-mask").remove();
			});
			
			//Reset the z-index of the modal window when the window is hidden.
			$(targetelement).css('z-index', '0');
			
			$(targetelement).attr('aria-hidden', 'true').fadeOut(200, function(){
				//Allow the scrollbar to be visible when the modal is closed
				$(document.body).css('overflow', 'visible');
				if(oldFocusElement !== null || typeof oldFocusElement !== 'undefined' && typeof oldFocusElement.focus !== 'undefined'){
					oldFocusElement.focus();
				}
				$('iframe').not('#interceptModalIFrame').css('display', 'inline');
				
				//Resets tabindex to all elements to default after modal is closed
				$('a,area,button,input,object,select,textarea').not('#modalWindowCloseButton').attr('tabindex', '0');
				
				hideNonRelated(false);
			});
		};
	
		$('body').click(function(event) {
			if ((!$(event.target).closest('.rbc-modalwindow-inner2').length) && ($(targetelement).css('display') == 'block')) {
				hideModalWindow();
			};
		});
		
		$(closebutton).click(function(){
			hideModalWindow();
			return false;
		});

	});