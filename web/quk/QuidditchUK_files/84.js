(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[84,18,118],{"+7QN":function(e,t,r){"use strict";function n(e,t){for(var r=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return r+n}r.d(t,"a",(function(){return n}))},"7vnS":function(e,t){e.exports=function(e,t,r){if(!e)return r;var n,a;Array.isArray(t)&&(n=t.slice(0));"string"==typeof t&&(n=t.split("."));"symbol"==typeof t&&(n=[t]);if(!Array.isArray(n))throw new Error("props arg must be an array, a string or a symbol");for(;n.length;){if(a=n.shift(),!e)return r;if(void 0===(e=e[a]))return r}return e}},MPxm:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("rePB"),o=r("20a2"),c=r("YFqc"),i=r.n(c),u=r("Vvt1"),s=r.n(u),l=r("7vnS"),d=r.n(l),f=r("sWYD"),h=r("zHD3"),b=r("v7Hm"),g=r("tofy"),m=r("MAJE"),w={"Sam Instone":"/images/authors/sam-instone.jpeg","Abby Whiteley":"/images/authors/abby-whiteley.jpg","Matt Bateman":"/images/authors/matt-bateman.jpg","Kirsty Scheiby":"/images/authors/kirsty-scheiby.jpg","Declan Ramsay":"/images/authors/declan-ramsay.jpg","Jasmine Lowen":"/images/authors/jasmine-lowen.jpg","Georgia Challinor":"/images/authors/georgia-challinor.jpg"};function p(e){return w[e]||"/images/authors/quk-logo.png"}var v=r("NVT0");function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=s()((function(){return Promise.all([r.e(6),r.e(7)]).then(r.bind(null,"7aRM"))}),{loadableGenerated:{webpack:function(){return["7aRM"]},modules:["components/image"]}}),x=s()((function(){return Promise.resolve().then(r.bind(null,"OrWU"))}),{loadableGenerated:{webpack:function(){return["OrWU"]},modules:["components/prismic-wrapper"]}}),M=s()((function(){return r.e(11).then(r.bind(null,"vUxr"))}),{loadableGenerated:{webpack:function(){return["vUxr"]},modules:["components/container"]}}),k=s()((function(){return r.e(25).then(r.bind(null,"WvHG"))}),{loadableGenerated:{webpack:function(){return["WvHG"]},modules:["public/images/facebook.svg"]}}),C=s()((function(){return r.e(26).then(r.bind(null,"6o8R"))}),{loadableGenerated:{webpack:function(){return["6o8R"]},modules:["public/images/twitter.svg"]}}),T=s()((function(){return r.e(117).then(r.bind(null,"LwK7"))}),{loadableGenerated:{webpack:function(){return["LwK7"]},modules:["public/images/whatsapp.svg"]}}),E=function(e){return e.replace(/\s+/g,"--").replace(/\//g,"__")},U=function(e){return Object(n.jsx)(h.a,O({height:"30px",width:"30px"},e))},L=function(e){return Object(n.jsx)(b.a,O({color:"greyDark",_hover:{color:"qukBlue"}},e))};t.default=function(e){var t=Object(o.useRouter)(),r="".concat("https://quidditchuk.org").concat(t.asPath),a=d()(e,"author"),c=d()(e,"date"),u=d()(e,"title"),s=d()(e,"tags");return Object(n.jsxs)(n.Fragment,{children:[(null===s||void 0===s?void 0:s.length)>0&&Object(n.jsx)(b.a,{py:2,bg:"white",px:{base:4,sm:8,md:9},children:Object(n.jsx)(M,{maxWidth:Object(v.b)(960),children:Object(n.jsxs)(b.a,{fontWeight:"bold",fontStyle:"italic",color:"black",children:["#"," ",s.map((function(e,t){return Object(n.jsx)(i.a,{href:"/news/tagged/".concat(E(e)),passHref:!0,children:Object(n.jsx)(h.a,{color:"black",mx:4,children:e})},"".concat(e,"-").concat(t))}))]})})}),Object(n.jsx)(x,{small:!0,children:Object(n.jsxs)(g.a,{alignItems:"center",justifyContent:"space-between",children:[Object(n.jsxs)(g.a,{alignItems:"center",children:[Object(n.jsx)(y,{src:p(a),alt:a,borderRadius:"full",height:"80px",width:"80px"}),Object(n.jsxs)(m.a,{size:"sm",fontWeight:"bold",color:"qukBlue",lineHeight:"body",ml:5,children:["By ",a,Object(n.jsx)("br",{}),Object(f.a)(new Date(c),"MMMM d, yyyy")]})]}),Object(n.jsxs)(g.a,{flexDirection:"column",children:[Object(n.jsx)(m.a,{mt:0,size:"sm",color:"qukBlue",children:"Share this article"}),Object(n.jsxs)(g.a,{justifyContent:"space-between",children:[Object(n.jsx)(U,{"aria-label":"Share this article on Facebook",href:"https://www.facebook.com/sharer.php?u=".concat(r),target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(L,{as:k})}),Object(n.jsx)(U,{"aria-label":"Tweet this article",href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent("QuidditchUK: ".concat(u," ").concat(r))),target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(L,{as:C})}),Object(n.jsx)(U,{"aria-label":"Share this article on Whatsapp",href:"https://api.whatsapp.com/send?text=".concat(encodeURIComponent("QuidditchUK: ".concat(u," ").concat(r))),target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(L,{as:T})})]})]})]})})]})}},"Se/U":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("/Tr7"),a=r("jIYg");function o(e){Object(a.a)(1,arguments);var t=Object(n.a)(e);return!isNaN(t)}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),c=r("elyg"),i=r("nOHt"),u=r("vNVm"),s={};function l(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),a=r&&r.pathname||"/",d=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],i=r[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),f=d.href,h=d.as,b=e.children,g=e.replace,m=e.shallow,w=e.scroll,p=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var v=o.Children.only(b),j=v&&"object"===typeof v&&v.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),y=n(O,2),x=y[0],M=y[1],k=o.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);(0,o.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(f),n="undefined"!==typeof p?p:r&&r.locale,a=s[f+"%"+h+(n?"%"+n:"")];e&&!a&&l(r,f,h,{locale:n})}),[h,f,M,p,t,r]);var C={ref:k,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:u,scroll:i}))}(e,r,f,h,g,m,w,p)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(r,f,h,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var T="undefined"!==typeof p?p:r&&r.locale,E=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(h,T,r&&r.locales,r&&r.domainLocales);C.href=E||(0,c.addBasePath)((0,c.addLocale)(h,T,r&&r.defaultLocale))}return o.default.cloneElement(v,C)};t.default=d},sWYD:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var n=r("Se/U"),a=r("iSMj"),o=r("g9KO"),c=r("/Tr7"),i=r("+7QN"),u={y:function(e,t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return Object(i.a)("yy"===t?n%100:n,t.length)},M:function(e,t){var r=e.getUTCMonth();return"M"===t?String(r+1):Object(i.a)(r+1,2)},d:function(e,t){return Object(i.a)(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return"am"===r?"a.m.":"p.m."}},h:function(e,t){return Object(i.a)(e.getUTCHours()%12||12,t.length)},H:function(e,t){return Object(i.a)(e.getUTCHours(),t.length)},m:function(e,t){return Object(i.a)(e.getUTCMinutes(),t.length)},s:function(e,t){return Object(i.a)(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,n=e.getUTCMilliseconds(),a=Math.floor(n*Math.pow(10,r-3));return Object(i.a)(a,t.length)}},s=r("jIYg"),l=864e5;var d=r("lgZR"),f=r("gr1v"),h=r("ErpD"),b=r("Szzx"),g="midnight",m="noon",w="morning",p="afternoon",v="evening",j="night";function O(e,t){var r=e>0?"-":"+",n=Math.abs(e),a=Math.floor(n/60),o=n%60;if(0===o)return r+String(a);var c=t||"";return r+String(a)+c+Object(i.a)(o,2)}function y(e,t){return e%60===0?(e>0?"-":"+")+Object(i.a)(Math.abs(e)/60,2):x(e,t)}function x(e,t){var r=t||"",n=e>0?"-":"+",a=Math.abs(e);return n+Object(i.a)(Math.floor(a/60),2)+r+Object(i.a)(a%60,2)}var M={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if("yo"===t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return u.y(e,t)},Y:function(e,t,r,n){var a=Object(b.a)(e,n),o=a>0?a:1-a;if("YY"===t){var c=o%100;return Object(i.a)(c,2)}return"Yo"===t?r.ordinalNumber(o,{unit:"year"}):Object(i.a)(o,t.length)},R:function(e,t){var r=Object(f.a)(e);return Object(i.a)(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return Object(i.a)(r,t.length)},Q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return Object(i.a)(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return Object(i.a)(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getUTCMonth();switch(t){case"M":case"MM":return u.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return Object(i.a)(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var a=Object(h.a)(e,n);return"wo"===t?r.ordinalNumber(a,{unit:"week"}):Object(i.a)(a,t.length)},I:function(e,t,r){var n=Object(d.a)(e);return"Io"===t?r.ordinalNumber(n,{unit:"week"}):Object(i.a)(n,t.length)},d:function(e,t,r){return"do"===t?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):u.d(e,t)},D:function(e,t,r){var n=function(e){Object(s.a)(1,arguments);var t=Object(c.a)(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=r-n;return Math.floor(a/l)+1}(e);return"Do"===t?r.ordinalNumber(n,{unit:"dayOfYear"}):Object(i.a)(n,t.length)},E:function(e,t,r){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var a=e.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return Object(i.a)(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var a=e.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return Object(i.a)(o,t.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getUTCDay(),a=0===n?7:n;switch(t){case"i":return String(a);case"ii":return Object(i.a)(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n,a=e.getUTCHours();switch(n=12===a?m:0===a?g:a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n,a=e.getUTCHours();switch(n=a>=17?v:a>=12?p:a>=4?w:j,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return u.h(e,t)},H:function(e,t,r){return"Ho"===t?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):u.H(e,t)},K:function(e,t,r){var n=e.getUTCHours()%12;return"Ko"===t?r.ordinalNumber(n,{unit:"hour"}):Object(i.a)(n,t.length)},k:function(e,t,r){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?r.ordinalNumber(n,{unit:"hour"}):Object(i.a)(n,t.length)},m:function(e,t,r){return"mo"===t?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):u.m(e,t)},s:function(e,t,r){return"so"===t?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):u.s(e,t)},S:function(e,t){return u.S(e,t)},X:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return y(a);case"XXXX":case"XX":return x(a);case"XXXXX":case"XXX":default:return x(a,":")}},x:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return y(a);case"xxxx":case"xx":return x(a);case"xxxxx":case"xxx":default:return x(a,":")}},O:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+O(a,":");case"OOOO":default:return"GMT"+x(a,":")}},z:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+O(a,":");case"zzzz":default:return"GMT"+x(a,":")}},t:function(e,t,r,n){var a=n._originalDate||e,o=Math.floor(a.getTime()/1e3);return Object(i.a)(o,t.length)},T:function(e,t,r,n){var a=(n._originalDate||e).getTime();return Object(i.a)(a,t.length)}},k=r("Ib5w"),C=r("JCDJ"),T=r("3REe"),E=r("/h9T"),U=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,D=/^'([^]*?)'?$/,S=/''/g,q=/[a-zA-Z]/;function N(e,t,r){Object(s.a)(2,arguments);var i=String(t),u=r||{},l=u.locale||a.a,d=l.options&&l.options.firstWeekContainsDate,f=null==d?1:Object(E.a)(d),h=null==u.firstWeekContainsDate?f:Object(E.a)(u.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=l.options&&l.options.weekStartsOn,g=null==b?0:Object(E.a)(b),m=null==u.weekStartsOn?g:Object(E.a)(u.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!l.localize)throw new RangeError("locale must contain localize property");if(!l.formatLong)throw new RangeError("locale must contain formatLong property");var w=Object(c.a)(e);if(!Object(n.a)(w))throw new RangeError("Invalid time value");var p=Object(C.a)(w),v=Object(o.a)(w,p),j={firstWeekContainsDate:h,weekStartsOn:m,locale:l,_originalDate:w},O=i.match(L).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,k.a[t])(e,l.formatLong,j):e})).join("").match(U).map((function(r){if("''"===r)return"'";var n=r[0];if("'"===n)return G(r);var a=M[n];if(a)return!u.useAdditionalWeekYearTokens&&Object(T.b)(r)&&Object(T.c)(r,t,e),!u.useAdditionalDayOfYearTokens&&Object(T.a)(r)&&Object(T.c)(r,t,e),a(v,r,l.localize,j);if(n.match(q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return r})).join("");return O}function G(e){return e.match(D)[1].replace(S,"'")}},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,u=(0,a.useRef)(),s=(0,a.useState)(!1),l=n(s,2),d=l[0],f=l[1],h=(0,a.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return(0,a.useEffect)((function(){if(!c&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[h,d]};var a=r("q1tI"),o=r("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map},zHD3:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("sKyC"),a=r("4jWa"),o=r("CRla"),c=r("U6LL"),i=r("epLR"),u=r("pr4h"),s=r("q1tI");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=Object(n.a)(((e,t)=>{var r=Object(a.b)("Link",e),n=Object(o.b)(e),{className:u,isExternal:d}=n,f=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["className","isExternal"]);return s.createElement(c.a.a,l({target:d?"_blank":void 0,rel:d?"noopener noreferrer":void 0,ref:t,className:Object(i.d)("chakra-link",u)},f,{__css:r}))}));u.a&&(d.displayName="Link")}}]);
//# sourceMappingURL=84.5c31cafed957717a0c10.js.map