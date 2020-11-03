!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react-is"),require("react")):"function"==typeof define&&define.amd?define(["react-is","react"],t):(e=e||self).styled=t(e.ReactIs,e.React)}(this,(function(e,t){"use strict";var n="default"in e?e.default:e,r="default"in t?t.default:t;function o(e){return e&&"string"==typeof e.styledComponentId}var a=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},i=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!e.typeOf(t)},s=Object.freeze([]),c=Object.freeze({});function l(e){return"function"==typeof e}function u(e){return"string"==typeof e&&e||e.displayName||e.name||"Component"}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",p="undefined"!=typeof window&&"HTMLElement"in window,f=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"==typeof process||void 0===process.env.SC_DISABLE_SPEEDY||""===process.env.SC_DISABLE_SPEEDY||"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),m={},g={1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"};function y(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(y.apply(void 0,[g[e]].concat(n)).trim())}var b=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&v(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),w=new Map,S=new Map,k=1,C=function(e){if(w.has(e))return w.get(e);for(;S.has(k);)k++;var t=k++;return((0|t)<0||t>1<<30)&&v(16,""+t),w.set(e,t),S.set(t,e),t},A=function(e){return S.get(e)},x=function(e,t){w.set(e,t),S.set(t,e)},P="style["+h+'][data-styled-version="5.2.1"]',I=new RegExp("^"+h+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),R=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},O=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var s=i.match(I);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(x(l,c),R(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},T=function(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null},_=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(h))return r}}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(h,"active"),r.setAttribute("data-styled-version","5.2.1");var i=T();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},E=function(){function e(e){var t=this.element=_(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}v(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),j=function(){function e(e){var t=this.element=_(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),N=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),D=p,M={isServer:!p,useCSSOMInjection:!f},z=function(){function e(e,t,n){void 0===e&&(e=c),void 0===t&&(t={}),this.options=d({},M,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&p&&D&&(D=!1,function(e){for(var t=document.querySelectorAll(P),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(h)&&(O(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return C(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(d({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new N(o):r?new E(o):new j(o),new b(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(C(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(C(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(C(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var a=A(o);if(void 0!==a){var i=e.names.get(a),s=t.getGroup(o);if(void 0!==i&&0!==s.length){var c=h+".g"+o+'[id="'+a+'"]',l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+=e+",")})),r+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return r}(this)},e}(),L=/(a)(d)/gi,$=function(e){return String.fromCharCode(e+(e>25?39:97))};function F(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$(t%52)+n;return($(t%52)+n).replace(L,"$1-$2")}var B=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},G=function(e){return B(5381,e)},H=G("5.2.1"),Y=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=!1,this.componentId=t,this.baseHash=B(H,t),this.baseStyle=n,z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var a=de(this.rules,e,t,n).join(""),i=F(B(this.baseHash,a.length)>>>0);if(!t.hasNameForId(r,i)){var s=n(a,"."+i,void 0,r);t.insertRules(r,i,s)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,l=B(this.baseHash,n.hash),u="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)u+=h,l=B(l,h+d);else if(h){var p=de(h,e,t,n),f=Array.isArray(p)?p.join(""):p;l=B(l,f+d),u+=f}}if(u){var m=F(l>>>0);if(!t.hasNameForId(r,m)){var g=n(u,"."+m,void 0,r);t.insertRules(r,m,g)}o.push(m)}}return o.join(" ")},e}();function q(e){function t(e,t,r){var o=t.trim().split(f);t=o;var a=o.length,i=e.length;switch(i){case 0:case 1:var s=0;for(e=0===i?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<i;++l)t[c++]=n(e[l]+" ",o[s],r).trim()}return t}function n(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function r(e,t,n,a){var i=e+";",s=2*t+3*n+4*a;if(944===s){e=i.indexOf(":",9)+1;var c=i.substring(e,i.length-1).trim();return c=i.substring(0,e).trim()+c+";",1===O||2===O&&o(c,1)?"-webkit-"+c+c:c}if(0===O||2===O&&!o(i,1))return i;switch(s){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(x,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(c=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+c+i;case 1005:return h.test(i)?i.replace(d,":-webkit-")+i.replace(d,":-moz-")+i:i;case 1e3:switch(t=(c=i.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=i.replace(b,"tb");break;case 232:c=i.replace(b,"tb-rl");break;case 220:c=i.replace(b,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+c+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(t=(i=e).length-10,s=(c=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:i=i.replace(c,"-webkit-"+c)+";"+i;break;case 207:case 102:i=i.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+i.replace(c,"-webkit-"+c)+";"+i.replace(c,"-ms-"+c+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return c=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+c+"-ms-flex-"+c+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(k,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(k,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?r(e.replace("stretch","fill-available"),t,n,a).replace(":fill-available",":stretch"):i.replace(c,"-webkit-"+c)+i.replace(c,"-moz-"+c.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===n+a&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+i}return i}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),j(2!==t?r:r.replace(C,"$1"),n,t)}function a(e,t){var n=r(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(S," or ($1)").substring(4):"("+t+")"}function i(e,t,n,r,o,a,i,s,l,u){for(var d,h=0,p=t;h<E;++h)switch(d=_[h].call(c,e,p,n,r,o,a,i,s,l,u)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(j=null,e?"function"!=typeof e?O=1:(O=2,j=e):O=0),s}function c(e,n){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<E){var c=i(-1,n,s,s,I,P,0,0,0,0);void 0!==c&&"string"==typeof c&&(n=c)}var d=function e(n,s,c,d,h){for(var p,f,m,b,S,k=0,C=0,A=0,x=0,_=0,j=0,D=m=p=0,M=0,z=0,L=0,$=0,F=c.length,B=F-1,G="",H="",Y="",q="";M<F;){if(f=c.charCodeAt(M),M===B&&0!==C+x+A+k&&(0!==C&&(f=47===C?10:47),x=A=k=0,F++,B++),0===C+x+A+k){if(M===B&&(0<z&&(G=G.replace(u,"")),0<G.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(M)}f=59}switch(f){case 123:for(p=(G=G.trim()).charCodeAt(0),m=1,$=++M;M<F;){switch(f=c.charCodeAt(M)){case 123:m++;break;case 125:m--;break;case 47:switch(f=c.charCodeAt(M+1)){case 42:case 47:e:{for(D=M+1;D<B;++D)switch(c.charCodeAt(D)){case 47:if(42===f&&42===c.charCodeAt(D-1)&&M+2!==D){M=D+1;break e}break;case 10:if(47===f){M=D+1;break e}}M=D}}break;case 91:f++;case 40:f++;case 34:case 39:for(;M++<B&&c.charCodeAt(M)!==f;);}if(0===m)break;M++}switch(m=c.substring($,M),0===p&&(p=(G=G.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<z&&(G=G.replace(u,"")),f=G.charCodeAt(1)){case 100:case 109:case 115:case 45:z=s;break;default:z=T}if($=(m=e(s,z,m,f,h+1)).length,0<E&&(S=i(3,m,z=t(T,G,L),s,I,P,$,f,h,d),G=z.join(""),void 0!==S&&0===($=(m=S.trim()).length)&&(f=0,m="")),0<$)switch(f){case 115:G=G.replace(w,a);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(g,"$1 $2"))+"{"+m+"}",m=1===O||2===O&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===d&&(H+=m,m="")}else m="";break;default:m=e(s,t(s,G,L),m,d,h+1)}Y+=m,m=L=z=D=p=0,G="",f=c.charCodeAt(++M);break;case 125:case 59:if(1<($=(G=(0<z?G.replace(u,""):G).trim()).length))switch(0===D&&(p=G.charCodeAt(0),45===p||96<p&&123>p)&&($=(G=G.replace(" ",":")).length),0<E&&void 0!==(S=i(1,G,s,n,I,P,H.length,d,h,d))&&0===($=(G=S.trim()).length)&&(G="\0\0"),p=G.charCodeAt(0),f=G.charCodeAt(1),p){case 0:break;case 64:if(105===f||99===f){q+=G+c.charAt(M);break}default:58!==G.charCodeAt($-1)&&(H+=r(G,p,f,G.charCodeAt(2)))}L=z=D=p=0,G="",f=c.charCodeAt(++M)}}switch(f){case 13:case 10:47===C?C=0:0===1+p&&107!==d&&0<G.length&&(z=1,G+="\0"),0<E*N&&i(0,G,s,n,I,P,H.length,d,h,d),P=1,I++;break;case 59:case 125:if(0===C+x+A+k){P++;break}default:switch(P++,b=c.charAt(M),f){case 9:case 32:if(0===x+k+C)switch(_){case 44:case 58:case 9:case 32:b="";break;default:32!==f&&(b=" ")}break;case 0:b="\\0";break;case 12:b="\\f";break;case 11:b="\\v";break;case 38:0===x+C+k&&(z=L=1,b="\f"+b);break;case 108:if(0===x+C+k+R&&0<D)switch(M-D){case 2:112===_&&58===c.charCodeAt(M-3)&&(R=_);case 8:111===j&&(R=j)}break;case 58:0===x+C+k&&(D=M);break;case 44:0===C+A+x+k&&(z=1,b+="\r");break;case 34:case 39:0===C&&(x=x===f?0:0===x?f:x);break;case 91:0===x+C+A&&k++;break;case 93:0===x+C+A&&k--;break;case 41:0===x+C+k&&A--;break;case 40:if(0===x+C+k){if(0===p)switch(2*_+3*j){case 533:break;default:p=1}A++}break;case 64:0===C+A+x+k+D+m&&(m=1);break;case 42:case 47:if(!(0<x+k+A))switch(C){case 0:switch(2*f+3*c.charCodeAt(M+1)){case 235:C=47;break;case 220:$=M,C=42}break;case 42:47===f&&42===_&&$+2!==M&&(33===c.charCodeAt($+2)&&(H+=c.substring($,M+1)),b="",C=0)}}0===C&&(G+=b)}j=_,_=f,M++}if(0<($=H.length)){if(z=s,0<E&&void 0!==(S=i(2,H,z,n,I,P,$,d,h,d))&&0===(H=S).length)return q+H+Y;if(H=z.join(",")+"{"+H+"}",0!=O*R){switch(2!==O||o(H,2)||(R=0),R){case 111:H=H.replace(v,":-moz-$1")+H;break;case 112:H=H.replace(y,"::-webkit-input-$1")+H.replace(y,"::-moz-$1")+H.replace(y,":-ms-input-$1")+H}R=0}}return q+H+Y}(T,s,n,0,0);return 0<E&&void 0!==(c=i(-2,d,s,s,I,P,d.length,0,0,0))&&(d=c),R=0,P=I=1,d}var l=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,f=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,k=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,x=/([^-])(image-set\()/,P=1,I=1,R=0,O=1,T=[],_=[],E=0,j=null,N=0;return c.use=function e(t){switch(t){case void 0:case null:E=_.length=0;break;default:if("function"==typeof t)_[E++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else N=0|!!t}return e},c.set=s,void 0!==e&&s(e),c}var W=/^\s*\/\/.*$/gm,U=[":","[",".","#"];function V(e){var t,n,r,o,a=void 0===e?c:e,i=a.options,l=void 0===i?c:i,u=a.plugins,d=void 0===u?s:u,h=new q(l),p=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,a,i,s,c,l,u,d){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===l)return r+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){p.push(e)})),m=function(e,r,a){return 0===r&&U.includes(a[n.length])||a.match(o)?e:"."+t};function g(e,a,i,s){void 0===s&&(s="&");var c=e.replace(W,""),l=a&&i?i+" "+a+" { "+c+" }":c;return t=s,n=a,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),h(i||!a?"":a,l)}return h.use([].concat(d,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,m))},f,function(e){if(-2===e){var t=p;return p=[],t}}])),g.hash=d.length?d.reduce((function(e,t){return t.name||v(15),B(e,t.name)}),5381).toString():"",g}var X=r.createContext(),Z=X.Consumer,J=r.createContext(),K=(J.Consumer,new z),Q=V();function ee(){return t.useContext(X)||K}function te(){return t.useContext(J)||Q}function ne(e){var n=t.useState(e.stylisPlugins),o=n[0],a=n[1],i=ee(),s=t.useMemo((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=t.useMemo((function(){return V({options:{prefix:!e.disableVendorPrefixes},plugins:o})}),[e.disableVendorPrefixes,o]);return t.useEffect((function(){(function(e,t,n,r){var o=void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(!1===(o=void 0)||void 0===o&&u!==d)return!1}return!0})(o,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]),r.createElement(X.Provider,{value:s},r.createElement(J.Provider,{value:c},r.Children.only(e.children)))}var re=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Q);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return v(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Q),this.name+e.hash},e}(),oe=/([A-Z])/,ae=/([A-Z])/g,ie=/^ms-/,se=function(e){return"-"+e.toLowerCase()};function ce(e){return oe.test(e)?e.replace(ae,se).replace(ie,"-ms-"):e}var le={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue=function(e){return null==e||!1===e||""===e};function de(t,n,r,a){if(Array.isArray(t)){for(var s,c=[],d=0,h=t.length;d<h;d+=1)""!==(s=de(t[d],n,r,a))&&(Array.isArray(s)?c.push.apply(c,s):c.push(s));return c}if(ue(t))return"";if(o(t))return"."+t.styledComponentId;if(l(t)){if("function"!=typeof(f=t)||f.prototype&&f.prototype.isReactComponent||!n)return t;var p=t(n);return e.isElement(p)&&console.warn(u(t)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),de(p,n,r,a)}var f;return t instanceof re?r?(t.inject(r,a),t.getName(a)):t:i(t)?function e(t,n){var r,o,a=[];for(var s in t)t.hasOwnProperty(s)&&!ue(t[s])&&(i(t[s])?a.push.apply(a,e(t[s],s)):l(t[s])?a.push(ce(s)+":",t[s],";"):a.push(ce(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in le?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(a,["}"]):a}(t):t.toString()}function he(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return l(e)||i(e)?de(a(s,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:de(a(e,n))}var pe=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(l(n)&&!o(n))return!1}return!0}(e),z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(de(this.rules,t,n,r).join(""),""),a=this.componentId+e;n.insertRules(a,a,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}(),fe=r.createContext(),me=fe.Consumer,ge=/invalid hook call/i,ye=new Set,ve=function(e,n){var r="The component "+e+(n?' with the id of "'+n+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{t.useRef(),ye.has(r)||(console.warn(r),ye.add(r))}catch(e){ge.test(e.message)&&ye.delete(r)}},be=function(e,t,n){return void 0===n&&(n=c),e.theme!==n.theme&&e.theme||t||n.theme},we=function(e){return F(G(e)>>>0)},Se=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=T();return"<style "+[n&&'nonce="'+n+'"',h+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?v(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return v(2);var n=((t={})[h]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=T();return o&&(n.nonce=o),[r.createElement("style",d({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?v(2):r.createElement(ne,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return v(3)},e}(),ke={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ce={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ae={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xe={};function Pe(e){return n.isMemo(e)?Ae:xe[e.$$typeof]||ke}xe[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xe[n.Memo]=Ae;var Ie=Object.defineProperty,Re=Object.getOwnPropertyNames,Oe=Object.getOwnPropertySymbols,Te=Object.getOwnPropertyDescriptor,_e=Object.getPrototypeOf,Ee=Object.prototype,je=function e(t,n,r){if("string"!=typeof n){if(Ee){var o=_e(n);o&&o!==Ee&&e(t,o,r)}var a=Re(n);Oe&&(a=a.concat(Oe(n)));for(var i=Pe(t),s=Pe(n),c=0;c<a.length;++c){var l=a[c];if(!(Ce[l]||r&&r[l]||s&&s[l]||i&&i[l])){var u=Te(n,l);try{Ie(t,l,u)}catch(e){}}}}return t},Ne={StyleSheet:z,masterSheet:K};"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1;var De,Me,ze=Object.freeze({__proto__:null,createGlobalStyle:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var i=he.apply(void 0,[e].concat(o)),s="sc-global-"+we(JSON.stringify(i)),c=new pe(i,s);function l(e){var n=ee(),o=te(),a=t.useContext(fe),l=t.useRef(n.allocateGSInstance(s)).current;return r.Children.count(e.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.useLayoutEffect((function(){return u(l,e,n,a,o),function(){return c.removeStyles(l,n)}}),[l,e,n,a,o]),null}function u(e,t,n,r,o){if(c.isStatic)c.renderStyles(e,m,n,o);else{var a=d({},t,{theme:be(t,r,l.defaultProps)});c.renderStyles(e,a,n,o)}}return ve(s),r.memo(l)},css:he,isStyledComponent:o,keyframes:function(e){"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=he.apply(void 0,[e].concat(n)).join(""),a=we(o);return new re(a,o)},ServerStyleSheet:Se,StyleSheetConsumer:Z,StyleSheetContext:X,StyleSheetManager:ne,ThemeConsumer:me,ThemeContext:fe,ThemeProvider:function(e){var n=t.useContext(fe),o=t.useMemo((function(){return function(e,t){if(!e)return v(14);if(l(e)){var n=e(t);return null===n||Array.isArray(n)||"object"!=typeof n?v(7):n}return Array.isArray(e)||"object"!=typeof e?v(8):t?d({},t,{},e):e}(e.theme,n)}),[e.theme,n]);return e.children?r.createElement(fe.Provider,{value:o},e.children):null},useTheme:function(){return t.useContext(fe)},version:"5.2.1",withTheme:function(e){var n=r.forwardRef((function(n,o){var a=t.useContext(fe),i=e.defaultProps,s=be(n,a,i);return void 0===s&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+u(e)+'"'),r.createElement(e,d({},n,{theme:s,ref:o}))}));return je(n,e),n.displayName="WithTheme("+u(e)+")",n},__PRIVATE__:Ne}),Le=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$e=(De=function(e){return Le.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91},Me={},function(e){return void 0===Me[e]&&(Me[e]=De(e)),Me[e]}),Fe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Be=/(^-|-$)/g;function Ge(e){return e.replace(Fe,"-").replace(Be,"")}function He(e){return"string"==typeof e&&e.charAt(0)===e.charAt(0).toLowerCase()}var Ye=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},qe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function We(e,t,n){var r=e[n];Ye(t)&&Ye(r)?Ue(r,t):e[n]=t}function Ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,a=n;o<a.length;o++){var i=a[o];if(Ye(i))for(var s in i)qe(s)&&We(e,i[s],s)}return e}var Ve={};function Xe(e,n,a){var i=o(e),h=!He(e),p=n.attrs,f=void 0===p?s:p,m=n.componentId,g=void 0===m?function(e,t){var n="string"!=typeof e?"sc":Ge(e);Ve[n]=(Ve[n]||0)+1;var r=n+"-"+we("5.2.1"+n+Ve[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):m,y=n.displayName,v=void 0===y?function(e){return He(e)?"styled."+e:"Styled("+u(e)+")"}(e):y,b=n.displayName&&n.componentId?Ge(n.displayName)+"-"+n.componentId:n.componentId||g,w=i&&e.attrs?Array.prototype.concat(e.attrs,f).filter(Boolean):f,S=n.shouldForwardProp;i&&e.shouldForwardProp&&(S=n.shouldForwardProp?function(t,r){return e.shouldForwardProp(t,r)&&n.shouldForwardProp(t,r)}:e.shouldForwardProp);var k,C=new Y(a,b,i?e.componentStyle:void 0),A=C.isStatic&&0===f.length,x=function(e,n){return function(e,n,r,o){var a=e.attrs,i=e.componentStyle,s=e.defaultProps,u=e.foldedComponentIds,h=e.shouldForwardProp,p=e.styledComponentId,f=e.target;t.useDebugValue(p);var m=function(e,t,n){void 0===e&&(e=c);var r=d({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,a,i=e;for(t in l(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],a=i[t],n&&a?n+" "+a:n||a):i[t]})),[r,o]}(be(n,t.useContext(fe),s)||c,n,a),g=m[0],y=m[1],v=function(e,n,r,o){var a=ee(),i=te(),s=n?e.generateAndInjectStyles(c,a,i):e.generateAndInjectStyles(r,a,i);return t.useDebugValue(s),!n&&o&&o(s),s}(i,o,g,e.warnTooManyClasses),b=r,w=y.$as||n.$as||y.as||n.as||f,S=He(w),k=y!==n?d({},n,{},y):n,C={};for(var A in k)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?C.as=k[A]:(h?h(A,$e):!S||$e(A))&&(C[A]=k[A]));return n.style&&y.style!==n.style&&(C.style=d({},n.style,{},y.style)),C.className=Array.prototype.concat(u,p,v!==p?v:null,n.className,y.className).filter(Boolean).join(" "),C.ref=b,t.createElement(w,C)}(k,e,n,A)};return x.displayName=v,(k=r.forwardRef(x)).attrs=w,k.componentStyle=C,k.displayName=v,k.shouldForwardProp=S,k.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):s,k.styledComponentId=b,k.target=i?e.target:e,k.withComponent=function(e){var t=n.componentId,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["componentId"]),o=t&&t+"-"+(He(e)?e:Ge(u(e)));return Xe(e,d({},r,{attrs:w,componentId:o}),a)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Ue({},e.defaultProps,t):t}}),ve(v,b),k.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var a=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+a+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(v,b),k.toString=function(){return"."+k.styledComponentId},h&&je(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var Ze=function(t){return function t(n,r,o){if(void 0===o&&(o=c),!e.isValidElementType(r))return v(1,String(r));var a=function(){return n(r,o,he.apply(void 0,arguments))};return a.withConfig=function(e){return t(n,r,d({},o,{},e))},a.attrs=function(e){return t(n,r,d({},o,{attrs:Array.prototype.concat(o.attrs,e).filter(Boolean)}))},a}(Xe,t)};for(var Je in["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Ze[e]=Ze(e)})),ze)Ze[Je]=ze[Je];return Ze}));
//# sourceMappingURL=styled-components.js.map