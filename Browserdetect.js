if (navigator.userAgent.indexOf('MSIE') != -1)
//test for MSIE x.x
 var detectIEregexp = /MSIE (\d+\.\d+);/ 
 // if no "MSIE" string in userAgent
else 
//test for rv:x.x or rv x.x where Trident string exists
 var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ 

if (detectIEregexp.test(navigator.userAgent)){ //if some form of IE
 var ieversion=new Number(RegExp.$1) 
 // IE version number greater than 12
if (ieversion>=12)
 console.log("You're using IE12 or above")
  // IE version number greater than 11
else if (ieversion>=11)
  console.log("You're using IE11 or above")
   // IE version number greater than 10
 else if (ieversion>=10)
 alert("Your current browser version (IE10) does not fully support this mapping application. Please upgrade your browser to latest version.")
  // IE version number greater than 9
 else if (ieversion>=9)
  alert("Your current browser version (IE9) does not fully support this mapping application. Please upgrade your browser to latest version.")
   // IE version number greater than 8
 else if (ieversion>=8)
 alert("Your current browser version (IE8) does not fully support this mapping application. Please upgrade your browser to latest version.")
  // IE version number greater than 7
 else if (ieversion>=7)
  alert("Your current browser version (IE7) does not fully support this mapping application. Please upgrade your browser to latest version.")
   // IE version number greater than 6
 else if (ieversion>=6)
 alert("Your current browser version (IE6) does not fully support this mapping application. Please upgrade your browser to latest version.")
  // IE version number greater than 5
 else if (ieversion>=5)
  alert("Your current browser version (IE5) does not fully support this mapping application. Please upgrade your browser to latest version.")
}
