var sc_mapping = {};

function loadAnalyticsScript(url) {
     // Load s_code script into HTML DOM.
	var body = document.getElementsByTagName('body')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	// Bind the event to the set s-code data functions.
	// There are several events for cross browser compatibility
	// For IE, incl. IE9.
	if (script.readyState) { 
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
	         
				sCodeTracking();
			}
		};
	}
	else {
		// For other browsers.	
		script.onload = function() { 
			sCodeTracking();
		};
	}

	// Load the script into the body.
	if (body != null) {
		body.appendChild(script);
	}
 	 
}

function sCodeTracking() {
	// Determine if the s_code is loaded.
	if(typeof s != 'undefined'){
		if (s.t != undefined) {
			// Function defined in webAnalytics.jspf
			if (typeof sCodeData === 'function') {
				sCodeData();
			}
					
			// Function defined in individual pages.
			if (typeof sCodeAdditionalData === 'function') {
				sCodeAdditionalData();
			}
					 
			// Send s-code data.
			var s_code = s.t();
			if (s_code) {
				document.write(s_code);
			}	         	
		}
	}
}

/*
* This function shall assume that the input title will be of below format, if not, it will return "" (empty) string
* Format -->
* BMO Online Banking<space>-<space>Payment & Transfer<space>-<space>Investigate A Bill<space>-<space>Enter Details
* where, <space> = actual space
*/
function generatePageName(title) {
	var gPageTitle = title;
	var wpTitleElements;
	if(isNotEmpty(gPageTitle)){
		//define initial title string
		var titleSeparator = ":";
		var pageName = sc_mapping["group"]+titleSeparator+sc_mapping["brand"]+titleSeparator+sc_mapping["lob"]; //+ is used instead of append as IE seems to be slow, but more search is needed here
		wpTitleElements = stringTokenizer(gPageTitle);
		
		if(wpTitleElements.length <= 1){
			return "";
		}
		for (var elements=1; elements<wpTitleElements.length; elements++){
			var resolvedMappping = sc_mapping[wpTitleElements[elements]];
			pageName = removeWhiteSpace(pageName+titleSeparator+(resolvedMappping != undefined ? resolvedMappping : wpTitleElements[elements]));
		}
		if(sc_mapping["lang"] == "fr"){
			pageName = executeValidLength(pageName, 97) + " fr";
		}else {
			pageName = executeValidLength(pageName, 100);
		}
		
		return pageName;
	}
}

//Utils methods (need to decide the location of these methods)
function stringTokenizer(data){
   return data.split(" - ");
}
function removeWhiteSpace(inputData){
	return inputData.replace(/\s+/g, '');
}
function isNotEmpty(string){
	return string!=null&&string.length!=0;
}
function executeValidLength(pageName, validLength){
	return pageName.substring(0,validLength);
}

// Mappings.
sc_mapping["group"]="BMO";
sc_mapping["brand"]="OLB";


// Other mappings.