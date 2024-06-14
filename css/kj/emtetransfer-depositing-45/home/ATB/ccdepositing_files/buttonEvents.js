function setupEnterListener(formName, buttonName) {
	$(document).ready(function() {
		$("#" + formName).keypress(function(e) {
			if (e.keyCode == 13) {
				e.preventDefault(); // stops default form submission of 'cancel' button
				$('#' + formName + "\\:" + buttonName).click();
				return false;
			}
		});
	});
}