//Function to hide or unhide the Nickname field
function toggleLayer(){
	if (fullyLoaded == true) {
		if (document.getElementById){
			if(!layerVisible){
				document.getElementById('nicknameLayer').style.display = '';
				document.getElementById('nicknameBoxLayer').style.display = '';
				layerVisible = true;
			}else{
				document.getElementById('nicknameLayer').style.display = 'none';
				document.getElementById('nicknameBoxLayer').style.display = 'none';
				layerVisible = false;
				document.SignOn.FBC_Nickname.value = "";
			}
		}
	}
	else {
		document.SignOn.saveFBC.value = false;
	}
}
		
layerVisible = false;

function SignInChecks() {
	if (ExSiCheck()) {
		return checkDblclick();
	}
	else {
		return false;
	} 
}

// Function to unhide the "Enter your Bank Card" fields when choosing "Use a different Bank card" from drop down.
function useDifferentBankCard() {
	if (fullyLoaded == true) {
		if (document.SignOn.ExSi_FBC.value == 9) {
			toggleBankcardLayer();
		}
		else {
			if(layerEnterBankCardVisible){
				toggleBankcardLayer();
			}
		}
	}
	else {
		document.SignOn.ExSi_FBC.value = document.SignOn.ExSi_FBC.options[0].value;
	}
}
// Function to hide or unhide the "Enter your Bank Card" fields
function toggleBankcardLayer(){
	if (fullyLoaded == true) {
		if (document.getElementById){
			if(!layerEnterBankCardVisible){
				document.getElementById('firstSixLayer').style.display = '';
				document.getElementById('FBCinputLayer').style.display = '';
				document.getElementById('saveFBCLayer').style.display = '';
				//document.getElementById('EnterPassword1Layer').style.display = 'none';
				//document.getElementById('passwordBox1Layer').style.display = 'none';
				document.getElementById('goImage1Layer').style.display = 'none';
				//document.getElementById('EnterPassword2Layer').style.display = '';
				//document.getElementById('passwordBox2Layer').style.display = '';
				document.getElementById('goImage2Layer').style.display = '';
				layerEnterBankCardVisible = true;
				layerNicknameVisible = !document.SignOn.saveFBC.value;
				//document.SignOn.ExSi_FBC_Password.value = "";
				document.SignOn.ExSi_FBC.value = 9;
			}else{
				document.getElementById('firstSixLayer').style.display = 'none';
				document.getElementById('FBCinputLayer').style.display = 'none';
				document.getElementById('saveFBCLayer').style.display = 'none';
				//document.getElementById('EnterPassword1Layer').style.display = '';
				//document.getElementById('passwordBox1Layer').style.display = '';
				document.getElementById('goImage1Layer').style.display = '';
				//document.getElementById('EnterPassword2Layer').style.display = 'none';
				//document.getElementById('passwordBox2Layer').style.display = 'none';
				document.getElementById('goImage2Layer').style.display = 'none';
				layerEnterBankCardVisible = false;
				layerNicknameVisible = true;
				document.SignOn.FBC_Number.value = "";
				//document.SignOn.FBC_Password.value = "";
				if (document.SignOn.ExSi_FBC.value == 9) {
					document.SignOn.ExSi_FBC.value = document.SignOn.ExSi_FBC.options[0].value;
				}
				if (document.SignOn.saveFBC.value == true) {
					document.SignOn.saveFBC.value = false;
				}
			}
			toggleNicknameLayer();
		}
	}
	else {
		document.SignOn.FBC_Number.value = "";
		//document.SignOn.FBC_Password.value = "";
		//document.SignOn.ExSi_FBC_Password.value = "";
		document.SignOn.ExSi_FBC.value = document.SignOn.ExSi_FBC.options[0].value;
		document.SignOn.saveFBC.value = false;
	}
}

//Function to hide or unhide the Nickname field
function toggleNicknameLayer(){
	if (fullyLoaded == true) {
		if (document.getElementById){
			if(!layerNicknameVisible){
				document.getElementById('nicknameLayer').style.display = '';
				document.getElementById('nicknameBoxLayer').style.display = '';
				layerNicknameVisible = true;
			}else{
				document.getElementById('nicknameLayer').style.display = 'none';
				document.getElementById('nicknameBoxLayer').style.display = 'none';
				layerNicknameVisible = false;
				document.SignOn.FBC_Nickname.value = "";
			}
		}
	}
	else {
		document.SignOn.FBC_Nickname.value = "";
	}
}
		
layerNicknameVisible = true;
layerEnterBankCardVisible = false;

//Remove express sign in cookie
function removeCard(token) {
	var expireDate = new Date(0);
	
	// Read all the cookies and match with the token to determine which cookie to delete
	var allCookies = document.cookie;
	cookieArray = allCookies.split(";");	
	
	for (var i = 0; i < cookieArray.length; i++) {
		name = cookieArray[i].split("=")[0].trim();
		value = cookieArray[i].split("=")[1].trim();
		
		if ((name.startsWith("ExSi") || name.startsWith("MCExpSi")) && value.startsWith(token)) {
			document.cookie = name + "=; expires=" + expireDate.toGMTString() + "; path=/cgi-bin/netbnx; domain=bmo.com; secure";
			document.cookie = name + "=; expires=" + expireDate.toGMTString() + "; path=/onlinebanking/cgi-bin/netbnx; domain=bmo.com; secure";
			document.cookie = name + "=; expires=" + expireDate.toGMTString() + "; path=/onlinebanking/; domain=bmo.com; secure";
			window.location.reload(false);
			break;
		}
	}	
}


// TODO DMC confirm if this method can be removed.
function removeMasterCard(fbcKey) 
{
	var cstr = "=" + fbcKey;
	var ExSiName = "";
	var kill_time = new Date("January 1, 1970");
	var index2 = document.cookie.indexOf(cstr);
	var index1 = index2 - 7;

	// Find the cookie name with the associated fbc key to be deleted
	
	if (fullyLoaded == true && fbcKey != 0 && fbcKey != 9) {
		while (index1 >= 0) {
			if (document.cookie.substring(index1, index1+7) == "MCExpSi") {
				ExSiName = document.cookie.substring(index1, index2);
				index1 = 0;
			}
			index1--;
		}
		// Confirm that customer wants to delete the fbc and then delete it from the cookie.
		if (ExSiName != "") {
			//if (confirm("Please confirm you would like to delete the selected card.")) {
	 			document.cookie = ExSiName + "=; expires=" + kill_time.toGMTString() + "; path=/onlinebanking/; domain=bmo.com; secure";
				window.location.reload(false);
		//	}
		}
	}
}

// Function to perform all the Express Signin checks.
function ExSiCheck()
{
	if (fullyLoaded == true) {
		var saveFBCChecked = dijit.byId("siRememberBankCard").checked;
		if(saveFBCChecked){
			document.SignOn.saveFBC.value = true;
		}
		if (!saveFBCChecked) {
			document.SignOn.saveFBC.value = false;
			return true;
		}
		else if (isMaxCardSaved()) {
			errors[0]="You have exceeded the maximum number of cards that may be saved.\nYou can remove and replace an existing card number.";
			displayErrors(errors);
			//alert ("You have exceeded the maximum number of cards that may be saved.\nYou can remove and replace an existing card number.");
			return false;
		}		
		else if (!validateNickname()) {
			errors[0]="Special characters (eg, *, %, $, etc.) cannot be used.\nPlease re-enter Nickname.";
			displayErrors(errors);
			//alert ("Special characters (eg, *, %, $, etc.) cannot be used.\nPlease re-enter Nickname.");
			return false;
		}
		else {
			return true;
		}
	}
	else {
		return false;
	}
}

function isMaxCardSaved() {
	var cookieArray = document.cookie.split(";");
	
	var count = 0;
	// Count number of cards already saved.
	for (var i = 0; i < cookieArray.length; i++) {
		cookie = cookieArray[i].trim();
		if (cookie.startsWith("ExSi") || cookie.startsWith("MCExpSi")) {
			count++;
		}
	}
	
	// Already have 10 cards saved.
	if (count >= 10) {
		return true;
	}
	else {
		return false;
	}
}

// Validate the nickname field.
function validateNickname()
{
	var nickname = document.SignOn.FBC_Nickname.value;
	var checkString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var ch;
	var j;
	
	if (nickname.length != 0) {
		// Nickname length must be less than 6 characters.
		if (nickname.length > 6) {
			return false;
		}
		
		for (var i = 0; i < nickname.length; i++) {
			ch = nickname.charAt(i);
			j = 0;
			while (ch != checkString.charAt(j)) {
				if (j == checkString.length) {
					return false;
				}
				j++;
			}
		}
	}
	return true;		
}