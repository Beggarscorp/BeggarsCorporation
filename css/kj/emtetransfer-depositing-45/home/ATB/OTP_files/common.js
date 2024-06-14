function help(URL) {
	winAtts = "toolbar=0,scrollbars=1,width=425,height=400,resizable=1";
	HelpWindow = window.open(URL, 'Help', winAtts);
}

function footerLink(URL) {
	winAtts = "scrollbars=1,width=1024,height=600,resizable=1";
	HelpWindow = window.open(URL, 'TD', winAtts);
}

function openLargePopup(URL) {
	winAtts = "scrollbars=1,width=1040,height=600,resizable=1";
	HelpWindow = window.open(URL, 'TD', winAtts);
}

function openConsentPrintWindow(URL) {
    var w = window.open(URL, 'ConsentPrint', 'height=500,width=690,toolbar=0,resizable=1,location=0,scrollbars=1,menubar=1,status=1');
}

//Opens footer links in a popup window
var winObj = null;
function footerLinks(winURL) {
  var winFeatures = 'width=500,height=400,resizable=yes,scrollbars=yes';
  var winName = 'td';
  // first check to see if the window already exists
  if (winObj != null) {

	// the window has already been created, but did the user close it?
	// if so, then reopen it. Otherwise make it the active window.
	if (!winObj.closed) {
	  winObj.location.href = winURL;
	  winObj.focus();
	  return false;
	}
	// otherwise fall through to the code below to re-open the window
  }
  // if we get here, then the window hasn't been created yet, or it
  // was closed by the user.
  winObj = window.open(winURL, winName, winFeatures);
  return false;
}

//This function will check Adobe installation on user machines. It will return true If Adobe acrobat installation
//found on user m/c else returns false
function checkAdobeInstallation(){
	var found = false;
	if(navigator.platform!=null && navigator.platform.toLowerCase().indexOf('mac')!= -1 && navigator.userAgent!=null && BrowserDetect.browser.toLowerCase().indexOf('firefox')== -1){
		return !found;
	}
	else{
		var info = '';
		try {
			acrobat4 = new ActiveXObject('PDF.PdfCtrl.1');
			if (acrobat4) { found = true; info = 'v. 4.0'; }
		} catch (e) {
			// Do Nothing
		}
		if (!found) {
			try {
				acrobat7 = new ActiveXObject('AcroPDF.PDF.1');
				if (acrobat7) {
						found = true;
						info = 'v. 7+';
				}
			} catch (e) {
				// Do Nothing
			}
			if (!found && navigator.plugins && navigator.plugins.length>0) {
				for (var i = 0; i<navigator.plugins.length; i++) {
						if (navigator.plugins[i].name.toLowerCase().indexOf('adobe acrobat') > -1 || navigator.plugins[i].name.toLowerCase().indexOf('pdf') > -1) {
								found = true;
								info = navigator.plugins[i].description + ' (' + navigator.plugins[i].filename + ')';
								break;
						}
				}
			}
		}
	}
	return found;
}

function displayBrowserError(){
		var browserNotSupported = document.getElementById("browserNotSupported");
		browserNotSupported.className='displayInline';
		document.getElementById("browserNotSupportedText").className = 'browserNotSupportedMessage';
}
function checkAdobePlugginAndVersion(missingAdobeReaderText, missingAdobePluginText){
	checkAdobePluggin(missingAdobeReaderText, missingAdobePluginText);
	checkAdobeAndFirefoxVersion(missingAdobeReaderText, missingAdobePluginText);
}

function checkAdobePlugginAndVersionTDI(missingAdobeReaderText, missingAdobePluginText){
	checkAdobePlugginTDI(missingAdobeReaderText, missingAdobePluginText);
	checkAdobeAndFirefoxVersion(missingAdobeReaderText, missingAdobePluginText);
}

//Method Added for EWSR QC Defect 62
//Additional check to ascertain whetehr Firefox 3.6 and Adobe Reader 8.1 being used by user which may cause freezing of Iframe on Consent Page put in
function checkAdobeAndFirefoxVersion(missingAdobeReaderText, missingAdobePluginText){
	if(BrowserDetect.OS=="Windows" && BrowserDetect.browser.toLowerCase().indexOf('firefox')!= -1 && BrowserDetect.version == 3.6)
	  {
	      var plugins = navigator.plugins;
	     
	      for(var i = 0; i < plugins.length; i++){
	         if (plugins[i].name === "Adobe Acrobat"){
	             version = plugins[i].version;
	             if(parseFloat(version) < 9.0)
	             {
	            	document.getElementById("adobeUpdateRequiredText").className = 'adobeUpdateRequiredTextForFirefox';
	            	document.getElementById("adobeUpdateLink").innerHTML = missingAdobeReaderText;
	            	document.getElementById("adobeUpdateLink").className = 'adobeUpdateLink';
					document.getElementById("adobeUpdateRequired").className = 'consentDisplayInline';
					var next = document.getElementById('next');
					next.className = 'consentDisplayNone';
					var adobeMissing = document.getElementsByTagName('img');
					adobeMissing[0].className = 'displayInline';
					break;
	             }
	        }
	     } 
	 }

}

//This method will be called at the start of application to check adobe pluggin is installed on client machine or not and accordingly
//display message on the screen.
function checkAdobePluggin(missingAdobeReaderText, missingAdobePluginText){
	var next = document.getElementById('next');
	next.className = 'displayInlineRight';
	var jsErrorMessage = document.getElementById("jsErrorButton");
	jsErrorMessage.className= 'consentDisplayNone';
	//If browser is other than safari,explorer or firefox, show browser unsupported error
	if( BrowserDetect.browser.toLowerCase().indexOf('safari')== -1  &&
			BrowserDetect.browser.toLowerCase().indexOf('explorer')== -1 &&
				BrowserDetect.browser.toLowerCase().indexOf('firefox') == -1 ){
		displayBrowserError();
	}
	//If browser is any one of the above and of lower versions than given , show browser unsupported error
	else if((BrowserDetect.browser.toLowerCase().indexOf('safari')!= -1 && BrowserDetect.version < 3.1)
			|| ( BrowserDetect.browser.toLowerCase().indexOf('explorer')!= -1 && BrowserDetect.version < 6) 
			|| (BrowserDetect.browser.toLowerCase().indexOf('firefox')!= -1 && BrowserDetect.version < 2 ) ){
		displayBrowserError();
		
	}
		var inputs = document.getElementsByTagName("input");
		for(var i=0;i<inputs.length;i++){
			if(inputs[i].type == 'submit' && inputs[i].id.indexOf('jsNext')!= -1 ){
				inputs[i].disabled=false;
				break;
			}
		}
			
		var hasAdobePluggin = checkAdobeInstallation();
		if(!hasAdobePluggin){
			if(navigator.platform!=null && navigator.platform.toLowerCase().indexOf('mac')!= -1 && navigator.userAgent!=null && BrowserDetect.browser.toLowerCase().indexOf('firefox')!= -1){
				document.getElementById("fireFoxAdobeMissingText").className = 'fireFoxAdobeMissingMessage';
				document.getElementById("pluginLink").innerHTML = missingAdobePluginText;
				document.getElementById("fireFoxAdobeMissing").className = 'consentDisplayInline';
				var next = document.getElementById('next');
				next.className = 'consentDisplayNone';
				var adobeMissing = document.getElementsByTagName('img');
				adobeMissing[0].className = 'displayInline';
			}
			else{
				document.getElementById("adobeMissingText").className = 'adobeMissingMessage';
				document.getElementById("adobelink").innerHTML = missingAdobeReaderText;
				document.getElementById("adobeMissing").className = 'consentDisplayInline';
				var next = document.getElementById('next');
				next.className = 'consentDisplayNone';
				var adobeMissing = document.getElementsByTagName('img');
				adobeMissing[0].className = 'displayInline';
			}
			
		}
		setFocusOnPolicyInfo(hasAdobePluggin);
			
}

//This method will be called at the start of application to check adobe pluggin is installed on client machine or not and accordingly
//display message on the screen.
function checkAdobePlugginTDI(missingAdobeReaderText, missingAdobePluginText){
	var next = document.getElementById('next');
	next.className = 'displayInlineRight';
	var jsErrorMessage = document.getElementById("jsErrorButton");
	jsErrorMessage.className= 'consentDisplayNone';
	//If browser is other than safari,explorer or firefox, show browser unsupported error
	if( BrowserDetect.browser.toLowerCase().indexOf('safari')== -1  &&
			BrowserDetect.browser.toLowerCase().indexOf('explorer')== -1 &&
				BrowserDetect.browser.toLowerCase().indexOf('firefox') == -1 ){
		displayBrowserError();
	}
	//If browser is any one of the above and of lower versions than given , show browser unsupported error
	else if((BrowserDetect.browser.toLowerCase().indexOf('safari')!= -1 && BrowserDetect.version < 3.1)
			|| ( BrowserDetect.browser.toLowerCase().indexOf('explorer')!= -1 && BrowserDetect.version < 6) 
			|| (BrowserDetect.browser.toLowerCase().indexOf('firefox')!= -1 && BrowserDetect.version < 2 ) ){
		displayBrowserError();
		
	}
		var inputs = document.getElementsByTagName("input");
		for(var i=0;i<inputs.length;i++){
			if(inputs[i].type == 'submit' && inputs[i].id.indexOf('jsNext')!= -1 ){
				inputs[i].disabled=false;
				break;
			}
		}
		
		var hasAdobePluggin = checkAdobeInstallation();
		if(!hasAdobePluggin){
			if(navigator.platform!=null && navigator.platform.toLowerCase().indexOf('mac')!= -1 && navigator.userAgent!=null && BrowserDetect.browser.toLowerCase().indexOf('firefox')!= -1){
				document.getElementById("fireFoxAdobeMissingText").className = 'fireFoxAdobeMissingMessage';
				document.getElementById("pluginLink").innerHTML = missingAdobePluginText;
				document.getElementById("fireFoxAdobeMissing").className = 'consentDisplayInline';
				var next = document.getElementById('next');
				next.className = 'consentDisplayNone';
				var adobeMissing = document.getElementsByTagName('img');
				adobeMissing[0].className = 'displayInline';
			}
			else{
				document.getElementById("adobelink").innerHTML = missingAdobeReaderText;
				document.getElementById("adobeMissing").className = 'td-margin-bottom-large';
				var next = document.getElementById('next');
				next.className = 'consentDisplayNone';
				var adobeMissing = document.getElementsByTagName('img');
				adobeMissing[0].className = 'displayInline';
			}
		}
		setFocusOnPolicyInfo(hasAdobePluggin);
}

//Refreshes current page
function refreshPage(){
	document.location.reload(true);
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
    	if(formid != null) {
    		formid += ':';
    	} else {
    		formid = '';
    	}    	
    	if(textboxfocusid == null){
	    	document.getElementById(formid + textboxfocusid).blur();
	        document.getElementById(formid + buttonid).click();
    	} else {
    		document.getElementById(formid + buttonid).focus();	
    	}
        return false;
    } else
       return true;
}

function displayGadgetBlock(formName, loginState, easyWeb, webBroker, newUser) {
	var form = document.getElementById(formName);
	var easyWebRadio = form[form.id + ':SelfRegOverview_radioGroup_easyweb'];
	var newUserRadio = form[form.id + ':SelfRegOverview_radioGroup_newuser'];

	if (easyWeb) {
		if (loginState) {
			document.getElementById('easyWebMessage').style.display = 'block';
		}
		newUserRadio.checked = false;
	}

	if (webBroker) {
		easyWebRadio.checked = false;
		newUserRadio.checked = false;
		document.getElementById('easyWebMessage').style.display = 'none';
	}

	if (newUser) {
		easyWebRadio.checked = false;
		document.getElementById('easyWebMessage').style.display = 'none';
	}
}

/* artf1120720: Back Button | MFA Pages | Safari 3.1| First radio button already clicked by Default | Start */
function clearRadioButton(formName, radioBttn, userSelection){
	var easyWebRadio = document.getElementById(formName + ':' + radioBttn + ':0');
	
	if(userSelection == ''){
		easyWebRadio.checked = false;
	}
}
/* artf1120720: Back Button | MFA Pages | Safari 3.1| First radio button already clicked by Default | End */

function displayEasyWebLoginGadget(formName, user , url, cancelUrl, headingText, accessCardLabel, passwordLabel) {
	displayEasyWebLoginGadget(formName, user , url, cancelUrl, headingText, accessCardLabel, passwordLabel, null, false);
}
/* Added for login gadget integration : Start */
/* The method sets/unsets radio button and also decide whether to load the login gadget based on user selection */
function displayEasyWebLoginGadget(formName, user , url, cancelUrl, headingText, accessCardLabel, passwordLabel, helpLabel, isEvergreen) {
	
	var form = document.getElementById(formName);
	var easyWebRadio = form[form.id + ':SelfRegOverview_radioGroup_easyweb'];
	var newUserRadio = form[form.id + ':SelfRegOverview_radioGroup_newuser'];
	var oDivId = document.getElementById('oDiv');
	
	if (user == 'easyweb') {
	     $("#iDiv").show();
		oDivId.style.display = 'block';
		oDivId.className = 'floatLeft';
		newUserRadio.checked = false;
		
		if (cancelUrl == '') {
			var nextButton = document.getElementById("next");
			nextButton.className= 'consentDisplayNone';			
			var jsErrorButton = document.getElementById("jsErrorButton");
			jsErrorButton.className= 'displayInlineRight';			
		}
	}

	if (user == 'newuser') {
	    $("#iDiv").hide();
		oDivId.className = 'floatNone';
		easyWebRadio.checked = false;
		checkCookiesStatus = isCookiesEnabled();
		var loginGadgetErr = document.getElementById("LoginGadgetErr");
		loginGadgetErr.className= 'consentDisplayNone';
	}
}

/* The method sets the required parameters and calls the login_gadget method that loads the login gadget on page. */
function callLoginGadget(url, cancelUrl, headingText, accessCardLabel, passwordLabel, helpLabel, isEvergreen, callback) {

	var addOnParams = new Hash();
	addOnParams.setItem('goto', url);
	addOnParams.setItem('cancelURL', cancelUrl);
	addOnParams.setItem('showSbmtBtn', 'false');
	addOnParams.setItem('HeadingText', headingText);
	addOnParams.setItem('UserIdLabel', accessCardLabel);
	addOnParams.setItem('PasswordLabel', passwordLabel);
	addOnParams.setItem('defaultCssRequired', 'NO');
	addOnParams.setItem('accessibleMsgs', 'true');

	if (helpLabel != null) {
		addOnParams.setItem('ForgotPasswordLink', helpLabel);
		addOnParams.setItem('showFrgtPwdLink', 'true');
	}

	login_gadget('/waw/idp/loginGadgetFlow.htm', 'oDiv', addOnParams,
			'loginpage', isEvergreen, callback);
}

/*
 * Method either calls the login_gadget method that authenticates the user or
 * submits the request for a new user, based on user selection.
 */
function processRequest(formName) {
	var form = document.getElementById(formName);
	var easyWebRadio = form[form.id + ':SelfRegOverview_radioGroup_easyweb'];
	var nextNewUser = document.getElementById(form.id + ':nextNewUser');

	if(easyWebRadio.checked){

		 // Begin UAP integration
        var languages = { en_ca: "en_CA", fr_ca: "fr_CA" };
        var lang = languages[$('meta[http-equiv="Content-Language"]').attr('content').toLowerCase()];

        var cookieIframe = document.getElementById('uapCookieFrame');
        var cookieFrameObj = $("#uapCookieFrame");

        // Pull required values from iFrame data-attributes
        var clientId = cookieFrameObj.attr('data-clientid');
        var pingDomain = cookieFrameObj.attr('data-pingurl');
        var uapDomain = cookieFrameObj.attr('data-uapurl');
        var redirectUri = window.location.protocol + "//" + window.location.hostname + cookieFrameObj.attr('data-redirecturi') + lang;
        var encodedRedirectUri = encodeURIComponent(redirectUri);
        var consumerId = cookieFrameObj.attr('data-consumerid');
        var responseType = 'code';
        var idpAdapter = 'uapdapter';
        var scopes = cookieFrameObj.attr('data-scope');

        cookieIframe.addEventListener('load', function() {
			var url;

			if (!!scopes) {
				url = pingDomain + '/as/authorization.oauth2'
					+ '?response_type=' + responseType
					+ '&client_id=' + clientId
					+ '&pfidpadapterid=' + idpAdapter
					+ '&scope=' + scopes
					+ '&redirect_uri=' + encodedRedirectUri
			} else {
				url = pingDomain + '/as/authorization.oauth2'
					+ '?response_type=' + responseType
					+ '&client_id=' + clientId
					+ '&pfidpadapterid=' + idpAdapter
					+ '&redirect_uri=' + encodedRedirectUri
			}

           	window.location.replace(url);
        });

        cookieIframe.src = uapDomain + '/uap-ui/login-initializer'
                                      + '?lang=' + lang
                                      + '&consumer=' + consumerId;
	} else {
		/* clicks the submit button */
		nextNewUser.click();
	}
} 

/* artf1121267 | Session Timeout message does not appear for Login gadget | Start | garora */
function loginGadgetAjaxRequest(action, nextNewUser) {
	var request = false;

	// branch for native XMLHttpRequest object
	if (window.XMLHttpRequest && !(window.ActiveXObject)) {
		try {
			request = new XMLHttpRequest();
		} catch (e) {
			request = false;
		}
		// branch for IE/Windows ActiveX version
	} else if (window.ActiveXObject) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				request = false;
			}
		}
	}
	if (request) {
		request.onreadystatechange = function() {
			if (request.readyState == 4 && request.status == 200) {
				var result = request.responseText;
				result = result.substring(0,4);

				if(result != ''){
					if(result == 'true'){
						/* call to login_gadget method */
						login_gadget('/waw/idp/loginGadgetFlow.htm', 'oDiv', null, 'login', true, function() {
							scrollAndFocus('#LoginGadgetErr > div > #errorAlertDiv');
						});
					} else {
						nextNewUser.click();
					}
				}
			}
		};
		request.open("POST", action, true);
		request.send(null);
	}
}
/* artf1121267 | Session Timeout message does not appear for Login gadget | End | garora */
/* Added for login gadget integration : End */

function addLoadEvent(func) {
	
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			func();
			oldonload();
		};
	}
}

function setFirstFocus(){

	window.onload = function() {
		var formInputs = document.getElementsByTagName('input');
		if(document.getElementById('errorMessage') && document.getElementById('errorMessage').getElementsByTagName('li'))
		{
			if(document.getElementById('errorMessage').getElementsByTagName('li').length <= 0){
				for(i=0;i<formInputs.length;i++){
		
					if(formInputs[i].type == 'text'){
						formInputs[i].focus();
						break;
					}
				}
			}
		}
	};
}

function prepareInputsForHints() {
	var inputs = document.getElementsByTagName("input");
	if(document.getElementById('errorMessage') && document.getElementById('errorMessage').getElementsByTagName('li'))
	{
		if(document.getElementById('errorMessage').getElementsByTagName('li').length <= 0 ){
			for(i=0;i<inputs.length;i++){
				if(inputs[i].type == 'text' || inputs[i].type == 'password'){
					inputs[i].focus();
					inputs[i].parentNode.getElementsByTagName("span")[0].style.display = "block";
					break;
				}
			}
		}
	}
	for ( var i = 0; i < inputs.length; i++) {
		if(inputs[i].type == 'text' || inputs[i].type == 'password'){
			if (inputs[i].parentNode.getElementsByTagName("span")[0]) {
				inputs[i].onfocus = function() {
					this.parentNode.getElementsByTagName("span")[0].style.display = "block";
				}
				//when the cursor moves away from the field, hide the hint
				inputs[i].onblur = function() {
					this.parentNode.getElementsByTagName("span")[0].style.display = "none";
				}
			}
		}
	}
	// repeat the same tests as above for selects
	var selects = document.getElementsByTagName("select");
	for ( var k = 0; k < selects.length; k++) {
		if (selects[k].parentNode.getElementsByTagName("span")[0]) {
			selects[k].onfocus = function() {
				this.parentNode.getElementsByTagName("span")[0].style.display = "block";
			}
			selects[k].onblur = function() {
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			}
		}
	}
}

function setFocusOnPolicyInfo(hasAdobePluggin){
	
	var formInputs = document.getElementsByTagName('input');

	if(document.getElementById('errorMessage') && document.getElementById('errorMessage').getElementsByTagName('li') && hasAdobePluggin)
		{
			if(document.getElementById('errorMessage').getElementsByTagName('li').length <= 0 && hasAdobePluggin){
				for(i=0;i<formInputs.length;i++){
					if(formInputs[i].type == 'text'){
						formInputs[i].focus();
						break;
					}
				}
		}
	}
}

function setButtonFocus(formId, buttonId){
	window.onload = function() {
		document.getElementById(formId+':'+buttonId).focus();
	};
}

function sendNextSubmit(){
	var formSubmits = document.getElementsByTagName('input');
	var position = 0;
		for(i=0;i<formSubmits.length;i++){
			if(formSubmits[i].type == 'submit'){
				position = i;
				if(formSubmits[i].hasFocus){
					break;
				}
			}
		}
	if(position > 0){
		formSubmits[position].focus();
	}
}

function submitNext(event){
	var keycode;
	if (event.charCode)
		keycode = event.charCode;
	else if (event.keyCode)
		keycode = event.keyCode;
	else if (event.which)
		keycode = event.which;
	else
		keycode = 0;
	if (keycode == 13) {
		sendNextSubmit();
	}
}

function fillDefaultData(thiselement, defaultVal) {
	if (thiselement.value == '') {
		thiselement.value = defaultVal;
	}
}

/**
*
*  Javascript trim, ltrim, rtrim
*  http://www.webtoolkit.info/
*
**/
 
function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
//TODO Below three methods will be removed once a4j.js configuration will be successful through Richfaces jar.
function _clearJSFFormParameters(node,test,hiddenvar){}
function clear_form() {}
function clearFormHiddenParams_form(){}

var appendEvent = function () {
    if (window.addEventListener) {
        return function (el, type, fn) {
            if (typeof el === 'string') {
                document.getElementById(el).addEventListener(type, fn, false);
            } else {
                el.addEventListener(type, fn, false);
            }
        };
    } else if (window.attachEvent) {
        return function (el, type, fn) {
            var f = function () {
                fn.call(((typeof el === 'string')?document.getElementById(el):el), window.event);
            };
            if (typeof el === 'string') {
                document.getElementById(el).attachEvent('on' + type, f);
            } else {
                el.attachEvent('on' + type, f);
            }
        };
    }
}();


/*CSS Browser Selector for Mac Mozilla*/

function css_browser_selector(u)
{
	var ua = u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1;},g='gecko',w='webkit',s='safari',o='opera',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&(/msie\s(\d)/.test(ua)))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?'mobile':is('iphone')?'iphone':is('ipod')?'ipod':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win':is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; 
css_browser_selector(navigator.userAgent);

/* Added to detect browsers */
var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString = data[i].string;
				var dataProp = data[i].prop;
				this.versionSearchString = data[i].versionSearch || data[i].identity;
				if (dataString) {
					if (dataString.indexOf(data[i].subString) != -1)
						return data[i].identity;
				}
				else if (dataProp)
					return data[i].identity;
			}
		},
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1) return;
			return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
		},
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome"
			},
			{ 	string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb"
			},
			{
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari",
				versionSearch: "Version"
			},
			{
				prop: window.opera,
				identity: "Opera"
			},
			{
				string: navigator.vendor,
				subString: "iCab",
				identity: "iCab"
			},
			{
				string: navigator.vendor,
				subString: "KDE",
				identity: "Konqueror"
			},
			{		// for newer Netscapes (9+)
				string: navigator.userAgent,
				subString: "Navigator",
				identity: "Navigator"
			},
			{
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox"
			},
			{
				string: navigator.vendor,
				subString: "Camino",
				identity: "Camino"
			},
			{		// for newer Netscapes (6+)
				string: navigator.userAgent,
				subString: "Netscape",
				identity: "Netscape"
			},
			{
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer",
				versionSearch: "MSIE"
			},
			{
				string: navigator.userAgent,
				subString: "Gecko",
				identity: "Mozilla",
				versionSearch: "rv"
			},
			{ 		// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla"
			}
		],
		dataOS : [
			{
				string: navigator.platform,
				subString: "Win",
				identity: "Windows"
			},
			{
				string: navigator.platform,
				subString: "Mac",
				identity: "Mac"
			},
			{
				   string: navigator.userAgent,
				   subString: "iPhone",
				   identity: "iPhone/iPod"
		    },
			{
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]

	};
	BrowserDetect.init();
//Stubbing Function to check User Response on OOWQ Questinnaire

function validateOutOfWallet() {
	var issuer=false;
	var insurer=false;
	var clientDur=false;
	var radioOptions = document.getElementsByTagName('input');
	for(i=0;i<radioOptions.length;i++){
		if(radioOptions[i].type == "radio" 
				&& radioOptions[i].id.indexOf('clientDur') > 0 
				&& radioOptions[i].value== '1' 
				&& radioOptions[i].checked == true){
				clientDur=true;}
		if(radioOptions[i].type == "radio" 
				&& radioOptions[i].id.indexOf('insurer') > 0 
				&& radioOptions[i].value== '1' 
				&& radioOptions[i].checked == true){
			insurer=true;}
		if(radioOptions[i].type == "radio" 
				&& radioOptions[i].id.indexOf('issuer') > 0 
				&& radioOptions[i].value== '1' 
				&& radioOptions[i].checked == true){
			issuer=true;}
		}
	if(issuer && clientDur && insurer){
		document.getElementById('SelfRegVerificationQuestion:userResponse').value=true;
	}
}

function goToSelectedSite() {
	var domain = document.getElementById('lobselected').value;
	var port = document.getElementById('port').value;

	if (domain == 'EasyWeb' || domain == 'BanqueNet') 
	{		
			window.location = document.getElementById('easywebUrl').value;
	}
	
	else if (domain == 'WebBroker' || domain == 'CourtierWeb')
	{
			window.location = document.getElementById('webbrokerUrl').value;
	}
	else if (domain == 'MyInsurance' || domain == 'MonAssurance') 
	{
			window.location = document.getElementById('tdiUrl').value;
    }
}

//This method will show/hide the button with given buttonId depending upon
//whether true /false is passed
// QC #23 : JAWS not reading radio button text upon selection : focused is
// removed from submit buttons; instead next is enabled/ disabled
function showHideNextButton(value, formId, nextButtonId) {
	if (value == "true") {
		// Show Next button		
		document.getElementById('next').style.display = 'inline';
		//Enable Next button
		document.getElementById(formId+':'+nextButtonId).disabled = false;
		// Hide please note
		document.getElementById('pleaseNote').style.display = 'none';
		
	} else {
		//Hide Next button
		document.getElementById('next').style.display = 'none';
		//Disable next button
		document.getElementById(formId+':'+nextButtonId).disabled = true;
		// Show div
		document.getElementById('pleaseNote').style.display = 'block';
		
	}
}


function isCookiesEnabled()
{
	var cookieEnabled = (navigator.cookieEnabled) ? true : false;

	if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
	{ 
		document.cookie="testcookie";
		cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	}
	return (cookieEnabled);
}

/**
 * Shows or Hides the specified element.
 * Example: onClick="showHideToggle('myID','show');" will set the HTML style to style.display = 'block'.
 * 
 * @param elementID	- The ID of the HTML element to show/hide
 * @param action - The action. Use 'show' to show the element. Any other value results in a hide.
 * @return None
 */
function showHideToggle(elementID, action) {
	var element = document.getElementById(elementID);
	if (action == "show") {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
}

function showFailedValidation(errorDiv, textInput, message) {
	$(errorDiv).css("display", "block");
	$(errorDiv).text(message);
	$(textInput).addClass("validationErrorInput");
}

function showPassedValidation(errorDiv, textInput) {
	$(errorDiv).css("display", "none");
	$(textInput).removeClass("validationErrorInput");
}

function showPassedValidationOnInput(textInput) {
	$(textInput).removeClass("validationErrorInput");
}
function showPassedValidationOnErrorMsg(errorDiv) {
	$(errorDiv).css("display", "none");
}

/**
 * Used to select and style the active step on the progress bar.
 * @param stepNumber The step that should be active.
 */
function selectProgressStep(stepNumber) {
	// Set bar title to include active step text.
	var titleText = document.getElementById("title");
	var activeItemTitle = document.getElementById("progressTitle" + stepNumber);
	titleText.innerHTML = titleText.innerHTML + activeItemTitle.innerHTML;
	
	// set the progress bar shading level
	document.getElementById("progressLine").setAttribute("value", stepNumber);
	// calculate the percent to set on the IE Progress line
	var totalSteps = document.getElementById("progressLine").getAttribute("max");
	var percentComplete = ((totalSteps == stepNumber) ? 100 : 100 / totalSteps * stepNumber);
	document.getElementById("progressLineIE").setAttribute("style", "width:" + percentComplete + "%;");
	
	// Set active step style
	var activeItem = document.getElementById("progressItem" + stepNumber);
	activeItem.className = "step" + stepNumber + " step-active";
	document.getElementById("progressItemAccess" + stepNumber).innerHTML = document.getElementById("AccessTextCurrent").innerHTML;

	// Style all elements before active element as complete
	for (var i = 1; i < stepNumber; ++i) {
		var completeItem = document.getElementById("progressItem" + i);
		completeItem.className = "step" + stepNumber + " step-done";
		document.getElementById("progressItemAccess" + i).innerHTML = document.getElementById("AccessTextCompleted").innerHTML;
	}
	// set the accessible test, this is least important step visually so doing it last
	var accessProgressText = document.getElementById("AccessTextStep").innerHTML + ' ' + stepNumber + 
		' ' + document.getElementById("AccessTextOf").innerHTML + ' ' + totalSteps;
	document.getElementById("progressLineText").innerHTML = accessProgressText;
}
function grabErrorMessagesTdi() {
    var str2="";
    var divEl= document.getElementById('errorAlertDiv');

    if(divEl) {
        var ulEl= divEl.children;
        for(var i=0;i < ulEl.length;i++){
            var ulElement=ulEl[i];
            var liNodes=ulElement.children;
            for(var k=0;k < liNodes.length;k++){
                if(str2==="")
                    str2+=$(liNodes[k]).text();
                else
                    str2+="|"+$(liNodes[k]).text();
            }
        }
    }
    return str2;
}