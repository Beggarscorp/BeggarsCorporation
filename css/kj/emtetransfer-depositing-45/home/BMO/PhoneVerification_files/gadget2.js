var gadget_setup_options = {};
var map = {};
var override = false;

function load_gadget(gadget_options, url) {
	var placeholder = gadget_options.placeholder || gadget_setup_options.defaultDiv;
	var lang = gadget_options.language || gadget_setup_options.defaultLanguage;
	var callback = gadget_options.callback || gadget_setup_options.eventListener || function(gadget_result) {};
	
	if(!gadget_options.data) {
		gadget_options.data = new Array();
	}
	if(lang) {
		gadget_options.data.push({name : "language", value : lang});
	}
	
	jQuery.get(
		url, 
		jQuery.param(gadget_options.data), 
		function(response, status, xhr) {
			jQuery("#" + placeholder).html(response);
			attachPie(placeholder);
			if(status === "error") {
				callback({command : "load", status : "error"});
			}
			else {
				callback({command : "load", status : "success"});
			}
			map[stripQueryParams(url)] = placeholder;
		}
	);
}

function attachPie(placeholder) {
	if (window.PIE) {
		jQuery("#" + placeholder + " a.td-link-toggle span.td-triggericon, hr.td-divider-fade, .td-button, .td-callout:not(.td-modal), .td-fauxbgimage, .td-banner img, .td-modal-mask, .td-cs-primary, .td-cs-secondary, .td-cs-tertiary:not(.td-modal), .td-cs-tertiary-light").each(function() {
			 PIE.attach(this);
        });
	}
}

function post_gadget_link(event) {
	var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
	post_gadget_custom({}, jQuery(target).closest("form").attr("id"), jQuery(target).attr("id"));
}

function post_gadget(element) {
	post_gadget_custom({}, jQuery(element).closest("form").attr("id"), jQuery(element).attr("name"));
}

function post_gadget_custom(gadget_options, form, fullCommand) {
	var url = gadget_options.url || jQuery('#' + form).attr('action');
	var placeholder = gadget_options.placeholder || gadget_setup_options.defaultDiv;
	var callback = gadget_options.callback || gadget_setup_options.eventListener || function(gadget_result) {};
	var lang = gadget_options.language || gadget_setup_options.defaultLanguage;
	var preSubmitAction = gadget_options.preSubmitAction || gadget_setup_options.preSubmitAction;
	
	var form_data = jQuery('#' + form).serializeArray();
	form_data.push({name : fullCommand.toString(), value : fullCommand.toString()});
	if(lang) {
		form_data.push({name : "language", value : lang.toString()});
	}
	var commandSub = jQuery(fullCommand.split(":")).last()[0];
	
	jQuery.ajaxSetup({
		contentType: "application/x-www-form-urlencoded; charset=UTF-8"
	});

	preSubmitAction(jQuery("#" + form));
	
	jQuery.post(  
		url,  
		form_data,  
		function(responseText, status){
			if(jQuery.trim(jQuery(responseText).find("#errorMessage").text()) !== "" || status === "error") {
				jQuery("#" + map[stripQueryParams(url)]).html(responseText);
				var statusString = "error";
			}
			else {
				jQuery("#" + placeholder).html(responseText);
				map[stripQueryParams(url)] = placeholder;
				var statusString = "success";
			}
			attachPie(map[stripQueryParams(url)]);
			if(override === false) {
				callback({command : commandSub, status : statusString});
			}
			else {
				override = false;
			}
		},  
		"html"  
	);  
}

function gadget_setup(gadget_options) {
	gadget_setup_options.defaultDiv = gadget_options.defaultDiv || null;
	gadget_setup_options.eventListener = gadget_options.eventListener || function() {};
	gadget_setup_options.defaultLanguage = gadget_options.defaultLanguage || null;
	gadget_setup_options.preSubmitAction = gadget_options.preSubmitAction || function() {};
}

function raise_event(command, ovr) {
	var callback = gadget_setup_options.eventListener || function(gadget_result) {};
	callback(command);
	override = ovr;
}

function stripQueryParams(url) {
	return url.split('?')[0];
}