/*
 * TD ESR Tracking Script
 * Version 4.6
 * Last Update by Christina Richardson @ 08/19/2012
 * Validated by JL @ 07:00 PM EST 04/25/2012
 */

/* SiteCatalyst code version: H.25.4
Copyright 1996-2011 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

/****************CUSTOM FUNCTIONS***************/
/* Set report suite ID dynamically based on domain */
function cfCheckRSID(cvURL) {
	var cvHostName = cfUtility(cvURL,'server');
	switch ( cvHostName ) {
		case "easyweb.td.com":
		case "easyweb.tdcanadatrust.com":
		case "easywebcpo.td.com":
		case "easywebsoc.td.com":
		case "easywebcpo.tdcanadatrust.com":
		case "easywebsoc.tdcanadatrust.com":
		case "banquenet.td.com":
		case "banquenetsoc.td.com":
		case "banquenetcpo.td.com":
		case "banquenetsoc.tdcanadatrust.com":
		case "banquenetcpo.tdcanadatrust.com":
		case "apply.td.com":
		case "applysoc.td.com":
		case "applycpo.td.com":
		case "demande.td.com":
		case "demandesoc.td.com":
		case "demandecpo.td.com":
			ReportSuiteID = "tdtdct,tdglobal";
			break;
		case "webbroker.td.com":
		case "webbrokersoc.td.com":
		case "webbrokercpo.td.com":
		case "webbroker.tdwaterhouse.ca":
		case "webbrokersoc.tdwaterhouse.ca":
		case "webbrokercpo.tdwaterhouse.ca":
		case "courtierweb.td.com":
		case "courtierwebsoc.td.com":
		case "courtierwebcpo.td.com":
		case "courtierweb.tdwaterhouse.ca":
		case "courtierwebsoc.tdwaterhouse.ca":
		case "courtierwebcpo.tdwaterhouse.ca":
			ReportSuiteID = "tdtdw,tdglobal";
			break;
		case "myinsurance.td.com":
		case "myinsurancesoc.td.com":
		case "myinsurancecpo.td.com":
		case "monassurance.td.com":
		case "monassurancesoc.td.com":
		case "monassurancecpo.td.com":
		case "myinsurance.primmum.com":
		case "myinsurancesoc.primmum.com":
		case "myinsurancecpo.primmum.com":
		case "monassurance.primmum.com":
		case "monassurancesoc.primmum.com":
		case "monassurancecpo.primmum.com":
			ReportSuiteID = "tdtdi,tdglobal";
			break;
		case "cip.td.com":
		case "cipsoc.td.com":
		case "cipcpo.td.com":
		case "cipfr.td.com":
		case "cipfrsoc.td.com":
		case "cipfrcpo.td.com":
			ReportSuiteID = "tdtdbfg,tdglobal";
			break;
		default:
			ReportSuiteID = "tdother";
			break;
	}
	
	ReportSuiteID = ReportSuiteID.toLowerCase();
	return ReportSuiteID;
}

function customSections(section, subsection_1, subsection_2, subsection_3) {
	var sectionEmpty = true;
	if( typeof(section) !== "undefined" && section != " " && section != "" ) {
		sectionEmpty = false;
	}
	var sub1Empty = true;
	if( typeof(subsection_1) !== "undefined" && subsection_1 != " " && subsection_1 != "" ) {
		sub1Empty = false;
	}
	var sub2Empty = true;
	if( typeof(subsection_2) !== "undefined" && subsection_2 != " " && subsection_2 != "" ) {
		sub2Empty = false;
	}
	var sub3Empty = true;
	if( typeof(subsection_3) !== "undefined" && subsection_3 != " " && subsection_3 != "" ) {
		sub3Empty = false;
	}

	if( !sectionEmpty ) {
		s.prop7 = s.hier1 = section;
		if( !sub1Empty ) {
			s.prop8 = s.prop7 + "/" + subsection_1;
			s.hier1 = s.prop7 + "|" + subsection_1;
		}
		if( !sub2Empty && !sub1Empty ) {
			s.prop8 = s.prop7 + "/" + subsection_1;
			s.prop9 = s.prop8 + "/" + subsection_2;
			s.hier1 = s.prop7 + "|" + subsection_1 + "|" + subsection_2;
		}
		if( !sub3Empty && !sub2Empty && !sub1Empty ) {
			s.prop8 = s.prop7 + "/" + subsection_1;
			s.prop9 = s.prop8 + "/" + subsection_2;
			s.prop10 = s.prop9 + "/" + subsection_3;
			s.hier1 = s.prop7 + "|" + subsection_1 + "|" + subsection_2 + "|" + subsection_3;
		}
	}
}

function cfPageName(cvURL,cvParamInPageName,cvParamToInclude) {
	// if cvParamInPageName = 1, it will include parameters in the s.pageName
	if (cvParamInPageName == 1) {
	    if (cvParamToInclude != "") {
	        var cvParam_Modified = "?";
	        cvParam_Split = cvParamToInclude.toLowerCase().split(",");
	        for (var i = 0; i < cvParam_Split.length; i = i + 1) {
				if (cfGetQParam(cvURL,cvParam_Split[i])) cvParam_Modified = cvParam_Modified + cvParam_Split[i] + "=" + cfGetQParam(cvURL,cvParam_Split[i]) + "&";
	        }
	        cvParam_Modified = cvParam_Modified.substring(0, cvParam_Modified.length - 1);
	        var cvPageName = cfUtility(cvURL,'channel') + cfUtility(cvURL,'filename') + cvParam_Modified;
	    } else {
	        var cvPageName = cfUtility(cvURL,'channel') + cfUtility(cvURL,'filenameparameters');
	    }
	} else {
	    var cvPageName = cfUtility(cvURL,'channel') + cfUtility(cvURL,'filename');
	}
	/* ----- IF PageName is Over 100 Chars ----- */
	if (cvPageName.length > 100) cvPageName = "/" + cfUtility(cvURL,'server') + "/..." + cfRight(cvPageName.replace(cfUtility(cvURL,'server') + "/", ""), 100 - (cfUtility(cvURL,'server').length + 5));
	return cvPageName;
}

function cfUtility(cvURL,cvAction) {
	cvURL = unescape(cvURL.toLowerCase());
	switch (cvAction) {
	case "server":	// Example: easyweb.tdcanadatrust.com, www.hp.com
		var a = cvURL.split(/\/+/g)[1];
		if (typeof(a) !== 'undefined') {
			var b = a.split("."); if (b.length == 2) { var c = 'www.' + a; } else { c = a; } TheResult = c;
		} else {
			TheResult = "";
		}
		break;
	case "domain":	// Example: tdcanadatrust.com, hp.com
		var a = cfUtility(cvURL,"server")
		if (typeof(a) !== 'undefined') {
			var b  = a.split("."); b_len = b.length;
			var TheResult = String(b[b_len - 2] + '.' + b[b_len - 1]);
		} else {
			TheResult = "";
		}
		break;
	case "channel":
		var a = cvURL.split("?")[0]; a = a.replace("http://","/"); a = a.replace("https://","/");
		var b = a.substring(a.lastIndexOf('/')+1); a = a.replace(b,"");
		a = a.replace(cvURL.split(/\/+/g)[1],cfUtility(cvURL,"server"));
		TheResult = a;
		break;		
	case "filename":
		var a = cvURL.split("?")[0]; var b = a.substring(a.lastIndexOf('/')+1);
		TheResult = b;
		break;
	case "filenameparameters":
		var cvParamPos = cvURL.indexOf("?"); if (cvParamPos != -1) { var cvParam = cvURL.substring(cvParamPos); } else { var cvParam = ""; }
		TheResult = cfUtility(cvURL,"filename") + cvParam;
		break;		
	case "se":
		var cvReferrer_Server = cvURL.split(/\/+/g)[1]; // www.google.ca, www.yahoo.com	
		var cvReferrer_Server_Splitted = cvReferrer_Server.split("."); // google.ca, yahoo.ca
		cvReferrer_Server_Splitted_Length = cvReferrer_Server_Splitted.length;
		var TheResult = String('.' + cvReferrer_Server_Splitted[cvReferrer_Server_Splitted_Length - 2] + '.');
		break;
	case "ext":
		var TheResult = cvURL.substring(cvURL.lastIndexOf('/') + 1, cvURL.length).substring(cvURL.substring(cvURL.lastIndexOf('/') + 1, cvURL.length).lastIndexOf('.') + 1, cvURL.substring(cvURL.lastIndexOf('/') + 1, cvURL.length).length);
		break;
	default:
		var TheResult = "";
	}
	return TheResult;
}

function cfGetQParam(a, b) {	// Custom Function to Get Query Parameters
	var c = a.indexOf('?'); var d = a.indexOf('#');
	if (c < 0) { return ""; }
	var e = a.substr(c + 1);
	if (d > 0) { e = a.substring(c + 1, d); }
	var f = e.split('&');
	for (var i = 0; i < f.length; i++) {
		var g = f[i].split('=');
		g[0] = unescape(g[0]);
		if (g[0] == b) {
			g[1] = unescape(g[1]);
			if (g[1].indexOf('"') > -1) {
				var h = /"/g;
				g[1] = g[1].replace(h, '\\"')
			}
			if (g[1].indexOf('+') > -1) {
				var j = /\+/g;
				g[1] = g[1].replace(j, ' ')
			}
			return g[1]
		}
	}
	return ""
}

function cfLeft(str, n){
	if (n <= 0) { return ""; } else if (n > String(str).length) { return str; } else { return String(str).substring(0,n); }
}

function cfRight(str, n){
    if (n <= 0) { return ""; } else if (n > String(str).length) { return str; } else { var iLen = String(str).length; return String(str).substring(iLen, iLen - n); }
}

function cfClean(cvURL) {
	if (cvURL) {
		cvURL = cvURL.replace("http://","/");
		cvURL = cvURL.replace("https://","/");
		cvURL = cvURL.replace("soc.","");
		cvURL = cvURL.replace("cpo.","");
	}
	return cvURL;
}

function removeHTMLTags(strInputCode) {
	if (strInputCode) {
		strInputCode = strInputCode.replace(/&(lt|gt);/g, function (strMatch, p1) {
			return (p1 == "lt") ? "<" : ">";
		});
		var strTagStrippedText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
		return strTagStrippedText;
	}
}

/*************** CONFIG SECTION ***************/
/* ------------------- Control Variables ------------------------------------------- */
var cvParamInPageName = 0; // if cvParamInPageName = 1, it will include parameters in s.pageName
var cvParamToInclude = ""; // comma delimited - if blank, it includes all parameters in the URL
var cvAutoSections = 0; // if cvAutoSections = 1, it will evaluate URL directories for use as site sections
/* --------------------------------------------------------------------------------- */

/* Set report suite ID dynamically based on domain */
var cvURL = unescape(document.URL);
ReportSuiteID = cfCheckRSID(cvURL);

var s_account = ReportSuiteID;
var s = s_gi(s_account);

/* General config, download, and link tracking setup */
s.charSet="UTF-8";
s.currencyCode="CAD";
s.trackDownloadLinks=true;
s.trackExternalLinks=false;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,wma,mov,mpg,avi,wmv,doc,pdf,xls,ppt,pps,csv,jpg,png,bmp,wmf,tif,docx,xlsx,pptx,jad,ipa";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";

/* Dynamic Exit Link Filter Assignment by RSID */
if(ReportSuiteID.indexOf("tdtdbfg,tdglobal")!=-1) {s.linkInternalFilters = "javascript:,td.com,fef.td.com,tdcommercialbanking.com,servicesbancairescommerciauxtd.com,tdultimatepride.ca,grandforfaitworldpridetd.ca,tdforests.twistimage.com"+window.location.hostname;}
else if(ReportSuiteID.indexOf("tdtdct,tdglobal")!=-1) {s.linkInternalFilters = "javascript:,tdcanadatrust.ca,tdcanadatrust.com,easyweb.tdcanadatrust.com,easywebsoc.tdcanadatrust.com,easywebcpo.tdcanadatrust.com,tdsimplysave.ca,tdsimplepargnes.ca,tdextra.com,tdenplus.com,tdretirement.com,secure.tdcanadatrust.com,apply.td.com,demande.td.com,td.intelliresponse.com,mms.tdcanadatrust.com,app.tdcanadatrust.com,apps.tdcanadatrust.com,calc.tdcanadatrust.com,calcs.tdcanadatrust.com,survey.tdcanadatrust.com,tdbestholidayevervideos.twistimage.com"+window.location.hostname;}
else if(ReportSuiteID.indexOf("tdtdw,tdglobal" )!=-1) {s.linkInternalFilters = "javascript:,tdwaterhouse.ca,webbroker.tdwaterhouse.ca,apps.tdwaterhouse.ca,webbrokercpo.tdwaterhouse.ca,webbrokersoc.tdwaterhouse.ca,survey.tdwaterhouse.ca,tdadvisor.com,tdam.com,tdassetmanagement.com,tdwealthvideos.com"+window.location.hostname;} 
else if(ReportSuiteID.indexOf("tdtdi,tdglobal" )!=-1) {s.linkInternalFilters = "javascript:,melochemonnex.com,tdassurance.com,groupe.tdassurance.com,tdinsurance.com,group.tdinsurance.com,mytdiservice.com,primmum.com,td-insurance.com,td-assurance.com,monservicetda.com,concoursetudiant.com,concours-ulaval.com,studentswin.com,bigtreat.ca,lagrandfolie.ca,pleindereves.ca,kickstartyourdreams.ca,canada-assurance.com,melochemonnex-nyc.com,onassure.net,prenezlaroute-taketotheroad.com,rabais-assurance.com,roadsafetyfirst.com,roulezsansrisque.com,safetymytdigroup.com,securitemongroupetda.com,securitemonservicetda.com,tripfortwotobarcelona.com,voyagepourdeuxabarcelone.com,melochemonnex-nyc.com,tdmelochemonnex-service-ann.com,tdmelochemonnex-performance.com,tdmelochemonnex-sign.com,carriere.tdassurance.com,career.tdinsurance.com,tdiemarketing.com"+window.location.hostname;} 
else {s.linkInternalFilters = "javascript:,"+window.location.hostname;}
if (s.pageName == null || s.pageName == "") s.pageName = cfPageName(cvURL,cvParamInPageName,cvParamToInclude);
var staticPageName = s.pageName;

s.usePlugins=true;
function s_doPlugins(s) {

	if(s.pageName) s.events = s.apl(s.events,"event1",",",2); 
	s.server = cfUtility(cvURL,'server');
	
	/* Use Omniture visitor ID */
	s.prop20=s.eVar39="D=s_vi";

	/* Custom visit number tracking by time period */
	s.eVar3=s.getVisitNumCustom('d'); // daily visits
	s.eVar4=s.getVisitNumCustom('w'); // weekly visit
	s.eVar5=s.getVisitNumCustom('m'); // monthly visits

	/* Time parting */
	s.prop4=s.eVar18=s.getTimeParting('h', '-5');
	s.prop5=s.eVar19=s.getTimeParting('d', '-5');
	s.prop6=s.eVar20=s.getTimeParting('w', '-5');

	/* External Campaign Tracking */
	if (typeof(AD_referrer) != 'undefined') {s.referrer=AD_referrer;}
	s.campaign=s.getQueryParam('cid,cm_mmc,cm_sp,campaignid,rss,ns,eml,smo,dm,src',':');
	if(s.campaign) s.dedupcmp=s.campaign;
	s.dedupcmp=s.getValOnce(s.campaign,'s_campaign',30);
	if(s.dedupcmp) s.events=s.apl(s.events,"event74",",",2);
	if(s.campaign) s.events=s.apl(s.events,"event75",",",2);
	
	/* Internal Campaign */
	s.eVar73=s.getQueryParam('oas_camp,icid',':');
	if(s.eVar73) s.eVar73=s.getValOnce(s.eVar73,"v73",0);
	if(s.eVar73) s.events=s.apl(s.events,"event73",",",2);
	
	/*Previous Page Name*/
	s.eVar74=s.getPreviousValue(s.pageName,'gpv_e74','');  
	
	/*  Set Site Section, Sub Sections */
	if (cvAutoSections == 1) {
		cvSplit = s.sections.split("/");
		if ((s.prop7 == null || s.prop7 == "") && cvSplit[2] != null && cvSplit[2] != "") s.prop7 = cvSplit[2];
		if (cvSplit[3] != null && cvSplit[3] != "") s.prop8 = s.prop7 + "/" + cvSplit[3]; 
		if (cvSplit[4] != null && cvSplit[4] != "") s.prop9 = s.prop8 + "/" + cvSplit[4]; 
		if (cvSplit[5] != null && cvSplit[5] != "") s.prop10 = s.prop9 + "/" + cvSplit[5]; 
	}
	
	/* TnT Tracking Integration */
	s.tnt=s.trackTNT();
	
	/* Default authentication status */
	if(!s.prop12) s.prop12="not-authenticated";

	/* Track new vs. repeat visitors */
	s.prop13=s.eVar33=s.getNewRepeat();

	/* Configuration for User Agent */
	s.prop1 = s.c_r("VARLINK");
	s.prop21 = "D=User-Agent";

	/* Capturing OAX cookie (OAS integration) */
	s.prop22 = s.c_r("OAX_tmp");

	/* Unique Lifetime & Monthly Customer Event */
	var d = new Date();
	if(s.prop1) { 
		var custSerial = "event56:" + s.prop1; 
		var custSerialMonth = "event57:" + d.getFullYear() + d.getMonth() + s.prop1;
		s.events=s.apl(s.events,custSerial,",",2);
		s.events=s.apl(s.events,custSerialMonth,",",2);
	}
	
	/* Code version tracking */
	if(s.linkTrackVars=="None") s.linkTrackVars="prop75";
	else s.linkTrackVars=s.linkTrackVars+",prop75";
	s.prop75="4.4_H.25.4";
	
	/* URL Tracking */
	s.prop74=s.wd.location;
	//s.prop74=window.location.href.split('?')[0];
	
	/* Copy traffic variables into conversion variables */
	if(s.pageName) s.eVar1="D=pageName";
	if(s.prop1) s.eVar2="D=c1";
	if(s.prop2) s.eVar16="D=c2";
	if(s.prop3) s.eVar17="D=c3";
	if(s.prop7) s.eVar24="D=c7";
	if(s.prop8) s.eVar25="D=c8";
	if(s.prop9) s.eVar26="D=c9";
	if(s.prop10) s.eVar27="D=c10";
	if(s.prop12) s.eVar32="D=c12";
	if(s.prop14) s.eVar38="D=c14";
	if(s.prop15) s.eVar40="D=c15";
	if(s.prop21) s.eVar68="D=c21";
	if(s.prop61) s.eVar61="D=c61";
	if(s.prop62) s.eVar62="D=c62";
	if(s.prop68) s.eVar68="D=c21";
}

s.doPlugins = s_doPlugins;

function trackConversions(ConvID, ConvType, AuthStat, ProcStep, ProdID, ProdAmount) {
	// ConvID = LOB:location:function desc ex. "tdct:p:personal credit:credit card:apply"
	// ConvType = ex. Process Start/Complete, Apply Complete/Approved, Acct Interact/Create, Tool int, Login
	// AuthStat = user logged-in/not logged in, ex. TRUE|FALSE
	// ProcStep = step in a process, extra descriptive label for intermediate pages/screens
	// ProdID = product naming convention (optional) ex. "VRM25Y"
	// ProdAmount = predicted account value (optional), ex. "1000" wire transfer
	if (AuthStat !== "undefined" && AuthStat != "") { 
		AuthStat = false; //assume public site
		if (ConvID.indexOf(":p:") > -1) {
		AuthStat = false;
		} else if (ConvID.indexOf(":s:") > -1) {
		AuthStat = true;
		}
	}
	if (ProdID !== "undefined" && ProdID != "" && ProdAmount !== "undefined" && ProdAmount != "") {
		s.products = ";" + ProdID.toLowerCase() + ";;;event18=" + ProdAmount;
	}
	if (ConvType.indexOf("Login") > -1) {
		s.events = s.apl(s.events,"event4",",",1);
	} else if (ConvType.indexOf("ProcessStart") > -1) {
		if (AuthStat == true) {
			s.events = s.apl(s.events,"event5,event12",",",1);
			s.eVar21 = ConvID.toLowerCase();
			s.eVar23 = ConvID.toLowerCase() + ":" + ProcStep.toLowerCase();
		} else {
			s.events = s.apl(s.events,"event5,event11",",",1);
			s.eVar21 = ConvID.toLowerCase();
			s.eVar22 = ConvID.toLowerCase() + ":" + ProcStep.toLowerCase();
		}
	} else if (ConvType.indexOf("ProcessComplete") > -1) {
		if (AuthStat == true) {
			s.events = s.apl(s.events,"event6,event12",",",1);
			s.eVar21 = ConvID.toLowerCase();
			s.eVar23 = ConvID.toLowerCase() + ":" + ProcStep.toLowerCase();
		} else {
			s.events = s.apl(s.events,"event6,event11",",",1);
			s.eVar21 = ConvID.toLowerCase();
			s.eVar22 = ConvID.toLowerCase() + ":" + ProcStep.toLowerCase();
		}
	} else if (ConvType.indexOf("ApplyStart") > -1) {
		s.events = s.apl(s.events,"event17",",",1);
		s.eVar70 = ConvID.toLowerCase();
	} else if (ConvType.indexOf("ApplyComplete") > -1) {
		s.events = s.apl(s.events,"event7",",",1);
		s.eVar70 = ConvID.toLowerCase();
	} else if (ConvType.indexOf("ApplyApproved") > -1) {
		s.events = s.apl(s.events,"event8",",",1);
		s.eVar70 = ConvID.toLowerCase();
	} else if (ConvType.indexOf("AcctCreate") > -1) {
		s.events = s.apl(s.events,"event13",",",1);
		s.eVar23 = ConvID.toLowerCase();
	} else if (ConvType.indexOf("AcctInteract") > -1) {
		s.events = s.apl(s.events,"event12",",",1);
		s.eVar21 = ConvID.toLowerCase();
		s.eVar23 = ConvID.toLowerCase() + ":" + ProcStep.toLowerCase();
	} else if (ConvType.indexOf("ToolInteract") > -1) {
		s.events = s.apl(s.events,"event11",",",1);
		s.eVar21 = ConvID.toLowerCase();
		s.eVar22 = ConvID.toLowerCase() + ":" + ProcStep.toLowerCase();
	}
}

function trackCustomLink(LinkID, LinkType, EventType) {
	s.linkTrackVars = s.apl(s.linkTrackVars,"events,pageName,prop16,prop17,prop18,prop19,eVar2,eVar21,eVar25,eVar26,eVar27,eVar64,eVar65,eVar66,eVar67",",",1);
	s.prop16 = s.eVar64 = s.pageName; // LNK PageName
	s.prop17 = s.eVar65 = unescape(LinkID.toLowerCase()); // LNK Link ID
	s.prop18 = s.eVar66 = unescape(LinkType.toLowerCase()); // LNK Link Type
	s.prop19 = s.eVar67 = unescape(EventType.toLowerCase()); // LNK Event Type
	if (LinkID.indexOf(":Login") > -1) {
		s.linkTrackEvents = "event4";
		s.events = "event4";
	} else if (LinkID.indexOf(":ProcesStart") > -1) {
		s.linkTrackEvents = "event5";
		s.events = "event5";
		s.eVar21 = LinkID.substring(0, LinkID.length-12).toLowerCase();
	} else if (LinkID.indexOf(":ProcessComplete") > -1) {
		s.linkTrackEvents = "event6";
		s.events = "event6";
		s.eVar21 = LinkID.substring(0, LinkID.length-16).toLowerCase();
	} else if (LinkID.indexOf(":ApplyComplete") > -1) {
		s.linkTrackEvents = "event7";
		s.events = "event7";
		s.eVar21 = LinkID.substring(0, LinkID.length-14).toLowerCase();
	} else if (LinkID.indexOf(":ApplyApproved") > -1) {
		s.linkTrackEvents = "event8";
		s.events = "event8";
		s.eVar21 = LinkID.substring(0, LinkID.length-14).toLowerCase();
	} else if (LinkID.indexOf(":AcctInteract") > -1) {
		s.linkTrackEvents = "event12";
		s.events = "event12";
		s.eVar21 = LinkID.substring(0, LinkID.length-13).toLowerCase();
	} else if (LinkID.indexOf(":AcctCreate") > -1) {
		s.linkTrackEvents = "event13";
		s.events = "event13";
		s.eVar21 = LinkID.substring(0, LinkID.length-11).toLowerCase();
	} else if (LinkID.indexOf(":ToolInteract") > -1) {
		s.linkTrackEvents = "event11";
		s.events = "event11";
		s.eVar21 = LinkID.substring(0, LinkID.length-13).toLowerCase();
	}
	var LinkTypeAbbrev = "o";
	if (LinkType.indexOf("DL") > -1) {
		var LinkTypeAbbrev = "d";
		s.linkTrackVars = s.apl(s.linkTrackVars,"eVar43,eVar44,eVar45",",",1);
	} else if (LinkType.indexOf(":EXT") > -1) {
		var LinkTypeAbbrev = "e";
	}
	var linkLabel = LinkID + "|" + LinkType + "|" + EventType + "|" + s.pageName;
	s.tl(this, LinkTypeAbbrev, linkLabel);
}

/************************** PLUGINS SECTION *************************/
/*
 * Plugin for custom visit number tracking by time period
 */
s.dimo=new Function ("m","y", "var d=new Date(y,m+1,0); return d.getDate();");
s.endof=new Function ("x", "var t = new Date(); t.setHours(0); t.setMinutes(0);"
  +"t.setSeconds(0); if(x=='m') d=s.dimo(t.getMonth(),t.getFullYear()) - t.getDate() + 1;"
  +"else if(x=='w') d=7-t.getDay(); else d=1; t.setDate(t.getDate()+d); return t;");
s.getVisitNumCustom=new Function("tp", ""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_'+tp,c2='sinvisit_'+tp,eo=s.endof(tp),"
+"y=eo.getTime();e.setTime(y);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}"
+"cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}"
+"else return 'unknown visit number';}"
+"else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}"
+"else{s.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}"
);


/*
* TNT Integration Plugin v2.0
*/
s.trackTNT=new Function("v","p","b","" 
+"var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false"
+",b=(b)?b:true;if(s.getQueryParam(q)!=''){s.referrer=s.getQueryParam"
+"(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.cookie=q+'="
+";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if((document."
+"cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.indexOf(q+'="
+"')!=-1&&s.getQueryParam(q)=='')){s.referrer='Typed/Bookmarked';docu"
+"ment.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}if"
+"(s.getQueryParam(p)!=''){pm=s.getQueryParam(p);}else if(s.c_r(p)){p"
+"m=s.c_r(p);document.cookie=p+'=;path=/;expires=Thu, 01-Jan-1970 00:"
+"00:01 GMT;';}else if(s.c_r(p)==''&&s.getQueryParam(p)==''){pm='';}i"
+"f(pm)r+=(pm+',');if(s.wd[v]!=undefined)r+=s.wd[v];if(b)s.wd[v]='';r"
+"eturn r;");

/*
 * Plugin: getTimeParting v3.0
 */
s.getTimeParting=new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
+"=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
+"='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
+"='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
+"';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
+"D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
+"arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
+"<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
+"ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
+"Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
+"getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12)"
+"{P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R"
+"+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}");

/*
* Plugin: getQueryParam 2.4
*/
s.getQueryParam=new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u","h",""
+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return''");

/*
 * Plugin: getValOnce v1.1
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/*
 * Utility manageVars v1.4
 */
s.manageVars=new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");
s.clearVars=new Function("t","var s=this;s[t]='';");
s.lowercaseVars=new Function("t",""
+"var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index"
+"Of('D=')!=0){s[t]=s[t].toLowerCase();}}");

/*
 * Plugin: getPreviousValue v1.0
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getNewRepeat v1.2
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Utility Function: split v1.5
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
 * Utility Function: p_gh
 */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/*
 * Utility Function: join v1.0
 */
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/* 
* Utility Function: replace v1.0 
*/
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
* Utility Function: vpr
*/
s.vpr=new Function("vs","v",
"if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

/*
 * Utility Function: read combined cookies v0.37
 */
if(!s.__ccucr)
{
    s.c_rr=s.c_r;
    s.__ccucr=true;
    function c_r(k)
    {
        var s=this,d=new Date,v=s.c_rr(k),c=s.c_rspers(),i, m, e;
        if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;
        i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|', i);e=i<0?i:c.indexOf(';', i);
        m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length, m<0?c.length:m));
        return v;
    }
    function c_rspers()
    {
        var cv=s.c_rr("s_pers");var date=new Date().getTime();var expd=null;
        var cvarr=[];var vcv="";if(!cv)return vcv;cvarr=cv.split(";");for(var i=0,l=cvarr.length;i<l;i++)
        {expd=cvarr[i].match(/\|([0-9]+)$/);if(expd && parseInt(expd[1]) >= date){vcv += cvarr[i]+";";}}return vcv;
    }
    s.c_rspers=c_rspers;
    s.c_r=c_r;
}

/*
 * Utility Function: write combined cookies v0.37
 */
if(!s.__ccucw)
{
    s.c_wr=s.c_w;s.__ccucw=true;
    function c_w(k, v, e)
    {
        var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv, sv, c, i, t;d.setTime(d.getTime() - 60000);
        if(s.c_rr(k))s.c_wr(k, '', d);k=s.ape(k);pv=s.c_rspers();i=pv.indexOf(' '+k+'=');if(i>-1){
        pv=pv.substring(0, i)+pv.substring(pv.indexOf(';', i)+1);pc=1;}sv=s.c_rr(sn);i=sv.indexOf(' '+k+'=');
        if(i>-1){sv=sv.substring(0, i)+sv.substring(sv.indexOf(';', i)+1);sc=1;}d=new Date;
        if(e){if(e.getTime()>d.getTime()){pv += ' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}
        else{sv += ' '+k+'='+s.ape(v)+';';sc=1;}sv=sv.replace(/%00/g, '');pv=pv.replace(/%00/g, '');
        if(sc)s.c_wr(sn, sv, 0);if(pc){t=pv;while(t && t.indexOf(';') != -1){var t1=parseInt(t.substring(t.indexOf('|')+1, t.indexOf(';')));
        t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn, pv, d);}return v==s.c_r(s.epa(k));
    }
    s.c_w=c_w;
}

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="tdbank";
s.trackingServer="metrics.td.com";
s.trackingServerSecure="smetrics.td.com";
s.visitorMigrationKey="4D7FBC51";
s.visitorMigrationServer="melochetdct.112.2o7.net";
s.visitorMigrationServerSecure="melochetdct.102.112.2o7.net";


/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
+";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
+"cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
+"n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
+"n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
+"!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
+"s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
+"].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return '"
+"'}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=="
+"'s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x"
+";i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h."
+"substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length"
+">1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.lengt"
+"h;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.subst"
+"ring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nf"
+"l[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!n"
+"fl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk."
+"substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+"
+"ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',"
+"fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring("
+"0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+"
+"s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!="
+"'linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substrin"
+"g(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&"
+"&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1"
+"';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k"
+"=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascri"
+"ptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='h"
+"omepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k"
+"=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')"
+"q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eV"
+"ar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'"
+"';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLow"
+"erCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h"
+"=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||"
+"s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e"
+");return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s"
+".bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTr"
+"acking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t("
+");s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\""
+"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopI"
+"mmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.alt"
+"Key,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h."
+"indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.ho"
+"st:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.to"
+"UpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=thi"
+"s,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''"
+"+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t"
+"=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u"
+"+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)re"
+"turn s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return "
+"0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',"
+"q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&"
+"s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i"
+"<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=f"
+"unction(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0"
+"&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,"
+"v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%"
+"10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.subst"
+"ring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if"
+"(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){v"
+"ar s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r"
+",l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s"
+";m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l="
+"m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c="
+"s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if("
+"x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,"
+"i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m"
+"[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl"
+",i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':'"
+");if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');"
+"i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'"
+"')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s"
+".d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,"
+"100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m"
+"=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x"
+" in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=n"
+"ew Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if("
+"!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if"
+"(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Mat"
+"h.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return f"
+"id};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_"
+"c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!vi"
+"sitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*100000000"
+"00000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds("
+")+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i"
+",x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&"
+"s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1"
+".7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaE"
+"nabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){"
+"bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\""
+":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)whi"
+"le(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.bro"
+"wserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);i"
+"f(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+"eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+"(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+"eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+"rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+"bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+"if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+"oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+"var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+"x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+"t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType"
+"=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType="
+"t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){va"
+"r s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s"
+"[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf("
+"'s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i"
+"<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElements"
+"ByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf"
+"('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6"
+"));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.e"
+"m=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visito"
+"rID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCod"
+"e,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookie"
+"DomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,e"
+"vents,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va"
+"_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t"
+"+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dy"
+"namicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilter"
+"s,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();i"
+"f(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()

