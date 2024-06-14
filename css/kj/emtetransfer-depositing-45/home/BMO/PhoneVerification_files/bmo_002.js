/**
 *	This file is used for any global functions, components, reg exp, etc...
 *
 */

require(["dojo/parser","dojo/behavior","dojo/NodeList-traverse","dojo/NodeList-manipulate","bmo/EditableTooltip",
"bmo/Dialog","bmo/PrintableDialog","dijit/Dialog","dijit/form/Form","dijit/form/ValidationTextBox",
"dijit/form/DateTextBox","dijit/form/CurrencyTextBox","dijit/form/NumberTextBox","dojo/currency",
"dijit/form/SimpleTextarea","dijit/form/CheckBox","dijit/form/Select","dijit/form/Button","dijit/form/ComboBox",
"dijit/form/FilteringSelect","dojo/data/ItemFileReadStore","dojo/cookie","dojo/fx","dijit/layout/TabContainer",
"dijit/layout/ContentPane","dojo/date","dojo/date/locale","dojox/widget/Standby"]);

/**
 *  BMO Namespace
 *  Define all global components, reg exp. etc.. in this one-off object.
 *  
 */

var BMO = {
	
	/**
	 *  Init function used mostly on page load but can be called whenever you need to reset.
	 *
	 */
	init : function() {
		
		// init MessageManager
		BMO.MessageManager.init();
		
		// When the close button is clicked, remove its container.  
		// To do this, add class "closeBt" to the button's anchor and add class "closeBtContainer" to its container.	
		dojo.query(".closeBt").forEach(function(closeBt) {
			dojo.connect(closeBt, "onclick", BMO.handleCloseBt);
		});

		// Dynamically hide Toggle content (".morePanel") and toggle it open/close it when ".toggleContent" is clicked
		// both ".toggleContent" and ".morePanel" must live inside of (".toggleContainer")
		dojo.query(".morePanel:not(.visible)").style("display","none");
		dojo.query(".toggleContent").forEach(function(toggle) {
			dojo.connect(toggle, "onclick", BMO._handleToggle);
		});
		
		// Find all filter select fields and disable validation
		dojo.query(".filterSelect").forEach(function(node) {
			// The Payee Name in Add Payee page requires the validation
			var filter = dijit.byNode(node);
			if(filter.id != 'ptPayeeName' && filter.id != 'epostMailerName' && filter.id != 'filterPayee') {
				filter.validate = function (isFocused) {
					return true;
				}
			}
		});


		dojo.query(".rbox").forEach(function(rbox, index, nodeList) {
			BMO.makeRound(rbox);
		});
		
		BMO.equalizeHeights();
		
		BMO.selectAllBoxes();
		
		dojo.query(".ptDate, .etHasCal").forEach(function(target){
			BMO.DateTextBoxFormat(target);
		});
		
		dojo.query(".ptCalendar").forEach(function(node, index, nodelist){
			_textField = nodelist.prev();
			dojo.connect(node, "onclick", function(event){
				event.preventDefault();
				dijit.focus(_textField[index]);
				var dateTextBoxWidget = dijit.getEnclosingWidget(_textField[index]);
				if (dateTextBoxWidget == null){
					dateTextBoxWidget = dijit.byId(_textField[index].id);
				}
				if(dateTextBoxWidget != null){
					dateTextBoxWidget.openDropDown();
				}
			});				
			
		});
	},

	/**
	 *  Event handler for when the user clicks on a close button (anything with .closeBt and parent .closeBtContainer)
	 *
	 */
	handleCloseBt : function(event) {
		event.preventDefault();
		var currentTargetNL = new dojo.NodeList(event.currentTarget);
		
		dojo.destroy(currentTargetNL.parents(".closeBtContainer")[0]);
	},
	
	/**
	 * Event handler for when a toggle link is clicked to show or hide the sibling panel (cotained in .toggleContainer) 
	 *
	 */
	_handleToggle: function(event) {
		
		event.preventDefault();
		var toggleContainer = dojo.query(event.currentTarget).parents(".toggleContainer");
		var toggleAllBt = toggleContainer.query(".toggleContent");
		var togglePanel = toggleContainer.query('.morePanel')[0];

		var toggleAllBt = toggleContainer.query(".toggleContent");
		var togglePanel = toggleContainer.query('.morePanel')[0];

		// custom toggle animation to slide information in or out
		var toggler = new dojo.fx.Toggler({
			node: togglePanel,
	        showFunc: dojo.fx.wipeIn,
	        hideFunc: dojo.fx.wipeOut
	    });
	    
	    if (dojo.hasClass(togglePanel, "visible")) {
			toggler.hide();
			dojo.removeClass(togglePanel,"visible");
			toggleAllBt.removeClass("open");
			toggleAllBt.addClass("close");
			toggleContainer.removeClass("open");		
		}
		
		else {
			toggler.show();
			dojo.addClass(togglePanel,"visible");
			toggleAllBt.removeClass("close");
			toggleAllBt.addClass("open");
			toggleContainer.addClass("open");
		}
	},

	/**
	 *  Global Function to bind "Select All" checkbox to its children and vice versa
	 *
	 */
	selectAllBoxes: function() {
	
		dojo.query(".selectAllCheckHead").forEach(function(masterCheckBox) {
			var context = dojo.query(masterCheckBox).closest(".bmoTable")[0],
				masterCheckBoxDijit = dijit.getEnclosingWidget(masterCheckBox),
				childCheckBox = dojo.query(".selectAllCheck", context);
			
			// Count the number of clicks to check or un-check the master checkbox
			childCheckBox.connect("onclick", function(event){
				countChecks(masterCheckBoxDijit, childCheckBox);
			});		
			
			dojo.connect(masterCheckBoxDijit, "onClick", function(event) {
				dojo.forEach(childCheckBox, function(checkbox) {
					var checkboxDijit = dijit.getEnclosingWidget(checkbox);
					if (event.currentTarget.checked) {
						checkboxDijit.setChecked(true);
					} else {
						checkboxDijit.setChecked(false);
					}
				});
			});
		});
		
		countChecks = function (masterCheckBoxDijit, childCheckBox) {	
			var selectedChecks = childCheckBox.filter(".dijitChecked")
			if (selectedChecks.length === childCheckBox.length) {
				masterCheckBoxDijit.attr("checked", "checked");
			}
			else {
				masterCheckBoxDijit.attr("checked", false);					
			}
		};
	},
	
	/**
	 *  All form validation related components/modules etc...
	 *
	 */
	formValidation : {
		/**
		 *  All reg exp. validations for form fields
		 *
		 */
		regExpValidations : {
			email: "^\\w+((-\\w+)|(\\.\\w+)|(\\_\\w+)|(\\'\\w+))*\\@[A-Za-z0-9]+((\\.|-|_)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
			name: "^[0-9a-zA-Z¿¡¬«»… ‘€œ‹‡·‚ÁËÍÈÙ˚Ô¸ '\\-\\.]*$",
			numbers: "^[0-9]*$",
			address: "^[A-Za-z0-9 ._#-]*$",
			postalCode: "[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]",
			securityQuestion:".{3,40}",
			securityAnswer:"^[A-Za-z0-9\\-¿¡¬√«»… ÀÃÕŒœ“”÷Ÿ⁄€‹‡·‚„ÁËÈÍÎÏÌÓÒÚÛÙıˆ˘˙˚¸]{3,25}$",
			challengeQuestion:".{2,30}",
			paymentNumber:"^[0-9]$",
			accountNumber:"^[0-9 -]*$",
			bankCardNumber:"[0-9]{10}",
			password:"[A-Za-z0-9]{6}",
			currentPassword:"[A-Za-z0-9]{4,6}",
			personalPhrase:"[A-Za-zÈËÍÎ‡‚ÓÔÙ˘˚¸ÁÏÚ·ÌÛ˙…» À¿¬Œœ‘Ÿ€‹«Ã“¡Õ”⁄0-9 ]{10,50}",
			challengeAnswer:"^[A-Za-zÈËÍÎ‡‚ÓÔÙ˘˚¸ÁÏÚ·ÌÛ˙…» À¿¬Œœ‘Ÿ€‹«Ã“¡Õ”⁄0-9 ]{2,30}$",
			regAnswer1:"[A-Za-z0-9 ]{2,30}",
			regAnswer2:"[A-Za-z0-9 ]{2,30}",
			regAnswer3:"[A-Za-z0-9 ]{2,30}",
			phoneNumber:"^(([0-9]{1})*[- .(]*([0-9a-zA-Z]{3})*[- .)]*[0-9a-zA-Z]{3}[- .]*[0-9a-zA-Z]{4})+$",
			masterCard:"^(5[1-5]){2}\d{14}*",
			nickName:"^[A-Za-z0-9ÈËÍÎ‡‚ÓÔÙ˘˚¸ÁÏÚ·ÌÛ˙…» À¿¬Œœ‘Ÿ€‹«Ã“¡Õ”⁄\. ',/\(\)&%@=-]*$",
			mcAccountNumber:"^[0-9^\s]{16}$",
			payeeName:"^[0-9a-zA-Z¿-ˇ-, '/\.]{0,45}$",
			travelPhoneNumber: "^[0-9 -]*[0-9][0-9 -]*$",
			sfUserId: "^[a-zA-Z0-9]{6,25}$|^\\w+((-\\w+)|(\\.\\w+)|(\\_\\w+)|(\\'\\w+))*\\@[A-Za-z0-9]+((\\.|-|_)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$"
		},
		/*
		 * Validate only numbers
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		validateNumbersOnly : function (target) {
			var target = dijit.getEnclosingWidget(target);
			if (target) {
				dojo.attr(target,"invalidMessage",BMOContent.validationMessages.numbersOnly);
				dojo.attr(target,"regExp",BMO.formValidation.regExpValidations.numbers);
			}
		},
		/*
		 * Validate travel phone numbers
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		validateTravelPhoneNumber : function (target) {
			var target = dijit.getEnclosingWidget(target);
			if (target) {
				dojo.attr(target,"invalidMessage",BMOContent.validationMessages.numbersOnly);
				dojo.attr(target,"regExp",BMO.formValidation.regExpValidations.travelPhoneNumber);
			}
		},
		/*
		 * Validate Account Numbers
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		validateAccountNumbers : function (target) {
			var target = dijit.getEnclosingWidget(target);
			if (target){
				dojo.attr(target,"invalidMessage",BMOContent.validationMessages.accountNumber);
				dojo.attr(target,"regExp",BMO.formValidation.regExpValidations.accountNumber);
			}
		},
		/*
		 * Validate Postal Code
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		validatePostalCode : function (target) {
			var target = dijit.getEnclosingWidget(target);
			if (target){
				dojo.attr(target,"invalidMessage",BMOContent.validationMessages.postalCode);
				dojo.attr(target,"regExp",BMO.formValidation.regExpValidations.postalCode);
			}
		},
		/*
		 * Set up Email Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		emailValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.email);
				target.attr("invalidMessage",BMOContent.validationMessages.email);
				target.attr("maxLength",60);
			}
		},
		/*
		 * Set up Name Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		nameValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.name);
				target.attr("invalidMessage",BMOContent.validationMessages.name);
				target.attr("maxLength",300);
			}
		},
		/*
		 * Set up card number Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		cardNumberValidation : function (target, message) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.bankCardNumber);
				target.attr("invalidMessage",message);
				target.attr("maxLength",10);
			}
		},
		/*
		 * Set up Password Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		passwordValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.password);
				target.attr("invalidMessage",BMOContent.validationMessages.password);
				target.attr("maxLength",6);
			}
		},
		/*
		 * Set up Challenge Question validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		challengeValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.challengeQuestion);
				target.attr("invalidMessage",BMOContent.validationMessages.challengeLength);
				target.attr("maxLength",30);
			}
		},
		/*
		 * Set up Address Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		addressValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.address);
				target.attr("invalidMessage",BMOContent.validationMessages.address);
				target.attr("maxLength",300);
			}
		},
		/*
		 * Set up Personal Phrase Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		*/
		personalPhrase : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.personalPhrase);
				target.attr("invalidMessage",BMOContent.validationMessages.personalPhrase);
			}
		},
		/*
		 * Set up Amount Validation
		 *
		 * @param target is a selector with which to target the validation
		 * @param minimum is the minimum value (integer) required for the field
		 * @param maximum is the maximum value (integer) required for the field
		 *
		*/
		amountValidation : function (target, minimum, maximum) {
			if (target) {
				var constraints = { min: minimum, max: maximum };
				var target = dijit.getEnclosingWidget(target);
				target.attr("constraints",constraints);
				target.attr("rangeMessage",BMOContent.validationMessages.amountExceeds);
				target.attr("invalidMessage",BMOContent.validationMessages.amountNumber);
			}
		},
		/*
		 * Set up Phone Validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		 */
		phoneValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.phoneNumber);
				target.attr("invalidMessage",BMOContent.validationMessages.phoneNumber);
			}
			
			
		},
		/*
		 * Set up Payee name validation
		 *
		 * @param target is a selector with which to target the validation
		 *
		 */
		payeeNameValidation : function (target) {
			if (target) {
				var target = dijit.getEnclosingWidget(target);
				target.attr("regExp",BMO.formValidation.regExpValidations.payeeName);
				target.attr("invalidMessage",BMOContent.validationMessages.payeeName);
			}
			
			
		}
	},
	
	/**
	 * Creates an iframe container with "url" 
	 *
	 */
	createOverlayIframe: function(url) {
		return '<iframe src="'+ url +'" style="border: none; width: 500px; height: 500px"></iframe>';
	},
	
	
	/**
	 * Dynamically inserts 6 empty divs to create rounded corners with minimal tmeplate html
	 * Can be called in page for when widgets can be dragged and dropped
	 *
	/*/	
	makeRound : function(rbox, rboxTemplate){
	
		// Default template adds a top left, right, bottom left and right div and assumes "sliding doors" CSS for top/bottom borders
		var rboxTemplate = (typeof rboxTemplate == "undefined") ? "<div class='rbox-top-left'><!-- - --></div><div class='rbox-top-right'><!-- - --></div><div class='rbox-bottom-left'><!-- - --></div><div class='rbox-bottom-right'><!-- - --></div>" : rboxTemplate;
		
			// can't wrap outter with container and add classes, bc stuff like margins will need to be re-set (ie .summary-box .summary-box
			// .wrap("<div class='rbox-container "+ rbox.attr("class")+ "'><div class='rbox-left-side'><div class='rbox-right-side'><!-- - --></div></div></div>")
			
		rboxNode = dojo.NodeList(rbox);
		
		if(!(dojo.hasClass(rbox, "rbox"))) {
			rboxNode.addClass("rbox");
		}
		
		rboxNode
			.addClass("rbox-container")
			.wrapInner('<div class="rbox-content"><!-- - --></div>')
			.wrapInner('<div class="rbox-right-side"><!-- - --></div>')				
			.wrapInner('<div class="rbox-left-side"><!-- - --></div>')

			// todo - add to a single wrapInner
//				.wrapInner("<div class='rbox-left-side'><div class='rbox-right-side'><div class='rbox-content'></div></div></div>")
			.append(rboxTemplate);
	},
	
	/**
	 * Disables all dijits within container
	 *
	 */
	disableDijits: function(container, disable) {
		
		var allDijits = dijit.findWidgets(container);
		
		for (var i=0, l = allDijits.length; i < l; i++) {
			allDijits[i].setDisabled(disable);
		}
	},
	
		
	/**
	 * Check if "item" is contained in array "items"
	 *
	 */
	contains: function(item, items) {
		var i = items.length;
		while (i--) {
			if (items[i] === item) {
				return true;
			}
		}
		return false;
	},
	
	/**
	 * Removes required attribute from all dijits under "container"
	 *
	 */
	unRequireDijits: function(container, validate, exceptions) {
		
		var allDijits = dijit.findWidgets(container);
		var exLen = exceptions.length;
		
		var hasException = function(cDijit) {
			var i = exLen;
			while (i--) {
				if (dojo.hasClass(cDijit.domNode, exceptions[i])) {
					return true;
				}
			}
			return false;
		}
		
		var currentDijit;
		for (var i=0, l = allDijits.length; i < l; i++) {
			currentDijit = allDijits[i];
			
			if (!hasException(currentDijit)) {
				if (validate) {
					// Remove "noValidation" since this can be validated
					dojo.removeClass(currentDijit.domNode, "noValidation");
					dojo.addClass(currentDijit.domNode, "yesValidation");
				} else {
					dojo.addClass(currentDijit.domNode, "noValidation");
					dojo.removeClass(currentDijit.domNode, "yesValidation");
				}
			} else {
				dojo.addClass(currentDijit.domNode, "yesValidation");
			}
		}
	},
	
	/**
	 * Go through all dijits in "container" and return true if all dijits (minus "exceptions") are empty, false otherwise
	 *
	 */
	isDijitsEmpty: function(container, exceptions) {
		
		var allDijits = dijit.findWidgets(container);

		var l = allDijits.length;
		var exLen = exceptions.length;
		var numEmpty = 0;
		
		var hasException = function(cDijit) {
			var i = exLen;
			while (i--) {
				if (dojo.hasClass(cDijit.domNode, exceptions[i])) {
					return true;
				}
			}
			return false;
		}
		
		var currentDijit;
		for (var i=0; i < l; i++) {
			
			currentDijit = allDijits[i];

			if (!hasException(currentDijit)) {	

				if (currentDijit.attr("value") === "" ||
					currentDijit.attr("value") === null ||
					(typeof(currentDijit.attr("value")) === "number" && isNaN(currentDijit.attr("value")))) {

					numEmpty++;
				}
			}
		}
		//console.log(numEmpty === (l-exLen))
		//console.log("numempty" + numEmpty)
	//	console.log("l-exLn" + (l-exLen))
		return numEmpty === (l-exLen);
	},
	
	/*
	 * Equalize Heights
	 *
	 * @param target is a selector with which to target the function
	 *
	 */
	equalizeHeights: function (target) {
		var target = target || dojo.query(".equalizeHeights"),
		tallest,
		thisHeight,
		setHeight,
		updateHeight;
		
		setHeight = function(){
			tallest = 0;
		
			// find tallest element
			target.forEach(function(node){
			thisHeight = dojo.marginBox(node).h;
			if (thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		
			// apply tallest height to each element within the group
			target.forEach(function(node){
				dojo.marginBox(node, {h: tallest});
				dojo.addClass(node,"equalizeComplete");
			});
		};

		updateHeight = function(){
			target.forEach(function(node) {
				dojo.style(node,"height","auto");
			});		
			setHeight();
		}
		
		// Listens to the text resize event to re-size the box
		dojo.subscribe("onTextResize", function(){
			updateHeight();
		});
		
		setHeight();
	},
	
	/*
	 * MessageManager: Message Handling function
	 *
	 * @param target is DOM node into which the messages should be placed
	 *
	 */
	MessageManager : {
		targetArea: null,
		errorCode: null,
		curLanguage: "EN",
		types: {
			SUCCESS: {
				id: 	1,
				cssClass: 	"successBox"
			},
			ERROR: {
				id: 	2,
				cssClass: 	"errorBox"
			},
			WARNING: {
				id: 	3,
				cssClass: 	"warningBox"
			},
			MESSAGE: {
				id: 	4,
				cssClass: 	"messageBox"
			}
		},
		init: function() {
			this.targetArea = dojo.byId("messageManagerArea");
			var nodeUtilityBar = dojo.byId("utilityBar");

			if (!this.targetArea && nodeUtilityBar) {
				var nodeInfoCopy = dojo.query(".bodyCopy")[0];
				var nodeTarget = nodeInfoCopy ? nodeInfoCopy : nodeUtilityBar;
				var messageAreaHTML = "<div id=\"messageManagerArea\" aria-live=\"assertive\"><!-- - --></div>";

				this.targetArea = dojo.place(messageAreaHTML, nodeTarget, "after");
			}
		},
		add: function($message, $type, $errorCode) {
			if (this.targetArea) {
				var msgHTML = "<div class=\""+ $type.cssClass +" bulletinBox closeBtContainer \"><p>"+ $message +"</p>";
				if($errorCode != null){
					msgHTML = msgHTML + "<br/><br/><p>"+ $errorCode +"</p>";
				}
				var localeLangCode = BMOContent.language.code;
				if (localeLangCode == "en") {
					msgHTML = msgHTML + "<a class=\"closeBt\" href=\"#\" title=\"Close\">Close</a></div>";
				} else {
					msgHTML = msgHTML + "<a class=\"closeBt\" href=\"#\" title=\"Fermer\">Fermer</a></div>";
				}
				var msgNodeList = dojo.query(dojo.place(msgHTML, this.targetArea, "only"));
				var msgCloseNode = msgNodeList.query(".closeBt")[0];		
				BMO.makeRound(dojo.query("."+$type.cssClass+".closeBtContainer")[0]);
				dojo.connect(msgCloseNode, "onclick", BMO.handleCloseBt);
			}
		},
		clear: function() {
			this.targetArea = dojo.byId("messageManagerArea");
			var nodeUtilityBar = dojo.byId("utilityBar");
			if (this.targetArea && nodeUtilityBar) {
//			if (!this.targetArea && nodeUtilityBar) {
				var nodeInfoCopy = dojo.query(".bodyCopy")[0];
				var nodeTarget = nodeInfoCopy ? nodeInfoCopy : nodeUtilityBar;
				var messageAreaHTML = "";

				this.targetArea = dojo.place(messageAreaHTML, nodeTarget, "after");
			}
		},
		close: function() {
			dojo.destroy(dojo.query(".closeBtContainer")[0]);
		}
	},
	
	/**
	 *  Prevent user from entering invalid birthday: i.e. February 31 2010
	 *  Assumption: all values in month select field is from 1-12 (for each month) and for the day field is from 1-31 (for all possible dates)
	 */
	BirthdayFieldsHandler: {
		setup: function(monthDijit, dayDijit, yearDijit) {
			var months31st = ["1", "3", "5", "7", "8", "10", "12"];
			var lastDateFeb = 28;
			
			function addDates(lastDate) {
				var currentLastOption = dayDijit.getOptions();
				var currentLastOptionVal = parseInt(currentLastOption[currentLastOption.length-1].value, 10);
				var currentSelectedOption = dayDijit.getValue();
				
				if (currentLastOptionVal) {
					if (lastDate > currentLastOptionVal) { // Need to add dates that are delta
						for (var i=currentLastOptionVal + 1; i <= lastDate; i++) {
							dayDijit.addOption([{value: i, label: i}]);
						}
					} else { // Need to remove dates that are delta
						for (var i=lastDate + 1; i <= currentLastOptionVal; i++) { 
							currentLastOption = dayDijit.getOptions(); // Update options list
							dayDijit.removeOption(parseInt(currentLastOption[currentLastOption.length-1].value, 10));
						}
						
						if (currentSelectedOption == currentLastOptionVal) {
							currentLastOption = dayDijit.getOptions();
							dayDijit.setValue(currentLastOption[currentLastOption.length-1].value);
						}
					}
				}
			}
			
			function isLeapYear(year) {
				return ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
			}
			
			function setLastDayFeb() {
				var yearVal = yearDijit.getValue();
				
				if (yearVal !== "" && isLeapYear(parseInt(yearVal, 10))) {
					lastDateFeb = 29;
				} else {
					lastDateFeb = 28;
				}
			}
			
			dojo.connect(monthDijit, "onChange", function(newVal) { 
				if (dojo.indexOf(months31st, newVal) === -1) {
					if (newVal !== "2") { // month ending with 30th
						addDates(30);
					} else {  // february so remove both 31 and 30
						setLastDayFeb();
						addDates(lastDateFeb);
					}
				} else {
					addDates(31);
				}
			});
			
			dojo.connect(yearDijit, "onChange", function(newVal) {
				setLastDayFeb();
				if (monthDijit.getValue() === "2") {
					addDates(lastDateFeb);
				}
			});

		}
	},
	helpCentre : {
		position : "",
		url : "",
		isClicked : 0
	},
	termCondition : {
		position : "",
		url : "",
		isClicked : 0
	}
}

// Call the init function on page load
dojo.addOnLoad(BMO.init);

/**
 *	Adds the clear filter button for a filter field
 *	
 *	@param params, objec defines required parameters
 */
BMO.ClearFilter = function(params) {
	this.filterFieldDijit = params.filterFieldDijit;
	this.tableView = params.tableView;
	this.filterMessage =  params.message;
	if (this.filterFieldDijit) {
		this.filterFieldNode = this.filterFieldDijit.domNode;
	}
}

BMO.ClearFilter.prototype = {
	addClearFilter: function(options) {
		
		var filterFieldId = this.filterFieldDijit.attr('id');
		var clearBtn = dojo.byId("clearFilter_" + filterFieldId);
		var that = this;
		
		if (!clearBtn) {
			var clearFilterTmpl = '<a class="clearFilterBtn noPrint" id="clearFilter_' + filterFieldId + '" href="#">'+BMOContent.htmlText.clearFilter+'</a>';
			dojo.place(clearFilterTmpl, dojo.query(this.filterFieldNode).parent()[0], "last");
			this.clearBtn = dojo.byId("clearFilter_" + filterFieldId);
		} else {
			this.clearBtn = clearBtn;
			dojo.removeClass(this.clearBtn, "hide");
		}
		
		dojo.connect(this.clearBtn, "onclick", function(event) {
			event.preventDefault();
			
			dojo.mixin(that.tableView.tableState, {searchFilter: ""});

			that.tableView.refreshTable(options, function() {
				that.removeClearFilter(that.filterMessage);
			});
		});
	},
	
	removeClearFilter: function(message) {
		if (this.clearBtn) {
			dojo.addClass(this.clearBtn, "hide");
			if (message) {
				this.filterFieldDijit.attr("value", message);			
			} else {
				this.filterFieldDijit.attr("value", "");			
			}	
		}
	}
}



/**
 *  Table View ********************************************************************************************
 *
 *	Assumptions:
 *		1. The column header anchors have the class "sortable" ONLY on the headers that have sortable content.
 *			Any date field has also has the class "date"
 *		   i.e. <tr>
 *					<th scope="col" class="eTableConfirmation"><a class="sortable" href="#">Confirmation #</a></th>
 *					<th scope="col" class="eTableStatus"><a class="sortable" href="#">Status</a></th>
 *					<th scope="col" class="eTableDate"><a class="sortable date" href="#">Date</a></th>
 *				</tr>
 *		2. The pagination must have a class of the form "pagination_{TABLE'S ID}" where {TABLE'S ID} is the table id.
 *		   i.e. <table id="bmoOLBTable">
 *					...
 *				</table>
 *				<ul class="pagination pagination_bmoOLBTable">
 *		3. It is assumed that each table row, TR has a unique id that's unique to that row's data.  This id is passed
 *		   back to the server during "delete" and "save" operations.  So the unique id should be enough information
 *		   for the server to delete or save the data.
 *		4. The table must have an id (to be passed to the server).
 *
 *
 *  @param tableStateOptions a JSON object that contains the table state. This will get merged with the
 *		   tableState instance variable.  See the detailed comment on BMO.TableView.prototype.tableState
 *		   below for more details.
 *	@param tableNode the table selector/DOM element.
 *  @param ajaxURL the url used to make the ajax calls
 *  @param onPopulateComplete an object containing a callback function and it's scope.  To be called  
 *		   after the data returned from the ajax call is populated on the table.  The callback function MUST
 *		   accept a parameter that contains a message returned by the server if there was no data.
 *		   Example: {callbackScope:this, callback:onPopulateComplete}
 *	@param tableSortEnabled, tracks if the table sorting is enabled or not
 *
 */
BMO.TableView = function (tableStateOptions, tableNode, ajaxURL, onPopulateComplete, highLightOddRows, tableSortEnabled) {
	
	
	// The url used to make the ajax calls.
	this.ajaxURL = ajaxURL;
	
	// Object containing callback function and its scope.  The callback function will be called after the data 
	// returned from the ajax call is populated on the table.
	this.onPopulateComplete = onPopulateComplete;
	
	/*
	- Actual data returned by the server.  
	- An array of table rows to be populated on the table.

	Example:
	tableData: ['<tr><td>A. Jane Robinson</td><td>01/10/2010</td><td>$55000.00</td><td>54349</td><td>Cancelled</td></tr>',
				'<tr><td>A. Mike Robinson</td><td>01/10/2010</td><td>$55000.00</td><td>54349</td><td>Cancelled</td></tr>',
				'<tr><td>A. John Robinson</td><td>01/10/2010</td><td>$55000.00</td><td>54349</td><td>Cancelled</td></tr>']
	*/
	this.tableData;
	
	// The table selector/DOM element.
	this.tableNode = tableNode;
	
	// The table selector/DOM element wrapped in a NodeList.
	this.tableNodeNL = new dojo.NodeList(this.tableNode);
	
	// Highlights the odd rows.
	this.highLightOddRows =  (highLightOddRows != undefined && highLightOddRows != null) ? highLightOddRows : true;
	
	// Keeps track of whether table is enabled or disabled.
	this.tableSortEnabled = (tableSortEnabled != undefined && tableSortEnabled != null) ? tableSortEnabled : true;
	
	/*
	- A JSON object representing the state of the table at any time.
	- This object is passed back and forth between the client and server side during the ajax calls.
	- The server must always return this object, whether it's updated to reflect changes on the server side
	  or even if it's just re-sending what it recieved because there was nothing to update to this object
	  from the server.
	*/
	this.tableState = {
		currentPage: 1, // Current page the user is on/or requested
		searchFilter: "", // Search filter
		totalPages: 1, // Total number of pages in the table pagination
		sortColumn: 1, // The column to sort by, first column by default
		sortType: "sortedAsc", // Sort type, asc by default
		tableId: null, // The id of the table that made the request 
		hasTableData: true // Keeps track of whether the ajax call returned data
	};
	
	this.addCounter = 1;
	
	this.spinning = false;
		
	// Merge the default table state with the one passed in
	dojo.mixin(this.tableState, tableStateOptions);
	// Set the table id
	this.tableState.tableId = dojo.attr(this.tableNode, "id");
	
	// Handle loading of the initial data and populate the table
	this._init();
}


/**
 *  Load the initial table data with an ajax call and populate the table.
 *
 */
BMO.TableView.prototype._init = function() {
	
	// Handle all event binding through delegation
	this._handleBinding();

	this._loadTableData(null, {callbackScope:this, callback: function() { // Data loaded
		this._setupPagination(); // Setup pagination 
		this._populateTable(); // Populate table
	}});
}

/**
 * Handle all event binding through delegation
 *
 */
BMO.TableView.prototype._handleBinding = function() {
	var tableClass = this, // Reference to "this" (current class instance)
		paginationContainer = dojo.query(".pagination_" + tableClass.tableState.tableId )[0];
	
	dojo.connect(tableClass.tableNode, "onclick", function(event) {
	
		var target = event.target,
			targetNL = new dojo.NodeList(target),
			sortColumn;

		if (target.nodeName === "A" && dojo.hasClass(target, "sortable")) { // Sort headers
			event.preventDefault();
			
			sortColumn = dojo.query("thead th > a.sortable", this.tableNode).indexOf(target);
			dojo.mixin(tableClass.tableState, {sortColumn: sortColumn+1});
			tableClass._handleColumnSort(event, tableClass);
		}
		
	});
	
	// Handle pagination binding
	dojo.connect(paginationContainer, "onclick", function(event) {
		var target = event.target,
			targetNL = new dojo.NodeList(target);
			
		if ((target.nodeName === "A" || target.nodeName === "IMG") && targetNL.closest("ul.pagination").length) { // Pagination links
			event.preventDefault();	
			tableClass._handlePagination(target, tableClass);
		}
	});
}


/**
 *  Load the table data through ajax
 *
 *	@param otherData a JSON object that contains additional data to pass to the server.
 *  @param callbackObject an object containing a callback function and it's scope.  To be called  
 *		   after the ajax response
 *		   Example: {callbackScope:this, callback:onLoadComplete}
 *
 */
BMO.TableView.prototype._loadTableData = function(otherData, callbackObject) {
	var tableClass = this, // Reference to "this" to be used inside ajax callback functions
		objectToPass = otherData ? dojo.mixin(otherData, this.tableState) : dojo.mixin({}, this.tableState);
	
	tableClass.tableState.hasTableData = true;
//	var myStandby = dojo.byId("myStandby");
//	if (myStandby) {
//		console.log("set enable");
//		basicStandby.setDisableWidget(false);
//		setTimeout(function(myStandby){
//			console.log("need to spin");
//			basicStandby.show();	
//	  	}, 6000);
//	}	
	
	var myStandby = dojo.byId("myStandby");
	if (myStandby) {
		console.log("call show");	
		basicStandby.show();
	}	
	
	var buttonsStandby = dojo.byId("buttonsStandby");
	if (buttonsStandby) {
		console.log("call show");	
		buttonsStandbyJsId.show();
	}	
	
	console.log("ajax call");

	// Make the ajax call
	dojo.xhrPost ({
		url: tableClass.ajaxURL,
		handleAs: "json",
		content: objectToPass, // Note: this.tableState is merged with otherOptions and a new merged object is passed in
		load: function (response, ioArgs) {
			if (response.errorCodeDetected) {
				handleAjaxError();
			} else {
				var errorCode = response.errorCode;
				var continuePopulateTable = response.continuePopulateTable;
				if(errorCode && !continuePopulateTable) {
					BMO.MessageManager.add(response.errorMessage, BMO.MessageManager.types.ERROR, errorCode);
				} else {
					if(errorCode && continuePopulateTable && continuePopulateTable == "true") {
						BMO.MessageManager.add(response.errorMessage, BMO.MessageManager.types.ERROR, errorCode);
					}
					var resTableState = response.tableState;
					if (resTableState) {
						dojo.mixin(tableClass.tableState, resTableState); // Merge the result tableState with existing
						
						if (tableClass.tableState.hasTableData) { // If data was returned
							tableClass.tableData = response.tableData; // Set the table data to be populated
							if (typeof callbackObject.callback === "function") { // Call the callback function		
								callbackObject.callback.call(callbackObject.callbackScope);
							}
							if(resTableState.tableId=='ccChequingTransactionTable'){
								initiateTooltip();
							}
														
						} else { // No data was returned
							var noDataMsg = response.tableNoDataMsg; // The error message returned by the server
							tableClass.tableData = response.tableData; // Set the table data to be populated
							if (typeof callbackObject.callback === "function") { // Call the callback function		
								callbackObject.callback.call(callbackObject.callbackScope);
							}
							if (noDataMsg && 
								tableClass.onPopulateComplete && 
								typeof tableClass.onPopulateComplete.callback == "function") {
		
								tableClass.onPopulateComplete.callback.call(tableClass.onPopulateComplete.callbackScope, noDataMsg);
							}
						}
					}
					tableClass.addCounter = 1;
				}
			}	
			
			var myStandby = dojo.byId("myStandby");
			if (myStandby) {
				basicStandby.hide();
//				console.log("set disable");
//				basicStandby.setDisableWidget(true);
			}	
			
			var buttonsStandby = dojo.byId("buttonsStandby");
			if (buttonsStandby) {	
				buttonsStandbyJsId.hide();
			}	
			
			return response; // Always return the response back (required by Dojo)
		},
		error: function (response, ioArgs) { // There was an error with loading
			var myStandby = dojo.byId("myStandby");
			if (myStandby) {
				basicStandby.hide();
//				console.log("set disable");
//				basicStandby.setDisableWidget(true);
			}	
			var buttonsStandby = dojo.byId("buttonsStandby");
			if (buttonsStandby) {	
				buttonsStandbyJsId.hide();
			}	
			
			BMO.MessageManager.add("Failed to load data: " + response, BMO.MessageManager.types.ERROR);
			return response;
		}
	});
}

/**
 *  Setup pagination for the table.
 *
 */
BMO.TableView.prototype._setupPagination = function() {

	var tableClass = this, // Reference to "this" (current class instance)
		tablePaginationNL = dojo.query(".pagination_" + this.tableState.tableId), // Get the table's pagination (if it exists)
		tablePagination = tablePaginationNL[0],
		pagLength,
		pagHidden;
		
	if (tablePaginationNL.length) {

		// Create the pagination in DOM
		function createPagination() {

			var	ttlPages = tableClass.tableState.totalPages,
				cPage = tableClass.tableState.currentPage,
				currentLi,
				currentPageText,
				currentPageAnchor,
				nextPrevImg;
		
			// Add prev link (hide if not needed)
			currentLi = dojo.doc.createElement("LI");
			dojo.addClass(currentLi, "previous");
			currentPageAnchor = dojo.doc.createElement("A");
			dojo.attr(currentPageAnchor, "href", "#");
			currentLi.appendChild(currentPageAnchor);
			if (cPage == 1) { // Hide if on the first page
				dojo.addClass(currentLi, "hideNextPrev");
			}
			tablePaginationNL.append(currentLi);
		
			// First page
			createPaginationLi(1, cPage);
			
			
			// If current page is the first page, show next two pages
			if (ttlPages > 3 && cPage === 1) {
				createPaginationLi(2, cPage);
				createPaginationLi(3, cPage);
			}
	
			// Prev page
			var prevPage = cPage - 1;
			if (prevPage > 1) {

				if (prevPage > 2 && ttlPages !== 4) createEllipses();
				
				// Add prev page
				if (!dojo.query(".pagination .page_" + prevPage).length) {
					if (ttlPages === 3 || (ttlPages !== 3 && cPage !== ttlPages)) {
						createPaginationLi(prevPage, cPage);
					}
				}
			}
			
			// Add current page
			if (cPage !== 1 && cPage !== ttlPages) createPaginationLi(cPage, cPage);
			
			// Next page
			var nextPage = cPage + 1;
			if (nextPage < ttlPages) {
				
				// Add next page
				if (!dojo.query(".pagination .page_" + nextPage).length) {
					createPaginationLi(nextPage, cPage);
				}

				if (nextPage < (ttlPages - 1) && ttlPages !== 4) createEllipses();
			}
			
			// If current page is the last page, show prev two pages
			if (ttlPages > 3 && cPage === ttlPages) {
				if (!dojo.query(".pagination .page_" + (ttlPages - 2)).length) {
					createPaginationLi(ttlPages - 2, cPage);
				}
				if (!dojo.query(".pagination .page_" + (ttlPages - 1)).length) {
					createPaginationLi(ttlPages - 1, cPage);
				}
			}
			
			// Last page
			createPaginationLi(ttlPages, cPage);
		
			// Add next link (hide if not needed)
			currentLi = dojo.doc.createElement("LI");
			dojo.addClass(currentLi, "next");
			currentPageAnchor = dojo.doc.createElement("A");
			dojo.attr(currentPageAnchor, "href", "#");
			currentLi.appendChild(currentPageAnchor);
			if (cPage == ttlPages) { // Hide if on the last page
				dojo.addClass(currentLi, "hideNextPrev");
			}
		
			tablePaginationNL.append(currentLi);
		
		}

		function createPaginationLi(ind, cPage) {
			var currentLi = dojo.doc.createElement("LI");
			var currentPageText = dojo.doc.createTextNode(ind);
			dojo.addClass(currentLi, "page_"+(ind));
			
			// Add class "selected" for the current page.
			if (ind === cPage) dojo.addClass(currentLi, "selected");
			
			var currentPageAnchor = dojo.doc.createElement("A");
			dojo.attr(currentPageAnchor, "href", "#");
			currentPageAnchor.appendChild(currentPageText);
			currentLi.appendChild(currentPageAnchor);
			tablePaginationNL.append(currentLi);
		}
		
		function createEllipses() {
			var currentLi = dojo.doc.createElement("LI");
			var currentPageText = dojo.doc.createTextNode("...");
			dojo.addClass(currentLi, "ellipses");
			currentLi.appendChild(currentPageText);
			tablePaginationNL.append(currentLi);
		}
		

		// Empty the current pagination
		tablePaginationNL.empty();
	
		pagHidden = dojo.hasClass(tablePagination, "hide");
		if (this.tableState.totalPages > 1) { // Create pagination if needed
			// Show pagination ul
			if (pagHidden) {
				tablePaginationNL.removeClass("hide");
			}
			createPagination();
		} else if (!pagHidden) {
			tablePaginationNL.addClass("hide");
		}

	
	}
} // END _setupPagination

/**
 *  Event handler for pagination links
 *
 *	@param event the event that triggered this handler
 *	@param tableClass the class scope.  Reference to "this" (current class instance)
 *
 */
BMO.TableView.prototype._handlePagination = function(currentT, tableClass) {

	var currentTNL = new dojo.NodeList(currentT), // the target wrapped in a NodeList
	 	anchor = currentT.nodeName === "IMG" ? currentTNL.parent("a")[0] : currentT, // Make sure anchor is the target
		anchorParentLiNL = new dojo.NodeList(anchor).parent("li"),
		anchorParentLi = anchorParentLiNL[0],
		currentSelectedNL = anchorParentLiNL.siblings(".selected"),
		currentSelected = anchorParentLiNL.siblings(".selected")[0],
		nextLiNL,
		nextLi,
		previousLiNL,
		previousLi;

	// Only continue if the target is an anchor and not the current page (i.e. doesn't have the "selected" class)
	if (anchor.nodeName === "A" && !dojo.hasClass(anchorParentLi, "selected")) {
	
		// Handle the numbered page links
		if (!dojo.hasClass(anchorParentLi, "next") && !dojo.hasClass(anchorParentLi, "previous")) {
		
			// Update the "selected" class
			dojo.removeClass(currentSelected, "selected");
			dojo.addClass(anchorParentLi, "selected");
		
			// Update the currently selected node/selector
			currentSelectedNL = anchorParentLiNL;
			currentSelected = anchorParentLi;
			// Set the current page (assumed that a page number will be in the anchor)
			tableClass.tableState.currentPage = anchor.innerHTML;
		
			// Get the next and previous links
			nextLiNL = anchorParentLiNL.siblings(".next"),
			nextLi = nextLiNL[0],
			previousLiNL = anchorParentLiNL.siblings(".previous"),
			previousLi = previousLiNL[0];
		
		} else 
		// Handle "next" link assuming the current page is not the last page (no "hideNextPrev" class)
		if (dojo.hasClass(anchorParentLi, "next") && !dojo.hasClass(anchorParentLi, "hideNextPrev")) {
		
			// Update the "selected" class	
			dojo.removeClass(currentSelected, "selected");
			currentSelectedNL = currentSelectedNL.next("li");
			currentSelected = currentSelectedNL[0];
			dojo.addClass(currentSelected, "selected");
		
			// Update the currently selected node/selector
			tableClass.tableState.currentPage = dojo.query("a", currentSelected)[0].innerHTML;
		
			// Get the next and previous links
			nextLiNL = anchorParentLiNL;
			nextLi = anchorParentLi,
			previousLiNL = anchorParentLiNL.siblings(".previous"),
			previousLi = previousLiNL[0];
		
		} else 
		// Handle "previous" link assuming the current page is not the first page (no "hideNextPrev" class)
		if (dojo.hasClass(anchorParentLi, "previous") && !dojo.hasClass(anchorParentLi, "hideNextPrev")) {
		
			// Update the "selected" class
			dojo.removeClass(currentSelected, "selected");
			currentSelectedNL = currentSelectedNL.prev("li");
			currentSelected = currentSelectedNL[0];
			dojo.addClass(currentSelected, "selected");
		
			// Update the currently selected node/selector
			tableClass.tableState.currentPage = dojo.query("a", currentSelected)[0].innerHTML;
		
			// Get the next and previous links
			nextLiNL = anchorParentLiNL.siblings(".next"),
			nextLi = nextLiNL[0],
			previousLiNL = anchorParentLiNL,
			previousLi = anchorParentLi;
		}
	
		if (tableClass.tableState.currentPage == 1) { // On the first page

			// Hide the previous button
			if (!dojo.hasClass(anchorParentLi, "previous")) {
				dojo.addClass(previousLi, "hideNextPrev");
				dojo.removeClass(nextLi, "hideNextPrev");
			} else {
			
				// Update the next and previous links
				nextLiNL = anchorParentLiNL.siblings(".next"),
				nextLi = nextLiNL[0],
				previousLiNL = anchorParentLiNL,
				previousLi = anchorParentLi;
			
				// Hide
				dojo.addClass(previousLi, "hideNextPrev");
				dojo.removeClass(nextLi, "hideNextPrev");
			}
		} else if (tableClass.tableState.currentPage == tableClass.tableState.totalPages) { // On the last page

			// Hide the next button
			if (!dojo.hasClass(anchorParentLi, "next")) {
				dojo.addClass(nextLi, "hideNextPrev");	
				dojo.removeClass(previousLi, "hideNextPrev");
			} else {
			
				// Update the next and previous links
				nextLiNL = anchorParentLiNL;
				nextLi = anchorParentLi,
				previousLiNL = anchorParentLiNL.siblings(".previous"),
				previousLi = previousLiNL[0];
			
				// Hide
				dojo.addClass(nextLi, "hideNextPrev");
				dojo.removeClass(previousLi, "hideNextPrev");
			}

		} else { // Middle pages		
			dojo.removeClass(nextLi, "hideNextPrev");
			dojo.removeClass(previousLi, "hideNextPrev");
		}
	} // END anchor.nodeName === "A" && !dojo.hasClass(anchorParentLi, "selected")

//	if (!dojo.hasClass(anchorParentLi, "hideNextPrev")) {

	// Load the data for the page
	tableClass._loadTableData(null, {callbackScope:tableClass, callback: function() {
		tableClass._populateTable();
		tableClass._setupPagination(); // In case there was updates to the data on the server
	}});
	//}
}

BMO.TableView.prototype._isTableDisabled = function() {
	return dojo.hasClass(this.tableNode, "disabled");
}

BMO.TableView.prototype._disableTable = function(disable) {
	var table = this.tableNode;
	
	if (disable) {
		dojo.addClass(table, "disabled");
	} else {
		dojo.removeClass(table, "disabled");
	}
}

/**
 *  Populate the table with new data
 *
 */
BMO.TableView.prototype._populateTable = function() {
	
	var tableBodyNL = dojo.query("tbody", this.tableNode),
		tableBody = tableBodyNL[0],
		tableClass = this,
		totalNumRows,
		currentRow,
		tableHeadNL = dojo.query("thead th > a.sortable", this.tableNode).removeClass("sortColumn"), // Remove the previous sort column
		tableHead = tableHeadNL[this.tableState.sortColumn - 1]; // The anchor inside the TH of the sort column
		
	this._isTableDisabled() && this._disableTable(false);	
			
	dojo.query("tr", tableBody).forEach(dojo.destroy); // Remove all current rows
	
	// Highlight the new column
	// If tableClass.tableState.sortType is empty, will not set any sort column/type
	if (this.tableSortEnabled && tableClass.tableState.sortType!="") {
		dojo.addClass(tableHead, "sortColumn");
		dojo.addClass(tableHead, tableClass.tableState.sortType);
	}
	
	if (this.tableData && this.tableData.length) { // Make sure there's data (never trust the server. it's evil.)
		totalNumRows = this.tableData.length;
		
		for (var i = 0; i < totalNumRows; i++) { // Add each row
			currentRow = this.tableData[i];
			dojo.place(currentRow, tableBody, "last"); // Append the row
			
			if (this.highLightOddRows && (i % 2 == 0)) { // Highlight odd rows
				dojo.query("tr", tableBody).last().addClass("trOdd");
			}
			
		}
	} else {
		// Disable sort functionality
		!this._isTableDisabled() && this._disableTable(true);
	}

	
	if (tableClass.onPopulateComplete && typeof tableClass.onPopulateComplete.callback == "function") { // Call the callback function
		tableClass.onPopulateComplete.callback.call(tableClass.onPopulateComplete.callbackScope, null);
	}
}


/**
 *  Handle column header click
 *
 *	@param event the event that triggered this handler
 *	@param tableClass the class scope.  Reference to "this" (current class instance)
 *
 */
BMO.TableView.prototype._handleColumnSort = function(event, tableClass) {
	
	if (this.tableSortEnabled && !this._isTableDisabled()) {
		var currentHead = event.target,
			lastSort = dojo.hasClass(currentHead, "sortedAsc") ? "sortedAsc" : "sortedDesc"; // Get the last sort type
	
		// Set the sort header for styling
		dojo.query(".sortColumn", tableClass.tablNode).removeClass("sortColumn");
		dojo.addClass(currentHead, "sortColumn");
		
		if (lastSort == "sortedAsc") {
			tableClass.tableState.sortType = "sortedDesc";
		} else {
			tableClass.tableState.sortType = "sortedAsc";
		}

		tableClass._loadTableData(null, {callbackScope:tableClass, callback: function() {
			
			 // Set the new sort type
			newSort = tableClass.tableState.sortType;
			// Store the new sort
			dojo.removeClass(currentHead, lastSort);
			dojo.addClass(currentHead, newSort);
			
			tableClass._populateTable();
			tableClass._setupPagination();
		}});
	}
}


/**
 *  Refresh the table
 *
 *	@param otherOptions a JSON object of any additional options that need to be passed into the ajax call
 *
 */
BMO.TableView.prototype.refreshTable = function(otherOptions, refreshCallback) {


	this._loadTableData(dojo.mixin(null, otherOptions), {callbackScope:this, callback: function() {
			this._populateTable();
			this._setupPagination();
						
			if (refreshCallback) {
				refreshCallback();	
			}
	}});
}

BMO.TableView.prototype.enableTable = function(otherOptions, refreshCallback) {
	this._disableTable(false);
}


// ************************************************************************************************************

BMO.OptionsDropDown = function (node) { // Constructor
		
	var widget = dijit.byNode(node);
	
	dojo.connect(widget, 'onChange', function(e) {
//		e.preventDefault();	
		var widgetChanged = this;
		if (e != "" && e != null) {
			widgetChanged.reset();
			window.location.href = e;
		}
	});
		
}
/*
 * Destroy all form dijits
 *
 * @param target is a selector with which to target the destruction of dijits
 *
*/
BMO.DestroyDijits = function (target) {
	//var target = target +" ";
	dojo.query("input", target).forEach(function(item){
		if (dijit.byId(dojo.attr(item,"id"))){
			removeMe = dijit.byId(dojo.attr(item,"id"));
			removeMe.destroyRecursive();
		}
	});
}

/*
 * Creates Dojo Tooltips for selected items *****************************************
 *
 * anchor_id is the ID of the anchor around the tooltip
 * lblOrigin is the Site section that corresponds to the copy inside of bmo.content.js
 *
*/
BMO.InitializeTooltips = function (anchor_id, lblOrigin, lblLookup, lblContent) {
	
	var label = lblContent ? lblContent : lblOrigin[lblLookup || anchor_id];

	new bmo.EditableTooltip({
		connectId: anchor_id,
        label: label
	});
	
	dojo.connect(dojo.byId(anchor_id), "onclick", function(event){
		event.preventDefault();
	});
};


/*
 * Creates Dojo TooltipDialog for selected items *****************************************
 *
 * anchor_id is the ID of the anchor around the tooltip
 * lblOrigin is the Site section that corresponds to the copy inside of bmo.content.js
 * index is integer value to create uniquie dialog window.
 *
*/
BMO.InitializeTooltipDialog = function (anchor_id, lblOrigin, lblLookup, lblContent) {
	
	var label = lblContent ? lblContent : lblOrigin[lblLookup || anchor_id];

	require([
	         "dijit/TooltipDialog",
	         "dijit/popup",
	         "dojo/on",
	         "dojo/dom",
	         "dojo/domReady!"
	     ], function(TooltipDialog, popup, on, dom){
	         var myTooltipDialog = new TooltipDialog({
	             id: anchor_id,
	             content: label,
	             onMouseLeave:function(){
	            	 popup.close(myTooltipDialog);
	             },
	             onMouseOver:function(){
	            	 dijit.popup.open({
		                 popup: myTooltipDialog,
		                 around: dom.byId(anchor_id),
		                 orient:["after-centered"]
		                 });
	             }
	            
	         });

	         on(dom.byId(anchor_id), 'mouseover', function(){
	             dijit.popup.open({
	                 popup: myTooltipDialog,
	                 around: dom.byId(anchor_id),
	                 orient:["after-centered"]
	                 });
	             
	         });
	        on(dom.byId(anchor_id), "mouseleave", function(){
	        	 popup.close(myTooltipDialog);
	         });
	     });
	
	dojo.connect(dojo.byId(anchor_id), "onclick", function(event){
		event.preventDefault();
	});
};


/*
 * Creates Dojo Tooltips for Transaction codes *****************************************
 *
 * anchor_id is the ID of the anchor around the tooltip
 * lblOrigin is the Site section that corresponds to the copy inside of bmo.content.js
 *
*/
BMO.InitializeCodeTooltips = function (anchor_id, lblOrigin, lblLookup, lblContent) {

	var label = lblContent ? lblContent : lblOrigin[lblLookup || anchor_id];
		
	var arr = dojo.query("a[name="+anchor_id+"]");
	var arrayLength = arr.length;
	for (var i = 0; i < arrayLength; i++) {
   			anchor_id = arr[i].id;   			
   			new bmo.EditableTooltip({
				connectId: anchor_id,
       		    label: label
			});
    		dojo.connect(arr[i], "onclick", function(event){
				event.preventDefault();
			});
	}	
};

/*
 * Populate today's date
 *
 * @param
 *
*/
BMO.PopulateDate = function () {
	var currentTime = new Date();
	currentTime = dojo.date.locale.format(currentTime,{selector:"date",locale:"en-US",datePattern:"MMM. dd, yyyy"})
	
	return currentTime;
}

/*
 * Make Required
 *
 * @param target is a selector with which to target the validation
 *
*/
BMO.MakeRequired = function (target) {
	var target = dijit.getEnclosingWidget(target);
	if (target){
		dojo.attr(target,"required","true");
	}
}

/*
 * Make Not Required
 *
 * @param target is a selector with which to target the validation
 *
*/
BMO.MakeNotRequired = function (target) {
	var target = dijit.getEnclosingWidget(target);
	if (target){
		dojo.attr(target,"required","false");
	}
}


/*
 * Set up DateTextField format
 *
 * @param target is a selector with which to target the formatting
 *
*/
BMO.DateTextBoxFormat = function (target) {
	if (target) {
		var target = dijit.getEnclosingWidget(target);
		target.attr("constraints",{selector:"date",datePattern:'MM/dd/yyyy', locale:"en-US"});
	}
}



/*
 * Set up regAnswer1 Validation
 *
 * @param target is a selector with which to target the validation
 *
*/
BMO.regAnswer1 = function (target) {
	if (target) {
		var target = dijit.getEnclosingWidget(target);
		target.attr("regExp",BMO.formValidation.regExpValidations.regAnswer1);
		target.attr("invalidMessage",BMOContent.validationMessages.regAnswer1);
	}
}


/*
 * Set up regAnswer2 Validation
 *
 * @param target is a selector with which to target the validation
 *
*/
BMO.regAnswer2 = function (target) {
	if (target) {
		var target = dijit.getEnclosingWidget(target);
		target.attr("regExp",BMO.formValidation.regExpValidations.regAnswer2);
		target.attr("invalidMessage",BMOContent.validationMessages.regAnswer2);
	}
}


/*
 * Set up regAnswer3 Validation
 *
 * @param target is a selector with which to target the validation
 *
*/
BMO.regAnswer3 = function (target) {
	if (target) {
		var target = dijit.getEnclosingWidget(target);
		target.attr("regExp",BMO.formValidation.regExpValidations.regAnswer3);
		target.attr("invalidMessage",BMOContent.validationMessages.regAnswer3);
	}
}

/*
 * Confirm Values
 *
 * Helper function to compare two form values
 * @param value is the value that needs to be repeated (confirmed)
 *
 */

BMO.ConfirmValue = function (value, constraints)
{
	if (value.length == 0) {
		return false;
	}
    var isValid = false;
    if(constraints && constraints.other)  {
        var otherInput =  dijit.byId(constraints.other);
        if(otherInput) {
               var otherValue = otherInput.value;
                isValid = (value == otherValue);
       }
    }
    return isValid;
}

/*
 * Compare Dates
 *
 * Helper function to compare two form values
 * @param startDate is the dijit of the earlier date
 * @param endDate is the dijit of the later date
 *
 */

BMO.CompareDates = function (startDate, endDate) {
	startDate.validator = function(date){
		var isValid = true;
		if (startDate.value){
			if (endDate.value && endDate.value < startDate.value) {
				isValid = false;
			}
		}
		else{
			isValid = false;
		}
		return isValid;
	};

	endDate.validator = function(date){
		var isValid = true;
		if(endDate.value){
			if (startDate.value && startDate.value > endDate.value) {
				isValid = false;
			}
		}
		else{
			isValid = false;
		}
		return isValid;
	};

	dojo.connect(startDate, "onBlur", function(date) {
		endDate.validate();
	});
	
	dojo.connect(endDate, "onBlur", function(date) {
		startDate.validate();
	});	
}

/*
 * My Messages: Delete Messages function
 *
 * @param target is the anchor that contains the crud URL
 * @param tableView is the table view object, the table that needs refreshing
 *
 */
BMO.MyMessagesDeleteMessage = function (event, target, tableView) {
	checkBoxValues = new Array;
	
	dojo.query("input[type='checkbox']:checked").forEach(function(node, i){
		if (dojo.attr(node,"id") != "selectAllMessages"){
			checkBoxValues.push(dojo.attr(node, "value"));
		}
	});

	var target = event.target,
	deleteURL = dojo.attr(target, "href");

	if (checkBoxValues.length > 0) {
		deleteMessages();
	} else {
	  BMO.MessageManager.add(BMOContent.messageCentreMessages.selectMessage, BMO.MessageManager.types.ERROR);
		return false;
	}
	function deleteMessages() {				

    BMO.MessageManager.close(); // clear old messages
		// Make ajax call to delete row data
		dojo.xhrPost ({
			url: deleteURL,
			handleAs: "json",
			content: {MTD: checkBoxValues, operation: "delete"}, 
			load: function (response, ioArgs) {

				if (response.success) {
					// Make ajax call to update the table
					tableView.refreshTable({operation: "delete"});
				//	updateMsgCount(); // update the message count
				}
				return response; // Always return the response back (required by Dojo)
			},
			error: function (response, ioArgs) { // There was an error with loading
				BMO.MessageManager.add("Failed to load data", BMO.MessageManager.types.ERROR);
				return response;
			}
		});
		// reset the array
		checkBoxValues.length = 0;
	}
}

/*
 * Dojo Extensions here
 *
 */
 
dojo.extend(dojox.widget.Standby,{
//	disableWidget : true,
//    show: function() {
//    	console.log("call show override"); 
//		if (!this.disableWidget) {
//			if(!this._displayed){
//				this._displayed = true;
//				this._size();
//				this._disableOverflow();
//				this._fadeIn();
//			}
//		}	
//	},
//    hide: function() { 
//    	console.log("call hide override"); 
//		if (!this.disableWidget) {
//			if(this._displayed){
//				this._size();
//				this._fadeOut();
//				this._displayed = false;
//				if(this._resizeCheck !== null){
//					clearInterval(this._resizeCheck);
//					this._resizeCheck = null;
//				}
//			}
//		}	
//	},
//    setDisableWidget: function(value) { 
//    	console.log("call setDisableWidget"); 
//		this.disableWidget = value; // boolean
//	}
	zIndex:9999,
	image: "/onlinebanking/images/dots.gif",
	_fadeIn: function(){
		// summary:
		//		Internal function that does the opacity style fade in animation.
		// tags:
		//		private
		var self = this;
		console.log(self.image);
		var underlayNodeAnim = dojo.animateProperty({
			duration: self.duration,
			node: self._underlayNode, 
			properties: {opacity: {start: 0, end: 0}}
		});
		var imageAnim = dojo.animateProperty({
			duration: self.duration,
			node: self._centerNode, 
			properties: {opacity: {start: 0, end: 0}},
			onEnd: function(){
				self.onShow();
			}
		});
		var anim = dojo.fx.combine([underlayNodeAnim,imageAnim]);
		anim.play();
	},

	_fadeOut: function(){
		console.log("my fadeout");
		// summary:
		//		Internal function that does the opacity style fade out animation.
		// tags:
		//		private
		var self = this;
		var underlayNodeAnim = dojo.animateProperty({
			duration: self.duration,
			node: self._underlayNode, 
			properties: {opacity: {start: 0, end: 0}},
			onEnd: function(){
				dojo.style(self._underlayNode,{"display":"none", "zIndex": "-1000"});
			}
		});
		var imageAnim = dojo.animateProperty({
			duration: self.duration,
			node: self._centerNode, 
			properties: {opacity: {start: 0, end: 0}},
			onEnd: function(){
				dojo.style(self._centerNode,{"display":"none", "zIndex": "-1000"});
				self.onHide();
				self._enableOverflow();
			}
		});
		var anim = dojo.fx.combine([underlayNodeAnim,imageAnim]);
		anim.play();
	}

});
 
require(["dojo/aspect"], function(aspect) {
	aspect.after(dijit.form.Select.prototype, "loadDropDown", function(){		
		var option = this.getOptions("");
		
		if(option != null){
			dojo.query("#" + this.dropDown.id + " .dijitMenuItem .dijitMenuItemLabel").forEach(function(node, i){
				if(node.innerHTML == option.label){
					if(node.parentNode != null){
						node.parentNode.style.display = "none";
					}
				}
			});
		}
	});
});

/*
dojo.extend(dijit.form.Select,{
    validate: function( isFocused) { 
		var isValid = this.isValid(isFocused);
		this.state = isValid ? "" : "Error";
		this._setStateClass();
		dijit.setWaiState(this.focusNode, "invalid", isValid ? "false" : "true");
		var message = isValid ? "" : this._missingMsg;
		return isValid;
	}
});
*/
dojo.extend(dijit.form.SimpleTextarea, {
	_onInput: function(/*Event?*/ e){
		// Override TextBox._onInput() to enforce maxLength restriction
		if(this.maxLength){
			var maxLength = parseInt(this.maxLength);
			var value = this.textbox.value.replace(/\r/g,'');
			var overflow = value.length - maxLength;
			if(overflow > 0){
				if(e){ dojo.stopEvent(e); }
				var textarea = this.textbox;
				if(textarea.selectionStart){
					var pos = textarea.selectionStart;
					var cr = 0;
					if(dojo.isOpera){
						cr = (this.textbox.value.substring(0,pos).match(/\r/g) || []).length;
					}
					this.textbox.value = value.substring(0,pos-overflow-cr)+value.substring(pos-cr);
					textarea.setSelectionRange(pos-overflow, pos-overflow);
					// Set Scrolltop for FF & Chrome
					textarea.scrollTop = 999999;
				}else if(dojo.doc.selection){ //IE
					textarea.focus();
					var range = dojo.doc.selection.createRange();
					// delete overflow characters
					range.moveStart("character", -overflow);
					range.text = '';
					// show cursor
					range.select();
				}
			}
			this._previousValue = this.textbox.value;
			
		}
	}	
});

dojo.extend(dijit.form.Form, {
 	isValid: function(checkClass){
 		// summary:
 		//		Returns true if all of the widgets are valid

 		// This also populate this._invalidWidgets[] array with list of invalid widgets...
 		// TODO: put that into separate function?   It's confusing to have that as a side effect
 		// of a method named isValid().

		this._invalidWidgets = dojo.filter(this.getDescendants(), function(widget){
			if (checkClass) {
				return !widget.disabled && widget.isValid && !widget.isValid() && dojo.hasClass(widget.domNode, checkClass);
			} else {
				return !widget.disabled && widget.isValid && !widget.isValid();
			}
 		});
		return !this._invalidWidgets.length;
	}
});

// Extend the Button dijit so that the check icon is removed
dojo.extend(dijit.form.Button,{
    postCreate: function() { 
		
		dojo.setSelectable(this.focusNode, false);
		this.inherited("postCreate", arguments);
		
		var thisDomNode = this.domNode;
		if (this.baseClass === "dijitButton") {
			
			var iconCar = dojo.query(".dijitToggleButtonIconChar", thisDomNode);
			
			iconCar.length && dojo.destroy(iconCar.parent(".dijitInline")[0]);
		}
		
	}
});

dojo.extend(dijit.form.CurrencyTextBox, {
	format: function(/*Number*/ value, /*dojo.number.__FormatOptions*/ constraints){
		// summary:
		//		Formats the value as a Number, according to constraints.
		// tags:
		//		protected/
		if(typeof value != "number"){ return String(value); }
		if(isNaN(value)){ return ""; }
		if(("rangeCheck" in this) && !this.rangeCheck(value, constraints)){ return String(value) }
		if(this.editOptions && this._focused){
			constraints = dojo.mixin({}, constraints, this.editOptions);
		}
		return BMO.numberFormat(value, constraints);
	}
});

BMO.numberFormat = function(/*Number*/value, /*dojo.number.__FormatOptions?*/options){
	options = dojo.mixin({}, options || {});
	var locale = dojo.i18n.normalizeLocale(options.locale);
	var bundle = dojo.i18n.getLocalization("dojo.cldr", "number", locale);
	options.customs = bundle;
	var pattern = "";
	if (locale == 'en') {
		pattern = "#,##0.00";
	} else if (locale == 'fr') {
		pattern = "#,##0.00";
	} else {
		pattern = options.pattern || bundle[(options.type || "decimal") + "Format"];
	}
	if(isNaN(value) || Math.abs(value) == Infinity){ return null; } // null
	return dojo.number._applyPattern(value, pattern, options); // String
}

/**
 *  Cloning nodes in alerts_lp_manage_delivery_methods_details
 *
 * 	@param nodeContainer - the parent of .narrowBox, the item that will be cloned
 * 	@param maxValue - max number of times element can be cloned and placed on page
 * 	@param onClonePlace - empty callBack function after cloned element is placed on page (can be used to disable widgets)  
 */

BMO.cloneNode = function(nodeContainer, maxValue, onClonePlace) {
	var dojoNodeContainer = dojo.byId(nodeContainer);
	var maxValue =  maxValue;
	var onClonePlace = (onClonePlace) ? onClonePlace : function(){};
	
	// Append a "remove" link to the node
	var settingTemplate = dojo.query(".narrowBox", dojoNodeContainer).clone().append("<a href='#' class='removeComponent'>Remove</a>"); //todo - move string to template
	BMO.dojoFormSetUp(dojo.query(dojoNodeContainer));
	BMO.dojoCalendar(dojo.query(".ptCalendar"));

	var cloneCounter = null;
	dojo.behavior.apply();
	
	// Count the number of initial boxes
	var componentStartIndex = dojo.query(".narrowBox", dojoNodeContainer).length;
		
	// Start the clone counter to the initial value so that it incrememnts properly
	cloneCounter = componentStartIndex;
			
	dojo.query(".addComponent", dojoNodeContainer).connect("onclick", function(e){
		e.preventDefault();

		// Count the current number of visible boxes
		var componentCurrentIndex = dojo.query(".narrowBox", dojoNodeContainer).length;		
	
		if (!maxValue || componentCurrentIndex < maxValue) {

			cloneCounter ++;
			
			var cloneSuffix = "clone-" + cloneCounter;
			
			var newSettings = settingTemplate.clone();
			
			newSettings.addClass("clone-"+ cloneCounter);
			
			newSettings.query('label').forEach(function(e){
				var newFor = dojo.attr(e, "for") + cloneSuffix;
	            dojo.attr(e, "for", newFor);
	        });
			
			newSettings.query('[id]').forEach(function(e){
	            e.id = e.id + cloneSuffix;
	        });
	        
	        // Name will not have the clone- suffix and will only increment the dijit
	        newSettings.query('[name]').forEach(function(e){
	            // var newName = dojo.attr(e, "name") + cloneCounter;
	            var replaceIndex = "[" + (cloneCounter - 1) + "]."
	            var newName = dojo.replace(dojo.attr(e, "name"), [replaceIndex], /\[([^\]]+)\]\./g);	            
	            dojo.attr(e, "name", newName);
	        });
	        
	        // reset form values - may not be desired behavior 
	        //newSettings.query("input").attr("value", "");
	        
	        BMO.dojoFormSetUp(newSettings, true);
	        BMO.dojoCalendar(dojo.query(newSettings).query(".ptCalendar"));
			dojo.place(newSettings[0], dojo.query(".seeMoreContainer", dojoNodeContainer)[0], "before");
			dojo.behavior.apply();
			
			componentCurrentIndex ++;
			
			// if the number of visible boxes = the max number, hide the "Add" button
//			if (componentCurrentIndex == maxValue) {
//				dojo.query(this).addClass("hide");
//			}
			
			onClonePlace({node: newSettings[0]});
		}
	});
			
	// Binding the removeComponent link to remove its parent box
//	var removeComponent = {
//	   ".removeComponent" : {
//	        onclick: function(e){
//				e.preventDefault();
//				dojo.destroy(dojo.NodeList(e.currentTarget).parent(".narrowBox")[0]);
//				var componentNameIndex = dojo.query(".narrowBox", dojoNodeContainer).length;
//				if (componentNameIndex < maxValue) {
//					dojo.query(".addComponent", dojoNodeContainer).removeClass("hide");
//				}
//	        }
//	    }
//	};
//	dojo.behavior.add(removeComponent);
}

/**
 * Dijits have to be manually created so that their original HTML can be saved for cloning
 * This is not an exhaustive list of dijits, but only for those required in alerts_lp_manage_delivery_methods_details.shtml
 */
 
// Set Up which dijit is created
BMO.dojoFormSetUp = function(node, reset) {			
	node.query("input, select").forEach(function(item){
		var disabled = (dojo.attr(item,"disabled")) ? true : false;
		var required = (dojo.hasClass(item,"required")) ? true : false;
		var node = item.nodeName.toLowerCase();
		
		switch(node){
			case "select":
				BMO.makeDojoSelect(item, disabled, required);
				break;
			case "input":
			var type = dojo.attr(item, "type");
			
				if(type.toLowerCase() != "submit"){
					if (type === "checkbox")  {
						BMO.makeDojoCheckBox(item, disabled, required);
					}
					
					// else, assume it's a text-box
					//	if (type === "text") // TODO is never true in IE7
					
					else {
						if (dojo.hasClass(item,"dateTextBox")) {					
							if (reset) {
								dojo.attr(item, "value", new Date());
							} else {
								dojo.attr(item, "value", new Date(dojo.attr(item, "value")));
							}
							BMO.makeDojoDateInput(item, disabled, required);
						}
						
						else if (dojo.hasClass(item,"currencyTextBox")) {
							if (reset) {
								dojo.attr(item, "value", "");
							}
							BMO.makeDojoCurrencyInput(item, disabled, required);
						}
						
						else if (dojo.hasClass(item,"numberTextBox")) {
							if (reset) {
								dojo.attr(item, "value", "");
							}
							BMO.makeDojoNumberInput(item, disabled, required);
						}
						
						else {
							if (reset) {
								dojo.attr(item, "value", "");
							}									
							BMO.makeDojoTextInput(item, disabled, required);
						}
				}
			}
			break;
			default:
			///
		}
	});	
}

// set up Number input
BMO.makeDojoNumberInput = function(item, disabled, required) {
	new dijit.form.NumberTextBox({
		"id":dojo.attr(item,"id"),
		"name":dojo.attr(item,"name"),
		"class":dojo.attr(item,"class"),
		"disabled":disabled,
		"required":required,
		"value":dojo.attr(item,"value"),
		"constraints": {
			min: 1,
			max:100000,
			places:0
		}
	},item);
};
 
// set up currency input
BMO.makeDojoCurrencyInput = function(item, disabled, required) {
	var min = 0.01;
	if(dojo.attr(item, "min")) {
		min = parseFloat(dojo.attr(item, "min"));
	}
	
	new dijit.form.CurrencyTextBox({
		"id":dojo.attr(item,"id"),
		"name":dojo.attr(item,"name"),
		"class":dojo.attr(item,"class"),
		"disabled":disabled,
		"value":dojo.attr(item,"value"),
		"maxLength":dojo.attr(item,"maxlength"),
		"constraints":{min:min,places:'0,2',fractional:[true,false]},
		"invalidMessage":BMOContent.validationMessages.currencyTextboxFormat,
		"rangeMessage":BMOContent.validationMessages.currencyTextboxFormat,
		"required":required
	},item);
};

// set up date input
BMO.makeDojoDateInput = function(item, disabled, required) {
	new dijit.form.DateTextBox({
		"id":dojo.attr(item,"id"),
		"name":dojo.attr(item,"name"),
		"class":dojo.attr(item,"class"),
		"disabled":disabled,
		"value": new Date(dojo.attr(item, "value")),
		"hasDownArrow": false,
		"constraints": {
			selector:"date",
			datePattern:'MM/dd/yyyy',
			locale:"en-US"
		},
		"required":required
	},item);
};

// set up regular text elements
BMO.makeDojoTextInput = function(item, disabled, required) {
	new dijit.form.ValidationTextBox({
		"name":dojo.attr(item,"name"),
		"class":dojo.attr(item,"class"),
		"value":dojo.attr(item,"value"),		
		"disabled":disabled,
		"required":required
	},item);
};

// set up checkbox elements
BMO.makeDojoCheckBox = function(item, disabled, required) {
	var checked = (dojo.attr(item,"checked")) ? true : false;
	new dijit.form.CheckBox({
		"name":dojo.attr(item,"name"),
		"class":dojo.attr(item,"class"),
		"checked":checked,
		"disabled":disabled,
		"required":required
	},item);
};

// set up select elements
BMO.makeDojoSelect = function(item, disabled, required) {
	var selectWidget = new dijit.form.Select({
		"name": dojo.attr(item, "name"),
		"class": dojo.attr(item,"class"),
		"disabled": disabled,
		"required": required,
		"value": String(dojo.attr(item,"value"))
	},item);
	
	dojo.connect(selectWidget, 'onChange', function(e) {
		var newWidget = this;
		newWidget.validate();
	});
};		

// set Up Calendar Icon event
BMO.dojoCalendar = function(calendarNode) {
	calendarNode.forEach(function(node, index, nodelist){
		dojo.connect(node, "onclick", function(event){
			event.preventDefault();
			dijit.focus(dojo.query(event.currentTarget).prev()[0]);
		});
	});
};

/**
 * Extends dojo.xhr method to provide:
 * . Additional http header
 * . ajax exception handling
 */
(function(){
    /**
     * This will be called when the AJAX call get response succesfully and without http error
     */
    var loadWithErrorHandling = function(response, ioArgs) {
		var ajaxErrorCode, ajaxErrorMessage;

		var handleAs = ioArgs.args.handleAs || "text";
   		if(handleAs == "text") {
   			// AJAX is a text, but if exception happens, it still return json string
   			try {
   				if(response.indexOf('ajaxErrorCode') > 0) {
					var jsonResponse = dojo.fromJson(response);
					ajaxErrorCode = jsonResponse.ajaxErrorCode;
					ajaxErrorMessage = jsonResponse.ajaxErrorMessage;
   				}
	   		} catch(e) {
	   			// not a real json string, so no exception happen, ignore it
	   		}
   		} else { // json, json-compatible...
    		ajaxErrorCode = response.ajaxErrorCode;
    		ajaxErrorMessage = response.ajaxErrorMessage;
   		}

    	// Handle errors
    	if(ajaxErrorCode) {
    		var contextPath = '/';
    		var pos = window.location.href.indexOf('/', 8); // Skip the https://
    		if(pos > 0) {
    			var endpos = window.location.href.indexOf('/', pos + 1);
    			contextPath = window.location.href.substring(pos, endpos);
    		}
    		
    		// Server side exception happens
			if(ajaxErrorCode == 'SEHigh' || ajaxErrorCode == 'SESevere') { 
				// Get the primary, second and third navigation path from 
	    		var href = window.location.href;
	    		var pos = href.indexOf(contextPath);
	    		var endpos = href.indexOf('?', pos);
	    		if(endpos > 0) {
	    			href = href.substring(pos + contextPath.length + 1, endpos);
	    		} else {
	    			href = href.substring(pos + contextPath.length + 1);
	    		}
	    		// Parse th href to get appType, primary, second and third navigation path
	    		var appType = 'OLB', primary='nul', second='nul', third='nul';
	    		var paths = href.split('/');
	    		if(paths.length > 0) {
	    			appType = paths[0];
	    		}
	    		if(paths.length > 1) {
	    			primary = paths[1];
	    		}
	    		if(paths.length > 2) {
	    			second = paths[2];
	    		} else {
	    			// set the default second navigation path
	    			if(primary == 'tra') {
	    				second = 'acc';
	    			} else if(primary == 'ppr') {
	    				second = 'mci';
	    			} else if(primary == 'sre') {
	    				second = 'eve';
	    			}
	    		}
	    		if(paths.length > 3) {
	    			third = paths[3];
	    		}
	    		
    			if(ajaxErrorCode == 'SEHigh') {
					// Redirect to the SecurityErrorAction and pass in the service error code and path
					// The ajaxErrorMessage contains real service error code
					var action = '/' + primary + '/' + second + '/' + third + '/SecurityError';
					var ajaxErrorPath = response.ajaxErrorPath;
					goto(action, {errorCode:ajaxErrorMessage, path:ajaxErrorPath});
    			} else {
					// Redirect to SecuritySignOut action when it happens. Security Exception: Data Tamping, Cross site scripting
					var action = '/' + primary + '/' + second + '/' + third + '/SecuritySignOut';
					goto(action);
    			}
    		} else if(ajaxErrorCode == 'SEE') { 
    			// Any AJAX call in the header/sidenav should be suspend
    			// In some case, for example: when user change password, if they input wrong old password 3 times,
    			// the card get suspended, session became invalid and cardSuspended.jsp is displayed
    			// The AJAX calls in the header/sidenav in cardSuspended.jsp will redirect page to Timeout.jsp
				if(!isAJAXCallsIngored(ioArgs.url)) {
	    			// Redirect to Timeout.jsp when SessionExpiryException
    				window.location = contextPath + '/jsp/Timeout.jsp';
    			}
    		} else if(ajaxErrorCode == 'UE') { 
    			// Display error on the top of the page
    			BMO.MessageManager.add(ajaxErrorMessage, BMO.MessageManager.types.ERROR, ajaxErrorCode);
    		} 
    		else if(ajaxErrorCode == 'FDBP_ERROR'){
	    		throw response.ajaxErrorCode;
    		}
    		else {
    			// For others exceptions which may MidTierExcetpion or others, display error on the top of page
    			BMO.MessageManager.add(ajaxErrorMessage, BMO.MessageManager.types.ERROR, ajaxErrorCode);
    		}
    	} else {
    		// No exception in the result return, call the original load function
	    	if(ioArgs.args.orgLoad) {
	    		ioArgs.args.orgLoad(response, ioArgs);
	    	}
	    }
    };
    
    /**
     * Check if the AJAX call should be ignored
     */
    var isAJAXCallsIngored = function(url) {
    	var urlsIngored = {
    		urlMessagesCount: '/messagesCount', 
    		urlShortcuts: '/myShortcuts?mode=form3'
    	};
    	
    	var shouldIgored = false;
 		for(var name in urlsIngored) {
 			if(url.indexOf(urlsIngored[name]) >= 0) {
 				shouldIgored = true;
 				break;
 			}
 		}
 		
 		return shouldIgored;
    };
    
    /**
     * Supress the http status code. 
     * If the http request is not return OK, we don't display any error to user
     */
    var httpCodeErrorHandler = function(error, ioArgs) {
		if(error.dojoType) {
			if(error.dojoType=="cancel" || error.dojoType=="timeout") {
				// If user cancelled the request, we should not display the message
	  			console.log("Error on AJAX call: error.dojoType=" + error.dojoType + ", Error message is: " + error);
	  			
	  			// hide the standby widget with id: "alertStandby" if an error exists.
	  			var myStandby = dojo.byId("alertStandby");
				if (myStandby) {
					basicStandby.hide();
				}		
		    	if(error.dojoType=="timeout" && ioArgs.args.orgError) {	     	
		    		ioArgs.args.orgError(error, ioArgs);
		    	}
	  			return;
			}
		}
    	
    	var isDocumentOk = dojo._isDocumentOk(ioArgs.xhr);
    	if(isDocumentOk) {
    		// When session timeout and user try to do sorting or other operations which issue AJAX call
    		// The server will response with Timeout.jsp, we have check it by search the content inside
    		var timeoutTag = '<h1 id="mainHeader">Expired Session</h1>';
    		if(ioArgs.xhr.responseText.indexOf(timeoutTag) > 0) {
    			// Get Timeout.jsp, redirect to timeout.jsp
    			var contextPath = '/';
	    		var pos = window.location.href.indexOf('/', 8); // Skip the https://
	    		if(pos > 0) {
	    			var endpos = window.location.href.indexOf('/', pos + 1);
	    			contextPath = window.location.href.substring(pos, endpos);
	    		}
    		
    			window.location = contextPath + '/jsp/Timeout.jsp';
    		}
    	
    		// Code error, developer should see that
    		if(ioArgs.args.orgError) {
    			ioArgs.args.orgError(error, ioArgs);
    		} else {
    			BMO.MessageManager.add("Failed to parse AJAX response. Error message is: " + error + ", response text: " + ioArgs.xhr.responseText, BMO.MessageManager.types.ERROR);
    		}
    	} else {
			var status = ioArgs.xhr.status || 0;
			if(status == "400" || status=="404" || status=="403") {
				// URL is invalid, developer should correct it
				BMO.MessageManager.add("Error on AJAX call. Error message is: " + error, BMO.MessageManager.types.ERROR);
			} else {
				// Supress the errors
				console.log("Error on AJAX call, http status=" + status + ", Error message is: " + error);
			}
    	}
    };
    
    /**
     * We extends the dojo.xhr to add additional headers and handle exceptions
     */ 
    // Check if is defined, in a page with model diagram, this script may be loaded twice
    if(!dojo.orgXHR) {
	    dojo.orgXHR = dojo.xhr;
	    
	    dojo.xhr = function(/*String*/ method, /*dojo.__XhrArgs*/ args, /*Boolean?*/ hasBody){
	    	// Add charset=UTF-8
			if(args.headers){
				if ("Content-Type" in args.headers) {
					for(var hdr in args.headers){
						if(hdr.toLowerCase() === "content-type"){
							var contentType = args.headers[hdr];
							var testType = contentType.toUpperCase();
							if ((testType.indexOf('CHARSET=') == -1)) {
								args.headers[hdr] = contentType + '; charset=UTF-8';
							}	
						}	
					}
				} else {
					dojo.mixin(args.headers, {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
				}
			} else {
				args.headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
			}
			
			// Replace the load function with new load function with exception handling logic
			if(args.load) {
				args.orgLoad = args.load;
			}
			args.load = loadWithErrorHandling;
			
			// Replace the error function with new one which will suppress the http status error 
			if(args.error) {
				args.orgError = args.error;
			}
			args.error = httpCodeErrorHandler;
			
			// Call the orginal one
	    	return dojo.orgXHR(/*String*/ method, /*dojo.__XhrArgs*/ args, /*Boolean?*/ hasBody);
	    };
	}
})(); 
/*
 * A small dojo function to programmatically trigger html events.
 *
 * Example usage: dojo.trigger(myButtonId, "click")
 *
 * @param node, the html node (or it's id) to trigger the event for
 * @param e, the String name of the event to trigger
 *
 */
dojo.mixin(dojo, {
	trigger: function(node, e) {
		
		var node = dojo.byId(node), event;
		
		if (document.createEvent) {
			event = document.createEvent("HTMLEvents");
			event.initEvent(e, true, true);
			node.dispatchEvent(event)
		} else {
			event = document.createEventObject();
			event.eventType = 'on' + e;
			node.fireEvent(event.eventType, event)
		}

	}
});


//** Changing the form validation//
dojo.extend(dijit.form.Form, {
		validate: function(){
			// summary:
			//		returns if the form is valid - same as isValid - but
			//			provides a few additional (ui-specific) features.
			//			1 - it will highlight any sub-widgets that are not
			//				valid
			//			2 - it will call focus() on the first invalid
			//				sub-widget
			var didFocus = false;
			return dojo.every(dojo.map(this.getDescendants(), function(widget){
				// Need to set this so that "required" widgets get their
				// state set.
				widget._hasBeenBlurred = true;
				var valid = widget.disabled || !widget.validate || widget.validate();
				if(!valid){
					BMO.MessageManager.add(BMOContent.validationMessages.genericErrorMessage, BMO.MessageManager.types.ERROR);
					var errorArea = dojo.byId("messageManagerArea");
					if(errorArea != null && typeof errorArea  != 'undefined'){
						//errorArea.
						errorArea.setAttribute("tabIndex","-1");
						errorArea.focus();
					}
					//window.scrollTo(0,0);
				}else{
					var errorDivBoxElt = document.getElementById('serverSideErrorBoxId');					 
					if(errorDivBoxElt != null && typeof errorDivBoxElt  != 'undefined'){
						try{
							errorDivBoxElt.innerHTML='';
							errorDivBoxElt.className='';
						}catch(err){
				
						}
					}
					//BMO.MessageManager.clear();
				}				
				//if(!valid && !didFocus){
					// Set focus of the first non-valid widget
					//dijit.scrollIntoView(widget.containerNode || widget.domNode);
					//widget.focus();
					//didFocus = true;
				//}
	 			return valid;
	 		}), function(item){ return item; });
		}	
});

// extend the drop down portion of Select to force more native combo-box behaviour.
// - on alt-up_arrow, close the pop-up
// - plan was that on keyboard navigation, trigger a selection as we move.  This will break a LOT of screens.
// - on tab out of drop-down, trigger a click() - default behaviour is to abandon selection, which is pretty annoying
dojo.extend(dijit.form._SelectMenu, {
	_onItemFocus: function(/*MenuItem*/ item){
		this.inherited("_onItemFocus", arguments); 
	},
   
	_onKeyPress: function(/*Event*/ evt){
		// close the popup when we get alt-up-arrow
		if (evt.altKey && !evt.shiftKey && !evt.ctrlKey && evt.charOrCode == dojo.keys.UP_ARROW) {
			// select the current item
			if (this.focusedChild) {
				this.focusedChild.onClick();
			}
			
			// close the drop down
			this.onCancel(false);
		}
		if (!evt.altKey && !evt.ctrlKey && evt.charOrCode == dojo.keys.TAB) {
			// select the current item
			if (this.focusedChild) {
				this.focusedChild.onClick();
			}
			// fall through to get the rest of the behaviour			
		}
		this.inherited("_onKeyPress", arguments);
	}
});

dojo.extend(dijit.form.FilteringSelect, {
	searching : false,
	
	postCreate: function(){
		this.inherited("postCreate", arguments);
		this.queryExpr = "*${0}*";
		this.autoComplete = false;
	},
	
	postMixInProperties: function(){
		this.inherited('postMixInProperties', arguments);
		
		// Update the _isvalid field
		this._isvalid = !this.required;

		// Set the regExp to default value, so the validation logic will run correctly
		this.regExp = ".*";
	},

	// Override this function. so all spaces will considered as empty	
	_isEmpty : function(value) {
		return /^$/.test(value); // Boolean
	},
	
	// For FilteringSelect, is result is empty, it is invalid
	_isValidSubset: function(){
		return this._isvalid;
	},
		
	_onKeyPress: function(/*Event*/ evt){ 
		this.searching = true;
		
		this.inherited("_onKeyPress", arguments);
	},
	
	_onFocus: function(/*Event*/ evt){ 
	    if(this.id == 'ptPayeeName') {
	    //if(this.id == 'ptPayeeName' && evt == 'mouse') {
	       if(this.textbox.value.length >= 3) {	         
			  	this.searching = true;	
			  	this.item = undefined;	
			  	//this.searchTimer = setTimeout(dojo.hitch(this, "_startSearchFromInput"),1);
			  	this._startSearchFromInput();
			  
		   }
		} 
		    this.inherited("_onFocus", arguments);
		
	},
	
	_startSearch: function(/*String*/ key){
		if(this.id == 'ptPayeeName') {
			// For payee in Add a Payee page, start search until user input 3 characters
			if(this.textbox.value.length >= 3) {
				// console.log("Start serach for " + this.textbox.value);
				//Add loading treatment during search;
				if (document.getElementById("loading") != null){
					document.getElementById("loading").style.display = 'block';
				}
				//Hide toolTip during Search;				
				this.displayMessage("");
				this.inherited("_startSearch", arguments);
			} else {
				// console.log("Don't search until user input more than 3 characters");
				this._setStateClass();
				if(this.textbox.value.length >= 1){
					this._set("state", "Error");
				 }else{
					this._set("state", "");					
				 }
				this._hideResultList();
				if (document.getElementById("loading") != null){
					document.getElementById("loading").style.display = 'none';
				}
			}
		} else {
			this.inherited("_startSearch", arguments);
		}
	},	
	_openResultList: function(/*Object*/ results, /*Object*/ dataObject){
		if (document.getElementById("loading") != null){
					document.getElementById("loading").style.display = 'none';
		}
		this._isvalid = results.length != 0; // FIXME: should this be greater-than?
		if(this.id == 'ptPayeeName') {
			if(!(this._isvalid)){
				this.displayMessage(BMOContent.validationMessages.payeeNotFound);
			   }
		}
		if(this.id == 'filterPayee') {
			if(!(this._isvalid)){
				this.state= "Error";
				this._setStateClass();
				var localeLangCode = BMOContent.language.code;
				if (localeLangCode == "en") {
					this.displayMessage("There were no matches found.");
					}
				else{
					this.displayMessage("Votre recherche n'a donnÈ aucun rÈsultat.");
					}					
			   }
			else{
				this.state= "";
				this._setStateClass();
				}
		}
		this.inherited("_openResultList", arguments);
		// dijit.form.FilteringSelect.prototype._openResultList.apply(this, arguments);

		// Searching is done and found something, don't have to call _refreshState
		this.searching = false;
	},
	_hideResultList: function(){ 
		this.inherited("_hideResultList", arguments);

		// Searching is done and doing validate		
		this.searching = false;
		this._refreshState();
	},
	validate: function(isFocused){
		// Doing the searching, disable the validate
		if(this.searching) {
			return true;
		}

		// It is not working to call this.inherited(...), so have to copy the logic here
		// return this.inherited("validate", arguments);
		var message = "";
		var isValid = this.disabled || this.isValid(isFocused);
		if(isValid){ this._maskValidSubsetError = true; }
		var isValidSubset = !isValid && isFocused && this._isValidSubset();
		var isEmpty = this._isEmpty(this.textbox.value);
		if(isEmpty){ this._maskValidSubsetError = true; }
		this.state = (isValid || (!this._hasBeenBlurred && isEmpty) || isValidSubset) ? "" : "Error";
		if(this.state == "Error"){ this._maskValidSubsetError = false; }
		this._setStateClass();
		dijit.setWaiState(this.focusNode, "invalid", isValid ? "false" : "true");
		if(isFocused){
			if(isEmpty){
				message = this.getPromptMessage(true);
			}
			if(!message && (this.state == "Error" || (isValidSubset && !this._maskValidSubsetError))){
				message = this.getErrorMessage(true);
			}

			if(this.id == 'ptPayeeName') {
				// For payee in Add a Payee page, start search until user input 3 characters
				if(this.textbox.value.length < 3) {
					this.displayMessage(BMOContent.validationMessages.payeeTooShort);
				} else {
					this.displayMessage(message);
				}
			} else {
				this.displayMessage(message);
			}
		}

		return isValid;
	},
	
	doHighlight: function(/*String*/label, /*String*/find){
		// summary:
		//                      Highlights the string entered by the user in the menu.  By default this
		//                      highlights the first occurence found. Override this method
		//                      to implement your custom highlighing.
		// tags:
		//                      protected
		
		// Add greedy when this.highlightMatch == "all"
		var modifiers = "i"+(this.highlightMatch == "all"?"g":"");
		var escapedLabel = this._escapeHtml(label);
		find = dojo.regexp.escapeString(find); // escape regexp special chars
		var ret = escapedLabel.replace(new RegExp("("+ find +")", modifiers),
		                        '<span class="dijitComboBoxHighlightMatch">$1</span>');
		return ret;// returns String, (almost) valid HTML (entities encoded)
	}
});


/**
 * Extend the dojo component
 */
 dijit.form.CurrencyTextBox.extend({
	 	decimalPlaces : 2,
	 	
		 _isValidSubset: function(/*Boolean*/ isFocused){
		       var ret = this.inherited("_isValidSubset", arguments);
		       if(ret) {
		             // Extend to check if the value has '(' inside
		             if(this.textbox.value.indexOf('(') >=0 ) {
		                   return false;
		             }
		       }
		       
		       return ret;
		 },
		 
		 validator: function(/*anything*/value, /*dijit.form.ValidationTextBox.__Constraints*/constraints){
		 // summary:
		 //          Overridable function used to validate the text input against the regular expression.
		 // tags:
		 //          protected
		 dojo.mixin(constraints, {locale:dojo.locale});
		 var reResult = (new RegExp("^(?:" + this.regExpGen(constraints) + ")"+(this.required?"":"?")+"$")).test(value);
		 
		 if(!reResult && constraints.locale == "fr"){
			 constraints.locale="en";
		       reResult = (new RegExp("^(?:" + this.regExpGen(constraints) + ")"+(this.required?"":"?")+"$")).test(value);
		 }
		 return (reResult &&
		       (!this.required || !this._isEmpty(value)) &&
		       (this._isEmpty(value) || this.parse(value, constraints) !== undefined)); // Boolean
		 },
		 
       isValid: function(/*Boolean*/ isFocused){
             // Overrides dijit.form.RangeBoundTextBox.isValid to check that the editing-mode value is valid since
             // it may not be formatted according to the regExp vaidation rules
    	   	this.value = this.textbox.value;
             if(!this._focused || this._isEmpty(this.value)){
                   return this.validator(this.value, this.constraints) &&
                                     ((this._isEmpty(this.value) && !this.required) || this.isInRange(isFocused));
             }else{
                   var v = this.attr('value');
                   if(!isNaN(v) && this.rangeCheck(v, this.constraints)){
                         if(this.constraints.exponent !== false && /\de[-+]?\d/i.test(this.value)){ // exponential, parse doesn't like it
                               return true; // valid exponential number in range
                         }else{
                               return this.validator(this.value, this.constraints) &&
                                     ((this._isEmpty(this.value) && !this.required) || this.isInRange(isFocused));
                         }
                   }else{
                         if(v == undefined && !isNaN(this.value)){
                               return this.validator(this.value, this.constraints) &&
                                     ((this._isEmpty(this.value) && !this.required) || this.isInRange(isFocused));
                         } else {
                               return false;
                         }
                   }
             }
       },

       onBlur : function() { 
       		this.inherited("onBlur", arguments);
      	 	this.formatTrailingZeros();
       }, 
       
       formatTrailingZeros : function() { 
                 var value = this.get('value');
                 if ((typeof this.decimalPlaces == 'number') && !isNaN(value)) { 
                         this.textbox.value = this.format(value, { 
                                 places : this.decimalPlaces, 
                                 locale : this.constraints.locale 
                         });
                         this.displayedValue = this.textbox.value;
                         this._setStateClass(); 
                 } 
         }        

});




/*
 * My epost Messages: Delete Messages function
 *
 * @param target is the anchor that contains the crud URL
 * @param tableView is the table view object, the table that needs refreshing
 *
 */
BMO.MyEpostMessagesDeleteMessage = function (event, target, tableView) {
	checkBoxValues = new Array;
	
	dojo.query("input[type='checkbox']:checked").forEach(function(node, i){
		if (dojo.attr(node,"id") != "selectAllMessages"){
			checkBoxValues.push(dojo.attr(node, "value"));
		}
	});

	var target = event.target,
	deleteURL = dojo.attr(target, "href");

	if (checkBoxValues.length > 0) {
		deleteMessages();
	} else {
	  	BMO.MessageManager.add(BMOContent.ePostMessageSelectMessages.selectMessage, BMO.MessageManager.types.ERROR);
		window.scrollTo(0,0);
		return false;
	}
	function deleteMessages() {	
	    BMO.MessageManager.close(); // clear old messages
		// Make ajax call to delete row data
		dojo.xhrPost({
			url: deleteURL,
			handleAs: "json",
			content: {MTD: checkBoxValues, operation: "delete"}, 
			load: function (response, ioArgs) {

				if (response.success) {

					// Make ajax call to update the table
					tableView.refreshTable({operation: "delete"});

				}

				return response; // Always return the response back (required by Dojo)
			},
			error: function (response, ioArgs) { // There was an error with loading
				console.log("Failed to load data: My epost Messages");
				return response;
			}
		});
		// reset the array
		checkBoxValues.length = 0;
	}
}

