function ssoIps() {
	return ssoJumpFormAction('IPS');
}



function ssoJump() {
	var ssoJumpListElt = dijit.byId("signin");
	var ssoJumpForm1ForPassword = dijit.byId("updateForm1");
	if(ssoJumpForm1ForPassword){
		if(ssoJumpListElt){
			var selectedValue = ssoJumpListElt.getValue();
			
			if (typeof selectedValue != 'undefined' && selectedValue != '' && selectedValue != 'Other_Services_Accounts') {
				var selectedValueArray = selectedValue.split('#');
				var acctType = selectedValueArray[0];
				var acctIndex = parseInt(selectedValueArray[1], 10);
				if (isNaN(acctIndex)) {
					acctIndex= "";
				}				

				document.ssoJumpForm[0].ssoJumpAccount.value= acctIndex;
				document.ssoJumpForm[0].ssoJumpType.value= acctType;
		
				if (acctType == il || acctType == nb || acctType == mc || acctType == sf ) {
					//Can use any sso action to do popup check
					checkSSOPopup("/onlinebanking/OLBmain/ssoDefault?mode=checkPopup", "ssoJumpForm");
				} else {
					doSsoJump(acctType, acctIndex);
				}
			}
		}
	}else{
		if(ssoJumpListElt){
			var selectedValue = ssoJumpListElt.getValue();
			
			if (typeof selectedValue != 'undefined' && selectedValue != '' && selectedValue != 'Other_Services_Accounts') {
				var selectedValueArray = selectedValue.split('#');
				var acctType = selectedValueArray[0];
				var acctIndex = parseInt(selectedValueArray[1], 10);
				if (isNaN(acctIndex)) {
					acctIndex= "";
				}				
				
				document.ssoJumpForm.ssoJumpAccount.value= acctIndex;
				document.ssoJumpForm.ssoJumpType.value= acctType;
		
				if (acctType == il || acctType == nb || acctType == mc || acctType == sf) {
					//Can use any sso action to do popup check
					checkSSOPopup("/onlinebanking/OLBmain/ssoDefault?mode=checkPopup", "ssoJumpForm");
				} else {
					doSsoJump(acctType, acctIndex);
				}
			}
		}
	}

	return false;
}

function ssoJumpFormAction(acctType, acctIndex) {

	var ssoJumpForm1ForPassword = dijit.byId("updateForm1");
	if(ssoJumpForm1ForPassword){
		document.ssoJumpForm[0].ssoJumpAccount.value= acctIndex;
		document.ssoJumpForm[0].ssoJumpType.value= acctType;
	}else{
		document.ssoJumpForm.ssoJumpAccount.value= acctIndex;
		document.ssoJumpForm.ssoJumpType.value= acctType;
	}


	
	if (acctType == il || acctType == nb || acctType == mc || acctType == sf) {
		//Can use any sso action to do popup check
		checkSSOPopup("/onlinebanking/OLBmain/ssoDefault?mode=checkPopup", "ssoJumpForm");
	} else {
		doSsoJump(acctType, acctIndex);
	}
}

function ssoJumpMC() {
	var selectedValueMC = document.frmDropDown.links.value;
	if (typeof selectedValueMC != 'undefined' && selectedValueMC != '' && selectedValueMC != 'Other_Services_Accounts') {
		Popup(selectedValueMC, 1);	
	}
	return false;
}

function ssoUpdateFormAction(acctType, acctIndex) {
	// open within the same target window by default
	var ssoJumpForm1ForPassword = dijit.byId("updateForm1");
	if(ssoJumpForm1ForPassword){
		document.ssoJumpForm[0].target= "";
		document.ssoJumpForm[0].ssoJumpAccount.value= acctIndex;
		document.ssoJumpForm[0].ssoJumpType.value= acctType;
		set(document.ssoJumpForm[0], '/onlinebanking/OLB/fin/acc/upw/ssoAm?mode=form3');
		document.ssoJumpForm[0].submit();
	}else{
		document.ssoJumpForm.target= "";
		document.ssoJumpForm.ssoJumpAccount.value= acctIndex;
		document.ssoJumpForm.ssoJumpType.value= acctType;
		set(document.ssoJumpForm, '/onlinebanking/OLB/fin/acc/upw/ssoAm?mode=form3');
		document.ssoJumpForm.submit();
	}	
	return false;
}


function doSsoJump(acctType, acctIndex, showPopupText) {
	var ssoJumpForm1ForPassword = dijit.byId("updateForm1");
	if(ssoJumpForm1ForPassword){
		doSsoJump2Form(acctType, acctIndex, showPopupText);
	}else{
		doSsoJump1Form(acctType, acctIndex, showPopupText);
	}
}

function doSsoJump1Form(acctType, acctIndex, showPopupText) {
	// rename the window to make sure that CFM always opens as a popup
	window.name="main";
	// open within the same target window by default
	document.ssoJumpForm.target= "";
				
	if (acctType == il || acctType == nb || acctType == mc || acctType == sf) {
		if(showPopupText){
			var popupText = "PLEASE NOTE THE FOLLOWING:";
			popupText+= "\n\nYou are being automatically transferred to another BMO Financial Group site. You will not be required to enter your username and password.";
			popupText+= "\n\nYou can return to Online Banking simply by choosing \"Online Banking\" from the dropdown menu at the top right of any page.";
			popupText+= "\n\nFor your security, you will now be signed out of Online Banking. A new banking session will be started when you return to Online Banking. Please note that when you return to Online Banking, your last Sign-in date and time will be updated.";
			popupText+= "\n\nThis transfer may take a few moments. Please do not click the \"Back\" button on your browser until you are using the other site or you will be signed out of all applications (this is a security feature).";
			// ask user to confirm and if the answer is "OK" - submit
			if (confirm(popupText)) {
				if (acctType == il || acctType == nb || acctType == sf) {	
					set(document.ssoJumpForm, '/onlinebanking/OLBmain/ssoAm');
				}else if (acctType == mc){
					set(document.ssoJumpForm, '/onlinebanking/OLBmain/ssoMc');			
				}				
				document.ssoJumpForm.submit();
			}
		} else {
			if (acctType == il || acctType == nb || acctType == sf) {	
					set(document.ssoJumpForm, '/onlinebanking/OLBmain/ssoAm');
			}else if (acctType == mc){
					set(document.ssoJumpForm, '/onlinebanking/OLBmain/ssoMc');			
			}			
			document.ssoJumpForm.submit();
		}
	}else if (acctType == 'IPS'){
		//If Term Investment default was chosen, go to the Purchase a GIC option in ONline Banking in the same window.  
		//Don't pop it up.
		goFor('/onlinebanking/OLB/inv/mon/null/investGIC_TFSAInit?mode=introduction');
	 	
	}else if (acctType == 'CFM' || acctType == 'IL' || 
			  acctType == 'NB' || acctType == 'MMC' || acctType == 'OMC' || acctType == 'PrepaidMC' || acctType == 'SF') {
		// default forward (new window)
		defaultWindowHandler = window.open('',"window_" + acctType,'width=640,height=480,top=50,left=150,toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		document.ssoJumpForm.target= "window_" + acctType;
		set(document.ssoJumpForm, '/onlinebanking/OLBmain/ssoDefault');
		document.ssoJumpForm.submit();
	} else {
		// CFM will popup in a new window
		keep = null;
		document.ssoJumpForm.target= "cfmWindow";
		set(document.ssoJumpForm, '/onlinebanking/OLBmain/ssoCfm');
		top.cfmWindowHandler = window.open('','cfmWindow','width=640,height=480,top=50,left=150,toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		document.ssoJumpForm.submit();
		top.cfmWindowHandler.focus();
	}
	return false;
}


function doSsoJump2Form(acctType, acctIndex, showPopupText) {
	// rename the window to make sure that CFM always opens as a popup
	window.name="main";
	// open within the same target window by default
	document.ssoJumpForm[0].target= "";
				
	if (acctType == il || acctType == nb || acctType == mc || acctType == sf) {
		if(showPopupText){
			var popupText = "PLEASE NOTE THE FOLLOWING:";
			popupText+= "\n\nYou are being automatically transferred to another BMO Financial Group site. You will not be required to enter your username and password.";
			popupText+= "\n\nYou can return to Online Banking simply by choosing \"Online Banking\" from the dropdown menu at the top right of any page.";
			popupText+= "\n\nFor your security, you will now be signed out of Online Banking. A new banking session will be started when you return to Online Banking. Please note that when you return to Online Banking, your last Sign-in date and time will be updated.";
			popupText+= "\n\nThis transfer may take a few moments. Please do not click the \"Back\" button on your browser until you are using the other site or you will be signed out of all applications (this is a security feature).";
			// ask user to confirm and if the answer is "OK" - submit
			if (confirm(popupText)) {
				if (acctType == il || acctType == nb || acctType == sf) {	
					set(document.ssoJumpForm[0], '/onlinebanking/OLBmain/ssoAm');
				}else if (acctType == mc){
					set(document.ssoJumpForm[0], '/onlinebanking/OLBmain/ssoMc');			
				}				
				document.ssoJumpForm[0].submit();
			}
		} else {
			if (acctType == il || acctType == nb || acctType == sf) {	
					set(document.ssoJumpForm[0], '/onlinebanking/OLBmain/ssoAm');
			}else if (acctType == mc){
					set(document.ssoJumpForm[0], '/onlinebanking/OLBmain/ssoMc');			
			}			
			document.ssoJumpForm[0].submit();
		}
	}else if (acctType == 'IPS'){
		//If Term Investment default was chosen, go to the Purchase a GIC option in ONline Banking in the same window.  
		//Don't pop it up.
		goFor('/onlinebanking/OLB/inv/mon/null/investGIC_TFSAInit?mode=introduction');
	 	
	}else if (acctType == 'CFM' || acctType == 'IL' || 
			  acctType == 'NB' || acctType == 'MMC' || acctType == 'OMC' || acctType == 'PrepaidMC' || acctType == "SF" ) {
		// default forward (new window)
		defaultWindowHandler = window.open('',"window_" + acctType,'width=640,height=480,top=50,left=150,toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		document.ssoJumpForm[0].target= "window_" + acctType;
		set(document.ssoJumpForm[0], '/onlinebanking/OLBmain/ssoDefault');
		document.ssoJumpForm[0].submit();
	} else {
		// CFM will popup in a new window
		keep = null;
		document.ssoJumpForm[0].target= "cfmWindow";
		set(document.ssoJumpForm[0], '/onlinebanking/OLBmain/ssoCfm');
		top.cfmWindowHandler = window.open('','cfmWindow','width=640,height=480,top=50,left=150,toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		document.ssoJumpForm[0].submit();
		top.cfmWindowHandler.focus();
	}
	return false;
}


function processResponse(){
  if (popCheckRequest.readyState == 4){ // Complete
    if (popCheckRequest.status == 200){ // OK response
//        alert('Hi');//     alert(popCheckRequest.responseText);
    	if (popCheckRequest.responseText == 'true' || popCheckRequest.responseText == 'false'){
//    	   	alert('in');
    	var indicator = eval(popCheckRequest.responseText);

		var ssoJumpForm1ForPassword = dijit.byId("updateForm1");
		if(ssoJumpForm1ForPassword){
			doSsoJump(document.ssoJumpForm[0].ssoJumpType.value, document.ssoJumpForm[0].ssoJumpAccount.value, indicator);
    	}else{
			doSsoJump(document.ssoJumpForm.ssoJumpType.value, document.ssoJumpForm.ssoJumpAccount.value, indicator);
    	}	
		}else{
//				alert('timeout');
    	window.location.replace("/onlinebanking/SignOut");
   		}
    }else{
      processError();
    }
   		
  }

 }

function processError(){
   var msgTxt = "Error when checking popup indicator!"
     +"\n readyState:" + popCheckRequest.readyState
     +"\n status: " + popCheckRequest.status
     +"\n headers: "+ popCheckRequest.getAllResponseHeaders();
   
   alert(msgTxt);
}

function getFormAsString(formName){
 	returnString ="";	
	var ssoJumpForm1ForPassword = dijit.byId("updateForm1");
	if(ssoJumpForm1ForPassword){
		var currentJumpForm = document.ssoJumpForm[0];
	 	formElements = currentJumpForm.elements; 	
	}else{
	 	formElements=document.forms[formName].elements; 	
	} 	
 	for ( var i=formElements.length-1; i>=0; --i ){
 		if(formElements[i].name != "mode" && formElements[i].name != "") {
	 		///escape (encode) each value
	 		returnString=returnString+"&"+escape(formElements[i].name) + "=" + escape(formElements[i].value);
	 	}
 	} 		
 	return returnString; 
 }
 
 
function closePopups() {
	if (top.cfmWindowHandler) {
		top.cfmWindowHandler.close();
	}
	if (top.cfmWindow) {
		top.cfmWindow.close();
	}
	return true;
}

/* Pop up window for all external links */

function Popup(myUrl,popType) {
	var winName='olb_popup';
	var winTop=50;
	var winLeft=150;
	var d = new Date();
	var winTime = d.getUTCHours()+'_'+d.getUTCMinutes()+'_'+d.getUTCSeconds();

	switch (popType) {
		case 1:   // tools & info/help section - max size pop up, full too bar, resizable, scrollbars
/*
			if (top.winName) {
				top.winName.close();
			}
*/
		  	popup = window.open(myUrl,winName+winTime,'width=640,height=480,top=' + winTop + ',left=' + winLeft + ',toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		break
		case 2:  // olb tool/message  - max pop up size, no tool bar, not resizable, scrolling if necessary
		  popup = window.open(myUrl,winName+winTime,'width=640,height=480,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=yes,resizable=no,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 3:  // olb tool/message  - smaller pop up size, no tool bar, not resizable, scrolling if necessary
		  popup = window.open(myUrl,winName+winTime,'width=480,height=360,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=no,resizable=no,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 4:  // calendars  - smallest pop up size, no tool bar, not resizable, scrolling if necessary
		  popup = window.open(myUrl,winName+winTime,'width=360,height=360,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=yes,resizable=no,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 5:  // popups within popups  - smallest pop up size, no tool bar, not resizable, scrolling if necessary
			winTop=100;
			winLeft=200;
	  	popup = window.open(myUrl,winName+winTime,'width=640,height=480,top=' + winTop + ',left=' + winLeft + ',toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=no,copyhistory=no');
		break
		case 6:  // printer friendly pages
		  popup = window.open(myUrl,winName+winTime,'width=600,height=480,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=yes,resizable=yes,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
// these are NOT in the style guide
//		case 7:  // olb tool/message  - max pop up size, no tool bar, not resizable, scrolling if necessary
//		  popup = window.open(myUrl,winName+winTime,'width=800,height=450,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=yes,resizable=no,location=no,menubar=no,directories=no,status=no,copyhistory=no');
//		break
		case 8:  // Download Account Details popup and Term Investments term and conditions popup
		  popup = window.open(myUrl,winName+winTime,'width=480,height=360,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=yes,resizable=yes,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 9:  // EMT Tour Only (Not Part of Style Guide)
		  popup = window.open(myUrl,winName+winTime,'width=800,height=600,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=yes,resizable=yes,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 10:  // Contact Us / Locate Us Popup (Not Part of Style Guide)
		  popup = window.open(myUrl,winName+winTime,'width=980,height=725,scrollbars=0,resizable=1,left=125,top=-25');
		break
		case 11:  // Term Investment Application (Not part of the Style Guide)
		  popup = window.open(myUrl,winName+winTime,'width=730,height=480,top=' + winTop + ',left=' + winLeft + ',toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		break
		case 12:  // For CR_200_06 Popup only (Not Part of Style Guide) 
		  popup = window.open(myUrl,winName+winTime,'width=790,height=560,top=-25,left=125,toolbar=no,scrollbars=no,resizable=no,location=no,menubar=no,directories=no,status=yes,copyhistory=no');
		break
		case 13:  // For BMO Harris Private Banking (Not Part of Style Guide) 
		  popup = window.open(myUrl,winName+winTime,'width=800,height=560,top=-25,left=125,toolbar=no,scrollbars=yes,resizable=no,location=no,menubar=no,directories=no,status=yes,copyhistory=no');
		break
		case 14:  // RSS Feed Popup only (Not Part of Style Guide) 
		  popup = window.open(myUrl,winName+winTime,'width=650,height=550,top=-25,left=125,toolbar=no,scrollbars=yes,resizable=yes,location=yes,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 15:  // Epost Demo Popup only (Not Part of Style Guide) 
		  popup = window.open(myUrl,winName+winTime,'width=700,height=520,top=' + winTop + ',left=' + winLeft + ',toolbar=no,scrollbars=no,resizable=yes,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 16:  // Download Account Details popup with tool bar CR_252_07
		  popup = window.open(myUrl,winName+winTime,'width=480,height=360,top=' + winTop + ',left=' + winLeft + ',toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=no,copyhistory=no');
		break
		case 17:  // For MFA CR-?
		  popup = window.open(myUrl,winName+winTime,'width=460,height=300,top=-25,left=125,toolbar=no,scrollbars=yes,resizable=yes,location=no,menubar=no,directories=no,status=no,copyhistory=no');
		break
		case 18:   //InvestorLine Demo CR 2009-357
		  	popup = window.open(myUrl,winName+winTime,'width=990,height=686,top=' + winTop + ',left=' + winLeft + ',toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no');
		break
		
		}

	popup.focus();

}

//*******************************************************************************
// * Function Name: openStaticPopUp
// * 
// * Parameters:
// *   URL		URL to display in the popup
// *   windowName	windowName as per the javascript window.open definition
// *			(the window name can be anything for the purposes of this
// *			 function)
// *
// * Description:
// *   Opens a pop up browser window with the URL that is passed in. This function
// *   is sensitive to the size of the screen and resizes and repositions the 
// *   popup accordingly
// ******************************************************************************/
function openStaticPopUp(URL,windowName)
{
// If the screen resolution in 800x600 then 
	if(screen.availWidth==800)
	{
		top.viewWin = window.open(URL, windowName, "width=720,height=490,top=20,left=60,scrollbars=1,toolbar=0,resizable=1,menubar=0,location=0,status=0,fullscreen=0,directories=0,channelmode=0");
	}
	else
	{
		top.viewWin = window.open(URL, windowName, "width=720,height=490,top=70,left=200,scrollbars=1,toolbar=0,resizable=1,menubar=0,location=0,status=0,fullscreen=0,directories=0,channelmode=0");
	}
}

function openValidatedStaticPopUp(actualURL, validationURL, windowName) {
	openStaticPopUp(validationURL + "?url=" + actualURL, windowName)
}

function openB2CWindow(URL) {
	window.open(URL,"B2C_PARENT","width=640,height=480,top=50,left=150,toolbar=yes,scrollbars=yes,resizable=yes,location=yes,menubar=yes,directories=no,status=yes,copyhistory=no");
}


function selectAll(formname,checkType) {
	var idx, theCheckbox;
	idx = 0;
	theCheckbox = eval("document." + formname + "." + checkType + idx);
	while (typeof(theCheckbox) == "object")
	{
		theCheckbox.checked = true
		idx++;
		theCheckbox = eval("document." + formname + "." + checkType + idx);
	}

}

function selectAll_1(formname,checkType) {
	var idx, theCheckbox;
	idx = 0;
	theCheckbox = eval("document." + formname + "." + checkType);
	while (typeof(theCheckbox) == "object")
	{
		try {
			theCheckbox[idx].checked = true;
		
			idx++;
			theCheckbox = eval("document." + formname + "." + checkType);
		} catch (ex){
			//one element only
			theCheckbox.checked = true;

			return;
		}
	}

}

function clearAll(formname,checkType) {
	var idx, theCheckbox;
	idx = 0;
	theCheckbox = eval("document." + formname + "." + checkType + idx);
	while (typeof(theCheckbox) == "object")
	{
		theCheckbox.checked = false
		idx++;
		theCheckbox = eval("document." + formname + "." + checkType + idx);
	}
}

function clearAll_1(formname,checkType) {
	var idx, theCheckbox;
	idx = 0;
	theCheckbox = eval("document." + formname + "." + checkType);
	while (typeof(theCheckbox) == "object")
	{
		try {
			theCheckbox[idx].checked = false;
			idx++;
			theCheckbox = eval("document." + formname + "." + checkType);
		} catch (ex){
			//one element only
			theCheckbox.checked = false;

			return;
		}
	}
}

function changeAll(formname,checkType,ifChecked) {
	var idx, theCheckbox;

	if (eval(ifChecked)) {
		idx = 0;
		theCheckbox = eval("document." + formname + "." + checkType + idx);
		while (typeof(theCheckbox) == "object")
		{
			theCheckbox.checked = true
			idx++;
			theCheckbox = eval("document." + formname + "." + checkType + idx);
		}		
	} else {
		idx = 0;
		theCheckbox = eval("document." + formname + "." + checkType + idx);
		while (typeof(theCheckbox) == "object")
		{
			theCheckbox.checked = false
			idx++;
			theCheckbox = eval("document." + formname + "." + checkType + idx);
		}
	}
}

//sets the number of 'checked' checkboxes in the 'counter' field of 'formname'
function processCheckboxes(formname,checkType,counter) {
		
	var idx = 0;
	var count = 0;
	var theCheckbox = eval("document." + formname + "." + checkType);

	var counter = eval("document." + formname + "." + counter);
	
	while (typeof(theCheckbox) == "object")	{

		try {			
			if (theCheckbox[idx].checked == true) {
				counter.value = ++count; 
			}
		} catch (ex) {
			//there is only one checkbox on the form
			if (theCheckbox.checked == true) {
				counter.value = ++count; 
			}
				
			return;
		}

		idx++;
		theCheckbox = eval("document." + formname + "." + checkType);
	}

   	return ;	
}

function resetMe() {
	document.form1.reset();
}

function goHere(loc) {
	this.location.href=loc;
}


function filter (imagename, objectsrc) {
	if (document.images) {
	document.images[imagename].src=eval(objectsrc+".src")
	}
}




function clearOnSubmitHandler(form) {
	form.onsubmit = null;
}

function getDetails(paymentID,FIrefid,CustPayeeId,formName) {

   formName.pmtRefId.value = paymentID;
   formName.fIRefId.value  = FIrefid;
   formName.custPayeeId.value = CustPayeeId;
   
   formName.submit();   
}

function cancelPayment(name,id,email,CustPayeeId, FIrefid,amount,formName) {

        
        formName.recipientName.value = name;
        formName.pmtRefId.value = id;
        formName.emailAddress.value = email;
        formName.custPayeeId.value = CustPayeeId;
        formName.fIRefId.value  = FIrefid;
 		formName.amount.value  = amount;
        formName.submit();   
}

function isPresent(the_value,list)
{
	    var token_array = list.split('&');
        var i;

        if(document.EmtSendForm.list)
        {
        	if(document.EmtSendForm.list.value=="###")
        	{
                for(i=0;i<token_array.length;i++)
                {
       					if(token_array[i].toUpperCase() == the_value.toUpperCase())
                        {
                                return true;
                        }
                }
                return false;
                }
        	else
        	{
        		return false;
        	}
        }
        else
        {
                return false;
        }
}


/* functions to use XMLHttprequest to check SSO popup indicator */
var popCheckRequest = null;
function checkSSOPopup(url,formName){ 
  
  if ( window.XMLHttpRequest ){
  	popCheckRequest = new XMLHttpRequest();
   }else if ( window.ActiveXObject ) {
     try {
        popCheckRequest = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(err) {
        popCheckRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }

  if (popCheckRequest){
    try{ 
      popCheckRequest.onreadystatechange = processResponse;  
      url = url + getFormAsString(formName);
      popCheckRequest.open("GET",url,true);
      popCheckRequest.send(null);
    }catch (err){
      processError();
    }
  }
}

function doSsoJumpToRIP(acctType, accountIndex, mode, action) {
  	var ripRequest = null;
  	try {
  		if ( window.XMLHttpRequest ){
  			ripRequest = new XMLHttpRequest();
   		}else if ( window.ActiveXObject ) {
        	ripRequest = new ActiveXObject("Microsoft.XMLHTTP");
    	}

  		if (ripRequest){
  			requestUrl = '/onlinebanking/OLBmain/ssoRip'; 
  			parameters = 'mode=' + mode + '&acctType=' + acctType + '&acctIndex=' + accountIndex;
  			
  			if (action != undefined) {
  				parameters += '&action=' + action;
  			}
  			
      		ripRequest.open('POST', requestUrl, false);

			ripRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ripRequest.setRequestHeader("Content-length", parameters.length);
			ripRequest.setRequestHeader("Connection", "close");
      		
      		ripRequest.send(parameters);

      		respText = ripRequest.responseText;
			
			if (respText.indexOf("<SsoRioException>") < 0) {
				document.ssoJumpForm.target= "";
				document.ssoJumpForm.method="post";
				set(document.ssoJumpForm, '/onlinebanking/OLB/inv/det/null/ssoRioErrorHandle?mode=form2');
				document.ssoJumpForm.submit();
				return false;
			}
      		iFrom = respText.indexOf("<SsoRioException>") + 17;
      		iTo = respText.indexOf("</SsoRioException>");
      		
      		ssoRioException = respText.substring(iFrom, iTo);
			
			if (ssoRioException == "NONE") {
      			iFrom = respText.indexOf("<url>") + 5;
      			iTo = respText.indexOf("</url>");
      			url = respText.substring(iFrom, iTo);

      			iFrom = respText.indexOf("<sv>") + 4;
      			iTo = respText.indexOf("</sv>");
      			sv = respText.substring(iFrom, iTo);

      			iFrom = respText.indexOf("<sk>") + 4;
      			iTo = respText.indexOf("</sk>");
      			sk = respText.substring(iFrom, iTo);

				document.ssoJumpForm.target= "";
				document.ssoJumpForm.action=url;
				document.ssoJumpForm.method="post";
				document.ssoJumpForm.sv.value=sv;
				document.ssoJumpForm.sk.value=sk;
				document.ssoJumpForm.submit();
			} else {
				document.ssoJumpForm.target= "";
				document.ssoJumpForm.method="post";
				set(document.ssoJumpForm, '/onlinebanking/OLB/inv/det/null/ssoRioErrorHandle?mode=confirmation');
				document.ssoJumpForm.submit();
			}
    	}
    } catch(err) {
		document.ssoJumpForm.target= "";
		document.ssoJumpForm.method="post";
		set(document.ssoJumpForm, '/onlinebanking/OLB/inv/det/null/ssoRioErrorHandle?mode=confirmation');
		document.ssoJumpForm.submit();
    }
	return false;
}

function terminateSession(url) {
	// Make ajax call to terminate the session and remove the jsessionid cookie
	dojo.xhrPost ({
		url: url,
		handleAs: "json",
		content: {mode: "form"}, 
		load: function (response, ioArgs) {				
			if (response.success) {		
		   		return response;
			} else {
				// do nothing
			}
			return response; // Always return the response back (required by Dojo)
		},
		error: function (response, ioArgs) { // There was an error with loading
			//alert("error");		
			return response;
		}
	});		//end of xhrpost
}