/** @author Bryan Johnson - Depends on jQuery >= 1.8.3 */

/**
 * Used to scroll to the specified element and then place focus on it.
 * @param element HTMLElement
 */
var scrollAndFocus = function(elementId) {
	var element = $(elementId);
	var top = element.offset().top;
	
	$(document).scrollTop(top);
	element.focus();
};

/**
 * Triggers the scrollAndFocus function if the event associated with this invocation
 * is an Enter or Space keypress.
 * @param e DOM keypress Event
 * @param elementId  Element to scroll to and focus on.
 */
var scrollOnActivate = function(e, elementId) {
	var keyCode = e.keyCode || e.which;
	if(keyCode === 13 || keyCode === 32) {
		stopDefaultAction(e);
		scrollAndFocus(elementId);
	}
};

/**
 * IE8 safe function for preventing the default event action.
 * @param e DOM Event
 */
var stopDefaultAction = function(e) {
	if(e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
};