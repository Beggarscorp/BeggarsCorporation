function rbcSetCookie(pName,pValue,pExpires,pPath,pDomain,pSecure,pSamesite)
{
 if (pName)
 {
  var vName = pName+"="+pValue;
  var vExpires = (pExpires) ? "; expires=" + pExpires : "";
  var vPath = (pPath) ? "; path=" + pPath : "; path=\/";
  var vDomain = (pDomain) ? "; domain=" + pDomain : "";
  var vSecure = "";
  var vSamesite = "";
  var vTempCookie = "";
  //console.log("UserAgent = " + window.navigator.userAgent);
  var NotSetSameSiteReturned = EdsShouldntGetSameSiteNoneFull(window.navigator.userAgent);
  //console.log("NotSetSameSiteReturned = " + NotSetSameSiteReturned);
  if (!NotSetSameSiteReturned)
  {
   vSamesite = (pSamesite) ? "; SameSite=" + pSamesite : "; SameSite=None";
   //console.log("Secure = " + window.location.protocol);
   vSecure = (pSecure) ? "; Secure" : (window.location.protocol == 'https:') ? "; Secure" : "";
  }
  vTempCookie = vName+vExpires+vPath+vDomain+vSamesite+vSecure;
  //console.log("rbcSetCookie = " + vTempCookie);
  document.cookie = vTempCookie;
 }
}
function rbcDeleteCookie(name,path)
{
 //console.log("rbcDeleteCookie = " + name + "Path = " + path);
 rbcSetCookie(name,null,"Tue, 01 Jan 1980 00:00:00 GMT",path);
}
function rbcGetCookie(Name,defaultVal)
{
var CookieStart=0;
var decodedCookie = decodeURIComponent(document.cookie);
while (CookieStart<decodedCookie.length)
{
var CookiePiece;
var CookieName;
var CookieValue;
var charloc=decodedCookie.indexOf(';',CookieStart);
if (charloc==-1)charloc =decodedCookie.length;
CookiePiece=decodedCookie.substring(CookieStart,charloc);
CookieStart=charloc+1;
charloc=CookiePiece.indexOf('=');
CookieName=CookiePiece.substring(0,charloc);
CookieValue=CookiePiece.substring(charloc + 1,CookiePiece.length);
while (CookieName.substring(0,1)==' ')
CookieName=CookieName.substring(1,CookieName.length);
while (CookieValue.substring(0,1)==' ')
CookieValue=CookieValue.substring(1,CookieValue.length );
if (CookieName.toUpperCase()==Name.toUpperCase())
{
 //console.log("rbcGetCookie = " + CookieName + "Value = " + CookieValue);
 return CookieValue;
}
}
return defaultVal;
}

function EdsShouldntGetSameSiteNoneFull(ua)
{
 
 var patternToExcludeSamesite = /(iPhone; CPU iPhone OS 1[0-3]|iPad; CPU OS 1[0-3]|iPod touch; CPU iPhone OS 1[0-3]|Macintosh; Intel Mac OS X.*Version\x2F1[0-3].*Safari|Macintosh;.*Mac OS X 10_14.* AppleWebKit.*Version\x2F1[0-3].*Safari|Chrome\x2F5|Chrome\x2F6)/gi

 return(patternToExcludeSamesite.test(ua));
}

//more expensive version, covers all known incompatible browsers
function shouldntGetSameSiteNoneFull(ua)
{
 return ua.includes("iPhone OS 12_") || ua.includes("iPad; CPU OS 12_") ||  //iOS 12
       (ua.includes("UCBrowser/") 
      ? isOlderUcBrowser(ua)                                                //UC Browser < 12.13.2
      : (ua.includes("Chrome/5") || ua.includes("Chrome/6"))) ||            //Chrome
         ua.includes("Chromium/5") || ua.includes("Chromium/6") ||          //Chromium
        (ua.includes(" OS X 10_14_") && 
       ((ua.includes("Version/") && ua.includes("Safari")) ||               //Safari on MacOS 10.14
         ua.endsWith("(KHTML, like Gecko)")));                              //Embedded browser on MacOS 10.14
}

//lightweight version, covers most incompatible browsers
function shouldntGetSameSiteNone(ua)
{
 return ua.includes("iPhone OS 12_") || ua.includes("iPad; CPU OS 12_") ||  //iOS 12
        ua.includes("Chrome/5") || ua.includes("Chrome/6") ||               //Chrome
       (ua.includes(" OS X 10_14_") 
     && ua.includes("Version/") && ua.includes("Safari"));                  //Safari on MacOS 10.14
}

function isOlderUcBrowser(ua)
{
 var CriOS = ua.includes("CriOS/");
 if (CriOS) return true;
 var Version = ua.includes("Version/");
 var Safari  =  ua.includes("Safari") ;
// if (Version && Safari) return true;
 var match = ua.match(/UCBrowser\/(\d+)\.(\d+)\.(\d+)\./);
 if (!match) return false;
 var major = parseInt(match[1]);
 var minor = parseInt(match[2]);
 var build = parseInt(match[3]);
 if (major != 12) return major < 12;
 if (minor != 13) return minor < 13;
 return build < 2;
}

