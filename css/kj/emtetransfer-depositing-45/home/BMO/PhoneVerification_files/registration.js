/**
 *	Validation for Registration pages
 *
 */

(function() {
	dojo.addOnLoad(function() {
		// Store our validation messages and regexps
		var regExpValidations = BMO.formValidation.regExpValidations,
		invalidMessages = BMOContent.validationMessages,
		passwordMatch = dijit.byId("reg_RepeatPassword");							

		// Validate Email Address
		dojo.query(".emailValidation").forEach(function(target){
			BMO.formValidation.emailValidation(target);
		});

		
		// Validate Account Numbers
		dojo.query(".accountValidation").forEach(function(target){
			//BMO.formValidation.validateAccountNumbers(target);
		});
		
		// Validate Password Fields
		dojo.query(".passwordValidation").forEach(function(target){
			BMO.formValidation.passwordValidation(target);
		});
	
		// Validate regAnswer1
		dojo.query(".regAnswer").forEach(function(target){
			BMO.regAnswer1(target);
		});
		
		// Validate regAnswer2
		dojo.query(".regAnswer2").forEach(function(target){
			BMO.regAnswer2(target);
		});
		
		// Validate regAnswer3
		dojo.query(".regAnswer3").forEach(function(target){
			BMO.regAnswer3(target);
		});
		
		// Validate Phone
		dojo.query(".regBusinessPhone").forEach(function(target){
			BMO.formValidation.phoneValidation(target);
		});
		
		// Validate challenge questions
		dojo.query(".regAnswer").forEach(function(target){
			BMO.formValidation.challengeValidation(target);
		});

		// Validate matching passwords
		if (passwordMatch){
			//passwordMatch.validator = BMO.ConfirmValue;
			passwordMatch.attr("constraints",{'other':'reg_NewPassword'});
			//passwordMatch.attr("intermediateChanges","false");
			//passwordMatch.attr("invalidMessage",invalidMessages.passwordMatch);
		}

		console.log("exit!");
	});
})();
/**
 *	This file is used for any js work that is "Registration & Sign In & Reset Password" module
 *
 */
 
 
 dojo.extend(dijit.form.ValidationTextBox,{
 		validate: function(/*Boolean*/ isFocused){
			// summary:
			//		Called by oninit, onblur, and onkeypress.
			// description:
			//		Show missing or invalid messages if appropriate, and highlight textbox field.
			// tags:
			//		protected
			var message = "";
			var isMatch = true;
			var isValid = this.disabled || this.isValid(isFocused);

			if (isValid && this.constraints && this.constraints.other) {
				var otherInput =  dijit.byId(this.constraints.other);
				if (otherInput) {
               		var otherValue = otherInput.value;
					var thisValue =  this.textbox.value;
                	isMatch = (thisValue == otherValue);
                }
			}
			isValid = isValid && isMatch;
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
				if (!isMatch) {
					message = BMOContent.validationMessages.passwordMatch;
				}
			}
			this.displayMessage(message);
			return isValid;
		}
});
 
(function() {
	dojo.addOnLoad(function() {
	
		if (dojo.query(".reg_enterAccInfoCard").length) {
			var registrationMessages = BMOContent.tooltipMessages.registrationMessages,
				regExpValidations = BMO.formValidation.regExpValidations,
				ttregCardNumber = dojo.byId("ttregCardNumber"),
				ttregAccountNumber = dojo.byId("ttregAccountNumber"),
				ttregAccessibleCard = dojo.byId("ttregAccessibleCard"),
				ttregMCValidationNumber = dojo.byId("ttregMCValidationNumber"),
				invalidMessages = BMOContent.validationMessages,
				regCardType = dijit.byId("regCardType"),
				masterCardSection = dojo.query(".masterCardSection"),
				bankCardSection = dojo.query(".bankCardSection"),
				regAccInfoForm = dijit.byId("regAccInfoForm"),
				regMasterCardNumber = dijit.byId("regMasterCardNumber"),
				regCardNumber = dijit.byId("regCardNumber"),
				masterCardNumberWidgets = dijit.findWidgets(masterCardSection[2]),
				bankCardSectionWidgets = dijit.findWidgets(bankCardSection[2]);

			dojo.forEach(masterCardSection, function(node){
				BMO.disableDijits(node,true);
			});
			regMasterCardNumber.setDisabled(true);
			// Set up email field validations
			dojo.query(".emailValidation").forEach(function(target){
				BMO.formValidation.emailValidation(target);
			});
			
			// Prevent user from entering invalid birthday: i.e. February 31 2010
			BMO.BirthdayFieldsHandler.setup(dijit.byId("regBirthMonth"), dijit.byId("regBirthDay"), dijit.byId("regBirthYear"));
			
			dojo.connect(regCardType, "onChange", function(newVal) {
				if (newVal == "mc") {
					masterCardSection.removeClass("hide");
					bankCardSection.addClass("hide");

					regMasterCardNumber.setDisabled(false);
					regCardNumber.setDisabled(true);
					regMasterCardNumber.reset();
					BMO.disableDijits(masterCardSection[2],false);
					BMO.disableDijits(bankCardSection[2],true);
					dojo.forEach(masterCardNumberWidgets, function(widget){
					   widget.reset();
					});
					
				} else if (newVal == "bc") {
					masterCardSection.addClass("hide");
					bankCardSection.removeClass("hide");
					regMasterCardNumber.setDisabled(true);
					regCardNumber.setDisabled(false);
					regCardNumber.reset();
					BMO.disableDijits(masterCardSection[2],true);
					BMO.disableDijits(bankCardSection[2],false);
					dojo.forEach(bankCardSectionWidgets, function(widget){
					   widget.reset();
					});
				}
			});

			// Set up Tooltips
			if (ttregCardNumber) {
				BMO.InitializeTooltips("ttregCardNumber", registrationMessages);		
			}
	
			if (ttregAccountNumber) {
				BMO.InitializeTooltips("ttregAccountNumber", registrationMessages);		
			}
	
			if (ttregAccessibleCard) {
				BMO.InitializeTooltips("ttregAccessibleCard", registrationMessages);		
			}
	
			if (ttregMCValidationNumber) {
				BMO.InitializeTooltips("ttregMCValidationNumber", registrationMessages);		
			}
		}
	
	});
})();


/**
 * reg_signin_toggle.shtml and reg_signin_toggle_visited.shtml
 *
 */
(function() {
	dojo.addOnLoad(function() {

		if (dojo.query(".reg_signintoggle").length) {
			var bankCardContainer = dojo.byId("bankCardContainer"),
				businessCustomerContainer = dojo.byId("businessCustomerContainer"),
				bankCardNicknameNL = dojo.query(".nickname", bankCardContainer),
				removeBankCardYesNo = dojo.byId("removeBankCardYesNo"),
				removeBankCard = dojo.byId("removeBankCard"),
				removeBankCardNo = dojo.byId("removeBankCardNo"),
				removeBankCardYes = dojo.byId("removeBankCardYes"),
				bankCardSelect = dijit.byId("siBankCardDD"),
				selectBankCardClass = dojo.query(".siBankCardDD")[0],
				signinBankDiffHead = dojo.byId("signinBankDiffHead"),
				signinToggleDifferentBankCard = dojo.byId("signinToggleDifferentBankCard"),
				signinDiffBankContainer = dojo.byId("signinDiffBankContainer"),
				btnBankCardContinue1 = dijit.byId("btnBankCardContinue"),
				btnBankCardContinue2 = dijit.byId("btnBankCardContinueNoCache1"),
				siBankCard = dojo.query(".siBankCard")[0],
				siBankCardDJ = dijit.byId("siBankCard"),
				siBankCardNickNameDJ = dijit.byId("siBankCardNickName"),
				signinToggleDifferentBankCardLi = dojo.query("a", signinToggleDifferentBankCard)[0],
				registrationMessages = BMOContent.tooltipMessages.registrationMessages,
				ttSiRememberBankCard = dojo.byId("ttSiRememberBankCard"),
				siRememberBankCard = dijit.byId("siRememberBankCard");

				
			//BMO.formValidation.validateAccountNumbers(siBankCard);

			var btnBankCardContinue = null;
			if(btnBankCardContinue1 != undefined){
				btnBankCardContinue = btnBankCardContinue1;
			}else{
				btnBankCardContinue = btnBankCardContinue2;
			}
			
						
			if (ttSiRememberBankCard) {
				BMO.InitializeTooltips("ttSiRememberBankCard", registrationMessages, "ttSiRememberCard");		
			}
			
			siBankCardDJ.setDisabled(false);
					
			dojo.query(".singinToggleContainer").forEach(function(node) {
				dojo.connect(node, "onmouseover", function(event) {
					var hasDisabled = dojo.hasClass(node, "disabled");
					
					if (node.id == "bankCardContainer") {
						if (hasDisabled) {
							siBankCardDJ.setDisabled(false);
							siBankCardNickNameDJ.setDisabled(false);
							btnBankCardContinue.setDisabled(false);
							if (bankCardSelect) { 
								bankCardSelect.setDisabled(false);
							}
							
							btnBankCardContinue.setDisabled(false);
						}
					} else if (node.id == "businessCustomerContainer") {
						siBankCardDJ.setDisabled(false);
						siBankCardNickNameDJ.setDisabled(true);
						btnBankCardContinue.setDisabled(false);
						if (bankCardSelect) { 
							//bankCardSelect.setDisabled(true);
						} 
					}
				});
			});
			
					
			
			dojo.connect(siRememberBankCard, "onChange", function(newVal) {
				
				if (siBankCardDJ.isValid()) {
					//Toni
					if(siBankCardDJ.getValue() !== ""){
						showHideNickname(newVal, bankCardNicknameNL);
						if(!newVal){//clear the field if we are hidding the field
							siBankCardNickNameDJ.setValue("");
						}
					}	
				}
			});
			
			dojo.connect(siBankCardDJ, "onKeyUp", function(event) {
				clearCardNicname(siBankCardDJ, siRememberBankCard, bankCardNicknameNL);
			});
			
			/*
			dojo.connect(siBankCardDJ, "onChange", function(val) {
				clearCardNicname(siBankCardDJ, siRememberBankCard, bankCardNicknameNL);


			});*/
			
			function clearCardNicname(cardDJ, checkBox, nickNameNL) {
				if (cardDJ.getValue() !== "" && checkBox.getValue()) {
					showHideNickname(true, nickNameNL);
				} else {
					showHideNickname(false, nickNameNL);
					siBankCardNickNameDJ.setValue("");//cleaning the nick field
				}
			}
			
			function showHideNickname(newVal, sectionNicknameNL) {
				if (newVal) { // show nickname field
					sectionNicknameNL.removeClass("hide");
				} else { // hide nickname field
					sectionNicknameNL.addClass("hide");
					
				}
			}
			
			if (bankCardSelect) { 
				if(removeBankCard){
					dojo.connect(removeBankCard, "onclick", function(event) {
						event.preventDefault();
						if(bankCardSelect){
							if (bankCardSelect.getValue() != "diff_card") {
								dojo.addClass(event.target, "hide");
								dojo.removeClass(removeBankCardYesNo, "hide");
							}
						}
					});
				}
				

				if(removeBankCardNo){
					dojo.connect(removeBankCardNo, "onclick", function(event) {
						event.preventDefault();
						dojo.removeClass(removeBankCard, "hide");
						dojo.addClass(removeBankCardYesNo, "hide");
					});
				}			
				

				if(removeBankCardYes){
					dojo.connect(removeBankCardYes, "onclick", function(event) {
					
						event.preventDefault();
						dojo.removeClass(removeBankCard, "hide");
						dojo.addClass(removeBankCardYesNo, "hide");
					
						// Destroy the current dropdown and 
						// rebuild a new one with new values from ajax call
						if(bankCardSelect != null && bankCardSelect.getValue() != null && bankCardSelect.getValue() != "diff_card"){
							//BMO.MessageManager.clear();
							dojo.xhrGet ({
								url: dojo.attr(removeBankCard, "href"),
								handleAs: "json",
								content: {cardType: "bankcard", card: bankCardSelect.getValue()},
								load: function (response, ioArgs) {
								
									if (response.success) {
										bankCardSelect.removeOption(bankCardSelect.getValue());
									}
								
									return response; // Always return the response back (required by Dojo)
								},
								error: function (response, ioArgs) { // There was an error with loading
									BMO.MessageManager.add("Failed to load data", BMO.MessageManager.types.ERROR);
									return response;
								}
							});
						}else{
							BMO.MessageManager.add(BMOContent.validationMessages.removeBankCardMsg, BMO.MessageManager.types.ERROR);
						
						}
					});
				}
				
			
				if(bankCardSelect){
					dojo.connect(bankCardSelect, "onChange", function(newVal) {
						diffCardSelect(newVal, signinBankDiffHead, signinToggleDifferentBankCardLi, signinDiffBankContainer, selectBankCardClass, btnBankCardContinue, siBankCard);
					});
				
					dojo.connect(signinToggleDifferentBankCardLi, "onclick", function(event) {
						event.preventDefault();
						dojo.removeClass(signinBankDiffHead, "hide");
						dojo.addClass(signinToggleDifferentBankCardLi, "hide");
						dojo.removeClass(signinDiffBankContainer, "hide");

						//Added by Toni Nehme
						if(removeBankCardYesNo){
							dojo.addClass(removeBankCardYesNo, "hide");
						}
						if(removeBankCard){					
							dojo.removeClass(removeBankCard, "hide");
						}
					
						if(bankCardNicknameNL && siBankCardNickNameDJ){
							showHideNickname(false, bankCardNicknameNL);
							siBankCardNickNameDJ.setValue("");//cleaning the nick field
						}					
					
						bankCardSelect.attr("value", "diff_card");
					});
				}
				
			
				function diffCardSelect(newVal, signinDiffHead, signinToggleDifferentCardLi, signinDiffContainer, selectDrop, continueBt, field) {
					if (newVal == "diff_card") {
						dojo.removeClass(signinDiffHead, "hide");
						dojo.addClass(signinToggleDifferentCardLi, "hide");
						dojo.removeClass(signinDiffContainer, "hide");
					
					} else {
						dojo.addClass(signinDiffHead, "hide");
						dojo.removeClass(signinToggleDifferentCardLi, "hide");
						dojo.addClass(signinDiffContainer, "hide");
						siBankCardDJ.setValue("");
						siRememberBankCard.checked = false;
						siBankCardNickNameDJ.setValue("")
						siRememberBankCard.reset();
					}
				}
			}
		}
	});
})();

/*
 * reg_create_password.shtml
 *
 */

(function() {
	dojo.addOnLoad(function(){
		var createPasswordPage = dojo.query(".create_password"),
			createPasswordSubmit = dijit.byId("btnConfirm"),
			createPasswordForm = dijit.byId("regCreatePassword"),
			termsAndConditionsDialog,
			termsConditions = dojo.byId("termsConditions");
							 
		if (createPasswordPage.length){
			var acceptCheck = dijit.byId("reg_AgreeTermsCondition"),
			confirmBtn = dijit.byId("btnConfirm"),
			confirmBtnNL = dojo.query(".btnConfirm");
			dojo.connect(acceptCheck, "onChange", function(event) {
				if (acceptCheck.checked) {
					confirmBtn.setDisabled(false);
					confirmBtnNL.removeClass("disabledConfirm");
				} else {
					confirmBtnNL.addClass("disabledConfirm");
					confirmBtn.setDisabled(true);
				}
			});

			dojo.connect(createPasswordSubmit, "onClick", function(){
				
				if (createPasswordForm.isValid() == true) {
					createPasswordForm.submit();
				} else {
					createPasswordForm.validate();
				}
			});
			
			dojo.xhrGet ({
				url: dojo.attr(termsConditions, "href"),
				handleAs: "text",
				load: function (response, ioArgs) {
					
					termsAndConditionsDialog = new bmo.Dialog({
						content: response,
						draggable: false,
						autofocus: false
					});
					
					dojo.connect(termsConditions, "onclick", function(event) {
						event.preventDefault();
						termsAndConditionsDialog.show();
					});
					
					return response; // Always return the response back (required by Dojo)
				},
				error: function (response, ioArgs) { // There was an error with loading
					BMO.MessageManager.add("Failed to load terms and conditions content", BMO.MessageManager.types.ERROR);
					return response;
				}
			});
		}
		
	});
})();


			function handleForgottenPasswordModal(type, forgottenPasswordLink) {
				
				dojo.xhrGet ({
					url: forgottenPasswordLink,
					handleAs: "text",
					content: {"type": type},
					load: function (response, ioArgs) {
						
						forgottenPasswordDialog = new bmo.Dialog({
							content: response,
							draggable: false,
							autofocus: false
						});
						forgottenPasswordDialog.show();

						return response; 
					},
					error: function (response, ioArgs) { // There was an error with loading
						console.log("Failed to load terms and conditions content");
						return response;
					}
				});
			}
