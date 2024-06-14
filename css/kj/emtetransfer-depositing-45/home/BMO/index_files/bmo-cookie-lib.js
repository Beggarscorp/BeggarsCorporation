// This javascript requires bmo-string-lib.js.

function getCookie(cookieName) {
	var cookieArray = document.cookie.split(';');
	
	for (var i = 0; i < cookieArray.length; i++) {
		var cookie = cookieArray[i].split("=");
		var name = cookie[0].trim();
		var value = cookie[1].trim();
				
		if (cookieName.indexOf(name) == 0) {
			return value;
		}
	}
	
	return "";
}