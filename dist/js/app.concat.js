/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,t){'use strict';function C(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.26/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Pa(b){if(null==b||Ga(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:v(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(J(b)||Pa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function hb(){for(var b=ma.length,a;b;){b--;a=ma[b].charCodeAt(0);if(57==a)return ma[b]="A",ma.join("");if(90==a)ma[b]="0";else return ma[b]=String.fromCharCode(a+1),ma.join("")}ma.unshift("0");return ma.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function U(b){return parseInt(b,
10)}function bc(b,a){return D(new (D(function(){},{prototype:b})),a)}function E(){}function Qa(b){return b}function ba(b){return function(){return b}}function x(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function v(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ta(b){return"[object Date]"===za.call(b)}function P(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===za.call(b)}
function Ga(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,a){var c=Ra(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Ga(b)||b&&b.$evalAsync&&b.$watch)throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ra(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(J(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;J(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)J(b)?a=Ha(b,[],c,d):ta(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));
return a}function ha(b,a){if(J(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(ta(b))return ta(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ga(b)||Ga(a)||J(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!P(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Ba.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ba.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=t:Ga(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return v(b)?JSON.parse(b):b}function Ua(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),y(d)&&(b=y(c[1])?dc(c[1]):!0,kb.call(a,d)?J(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){J(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Ta("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ta("areq",a||"?",c||"required");return b}function Wa(b,a,c){c&&J(b)&&(b=b[b.length-1]);Db(P(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&P(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Zc(b){var a=C("$injector"),c=C("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||C;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function $c(b){D(b,{bootstrap:fc,copy:Ha,extend:D,equals:Aa,element:w,forEach:r,injector:gc,noop:E,bind:Bb,toJson:na,fromJson:cc,identity:Qa,isUndefined:x,isDefined:y,isString:v,isFunction:P,isObject:T,isNumber:ib,isElement:Uc,isArray:J,version:ad,isDate:ta,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:C,$$csp:Xa});Ya=Zc(W);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",bd)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);
a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Za(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,h,l,n,p,q,s;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(s=p.children()).length;q<p;q++)e.push(Ea(s[q]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;v(b)&&(b=aa(b));if(!(this instanceof S)){if(v(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(v(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);w(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(y(d))throw Hb("offargs");var e=oa(b,"events");oa(b,"handle")&&(x(a)?r(e,function(a,c){$a(b,c,a);delete e[c]}):r(a.split(" "),function(a){x(c)?($a(b,a,e[a]),delete e[a]):Sa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=ab[c];d&&(a?delete ab[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete ab[c],b.ng339=t))}function oa(b,a,c){var d=
b.ng339,d=ab[d||-1];if(y(c))d||(b.ng339=d=++ne,d=ab[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=oa(b,"data"),e=y(c),f=!e&&y(a),g=f&&!T(a);d||g||oa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];D(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!y(a.length)||Ga(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=w.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=qb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(x(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===t&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):J(b)?(c=b.length-1,Wa(b[c],"fn"),a=b.slice(0,c)):Wa(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,
$b(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(P(b)||J(b))b=n.instantiate(b);if(!b.$get)throw cb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(v(a))for(c=Ya(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else P(a)?b.push(n.invoke(a)):J(a)?b.push(n.invoke(a)):Wa(a,"module")}catch(l){throw J(a)&&(a=
a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),cb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw cb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw cb("itkn",h);f.push(e&&e.hasOwnProperty(h)?
e[h]:c(h))}J(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(J(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||P(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new bb([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ba(b))}),constant:a(function(a,
b){Da(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw cb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||E)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
Ba.call(arguments,1))}finally{if(s--,0===s)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){r(u,function(a){a()});A=b(fa,a)})()}function g(){z=null;N!=k.url()&&(N=k.url(),r(ca,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var s=0,F=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){r(u,function(a){a()});0===s?a():F.push(a)};
var u=[],A;k.addPollFn=function(a){x(A)&&f(100,n);u.push(a);return a};var N=h.href,R=a.find("base"),z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ca=[],L=!1;k.onUrlChange=function(a){if(!L){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);
else k.addPollFn(g);L=!0}ca.push(a);return a};k.$$checkUrlChange=g;k.baseHref=function(){var a=R.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},da="",B=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===t?m.cookie=escape(a)+"=;path="+B+";expires=Thu, 01 Jan 1970 00:00:00 GMT":v(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+B).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==
da)for(da=m.cookie,d=da.split("; "),O={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,k)),O[a]===t&&(O[a]=unescape(e.substring(k+1))));return O}};k.defer=function(a,b){var c;s++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(E),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw C("$cacheFactory")("iid",b);var g=0,k=D({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!x(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return D({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Da(a,"directive");v(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));
return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,s,F,u,A,N,R){function z(a,b,c,d,e){a instanceof
w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=L(a,b,a,c,d,e);ca(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ca(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,
p,s;f=c.length;var M=Array(f);for(q=0;q<f;q++)M[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=M[p],c=m[q++],f=m[q++],c?(c.scope?(l=a.$new(),w.data(h,"$scope",l)):l=a,s=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,h,d,s)):f&&f(a,h.childNodes,t,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=da(a[p],[],h,0===p?d:t,e),(f=l.length?H(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&ca(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?
null:L(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?g:null}function O(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function da(a,b,c,d,g){var m=c.$attr,h;switch(a.nodeType){case 1:fa(b,pa(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,s=0,F=p&&p.length;s<F;s++){var A=!1,N=!1;l=p[s];if(!Q||8<=Q||l.specified){h=l.name;q=
aa(l.value);l=pa(h);if(n=U.test(l))h=mb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(A=h,N=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6));l=pa(h.toLowerCase());m[l]=h;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);S(a,b,q,l);fa(b,l,"A",d,g,A,N)}}a=a.className;if(v(a)&&""!==a)for(;h=f.exec(a);)l=pa(h[2]),fa(b,l,"C",d,g)&&(c[l]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:K(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))l=pa(h[1]),fa(b,l,"M",
d,g)&&(c[l]=aa(h[2]))}catch(z){}}b.sort(x);return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function I(a,b,c){return function(d,e,f,g,h){e=B(e[0],b,c);return a(d,e,f,g,h)}}function H(a,c,d,e,f,g,m,n,p){function F(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=G.require;a.directiveName=C;if(L===G||G.$$isolateScope)a=
tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=I(b,c,d));b.require=G.require;b.directiveName=C;if(L===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}function A(a,b,c,d){var e,f="data",g=!1;if(v(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else J(b)&&(e=[],r(b,function(b){e.push(A(a,b,c,d))}));return e}function N(a,e,f,g,p){function F(a,b){var c;2>arguments.length&&
(b=a,a=t);K&&(c=da);return p(a,b,c)}var u,M,z,O,I,B,da={},rb;u=c===f?d:ha(d,new Ob(w(f),d.$attr));M=u.$$element;if(L){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;B=e.$new(!0);!H||H!==L&&H!==L.$$originalDirective?M.data("$isolateScopeNoTemplate",B):M.data("$isolateScope",B);ca(M,"ng-isolate-scope");r(L.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){B[c]=a});u.$$observers[f].$$scope=e;u[f]&&(B[c]=b(u[f])(e));
break;case "=":if(g&&!u[f])break;l=q(u[f]);p=l.literal?Aa:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=B[c]=l(e);throw ja("nonassign",u[f],L.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=q(u[f]);B[c]=function(a){return l(e,a)};break;default:throw ja("iscp",L.name,c,a);}})}rb=p&&F;R&&r(R,function(a){var b={$scope:a===L||a.$$isolateScope?B:e,$element:M,$attrs:u,$transclude:rb},c;I=a.controller;
"@"==I&&(I=u[a.name]);c=s(I,b);da[a.name]=c;K||M.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(z=m.length;g<z;g++)try{O=m[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(G){l(G,ia(M))}g=e;L&&(L.template||null===L.templateUrl)&&(g=B);a&&a(g,f.childNodes,t,p);for(g=n.length-1;0<=g;g--)try{O=n[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(y){l(y,ia(M))}}p=p||{};for(var u=-Number.MAX_VALUE,
O,R=p.controllerDirectives,L=p.newIsolateScopeDirective,H=p.templateDirective,fa=p.nonTlbTranscludeDirective,x=!1,D=!1,K=p.hasElementTranscludeDirective,Z=d.$$element=w(c),G,C,V,S=e,Q,Fa=0,qa=a.length;Fa<qa;Fa++){G=a[Fa];var U=G.$$start,Y=G.$$end;U&&(Z=B(c,U,Y));V=t;if(u>G.priority)break;if(V=G.scope)O=O||G,G.templateUrl||(db("new/isolated scope",L,G,Z),T(V)&&(L=G));C=G.name;!G.templateUrl&&G.controller&&(V=G.controller,R=R||{},db("'"+C+"' controller",R[C],G,Z),R[C]=G);if(V=G.transclude)x=!0,G.$$tlb||
(db("transclusion",fa,G,Z),fa=G),"element"==V?(K=!0,u=G.priority,V=Z,Z=d.$$element=w(X.createComment(" "+C+": "+d[C]+" ")),c=Z[0],Na(f,Ba.call(V,0),c),S=z(V,e,u,g&&g.name,{nonTlbTranscludeDirective:fa})):(V=w(Kb(c)).contents(),Z.empty(),S=z(V,e));if(G.template)if(D=!0,db("template",H,G,Z),H=G,V=P(G.template)?G.template(Z,d):G.template,V=W(V),G.replace){g=G;V=Ib.test(V)?w(aa(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",C,"");Na(f,Z,c);qa={$attr:{}};V=da(c,[],qa);var $=a.splice(Fa+
1,a.length-(Fa+1));L&&y(V);a=a.concat(V).concat($);E(d,qa);qa=a.length}else Z.html(V);if(G.templateUrl)D=!0,db("template",H,G,Z),H=G,G.replace&&(g=G),N=ue(a.splice(Fa,a.length-Fa),Z,d,f,x&&S,m,n,{controllerDirectives:R,newIsolateScopeDirective:L,templateDirective:H,nonTlbTranscludeDirective:fa}),qa=a.length;else if(G.compile)try{Q=G.compile(Z,d,S),P(Q)?F(null,Q,U,Y):Q&&F(Q.pre,Q.post,U,Y)}catch(ve){l(ve,ia(Z))}G.terminal&&(N.terminal=!0,u=Math.max(u,G.priority))}N.scope=O&&!0===O.scope;N.transcludeOnThisElement=
x;N.templateOnThisElement=D;N.transclude=S;p.hasElementTranscludeDirective=K;return N}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var s=0,u=e.length;s<u;s++)try{p=e[s],(g===t||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(F){l(F)}}return h}function E(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ca(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,h){var m=[],l,q,s=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;
b.empty();n.get(A.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,A;n=W(n);if(u.replace){n=Ib.test(n)?w(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ja("tplrt",u.name,N);n={$attr:{}};Na(d,b,p);var z=da(p,[],n);T(u.scope)&&y(z);a=z.concat(a);E(c,n)}else p=s,b.html(n);a.unshift(F);l=H(a,p,c,e,b,u,f,g,h);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=L(b[0].childNodes,e);m.length;){n=m.shift();A=m.shift();var R=m.shift(),I=m.shift(),z=b[0];if(A!==s){var B=A.className;h.hasElementTranscludeDirective&&
u.replace||(z=Kb(p));Na(R,w(A),z);ca(w(z),B)}A=l.transcludeOnThisElement?O(n,l.transclude,I):I;l(q,n,z,d,A)}m=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=O(b,l.transclude,e)),l(q,b,c,d,a))}}function x(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function db(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function K(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ca(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ca(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function C(a,b){if("srcdoc"==b)return A.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(m[e],!0,C(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<
h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return D(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:pa,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===t?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);F.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var qa=b.startSymbol(),Z=b.endSymbol(),W="{{"==qa||"}}"==Z?Qa:function(a){return a.replace(/\{\{/g,qa).replace(/}}/g,Z)},U=/^ngAttr[A-Z]/;return z}]}function pa(b){return Za(b.replace(we,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=
0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;v(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Wa(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw C("$controller")("noscp",
k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return w(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:t;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(P(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){v(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==za.call(a)&&"[object Blob]"!==za.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function q(a){function b(a){var d=D({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=D({},a.headers),d,f,b=D({},b.common,b[K(a.method)]);
a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){P(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);D(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);x(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});x(a.withCredentials)&&!x(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},t],g=n.when(c);for(r(A,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function h(a,b,c,e){I&&(200<=a&&300>a?I.put(w,[a,b,vc(c),e]):I.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?A.resolve:A.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function s(){var a=Ra(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var A=n.defer(),r=A.promise,I,H,w=F(c.url,c.params);q.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(I=T(c.cache)?c.cache:T(e.cache)?e.cache:u);if(I)if(H=I.get(w),y(H)){if(H&&P(H.then))return H.then(s,s),H;J(H)?p(H[1],H[0],ha(H[2]),H[3]):p(H,200,{},"OK")}else I.put(w,r);x(H)&&
((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,f,h,g,c.timeout,c.withCredentials,c.responseType));return r}function F(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||x(a)||(J(a)||(a=[a]),r(a,function(a){T(a)&&(a=ta(a)?a.toISOString():na(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var u=c("$http"),A=[];r(f,function(a){A.unshift(v(a)?p.get(a):p.invoke(a))});r(g,
function(a,b){var c=v(a)?p.get(a):p.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(D(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function xe(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw C("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){$a(f,"load",g);$a(f,"error",g);e.body.removeChild(f);f=null;var k=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,k="error"===a.type?404:200);c&&c(k,s)};sb(f,"load",g);sb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){v(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,s){function F(){A=g;R&&R();z&&z.abort()}function u(a,d,e,f,g){L&&c.cancel(L);R=z=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(E)}
var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){u(l,a,d[N].data,"",b);d[N]=E})}else{var z=a(e);z.open(e,m,!0);r(n,function(a,b){y(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";A!==g&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);A===g&&
10>Q||(c=z.statusText);u(l,A||z.status,b,a,c)}};q&&(z.withCredentials=!0);if(s)try{z.responseType=s}catch(ca){if("json"!==s)throw ca;}z.send(h||null)}if(0<p)var L=c(F,p);else p&&P(p.then)&&p.then(F)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,s=[],F=f.length,u=!1,A=[];q<F;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,
n+g))?(q!=n&&s.push(f.substring(q,n)),s.push(q=c(u=f.substring(n+g,p))),q.exp=u,q=p+k,u=!0):(q!=F&&s.push(f.substring(q)),q=F);(F=s.length)||(s.push(""),F=1);if(l&&1<s.length)throw yc("noconcat",f);if(!h||u)return A.length=F,q=function(a){try{for(var b=0,c=F,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=na(g)}A[b]=g}return A.join("")}catch(k){a=yc("interr",f,k.toString()),
d(a)}},q.exp=f,q.parts=s,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,s=y(m)&&!m;k=y(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);s||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
lb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function eb(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,eb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=ra(c,a);if(!v(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=ra(b,d))!==t)return d=e,(e=ra(a,e))!==t?c+(ra("/",e)||e):b+d;if((e=ra(c,d))!==t)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=ra(b,d)||ra(c,d),e="#"==e.charAt(0)?ra(a,e):this.$$html5?e:"";if(!v(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(eb(b)==eb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==eb(d))return d;if(e=ra(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}
function Cc(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return y(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=
eb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=w(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(h&&0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;
else{var l=k.path().split("/"),h=h.split("/");2!==l.length||l[1]||(l.length=1);for(var q=0;q<h.length;q++)"."!=h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,
a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){va(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),
d);var k=va(b[f],d);k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(wa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===t&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);va(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return t;(h=h[a])&&h.then&&
(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return t;(h=h[c])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return t;(h=h[d])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return t;(h=h[e])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==
h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=t,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ka(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=ba(g);f=a.unwrapPromises?function(a,b){return k(a,b,wa)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return y(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return y(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;wa=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new fb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=t;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),F=function(d){try{l.resolve((P(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},u=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((P(k)?k:c)(b))}catch(d){a(d)}};g?g.push([F,u,A]):h.then(F,u,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((P(g)?
g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,n){var p=e(),q,s=function(b){try{return(P(h)?h:c)(b)}catch(d){return a(d),g(d)}},F=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(s,F,u)))},function(a){q||(q=!0,p.resolve(F(a)))},function(a){q||p.notify(u(a))})});return p.promise},all:function(a){var b=e(),c=0,d=J(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=C("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Wa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!P(b)){var k=h(b||E,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Sa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Sa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,l=f(a),m=[],p={},n=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Pa(d))for(e!==m&&(e=m,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==
d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(Pa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,
f,k,h,l=this.$$asyncQueue,r=this.$$postDigestQueue,R,z,t=b,L,O=[],w,B,I;m("$digest");g.$$checkUrlChange();c=null;do{z=!1;for(L=this;l.length;){try{I=l.shift(),I.scope.$eval(I.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(h=L.$$watchers)for(R=h.length;R--;)try{if(d=h[R])if((f=d.get(L))!==(k=d.last)&&!(d.eq?Aa(f,k):"number"===typeof f&&"number"===typeof k&&isNaN(f)&&isNaN(k)))z=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,k===n?f:k,L),5>t&&(w=4-t,O[w]||(O[w]=[]),B=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):
d.exp,B+="; newVal: "+na(f)+"; oldVal: "+na(k),O[w].push(B));else if(d===c){z=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((z||l.length)&&!t--)throw p.$$phase=null,a("infdig",b,na(O));}while(z||l.length);for(p.$$phase=null;r.length;)try{r.shift()()}catch(v){e(v)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,
Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=E,this.$on=
this.$watch=function(){return E})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ra(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Ba.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;k.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,h)}catch(p){e(p)}else d.splice(l,
1),l--,m--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Ba.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(l){e(l)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};
var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Be(b){if("self"===b)return b;if(v(b)){if(-1<b.indexOf("***"))throw xa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw xa("imatcher");}function Gc(b){var a=[];y(b)&&r(b,function(b){a.push(Be(b))});return a}function be(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw xa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw xa("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw xa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===t||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw xa("insecurl",
d.toString());}if(c===ga.HTML)return e(d);throw xa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw xa("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=Qa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ga,function(a,b){var c=K(b);e[Za("parse_as_"+c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=v(f.body.style.webkitTransition),n=v(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=y(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=v(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=ba(W)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Kc);a("orderBy",Lc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!J(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Va.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=
b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){x(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,
e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));k.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;k=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;v(c)&&(c=He.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
if(!ta(c))return c;for(;e;)(m=Ie.exec(e))?(g=g.concat(Ba.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){k=Je[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function De(){return function(b){return na(b,!0)}}function Ee(){return function(b,a){if(!J(b)&&!v(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(v(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ta(a)&&ta(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a)||!c)return a;c=J(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Qa;if(v(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=
d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ya(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||yb,k=0,m=f.$error={},h=[];f.$name=
a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Da(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Sa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Sa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Ra(d,c))return}else m[a]=
d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function sa(b,a,c,d){b.$setValidity(a,c);return c?d:t}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ke(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,
b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Le),k=a[0].placeholder,m={},h=K(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if("password"!==h&&Ua(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==
f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(){p||(p=f.defer(function(){n();p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||q()});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return sa(d,
"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw C("ngPattern")("noregexp",s,e,ia(a));return sa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return sa(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var u=U(c.ngMaxlength);e=function(a){return sa(d,"maxlength",d.$isEmpty(a)||a.length<=u,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!J(a)){if(v(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<
b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=m(h,1);k.$addClass(q)}else if(!Aa(b,l)){var s=e(l),q=d(h,s),h=d(s,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ha(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):
(g=m(h,-1),k.$removeClass(g))}})}}}]}var Le="validity",K=function(b){return v(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,Ia=function(b){return v(b)?b.toUpperCase():b},Q,w,Ea,Ba=[].slice,Me=[].push,za=Object.prototype.toString,Ta=C("ng"),Va=W.angular||(W.angular={}),Ya,Ma,ma=["0","0","0"];Q=U((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=U((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));E.$inject=[];Qa.$inject=[];var J=function(){return P(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===za.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return v(b)?b.trim():b}:function(b){return v(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xa=function(){if(y(Xa.isActive_))return Xa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.26",major:1,minor:2,dot:26,codeName:"zucchini-expansion"};S.expando="ng339";var ab=S.cache={},ne=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},$a=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,
je=/^moz([A-Z])/,Hb=C("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=
ea.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Me,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[K(b)]=b});var rc={};r("input select option textarea button form details".split(" "),
function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:pb,scope:function(b){return w.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w.data(b,"$isolateScope")||w.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Za(a);if(y(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],
""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?t:d);return d}},attr:function(b,a,c){var d=K(a);if(qb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(x(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]=
"innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(x(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===t){if(T(a)){for(e=
0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(y(f))throw Hb("onargs");var g=oa(c,"events"),k=oa(c,"handle");g||oa(c,"events",g={});k||oa(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?
function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else sb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,
d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Nb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(oa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:E,type:e,target:a},c.type&&(e=D(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=
function(c,e,f){for(var g,k=0;k<this.length;k++)x(g)?(g=a(this[k],c,e,f),y(g)&&(g=w(g))):Jb(g,a(this[k],c,e,f));return y(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});bb.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
cb=C("$injector"),Ne=C("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Ne("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){ob(a,c);nb(a,g)});k&&d(k)},enabled:E}}]}],ja=C("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var we=/^(x[\:\-_]|data[\:\-_])/i,yc=C("$interpolate"),Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
ze={http:80,https:443,ftp:21},Sb=C("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(x(a))return this.$$url;a=Oe.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Cc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(v(a)||ib(a))a=a.toString(),this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=C("$parse"),Fc={},wa,Pe=Function.prototype.call,Qe=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Re={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=t;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},
was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+
this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=
gb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=D(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Re[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=D(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=
this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===
e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,f){return c(e,f,a,d)},{constant:a.constant&&
d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return D(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return ub(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,f){var g=a(e,f),k=d(e,f),m;ka(k,c.text);if(!g)return t;(g=va(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&
(m=g,"$$v"in g||(m.$$v=t,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ka(d(e,g),c.text);(g=va(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(va(d[h](f,g),e.text));h=a(f,g,m)||E;va(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw la("isecfn",
l);if(h===Pe||h===Qe||Qc&&h===Qc)throw la("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return va(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},xa=C("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Hc=ua(W.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",Je={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Jc.$inject=["$locale"];var Fe=ba(K),Ge=ba(Ia);Lc.$inject=["$parse"];var dd=ba({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===za.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(qb,function(a,c){if("multiple"!=a){var d=pa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=pa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===za.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Q&&g&&e.prop(g,f[k])):"href"===
a&&f.$set(k,null)})}}}});var yb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",k);e.on("$destroy",function(){c(function(){$a(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),
h=f.name||f.ngForm;h&&ub(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&ub(a,h,t,h);D(g,yb)})}}}}}]},ed=Rc(),rd=Rc(!0),Se=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Te=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ue=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ue.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return t});Ke(e,"number",Ve,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return sa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return sa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return sa(e,"number",e.$isEmpty(a)||
ib(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"url",e.$isEmpty(a)||Se.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"email",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){x(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;v(f)||(f=!0);v(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:E,button:E,submit:E,reset:E,file:E},Ve=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Oa="ng-pristine",zb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw C("ngModel")("nonassign",d.ngModel,ia(e));this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,p=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=
c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=ba({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return J(a)?a.join(", "):t});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=ya({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==t?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=ya({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={},Ye={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=pa("ng-"+a);lc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Ye[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ua(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Va.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,F){var u=0,t,w,R,z=function(){w&&(w.remove(),w=null);t&&(t.$destroy(),t=null);
R&&(e.leave(R,function(){w=null}),w=R,R=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!y(l)||l&&!g.$eval(l)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();r.template=a;a=F(c,function(a){z();e.enter(a,null,k,m)});t=c;R=a;t.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===u&&z()}),g.$emit("$includeContentRequested")):(z(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=ya({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=ya({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=C("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,s,t,u,A={$id:Ka};if(!l)throw d("iexp",
h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){u&&(A[u]=a);A[t]=c;A.$index=d;return n(e,A)}):(q=function(a,c){return Ka(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];u=l[2];var y={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,A={},B,I,H,v,E,C,x,J=[];if(Pa(a))C=a,E=p||q;else{E=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}B=C.length;k=J.length=C.length;for(g=0;g<k;g++)if(H=a===
C?g:C[g],v=a[H],n=E(H,v,g),Da(n,"`track by` id"),y.hasOwnProperty(n))x=y[n],delete y[n],A[n]=x,J[g]=x;else{if(A.hasOwnProperty(n))throw r(J,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",h,n,na(v));J[g]={id:n};A[n]=!1}for(H in y)y.hasOwnProperty(H)&&(x=y[H],g=Eb(x.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());g=0;for(k=C.length;g<k;g++){H=a===C?g:C[g];v=a[H];x=J[g];J[g-1]&&(l=J[g-1].clone[J[g-1].clone.length-1]);if(x.scope){I=x.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
x.clone[0]!=n&&c.move(Eb(x.clone),null,w(l));l=x.clone[x.clone.length-1]}else I=e.$new();I[t]=v;u&&(I[u]=H);I.$index=g;I.$first=0===g;I.$last=g===B-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));x.scope||m(I,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;x.scope=I;x.clone=a;A[x.id]=x})}y=A})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ua(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ua(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=ya(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=
h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=ya({link:function(a,c,d,e,f){if(!f)throw C("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ze=C("ngOptions"),Ed=ba({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Da(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&u.prop("selected",!0)):x(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,
s,t,v;s=g.$modelValue;t=w(e)||[];var E=n?Zb(t):t,I,M,B;M={};B=!1;if(q)if(h=g.$modelValue,x&&J(h))for(B=new bb([]),d={},v=0;v<h.length;v++)d[m]=h[v],B.put(x(e,d),h[v]);else B=new bb(h);v=B;var D,K;for(B=0;I=E.length,B<I;B++){h=B;if(n){h=E[B];if("$"===h.charAt(0))continue;M[n]=h}M[m]=t[h];d=r(e,M)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=y(v.remove(x?x(e,M):u(e,M))):(x?(d={},d[m]=s,d=x(e,d)===x(e,M)):d=s===u(e,M),v=v||d);D=l(e,M);D=y(D)?D:"";h.push({id:x?x(e,M):n?E[B]:B,label:D,selected:d})}q||(F||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));M=0;for(E=c.length;M<E;M++){d=c[M];h=a[d];z.length<=M?(s={element:C.clone().attr("label",d),label:h.label},t=[s],z.push(t),f.append(s.element)):(t=z[M],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));D=null;B=0;for(I=h.length;B<I;B++)d=h[B],(v=t[B+1])?(D=v.element,v.label!==d.label&&D.text(v.label=d.label),v.id!==d.id&&D.val(v.id=d.id),D[0].selected!==d.selected&&(D.prop("selected",v.selected=d.selected),
Q&&D.prop("selected",v.selected))):(""===d.id&&F?K=F:(K=A.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),p.addOption(d.label,K),D?D.after(K):s.element.append(K),D=K);for(B++;t.length>B;)d=t.pop(),p.removeOption(d.label),d.element.remove()}for(;z.length>M;)z.pop()[0].element.remove()}var h;if(!(h=s.match(d)))throw Ze("iexp",s,ia(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],r=c(h[3]||""),u=c(h[2]?
h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];F&&(a(F)(e),F.removeClass("ng-scope"),F.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,l,p,r,s,v,y;if(q)for(l=[],r=0,v=z.length;r<v;r++)for(a=z[r],p=1,s=a.length;p<s;p++){if((h=a[p].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(y=0;y<c.length&&(d[m]=c[y],x(e,d)!=h);y++);else d[m]=c[h];l.push(u(e,d))}}else if(h=f.val(),"?"==h)l=t;else if(""===h)l=null;else if(x)for(y=0;y<c.length;y++){if(d[m]=
c[y],x(e,d)==h){l=u(e,d);break}}else d[m]=c[h],n&&(d[n]=h),l=u(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(w,k);e.$watchCollection(function(){var a={},c=w(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,s=k.ngOptions,F=!1,u,A=w(X.createElement("option")),C=w(X.createElement("optgroup")),v=A.clone();k=0;for(var z=g.children(),E=z.length;k<
E;k++)if(""===z[k].value){u=F=z.eq(k);break}p.init(m,F,v);q&&(m.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,
c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=ba({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=W.jQuery)&&Ea.fn.on?(w=Ea,D(Ea.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",!1,!1,!0)):w=S,Va.element=w,
$c(Va),w(X).ready(function(){Xc(X,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;/**
 * @license AngularJS v1.2.26
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @kind function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);
;/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;var duScrollDefaultEasing=function(e){"use strict";return.5>e?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2};angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset",function(e,t,n,r,o,l,i){"use strict";var u=angular.element.prototype,c=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},a=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},s=function(e){return a(e)||c(e)?e:e[0]};u.scrollTo=function(t,n,r){var o;if(angular.isElement(t)?o=this.scrollToElement:r&&(o=this.scrollToAnimated),o)return o.apply(this,arguments);var l=s(this);return c(l)?e.scrollTo(t,n):(l.scrollLeft=t,void(l.scrollTop=n))};var d,f;u.scrollToAnimated=function(e,l,i,u){i&&!u&&(u=o);var c=this.scrollLeft(),a=this.scrollTop(),s=Math.round(e-c),p=Math.round(l-a),m=null,g=this,v="scroll mousedown mousewheel touchmove keydown",h=function(e){(!e||e.which>0)&&(g.unbind(v,h),n(d),f.reject(),d=null)};if(d&&h(),f=t.defer(),!s&&!p)return f.resolve(),f.promise;var y=function(e){null===m&&(m=e);var t=e-m,n=t>=i?1:u(t/i);g.scrollTo(c+Math.ceil(s*n),a+Math.ceil(p*n)),1>n?d=r(y):(g.unbind(v,h),d=null,f.resolve())};return g.scrollTo(c,a),g.bind(v,h),d=r(y),f.promise},u.scrollToElement=function(e,t,n,r){var o=s(this);(!angular.isNumber(t)||isNaN(t))&&(t=i);var l=this.scrollTop()+s(e).getBoundingClientRect().top-t;return a(o)&&(l-=o.getBoundingClientRect().top),this.scrollTo(0,l,n,r)};var p={scrollLeft:function(t,n,r){if(angular.isNumber(t))return this.scrollTo(t,this.scrollTop(),n,r);var o=s(this);return c(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},scrollTop:function(t,n,r){if(angular.isNumber(t))return this.scrollTo(this.scrollTop(),t,n,r);var o=s(this);return c(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop}};u.scrollToElementAnimated=function(e,t,n,r){return this.scrollToElement(e,t,n||l,r)},u.scrollTopAnimated=function(e,t,n){return this.scrollTop(e,t||l,n)},u.scrollLeftAnimated=function(e,t,n){return this.scrollLeft(e,t||l,n)};var m=function(e,t){return function(n,r){return r?t.apply(this,arguments):e.apply(this,arguments)}};for(var g in p)u[g]=u[g]?m(u[g],p[g]):p[g]}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),i=0;i<t.length;i++)if(o=t[i]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e){var r=(new Date).getTime(),o=Math.max(0,16-(r-n)),l=t(function(){e(r+o)},o);return n=r+o,l};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","scrollContainerAPI","duScrollGreedy","duScrollSpyWait",function(e,t,n,r,o){"use strict";var l=function(n){var l=!1,i=!1,u=function(){i=!1;var t=n.container,o=t[0],l=0;("undefined"!=typeof HTMLElement&&o instanceof HTMLElement||o.nodeType&&o.nodeType===o.ELEMENT_NODE)&&(l=o.getBoundingClientRect().top);var u,c,a,s,d,f;for(s=n.spies,c=n.currentlyActive,a=void 0,u=0;u<s.length;u++)d=s[u],f=d.getTargetPosition(),f&&f.top+d.offset-l<20&&-1*f.top+l<f.height&&(!a||a.top<f.top)&&(a={top:f.top,spy:d});a&&(a=a.spy),c===a||r&&!a||(c&&(c.$element.removeClass("active"),e.$broadcast("duScrollspy:becameInactive",c.$element)),a&&(a.$element.addClass("active"),e.$broadcast("duScrollspy:becameActive",a.$element)),n.currentlyActive=a)};return o?function(){l?i=!0:(u(),l=t(function(){l=!1,i&&u()},o,!1))}:u},i={},u=function(e){var t=e.$id,n={spies:[]};return n.handler=l(n),i[t]=n,e.$on("$destroy",function(){c(e)}),t},c=function(e){var t=e.$id,n=i[t],r=n.container;r&&r.off("scroll",n.handler),delete i[t]},a=u(e),s=function(e){return i[e.$id]?i[e.$id]:e.$parent?s(e.$parent):i[a]},d=function(e){var t,n,r=e.$element.scope();if(r)return s(r);for(n in i)if(t=i[n],-1!==t.spies.indexOf(e))return t},f=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},p=function(e){var t=d(e);t&&(t.spies.push(e),t.container&&f(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=n.getContainer(e.$element.scope()),t.container.on("scroll",t.handler).triggerHandler("scroll")))},m=function(e){var t=d(e);e===t.currentlyActive&&(t.currentlyActive=null);var n=t.spies.indexOf(e);-1!==n&&t.spies.splice(n,1)};return{addSpy:p,removeSpy:m,createContext:u,destroyContext:c,getContextForScope:s}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&-1!==l.href.indexOf("#")){var i=document.getElementById(l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1));if(i&&i.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var u=l.offset?parseInt(l.offset,10):t,c=l.duration?parseInt(l.duration,10):e,a=n.getContainer(r);a.scrollToElement(angular.element(i),isNaN(u)?0:u,isNaN(c)?0:c)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,n,r){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$element=t,this.offset=n};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();return e?e.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,i,u){var c,a=u.ngHref||u.href;a&&-1!==a.indexOf("#")?c=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):u.duScrollspy&&(c=u.duScrollspy),c&&n(function(){var n=new o(c,i,-(u.offset?parseInt(u.offset,10):t));e.addSpy(n),l.$on("$destroy",function(){e.removeSpy(n)}),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n)),r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n))},0,!1)}}}]);
//# sourceMappingURL=angular-scroll.min.js.map;/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,e,O){'use strict';e.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(G,s,g){g=g.ngAnimateChildren;e.isString(g)&&0===g.length?s.data("$$ngAnimateChildren",!0):G.$watch(g,function(e){s.data("$$ngAnimateChildren",!!e)})}}).factory("$$animateReflow",["$$rAF","$document",function(e,s){return function(g){return e(function(){g()})}}]).config(["$provide","$animateProvider",function(G,s){function g(e){for(var g=0;g<e.length;g++){var l=e[g];if(l.nodeType==aa)return l}}
function B(l){return e.element(g(l))}var m=e.noop,u=e.forEach,P=s.$$selectors,aa=1,l="$$ngAnimateState",V="$$ngAnimateChildren",J="ng-animate",n={running:!0};G.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(z,F,$,R,E,H,O){function K(a){var b=a.data(l)||{};b.running=!0;a.data(l,b)}function L(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(F.get(P[""]));for(var d=0;d<a.length;d++){var f=
a[d],e=P[f];e&&!c[f]&&(b.push(F.get(e)),c[f]=!0)}return b}}function G(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),n.push({event:b,fn:c}),h.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];u(b,function(a){a.fn&&f.push(a)});var g=0;u(f,function(b,l){var C=function(){a:{if(d){(d[l]||m)();if(++g<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,A,k,C));break;case "addClass":d.push(b.fn(a,A||c,
C));break;case "removeClass":d.push(b.fn(a,k||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var g=a[0];if(g){var l="setClass"==b,p=l||"addClass"==b||"removeClass"==b,A,k;e.isArray(c)&&(A=c[0],k=c[1],c=A+" "+k);var x=a.attr("class")+" "+c;if(M(x)){var t=m,w=[],h=[],q=m,y=[],n=[],x=(" "+x).replace(/\s+/g,".");u(L(x),function(a){!d(a,b)&&l&&(d(a,"addClass"),d(a,"removeClass"))});return{node:g,event:b,className:c,isClassBased:p,isSetClassOperation:l,before:function(a){t=a;f(h,w,function(){t=
m;a()})},after:function(a){q=a;f(n,y,function(){q=m;a()})},cancel:function(){w&&(u(w,function(a){(a||m)(!0)}),t(!0));y&&(u(y,function(a){(a||m)(!0)}),q(!0))}}}}}function r(a,b,c,d,f,g,n){function p(d){var e="$animate:"+d;q&&(q[e]&&0<q[e].length)&&E(function(){c.triggerHandler(e,{event:a,className:b})})}function A(){p("before")}function m(){p("after")}function x(){p("close");n&&E(function(){n()})}function t(){t.hasBeenRun||(t.hasBeenRun=!0,g())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=
c.data(l);d&&(h&&h.isClassBased?k(c,b):(E(function(){var d=c.data(l)||{};r==d.index&&k(c,b,a)}),c.data(l,d)));x()}}var h=G(c,a,b);if(h){b=h.className;var q=e.element._data(h.node),q=q&&q.events;d||(d=f?f.parent():c.parent());var y=c.data(l)||{};f=y.active||{};var z=y.totalActive||0,C=y.last,D;h.isClassBased&&(D=y.running||y.disabled||C&&!C.isClassBased);if(D||N(c,d))t(),A(),m(),w();else{d=!1;if(0<z){D=[];if(h.isClassBased)"setClass"==C.event?(D.push(C),k(c,b)):f[b]&&(v=f[b],v.event==a?d=!0:(D.push(v),
k(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var v in f)D.push(f[v]),k(c,v);f={};z=0}0<D.length&&u(D,function(a){a.cancel()})}!h.isClassBased||(h.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)t(),A(),m(),x();else{if("leave"==a)c.one("$destroy",function(a){a=e.element(this);var b=a.data(l);b&&(b=b.active["ng-leave"])&&(b.cancel(),k(a,"ng-leave"))});c.addClass(J);var r=Y++;z++;f[b]=h;c.data(l,{last:h,active:f,index:r,totalActive:z});A();h.before(function(d){var e=c.data(l);
d=d||!e||!e.active[b]||h.isClassBased&&e.active[b].event!=a;t();!0===d?w():(m(),h.after(w))})}}}else t(),A(),m(),w()}function T(a){if(a=g(a))a=e.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),u(a,function(a){a=e.element(a);(a=a.data(l))&&a.active&&u(a.active,function(a){a.cancel()})})}function k(a,b){if(g(a)==g(R))n.disabled||(n.running=!1,n.structural=!1);else if(b){var c=a.data(l)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);
if(d||!c.totalActive)a.removeClass(J),a.removeData(l)}}function N(a,b){if(n.disabled)return!0;if(g(a)==g(R))return n.running;var c,d,f;do{if(0===b.length)break;var m=g(b)==g(R),k=m?n:b.data(l)||{};if(k.disabled)return!0;m&&(f=!0);!1!==c&&(m=b.data(V),e.isDefined(m)&&(c=m));d=d||k.running||k.last&&!k.last.isClassBased}while(b=b.parent());return!f||!c&&d}var Y=0;R.data(l,n);H.$$postDigest(function(){H.$$postDigest(function(){n.running=!1})});var Q=s.classNameFilter(),M=Q?function(a){return Q.test(a)}:
function(){return!0};return{enter:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);K(a);z.enter(a,b,c);H.$$postDigest(function(){a=B(a);r("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){a=e.element(a);T(a);K(a);H.$$postDigest(function(){r("leave","ng-leave",B(a),null,null,function(){z.leave(a)},b)})},move:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);T(a);K(a);z.move(a,b,c);H.$$postDigest(function(){a=B(a);r("move","ng-move",a,b,c,m,d)})},addClass:function(a,
b,c){a=e.element(a);a=B(a);r("addClass",b,a,null,null,function(){z.addClass(a,b)},c)},removeClass:function(a,b,c){a=e.element(a);a=B(a);r("removeClass",b,a,null,null,function(){z.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=e.element(a);a=B(a);r("setClass",[b,c],a,null,null,function(){z.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)k(b);else{var c=b.data(l)||{};c.disabled=!0;b.data(l,c)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]);s.register("",
["$window","$sniffer","$timeout","$$animateReflow",function(l,n,s,B){function E(a,U){S&&S();W.push(U);S=B(function(){u(W,function(a){a()});W=[];S=null;v={}})}function H(a,U){var b=g(a);a=e.element(b);Z.push(a);b=Date.now()+U;b<=da||(s.cancel(ca),da=b,ca=s(function(){G(Z);Z=[]},U,!1))}function G(a){u(a,function(a){(a=a.data(q))&&(a.closeAnimationFn||m)()})}function K(a,b){var c=b?v[b]:null;if(!c){var d=0,e=0,f=0,g=0,m,k,h,q;u(a,function(a){if(a.nodeType==aa){a=l.getComputedStyle(a)||{};h=a[I+P];d=
Math.max(L(h),d);q=a[I+x];m=a[I+t];e=Math.max(L(m),e);k=a[p+t];g=Math.max(L(k),g);var b=L(a[p+P]);0<b&&(b*=parseInt(a[p+w],10)||1);f=Math.max(b,f)}});c={total:0,transitionPropertyStyle:q,transitionDurationStyle:h,transitionDelayStyle:m,transitionDelay:e,transitionDuration:d,animationDelayStyle:k,animationDelay:g,animationDuration:f};b&&(v[b]=c)}return c}function L(a){var b=0;a=e.isString(a)?a.split(/\s*,\s*/):[];u(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function J(a){var b=a.parent(),
c=b.data(h);c||(b.data(h,++ba),c=ba);return c+"-"+g(a).getAttribute("class")}function r(a,b,c,d){var e=J(b),f=e+" "+c,l=v[f]?++v[f].total:0,k={};if(0<l){var h=c+"-stagger",k=e+" "+h;(e=!v[k])&&b.addClass(h);k=K(b,k);e&&b.removeClass(h)}d=d||function(a){return a()};b.addClass(c);var h=b.data(q)||{},n=d(function(){return K(b,f)});d=n.transitionDuration;e=n.animationDuration;if(0===d&&0===e)return b.removeClass(c),!1;b.data(q,{running:h.running||0,itemIndex:l,stagger:k,timings:n,closeAnimationFn:m});
a=0<h.running||"setClass"==a;0<d&&T(b,c,a);0<e&&(0<k.animationDelay&&0===k.animationDuration)&&(g(b).style[p]="none 0s");return!0}function T(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(y):g(a).style[I+x]="none"}function k(a,b){var c=I+x,d=g(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(y)}function N(a){var b=p;a=g(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function Y(a,b,d,e){function k(a){b.off(x,l);b.removeClass(m);c(b,d);a=g(b);for(var e in s)a.style.removeProperty(s[e])}
function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(V));Math.max(a-z,0)>=y&&b>=v&&e()}var h=g(b);a=b.data(q);if(-1!=h.getAttribute("class").indexOf(d)&&a){var m="";u(d.split(" "),function(a,b){m+=(0<b?" ":"")+a+"-active"});var n=a.stagger,p=a.timings,t=a.itemIndex,v=Math.max(p.transitionDuration,p.animationDuration),w=Math.max(p.transitionDelay,p.animationDelay),y=w*D,z=Date.now(),x=A+" "+X,r="",s=[];if(0<p.transitionDuration){var B=
p.transitionPropertyStyle;-1==B.indexOf("all")&&(r+=f+"transition-property: "+B+";",r+=f+"transition-duration: "+p.transitionDurationStyle+";",s.push(f+"transition-property"),s.push(f+"transition-duration"))}0<t&&(0<n.transitionDelay&&0===n.transitionDuration&&(r+=f+"transition-delay: "+Q(p.transitionDelayStyle,n.transitionDelay,t)+"; ",s.push(f+"transition-delay")),0<n.animationDelay&&0===n.animationDuration&&(r+=f+"animation-delay: "+Q(p.animationDelayStyle,n.animationDelay,t)+"; ",s.push(f+"animation-delay")));
0<s.length&&(p=h.getAttribute("style")||"",h.setAttribute("style",p+"; "+r));b.on(x,l);b.addClass(m);a.closeAnimationFn=function(){k();e()};h=(t*(Math.max(n.animationDelay,n.transitionDelay)||0)+(w+v)*C)*D;a.running++;H(b,h);return k}e()}function Q(a,b,c){var d="";u(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function M(a,b,d,e){if(r(a,b,d,e))return function(a){a&&c(b,d)}}function a(a,b,d,e){if(b.data(q))return Y(a,b,d,e);c(b,d);e()}function b(b,c,d,e){var f=M(b,
c,d);if(f){var g=f;E(c,function(){k(c,d);N(c);g=a(b,c,d,e)});return function(a){(g||m)(a)}}e()}function c(a,b){a.removeClass(b);var c=a.data(q);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(q))}function d(a,b){var c="";a=e.isArray(a)?a:a.split(/\s+/);u(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var f="",I,X,p,A;F.ontransitionend===O&&F.onwebkittransitionend!==O?(f="-webkit-",I="WebkitTransition",X="webkitTransitionEnd transitionend"):(I="transition",X="transitionend");
F.onanimationend===O&&F.onwebkitanimationend!==O?(f="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var P="Duration",x="Property",t="Delay",w="IterationCount",h="$$ngAnimateKey",q="$$ngAnimateCSS3Data",y="ng-animate-block-transitions",V=3,C=1.5,D=1E3,v={},ba=0,W=[],S,ca=null,da=0,Z=[];return{enter:function(a,c){return b("enter",a,"ng-enter",c)},leave:function(a,c){return b("leave",a,"ng-leave",c)},move:function(a,c){return b("move",a,"ng-move",
c)},beforeSetClass:function(a,b,c,e){var f=d(c,"-remove")+" "+d(b,"-add"),g=M("setClass",a,f,function(d){var e=a.attr("class");a.removeClass(c);a.addClass(b);d=d();a.attr("class",e);return d});if(g)return E(a,function(){k(a,f);N(a);e()}),g;e()},beforeAddClass:function(a,b,c){var e=M("addClass",a,d(b,"-add"),function(c){a.addClass(b);c=c();a.removeClass(b);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},setClass:function(b,c,e,f){e=d(e,"-remove");c=d(c,"-add");return a("setClass",b,
e+" "+c,f)},addClass:function(b,c,e){return a("addClass",b,d(c,"-add"),e)},beforeRemoveClass:function(a,b,c){var e=M("removeClass",a,d(b,"-remove"),function(c){var d=a.attr("class");a.removeClass(b);c=c();a.attr("class",d);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},removeClass:function(b,c,e){return a("removeClass",b,d(c,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;angular.module("youtube-embed",["ng"]).service("youtubeEmbedUtils",["$window","$rootScope",function(e,t){function r(e,t){return e.indexOf(t)>-1}var n={},a=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,i=/t=(\d+)[ms]?(\d+)?s?/;return n.getIdFromURL=function(e){var t=e.replace(a,"$1");if(r(t,";")){var n=t.split(";");if(r(n[1],"%")){var i=decodeURIComponent(t.split(";")[1]);t=("http://youtube.com"+i).replace(a,"$1")}else t=n[0]}else r(t,"#")&&(t=t.split("#")[0]);return t},n.getTimeFromURL=function(e){e=e||"";var t=e.match(i);if(!t)return 0;var n=t[0],a=t[1],o=t[2];return"undefined"!=typeof o?(o=parseInt(o,10),a=parseInt(a,10)):r(n,"m")?(a=parseInt(a,10),o=0):(o=parseInt(a,10),a=0),o+60*a},function(){var e=["http:","https:"],t="//www.youtube.com/iframe_api";e.indexOf(window.location.protocol)<0&&(t="http:"+t);var r=document.createElement("script");r.src=t;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n)}(),n.ready=!1,e.onYouTubeIframeAPIReady=function(){t.$apply(function(){n.ready=!0})},n}]).directive("youtubeVideo",["youtubeEmbedUtils",function(e){var t=1,r={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"queued"},n="youtube.player.";return{restrict:"EA",scope:{videoId:"=?",videoUrl:"=?",player:"=?",playerVars:"=?",playerHeight:"=?",playerWidth:"=?"},link:function(a,i,o){function u(){var e=Array.prototype.slice.call(arguments);a.$apply(function(){a.$emit.apply(a,e)})}function d(e){var t=r[e.data];"undefined"!=typeof t&&u(n+t,a.player,e),a.$apply(function(){a.player.currentState=t})}function p(e){u(n+"ready",a.player,e)}function l(){var e=angular.copy(a.playerVars);e.start=e.start||a.urlStartTime;var t=new YT.Player(c,{height:a.playerHeight,width:a.playerWidth,videoId:a.videoId,playerVars:e,events:{onReady:p,onStateChange:d}});return t.id=c,t}function y(){c&&a.videoId&&(a.player&&"function"==typeof a.player.destroy&&a.player.destroy(),a.player=l())}a.utils=e;var c=o.playerId||i[0].id||"unique-youtube-embed-id-"+t++;i[0].id=c,a.playerHeight=a.playerHeight||390,a.playerWidth=a.playerWidth||640,a.playerVars=a.playerVars||{};var s=a.$watch(function(){return a.utils.ready&&("undefined"!=typeof a.videoUrl||"undefined"!=typeof a.videoId)},function(e){e&&(s(),"undefined"!=typeof a.videoUrl?a.$watch("videoUrl",function(e){a.videoId=a.utils.getIdFromURL(e),a.urlStartTime=a.utils.getTimeFromURL(e),y()}):a.$watch("videoId",function(){a.urlStartTime=null,y()}))});a.$on("$destroy",function(){a.player&&a.player.destroy()})}}}]);;!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.contentful=t()}}(function(){var t;return function e(t,n,r){function i(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";function r(t){return h.reduce(t,function(t,e,n){return h.truthy(e)&&(t[n]=e),t},{})}function i(t,e){if(!h.exists(t[e]))throw new TypeError("Expected property "+e)}function o(t){return h.getPath(t,["sys","type"])in E}function s(t){var e=E[t.sys.type];return e.parse(t)}function u(t){return JSON.parse(t.body)}function a(t){return h.reduce(t,function(t,e,n){return t[n]=h.isArray(e)?e.join(","):e,t},{})}function c(t){return p(t,l,function(e){return f(t,e)||e}),t.items}function l(t){return"Link"===h.getPath(t,["sys","type"])}function f(t,e){var n=e.sys.linkType,r=e.sys.id,i=function(t){return t.sys.type===n&&t.sys.id===r};return h.find(t.items,i)||t.includes&&h.find(t.includes[n],i)}function p(t,e,n){return e(t)?n(t):h.isArray(t)||h.isObject(t)?(h.each(t,function(r,i){t[i]=p(r,e,n)}),t):t}var h=t("underscore-contrib"),d=t("questor"),v=t("redefine"),_=t("querystring"),y=v.Class({constructor:function(t){i(t,"accessToken"),i(t,"space"),this.options=h.defaults({},t,{host:"cdn.contentful.com",secure:!0})},request:function(t,e){e||(e={}),e.headers||(e.headers={}),e.query||(e.query={}),e.headers["Content-Type"]="application/vnd.contentful.delivery.v1+json",e.query.access_token=this.options.accessToken;var n=[this.options.secure?"https":"http","://",h.first(this.options.host.split(":")),":",this.options.secure?"443":"80","/spaces/",this.options.space,t,"?",_.stringify(e.query)].join("");return d(n,e).then(u).catch(Error,function(t){throw t}).catch(function(t){throw u(t)})},asset:function(t,e){return this.request("/assets/"+t).then(m.parse).nodeify(e)},assets:function(t,e){var n=x.parse(t);return this.request("/assets",{query:n}).then(h.partial(w.parse,m)).nodeify(e)},contentType:function(t,e){return this.request("/content_types/"+t).then(j.parse).nodeify(e)},contentTypes:function(t,e){var n=x.parse(t);return this.request("/content_types",{query:n}).then(h.partial(w.parse,j)).nodeify(e)},entry:function(t,e){return this.request("/entries/"+t).then(g.parse).nodeify(e)},entries:function(t,e){var n=x.parse(t);return this.request("/entries",{query:n}).then(h.partial(w.parse,g)).nodeify(e)},space:function(t){return this.request("").nodeify(t)}}),m=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new m,{sys:T.parse(t.sys),fields:t.fields})}}}),g=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new g,{sys:T.parse(t.sys),fields:t.fields})}}}),j=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new j,{sys:T.parse(t.sys),fields:t.fields.map(b.parse)},h.pick(t,"name","displayField"))}}}),b=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new b,t)}}}),w=v.Class({constructor:function(){},statics:{parse:function(t,e){p(e,o,s);var n=c(e);return v(n,{limit:e.limit,skip:e.skip,total:e.total},{enumerable:!1})}}}),x=v.Class({constructor:function(){},toQueryString:function(){return _.stringify(this)},statics:{parse:function(t){return h.extend(new x,a(t))}}}),k=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new k,t)}}}),T=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new T,h.pick(t,"id","revision","type","locale"),r({contentType:t.contentType&&A.parse(t.contentType),createdAt:t.createdAt&&new Date(t.createdAt),linkType:t.linkType,updatedAt:t.updatedAt&&new Date(t.updatedAt),space:t.space&&A.parse(t.space)}))}}}),A=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new A,{sys:T.parse(t.sys)})}}});n.createClient=h.fnull(function(t){return new y(t)},{});var E={Asset:m,ContentType:j,Entry:g,Space:k}},{querystring:22,questor:19,redefine:2,"underscore-contrib":3}],2:[function(t,e){var n=this._=function(t,n,r){function i(t,e){for(var n,r={},i=Q(t),o=0,s=i.length;s>o;o++)n=i[o],r[n]=J(t,n);return Z(void 0===e?K(t):e,r)}function o(t,e,n,r){A(n||y.defaults||{},re),A(r,re),(G.call(r,S)||G.call(r,V))&&(delete re[I],delete re[L]),$(t,e,re),te(re)}function s(t,e,n,r){o(t,e,r,n instanceof l?n:n instanceof v?c(t,e,n):(oe[L]=n,oe)),delete oe[L]}function u(t,e,n){for(var r in e)G.call(e,r)&&s(t,r,e[r],n)}function a(t,e){for(var n,r=0;r<e.length;r++)n=e[r],d(n)&&(n="mixin"===(n.type||n.name)?n.call(n)||n:n[M]),X(t,n)}function c(t,e,n){var r,i=n._,o=G.call(n,P)?!!n[P]:!0,s=G.call(n,O)&&n[O],u=G.call(n,I)&&n[I];return n[S]=function(){return se&&(n=J(t,e),delete t[e]),re[L]=i.call(r=this),re[P]=o,re[O]=s,re[I]=u,$(r,e,re),te(re),se&&(A(n,re),$(t,e,re),te(re)),r[e]},se&&(n[P]=!0),n}function l(t){A(t,this)}function f(t){return new l(t)}function p(t){return Z(d(t)?t[M]:t)}function h(t,e,n){var r=p(t);return e?y(r,e,n):r}function d(t){return"function"==typeof t}function v(t){this._=d(t)?t:A(t,this)||t[L]}function _(t){return new v(t)}function y(t,e,n,r){return("string"==typeof e?s(t,e,n,r):u(t,e,n))||t}function m(t){return function(e,n,r){return("string"==typeof n?s(e,n,r,t):u(e,n,t))||e}}function g(t,e){for(var n,r,i,o;e=K(e);)for(i=Q(e),n=i.length;n--;)if(e[r=i[n]]===t){do o=K(e),e=o;while(o[r]===t);return o[r]}}function j(){return g(j.caller,this).apply(this,arguments)}function b(t,e){return"string"==typeof t?b(this,t):t[B+e]||w(t,e)}function w(t,e){return ee[L]=z.call(t[e],t),$(t,B+e,ee),ee[L]=b,t[B+e]}function x(t,e){var n,r=G.call(t,R)?t[R]:function(){},i=G.call(t,N)&&t[N],s=G.call(t,C)&&t[C];if(e||(e={},e[I]=!0),delete t[R],s&&(delete t[C],y(r[M]=p(s),"constructor",r),d(s)))for(n in s)G.call(s,n)&&"name"!==n&&"length"!==n&&o(r,n,re,J(s,n));return i&&(delete t[N],u(r,i,ie)),G.call(t,H)&&(a(r[M],[].concat(t[H])),delete t[H]),u(r[M],t,e),k(r[M]),F in r[M]||$(r[M],F,ee),r}function k(t){return G.call(t,U)?object:$(t,U,ne)}var T,A,E,F="bound",P="configurable",R="constructor",O="enumerable",C="extend",S="get",H="mixin",B="__@",q="__proto__",M="prototype",V="set",N="statics",U="super",L="value",I="writable",D=n,z=n.bind||function(t){var e=this;return function(){return e.apply(t,arguments)}},W=function(e,n){return t[e]||r[e]||n},$=W("defineProperty"),G=W("hasOwnProperty"),J=W("getOwnPropertyDescriptor"),Q=W("getOwnPropertyNames",r.keys),K=W("getPrototypeOf",function(t){return t[q]}),X=r.mixin||function(t,e){for(var n=Q(e),r=n.length;r--;o(t,n[r],re,J(e,n[r])));return t},Z=t.create||t.inherit||r.create,Y=[P,O,S,V,L,I],te=D("o","delete o."+Y.join(";delete o.")),ee=Z(null),ne=Z(null),re=Z(null),ie={},oe={},se=!1;for(ie[I]=!0,ie[O]=!0,T=0;T<Y.length;T++)Y[T]=['if(h.call(a,"','"))b.',"=a.",";"].join(Y[T]);A=D("h","return function(a,b){"+Y.join("")+"}")(G),ne[L]=function ae(t){return z.apply(g(ae.caller,t),arguments)},ne[P]=ne[O]=ne[I]=!1,$(j,"bind",ne),ne[L]=j,ee[O]=!1,ee[P]=ee[I]=!0,ee[L]=b,y.from=h,y.Class=x,y[U]=k,y.mixin=X,y.bound=b,y.clone=i,y.as=f,y.later=_,y.using=m,y.defaults={},"undefined"!=typeof e&&e.exports&&((e.exports=y).redefine=y),t.mixin?t.mixin({redefine:y}):t.redefine=y;try{E=Z(y({},{_:_(r)}))._}catch(ue){te(re),se=!0}return t}(n||this,Function,Object)},{}],3:[function(t,e){t("./underscore.array.builders"),t("./underscore.array.selectors"),t("./underscore.collections.walk"),t("./underscore.function.arity"),t("./underscore.function.combinators"),t("./underscore.function.dispatch"),t("./underscore.function.iterators"),t("./underscore.function.predicates"),t("./underscore.object.builders"),t("./underscore.object.selectors"),t("./underscore.util.existential"),t("./underscore.util.operators"),t("./underscore.util.strings"),t("./underscore.util.trampolines"),e.exports=t("underscore")},{"./underscore.array.builders":5,"./underscore.array.selectors":6,"./underscore.collections.walk":7,"./underscore.function.arity":8,"./underscore.function.combinators":9,"./underscore.function.dispatch":10,"./underscore.function.iterators":11,"./underscore.function.predicates":12,"./underscore.object.builders":13,"./underscore.object.selectors":14,"./underscore.util.existential":15,"./underscore.util.operators":16,"./underscore.util.strings":17,"./underscore.util.trampolines":18,underscore:4}],4:[function(t,e,n){(function(){var t=this,r=t._,i={},o=Array.prototype,s=Object.prototype,u=Function.prototype,a=o.push,c=o.slice,l=o.concat,f=s.toString,p=s.hasOwnProperty,h=o.forEach,d=o.map,v=o.reduce,_=o.reduceRight,y=o.filter,m=o.every,g=o.some,j=o.indexOf,b=o.lastIndexOf,w=Array.isArray,x=Object.keys,k=u.bind,T=function(t){return t instanceof T?t:this instanceof T?void(this._wrapped=t):new T(t)};"undefined"!=typeof n?("undefined"!=typeof e&&e.exports&&(n=e.exports=T),n._=T):t._=T,T.VERSION="1.5.2";var A=T.each=T.forEach=function(t,e,n){if(null!=t)if(h&&t.forEach===h)t.forEach(e,n);else if(t.length===+t.length){for(var r=0,o=t.length;o>r;r++)if(e.call(n,t[r],r,t)===i)return}else for(var s=T.keys(t),r=0,o=s.length;o>r;r++)if(e.call(n,t[s[r]],s[r],t)===i)return};T.map=T.collect=function(t,e,n){var r=[];return null==t?r:d&&t.map===d?t.map(e,n):(A(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r)};var E="Reduce of empty array with no initial value";T.reduce=T.foldl=T.inject=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),v&&t.reduce===v)return r&&(e=T.bind(e,r)),i?t.reduce(e,n):t.reduce(e);if(A(t,function(t,o,s){i?n=e.call(r,n,t,o,s):(n=t,i=!0)}),!i)throw new TypeError(E);return n},T.reduceRight=T.foldr=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),_&&t.reduceRight===_)return r&&(e=T.bind(e,r)),i?t.reduceRight(e,n):t.reduceRight(e);var o=t.length;if(o!==+o){var s=T.keys(t);o=s.length}if(A(t,function(u,a,c){a=s?s[--o]:--o,i?n=e.call(r,n,t[a],a,c):(n=t[a],i=!0)}),!i)throw new TypeError(E);return n},T.find=T.detect=function(t,e,n){var r;return F(t,function(t,i,o){return e.call(n,t,i,o)?(r=t,!0):void 0}),r},T.filter=T.select=function(t,e,n){var r=[];return null==t?r:y&&t.filter===y?t.filter(e,n):(A(t,function(t,i,o){e.call(n,t,i,o)&&r.push(t)}),r)},T.reject=function(t,e,n){return T.filter(t,function(t,r,i){return!e.call(n,t,r,i)},n)},T.every=T.all=function(t,e,n){e||(e=T.identity);var r=!0;return null==t?r:m&&t.every===m?t.every(e,n):(A(t,function(t,o,s){return(r=r&&e.call(n,t,o,s))?void 0:i}),!!r)};var F=T.some=T.any=function(t,e,n){e||(e=T.identity);var r=!1;return null==t?r:g&&t.some===g?t.some(e,n):(A(t,function(t,o,s){return r||(r=e.call(n,t,o,s))?i:void 0}),!!r)};T.contains=T.include=function(t,e){return null==t?!1:j&&t.indexOf===j?-1!=t.indexOf(e):F(t,function(t){return t===e})},T.invoke=function(t,e){var n=c.call(arguments,2),r=T.isFunction(e);return T.map(t,function(t){return(r?e:t[e]).apply(t,n)})},T.pluck=function(t,e){return T.map(t,function(t){return t[e]})},T.where=function(t,e,n){return T.isEmpty(e)?n?void 0:[]:T[n?"find":"filter"](t,function(t){for(var n in e)if(e[n]!==t[n])return!1;return!0})},T.findWhere=function(t,e){return T.where(t,e,!0)},T.max=function(t,e,n){if(!e&&T.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);if(!e&&T.isEmpty(t))return-1/0;var r={computed:-1/0,value:-1/0};return A(t,function(t,i,o){var s=e?e.call(n,t,i,o):t;s>r.computed&&(r={value:t,computed:s})}),r.value},T.min=function(t,e,n){if(!e&&T.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);if(!e&&T.isEmpty(t))return 1/0;var r={computed:1/0,value:1/0};return A(t,function(t,i,o){var s=e?e.call(n,t,i,o):t;s<r.computed&&(r={value:t,computed:s})}),r.value},T.shuffle=function(t){var e,n=0,r=[];return A(t,function(t){e=T.random(n++),r[n-1]=r[e],r[e]=t}),r},T.sample=function(t,e,n){return arguments.length<2||n?t[T.random(t.length-1)]:T.shuffle(t).slice(0,Math.max(0,e))};var P=function(t){return T.isFunction(t)?t:function(e){return e[t]}};T.sortBy=function(t,e,n){var r=P(e);return T.pluck(T.map(t,function(t,e,i){return{value:t,index:e,criteria:r.call(n,t,e,i)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var R=function(t){return function(e,n,r){var i={},o=null==n?T.identity:P(n);return A(e,function(n,s){var u=o.call(r,n,s,e);t(i,u,n)}),i}};T.groupBy=R(function(t,e,n){(T.has(t,e)?t[e]:t[e]=[]).push(n)}),T.indexBy=R(function(t,e,n){t[e]=n}),T.countBy=R(function(t,e){T.has(t,e)?t[e]++:t[e]=1}),T.sortedIndex=function(t,e,n,r){n=null==n?T.identity:P(n);for(var i=n.call(r,e),o=0,s=t.length;s>o;){var u=o+s>>>1;n.call(r,t[u])<i?o=u+1:s=u}return o},T.toArray=function(t){return t?T.isArray(t)?c.call(t):t.length===+t.length?T.map(t,T.identity):T.values(t):[]},T.size=function(t){return null==t?0:t.length===+t.length?t.length:T.keys(t).length},T.first=T.head=T.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:c.call(t,0,e)},T.initial=function(t,e,n){return c.call(t,0,t.length-(null==e||n?1:e))},T.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:c.call(t,Math.max(t.length-e,0))},T.rest=T.tail=T.drop=function(t,e,n){return c.call(t,null==e||n?1:e)},T.compact=function(t){return T.filter(t,T.identity)};var O=function(t,e,n){return e&&T.every(t,T.isArray)?l.apply(n,t):(A(t,function(t){T.isArray(t)||T.isArguments(t)?e?a.apply(n,t):O(t,e,n):n.push(t)}),n)};T.flatten=function(t,e){return O(t,e,[])},T.without=function(t){return T.difference(t,c.call(arguments,1))},T.uniq=T.unique=function(t,e,n,r){T.isFunction(e)&&(r=n,n=e,e=!1);var i=n?T.map(t,n,r):t,o=[],s=[];return A(i,function(n,r){(e?r&&s[s.length-1]===n:T.contains(s,n))||(s.push(n),o.push(t[r]))}),o},T.union=function(){return T.uniq(T.flatten(arguments,!0))},T.intersection=function(t){var e=c.call(arguments,1);return T.filter(T.uniq(t),function(t){return T.every(e,function(e){return T.indexOf(e,t)>=0})})},T.difference=function(t){var e=l.apply(o,c.call(arguments,1));return T.filter(t,function(t){return!T.contains(e,t)})},T.zip=function(){for(var t=T.max(T.pluck(arguments,"length").concat(0)),e=new Array(t),n=0;t>n;n++)e[n]=T.pluck(arguments,""+n);return e},T.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},T.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=T.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}if(j&&t.indexOf===j)return t.indexOf(e,n);for(;i>r;r++)if(t[r]===e)return r;return-1},T.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=null!=n;if(b&&t.lastIndexOf===b)return r?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var i=r?n:t.length;i--;)if(t[i]===e)return i;return-1},T.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=0,o=new Array(r);r>i;)o[i++]=t,t+=n;return o};var C=function(){};T.bind=function(t,e){var n,r;if(k&&t.bind===k)return k.apply(t,c.call(arguments,1));if(!T.isFunction(t))throw new TypeError;return n=c.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(c.call(arguments)));C.prototype=t.prototype;var i=new C;C.prototype=null;var o=t.apply(i,n.concat(c.call(arguments)));return Object(o)===o?o:i}},T.partial=function(t){var e=c.call(arguments,1);return function(){return t.apply(this,e.concat(c.call(arguments)))}},T.bindAll=function(t){var e=c.call(arguments,1);if(0===e.length)throw new Error("bindAll must be passed function names");return A(e,function(e){t[e]=T.bind(t[e],t)}),t},T.memoize=function(t,e){var n={};return e||(e=T.identity),function(){var r=e.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=t.apply(this,arguments)}},T.delay=function(t,e){var n=c.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},T.defer=function(t){return T.delay.apply(T,[t,1].concat(c.call(arguments,1)))},T.throttle=function(t,e,n){var r,i,o,s=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:new Date,s=null,o=t.apply(r,i)};return function(){var c=new Date;u||n.leading!==!1||(u=c);var l=e-(c-u);return r=this,i=arguments,0>=l?(clearTimeout(s),s=null,u=c,o=t.apply(r,i)):s||n.trailing===!1||(s=setTimeout(a,l)),o}},T.debounce=function(t,e,n){var r,i,o,s,u;return function(){o=this,i=arguments,s=new Date;var a=function(){var c=new Date-s;e>c?r=setTimeout(a,e-c):(r=null,n||(u=t.apply(o,i)))},c=n&&!r;return r||(r=setTimeout(a,e)),c&&(u=t.apply(o,i)),u}},T.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},T.wrap=function(t,e){return function(){var n=[t];return a.apply(n,arguments),e.apply(this,n)}},T.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},T.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},T.keys=x||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var n in t)T.has(t,n)&&e.push(n);return e},T.values=function(t){for(var e=T.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},T.pairs=function(t){for(var e=T.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},T.invert=function(t){for(var e={},n=T.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},T.functions=T.methods=function(t){var e=[];for(var n in t)T.isFunction(t[n])&&e.push(n);return e.sort()},T.extend=function(t){return A(c.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},T.pick=function(t){var e={},n=l.apply(o,c.call(arguments,1));return A(n,function(n){n in t&&(e[n]=t[n])}),e},T.omit=function(t){var e={},n=l.apply(o,c.call(arguments,1));for(var r in t)T.contains(n,r)||(e[r]=t[r]);return e},T.defaults=function(t){return A(c.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t},T.clone=function(t){return T.isObject(t)?T.isArray(t)?t.slice():T.extend({},t):t},T.tap=function(t,e){return e(t),t};var S=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof T&&(t=t._wrapped),e instanceof T&&(e=e._wrapped);var i=f.call(t);if(i!=f.call(e))return!1;switch(i){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var o=n.length;o--;)if(n[o]==t)return r[o]==e;var s=t.constructor,u=e.constructor;if(s!==u&&!(T.isFunction(s)&&s instanceof s&&T.isFunction(u)&&u instanceof u))return!1;n.push(t),r.push(e);var a=0,c=!0;if("[object Array]"==i){if(a=t.length,c=a==e.length)for(;a--&&(c=S(t[a],e[a],n,r)););}else{for(var l in t)if(T.has(t,l)&&(a++,!(c=T.has(e,l)&&S(t[l],e[l],n,r))))break;if(c){for(l in e)if(T.has(e,l)&&!a--)break;c=!a}}return n.pop(),r.pop(),c};T.isEqual=function(t,e){return S(t,e,[],[])},T.isEmpty=function(t){if(null==t)return!0;if(T.isArray(t)||T.isString(t))return 0===t.length;for(var e in t)if(T.has(t,e))return!1;return!0},T.isElement=function(t){return!(!t||1!==t.nodeType)},T.isArray=w||function(t){return"[object Array]"==f.call(t)},T.isObject=function(t){return t===Object(t)},A(["Arguments","Function","String","Number","Date","RegExp"],function(t){T["is"+t]=function(e){return f.call(e)=="[object "+t+"]"}}),T.isArguments(arguments)||(T.isArguments=function(t){return!(!t||!T.has(t,"callee"))}),"function"!=typeof/./&&(T.isFunction=function(t){return"function"==typeof t}),T.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},T.isNaN=function(t){return T.isNumber(t)&&t!=+t},T.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==f.call(t)},T.isNull=function(t){return null===t},T.isUndefined=function(t){return void 0===t},T.has=function(t,e){return p.call(t,e)},T.noConflict=function(){return t._=r,this},T.identity=function(t){return t},T.times=function(t,e,n){for(var r=Array(Math.max(0,t)),i=0;t>i;i++)r[i]=e.call(n,i);return r},T.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))};var H={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};H.unescape=T.invert(H.escape);var B={escape:new RegExp("["+T.keys(H.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(H.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(t){T[t]=function(e){return null==e?"":(""+e).replace(B[t],function(e){return H[t][e]})}}),T.result=function(t,e){if(null==t)return void 0;var n=t[e];return T.isFunction(n)?n.call(t):n},T.mixin=function(t){A(T.functions(t),function(e){var n=T[e]=t[e];T.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),U.call(this,n.apply(T,t))}})};var q=0;T.uniqueId=function(t){var e=++q+"";return t?t+e:e},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var M=/(.)^/,V={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},N=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(t,e,n){var r;n=T.defaults({},n,T.templateSettings);var i=new RegExp([(n.escape||M).source,(n.interpolate||M).source,(n.evaluate||M).source].join("|")+"|$","g"),o=0,s="__p+='";t.replace(i,function(e,n,r,i,u){return s+=t.slice(o,u).replace(N,function(t){return"\\"+V[t]}),n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(s+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(s+="';\n"+i+"\n__p+='"),o=u+e.length,e}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{r=new Function(n.variable||"obj","_",s)}catch(u){throw u.source=s,u}if(e)return r(e,T);var a=function(t){return r.call(this,t,T)};return a.source="function("+(n.variable||"obj")+"){\n"+s+"}",a},T.chain=function(t){return T(t).chain()};var U=function(t){return this._chain?T(t).chain():t};T.mixin(T),A(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=o[t];T.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],U.call(this,n)}}),A(["concat","join","slice"],function(t){var e=o[t];T.prototype[t]=function(){return U.call(this,e.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this)},{}],5:[function(t){!function(e){var n=e._||t("underscore"),r=Array.prototype.slice,i=Array.prototype.concat,o=function(t){return null!=t};n.mixin({cat:function(){return n.reduce(arguments,function(t,e){return n.isArguments(e)?i.call(t,r.call(e)):i.call(t,e)},[])},cons:function(t,e){return n.cat([t],e)},partition:function(t,e,r){var i=function(t){if(null==t)return[];var o=n.take(t,e);return e===n.size(o)?n.cons(o,i(n.drop(t,e))):r?[n.take(n.cat(o,r),e)]:[]};return i(t)},partitionAll:function(t,e,r){r=null!=r?r:e;var i=function(t,e,r){return n.isEmpty(t)?[]:n.cons(n.take(t,e),i(n.drop(t,r),e,r))};return i(t,e,r)},mapcat:function(t,e){return n.cat.apply(null,n.map(t,e))},interpose:function(t,e){if(!n.isArray(t))throw new TypeError;var i=n.size(t);return 0===i?t:1===i?t:r.call(n.mapcat(t,function(t){return n.cons(t,[e])}),0,-1)},weave:function(){return n.some(arguments)?1==arguments.length?arguments[0]:n.filter(n.flatten(n.zip.apply(null,arguments),!0),function(t){return null!=t}):[]},interleave:n.weave,repeat:function(t,e){return n.times(t,function(){return e})},cycle:function(t,e){return n.flatten(n.times(t,function(){return e}),!0)},splitAt:function(t,e){return[n.take(t,e),n.drop(t,e)]},iterateUntil:function(t,e,n){for(var r=[],i=t(n);e(i);)r.push(i),i=t(i);return r},takeSkipping:function(t,e){var r=[],i=n.size(t);if(0>=e)return[];if(1===e)return t;for(var o=0;i>o;o+=e)r.push(t[o]);return r},reductions:function(t,e,r){var i=[],o=r;return n.each(t,function(n,r){o=e(o,t[r]),i.push(o)}),i},keepIndexed:function(t,e){return n.filter(n.map(n.range(n.size(t)),function(n){return e(n,t[n])}),o)},reverseOrder:function(t){if("string"==typeof t)throw new TypeError("Strings cannot be reversed by _.reverseOrder");return r.call(t).reverse()}})}(this)},{underscore:4}],6:[function(t){!function(e){var n=e._||t("underscore"),r=Array.prototype.slice,i=Array.prototype.concat,o=function(t){return null!=t},s=function(t){return t!==!1&&o(t)},u=function(t){return n.isArray(t)||n.isArguments(t)};n.mixin({second:function(t,e,n){return null==t?void 0:null==e||n?t[1]:r.call(t,1,e)},third:function(t,e,n){return null==t?void 0:null==e||n?t[2]:r.call(t,2,e)},nth:function(t,e,n){return null==e||n?void 0:t[e]},takeWhile:function(t,e){if(!u(t))throw new TypeError;for(var r=n.size(t),i=0;r>i&&s(e(t[i]));i++);return n.take(t,i)},dropWhile:function(t,e){if(!u(t))throw new TypeError;for(var r=n.size(t),i=0;r>i&&s(e(t[i]));i++);return n.drop(t,i)},splitWith:function(t,e){return[n.takeWhile(t,e),n.dropWhile(t,e)]},partitionBy:function(t,e){if(n.isEmpty(t)||!o(t))return[];var r=n.first(t),s=e(r),u=i.call([r],n.takeWhile(n.rest(t),function(t){return n.isEqual(s,e(t))}));return i.call([u],n.partitionBy(n.drop(t,n.size(u)),e))},best:function(t,e){return n.reduce(t,function(t,n){return e(t,n)?t:n})},keep:function(t,e){if(!u(t))throw new TypeError("expected an array as the first argument");return n.filter(n.map(t,function(t){return e(t)}),o)}})}(this)},{underscore:4}],7:[function(t){!function(e){function n(t){return o.isElement(t)?t.children:t}function r(t,e,n,r,i,c){var l=[];return function f(t,p,h){if(o.isObject(t)){if(l.indexOf(t)>=0)throw new TypeError(a);l.push(t)}if(n){var d=n.call(i,t,p,h);if(d===u)return u;if(d===s)return}var v,_=e(t);if(o.isObject(_)&&!o.isEmpty(_)){c&&(v=o.isArray(t)?[]:{});var y=o.any(_,function(e,n){var r=f(e,n,t);return r===u?!0:void(v&&(v[n]=r))});if(y)return u}return r?r.call(i,t,p,h,v):void 0}(t)}function i(t,e,n){var r=[];return this.preorder(t,function(t,i){return n||i!=e?void(o.has(t,e)&&(r[r.length]=t[e])):s}),r}var o=e._||t("underscore"),s={},u={},a="Not a tree: same object found in two different branches",c={find:function(t,e,n){var r;return this.preorder(t,function(t,i,o){return e.call(n,t,i,o)?(r=t,u):void 0},n),r},filter:function(t,e,n,r){var i=[];return null==t?i:(e(t,function(t,e,o){n.call(r,t,e,o)&&i.push(t)},null,this._traversalStrategy),i)},reject:function(t,e,n,r){return this.filter(t,e,function(t,e,i){return!n.call(r,t,e,i)})},map:function(t,e,n,r){var i=[];return e(t,function(t,e,o){i[i.length]=n.call(r,t,e,o)},null,this._traversalStrategy),i},pluck:function(t,e){return i.call(this,t,e,!1)},pluckRec:function(t,e){return i.call(this,t,e,!0)},postorder:function(t,e,n,i){i=i||this._traversalStrategy,r(t,i,null,e,n)},preorder:function(t,e,n,i){i=i||this._traversalStrategy,r(t,i,e,null,n)},reduce:function(t,e,n,i){var o=function(t,r,i,o){return e(o||n,t,r,i)};return r(t,this._traversalStrategy,null,o,i,!0)}};c.collect=c.map,c.detect=c.find,c.select=c.filter,o.walk=function(t){var e=o.clone(c);return o.bindAll.apply(null,[e].concat(o.keys(e))),e._traversalStrategy=t||n,e},o.extend(o.walk,o.walk())}(this)},{underscore:4}],8:[function(t){!function(e){function n(t){return function(){if(1===arguments.length)return t.apply(this,arguments);throw new RangeError("Only a single argument may be accepted.")}}var r=e._||t("underscore"),i=function(){function t(e,r,i,o,s,u){return u===!0?o.unshift(s):o.push(s),o.length==i?e.apply(r,o):n(function(){return t(e,r,i,o.slice(0),arguments[0],u)})}return function(e,r){var i=this;return n(function(){return t(e,i,e.length,[],arguments[0],r)})}}(),o=function(){var t=[];return function(e){if("function"!=typeof e)throw new Error("Argument 1 must be a function.");var n=e.length;return void 0===t[n]&&(t[n]=function(t){return function(){if(arguments.length!==n)throw new RangeError(n+" arguments must be applied.");return t.apply(this,arguments)}}),t[n](e)}}();r.mixin({fix:function(t){var e=r.rest(arguments),n=function(){for(var n=e.slice(),i=0,o=0;o<n.length||i<arguments.length;o++)n[o]===r&&(n[o]=arguments[i++]);return t.apply(null,n)};return n._original=t,n},unary:function(t){return function(e){return t.call(this,e)}},binary:function(t){return function(e,n){return t.call(this,e,n)}},ternary:function(t){return function(e,n,r){return t.call(this,e,n,r)}},quaternary:function(t){return function(e,n,r,i){return t.call(this,e,n,r,i)}},curry:i,rCurry:function(t){return i.call(this,t,!0)},curry2:function(t){return n(function(e){return n(function(n){return t.call(this,e,n)})})},curry3:function(t){return n(function(e){return n(function(r){return n(function(n){return t.call(this,e,r,n)})})})},rcurry2:function(t){return n(function(e){return n(function(n){return t.call(this,n,e)})})},rcurry3:function(t){return n(function(e){return n(function(r){return n(function(n){return t.call(this,n,r,e)})})})},enforce:o}),r.arity=function(){var t={};return function e(n,r){if(null==t[n]){for(var i=new Array(n),o=0;n>o;++o)i[o]="__"+o;var s=i.join(),u="return function ("+s+") { return fun.apply(this, arguments); };";t[n]=new Function(["fun"],u)}return null==r?function(t){return e(n,t)}:t[n](r)}}()}(this)},{underscore:4}],9:[function(t){!function(e){function n(t,e){return r.arity(t.length,function(){return t.apply(this,a.call(arguments,e))})}var r=e._||t("underscore"),i=function(t){return null!=t},o=function(t){return t!==!1&&i(t)},s=[].reverse,u=[].slice,a=[].map,c=function(t){return function(e,n){return 1===arguments.length?function(n){return t(e,n)}:t(e,n)}};r.mixin({always:function(t){return function(){return t}},pipeline:function(){var t=r.isArray(arguments[0])?arguments[0]:arguments;return function(e){return r.reduce(t,function(t,e){return e(t)},e)}},conjoin:function(){var t=arguments;return function(e){return r.every(e,function(e){return r.every(t,function(t){return t(e)})})}},disjoin:function(){var t=arguments;return function(e){return r.some(e,function(e){return r.some(t,function(t){return t(e)})})}},comparator:function(t){return function(e,n){return o(t(e,n))?-1:o(t(n,e))?1:0}},complement:function(t){return function(){return!t.apply(null,arguments)}},splat:function(t){return function(e){return t.apply(null,e)}},unsplat:function(t){var e=t.length;return 1>e?t:1===e?function(){return t.call(this,u.call(arguments,0))}:function(){var n=arguments.length,r=u.call(arguments,0,e-1),i=Math.max(e-n-1,0),o=new Array(i),s=u.call(arguments,t.length-1);return t.apply(this,r.concat(o).concat([s]))}},unsplatl:function(t){var e=t.length;return 1>e?t:1===e?function(){return t.call(this,u.call(arguments,0))}:function(){var n=arguments.length,r=u.call(arguments,Math.max(n-e+1,0)),i=u.call(arguments,0,Math.max(n-e+1,0));return t.apply(this,[i].concat(r))}},mapArgs:c(n),juxt:function(){var t=arguments;return function(){var e=arguments;return r.map(t,function(t){return t.apply(null,e)})}},fnull:function(t){var e=r.rest(arguments);return function(){for(var n=r.toArray(arguments),o=r.size(e),s=0;o>s;s++)i(n[s])||(n[s]=e[s]);return t.apply(null,n)}},flip2:function(t){return function(){var e=u.call(arguments);return e[0]=arguments[1],e[1]=arguments[0],t.apply(null,e)}},flip:function(t){return function(){var e=s.call(arguments);return t.apply(null,e)}},functionalize:function(t){return function(e){return t.apply(e,r.rest(arguments))}},methodize:function(t){return function(){return t.apply(null,r.cons(this,arguments))}},k:r.always,t:r.pipeline}),r.unsplatr=r.unsplat,r.mapArgsWith=c(r.flip(n)),r.bound=function(t,e){var n=t[e];if(!r.isFunction(n))throw new TypeError("Expected property to be a function");return r.bind(n,t)}}(this)},{underscore:4}],10:[function(t){!function(e){var n=e._||t("underscore"),r=Array.prototype.slice;
n.mixin({attempt:function(t,e){if(null==t)return void 0;var i=t[e],o=r.call(arguments,2);return n.isFunction(i)?i.apply(t,o):void 0}})}(this)},{underscore:4}],11:[function(t){!function(e){function n(t){return function(e){return t.call(this,e)}}function r(t,e,n){var r,i;for(r=void 0!==n?n:t(),i=t();null!=i;)r=e.call(i,r,i),i=t();return r}function i(t,e){var n=x;return function(){return n===x?n=t:null!=n&&(n=e.call(n,n)),n}}function o(t,e){var n,r,i=t;return function(){return null!=i?(n=e.call(i,i),r=n[1],i=null!=r?n[0]:void 0,r):void 0}}function s(t,e,n){var r=n;return function(){var n=t();return null==n?n:r=void 0===r?n:e.call(n,r,n)}}function u(t,e,n){var r,i,o=n;return function(){return i=t(),null==i?i:void 0===o?o=i:(r=e.call(i,o,i),o=r[0],r[1])}}function a(t,e){return function(){var n;return n=t(),null!=n?e.call(n,n):void 0}}function c(t,e){var n=null;return function(){var r,i;if(null==n){if(i=t(),null==i)return void(n=null);n=e.call(i,i)}for(;null==r;)if(r=n(),null==r){if(i=t(),null==i)return void(n=null);n=e.call(i,i)}return r}}function l(t,e){return function(){var n;for(n=t();null!=n;){if(e.call(n,n))return n;n=t()}return void 0}}function f(t,e){return l(t,function(t){return!e(t)})}function p(t,e){return l(t,e)()}function h(t,e,n){for(var r=0;e-->0;)t();return null!=n?function(){return++r<=n?t():void 0}:t}function d(t,e){return h(t,null==e?1:e)}function v(t,e){return h(t,0,null==e?1:e)}function _(t){var e=0;return function(){return t[e++]}}function y(t){var e,n,r;return e=0,r=[],n=function(){var i,o;return i=t[e++],i instanceof Array?(r.push({array:t,index:e}),t=i,e=0,n()):void 0===i?r.length>0?(o=r.pop(),t=o.array,e=o.index,n()):void 0:i}}function m(t){return function(){return t}}function g(t,e,n){return function(){var r;return t>e?void 0:(r=t,t+=n,r)}}function j(t,e,n){return function(){var r;return e>t?void 0:(r=t,t-=n,r)}}function b(t,e,n){return null==t?g(1,1/0,1):null==e?g(t,1/0,1):null==n?e>=t?g(t,e,1):j(t,e,1):n>0?g(t,e,n):0>n?j(t,e,Math.abs(n)):k(t)}var w=e._||t("underscore"),x={},T=n(b);w.iterators={accumulate:s,accumulateWithReturn:u,foldl:r,reduce:r,unfold:i,unfoldWithReturn:o,map:a,mapcat:c,select:l,reject:f,filter:l,find:p,slice:h,drop:d,take:v,List:_,Tree:y,constant:m,K:m,numbers:T,range:b}}(this,void 0)},{underscore:4}],12:[function(t){!function(e){var n=e._||t("underscore");n.mixin({isInstanceOf:function(t,e){return t instanceof e},isAssociative:function(t){return n.isArray(t)||n.isObject(t)||n.isArguments(t)},isIndexed:function(t){return n.isArray(t)||n.isString(t)||n.isArguments(t)},isSequential:function(t){return n.isArray(t)||n.isArguments(t)},isPlainObject:function(t){return n.isObject(t)&&t.constructor===e.Object},isZero:function(t){return 0===t},isEven:function(t){return n.isFinite(t)&&0===(1&t)},isOdd:function(t){return n.isFinite(t)&&!n.isEven(t)},isPositive:function(t){return t>0},isNegative:function(t){return 0>t},isValidDate:function(t){return n.isDate(t)&&!n.isNaN(t.getTime())},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},isInteger:function(t){return n.isNumeric(t)&&t%1===0},isFloat:function(t){return n.isNumeric(t)&&!n.isInteger(t)},isJSON:function(t){try{JSON.parse(t)}catch(e){return!1}return!0},isIncreasing:function(){var t=n.size(arguments);if(1===t)return!0;if(2===t)return arguments[0]<arguments[1];for(var e=1;t>e;e++)if(arguments[e-1]>=arguments[e])return!1;return!0},isDecreasing:function(){var t=n.size(arguments);if(1===t)return!0;if(2===t)return arguments[0]>arguments[1];for(var e=1;t>e;e++)if(arguments[e-1]<=arguments[e])return!1;return!0}})}(this)},{underscore:4}],13:[function(t){!function(e){var n=e._||t("underscore"),r=(Array.prototype.slice,Array.prototype.concat),i=function(t){return null!=t},o=function(t){return t!==!1&&i(t)},s=function(t){return n.isArray(t)||n.isObject(t)},u=function(t){return function(e){return function(n){return t(n,e)}}};n.mixin({merge:function(){var t=n.some(arguments)?{}:null;return o(t)&&n.extend.apply(null,r.call([t],n.toArray(arguments))),t},renameKeys:function(t,e){return n.reduce(e,function(e,n,r){return i(t[r])?(e[n]=t[r],e):e},n.omit.apply(null,r.call([t],n.keys(e))))},snapshot:function(t){if(null==t||"object"!=typeof t)return t;var e=new t.constructor;for(var r in t)t.hasOwnProperty(r)&&(e[r]=n.snapshot(t[r]));return e},updatePath:function(t,e,r,o){if(!s(t))throw new TypeError("Attempted to update a non-associative object.");if(!i(r))return e(t);var u=n.isArray(r),a=u?r:[r],c=u?n.snapshot(t):n.clone(t),l=n.last(a),f=c;return n.each(n.initial(a),function(t){o&&!n.has(f,t)&&(f[t]=n.clone(o)),f=f[t]}),f[l]=e(f[l]),c},setPath:function(t,e,r,o){if(!i(r))throw new TypeError("Attempted to set a property at a null path.");return n.updatePath(t,function(){return e},r,o)},frequencies:u(n.countBy)(n.identity)})}(this)},{underscore:4}],14:[function(t){!function(e){{var n=e._||t("underscore"),r=Array.prototype.concat,i=Array.prototype;i.slice}n.mixin({accessor:function(t){return function(e){return e&&e[t]}},dictionary:function(t){return function(e){return t&&e&&t[e]}},selectKeys:function(t,e){return n.pick.apply(null,r.call([t],e))},kv:function(t,e){return n.has(t,e)?[e,t[e]]:void 0},getPath:function o(t,e){return"string"==typeof e&&(e=e.split(".")),void 0===t?void 0:0===e.length?t:null===t?void 0:o(t[n.first(e)],n.rest(e))},hasPath:function s(t,e){"string"==typeof e&&(e=e.split("."));var r=e.length;return null==t&&r>0?!1:e[0]in t?1===r?!0:s(t[n.first(e)],n.rest(e)):!1},pickWhen:function(t,e){var r={};return n.each(t,function(n,i){e(t[i])&&(r[i]=t[i])}),r},omitWhen:function(t,e){return n.pickWhen(t,function(t){return!e(t)})}})}(this)},{underscore:4}],15:[function(t){!function(e){var n=e._||t("underscore");n.mixin({exists:function(t){return null!=t},truthy:function(t){return t!==!1&&n.exists(t)},falsey:function(t){return!n.truthy(t)},not:function(t){return!t},firstExisting:function(){for(var t=0;t<arguments.length;t++)if(null!=arguments[t])return arguments[t]}})}(this)},{underscore:4}],16:[function(t){!function(e){function n(t){return function(){return E.reduce(arguments,t)}}function r(t){return function(){for(var e,n=0;n<arguments.length-1;n++)if(e=t(arguments[n],arguments[n+1]),e===!1)return e;return e}}function i(t){return function(){return!t.apply(this,arguments)}}function o(t,e){return t+e}function s(t,e){return t-e}function u(t,e){return t*e}function a(t,e){return t/e}function c(t,e){return t%e}function l(t){return++t}function f(t){return--t}function p(t){return-t}function h(t,e){return t&e}function d(t,e){return t|e}function v(t,e){return t^e}function _(t,e){return t<<e}function y(t,e){return t>>e}function m(t,e){return t>>>e}function g(t){return~t}function j(t,e){return t==e}function b(t,e){return t===e}function w(t){return!t}function x(t,e){return t>e}function k(t,e){return e>t}function T(t,e){return t>=e}function A(t,e){return e>=t}var E=e._||t("underscore");E.mixin({add:n(o),sub:n(s),mul:n(u),div:n(a),mod:c,inc:l,dec:f,neg:p,eq:r(j),seq:r(b),neq:i(r(j)),sneq:i(r(b)),not:w,gt:r(x),lt:r(k),gte:r(T),lte:r(A),bitwiseAnd:n(h),bitwiseOr:n(d),bitwiseXor:n(v),bitwiseNot:g,bitwiseLeft:n(_),bitwiseRight:n(y),bitwiseZ:n(m)})}(this)},{underscore:4}],17:[function(t){!function(e){var n=e._||t("underscore");n.mixin({explode:function(t){return t.split("")},implode:function(t){return t.join("")},camelCase:function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},toDash:function(t){return t=t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}),"-"==t.charAt(0)?t.substr(1):t},strContains:function(t,e){if("string"!=typeof t)throw new TypeError;return-1!=t.indexOf(e)}})}(this)},{underscore:4}],18:[function(t){!function(e){var n=e._||t("underscore");n.mixin({done:function(t){var e=n(t);return e.stopTrampoline=!0,e},trampoline:function(t){for(var e=t.apply(t,n.rest(arguments));n.isFunction(e)&&(e=e(),!(e instanceof n&&e.stopTrampoline)););return e.value()}})}(this)},{underscore:4}],19:[function(e,n,r){var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};!function(e){if("object"==typeof r)n.exports=e();else if("function"==typeof t&&t.amd)t(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof i?o=i:"undefined"!=typeof self&&(o=self),o.questor=e()}}(function(){return function t(n,r,i){function o(u,a){if(!r[u]){if(!n[u]){var c="function"==typeof e&&e;if(!a&&c)return c(u,!0);if(s)return s(u,!0);throw new Error("Cannot find module '"+u+"'")}var l=r[u]={exports:{}};n[u][0].call(l.exports,function(t){var e=n[u][1][t];return o(e?e:t)},l,l.exports,t,n,r,i)}return r[u].exports}for(var s="function"==typeof e&&e,u=0;u<i.length;u++)o(i[u]);return o}({1:[function(t,e){"use strict";function n(t,e){return e||(e={}),o({headers:e.headers,method:e.method,uri:t}).spread(function(t){var e={body:t.body,headers:r(t.getAllResponseHeaders()),status:t.statusCode};if(e.status>=300){var n=new Error(e.body);throw n.body=e.body,n.headers=e.headers,n.status=e.status,n}return e})}function r(t){var e={};if(!t)return e;for(var n=t.split("\r\n"),r=0;r<n.length;r++){var i=n[r],o=i.indexOf(": ")||i.indexOf(":");if(o>0){var s=i.substring(0,o),u=i.substring(o+2);e[s]=u}}return e}var i=t("bluebird"),o=i.promisify(t("xhr"));e.exports=n},{bluebird:5,xhr:41}],2:[function(t,e){"use strict";e.exports=function(e,n,r){function i(t,e,r){var i=n(t,o,r,e===!0&&t._isBound()?t._boundTo:void 0),s=i.promise();return s.isRejected()?s:(i.setHowMany(1),i.setUnwrap(),i.init(),s)}var o=t("./some_promise_array.js")(r);t("./assert.js"),e.any=function(t){return i(t,!1,e.any)},e.prototype.any=function(){return i(this,!0,this.any)}}},{"./assert.js":3,"./some_promise_array.js":36}],3:[function(t,e){"use strict";e.exports=function(){var t=function(){function t(t){this.constructor$(t),this.message=t,this.name="AssertionError"}return t.prototype=new Error,t.prototype.constructor=t,t.prototype.constructor$=Error,t}();return function e(n,r){if(n!==!0){var i=new t(r);throw Error.captureStackTrace&&Error.captureStackTrace(i,e),console&&console.error&&console.error(i.stack+""),i}}}()},{}],4:[function(t,e){"use strict";function n(){this._isTickUsed=!1,this._length=0,this._lateBuffer=new i,this._functionBuffer=new i(75e3);var t=this;this.consumeFunctionBuffer=function(){t._consumeFunctionBuffer()}}var r=(t("./assert.js"),t("./schedule.js")),i=t("./queue.js"),o=t("./util.js").errorObj,s=t("./util.js").tryCatch1;n.prototype.haveItemsQueued=function(){return this._length>0},n.prototype.invokeLater=function(t,e,n){this._lateBuffer.push(t,e,n),this._queueTick()},n.prototype.invoke=function(t,e,n){var r=this._functionBuffer;r.push(t,e,n),this._length=r.length(),this._queueTick()},n.prototype._consumeFunctionBuffer=function(){for(var t=this._functionBuffer;t.length()>0;){var e=t.shift(),n=t.shift(),r=t.shift();e.call(n,r)}this._reset(),this._consumeLateBuffer()},n.prototype._consumeLateBuffer=function(){for(var t=this._lateBuffer;t.length()>0;){var e=t.shift(),n=t.shift(),r=t.shift(),i=s(e,n,r);if(i===o)throw this._queueTick(),i.e}},n.prototype._queueTick=function(){this._isTickUsed||(r(this.consumeFunctionBuffer),this._isTickUsed=!0)},n.prototype._reset=function(){this._isTickUsed=!1,this._length=0},e.exports=new n},{"./assert.js":3,"./queue.js":29,"./schedule.js":32,"./util.js":40}],5:[function(t,e){"use strict";var n=t("./promise.js")();e.exports=n},{"./promise.js":21}],6:[function(t,e){"use strict";e.exports=function(t){function e(t){var e="string"==typeof this?this:""+this;return t[e]}t.prototype.call=function(t){for(var e=arguments.length,n=new Array(e-1),r=1;e>r;++r)n[r-1]=arguments[r];return this._then(function(e){return e[t].apply(e,n)},void 0,void 0,void 0,void 0,this.call)},t.prototype.get=function(t){return this._then(e,void 0,void 0,t,void 0,this.get)}}},{}],7:[function(t,e){"use strict";e.exports=function(e,n){var r=t("./errors.js"),i=t("./async.js"),o=(t("./assert.js"),r.CancellationError),s={};e.prototype._cancel=function(){if(!this.isCancellable())return this;var t;if(void 0!==(t=this._cancellationParent))return void t.cancel(s);var e=new o;this._attachExtraTrace(e),this._rejectUnchecked(e)},e.prototype.cancel=function(t){return this.isCancellable()?t===s?(this._cancel(),this):(i.invokeLater(this._cancel,this,void 0),this):this},e.prototype.cancellable=function(){return this._cancellable()?this:(this._setCancellable(),this._cancellationParent=void 0,this)},e.prototype.uncancellable=function(){var t=new e(n);return t._setTrace(this.uncancellable,this),t._follow(this),t._unsetCancellable(),this._isBound()&&t._setBoundTo(this._boundTo),t},e.prototype.fork=function(t,e,n){var r=this._then(t,e,n,void 0,void 0,this.fork);return r._setCancellable(),r._cancellationParent=void 0,r}}},{"./assert.js":3,"./async.js":4,"./errors.js":11}],8:[function(t,e){"use strict";e.exports=function(){function e(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t.toString();var r=/\[object [a-zA-Z0-9$_]+\]/;if(r.test(e))try{var i=JSON.stringify(t);e=i}catch(o){}0===e.length&&(e="(empty array)")}return"(<"+n(e)+">, no stack trace)"}function n(t){var e=41;return t.length<e?t:t.substr(0,e-3)+"..."}function r(t,e){this.captureStackTrace(t,e)}var i=(t("./assert.js"),t("./util.js").inherits),o=t("./es5.js").defineProperty,s=new RegExp("\\b(?:[\\w.]*Promise(?:Array|Spawn)?\\$_\\w+|tryCatch(?:1|2|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"),u=null,a=null,c=!1;i(r,Error),r.prototype.captureStackTrace=function(t,e){l(this,t,e)},r.possiblyUnhandledRejection=function(t){if("object"==typeof console){var e;if("object"==typeof t||"function"==typeof t){var n=t.stack;e="Possibly unhandled "+a(n,t)}else e="Possibly unhandled "+String(t);"function"==typeof console.error||"object"==typeof console.error?console.error(e):("function"==typeof console.log||"object"==typeof console.error)&&console.log(e)}},c="CapturedTrace$captureStackTrace"!==r.prototype.captureStackTrace.name,r.combine=function(t,e){for(var n=t.length-1,r=e.length-1;r>=0;--r){var i=e[r];if(t[n]!==i)break;t.pop(),n--}t.push("From previous event:");for(var o=t.concat(e),a=[],r=0,c=o.length;c>r;++r)s.test(o[r])||r>0&&!u.test(o[r])&&"From previous event:"!==o[r]||a.push(o[r]);return a},r.isSupported=function(){return"function"==typeof l};var l=function f(){if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){u=/^\s*at\s*/,a=function(t,n){return"string"==typeof t?t:void 0!==n.name&&void 0!==n.message?n.name+". "+n.message:e(n)};var t=Error.captureStackTrace;return function(e,n){t(e,n)}}var n=new Error;if(!c&&"string"==typeof n.stack&&"function"==typeof"".startsWith&&n.stack.startsWith("stackDetection@")&&"stackDetection"===f.name){o(Error,"stackTraceLimit",{writable:!0,enumerable:!1,configurable:!1,value:25}),u=/@/;var r=/[@\n]/;return a=function(t,n){return"string"==typeof t?n.name+". "+n.message+"\n"+t:void 0!==n.name&&void 0!==n.message?n.name+". "+n.message:e(n)},function(t,e){var n,i=e.name,o=(new Error).stack,s=o.split(r),u=s.length;for(n=0;u>n&&s[n]!==i;n+=2);s=s.slice(n+2),u=s.length-2;var a="";for(n=0;u>n;n+=2)a+=s[n],a+="@",a+=s[n+1],a+="\n";t.stack=a}}return a=function(t,n){return"string"==typeof t?t:"object"!=typeof n&&"function"!=typeof n||void 0===n.name||void 0===n.message?e(n):n.name+". "+n.message},null}();return r}},{"./assert.js":3,"./es5.js":13,"./util.js":40}],9:[function(t,e){"use strict";e.exports=function(e){function n(t,e,n){this._instances=t,this._callback=e,this._promise=n}function r(t,e){var n={},r=o(t,n,e);if(r===s)return r;var i=u(n);return i.length?(s.e=new TypeError("Catch filter must inherit from Error or be a simple predicate function"),s):r}var i=t("./util.js"),o=i.tryCatch1,s=i.errorObj,u=t("./es5.js").keys;return n.prototype.doFilter=function(t){for(var n=this._callback,i=this._promise,u=i._isBound()?i._boundTo:void 0,a=0,c=this._instances.length;c>a;++a){var l=this._instances[a],f=l===Error||null!=l&&l.prototype instanceof Error;if(f&&t instanceof l){var p=o(n,u,t);return p===s?(e.e=p.e,e):p}if("function"==typeof l&&!f){var h=r(l,t);if(h===s){this._promise._attachExtraTrace(s.e),t=s.e;break}if(h){var p=o(n,u,t);return p===s?(e.e=p.e,e):p}}}return e.e=t,e},n}},{"./es5.js":13,"./util.js":40}],10:[function(t,e){"use strict";var n=t("./util.js"),r=(t("./assert.js"),n.isPrimitive),i=n.wrapsPrimitiveReceiver;e.exports=function(t){var e=function(){return this},n=function(){throw this},o=function(t,e){return 1===e?function(){throw t}:2===e?function(){return t}:void 0};t.prototype["return"]=t.prototype.thenReturn=function(t){return i&&r(t)?this._then(o(t,2),void 0,void 0,void 0,void 0,this.thenReturn):this._then(e,void 0,void 0,t,void 0,this.thenReturn)},t.prototype["throw"]=t.prototype.thenThrow=function(t){return i&&r(t)?this._then(o(t,1),void 0,void 0,void 0,void 0,this.thenThrow):this._then(n,void 0,void 0,t,void 0,this.thenThrow)}}},{"./assert.js":3,"./util.js":40}],11:[function(t,e){"use strict";function n(t){return(1&t)>0}function r(t){return(2&t)>0}function i(t){return 1|t}function o(t){return 2|t}function s(t){return-3&t}function u(t){var e;return g(t)&&void 0!==(e=t.__promiseHandled__)&&(t.__promiseHandled__=s(e)),t}function a(t){try{j(t,"__rejectionError__",d)}catch(e){}}function c(t){return null==t?!1:t instanceof d||t.__rejectionError__===d}function l(t){try{return j(t,"__promiseHandled__",0),!0}catch(e){return!1}}function f(t){return t instanceof b}function p(t){if(f(t)){var e=t.__promiseHandled__;return void 0===e?l(t):!n(e)}return!1}function h(t,e){function n(n){this.message="string"==typeof n?n:e,this.name=t,b.captureStackTrace&&b.captureStackTrace(this,this.constructor)}return m(n,b),n}function d(t){this.name="RejectionError",this.message=t,this.cause=t,t instanceof b?(this.message=t.message,this.stack=t.stack):b.captureStackTrace&&b.captureStackTrace(this,this.constructor)}var v=t("./global.js"),_=t("./es5.js").freeze,y=t("./util.js"),m=y.inherits,g=y.isObject,j=y.notEnumerableProp,b=v.Error,w=v.TypeError;"function"!=typeof w&&(w=h("TypeError","type error"));var x=v.RangeError;"function"!=typeof x&&(x=h("RangeError","range error"));var k=h("CancellationError","cancellation error"),T=h("TimeoutError","timeout error");m(d,b);var A="__BluebirdErrorTypes__",E=v[A];E||(E=_({CancellationError:k,TimeoutError:T,RejectionError:d}),j(v,A,E)),e.exports={Error:b,TypeError:w,RangeError:x,CancellationError:E.CancellationError,RejectionError:E.RejectionError,TimeoutError:E.TimeoutError,originatesFromRejection:c,markAsOriginatingFromRejection:a,attachDefaultState:l,ensureNotHandled:u,withHandledUnmarked:s,withHandledMarked:o,withStackAttached:i,isStackAttached:n,isHandled:r,canAttach:p}},{"./es5.js":13,"./global.js":17,"./util.js":40}],12:[function(t,e){"use strict";e.exports=function(e){function n(t){var n=new r(t),i=e.rejected(n),o=i._peekContext();return null!=o&&o._attachExtraTrace(n),i}var r=t("./errors.js").TypeError;return n}},{"./errors.js":11}],13:[function(t,e){function n(t){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e}function r(t,e,n){return t[e]=n.value,t}function i(t){return t}function o(t){try{return Object(t).constructor.prototype}catch(e){return l}}function s(t){try{return"[object Array]"===c.call(t)}catch(e){return!1}}var u=function(){"use strict";return void 0===this}();if(u)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,keys:Object.keys,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:u};else{var a={}.hasOwnProperty,c={}.toString,l={}.constructor.prototype;e.exports={isArray:s,keys:n,defineProperty:r,freeze:i,getPrototypeOf:o,isES5:u}}},{}],14:[function(t,e){"use strict";e.exports=function(e){function n(t){for(var e=this._settledValue,n=e.length,r=new Array(n),i=0,o=0;n>o;++o){var s=t[o];(void 0!==s||o in t)&&s&&(r[i++]=e[o])}return r.length=i,r}var r=(t("./assert.js"),t("./util.js").isArray,{ref:null});e.filter=function(t,i){return e.map(t,i,r)._then(n,void 0,void 0,r.ref,void 0,e.filter)},e.prototype.filter=function(t){return this.map(t,r)._then(n,void 0,void 0,r.ref,void 0,this.filter)}}},{"./assert.js":3,"./util.js":40}],15:[function(t,e){e.exports=function(e,n){function r(){return this}function i(){throw l(this),this}function o(t){return function(){return t}}function s(t){return function(){throw l(t),t}}function u(t,e,n){var a=f&&p(e);return n?t._then(a?r:o(e),h,void 0,e,void 0,u):t._then(a?i:s(e),h,void 0,e,void 0,u)}function a(t){var r=this.promise,i=this.handler,o=r._isBound()?i.call(r._boundTo):i();if(void 0!==o){var s=e._cast(o,a,void 0);if(e.is(s))return u(s,t,r.isFulfilled())}return r.isRejected()?(l(t),n.e=t,n):t}var c=t("./util.js"),l=t("./errors.js").ensureNotHandled,f=c.wrapsPrimitiveReceiver,p=c.isPrimitive,h=c.thrower;e.prototype.lastly=e.prototype["finally"]=function(t){if("function"!=typeof t)return this.then();var e={promise:this,handler:t};return this._then(a,a,void 0,e,void 0,this.lastly)}}},{"./errors.js":11,"./util.js":40}],16:[function(t,e){"use strict";e.exports=function(e,n,r){var i=t("./promise_spawn.js")(e,r),o=t("./errors.js"),s=o.TypeError;e.coroutine=function(t){if("function"!=typeof t)throw new s("generatorFunction must be a function");var e=i;return function n(){var r=t.apply(this,arguments),i=new e(void 0,void 0,n);return i._generator=r,i._next(void 0),i.promise()}},e.spawn=function(t){if("function"!=typeof t)return n("generatorFunction must be a function");var r=new i(t,this,e.spawn),o=r.promise();return r._run(e.spawn),o}}},{"./errors.js":11,"./promise_spawn.js":25}],17:[function(t,e){var n=t("__browserify_process"),r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e.exports=function(){return"undefined"!=typeof this?this:"undefined"!=typeof n&&"undefined"!=typeof r&&"string"==typeof n.execPath?r:"undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator&&null!==navigator&&"string"==typeof navigator.appName?void 0!==window.wrappedJSObject?window.wrappedJSObject:window:void 0}()},{__browserify_process:76}],18:[function(t,e){"use strict";e.exports=function(e,n,r,i){function o(t){var i=this,s=void 0;"function"!=typeof i&&(s=i.receiver,i=i.fn);var u=!1,a=new Array(t.length);if(void 0===s){for(var c=0,l=t.length;l>c;++c)if(void 0!==t[c]||c in t){var f=i(t[c],c,l);if(!u){var p=e._cast(f,o,void 0);if(p instanceof e){if(p.isFulfilled()){a[c]=p._settledValue;continue}u=!0,f=p}}a[c]=f}}else for(var c=0,l=t.length;l>c;++c)if(void 0!==t[c]||c in t){var f=i.call(s,t[c],c,l);if(!u){var p=e._cast(f,o,void 0);if(p instanceof e){if(p.isFulfilled()){a[c]=p._settledValue;continue}u=!0,f=p}}a[c]=f}return u?n(a,r,o,void 0).promise():a}function s(t,e,s,u,a){if("function"!=typeof e)return i("fn must be a function");s===!0&&t._isBound()&&(e={fn:e,receiver:t._boundTo});var c=n(t,r,u,s===!0&&t._isBound()?t._boundTo:void 0).promise();return void 0!==a&&(a.ref=c),c._then(o,void 0,void 0,e,void 0,u)}t("./assert.js"),e.prototype.map=function(t,e){return s(this,t,!0,this.map,e)},e.map=function(t,n,r){return s(t,n,!1,e.map,r)}}},{"./assert.js":3}],19:[function(t,e){"use strict";e.exports=function(e){function n(t){throw t}function r(t,e){var r=this,i=u(r,e,null,t);i===c&&s.invokeLater(n,void 0,i.e)}function i(t,e){var r=this,i=a(r,e,t);i===c&&s.invokeLater(n,void 0,i.e)}var o=t("./util.js"),s=t("./async.js"),u=(t("./assert.js"),o.tryCatch2),a=o.tryCatch1,c=o.errorObj;e.prototype.nodeify=function(t){return"function"==typeof t&&this._then(r,i,void 0,t,this._isBound()?this._boundTo:null,this.nodeify),this}}},{"./assert.js":3,"./async.js":4,"./util.js":40}],20:[function(t,e){"use strict";e.exports=function(e,n){var r=(t("./assert.js"),t("./util.js")),i=t("./async.js"),o=r.tryCatch1,s=r.errorObj;e.prototype.progressed=function(t){return this._then(void 0,void 0,t,void 0,void 0,this.progressed)},e.prototype._progress=function(t){this._isFollowingOrFulfilledOrRejected()||this._progressUnchecked(t)},e.prototype._progressHandlerAt=function(t){return 0===t?this._progressHandler0:this[t+2-5]},e.prototype._doProgressWith=function(t){var n=t.value,r=t.handler,i=t.promise,u=t.receiver;this._pushContext();var a=o(r,u,n);this._popContext(),a===s?null!=a.e&&"StopProgressPropagation"===a.e.name?a.e.__promiseHandled__=2:(i._attachExtraTrace(a.e),i._progress(a.e)):e.is(a)?a._then(i._progress,null,null,i,void 0,this._progress):i._progress(a)},e.prototype._progressUnchecked=function(t){if(this.isPending())for(var r=this._length(),o=0;r>o;o+=5){var s=this._progressHandlerAt(o),u=this._promiseAt(o);if(e.is(u))"function"==typeof s?i.invoke(this._doProgressWith,this,{handler:s,promise:u,receiver:this._receiverAt(o),value:t}):i.invoke(u._progress,u,t);else{var a=this._receiverAt(o);"function"==typeof s?s.call(a,t,u):e.is(a)&&a._isProxied()?a._progressUnchecked(t):n(a,u)&&a._promiseProgressed(t,u)}}}}},{"./assert.js":3,"./async.js":4,"./util.js":40}],21:[function(t,e){var n=t("__browserify_process");e.exports=function(){function e(t){return void 0===t?!1:t instanceof i}function r(t,e){return t instanceof d?e>=0:!1}function i(t){if("function"!=typeof t)throw new E("the promise constructor requires a resolver function");if(this.constructor!==i)throw new E("the promise constructor cannot be invoked directly");this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._settledValue=void 0,this._boundTo=void 0,t!==f&&this._resolveFromResolver(t)}function o(t,e,n){return s(t,d,n,e===!0&&t._isBound()?t._boundTo:void 0).promise()}function s(t,n,r,o){var u=null;return m(t)?u=t:(u=i._cast(t,r,void 0),u!==t?u._setBoundTo(o):e(u)||(u=null)),null!==u?new n(u,"function"==typeof r?r:s,o):{promise:function(){return U("expecting an array, a promise or a thenable")}}}var u=t("./global.js"),a=(t("./assert.js"),t("./util.js")),c=t("./async.js"),l=t("./errors.js"),f=function(){},p={},h={e:null},d=t("./promise_array.js")(i,f),v=t("./captured_trace.js")(),_=t("./catch_filter.js")(h),y=t("./promise_resolver.js"),m=a.isArray,g=a.notEnumerableProp,j=a.isObject,b=a.ensurePropertyExpansion,w=a.errorObj,x=a.tryCatch1,k=a.tryCatch2,T=a.tryCatchApply,A=l.RangeError,E=l.TypeError,F=l.CancellationError,P=l.TimeoutError,R=l.RejectionError,O=l.originatesFromRejection,C=l.markAsOriginatingFromRejection,S=l.ensureNotHandled,H=l.withHandledMarked,B=l.withStackAttached,q=l.isStackAttached,M=l.isHandled,V=l.canAttach,N=a.thrower,U=t("./errors_api_rejection")(i),L=function(){return new E("circular promise resolution chain")};i.prototype.bind=function(t){var e=new i(f);return I&&e._setTrace(this.bind,this),e._follow(this),e._setBoundTo(t),this._cancellable()&&(e._setCancellable(),e._cancellationParent=this),e},i.prototype.toString=function(){return"[object Promise]"},i.prototype.caught=i.prototype["catch"]=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),i=0;for(n=0;e-1>n;++n){var o=arguments[n];if("function"!=typeof o){var s=new E("A catch filter must be an error constructor or a filter function");return this._attachExtraTrace(s),void c.invoke(this._reject,this,s)}r[i++]=o}r.length=i,t=arguments[n],this._resetTrace(this.caught);var u=new _(r,t,this);return this._then(void 0,u.doFilter,void 0,u,void 0,this.caught)}return this._then(void 0,t,void 0,void 0,void 0,this.caught)},i.prototype.then=function(t,e,n){return this._then(t,e,n,void 0,void 0,this.then)},i.prototype.done=function(t,e,n){var r=this._then(t,e,n,void 0,void 0,this.done);r._setIsFinal()},i.prototype.spread=function(t,e){return this._then(t,e,void 0,p,void 0,this.spread)},i.prototype.isFulfilled=function(){return(268435456&this._bitField)>0},i.prototype.isRejected=function(){return(134217728&this._bitField)>0},i.prototype.isPending=function(){return!this.isResolved()},i.prototype.isResolved=function(){return(402653184&this._bitField)>0},i.prototype.isCancellable=function(){return!this.isResolved()&&this._cancellable()},i.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this._settledValue,t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this._settledValue,t.isRejected=!0),t},i.prototype.all=function(){return o(this,!0,this.all)},i.is=e,i.all=function(t){return o(t,!1,i.all)},i.join=function(){for(var t=arguments.length,e=new Array(t),n=0;t>n;++n)e[n]=arguments[n];return s(e,d,i.join,void 0).promise()},i.resolve=i.fulfilled=function(t,e){var n=new i(f);return I&&n._setTrace("function"==typeof e?e:i.resolve,void 0),n._tryFollow(t)?n:(n._cleanValues(),n._setFulfilled(),n._settledValue=t,n)},i.reject=i.rejected=function(t){var e=new i(f);return I&&e._setTrace(i.reject,void 0),C(t),e._cleanValues(),e._setRejected(),e._settledValue=t,e},i.prototype.error=function(t){return this.caught(O,t)},i.prototype._resolveFromSyncValue=function(t,e){if(t===w)this._cleanValues(),this._setRejected(),this._settledValue=t.e;else{var n=i._cast(t,e,void 0);n instanceof i?this._follow(n):(this._cleanValues(),this._setFulfilled(),this._settledValue=t)}},i.method=function(t){if("function"!=typeof t)throw new E("fn must be a function");return function e(){var n;switch(arguments.length){case 0:n=x(t,this,void 0);break;case 1:n=x(t,this,arguments[0]);break;case 2:n=k(t,this,arguments[0],arguments[1]);break;default:for(var r=arguments.length,o=new Array(r),s=0;r>s;++s)o[s]=arguments[s];n=T(t,o,this)}var u=new i(f);return I&&u._setTrace(e,void 0),u._resolveFromSyncValue(n,e),u}},i["try"]=i.attempt=function(t,e,n){if("function"!=typeof t)return U("fn must be a function");var r=m(e)?T(t,e,n):x(t,n,e),o=new i(f);return I&&o._setTrace(i.attempt,void 0),o._resolveFromSyncValue(r,i.attempt),o},i.defer=i.pending=function(t){var e=new i(f);return I&&e._setTrace("function"==typeof t?t:i.defer,void 0),new y(e)},i.bind=function(t){var e=new i(f);return I&&e._setTrace(i.bind,void 0),e._setFulfilled(),e._setBoundTo(t),e},i.cast=function(t,e){"function"!=typeof e&&(e=i.cast);var n=i._cast(t,e,void 0);return n instanceof i?n:i.resolve(n,e)},i.onPossiblyUnhandledRejection=function(t){v.possiblyUnhandledRejection="function"==typeof t?t:void 0};var I=!1||!("undefined"==typeof n||"string"!=typeof n.execPath||"object"!=typeof n.env||!n.env.BLUEBIRD_DEBUG&&"development"!==n.env.NODE_ENV);i.longStackTraces=function(){if(c.haveItemsQueued()&&I===!1)throw new Error("cannot enable long stack traces after promises have been created");I=v.isSupported()},i.hasLongStackTraces=function(){return I&&v.isSupported()},i.prototype._setProxyHandlers=function(t,e){var n=this._length();if(n>=4194298&&(n=0,this._setLength(0)),0===n)this._promise0=e,this._receiver0=t;else{var r=n-5;this[r+3]=e,this[r+4]=t,this[r+0]=this[r+1]=this[r+2]=void 0}this._setLength(n+5)},i.prototype._proxyPromiseArray=function(t,e){this._setProxyHandlers(t,e)},i.prototype._proxyPromise=function(t){t._setProxied(),this._setProxyHandlers(t,-1)},i.prototype._then=function(t,e,n,r,o,s){var u=void 0!==o,a=u?o:new i(f);if(I&&!u){var l=this._peekContext()===this._traceParent;a._traceParent=l?this._traceParent:this,a._setTrace("function"==typeof s?s:this._then,this)}!u&&this._isBound()&&a._setBoundTo(this._boundTo);var p=this._addCallbacks(t,e,n,a,r);return!u&&this._cancellable()&&(a._setCancellable(),a._cancellationParent=this),this.isResolved()&&c.invoke(this._queueSettleAt,this,p),a},i.prototype._length=function(){return 4194303&this._bitField},i.prototype._isFollowingOrFulfilledOrRejected=function(){return(939524096&this._bitField)>0},i.prototype._isFollowing=function(){return 536870912===(536870912&this._bitField)},i.prototype._setLength=function(t){this._bitField=-4194304&this._bitField|4194303&t},i.prototype._cancellable=function(){return(67108864&this._bitField)>0},i.prototype._setFulfilled=function(){this._bitField=268435456|this._bitField},i.prototype._setRejected=function(){this._bitField=134217728|this._bitField},i.prototype._setFollowing=function(){this._bitField=536870912|this._bitField
},i.prototype._setIsFinal=function(){this._bitField=33554432|this._bitField},i.prototype._isFinal=function(){return(33554432&this._bitField)>0},i.prototype._setCancellable=function(){this._bitField=67108864|this._bitField},i.prototype._unsetCancellable=function(){this._bitField=-67108865&this._bitField},i.prototype._receiverAt=function(t){var e;return e=0===t?this._receiver0:this[t+4-5],this._isBound()&&void 0===e?this._boundTo:e},i.prototype._promiseAt=function(t){return 0===t?this._promise0:this[t+3-5]},i.prototype._fulfillmentHandlerAt=function(t){return 0===t?this._fulfillmentHandler0:this[t+0-5]},i.prototype._rejectionHandlerAt=function(t){return 0===t?this._rejectionHandler0:this[t+1-5]},i.prototype._unsetAt=function(t){0===t?this._fulfillmentHandler0=this._rejectionHandler0=this._progressHandler0=this._promise0=this._receiver0=void 0:this[t-5+0]=this[t-5+1]=this[t-5+2]=this[t-5+3]=this[t-5+4]=void 0},i.prototype._resolveFromResolver=function(t){function e(t){r._tryFollow(t)||r._fulfill(t)}function n(t){r._attachExtraTrace(t),C(t),r._reject(t)}var r=this,i=I;i&&(this._setTrace(this._resolveFromResolver,void 0),this._pushContext());var o=k(t,void 0,e,n);i&&this._popContext(),void 0!==o&&o===w&&r._reject(o.e)},i.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length();if(o>=4194298&&(o=0,this._setLength(0)),0===o)this._promise0=r,void 0!==i&&(this._receiver0=i),"function"==typeof t&&(this._fulfillmentHandler0=t),"function"==typeof e&&(this._rejectionHandler0=e),"function"==typeof n&&(this._progressHandler0=n);else{var s=o-5;this[s+3]=r,this[s+4]=i,this[s+0]="function"==typeof t?t:void 0,this[s+1]="function"==typeof e?e:void 0,this[s+2]="function"==typeof n?n:void 0}return this._setLength(o+5),o},i.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=8388608|this._bitField,this._boundTo=t):this._bitField=-8388609&this._bitField},i.prototype._isBound=function(){return 8388608===(8388608&this._bitField)},i.prototype._spreadSlowCase=function(t,e,n,r){var i=s(n,d,this._spreadSlowCase,r).promise()._then(function(){return t.apply(r,arguments)},void 0,void 0,p,void 0,this._spreadSlowCase);e._follow(i)},i.prototype._markHandled=function(t){if("object"==typeof t&&null!==t){var e=t.__promiseHandled__;void 0===e?g(t,"__promiseHandled__",2):t.__promiseHandled__=H(e)}},i.prototype._callSpread=function(t,n,r,o){var s=this._isBound()?this._boundTo:void 0;if(m(r))for(var u=this._settlePromiseFromHandler,a=0,c=r.length;c>a;++a)if(e(i._cast(r[a],u,void 0)))return void this._spreadSlowCase(t,n,r,s);return o&&n._pushContext(),T(t,r,s)},i.prototype._callHandler=function(t,e,n,r,i){var o;return e!==p||this.isRejected()?(i&&n._pushContext(),o=x(t,e,r)):o=this._callSpread(t,n,r,i),i&&n._popContext(),o},i.prototype._settlePromiseFromHandler=function(t,n,r,o){if(!e(o))return void t.call(n,r,o);this.isRejected()&&this._markHandled(r);var s=I,u=this._callHandler(t,n,o,r,s);if(!o._isFollowing())if(u===w||u===o||u===h){var a=u===o?L():S(u.e);u!==h&&o._attachExtraTrace(a),o._rejectUnchecked(a)}else{var c=i._cast(u,s?this._settlePromiseFromHandler:void 0,o);e(c)?(o._follow(c),c._cancellable()&&(o._cancellationParent=c,o._setCancellable())):o._fulfillUnchecked(u)}},i.prototype._follow=function(t){this._setFollowing(),t.isPending()?(t._cancellable()&&(this._cancellationParent=t,this._setCancellable()),t._proxyPromise(this)):t.isFulfilled()?this._fulfillUnchecked(t._settledValue):this._rejectUnchecked(t._settledValue),I&&null==t._traceParent&&(t._traceParent=this)},i.prototype._tryFollow=function(t){if(this._isFollowingOrFulfilledOrRejected()||t===this)return!1;var n=i._cast(t,this._tryFollow,void 0);return e(n)?(this._follow(n),!0):!1},i.prototype._resetTrace=function(t){if(I){var e=this._peekContext(),n=void 0===e;this._trace=new v("function"==typeof t?t:this._resetTrace,n)}},i.prototype._setTrace=function(t,e){if(I){var n=this._peekContext();this._traceParent=n;var r=void 0===n;this._trace=void 0!==e&&e._traceParent===n?e._trace:new v("function"==typeof t?t:this._setTrace,r)}return this},i.prototype._attachExtraTrace=function(t){if(I&&V(t)){var e=this,n=t.stack;n="string"==typeof n?n.split("\n"):[];for(var r=1;null!=e&&null!=e._trace;)n=v.combine(n,e._trace.stack.split("\n")),e=e._traceParent;var i=Error.stackTraceLimit+r,o=n.length;o>i&&(n.length=i),t.stack=n.length<=r?"(No stack trace)":n.join("\n"),t.__promiseHandled__=B(t.__promiseHandled__)}},i.prototype._notifyUnhandledRejection=function(t){M(t.__promiseHandled__)||(t.__promiseHandled__=H(t.__promiseHandled__),v.possiblyUnhandledRejection(t,this))},i.prototype._unhandledRejection=function(t){M(t.__promiseHandled__)||c.invokeLater(this._notifyUnhandledRejection,this,t)},i.prototype._cleanValues=function(){this._cancellable()&&(this._cancellationParent=void 0)},i.prototype._fulfill=function(t){this._isFollowingOrFulfilledOrRejected()||this._fulfillUnchecked(t)},i.prototype._reject=function(t){this._isFollowingOrFulfilledOrRejected()||this._rejectUnchecked(t)},i.prototype._settlePromiseAt=function(t){var e=this.isFulfilled()?this._fulfillmentHandlerAt(t):this._rejectionHandlerAt(t),n=this._settledValue,o=this._receiverAt(t),s=this._promiseAt(t);if("function"==typeof e)this._settlePromiseFromHandler(e,o,n,s);else{var u=!1,a=this.isFulfilled();void 0!==o&&(o instanceof i&&o._isProxied()?(o._unsetProxied(),a?o._fulfillUnchecked(n):o._rejectUnchecked(n),u=!0):r(o,s)&&(a?o._promiseFulfilled(n,s):o._promiseRejected(n,s),u=!0)),u||(a?s._fulfill(n):s._reject(n))}t>=256&&this._queueGC()},i.prototype._isProxied=function(){return 4194304===(4194304&this._bitField)},i.prototype._setProxied=function(){this._bitField=4194304|this._bitField},i.prototype._unsetProxied=function(){this._bitField=-4194305&this._bitField},i.prototype._isGcQueued=function(){return-1073741824===(-1073741824&this._bitField)},i.prototype._setGcQueued=function(){this._bitField=-1073741824|this._bitField},i.prototype._unsetGcQueued=function(){this._bitField=1073741823&this._bitField},i.prototype._queueGC=function(){this._isGcQueued()||(this._setGcQueued(),c.invokeLater(this._gc,this,void 0))},i.prototype._gc=function(){var t=this._length();this._unsetAt(0);for(var e=0;t>e;e++)delete this[e];this._setLength(0),this._unsetGcQueued()},i.prototype._queueSettleAt=function(t){c.invoke(this._settlePromiseAt,this,t)},i.prototype._fulfillUnchecked=function(t){if(this.isPending()){if(t===this){var e=L();return this._attachExtraTrace(e),this._rejectUnchecked(e)}this._cleanValues(),this._setFulfilled(),this._settledValue=t;var n=this._length();n>0&&c.invoke(this._fulfillPromises,this,n)}},i.prototype._fulfillPromises=function(t){t=this._length();for(var e=0;t>e;e+=5)this._settlePromiseAt(e)},i.prototype._rejectUnchecked=function(t){if(this.isPending()){if(t===this){var e=L();return this._attachExtraTrace(e),this._rejectUnchecked(e)}if(this._cleanValues(),this._setRejected(),this._settledValue=t,this._isFinal())return void c.invokeLater(N,void 0,t);var n=this._length();n>0?c.invoke(this._rejectPromises,this,n):this._ensurePossibleRejectionHandled(t)}},i.prototype._rejectPromises=function(t){t=this._length();for(var n=!1,i=0;t>i;i+=5){var o=this._rejectionHandlerAt(i);if(!n)if("function"==typeof o)n=!0;else{var s=this._promiseAt(i);if(e(s)&&s._length()>0)n=!0;else{var u=this._receiverAt(i);(e(u)&&u._length()>0||r(u,s))&&(n=!0)}}this._settlePromiseAt(i)}n||this._ensurePossibleRejectionHandled(this._settledValue)},i.prototype._ensurePossibleRejectionHandled=function(t){if(void 0!==v.possiblyUnhandledRejection&&j(t)){var e=t.__promiseHandled__,n=t;if(void 0===e)n=b(t,"__promiseHandled__",0),e=0;else if(M(e))return;q(e)||this._attachExtraTrace(n),c.invoke(this._unhandledRejection,this,n)}};var D=[];i.prototype._peekContext=function(){var t=D.length-1;return t>=0?D[t]:void 0},i.prototype._pushContext=function(){I&&D.push(this)},i.prototype._popContext=function(){I&&D.pop()};var z=u.Promise;return i.noConflict=function(){return u.Promise===i&&(u.Promise=z),i},v.isSupported()||(i.longStackTraces=function(){},I=!1),i._makeSelfResolutionError=L,t("./finally.js")(i,h),t("./direct_resolve.js")(i),t("./thenables.js")(i),i.RangeError=A,i.CancellationError=F,i.TimeoutError=P,i.TypeError=E,i.RejectionError=R,t("./timers.js")(i,f),t("./synchronous_inspection.js")(i),t("./any.js")(i,s,d),t("./race.js")(i,f),t("./call_get.js")(i),t("./filter.js")(i,s,d,U),t("./generators.js")(i,U,f),t("./map.js")(i,s,d,U),t("./nodeify.js")(i),t("./promisify.js")(i,f),t("./props.js")(i,d),t("./reduce.js")(i,s,d,U),t("./settle.js")(i,s,d),t("./some.js")(i,s,d,U),t("./progress.js")(i,r),t("./cancel.js")(i,f),i.prototype=i.prototype,i}},{"./any.js":2,"./assert.js":3,"./async.js":4,"./call_get.js":6,"./cancel.js":7,"./captured_trace.js":8,"./catch_filter.js":9,"./direct_resolve.js":10,"./errors.js":11,"./errors_api_rejection":12,"./filter.js":14,"./finally.js":15,"./generators.js":16,"./global.js":17,"./map.js":18,"./nodeify.js":19,"./progress.js":20,"./promise_array.js":22,"./promise_resolver.js":24,"./promisify.js":26,"./props.js":28,"./race.js":30,"./reduce.js":31,"./settle.js":33,"./some.js":35,"./synchronous_inspection.js":37,"./thenables.js":38,"./timers.js":39,"./util.js":40,__browserify_process:76}],22:[function(t,e){"use strict";e.exports=function(e,n){function r(t){switch(t){case-1:return void 0;case-2:return[];case-3:return{}}}function i(t,r,i){var o=this._promise=new e(n),s=void 0;e.is(t)&&(s=t,t._cancellable()&&(o._setCancellable(),o._cancellationParent=t),t._isBound()&&o._setBoundTo(i)),o._setTrace(r,s),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var o=(t("./assert.js"),t("./errors.js").ensureNotHandled),s=t("./util.js"),u=t("./async.js"),a={}.hasOwnProperty,c=s.isArray;return i.PropertiesPromiseArray=function(){},i.prototype.length=function(){return this._length},i.prototype.promise=function(){return this._promise},i.prototype._init=function(t,n){var o=this._values;if(e.is(o)){if(!o.isFulfilled())return o.isPending()?void o._then(this._init,this._reject,void 0,this,n,this.constructor):void this._reject(o._settledValue);if(o=o._settledValue,!c(o)){var s=new e.TypeError("expecting an array, a promise or a thenable");return void this.__hardReject__(s)}this._values=o}if(0===o.length)return void this._resolve(r(n));var l,f=o.length,p=f;l=this instanceof i.PropertiesPromiseArray?this._values:new Array(f);for(var h=!1,d=0;f>d;++d){var v=o[d];if(void 0!==v||a.call(o,d)){var _=e._cast(v,void 0,void 0);_ instanceof e&&_.isPending()?_._proxyPromiseArray(this,d):h=!0,l[d]=_}else p--}if(0===p)return void this._resolve(-2===n?l:r(n));if(this._values=l,this._length=p,h){var y=p===f?this._scanDirectValues:this._scanDirectValuesHoled;u.invoke(y,this,f)}},i.prototype._settlePromiseAt=function(t){var n=this._values[t];e.is(n)?n.isFulfilled()?this._promiseFulfilled(n._settledValue,t):n.isRejected()&&this._promiseRejected(n._settledValue,t):this._promiseFulfilled(n,t)},i.prototype._scanDirectValuesHoled=function(t){for(var e=0;t>e&&!this._isResolved();++e)a.call(this._values,e)&&this._settlePromiseAt(e)},i.prototype._scanDirectValues=function(t){for(var e=0;t>e&&!this._isResolved();++e)this._settlePromiseAt(e)},i.prototype._isResolved=function(){return null===this._values},i.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},i.prototype.__hardReject__=i.prototype._reject=function(t){o(t),this._values=null,this._promise._attachExtraTrace(t),this._promise._reject(t)},i.prototype._promiseProgressed=function(t,e){this._isResolved()||this._promise._progress({index:e,value:t})},i.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){this._values[e]=t;var n=++this._totalResolved;n>=this._length&&this._resolve(this._values)}},i.prototype._promiseRejected=function(t){this._isResolved()||(this._totalResolved++,this._reject(t))},i}},{"./assert.js":3,"./async.js":4,"./errors.js":11,"./util.js":40}],23:[function(t,e){"use strict";function n(t){void 0!==t?(this._bitField=t._bitField,this._settledValue=t.isResolved()?t._settledValue:void 0):(this._bitField=0,this._settledValue=void 0)}var r=t("./errors.js").TypeError;n.prototype.isFulfilled=function(){return(268435456&this._bitField)>0},n.prototype.isRejected=function(){return(134217728&this._bitField)>0},n.prototype.isPending=function(){return 0===(402653184&this._bitField)},n.prototype.value=function(){if(!this.isFulfilled())throw new r("cannot get fulfillment value of a non-fulfilled promise");return this._settledValue},n.prototype.error=function(){if(!this.isRejected())throw new r("cannot get rejection reason of a non-rejected promise");return this._settledValue},e.exports=n},{"./errors.js":11}],24:[function(t,e){"use strict";function n(t){return t instanceof Error&&h.getPrototypeOf(t)===Error.prototype}function r(t){var e;return e=n(t)?new l(t):t,a.markAsOriginatingFromRejection(e),e}function i(t){function e(e,n){if(e){var i=r(u(e));t._attachExtraTrace(i),t._reject(i)}else if(arguments.length>2){for(var o=arguments.length,s=new Array(o-1),a=1;o>a;++a)s[a-1]=arguments[a];t._fulfill(s)}else t._fulfill(n)}return e}var o,s=t("./util.js"),u=s.maybeWrapAsError,a=t("./errors.js"),c=a.TimeoutError,l=a.RejectionError,f=t("./async.js"),p=s.haveGetters,h=t("./es5.js");if(o=p?function(t){this.promise=t}:function(t){this.promise=t,this.asCallback=i(t),this.callback=this.asCallback},p){var d={get:function(){return i(this.promise)}};h.defineProperty(o.prototype,"asCallback",d),h.defineProperty(o.prototype,"callback",d)}o._nodebackForPromise=i,o.prototype.toString=function(){return"[object PromiseResolver]"},o.prototype.resolve=o.prototype.fulfill=function(t){var e=this.promise;e._tryFollow(t)||f.invoke(e._fulfill,e,t)},o.prototype.reject=function(t){var e=this.promise;a.markAsOriginatingFromRejection(t),e._attachExtraTrace(t),f.invoke(e._reject,e,t)},o.prototype.progress=function(t){f.invoke(this.promise._progress,this.promise,t)},o.prototype.cancel=function(){f.invoke(this.promise.cancel,this.promise,void 0)},o.prototype.timeout=function(){this.reject(new c("timeout"))},o.prototype.isResolved=function(){return this.promise.isResolved()},o.prototype.toJSON=function(){return this.promise.toJSON()},e.exports=o},{"./async.js":4,"./errors.js":11,"./es5.js":13,"./util.js":40}],25:[function(t,e){"use strict";e.exports=function(e,n){function r(t,r,i){var o=this._promise=new e(n);o._setTrace(i,void 0),this._generatorFunction=t,this._receiver=r,this._generator=void 0}var i=t("./errors.js"),o=i.TypeError,s=i.ensureNotHandled,u=t("./util.js"),a=u.isArray,c=u.errorObj,l=u.tryCatch1;return r.prototype.promise=function(){return this._promise},r.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._next(void 0)},r.prototype._continue=function f(t){if(t===c)return this._generator=void 0,this._promise._attachExtraTrace(t.e),void this._promise._reject(t.e);var n=t.value;if(t.done===!0)this._generator=void 0,this._promise._fulfill(n);else{var r=e._cast(n,f,void 0);if(!(r instanceof e)){if(!a(r))return void this._throw(new o("A value was yielded that could not be treated as a promise"));r=e.all(r)}r._then(this._next,this._throw,void 0,this,null,void 0)}},r.prototype._throw=function(t){s(t),this._promise._attachExtraTrace(t),this._continue(l(this._generator["throw"],this._generator,t))},r.prototype._next=function(t){this._continue(l(this._generator.next,this._generator,t))},r}},{"./errors.js":11,"./util.js":40}],26:[function(t,e){"use strict";e.exports=function(e,n){function r(t){return t.__isPromisified__===!0}function i(t,r,i){function o(e){for(var n=new Array(e),i=0,o=n.length;o>i;++i)n[i]="a"+(i+1);var s=e>0?",":"";return"string"==typeof t&&r===a?"this['"+t+"']("+n.join(",")+s+" fn);break;":(void 0===r?"callback("+n.join(",")+s+" fn);":"callback.call("+(r===a?"this":"receiver")+", "+n.join(",")+s+" fn);")+"break;"}function s(){return"var args = new Array(len + 1);var i = 0;for (var i = 0; i < len; ++i) {    args[i] = arguments[i];}args[i] = fn;"}var u="string"==typeof i?i+"Async":"promisified";return new Function("Promise","callback","receiver","withAppended","maybeWrapAsError","nodebackForPromise","INTERNAL","var ret = function "+u+'(a1, a2, a3, a4, a5) {"use strict";var len = arguments.length;var promise = new Promise(INTERNAL);promise._setTrace('+u+", void 0);var fn = nodebackForPromise(promise);try{switch(len) {case 1:"+o(1)+"case 2:"+o(2)+"case 3:"+o(3)+"case 0:"+o(0)+"case 4:"+o(4)+"case 5:"+o(5)+"default: "+s()+("string"==typeof t?"this['"+t+"'].apply(":"callback.apply(")+(r===a?"this":"receiver")+", args); break;}}catch(e){ var wrapped = maybeWrapAsError(e);promise._attachExtraTrace(wrapped);promise._reject(wrapped);}return promise;}; ret.__isPromisified__ = true; return ret;")(e,t,r,p,h,f,n)}function o(t,r){function i(){var o=r;r===a&&(o=this),"string"==typeof t&&(t=o[t]);var s=new e(n);s._setTrace(i,void 0);var u=f(s);try{t.apply(o,p(arguments,u))}catch(c){var l=h(c);s._attachExtraTrace(l),s._reject(l)}return s}return i.__isPromisified__=!0,i}function s(){}function u(t,e,n){if(n){for(var r=g(t),i=0,o=r.length;o>i;i+=2){var u=r[i],c=r[i+1],l=u+"__beforePromisified__",f=u+"Async";v(t,l,c),t[f]=j(l,a,u)}return r.length>16&&(s.prototype=t),t}return j(t,e,void 0)}var a={},c=t("./util.js"),l=t("./es5.js"),f=t("./promise_resolver.js")._nodebackForPromise,p=c.withAppended,h=c.maybeWrapAsError,d=c.canEvaluate,v=c.notEnumerableProp,_=c.deprecated,y=(t("./assert.js"),new RegExp("__beforePromisified__$")),m={}.hasOwnProperty,g=function(){if(l.isES5){var t=Object.create,e=Object.getOwnPropertyDescriptor;return function(n){for(var i=n,o=[],s=t(null);null!==n;){for(var u=l.keys(n),a=0,c=u.length;c>a;++a){var f=u[a];if(!(s[f]||y.test(f)||m.call(i,f+"__beforePromisified__"))){s[f]=!0;var p=e(n,f);null==p||"function"!=typeof p.value||r(p.value)||o.push(f,p.value)}}n=l.getPrototypeOf(n)}return o}}return function(t){var e=[];for(var n in t)if(!y.test(n)&&!m.call(t,n+"__beforePromisified__")){var i=t[n];"function"!=typeof i||r(i)||e.push(n,i)}return e}}(),j=d?i:o;e.promisify=function(t,e){if("object"==typeof t&&null!==t)return _("Promise.promisify for promisifying entire objects is deprecated. Use Promise.promisifyAll instead."),u(t,e,!0);if("function"!=typeof t)throw new TypeError("fn must be a function");return r(t)?t:u(t,arguments.length<2?a:e,!1)},e.promisifyAll=function(t){if("function"!=typeof t&&"object"!=typeof t)throw new TypeError("the target of promisifyAll must be an object or a function");return u(t,void 0,!0)}}},{"./assert.js":3,"./es5.js":13,"./promise_resolver.js":24,"./util.js":40}],27:[function(t,e){"use strict";e.exports=function(e,n){function r(t,e,n){for(var r=s.keys(t),i=new Array(r.length),o=0,u=i.length;u>o;++o)i[o]=t[r[o]];if(this.constructor$(i,e,n),!this._isResolved())for(var o=0,u=r.length;u>o;++o)i.push(r[o])}var i=(t("./assert.js"),t("./util.js")),o=i.inherits,s=t("./es5.js");return o(r,n),r.prototype._init=function(){this._init$(void 0,-3)},r.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){this._values[e]=t;var n=++this._totalResolved;if(n>=this._length){for(var r={},i=this.length(),o=0,s=this.length();s>o;++o)r[this._values[o+i]]=this._values[o];this._resolve(r)}}},r.prototype._promiseProgressed=function(t,e){this._isResolved()||this._promise._progress({key:this._values[e+this.length()],value:t})},n.PropertiesPromiseArray=r,r}},{"./assert.js":3,"./es5.js":13,"./util.js":40}],28:[function(t,e){"use strict";e.exports=function(e,n){function r(t,n,r){var o,a=e._cast(t,r,void 0);return u(a)?(e.is(a)?o=a._then(e.props,void 0,void 0,void 0,void 0,r):(o=new i(a,r,n===!0&&a._isBound()?a._boundTo:void 0).promise(),n=!1),n===!0&&a._isBound()&&o._setBoundTo(a._boundTo),o):s("cannot await properties of a non-object")}var i=t("./properties_promise_array.js")(e,n),o=t("./util.js"),s=t("./errors_api_rejection")(e),u=o.isObject;e.prototype.props=function(){return r(this,!0,this.props)},e.props=function(t){return r(t,!1,e.props)}}},{"./errors_api_rejection":12,"./properties_promise_array.js":27,"./util.js":40}],29:[function(t,e){"use strict";function n(t,e,n,r,i){for(var o=0;i>o;++o)n[o+r]=t[o+e]}function r(t){return t>>>=0,t-=1,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t+1}function i(t){return"number"!=typeof t?16:r(Math.min(Math.max(16,t),1073741824))}function o(t){this._capacity=i(t),this._length=0,this._front=0,this._makeCapacity()}t("./assert.js"),o.prototype._willBeOverCapacity=function(t){return this._capacity<t},o.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var n=this._front+e&this._capacity-1;this[n]=t,this._length=e+1},o.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r},o.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},o.prototype.length=function(){return this._length},o.prototype._makeCapacity=function(){for(var t=this._capacity,e=0;t>e;++e)this[e]=void 0},o.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<3)},o.prototype._resizeTo=function(t){var e=this._front,r=this._capacity,i=new Array(r),o=this.length();if(n(this,0,i,0,r),this._capacity=t,this._makeCapacity(),this._front=0,r>=e+o)n(i,e,this,0,o);else{var s=o-(e+o&r-1);n(i,e,this,0,s),n(i,0,this,s,o-s)}},e.exports=o},{"./assert.js":3}],30:[function(t,e){"use strict";e.exports=function(e,n){function r(t,r,a){var c=e._cast(t,r,void 0);if(e.is(c))return s(c);if(!o(t))return i("expecting an array, a promise or a thenable");var l=new e(n);l._setTrace(r,a),void 0!==a&&(a._isBound()&&l._setBoundTo(a._boundTo),a._cancellable()&&(l._setCancellable(),l._cancellationParent=a));for(var f=l._fulfill,p=l._reject,h=0,d=t.length;d>h;++h){var v=t[h];(void 0!==v||u.call(t,h))&&e.cast(v)._then(f,p,void 0,l,null,r)}return l}var i=t("./errors_api_rejection.js")(e),o=t("./util.js").isArray,s=function(t){return t.then(function e(n){return r(n,e,t)})},u={}.hasOwnProperty;e.race=function(t){return r(t,e.race,void 0)},e.prototype.race=function(){return r(this,this.race,void 0)}}},{"./errors_api_rejection.js":12,"./util.js":40}],31:[function(t,e){"use strict";e.exports=function(e,n,r,i){function o(t,e){var n=this,r=void 0;"function"!=typeof n&&(r=n.receiver,n=n.fn);var i=t.length,o=void 0,s=0;if(void 0!==e)o=e,s=0;else if(s=1,i>0)for(var u=0;i>u;++u)if(void 0!==t[u]||u in t){o=t[u],s=u+1;break}if(void 0===r)for(var u=s;i>u;++u)(void 0!==t[u]||u in t)&&(o=n(o,t[u],u,i));else for(var u=s;i>u;++u)(void 0!==t[u]||u in t)&&(o=n.call(r,o,t[u],u,i));return o}function s(t){var e=this.fn,n=this.initialValue;return o.call(e,t,n)}function u(t,e,n,r,i){return n._then(function o(n){return a(t,e,n,r,o)},void 0,void 0,void 0,void 0,i)}function a(t,a,c,l,f){if("function"!=typeof a)return i("fn must be a function");if(l===!0&&t._isBound()&&(a={fn:a,receiver:t._boundTo}),void 0!==c){if(e.is(c)){if(!c.isFulfilled())return u(t,a,c,l,f);c=c._settledValue}return n(t,r,f,l===!0&&t._isBound()?t._boundTo:void 0).promise()._then(s,void 0,void 0,{fn:a,initialValue:c},void 0,e.reduce)}return n(t,r,f,l===!0&&t._isBound()?t._boundTo:void 0).promise()._then(o,void 0,void 0,a,void 0,f)}t("./assert.js"),e.reduce=function(t,n,r){return a(t,n,r,!1,e.reduce)},e.prototype.reduce=function(t,e){return a(this,t,e,!0,this.reduce)}}},{"./assert.js":3}],32:[function(t,e){var n,r=t("__browserify_process"),i=t("./global.js");if(t("./assert.js"),"undefined"!=typeof r&&null!==r&&"function"==typeof r.cwd&&"function"==typeof r.nextTick)n=r.nextTick;else if("function"!=typeof MutationObserver&&"function"!=typeof WebkitMutationObserver&&"function"!=typeof WebKitMutationObserver||"undefined"==typeof document||"function"!=typeof document.createElement)if("function"==typeof i.postMessage&&"function"!=typeof i.importScripts&&"function"==typeof i.addEventListener&&"function"==typeof i.removeEventListener){var o="bluebird_message_key_"+Math.random();n=function(){function t(t){if(t.source===i&&t.data===o){var n=e;e=void 0,n()}}var e=void 0;return i.addEventListener("message",t,!1),function(t){e=t,i.postMessage(o,"*")}}()}else n="function"==typeof MessageChannel?function(){var t=void 0,e=new MessageChannel;return e.port1.onmessage=function(){var e=t;t=void 0,e()},function(n){t=n,e.port2.postMessage(null)}}():i.setTimeout?function(t){setTimeout(t,4)}:function(t){t()};else n=function(){var t=i.MutationObserver||i.WebkitMutationObserver||i.WebKitMutationObserver,e=document.createElement("div"),n=void 0,r=new t(function(){var t=n;n=void 0,t()});return r.observe(e,{attributes:!0}),function(t){n=t,e.setAttribute("class","foo")}}();e.exports=n},{"./assert.js":3,"./global.js":17,__browserify_process:76}],33:[function(t,e){"use strict";e.exports=function(e,n,r){function i(t,e,r){return n(t,o,r,e===!0&&t._isBound()?t._boundTo:void 0).promise()}var o=t("./settled_promise_array.js")(e,r);e.settle=function(t){return i(t,!1,e.settle)},e.prototype.settle=function(){return i(this,!0,this.settle)}}},{"./settled_promise_array.js":34}],34:[function(t,e){"use strict";e.exports=function(e,n){function r(t,e,n){this.constructor$(t,e,n)}var i=(t("./assert.js"),t("./promise_inspection.js")),o=t("./util.js"),s=o.inherits;return s(r,n),r.prototype._promiseResolved=function(t,e){this._values[t]=e;var n=++this._totalResolved;n>=this._length&&this._resolve(this._values)},r.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){var n=new i;n._bitField=268435456,n._settledValue=t,this._promiseResolved(e,n)}},r.prototype._promiseRejected=function(t,e){if(!this._isResolved()){var n=new i;n._bitField=134217728,n._settledValue=t,this._promiseResolved(e,n)}},r}},{"./assert.js":3,"./promise_inspection.js":23,"./util.js":40}],35:[function(t,e){"use strict";e.exports=function(e,n,r,i){function o(t,e,r,o){if((0|e)!==e||0>e)return i("expecting a positive integer");var u=n(t,s,o,r===!0&&t._isBound()?t._boundTo:void 0),a=u.promise();return a.isRejected()?a:(u.setHowMany(e),u.init(),a)}var s=t("./some_promise_array.js")(r);t("./assert.js"),e.some=function(t,n){return o(t,n,!1,e.some)},e.prototype.some=function(t){return o(this,t,!0,this.some)}}},{"./assert.js":3,"./some_promise_array.js":36}],36:[function(t,e){"use strict";e.exports=function(e){function n(t,e,n){this.constructor$(t,e,n),this._howMany=0,this._unwrap=!1,this._initialized=!1}var r=t("./util.js"),i=t("./errors.js").RangeError,o=r.inherits,s=r.isArray;return o(n,e),n.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-2);var t=s(this._values);if(this._holes=t?this._values.length-this.length():0,!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()){var e="(Promise.some) input array contains less than "+this._howMany+" promises";this._reject(new i(e))}}},n.prototype.init=function(){this._initialized=!0,this._init()},n.prototype.setUnwrap=function(){this._unwrap=!0},n.prototype.howMany=function(){return this._howMany},n.prototype.setHowMany=function(t){this._isResolved()||(this._howMany=t)},n.prototype._promiseFulfilled=function(t){this._isResolved()||(this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),this._resolve(1===this.howMany()&&this._unwrap?this._values[0]:this._values)))},n.prototype._promiseRejected=function(t){this._isResolved()||(this._addRejected(t),this.howMany()>this._canPossiblyFulfill()&&this._reject(this._values.length===this.length()?[]:this._values.slice(this.length()+this._holes)))},n.prototype._fulfilled=function(){return this._totalResolved},n.prototype._rejected=function(){return this._values.length-this.length()-this._holes},n.prototype._addRejected=function(t){this._values.push(t)},n.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},n.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},n}},{"./errors.js":11,"./util.js":40}],37:[function(t,e){"use strict";e.exports=function(e){var n=t("./promise_inspection.js");e.prototype.inspect=function(){return new n(this)}}},{"./promise_inspection.js":23}],38:[function(t,e){"use strict";e.exports=function(e){function n(t){try{return t.then}catch(e){return u.e=e,u}}function r(t,o,s){if(a(t)){if(t instanceof e)return t;var c=n(t);if(c===u)return o="function"==typeof o?o:r,void 0!==s&&s._attachExtraTrace(c.e),e.reject(c.e,o);if("function"==typeof c)return o="function"==typeof o?o:r,i(t,c,o,s)}return t}function i(t,n,r,i){function s(n){if(!f){if(f=!0,t===n){var r=e._makeSelfResolutionError();return void 0!==i&&i._attachExtraTrace(r),void l.reject(r)}l.resolve(n)}}function a(t){f||(f=!0,o.markAsOriginatingFromRejection(t),void 0!==i&&i._attachExtraTrace(t),l.reject(t))}var l=e.defer(r),f=!1,p=c(n,t,s,a);return p!==u||f||(f=!0,void 0!==i&&i._attachExtraTrace(p.e),l.promise._reject(p.e)),l.promise}var o=(t("./assert.js"),t("./errors.js")),s=t("./util.js"),u=s.errorObj,a=s.isObject,c=s.tryCatch2;e._cast=r}},{"./assert.js":3,"./errors.js":11,"./util.js":40}],39:[function(t,e){"use strict";var n=t("./global.js"),r=function(t,e){for(var r=arguments.length,i=new Array(r-2),o=2;r>o;++o)i[o-2]=arguments[o];n.setTimeout(function(){t.apply(void 0,i)},e)},i={};n.setTimeout(function(t){t===i&&(r=n.setTimeout)},1,i),e.exports=function(e,n){var i=(t("./util.js"),t("./assert.js"),t("./errors.js")),o=t("./errors_api_rejection")(e),s=e.TimeoutError,u=function(t,e,n){if(t.isPending()){"string"!=typeof e&&(e="operation timed out after "+n+" ms");var r=new s(e);i.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._rejectUnchecked(r)}},a=function(t,e){e._fulfill(t)};e.delay=function(t,i,s){if(void 0===i&&(i=t,t=void 0),(0|i)!==i||0>i)return o("expecting a positive integer");"function"!=typeof s&&(s=e.delay);var u=e._cast(t,s,void 0),c=new e(n);return e.is(u)?(u._isBound()&&c._setBoundTo(u._boundTo),u._cancellable()&&(c._setCancellable(),c._cancellationParent=u),c._setTrace(s,u),c._follow(u),c.then(function(t){return e.delay(t,i)})):(c._setTrace(s,void 0),r(a,i,t,c),c)},e.prototype.delay=function(t){return e.delay(this,t,this.delay)},e.prototype.timeout=function(t,i){if((0|t)!==t||0>t)return o("expecting a positive integer");var s=new e(n);return s._setTrace(this.timeout,this),this._isBound()&&s._setBoundTo(this._boundTo),this._cancellable()&&(s._setCancellable(),s._cancellationParent=this),s._follow(this),r(u,t,s,i,t),s}}},{"./assert.js":3,"./errors.js":11,"./errors_api_rejection":12,"./global.js":17,"./util.js":40}],40:[function(t,e){"use strict";function n(t){"undefined"!=typeof console&&null!==console&&"function"==typeof console.warn&&console.warn("Bluebird: "+t)}function r(t,e,n){try{return t.call(e,n)}catch(r){return m.e=r,m}}function i(t,e,n,r){try{return t.call(e,n,r)}catch(i){return m.e=i,m}}function o(t,e,n){try{return t.apply(n,e)}catch(r){return m.e=r,m}}function s(t){return"string"==typeof t?t:""+t}function u(t){return null==t||t===!0||t===!1||"string"==typeof t||"number"==typeof t}function a(t){return!u(t)}function c(t){return u(t)?new Error(s(t)):t}function l(t,e){var n,r=t.length,i=new Array(r+1);for(n=0;r>n;++n)i[n]=t[n];return i[n]=e,i}function f(t,e,n){var r={value:n,configurable:!0,enumerable:!1,writable:!0};return d.defineProperty(t,e,r),t}function p(t){throw t}var h=t("./global.js"),d=(t("./assert.js"),t("./es5.js")),v=function(){try{var t={};return d.defineProperty(t,"f",{get:function(){return 3}}),3===t.f}catch(e){return!1}}(),_=function(t,e,n){try{return f(t,e,n),t}catch(r){for(var i={},o=d.keys(t),s=0,u=o.length;u>s;++s)try{var a=o[s];i[a]=t[a]}catch(c){i[a]=c}return f(i,e,n),i}},y=function(){return"undefined"!=typeof window&&null!==window&&"undefined"!=typeof window.document&&"undefined"!=typeof navigator&&null!==navigator&&"string"==typeof navigator.appName&&window===h?!1:!0
}(),m={e:{}},g=function(t,e){function n(){this.constructor=t,this.constructor$=e;for(var n in e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}var r={}.hasOwnProperty;return n.prototype=e.prototype,t.prototype=new n,t.prototype},j=function(){return"string"!==this}.call("string"),b={thrower:p,isArray:d.isArray,haveGetters:v,notEnumerableProp:f,isPrimitive:u,isObject:a,ensurePropertyExpansion:_,canEvaluate:y,deprecated:n,errorObj:m,tryCatch1:r,tryCatch2:i,tryCatchApply:o,inherits:g,withAppended:l,asString:s,maybeWrapAsError:c,wrapsPrimitiveReceiver:j};e.exports=b},{"./assert.js":3,"./es5.js":13,"./global.js":17}],41:[function(t,e){function n(t,e){function n(){4===p.readyState&&i()}function i(){var t=null,n=p.statusCode=p.status,r=p.body=p.response||p.responseText||p.responseXML;if(0===n){var i=p.responseText||a[String(p.status).charAt(0)];t=new Error(i),t.statusCode=p.status}e(t,p,r)}function f(t){e(t,p)}"string"==typeof t&&(t={uri:t}),t=t||{},e=o(e);var p;p=t.cors?new l:new c;var h=p.url=t.uri,d=p.method=t.method||"GET",v=t.body||t.data,_=p.headers=t.headers||{},y=!!t.sync;return p.onreadystatechange=n,p.onload=i,p.onerror=f,p.onprogress=function(){},p.ontimeout=r,p.open(d,h,!y),t.cors&&(p.withCredentials=!0),y||(p.timeout="timeout"in t?t.timeout:5e3),p.setRequestHeader&&u(s(_),function(t){p.setRequestHeader(t,_[t])}),p.send(v),p}function r(){}var i=t("global/window"),o=t("once"),s=t("lodash.keys"),u=t("lodash.foreach"),a={0:"Internal XMLHttpRequest Error"},c=i.XMLHttpRequest||r,l="withCredentials"in new c?i.XMLHttpRequest:i.XDomainRequest;e.exports=n},{"global/window":42,"lodash.foreach":43,"lodash.keys":69,once:75}],42:[function(t,e){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e.exports="undefined"!=typeof window?window:"undefined"!=typeof n?n:{}},{}],43:[function(t,e){function n(t,e,n){var o=-1,s=t?t.length:0;if(e=e&&"undefined"==typeof n?e:r(e,n,3),"number"==typeof s)for(;++o<s&&e(t[o],o,t)!==!1;);else i(t,e);return t}var r=t("lodash._basecreatecallback"),i=t("lodash.forown");e.exports=n},{"lodash._basecreatecallback":44,"lodash.forown":67}],44:[function(t,e){function n(t,e,n){if("function"!=typeof t)return i;if("undefined"==typeof e||!("prototype"in t))return t;var l=t.__bindData__;if("undefined"==typeof l&&(s.funcNames&&(l=!t.name),l=l||!s.funcDecomp,!l)){var f=c.call(t);s.funcNames||(l=!u.test(f)),l||(l=a.test(f),o(t,l))}if(l===!1||l!==!0&&1&l[1])return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)}}return r(t,e)}var r=t("lodash.bind"),i=t("lodash.identity"),o=t("lodash._setbinddata"),s=t("lodash.support"),u=/^\s*function[ \n\r\t]+\w/,a=/\bthis\b/,c=Function.prototype.toString;e.exports=n},{"lodash._setbinddata":45,"lodash.bind":48,"lodash.identity":64,"lodash.support":65}],45:[function(t,e){var n=t("lodash._isnative"),r=t("lodash.noop"),i={configurable:!1,enumerable:!1,value:null,writable:!1},o=function(){try{var t={},e=n(e=Object.defineProperty)&&e,r=e(t,t,t)&&e}catch(i){}return r}(),s=o?function(t,e){i.value=e,o(t,"__bindData__",i)}:r;e.exports=s},{"lodash._isnative":46,"lodash.noop":47}],46:[function(t,e){function n(t){return"function"==typeof t&&o.test(t)}var r=Object.prototype,i=r.toString,o=RegExp("^"+String(i).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");e.exports=n},{}],47:[function(t,e){function n(){}e.exports=n},{}],48:[function(t,e){function n(t,e){return arguments.length>2?r(t,17,i(arguments,2),null,e):r(t,1,null,null,e)}var r=t("lodash._createwrapper"),i=t("lodash._slice");e.exports=n},{"lodash._createwrapper":49,"lodash._slice":63}],49:[function(t,e){function n(t,e,u,l,f,p){var h=1&e,d=2&e,v=4&e,_=16&e,y=32&e;if(!d&&!o(t))throw new TypeError;_&&!u.length&&(e&=-17,_=u=!1),y&&!l.length&&(e&=-33,y=l=!1);var m=t&&t.__bindData__;if(m&&m!==!0)return m=s(m),m[2]&&(m[2]=s(m[2])),m[3]&&(m[3]=s(m[3])),!h||1&m[1]||(m[4]=f),!h&&1&m[1]&&(e|=8),!v||4&m[1]||(m[5]=p),_&&a.apply(m[2]||(m[2]=[]),u),y&&c.apply(m[3]||(m[3]=[]),l),m[1]|=e,n.apply(null,m);var g=1==e||17===e?r:i;return g([t,e,u,l,f,p])}var r=t("lodash._basebind"),i=t("lodash._basecreatewrapper"),o=t("lodash.isfunction"),s=t("lodash._slice"),u=[],a=u.push,c=u.unshift;e.exports=n},{"lodash._basebind":50,"lodash._basecreatewrapper":56,"lodash._slice":63,"lodash.isfunction":62}],50:[function(t,e){function n(t){function e(){if(u){var t=s(u);a.apply(t,arguments)}if(this instanceof e){var o=r(n.prototype),l=n.apply(o,t||arguments);return i(l)?l:o}return n.apply(c,t||arguments)}var n=t[0],u=t[2],c=t[4];return o(e,t),e}var r=t("lodash._basecreate"),i=t("lodash.isobject"),o=t("lodash._setbinddata"),s=t("lodash._slice"),u=[],a=u.push;e.exports=n},{"lodash._basecreate":51,"lodash._setbinddata":45,"lodash._slice":63,"lodash.isobject":54}],51:[function(t,e){function n(t){return o(t)?s(t):{}}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=t("lodash._isnative"),o=t("lodash.isobject"),s=(t("lodash.noop"),i(s=Object.create)&&s);s||(n=function(){function t(){}return function(e){if(o(e)){t.prototype=e;var n=new t;t.prototype=null}return n||r.Object()}}()),e.exports=n},{"lodash._isnative":52,"lodash.isobject":54,"lodash.noop":53}],52:[function(t,e){e.exports=t(46)},{}],53:[function(t,e){e.exports=t(47)},{}],54:[function(t,e){function n(t){return!(!t||!r[typeof t])}var r=t("lodash._objecttypes");e.exports=n},{"lodash._objecttypes":55}],55:[function(t,e){var n={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};e.exports=n},{}],56:[function(t,e){function n(t){function e(){var t=d?p:this;if(l){var o=s(l);a.apply(o,arguments)}if((f||_)&&(o||(o=s(arguments)),f&&a.apply(o,f),_&&o.length<h))return c|=16,n([u,y?c:-4&c,o,null,p,h]);if(o||(o=arguments),v&&(u=t[m]),this instanceof e){t=r(u.prototype);var g=u.apply(t,o);return i(g)?g:t}return u.apply(t,o)}var u=t[0],c=t[1],l=t[2],f=t[3],p=t[4],h=t[5],d=1&c,v=2&c,_=4&c,y=8&c,m=u;return o(e,t),e}var r=t("lodash._basecreate"),i=t("lodash.isobject"),o=t("lodash._setbinddata"),s=t("lodash._slice"),u=[],a=u.push;e.exports=n},{"lodash._basecreate":57,"lodash._setbinddata":45,"lodash._slice":63,"lodash.isobject":60}],57:[function(t,e,n){arguments[4][51][0].apply(n,arguments)},{"lodash._isnative":58,"lodash.isobject":60,"lodash.noop":59}],58:[function(t,e){e.exports=t(46)},{}],59:[function(t,e){e.exports=t(47)},{}],60:[function(t,e){e.exports=t(54)},{"lodash._objecttypes":61}],61:[function(t,e){e.exports=t(55)},{}],62:[function(t,e){function n(t){return"function"==typeof t}e.exports=n},{}],63:[function(t,e){function n(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(0>i?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=n},{}],64:[function(t,e){function n(t){return t}e.exports=n},{}],65:[function(t,e){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=t("lodash._isnative"),i=/\bthis\b/,o={};o.funcDecomp=!r(n.WinRTError)&&i.test(function(){return this}),o.funcNames="string"==typeof Function.name,e.exports=o},{"lodash._isnative":66}],66:[function(t,e){e.exports=t(46)},{}],67:[function(t,e){var n=t("lodash._basecreatecallback"),r=t("lodash.keys"),i=t("lodash._objecttypes"),o=function(t,e,o){var s,u=t,a=u;if(!u)return a;if(!i[typeof u])return a;e=e&&"undefined"==typeof o?e:n(e,o,3);for(var c=-1,l=i[typeof u]&&r(u),f=l?l.length:0;++c<f;)if(s=l[c],e(u[s],s,t)===!1)return a;return a};e.exports=o},{"lodash._basecreatecallback":44,"lodash._objecttypes":68,"lodash.keys":69}],68:[function(t,e){e.exports=t(55)},{}],69:[function(t,e){var n=t("lodash._isnative"),r=t("lodash.isobject"),i=t("lodash._shimkeys"),o=n(o=Object.keys)&&o,s=o?function(t){return r(t)?o(t):[]}:i;e.exports=s},{"lodash._isnative":70,"lodash._shimkeys":71,"lodash.isobject":73}],70:[function(t,e){e.exports=t(46)},{}],71:[function(t,e){var n=t("lodash._objecttypes"),r=Object.prototype,i=r.hasOwnProperty,o=function(t){var e,r=t,o=[];if(!r)return o;if(!n[typeof t])return o;for(e in r)i.call(r,e)&&o.push(e);return o};e.exports=o},{"lodash._objecttypes":72}],72:[function(t,e){e.exports=t(55)},{}],73:[function(t,e){e.exports=t(54)},{"lodash._objecttypes":74}],74:[function(t,e){e.exports=t(55)},{}],75:[function(t,e){function n(t){var e=!1;return function(){return e?void 0:(e=!0,t.apply(this,arguments))}}e.exports=n,n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0})})},{}],76:[function(t,e){var n=e.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}]},{},[1])(1)})},{}],20:[function(t,e){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,i,o){e=e||"&",i=i||"=";var s={};if("string"!=typeof t||0===t.length)return s;var u=/\+/g;t=t.split(e);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var c=t.length;a>0&&c>a&&(c=a);for(var l=0;c>l;++l){var f,p,h,d,v=t[l].replace(u,"%20"),_=v.indexOf(i);_>=0?(f=v.substr(0,_),p=v.substr(_+1)):(f=v,p=""),h=decodeURIComponent(f),d=decodeURIComponent(p),n(s,h)?r(s[h])?s[h].push(d):s[h]=[s[h],d]:s[h]=d}return s};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],21:[function(t,e){"use strict";function n(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,s,u){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?n(o(t),function(n){var o=encodeURIComponent(r(n))+s;return i(t[n])?t[n].map(function(t){return o+encodeURIComponent(r(t))}).join(e):o+encodeURIComponent(r(t[n]))}).join(e):u?encodeURIComponent(r(u))+s+encodeURIComponent(r(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},{}],22:[function(t,e,n){"use strict";n.decode=n.parse=t("./decode"),n.encode=n.stringify=t("./encode")},{"./decode":20,"./encode":21}]},{},[1])(1)});;'use strict';

(function(){
  var module = angular.module('ng-contentful', []);
  module.provider('contentfulClient', function ContentfulClientProvider() {
    var spaceId, accessToken, ssl=true, options= {};

    this.setSpaceId     = function (id)     { spaceId = id; };
    this.setAccessToken = function (token)  { accessToken = token; };
    this.setSSL         = function (useSSL) { ssl = !!useSSL; };
    this.setOptions     = function (opt)    { options = opt; };

    this.$get = ['$q', function ($q) {
      /*global contentful*/
      var finalOptions = Object.create(options);
      finalOptions.space = spaceId;
      finalOptions.accessToken = accessToken;
      finalOptions.secure = ssl;

      var client = contentful.createClient(finalOptions);

      pimpPromises(client, 'asset assets contentType contentTypes entry entries space'.split(' '));

      return client;

      function pimpPromises(object, methods) {
        methods.forEach(function (method) {
          var originalMethod = object[method];
          object[method] = function () {
            var args = arguments;
            return $q.when(originalMethod.apply(object, args));
          };
        });
      }
    }];
  });

  module.factory('ContentTypeList', ['$q', 'contentfulClient', function ($q, contentfulClient) {
    var cache = {};
    var lookups = {};

    return {
      lookupContentType: function (id) {
        if (cache[id]) {
          return $q.when(cache[id]);
        } else if (lookups[id]) {
          return lookups[id];
        } else {
          var lookup = contentfulClient.contentType(id)
          .then(function (contentType) {
            cache[id] = contentType;
            return contentType;
          });
          lookups[id] = lookup;
          return lookup;
        }
      },
      loadAllContentTypes: function () {
        contentfulClient.contentTypes()
        .then(function (contentTypes) {
          contentTypes.forEach(function (contentType) {
            cache[contentType.sys.id] = contentType;
          });
        });
      },
      getContentType: function (id) {
        return cache[id];
      }
    };
  }]);

  module.controller('EntryController', ['$scope', 'ContentTypeList', function ($scope, ContentTypeList) {
    $scope.entryTitle = function () {
      var contentType = getContentType();
      if (contentType) {
        return $scope.entry.fields[contentType.displayField];
      }
    };

    $scope.contentType = function () {
      return getContentType();
    };

    function lookupContentType() {
      return ContentTypeList.lookupContentType(contentTypeId());
    }

    function getContentType() {
      var ct = ContentTypeList.getContentType(contentTypeId());
      if (ct) {
        return ct;
      } else {
        lookupContentType();
      }
    }

    function contentTypeId() {
      return $scope.entry.sys.contentType.sys.id;
    }
  }]);
})();
;//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


//
// Showdown namespace
//
var Showdown = { extensions: {} };

//
// forEach
//
var forEach = Showdown.forEach = function(obj, callback) {
	if (typeof obj.forEach === 'function') {
		obj.forEach(callback);
	} else {
		var i, len = obj.length;
		for (i = 0; i < len; i++) {
			callback(obj[i], i, obj);
		}
	}
};

//
// Standard extension naming
//
var stdExtName = function(s) {
	return s.replace(/[_-]||\s/g, '').toLowerCase();
};

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Showdown.converter = function(converter_options) {

//
// Globals:
//

// Global hashes, used by various utility routines
var g_urls;
var g_titles;
var g_html_blocks;

// Used to track when we're inside an ordered or unordered list
// (see _ProcessListItems() for details):
var g_list_level = 0;

// Global extensions
var g_lang_extensions = [];
var g_output_modifiers = [];


//
// Automatic Extension Loading (node only):
//

if (typeof module !== 'undefind' && typeof exports !== 'undefined' && typeof require !== 'undefind') {
	var fs = require('fs');

	if (fs) {
		// Search extensions folder
		var extensions = fs.readdirSync((__dirname || '.')+'/extensions').filter(function(file){
			return ~file.indexOf('.js');
		}).map(function(file){
			return file.replace(/\.js$/, '');
		});
		// Load extensions into Showdown namespace
		Showdown.forEach(extensions, function(ext){
			var name = stdExtName(ext);
			Showdown.extensions[name] = require('./extensions/' + ext);
		});
	}
}

this.makeHtml = function(text) {
//
// Main function. The order in which other subs are called here is
// essential. Link and image substitutions need to happen before
// _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
// and <img> tags get encoded.
//

	// Clear the global hashes. If we don't clear these, you get conflicts
	// from other articles when generating a page which contains more than
	// one article (e.g. an index page that shows the N most recent
	// articles):
	g_urls = {};
	g_titles = {};
	g_html_blocks = [];

	// attacklab: Replace ~ with ~T
	// This lets us use tilde as an escape char to avoid md5 hashes
	// The choice of character is arbitray; anything that isn't
	// magic in Markdown will work.
	text = text.replace(/~/g,"~T");

	// attacklab: Replace $ with ~D
	// RegExp interprets $ as a special character
	// when it's in a replacement string
	text = text.replace(/\$/g,"~D");

	// Standardize line endings
	text = text.replace(/\r\n/g,"\n"); // DOS to Unix
	text = text.replace(/\r/g,"\n"); // Mac to Unix

	// Make sure text begins and ends with a couple of newlines:
	text = "\n\n" + text + "\n\n";

	// Convert all tabs to spaces.
	text = _Detab(text);

	// Strip any lines consisting only of spaces and tabs.
	// This makes subsequent regexen easier to write, because we can
	// match consecutive blank lines with /\n+/ instead of something
	// contorted like /[ \t]*\n+/ .
	text = text.replace(/^[ \t]+$/mg,"");

	// Run language extensions
	Showdown.forEach(g_lang_extensions, function(x){
		text = _ExecuteExtension(x, text);
	});

	// Handle github codeblocks prior to running HashHTML so that
	// HTML contained within the codeblock gets escaped propertly
	text = _DoGithubCodeBlocks(text);

	// Turn block-level HTML blocks into hash entries
	text = _HashHTMLBlocks(text);

	// Strip link definitions, store in hashes.
	text = _StripLinkDefinitions(text);

	text = _RunBlockGamut(text);

	text = _UnescapeSpecialChars(text);

	// attacklab: Restore dollar signs
	text = text.replace(/~D/g,"$$");

	// attacklab: Restore tildes
	text = text.replace(/~T/g,"~");

	// Run output modifiers
	Showdown.forEach(g_output_modifiers, function(x){
		text = _ExecuteExtension(x, text);
	});

	return text;
};
//
// Options:
//

// Parse extensions options into separate arrays
if (converter_options && converter_options.extensions) {

  var self = this;

	// Iterate over each plugin
	Showdown.forEach(converter_options.extensions, function(plugin){

		// Assume it's a bundled plugin if a string is given
		if (typeof plugin === 'string') {
			plugin = Showdown.extensions[stdExtName(plugin)];
		}

		if (typeof plugin === 'function') {
			// Iterate over each extension within that plugin
			Showdown.forEach(plugin(self), function(ext){
				// Sort extensions by type
				if (ext.type) {
					if (ext.type === 'language' || ext.type === 'lang') {
						g_lang_extensions.push(ext);
					} else if (ext.type === 'output' || ext.type === 'html') {
						g_output_modifiers.push(ext);
					}
				} else {
					// Assume language extension
					g_output_modifiers.push(ext);
				}
			});
		} else {
			throw "Extension '" + plugin + "' could not be loaded.  It was either not found or is not a valid extension.";
		}
	});
}


var _ExecuteExtension = function(ext, text) {
	if (ext.regex) {
		var re = new RegExp(ext.regex, 'g');
		return text.replace(re, ext.replace);
	} else if (ext.filter) {
		return ext.filter(text);
	}
};

var _StripLinkDefinitions = function(text) {
//
// Strips link definitions from text, stores the URLs and titles in
// hash references.
//

	// Link defs are in the form: ^[id]: url "optional title"

	/*
		var text = text.replace(/
				^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
				  [ \t]*
				  \n?				// maybe *one* newline
				  [ \t]*
				<?(\S+?)>?			// url = $2
				  [ \t]*
				  \n?				// maybe one newline
				  [ \t]*
				(?:
				  (\n*)				// any lines skipped = $3 attacklab: lookbehind removed
				  ["(]
				  (.+?)				// title = $4
				  [")]
				  [ \t]*
				)?					// title is optional
				(?:\n+|$)
			  /gm,
			  function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,
		function (wholeMatch,m1,m2,m3,m4) {
			m1 = m1.toLowerCase();
			g_urls[m1] = _EncodeAmpsAndAngles(m2);  // Link IDs are case-insensitive
			if (m3) {
				// Oops, found blank lines, so it's not a title.
				// Put back the parenthetical statement we stole.
				return m3+m4;
			} else if (m4) {
				g_titles[m1] = m4.replace(/"/g,"&quot;");
			}

			// Completely remove the definition from the text
			return "";
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}


var _HashHTMLBlocks = function(text) {
	// attacklab: Double up blank lines to reduce lookaround
	text = text.replace(/\n/g,"\n\n");

	// Hashify HTML blocks:
	// We only want to do this for block-level HTML tags, such as headers,
	// lists, and tables. That's because we still want to wrap <p>s around
	// "paragraphs" that are wrapped in non-block-level tags, such as anchors,
	// phrase emphasis, and spans. The list of tags we're looking for is
	// hard-coded:
	var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
	var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";

	// First, look for nested blocks, e.g.:
	//   <div>
	//     <div>
	//     tags for inner block must be indented.
	//     </div>
	//   </div>
	//
	// The outermost tags must start at the left margin for this to match, and
	// the inner nested divs must be indented.
	// We need to do this before the next, more liberal match, because the next
	// match will start at the first `<div>` and stop at the first `</div>`.

	// attacklab: This regex can be expensive when it fails.
	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_a)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?\n			// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,hashElement);

	//
	// Now match more liberally, simply from `\n<tag>` to `</tag>\n`
	//

	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_b)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?				// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,hashElement);

	// Special case just for <hr />. It was easier to make a special case than
	// to make the other regex more complicated.

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}
			(<(hr)				// start tag = $2
			\b					// word break
			([^<>])*?			//
			\/?>)				// the matching end tag
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,hashElement);

	// Special case for standalone HTML comments:

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}			// attacklab: g_tab_width - 1
			<!
			(--[^\r]*?--\s*)+
			>
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,hashElement);

	// PHP and ASP-style processor instructions (<?...?> and <%...%>)

	/*
		text = text.replace(/
		(?:
			\n\n				// Starting after a blank line
		)
		(						// save in $1
			[ ]{0,3}			// attacklab: g_tab_width - 1
			(?:
				<([?%])			// $2
				[^\r]*?
				\2>
			)
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,hashElement);

	// attacklab: Undo double lines (see comment at top of this function)
	text = text.replace(/\n\n/g,"\n");
	return text;
}

var hashElement = function(wholeMatch,m1) {
	var blockText = m1;

	// Undo double lines
	blockText = blockText.replace(/\n\n/g,"\n");
	blockText = blockText.replace(/^\n/,"");

	// strip trailing blank lines
	blockText = blockText.replace(/\n+$/g,"");

	// Replace the element text with a marker ("~KxK" where x is its key)
	blockText = "\n\n~K" + (g_html_blocks.push(blockText)-1) + "K\n\n";

	return blockText;
};

var _RunBlockGamut = function(text) {
//
// These are all the transformations that form block-level
// tags like paragraphs, headers, and list items.
//
	text = _DoHeaders(text);

	// Do Horizontal Rules:
	var key = hashBlock("<hr />");
	text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,key);

	text = _DoLists(text);
	text = _DoCodeBlocks(text);
	text = _DoBlockQuotes(text);

	// We already ran _HashHTMLBlocks() before, in Markdown(), but that
	// was to escape raw HTML in the original Markdown source. This time,
	// we're escaping the markup we've just created, so that we don't wrap
	// <p> tags around block-level tags.
	text = _HashHTMLBlocks(text);
	text = _FormParagraphs(text);

	return text;
};


var _RunSpanGamut = function(text) {
//
// These are all the transformations that occur *within* block-level
// tags like paragraphs, headers, and list items.
//

	text = _DoCodeSpans(text);
	text = _EscapeSpecialCharsWithinTagAttributes(text);
	text = _EncodeBackslashEscapes(text);

	// Process anchor and image tags. Images must come first,
	// because ![foo][f] looks like an anchor.
	text = _DoImages(text);
	text = _DoAnchors(text);

	// Make links out of things like `<http://example.com/>`
	// Must come after _DoAnchors(), because you can use < and >
	// delimiters in inline links like [this](<url>).
	text = _DoAutoLinks(text);
	text = _EncodeAmpsAndAngles(text);
	text = _DoItalicsAndBold(text);

	// Do hard breaks:
	text = text.replace(/  +\n/g," <br />\n");

	return text;
}

var _EscapeSpecialCharsWithinTagAttributes = function(text) {
//
// Within tags -- meaning between < and > -- encode [\ ` * _] so they
// don't conflict with their use in Markdown for code, italics and strong.
//

	// Build a regex to find HTML tags and comments.  See Friedl's
	// "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

	text = text.replace(regex, function(wholeMatch) {
		var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g,"$1`");
		tag = escapeCharacters(tag,"\\`*_");
		return tag;
	});

	return text;
}

var _DoAnchors = function(text) {
//
// Turn Markdown link shortcuts into XHTML <a> tags.
//
	//
	// First, handle reference-style links: [link text] [id]
	//

	/*
		text = text.replace(/
		(							// wrap whole match in $1
			\[
			(
				(?:
					\[[^\]]*\]		// allow brackets nested one level
					|
					[^\[]			// or anything else
				)*
			)
			\]

			[ ]?					// one optional space
			(?:\n[ ]*)?				// one optional newline followed by spaces

			\[
			(.*?)					// id = $3
			\]
		)()()()()					// pad remaining backreferences
		/g,_DoAnchors_callback);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeAnchorTag);

	//
	// Next, inline-style links: [link text](url "optional title")
	//

	/*
		text = text.replace(/
			(						// wrap whole match in $1
				\[
				(
					(?:
						\[[^\]]*\]	// allow brackets nested one level
					|
					[^\[\]]			// or anything else
				)
			)
			\]
			\(						// literal paren
			[ \t]*
			()						// no id, so leave $3 empty
			<?(.*?)>?				// href = $4
			[ \t]*
			(						// $5
				(['"])				// quote char = $6
				(.*?)				// Title = $7
				\6					// matching quote
				[ \t]*				// ignore any spaces/tabs between closing quote and )
			)?						// title is optional
			\)
		)
		/g,writeAnchorTag);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeAnchorTag);

	//
	// Last, handle reference-style shortcuts: [link text]
	// These must come last in case you've also got [link test][1]
	// or [link test](/foo)
	//

	/*
		text = text.replace(/
		(		 					// wrap whole match in $1
			\[
			([^\[\]]+)				// link text = $2; can't contain '[' or ']'
			\]
		)()()()()()					// pad rest of backreferences
		/g, writeAnchorTag);
	*/
	text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

	return text;
}

var writeAnchorTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	if (m7 == undefined) m7 = "";
	var whole_match = m1;
	var link_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = link_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;

		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			if (whole_match.search(/\(\s*\)$/m)>-1) {
				// Special case for explicit empty url
				url = "";
			} else {
				return whole_match;
			}
		}
	}

	url = escapeCharacters(url,"*_");
	var result = "<a href=\"" + url + "\"";

	if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	}

	result += ">" + link_text + "</a>";

	return result;
}


var _DoImages = function(text) {
//
// Turn Markdown image shortcuts into <img> tags.
//

	//
	// First, handle reference-style labeled images: ![alt text][id]
	//

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]

			[ ]?				// one optional space
			(?:\n[ ]*)?			// one optional newline followed by spaces

			\[
			(.*?)				// id = $3
			\]
		)()()()()				// pad rest of backreferences
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeImageTag);

	//
	// Next, handle inline images:  ![alt text](url "optional title")
	// Don't forget: encode * and _

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]
			\s?					// One optional whitespace character
			\(					// literal paren
			[ \t]*
			()					// no id, so leave $3 empty
			<?(\S+?)>?			// src url = $4
			[ \t]*
			(					// $5
				(['"])			// quote char = $6
				(.*?)			// title = $7
				\6				// matching quote
				[ \t]*
			)?					// title is optional
		\)
		)
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeImageTag);

	return text;
}

var writeImageTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	var whole_match = m1;
	var alt_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (!title) title = "";

	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = alt_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;

		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			return whole_match;
		}
	}

	alt_text = alt_text.replace(/"/g,"&quot;");
	url = escapeCharacters(url,"*_");
	var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

	// attacklab: Markdown.pl adds empty title attributes to images.
	// Replicate this bug.

	//if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	//}

	result += " />";

	return result;
}


var _DoHeaders = function(text) {

	// Setext-style headers:
	//	Header 1
	//	========
	//
	//	Header 2
	//	--------
	//
	text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
		function(wholeMatch,m1){return hashBlock('<h1 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h1>");});

	text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
		function(matchFound,m1){return hashBlock('<h2 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h2>");});

	// atx-style headers:
	//  # Header 1
	//  ## Header 2
	//  ## Header 2 with closing hashes ##
	//  ...
	//  ###### Header 6
	//

	/*
		text = text.replace(/
			^(\#{1,6})				// $1 = string of #'s
			[ \t]*
			(.+?)					// $2 = Header text
			[ \t]*
			\#*						// optional closing #'s (not counted)
			\n+
		/gm, function() {...});
	*/

	text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
		function(wholeMatch,m1,m2) {
			var h_level = m1.length;
			return hashBlock("<h" + h_level + ' id="' + headerId(m2) + '">' + _RunSpanGamut(m2) + "</h" + h_level + ">");
		});

	function headerId(m) {
		return m.replace(/[^\w]/g, '').toLowerCase();
	}
	return text;
}

// This declaration keeps Dojo compressor from outputting garbage:
var _ProcessListItems;

var _DoLists = function(text) {
//
// Form HTML ordered (numbered) and unordered (bulleted) lists.
//

	// attacklab: add sentinel to hack around khtml/safari bug:
	// http://bugs.webkit.org/show_bug.cgi?id=11231
	text += "~0";

	// Re-usable pattern to match any entirel ul or ol list:

	/*
		var whole_list = /
		(									// $1 = whole list
			(								// $2
				[ ]{0,3}					// attacklab: g_tab_width - 1
				([*+-]|\d+[.])				// $3 = first list item marker
				[ \t]+
			)
			[^\r]+?
			(								// $4
				~0							// sentinel for workaround; should be $
			|
				\n{2,}
				(?=\S)
				(?!							// Negative lookahead for another list item marker
					[ \t]*
					(?:[*+-]|\d+[.])[ \t]+
				)
			)
		)/g
	*/
	var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

	if (g_list_level) {
		text = text.replace(whole_list,function(wholeMatch,m1,m2) {
			var list = m1;
			var list_type = (m2.search(/[*+-]/g)>-1) ? "ul" : "ol";

			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);

			// Trim any trailing whitespace, to put the closing `</$list_type>`
			// up on the preceding line, to get it past the current stupid
			// HTML block parser. This is a hack to work around the terrible
			// hack that is the HTML block parser.
			result = result.replace(/\s+$/,"");
			result = "<"+list_type+">" + result + "</"+list_type+">\n";
			return result;
		});
	} else {
		whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
		text = text.replace(whole_list,function(wholeMatch,m1,m2,m3) {
			var runup = m1;
			var list = m2;

			var list_type = (m3.search(/[*+-]/g)>-1) ? "ul" : "ol";
			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			var list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);
			result = runup + "<"+list_type+">\n" + result + "</"+list_type+">\n";
			return result;
		});
	}

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

_ProcessListItems = function(list_str) {
//
//  Process the contents of a single ordered or unordered list, splitting it
//  into individual list items.
//
	// The $g_list_level global keeps track of when we're inside a list.
	// Each time we enter a list, we increment it; when we leave a list,
	// we decrement. If it's zero, we're not in a list anymore.
	//
	// We do this because when we're not inside a list, we want to treat
	// something like this:
	//
	//    I recommend upgrading to version
	//    8. Oops, now this line is treated
	//    as a sub-list.
	//
	// As a single paragraph, despite the fact that the second line starts
	// with a digit-period-space sequence.
	//
	// Whereas when we're inside a list (or sub-list), that line will be
	// treated as the start of a sub-list. What a kludge, huh? This is
	// an aspect of Markdown's syntax that's hard to parse perfectly
	// without resorting to mind-reading. Perhaps the solution is to
	// change the syntax rules such that sub-lists must start with a
	// starting cardinal number; e.g. "1." or "a.".

	g_list_level++;

	// trim trailing blank lines:
	list_str = list_str.replace(/\n{2,}$/,"\n");

	// attacklab: add sentinel to emulate \z
	list_str += "~0";

	/*
		list_str = list_str.replace(/
			(\n)?							// leading line = $1
			(^[ \t]*)						// leading whitespace = $2
			([*+-]|\d+[.]) [ \t]+			// list marker = $3
			([^\r]+?						// list item text   = $4
			(\n{1,2}))
			(?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
		/gm, function(){...});
	*/
	list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
		function(wholeMatch,m1,m2,m3,m4){
			var item = m4;
			var leading_line = m1;
			var leading_space = m2;

			if (leading_line || (item.search(/\n{2,}/)>-1)) {
				item = _RunBlockGamut(_Outdent(item));
			}
			else {
				// Recursion for sub-lists:
				item = _DoLists(_Outdent(item));
				item = item.replace(/\n$/,""); // chomp(item)
				item = _RunSpanGamut(item);
			}

			return  "<li>" + item + "</li>\n";
		}
	);

	// attacklab: strip sentinel
	list_str = list_str.replace(/~0/g,"");

	g_list_level--;
	return list_str;
}


var _DoCodeBlocks = function(text) {
//
//  Process Markdown `<pre><code>` blocks.
//

	/*
		text = text.replace(text,
			/(?:\n\n|^)
			(								// $1 = the code block -- one or more lines, starting with a space/tab
				(?:
					(?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
					.*\n+
				)+
			)
			(\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
		/g,function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
		function(wholeMatch,m1,m2) {
			var codeblock = m1;
			var nextChar = m2;

			codeblock = _EncodeCode( _Outdent(codeblock));
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock) + nextChar;
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
};

var _DoGithubCodeBlocks = function(text) {
//
//  Process Github-style code blocks
//  Example:
//  ```ruby
//  def hello_world(x)
//    puts "Hello, #{x}"
//  end
//  ```
//


	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,
		function(wholeMatch,m1,m2) {
			var language = m1;
			var codeblock = m2;

			codeblock = _EncodeCode(codeblock);
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code" + (language ? " class=\"" + language + '"' : "") + ">" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock);
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

var hashBlock = function(text) {
	text = text.replace(/(^\n+|\n+$)/g,"");
	return "\n\n~K" + (g_html_blocks.push(text)-1) + "K\n\n";
}

var _DoCodeSpans = function(text) {
//
//   *  Backtick quotes are used for <code></code> spans.
//
//   *  You can use multiple backticks as the delimiters if you want to
//	 include literal backticks in the code span. So, this input:
//
//		 Just type ``foo `bar` baz`` at the prompt.
//
//	   Will translate to:
//
//		 <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
//
//	There's no arbitrary limit to the number of backticks you
//	can use as delimters. If you need three consecutive backticks
//	in your code, use four for delimiters, etc.
//
//  *  You can use spaces to get literal backticks at the edges:
//
//		 ... type `` `bar` `` ...
//
//	   Turns to:
//
//		 ... type <code>`bar`</code> ...
//

	/*
		text = text.replace(/
			(^|[^\\])					// Character before opening ` can't be a backslash
			(`+)						// $2 = Opening run of `
			(							// $3 = The code block
				[^\r]*?
				[^`]					// attacklab: work around lack of lookbehind
			)
			\2							// Matching closer
			(?!`)
		/gm, function(){...});
	*/

	text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
		function(wholeMatch,m1,m2,m3,m4) {
			var c = m3;
			c = c.replace(/^([ \t]*)/g,"");	// leading whitespace
			c = c.replace(/[ \t]*$/g,"");	// trailing whitespace
			c = _EncodeCode(c);
			return m1+"<code>"+c+"</code>";
		});

	return text;
}

var _EncodeCode = function(text) {
//
// Encode/escape certain characters inside Markdown code runs.
// The point is that in code, these characters are literals,
// and lose their special Markdown meanings.
//
	// Encode all ampersands; HTML entities are not
	// entities within a Markdown code span.
	text = text.replace(/&/g,"&amp;");

	// Do the angle bracket song and dance:
	text = text.replace(/</g,"&lt;");
	text = text.replace(/>/g,"&gt;");

	// Now, escape characters that are magic in Markdown:
	text = escapeCharacters(text,"\*_{}[]\\",false);

// jj the line above breaks this:
//---

//* Item

//   1. Subitem

//            special char: *
//---

	return text;
}


var _DoItalicsAndBold = function(text) {

	// <strong> must go first:
	text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,
		"<strong>$2</strong>");

	text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,
		"<em>$2</em>");

	return text;
}


var _DoBlockQuotes = function(text) {

	/*
		text = text.replace(/
		(								// Wrap whole match in $1
			(
				^[ \t]*>[ \t]?			// '>' at the start of a line
				.+\n					// rest of the first line
				(.+\n)*					// subsequent consecutive lines
				\n*						// blanks
			)+
		)
		/gm, function(){...});
	*/

	text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
		function(wholeMatch,m1) {
			var bq = m1;

			// attacklab: hack around Konqueror 3.5.4 bug:
			// "----------bug".replace(/^-/g,"") == "bug"

			bq = bq.replace(/^[ \t]*>[ \t]?/gm,"~0");	// trim one level of quoting

			// attacklab: clean up hack
			bq = bq.replace(/~0/g,"");

			bq = bq.replace(/^[ \t]+$/gm,"");		// trim whitespace-only lines
			bq = _RunBlockGamut(bq);				// recurse

			bq = bq.replace(/(^|\n)/g,"$1  ");
			// These leading spaces screw with <pre> content, so we need to fix that:
			bq = bq.replace(
					/(\s*<pre>[^\r]+?<\/pre>)/gm,
				function(wholeMatch,m1) {
					var pre = m1;
					// attacklab: hack around Konqueror 3.5.4 bug:
					pre = pre.replace(/^  /mg,"~0");
					pre = pre.replace(/~0/g,"");
					return pre;
				});

			return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
		});
	return text;
}


var _FormParagraphs = function(text) {
//
//  Params:
//    $text - string to process with html <p> tags
//

	// Strip leading and trailing lines:
	text = text.replace(/^\n+/g,"");
	text = text.replace(/\n+$/g,"");

	var grafs = text.split(/\n{2,}/g);
	var grafsOut = [];

	//
	// Wrap <p> tags.
	//
	var end = grafs.length;
	for (var i=0; i<end; i++) {
		var str = grafs[i];

		// if this is an HTML marker, copy it
		if (str.search(/~K(\d+)K/g) >= 0) {
			grafsOut.push(str);
		}
		else if (str.search(/\S/) >= 0) {
			str = _RunSpanGamut(str);
			str = str.replace(/^([ \t]*)/g,"<p>");
			str += "</p>"
			grafsOut.push(str);
		}

	}

	//
	// Unhashify HTML blocks
	//
	end = grafsOut.length;
	for (var i=0; i<end; i++) {
		// if this is a marker for an html block...
		while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
			var blockText = g_html_blocks[RegExp.$1];
			blockText = blockText.replace(/\$/g,"$$$$"); // Escape any dollar signs
			grafsOut[i] = grafsOut[i].replace(/~K\d+K/,blockText);
		}
	}

	return grafsOut.join("\n\n");
}


var _EncodeAmpsAndAngles = function(text) {
// Smart processing for ampersands and angle brackets that need to be encoded.

	// Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	//   http://bumppo.net/projects/amputator/
	text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");

	// Encode naked <'s
	text = text.replace(/<(?![a-z\/?\$!])/gi,"&lt;");

	return text;
}


var _EncodeBackslashEscapes = function(text) {
//
//   Parameter:  String.
//   Returns:	The string, with after processing the following backslash
//			   escape sequences.
//

	// attacklab: The polite way to do this is with the new
	// escapeCharacters() function:
	//
	// 	text = escapeCharacters(text,"\\",true);
	// 	text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	//
	// ...but we're sidestepping its use of the (slow) RegExp constructor
	// as an optimization for Firefox.  This function gets called a LOT.

	text = text.replace(/\\(\\)/g,escapeCharacters_callback);
	text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g,escapeCharacters_callback);
	return text;
}


var _DoAutoLinks = function(text) {

	text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,"<a href=\"$1\">$1</a>");

	// Email addresses: <address@domain.foo>

	/*
		text = text.replace(/
			<
			(?:mailto:)?
			(
				[-.\w]+
				\@
				[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
			)
			>
		/gi, _DoAutoLinks_callback());
	*/
	text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
		function(wholeMatch,m1) {
			return _EncodeEmailAddress( _UnescapeSpecialChars(m1) );
		}
	);

	return text;
}


var _EncodeEmailAddress = function(addr) {
//
//  Input: an email address, e.g. "foo@example.com"
//
//  Output: the email address as a mailto link, with each character
//	of the address encoded as either a decimal or hex entity, in
//	the hopes of foiling most address harvesting spam bots. E.g.:
//
//	<a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
//	   x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
//	   &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
//
//  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
//  mailing list: <http://tinyurl.com/yu7ue>
//

	var encode = [
		function(ch){return "&#"+ch.charCodeAt(0)+";";},
		function(ch){return "&#x"+ch.charCodeAt(0).toString(16)+";";},
		function(ch){return ch;}
	];

	addr = "mailto:" + addr;

	addr = addr.replace(/./g, function(ch) {
		if (ch == "@") {
		   	// this *must* be encoded. I insist.
			ch = encode[Math.floor(Math.random()*2)](ch);
		} else if (ch !=":") {
			// leave ':' alone (to spot mailto: later)
			var r = Math.random();
			// roughly 10% raw, 45% hex, 45% dec
			ch =  (
					r > .9  ?	encode[2](ch)   :
					r > .45 ?	encode[1](ch)   :
								encode[0](ch)
				);
		}
		return ch;
	});

	addr = "<a href=\"" + addr + "\">" + addr + "</a>";
	addr = addr.replace(/">.+:/g,"\">"); // strip the mailto: from the visible part

	return addr;
}


var _UnescapeSpecialChars = function(text) {
//
// Swap back in all the special characters we've hidden.
//
	text = text.replace(/~E(\d+)E/g,
		function(wholeMatch,m1) {
			var charCodeToReplace = parseInt(m1);
			return String.fromCharCode(charCodeToReplace);
		}
	);
	return text;
}


var _Outdent = function(text) {
//
// Remove one level of line-leading tabs or spaces
//

	// attacklab: hack around Konqueror 3.5.4 bug:
	// "----------bug".replace(/^-/g,"") == "bug"

	text = text.replace(/^(\t|[ ]{1,4})/gm,"~0"); // attacklab: g_tab_width

	// attacklab: clean up hack
	text = text.replace(/~0/g,"")

	return text;
}

var _Detab = function(text) {
// attacklab: Detab's completely rewritten for speed.
// In perl we could fix it by anchoring the regexp with \G.
// In javascript we're less fortunate.

	// expand first n-1 tabs
	text = text.replace(/\t(?=\t)/g,"    "); // attacklab: g_tab_width

	// replace the nth with two sentinels
	text = text.replace(/\t/g,"~A~B");

	// use the sentinel to anchor our regex so it doesn't explode
	text = text.replace(/~B(.+?)~A/g,
		function(wholeMatch,m1,m2) {
			var leadingText = m1;
			var numSpaces = 4 - leadingText.length % 4;  // attacklab: g_tab_width

			// there *must* be a better way to do this:
			for (var i=0; i<numSpaces; i++) leadingText+=" ";

			return leadingText;
		}
	);

	// clean up sentinels
	text = text.replace(/~A/g,"    ");  // attacklab: g_tab_width
	text = text.replace(/~B/g,"");

	return text;
}


//
//  attacklab: Utility functions
//


var escapeCharacters = function(text, charsToEscape, afterBackslash) {
	// First we have to escape the escape characters so that
	// we can build a character class out of them
	var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g,"\\$1") + "])";

	if (afterBackslash) {
		regexString = "\\\\" + regexString;
	}

	var regex = new RegExp(regexString,"g");
	text = text.replace(regex,escapeCharacters_callback);

	return text;
}


var escapeCharacters_callback = function(wholeMatch,m1) {
	var charCodeToEscape = m1.charCodeAt(0);
	return "~E"+charCodeToEscape+"E";
}

} // end of Showdown.converter


// export
if (typeof module !== 'undefined') module.exports = Showdown;

// stolen from AMD branch of underscore
// AMD define happens at the end for compatibility with AMD loaders
// that don't enforce next-turn semantics on modules.
if (typeof define === 'function' && define.amd) {
    define('showdown', function() {
        return Showdown;
    });
}
;// threejs.org/license
'use strict';var THREE={REVISION:"68"};"object"===typeof module&&(module.exports=THREE);THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=0.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=0.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=0.5/Math.sqrt(l+1),this._w=0.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=0.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
0.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=0.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(0.001>Math.abs(k))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=
c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,
this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,
b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=
this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=
a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,
c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=
(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;
this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=
b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=
0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+
Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=
e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=
a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=
this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},
setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(k-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(k+b)&&0.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>l?0.01>h?(b=0.707106781,c=0,d=0.707106781):(c=
Math.sqrt(h),b=d/c,d=k/c):0.01>l?(c=b=0.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<
a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);
this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):
Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,
this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b){var c=THREE.Math.clamp,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],k=d[5],l=d[9],n=d[2],q=d[6],d=d[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(g,-1,1)),0.99999>Math.abs(g)?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-f,e)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(l,-1,1)),0.99999>Math.abs(l)?(this._y=Math.atan2(g,d),this._z=Math.atan2(h,k)):
(this._y=Math.atan2(-n,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(q,-1,1)),0.99999>Math.abs(q)?(this._y=Math.atan2(-n,d),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,e))):"ZYX"===b?(this._y=Math.asin(-c(n,-1,1)),0.99999>Math.abs(n)?(this._x=Math.atan2(q,d),this._z=Math.atan2(h,e)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(c(h,-1,1)),0.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-n,e)):(this._x=0,this._y=Math.atan2(g,d))):"XZY"===b?(this._z=
Math.asin(-c(f,-1,1)),0.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,e)):(this._x=Math.atan2(-l,d),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;this.onChangeCallback();return this},setFromQuaternion:function(a,b,c){var d=THREE.Math.clamp,e=a.x*a.x,f=a.y*a.y,g=a.z*a.z,h=a.w*a.w;b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),h-e-f+g),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w),-1,1)),this._z=Math.atan2(2*
(a.z*a.w-a.x*a.y),h+e-f-g)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z),-1,1)),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h-e-f+g),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h-e+f-g)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z),-1,1)),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),h-e-f+g),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h-e+f-g)):"ZYX"===b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),h-e-f+g),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z),-1,1)),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h+e-f-g)):"YZX"===
b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),h-e+f-g),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),h+e-f-g),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w),-1,1))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),h-e+f-g),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h+e-f-g),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y),-1,1))):console.warn("THREE.Euler: .setFromQuaternion() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);
this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};
THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},
center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||
a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||
a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},
union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);
a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};
THREE.Matrix3=function(a,b,c,d,e,f,g,h,k){var l=this.elements=new Float32Array(9);l[0]=void 0!==a?a:1;l[3]=b||0;l[6]=c||0;l[1]=d||0;l[4]=void 0!==e?e:1;l[7]=f||0;l[2]=g||0;l[5]=h||0;l[8]=void 0!==k?k:1};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],
a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p){var v=this.elements=new Float32Array(16);v[0]=void 0!==a?a:1;v[4]=b||0;v[8]=c||0;v[12]=d||0;v[1]=e||0;v[5]=void 0!==f?f:1;v[9]=g||0;v[13]=h||0;v[2]=k||0;v[6]=l||0;v[10]=void 0!==n?n:1;v[14]=q||0;v[3]=r||0;v[7]=t||0;v[11]=s||0;v[15]=void 0!==p?p:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=h;v[2]=k;v[6]=l;v[10]=n;v[14]=q;v[3]=r;v[7]=t;v[11]=s;v[15]=p;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("THREEMatrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&
console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,l=c*h,n=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-n*d;b[9]=-c*g;b[2]=n-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a+n*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=n+a*c,
b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a-n*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=n-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,n=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+n,b[1]=g*e,b[5]=n*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=n-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-n*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+n,b[5]=f*h,b[9]=k*
e-l,b[2]=l*e-k,b[6]=c*h,b[10]=n*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,n=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(n+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-
(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+n);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],l=c[1],n=c[5],q=c[9],r=c[13],t=c[2],s=c[6],p=c[10],v=c[14],w=c[3],u=c[7],D=c[11],c=c[15],A=d[0],x=d[4],C=d[8],I=d[12],z=d[1],y=d[5],K=d[9],N=d[13],ba=d[2],P=d[6],O=d[10],J=d[14],E=d[3],
Q=d[7],L=d[11],d=d[15];e[0]=f*A+g*z+h*ba+k*E;e[4]=f*x+g*y+h*P+k*Q;e[8]=f*C+g*K+h*O+k*L;e[12]=f*I+g*N+h*J+k*d;e[1]=l*A+n*z+q*ba+r*E;e[5]=l*x+n*y+q*P+r*Q;e[9]=l*C+n*K+q*O+r*L;e[13]=l*I+n*N+q*J+r*d;e[2]=t*A+s*z+p*ba+v*E;e[6]=t*x+s*y+p*P+v*Q;e[10]=t*C+s*K+p*O+v*L;e[14]=t*I+s*N+p*J+v*d;e[3]=w*A+u*z+D*ba+c*E;e[7]=w*x+u*y+D*P+c*Q;e[11]=w*C+u*K+D*O+c*L;e[15]=w*I+u*N+D*J+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];
c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=
b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=
a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],n=a[6],q=a[10],r=a[14];return a[3]*(+e*h*n-d*k*n-e*g*q+c*k*q+d*g*r-c*h*r)+a[7]*(+b*h*r-b*k*q+e*f*q-d*f*r+d*k*l-e*h*l)+a[11]*(+b*k*n-b*g*r-e*f*n+c*f*r+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*n+b*g*q+d*f*n-c*f*q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,
b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=
this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],n=d[9],q=d[13],r=d[2],t=d[6],s=d[10],p=d[14],v=d[3],w=d[7],u=d[11],d=d[15];c[0]=n*p*w-q*s*w+q*t*u-l*p*u-n*t*d+l*s*d;c[4]=h*s*w-g*p*w-h*t*u+f*p*u+g*t*d-f*s*d;c[8]=g*q*w-h*n*w+h*l*u-f*q*u-g*l*d+f*n*d;c[12]=h*n*t-g*q*t-h*l*s+f*q*s+g*l*p-f*n*p;c[1]=q*s*v-n*p*v-q*r*u+k*p*u+n*r*d-k*s*d;c[5]=g*p*v-h*s*v+h*r*u-e*p*u-g*r*d+e*s*d;c[9]=h*n*v-g*q*v-h*k*
u+e*q*u+g*k*d-e*n*d;c[13]=g*q*r-h*n*r+h*k*s-e*q*s-g*k*p+e*n*p;c[2]=l*p*v-q*t*v+q*r*w-k*p*w-l*r*d+k*t*d;c[6]=h*t*v-f*p*v-h*r*w+e*p*w+f*r*d-e*t*d;c[10]=f*q*v-h*l*v+h*k*w-e*q*w-f*k*d+e*l*d;c[14]=h*l*r-f*q*r-h*k*t+e*q*t+f*k*p-e*l*p;c[3]=n*t*v-l*s*v-n*r*w+k*s*w+l*r*u-k*t*u;c[7]=f*s*v-g*t*v+g*r*w-e*s*w-f*r*u+e*t*u;c[11]=g*l*v-f*n*v-g*k*w+e*n*w+f*k*u-e*l*u;c[15]=f*n*r-g*l*r+g*k*t-e*n*t-f*k*s+e*l*s;c=e*c[0]+k*c[4]+r*c[8]+v*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.warn("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.warn("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.warn("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.warn("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(a,b){console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=
c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(0.5*a));
var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=
this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),g=0.5*a.distanceTo(b),
h=this.origin.clone().sub(e);a=-this.direction.dot(f);b=h.dot(this.direction);var k=-h.dot(f),l=h.lengthSq(),n=Math.abs(1-a*a),q,r;0<=n?(h=a*k-b,q=a*b-k,r=g*n,0<=h?q>=-r?q<=r?(g=1/n,h*=g,q*=g,a=h*(h+a*q+2*b)+q*(a*h+q+2*k)+l):(q=g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):(q=-g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):q<=-r?(h=Math.max(0,-(-a*g+b)),q=0<h?-g:Math.min(Math.max(-g,-k),g),a=-h*h+q*(q+2*k)+l):q<=r?(h=0,q=Math.min(Math.max(-g,-k),g),a=q*(q+2*k)+l):(h=Math.max(0,-(a*g+b)),q=0<h?g:Math.min(Math.max(-g,
-k),g),a=-h*h+q*(q+2*k)+l)):(q=0<a?-g:g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l);c&&c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));d&&d.copy(f.clone().multiplyScalar(q).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;
d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;
return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==
c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;
e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],n=c[8],q=c[9],r=c[10],t=c[11],s=c[12],p=c[13],v=c[14],c=c[15];b[0].setComponents(f-a,l-g,t-n,c-s).normalize();b[1].setComponents(f+
a,l+g,t+n,c+s).normalize();b[2].setComponents(f+d,l+h,t+q,c+p).normalize();b[3].setComponents(f-d,l-h,t-q,c-p).normalize();b[4].setComponents(f-e,l-k,t-r,c-v).normalize();b[5].setComponents(f+e,l+k,t+r,c+v).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/180;return function(b){return b*
a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,n,q,r;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;l=this.points[c[0]];n=this.points[c[1]];q=this.points[c[2]];r=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,n.x,q.x,r.x,g,h,k);d.y=b(l.y,n.y,q.y,r.y,g,h,k);d.z=b(l.z,n.z,q.z,r.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},intersectObject:function(a,e){var f=[];c(a,this,f,e);
f.sort(b);return f},intersectObjects:function(a,e){for(var f=[],g=0,h=a.length;g<h;g++)c(a[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},
scale:{enumerable:!0,value:d}});this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add:",
a,"can't be added as a child of itself."),this;if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}else console.error("THREE.Object3D.add:",a,"is not an instance of THREE.Object3D.");return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);
if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverseVisible(a)}},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<
d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);
this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);
a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===
b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Projector=function(){function a(){if(q===t){var a=new THREE.RenderableVertex;r.push(a);t++;q++;return a}return r[q++]}function b(){if(p===w){var a=new THREE.RenderableFace;v.push(a);w++;p++;return a}return v[p++]}function c(){if(D===x){var a=new THREE.RenderableLine;A.push(a);x++;D++;return a}return A[D++]}function d(){if(I===y){var a=new THREE.RenderableSprite;z.push(a);y++;I++;return a}return z[I++]}function e(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function f(a,b){var c=0,d=
1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var g,h,k=[],l=0,n,q,r=[],t=0,s,p,v=[],w=0,u,D,A=[],x=0,C,I,z=[],y=0,K={objects:[],lights:[],elements:[]},N=new THREE.Vector3,ba=new THREE.Vector3,P=new THREE.Vector3,O=new THREE.Vector3,J=new THREE.Vector4,E=new THREE.Box3(new THREE.Vector3(-1,
-1,-1),new THREE.Vector3(1,1,1)),Q=new THREE.Box3,L=Array(3),R=new THREE.Matrix4,B=new THREE.Matrix4,S,V=new THREE.Matrix4,W=new THREE.Matrix3,H=new THREE.Frustum,oa=new THREE.Vector4,$=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);B.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(B)};this.unprojectVector=function(){var a=new THREE.Matrix4;return function(b,c){a.getInverse(c.projectionMatrix);B.multiplyMatrices(c.matrixWorld,
a);return b.applyProjection(B)}}();this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var X=new function(){var d=[],e=[],f=null,g=null,h=new THREE.Matrix3,k=function(a){var b=a.positionWorld,c=a.positionScreen;b.copy(a.position).applyMatrix4(S);c.copy(b).applyMatrix4(B);b=1/c.w;c.x*=b;c.y*=b;c.z*=b;a.visible=-1<=c.x&&1>=c.x&&-1<=c.y&&1>=c.y&&-1<=c.z&&1>=c.z},l=function(a,
b,c){if(!0===a.visible||!0===b.visible||!0===c.visible)return!0;L[0]=a.positionScreen;L[1]=b.positionScreen;L[2]=c.positionScreen;return E.isIntersectionBox(Q.setFromPoints(L))},q=function(a,b,c){return 0>(c.positionScreen.x-a.positionScreen.x)*(b.positionScreen.y-a.positionScreen.y)-(c.positionScreen.y-a.positionScreen.y)*(b.positionScreen.x-a.positionScreen.x)};return{setObject:function(a){f=a;g=f.material;h.getNormalMatrix(f.matrixWorld);d.length=0;e.length=0},projectVertex:k,checkTriangleVisibility:l,
checkBackfaceCulling:q,pushVertex:function(b,c,d){n=a();n.position.set(b,c,d);k(n)},pushNormal:function(a,b,c){d.push(a,b,c)},pushUv:function(a,b){e.push(a,b)},pushLine:function(a,b){var d=r[a],e=r[b];u=c();u.id=f.id;u.v1.copy(d);u.v2.copy(e);u.z=(d.positionScreen.z+e.positionScreen.z)/2;u.material=f.material;K.elements.push(u)},pushTriangle:function(a,c,k){var n=r[a],p=r[c],t=r[k];if(!1!==l(n,p,t)&&(g.side===THREE.DoubleSide||!0===q(n,p,t))){s=b();s.id=f.id;s.v1.copy(n);s.v2.copy(p);s.v3.copy(t);
s.z=(n.positionScreen.z+p.positionScreen.z+t.positionScreen.z)/3;for(n=0;3>n;n++)p=3*arguments[n],t=s.vertexNormalsModel[n],t.set(d[p],d[p+1],d[p+2]),t.applyMatrix3(h).normalize(),p=2*arguments[n],s.uvs[n].set(e[p],e[p+1]);s.vertexNormalsLength=3;s.material=f.material;K.elements.push(s)}}}};this.projectScene=function(n,t,w,v){I=D=p=0;K.elements.length=0;!0===n.autoUpdate&&n.updateMatrixWorld();void 0===t.parent&&t.updateMatrixWorld();R.copy(t.matrixWorldInverse.getInverse(t.matrixWorld));B.multiplyMatrices(t.projectionMatrix,
R);H.setFromMatrix(B);h=0;K.objects.length=0;K.lights.length=0;n.traverseVisible(function(a){if(a instanceof THREE.Light)K.lights.push(a);else if(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Sprite)if(!1===a.frustumCulled||!0===H.intersectsObject(a)){if(h===l){var b=new THREE.RenderableObject;k.push(b);l++;h++;g=b}else g=k[h++];g.id=a.id;g.object=a;null!==a.renderDepth?g.z=a.renderDepth:(O.setFromMatrixPosition(a.matrixWorld),O.applyProjection(B),g.z=O.z);K.objects.push(g)}});
!0===w&&K.objects.sort(e);n=0;for(w=K.objects.length;n<w;n++){var A=K.objects[n].object,x=A.geometry;X.setObject(A);S=A.matrixWorld;q=0;if(A instanceof THREE.Mesh)if(x instanceof THREE.BufferGeometry){var z=x.attributes,A=x.offsets;if(void 0!==z.position){for(var G=z.position.array,x=0,y=G.length;x<y;x+=3)X.pushVertex(G[x],G[x+1],G[x+2]);if(void 0!==z.normal)for(var L=z.normal.array,x=0,y=L.length;x<y;x+=3)X.pushNormal(L[x],L[x+1],L[x+2]);if(void 0!==z.uv)for(L=z.uv.array,x=0,y=L.length;x<y;x+=2)X.pushUv(L[x],
L[x+1]);if(void 0!==z.index)if(z=z.index.array,0<A.length)for(n=0;n<A.length;n++)for(y=A[n],G=y.index,x=y.start,y=y.start+y.count;x<y;x+=3)X.pushTriangle(z[x]+G,z[x+1]+G,z[x+2]+G);else for(x=0,y=z.length;x<y;x+=3)X.pushTriangle(z[x],z[x+1],z[x+2]);else for(x=0,y=G.length/3;x<y;x+=3)X.pushTriangle(x,x+1,x+2)}}else{if(x instanceof THREE.Geometry){var Q=x.vertices,y=x.faces,z=x.faceVertexUvs[0];W.getNormalMatrix(S);for(var G=A.material instanceof THREE.MeshFaceMaterial,L=!0===G?A.material:null,E=0,ca=
Q.length;E<ca;E++){var la=Q[E];X.pushVertex(la.x,la.y,la.z)}Q=0;for(E=y.length;Q<E;Q++){var ca=y[Q],qa=!0===G?L.materials[ca.materialIndex]:A.material;if(void 0!==qa){var ua=qa.side,la=r[ca.a],ja=r[ca.b],Fa=r[ca.c];if(!0===qa.morphTargets){var va=x.morphTargets,Ka=A.morphTargetInfluences,aa=la.position,ra=ja.position,Da=Fa.position;N.set(0,0,0);ba.set(0,0,0);P.set(0,0,0);for(var Qa=0,cb=va.length;Qa<cb;Qa++){var Ga=Ka[Qa];if(0!==Ga){var xa=va[Qa].vertices;N.x+=(xa[ca.a].x-aa.x)*Ga;N.y+=(xa[ca.a].y-
aa.y)*Ga;N.z+=(xa[ca.a].z-aa.z)*Ga;ba.x+=(xa[ca.b].x-ra.x)*Ga;ba.y+=(xa[ca.b].y-ra.y)*Ga;ba.z+=(xa[ca.b].z-ra.z)*Ga;P.x+=(xa[ca.c].x-Da.x)*Ga;P.y+=(xa[ca.c].y-Da.y)*Ga;P.z+=(xa[ca.c].z-Da.z)*Ga}}la.position.add(N);ja.position.add(ba);Fa.position.add(P);X.projectVertex(la);X.projectVertex(ja);X.projectVertex(Fa)}if(!1!==X.checkTriangleVisibility(la,ja,Fa)){va=X.checkBackfaceCulling(la,ja,Fa);if(ua!==THREE.DoubleSide){if(ua===THREE.FrontSide&&!1===va)continue;if(ua===THREE.BackSide&&!0===va)continue}s=
b();s.id=A.id;s.v1.copy(la);s.v2.copy(ja);s.v3.copy(Fa);s.normalModel.copy(ca.normal);!1!==va||ua!==THREE.BackSide&&ua!==THREE.DoubleSide||s.normalModel.negate();s.normalModel.applyMatrix3(W).normalize();Ka=ca.vertexNormals;aa=0;for(ra=Math.min(Ka.length,3);aa<ra;aa++)Da=s.vertexNormalsModel[aa],Da.copy(Ka[aa]),!1!==va||ua!==THREE.BackSide&&ua!==THREE.DoubleSide||Da.negate(),Da.applyMatrix3(W).normalize();s.vertexNormalsLength=Ka.length;ua=z[Q];if(void 0!==ua)for(va=0;3>va;va++)s.uvs[va].copy(ua[va]);
s.color=ca.color;s.material=qa;s.z=(la.positionScreen.z+ja.positionScreen.z+Fa.positionScreen.z)/3;K.elements.push(s)}}}}}else if(A instanceof THREE.Line)if(x instanceof THREE.BufferGeometry){if(z=x.attributes,void 0!==z.position){G=z.position.array;x=0;for(y=G.length;x<y;x+=3)X.pushVertex(G[x],G[x+1],G[x+2]);if(void 0!==z.index)for(z=z.index.array,x=0,y=z.length;x<y;x+=2)X.pushLine(z[x],z[x+1]);else for(z=A.type===THREE.LinePieces?2:1,x=0,y=G.length/3-1;x<y;x+=z)X.pushLine(x,x+1)}}else{if(x instanceof
THREE.Geometry&&(V.multiplyMatrices(B,S),Q=A.geometry.vertices,0!==Q.length))for(la=a(),la.positionScreen.copy(Q[0]).applyMatrix4(V),z=A.type===THREE.LinePieces?2:1,E=1,ca=Q.length;E<ca;E++)la=a(),la.positionScreen.copy(Q[E]).applyMatrix4(V),0<(E+1)%z||(ja=r[q-2],oa.copy(la.positionScreen),$.copy(ja.positionScreen),!0===f(oa,$)&&(oa.multiplyScalar(1/oa.w),$.multiplyScalar(1/$.w),u=c(),u.id=A.id,u.v1.positionScreen.copy(oa),u.v2.positionScreen.copy($),u.z=Math.max(oa.z,$.z),u.material=A.material,A.material.vertexColors===
THREE.VertexColors&&(u.vertexColors[0].copy(A.geometry.colors[E]),u.vertexColors[1].copy(A.geometry.colors[E-1])),K.elements.push(u)))}else A instanceof THREE.Sprite&&(J.set(S.elements[12],S.elements[13],S.elements[14],1),J.applyMatrix4(B),x=1/J.w,J.z*=x,-1<=J.z&&1>=J.z&&(C=d(),C.id=A.id,C.x=J.x*x,C.y=J.y*x,C.z=J.z,C.object=A,C.rotation=A.rotation,C.scale.x=A.scale.x*Math.abs(C.x-(J.x+t.projectionMatrix.elements[0])/(J.w+t.projectionMatrix.elements[12])),C.scale.y=A.scale.y*Math.abs(C.y-(J.y+t.projectionMatrix.elements[5])/
(J.w+t.projectionMatrix.elements[13])),C.material=A.material,K.elements.push(C)))}!0===v&&K.elements.sort(e);return K}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},set:function(a){this.array.set(a);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=
c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this}};THREE.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),
b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0)},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var l=new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(l,3));if(f!==
THREE.NoColors){var n=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(n,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uvs",new THREE.BufferAttribute(q,2))}for(var r=0,t=0,s=0;r<d.length;r++,t+=6,s+=9){var p=d[r],v=c[p.a],w=c[p.b],u=c[p.c];k[s]=v.x;k[s+1]=v.y;k[s+2]=v.z;k[s+3]=w.x;k[s+4]=w.y;k[s+5]=w.z;k[s+6]=u.x;k[s+7]=u.y;k[s+8]=u.z;!0===h?(v=p.vertexNormals[0],w=p.vertexNormals[1],u=p.vertexNormals[2],l[s]=v.x,l[s+1]=v.y,l[s+2]=v.z,l[s+3]=
w.x,l[s+4]=w.y,l[s+5]=w.z,l[s+6]=u.x,l[s+7]=u.y,l[s+8]=u.z):(v=p.normal,l[s]=v.x,l[s+1]=v.y,l[s+2]=v.z,l[s+3]=v.x,l[s+4]=v.y,l[s+5]=v.z,l[s+6]=v.x,l[s+7]=v.y,l[s+8]=v.z);f===THREE.FaceColors?(p=p.color,n[s]=p.r,n[s+1]=p.g,n[s+2]=p.b,n[s+3]=p.r,n[s+4]=p.g,n[s+5]=p.b,n[s+6]=p.r,n[s+7]=p.g,n[s+8]=p.b):f===THREE.VertexColors&&(v=p.vertexColors[0],w=p.vertexColors[1],p=p.vertexColors[2],n[s]=v.r,n[s+1]=v.g,n[s+2]=v.b,n[s+3]=w.r,n[s+4]=w.g,n[s+5]=w.b,n[s+6]=p.r,n[s+7]=p.g,n[s+8]=p.b);!0===g&&(p=e[0][r][0],
v=e[0][r][1],w=e[0][r][2],q[t]=p.x,q[t+1]=p.y,q[t+2]=v.x,q[t+3]=v.y,q[t+4]=w.x,q[t+5]=w.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;if(a){var b=this.boundingBox;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var c=3,d=a.length;c<d;c+=3){var e=a[c],f=a[c+1],g=a[c+2];e<b.min.x?b.min.x=e:e>b.max.x&&(b.max.x=e);f<b.min.y?b.min.y=f:f>b.max.y&&
(b.max.y=f);g<b.min.z?b.min.z=g:g>b.max.z&&(b.max.z=g)}}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')},computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&
(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),
computeFaceNormals:function(){},computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else for(a=0,b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0;var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,k,l,n,q,r=new THREE.Vector3,t=new THREE.Vector3,s=new THREE.Vector3,p=new THREE.Vector3,v=new THREE.Vector3;
if(this.attributes.index){var w=this.attributes.index.array,u=0<this.offsets.length?this.offsets:[{start:0,count:w.length,index:0}];c=0;for(d=u.length;c<d;++c){b=u[c].start;g=u[c].count;var D=u[c].index;a=b;for(b+=g;a<b;a+=3)g=D+w[a],h=D+w[a+1],k=D+w[a+2],l=e[3*g],n=e[3*g+1],q=e[3*g+2],r.set(l,n,q),l=e[3*h],n=e[3*h+1],q=e[3*h+2],t.set(l,n,q),l=e[3*k],n=e[3*k+1],q=e[3*k+2],s.set(l,n,q),p.subVectors(s,t),v.subVectors(r,t),p.cross(v),f[3*g]+=p.x,f[3*g+1]+=p.y,f[3*g+2]+=p.z,f[3*h]+=p.x,f[3*h+1]+=p.y,
f[3*h+2]+=p.z,f[3*k]+=p.x,f[3*k+1]+=p.y,f[3*k+2]+=p.z}}else for(a=0,b=e.length;a<b;a+=9)l=e[a],n=e[a+1],q=e[a+2],r.set(l,n,q),l=e[a+3],n=e[a+4],q=e[a+5],t.set(l,n,q),l=e[a+6],n=e[a+7],q=e[a+8],s.set(l,n,q),p.subVectors(s,t),v.subVectors(r,t),p.cross(v),f[a]=p.x,f[a+1]=p.y,f[a+2]=p.z,f[a+3]=p.x,f[a+4]=p.y,f[a+5]=p.z,f[a+6]=p.x,f[a+7]=p.y,f[a+8]=p.z;this.normalizeNormals();this.normalsNeedUpdate=!0}},computeTangents:function(){function a(a,b,c){q=d[3*a];r=d[3*a+1];t=d[3*a+2];s=d[3*b];p=d[3*b+1];v=d[3*
b+2];w=d[3*c];u=d[3*c+1];D=d[3*c+2];A=f[2*a];x=f[2*a+1];C=f[2*b];I=f[2*b+1];z=f[2*c];y=f[2*c+1];K=s-q;N=w-q;ba=p-r;P=u-r;O=v-t;J=D-t;E=C-A;Q=z-A;L=I-x;R=y-x;B=1/(E*R-Q*L);S.set((R*K-L*N)*B,(R*ba-L*P)*B,(R*O-L*J)*B);V.set((E*N-Q*K)*B,(E*P-Q*ba)*B,(E*J-Q*O)*B);k[a].add(S);k[b].add(S);k[c].add(S);l[a].add(V);l[b].add(V);l[c].add(V)}function b(a){za.x=e[3*a];za.y=e[3*a+1];za.z=e[3*a+2];Oa.copy(za);G=k[a];Ea.copy(G);Ea.sub(za.multiplyScalar(za.dot(G))).normalize();Aa.crossVectors(Oa,G);Ba=Aa.dot(l[a]);
Pa=0>Ba?-1:1;h[4*a]=Ea.x;h[4*a+1]=Ea.y;h[4*a+2]=Ea.z;h[4*a+3]=Pa}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent=
{itemSize:4,array:new Float32Array(4*g)});for(var h=this.attributes.tangent.array,k=[],l=[],n=0;n<g;n++)k[n]=new THREE.Vector3,l[n]=new THREE.Vector3;var q,r,t,s,p,v,w,u,D,A,x,C,I,z,y,K,N,ba,P,O,J,E,Q,L,R,B,S=new THREE.Vector3,V=new THREE.Vector3,W,H,oa,$,X,T=this.offsets,n=0;for(H=T.length;n<H;++n){W=T[n].start;oa=T[n].count;var ya=T[n].index,g=W;for(W+=oa;g<W;g+=3)oa=ya+c[g],$=ya+c[g+1],X=ya+c[g+2],a(oa,$,X)}var Ea=new THREE.Vector3,Aa=new THREE.Vector3,za=new THREE.Vector3,Oa=new THREE.Vector3,
Pa,G,Ba,n=0;for(H=T.length;n<H;++n)for(W=T[n].start,oa=T[n].count,ya=T[n].index,g=W,W+=oa;g<W;g+=3)oa=ya+c[g],$=ya+c[g+1],X=ya+c[g+2],b(oa),b($),b(X)}},computeOffsets:function(a){var b=a;void 0===a&&(b=65535);Date.now();a=this.attributes.index.array;for(var c=this.attributes.position.array,d=a.length/3,e=new Uint16Array(a.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,n=0,q=new Int32Array(6),r=new Int32Array(c.length),t=new Int32Array(c.length),s=0;s<c.length;s++)r[s]=-1,t[s]=-1;for(c=0;c<
d;c++){for(var p=n=0;3>p;p++)s=a[3*c+p],-1==r[s]?(q[2*p]=s,q[2*p+1]=-1,n++):r[s]<k.index?(q[2*p]=s,q[2*p+1]=-1,l++):(q[2*p]=s,q[2*p+1]=r[s]);if(g+n>k.index+b)for(k={start:f,count:0,index:g},h.push(k),n=0;6>n;n+=2)p=q[n+1],-1<p&&p<k.index&&(q[n+1]=-1);for(n=0;6>n;n+=2)s=q[n],p=q[n+1],-1===p&&(p=g++),r[s]=p,t[p]=s,e[f++]=p-k.index,k.count++}this.reorderBuffers(e,t,g);return this.offsets=h},merge:function(){console.log("BufferGeometry.merge(): TODO")},normalizeNormals:function(){for(var a=this.attributes.normal.array,
b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],f;for(f in this.attributes)if("index"!=f)for(var g=this.attributes[f].array,h=0,k=e.length;h<k;h++){var l=e[h];if(g instanceof l){d[f]=new l(this.attributes[f].itemSize*c);break}}for(e=0;e<c;e++)for(f in g=b[e],this.attributes)if("index"!=
f)for(var h=this.attributes[f].array,k=this.attributes[f].itemSize,l=d[f],n=0;n<k;n++)l[e*k+n]=h[g*k+n];this.attributes.index.array=a;for(f in this.attributes)"index"!=f&&(this.attributes[f].array=d[f],this.attributes[f].numItems=this.attributes[f].itemSize*c)},clone:function(){var a=new THREE.BufferGeometry,b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,
array:null},d=0,g=b.length;d<g;d++){var h=b[d];if(e instanceof h){f.array=new h(e);break}}a.attributes[c]=f}d=0;for(g=this.offsets.length;d<g;d++)b=this.offsets[d],a.offsets.push({start:b.start,index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=
this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof THREE.Sphere&&this.computeBoundingSphere()},
center:function(){this.computeBoundingBox();var a=new THREE.Vector3;a.addVectors(this.boundingBox.min,this.boundingBox.max);a.multiplyScalar(-0.5);this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x,a.y,a.z));this.computeBoundingBox();return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();
e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=0,b=this.faces.length;a<
b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||
(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=
0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=
e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p,v,w=[],u=[];c=new THREE.Vector3;var D=new THREE.Vector3,A=new THREE.Vector3,x=new THREE.Vector3,C=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)w[a]=new THREE.Vector3,u[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,v=e.b,e=e.c,g=this.vertices[d],h=this.vertices[v],k=this.vertices[e],l=f[0],n=f[1],q=f[2],
f=h.x-g.x,r=k.x-g.x,t=h.y-g.y,s=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=n.x-l.x,p=q.x-l.x,n=n.y-l.y,l=q.y-l.y,q=1/(k*l-p*n),c.set((l*f-n*r)*q,(l*t-n*s)*q,(l*h-n*g)*q),D.set((k*r-p*f)*q,(k*s-p*t)*q,(k*g-p*h)*q),w[d].add(c),w[v].add(c),w[e].add(c),u[d].add(D),u[v].add(D),u[e].add(D);D=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)C.copy(e.vertexNormals[c]),d=e[D[c]],v=w[d],A.copy(v),A.sub(C.multiplyScalar(C.dot(v))).normalize(),x.crossVectors(e.vertexNormals[c],
v),d=x.dot(u[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(A.x,A.y,A.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},
merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var n=0,q=g.length;n<q;n++){var r=g[n].clone();void 0!==b&&r.applyMatrix4(b);f.push(r)}n=0;for(q=k.length;n<q;n++){var g=k[n],t,s=g.vertexNormals,p=
g.vertexColors,r=new THREE.Face3(g.a+e,g.b+e,g.c+e);r.normal.copy(g.normal);void 0!==d&&r.normal.applyMatrix3(d).normalize();b=0;for(f=s.length;b<f;b++)t=s[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),r.vertexNormals.push(t);r.color.copy(g.color);b=0;for(f=p.length;b<f;b++)t=p[b],r.vertexColors.push(t.clone());r.materialIndex=g.materialIndex+c;h.push(r)}n=0;for(q=a.length;n<q;n++)if(c=a[n],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(new THREE.Vector2(c[b].x,c[b].y));l.push(d)}}},mergeVertices:function(){var a=
{},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,
1);f=this.vertices.length-b.length;this.vertices=b;return f},makeGroups:function(){var a=0;return function(b,c){var d,e,f,g,h={},k,l=this.morphTargets.length,n=this.morphNormals.length;this.geometryGroups={};this.geometryGroupsList=[];d=0;for(e=this.faces.length;d<e;d++)f=this.faces[d],f=b?f.materialIndex:0,f in h||(h[f]={hash:f,counter:0}),g=h[f].hash+"_"+h[f].counter,g in this.geometryGroups||(k={id:a++,faces3:[],materialIndex:f,vertices:0,numMorphTargets:l,numMorphNormals:n},this.geometryGroups[g]=
k,this.geometryGroupsList.push(k)),this.geometryGroups[g].vertices+3>c&&(h[f].counter+=1,g=h[f].hash+"_"+h[f].counter,g in this.geometryGroups||(k={id:a++,faces3:[],materialIndex:f,vertices:0,numMorphTargets:l,numMorphNormals:n},this.geometryGroups[g]=k,this.geometryGroupsList.push(k))),this.geometryGroups[g].faces3.push(d),this.geometryGroups[g].vertices+=3}}(),clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=
b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};
THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,r=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=r;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};
THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};
THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};
THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=
this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache=function(){this.files={}};THREE.Cache.prototype={constructor:THREE.Cache,add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
d,e,g,h,k,p){var v=b+e,w,u=THREE.Loader.Handlers.get(v);null!==u?w=u.load(v):(w=new THREE.Texture,u=f.imageLoader,u.crossOrigin=f.crossOrigin,u.load(v,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);w.image=e}else w.image=a;w.needsUpdate=!0}));w.sourceFile=e;g&&(w.repeat.set(g[0],g[1]),1!==g[0]&&(w.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(w.wrapT=THREE.RepeatWrapping));h&&w.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(w.wrapS=e[k[0]]),void 0!==e[k[1]]&&(w.wrapT=e[k[1]]));p&&(w.anisotropy=p);a[d]=w}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)h.transparent=a.transparent;void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===
a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorAmbient&&(h.ambient=e(a.colorAmbient));a.colorEmissive&&(h.emissive=e(a.colorEmissive));a.transparency&&(h.opacity=a.transparency);a.specularCoef&&(h.shininess=a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,
a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&
b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormal?(g=THREE.ShaderLib.normalmap,k=THREE.UniformsUtils.clone(g.uniforms),k.tNormal.value=h.normalMap,a.mapNormalFactor&&k.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),h.map&&(k.tDiffuse.value=h.map,k.enableDiffuse.value=!0),h.specularMap&&(k.tSpecular.value=h.specularMap,k.enableSpecular.value=!0),h.lightMap&&(k.tAO.value=h.lightMap,
k.enableAO.value=!0),k.diffuse.value.setHex(h.color),k.specular.value.setHex(h.specular),k.ambient.value.setHex(h.ambient),k.shininess.value=h.shininess,void 0!==h.opacity&&(k.opacity.value=h.opacity),g=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:k,lights:!0,fog:!0}),h.transparent&&(g.transparent=!0)):g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){e.cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),void 0!==b&&f.addEventListener("load",function(c){e.cache.add(a,this);b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);if(void 0!==h.metadata&&"scene"===h.metadata.type){console.error('THREE.JSONLoader: "'+b+'" seems to be a Scene. Use THREE.SceneLoader instead.');return}h=a.parse(h,d);c(h.geometry,h.materials)}else console.error('THREE.JSONLoader: "'+b+'" seems to be unreachable or the file is empty.');
a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load \""+b+'" ('+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,n,q,r,t,s,p,v,w,u=a.faces;n=a.vertices;var D=a.normals,A=a.colors,x=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&x++;for(d=0;d<x;d++)c.faceVertexUvs[d]=[]}k=0;for(l=n.length;k<l;)d=new THREE.Vector3,d.x=n[k++]*b,d.y=n[k++]*b,d.z=n[k++]*b,c.vertices.push(d);k=0;for(l=u.length;k<l;)if(b=u[k++],t=b&1,h=b&2,d=b&8,q=b&16,s=b&32,n=b&64,b&=128,t){t=new THREE.Face3;
t.a=u[k];t.b=u[k+1];t.c=u[k+3];p=new THREE.Face3;p.a=u[k+1];p.b=u[k+2];p.c=u[k+3];k+=4;h&&(h=u[k++],t.materialIndex=h,p.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<x;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)r=u[k++],w=v[2*r],r=v[2*r+1],w=new THREE.Vector2(w,r),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);q&&(q=3*u[k++],t.normal.set(D[q++],D[q++],D[q]),p.normal.copy(t.normal));if(s)for(d=0;4>d;d++)q=3*u[k++],s=new THREE.Vector3(D[q++],
D[q++],D[q]),2!==d&&t.vertexNormals.push(s),0!==d&&p.vertexNormals.push(s);n&&(n=u[k++],n=A[n],t.color.setHex(n),p.color.setHex(n));if(b)for(d=0;4>d;d++)n=u[k++],n=A[n],2!==d&&t.vertexColors.push(new THREE.Color(n)),0!==d&&p.vertexColors.push(new THREE.Color(n));c.faces.push(t);c.faces.push(p)}else{t=new THREE.Face3;t.a=u[k++];t.b=u[k++];t.c=u[k++];h&&(h=u[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<x;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)r=u[k++],w=v[2*r],r=v[2*r+1],
w=new THREE.Vector2(w,r),c.faceVertexUvs[d][h].push(w);q&&(q=3*u[k++],t.normal.set(D[q++],D[q++],D[q]));if(s)for(d=0;3>d;d++)q=3*u[k++],s=new THREE.Vector3(D[q++],D[q++],D[q]),t.vertexNormals.push(s);n&&(n=u[k++],t.color.setHex(A[n]));if(b)for(d=0;3>d;d++)n=u[k++],t.vertexColors.push(new THREE.Color(A[n]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+
"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,l,n;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,n=a.morphTargets[d].vertices,h=0,k=n.length;h<k;h+=3){var q=new THREE.Vector3;q.x=n[h]*b;q.y=n[h+1]*b;q.z=n[h+2]*b;l.push(q)}}if(void 0!==a.morphColors)for(d=
0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)n=new THREE.Color(16755200),n.setRGB(l[b],l[b+1],l[b+2]),k.push(n)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};
THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader;f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d;for(d in c){var e=c[d];b.attributes[d]={itemSize:e.itemSize,array:new self[e.type](e.array)}}c=a.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));a=a.boundingSphere;
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader;f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=
0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":g=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);
break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=
d.parse(h.data);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,
b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,
b.groundColor,b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?
(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};
THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;
a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=
!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a)};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};
THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(a,c){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;
THREE.Texture=function(a,b,c,d,e,f,g,h,k){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==k?k:1;this.format=void 0!==
g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=new THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};
THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()});this.sortParticles=!1};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var l=c.ray.origin.distanceTo(k);
d.push({distance:l,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var l=f.attributes,n=l.position.array;if(void 0!==l.index){var l=l.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:l.length,index:0}]);for(var r=0,t=q.length;r<t;++r)for(var s=q[r].start,p=q[r].index,f=s,s=s+q[r].count;f<s;f++){var v=p+l[f];k.set(n[3*v],n[3*v+1],n[3*v+2]);g(k,v)}}else for(l=n.length/3,f=0;f<l;f++)k.set(n[3*f],n[3*f+1],n[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(d.ray).applyMatrix4(a),g instanceof THREE.Geometry))for(var g=g.vertices,h=g.length,k=new THREE.Vector3,l=new THREE.Vector3,n=this.type===THREE.LineStrip?
1:2,q=0;q<h-1;q+=n)if(!(b.distanceSqToSegment(g[q],g[q+1],l,k)>f)){var r=b.origin.distanceTo(l);r<d.near||r>d.far||e.push({distance:r,point:k.clone().applyMatrix4(this.matrixWorld),face:null,faceIndex:null,object:this})}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var l=
this.material;if(void 0!==l){var n=k.attributes,q,r,t=g.precision;if(void 0!==n.index){var s=n.index.array,p=n.position.array,v=k.offsets;0===v.length&&(v=[{start:0,count:s.length,index:0}]);for(var w=0,u=v.length;w<u;++w)for(var n=v[w].start,D=v[w].index,k=n,A=n+v[w].count;k<A;k+=3){n=D+s[k];q=D+s[k+1];r=D+s[k+2];d.set(p[3*n],p[3*n+1],p[3*n+2]);e.set(p[3*q],p[3*q+1],p[3*q+2]);f.set(p[3*r],p[3*r+1],p[3*r+2]);var x=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==
THREE.DoubleSide);if(null!==x){x.applyMatrix4(this.matrixWorld);var C=g.ray.origin.distanceTo(x);C<t||C<g.near||C>g.far||h.push({distance:C,point:x,indices:[n,q,r],face:null,faceIndex:null,object:this})}}}else for(p=n.position.array,s=k=0,A=p.length;k<A;k+=3,s+=9)n=k,q=k+1,r=k+2,d.set(p[s],p[s+1],p[s+2]),e.set(p[s+3],p[s+4],p[s+5]),f.set(p[s+6],p[s+7],p[s+8]),x=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide),null!==x&&(x.applyMatrix4(this.matrixWorld),
C=g.ray.origin.distanceTo(x),C<t||C<g.near||C>g.far||h.push({distance:C,point:x,indices:[n,q,r],face:null,faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(s=this.material instanceof THREE.MeshFaceMaterial,p=!0===s?this.material.materials:null,t=g.precision,v=k.vertices,w=0,u=k.faces.length;w<u;w++)if(D=k.faces[w],l=!0===s?p[D.materialIndex]:this.material,void 0!==l){n=v[D.a];q=v[D.b];r=v[D.c];if(!0===l.morphTargets){x=k.morphTargets;C=this.morphTargetInfluences;d.set(0,0,0);
e.set(0,0,0);f.set(0,0,0);for(var A=0,I=x.length;A<I;A++){var z=C[A];if(0!==z){var y=x[A].vertices;d.x+=(y[D.a].x-n.x)*z;d.y+=(y[D.a].y-n.y)*z;d.z+=(y[D.a].z-n.z)*z;e.x+=(y[D.b].x-q.x)*z;e.y+=(y[D.b].y-q.y)*z;e.z+=(y[D.b].z-q.z)*z;f.x+=(y[D.c].x-r.x)*z;f.y+=(y[D.c].y-r.y)*z;f.z+=(y[D.c].z-r.z)*z}}d.add(n);e.add(q);f.add(r);n=d;q=e;r=f}x=l.side===THREE.BackSide?b.intersectTriangle(r,q,n,!0):b.intersectTriangle(n,q,r,l.side!==THREE.DoubleSide);null!==x&&(x.applyMatrix4(this.matrixWorld),C=g.ray.origin.distanceTo(x),
C<t||C<g.near||C>g.far||h.push({distance:C,point:x,face:D,faceIndex:w,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.accumulatedSclWeight=this.accumulatedPosWeight=this.accumulatedRotWeight=0};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.updateMatrixWorld=function(a){THREE.Object3D.prototype.updateMatrixWorld.call(this,a);this.accumulatedSclWeight=this.accumulatedPosWeight=this.accumulatedRotWeight=0};
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){for(var a=new THREE.Matrix4,b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,1,1);h=0;for(k=
this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Float32Array([-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0]),b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(a,3));return function(a){THREE.Object3D.call(this);this.geometry=b;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}this.dispatchEvent({type:"objectAdded",object:a});a.dispatchEvent({type:"addedToScene",scene:this});for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));this.dispatchEvent({type:"objectRemoved",object:a});a.dispatchEvent({type:"removedFromScene",scene:this});for(b=
0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};
THREE.CanvasRenderer=function(a){function b(a,b,c,d){l(b);n(c);q(d);r(a.getStyle());O.stroke();ra.expandByScalar(2*b)}function c(a){t(a.getStyle());O.fill()}function d(a){e(a.target)}function e(a){if(!(a instanceof THREE.CompressedTexture)){var b=a.wrapS===THREE.RepeatWrapping,c=a.wrapT===THREE.RepeatWrapping,d=a.image,e=document.createElement("canvas");e.width=d.width;e.height=d.height;var f=e.getContext("2d");f.setTransform(1,0,0,-1,0,d.height);f.drawImage(d,0,0);Ca[a.id]=O.createPattern(e,!0===
b&&!0===c?"repeat":!0===b&&!1===c?"repeat-x":!1===b&&!0===c?"repeat-y":"no-repeat")}}function f(a,b,c,f,g,h,k,l,n,r,q,s,p){if(!(p instanceof THREE.DataTexture)){!1===p.hasEventListener("update",d)&&(void 0!==p.image&&0<p.image.width&&e(p),p.addEventListener("update",d));var m=Ca[p.id];if(void 0!==m){t(m);var m=p.offset.x/p.repeat.x,w=p.offset.y/p.repeat.y,u=p.image.width*p.repeat.x;p=p.image.height*p.repeat.y;k=(k+m)*u;l=(l+w)*p;c-=a;f-=b;g-=a;h-=b;n=(n+m)*u-k;r=(r+w)*p-l;q=(q+m)*u-k;s=(s+w)*p-l;
p=n*s-q*r;0!==p&&(m=1/p,p=(s*c-r*g)*m,r=(s*f-r*h)*m,c=(n*g-q*c)*m,f=(n*h-q*f)*m,a=a-p*k-c*l,b=b-r*k-f*l,O.save(),O.transform(p,r,c,f,a,b),O.fill(),O.restore())}else t("rgba(0,0,0,1)"),O.fill()}}function g(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function h(a){Q!==a&&(Q=O.globalAlpha=a)}function k(a){L!==a&&(a===THREE.NormalBlending?O.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?O.globalCompositeOperation="lighter":
a===THREE.SubtractiveBlending&&(O.globalCompositeOperation="darker"),L=a)}function l(a){S!==a&&(S=O.lineWidth=a)}function n(a){V!==a&&(V=O.lineCap=a)}function q(a){W!==a&&(W=O.lineJoin=a)}function r(a){R!==a&&(R=O.strokeStyle=a)}function t(a){B!==a&&(B=O.fillStyle=a)}function s(a){H.length!==a.length&&(O.setLineDash(a),H=a)}console.log("THREE.CanvasRenderer",THREE.REVISION);var p=THREE.Math.smoothstep;a=a||{};var v=this,w,u,D,A=new THREE.Projector,x=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
C=x.width,I=x.height,z=Math.floor(C/2),y=Math.floor(I/2),K=0,N=0,ba=C,P=I,O=x.getContext("2d",{alpha:!0===a.alpha}),J=new THREE.Color(0),E=0,Q=1,L=0,R=null,B=null,S=null,V=null,W=null,H=[],oa,$,X,T;new THREE.RenderableVertex;new THREE.RenderableVertex;var ya,Ea,Aa,za,Oa,Pa,G=new THREE.Color;new THREE.Color;new THREE.Color;new THREE.Color;new THREE.Color;var Ba=new THREE.Color,Ya=new THREE.Color,Za=new THREE.Color,Ca={},ca,la,qa,ua,ja,Fa,va,Ka=new THREE.Box2,aa=new THREE.Box2,ra=new THREE.Box2,Da=
new THREE.Color,Qa=new THREE.Color,cb=new THREE.Color,Ga=new THREE.Vector3,xa=new THREE.Vector3,ma=new THREE.Vector3,Ja=new THREE.Matrix3;void 0===O.setLineDash&&(O.setLineDash=function(){});this.domElement=x;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=
function(a,b,c){C=a*this.devicePixelRatio;I=b*this.devicePixelRatio;x.width=C;x.height=I;z=Math.floor(C/2);y=Math.floor(I/2);!1!==c&&(x.style.width=a+"px",x.style.height=b+"px");Ka.min.set(-z,-y);Ka.max.set(z,y);aa.min.set(-z,-y);aa.max.set(z,y);Q=1;L=0;W=V=S=B=R=null;this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){K=a*this.devicePixelRatio;N=b*this.devicePixelRatio;ba=c*this.devicePixelRatio;P=d*this.devicePixelRatio};this.setScissor=function(){};this.enableScissorTest=function(){};
this.setClearColor=function(a,b){J.set(a);E=void 0!==b?b:1;aa.min.set(-z,-y);aa.max.set(z,y)};this.setClearColorHex=function(a,b){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return J};this.getClearAlpha=function(){return E};this.getMaxAnisotropy=function(){return 0};this.clear=function(){!1===aa.empty()&&(aa.intersect(Ka),aa.expandByScalar(2),aa.min.x+=z,aa.min.y=-aa.min.y+y,aa.max.x+=
z,aa.max.y=-aa.max.y+y,1>E&&O.clearRect(aa.min.x|0,aa.min.y|0,aa.max.x-aa.min.x|0,aa.max.y-aa.min.y|0),0<E&&(k(THREE.NormalBlending),h(1),t("rgba("+Math.floor(255*J.r)+","+Math.floor(255*J.g)+","+Math.floor(255*J.b)+","+E+")"),O.fillRect(aa.min.x|0,aa.min.y|0,aa.max.x-aa.min.x|0,aa.max.y-aa.min.y|0)),aa.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};this.clearStencil=function(){};this.render=function(a,x){if(!1===x instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{!0===this.autoClear&&this.clear();v.info.render.vertices=0;v.info.render.faces=0;O.setTransform(ba/C,0,0,-P/I,K,I-N);O.translate(z,y);w=A.projectScene(a,x,this.sortObjects,this.sortElements);u=w.elements;D=w.lights;oa=x;Ja.getNormalMatrix(x.matrixWorldInverse);Da.setRGB(0,0,0);Qa.setRGB(0,0,0);cb.setRGB(0,0,0);for(var L=0,Q=D.length;L<Q;L++){var E=D[L],H=E.color;E instanceof THREE.AmbientLight?Da.add(H):E instanceof THREE.DirectionalLight?Qa.add(H):E instanceof THREE.PointLight&&cb.add(H)}L=
0;for(Q=u.length;L<Q;L++){var J=u[L],B=J.material;if(void 0!==B&&0!==B.opacity){ra.makeEmpty();if(J instanceof THREE.RenderableSprite){$=J;$.x*=z;$.y*=y;var E=$,R=J,H=B;h(H.opacity);k(H.blending);var ea=R.scale.x*z,R=R.scale.y*y,J=0.5*Math.sqrt(ea*ea+R*R);ra.min.set(E.x-J,E.y-J);ra.max.set(E.x+J,E.y+J);if(H instanceof THREE.SpriteMaterial){var da=H.map;if(null!==da&&void 0!==da.image){!1===da.hasEventListener("update",d)&&(0<da.image.width&&e(da),da.addEventListener("update",d));J=Ca[da.id];void 0!==
J?t(J):t("rgba( 0, 0, 0, 1 )");var S=da.image,J=S.width*da.offset.x,B=S.height*da.offset.y,V=S.width*da.repeat.x,da=S.height*da.repeat.y,S=ea/V,m=R/da;O.save();O.translate(E.x,E.y);0!==H.rotation&&O.rotate(H.rotation);O.translate(-ea/2,-R/2);O.scale(S,m);O.translate(-J,-B);O.fillRect(J,B,V,da)}else t(H.color.getStyle()),O.save(),O.translate(E.x,E.y),0!==H.rotation&&O.rotate(H.rotation),O.scale(ea,-R),O.fillRect(-0.5,-0.5,1,1);O.restore()}else H instanceof THREE.SpriteCanvasMaterial&&(r(H.color.getStyle()),
t(H.color.getStyle()),O.save(),O.translate(E.x,E.y),0!==H.rotation&&O.rotate(H.rotation),O.scale(ea,R),H.program(O),O.restore())}else if(J instanceof THREE.RenderableLine){if($=J.v1,X=J.v2,$.positionScreen.x*=z,$.positionScreen.y*=y,X.positionScreen.x*=z,X.positionScreen.y*=y,ra.setFromPoints([$.positionScreen,X.positionScreen]),!0===Ka.isIntersectionBox(ra))if(E=$,H=X,ea=J,R=B,h(R.opacity),k(R.blending),O.beginPath(),O.moveTo(E.positionScreen.x,E.positionScreen.y),O.lineTo(H.positionScreen.x,H.positionScreen.y),
R instanceof THREE.LineBasicMaterial){l(R.linewidth);n(R.linecap);q(R.linejoin);if(R.vertexColors!==THREE.VertexColors)r(R.color.getStyle());else if(J=ea.vertexColors[0].getStyle(),ea=ea.vertexColors[1].getStyle(),J===ea)r(J);else{try{var W=O.createLinearGradient(E.positionScreen.x,E.positionScreen.y,H.positionScreen.x,H.positionScreen.y);W.addColorStop(0,J);W.addColorStop(1,ea)}catch(xb){W=J}r(W)}O.stroke();ra.expandByScalar(2*R.linewidth)}else R instanceof THREE.LineDashedMaterial&&(l(R.linewidth),
n(R.linecap),q(R.linejoin),r(R.color.getStyle()),s([R.dashSize,R.gapSize]),O.stroke(),ra.expandByScalar(2*R.linewidth),s([]))}else if(J instanceof THREE.RenderableFace){$=J.v1;X=J.v2;T=J.v3;if(-1>$.positionScreen.z||1<$.positionScreen.z)continue;if(-1>X.positionScreen.z||1<X.positionScreen.z)continue;if(-1>T.positionScreen.z||1<T.positionScreen.z)continue;$.positionScreen.x*=z;$.positionScreen.y*=y;X.positionScreen.x*=z;X.positionScreen.y*=y;T.positionScreen.x*=z;T.positionScreen.y*=y;0<B.overdraw&&
(g($.positionScreen,X.positionScreen,B.overdraw),g(X.positionScreen,T.positionScreen,B.overdraw),g(T.positionScreen,$.positionScreen,B.overdraw));ra.setFromPoints([$.positionScreen,X.positionScreen,T.positionScreen]);if(!0===Ka.isIntersectionBox(ra)){H=$;ea=X;R=T;E=B;v.info.render.vertices+=3;v.info.render.faces++;h(E.opacity);k(E.blending);ya=H.positionScreen.x;Ea=H.positionScreen.y;Aa=ea.positionScreen.x;za=ea.positionScreen.y;Oa=R.positionScreen.x;Pa=R.positionScreen.y;var B=ya,V=Ea,da=Aa,S=za,
m=Oa,Ta=Pa;O.beginPath();O.moveTo(B,V);O.lineTo(da,S);O.lineTo(m,Ta);O.closePath();if((E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial)&&null===E.map){Ba.copy(E.color);Ya.copy(E.emissive);E.vertexColors===THREE.FaceColors&&Ba.multiply(J.color);G.copy(Da);xa.copy(H.positionWorld).add(ea.positionWorld).add(R.positionWorld).divideScalar(3);H=xa;ea=J.normalModel;R=G;J=0;for(B=D.length;J<B;J++)V=D[J],Za.copy(V.color),V instanceof THREE.DirectionalLight?(da=Ga.setFromMatrixPosition(V.matrixWorld).normalize(),
S=ea.dot(da),0>=S||(S*=V.intensity,R.add(Za.multiplyScalar(S)))):V instanceof THREE.PointLight&&(da=Ga.setFromMatrixPosition(V.matrixWorld),S=ea.dot(Ga.subVectors(da,H).normalize()),0>=S||(S*=0==V.distance?1:1-Math.min(H.distanceTo(da)/V.distance,1),0!=S&&(S*=V.intensity,R.add(Za.multiplyScalar(S)))));G.multiply(Ba).add(Ya);!0===E.wireframe?b(G,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):c(G)}else E instanceof THREE.MeshBasicMaterial||E instanceof THREE.MeshLambertMaterial||E instanceof
THREE.MeshPhongMaterial?null!==E.map?E.map.mapping instanceof THREE.UVMapping&&(ca=J.uvs,f(ya,Ea,Aa,za,Oa,Pa,ca[0].x,ca[0].y,ca[1].x,ca[1].y,ca[2].x,ca[2].y,E.map)):null!==E.envMap?E.envMap.mapping instanceof THREE.SphericalReflectionMapping?(ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja),la=0.5*ma.x+0.5,qa=0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja),ua=0.5*ma.x+0.5,ja=0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja),Fa=0.5*ma.x+0.5,va=0.5*ma.y+0.5,f(ya,Ea,Aa,za,
Oa,Pa,la,qa,ua,ja,Fa,va,E.envMap)):E.envMap.mapping instanceof THREE.SphericalRefractionMapping&&(ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja),la=-0.5*ma.x+0.5,qa=-0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja),ua=-0.5*ma.x+0.5,ja=-0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja),Fa=-0.5*ma.x+0.5,va=-0.5*ma.y+0.5,f(ya,Ea,Aa,za,Oa,Pa,la,qa,ua,ja,Fa,va,E.envMap)):(G.copy(E.color),E.vertexColors===THREE.FaceColors&&G.multiply(J.color),!0===E.wireframe?b(G,E.wireframeLinewidth,
E.wireframeLinecap,E.wireframeLinejoin):c(G)):(E instanceof THREE.MeshDepthMaterial?G.r=G.g=G.b=1-p(H.positionScreen.z*H.positionScreen.w,oa.near,oa.far):E instanceof THREE.MeshNormalMaterial?(ma.copy(J.normalModel).applyMatrix3(Ja),G.setRGB(ma.x,ma.y,ma.z).multiplyScalar(0.5).addScalar(0.5)):G.setRGB(1,1,1),!0===E.wireframe?b(G,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):c(G))}}aa.union(ra)}}O.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={};
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.default_vertex="vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n\tmvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\tuniform samplerCube envMap;\n\tuniform float flipEnvMap;\n\tuniform int combine;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tuniform bool useRefract;\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\tuniform bool useRefract;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\tvec3 reflectVec;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\tif ( useRefract ) {\n\n\t\t\treflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t} else { \n\n\t\t\treflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t}\n\n\t#else\n\n\t\treflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t\tvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tcubeColor.xyz *= cubeColor.xyz;\n\n\t#endif\n\n\tif ( combine == 1 ) {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n\t} else if ( combine == 2 ) {\n\n\t\tgl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n\t} else {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n\t}\n\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif";
THREE.ShaderChunk.defaultnormal_vertex="vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n\tobjectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n\tobjectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n\tobjectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;";
THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tif ( useRefract ) {\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t} else {\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#endif\n\n\t#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#endif\n\n\t#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",
value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},
hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},
opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,
THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,
THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,
{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},
specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\tvNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,
THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,
THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,
"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,
"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,
"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",
value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},diffuse:{type:"c",value:new THREE.Color(16777215)},
specular:{type:"c",value:new THREE.Color(1118481)},ambient:{type:"c",value:new THREE.Color(16777215)},shininess:{type:"f",value:30},opacity:{type:"f",value:1},useRefract:{type:"i",value:0},refractionRatio:{type:"f",value:0.98},reflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\n\tuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\tvec3 specularTex = vec3( 1.0 );\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tnormalTex.xy *= uNormalScale;\n\tnormalTex = normalize( normalTex );\n\tif( enableDiffuse ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\n\t\t\ttexelColor.xyz *= texelColor.xyz;\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\n\t\t#else\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n\t\t#endif\n\t}\n\tif( enableAO ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\n\t\t\taoColor.xyz *= aoColor.xyz;\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n\t\t#else\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n\t\t#endif\n\t}",
THREE.ShaderChunk.alphatest_fragment,"\tif( enableSpecular )\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\n\tvec3 finalNormal = tsb * normalTex;\n\t#ifdef FLIP_SIDED\n\t\tfinalNormal = -finalNormal;\n\t#endif\n\tvec3 normal = normalize( finalNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\t#if MAX_POINT_LIGHTS > 0\n\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\tvec3 pointSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat pointDistance = 1.0;\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\n\t\t\tpointVector = normalize( pointVector );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n\t\t\t#endif\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\tvec3 spotDiffuse = vec3( 0.0 );\n\t\tvec3 spotSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat spotDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\n\t\t\tspotVector = normalize( spotVector );\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\t\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\t\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\t\t\t\t#ifdef WRAP_AROUND\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\t\t\t\t#else\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t#endif\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n\t\t\t}\n\t\t}\n\t#endif\n\t#if MAX_DIR_LIGHTS > 0\n\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\tvec3 dirSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n\t\t\t#endif\n\t\t\tdirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\tvec3 hemiDiffuse = vec3( 0.0 );\n\t\tvec3 hemiSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\t\t\themiDiffuse += diffuse * hemiColor;\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\t\t}\n\t#endif\n\tvec3 totalDiffuse = vec3( 0.0 );\n\tvec3 totalSpecular = vec3( 0.0 );\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalDiffuse += dirDiffuse;\n\t\ttotalSpecular += dirSpecular;\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalDiffuse += hemiDiffuse;\n\t\ttotalSpecular += hemiSpecular;\n\t#endif\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalDiffuse += pointDiffuse;\n\t\ttotalSpecular += pointSpecular;\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\ttotalDiffuse += spotDiffuse;\n\t\ttotalSpecular += spotSpecular;\n\t#endif\n\t#ifdef METAL\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\t#else\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\t#endif\n\tif ( enableReflection ) {\n\t\tvec3 vReflect;\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tif ( useRefract ) {\n\t\t\tvReflect = refract( cameraToVertex, normal, refractionRatio );\n\t\t} else {\n\t\t\tvReflect = reflect( cameraToVertex, normal );\n\t\t}\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t#ifdef GAMMA_INPUT\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\n\t\t#endif\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n\t}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\n\tuniform sampler2D tDisplacement;\n\tuniform float uDisplacementScale;\n\tuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"\t#ifdef USE_SKINNING\n\t\tvNormal = normalize( normalMatrix * skinnedNormal.xyz );\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\n\t\tvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n\t#else\n\t\tvNormal = normalize( normalMatrix * normal );\n\t\tvTangent = normalize( normalMatrix * tangent.xyz );\n\t#endif\n\tvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\tvUv = uv * uRepeat + uOffset;\n\tvec3 displacedPosition;\n\t#ifdef VERTEX_TEXTURES\n\t\tif ( enableDisplacement ) {\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\n\t\t} else {\n\t\t\t#ifdef USE_SKINNING\n\t\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\t\tdisplacedPosition = skinned.xyz;\n\t\t\t#else\n\t\t\t\tdisplacedPosition = position;\n\t\t\t#endif\n\t\t}\n\t#else\n\t\t#ifdef USE_SKINNING\n\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\tdisplacedPosition = skinned.xyz;\n\t\t#else\n\t\t\tdisplacedPosition = position;\n\t\t#endif\n\t#endif\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.logdepthbuf_vertex,"\tvWorldPosition = worldPosition.xyz;\n\tvViewPosition = -mvPosition.xyz;\n\t#ifdef USE_SHADOWMAP\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t\t}\n\t#endif\n}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=m.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,g=a.faces3,h=3*g.length,k=1*g.length,l=3*g.length,g=d(b,a),n=f(g),r=e(g),p=g.vertexColors?g.vertexColors:!1;a.__vertexArray=new Float32Array(3*h);r&&(a.__normalArray=new Float32Array(3*h));c.hasTangents&&(a.__tangentArray=new Float32Array(4*h));p&&(a.__colorArray=new Float32Array(3*h));n&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*h)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*h)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*h),a.__skinWeightArray=new Float32Array(4*h));c=null!==Eb&&21845<k?Uint32Array:Uint16Array;a.__typeArray=c;a.__faceArray=new c(3*k);a.__lineArray=new c(2*l);if(a.numMorphTargets)for(a.__morphTargetsArrays=[],c=0,n=a.numMorphTargets;c<n;c++)a.__morphTargetsArrays.push(new Float32Array(3*h));if(a.numMorphNormals)for(a.__morphNormalsArrays=[],c=0,n=a.numMorphNormals;c<n;c++)a.__morphNormalsArrays.push(new Float32Array(3*h));a.__webglFaceCount=3*k;a.__webglLineCount=
2*l;if(g.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var q in g.attributes){var k=g.attributes[q],l={},s;for(s in k)l[s]=k[s];if(!l.__webglInitialized||l.createUniqueBuffers)l.__webglInitialized=!0,c=1,"v2"===l.type?c=2:"v3"===l.type?c=3:"v4"===l.type?c=4:"c"===l.type&&(c=3),l.size=c,l.array=new Float32Array(h*c),l.buffer=m.createBuffer(),l.buffer.belongsToAttribute=q,k.needsUpdate=!0,l.__original=k;a.__webglCustomAttributesList.push(l)}}a.__inittedArrays=
!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a.alphaMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a){for(var b in a.attributes){var c=
"index"===b?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER,d=a.attributes[b];d.buffer=m.createBuffer();m.bindBuffer(c,d.buffer);m.bufferData(c,d.array,m.STATIC_DRAW)}}function h(a,b,c,d){for(var e in b){var f=b[e],g=c[e];if(0<=f)if(g){var h=g.itemSize;m.bindBuffer(m.ARRAY_BUFFER,g.buffer);l(f);m.vertexAttribPointer(f,h,m.FLOAT,!1,0,d*h*4)}else a.defaultAttributeValues&&(2===a.defaultAttributeValues[e].length?m.vertexAttrib2fv(f,a.defaultAttributeValues[e]):3===a.defaultAttributeValues[e].length&&m.vertexAttrib3fv(f,
a.defaultAttributeValues[e]))}n()}function k(){for(var a=0,b=pb.length;a<b;a++)pb[a]=0}function l(a){pb[a]=1;0===tb[a]&&(m.enableVertexAttribArray(a),tb[a]=1)}function n(){for(var a=0,b=tb.length;a<b;a++)tb[a]!==pb[a]&&(m.disableVertexAttribArray(a),tb[a]=0)}function q(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function r(a,b){return a.z!==b.z?a.z-b.z:a.id-b.id}function t(a,b){return b[0]-a[0]}function s(a,b,h){if(!1!==b.visible){var k=a.__webglObjects[b.id];if(k&&(!1===b.frustumCulled||!0===jc.intersectsObject(b))){var l=
b.geometry,n,r,p;if(l instanceof THREE.BufferGeometry){var q=m.DYNAMIC_DRAW,w=l.attributes,u,v;for(u in w)v=w[u],v.needsUpdate&&("index"===u?(m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.buffer),m.bufferData(m.ELEMENT_ARRAY_BUFFER,v.array,q)):(m.bindBuffer(m.ARRAY_BUFFER,v.buffer),m.bufferData(m.ARRAY_BUFFER,v.array,q)),v.needsUpdate=!1)}else if(b instanceof THREE.Mesh){if(l.buffersNeedUpdate||l.groupsNeedUpdate)l instanceof THREE.BufferGeometry?g(l):b instanceof THREE.Mesh&&D(a,b,l);for(var A=0,z=l.geometryGroupsList.length;A<
z;A++)if(n=l.geometryGroupsList[A],p=d(b,n),(l.buffersNeedUpdate||l.groupsNeedUpdate)&&c(n,b),r=p.attributes&&x(p),l.verticesNeedUpdate||l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||r){var y=n,E=b,I=m.DYNAMIC_DRAW,J=!l.dynamic,L=p;if(y.__inittedArrays){var K=e(L),H=L.vertexColors?L.vertexColors:!1,Q=f(L),O=K===THREE.SmoothShading,B=void 0,N=void 0,P=void 0,T=void 0,R=void 0,ba=void 0,S=void 0,$=void 0,X=void 0,V=void 0,
za=void 0,ga=void 0,ha=void 0,ia=void 0,Ea=void 0,aa=void 0,da=void 0,ya=void 0,U=void 0,ca=void 0,W=void 0,Ba=void 0,Aa=void 0,la=void 0,ma=void 0,oa=void 0,ra=void 0,ua=void 0,va=void 0,ja=void 0,Fa=void 0,Da=void 0,Ga=void 0,Ya=void 0,qa=void 0,Ka=void 0,xa=void 0,Ca=void 0,Ja=void 0,Qa=void 0,db=0,eb=0,Sa=0,Za=0,Ta=0,gb=0,Ua=0,ub=0,$a=0,wa=0,Ha=0,M=0,Ra=void 0,hb=y.__vertexArray,cb=y.__uvArray,fb=y.__uv2Array,yb=y.__normalArray,Va=y.__tangentArray,ib=y.__colorArray,Wa=y.__skinIndexArray,Xa=y.__skinWeightArray,
tb=y.__morphTargetsArrays,wb=y.__morphNormalsArrays,sb=y.__webglCustomAttributesList,F=void 0,pb=y.__faceArray,zb=y.__lineArray,La=E.geometry,Db=La.elementsNeedUpdate,xb=La.uvsNeedUpdate,Eb=La.normalsNeedUpdate,Ob=La.tangentsNeedUpdate,Pb=La.colorsNeedUpdate,Sb=La.morphTargetsNeedUpdate,lc=La.vertices,ka=y.faces3,jb=La.faces,Hb=La.faceVertexUvs[0],Ib=La.faceVertexUvs[1],mc=La.skinIndices,Vb=La.skinWeights,Wb=La.morphTargets,Jb=La.morphNormals;if(La.verticesNeedUpdate){B=0;for(N=ka.length;B<N;B++)T=
jb[ka[B]],ga=lc[T.a],ha=lc[T.b],ia=lc[T.c],hb[eb]=ga.x,hb[eb+1]=ga.y,hb[eb+2]=ga.z,hb[eb+3]=ha.x,hb[eb+4]=ha.y,hb[eb+5]=ha.z,hb[eb+6]=ia.x,hb[eb+7]=ia.y,hb[eb+8]=ia.z,eb+=9;m.bindBuffer(m.ARRAY_BUFFER,y.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,hb,I)}if(Sb)for(qa=0,Ka=Wb.length;qa<Ka;qa++){B=Ha=0;for(N=ka.length;B<N;B++)Ja=ka[B],T=jb[Ja],ga=Wb[qa].vertices[T.a],ha=Wb[qa].vertices[T.b],ia=Wb[qa].vertices[T.c],xa=tb[qa],xa[Ha]=ga.x,xa[Ha+1]=ga.y,xa[Ha+2]=ga.z,xa[Ha+3]=ha.x,xa[Ha+4]=ha.y,xa[Ha+
5]=ha.z,xa[Ha+6]=ia.x,xa[Ha+7]=ia.y,xa[Ha+8]=ia.z,L.morphNormals&&(O?(Qa=Jb[qa].vertexNormals[Ja],ya=Qa.a,U=Qa.b,ca=Qa.c):ca=U=ya=Jb[qa].faceNormals[Ja],Ca=wb[qa],Ca[Ha]=ya.x,Ca[Ha+1]=ya.y,Ca[Ha+2]=ya.z,Ca[Ha+3]=U.x,Ca[Ha+4]=U.y,Ca[Ha+5]=U.z,Ca[Ha+6]=ca.x,Ca[Ha+7]=ca.y,Ca[Ha+8]=ca.z),Ha+=9;m.bindBuffer(m.ARRAY_BUFFER,y.__webglMorphTargetsBuffers[qa]);m.bufferData(m.ARRAY_BUFFER,tb[qa],I);L.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglMorphNormalsBuffers[qa]),m.bufferData(m.ARRAY_BUFFER,wb[qa],
I))}if(Vb.length){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],la=Vb[T.a],ma=Vb[T.b],oa=Vb[T.c],Xa[wa]=la.x,Xa[wa+1]=la.y,Xa[wa+2]=la.z,Xa[wa+3]=la.w,Xa[wa+4]=ma.x,Xa[wa+5]=ma.y,Xa[wa+6]=ma.z,Xa[wa+7]=ma.w,Xa[wa+8]=oa.x,Xa[wa+9]=oa.y,Xa[wa+10]=oa.z,Xa[wa+11]=oa.w,ra=mc[T.a],ua=mc[T.b],va=mc[T.c],Wa[wa]=ra.x,Wa[wa+1]=ra.y,Wa[wa+2]=ra.z,Wa[wa+3]=ra.w,Wa[wa+4]=ua.x,Wa[wa+5]=ua.y,Wa[wa+6]=ua.z,Wa[wa+7]=ua.w,Wa[wa+8]=va.x,Wa[wa+9]=va.y,Wa[wa+10]=va.z,Wa[wa+11]=va.w,wa+=12;0<wa&&(m.bindBuffer(m.ARRAY_BUFFER,
y.__webglSkinIndicesBuffer),m.bufferData(m.ARRAY_BUFFER,Wa,I),m.bindBuffer(m.ARRAY_BUFFER,y.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,Xa,I))}if(Pb&&H){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],S=T.vertexColors,$=T.color,3===S.length&&H===THREE.VertexColors?(W=S[0],Ba=S[1],Aa=S[2]):Aa=Ba=W=$,ib[$a]=W.r,ib[$a+1]=W.g,ib[$a+2]=W.b,ib[$a+3]=Ba.r,ib[$a+4]=Ba.g,ib[$a+5]=Ba.b,ib[$a+6]=Aa.r,ib[$a+7]=Aa.g,ib[$a+8]=Aa.b,$a+=9;0<$a&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,
ib,I))}if(Ob&&La.hasTangents){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],X=T.vertexTangents,Ea=X[0],aa=X[1],da=X[2],Va[Ua]=Ea.x,Va[Ua+1]=Ea.y,Va[Ua+2]=Ea.z,Va[Ua+3]=Ea.w,Va[Ua+4]=aa.x,Va[Ua+5]=aa.y,Va[Ua+6]=aa.z,Va[Ua+7]=aa.w,Va[Ua+8]=da.x,Va[Ua+9]=da.y,Va[Ua+10]=da.z,Va[Ua+11]=da.w,Ua+=12;m.bindBuffer(m.ARRAY_BUFFER,y.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,Va,I)}if(Eb&&K){B=0;for(N=ka.length;B<N;B++)if(T=jb[ka[B]],R=T.vertexNormals,ba=T.normal,3===R.length&&O)for(ja=0;3>ja;ja++)Da=R[ja],
yb[gb]=Da.x,yb[gb+1]=Da.y,yb[gb+2]=Da.z,gb+=3;else for(ja=0;3>ja;ja++)yb[gb]=ba.x,yb[gb+1]=ba.y,yb[gb+2]=ba.z,gb+=3;m.bindBuffer(m.ARRAY_BUFFER,y.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,yb,I)}if(xb&&Hb&&Q){B=0;for(N=ka.length;B<N;B++)if(P=ka[B],V=Hb[P],void 0!==V)for(ja=0;3>ja;ja++)Ga=V[ja],cb[Sa]=Ga.x,cb[Sa+1]=Ga.y,Sa+=2;0<Sa&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,cb,I))}if(xb&&Ib&&Q){B=0;for(N=ka.length;B<N;B++)if(P=ka[B],za=Ib[P],void 0!==za)for(ja=
0;3>ja;ja++)Ya=za[ja],fb[Za]=Ya.x,fb[Za+1]=Ya.y,Za+=2;0<Za&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,fb,I))}if(Db){B=0;for(N=ka.length;B<N;B++)pb[Ta]=db,pb[Ta+1]=db+1,pb[Ta+2]=db+2,Ta+=3,zb[ub]=db,zb[ub+1]=db+1,zb[ub+2]=db,zb[ub+3]=db+2,zb[ub+4]=db+1,zb[ub+5]=db+2,ub+=6,db+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,pb,I);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,
zb,I)}if(sb)for(ja=0,Fa=sb.length;ja<Fa;ja++)if(F=sb[ja],F.__original.needsUpdate){M=0;if(1===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],F.array[M]=F.value[T.a],F.array[M+1]=F.value[T.b],F.array[M+2]=F.value[T.c],M+=3;else{if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],F.array[M]=Ra,F.array[M+1]=Ra,F.array[M+2]=Ra,M+=3}else if(2===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],ga=
F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ha.x,F.array[M+3]=ha.y,F.array[M+4]=ia.x,F.array[M+5]=ia.y,M+=6;else{if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ha.x,F.array[M+3]=ha.y,F.array[M+4]=ia.x,F.array[M+5]=ia.y,M+=6}else if(3===F.size){var ta;ta="c"===F.type?["r","g","b"]:["x","y","z"];if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],
ga=F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9;else if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+
7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9;else if("faceVertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],ga=Ra[0],ha=Ra[1],ia=Ra[2],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9}else if(4===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],ga=F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],
F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,F.array[M+11]=ia.w,M+=12;else if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,
F.array[M+11]=ia.w,M+=12;else if("faceVertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],ga=Ra[0],ha=Ra[1],ia=Ra[2],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,F.array[M+11]=ia.w,M+=12;m.bindBuffer(m.ARRAY_BUFFER,F.buffer);m.bufferData(m.ARRAY_BUFFER,F.array,I)}J&&(delete y.__inittedArrays,delete y.__colorArray,delete y.__normalArray,
delete y.__tangentArray,delete y.__uvArray,delete y.__uv2Array,delete y.__faceArray,delete y.__vertexArray,delete y.__lineArray,delete y.__skinIndexArray,delete y.__skinWeightArray)}}l.verticesNeedUpdate=!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;p.attributes&&C(p)}else if(b instanceof THREE.Line){p=d(b,l);r=p.attributes&&x(p);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||
r){var Xb=m.DYNAMIC_DRAW,Kb,Lb,Mb,Yb,sa,Zb,Nb=l.vertices,Qb=l.colors,Rb=l.lineDistances,ec=Nb.length,fc=Qb.length,gc=Rb.length,$b=l.__vertexArray,ac=l.__colorArray,Tb=l.__lineDistanceArray,hc=l.colorsNeedUpdate,ic=l.lineDistancesNeedUpdate,nc=l.__webglCustomAttributesList,bc,uc,Ia,Fb,Ma,pa;if(l.verticesNeedUpdate){for(Kb=0;Kb<ec;Kb++)Yb=Nb[Kb],sa=3*Kb,$b[sa]=Yb.x,$b[sa+1]=Yb.y,$b[sa+2]=Yb.z;m.bindBuffer(m.ARRAY_BUFFER,l.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,$b,Xb)}if(hc){for(Lb=0;Lb<fc;Lb++)Zb=
Qb[Lb],sa=3*Lb,ac[sa]=Zb.r,ac[sa+1]=Zb.g,ac[sa+2]=Zb.b;m.bindBuffer(m.ARRAY_BUFFER,l.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,ac,Xb)}if(ic){for(Mb=0;Mb<gc;Mb++)Tb[Mb]=Rb[Mb];m.bindBuffer(m.ARRAY_BUFFER,l.__webglLineDistanceBuffer);m.bufferData(m.ARRAY_BUFFER,Tb,Xb)}if(nc)for(bc=0,uc=nc.length;bc<uc;bc++)if(pa=nc[bc],pa.needsUpdate&&(void 0===pa.boundTo||"vertices"===pa.boundTo)){sa=0;Fb=pa.value.length;if(1===pa.size)for(Ia=0;Ia<Fb;Ia++)pa.array[Ia]=pa.value[Ia];else if(2===pa.size)for(Ia=
0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,sa+=2;else if(3===pa.size)if("c"===pa.type)for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.r,pa.array[sa+1]=Ma.g,pa.array[sa+2]=Ma.b,sa+=3;else for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,pa.array[sa+2]=Ma.z,sa+=3;else if(4===pa.size)for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,pa.array[sa+2]=Ma.z,pa.array[sa+3]=Ma.w,sa+=4;m.bindBuffer(m.ARRAY_BUFFER,pa.buffer);m.bufferData(m.ARRAY_BUFFER,
pa.array,Xb)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;p.attributes&&C(p)}else if(b instanceof THREE.PointCloud){p=d(b,l);r=p.attributes&&x(p);if(l.verticesNeedUpdate||l.colorsNeedUpdate||b.sortParticles||r){var oc=m.DYNAMIC_DRAW,Na,kb,lb,Z,mb,vb,cc=l.vertices,pc=cc.length,qc=l.colors,vc=qc.length,Ab=l.__vertexArray,Bb=l.__colorArray,qb=l.__sortArray,wc=l.verticesNeedUpdate,xc=l.colorsNeedUpdate,rb=l.__webglCustomAttributesList,ab,Gb,fa,bb,na,Y;if(b.sortParticles){kc.copy(Ub);
kc.multiply(b.matrixWorld);for(Na=0;Na<pc;Na++)lb=cc[Na],ea.copy(lb),ea.applyProjection(kc),qb[Na]=[ea.z,Na];qb.sort(t);for(Na=0;Na<pc;Na++)lb=cc[qb[Na][1]],Z=3*Na,Ab[Z]=lb.x,Ab[Z+1]=lb.y,Ab[Z+2]=lb.z;for(kb=0;kb<vc;kb++)Z=3*kb,vb=qc[qb[kb][1]],Bb[Z]=vb.r,Bb[Z+1]=vb.g,Bb[Z+2]=vb.b;if(rb)for(ab=0,Gb=rb.length;ab<Gb;ab++)if(Y=rb[ab],void 0===Y.boundTo||"vertices"===Y.boundTo)if(Z=0,bb=Y.value.length,1===Y.size)for(fa=0;fa<bb;fa++)mb=qb[fa][1],Y.array[fa]=Y.value[mb];else if(2===Y.size)for(fa=0;fa<bb;fa++)mb=
qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Z+=2;else if(3===Y.size)if("c"===Y.type)for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.r,Y.array[Z+1]=na.g,Y.array[Z+2]=na.b,Z+=3;else for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Z+=3;else if(4===Y.size)for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Y.array[Z+3]=na.w,Z+=4}else{if(wc)for(Na=0;Na<pc;Na++)lb=cc[Na],Z=3*
Na,Ab[Z]=lb.x,Ab[Z+1]=lb.y,Ab[Z+2]=lb.z;if(xc)for(kb=0;kb<vc;kb++)vb=qc[kb],Z=3*kb,Bb[Z]=vb.r,Bb[Z+1]=vb.g,Bb[Z+2]=vb.b;if(rb)for(ab=0,Gb=rb.length;ab<Gb;ab++)if(Y=rb[ab],Y.needsUpdate&&(void 0===Y.boundTo||"vertices"===Y.boundTo))if(bb=Y.value.length,Z=0,1===Y.size)for(fa=0;fa<bb;fa++)Y.array[fa]=Y.value[fa];else if(2===Y.size)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Z+=2;else if(3===Y.size)if("c"===Y.type)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.r,Y.array[Z+1]=
na.g,Y.array[Z+2]=na.b,Z+=3;else for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Z+=3;else if(4===Y.size)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Y.array[Z+3]=na.w,Z+=4}if(wc||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,l.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,Ab,oc);if(xc||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,l.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Bb,oc);if(rb)for(ab=0,Gb=rb.length;ab<
Gb;ab++)if(Y=rb[ab],Y.needsUpdate||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,Y.buffer),m.bufferData(m.ARRAY_BUFFER,Y.array,oc)}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;p.attributes&&C(p)}for(var Cb=0,rc=k.length;Cb<rc;Cb++){var dc=k[Cb],nb=dc,yc=nb.object,sc=nb.buffer,tc=yc.geometry,ob=yc.material;ob instanceof THREE.MeshFaceMaterial?(ob=ob.materials[tc instanceof THREE.BufferGeometry?0:sc.materialIndex],ob.transparent?(nb.material=ob,Pa.push(nb)):(nb.material=ob,Oa.push(nb))):ob&&(ob.transparent?
(nb.material=ob,Pa.push(nb)):(nb.material=ob,Oa.push(nb)));dc.render=!0;!0===G.sortObjects&&(null!==b.renderDepth?dc.z=b.renderDepth:(ea.setFromMatrixPosition(b.matrixWorld),ea.applyProjection(Ub),dc.z=ea.z))}}Cb=0;for(rc=b.children.length;Cb<rc;Cb++)s(a,b.children[Cb],h)}}function p(a,b,c){if(0!==a.length)for(var d=0,e=a.length;d<e;d++)la=Ya=null,Ca=ca=ja=ua=Da=ra=Fa=-1,fb=!0,a[d].render(b,c,Hb,Ib),la=Ya=null,Ca=ca=ja=ua=Da=ra=Fa=-1,fb=!0}function v(a,b,c,d,e,f){for(var g,h,k,m=a.length-1;-1!==m;m--){g=
a[m];h=g.object;k=g.buffer;N(h,b);if(f)g=f;else{g=g.material;if(!g)continue;e&&G.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);G.setDepthTest(g.depthTest);G.setDepthWrite(g.depthWrite);J(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits)}G.setMaterialFaces(g);k instanceof THREE.BufferGeometry?G.renderBufferDirect(b,c,d,g,k,h):G.renderBuffer(b,c,d,g,k,h)}}function w(a,b,c,d,e,f,g){for(var h,k,m=0,l=a.length;m<l;m++)if(h=a[m],k=h.object,k.visible){if(g)h=g;else{h=h[b];if(!h)continue;
f&&G.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);G.setDepthTest(h.depthTest);G.setDepthWrite(h.depthWrite);J(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}G.renderImmediateObject(c,d,e,h,k)}}function u(a){var b=a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function D(a,b,d){var e,f=!1;e=b.material;if(void 0===d.geometryGroups||d.groupsNeedUpdate)delete a.__webglObjects[b.id],d.makeGroups(e instanceof THREE.MeshFaceMaterial,
Eb?4294967296:65535),d.groupsNeedUpdate=!1;for(var g=0,h=d.geometryGroupsList.length;g<h;g++){e=d.geometryGroupsList[g];if(e.__webglVertexBuffer)f=!1;else{f=e;f.__webglVertexBuffer=m.createBuffer();f.__webglNormalBuffer=m.createBuffer();f.__webglTangentBuffer=m.createBuffer();f.__webglColorBuffer=m.createBuffer();f.__webglUVBuffer=m.createBuffer();f.__webglUV2Buffer=m.createBuffer();f.__webglSkinIndicesBuffer=m.createBuffer();f.__webglSkinWeightsBuffer=m.createBuffer();f.__webglFaceBuffer=m.createBuffer();
f.__webglLineBuffer=m.createBuffer();var k=void 0,l=void 0;if(f.numMorphTargets)for(f.__webglMorphTargetsBuffers=[],k=0,l=f.numMorphTargets;k<l;k++)f.__webglMorphTargetsBuffers.push(m.createBuffer());if(f.numMorphNormals)for(f.__webglMorphNormalsBuffers=[],k=0,l=f.numMorphNormals;k<l;k++)f.__webglMorphNormalsBuffers.push(m.createBuffer());G.info.memory.geometries++;c(e,b);d.verticesNeedUpdate=!0;d.morphTargetsNeedUpdate=!0;d.elementsNeedUpdate=!0;d.uvsNeedUpdate=!0;d.normalsNeedUpdate=!0;d.tangentsNeedUpdate=
!0;f=d.colorsNeedUpdate=!0}(f||void 0===b.__webglActive)&&A(a.__webglObjects,e,b)}b.__webglActive=!0}function A(a,b,c){var d=c.id;a[d]=a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function x(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function C(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function I(a,b){if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete b.__webglObjects[a.id];else if(a instanceof
THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var c=b.__webglObjectsImmediate,d=c.length-1;0<=d;d--)c[d].object===a&&c.splice(d,1);delete a.__webglActive}function z(a,b,c,d,e){qa=0;d.needsUpdate&&(d.program&&Nb(d),G.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(G.maxMorphTargets));var f=!1,g=!1,h=!1,k=d.program,l=k.uniforms,n=d.__webglShader.uniforms;k.id!==Ya&&(m.useProgram(k.program),Ya=k.id,
h=g=f=!0);d.id!==Ca&&(-1===Ca&&(h=!0),Ca=d.id,g=!0);if(f||a!==la)m.uniformMatrix4fv(l.projectionMatrix,!1,a.projectionMatrix.elements),Ea&&m.uniform1f(l.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==la&&(la=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==l.cameraPosition&&(ea.setFromMatrixPosition(a.matrixWorld),m.uniform3f(l.cameraPosition,ea.x,ea.y,ea.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof
THREE.ShaderMaterial||d.skinning)&&null!==l.viewMatrix&&m.uniformMatrix4fv(l.viewMatrix,!1,a.matrixWorldInverse.elements);d.skinning&&(e.bindMatrix&&null!==l.bindMatrix&&m.uniformMatrix4fv(l.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==l.bindMatrixInverse&&m.uniformMatrix4fv(l.bindMatrixInverse,!1,e.bindMatrixInverse.elements),Ob&&e.skeleton&&e.skeleton.useVertexTexture?(null!==l.boneTexture&&(f=K(),m.uniform1i(l.boneTexture,f),G.setTexture(e.skeleton.boneTexture,f)),null!==l.boneTextureWidth&&
m.uniform1i(l.boneTextureWidth,e.skeleton.boneTextureWidth),null!==l.boneTextureHeight&&m.uniform1i(l.boneTextureHeight,e.skeleton.boneTextureHeight)):e.skeleton&&e.skeleton.boneMatrices&&null!==l.boneGlobalMatrices&&m.uniformMatrix4fv(l.boneGlobalMatrices,!1,e.skeleton.boneMatrices));if(g){c&&d.fog&&(n.fogColor.value=c.color,c instanceof THREE.Fog?(n.fogNear.value=c.near,n.fogFar.value=c.far):c instanceof THREE.FogExp2&&(n.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof
THREE.MeshLambertMaterial||d.lights){if(fb){var h=!0,p,r=f=0,q=0,s,t,w,u=Jb,v=u.directional.colors,x=u.directional.positions,D=u.point.colors,A=u.point.positions,z=u.point.distances,C=u.spot.colors,I=u.spot.positions,L=u.spot.distances,N=u.spot.directions,J=u.spot.anglesCos,T=u.spot.exponents,H=u.hemi.skyColors,Q=u.hemi.groundColors,O=u.hemi.positions,R=0,X=0,V=0,$=0,za=0,aa=0,ya=0,ca=0,W=p=0;c=w=W=0;for(g=b.length;c<g;c++)p=b[c],p.onlyShadow||(s=p.color,t=p.intensity,w=p.distance,p instanceof THREE.AmbientLight?
p.visible&&(G.gammaInput?(f+=s.r*s.r,r+=s.g*s.g,q+=s.b*s.b):(f+=s.r,r+=s.g,q+=s.b)):p instanceof THREE.DirectionalLight?(za+=1,p.visible&&(da.setFromMatrixPosition(p.matrixWorld),ea.setFromMatrixPosition(p.target.matrixWorld),da.sub(ea),da.normalize(),p=3*R,x[p]=da.x,x[p+1]=da.y,x[p+2]=da.z,G.gammaInput?ba(v,p,s,t*t):P(v,p,s,t),R+=1)):p instanceof THREE.PointLight?(aa+=1,p.visible&&(W=3*X,G.gammaInput?ba(D,W,s,t*t):P(D,W,s,t),ea.setFromMatrixPosition(p.matrixWorld),A[W]=ea.x,A[W+1]=ea.y,A[W+2]=ea.z,
z[X]=w,X+=1)):p instanceof THREE.SpotLight?(ya+=1,p.visible&&(W=3*V,G.gammaInput?ba(C,W,s,t*t):P(C,W,s,t),ea.setFromMatrixPosition(p.matrixWorld),I[W]=ea.x,I[W+1]=ea.y,I[W+2]=ea.z,L[V]=w,da.copy(ea),ea.setFromMatrixPosition(p.target.matrixWorld),da.sub(ea),da.normalize(),N[W]=da.x,N[W+1]=da.y,N[W+2]=da.z,J[V]=Math.cos(p.angle),T[V]=p.exponent,V+=1)):p instanceof THREE.HemisphereLight&&(ca+=1,p.visible&&(da.setFromMatrixPosition(p.matrixWorld),da.normalize(),w=3*$,O[w]=da.x,O[w+1]=da.y,O[w+2]=da.z,
s=p.color,p=p.groundColor,G.gammaInput?(t*=t,ba(H,w,s,t),ba(Q,w,p,t)):(P(H,w,s,t),P(Q,w,p,t)),$+=1)));c=3*R;for(g=Math.max(v.length,3*za);c<g;c++)v[c]=0;c=3*X;for(g=Math.max(D.length,3*aa);c<g;c++)D[c]=0;c=3*V;for(g=Math.max(C.length,3*ya);c<g;c++)C[c]=0;c=3*$;for(g=Math.max(H.length,3*ca);c<g;c++)H[c]=0;c=3*$;for(g=Math.max(Q.length,3*ca);c<g;c++)Q[c]=0;u.directional.length=R;u.point.length=X;u.spot.length=V;u.hemi.length=$;u.ambient[0]=f;u.ambient[1]=r;u.ambient[2]=q;fb=!1}h?(h=Jb,n.ambientLightColor.value=
h.ambient,n.directionalLightColor.value=h.directional.colors,n.directionalLightDirection.value=h.directional.positions,n.pointLightColor.value=h.point.colors,n.pointLightPosition.value=h.point.positions,n.pointLightDistance.value=h.point.distances,n.spotLightColor.value=h.spot.colors,n.spotLightPosition.value=h.spot.positions,n.spotLightDistance.value=h.spot.distances,n.spotLightDirection.value=h.spot.directions,n.spotLightAngleCos.value=h.spot.anglesCos,n.spotLightExponent.value=h.spot.exponents,
n.hemisphereLightSkyColor.value=h.hemi.skyColors,n.hemisphereLightGroundColor.value=h.hemi.groundColors,n.hemisphereLightDirection.value=h.hemi.positions,y(n,!0)):y(n,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){n.opacity.value=d.opacity;G.gammaInput?n.diffuse.value.copyGammaToLinear(d.color):n.diffuse.value=d.color;n.map.value=d.map;n.lightMap.value=d.lightMap;n.specularMap.value=d.specularMap;n.alphaMap.value=d.alphaMap;
d.bumpMap&&(n.bumpMap.value=d.bumpMap,n.bumpScale.value=d.bumpScale);d.normalMap&&(n.normalMap.value=d.normalMap,n.normalScale.value.copy(d.normalScale));var U;d.map?U=d.map:d.specularMap?U=d.specularMap:d.normalMap?U=d.normalMap:d.bumpMap?U=d.bumpMap:d.alphaMap&&(U=d.alphaMap);void 0!==U&&(h=U.offset,U=U.repeat,n.offsetRepeat.value.set(h.x,h.y,U.x,U.y));n.envMap.value=d.envMap;n.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;n.reflectivity.value=d.reflectivity;n.refractionRatio.value=
d.refractionRatio;n.combine.value=d.combine;n.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(n.diffuse.value=d.color,n.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(n.diffuse.value=d.color,n.opacity.value=d.opacity,n.dashSize.value=d.dashSize,n.totalSize.value=d.dashSize+d.gapSize,n.scale.value=d.scale):d instanceof THREE.PointCloudMaterial?(n.psColor.value=d.color,n.opacity.value=d.opacity,n.size.value=d.size,
n.scale.value=S.height/2,n.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(n.shininess.value=d.shininess,G.gammaInput?(n.ambient.value.copyGammaToLinear(d.ambient),n.emissive.value.copyGammaToLinear(d.emissive),n.specular.value.copyGammaToLinear(d.specular)):(n.ambient.value=d.ambient,n.emissive.value=d.emissive,n.specular.value=d.specular),d.wrapAround&&n.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(G.gammaInput?(n.ambient.value.copyGammaToLinear(d.ambient),n.emissive.value.copyGammaToLinear(d.emissive)):
(n.ambient.value=d.ambient,n.emissive.value=d.emissive),d.wrapAround&&n.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(n.mNear.value=a.near,n.mFar.value=a.far,n.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(n.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&n.shadowMatrix)for(U=a=0,h=b.length;U<h;U++)c=b[U],c.castShadow&&(c instanceof THREE.SpotLight||c instanceof THREE.DirectionalLight&&!c.shadowCascade)&&(n.shadowMap.value[a]=c.shadowMap,n.shadowMapSize.value[a]=
c.shadowMapSize,n.shadowMatrix.value[a]=c.shadowMatrix,n.shadowDarkness.value[a]=c.shadowDarkness,n.shadowBias.value[a]=c.shadowBias,a++);b=d.uniformsList;d=0;for(n=b.length;d<n;d++)if(a=b[d][0],!1!==a.needsUpdate)switch(c=a.type,h=a.value,U=b[d][1],c){case "1i":m.uniform1i(U,h);break;case "1f":m.uniform1f(U,h);break;case "2f":m.uniform2f(U,h[0],h[1]);break;case "3f":m.uniform3f(U,h[0],h[1],h[2]);break;case "4f":m.uniform4f(U,h[0],h[1],h[2],h[3]);break;case "1iv":m.uniform1iv(U,h);break;case "3iv":m.uniform3iv(U,
h);break;case "1fv":m.uniform1fv(U,h);break;case "2fv":m.uniform2fv(U,h);break;case "3fv":m.uniform3fv(U,h);break;case "4fv":m.uniform4fv(U,h);break;case "Matrix3fv":m.uniformMatrix3fv(U,!1,h);break;case "Matrix4fv":m.uniformMatrix4fv(U,!1,h);break;case "i":m.uniform1i(U,h);break;case "f":m.uniform1f(U,h);break;case "v2":m.uniform2f(U,h.x,h.y);break;case "v3":m.uniform3f(U,h.x,h.y,h.z);break;case "v4":m.uniform4f(U,h.x,h.y,h.z,h.w);break;case "c":m.uniform3f(U,h.r,h.g,h.b);break;case "iv1":m.uniform1iv(U,
h);break;case "iv":m.uniform3iv(U,h);break;case "fv1":m.uniform1fv(U,h);break;case "fv":m.uniform3fv(U,h);break;case "v2v":void 0===a._array&&(a._array=new Float32Array(2*h.length));c=0;for(g=h.length;c<g;c++)f=2*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y;m.uniform2fv(U,a._array);break;case "v3v":void 0===a._array&&(a._array=new Float32Array(3*h.length));c=0;for(g=h.length;c<g;c++)f=3*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y,a._array[f+2]=h[c].z;m.uniform3fv(U,a._array);break;case "v4v":void 0===
a._array&&(a._array=new Float32Array(4*h.length));c=0;for(g=h.length;c<g;c++)f=4*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y,a._array[f+2]=h[c].z,a._array[f+3]=h[c].w;m.uniform4fv(U,a._array);break;case "m3":m.uniformMatrix3fv(U,!1,h.elements);break;case "m3v":void 0===a._array&&(a._array=new Float32Array(9*h.length));c=0;for(g=h.length;c<g;c++)h[c].flattenToArrayOffset(a._array,9*c);m.uniformMatrix3fv(U,!1,a._array);break;case "m4":m.uniformMatrix4fv(U,!1,h.elements);break;case "m4v":void 0===a._array&&
(a._array=new Float32Array(16*h.length));c=0;for(g=h.length;c<g;c++)h[c].flattenToArrayOffset(a._array,16*c);m.uniformMatrix4fv(U,!1,a._array);break;case "t":f=h;h=K();m.uniform1i(U,h);if(!f)continue;if(f instanceof THREE.CubeTexture||f.image instanceof Array&&6===f.image.length){if(a=f,U=h,6===a.image.length)if(a.needsUpdate){a.image.__webglTextureCube||(a.addEventListener("dispose",Pb),a.image.__webglTextureCube=m.createTexture(),G.info.memory.textures++);m.activeTexture(m.TEXTURE0+U);m.bindTexture(m.TEXTURE_CUBE_MAP,
a.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);U=a instanceof THREE.CompressedTexture;h=[];for(c=0;6>c;c++)G.autoScaleCubemaps&&!U?(g=h,f=c,r=a.image[c],u=sc,r.width<=u&&r.height<=u||(v=Math.max(r.width,r.height),q=Math.floor(r.width*u/v),u=Math.floor(r.height*u/v),v=document.createElement("canvas"),v.width=q,v.height=u,v.getContext("2d").drawImage(r,0,0,r.width,r.height,0,0,q,u),r=v),g[f]=r):h[c]=a.image[c];c=h[0];g=THREE.Math.isPowerOfTwo(c.width)&&THREE.Math.isPowerOfTwo(c.height);
f=B(a.format);r=B(a.type);E(m.TEXTURE_CUBE_MAP,a,g);for(c=0;6>c;c++)if(U)for(u=h[c].mipmaps,v=0,x=u.length;v<x;v++)q=u[v],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,v,f,q.width,q.height,0,q.data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,v,f,q.width,q.height,0,f,r,q.data);else m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,f,f,r,h[c]);a.generateMipmaps&&g&&m.generateMipmap(m.TEXTURE_CUBE_MAP);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+
U),m.bindTexture(m.TEXTURE_CUBE_MAP,a.image.__webglTextureCube)}else f instanceof THREE.WebGLRenderTargetCube?(a=f,m.activeTexture(m.TEXTURE0+h),m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture)):G.setTexture(f,h);break;case "tv":void 0===a._array&&(a._array=[]);c=0;for(g=a.value.length;c<g;c++)a._array[c]=K();m.uniform1iv(U,a._array);c=0;for(g=a.value.length;c<g;c++)f=a.value[c],h=a._array[c],f&&G.setTexture(f,h);break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+c)}}m.uniformMatrix4fv(l.modelViewMatrix,
!1,e._modelViewMatrix.elements);l.normalMatrix&&m.uniformMatrix3fv(l.normalMatrix,!1,e._normalMatrix.elements);null!==l.modelMatrix&&m.uniformMatrix4fv(l.modelMatrix,!1,e.matrixWorld.elements);return k}function y(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=
b;a.spotLightDirection.needsUpdate=b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function K(){var a=qa;a>=Qb&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Qb);qa+=1;return a}function N(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}
function ba(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function P(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function O(a){a!==xa&&(m.lineWidth(a),xa=a)}function J(a,b,c){Qa!==a&&(a?m.enable(m.POLYGON_OFFSET_FILL):m.disable(m.POLYGON_OFFSET_FILL),Qa=a);!a||cb===b&&Ga===c||(m.polygonOffset(b,c),cb=b,Ga=c)}function E(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,B(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,B(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,B(b.magFilter)),m.texParameteri(a,
m.TEXTURE_MIN_FILTER,B(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_MAG_FILTER,R(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,R(b.minFilter)));Ta&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy)&&(m.texParameterf(a,Ta.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Rb)),b.__oldAnisotropy=b.anisotropy)}function Q(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?
(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function L(a){a instanceof THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture),
m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,a.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null))}function R(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?m.NEAREST:m.LINEAR}function B(a){if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;if(a===THREE.AlphaFormat)return m.ALPHA;if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;
if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;
if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;if(void 0!==Sa){if(a===THREE.RGB_S3TC_DXT1_Format)return Sa.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}
console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var S=void 0!==a.canvas?a.canvas:document.createElement("canvas"),V=void 0!==a.context?a.context:null,W=void 0!==a.precision?a.precision:"highp",H=void 0!==a.alpha?a.alpha:!1,oa=void 0!==a.depth?a.depth:!0,$=void 0!==a.stencil?a.stencil:!0,X=void 0!==a.antialias?a.antialias:!1,T=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ya=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Ea=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:
!1,Aa=new THREE.Color(0),za=0,Oa=[],Pa=[];this.domElement=S;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=
!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var G=this,Ba=[],Ya=null,Za=null,Ca=-1,ca=null,la=null,qa=0,ua=-1,ja=-1,Fa=-1,va=-1,Ka=-1,aa=-1,ra=-1,Da=-1,Qa=null,cb=null,Ga=null,xa=null,ma=0,Ja=0,wb=S.width,sb=S.height,Hb=0,Ib=0,pb=new Uint8Array(16),tb=new Uint8Array(16),jc=new THREE.Frustum,Ub=new THREE.Matrix4,kc=new THREE.Matrix4,
ea=new THREE.Vector3,da=new THREE.Vector3,fb=!0,Jb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m,Db,xb,Ta,Sa,Eb;(function(){try{var a={alpha:H,depth:oa,stencil:$,antialias:X,premultipliedAlpha:T,preserveDrawingBuffer:ya};m=V||S.getContext("webgl",a)||S.getContext("experimental-webgl",
a);if(null===m)throw"Error creating WebGL context.";}catch(b){console.error(b)}Db=m.getExtension("OES_texture_float");m.getExtension("OES_texture_float_linear");xb=m.getExtension("OES_standard_derivatives");Ta=m.getExtension("EXT_texture_filter_anisotropic")||m.getExtension("MOZ_EXT_texture_filter_anisotropic")||m.getExtension("WEBKIT_EXT_texture_filter_anisotropic");Sa=m.getExtension("WEBGL_compressed_texture_s3tc")||m.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||m.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
Eb=m.getExtension("OES_element_index_uint");null===Db&&console.log("THREE.WebGLRenderer: Float textures not supported.");null===xb&&console.log("THREE.WebGLRenderer: Standard derivatives not supported.");null===Ta&&console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");null===Sa&&console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");null===Eb&&console.log("THREE.WebGLRenderer: elementindex as unsigned integer not supported.");void 0===m.getShaderPrecisionFormat&&
(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});Ea&&m.getExtension("EXT_frag_depth")})();m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(ma,Ja,wb,sb);m.clearColor(Aa.r,Aa.g,Aa.b,za);this.context=m;var Qb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),tc=
m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS);m.getParameter(m.MAX_TEXTURE_SIZE);var sc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Rb=Ta?m.getParameter(Ta.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,Sb=0<tc,Ob=Sb&&Db;Sa&&m.getParameter(m.COMPRESSED_TEXTURE_FORMATS);var zc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),Ac=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.LOW_FLOAT);var Bc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),
Cc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.LOW_FLOAT);var Dc=0<zc.precision&&0<Bc.precision,ec=0<Ac.precision&&0<Cc.precision;"highp"!==W||Dc||(ec?(W="mediump",console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(W="lowp",console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));"mediump"!==W||ec||(W="lowp",console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));this.getContext=
function(){return m};this.supportsVertexTextures=function(){return Sb};this.supportsFloatTextures=function(){return Db};this.supportsStandardDerivatives=function(){return xb};this.supportsCompressedTextureS3TC=function(){return Sa};this.getMaxAnisotropy=function(){return Rb};this.getPrecision=function(){return W};this.setSize=function(a,b,c){S.width=a*this.devicePixelRatio;S.height=b*this.devicePixelRatio;!1!==c&&(S.style.width=a+"px",S.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=
function(a,b,c,d){ma=a*this.devicePixelRatio;Ja=b*this.devicePixelRatio;wb=c*this.devicePixelRatio;sb=d*this.devicePixelRatio;m.viewport(ma,Ja,wb,sb)};this.setScissor=function(a,b,c,d){m.scissor(a*this.devicePixelRatio,b*this.devicePixelRatio,c*this.devicePixelRatio,d*this.devicePixelRatio)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.setClearColor=function(a,b){Aa.set(a);za=void 0!==b?b:1;m.clearColor(Aa.r,Aa.g,Aa.b,za)};this.setClearColorHex=function(a,
b){console.warn("THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return Aa};this.getClearAlpha=function(){return za};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=
function(){m.clear(m.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){Ya=null;Ca=ca=Da=ra=Fa=-1;fb=!0;ja=ua=-1;fc(a);this.shadowMapPlugin.update(a,b)};var gc=function(a){a=a.target;a.removeEventListener("dispose",gc);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){a=
a.attributes;for(var b in a)void 0!==a[b].buffer&&m.deleteBuffer(a[b].buffer);G.info.memory.geometries--}else if(void 0!==a.geometryGroups){b=0;for(var c=a.geometryGroupsList.length;b<c;b++){var d=a.geometryGroupsList[b];if(void 0!==d.numMorphTargets)for(var e=0,f=d.numMorphTargets;e<f;e++)m.deleteBuffer(d.__webglMorphTargetsBuffers[e]);if(void 0!==d.numMorphNormals)for(e=0,f=d.numMorphNormals;e<f;e++)m.deleteBuffer(d.__webglMorphNormalsBuffers[e]);Tb(d)}}else Tb(a)},Pb=function(a){a=a.target;a.removeEventListener("dispose",
Pb);a.image&&a.image.__webglTextureCube?m.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,m.deleteTexture(a.__webglTexture));G.info.memory.textures--},hc=function(a){a=a.target;a.removeEventListener("dispose",hc);if(a&&a.__webglTexture)if(m.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);
G.info.memory.textures--},ic=function(a){a=a.target;a.removeEventListener("dispose",ic);Nb(a)},Tb=function(a){void 0!==a.__webglVertexBuffer&&m.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&m.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&m.deleteBuffer(a.__webglTangentBuffer);void 0!==a.__webglColorBuffer&&m.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&m.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&m.deleteBuffer(a.__webglUV2Buffer);
void 0!==a.__webglSkinIndicesBuffer&&m.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&m.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&m.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&m.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&m.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[b].buffer);
G.info.memory.geometries--},Nb=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Ba.length;a<c;a++)if(d=Ba[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Ba.length;a<c;a++)d=Ba[a],d.program!==b&&e.push(d);Ba=e;m.deleteProgram(b);G.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){k();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&
(a.__webglNormalBuffer=m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),l(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,
e,f,g,h,p,r,q,s,t,u,w=3*a.count;for(u=0;u<w;u+=9)t=a.normalArray,d=t[u],e=t[u+1],f=t[u+2],g=t[u+3],p=t[u+4],q=t[u+5],h=t[u+6],r=t[u+7],s=t[u+8],d=(d+g+h)/3,e=(e+p+r)/3,f=(f+q+s)/3,t[u]=d,t[u+1]=e,t[u+2]=f,t[u+3]=d,t[u+4]=e,t[u+5]=f,t[u+6]=d,t[u+7]=e,t[u+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);l(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),m.bufferData(m.ARRAY_BUFFER,a.uvArray,
m.DYNAMIC_DRAW),l(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),l(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));n();m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var g=z(a,b,c,d,f);a=g.attributes;b=e.attributes;c=!1;g=16777215*
e.id+2*g.id+(d.wireframe?1:0);g!==ca&&(ca=g,c=!0);c&&k();if(f instanceof THREE.Mesh)if(g=b.index){var l,n;g.array instanceof Uint32Array?(l=m.UNSIGNED_INT,n=4):(l=m.UNSIGNED_SHORT,n=2);e=e.offsets;if(0===e.length)c&&(h(d,a,b,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),m.drawElements(m.TRIANGLES,g.array.length,l,0),G.info.render.calls++,G.info.render.vertices+=g.array.length,G.info.render.faces+=g.array.length/3;else{c=!0;for(var p=0,r=e.length;p<r;p++){var q=e[p].index;c&&(h(d,a,b,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
g.buffer));m.drawElements(m.TRIANGLES,e[p].count,l,e[p].start*n);G.info.render.calls++;G.info.render.vertices+=e[p].count;G.info.render.faces+=e[p].count/3}}}else c&&h(d,a,b,0),d=e.attributes.position,m.drawArrays(m.TRIANGLES,0,d.array.length/3),G.info.render.calls++,G.info.render.vertices+=d.array.length/3,G.info.render.faces+=d.array.length/9;else if(f instanceof THREE.PointCloud)c&&h(d,a,b,0),d=b.position,m.drawArrays(m.POINTS,0,d.array.length/3),G.info.render.calls++,G.info.render.points+=d.array.length/
3;else if(f instanceof THREE.Line)if(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,O(d.linewidth),g=b.index)if(g.array instanceof Uint32Array?(l=m.UNSIGNED_INT,n=4):(l=m.UNSIGNED_SHORT,n=2),e=e.offsets,0===e.length)c&&(h(d,a,b,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),m.drawElements(f,g.array.length,l,0),G.info.render.calls++,G.info.render.vertices+=g.array.length;else for(1<e.length&&(c=!0),p=0,r=e.length;p<r;p++)q=e[p].index,c&&(h(d,a,b,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),
m.drawElements(f,e[p].count,l,e[p].start*n),G.info.render.calls++,G.info.render.vertices+=e[p].count;else c&&h(d,a,b,0),d=b.position,m.drawArrays(f,0,d.array.length/3),G.info.render.calls++,G.info.render.points+=d.array.length/3}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,h;c=z(a,b,c,d,f);b=c.attributes;a=!1;c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==ca&&(ca=c,a=!0);a&&k();if(!d.morphTargets&&0<=b.position)a&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),l(b.position),
m.vertexAttribPointer(b.position,3,m.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),l(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),l(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var p=0;h=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;p<
d.numSupportedMorphTargets&&p<h.length;)0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[h[p]]),l(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[h[p]]),l(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[h[p]],p++}else{h=[];g=f.morphTargetInfluences;var r,q=g.length;for(r=
0;r<q;r++)p=g[r],0<p&&h.push([p,r]);h.length>d.numSupportedMorphTargets?(h.sort(t),h.length=d.numSupportedMorphTargets):h.length>d.numSupportedMorphNormals?h.sort(t):0===h.length&&h.push([0,0]);for(p=0;p<d.numSupportedMorphTargets;)h[p]?(r=h[p][1],0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[r]),l(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[r]),
l(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[r]):f.__webglMorphTargetInfluences[p]=0,p++}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(g=0,h=e.__webglCustomAttributesList.length;g<h;g++)c=e.__webglCustomAttributesList[g],0<=b[c.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,c.buffer),l(b[c.buffer.belongsToAttribute]),
m.vertexAttribPointer(b[c.buffer.belongsToAttribute],c.size,m.FLOAT,!1,0,0));0<=b.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),l(b.color),m.vertexAttribPointer(b.color,3,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),l(b.normal),m.vertexAttribPointer(b.normal,3,m.FLOAT,!1,0,0));0<=b.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,
e.__webglTangentBuffer),l(b.tangent),m.vertexAttribPointer(b.tangent,4,m.FLOAT,!1,0,0));0<=b.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),l(b.uv),m.vertexAttribPointer(b.uv,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),l(b.uv2),m.vertexAttribPointer(b.uv2,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv2,
d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),l(b.skinIndex),m.vertexAttribPointer(b.skinIndex,4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),l(b.skinWeight),m.vertexAttribPointer(b.skinWeight,4,m.FLOAT,!1,0,0));0<=b.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),l(b.lineDistance),m.vertexAttribPointer(b.lineDistance,1,m.FLOAT,!1,0,0))}n();f instanceof THREE.Mesh?
(f=e.__typeArray===Uint32Array?m.UNSIGNED_INT:m.UNSIGNED_SHORT,d.wireframe?(O(d.wireframeLinewidth),a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,f,0)):(a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,f,0)),G.info.render.calls++,G.info.render.vertices+=e.__webglFaceCount,G.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,
O(d.linewidth),m.drawArrays(f,0,e.__webglLineCount),G.info.render.calls++):f instanceof THREE.PointCloud&&(m.drawArrays(m.POINTS,0,e.__webglParticleCount),G.info.render.calls++,G.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){function e(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update();for(var b=0,c=a.children.length;b<c;b++)e(a.children[b])}if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var f,
g,h,k,m=a.__lights,l=a.fog;Ca=-1;la=null;fb=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();e(a);b.matrixWorldInverse.getInverse(b.matrixWorld);Ub.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);jc.setFromMatrix(Ub);fc(a);Oa.length=0;Pa.length=0;s(a,a,b);!0===G.sortObjects&&(Oa.sort(q),Pa.sort(r));p(this.renderPluginsPre,a,b);G.info.render.calls=0;G.info.render.vertices=0;G.info.render.faces=0;G.info.render.points=0;this.setRenderTarget(c);(this.autoClear||
d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);k=a.__webglObjectsImmediate;d=0;for(f=k.length;d<f;d++)g=k[d],h=g.object,h.visible&&(N(h,b),u(g));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),J(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),v(Oa,b,m,l,!0,d),v(Pa,b,m,l,!0,d),w(a.__webglObjectsImmediate,"",b,m,l,!1,d)):(d=null,this.setBlending(THREE.NoBlending),
v(Oa,b,m,l,!1,d),w(a.__webglObjectsImmediate,"opaque",b,m,l,!1,d),v(Pa,b,m,l,!0,d),w(a.__webglObjectsImmediate,"transparent",b,m,l,!0,d));p(this.renderPluginsPost,a,b);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&L(c);this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=z(a,b,c,d,e);ca=-1;G.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,m,jc):e.render(function(a){G.renderBufferImmediate(a,
f,d)})};var fc=function(a){a.__webglObjects||(a.__webglObjects={},a.__webglObjectsImmediate=[]);for(;a.__objectsAdded.length;){var c=a.__objectsAdded[0],d=a,e=void 0,f=void 0;void 0===c.__webglInit&&(c.__webglInit=!0,c._modelViewMatrix=new THREE.Matrix4,c._normalMatrix=new THREE.Matrix3);e=c.geometry;if(void 0!==e&&void 0===e.__webglInit)if(e.__webglInit=!0,e.addEventListener("dispose",gc),e instanceof THREE.BufferGeometry)g(e);else if(c instanceof THREE.Mesh)void 0!==c.__webglActive&&I(c,d),D(d,
c,e);else if(c instanceof THREE.Line){if(!e.__webglVertexBuffer){f=e;f.__webglVertexBuffer=m.createBuffer();f.__webglColorBuffer=m.createBuffer();f.__webglLineDistanceBuffer=m.createBuffer();G.info.memory.geometries++;var f=e,h=c,k=f.vertices.length;f.__vertexArray=new Float32Array(3*k);f.__colorArray=new Float32Array(3*k);f.__lineDistanceArray=new Float32Array(1*k);f.__webglLineCount=k;b(f,h);e.verticesNeedUpdate=!0;e.colorsNeedUpdate=!0;e.lineDistancesNeedUpdate=!0}}else c instanceof THREE.PointCloud&&
!e.__webglVertexBuffer&&(f=e,f.__webglVertexBuffer=m.createBuffer(),f.__webglColorBuffer=m.createBuffer(),G.info.memory.geometries++,f=e,h=c,k=f.vertices.length,f.__vertexArray=new Float32Array(3*k),f.__colorArray=new Float32Array(3*k),f.__sortArray=[],f.__webglParticleCount=k,b(f,h),e.verticesNeedUpdate=!0,e.colorsNeedUpdate=!0);if(void 0===c.__webglActive){if(c instanceof THREE.Mesh)if(e=c.geometry,e instanceof THREE.BufferGeometry)A(d.__webglObjects,e,c);else{if(e instanceof THREE.Geometry)for(h=
0,k=e.geometryGroupsList.length;h<k;h++)f=e.geometryGroupsList[h],A(d.__webglObjects,f,c)}else c instanceof THREE.Line||c instanceof THREE.PointCloud?(e=c.geometry,A(d.__webglObjects,e,c)):(c instanceof THREE.ImmediateRenderObject||c.immediateRenderCallback)&&d.__webglObjectsImmediate.push({id:null,object:c,opaque:null,transparent:null,z:0});c.__webglActive=!0}a.__objectsAdded.splice(0,1)}for(;a.__objectsRemoved.length;)I(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1)};this.initMaterial=
function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",ic);var k,l,n,p;a instanceof THREE.MeshDepthMaterial?p="depth":a instanceof THREE.MeshNormalMaterial?p="normal":a instanceof THREE.MeshBasicMaterial?p="basic":a instanceof THREE.MeshLambertMaterial?p="lambert":a instanceof THREE.MeshPhongMaterial?p="phong":a instanceof THREE.LineBasicMaterial?p="basic":a instanceof THREE.LineDashedMaterial?p="dashed":a instanceof THREE.PointCloudMaterial&&(p="particle_basic");p?(e=THREE.ShaderLib[p],a.__webglShader=
{uniforms:THREE.UniformsUtils.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}):a.__webglShader={uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader};n=h=g=f=e=0;for(var r=b.length;n<r;n++){var q=b[n];q.onlyShadow||!1===q.visible||(q instanceof THREE.DirectionalLight&&e++,q instanceof THREE.PointLight&&f++,q instanceof THREE.SpotLight&&g++,q instanceof THREE.HemisphereLight&&h++)}r=n=0;for(q=b.length;r<q;r++){var s=b[r];s.castShadow&&(s instanceof
THREE.SpotLight&&n++,s instanceof THREE.DirectionalLight&&!s.shadowCascade&&n++)}b=n;Ob&&d&&d.skeleton&&d.skeleton.useVertexTexture?n=1024:(n=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),n=Math.floor((n-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(n=Math.min(d.skeleton.bones.length,n),n<d.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.skeleton.bones.length+", this GPU supports just "+n+" (try OpenGL instead of ANGLE)")));c={precision:W,supportsVertexTextures:Sb,map:!!a.map,
envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,alphaMap:!!a.alphaMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,logarithmicDepthBuffer:Ea,skinning:a.skinning,maxBones:n,useVertexTexture:Ob&&d&&d.skeleton&&d.skeleton.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,
maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:b,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow&&0<b,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide};d=[];p?d.push(p):(d.push(a.fragmentShader),d.push(a.vertexShader));for(var t in a.defines)d.push(t),d.push(a.defines[t]);for(l in c)d.push(l),
d.push(c[l]);p=d.join();var u;l=0;for(t=Ba.length;l<t;l++)if(d=Ba[l],d.code===p){u=d;u.usedTimes++;break}void 0===u&&(u=new THREE.WebGLProgram(this,p,a,c),Ba.push(u),G.info.memory.programs=Ba.length);a.program=u;u=a.program.attributes;if(a.morphTargets)for(a.numSupportedMorphTargets=0,t="morphTarget",l=0;l<this.maxMorphTargets;l++)p=t+l,0<=u[p]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(a.numSupportedMorphNormals=0,t="morphNormal",l=0;l<this.maxMorphNormals;l++)p=t+l,0<=u[p]&&a.numSupportedMorphNormals++;
a.uniformsList=[];for(k in a.__webglShader.uniforms)(l=a.program.uniforms[k])&&a.uniformsList.push([a.__webglShader.uniforms[k],l])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide;a=a.side===THREE.BackSide;
ua!==b&&(b?m.disable(m.CULL_FACE):m.enable(m.CULL_FACE),ua=b);ja!==a&&(a?m.frontFace(m.CW):m.frontFace(m.CCW),ja=a)};this.setDepthTest=function(a){ra!==a&&(a?m.enable(m.DEPTH_TEST):m.disable(m.DEPTH_TEST),ra=a)};this.setDepthWrite=function(a){Da!==a&&(m.depthMask(a),Da=a)};this.setBlending=function(a,b,c,d){a!==Fa&&(a===THREE.NoBlending?m.disable(m.BLEND):a===THREE.AdditiveBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.SRC_ALPHA,m.ONE)):a===THREE.SubtractiveBlending?(m.enable(m.BLEND),
m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.SRC_COLOR)):a===THREE.CustomBlending?m.enable(m.BLEND):(m.enable(m.BLEND),m.blendEquationSeparate(m.FUNC_ADD,m.FUNC_ADD),m.blendFuncSeparate(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA)),Fa=a);if(a===THREE.CustomBlending){if(b!==va&&(m.blendEquation(B(b)),va=b),c!==Ka||d!==aa)m.blendFunc(B(c),B(d)),Ka=c,aa=d}else aa=
Ka=va=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",Pb),a.__webglTexture=m.createTexture(),G.info.memory.textures++);m.activeTexture(m.TEXTURE0+b);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=THREE.Math.isPowerOfTwo(c.width)&&THREE.Math.isPowerOfTwo(c.height),
e=B(a.format),f=B(a.type);E(m.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture)for(h=0,k=g.length;h<k;h++)c=g[h],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,c.data):m.texImage2D(m.TEXTURE_2D,h,
e,c.width,c.height,0,e,f,c.data);else if(0<g.length&&d){h=0;for(k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+b),m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&
(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",hc);a.__webglTexture=m.createTexture();G.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=B(a.format),e=B(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);E(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();
m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);Q(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),
E(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):
Q(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=wb,a=sb,d=ma,e=Ja);b!==Za&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),Za=b);Hb=c;Ib=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,l=d.__webglShader.vertexShader,n=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var r="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?r="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(r="SHADOWMAP_TYPE_PCF_SOFT");var t,s;t=[];for(var p in g)s=g[p],!1!==s&&(s="#define "+p+" "+s,t.push(s));
t=t.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",t,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+
e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":
"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap?"#extension GL_OES_standard_derivatives : enable":"",t,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"",e.useFog&&e.fog?"#define USE_FOG":
"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.metal?"#define METAL":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":
"",e.shadowMapEnabled?"#define "+r:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));l=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+l);n=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,b+n);f.attachShader(g,l);f.attachShader(g,n);void 0!==q&&f.bindAttribLocation(g,0,q);f.linkProgram(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&(console.error("THREE.WebGLProgram: Could not initialise shader."),
console.error("gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS)),console.error("gl.getError()",f.getError()));""!==f.getProgramInfoLog(g)&&console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",f.getProgramInfoLog(g));f.deleteShader(l);f.deleteShader(n);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):
q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var v in h)q.push(v);h=q;v={};q=0;for(b=h.length;q<b;q++)r=h[q],v[r]=f.getUniformLocation(g,r);this.uniforms=v;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var w in k)q.push(w);e=q;k={};w=0;for(h=e.length;w<h;w++)v=e[w],k[v]=f.getAttribLocation(g,v);this.attributes=
k;this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=l;this.fragmentShader=n;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&(console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c)),console.warn(a(d)));return c}}();
THREE.RenderableVertex=function(){this.position=new THREE.Vector3;this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};
THREE.RenderableFace=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.normalModel=new THREE.Vector3;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.color=new THREE.Color;this.material=null;this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2];this.z=0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};
THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))})};d=0;for(var h=a.length;d<h;++d)b(d);return f},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),l=k.data,n=0;n<d;n++)for(var q=0;q<e;q++){var r=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,s=0>n-1?0:n-1,p=n+1>d-1?d-1:n+1,v=[],w=[0,0,h[4*(q*d+n)]/255*b];v.push([-1,0,h[4*(q*d+s)]/255*b]);v.push([-1,-1,h[4*(r*d+s)]/255*b]);v.push([0,-1,h[4*(r*d+n)]/255*b]);v.push([1,-1,h[4*(r*d+p)]/255*b]);v.push([1,0,h[4*(q*d+p)]/255*b]);v.push([1,1,h[4*(t*d+p)]/255*b]);v.push([0,1,h[4*(t*d+n)]/255*
b]);v.push([-1,1,h[4*(t*d+s)]/255*b]);r=[];s=v.length;for(t=0;t<s;t++){var p=v[t],u=v[(t+1)%s],p=[p[0]-w[0],p[1]-w[1],p[2]-w[2]],u=[u[0]-w[0],u[1]-w[1],u[2]-w[2]];r.push(c([p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]]))}v=[0,0,0];for(t=0;t<r.length;t++)v[0]+=r[t][0],v[1]+=r[t][1],v[2]+=r[t][2];v[0]/=r.length;v[1]/=r.length;v[2]/=r.length;w=4*(q*d+n);l[w]=(v[0]+1)/2*255|0;l[w+1]=(v[1]+1)/2*255|0;l[w+2]=255*v[2]|0;l[w+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,n,q,r,t,s,p,v,w=b.glyphs[a]||b.glyphs["?"];if(w){if(w.o)for(b=w._cachedOutline||(w._cachedOutline=w.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;n=b[a++]*c;e.moveTo(k,n);
break;case "l":k=b[a++]*c+d;n=b[a++]*c;e.lineTo(k,n);break;case "q":k=b[a++]*c+d;n=b[a++]*c;t=b[a++]*c+d;s=b[a++]*c;e.quadraticCurveTo(t,s,k,n);if(g=f[f.length-1])for(q=g.x,r=g.y,g=1,h=this.divisions;g<=h;g++){var u=g/h;THREE.Shape.Utils.b2(u,q,t,k);THREE.Shape.Utils.b2(u,r,s,n)}break;case "b":if(k=b[a++]*c+d,n=b[a++]*c,t=b[a++]*c+d,s=b[a++]*c,p=b[a++]*c+d,v=b[a++]*c,e.bezierCurveTo(t,s,p,v,k,n),g=f[f.length-1])for(q=g.x,r=g.y,g=1,h=this.divisions;g<=h;g++)u=g/h,THREE.Shape.Utils.b3(u,q,t,p,k),THREE.Shape.Utils.b3(u,
r,s,v,n)}return{offset:w.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,n;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){console.log("Warning, unable to triangulate polygon!");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);n=l+1;e<=n&&(n=0);var r;a:{var t=r=void 0,s=void 0,p=void 0,v=void 0,w=void 0,u=void 0,D=void 0,A=
void 0,t=a[g[k]].x,s=a[g[k]].y,p=a[g[l]].x,v=a[g[l]].y,w=a[g[n]].x,u=a[g[n]].y;if(1E-10>(p-t)*(u-s)-(v-s)*(w-t))r=!1;else{var x=void 0,C=void 0,I=void 0,z=void 0,y=void 0,K=void 0,N=void 0,ba=void 0,P=void 0,O=void 0,P=ba=N=A=D=void 0,x=w-p,C=u-v,I=t-w,z=s-u,y=p-t,K=v-s;for(r=0;r<e;r++)if(D=a[g[r]].x,A=a[g[r]].y,!(D===t&&A===s||D===p&&A===v||D===w&&A===u)&&(N=D-t,ba=A-s,P=D-p,O=A-v,D-=w,A-=u,P=x*O-C*P,N=y*ba-K*N,ba=I*A-z*D,-1E-10<=P&&-1E-10<=ba&&-1E-10<=N)){r=!1;break a}r=!0}}if(r){f.push([a[g[k]],
a[g[l]],a[g[n]]]);h.push([g[k],g[l],g[n]]);k=l;for(n=l+1;n<e;k++,n++)g[k]=g[n];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};
THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};
THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};
THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=0.5*(c-a);d=0.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,n,q=a[0]instanceof THREE.Vector3;n=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),n.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;
THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,n,q,r,t,s,p;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];r=f[1];0<c.length?(g=c[c.length-1],t=g.x,
s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b2(p,t,q,h),p=THREE.Shape.Utils.b2(p,s,r,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];r=f[1];l=f[2];n=f[3];0<c.length?(g=c[c.length-1],t=g.x,s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b3(p,t,q,l,h),p=THREE.Shape.Utils.b3(p,s,r,n,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;p=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;p=p.concat(f[0]);p=new THREE.SplineCurve(p);for(f=1;f<=g;f++)c.push(p.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];r=f[2];l=f[3];g=f[4];q=!!f[5];t=g-l;s=2*a;for(f=1;f<=s;f++)p=f/s,q||(p=1-p),p=l+p*t,g=h+r*Math.cos(p),p=k+r*Math.sin(p),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],r=f[2],n=f[3],l=f[4],g=f[5],q=!!f[6],t=g-l,s=2*a,f=1;f<=s;f++)p=f/s,q||
(p=1-p),p=l+p*t,g=h+r*Math.cos(p),p=k+n*Math.sin(p),c.push(new THREE.Vector2(g,p))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(1E-10<Math.abs(l)){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=
h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),l=a?!l:l;
h=[];var n=[],q=[],r=0,t;n[r]=void 0;q[r]=[];var s,p;s=0;for(p=e.length;s<p;s++)g=e[s],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!l&&n[r]&&r++,n[r]={s:new THREE.Shape,p:t},n[r].s.actions=g.actions,n[r].s.curves=g.curves,l&&r++,q[r]=[]):q[r].push({h:g,p:t[0]});if(!n[0])return c(e);if(1<n.length){s=!1;p=[];g=0;for(e=n.length;g<e;g++)h[g]=[];g=0;for(e=n.length;g<e;g++)for(f=q[g],l=0;l<f.length;l++){r=f[l];t=!0;for(var v=0;v<n.length;v++)d(r.p,n[v].p)&&(g!=v&&p.push({froms:g,tos:v,
hole:l}),t?(t=!1,h[v].push(r)):s=!0);t&&h[g].push(r)}0<p.length&&(s||(q=h))}s=0;for(p=n.length;s<p;s++)for(h=n[s].s,k.push(h),g=q[s],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};
THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};
THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,n=a.x-d.x,q=a.y-d.y,I=h*k-g*l,z=h*n-g*q;if(1E-10<Math.abs(I)){if(0<I){if(0>z||z>I)return[];k=l*n-k*q;if(0>k||k>I)return[]}else{if(0<z||z<I)return[];k=l*n-k*q;if(0<k||k<I)return[]}if(0==k)return!f||0!=z&&z!=I?[a]:[];if(k==I)return!f||0!=z&&z!=I?[b]:[];if(0==z)return[d];
if(z==I)return[e];f=k/I;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=z||l*n!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,I=d.x,l=e,d=e.x):(b=e,I=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,I=d.y,l=e,d=e.y):(b=e,I=e.y,l=d,d=d.y));return k<=I?a<I?[]:a==I?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,n={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==n[l]&&console.log("Duplicate point",l),n[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;
d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],n,q,C,I,z,y=[],K,N,ba,P=0;for(n=b.length;P<n;P++)l.push(P);K=0;for(var O=2*l.length;0<l.length;){O--;if(0>O){console.log("Infinite Loop! Holes left:"+
l.length+", Probably Hole outside Shape!");break}for(q=K;q<h.length;q++){C=h[q];n=-1;for(P=0;P<l.length;P++)if(I=l[P],z=C.x+":"+C.y+":"+I,void 0===y[z]){k=b[I];for(N=0;N<k.length;N++)if(I=k[N],c(q,N)&&!f(C,I)&&!g(C,I)){n=N;l.splice(P,1);K=h.slice(0,q+1);I=h.slice(q);N=k.slice(n);ba=k.slice(0,n+1);h=K.concat(N).concat(ba).concat(I);K=q;break}if(0<=n)break;y[z]=!0}if(0<=n)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,
l=n[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,
b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};
THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};
THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);
THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;a*=d.length-1;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){console.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){console.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){console.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0!==a.initialized){for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a}},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].update(a)}};
THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};THREE.Animation.prototype.keyTypes=["pos","rot","scl"];THREE.Animation.prototype.play=function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)};
THREE.Animation.prototype.stop=function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)};
THREE.Animation.prototype.reset=function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];c.matrixAutoUpdate=!0;void 0===c.animationCache&&(c.animationCache={});void 0===c.animationCache[this.data.name]&&(c.animationCache[this.data.name]={},c.animationCache[this.data.name].prevKey={pos:0,rot:0,scl:0},c.animationCache[this.data.name].nextKey={pos:0,rot:0,scl:0},c.animationCache[this.data.name].originalMatrix=c.matrix);for(var c=c.animationCache[this.data.name],d=0;3>d;d++){for(var e=
this.keyTypes[d],f=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(e,a,1);g.time<this.currentTime&&g.index>f.index;)f=g,g=this.getNextKeyWith(e,a,g.index+1);c.prevKey[e]=f;c.nextKey[e]=g}}};
THREE.Animation.prototype.update=function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,r,t,s,p;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];s=a[c[2]];p=a[c[3]];c=e*e;r=e*c;d[0]=f(q[0],t[0],s[0],p[0],e,c,r);d[1]=f(q[1],t[1],s[1],p[1],e,c,r);d[2]=f(q[2],t[2],s[2],p[2],e,c,r);return d},f=function(a,b,c,d,e,f,r){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*
r+(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(!0===this.loop&&this.currentTime>f)this.currentTime%=f,this.reset();else if(!1===this.loop&&this.currentTime>f){this.stop();return}f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],l=k.animationCache[this.data.name],n=0;3>n;n++){var q=this.keyTypes[n],r=l.prevKey[q],t=l.nextKey[q];if(t.time<=this.currentTime){r=this.data.hierarchy[f].keys[0];
for(t=this.getNextKeyWith(q,f,1);t.time<this.currentTime&&t.index>r.index;)r=t,t=this.getNextKeyWith(q,f,t.index+1);l.prevKey[q]=r;l.nextKey[q]=t}k.matrixAutoUpdate=!0;k.matrixWorldNeedsUpdate=!0;var s=(this.currentTime-r.time)/(t.time-r.time),p=r[q],v=t[q];0>s&&(s=0);1<s&&(s=1);if("pos"===q)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=p[0]+(v[0]-p[0])*s,c.y=p[1]+(v[1]-p[1])*s,c.z=p[2]+(v[2]-p[2])*s,k instanceof THREE.Bone?(r=this.weight/(this.weight+k.accumulatedPosWeight),k.position.lerp(c,
r),k.accumulatedPosWeight+=this.weight):k.position.copy(c);else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,r.index-1).pos,a[1]=p,a[2]=v,a[3]=this.getNextKeyWith("pos",f,t.index+1).pos,s=0.33*s+0.33,t=e(a,s),r=1,k instanceof THREE.Bone&&(r=this.weight/(this.weight+k.accumulatedPosWeight),k.accumulatedPosWeight+=this.weight),q=k.position,q.x+=(t[0]-q.x)*r,q.y+=(t[1]-q.y)*r,q.z+=(t[2]-
q.z)*r,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(s=e(a,1.01*s),b.set(s[0],s[1],s[2]),b.sub(q),b.y=0,b.normalize(),s=Math.atan2(b.x,b.z),k.rotation.set(0,s,0))}else"rot"===q?(THREE.Quaternion.slerp(p,v,d,s),k instanceof THREE.Bone?0===k.accumulatedRotWeight?(k.quaternion.copy(d),k.accumulatedRotWeight=this.weight):(r=this.weight/(this.weight+k.accumulatedRotWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,r),k.accumulatedRotWeight+=this.weight):k.quaternion.copy(d)):
"scl"===q&&(c.x=p[0]+(v[0]-p[0])*s,c.y=p[1]+(v[1]-p[1])*s,c.z=p[2]+(v[2]-p[2])*s,k instanceof THREE.Bone?(r=this.weight/(this.weight+k.accumulatedSclWeight),k.scale.lerp(c,r),k.accumulatedSclWeight+=this.weight):k.scale.copy(c))}return!0}}}();
THREE.Animation.prototype.getNextKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=c[1],this.startTime=Math.min(c[0].time,
this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)};THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(!1!==this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=
f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(){var a=0,b=0;return function(c){if(!1!==this.isPlaying){this.currentTime+=c;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);c=this.duration/this.frames;var d=Math.floor(this.currentTime/c);d!=b&&(this.mesh.morphTargetInfluences[a]=0,this.mesh.morphTargetInfluences[b]=1,this.mesh.morphTargetInfluences[d]=
0,a=b,b=d);this.mesh.morphTargetInfluences[d]=this.currentTime%c/c;this.mesh.morphTargetInfluences[a]=1-this.mesh.morphTargetInfluences[d]}}}()};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,p){var v,w=h.widthSegments,u=h.heightSegments,D=e/2,A=f/2,x=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)v="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)v="y",u=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)v="x",w=h.depthSegments;var C=w+1,I=u+1,z=e/w,y=f/u,K=new THREE.Vector3;K[v]=0<g?1:-1;for(e=0;e<I;e++)for(f=0;f<C;f++){var N=new THREE.Vector3;N[a]=(f*z-D)*c;N[b]=(e*y-A)*d;N[v]=g;h.vertices.push(N)}for(e=
0;e<u;e++)for(f=0;f<w;f++)A=f+C*e,a=f+C*(e+1),b=f+1+C*(e+1),c=f+1+C*e,d=new THREE.Vector2(f/w,1-e/u),g=new THREE.Vector2(f/w,1-(e+1)/u),v=new THREE.Vector2((f+1)/w,1-(e+1)/u),D=new THREE.Vector2((f+1)/w,1-e/u),A=new THREE.Face3(A+x,a+x,c+x),A.normal.copy(K),A.vertexNormals.push(K.clone(),K.clone(),K.clone()),A.materialIndex=p,h.faces.push(A),h.faceVertexUvs[0].push([d,g,D]),A=new THREE.Face3(a+x,b+x,c+x),A.normal.copy(K),A.vertexNormals.push(K.clone(),K.clone(),K.clone()),A.materialIndex=p,h.faces.push(A),
h.faceVertexUvs[0].push([g.clone(),v,D.clone()])}THREE.Geometry.call(this);this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=
b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){console.warn("THEE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;var g=c/2,h,k,l=[],n=[];for(k=0;k<=e;k++){var q=[],r=[],t=k/e,s=t*(b-a)+a;for(h=0;h<=d;h++){var p=h/d,v=new THREE.Vector3;v.x=s*Math.sin(p*Math.PI*2);v.y=-t*c+g;v.z=s*Math.cos(p*Math.PI*2);this.vertices.push(v);q.push(this.vertices.length-1);r.push(new THREE.Vector2(p,
1-t))}l.push(q);n.push(r)}c=(b-a)/c;for(h=0;h<d;h++)for(0!==a?(q=this.vertices[l[0][h]].clone(),r=this.vertices[l[0][h+1]].clone()):(q=this.vertices[l[1][h]].clone(),r=this.vertices[l[1][h+1]].clone()),q.setY(Math.sqrt(q.x*q.x+q.z*q.z)*c).normalize(),r.setY(Math.sqrt(r.x*r.x+r.z*r.z)*c).normalize(),k=0;k<e;k++){var t=l[k][h],s=l[k+1][h],p=l[k+1][h+1],v=l[k][h+1],w=q.clone(),u=q.clone(),D=r.clone(),A=r.clone(),x=n[k][h].clone(),C=n[k+1][h].clone(),I=n[k+1][h+1].clone(),z=n[k][h+1].clone();this.faces.push(new THREE.Face3(t,
s,v,[w,u,A]));this.faceVertexUvs[0].push([x,C,z]);this.faces.push(new THREE.Face3(s,p,v,[u.clone(),D,A.clone()]));this.faceVertexUvs[0].push([C.clone(),I,z.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,g,0)),h=0;h<d;h++)t=l[0][h],s=l[0][h+1],p=this.vertices.length-1,w=new THREE.Vector3(0,1,0),u=new THREE.Vector3(0,1,0),D=new THREE.Vector3(0,1,0),x=n[0][h].clone(),C=n[0][h+1].clone(),I=new THREE.Vector2(C.x,0),this.faces.push(new THREE.Face3(t,s,p,[w,u,D])),this.faceVertexUvs[0].push([x,
C,I]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-g,0)),h=0;h<d;h++)t=l[k][h+1],s=l[k][h],p=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),u=new THREE.Vector3(0,-1,0),D=new THREE.Vector3(0,-1,0),x=n[k][h+1].clone(),C=n[k][h].clone(),I=new THREE.Vector2(C.x,1),this.faces.push(new THREE.Face3(t,s,p,[w,u,D])),this.faceVertexUvs[0].push([x,C,I]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.Math.sign,e=1,e=a.x-b.x,f=a.y-b.y,g=c.x-a.x,h=c.y-a.y,k=e*e+f*f;if(1E-10<Math.abs(e*h-f*g)){var l=Math.sqrt(k),d=Math.sqrt(g*g+h*h),k=b.x-f/l;b=b.y+e/l;g=((c.x-h/d-k)*h-(c.y+g/d-b)*g)/(e*h-f*g);c=k+e*g-a.x;a=b+f*g-a.y;e=c*c+a*a;if(2>=e)return new THREE.Vector2(c,a);e=Math.sqrt(e/2)}else a=!1,1E-10<e?1E-10<g&&(a=!0):-1E-10>e?-1E-10>g&&
(a=!0):d(f)==d(h)&&(a=!0),a?(c=-f,a=e,e=Math.sqrt(k)):(c=e,a=f,e=Math.sqrt(k/2));return new THREE.Vector2(c/e,a/e)}function e(c,d){var e,f;for(H=c.length;0<=--H;){e=H;f=H-1;0>f&&(f=c.length-1);for(var g=0,h=t+2*n,g=0;g<h;g++){var k=S*g,l=S*(g+1),p=d+e+k,k=d+f+k,q=d+f+l,l=d+e+l,r=c,s=g,v=h,w=e,x=f,p=p+ba,k=k+ba,q=q+ba,l=l+ba;N.faces.push(new THREE.Face3(p,k,l,null,null,u));N.faces.push(new THREE.Face3(k,q,l,null,null,u));p=D.generateSideWallUV(N,a,r,b,p,k,q,l,s,v,w,x);N.faceVertexUvs[0].push([p[0],
p[1],p[3]]);N.faceVertexUvs[0].push([p[1],p[2],p[3]])}}}function f(a,b,c){N.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=ba;d+=ba;e+=ba;N.faces.push(new THREE.Face3(c,d,e,null,null,w));c=f?D.generateBottomUV(N,a,b,c,d,e):D.generateTopUV(N,a,b,c,d,e);N.faceVertexUvs[0].push(c)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,n=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:
!0,r=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,s=b.extrudePath,p,v=!1,w=b.material,u=b.extrudeMaterial,D=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,A,x,C,I;s&&(p=s.getSpacedPoints(t),v=!0,q=!1,A=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(s,t,!1),x=new THREE.Vector3,C=new THREE.Vector3,I=new THREE.Vector3);q||(l=k=n=0);var z,y,K,N=this,ba=this.vertices.length,s=a.extractPoints(r),r=s.shape,P=s.holes;if(s=!THREE.Shape.Utils.isClockWise(r)){r=
r.reverse();y=0;for(K=P.length;y<K;y++)z=P[y],THREE.Shape.Utils.isClockWise(z)&&(P[y]=z.reverse());s=!1}var O=THREE.Shape.Utils.triangulateShape(r,P),J=r;y=0;for(K=P.length;y<K;y++)z=P[y],r=r.concat(z);var E,Q,L,R,B,S=r.length,V,W=O.length,s=[],H=0;L=J.length;E=L-1;for(Q=H+1;H<L;H++,E++,Q++)E===L&&(E=0),Q===L&&(Q=0),s[H]=d(J[H],J[E],J[Q]);var oa=[],$,X=s.concat();y=0;for(K=P.length;y<K;y++){z=P[y];$=[];H=0;L=z.length;E=L-1;for(Q=H+1;H<L;H++,E++,Q++)E===L&&(E=0),Q===L&&(Q=0),$[H]=d(z[H],z[E],z[Q]);
oa.push($);X=X.concat($)}for(E=0;E<n;E++){L=E/n;R=k*(1-L);Q=l*Math.sin(L*Math.PI/2);H=0;for(L=J.length;H<L;H++)B=c(J[H],s[H],Q),f(B.x,B.y,-R);y=0;for(K=P.length;y<K;y++)for(z=P[y],$=oa[y],H=0,L=z.length;H<L;H++)B=c(z[H],$[H],Q),f(B.x,B.y,-R)}Q=l;for(H=0;H<S;H++)B=q?c(r[H],X[H],Q):r[H],v?(C.copy(A.normals[0]).multiplyScalar(B.x),x.copy(A.binormals[0]).multiplyScalar(B.y),I.copy(p[0]).add(C).add(x),f(I.x,I.y,I.z)):f(B.x,B.y,0);for(L=1;L<=t;L++)for(H=0;H<S;H++)B=q?c(r[H],X[H],Q):r[H],v?(C.copy(A.normals[L]).multiplyScalar(B.x),
x.copy(A.binormals[L]).multiplyScalar(B.y),I.copy(p[L]).add(C).add(x),f(I.x,I.y,I.z)):f(B.x,B.y,h/t*L);for(E=n-1;0<=E;E--){L=E/n;R=k*(1-L);Q=l*Math.sin(L*Math.PI/2);H=0;for(L=J.length;H<L;H++)B=c(J[H],s[H],Q),f(B.x,B.y,h+R);y=0;for(K=P.length;y<K;y++)for(z=P[y],$=oa[y],H=0,L=z.length;H<L;H++)B=c(z[H],$[H],Q),v?f(B.x,B.y+p[t-1].y,p[t-1].x+R):f(B.x,B.y,h+R)}(function(){if(q){var a;a=0*S;for(H=0;H<W;H++)V=O[H],g(V[2]+a,V[1]+a,V[0]+a,!0);a=t+2*n;a*=S;for(H=0;H<W;H++)V=O[H],g(V[0]+a,V[1]+a,V[2]+a,!1)}else{for(H=
0;H<W;H++)V=O[H],g(V[2],V[1],V[0],!0);for(H=0;H<W;H++)V=O[H],g(V[0]+S*t,V[1]+S*t,V[2]+S*t,!1)}})();(function(){var a=0;e(J,a);a+=J.length;y=0;for(K=P.length;y<K;y++)z=P[y],e(z,a),a+=z.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h,k,l,n,q){b=a.vertices[e].x;c=a.vertices[e].y;e=a.vertices[e].z;d=a.vertices[f].x;k=a.vertices[f].y;f=a.vertices[f].z;l=a.vertices[g].x;
n=a.vertices[g].y;g=a.vertices[g].z;q=a.vertices[h].x;var r=a.vertices[h].y;a=a.vertices[h].z;return 0.01>Math.abs(c-k)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(l,1-g),new THREE.Vector2(q,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(k,1-f),new THREE.Vector2(n,1-g),new THREE.Vector2(r,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var n=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
k=k.concat(g);l=k.length;f=n.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=n[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),n=Math.sin(k),k=0,q=a.length;k<q;k++){var r=a[k],t=new THREE.Vector3;t.x=l*r.x-n*r.y;t.y=n*r.x+l*r.y;t.z=r.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=n=k+c*g;d=n+c;var l=n+1+c,n=n+1,r=g*f,t=k*e,s=r+f,p=t+e;this.faces.push(new THREE.Face3(b,d,n));this.faceVertexUvs[0].push([new THREE.Vector2(r,
t),new THREE.Vector2(s,t),new THREE.Vector2(r,p)]);this.faces.push(new THREE.Face3(d,l,n));this.faceVertexUvs[0].push([new THREE.Vector2(s,t),new THREE.Vector2(s,p),new THREE.Vector2(r,p)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,l=b/d,n=new THREE.Vector3(0,0,1);for(a=0;a<h;a++){var q=a*l-f;for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*k-e,-q,0))}for(a=0;a<d;a++)for(b=0;b<c;b++){var r=b+g*a,e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,k=new THREE.Vector2(b/c,1-a/d),l=new THREE.Vector2(b/c,1-(a+1)/d),q=new THREE.Vector2((b+1)/c,1-(a+1)/d),t=new THREE.Vector2((b+
1)/c,1-a/d),r=new THREE.Face3(r,e,h);r.normal.copy(n);r.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(r);this.faceVertexUvs[0].push([k,l,t]);r=new THREE.Face3(e,f,h);r.normal.copy(n);r.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(r);this.faceVertexUvs[0].push([l.clone(),q,t.clone()])}};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var n=new THREE.Vector3,q=e+g/c*f;n.x=k*Math.cos(q);n.y=k*Math.sin(q);this.vertices.push(n);h.push(new THREE.Vector2((n.x/b+1)/2,(n.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,l=q+c+1,n=q+c+2,this.faces.push(new THREE.Face3(f,
l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]),f=q,l=q+c+2,n=q+1,this.faces.push(new THREE.Face3(f,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,l=[],n=[];for(k=0;k<=c;k++){var q=[],r=[];for(h=0;h<=b;h++){var t=h/b,s=k/c,p=new THREE.Vector3;p.x=-a*Math.cos(d+t*e)*Math.sin(f+s*g);p.y=a*Math.cos(f+s*g);p.z=
a*Math.sin(d+t*e)*Math.sin(f+s*g);this.vertices.push(p);q.push(this.vertices.length-1);r.push(new THREE.Vector2(t,1-s))}l.push(q);n.push(r)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=l[k][h+1];e=l[k][h];f=l[k+1][h];g=l[k+1][h+1];var q=this.vertices[d].clone().normalize(),r=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),s=this.vertices[g].clone().normalize(),p=n[k][h+1].clone(),v=n[k][h].clone(),w=n[k+1][h].clone(),u=n[k+1][h+1].clone();Math.abs(this.vertices[d].y)===a?(p.x=(p.x+
v.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,s])),this.faceVertexUvs[0].push([p,w,u])):Math.abs(this.vertices[f].y)===a?(w.x=(w.x+u.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,r,t])),this.faceVertexUvs[0].push([p,v,w])):(this.faces.push(new THREE.Face3(d,e,g,[q,r,s])),this.faceVertexUvs[0].push([p,v,u]),this.faces.push(new THREE.Face3(e,f,g,[r.clone(),t,s.clone()])),this.faceVertexUvs[0].push([v.clone(),w,u.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var n=l/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(n);f.y=a*Math.sin(n);var r=new THREE.Vector3;r.x=(a+b*Math.cos(q))*Math.cos(n);r.y=(a+b*Math.cos(q))*Math.sin(n);r.z=b*Math.sin(q);this.vertices.push(r);g.push(new THREE.Vector2(l/d,k/c));h.push(r.clone().sub(f).normalize())}for(k=
1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,n=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),n=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*0.5;g=d*(2+b)*g*0.5;d=e*d*Math.sin(a)*0.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,r=0;r<c;++r){k[r]=Array(d);var t=r/c*2*e*Math.PI,
s=h(t,f,e,a,g),t=h(t+0.01,f,e,a,g);l.subVectors(t,s);n.addVectors(t,s);q.crossVectors(l,n);n.crossVectors(q,l);q.normalize();n.normalize();for(t=0;t<d;++t){var p=t/d*2*Math.PI,v=-b*Math.cos(p),p=b*Math.sin(p),w=new THREE.Vector3;w.x=s.x+v*n.x+p*q.x;w.y=s.y+v*n.y+p*q.y;w.z=s.z+v*n.z+p*q.z;k[r][t]=this.vertices.push(w)-1}}for(r=0;r<c;++r)for(t=0;t<d;++t)e=(r+1)%c,f=(t+1)%d,a=k[r][t],b=k[e][t],e=k[e][f],f=k[r][f],g=new THREE.Vector2(r/c,t/d),l=new THREE.Vector2((r+1)/c,t/d),n=new THREE.Vector2((r+1)/
c,(t+1)/d),q=new THREE.Vector2(r/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),n,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var f=[],g,h,k=b+1,l,n,q,r,t=new THREE.Vector3,s,p,v;s=new THREE.TubeGeometry.FrenetFrames(a,b,e);p=s.normals;v=s.binormals;this.tangents=s.tangents;this.normals=p;this.binormals=v;for(s=0;s<k;s++)for(f[s]=[],l=s/(k-1),r=a.getPointAt(l),g=p[s],h=v[s],l=0;l<d;l++)n=l/d*2*Math.PI,q=-c*Math.cos(n),n=c*Math.sin(n),t.copy(r),t.x+=q*g.x+n*
h.x,t.y+=q*g.y+n*h.y,t.z+=q*g.z+n*h.z,f[s][l]=this.vertices.push(new THREE.Vector3(t.x,t.y,t.z))-1;for(s=0;s<b;s++)for(l=0;l<d;l++)k=e?(s+1)%b:s+1,t=(l+1)%d,a=f[s][l],c=f[k][l],k=f[k][t],t=f[s][t],p=new THREE.Vector2(s/b,l/d),v=new THREE.Vector2((s+1)/b,l/d),g=new THREE.Vector2((s+1)/b,(l+1)/d),h=new THREE.Vector2(s/b,(l+1)/d),this.faces.push(new THREE.Face3(a,c,t)),this.faceVertexUvs[0].push([p,v,h]),this.faces.push(new THREE.Face3(c,k,t)),this.faceVertexUvs[0].push([v.clone(),g,h.clone()]);this.computeFaceNormals();
this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,n,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)n=l/(b-1),e[l]=a.getTangentAt(n),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);n=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));n<=a&&(a=n,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],
f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);v.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(v.z,-v.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,b){var c=
Math.pow(2,b);Math.pow(4,b);for(var d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),r=c-n,s=0;s<=r;s++)l[n][s]=0==s&&n==c?p:e(p.clone().lerp(q,s/r))}for(n=0;n<c;n++)for(s=0;s<2*(c-n)-1;s++)d=Math.floor(s/2),0==s%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,
a.y));return a.clone()}THREE.Geometry.call(this);c=c||1;d=d||0;for(var k=this,l=0,n=a.length;l<n;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var q=[],r=l=0,n=b.length;l<n;l+=3,r++){var t=a[b[l]],s=a[b[l+1]],p=a[b[l+2]];q[r]=new THREE.Face3(t.index,s.index,p.index,[t.clone(),s.clone(),p.clone()])}for(var v=new THREE.Vector3,l=0,n=q.length;l<n;l++)g(q[l],d);l=0;for(n=this.faceVertexUvs[0].length;l<n;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,q=b[2].x,r=Math.max(d,Math.max(a,
q)),t=Math.min(d,Math.min(a,q)),0.9<r&&0.1>t&&(0.2>d&&(b[0].x+=1),0.2>a&&(b[1].x+=1),0.2>q&&(b[2].x+=1));l=0;for(n=this.vertices.length;l<n;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,n=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,r,t,s;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*n+h,d=g*n+h+1,l=(g+1)*n+h+1,k=(g+1)*n+h,q=new THREE.Vector2(h/b,g/c),r=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),s=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,k)),f.push([q,r,s]),e.push(new THREE.Face3(d,l,k)),
f.push([r.clone(),t,s.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=0.2*e);void 0===h&&(h=0.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};
THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrixAutoUpdate=
!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,g,h,k){a.set(g,h,k);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d)for(g=0,h=d.length;g<h;g++)e.geometry.vertices[d[g]].copy(a)}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",0.7,
1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();for(var l=k.vertices,k=k.faces,n=0,q=0,r=k.length;q<r;q++)for(var t=k[q],s=0;3>s;s++){d[0]=t[g[s]];d[1]=t[g[(s+1)%3]];d.sort(f);var p=d.toString();void 0===e[p]?(e[p]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},n++):e[p].face2=q}h.addAttribute("position",new THREE.Float32Attribute(6*n,3));d=h.attributes.position.array;
f=0;for(p in e)if(g=e[p],void 0===g.face2||0.9999>k[g.face1].normal.dot(k[g.face2].normal))n=l[g.vert1],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z,n=l[g.vert2],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z;THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b,c,d){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];a=new THREE.SphereGeometry(b,4,2);a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(b=0;8>b;b++)a.faces[b].color=this.colors[4>b?0:1];b=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(a,b);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrixWorld=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,r=n.vertexNormals.length;q<r;q++){var t=n.vertexNormals[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,r=n.vertexTangents.length;q<r;q++){var t=n.vertexTangents[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,n=0,q=new Uint32Array(6*l.length),r=0,t=l.length;r<t;r++)for(var s=l[r],p=0;3>p;p++){d[0]=s[g[p]];d[1]=s[g[(p+1)%3]];d.sort(f);var v=d.toString();void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++)}d=new Float32Array(6*n);r=0;for(t=n;r<t;r++)for(p=0;2>p;p++)n=
k[q[2*r+p]],g=6*r+3*p,d[g+0]=n.x,d[g+1]=n.y,d[g+2]=n.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){for(var k=a.geometry.attributes.position.array,t=a.geometry.attributes.index.array,l=a.geometry.offsets,n=0,q=new Uint32Array(2*t.length),s=0,w=l.length;s<w;++s)for(var p=l[s].start,v=l[s].count,g=l[s].index,r=p,u=p+v;r<u;r+=3)for(p=0;3>p;p++)d[0]=g+t[r+p],d[1]=g+t[r+(p+1)%3],d.sort(f),v=d.toString(),
void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++);d=new Float32Array(6*n);r=0;for(t=n;r<t;r++)for(p=0;2>p;p++)g=6*r+3*p,n=3*q[2*r+p],d[g+0]=k[n],d[g+1]=k[n+1],d[g+2]=k[n+2]}else for(k=a.geometry.attributes.position.array,n=k.length/3,q=n/3,d=new Float32Array(6*n),r=0,t=q;r<t;r++)for(p=0;3>p;p++)g=18*r+6*p,q=9*r+3*p,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],n=9*r+(p+1)%3*3,d[g+3]=k[n],d[g+4]=k[n+1],d[g+5]=k[n+2];h.addAttribute("position",new THREE.BufferAttribute(d,3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),
THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};
THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*0.25,c.rotation+=0.25*(c.wantedRotation-c.rotation)};
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
THREE.LensFlarePlugin=function(){function a(a,b){var d=c.createProgram(),e=c.createShader(c.FRAGMENT_SHADER),f=c.createShader(c.VERTEX_SHADER),g="precision "+b+" float;\n";c.shaderSource(e,g+a.fragmentShader);c.shaderSource(f,g+a.vertexShader);c.compileShader(e);c.compileShader(f);c.attachShader(d,e);c.attachShader(d,f);c.linkProgram(d);return d}var b=[],c,d,e,f,g,h,k,l,n,q,r,t,s;this.init=function(b){c=b.context;d=b;e=b.getPrecision();f=new Float32Array(16);g=new Uint16Array(6);b=0;f[b++]=-1;f[b++]=
-1;f[b++]=0;f[b++]=0;f[b++]=1;f[b++]=-1;f[b++]=1;f[b++]=0;f[b++]=1;f[b++]=1;f[b++]=1;f[b++]=1;f[b++]=-1;f[b++]=1;f[b++]=0;f[b++]=1;b=0;g[b++]=0;g[b++]=1;g[b++]=2;g[b++]=0;g[b++]=2;g[b++]=3;h=c.createBuffer();k=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,h);c.bufferData(c.ARRAY_BUFFER,f,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k);c.bufferData(c.ELEMENT_ARRAY_BUFFER,g,c.STATIC_DRAW);l=c.createTexture();n=c.createTexture();c.bindTexture(c.TEXTURE_2D,l);c.texImage2D(c.TEXTURE_2D,0,c.RGB,16,
16,0,c.RGB,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);c.bindTexture(c.TEXTURE_2D,n);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,16,16,0,c.RGBA,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);
c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);0>=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(q=!1,r=a(THREE.ShaderFlares.lensFlare,e)):(q=!0,r=a(THREE.ShaderFlares.lensFlareVertexTexture,e));t={};s={};t.vertex=c.getAttribLocation(r,"position");t.uv=c.getAttribLocation(r,"uv");s.renderType=c.getUniformLocation(r,"renderType");s.map=c.getUniformLocation(r,"map");s.occlusionMap=c.getUniformLocation(r,"occlusionMap");s.opacity=
c.getUniformLocation(r,"opacity");s.color=c.getUniformLocation(r,"color");s.scale=c.getUniformLocation(r,"scale");s.rotation=c.getUniformLocation(r,"rotation");s.screenPosition=c.getUniformLocation(r,"screenPosition")};this.render=function(a,e,f,g){b.length=0;a.traverseVisible(function(a){a instanceof THREE.LensFlare&&b.push(a)});if(0!==b.length){a=new THREE.Vector3;var D=g/f,A=0.5*f,x=0.5*g,C=16/g,I=new THREE.Vector2(C*D,C),z=new THREE.Vector3(1,1,0),y=new THREE.Vector2(1,1),K=s,C=t;c.useProgram(r);
c.enableVertexAttribArray(t.vertex);c.enableVertexAttribArray(t.uv);c.uniform1i(K.occlusionMap,0);c.uniform1i(K.map,1);c.bindBuffer(c.ARRAY_BUFFER,h);c.vertexAttribPointer(C.vertex,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(C.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k);c.disable(c.CULL_FACE);c.depthMask(!1);for(var N=0,ba=b.length;N<ba;N++){C=16/g;I.set(C*D,C);var P=b[N];a.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]);a.applyMatrix4(e.matrixWorldInverse);
a.applyProjection(e.projectionMatrix);z.copy(a);y.x=z.x*A+A;y.y=z.y*x+x;if(q||0<y.x&&y.x<f&&0<y.y&&y.y<g){c.activeTexture(c.TEXTURE1);c.bindTexture(c.TEXTURE_2D,l);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGB,y.x-8,y.y-8,16,16,0);c.uniform1i(K.renderType,0);c.uniform2f(K.scale,I.x,I.y);c.uniform3f(K.screenPosition,z.x,z.y,z.z);c.disable(c.BLEND);c.enable(c.DEPTH_TEST);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,n);c.copyTexImage2D(c.TEXTURE_2D,
0,c.RGBA,y.x-8,y.y-8,16,16,0);c.uniform1i(K.renderType,1);c.disable(c.DEPTH_TEST);c.activeTexture(c.TEXTURE1);c.bindTexture(c.TEXTURE_2D,l);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);P.positionScreen.copy(z);P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares();c.uniform1i(K.renderType,2);c.enable(c.BLEND);for(var O=0,J=P.lensFlares.length;O<J;O++){var E=P.lensFlares[O];0.001<E.opacity&&0.001<E.scale&&(z.x=E.x,z.y=E.y,z.z=E.z,C=E.size*E.scale/g,I.x=C*D,I.y=C,c.uniform3f(K.screenPosition,
z.x,z.y,z.z),c.uniform2f(K.scale,I.x,I.y),c.uniform1f(K.rotation,E.rotation),c.uniform1f(K.opacity,E.opacity),c.uniform3f(K.color,E.color.r,E.color.g,E.color.b),d.setBlending(E.blending,E.blendEquation,E.blendSrc,E.blendDst),d.setTexture(E.texture,1),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0))}}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(!0)}}};
THREE.ShadowMapPlugin=function(){function a(b,c,d){if(c.visible){var e=b.__webglObjects[c.id];if(e&&c.castShadow&&(!1===c.frustumCulled||!0===h.intersectsObject(c)))for(var f=0,g=e.length;f<g;f++){var k=e[f];c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,c.matrixWorld);r.push(k)}f=0;for(g=c.children.length;f<g;f++)a(b,c.children[f],d)}}var b,c,d,e,f,g,h=new THREE.Frustum,k=new THREE.Matrix4,l=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,r=[];this.init=function(a){b=a.context;
c=a;a=THREE.ShaderLib.depthRGBA;var h=THREE.UniformsUtils.clone(a.uniforms);d=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h});e=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0});f=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,skinning:!0});g=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,
morphTargets:!0,skinning:!0});d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0;g._shadowPass=!0};this.render=function(a,b){c.shadowMapEnabled&&c.shadowMapAutoUpdate&&this.update(a,b)};this.update=function(t,s){var p,v,w,u,D,A,x,C,I=[];u=0;b.clearColor(1,1,1,1);b.disable(b.BLEND);b.enable(b.CULL_FACE);b.frontFace(b.CCW);c.shadowMapCullFace===THREE.CullFaceFront?b.cullFace(b.FRONT):b.cullFace(b.BACK);c.setDepthTest(!0);p=0;for(v=t.__lights.length;p<v;p++)if(w=t.__lights[p],w.castShadow)if(w instanceof
THREE.DirectionalLight&&w.shadowCascade)for(D=0;D<w.shadowCascadeCount;D++){var z;if(w.shadowCascadeArray[D])z=w.shadowCascadeArray[D];else{x=w;var y=D;z=new THREE.DirectionalLight;z.isVirtual=!0;z.onlyShadow=!0;z.castShadow=!0;z.shadowCameraNear=x.shadowCameraNear;z.shadowCameraFar=x.shadowCameraFar;z.shadowCameraLeft=x.shadowCameraLeft;z.shadowCameraRight=x.shadowCameraRight;z.shadowCameraBottom=x.shadowCameraBottom;z.shadowCameraTop=x.shadowCameraTop;z.shadowCameraVisible=x.shadowCameraVisible;
z.shadowDarkness=x.shadowDarkness;z.shadowBias=x.shadowCascadeBias[y];z.shadowMapWidth=x.shadowCascadeWidth[y];z.shadowMapHeight=x.shadowCascadeHeight[y];z.pointsWorld=[];z.pointsFrustum=[];C=z.pointsWorld;A=z.pointsFrustum;for(var K=0;8>K;K++)C[K]=new THREE.Vector3,A[K]=new THREE.Vector3;C=x.shadowCascadeNearZ[y];x=x.shadowCascadeFarZ[y];A[0].set(-1,-1,C);A[1].set(1,-1,C);A[2].set(-1,1,C);A[3].set(1,1,C);A[4].set(-1,-1,x);A[5].set(1,-1,x);A[6].set(-1,1,x);A[7].set(1,1,x);z.originalCamera=s;A=new THREE.Gyroscope;
A.position.copy(w.shadowCascadeOffset);A.add(z);A.add(z.target);s.add(A);w.shadowCascadeArray[D]=z;console.log("Created virtualLight",z)}y=w;C=D;x=y.shadowCascadeArray[C];x.position.copy(y.position);x.target.position.copy(y.target.position);x.lookAt(x.target);x.shadowCameraVisible=y.shadowCameraVisible;x.shadowDarkness=y.shadowDarkness;x.shadowBias=y.shadowCascadeBias[C];A=y.shadowCascadeNearZ[C];y=y.shadowCascadeFarZ[C];x=x.pointsFrustum;x[0].z=A;x[1].z=A;x[2].z=A;x[3].z=A;x[4].z=y;x[5].z=y;x[6].z=
y;x[7].z=y;I[u]=z;u++}else I[u]=w,u++;p=0;for(v=I.length;p<v;p++){w=I[p];w.shadowMap||(D=THREE.LinearFilter,c.shadowMapType===THREE.PCFSoftShadowMap&&(D=THREE.NearestFilter),w.shadowMap=new THREE.WebGLRenderTarget(w.shadowMapWidth,w.shadowMapHeight,{minFilter:D,magFilter:D,format:THREE.RGBAFormat}),w.shadowMapSize=new THREE.Vector2(w.shadowMapWidth,w.shadowMapHeight),w.shadowMatrix=new THREE.Matrix4);if(!w.shadowCamera){if(w instanceof THREE.SpotLight)w.shadowCamera=new THREE.PerspectiveCamera(w.shadowCameraFov,
w.shadowMapWidth/w.shadowMapHeight,w.shadowCameraNear,w.shadowCameraFar);else if(w instanceof THREE.DirectionalLight)w.shadowCamera=new THREE.OrthographicCamera(w.shadowCameraLeft,w.shadowCameraRight,w.shadowCameraTop,w.shadowCameraBottom,w.shadowCameraNear,w.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}t.add(w.shadowCamera);!0===t.autoUpdate&&t.updateMatrixWorld()}w.shadowCameraVisible&&!w.cameraHelper&&(w.cameraHelper=new THREE.CameraHelper(w.shadowCamera),w.shadowCamera.add(w.cameraHelper));
if(w.isVirtual&&z.originalCamera==s){D=s;u=w.shadowCamera;A=w.pointsFrustum;x=w.pointsWorld;l.set(Infinity,Infinity,Infinity);n.set(-Infinity,-Infinity,-Infinity);for(y=0;8>y;y++)C=x[y],C.copy(A[y]),THREE.ShadowMapPlugin.__projector.unprojectVector(C,D),C.applyMatrix4(u.matrixWorldInverse),C.x<l.x&&(l.x=C.x),C.x>n.x&&(n.x=C.x),C.y<l.y&&(l.y=C.y),C.y>n.y&&(n.y=C.y),C.z<l.z&&(l.z=C.z),C.z>n.z&&(n.z=C.z);u.left=l.x;u.right=n.x;u.top=n.y;u.bottom=l.y;u.updateProjectionMatrix()}u=w.shadowMap;A=w.shadowMatrix;
D=w.shadowCamera;D.position.setFromMatrixPosition(w.matrixWorld);q.setFromMatrixPosition(w.target.matrixWorld);D.lookAt(q);D.updateMatrixWorld();D.matrixWorldInverse.getInverse(D.matrixWorld);w.cameraHelper&&(w.cameraHelper.visible=w.shadowCameraVisible);w.shadowCameraVisible&&w.cameraHelper.update();A.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);A.multiply(D.projectionMatrix);A.multiply(D.matrixWorldInverse);k.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse);h.setFromMatrix(k);c.setRenderTarget(u);
c.clear();r.length=0;a(t,t,D);w=0;for(u=r.length;w<u;w++)x=r[w],A=x.object,x=x.buffer,y=A.material instanceof THREE.MeshFaceMaterial?A.material.materials[0]:A.material,C=void 0!==A.geometry.morphTargets&&0<A.geometry.morphTargets.length&&y.morphTargets,K=A instanceof THREE.SkinnedMesh&&y.skinning,C=A.customDepthMaterial?A.customDepthMaterial:K?C?g:f:C?e:d,c.setMaterialFaces(y),x instanceof THREE.BufferGeometry?c.renderBufferDirect(D,t.__lights,null,C,x,A):c.renderBuffer(D,t.__lights,null,C,x,A);y=
t.__webglObjectsImmediate;w=0;for(u=y.length;w<u;w++)x=y[w],A=x.object,A.visible&&A.castShadow&&(A._modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld),c.renderImmediateObject(D,t.__lights,null,d,A))}p=c.getClearColor();v=c.getClearAlpha();b.clearColor(p.r,p.g,p.b,v);b.enable(b.BLEND);c.shadowMapCullFace===THREE.CullFaceFront&&b.cullFace(b.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;
THREE.SpritePlugin=function(){var a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p,v;function w(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var u,D,A,x=[],C,I,z,y,K;this.init=function(w){u=w.context;D=w;C=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);I=new Uint16Array([0,1,2,0,2,3]);z=u.createBuffer();y=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,z);u.bufferData(u.ARRAY_BUFFER,C,u.STATIC_DRAW);u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,y);u.bufferData(u.ELEMENT_ARRAY_BUFFER,I,u.STATIC_DRAW);w=u.createProgram();
var x=u.createShader(u.VERTEX_SHADER),P=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(x,["precision "+D.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
u.shaderSource(P,["precision "+D.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
u.compileShader(x);u.compileShader(P);u.attachShader(w,x);u.attachShader(w,P);u.linkProgram(w);K=w;p=u.getAttribLocation(K,"position");v=u.getAttribLocation(K,"uv");a=u.getUniformLocation(K,"uvOffset");b=u.getUniformLocation(K,"uvScale");c=u.getUniformLocation(K,"rotation");d=u.getUniformLocation(K,"scale");e=u.getUniformLocation(K,"color");f=u.getUniformLocation(K,"map");g=u.getUniformLocation(K,"opacity");h=u.getUniformLocation(K,"modelViewMatrix");k=u.getUniformLocation(K,"projectionMatrix");l=
u.getUniformLocation(K,"fogType");n=u.getUniformLocation(K,"fogDensity");q=u.getUniformLocation(K,"fogNear");r=u.getUniformLocation(K,"fogFar");t=u.getUniformLocation(K,"fogColor");s=u.getUniformLocation(K,"alphaTest");w=document.createElement("canvas");w.width=8;w.height=8;x=w.getContext("2d");x.fillStyle="white";x.fillRect(0,0,8,8);A=new THREE.Texture(w);A.needsUpdate=!0};this.render=function(C,I,P,O){x.length=0;C.traverseVisible(function(a){a instanceof THREE.Sprite&&x.push(a)});if(0!==x.length){u.useProgram(K);
u.enableVertexAttribArray(p);u.enableVertexAttribArray(v);u.disable(u.CULL_FACE);u.enable(u.BLEND);u.bindBuffer(u.ARRAY_BUFFER,z);u.vertexAttribPointer(p,2,u.FLOAT,!1,16,0);u.vertexAttribPointer(v,2,u.FLOAT,!1,16,8);u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,y);u.uniformMatrix4fv(k,!1,I.projectionMatrix.elements);u.activeTexture(u.TEXTURE0);u.uniform1i(f,0);O=P=0;var J=C.fog;J?(u.uniform3f(t,J.color.r,J.color.g,J.color.b),J instanceof THREE.Fog?(u.uniform1f(q,J.near),u.uniform1f(r,J.far),u.uniform1i(l,1),
O=P=1):J instanceof THREE.FogExp2&&(u.uniform1f(n,J.density),u.uniform1i(l,2),O=P=2)):(u.uniform1i(l,0),O=P=0);for(var J=0,E=x.length;J<E;J++){var Q=x[J],L=Q.material;Q._modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,Q.matrixWorld);Q.z=-Q._modelViewMatrix.elements[14]}x.sort(w);I=[];J=0;for(E=x.length;J<E;J++)Q=x[J],L=Q.material,u.uniform1f(s,L.alphaTest),u.uniformMatrix4fv(h,!1,Q._modelViewMatrix.elements),I[0]=Q.scale.x,I[1]=Q.scale.y,Q=0,C.fog&&L.fog&&(Q=O),P!==Q&&(u.uniform1i(l,Q),P=Q),
null!==L.map?(u.uniform2f(a,L.map.offset.x,L.map.offset.y),u.uniform2f(b,L.map.repeat.x,L.map.repeat.y)):(u.uniform2f(a,0,0),u.uniform2f(b,1,1)),u.uniform1f(g,L.opacity),u.uniform3f(e,L.color.r,L.color.g,L.color.b),u.uniform1f(c,L.rotation),u.uniform2fv(d,I),D.setBlending(L.blending,L.blendEquation,L.blendSrc,L.blendDst),D.setDepthTest(L.depthTest),D.setDepthWrite(L.depthWrite),L.map&&L.map.image&&L.map.image.width?D.setTexture(L.map,0):D.setTexture(A,0),u.drawElements(u.TRIANGLES,6,u.UNSIGNED_SHORT,
0);u.enable(u.CULL_FACE)}}};
THREE.DepthPassPlugin=function(){function a(b,c,d){if(c.visible){var e=b.__webglObjects[c.id];if(e&&(!1===c.frustumCulled||!0===h.intersectsObject(c)))for(var f=0,g=e.length;f<g;f++){var k=e[f];c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,c.matrixWorld);l.push(k)}f=0;for(g=c.children.length;f<g;f++)a(b,c.children[f],d)}}this.enabled=!1;this.renderTarget=null;var b,c,d,e,f,g,h=new THREE.Frustum,k=new THREE.Matrix4,l=[];this.init=function(a){b=a.context;c=a;a=THREE.ShaderLib.depthRGBA;var h=
THREE.UniformsUtils.clone(a.uniforms);d=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h});e=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0});f=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,skinning:!0});g=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});d._shadowPass=
!0;e._shadowPass=!0;f._shadowPass=!0;g._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(n,q){var r,t,s,p,v;b.clearColor(1,1,1,1);b.disable(b.BLEND);c.setDepthTest(!0);!0===n.autoUpdate&&n.updateMatrixWorld();q.matrixWorldInverse.getInverse(q.matrixWorld);k.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse);h.setFromMatrix(k);c.setRenderTarget(this.renderTarget);c.clear();l.length=0;a(n,n,q);var w;r=0;for(t=l.length;r<t;r++)s=l[r],v=s.object,s=s.buffer,
v instanceof THREE.PointCloud&&!v.customDepthMaterial||((w=v.material instanceof THREE.MeshFaceMaterial?v.material.materials[0]:v.material)&&c.setMaterialFaces(v.material),p=void 0!==v.geometry.morphTargets&&0<v.geometry.morphTargets.length&&w.morphTargets,w=v instanceof THREE.SkinnedMesh&&w.skinning,p=v.customDepthMaterial?v.customDepthMaterial:w?p?g:f:p?e:d,s instanceof THREE.BufferGeometry?c.renderBufferDirect(q,n.__lights,null,p,s,v):c.renderBuffer(q,n.__lights,null,p,s,v));p=n.__webglObjectsImmediate;
r=0;for(t=p.length;r<t;r++)s=p[r],v=s.object,v.visible&&(v._modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),c.renderImmediateObject(q,n.__lights,null,d,v));r=c.getClearColor();t=c.getClearAlpha();b.clearColor(r.r,r.g,r.b,t);b.enable(b.BLEND)}};
THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};
;/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.OBJLoader.prototype = {

	constructor: THREE.OBJLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE.XHRLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( text ) );

		} );

	},

	parse: function ( text ) {

		function vector( x, y, z ) {

			return new THREE.Vector3( parseFloat( x ), parseFloat( y ), parseFloat( z ) );

		}

		function uv( u, v ) {

			return new THREE.Vector2( parseFloat( u ), parseFloat( v ) );

		}

		function face3( a, b, c, normals ) {

			return new THREE.Face3( a, b, c, normals );

		}
		
		var object = new THREE.Object3D();
		var geometry, material, mesh;

		function parseVertexIndex( index ) {

			index = parseInt( index );

			return index >= 0 ? index - 1 : index + vertices.length;

		}

		function parseNormalIndex( index ) {

			index = parseInt( index );

			return index >= 0 ? index - 1 : index + normals.length;

		}

		function parseUVIndex( index ) {

			index = parseInt( index );

			return index >= 0 ? index - 1 : index + uvs.length;

		}
		
		function add_face( a, b, c, normals_inds ) {

			if ( normals_inds === undefined ) {

				geometry.faces.push( face3(
					vertices[ parseVertexIndex( a ) ] - 1,
					vertices[ parseVertexIndex( b ) ] - 1,
					vertices[ parseVertexIndex( c ) ] - 1
				) );

			} else {

				geometry.faces.push( face3(
					vertices[ parseVertexIndex( a ) ] - 1,
					vertices[ parseVertexIndex( b ) ] - 1,
					vertices[ parseVertexIndex( c ) ] - 1,
					[
						normals[ parseNormalIndex( normals_inds[ 0 ] ) ].clone(),
						normals[ parseNormalIndex( normals_inds[ 1 ] ) ].clone(),
						normals[ parseNormalIndex( normals_inds[ 2 ] ) ].clone()
					]
				) );

			}

		}
		
		function add_uvs( a, b, c ) {
	  
			geometry.faceVertexUvs[ 0 ].push( [
				uvs[ parseUVIndex( a ) ].clone(),
				uvs[ parseUVIndex( b ) ].clone(),
				uvs[ parseUVIndex( c ) ].clone()
			] );

		}
		
		function handle_face_line(faces, uvs, normals_inds) {

			if ( faces[ 3 ] === undefined ) {
				
				add_face( faces[ 0 ], faces[ 1 ], faces[ 2 ], normals_inds );
				
				if ( uvs !== undefined && uvs.length > 0 ) {

					add_uvs( uvs[ 0 ], uvs[ 1 ], uvs[ 2 ] );

				}

			} else {
				
				if ( normals_inds !== undefined && normals_inds.length > 0 ) {

					add_face( faces[ 0 ], faces[ 1 ], faces[ 3 ], [ normals_inds[ 0 ], normals_inds[ 1 ], normals_inds[ 3 ] ] );
					add_face( faces[ 1 ], faces[ 2 ], faces[ 3 ], [ normals_inds[ 1 ], normals_inds[ 2 ], normals_inds[ 3 ] ] );

				} else {

					add_face( faces[ 0 ], faces[ 1 ], faces[ 3 ] );
					add_face( faces[ 1 ], faces[ 2 ], faces[ 3 ] );

				}
				
				if ( uvs !== undefined && uvs.length > 0 ) {

					add_uvs( uvs[ 0 ], uvs[ 1 ], uvs[ 3 ] );
					add_uvs( uvs[ 1 ], uvs[ 2 ], uvs[ 3 ] );

				}

			}
			
		}

		// create mesh if no objects in text

		if ( /^o /gm.test( text ) === false ) {

			geometry = new THREE.Geometry();
			material = new THREE.MeshLambertMaterial();
			mesh = new THREE.Mesh( geometry, material );
			object.add( mesh );

		}

		var vertices = [];
		var normals = [];
		var uvs = [];

		// v float float float

		var vertex_pattern = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

		// vn float float float

		var normal_pattern = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

		// vt float float

		var uv_pattern = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

		// f vertex vertex vertex ...

		var face_pattern1 = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;

		// f vertex/uv vertex/uv vertex/uv ...

		var face_pattern2 = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;

		// f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...

		var face_pattern3 = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;

		// f vertex//normal vertex//normal vertex//normal ... 

		var face_pattern4 = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/

		// fixes

		text = text.replace( /\\\r\n/g, '' ); // handles line continuations \

		var lines = text.split( '\n' );

		for ( var i = 0; i < lines.length; i ++ ) {

			var line = lines[ i ];
			line = line.trim();

			var result;

			if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

				continue;

			} else if ( ( result = vertex_pattern.exec( line ) ) !== null ) {

				// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

				vertices.push( 
					geometry.vertices.push(
						vector(
							result[ 1 ], result[ 2 ], result[ 3 ]
						)
					)
				);

			} else if ( ( result = normal_pattern.exec( line ) ) !== null ) {

				// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

				normals.push(
					vector(
						result[ 1 ], result[ 2 ], result[ 3 ]
					)
				);

			} else if ( ( result = uv_pattern.exec( line ) ) !== null ) {

				// ["vt 0.1 0.2", "0.1", "0.2"]

				uvs.push(
					uv(
						result[ 1 ], result[ 2 ]
					)
				);

			} else if ( ( result = face_pattern1.exec( line ) ) !== null ) {

				// ["f 1 2 3", "1", "2", "3", undefined]

				handle_face_line(
					[ result[ 1 ], result[ 2 ], result[ 3 ], result[ 4 ] ]
				);

			} else if ( ( result = face_pattern2.exec( line ) ) !== null ) {

				// ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3", undefined, undefined, undefined]
				
				handle_face_line(
					[ result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ] ], //faces
					[ result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ] ] //uv
				);

			} else if ( ( result = face_pattern3.exec( line ) ) !== null ) {

				// ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3", undefined, undefined, undefined, undefined]

				handle_face_line(
					[ result[ 2 ], result[ 6 ], result[ 10 ], result[ 14 ] ], //faces
					[ result[ 3 ], result[ 7 ], result[ 11 ], result[ 15 ] ], //uv
					[ result[ 4 ], result[ 8 ], result[ 12 ], result[ 16 ] ] //normal
				);

			} else if ( ( result = face_pattern4.exec( line ) ) !== null ) {

				// ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3", undefined, undefined, undefined]

				handle_face_line(
					[ result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ] ], //faces
					[ ], //uv
					[ result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ] ] //normal
				);

			} else if ( /^o /.test( line ) ) {

				geometry = new THREE.Geometry();
				material = new THREE.MeshLambertMaterial();

				mesh = new THREE.Mesh( geometry, material );
				mesh.name = line.substring( 2 ).trim();
				object.add( mesh );

			} else if ( /^g /.test( line ) ) {

				// group

			} else if ( /^usemtl /.test( line ) ) {

				// material

				material.name = line.substring( 7 ).trim();

			} else if ( /^mtllib /.test( line ) ) {

				// mtl file

			} else if ( /^s /.test( line ) ) {

				// smooth shading

			} else {

				// console.log( "THREE.OBJLoader: Unhandled line " + line );

			}

		}

		var children = object.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			var geometry = children[ i ].geometry;

			geometry.computeFaceNormals();
			geometry.computeBoundingSphere();

		}
		
		return object;

	}

};;//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});;/*! LazyYT (lazy load Youtube videos plugin) - v0.3.4 - 2014-06-30
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" ratio="16:9" data-parameters="rel=0">loading...</div>
* Copyright (c) 2014 Tyler Pearson; Licensed MIT */


;(function ($) {
    'use strict';

    function setUp($el) {
        var width = $el.data('width'),
            height = $el.data('height'),
            ratio = $el.data('ratio'),
            id = $el.data('youtube-id'),
            aspectRatio = ['16', '9'],
            paddingTop = 0,
            youtubeParameters = $el.data('parameters') || '';

        if (typeof width === 'undefined' || typeof height === 'undefined') {
          height = 0;
          width = '90%';
          aspectRatio = (ratio.split(":")[1] / ratio.split(":")[0]) * 100;
          paddingTop = aspectRatio + '%';
        }

        $el.css({
            'position': 'relative',
            'height': height,
            'width': width,
            'padding-top': paddingTop,
            'background': 'url(//img.youtube.com/vi/' + id + '/hqdefault.jpg) center center no-repeat',
            'cursor': 'pointer',
            'background-size': 'cover'
        })
            .html('<p id="lazyYT-title-' + id + '" class="lazyYT-title"></p><div class="lazyYT-button"></div>')
            .addClass('lazyYT-image-loaded');

        $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
            $('#lazyYT-title-' + id).text(data.entry.title.$t);
        });

        $el.on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyYT-video-loaded') && $el.hasClass('lazyYT-image-loaded')) {
                $el.html('<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtubeParameters + '" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>')
                    .removeClass('lazyYT-image-loaded')
                    .addClass('lazyYT-video-loaded');
            }
        });

    }

    $.fn.lazyYT = function () {
        return this.each(function () {
            var $el = $(this).css('cursor', 'pointer');
            setUp($el);
        });
    };

}(jQuery));;(function() {
    "use strict";
    var e;
    e = angular.module("quotes", [ "ngRoute", "ngSanitize", "ng-contentful", "ngAnimate", "quoteControllers", "quoteDirectives", "quoteServices", "youtube-embed" ]);
    e.config([ "$routeProvider", "$locationProvider", "contentfulClientProvider", function(e, t, n) {
        e.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).otherwise({
            redirectTo: "/"
        });
        n.setSpaceId("4xlwm16911zp");
        return n.setAccessToken("6fe66430d43042a7c28777422e4ae6f8edf5f58bf05d46a072e92a83bf432dab");
    } ]);
}).call(this);;(function() {
    "use strict";
    var e;
    e = angular.module("quoteControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$window", "$http", "$sce", "contentfulClient", "webgl", function(e, n, t, o, r, a) {
        var l, u, i;
        l = new Showdown.converter();
        e.body = {};
        e.videoStopped = false;
        e.begin = true;
        e.player = {};
        e.background = {};
        e.webglenabled = a.checkWebGL();
        e.reload = function() {
            return window.location.reload();
        };
        e.playing = false;
        e.showInfo = false;
        i = function() {
            return $(".video-wrapper").removeClass("dontshow");
        };
        u = function() {
            return $(".video-wrapper").addClass("dontshow");
        };
        e.playerVars = {
            wmode: "opaque",
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1,
            enablejsapi: 1
        };
        e.$on("youtube.player.ready", function(n, t) {
            return e.player = t;
        });
        e.$on("youtube.player.ended", function(n, t) {
            e.playing = false;
            e.showInfo = true;
            return u();
        });
        e.$watch("playing", function(e) {
            return console.log(e);
        });
        e.$watch("player", function(e) {});
        return r.entries({
            content_type: "3NIaEMnF5CcQOCUeUaGESy",
            include: 1
        }).then(function(n) {
            var t, r, a, u, d;
            e.data = n[0];
            e.body = e.data.fields;
            e.background = e.body.bodyImage.fields.file.url;
            e.$watch("background", function(e) {});
            d = e.body.individualQuote;
            for (a = 0, u = d.length; a < u; a++) {
                t = d[a];
                t.fields.artistText = l.makeHtml(t.fields.artistText);
            }
            r = e.body.individualQuote;
            e.current = r[0];
            e.launchVid = function(n) {
                var t;
                e.playing = true;
                i();
                t = n.fields.youtubeId;
                e.player.loadVideoById(t);
                e.player.playVideo();
                e.titleName = n.fields.titleName;
                return e.artistText = n.fields.artistText;
            };
            e.closeInfo = function() {
                return e.showInfo = false;
            };
            e.updateInfo = function(n) {
                return e.current = n;
            };
            return e.trust = function(e) {
                return o.trustAsHtml(e);
            };
        });
    } ]);
}).call(this);;(function() {
    "use strict";
    var n;
    n = angular.module("quoteDirectives", []);
    n.directive("lazy", function() {
        var n;
        n = function(n, e, i) {
            var t;
            t = i.videoid;
            e.data("youtube-id", t);
            return e.lazyYT();
        };
        return {
            link: n
        };
    });
    n.directive("slide", [ "$window", "$rootScope", function(n, e) {
        var i;
        i = function(i, t, r) {
            return t.bind("load", function(i) {
                var r, o, a, u;
                e.$broadcast("loaded");
                t.show();
                o = t.width();
                r = t.height();
                a = o / r;
                u = function() {
                    var e, i, r, o, u, d, c;
                    u = n.innerHeight;
                    d = n.innerWidth;
                    if (u < 700) {
                        u = 700;
                    }
                    t.height(u);
                    t.width(u * a);
                    c = $(".image-wrapper").width();
                    e = t.width() - c;
                    o = e / 2;
                    i = d * .2;
                    $(".panoram").css({
                        width: t.width() + "px",
                        height: t.height() + "px",
                        left: -o * 1.5 + "px"
                    });
                    t.bind("mousemove", function(n) {
                        return r(n);
                    });
                    return r = function(n) {
                        var e;
                        e = -n.clientX * 1.5;
                        return $(".panoram").css({
                            left: "" + e + "px"
                        });
                    };
                };
                $(window).bind("resize", function(n) {
                    return u();
                });
                return u();
            });
        };
        return {
            link: i
        };
    } ]);
    n.directive("spin", [ "$rootScope", function(n) {
        var e, i;
        i = document.getElementById("spinner");
        e = function(n, e, t) {
            var r, o;
            r = {
                lines: 13,
                color: "#fff"
            };
            o = new Spinner(r);
            return o.spin(i);
        };
        n.$on("loaded", function(n) {
            return i.remove();
        });
        return {
            link: e
        };
    } ]);
    n.directive("hoverPic", function() {
        var n, e;
        e = function(n) {
            var e, i;
            e = n.clientX * 2;
            i = n.clientY * 2;
            return $(".frame").css({
                backgroundPosition: "" + e + "px " + i + "px"
            });
        };
        n = function(n, i, t) {
            i.unbind("mouseenter");
            i.bind("mouseenter", function() {
                var n;
                n = t.img;
                $(".frame").css({
                    background: "url(" + n + ")"
                });
                return $(".image-wrapper").hide();
            });
            i.unbind("mouseleave");
            i.bind("mouseleave", function() {
                $(".frame").css({
                    background: "black"
                });
                return $(".image-wrapper").show();
            });
            return i.bind("mousemove", function(n) {
                return e(n);
            });
        };
        return {
            link: n
        };
    });
    n.directive("scene", [ "$window", function(n) {
        var e;
        e = function(e, i, t) {
            var r, o, a, u, d, c, s, l, p, f, h, m, w, g, v;
            a = {};
            m = {};
            o = {};
            h = {};
            f = {};
            d = 0;
            c = 0;
            g = n.innerWidth / 2;
            v = n.innerHeight / 2;
            w = function() {
                var n, e, i;
                n = document.createElement("canvas");
                i = false;
                try {
                    i = !!(n.getContext("webgl") || n.getContext("experimental-webgl"));
                } catch (t) {
                    e = t;
                    alert("no support");
                }
                return i;
            };
            w();
            u = function() {
                var e, i, t, r, u;
                a = document.getElementById("threed");
                o = new THREE.PerspectiveCamera(45, n.innerWidth / n.innerHeight, 1, 1e4);
                o.position.z = 300;
                o.position.x = -150;
                o.position.y = 100;
                h = new THREE.Scene();
                e = new THREE.AmbientLight(16777215);
                h.add(e);
                i = new THREE.DirectionalLight(16772829);
                i.position.set(100, 0, 1);
                h.add(i);
                i = new THREE.DirectionalLight(16777215);
                i.position.set(20, 20, 0);
                h.add(i);
                r = new THREE.LoadingManager();
                r.onProgress = function(n, e, i) {
                    return console.log(n, e, i);
                };
                u = THREE.ImageUtils.loadTexture("img/pattern_poster.jpg");
                u.needsUpdate = true;
                t = new THREE.OBJLoader(r);
                t.load("obj/quotes_clan.obj", function(n) {
                    n.traverse(function(n) {
                        if (n instanceof THREE.Mesh) {
                            return n.material.map = u;
                        }
                    });
                    n.position.y = 0;
                    n.position.x = -20;
                    return h.add(n);
                });
                f = new THREE.WebGLRenderer({
                    alpha: true
                });
                f.setSize(n.innerWidth, n.innerHeight);
                a.appendChild(f.domElement);
                document.addEventListener("mousemove", s, false);
                return window.addEventListener("resize", l, false);
            };
            l = function() {
                g = window.innerWidth / 2;
                v = window.innerHeight / 2;
                o.aspect = n.innerWidth / window.innerHeight;
                o.updateProjectionMatrix();
                return f.setSize(n.innerWidth, window.innerHeight);
            };
            s = function(n) {
                d = (n.clientX - g) / 2;
                return c = (n.clientY - v) / 2;
            };
            r = function() {
                requestAnimationFrame(r);
                return p();
            };
            p = function() {
                o.position.x += (d - o.position.x) * .05;
                o.position.y += (-c - o.position.y) * .1;
                o.lookAt(h.position);
                return f.render(h, o);
            };
            u();
            return r();
        };
        return {
            link: e
        };
    } ]);
}).call(this);;(function() {
    "use strict";
    var e;
    e = angular.module("quoteServices", []);
    e.factory("webgl", function() {
        var e;
        e = function() {
            var e, t, n;
            e = document.createElement("canvas");
            n = false;
            try {
                n = !!(e.getContext("webgl") || e.getContext("experimental-webgl"));
            } catch (r) {
                t = r;
            }
            return n;
        };
        return {
            checkWebGL: function() {
                return e();
            }
        };
    });
}).call(this);