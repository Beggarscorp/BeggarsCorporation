
function showHideOrderLines(event) {
	this.ua = navigator.userAgent.toLowerCase();
	var eventElementID;	
	if(this.ua.indexOf('msie') != -1 && !this.isOpera && (this.ua.indexOf('webtv') == -1) ){
		eventElementID= event.srcElement.id;
	}else if(this.isGecko && this.ua.indexOf('gecko/') + 14 == this.ua.length||this.ua.indexOf('firefox/') != -1||this.ua.indexOf('netscape') != -1){
		eventElementID= event.target.id;
	}else{
		eventElementID= event.srcElement.id;
	}
	
	var selectBox = document.getElementById(eventElementID.substring(0, eventElementID.lastIndexOf(':')) + ':selectBox');
	var question = document.getElementById(eventElementID.substring(0, eventElementID.lastIndexOf(':')) + ':question');
	var commandlink = document.getElementById(eventElementID.substring(0, eventElementID.lastIndexOf(':')) + ':commandlink');
		selectBox.style.display=='none'?selectBox.style.display='block':selectBox.style.display='none';
		selectBox.style.display=='none'?question.style.display='block':question.style.display='none';
		selectBox.style.display=='none'?commandlink.style.display ='block':commandlink.style.display ='none';
		
	return true;
}

function hideDropDown(){

	var selectBox1 = document.getElementById('mfaUpdate:j_id43:2:selectBox');
	var selectBox2 = document.getElementById('mfaUpdate:j_id43:1:selectBox');
	var selectBox3 = document.getElementById('mfaUpdate:j_id43:0:selectBox');
	var selectBox4 = document.getElementById('mfaUpdate:j_id43:3:selectBox');
	var selectBox5 = document.getElementById('mfaUpdate:j_id43:4:selectBox');
	selectBox1.style.display='none';selectBox2.style.display='none';
	selectBox3.style.display='none';selectBox4.style.display='none';selectBox5.style.display='none';
	
}

function goToSelectedSite() {
	var domain = document.getElementById('lobselected').value;
	var url = '';
	if (domain == 'EasyWeb') {	
		url = document.getElementById('easywebUrl').value;	
	} else if (domain == 'WebBroker') {
		url = document.getElementById('webbrokerUrl').value;
	} else if (domain == 'MyInsurance') {
		url = document.getElementById('tdiUrl').value;
    } else if (domain == 'BanqueNet') {
		url = document.getElementById('easywebUrl').value;
    } else if (domain == 'CourtierWeb') {
		url = document.getElementById('webbrokerUrl').value;
    } else if (domain == 'MonAssurance') {
		url = document.getElementById('tdiUrl').value;
    }
	window.location = url;
}

function help(URL,width,height){
	if (width == undefined || width == '') {
		width = 500;
	}
	if (height == undefined || height == '') {
		height = 400;
	}
	var winAtts	= "toolbar=0,scrollbars=1,width=" + width + ",height=" + height + ",resizable=1";
	//alert("help: \tURL: [" + URL + "],\n\twinAtts:[" + winAtts + "]");
	HelpWindow = window.open(URL,'Help',winAtts);
}

function tour(URL){
	winAtts = "scrollbars=1,width=780,height=600,resizable=1";
	HelpWindow = window.open(URL,'Tour',winAtts);
}

function fnFooter(helpURL){
	winAtts="width=500,height=400,resizable=yes,scrollbars=yes";
	HelpWindow = window.open(helpURL,"TD",winAtts);
}

function gotoMarker(marker) {
	var url = removeStr(window.location.href, marker);	
	window.location = url + marker;
}

function removeStr(main, sub) {
	if(main) {
		var pos = main.indexOf(sub);
		if(pos > -1) {
			main = main.substring(0, pos);			
		}	
	}
	return main;
}
function trapEnter(evt,formid,textboxfocusid, buttonid) {
    var keycode;
    if (evt)
        ;
    else if (window.event)
        evt = window.event;
    else if (event)
        evt = event;
    else
        return true;
 
    if (evt.charCode)
        keycode = evt.charCode;
    else if (evt.keyCode)
        keycode = evt.keyCode;
    else if (evt.which)
        keycode = evt.which;
    else
        keycode = 0;
    if (keycode == 13) {
    	
    	if(textboxfocusid == null)
    	{
    	document.getElementById(formid+':'+textboxfocusid).blur();
        document.getElementById(formid+':'+buttonid).click();
    	}
    	else
    	{
    	document.getElementById(formid+':'+buttonid).focus();	
    	}
        return false;
    }
   else
       return true;
}

function logoutIDP(formid, buttonid, message) {
	if(window.confirm(message)) {
		var myForm = document.getElementById('MFAChallengeForm');
	   	document.getElementById(formid+':'+buttonid).click(); 
	   	//changed return false in place of return true to fix QC 1788
	   	return false;
	} else {
		//setting focus on input text field
		document.getElementById('MFAChallengeForm:answer').focus();
		return false;
	}
}

/**
 * Displays alert message if cookie is disabled in the browser
 * @param element
 * @return
 */
function checkCookiesAndSubmit(element) {	
	if (!navigator.cookieEnabled) {
		var branding = document.getElementById('branding').value;
		if (branding == 'ew') {
			alert(document.getElementById('easywebMess').value);
		} else if (branding == 'wb') {
			alert(document.getElementById('webbrokerMess').value);
		} else if (branding == 'tdi') {
			alert(document.getElementById('tdiMess').value);
		} else if (branding == 'iol') {
			alert(document.getElementById('iolMess').value);
		} else if (branding == 'primmum') {
			alert(document.getElementById('primmumMess').value);
		}

		return false;
		} else {
			document.getElementById(element).focus();
		return true;
	}
} 
 var count = true;
 function clickOne() {		
		if (count) {			
			count = !login();
			if(count){
				return false
			}
			else{
				return true;	
			}
		} else {
			return false;
		}			
	}
function hideFooter(id) {	
	document.getElementById("tdiHelp:next").style.visibility='visible';
	document.getElementById("tdiHelp:selected2:0").checked=false;
	document.getElementById("tdiHidden1").style.display='none';
	
	var temp = document.getElementById(id).id;			
    var str = new String(temp);		 
	if(str.indexOf("tdiHelp:selected:2") != -1){						
		document.getElementById("tdiHidden").style.display='block';				
	} else{
		document.getElementById("tdiHidden").style.display='none';				
	}
	
}

function hideGenericFooter(id) {	
	document.getElementById("tdiHelp:next").style.visibility='visible';
	
	var temp = document.getElementById(id).id;			
    var str = new String(temp);		
	if(str.indexOf("tdiHelp:selected:2") != -1){						
		document.getElementById("tdiHidden").style.display='block';				
	} else{
		document.getElementById("tdiHidden").style.display='none';				
	}
}

function displayItem(){
	if(document.getElementById("SelectList").value=="" 
		|| document.getElementById("SelectList").value=="Other"
		|| document.getElementById("SelectList").value=="Autre")
	{
		document.getElementById("SelectListTxtBox").style.display='block';
		document.getElementById('AccessCard').value="";
		document.getElementById('NewAccessCard').focus();
		document.getElementById('NewAccessCard').focus();
	}
	else
	{
		document.getElementById("SelectListTxtBox").style.display='none';
		var selectedElement=document.getElementById('SelectList').value;
		document.getElementById('AccessCard').value=selectedElement.substring(0, selectedElement.lastIndexOf('-'));
		document.getElementById('NewAccessCard').value="";
		document.getElementById('Webpassword').focus();
		document.getElementById('Webpassword').focus();
	}
	document.getElementById('Webpassword').value="";
}

function hideFooter_both(id) {
	document.getElementById("tdiHelp:next").style.visibility='hidden';
	document.getElementById("tdiHidden").style.display='none';	
	document.getElementById("tdiHidden1").style.display='block';	
	document.getElementById("tdiHidden1").style.display='block';
	if(document.getElementById("tdiHelp:selected:0")!= null ){
		document.getElementById("tdiHelp:selected:0").checked=false;
	}
	if(document.getElementById("tdiHelp:selected:1")!= null ){
		document.getElementById("tdiHelp:selected:1").checked=false;
	}
	if(document.getElementById("tdiHelp:selected:2")!= null ){
		document.getElementById("tdiHelp:selected:2").checked=false;
	}			
}
var userNamePasswordHelpFields = {
	nextButtonId: "#userNamePasswordHelp\\:next",
	forgetAliasId: "#userNamePasswordHelp\\:forgetAlias\\:0",
	forgetPasswordId: "#userNamePasswordHelp\\:forgetPassword\\:0",
	forgotBothId: "#userNamePasswordHelp\\:forgotBoth\\:0",
	passwordHidden1Id: "#passwordHidden1",
	tempPasswordId: "#userNamePasswordHelp\\:tempPassword\\:0",
	passwordtextHiddenId: "#passwordtextHidden",
	aliastextHiddenId: "#aliastextHidden"
};

var userNamePasswordMatchStrings = {
	forgotPassword: "forgetPassword",
	forgotAlias: "forgetAlias",
	tempPassword: "tempPassword",
	forgotBoth: "forgotBoth"
};

var classNames = {
	buttonPrimary: "td-button-primary",
	disabledButton: "td-button-disabled",
	visibleBlock: "visibleBlock",
	hiddenNone: "hiddenNone"
};

function hideCommonFooter(id) {	
	if(!jQueryAvailable()) {
		return;
	}		 
    selectOption(id);
}

function selectOption(id) {
	
	var temp = document.getElementById(id).id;			
    var str = new String(temp);
      
	if(str.indexOf(userNamePasswordMatchStrings.forgotPassword) != -1){						
		handleForgotPasswordOption();
	} else if(str.indexOf(userNamePasswordMatchStrings.forgotAlias) != -1){						
		handleForgotAliasOption();
	} else if(str.indexOf(userNamePasswordMatchStrings.tempPassword) != -1){						
		handleTempPasswordOption();
	} else if(str.indexOf(userNamePasswordMatchStrings.forgotBoth) != -1){		
		handleForgotBothOption();
	}
}

/**
 * Handles a selection of the forgot password option on the userNamePasswordHelp page.
 * @return
 */
var handleForgotPasswordOption = function() {
	enableEvergreenButton(userNamePasswordHelpFields.nextButtonId);
	
	uncheckElements([
	    userNamePasswordHelpFields.tempPasswordId,
	    userNamePasswordHelpFields.forgetAliasId,
	    userNamePasswordHelpFields.forgotBothId
	]);
	
	hideElements([
	    userNamePasswordHelpFields.passwordHidden1Id,
	    userNamePasswordHelpFields.passwordtextHiddenId,
	    userNamePasswordHelpFields.aliastextHiddenId
	]);
};

/**
 * Handles a selection of the forgot alias option on the userNamePasswordHelp page.
 * @return
 */
var handleForgotAliasOption = function() {
	enableEvergreenButton(userNamePasswordHelpFields.nextButtonId);
	
	uncheckElements([
	    userNamePasswordHelpFields.tempPasswordId,
	    userNamePasswordHelpFields.forgetPasswordId,
	    userNamePasswordHelpFields.forgotBothId
	]);

	hideElements([
	    userNamePasswordHelpFields.passwordHidden1Id,
	    userNamePasswordHelpFields.passwordtextHiddenId
	]);

	showElement(userNamePasswordHelpFields.aliastextHiddenId);
};

/**
 * Handles a selection of the temporary password option on the userNamePasswordHelp page.
 * @return
 */
var handleTempPasswordOption = function() {
	enableEvergreenButton(userNamePasswordHelpFields.nextButtonId);
	uncheckElements([
        userNamePasswordHelpFields.forgetAliasId,
        userNamePasswordHelpFields.forgetPasswordId,
        userNamePasswordHelpFields.forgotBothId
	]);

	hideElements([
	    userNamePasswordHelpFields.aliastextHiddenId,
	    userNamePasswordHelpFields.passwordHidden1Id
	]);

	showElement(userNamePasswordHelpFields.passwordtextHiddenId);
};

/**
 * Handles a selection of the forgot both option on the userNamePasswordHelp page.
 * @return
 */
var handleForgotBothOption = function() {
	disableEvergreenButton(userNamePasswordHelpFields.nextButtonId);
	
	uncheckElements([
	    userNamePasswordHelpFields.tempPasswordId, 
	    userNamePasswordHelpFields.forgetAliasId, 
	    userNamePasswordHelpFields.forgetPasswordId
	]);
	
	hideElements([
	    userNamePasswordHelpFields.passwordtextHiddenId, 
	    userNamePasswordHelpFields.aliastextHiddenId
	]);
	
	showElement(userNamePasswordHelpFields.passwordHidden1Id);
};

/**
 * Disallow form submission if the button is currently disabled.
 * @param e
 * @return
 */
function checkSubmitState(e) {
	var submitButton = $(userNamePasswordHelpFields.nextButtonId);
	if(submitButton.hasClass(classNames.disabledButton)) {
		e.preventDefault();
		return false;
	} else {
		return true;
	}
}

/**
 * Hide all elements in the provided elementIds array.
 * @param elementIds
 * @return
 */
function hideElements(elementIds) {
	for(var i = 0; i < elementIds.length; ++i) {
		hideElement(elementIds[i]);
	}
}

/**
 * Hide the element with the provided Id, by removing the visibleBlock class and adding the hiddenNone class.
 * @param id
 * @return
 */
function hideElement(id) {
	$(id).removeClass(classNames.visibleBlock);
	$(id).addClass(classNames.hiddenNone);
}

/**
 * Show the element with the provided Id, by removing the hiddenNone class and adding the visibleBlock class.
 * @param id
 * @return
 */
function showElement(id) {
	$(id).removeClass(classNames.hiddenNone);
	$(id).addClass(classNames.visibleBlock);
}

/**
 * Uncheck all elements in the provided elementIds array.
 * @param elementIds
 * @return
 */
function uncheckElements(elementIds) {
	for(var i = 0; i < elementIds.length; ++i) {
		uncheckElement(elementIds[i]);
	}
}

/**
 * Set the checked attribute of the element represented by the provided ID to false.
 * @param id
 * @return
 */
function uncheckElement(id) {
	$(id).attr("checked", false);
}

/**
 * Enable an Evergreen button by removing the disabled button class and adding the primary button class.
 * @param id
 * @return
 */
function enableEvergreenButton(id) {
	$(id).removeClass(classNames.disabledButton);
	$(id).addClass(classNames.buttonPrimary);
}

/**
 * Disable an Evergreen button by removing the primary button class and adding the disabled button class.
 * @param id
 * @return
 */
function disableEvergreenButton(id) {
	$(id).removeClass(classNames.buttonPrimary);
	$(id).addClass(classNames.disabledButton);
}

/**
 * Check if jQuery is available on the current page.
 * @return
 */
function jQueryAvailable() {
	return ((window.jQuery && window.$) && (window.jQuery === window.$));
}

function checkCookiesAndRefresh() {
	if (navigator.cookieEnabled) {
		//window.location = document.URL;
		document.getElementById("blankForm:brow").value = 'enable';
	} else {
		//window.location = document.URL + "?brow=disable";
		document.getElementById("blankForm:brow").value = 'disable';
	}
}

function submitToLogin() {
	var x=document.getElementById('blankForm');
	x.action = "login.htm";
	x.submit();
}

function cip_getTimeoutURL() {
	var locationURL = location.href;
	//alert("cip_getTimeoutURL: location.href:[" + locationURL + "]");
	// set default timeout URL to use Location URL Value
	var timeoutURL = locationURL;
		
	if ( locationURL.indexOf("ec=") == -1 || locationURL.indexOf("EC=") == -1 || locationURL.indexOf("ec\=") == -1 || locationURL.indexOf("EC\=") == -1  ) {
		// if it is not on the td.com domain then change URL
		var host = window.location.host;
		var domainIndex = host.indexOf(".td.com");
		// replace the URL with td.com domain if it is not there...
		if ( domainIndex == -1 ) {
			host = host.replace(".tdcanadatrust.com",".td.com");
			host = host.replace(".tdwaterhouse.ca",".td.com");
		}
		timeoutURL = window.location.protocol + "//" + host	+ "/waw/idp/login.htm?ec=SSOTO";	
	}
	//alert("cip_getTimeoutURL: timeoutURL:[" + timeoutURL + "]");
	return timeoutURL;	
}

function cip_ew_breakOut() { 
	//alert("breakOut: parent.frames.length:[" + parent.frames.length + "],\n(top.location != location):[" + (top.location != location) + "],\nlocation.href:[" + location.href + "]");
	if( parent.frames.length > 0 ) {
		var timeoutURL = cip_getTimeoutURL();
		//alert("cip_ew_breakOut: Goto this url:[" + timeoutURL + "]");
		top.location.replace(timeoutURL); 
	}
}

function cip_sitelobby_breakOut() { 
	//alert("breakOut: parent.frames.length:[" + parent.frames.length + "],\n(top.location != location):[" + (top.location != location) + "],\nlocation.href:[" + location.href + "]");
	if( parent.frames.length > 0 ) {
		var timeoutURL = cip_getTimeoutURL();
		//alert("cip_ew_breakOut: Goto this url:[" + timeoutURL + "]");
		top.location.replace(timeoutURL); 
	}
}

function cip_wb_breakOut() { 
	var browserAgent = navigator.userAgent.toLowerCase();
	var msieIndex = browserAgent.indexOf("msie");
	//alert("cip_wb_breakOut: parent.frames.length:[" + parent.frames.length + "],\n(self != top):[" + (self != top) + "],\nbrowserAgent:[" + browserAgent + "],\nmsieIndex:[" + msieIndex + "],\nlocation.href:[" + location.href + "]");
	if ( msieIndex != -1 ) { 
		// If it is Internet Explorer do this...
		if( self != top || parent.frames.length > 0 ) {
			var timeoutURL = cip_getTimeoutURL();
			//alert("cip_wb_breakOut: Goto this url:[" + timeoutURL + "]");
			top.location.replace(timeoutURL); 
		}
	}
}

function closePopUp(){
	var opener = window.parent.opener;

	if (opener != null && opener!=window) {
		var timeoutURL = window.location.protocol + "//" + window.location.host	+ "/waw/idp/login.htm?ec=SSOTO";
		opener.top.location.replace(timeoutURL);
		window.top.close();
	}
}

function framebuster(){
	var browser = navigator.userAgent.toLowerCase();
	//alert("framebuster:["+parent.frames.length+"],\n URL:["+document.URL+"]");
    if (browser.indexOf("safari") > 0) {     
          if(parent.frames.length > 0) {
                var reqUrl = document.URL;
                var newReqUrl = document.URL;
                var modeIndex = reqUrl.indexOf("&mode=resume");

                if(modeIndex !=-1){
                      newReqUrl = reqUrl.substring(0, modeIndex);
                }
                top.location.replace(newReqUrl);
          }
    }
}

function login()
{		
	if(emptyField(document.getElementById("login:AccessCard")))	{		
		document.getElementById("login:AccessCard").focus();
		setErrorBlock('<ul class="generalEvergreenError"><li class="submitError">'+document.getElementById('accesscardMessage').outerHTML+'</ul></li>');
		return false;
	}	
	
	if(emptyField(document.getElementById("login:Webpassword"))){
		document.getElementById("login:Webpassword").focus();
		setErrorBlock('<ul class="generalEvergreenError"><li class="submitError">'+document.getElementById('passwordMessage').outerHTML+'</ul></li>');
		return false;
	}			
	
	return true;
}


/*************************JS Validation for Focus***************/
function setFocus()
{		
	if(emptyField(document.getElementById("login:AccessCard")))
	{
		document.getElementById("login:AccessCard").focus();
		return false;
	}	
	else if(emptyField(document.getElementById("login:Webpassword")))
	{
		document.getElementById("login:Webpassword").focus();
		return false;
	}		
	return true;
}

function emptyField(txt)
{
	
	return (txt.value.length == 0);
}

function setHiddenValues(actionName)
{
	if(actionName=="next")
	{
		document.getElementById('cancelbutton').value="no";
		document.getElementById('nextbutton').value="yes";
	}
	else
	{
		document.getElementById('cancelbutton').value="yes";
		document.getElementById('nextbutton').value="no";
	}
	
}

function recoverAliasSetFocus()
{		
	if(emptyField(document.getElementById("recoverAlias:emailaddress")))
	{
		document.getElementById("recoverAlias:emailaddress").focus();
		return false;
	}	
	else if(emptyField(document.getElementById("recoverAlias:usernamePassword")))
	{
		document.getElementById("recoverAlias:usernamePassword").focus();
		return false;
	}		
	return true;
}

function validateRecAlias()
{			
	if(document.getElementById('nextbutton').value=='yes')
	{
		if(emptyField(document.getElementById("recoverAlias:emailaddress")))
		{
			document.getElementById('errorMessage').innerHTML='<ul><li>'+document.getElementById('emailaddressMessage').value+'</ul></li>';
			document.getElementById("recoverAlias:emailaddress").focus();
			return false;
		}	
		else if(emptyField(document.getElementById("recoverAlias:usernamePassword")))
		{
			document.getElementById('errorMessage').innerHTML='<ul><li>'+document.getElementById('passwordMessage').value+'</ul></li>';
			document.getElementById("recoverAlias:usernamePassword").focus();
			return false;
		}
	}
	return true;
}

function validateRecAliasCommon()
{			
	if(document.getElementById('nextbutton').value=='yes')
	{
		if(emptyField(document.getElementById("recoverAlias:emailaddress")))
		{
			document.getElementById('errorMessage').innerHTML=document.getElementById('emailaddressMessage').innerHTML;
			scrollAndFocus('#errorAlertDiv');
			return false;
		}	
		else if(emptyField(document.getElementById("recoverAlias:usernamePassword")))
		{
			document.getElementById('errorMessage').innerHTML=document.getElementById('passwordMessage').innerHTML;
			scrollAndFocus('#errorAlertDiv');
			return false;
		}
	}
	return true;
}


function returnToMerchantSite()
{
	var url=document.getElementById("login:abortGoto").value;
	var method=document.getElementById("login:abortGotoMode").value;
	
	if(url!=null)
	{
		var idebitInvoice=document.getElementById("login:IDEBIT_INVOICE").value;
		var idebitVersion=document.getElementById("login:IDEBIT_VERSION").value;
		
		var params={'IDEBIT_INVOICE':idebitInvoice,'IDEBIT_VERSION':idebitVersion}
		if(method=="POST" || method=="post")
		{
			postToUrl(url,params);
		}
		else if((method=="GET" || method==null) && url!=null)
		{
			if((url.indexOf("IDEBIT",0))==-1)
			{
				url +="?IDEBIT_INVOICE="+idebitInvoice+"&IDEBIT_VERSION="+idebitVersion;
			}
			window.location = url;
		}
	}
}

function postToUrl(url, params) 
{
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", url);

    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
}

function hideReturnToMerchantLink()
{
	var url=document.getElementById("login:abortGoto");
	if (url==null || url.value=='') 
	{
		var merchantLinkListId=document.getElementById("merchantLinkListId");
		var contactUsListId=document.getElementById("contactUsListId");
		contactUsListId.className='last';
		merchantLinkListId.parentNode.removeChild(merchantLinkListId); 
	}
}

function validateUserInput(form, field){
	var result = true;	
	for(var i in field){
		var txt = document.getElementById(form+ ":"+ field[i]);			
		if(emptyField(txt) ){
			setErrorBlock('<ul><li>'+document.getElementById('empty'+field[i]).value+'</ul></li>');
			result = false;
		} 
	}	
	return result;
}
/************************ JS validation for valid characters *****/
function loginValueValid(txt){
	 return (txt.value.search(/[^a-zA-Z0-9*]/) == -1);
}

function checkCookies() {
	showLanguageLink(navigator.cookieEnabled);
}

function checkSessionTimeout() {
	var sessionTimeout = document.getElementById('login:timeout').value - 1;
	document.getElementById('login:timeout').value = sessionTimeout;
	if (sessionTimeout >= 0) {
        window.setTimeout("checkSessionTimeout()", 60000);
	}
    else {
    	showLanguageLink(false);
    }

}

function showLanguageLink(enabledFlag) {
	var cookieEnable = document.getElementById('cookieEnable');
	var cookieDisable = document.getElementById('cookieDisable');
	
	if (null != cookieEnable && null != cookieDisable) {
		if (enabledFlag) {
			document.getElementById('cookieEnable').style.display = 'block';
			document.getElementById('cookieDisable').style.display = 'none';
		} else {
			document.getElementById('cookieEnable').style.display = 'none';
			document.getElementById('cookieDisable').style.display = 'block';
		}
	}
} 

function clearDescriptionBox(){
	var loginDesc = document.getElementById('login:description');
	if (null != loginDesc) {
		loginDesc.value="";	
	}
}

function trim(text) {
    return text.replace(/^\s+|\s+$/g, "");
}

/**
 * Used to select and style the active menu item  
 * @param activeMenueItemID for menu active item.
 */
function selectActiveMenuItem(menuItemID) {
	if (menuItemID != null && menuItemID.length > 0) {
		var activeItem = document.getElementById(menuItemID);
		if (activeItem != null) {
			activeItem.className = "td-nav-level2-active td-nav-flyout {position:'containerleft'}";
		}
	}
	
}

/**
 * Returns true if string starts with prefix, or false otherwise.
 * @param string String to test
 * @param prefix Prefix to test
 * @return True if strings starts with prefix, false otherwise.
 */
function startsWith(string, prefix) {
	return string.lastIndexOf(prefix, 0) === 0;
}

/**
 * Add prefix to eventString, if eventString does not already start with prefix.
 * @param eventString String to modify
 * @param prefix String to prepend.
 */
function addPrefix(eventString, prefix) {
	return startsWith(eventString, prefix) ? eventString : (prefix + eventString);
}

/**
 * Remove prefix from eventString, if eventString begins with prefix.
 * @param eventString String to modify
 * @param prefix String to remove.
 */
function stripPrefix(eventString, prefix) {
	return startsWith(eventString, prefix) ? eventString.substring(prefix.length) : eventString;
}

/**
 * Remove all registered handlers from an element.
 * @param elementId
 * @param event
 * @return
 */
function removeHandler(elementId, event) {
	var prefixedEvent = addPrefix(event, "on"),
		unprefixedEvent = stripPrefix(event, "on"),
		jqElementId = addPrefix(elementId, "#");

	// remove jQuery-added handlers
	$(jqElementId).unbind(unprefixedEvent);

	// remove markup-defined handlers
	$(jqElementId).prop(prefixedEvent, null).attr(prefixedEvent, null);
}