/**
 *	This file is used for any js work that is global to all sections
 *
 */


/**
 *  Text Size Component
 *
 */
(function() {

	dojo.addOnLoad(function() {
		
		// If there is a cookie set for Text Size, read it, and reset the text size on page load.
		var textSizeCookieValue = dojo.cookie("textSizeCookie"),
			splitTs,
			myMessagesInfoContainer = dojo.byId("myMessagesInfoContainer"),
			messageCentre = dojo.byId("messageCentre"),
			messageCenterLink = dojo.byId("myMessages"),
			messageCenterHoverState = dojo.byId("messageCenterHoverState");
			
		
		
		if (textSizeCookieValue) {
			// Split the cookie into its two parts
			splitTs = textSizeCookieValue.split(",");
			// Change the font size
			_changeFontSize(splitTs[0]);
			// Update the Text Size Menu
			dojo.query("#textSize a.tsSelected").removeClass("tsSelected");
			dojo.query(splitTs[1]).addClass("tsSelected");
		}

		dojo.query("#textSize a").forEach(function(textSize) {
			dojo.connect(textSize, "onclick", _setDefaultFontSize);
		});
		
		// Hnadle My Messages tooltip
		if (myMessagesInfoContainer) {
			
			dojo.place('<div class="myMessagesInfoContainerTop"></div>', messageCenterHoverState, "before");
			dojo.place('<div class="myMessagesInfoContainerBottom"></div>', messageCenterHoverState, "after");
			
			dojo.connect(messageCentre, "onmouseenter", function(event) {
				dojo.removeClass(myMessagesInfoContainer, "hide");
				dojo.addClass(messageCenterLink, "showMessages");
			});
			dojo.connect(messageCentre, "onmouseleave", function(event) {
				dojo.addClass(myMessagesInfoContainer, "hide");
				dojo.removeClass(messageCenterLink, "showMessages");
			});
		}
		
	}); // END addOnLoad
	
	/**
	 * Text Resizing Function: Sets the font size to one of three classes and updates the text size menu
	 *
	 */
	function _setDefaultFontSize(event) {
		event.preventDefault();
		
		var cTarget = event.currentTarget,
		currentTS = new dojo.NodeList(cTarget),
		cookieValueTS;
		
		
		// Change the font size, and prep the cookie value
		switch (currentTS.attr("id")[0]) {
			case "tsLarge":
				_changeFontSize("large");
				cookieValueTS="large,#tsLarge";
				break;
			case "tsSmall":
				_changeFontSize("small");
				cookieValueTS="small,#tsSmall";
				break;
			default:
				_changeFontSize("medium");
				cookieValueTS="medium,#tsMedium";
		}

		// Update the Text Size menu
		if (!dojo.hasClass(cTarget, "tsSelected")) {
			dojo.query("#textSize a.tsSelected").removeClass("tsSelected");
			currentTS.addClass("tsSelected");
		}
		
		// Set the cookie
		dojo.cookie("textSizeCookie",cookieValueTS,{expires: 30, path: '/'});
		
	}

	function _changeFontSize(size) {
		var rootDiv = dojo.byId("root_div");

		if (dojo.hasClass(rootDiv, "small")) {
			dojo.removeClass(rootDiv, "small");
		} else if (dojo.hasClass(rootDiv, "medium")) {
			dojo.removeClass(rootDiv, "medium");
		} else if (dojo.hasClass(rootDiv, "large")) {
			dojo.removeClass(rootDiv, "large");
		}

		dojo.addClass(rootDiv, size);
		dojo.publish("onTextResize", [{"size": size}]);
		
	}
	
})();

/**
 *  Bind Print Buttons
 *
 */
(function() {
	
	dojo.addOnLoad(function() {
		
		dojo.query("a.print").forEach(function(printBtn) {
			dojo.connect(printBtn, "onclick", _print);
		});
		
		function _print(event) {
			window.print();
		}
		
	}); // END addOnLoad
	
})();


/**
 *  My Shortcuts edit
 *
 */
 /*
(function() {
	dojo.addOnLoad(function() {
		var myShortcuts = dojo.byId("shortCutsBox");
		
		function editState() {
			// Hide edit button and show save/cancel
			dojo.addClass(editBtn, "hide");
			dojo.removeClass(myShortcutsSaveCancelContainer, "hide");
			
			// Show remove btn
			dojo.query("li", myShortcuts).addClass("removeBt");
			
			// Disable add page btn
			dojo.addClass(myFavAddThisPageBtn, "disabled");
		}
		
		function handleCancel() {
			// Show edit button and hide save/cancel
			dojo.removeClass(editBtn, "hide");
			dojo.addClass(myShortcutsSaveCancelContainer, "hide");
			
			// Revert back to old state
			dojo.query("li", myShortcuts).removeClass("removeBt").removeClass("hide");			
			
			// Enable add page btn
			dojo.removeClass(myFavAddThisPageBtn, "disabled");
		}
		
		function handleUpdate() {
			
			var currentState = [];
			var messages = BMOContent.pageErrorMessages.myShortcuts;
			
			dojo.query("li.hide", myShortcuts).forEach(function(myShortcut) {
				currentState.push(myShortcut.id);
			});
			
			dojo.xhrPost ({
				url: dojo.attr(myShortcutsSaveBtn, "href"),
				handleAs: "json",
				content: {"removedShortcuts": currentState.join(", ")},
				load: function (response, ioArgs) {
				
					if (response.success) {
						dojo.query("li.hide", myShortcuts).forEach(function(myShortcut) {
							dojo.destroy(myShortcut);
						});
						handleCancel();
					} else {
						// Show error message
						BMO.MessageManager.add(messages.errorRemoving, BMO.MessageManager.types.ERROR);
						
						dojo.query("li.hide", myShortcuts).forEach(function(myShortcut) {
							dojo.removeClass(myShortcut, "hide");
						});
					}

					return response; // Always return the response back (required by Dojo)
				},
				error: function (response, ioArgs) { // There was an error with loading
					// Show error message
					BMO.MessageManager.add(messages.errorRemoving, BMO.MessageManager.types.ERROR);
					
					dojo.query("li.hide", myShortcuts).forEach(function(myShortcut) {
						dojo.removeClass(myShortcut, "hidden");
					});
					return response;
				}
			});
		}	
		
		if (myShortcuts) {
			var editBtn = dojo.byId("myShortcutsEditBtn");
			var myShortcutsEditBtn = dojo.byId("myShortcutsEditBtn");
			var myShortcutsSaveCancelContainer = dojo.byId("myShortcutsSaveCancelContainer");
			var myShortcutsSaveBtn = dojo.byId("myShortcutsSaveBtn");
			var myShortcutsCancelBtn = dojo.byId("myShortcutsCancelBtn");
			var myFavAddThisPageBtn = dojo.byId("myFavAddThisPageBtn");
			
			if (editBtn) { 
				dojo.connect(editBtn, "onclick", function (event) {
					event.preventDefault();
					editState();
					dojo.behavior.apply();
				});
				
				dojo.connect(myShortcutsCancelBtn, "onclick", function (event) {
					event.preventDefault();
					handleCancel();
				});
				
				dojo.connect(myShortcutsSaveBtn, "onclick", function (event) {
					event.preventDefault();
					handleUpdate();
				});
				
				dojo.connect(myFavAddThisPageBtn, "onclick", function (event) {
					if (dojo.hasClass(this, "disabled")) {
						event.preventDefault();
					}else{
					  //if ()  // this current page is shortcut eligible
					  handleUpdate();
					
					}
				});
				
				removeShortcut = {
					".removeBt" :{
						onclick : function(evt) {
							evt.preventDefault();
							dojo.query(this).addClass("hide");
						}
					}
				}

				dojo.behavior.add(removeShortcut);			
			}
		}
	});
}());

*/
/**
 *  Help center overlay/modal
 *
 */
(function() {
	var helpCenterBt,
		helpCenterIframe;
		
	dojo.addOnLoad(function() {	
		helpCenterBt = dojo.byId("helpCentre");
		helpCenterLink = dojo.byId("helpCentreLink");
		helpCenterLink1 = dojo.byId("helpCentreLink1");
		var unavailableLink = dojo.byId("unavailableLink");
		
		//Added for Handle ESC Keypress
			require(["dojo/on",
			 "dojo/keys",
			 "dojo/domReady!"],
			function(on, keys, dom){
			  on(document, "keyup", function(event){
				   if(event.keyCode==27)	 
					{  
					   hcDialog.hide(); 	
					}
			  });
			});
		if (helpCenterBt || helpCenterLink || helpCenterLink1 || unavailableLink) {
			BMO.helpCentre.isClicked = 0;
			helpCenterIframe = '<iframe id="helpCenterIframeId" name="helpCenterIframeId" style="border: none; width: 855px; height: 825px;" frameBorder="0"></iframe>';
			
			var hcDialog = new bmo.Dialog({
				content: helpCenterIframe,
				draggable: false,
				autofocus: false
			});
			
			dojo.connect(hcDialog, "onShow", function() {
				dojo.place("<div id='viewFullHC'><a target='_blank' href='" + BMO.helpCentre.url + "'></a></div>", dojo.query(".dijitDialogCloseIcon")[0], "before");
				
				dojo.connect(dojo.byId("viewFullHC"), "onclick", function(event) {
					hcDialog.hide();
				});
			});
			
			dojo.connect(hcDialog, "onHide", function() {
				dojo.destroy(dojo.byId("viewFullHC"));
			});

			if (unavailableLink){
				dojo.query(".unavailableLinks").onclick(function(evt){
					if (BMO.helpCentre.isClicked == 1) {
						return false;
					} else {
						BMO.helpCentre.isClicked = 1;
					}
					evt.preventDefault();
					dojo.byId("helpCenterIframeId").src = BMO.helpCentre.url;
					hcDialog.show();
					BMO.helpCentre.isClicked = 0;
				});
			}
			
			if (helpCenterBt){
				dojo.connect(helpCenterBt, "onclick", function(event) {
					if (BMO.helpCentre.isClicked == 1) {
						alert("Double clicked Help Centre button!");
						return false;
					} else {
						BMO.helpCentre.isClicked = 1;
					}
					event.preventDefault();
					dojo.byId("helpCenterIframeId").src = BMO.helpCentre.url;
					hcDialog.show();
					BMO.helpCentre.isClicked = 0;
				});
			}
			
			if (helpCenterLink){
				dojo.connect(helpCenterLink, "onclick", function(event) {
					if (BMO.helpCentre.isClicked == 1) {
						return false;
					} else {
						BMO.helpCentre.isClicked = 1;
					}
					event.preventDefault();
					dojo.byId("helpCenterIframeId").src = BMO.helpCentre.url;
					hcDialog.show();
					BMO.helpCentre.isClicked = 0;
				});
			}
			if (helpCenterLink1){
				dojo.connect(helpCenterLink1, "onclick", function(event) {
					if (BMO.helpCentre.isClicked == 1) {
						return false;
					} else {
						BMO.helpCentre.isClicked = 1;
					}
					event.preventDefault();
					dojo.byId("helpCenterIframeId").src = BMO.helpCentre.url;
					hcDialog.show();
					BMO.helpCentre.isClicked = 0;
				});
			}
		}

	});
})();

/**
 *  global validation check of all fields on form submit
 *
 */
(function() {
	dojo.addOnLoad(function() {
		// Validate on click of any submit button
		dojo.query("form").forEach(function(item){
			myForm = dijit.getEnclosingWidget(item);
			dojo.connect(myForm, "onSubmit", function(e){
				 this.validate();
			});
		});
	});
})();

/* 
 * This method:
 * 	. Create form dynamically and use post method
 * 	. Append context path and appType to the action param (if it don't have it)
 *	. Append params dynamically
 * 
 */
function goto(action, params) {
	// The action don't includes the context path and app type
	var form = document.createElement("FORM");
	document.body.appendChild(form);
	form.method = "POST";
	
	// Get the context path and app type from the path varable
	// var path="/onlinebanking/OLB/tra/acc/mpl";
	var contextPath = path.substring(0, path.indexOf('/', 1));
	if(action.indexOf(contextPath) == 0) {
		// The action param contains contextPath already
		form.action = action;
	} else {
		var appType = path.substring(contextPath.length, path.indexOf('/', contextPath.length + 1));
		form.action = contextPath + appType + action;
	}
	
	// Append params
	if(params) {
		for(param in params) {
			var element = document.createElement("input");
			element.setAttribute("type", "hidden");
			element.setAttribute("name", param);
			element.setAttribute("value", params[param]);
			
			form.appendChild(element);
		}
	}
	
	// Submit the form
	form.submit();
};


function gotoRIO(action) {
      
      var form = document.createElement("FORM");
      document.body.appendChild(form);
      form.method = "GET";
      form.name = "rioForm";
      form.id = "rioForm";
      var exists = action.indexOf("?") > -1;
      var params = "";

      if(exists){
            params = getUrlParams(action);
      }
      
      form.action = action;
      if(params) {
            for(param in params) {
                  var element = document.createElement("input");
                  element.setAttribute("type", "hidden");
                  element.setAttribute("name", param);
                  element.setAttribute("value", params[param]);
                  
                  form.appendChild(element);
            }
      }
      
      
      form.submit();
};

  function getUrlParams(link) {

   map = {};

  var params = link.substr(link.indexOf("?")+ 1);

   if (params.length > 0 ) {

  params = '&' + params;

  params = params.split("&");

  for (var i = 0; i < params.length; i++) {

   temp = params[i].split("=");

  map[temp[0]] = temp[1];

 }

 }

 return map;

 }

/*
 * Fixed wo#2918
 * Override dojo function dijit.isTabNavigable which is in /includes/dojo/dijit/_base/manager.js
 */
dijit.isTabNavigable = function(/*Element*/elem){
	// summary:
	//		Tests if an element is tab-navigable

	// TODO: convert (and rename method) to return effectivite tabIndex; will save time in _getTabNavigable()
	if(dojo.attr(elem, "disabled")){
		return false;
	}else if(dojo.hasAttr(elem, "tabIndex")){
		// Explicit tab index setting
		return dojo.attr(elem, "tabIndex") >= 0; // boolean
	}else{
		// No explicit tabIndex setting, need to investigate node type
		switch(elem.nodeName.toLowerCase()){
			case "a":
				// An <a> w/out a tabindex is only navigable if it has an href
				return dojo.hasAttr(elem, "href");
			case "area":
			case "button":
			case "input":
			case "object":
			case "select":
			case "textarea":
				// These are navigable by default
				return true;
			case "iframe":
				// If it's an editor <iframe> then it's tab navigable.
				if(dojo.isMoz){
					return elem.contentDocument.designMode == "on";
				}else if(dojo.isWebKit){
					var doc = elem.contentDocument,
						body = doc && doc.body;
					return body && body.contentEditable == 'true';
				}else{
					try {
						doc = elem.contentWindow.document;
						body = doc && doc.body;
						return body && body.firstChild && body.firstChild.contentEditable == 'true';
					} catch (err) {
						return false;
					}
				}
			default:
				return elem.contentEditable == 'true';
		}
	}
};
