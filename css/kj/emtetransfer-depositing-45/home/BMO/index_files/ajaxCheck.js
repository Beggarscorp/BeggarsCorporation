function checkAjax(lang) {
	try {
		request = new XMLHttpRequest();
	}
	catch (e) {
		try {
			request = new ActiveXObject("Mxsml2.XMLHTTP");
		}
		catch (e1) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e2) {
				request = null;
			}
		}
	}
	
	if (request == null) {
		window.location = "/onlinebanking/html/" + lang + "/NoAjax.html";
	}
}