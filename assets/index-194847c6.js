function Ob(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function k0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x0={exports:{}},gc={},I0={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),Mb=Symbol.for("react.portal"),Db=Symbol.for("react.fragment"),Lb=Symbol.for("react.strict_mode"),Fb=Symbol.for("react.profiler"),jb=Symbol.for("react.provider"),Ub=Symbol.for("react.context"),zb=Symbol.for("react.forward_ref"),$b=Symbol.for("react.suspense"),Wb=Symbol.for("react.memo"),Vb=Symbol.for("react.lazy"),Kg=Symbol.iterator;function Bb(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var T0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N0=Object.assign,R0={};function Os(t,e,n){this.props=t,this.context=e,this.refs=R0,this.updater=n||T0}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P0(){}P0.prototype=Os.prototype;function mp(t,e,n){this.props=t,this.context=e,this.refs=R0,this.updater=n||T0}var gp=mp.prototype=new P0;gp.constructor=mp;N0(gp,Os.prototype);gp.isPureReactComponent=!0;var Qg=Array.isArray,A0=Object.prototype.hasOwnProperty,vp={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A0.call(e,r)&&!O0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ja,type:t,key:s,ref:o,props:i,_owner:vp.current}}function Hb(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function Gb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xg=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gb(""+t.key):e.toString(36)}function Hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case Mb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wd(o,0):r,Qg(i)?(n="",t!=null&&(n=t.replace(Xg,"$&/")+"/"),Hl(i,e,n,"",function(u){return u})):i!=null&&(yp(i)&&(i=Hb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wd(s,a);o+=Hl(s,e,n,l,i)}else if(l=Bb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wd(s,a++),o+=Hl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],i=0;return Hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},Gl={transition:null},Yb={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:vp};se.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Os;se.Fragment=Db;se.Profiler=Fb;se.PureComponent=mp;se.StrictMode=Lb;se.Suspense=$b;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yb;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)A0.call(e,l)&&!O0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ja,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Ub,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jb,_context:t},t.Consumer=t};se.createElement=M0;se.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:zb,render:t}};se.isValidElement=yp;se.lazy=function(t){return{$$typeof:Vb,_payload:{_status:-1,_result:t},_init:qb}};se.memo=function(t,e){return{$$typeof:Wb,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return mt.current.useCallback(t,e)};se.useContext=function(t){return mt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};se.useEffect=function(t,e){return mt.current.useEffect(t,e)};se.useId=function(){return mt.current.useId()};se.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return mt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};se.useRef=function(t){return mt.current.useRef(t)};se.useState=function(t){return mt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return mt.current.useTransition()};se.version="18.2.0";I0.exports=se;var C=I0.exports;const vc=k0(C),Kb=Ob({__proto__:null,default:vc},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qb=C,Xb=Symbol.for("react.element"),Jb=Symbol.for("react.fragment"),Zb=Object.prototype.hasOwnProperty,ek=Qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tk={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zb.call(e,r)&&!tk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xb,type:t,key:s,ref:o,props:i,_owner:ek.current}}gc.Fragment=Jb;gc.jsx=D0;gc.jsxs=D0;x0.exports=gc;var _=x0.exports,Cf={},L0={exports:{}},Mt={},F0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,j){var V=P.length;P.push(j);e:for(;0<V;){var Ee=V-1>>>1,he=P[Ee];if(0<i(he,j))P[Ee]=j,P[V]=he,V=Ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],V=P.pop();if(V!==j){P[0]=V;e:for(var Ee=0,he=P.length,Zn=he>>>1;Ee<Zn;){var de=2*(Ee+1)-1,Le=P[de],it=de+1,dt=P[it];if(0>i(Le,V))it<he&&0>i(dt,Le)?(P[Ee]=dt,P[it]=V,Ee=it):(P[Ee]=Le,P[de]=V,Ee=de);else if(it<he&&0>i(dt,V))P[Ee]=dt,P[it]=V,Ee=it;else break e}}return j}function i(P,j){var V=P.sortIndex-j.sortIndex;return V!==0?V:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,p=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function g(P){if(w=!1,v(P),!p)if(n(l)!==null)p=!0,ue(S);else{var j=n(u);j!==null&&le(g,j.startTime-P)}}function S(P,j){p=!1,w&&(w=!1,m(A),A=-1),y=!0;var V=f;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||P&&!oe());){var Ee=d.callback;if(typeof Ee=="function"){d.callback=null,f=d.priorityLevel;var he=Ee(d.expirationTime<=j);j=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&r(l),v(j)}else r(l);d=n(l)}if(d!==null)var Zn=!0;else{var de=n(u);de!==null&&le(g,de.startTime-j),Zn=!1}return Zn}finally{d=null,f=V,y=!1}}var I=!1,x=null,A=-1,M=5,L=-1;function oe(){return!(t.unstable_now()-L<M)}function Z(){if(x!==null){var P=t.unstable_now();L=P;var j=!0;try{j=x(!0,P)}finally{j?Ie():(I=!1,x=null)}}else I=!1}var Ie;if(typeof h=="function")Ie=function(){h(Z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=Z,Ie=function(){q.postMessage(null)}}else Ie=function(){E(Z,0)};function ue(P){x=P,I||(I=!0,Ie())}function le(P,j){A=E(function(){P(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){p||y||(p=!0,ue(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var V=f;f=j;try{return P()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=f;f=P;try{return j()}finally{f=V}},t.unstable_scheduleCallback=function(P,j,V){var Ee=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Ee+V:Ee):V=Ee,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=V+he,P={id:c++,callback:j,priorityLevel:P,startTime:V,expirationTime:he,sortIndex:-1},V>Ee?(P.sortIndex=V,e(u,P),n(l)===null&&P===n(u)&&(w?(m(A),A=-1):w=!0,le(g,V-Ee))):(P.sortIndex=he,e(l,P),p||y||(p=!0,ue(S))),P},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(P){var j=f;return function(){var V=f;f=j;try{return P.apply(this,arguments)}finally{f=V}}}})(j0);F0.exports=j0;var nk=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=C,Ot=nk;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,Go={};function Ti(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(Go[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=Object.prototype.hasOwnProperty,rk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jg={},Zg={};function ik(t){return bf.call(Zg,t)?!0:bf.call(Jg,t)?!1:rk.test(t)?Zg[t]=!0:(Jg[t]=!0,!1)}function sk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ok(t,e,n,r){if(e===null||typeof e>"u"||sk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _p=/[\-:]([a-z])/g;function wp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_p,wp);rt[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_p,wp);rt[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_p,wp);rt[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ep(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ok(e,n,i,r)&&(n=null),r||i===null?ik(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),$0=Symbol.for("react.provider"),W0=Symbol.for("react.context"),Cp=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),bp=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),V0=Symbol.for("react.offscreen"),ev=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=ev&&t[ev]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Ed;function vo(t){if(Ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+t}var Sd=!1;function Cd(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function ak(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case ji:return"Portal";case kf:return"Profiler";case Sp:return"StrictMode";case xf:return"Suspense";case If:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W0:return(t.displayName||"Context")+".Consumer";case $0:return(t._context.displayName||"Context")+".Provider";case Cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bp:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function lk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===Sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uk(t){var e=B0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=uk(t))}function H0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=B0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nf(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G0(t,e){e=e.checked,e!=null&&Ep(t,"checked",e,!1)}function Rf(t,e){G0(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pf(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pf(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(yo(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function q0(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function iv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,K0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ck=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){ck.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function Q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dk=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(dk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,is=null,ss=null;function sv(t){if(t=$a(t)){if(typeof Ff!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Sc(e),Ff(t.stateNode,t.type,e))}}function J0(t){is?ss?ss.push(t):ss=[t]:is=t}function Z0(){if(is){var t=is,e=ss;if(ss=is=null,sv(t),e)for(t=0;t<e.length;t++)sv(e[t])}}function e1(t,e){return t(e)}function t1(){}var bd=!1;function n1(t,e,n){if(bd)return t(e,n);bd=!0;try{return e1(t,e,n)}finally{bd=!1,(is!==null||ss!==null)&&(t1(),Z0())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var r=Sc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var jf=!1;if(Un)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){jf=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{jf=!1}function fk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xo=!1,fu=null,hu=!1,Uf=null,hk={onError:function(t){xo=!0,fu=t}};function pk(t,e,n,r,i,s,o,a,l){xo=!1,fu=null,fk.apply(hk,arguments)}function mk(t,e,n,r,i,s,o,a,l){if(pk.apply(this,arguments),xo){if(xo){var u=fu;xo=!1,fu=null}else throw Error(R(198));hu||(hu=!0,Uf=u)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ov(t){if(Ni(t)!==t)throw Error(R(188))}function gk(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ov(i),t;if(s===r)return ov(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function i1(t){return t=gk(t),t!==null?s1(t):null}function s1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s1(t);if(e!==null)return e;t=t.sibling}return null}var o1=Ot.unstable_scheduleCallback,av=Ot.unstable_cancelCallback,vk=Ot.unstable_shouldYield,yk=Ot.unstable_requestPaint,Ue=Ot.unstable_now,_k=Ot.unstable_getCurrentPriorityLevel,xp=Ot.unstable_ImmediatePriority,a1=Ot.unstable_UserBlockingPriority,pu=Ot.unstable_NormalPriority,wk=Ot.unstable_LowPriority,l1=Ot.unstable_IdlePriority,yc=null,vn=null;function Ek(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(yc,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:bk,Sk=Math.log,Ck=Math.LN2;function bk(t){return t>>>=0,t===0?32:31-(Sk(t)/Ck|0)|0}var gl=64,vl=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_o(a):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function kk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u1(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function Ik(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function c1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d1,Tp,f1,h1,p1,$f=!1,yl=[],_r=null,wr=null,Er=null,Ko=new Map,Qo=new Map,lr=[],Tk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lv(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Nk(t,e,n,r,i){switch(e){case"focusin":return _r=Zs(_r,t,e,n,r,i),!0;case"dragenter":return wr=Zs(wr,t,e,n,r,i),!0;case"mouseover":return Er=Zs(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ko.set(s,Zs(Ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qo.set(s,Zs(Qo.get(s)||null,t,e,n,r,i)),!0}return!1}function m1(t){var e=Xr(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=r1(n),e!==null){t.blockedOn=e,p1(t.priority,function(){f1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lf=r,n.target.dispatchEvent(r),Lf=null}else return e=$a(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function uv(t,e,n){ql(t)&&n.delete(e)}function Rk(){$f=!1,_r!==null&&ql(_r)&&(_r=null),wr!==null&&ql(wr)&&(wr=null),Er!==null&&ql(Er)&&(Er=null),Ko.forEach(uv),Qo.forEach(uv)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,$f||($f=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Rk)))}function Xo(t){function e(i){return eo(i,t)}if(0<yl.length){eo(yl[0],t);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&eo(_r,t),wr!==null&&eo(wr,t),Er!==null&&eo(Er,t),Ko.forEach(e),Qo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)m1(n),n.blockedOn===null&&lr.shift()}var os=Kn.ReactCurrentBatchConfig,gu=!0;function Pk(t,e,n,r){var i=fe,s=os.transition;os.transition=null;try{fe=1,Np(t,e,n,r)}finally{fe=i,os.transition=s}}function Ak(t,e,n,r){var i=fe,s=os.transition;os.transition=null;try{fe=4,Np(t,e,n,r)}finally{fe=i,os.transition=s}}function Np(t,e,n,r){if(gu){var i=Wf(t,e,n,r);if(i===null)Dd(t,e,r,vu,n),lv(t,r);else if(Nk(i,t,e,n,r))r.stopPropagation();else if(lv(t,r),e&4&&-1<Tk.indexOf(t)){for(;i!==null;){var s=$a(i);if(s!==null&&d1(s),s=Wf(t,e,n,r),s===null&&Dd(t,e,r,vu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dd(t,e,r,null,n)}}var vu=null;function Wf(t,e,n,r){if(vu=null,t=kp(r),t=Xr(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vu=t,null}function g1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_k()){case xp:return 1;case a1:return 4;case pu:case wk:return 16;case l1:return 536870912;default:return 16}default:return 16}}var pr=null,Rp=null,Yl=null;function v1(){if(Yl)return Yl;var t,e=Rp,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yl=i.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function cv(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:cv,this.isPropagationStopped=cv,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=Dt(Ms),za=Ae({},Ms,{view:0,detail:0}),Ok=Dt(za),xd,Id,to,_c=Ae({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(xd=t.screenX-to.screenX,Id=t.screenY-to.screenY):Id=xd=0,to=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Id}}),dv=Dt(_c),Mk=Ae({},_c,{dataTransfer:0}),Dk=Dt(Mk),Lk=Ae({},za,{relatedTarget:0}),Td=Dt(Lk),Fk=Ae({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),jk=Dt(Fk),Uk=Ae({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zk=Dt(Uk),$k=Ae({},Ms,{data:0}),fv=Dt($k),Wk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bk[t])?!!e[t]:!1}function Ap(){return Hk}var Gk=Ae({},za,{key:function(t){if(t.key){var e=Wk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qk=Dt(Gk),Yk=Ae({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hv=Dt(Yk),Kk=Ae({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),Qk=Dt(Kk),Xk=Ae({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jk=Dt(Xk),Zk=Ae({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=Dt(Zk),tx=[9,13,27,32],Op=Un&&"CompositionEvent"in window,Io=null;Un&&"documentMode"in document&&(Io=document.documentMode);var nx=Un&&"TextEvent"in window&&!Io,y1=Un&&(!Op||Io&&8<Io&&11>=Io),pv=String.fromCharCode(32),mv=!1;function _1(t,e){switch(t){case"keyup":return tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function rx(t,e){switch(t){case"compositionend":return w1(e);case"keypress":return e.which!==32?null:(mv=!0,pv);case"textInput":return t=e.data,t===pv&&mv?null:t;default:return null}}function ix(t,e){if(zi)return t==="compositionend"||!Op&&_1(t,e)?(t=v1(),Yl=Rp=pr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y1&&e.locale!=="ko"?null:e.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sx[t.type]:e==="textarea"}function E1(t,e,n,r){J0(r),e=yu(e,"onChange"),0<e.length&&(n=new Pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Jo=null;function ox(t){A1(t,0)}function wc(t){var e=Vi(t);if(H0(e))return t}function ax(t,e){if(t==="change")return e}var S1=!1;if(Un){var Nd;if(Un){var Rd="oninput"in document;if(!Rd){var vv=document.createElement("div");vv.setAttribute("oninput","return;"),Rd=typeof vv.oninput=="function"}Nd=Rd}else Nd=!1;S1=Nd&&(!document.documentMode||9<document.documentMode)}function yv(){To&&(To.detachEvent("onpropertychange",C1),Jo=To=null)}function C1(t){if(t.propertyName==="value"&&wc(Jo)){var e=[];E1(e,Jo,t,kp(t)),n1(ox,e)}}function lx(t,e,n){t==="focusin"?(yv(),To=e,Jo=n,To.attachEvent("onpropertychange",C1)):t==="focusout"&&yv()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(Jo)}function cx(t,e){if(t==="click")return wc(e)}function dx(t,e){if(t==="input"||t==="change")return wc(e)}function fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:fx;function Zo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bf.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function _v(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wv(t,e){var n=_v(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_v(n)}}function b1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k1(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hx(t){var e=k1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b1(n.ownerDocument.documentElement,n)){if(r!==null&&Mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wv(n,s);var o=wv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var px=Un&&"documentMode"in document&&11>=document.documentMode,$i=null,Vf=null,No=null,Bf=!1;function Ev(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||$i==null||$i!==du(r)||(r=$i,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Zo(No,r)||(No=r,r=yu(Vf,"onSelect"),0<r.length&&(e=new Pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Pd={},x1={};Un&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Ec(t){if(Pd[t])return Pd[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x1)return Pd[t]=e[n];return t}var I1=Ec("animationend"),T1=Ec("animationiteration"),N1=Ec("animationstart"),R1=Ec("transitionend"),P1=new Map,Sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){P1.set(t,e),Ti(e,[t])}for(var Ad=0;Ad<Sv.length;Ad++){var Od=Sv[Ad],mx=Od.toLowerCase(),gx=Od[0].toUpperCase()+Od.slice(1);Ur(mx,"on"+gx)}Ur(I1,"onAnimationEnd");Ur(T1,"onAnimationIteration");Ur(N1,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(R1,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Cv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mk(r,e,void 0,t),t.currentTarget=null}function A1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cv(i,a,u),s=l}}}if(hu)throw t=Uf,hu=!1,Uf=null,t}function Se(t,e){var n=e[Kf];n===void 0&&(n=e[Kf]=new Set);var r=t+"__bubble";n.has(r)||(O1(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),O1(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[El]){t[El]=!0,z0.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Md("selectionchange",!1,e))}}function O1(t,e,n,r){switch(g1(e)){case 1:var i=Pk;break;case 4:i=Ak;break;default:i=Np}n=i.bind(null,e,n,t),i=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}n1(function(){var u=s,c=kp(n),d=[];e:{var f=P1.get(t);if(f!==void 0){var y=Pp,p=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":y=qk;break;case"focusin":p="focus",y=Td;break;case"focusout":p="blur",y=Td;break;case"beforeblur":case"afterblur":y=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Qk;break;case I1:case T1:case N1:y=jk;break;case R1:y=Jk;break;case"scroll":y=Ok;break;case"wheel":y=ex;break;case"copy":case"cut":case"paste":y=zk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=hv}var w=(e&4)!==0,E=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,v;h!==null;){v=h;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,m!==null&&(g=Yo(h,m),g!=null&&w.push(ta(h,g,v)))),E)break;h=h.return}0<w.length&&(f=new y(f,p,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Lf&&(p=n.relatedTarget||n.fromElement)&&(Xr(p)||p[zn]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(p=n.relatedTarget||n.toElement,y=u,p=p?Xr(p):null,p!==null&&(E=Ni(p),p!==E||p.tag!==5&&p.tag!==6)&&(p=null)):(y=null,p=u),y!==p)){if(w=dv,g="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=hv,g="onPointerLeave",m="onPointerEnter",h="pointer"),E=y==null?f:Vi(y),v=p==null?f:Vi(p),f=new w(g,h+"leave",y,n,c),f.target=E,f.relatedTarget=v,g=null,Xr(c)===u&&(w=new w(m,h+"enter",p,n,c),w.target=v,w.relatedTarget=E,g=w),E=g,y&&p)t:{for(w=y,m=p,h=0,v=w;v;v=Oi(v))h++;for(v=0,g=m;g;g=Oi(g))v++;for(;0<h-v;)w=Oi(w),h--;for(;0<v-h;)m=Oi(m),v--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=Oi(w),m=Oi(m)}w=null}else w=null;y!==null&&bv(d,f,y,w,!1),p!==null&&E!==null&&bv(d,E,p,w,!0)}}e:{if(f=u?Vi(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=ax;else if(gv(f))if(S1)S=dx;else{S=ux;var I=lx}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=cx);if(S&&(S=S(t,u))){E1(d,S,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Pf(f,"number",f.value)}switch(I=u?Vi(u):window,t){case"focusin":(gv(I)||I.contentEditable==="true")&&($i=I,Vf=u,No=null);break;case"focusout":No=Vf=$i=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,Ev(d,n,c);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Ev(d,n,c)}var x;if(Op)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else zi?_1(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(y1&&n.locale!=="ko"&&(zi||A!=="onCompositionStart"?A==="onCompositionEnd"&&zi&&(x=v1()):(pr=c,Rp="value"in pr?pr.value:pr.textContent,zi=!0)),I=yu(u,A),0<I.length&&(A=new fv(A,t,null,n,c),d.push({event:A,listeners:I}),x?A.data=x:(x=w1(n),x!==null&&(A.data=x)))),(x=nx?rx(t,n):ix(t,n))&&(u=yu(u,"onBeforeInput"),0<u.length&&(c=new fv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}A1(d,e)})}function ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yo(t,n),s!=null&&r.unshift(ta(t,s,i)),s=Yo(t,e),s!=null&&r.push(ta(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Yo(n,s),l!=null&&o.unshift(ta(n,l,a))):i||(l=Yo(n,s),l!=null&&o.push(ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function kv(t){return(typeof t=="string"?t:""+t).replace(yx,`
`).replace(_x,"")}function Sl(t,e,n){if(e=kv(e),kv(t)!==e&&n)throw Error(R(425))}function _u(){}var Hf=null,Gf=null;function qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,xv=typeof Promise=="function"?Promise:void 0,Ex=typeof queueMicrotask=="function"?queueMicrotask:typeof xv<"u"?function(t){return xv.resolve(null).then(t).catch(Sx)}:Yf;function Sx(t){setTimeout(function(){throw t})}function Ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ds,na="__reactProps$"+Ds,zn="__reactContainer$"+Ds,Kf="__reactEvents$"+Ds,Cx="__reactListeners$"+Ds,bx="__reactHandles$"+Ds;function Xr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iv(t);t!==null;){if(n=t[mn])return n;t=Iv(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[mn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Sc(t){return t[na]||null}var Qf=[],Bi=-1;function zr(t){return{current:t}}function ke(t){0>Bi||(t.current=Qf[Bi],Qf[Bi]=null,Bi--)}function we(t,e){Bi++,Qf[Bi]=t.current,t.current=e}var Or={},ut=zr(Or),bt=zr(!1),ci=Or;function ws(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function wu(){ke(bt),ke(ut)}function Tv(t,e,n){if(ut.current!==Or)throw Error(R(168));we(ut,e),we(bt,n)}function M1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,lk(t)||"Unknown",i));return Ae({},n,r)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,ci=ut.current,we(ut,t),we(bt,bt.current),!0}function Nv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=M1(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,ke(bt),ke(ut),we(ut,t)):ke(bt),we(bt,n)}var Nn=null,Cc=!1,Fd=!1;function D1(t){Nn===null?Nn=[t]:Nn.push(t)}function kx(t){Cc=!0,D1(t)}function $r(){if(!Fd&&Nn!==null){Fd=!0;var t=0,e=fe;try{var n=Nn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Cc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),o1(xp,$r),i}finally{fe=e,Fd=!1}}return null}var Hi=[],Gi=0,Su=null,Cu=0,jt=[],Ut=0,di=null,Rn=1,Pn="";function qr(t,e){Hi[Gi++]=Cu,Hi[Gi++]=Su,Su=t,Cu=e}function L1(t,e,n){jt[Ut++]=Rn,jt[Ut++]=Pn,jt[Ut++]=di,di=t;var r=Rn;t=Pn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-sn(e)+i|n<<i|r,Pn=s+t}else Rn=1<<s|n<<i|r,Pn=t}function Dp(t){t.return!==null&&(qr(t,1),L1(t,1,0))}function Lp(t){for(;t===Su;)Su=Hi[--Gi],Hi[Gi]=null,Cu=Hi[--Gi],Hi[Gi]=null;for(;t===di;)di=jt[--Ut],jt[Ut]=null,Pn=jt[--Ut],jt[Ut]=null,Rn=jt[--Ut],jt[Ut]=null}var At=null,Pt=null,Ne=!1,Xt=null;function F1(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,Pt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:Rn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,Pt=null,!0):!1;default:return!1}}function Xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(Ne){var e=Pt;if(e){var n=e;if(!Rv(t,e)){if(Xf(t))throw Error(R(418));e=Sr(n.nextSibling);var r=At;e&&Rv(t,e)?F1(r,n):(t.flags=t.flags&-4097|2,Ne=!1,At=t)}}else{if(Xf(t))throw Error(R(418));t.flags=t.flags&-4097|2,Ne=!1,At=t}}}function Pv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Cl(t){if(t!==At)return!1;if(!Ne)return Pv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qf(t.type,t.memoizedProps)),e&&(e=Pt)){if(Xf(t))throw j1(),Error(R(418));for(;e;)F1(t,e),e=Sr(e.nextSibling)}if(Pv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=At?Sr(t.stateNode.nextSibling):null;return!0}function j1(){for(var t=Pt;t;)t=Sr(t.nextSibling)}function Es(){Pt=At=null,Ne=!1}function Fp(t){Xt===null?Xt=[t]:Xt.push(t)}var xx=Kn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bu=zr(null),ku=null,qi=null,jp=null;function Up(){jp=qi=ku=null}function zp(t){var e=bu.current;ke(bu),t._currentValue=e}function Zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){ku=t,jp=qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(jp!==t)if(t={context:t,memoizedValue:e,next:null},qi===null){if(ku===null)throw Error(R(308));qi=t,ku.dependencies={lanes:0,firstContext:t}}else qi=qi.next=t;return e}var Jr=null;function $p(t){Jr===null?Jr=[t]:Jr.push(t)}function U1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$p(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,$p(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}function Av(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xu(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,w=a;switch(f=e,y=n,w.tag){case 1:if(p=w.payload,typeof p=="function"){d=p.call(y,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=w.payload,f=typeof p=="function"?p.call(y,d,f):p,f==null)break e;d=Ae({},d,f);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=d}}function Ov(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var $1=new U0.Component().refs;function eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=kr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(on(e,t,i,r),Ql(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=kr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(on(e,t,i,r),Ql(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=kr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cr(t,i,r),e!==null&&(on(e,t,r,n),Ql(e,t,r))}};function Mv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,r)||!Zo(i,s):!0}function W1(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=kt(e)?ci:ut.current,r=e.contextTypes,s=(r=r!=null)?ws(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function th(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$1,Wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=kt(e)?ci:ut.current,i.context=ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bc.enqueueReplaceState(i,i.state,null),xu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lv(t){var e=t._init;return e(t._payload)}function V1(t){function e(m,h){if(t){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=xr(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,g){return h===null||h.tag!==6?(h=Bd(v,m.mode,g),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,g){var S=v.type;return S===Ui?c(m,h,v.props.children,g,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===or&&Lv(S)===h.type)?(g=i(h,v.props),g.ref=no(m,h,v),g.return=m,g):(g=nu(v.type,v.key,v.props,null,m.mode,g),g.ref=no(m,h,v),g.return=m,g)}function u(m,h,v,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Hd(v,m.mode,g),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function c(m,h,v,g,S){return h===null||h.tag!==7?(h=ai(v,m.mode,g,S),h.return=m,h):(h=i(h,v),h.return=m,h)}function d(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Bd(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hl:return v=nu(h.type,h.key,h.props,null,m.mode,v),v.ref=no(m,null,h),v.return=m,v;case ji:return h=Hd(h,m.mode,v),h.return=m,h;case or:var g=h._init;return d(m,g(h._payload),v)}if(yo(h)||Xs(h))return h=ai(h,m.mode,v,null),h.return=m,h;bl(m,h)}return null}function f(m,h,v,g){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,h,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return v.key===S?l(m,h,v,g):null;case ji:return v.key===S?u(m,h,v,g):null;case or:return S=v._init,f(m,h,S(v._payload),g)}if(yo(v)||Xs(v))return S!==null?null:c(m,h,v,g,null);bl(m,v)}return null}function y(m,h,v,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(v)||null,a(h,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hl:return m=m.get(g.key===null?v:g.key)||null,l(h,m,g,S);case ji:return m=m.get(g.key===null?v:g.key)||null,u(h,m,g,S);case or:var I=g._init;return y(m,h,v,I(g._payload),S)}if(yo(g)||Xs(g))return m=m.get(v)||null,c(h,m,g,S,null);bl(h,g)}return null}function p(m,h,v,g){for(var S=null,I=null,x=h,A=h=0,M=null;x!==null&&A<v.length;A++){x.index>A?(M=x,x=null):M=x.sibling;var L=f(m,x,v[A],g);if(L===null){x===null&&(x=M);break}t&&x&&L.alternate===null&&e(m,x),h=s(L,h,A),I===null?S=L:I.sibling=L,I=L,x=M}if(A===v.length)return n(m,x),Ne&&qr(m,A),S;if(x===null){for(;A<v.length;A++)x=d(m,v[A],g),x!==null&&(h=s(x,h,A),I===null?S=x:I.sibling=x,I=x);return Ne&&qr(m,A),S}for(x=r(m,x);A<v.length;A++)M=y(x,m,A,v[A],g),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?A:M.key),h=s(M,h,A),I===null?S=M:I.sibling=M,I=M);return t&&x.forEach(function(oe){return e(m,oe)}),Ne&&qr(m,A),S}function w(m,h,v,g){var S=Xs(v);if(typeof S!="function")throw Error(R(150));if(v=S.call(v),v==null)throw Error(R(151));for(var I=S=null,x=h,A=h=0,M=null,L=v.next();x!==null&&!L.done;A++,L=v.next()){x.index>A?(M=x,x=null):M=x.sibling;var oe=f(m,x,L.value,g);if(oe===null){x===null&&(x=M);break}t&&x&&oe.alternate===null&&e(m,x),h=s(oe,h,A),I===null?S=oe:I.sibling=oe,I=oe,x=M}if(L.done)return n(m,x),Ne&&qr(m,A),S;if(x===null){for(;!L.done;A++,L=v.next())L=d(m,L.value,g),L!==null&&(h=s(L,h,A),I===null?S=L:I.sibling=L,I=L);return Ne&&qr(m,A),S}for(x=r(m,x);!L.done;A++,L=v.next())L=y(x,m,A,L.value,g),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?A:L.key),h=s(L,h,A),I===null?S=L:I.sibling=L,I=L);return t&&x.forEach(function(Z){return e(m,Z)}),Ne&&qr(m,A),S}function E(m,h,v,g){if(typeof v=="object"&&v!==null&&v.type===Ui&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:e:{for(var S=v.key,I=h;I!==null;){if(I.key===S){if(S=v.type,S===Ui){if(I.tag===7){n(m,I.sibling),h=i(I,v.props.children),h.return=m,m=h;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===or&&Lv(S)===I.type){n(m,I.sibling),h=i(I,v.props),h.ref=no(m,I,v),h.return=m,m=h;break e}n(m,I);break}else e(m,I);I=I.sibling}v.type===Ui?(h=ai(v.props.children,m.mode,g,v.key),h.return=m,m=h):(g=nu(v.type,v.key,v.props,null,m.mode,g),g.ref=no(m,h,v),g.return=m,m=g)}return o(m);case ji:e:{for(I=v.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Hd(v,m.mode,g),h.return=m,m=h}return o(m);case or:return I=v._init,E(m,h,I(v._payload),g)}if(yo(v))return p(m,h,v,g);if(Xs(v))return w(m,h,v,g);bl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=Bd(v,m.mode,g),h.return=m,m=h),o(m)):n(m,h)}return E}var Ss=V1(!0),B1=V1(!1),Wa={},yn=zr(Wa),ra=zr(Wa),ia=zr(Wa);function Zr(t){if(t===Wa)throw Error(R(174));return t}function Vp(t,e){switch(we(ia,e),we(ra,t),we(yn,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Of(e,t)}ke(yn),we(yn,e)}function Cs(){ke(yn),ke(ra),ke(ia)}function H1(t){Zr(ia.current);var e=Zr(yn.current),n=Of(e,t.type);e!==n&&(we(ra,t),we(yn,n))}function Bp(t){ra.current===t&&(ke(yn),ke(ra))}var Re=zr(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function Hp(){for(var t=0;t<jd.length;t++)jd[t]._workInProgressVersionPrimary=null;jd.length=0}var Xl=Kn.ReactCurrentDispatcher,Ud=Kn.ReactCurrentBatchConfig,fi=0,Pe=null,Ve=null,Ke=null,Tu=!1,Ro=!1,sa=0,Ix=0;function st(){throw Error(R(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function qp(t,e,n,r,i,s){if(fi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?Px:Ax,t=n(r,i),Ro){s=0;do{if(Ro=!1,sa=0,25<=s)throw Error(R(301));s+=1,Ke=Ve=null,e.updateQueue=null,Xl.current=Ox,t=n(r,i)}while(Ro)}if(Xl.current=Nu,e=Ve!==null&&Ve.next!==null,fi=0,Ke=Ve=Pe=null,Tu=!1,e)throw Error(R(300));return t}function Yp(){var t=sa!==0;return sa=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Ht(){if(Ve===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ke===null?Pe.memoizedState:Ke.next;if(e!==null)Ke=e,Ve=t;else{if(t===null)throw Error(R(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function oa(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Pe.lanes|=c,hi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $d(t){var e=Ht(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function G1(){}function q1(t,e){var n=Pe,r=Ht(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Kp(Q1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,aa(9,K1.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(R(349));fi&30||Y1(n,e,i)}return i}function Y1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K1(t,e,n,r){e.value=n,e.getSnapshot=r,X1(e)&&J1(t)}function Q1(t,e,n){return n(function(){X1(e)&&J1(t)})}function X1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function J1(t){var e=$n(t,1);e!==null&&on(e,t,1,-1)}function Fv(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=Rx.bind(null,Pe,t),[e.memoizedState,t]}function aa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z1(){return Ht().memoizedState}function Jl(t,e,n,r){var i=hn();Pe.flags|=t,i.memoizedState=aa(1|e,n,void 0,r===void 0?null:r)}function kc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Gp(r,o.deps)){i.memoizedState=aa(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=aa(1|e,n,s,r)}function jv(t,e){return Jl(8390656,8,t,e)}function Kp(t,e){return kc(2048,8,t,e)}function ew(t,e){return kc(4,2,t,e)}function tw(t,e){return kc(4,4,t,e)}function nw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rw(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,nw.bind(null,e,t),n)}function Qp(){}function iw(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sw(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ow(t,e,n){return fi&21?(ln(n,e)||(n=u1(),Pe.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function Tx(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Ud.transition;Ud.transition={};try{t(!1),e()}finally{fe=n,Ud.transition=r}}function aw(){return Ht().memoizedState}function Nx(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lw(t))uw(e,n);else if(n=U1(t,e,n,r),n!==null){var i=pt();on(n,t,r,i),cw(n,e,r)}}function Rx(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lw(t))uw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,$p(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=U1(t,e,i,r),n!==null&&(i=pt(),on(n,t,r,i),cw(n,e,r))}}function lw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function uw(t,e){Ro=Tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}var Nu={readContext:Bt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Px={readContext:Bt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:jv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,nw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nx.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:Fv,useDebugValue:Qp,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Fv(!1),e=t[0];return t=Tx.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=hn();if(Ne){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Je===null)throw Error(R(349));fi&30||Y1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jv(Q1.bind(null,r,s,t),[t]),r.flags|=2048,aa(9,K1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Je.identifierPrefix;if(Ne){var n=Pn,r=Rn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ax={readContext:Bt,useCallback:iw,useContext:Bt,useEffect:Kp,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:zd,useRef:Z1,useState:function(){return zd(oa)},useDebugValue:Qp,useDeferredValue:function(t){var e=Ht();return ow(e,Ve.memoizedState,t)},useTransition:function(){var t=zd(oa)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:G1,useSyncExternalStore:q1,useId:aw,unstable_isNewReconciler:!1},Ox={readContext:Bt,useCallback:iw,useContext:Bt,useEffect:Kp,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:$d,useRef:Z1,useState:function(){return $d(oa)},useDebugValue:Qp,useDeferredValue:function(t){var e=Ht();return Ve===null?e.memoizedState=t:ow(e,Ve.memoizedState,t)},useTransition:function(){var t=$d(oa)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:G1,useSyncExternalStore:q1,useId:aw,unstable_isNewReconciler:!1};function bs(t,e){try{var n="",r=e;do n+=ak(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function dw(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pu||(Pu=!0,fh=r),nh(t,e)},n}function fw(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nh(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Yx.bind(null,t,e,n),e.then(t,t))}function zv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var Dx=Kn.ReactCurrentOwner,Et=!1;function ft(t,e,n,r){e.child=t===null?B1(e,null,n,r):Ss(e,t.child,n,r)}function Wv(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=qp(t,e,n,r,s,i),n=Yp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ne&&n&&Dp(e),e.flags|=1,ft(t,e,r,i),e.child)}function Vv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hw(t,e,s,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return rh(t,e,n,r,i)}function pw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ki,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ki,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Ki,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Ki,Rt),Rt|=r;return ft(t,e,i,n),e.child}function mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rh(t,e,n,r,i){var s=kt(n)?ci:ut.current;return s=ws(e,s),as(e,i),n=qp(t,e,n,r,s,i),r=Yp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ne&&r&&Dp(e),e.flags|=1,ft(t,e,n,i),e.child)}function Bv(t,e,n,r,i){if(kt(n)){var s=!0;Eu(e)}else s=!1;if(as(e,i),e.stateNode===null)Zl(t,e),W1(e,n,r),th(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=kt(n)?ci:ut.current,u=ws(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dv(e,o,r,u),ar=!1;var f=e.memoizedState;o.state=f,xu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||bt.current||ar?(typeof c=="function"&&(eh(e,n,c,r),l=e.memoizedState),(a=ar||Mv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=kt(n)?ci:ut.current,l=ws(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Dv(e,o,r,l),ar=!1,f=e.memoizedState,o.state=f,xu(e,r,o,i);var p=e.memoizedState;a!==d||f!==p||bt.current||ar?(typeof y=="function"&&(eh(e,n,y,r),p=e.memoizedState),(u=ar||Mv(e,n,u,r,f,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return ih(t,e,n,r,s,i)}function ih(t,e,n,r,i,s){mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Nv(e,n,!1),Wn(t,e,s);r=e.stateNode,Dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&Nv(e,n,!0),e.child}function gw(t){var e=t.stateNode;e.pendingContext?Tv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tv(t,e.context,!1),Vp(t,e.containerInfo)}function Hv(t,e,n,r,i){return Es(),Fp(i),e.flags|=256,ft(t,e,n,r),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function vw(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Re,i&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=oh(n),e.memoizedState=sh,t):Xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Lx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sh,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xp(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kl(t,e,n,r){return r!==null&&Fp(r),Ss(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(R(422))),kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=oh(o),e.memoizedState=sh,s);if(!(e.mode&1))return kl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Wd(s,r,void 0),kl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),on(r,t,i,-1))}return rm(),r=Wd(Error(R(421))),kl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=Sr(i.nextSibling),At=e,Ne=!0,Xt=null,t!==null&&(jt[Ut++]=Rn,jt[Ut++]=Pn,jt[Ut++]=di,Rn=t.id,Pn=t.overflow,di=e),e=Xp(e,r.children),e.flags|=4096,e)}function Gv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zf(t.return,e,n)}function Vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gv(t,n,e);else if(t.tag===19)Gv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fx(t,e,n){switch(e.tag){case 3:gw(e),Es();break;case 5:H1(e);break;case 1:kt(e.type)&&Eu(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?vw(t,e,n):(we(Re,Re.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);we(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,pw(t,e,n)}return Wn(t,e,n)}var _w,ah,ww,Ew;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ah=function(){};ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(yn.current);var s=null;switch(n){case"input":i=Nf(t,i),r=Nf(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_u)}Mf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jx(t,e,n){var r=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&wu(),ot(e),null;case 3:return r=e.stateNode,Cs(),ke(bt),ke(ut),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(mh(Xt),Xt=null))),ah(t,e),ot(e),null;case 5:Bp(e);var i=Zr(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return ot(e),null}if(t=Zr(yn.current),Cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[na]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)Se(wo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":tv(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":rv(r,s),Se("invalid",r)}Mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(r.textContent,a,t),i=["children",""+a]):Go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":pl(r),nv(r,s,!0);break;case"textarea":pl(r),iv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_u)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[na]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)Se(wo[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":tv(t,r),i=Nf(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Se("invalid",t);break;case"textarea":rv(t,r),i=Af(t,r),Se("invalid",t);break;default:i=r}Mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&K0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&Ep(t,s,l,o))}switch(n){case"input":pl(t),nv(t,r,!1);break;case"textarea":pl(t),iv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_u)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Zr(ia.current),Zr(yn.current),Cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return ot(e),null;case 13:if(ke(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Pt!==null&&e.mode&1&&!(e.flags&128))j1(),Es(),e.flags|=98560,s=!1;else if(s=Cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[mn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Xt!==null&&(mh(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?He===0&&(He=3):rm())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Cs(),ah(t,e),t===null&&ea(e.stateNode.containerInfo),ot(e),null;case 10:return zp(e.type._context),ot(e),null;case 17:return kt(e.type)&&wu(),ot(e),null;case 19:if(ke(Re),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>ks&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return ot(e),null}else 2*Ue()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Re.current,we(Re,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return nm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Ux(t,e){switch(Lp(e),e.tag){case 1:return kt(e.type)&&wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),ke(bt),ke(ut),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(ke(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Re),null;case 4:return Cs(),null;case 10:return zp(e.type._context),null;case 22:case 23:return nm(),null;case 24:return null;default:return null}}var xl=!1,at=!1,zx=typeof WeakSet=="function"?WeakSet:Set,F=null;function Yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function lh(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var qv=!1;function $x(t,e){if(Hf=gu,t=k1(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},gu=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var w=p.memoizedProps,E=p.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Yt(e.type,w),E);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(g){Oe(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return p=qv,qv=!1,p}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lh(e,n,s)}i=i.next}while(i!==r)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sw(t){var e=t.alternate;e!==null&&(t.alternate=null,Sw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[na],delete e[Kf],delete e[Cx],delete e[bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cw(t){return t.tag===5||t.tag===3||t.tag===4}function Yv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_u));else if(r!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}var et=null,Kt=!1;function nr(t,e,n){for(n=n.child;n!==null;)bw(t,e,n),n=n.sibling}function bw(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:at||Yi(n,e);case 6:var r=et,i=Kt;et=null,nr(t,e,n),et=r,Kt=i,et!==null&&(Kt?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Kt?(t=et,n=n.stateNode,t.nodeType===8?Ld(t.parentNode,n):t.nodeType===1&&Ld(t,n),Xo(t)):Ld(et,n.stateNode));break;case 4:r=et,i=Kt,et=n.stateNode.containerInfo,Kt=!0,nr(t,e,n),et=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lh(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!at&&(Yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,nr(t,e,n),at=r):nr(t,e,n);break;default:nr(t,e,n)}}function Kv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zx),e.forEach(function(r){var i=Qx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,Kt=!1;break e;case 3:et=a.stateNode.containerInfo,Kt=!0;break e;case 4:et=a.stateNode.containerInfo,Kt=!0;break e}a=a.return}if(et===null)throw Error(R(160));bw(s,o,i),et=null,Kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kw(e,t),e=e.sibling}function kw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),fn(t),r&4){try{Po(3,t,t.return),xc(3,t)}catch(w){Oe(t,t.return,w)}try{Po(5,t,t.return)}catch(w){Oe(t,t.return,w)}}break;case 1:qt(e,t),fn(t),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(qt(e,t),fn(t),r&512&&n!==null&&Yi(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(w){Oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&G0(i,s),Df(a,o);var u=Df(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?X0(i,d):c==="dangerouslySetInnerHTML"?K0(i,d):c==="children"?qo(i,d):Ep(i,c,d,u)}switch(a){case"input":Rf(i,s);break;case"textarea":q0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?rs(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[na]=s}catch(w){Oe(t,t.return,w)}}break;case 6:if(qt(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Oe(t,t.return,w)}}break;case 3:if(qt(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(w){Oe(t,t.return,w)}break;case 4:qt(e,t),fn(t);break;case 13:qt(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(em=Ue())),r&4&&Kv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,qt(e,t),at=u):qt(e,t),fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(d=F=c;F!==null;){switch(f=F,y=f.child,f.tag){case 0:case 11:case 14:case 15:Po(4,f,f.return);break;case 1:Yi(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(w){Oe(r,n,w)}}break;case 5:Yi(f,f.return);break;case 22:if(f.memoizedState!==null){Xv(d);continue}}y!==null?(y.return=f,F=y):Xv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q0("display",o))}catch(w){Oe(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Oe(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qt(e,t),fn(t),r&4&&Kv(t);break;case 21:break;default:qt(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cw(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=Yv(t);dh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Yv(t);ch(t,a,o);break;default:throw Error(R(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wx(t,e,n){F=t,xw(t)}function xw(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=xl;var u=at;if(xl=o,(at=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?Jv(i):l!==null?(l.return=o,F=l):Jv(i);for(;s!==null;)F=s,xw(s),s=s.sibling;F=i,xl=a,at=u}Qv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Qv(t)}}function Qv(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ov(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ov(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}at||e.flags&512&&uh(e)}catch(f){Oe(e,e.return,f)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function Xv(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Jv(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{uh(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var Vx=Math.ceil,Ru=Kn.ReactCurrentDispatcher,Jp=Kn.ReactCurrentOwner,Vt=Kn.ReactCurrentBatchConfig,ae=0,Je=null,$e=null,nt=0,Rt=0,Ki=zr(0),He=0,la=null,hi=0,Ic=0,Zp=0,Ao=null,wt=null,em=0,ks=1/0,In=null,Pu=!1,fh=null,br=null,Il=!1,mr=null,Au=0,Oo=0,hh=null,eu=-1,tu=0;function pt(){return ae&6?Ue():eu!==-1?eu:eu=Ue()}function kr(t){return t.mode&1?ae&2&&nt!==0?nt&-nt:xx.transition!==null?(tu===0&&(tu=u1()),tu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:g1(t.type)),t):1}function on(t,e,n,r){if(50<Oo)throw Oo=0,hh=null,Error(R(185));Ua(t,n,r),(!(ae&2)||t!==Je)&&(t===Je&&(!(ae&2)&&(Ic|=n),He===4&&ur(t,nt)),xt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ks=Ue()+500,Cc&&$r()))}function xt(t,e){var n=t.callbackNode;xk(t,e);var r=mu(t,t===Je?nt:0);if(r===0)n!==null&&av(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&av(n),e===1)t.tag===0?kx(Zv.bind(null,t)):D1(Zv.bind(null,t)),Ex(function(){!(ae&6)&&$r()}),n=null;else{switch(c1(r)){case 1:n=xp;break;case 4:n=a1;break;case 16:n=pu;break;case 536870912:n=l1;break;default:n=pu}n=Mw(n,Iw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iw(t,e){if(eu=-1,tu=0,ae&6)throw Error(R(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=mu(t,t===Je?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ou(t,r);else{e=r;var i=ae;ae|=2;var s=Nw();(Je!==t||nt!==e)&&(In=null,ks=Ue()+500,oi(t,e));do try{Gx();break}catch(a){Tw(t,a)}while(1);Up(),Ru.current=s,ae=i,$e!==null?e=0:(Je=null,nt=0,e=He)}if(e!==0){if(e===2&&(i=zf(t),i!==0&&(r=i,e=ph(t,i))),e===1)throw n=la,oi(t,0),ur(t,r),xt(t,Ue()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!Bx(i)&&(e=Ou(t,r),e===2&&(s=zf(t),s!==0&&(r=s,e=ph(t,s))),e===1))throw n=la,oi(t,0),ur(t,r),xt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Yr(t,wt,In);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=em+500-Ue(),10<e)){if(mu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yf(Yr.bind(null,t,wt,In),e);break}Yr(t,wt,In);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vx(r/1960))-r,10<r){t.timeoutHandle=Yf(Yr.bind(null,t,wt,In),r);break}Yr(t,wt,In);break;case 5:Yr(t,wt,In);break;default:throw Error(R(329))}}}return xt(t,Ue()),t.callbackNode===n?Iw.bind(null,t):null}function ph(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=Ou(t,e),t!==2&&(e=wt,wt=n,e!==null&&mh(e)),t}function mh(t){wt===null?wt=t:wt.push.apply(wt,t)}function Bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Zp,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Zv(t){if(ae&6)throw Error(R(327));ls();var e=mu(t,0);if(!(e&1))return xt(t,Ue()),null;var n=Ou(t,e);if(t.tag!==0&&n===2){var r=zf(t);r!==0&&(e=r,n=ph(t,r))}if(n===1)throw n=la,oi(t,0),ur(t,e),xt(t,Ue()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,wt,In),xt(t,Ue()),null}function tm(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ks=Ue()+500,Cc&&$r())}}function pi(t){mr!==null&&mr.tag===0&&!(ae&6)&&ls();var e=ae;ae|=1;var n=Vt.transition,r=fe;try{if(Vt.transition=null,fe=1,t)return t()}finally{fe=r,Vt.transition=n,ae=e,!(ae&6)&&$r()}}function nm(){Rt=Ki.current,ke(Ki)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wx(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wu();break;case 3:Cs(),ke(bt),ke(ut),Hp();break;case 5:Bp(r);break;case 4:Cs();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:zp(r.type._context);break;case 22:case 23:nm()}n=n.return}if(Je=t,$e=t=xr(t.current,null),nt=Rt=e,He=0,la=null,Zp=Ic=hi=0,wt=Ao=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function Tw(t,e){do{var n=$e;try{if(Up(),Xl.current=Nu,Tu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tu=!1}if(fi=0,Ke=Ve=Pe=null,Ro=!1,sa=0,Jp.current=null,n===null||n.return===null){He=1,la=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=zv(o);if(y!==null){y.flags&=-257,$v(y,o,a,s,e),y.mode&1&&Uv(s,u,e),e=y,l=u;var p=e.updateQueue;if(p===null){var w=new Set;w.add(l),e.updateQueue=w}else p.add(l);break e}else{if(!(e&1)){Uv(s,u,e),rm();break e}l=Error(R(426))}}else if(Ne&&a.mode&1){var E=zv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),$v(E,o,a,s,e),Fp(bs(l,a));break e}}s=l=bs(l,a),He!==4&&(He=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=dw(s,l,e);Av(s,m);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(br===null||!br.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=fw(s,a,e);Av(s,g);break e}}s=s.return}while(s!==null)}Pw(n)}catch(S){e=S,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Nw(){var t=Ru.current;return Ru.current=Nu,t===null?Nu:t}function rm(){(He===0||He===3||He===2)&&(He=4),Je===null||!(hi&268435455)&&!(Ic&268435455)||ur(Je,nt)}function Ou(t,e){var n=ae;ae|=2;var r=Nw();(Je!==t||nt!==e)&&(In=null,oi(t,e));do try{Hx();break}catch(i){Tw(t,i)}while(1);if(Up(),ae=n,Ru.current=r,$e!==null)throw Error(R(261));return Je=null,nt=0,He}function Hx(){for(;$e!==null;)Rw($e)}function Gx(){for(;$e!==null&&!vk();)Rw($e)}function Rw(t){var e=Ow(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Pw(t):$e=e,Jp.current=null}function Pw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ux(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}else if(n=jx(n,e,Rt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function Yr(t,e,n){var r=fe,i=Vt.transition;try{Vt.transition=null,fe=1,qx(t,e,n,r)}finally{Vt.transition=i,fe=r}return null}function qx(t,e,n,r){do ls();while(mr!==null);if(ae&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ik(t,s),t===Je&&($e=Je=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Il||(Il=!0,Mw(pu,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=fe;fe=1;var a=ae;ae|=4,Jp.current=null,$x(t,n),kw(n,t),hx(Gf),gu=!!Hf,Gf=Hf=null,t.current=n,Wx(n),yk(),ae=a,fe=o,Vt.transition=s}else t.current=n;if(Il&&(Il=!1,mr=t,Au=i),s=t.pendingLanes,s===0&&(br=null),Ek(n.stateNode),xt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pu)throw Pu=!1,t=fh,fh=null,t;return Au&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===hh?Oo++:(Oo=0,hh=t):Oo=0,$r(),null}function ls(){if(mr!==null){var t=c1(Au),e=Vt.transition,n=fe;try{if(Vt.transition=null,fe=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Au=0,ae&6)throw Error(R(331));var i=ae;for(ae|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Po(8,c,s)}var d=c.child;if(d!==null)d.return=c,F=d;else for(;F!==null;){c=F;var f=c.sibling,y=c.return;if(Sw(c),c===u){F=null;break}if(f!==null){f.return=y,F=f;break}F=y}}}var p=s.alternate;if(p!==null){var w=p.child;if(w!==null){p.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,F=m;break e}F=s.return}}var h=t.current;for(F=h;F!==null;){o=F;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,F=v;else e:for(o=h;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xc(9,a)}}catch(S){Oe(a,a.return,S)}if(a===o){F=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,F=g;break e}F=a.return}}if(ae=i,$r(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(yc,t)}catch{}r=!0}return r}finally{fe=n,Vt.transition=e}}return!1}function ey(t,e,n){e=bs(n,e),e=dw(t,e,1),t=Cr(t,e,1),e=pt(),t!==null&&(Ua(t,1,e),xt(t,e))}function Oe(t,e,n){if(t.tag===3)ey(t,t,n);else for(;e!==null;){if(e.tag===3){ey(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=bs(n,t),t=fw(e,t,1),e=Cr(e,t,1),t=pt(),e!==null&&(Ua(e,1,t),xt(e,t));break}}e=e.return}}function Yx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(nt&n)===n&&(He===4||He===3&&(nt&130023424)===nt&&500>Ue()-em?oi(t,0):Zp|=n),xt(t,e)}function Aw(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=pt();t=$n(t,e),t!==null&&(Ua(t,e,n),xt(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Aw(t,n)}function Qx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Aw(t,n)}var Ow;Ow=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,Fx(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ne&&e.flags&1048576&&L1(e,Cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=ws(e,ut.current);as(e,n),i=qp(null,e,r,t,i,n);var s=Yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wp(e),i.updater=bc,e.stateNode=i,i._reactInternals=e,th(e,r,t,n),e=ih(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Dp(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Jx(r),t=Yt(r,t),i){case 0:e=rh(null,e,r,t,n);break e;case 1:e=Bv(null,e,r,t,n);break e;case 11:e=Wv(null,e,r,t,n);break e;case 14:e=Vv(null,e,r,Yt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Bv(t,e,r,i,n);case 3:e:{if(gw(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z1(t,e),xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bs(Error(R(423)),e),e=Hv(t,e,r,n,i);break e}else if(r!==i){i=bs(Error(R(424)),e),e=Hv(t,e,r,n,i);break e}else for(Pt=Sr(e.stateNode.containerInfo.firstChild),At=e,Ne=!0,Xt=null,n=B1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),r===i){e=Wn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return H1(e),t===null&&Jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qf(r,i)?o=null:s!==null&&qf(r,s)&&(e.flags|=32),mw(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return vw(t,e,n);case 4:return Vp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Wv(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(bu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!bt.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=Bt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Vv(t,e,r,i,n);case 15:return hw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Zl(t,e),e.tag=1,kt(r)?(t=!0,Eu(e)):t=!1,as(e,n),W1(e,r,i),th(e,r,i,n),ih(null,e,r,!0,t,n);case 19:return yw(t,e,n);case 22:return pw(t,e,n)}throw Error(R(156,e.tag))};function Mw(t,e){return o1(t,e)}function Xx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new Xx(t,e,n,r)}function im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jx(t){if(typeof t=="function")return im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cp)return 11;if(t===bp)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ui:return ai(n.children,i,s,e);case Sp:o=8,i|=8;break;case kf:return t=Wt(12,n,e,i|2),t.elementType=kf,t.lanes=s,t;case xf:return t=Wt(13,n,e,i),t.elementType=xf,t.lanes=s,t;case If:return t=Wt(19,n,e,i),t.elementType=If,t.lanes=s,t;case V0:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $0:o=10;break e;case W0:o=9;break e;case Cp:o=11;break e;case bp:o=14;break e;case or:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=V0,t.lanes=n,t.stateNode={isHidden:!1},t}function Bd(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Hd(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Zx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kd(0),this.expirationTimes=kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,r,i,s,o,a,l){return t=new Zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wp(s),t}function eI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dw(t){if(!t)return Or;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(kt(n))return M1(t,n,e)}return e}function Lw(t,e,n,r,i,s,o,a,l){return t=sm(n,r,!0,t,i,s,o,a,l),t.context=Dw(null),n=t.current,r=pt(),i=kr(n),s=Dn(r,i),s.callback=e??null,Cr(n,s,i),t.current.lanes=i,Ua(t,i,r),xt(t,r),t}function Nc(t,e,n,r){var i=e.current,s=pt(),o=kr(i);return n=Dw(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(i,e,o),t!==null&&(on(t,i,o,s),Ql(t,i,o)),o}function Mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function om(t,e){ty(t,e),(t=t.alternate)&&ty(t,e)}function tI(){return null}var Fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function am(t){this._internalRoot=t}Rc.prototype.render=am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Nc(t,e,null,null)};Rc.prototype.unmount=am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){Nc(null,t,null,null)}),e[zn]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=h1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&m1(t)}};function lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ny(){}function nI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mu(o);s.call(u)}}var o=Lw(e,r,t,0,null,!1,!1,"",ny);return t._reactRootContainer=o,t[zn]=o.current,ea(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Mu(l);a.call(u)}}var l=sm(t,0,!1,null,null,!1,!1,"",ny);return t._reactRootContainer=l,t[zn]=l.current,ea(t.nodeType===8?t.parentNode:t),pi(function(){Nc(e,l,n,r)}),l}function Ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Mu(o);a.call(l)}}Nc(e,o,t,i)}else o=nI(n,e,t,i,r);return Mu(o)}d1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Ip(e,n|1),xt(e,Ue()),!(ae&6)&&(ks=Ue()+500,$r()))}break;case 13:pi(function(){var r=$n(t,1);if(r!==null){var i=pt();on(r,t,1,i)}}),om(t,1)}};Tp=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=pt();on(e,t,134217728,n)}om(t,134217728)}};f1=function(t){if(t.tag===13){var e=kr(t),n=$n(t,e);if(n!==null){var r=pt();on(n,t,e,r)}om(t,e)}};h1=function(){return fe};p1=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ff=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sc(r);if(!i)throw Error(R(90));H0(r),Rf(r,i)}}}break;case"textarea":q0(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};e1=tm;t1=pi;var rI={usingClientEntryPoint:!1,Events:[$a,Vi,Sc,J0,Z0,tm]},io={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iI={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i1(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||tI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{yc=Tl.inject(iI),vn=Tl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rI;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lm(e))throw Error(R(200));return eI(t,e,null,n)};Mt.createRoot=function(t,e){if(!lm(t))throw Error(R(299));var n=!1,r="",i=Fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,ea(t.nodeType===8?t.parentNode:t),new am(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=i1(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return pi(t)};Mt.hydrate=function(t,e,n){if(!Pc(e))throw Error(R(200));return Ac(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!lm(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lw(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rc(e)};Mt.render=function(t,e,n){if(!Pc(e))throw Error(R(200));return Ac(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(R(40));return t._reactRootContainer?(pi(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Mt.unstable_batchedUpdates=tm;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Ac(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jw)}catch(t){console.error(t)}}jw(),L0.exports=Mt;var Uw=L0.exports,ry=Uw;Cf.createRoot=ry.createRoot,Cf.hydrateRoot=ry.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Te.apply(this,arguments)}var ze;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ze||(ze={}));const iy="popstate";function sI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Cn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ua("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:gi(s))}function r(i,s){mi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return aI(e,n,r,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oI(){return Math.random().toString(36).substr(2,8)}function sy(t,e){return{usr:t.state,key:t.key,idx:e}}function ua(t,e,n,r){return n===void 0&&(n=null),Te({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cn(e):e,{state:n,key:e&&e.key||r||oI()})}function gi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ze.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Te({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ze.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:m})}function f(E,m){a=ze.Push;let h=ua(w.location,E,m);n&&n(h,E),u=c()+1;let v=sy(h,u),g=w.createHref(h);try{o.pushState(v,"",g)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(g)}s&&l&&l({action:a,location:w.location,delta:1})}function y(E,m){a=ze.Replace;let h=ua(w.location,E,m);n&&n(h,E),u=c();let v=sy(h,u),g=w.createHref(h);o.replaceState(v,"",g),s&&l&&l({action:a,location:w.location,delta:0})}function p(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:gi(E);return re(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(iy,d),l=E,()=>{i.removeEventListener(iy,d),l=null}},createHref(E){return e(i,E)},createURL:p,encodeLocation(E){let m=p(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:y,go(E){return o.go(E)}};return w}var je;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(je||(je={}));const lI=new Set(["lazy","caseSensitive","path","id","index","children"]);function uI(t){return t.index===!0}function gh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),uI(i)){let l=Te({},i,e(i),{id:a});return r[a]=l,l}else{let l=Te({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=gh(i.children,e,o,r)),l}})}function Qi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cn(e):e,i=Ls(r.pathname||"/",n);if(i==null)return null;let s=zw(t);cI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_I(s[a],SI(i));return o}function zw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ln([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:vI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $w(s.path))i(s,o,l)}),e}function $w(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$w(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dI=/^:\w+$/,fI=3,hI=2,pI=1,mI=10,gI=-2,oy=t=>t==="*";function vI(t,e){let n=t.split("/"),r=n.length;return n.some(oy)&&(r+=gI),e&&(r+=hI),n.filter(i=>!oy(i)).reduce((i,s)=>i+(dI.test(s)?fI:s===""?pI:mI),r)}function yI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _I(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ln([i,c.pathname]),pathnameBase:xI(Ln([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ln([i,c.pathnameBase]))}return s}function wI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=CI(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function EI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SI(t){try{return decodeURI(t)}catch(e){return mi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function CI(t,e){try{return decodeURIComponent(t)}catch(n){return mi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ls(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cn(t):t;return{pathname:n?n.startsWith("/")?n:kI(n,e):e,search:II(r),hash:TI(i)}}function kI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Oc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function um(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cn(t):(i=Te({},t),re(!i.pathname||!i.pathname.includes("?"),Gd("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Gd("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Gd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=bI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ln=t=>t.join("/").replace(/\/\/+/g,"/"),xI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),II=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,TI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class cm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ww(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Vw=["post","put","patch","delete"],NI=new Set(Vw),RI=["get",...Vw],PI=new Set(RI),AI=new Set([301,302,303,307,308]),OI=new Set([307,308]),qd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},MI={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},so={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Bw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DI=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function LI(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;re(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;i=k=>({hasErrorBoundary:b(k)})}else i=DI;let s={},o=gh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Te({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,y=null,p=null,w=t.hydrationData!=null,E=Qi(o,t.history.location,l),m=null;if(E==null){let b=Ft(404,{pathname:t.history.location.pathname}),{matches:k,route:T}=py(o);E=k,m={[T.id]:b}}let h=!E.some(b=>b.route.lazy)&&(!E.some(b=>b.route.loader)||t.hydrationData!=null),v,g={historyAction:t.history.action,location:t.history.location,matches:E,initialized:h,navigation:qd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=ze.Pop,I=!1,x,A=!1,M=!1,L=[],oe=[],Z=new Map,Ie=0,W=-1,q=new Map,ue=new Set,le=new Map,P=new Map,j=new Map,V=!1;function Ee(){return c=t.history.listen(b=>{let{action:k,location:T,delta:U}=b;if(V){V=!1;return}mi(j.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=Hg({currentLocation:g.location,nextLocation:T,historyAction:k});if(X&&U!=null){V=!0,t.history.go(U*-1),cl(X,{state:"blocked",location:T,proceed(){cl(X,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(U)},reset(){let Y=new Map(g.blockers);Y.set(X,so),de({blockers:Y})}});return}return Nt(k,T)}),g.initialized||Nt(ze.Pop,g.location),v}function he(){c&&c(),d.clear(),x&&x.abort(),g.fetchers.forEach((b,k)=>hd(k)),g.blockers.forEach((b,k)=>Bg(k))}function Zn(b){return d.add(b),()=>d.delete(b)}function de(b){g=Te({},g,b),d.forEach(k=>k(g))}function Le(b,k){var T,U;let X=g.actionData!=null&&g.navigation.formMethod!=null&&Qt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((T=b.state)==null?void 0:T._isRedirect)!==!0,Y;k.actionData?Object.keys(k.actionData).length>0?Y=k.actionData:Y=null:X?Y=g.actionData:Y=null;let Q=k.loaderData?hy(g.loaderData,k.loaderData,k.matches||[],k.errors):g.loaderData,B=g.blockers;B.size>0&&(B=new Map(B),B.forEach((ve,Ze)=>B.set(Ze,so)));let $=I===!0||g.navigation.formMethod!=null&&Qt(g.navigation.formMethod)&&((U=b.state)==null?void 0:U._isRedirect)!==!0;a&&(o=a,a=void 0),A||S===ze.Pop||(S===ze.Push?t.history.push(b,b.state):S===ze.Replace&&t.history.replace(b,b.state)),de(Te({},k,{actionData:Y,loaderData:Q,historyAction:S,location:b,initialized:!0,navigation:qd,revalidation:"idle",restoreScrollPosition:qg(b,k.matches||g.matches),preventScrollReset:$,blockers:B})),S=ze.Pop,I=!1,A=!1,M=!1,L=[],oe=[]}async function it(b,k){if(typeof b=="number"){t.history.go(b);return}let T=vh(g.location,g.matches,l,u.v7_prependBasename,b,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:U,submission:X,error:Y}=ay(u.v7_normalizeFormMethod,!1,T,k),Q=g.location,B=ua(g.location,U,k&&k.state);B=Te({},B,t.history.encodeLocation(B));let $=k&&k.replace!=null?k.replace:void 0,ve=ze.Push;$===!0?ve=ze.Replace:$===!1||X!=null&&Qt(X.formMethod)&&X.formAction===g.location.pathname+g.location.search&&(ve=ze.Replace);let Ze=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,pe=Hg({currentLocation:Q,nextLocation:B,historyAction:ve});if(pe){cl(pe,{state:"blocked",location:B,proceed(){cl(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),it(b,k)},reset(){let Fe=new Map(g.blockers);Fe.set(pe,so),de({blockers:Fe})}});return}return await Nt(ve,B,{submission:X,pendingError:Y,preventScrollReset:Ze,replace:k&&k.replace})}function dt(){if(fd(),de({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Nt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Nt(S||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Nt(b,k,T){x&&x.abort(),x=null,S=b,A=(T&&T.startUninterruptedRevalidation)===!0,Rb(g.location,g.matches),I=(T&&T.preventScrollReset)===!0;let U=a||o,X=T&&T.overrideNavigation,Y=Qi(U,k,l);if(!Y){let Fe=Ft(404,{pathname:k.pathname}),{matches:qe,route:Hr}=py(U);pd(),Le(k,{matches:qe,loaderData:{},errors:{[Hr.id]:Fe}});return}if(g.initialized&&!M&&$I(g.location,k)&&!(T&&T.submission&&Qt(T.submission.formMethod))){Le(k,{matches:Y});return}x=new AbortController;let Q=ao(t.history,k,x.signal,T&&T.submission),B,$;if(T&&T.pendingError)$={[Xi(Y).route.id]:T.pendingError};else if(T&&T.submission&&Qt(T.submission.formMethod)){let Fe=await bn(Q,k,T.submission,Y,{replace:T.replace});if(Fe.shortCircuited)return;B=Fe.pendingActionData,$=Fe.pendingActionError,X=Nl(k,T.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ve,loaderData:Ze,errors:pe}=await qs(Q,k,Y,X,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,B,$);ve||(x=null,Le(k,Te({matches:Y},B?{actionData:B}:{},{loaderData:Ze,errors:pe})))}async function bn(b,k,T,U,X){X===void 0&&(X={}),fd();let Y=GI(k,T);de({navigation:Y});let Q,B=_h(U,k);if(!B.route.action&&!B.route.lazy)Q={type:je.error,error:Ft(405,{method:b.method,pathname:k.pathname,routeId:B.route.id})};else if(Q=await oo("action",b,B,U,s,i,l),b.signal.aborted)return{shortCircuited:!0};if(us(Q)){let $;return X&&X.replace!=null?$=X.replace:$=Q.location===g.location.pathname+g.location.search,await Ys(g,Q,{submission:T,replace:$}),{shortCircuited:!0}}if(Mo(Q)){let $=Xi(U,B.route.id);return(X&&X.replace)!==!0&&(S=ze.Push),{pendingActionData:{},pendingActionError:{[$.route.id]:Q.error}}}if(ei(Q))throw Ft(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:Q.data}}}async function qs(b,k,T,U,X,Y,Q,B,$){let ve=U||Nl(k,X),Ze=X||Y||vy(ve),pe=a||o,[Fe,qe]=ly(t.history,g,T,Ze,k,M,L,oe,le,ue,pe,l,B,$);if(pd(me=>!(T&&T.some(Gt=>Gt.route.id===me))||Fe&&Fe.some(Gt=>Gt.route.id===me)),W=++Ie,Fe.length===0&&qe.length===0){let me=Wg();return Le(k,Te({matches:T,loaderData:{},errors:$||null},B?{actionData:B}:{},me?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!A){qe.forEach(Gt=>{let tr=g.fetchers.get(Gt.key),_d=lo(void 0,tr?tr.data:void 0);g.fetchers.set(Gt.key,_d)});let me=B||g.actionData;de(Te({navigation:ve},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},qe.length>0?{fetchers:new Map(g.fetchers)}:{}))}qe.forEach(me=>{Z.has(me.key)&&er(me.key),me.controller&&Z.set(me.key,me.controller)});let Hr=()=>qe.forEach(me=>er(me.key));x&&x.signal.addEventListener("abort",Hr);let{results:Gr,loaderResults:Ks,fetcherResults:md}=await zg(g.matches,T,Fe,qe,b);if(b.signal.aborted)return{shortCircuited:!0};x&&x.signal.removeEventListener("abort",Hr),qe.forEach(me=>Z.delete(me.key));let kn=my(Gr);if(kn){if(kn.idx>=Fe.length){let me=qe[kn.idx-Fe.length].key;ue.add(me)}return await Ys(g,kn.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:xn,errors:dl}=fy(g,T,Fe,Ks,$,qe,md,P);P.forEach((me,Gt)=>{me.subscribe(tr=>{(tr||me.done)&&P.delete(Gt)})});let gd=Wg(),vd=Vg(W),yd=gd||vd||qe.length>0;return Te({loaderData:xn,errors:dl},yd?{fetchers:new Map(g.fetchers)}:{})}function Ug(b){return g.fetchers.get(b)||MI}function kb(b,k,T,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(b)&&er(b);let X=a||o,Y=vh(g.location,g.matches,l,u.v7_prependBasename,T,k,U==null?void 0:U.relative),Q=Qi(X,Y,l);if(!Q){ul(b,k,Ft(404,{pathname:Y}));return}let{path:B,submission:$,error:ve}=ay(u.v7_normalizeFormMethod,!0,Y,U);if(ve){ul(b,k,ve);return}let Ze=_h(Q,B);if(I=(U&&U.preventScrollReset)===!0,$&&Qt($.formMethod)){xb(b,k,B,Ze,Q,$);return}le.set(b,{routeId:k,path:B}),Ib(b,k,B,Ze,Q,$)}async function xb(b,k,T,U,X,Y){if(fd(),le.delete(b),!U.route.action&&!U.route.lazy){let We=Ft(405,{method:Y.formMethod,pathname:T,routeId:k});ul(b,k,We);return}let Q=g.fetchers.get(b),B=qI(Y,Q);g.fetchers.set(b,B),de({fetchers:new Map(g.fetchers)});let $=new AbortController,ve=ao(t.history,T,$.signal,Y);Z.set(b,$);let Ze=Ie,pe=await oo("action",ve,U,X,s,i,l);if(ve.signal.aborted){Z.get(b)===$&&Z.delete(b);return}if(us(pe))if(Z.delete(b),W>Ze){let We=Fi(void 0);g.fetchers.set(b,We),de({fetchers:new Map(g.fetchers)});return}else{ue.add(b);let We=lo(Y);return g.fetchers.set(b,We),de({fetchers:new Map(g.fetchers)}),Ys(g,pe,{submission:Y,isFetchActionRedirect:!0})}if(Mo(pe)){ul(b,k,pe.error);return}if(ei(pe))throw Ft(400,{type:"defer-action"});let Fe=g.navigation.location||g.location,qe=ao(t.history,Fe,$.signal),Hr=a||o,Gr=g.navigation.state!=="idle"?Qi(Hr,g.navigation.location,l):g.matches;re(Gr,"Didn't find any matches after fetcher action");let Ks=++Ie;q.set(b,Ks);let md=lo(Y,pe.data);g.fetchers.set(b,md);let[kn,xn]=ly(t.history,g,Gr,Y,Fe,M,L,oe,le,ue,Hr,l,{[U.route.id]:pe.data},void 0);xn.filter(We=>We.key!==b).forEach(We=>{let Qs=We.key,Yg=g.fetchers.get(Qs),Ab=lo(void 0,Yg?Yg.data:void 0);g.fetchers.set(Qs,Ab),Z.has(Qs)&&er(Qs),We.controller&&Z.set(Qs,We.controller)}),de({fetchers:new Map(g.fetchers)});let dl=()=>xn.forEach(We=>er(We.key));$.signal.addEventListener("abort",dl);let{results:gd,loaderResults:vd,fetcherResults:yd}=await zg(g.matches,Gr,kn,xn,qe);if($.signal.aborted)return;$.signal.removeEventListener("abort",dl),q.delete(b),Z.delete(b),xn.forEach(We=>Z.delete(We.key));let me=my(gd);if(me){if(me.idx>=kn.length){let We=xn[me.idx-kn.length].key;ue.add(We)}return Ys(g,me.result)}let{loaderData:Gt,errors:tr}=fy(g,g.matches,kn,vd,void 0,xn,yd,P);if(g.fetchers.has(b)){let We=Fi(pe.data);g.fetchers.set(b,We)}let _d=Vg(Ks);g.navigation.state==="loading"&&Ks>W?(re(S,"Expected pending action"),x&&x.abort(),Le(g.navigation.location,{matches:Gr,loaderData:Gt,errors:tr,fetchers:new Map(g.fetchers)})):(de(Te({errors:tr,loaderData:hy(g.loaderData,Gt,Gr,tr)},_d||xn.length>0?{fetchers:new Map(g.fetchers)}:{})),M=!1)}async function Ib(b,k,T,U,X,Y){let Q=g.fetchers.get(b),B=lo(Y,Q?Q.data:void 0);g.fetchers.set(b,B),de({fetchers:new Map(g.fetchers)});let $=new AbortController,ve=ao(t.history,T,$.signal);Z.set(b,$);let Ze=Ie,pe=await oo("loader",ve,U,X,s,i,l);if(ei(pe)&&(pe=await qw(pe,ve.signal,!0)||pe),Z.get(b)===$&&Z.delete(b),ve.signal.aborted)return;if(us(pe))if(W>Ze){let qe=Fi(void 0);g.fetchers.set(b,qe),de({fetchers:new Map(g.fetchers)});return}else{ue.add(b),await Ys(g,pe);return}if(Mo(pe)){let qe=Xi(g.matches,k);g.fetchers.delete(b),de({fetchers:new Map(g.fetchers),errors:{[qe.route.id]:pe.error}});return}re(!ei(pe),"Unhandled fetcher deferred data");let Fe=Fi(pe.data);g.fetchers.set(b,Fe),de({fetchers:new Map(g.fetchers)})}async function Ys(b,k,T){let{submission:U,replace:X,isFetchActionRedirect:Y}=T===void 0?{}:T;k.revalidate&&(M=!0);let Q=ua(b.location,k.location,Te({_isRedirect:!0},Y?{_isFetchActionRedirect:!0}:{}));if(re(Q,"Expected a location on the redirect navigation"),n){let ve=!1;if(k.reloadDocument)ve=!0;else if(Bw.test(k.location)){const Ze=t.history.createURL(k.location);ve=Ze.origin!==e.location.origin||Ls(Ze.pathname,l)==null}if(ve){X?e.location.replace(k.location):e.location.assign(k.location);return}}x=null;let B=X===!0?ze.Replace:ze.Push,$=U||vy(b.navigation);if(OI.has(k.status)&&$&&Qt($.formMethod))await Nt(B,Q,{submission:Te({},$,{formAction:k.location}),preventScrollReset:I});else if(Y)await Nt(B,Q,{overrideNavigation:Nl(Q),fetcherSubmission:$,preventScrollReset:I});else{let ve=Nl(Q,$);await Nt(B,Q,{overrideNavigation:ve,preventScrollReset:I})}}async function zg(b,k,T,U,X){let Y=await Promise.all([...T.map($=>oo("loader",X,$,k,s,i,l)),...U.map($=>$.matches&&$.match&&$.controller?oo("loader",ao(t.history,$.path,$.controller.signal),$.match,$.matches,s,i,l):{type:je.error,error:Ft(404,{pathname:$.path})})]),Q=Y.slice(0,T.length),B=Y.slice(T.length);return await Promise.all([gy(b,T,Q,Q.map(()=>X.signal),!1,g.loaderData),gy(b,U.map($=>$.match),B,U.map($=>$.controller?$.controller.signal:null),!0)]),{results:Y,loaderResults:Q,fetcherResults:B}}function fd(){M=!0,L.push(...pd()),le.forEach((b,k)=>{Z.has(k)&&(oe.push(k),er(k))})}function ul(b,k,T){let U=Xi(g.matches,k);hd(b),de({errors:{[U.route.id]:T},fetchers:new Map(g.fetchers)})}function hd(b){let k=g.fetchers.get(b);Z.has(b)&&!(k&&k.state==="loading"&&q.has(b))&&er(b),le.delete(b),q.delete(b),ue.delete(b),g.fetchers.delete(b)}function er(b){let k=Z.get(b);re(k,"Expected fetch controller: "+b),k.abort(),Z.delete(b)}function $g(b){for(let k of b){let T=Ug(k),U=Fi(T.data);g.fetchers.set(k,U)}}function Wg(){let b=[],k=!1;for(let T of ue){let U=g.fetchers.get(T);re(U,"Expected fetcher: "+T),U.state==="loading"&&(ue.delete(T),b.push(T),k=!0)}return $g(b),k}function Vg(b){let k=[];for(let[T,U]of q)if(U<b){let X=g.fetchers.get(T);re(X,"Expected fetcher: "+T),X.state==="loading"&&(er(T),q.delete(T),k.push(T))}return $g(k),k.length>0}function Tb(b,k){let T=g.blockers.get(b)||so;return j.get(b)!==k&&j.set(b,k),T}function Bg(b){g.blockers.delete(b),j.delete(b)}function cl(b,k){let T=g.blockers.get(b)||so;re(T.state==="unblocked"&&k.state==="blocked"||T.state==="blocked"&&k.state==="blocked"||T.state==="blocked"&&k.state==="proceeding"||T.state==="blocked"&&k.state==="unblocked"||T.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+k.state);let U=new Map(g.blockers);U.set(b,k),de({blockers:U})}function Hg(b){let{currentLocation:k,nextLocation:T,historyAction:U}=b;if(j.size===0)return;j.size>1&&mi(!1,"A router only supports one blocker at a time");let X=Array.from(j.entries()),[Y,Q]=X[X.length-1],B=g.blockers.get(Y);if(!(B&&B.state==="proceeding")&&Q({currentLocation:k,nextLocation:T,historyAction:U}))return Y}function pd(b){let k=[];return P.forEach((T,U)=>{(!b||b(U))&&(T.cancel(),k.push(U),P.delete(U))}),k}function Nb(b,k,T){if(f=b,p=k,y=T||null,!w&&g.navigation===qd){w=!0;let U=qg(g.location,g.matches);U!=null&&de({restoreScrollPosition:U})}return()=>{f=null,p=null,y=null}}function Gg(b,k){return y&&y(b,k.map(U=>HI(U,g.loaderData)))||b.key}function Rb(b,k){if(f&&p){let T=Gg(b,k);f[T]=p()}}function qg(b,k){if(f){let T=Gg(b,k),U=f[T];if(typeof U=="number")return U}return null}function Pb(b){s={},a=gh(b,i,void 0,s)}return v={get basename(){return l},get state(){return g},get routes(){return o},initialize:Ee,subscribe:Zn,enableScrollRestoration:Nb,navigate:it,fetch:kb,revalidate:dt,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:Ug,deleteFetcher:hd,dispose:he,getBlocker:Tb,deleteBlocker:Bg,_internalFetchControllers:Z,_internalActiveDeferreds:P,_internalSetRoutes:Pb},v}function FI(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function vh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=um(i||".",Oc(a).map(c=>c.pathnameBase),Ls(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!dm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Ln([n,u.pathname])),gi(u)}function ay(t,e,n,r){if(!r||!FI(r))return{path:n};if(r.formMethod&&!BI(r.formMethod))return{path:n,error:Ft(405,{method:r.formMethod})};let i=()=>({path:n,error:Ft(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Gw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,p)=>{let[w,E]=p;return""+y+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Qt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}re(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=yh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=yh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=dy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=dy(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Qt(c.formMethod))return{path:n,submission:c};let d=Cn(n);return e&&d.search&&dm(d.search)&&l.append("index",""),d.search="?"+l,{path:gi(d),submission:c}}function jI(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function ly(t,e,n,r,i,s,o,a,l,u,c,d,f,y){let p=y?Object.values(y)[0]:f?Object.values(f)[0]:void 0,w=t.createURL(e.location),E=t.createURL(i),m=y?Object.keys(y)[0]:void 0,v=jI(n,m).filter((S,I)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(UI(e.loaderData,e.matches[I],S)||o.some(M=>M===S.route.id))return!0;let x=e.matches[I],A=S;return uy(S,Te({currentUrl:w,currentParams:x.params,nextUrl:E,nextParams:A.params},r,{actionResult:p,defaultShouldRevalidate:s||w.pathname+w.search===E.pathname+E.search||w.search!==E.search||Hw(x,A)}))}),g=[];return l.forEach((S,I)=>{if(!n.some(oe=>oe.route.id===S.routeId))return;let x=Qi(c,S.path,d);if(!x){g.push({key:I,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(I),M=_h(x,S.path),L=!1;u.has(I)?L=!1:a.includes(I)?L=!0:A&&A.state!=="idle"&&A.data===void 0?L=s:L=uy(M,Te({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:p,defaultShouldRevalidate:s})),L&&g.push({key:I,routeId:S.routeId,path:S.path,matches:x,match:M,controller:new AbortController})}),[v,g]}function UI(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Hw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function uy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function cy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];re(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";mi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!lI.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Te({},e(i),{lazy:void 0}))}async function oo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=p=>{let w,E=new Promise((m,h)=>w=h);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([p({request:e,params:n.params,context:a.requestContext}),E])};try{let p=n.route[t];if(n.route.lazy)if(p)u=(await Promise.all([d(p),cy(n.route,s,i)]))[0];else if(await cy(n.route,s,i),p=n.route[t],p)u=await d(p);else if(t==="action"){let w=new URL(e.url),E=w.pathname+w.search;throw Ft(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:je.data,data:void 0};else if(p)u=await d(p);else{let w=new URL(e.url),E=w.pathname+w.search;throw Ft(404,{pathname:E})}re(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(p){l=je.error,u=p}finally{c&&e.signal.removeEventListener("abort",c)}if(VI(u)){let p=u.status;if(AI.has(p)){let m=u.headers.get("Location");if(re(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Bw.test(m))m=vh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let h=new URL(e.url),v=m.startsWith("//")?new URL(h.protocol+m):new URL(m),g=Ls(v.pathname,o)!=null;v.origin===h.origin&&g&&(m=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:je.redirect,status:p,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===je.error?je.error:je.data,response:u};let w,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?w=await u.json():w=await u.text(),l===je.error?{type:l,error:new cm(p,u.statusText,w),headers:u.headers}:{type:je.data,data:w,statusCode:u.status,headers:u.headers}}if(l===je.error)return{type:l,error:u};if(WI(u)){var f,y;return{type:je.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:je.data,data:u}}function ao(t,e,n,r){let i=t.createURL(Gw(e)).toString(),s={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=yh(r.formData):s.body=r.formData}return new Request(i,s)}function yh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function dy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function zI(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(re(!us(c),"Cannot handle redirect results in processLoaderData"),Mo(c)){let y=Xi(t,f),p=c.error;r&&(p=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=p),s[f]=void 0,l||(l=!0,a=Ww(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else ei(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function fy(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=zI(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:y}=s[c];re(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let p=o[c];if(!(y&&y.signal.aborted))if(Mo(p)){let w=Xi(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=Te({},u,{[w.route.id]:p.error})),t.fetchers.delete(d)}else if(us(p))re(!1,"Unhandled fetcher revalidation redirect");else if(ei(p))re(!1,"Unhandled fetcher deferred data");else{let w=Fi(p.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function hy(t,e,n,r){let i=Te({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Xi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function py(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ft(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new cm(t||500,o,new Error(a),!0)}function my(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(us(n))return{result:n,idx:e}}}function Gw(t){let e=typeof t=="string"?Cn(t):t;return gi(Te({},e,{hash:""}))}function $I(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ei(t){return t.type===je.deferred}function Mo(t){return t.type===je.error}function us(t){return(t&&t.type)===je.redirect}function WI(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function VI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function BI(t){return PI.has(t.toLowerCase())}function Qt(t){return NI.has(t.toLowerCase())}async function gy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!Hw(u,l)&&(s&&s[l.route.id])!==void 0;if(ei(a)&&(i||c)){let d=r[o];re(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await qw(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function qw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:je.data,data:t.deferredData.unwrappedData}}catch(i){return{type:je.error,error:i}}return{type:je.data,data:t.deferredData.data}}}function dm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function HI(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function _h(t,e){let n=typeof e=="string"?Cn(e).search:e.search;if(t[t.length-1].route.index&&dm(n||""))return t[t.length-1];let r=Oc(t);return r[r.length-1]}function vy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Nl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function GI(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function lo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function qI(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Fi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Du(){return Du=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Du.apply(this,arguments)}const Mc=C.createContext(null),Yw=C.createContext(null),Fs=C.createContext(null),Dc=C.createContext(null),Ri=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Kw=C.createContext(null);function YI(t,e){let{relative:n}=e===void 0?{}:e;Va()||re(!1);let{basename:r,navigator:i}=C.useContext(Fs),{hash:s,pathname:o,search:a}=Xw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ln([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Va(){return C.useContext(Dc)!=null}function Lc(){return Va()||re(!1),C.useContext(Dc).location}function Qw(t){C.useContext(Fs).static||C.useLayoutEffect(t)}function Ba(){let{isDataRoute:t}=C.useContext(Ri);return t?sT():KI()}function KI(){Va()||re(!1);let t=C.useContext(Mc),{basename:e,navigator:n}=C.useContext(Fs),{matches:r}=C.useContext(Ri),{pathname:i}=Lc(),s=JSON.stringify(Oc(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return Qw(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=um(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ln([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Xw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(Ri),{pathname:i}=Lc(),s=JSON.stringify(Oc(r).map(o=>o.pathnameBase));return C.useMemo(()=>um(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function QI(t,e,n){Va()||re(!1);let{navigator:r}=C.useContext(Fs),{matches:i}=C.useContext(Ri),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Lc(),u;if(e){var c;let w=typeof e=="string"?Cn(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||re(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",y=Qi(t,{pathname:f}),p=tT(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Ln([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Ln([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&p?C.createElement(Dc.Provider,{value:{location:Du({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ze.Pop}},p):p}function XI(){let t=eE(),e=Ww(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const JI=C.createElement(XI,null);class ZI extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Ri.Provider,{value:this.props.routeContext},C.createElement(Kw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eT(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Mc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ri.Provider,{value:e},r)}function tT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||JI);let f=e.concat(s.slice(0,u+1)),y=()=>{let p;return c?p=d:l.route.Component?p=C.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,C.createElement(eT,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(ZI,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var Jw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jw||{}),Lu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Lu||{});function nT(t){let e=C.useContext(Mc);return e||re(!1),e}function rT(t){let e=C.useContext(Yw);return e||re(!1),e}function iT(t){let e=C.useContext(Ri);return e||re(!1),e}function Zw(t){let e=iT(),n=e.matches[e.matches.length-1];return n.route.id||re(!1),n.route.id}function eE(){var t;let e=C.useContext(Kw),n=rT(Lu.UseRouteError),r=Zw(Lu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function sT(){let{router:t}=nT(Jw.UseNavigateStable),e=Zw(Lu.UseNavigateStable),n=C.useRef(!1);return Qw(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Du({fromRouteId:e},s)))},[t,e])}const oT="startTransition",yy=Kb[oT];function aT(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=C.useState(n.state),{v7_startTransition:o}=r||{},a=C.useCallback(d=>{o&&yy?yy(()=>s(d)):s(d)},[s,o]);C.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,y)=>n.navigate(d,{state:f,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(d,f,y)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),u=n.basename||"/",c=C.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return C.createElement(C.Fragment,null,C.createElement(Mc.Provider,{value:c},C.createElement(Yw.Provider,{value:i},C.createElement(uT,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?C.createElement(lT,{routes:n.routes,state:i}):e))),null)}function lT(t){let{routes:e,state:n}=t;return QI(e,void 0,n)}function uT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ze.Pop,navigator:s,static:o=!1}=t;Va()&&re(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:y="default"}=r,p=C.useMemo(()=>{let w=Ls(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:y},navigationType:i}},[a,u,c,d,f,y,i]);return p==null?null:C.createElement(Fs.Provider,{value:l},C.createElement(Dc.Provider,{children:n,value:p}))}new Promise(()=>{});function cT(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:C.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ca.apply(this,arguments)}function dT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hT(t,e){return t.button===0&&(!e||e==="_self")&&!fT(t)}const pT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function mT(t,e){return LI({basename:e==null?void 0:e.basename,future:ca({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:sI({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||gT(),routes:t,mapRouteProperties:cT}).initialize()}function gT(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ca({},e,{errors:vT(e.errors)})),e}function vT(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new cm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const yT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,da=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=dT(e,pT),{basename:f}=C.useContext(Fs),y,p=!1;if(typeof u=="string"&&_T.test(u)&&(y=u,yT))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),g=Ls(v.pathname,f);v.origin===h.origin&&g!=null?u=g+v.search+v.hash:p=!0}catch{}let w=YI(u,{relative:i}),E=wT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(h){r&&r(h),h.defaultPrevented||E(h)}return C.createElement("a",ca({},d,{href:y||w,onClick:p||s?r:m,ref:n,target:l}))});var _y;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(_y||(_y={}));var wy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wy||(wy={}));function wT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ba(),l=Lc(),u=Xw(t,{relative:o});return C.useCallback(c=>{if(hT(c,n)){c.preventDefault();let d=r!==void 0?r:gi(l)===gi(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function ET(){return _.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[_.jsx("p",{className:"font-bold text-2xl",children:"Email Verification"}),_.jsx("p",{className:"",children:"You should have received a verification email. If you did not receive one, consider signing up again."}),_.jsx(da,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page"})]})}function ST(){return _.jsxs(_.Fragment,{children:[_.jsx("p",{children:"I forgor"}),_.jsx("p",{children:"This page is being build. If you forgot your password, send me an email at vincentmingli@gmail.com"})]})}var CT={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},bT={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},tE=bT,kT={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},xT={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},IT={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},TT=IT,NT={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},RT=NT,PT={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},AT=PT;function Ey(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ey(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fu(t){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fu(t)}function OT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function MT(t,e,n){return e&&Sy(t.prototype,e),n&&Sy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fm(t,e){return LT(t)||jT(t,e)||nE(t,e)||zT()}function Ha(t){return DT(t)||FT(t)||nE(t)||UT()}function DT(t){if(Array.isArray(t))return wh(t)}function LT(t){if(Array.isArray(t))return t}function FT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function nE(t,e){if(t){if(typeof t=="string")return wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wh(t,e)}}function wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function UT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cy=function(){},hm={},rE={},iE=null,sE={mark:Cy,measure:Cy};try{typeof window<"u"&&(hm=window),typeof document<"u"&&(rE=document),typeof MutationObserver<"u"&&(iE=MutationObserver),typeof performance<"u"&&(sE=performance)}catch{}var $T=hm.navigator||{},by=$T.userAgent,ky=by===void 0?"":by,Mr=hm,xe=rE,xy=iE,Rl=sE;Mr.document;var Qn=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",oE=~ky.indexOf("MSIE")||~ky.indexOf("Trident/"),Pl,Al,Ol,Ml,Dl,Vn="___FONT_AWESOME___",Eh=16,aE="fa",lE="svg-inline--fa",vi="data-fa-i2svg",Sh="data-fa-pseudo-element",WT="data-fa-pseudo-element-pending",pm="data-prefix",mm="data-icon",Iy="fontawesome-i2svg",VT="async",BT=["HTML","HEAD","STYLE","SCRIPT"],uE=function(){try{return!0}catch{return!1}}(),be="classic",Me="sharp",gm=[be,Me];function Ga(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var fa=Ga((Pl={},Ge(Pl,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(Pl,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Pl)),ha=Ga((Al={},Ge(Al,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(Al,Me,{solid:"fass",regular:"fasr",light:"fasl"}),Al)),pa=Ga((Ol={},Ge(Ol,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(Ol,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ol)),HT=Ga((Ml={},Ge(Ml,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(Ml,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ml)),GT=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,cE="fa-layers-text",qT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,YT=Ga((Dl={},Ge(Dl,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(Dl,Me,{900:"fass",400:"fasr",300:"fasl"}),Dl)),dE=[1,2,3,4,5,6,7,8,9,10],KT=dE.concat([11,12,13,14,15,16,17,18,19,20]),QT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ti={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ma=new Set;Object.keys(ha[be]).map(ma.add.bind(ma));Object.keys(ha[Me]).map(ma.add.bind(ma));var XT=[].concat(gm,Ha(ma),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ti.GROUP,ti.SWAP_OPACITY,ti.PRIMARY,ti.SECONDARY]).concat(dE.map(function(t){return"".concat(t,"x")})).concat(KT.map(function(t){return"w-".concat(t)})),Do=Mr.FontAwesomeConfig||{};function JT(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ZT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var e2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];e2.forEach(function(t){var e=fm(t,2),n=e[0],r=e[1],i=ZT(JT(n));i!=null&&(Do[r]=i)})}var fE={styleDefault:"solid",familyDefault:"classic",cssPrefix:aE,replacementClass:lE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Do.familyPrefix&&(Do.cssPrefix=Do.familyPrefix);var xs=D(D({},fE),Do);xs.autoReplaceSvg||(xs.observeMutations=!1);var z={};Object.keys(fE).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){xs[t]=n,Lo.forEach(function(r){return r(z)})},get:function(){return xs[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){xs.cssPrefix=e,Lo.forEach(function(n){return n(z)})},get:function(){return xs.cssPrefix}});Mr.FontAwesomeConfig=z;var Lo=[];function t2(t){return Lo.push(t),function(){Lo.splice(Lo.indexOf(t),1)}}var rr=Eh,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function n2(t){if(!(!t||!Qn)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return xe.head.insertBefore(e,r),t}}var r2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ga(){for(var t=12,e="";t-- >0;)e+=r2[Math.random()*62|0];return e}function js(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vm(t){return t.classList?js(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function hE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(hE(t[n]),'" ')},"").trim()}function Fc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ym(t){return t.size!==gn.size||t.x!==gn.x||t.y!==gn.y||t.rotate!==gn.rotate||t.flipX||t.flipY}function s2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function o2(t){var e=t.transform,n=t.width,r=n===void 0?Eh:n,i=t.height,s=i===void 0?Eh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&oE?l+="translate(".concat(e.x/rr-r/2,"em, ").concat(e.y/rr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/rr,"em), calc(-50% + ").concat(e.y/rr,"em)) "):l+="translate(".concat(e.x/rr,"em, ").concat(e.y/rr,"em) "),l+="scale(".concat(e.size/rr*(e.flipX?-1:1),", ").concat(e.size/rr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var a2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pE(){var t=aE,e=lE,n=z.cssPrefix,r=z.replacementClass,i=a2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ty=!1;function Yd(){z.autoAddCss&&!Ty&&(n2(pE()),Ty=!0)}var l2={mixout:function(){return{dom:{css:pE,insertCss:Yd}}},hooks:function(){return{beforeDOMElementCreation:function(){Yd()},beforeI2svg:function(){Yd()}}}},Bn=Mr||{};Bn[Vn]||(Bn[Vn]={});Bn[Vn].styles||(Bn[Vn].styles={});Bn[Vn].hooks||(Bn[Vn].hooks={});Bn[Vn].shims||(Bn[Vn].shims=[]);var en=Bn[Vn],mE=[],u2=function t(){xe.removeEventListener("DOMContentLoaded",t),ju=1,mE.map(function(e){return e()})},ju=!1;Qn&&(ju=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),ju||xe.addEventListener("DOMContentLoaded",u2));function c2(t){Qn&&(ju?setTimeout(t,0):mE.push(t))}function qa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?hE(t):"<".concat(e," ").concat(i2(r),">").concat(s.map(qa).join(""),"</").concat(e,">")}function Ny(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var d2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Kd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?d2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function f2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ch(t){var e=f2(t);return e.length===1?e[0].toString(16):null}function h2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ry(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function bh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ry(e);typeof en.hooks.addPack=="function"&&!i?en.hooks.addPack(t,Ry(e)):en.styles[t]=D(D({},en.styles[t]||{}),s),t==="fas"&&bh("fa",e)}var Ll,Fl,jl,Ji=en.styles,p2=en.shims,m2=(Ll={},Ge(Ll,be,Object.values(pa[be])),Ge(Ll,Me,Object.values(pa[Me])),Ll),_m=null,gE={},vE={},yE={},_E={},wE={},g2=(Fl={},Ge(Fl,be,Object.keys(fa[be])),Ge(Fl,Me,Object.keys(fa[Me])),Fl);function v2(t){return~XT.indexOf(t)}function y2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!v2(i)?i:null}var EE=function(){var e=function(s){return Kd(Ji,function(o,a,l){return o[l]=Kd(a,s,{}),o},{})};gE=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),vE=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),wE=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ji||z.autoFetchSvg,r=Kd(p2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});yE=r.names,_E=r.unicodes,_m=jc(z.styleDefault,{family:z.familyDefault})};t2(function(t){_m=jc(t.styleDefault,{family:z.familyDefault})});EE();function wm(t,e){return(gE[t]||{})[e]}function _2(t,e){return(vE[t]||{})[e]}function ni(t,e){return(wE[t]||{})[e]}function SE(t){return yE[t]||{prefix:null,iconName:null}}function w2(t){var e=_E[t],n=wm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return _m}var Em=function(){return{prefix:null,iconName:null,rest:[]}};function jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=fa[r][t],s=ha[r][t]||ha[r][i],o=t in en.styles?t:null;return s||o||null}var Py=(jl={},Ge(jl,be,Object.keys(pa[be])),Ge(jl,Me,Object.keys(pa[Me])),jl);function Uc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ge(e,be,"".concat(z.cssPrefix,"-").concat(be)),Ge(e,Me,"".concat(z.cssPrefix,"-").concat(Me)),e),o=null,a=be;(t.includes(s[be])||t.some(function(u){return Py[be].includes(u)}))&&(a=be),(t.includes(s[Me])||t.some(function(u){return Py[Me].includes(u)}))&&(a=Me);var l=t.reduce(function(u,c){var d=y2(z.cssPrefix,c);if(Ji[c]?(c=m2[a].includes(c)?HT[a][c]:c,o=c,u.prefix=c):g2[a].indexOf(c)>-1?(o=c,u.prefix=jc(c,{family:a})):d?u.iconName=d:c!==z.replacementClass&&c!==s[be]&&c!==s[Me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?SE(u.iconName):{},y=ni(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||y||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Ji.far&&Ji.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Em());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(Ji.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ni(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Dr()||"fas"),l}var E2=function(){function t(){OT(this,t),this.definitions={}}return MT(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),bh(a,o[a]);var l=pa[be][a];l&&bh(l,o[a]),EE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Ay=[],Zi={},cs={},S2=Object.keys(cs);function C2(t,e){var n=e.mixoutsTo;return Ay=t,Zi={},Object.keys(cs).forEach(function(r){S2.indexOf(r)===-1&&delete cs[r]}),Ay.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Fu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Zi[o]||(Zi[o]=[]),Zi[o].push(s[o])})}r.provides&&r.provides(cs)}),n}function kh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Zi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function yi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Zi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Hn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return cs[t]?cs[t].apply(null,e):void 0}function xh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Dr();if(e)return e=ni(n,e)||e,Ny(CE.definitions,n,e)||Ny(en.styles,n,e)}var CE=new E2,b2=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,yi("noAuto")},k2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qn?(yi("beforeI2svg",e),Hn("pseudoElements2svg",e),Hn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,c2(function(){I2({autoReplaceSvgRoot:n}),yi("watch",e)})}},x2={icon:function(e){if(e===null)return null;if(Fu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ni(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=jc(e[0]);return{prefix:r,iconName:ni(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(GT))){var i=Uc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Dr(),iconName:ni(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Dr();return{prefix:s,iconName:ni(s,e)||e}}}},Lt={noAuto:b2,config:z,dom:k2,parse:x2,library:CE,findIconDefinition:xh,toHtml:qa},I2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(en.styles).length>0||z.autoFetchSvg)&&Qn&&z.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return qa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Qn){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function T2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(ym(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Fc(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function N2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function Sm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,y=f===void 0?!1:f,p=r.found?r:n,w=p.width,E=p.height,m=i==="fak",h=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),v={children:[],attributes:D(D({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},g=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};y&&(v.attributes[vi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||ga())},children:[l]}),delete v.attributes.title);var S=D(D({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},g),d.styles)}),I=r.found&&n.found?Hn("generateAbstractMask",S)||{children:[],attributes:{}}:Hn("generateAbstractIcon",S)||{children:[],attributes:{}},x=I.children,A=I.attributes;return S.children=x,S.attributes=A,a?N2(S):T2(S)}function Oy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[vi]="");var c=D({},o.styles);ym(i)&&(c.transform=o2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Fc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function R2(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Fc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qd=en.styles;function Ih(t){var e=t[0],n=t[1],r=t.slice(4),i=fm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(ti.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ti.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ti.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var P2={found:!1,width:512,height:512};function A2(t,e){!uE&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Th(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Dr()),new Promise(function(r,i){if(Hn("missingIconAbstract"),n==="fa"){var s=SE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Qd[e]&&Qd[e][t]){var o=Qd[e][t];return r(Ih(o))}A2(t,e),r(D(D({},P2),{},{icon:z.showMissingIcons&&t?Hn("missingIconAbstract")||{}:{}}))})}var My=function(){},Nh=z.measurePerformance&&Rl&&Rl.mark&&Rl.measure?Rl:{mark:My,measure:My},Eo='FA "6.4.0"',O2=function(e){return Nh.mark("".concat(Eo," ").concat(e," begins")),function(){return bE(e)}},bE=function(e){Nh.mark("".concat(Eo," ").concat(e," ends")),Nh.measure("".concat(Eo," ").concat(e),"".concat(Eo," ").concat(e," begins"),"".concat(Eo," ").concat(e," ends"))},Cm={begin:O2,end:bE},ru=function(){};function Dy(t){var e=t.getAttribute?t.getAttribute(vi):null;return typeof e=="string"}function M2(t){var e=t.getAttribute?t.getAttribute(pm):null,n=t.getAttribute?t.getAttribute(mm):null;return e&&n}function D2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function L2(){if(z.autoReplaceSvg===!0)return iu.replace;var t=iu[z.autoReplaceSvg];return t||iu.replace}function F2(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function j2(t){return xe.createElement(t)}function kE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?F2:j2:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(kE(o,{ceFn:r}))}),i}function U2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var iu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(kE(i),n)}),n.getAttribute(vi)===null&&z.keepOriginalSource){var r=xe.createComment(U2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~vm(n).indexOf(z.replacementClass))return iu.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return qa(a)}).join(`
`);n.setAttribute(vi,""),n.innerHTML=o}};function Ly(t){t()}function xE(t,e){var n=typeof e=="function"?e:ru;if(t.length===0)n();else{var r=Ly;z.mutateApproach===VT&&(r=Mr.requestAnimationFrame||Ly),r(function(){var i=L2(),s=Cm.begin("mutate");t.map(i),s(),n()})}}var bm=!1;function IE(){bm=!0}function Rh(){bm=!1}var Uu=null;function Fy(t){if(xy&&z.observeMutations){var e=t.treeCallback,n=e===void 0?ru:e,r=t.nodeCallback,i=r===void 0?ru:r,s=t.pseudoElementsCallback,o=s===void 0?ru:s,a=t.observeMutationsRoot,l=a===void 0?xe:a;Uu=new xy(function(u){if(!bm){var c=Dr();js(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Dy(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Dy(d.target)&&~QT.indexOf(d.attributeName))if(d.attributeName==="class"&&M2(d.target)){var f=Uc(vm(d.target)),y=f.prefix,p=f.iconName;d.target.setAttribute(pm,y||c),p&&d.target.setAttribute(mm,p)}else D2(d.target)&&i(d.target)})}}),Qn&&Uu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function z2(){Uu&&Uu.disconnect()}function $2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function W2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Uc(vm(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=_2(i.prefix,t.innerText)||wm(i.prefix,Ch(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function V2(t){var e=js(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||ga()):(e["aria-hidden"]="true",e.focusable="false")),e}function B2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=W2(t),r=n.iconName,i=n.prefix,s=n.rest,o=V2(t),a=kh("parseNodeAttributes",{},t),l=e.styleParser?$2(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var H2=en.styles;function TE(t){var e=z.autoReplaceSvg==="nest"?jy(t,{styleParser:!1}):jy(t);return~e.extra.classes.indexOf(cE)?Hn("generateLayersText",t,e):Hn("generateSvgReplacementMutation",t,e)}var Lr=new Set;gm.map(function(t){Lr.add("fa-".concat(t))});Object.keys(fa[be]).map(Lr.add.bind(Lr));Object.keys(fa[Me]).map(Lr.add.bind(Lr));Lr=Ha(Lr);function Uy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qn)return Promise.resolve();var n=xe.documentElement.classList,r=function(d){return n.add("".concat(Iy,"-").concat(d))},i=function(d){return n.remove("".concat(Iy,"-").concat(d))},s=z.autoFetchSvg?Lr:gm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(H2));s.includes("fa")||s.push("fa");var o=[".".concat(cE,":not([").concat(vi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(vi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=js(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Cm.begin("onTree"),u=a.reduce(function(c,d){try{var f=TE(d);f&&c.push(f)}catch(y){uE||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){xE(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function G2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;TE(t).then(function(n){n&&xE([n],e)})}function q2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:xh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:xh(i||{})),t(r,D(D({},n),{},{mask:i}))}}var Y2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?gn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,y=n.titleId,p=y===void 0?null:y,w=n.classes,E=w===void 0?[]:w,m=n.attributes,h=m===void 0?{}:m,v=n.styles,g=v===void 0?{}:v;if(e){var S=e.prefix,I=e.iconName,x=e.icon;return zc(D({type:"icon"},e),function(){return yi("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(p||ga()):(h["aria-hidden"]="true",h.focusable="false")),Sm({icons:{main:Ih(x),mask:l?Ih(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:I,transform:D(D({},gn),i),symbol:o,title:f,maskId:c,titleId:p,extra:{attributes:h,styles:g,classes:E}})})}},K2={mixout:function(){return{icon:q2(Y2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Uy,n.nodeCallback=G2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,s=n.callback,o=s===void 0?function(){}:s;return Uy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(y,p){Promise.all([Th(i,a),c.iconName?Th(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=fm(w,2),m=E[0],h=E[1];y([n,Sm({icons:{main:m,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Fc(a);l.length>0&&(i.style=l);var u;return ym(o)&&(u=Hn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Q2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return zc({type:"layer"},function(){yi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Ha(s)).join(" ")},children:o}]})}}}},X2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return zc({type:"counter",content:n},function(){return yi("beforeDOMElementCreation",{content:n,params:r}),R2({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Ha(a))}})})}}}},J2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?gn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,y=f===void 0?{}:f;return zc({type:"text",content:n},function(){return yi("beforeDOMElementCreation",{content:n,params:r}),Oy({content:n,transform:D(D({},gn),s),title:a,extra:{attributes:d,styles:y,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Ha(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(oE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Oy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Z2=new RegExp('"',"ug"),zy=[1105920,1112319];function eN(t){var e=t.replace(Z2,""),n=h2(e,0),r=n>=zy[0]&&n<=zy[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ch(i?e[0]:e),isSecondary:r||i}}function $y(t,e){var n="".concat(WT).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=js(t.children),o=s.filter(function(x){return x.getAttribute(Sh)===e})[0],a=Mr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(qT),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Me:be,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ha[f][l[2].toLowerCase()]:YT[f][u],p=eN(d),w=p.value,E=p.isSecondary,m=l[0].startsWith("FontAwesome"),h=wm(y,w),v=h;if(m){var g=w2(w);g.iconName&&g.prefix&&(h=g.iconName,y=g.prefix)}if(h&&!E&&(!o||o.getAttribute(pm)!==y||o.getAttribute(mm)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var S=B2(),I=S.extra;I.attributes[Sh]=e,Th(h,y).then(function(x){var A=Sm(D(D({},S),{},{icons:{main:x,mask:Em()},prefix:y,iconName:v,extra:I,watchable:!0})),M=xe.createElement("svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=A.map(function(L){return qa(L)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function tN(t){return Promise.all([$y(t,"::before"),$y(t,"::after")])}function nN(t){return t.parentNode!==document.head&&!~BT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Sh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wy(t){if(Qn)return new Promise(function(e,n){var r=js(t.querySelectorAll("*")).filter(nN).map(tN),i=Cm.begin("searchPseudoElements");IE(),Promise.all(r).then(function(){i(),Rh(),e()}).catch(function(){i(),Rh(),n()})})}var rN={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;z.searchPseudoElements&&Wy(i)}}},Vy=!1,iN={mixout:function(){return{dom:{unwatch:function(){IE(),Vy=!0}}}},hooks:function(){return{bootstrap:function(){Fy(kh("mutationObserverCallbacks",{}))},noAuto:function(){z2()},watch:function(n){var r=n.observeMutationsRoot;Vy?Rh():Fy(kh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},By=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},sN={mixout:function(){return{parse:{transform:function(n){return By(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=By(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:d,path:f};return{tag:"g",attributes:D({},y.outer),children:[{tag:"g",attributes:D({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),y.path)}]}]}}}},Xd={x:0,y:0,width:"100%",height:"100%"};function Hy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oN(t){return t.tag==="g"?t.children:[t]}var aN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Uc(i.split(" ").map(function(o){return o.trim()})):Em();return s.prefix||(s.prefix=Dr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,y=s2({transform:l,containerWidth:d,iconWidth:u}),p={tag:"rect",attributes:D(D({},Xd),{},{fill:"white"})},w=c.children?{children:c.children.map(Hy)}:{},E={tag:"g",attributes:D({},y.inner),children:[Hy(D({tag:c.tag,attributes:D(D({},c.attributes),y.path)},w))]},m={tag:"g",attributes:D({},y.outer),children:[E]},h="mask-".concat(a||ga()),v="clip-".concat(a||ga()),g={tag:"mask",attributes:D(D({},Xd),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:oN(f)},g]};return r.push(S,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Xd)}),{children:r,attributes:i}}}},lN={provides:function(e){var n=!1;Mr.matchMedia&&(n=Mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},uN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},cN=[l2,K2,Q2,X2,J2,rN,iN,sN,aN,lN,uN];C2(cN,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Ph=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var dN=Lt.icon;Lt.layer;Lt.text;Lt.counter;var NE={exports:{}},fN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hN=fN,pN=hN;function RE(){}function PE(){}PE.resetWarningCache=RE;var mN=function(){function t(r,i,s,o,a,l){if(l!==pN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:PE,resetWarningCache:RE};return n.PropTypes=n,n};NE.exports=mN();var gN=NE.exports;const ne=k0(gN);function Gy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gy(Object(n),!0).forEach(function(r){es(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zu(t){"@babel/helpers - typeof";return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zu(t)}function es(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yN(t,e){if(t==null)return{};var n=vN(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ah(t){return _N(t)||wN(t)||EN(t)||SN()}function _N(t){if(Array.isArray(t))return Oh(t)}function wN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function EN(t,e){if(t){if(typeof t=="string")return Oh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oh(t,e)}}function Oh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function SN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CN(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,y=t.inverse,p=t.border,w=t.listItem,E=t.flip,m=t.size,h=t.rotation,v=t.pull,g=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":y,"fa-border":p,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},es(e,"fa-".concat(m),typeof m<"u"&&m!==null),es(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),es(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),es(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(g).map(function(S){return g[S]?S:null}).filter(function(S){return S})}function bN(t){return t=t-0,t===t}function AE(t){return bN(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var kN=["style"];function xN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function IN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=AE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[xN(i)]=s:e[i]=s,e},{})}function OE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return OE(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=IN(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[AE(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=yN(n,kN);return i.attrs.style=gr(gr({},i.attrs.style),o),t.apply(void 0,[e.tag,gr(gr({},i.attrs),a)].concat(Ah(r)))}var ME=!1;try{ME=!0}catch{}function TN(){if(!ME&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qy(t){if(t&&zu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ph.icon)return Ph.icon(t);if(t===null)return null;if(t&&zu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Jd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?es({},t,e):{}}var dn=vc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=qy(n),c=Jd("classes",[].concat(Ah(CN(t)),Ah(s.split(" ")))),d=Jd("transform",typeof t.transform=="string"?Ph.transform(t.transform):t.transform),f=Jd("mask",qy(r)),y=dN(u,gr(gr(gr(gr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!y)return TN("Could not find icon",u),null;var p=y.abstract,w={ref:e};return Object.keys(t).forEach(function(E){dn.defaultProps.hasOwnProperty(E)||(w[E]=t[E])}),NN(p[0],w)});dn.displayName="FontAwesomeIcon";dn.propTypes={beat:ne.bool,border:ne.bool,beatFade:ne.bool,bounce:ne.bool,className:ne.string,fade:ne.bool,flash:ne.bool,mask:ne.oneOfType([ne.object,ne.array,ne.string]),maskId:ne.string,fixedWidth:ne.bool,inverse:ne.bool,flip:ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ne.oneOfType([ne.object,ne.array,ne.string]),listItem:ne.bool,pull:ne.oneOf(["right","left"]),pulse:ne.bool,rotation:ne.oneOf([0,90,180,270]),shake:ne.bool,size:ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ne.bool,spinPulse:ne.bool,spinReverse:ne.bool,symbol:ne.oneOfType([ne.bool,ne.string]),title:ne.string,titleId:ne.string,transform:ne.oneOfType([ne.string,ne.object]),swapOpacity:ne.bool};dn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var NN=OE.bind(null,vc.createElement);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw Us(e)},Us=function(t){return new Error("Firebase Database ("+DE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[c],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new PN;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FE=function(t){const e=LE(t);return km.encodeByteArray(e,!0)},$u=function(t){return FE(t).replace(/\./g,"")},Wu=function(t){try{return km.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){return jE(void 0,t)}function jE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ON(n)||(t[n]=jE(t[n],e[n]));return t}function ON(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=()=>MN().__FIREBASE_DEFAULTS__,LN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wu(t[1]);return e&&JSON.parse(e)},xm=()=>{try{return DN()||LN()||FN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},UE=t=>{var e,n;return(n=(e=xm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jN=t=>{const e=UE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zE=()=>{var t;return(t=xm())===null||t===void 0?void 0:t.config},$E=t=>{var e;return(e=xm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$u(JSON.stringify(n)),$u(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function zN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $N(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VE(){return DE.NODE_ADMIN===!0}function WN(){try{return typeof indexedDB=="object"}catch{return!1}}function VN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="FirebaseError";class Wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BN,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wr(i,a,r)}}function HN(t,e){return t.replace(GN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=va(Wu(s[0])||""),n=va(Wu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qN=function(t){const e=BE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YN=function(t){const e=BE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Is(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Bu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yy(s)&&Yy(o)){if(!Bu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function So(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function QN(t,e){const n=new XN(t,e);return n.subscribe.bind(n)}class XN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zd),i.error===void 0&&(i.error=Zd),i.complete===void 0&&(i.complete=Zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}function Tm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class _i{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $c;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nR(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tR(t){return t===Kr?void 0:t}function nR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const iR={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},sR=ge.INFO,oR={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},aR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nm{constructor(e){this.name=e,this._logLevel=sR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const lR=(t,e)=>e.some(n=>t instanceof n);let Ky,Qy;function uR(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cR(){return Qy||(Qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HE=new WeakMap,Dh=new WeakMap,GE=new WeakMap,ef=new WeakMap,Rm=new WeakMap;function dR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HE.set(n,t)}).catch(()=>{}),Rm.set(e,t),e}function fR(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dh.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||GE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){Lh=t(Lh)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return GE.set(r,e.sort?e.sort():[e]),Ir(r)}:cR().includes(t)?function(...e){return t.apply(tf(this),e),Ir(HE.get(this))}:function(...e){return Ir(t.apply(tf(this),e))}}function mR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&fR(t),lR(t,uR())?new Proxy(t,Lh):t)}function Ir(t){if(t instanceof IDBRequest)return dR(t);if(ef.has(t))return ef.get(t);const e=mR(t);return e!==t&&(ef.set(t,e),Rm.set(e,t)),e}const tf=t=>Rm.get(t);function gR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vR=["get","getKey","getAll","getAllKeys","count"],yR=["put","add","delete","clear"],nf=new Map;function Xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return nf.set(e,s),s}hR(t=>({...t,get:(e,n,r)=>Xy(e,n)||t.get(e,n,r),has:(e,n)=>!!Xy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",Jy="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Nm("@firebase/app"),ER="@firebase/app-compat",SR="@firebase/analytics-compat",CR="@firebase/analytics",bR="@firebase/app-check-compat",kR="@firebase/app-check",xR="@firebase/auth",IR="@firebase/auth-compat",TR="@firebase/database",NR="@firebase/database-compat",RR="@firebase/functions",PR="@firebase/functions-compat",AR="@firebase/installations",OR="@firebase/installations-compat",MR="@firebase/messaging",DR="@firebase/messaging-compat",LR="@firebase/performance",FR="@firebase/performance-compat",jR="@firebase/remote-config",UR="@firebase/remote-config-compat",zR="@firebase/storage",$R="@firebase/storage-compat",WR="@firebase/firestore",VR="@firebase/firestore-compat",BR="firebase",HR="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="[DEFAULT]",GR={[Fh]:"fire-core",[ER]:"fire-core-compat",[CR]:"fire-analytics",[SR]:"fire-analytics-compat",[kR]:"fire-app-check",[bR]:"fire-app-check-compat",[xR]:"fire-auth",[IR]:"fire-auth-compat",[TR]:"fire-rtdb",[NR]:"fire-rtdb-compat",[RR]:"fire-fn",[PR]:"fire-fn-compat",[AR]:"fire-iid",[OR]:"fire-iid-compat",[MR]:"fire-fcm",[DR]:"fire-fcm-compat",[LR]:"fire-perf",[FR]:"fire-perf-compat",[jR]:"fire-rc",[UR]:"fire-rc-compat",[zR]:"fire-gcs",[$R]:"fire-gcs-compat",[WR]:"fire-fst",[VR]:"fire-fst-compat","fire-js":"fire-js",[BR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map,Uh=new Map;function qR(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(Uh.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of Hu.values())qR(n,t);return!0}function Pm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tr=new Ya("app","Firebase",YR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=HR;function qE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=zE()),!n)throw Tr.create("no-options");const s=Hu.get(i);if(s){if(Bu(n,s.options)&&Bu(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new rR(i);for(const l of Uh.values())o.addComponent(l);const a=new KR(n,r,o);return Hu.set(i,a),a}function YE(t=jh){const e=Hu.get(t);if(!e&&t===jh&&zE())return qE();if(!e)throw Tr.create("no-app",{appName:t});return e}function Nr(t,e,n){var r;let i=(r=GR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Ts(new _i(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="firebase-heartbeat-database",XR=1,ya="firebase-heartbeat-store";let rf=null;function KE(){return rf||(rf=gR(QR,XR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ya)}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),rf}async function JR(t){try{return await(await KE()).transaction(ya).objectStore(ya).get(QE(t))}catch(e){if(e instanceof Wr)wi.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function Zy(t,e){try{const r=(await KE()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,QE(t)),await r.done}catch(n){if(n instanceof Wr)wi.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=1024,eP=30*24*60*60*1e3;class tP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=eP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=e_(),{heartbeatsToSend:n,unsentEntries:r}=nP(this._heartbeatsCache.heartbeats),i=$u(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e_(){return new Date().toISOString().substring(0,10)}function nP(t,e=ZR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),t_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WN()?VN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function t_(t){return $u(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){Ts(new _i("platform-logger",e=>new _R(e),"PRIVATE")),Ts(new _i("heartbeat",e=>new tP(e),"PRIVATE")),Nr(Fh,Jy,t),Nr(Fh,Jy,"esm2017"),Nr("fire-js","")}iP("");var sP="firebase",oP="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nr(sP,oP,"app");function Am(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function n_(t){return t!==void 0&&t.enterprise!==void 0}class aP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function XE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lP=XE,JE=new Ya("auth","Firebase",XE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Nm("@firebase/auth");function uP(t,...e){Gu.logLevel<=ge.WARN&&Gu.warn(`Auth (${$s}): ${t}`,...e)}function su(t,...e){Gu.logLevel<=ge.ERROR&&Gu.error(`Auth (${$s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Om(t,...e)}function _n(t,...e){return Om(t,...e)}function cP(t,e,n){const r=Object.assign(Object.assign({},lP()),{[e]:n});return new Ya("auth","Firebase",r).create(e,{appName:t.name})}function Om(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function H(t,e,...n){if(!t)throw Om(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw su(e),new Error(e)}function Gn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dP(){return r_()==="http:"||r_()==="https:"}function r_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dP()||zN()||"connection"in navigator)?navigator.onLine:!0}function hP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Im()||WE()}get(){return fP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=new Ka(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return eS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ZE.fetch()(tS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function eS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pP),e);try{const i=new gP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ul(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ul(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cP(t,c,u);un(t,c)}}catch(i){if(i instanceof Wr)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Qa(t,e,n,r,i={}){const s=await Br(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mm(t.config,i):`${t.config.apiScheme}://${i}`}class gP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),mP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}async function vP(t,e){return Br(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function _P(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wP(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Dm(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo(sf(i.auth_time)),issuedAtTime:Fo(sf(i.iat)),expirationTime:Fo(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function Dm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return su("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wu(n);return i?JSON.parse(i):(su("Failed to decode base64 JWT payload"),null)}catch(i){return su("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function EP(t){const e=Dm(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wr&&SP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _a(t,_P(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xP(s.providerUserInfo):[],a=kP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function bP(t){const e=vt(t);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xP(t){return t.map(e=>{var{providerId:n}=e,r=Am(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e){const n=await eS(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ZE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wa;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wa,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _a(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wP(this,e)}reload(){return bP(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _a(this,yP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:g,isAnonymous:S,providerData:I,stsTokenManager:x}=n;H(v&&x,e,"internal-error");const A=wa.fromJSON(this.name,x);H(typeof v=="string",e,"internal-error"),ir(d,e.name),ir(f,e.name),H(typeof g=="boolean",e,"internal-error"),H(typeof S=="boolean",e,"internal-error"),ir(y,e.name),ir(p,e.name),ir(w,e.name),ir(E,e.name),ir(m,e.name),ir(h,e.name);const M=new li({uid:v,auth:e,email:f,emailVerified:g,displayName:d,isAnonymous:S,photoURL:p,phoneNumber:y,tenantId:w,stsTokenManager:A,createdAt:m,lastLoginAt:h});return I&&Array.isArray(I)&&(M.providerData=I.map(L=>Object.assign({},L))),E&&(M._redirectEventId=E),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new wa;i.updateFromServerResponse(n);const s=new li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function On(t){Gn(t instanceof Function,"Expected a class definition");let e=i_.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,i_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rS.type="NONE";const s_=rS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ou(this.userKey,i.apiKey,s),this.fullPersistenceKey=ou("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(On(s_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||On(s_);const o=ou(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=li._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ds(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lS(e))return"Blackberry";if(uS(e))return"Webos";if(Lm(e))return"Safari";if((e.includes("chrome/")||sS(e))&&!e.includes("edge/"))return"Chrome";if(aS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iS(t=ct()){return/firefox\//i.test(t)}function Lm(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sS(t=ct()){return/crios\//i.test(t)}function oS(t=ct()){return/iemobile/i.test(t)}function aS(t=ct()){return/android/i.test(t)}function lS(t=ct()){return/blackberry/i.test(t)}function uS(t=ct()){return/webos/i.test(t)}function Vc(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TP(t=ct()){var e;return Vc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NP(){return $N()&&document.documentMode===10}function cS(t=ct()){return Vc(t)||aS(t)||uS(t)||lS(t)||/windows phone/i.test(t)||oS(t)}function RP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t,e=[]){let n;switch(t){case"Browser":n=o_(ct());break;case"Worker":n=`${o_(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return Br(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=6;class MP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new PP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),n=new MP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pi(t){return vt(t)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=QN(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LP().appendChild(r)})}function FP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jP="https://www.google.com/recaptcha/enterprise.js?render=",UP="recaptcha-enterprise",zP="NO_RECAPTCHA";class $P{constructor(e){this.type=UP,this.auth=Pi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new aP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;n_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(zP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&n_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}fS(jP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Yu(t,e,n,r=!1){const i=new $P(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){const n=Pm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bu(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function VP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BP(t,e,n){const r=Pi(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hS(e),{host:o,port:a}=HP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GP()}function hS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HP(t){const e=hS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:l_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:l_(o)}}}function l_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function qP(t,e){return Br(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(t,e){return Qa(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}async function YP(t,e){return Br(t,"POST","/v1/accounts:sendOobCode",Vr(t,e))}async function KP(t,e){return YP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function XP(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Fm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Yu(e,r,"signInWithPassword");return of(e,i)}else return of(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yu(e,r,"signInWithPassword");return of(e,s)}else return Promise.reject(i)});case"emailLink":return QP(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XP(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="http://localhost";class Ei extends Fm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Am(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:JP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eA(t){const e=So(Co(t)).link,n=e?So(Co(e)).deep_link_id:null,r=So(Co(t)).deep_link_id;return(r?So(Co(r)).link:null)||r||n||e||t}class jm{constructor(e){var n,r,i,s,o,a;const l=So(Co(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=ZP((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eA(e);try{return new jm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jm.parseLink(n);return H(r,"argument-error"),Ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends pS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Xa{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Xa{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Xa{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(t,e){return Qa(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await li._fromIdTokenResponse(e,r,i),o=u_(r);return new Si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=u_(r);return new Si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function u_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Wr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ku(e,n,r,i)}}function mS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(t,s,e,r):s})}async function tA(t,e,n=!1){const r=await _a(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _a(t,mS(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Dm(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e,n=!1){const r="signIn",i=await mS(t,r,e),s=await Si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rA(t,e){return gS(Pi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t,e,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t){const e=Pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sA(t,e,n){var r;const i=Pi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Yu(i,s,"signUpPassword");o=af(i,u)}else o=af(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Yu(i,s,"signUpPassword");return af(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vS(t),u}),l=await Si._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function oA(t,e,n){return rA(vt(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vS(t),r})}async function aA(t,e){const n=vt(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&iA(n.auth,i,e);const{email:s}=await KP(n.auth,i);s!==t.email&&await t.reload()}function lA(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function uA(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function Um(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function cA(t){return vt(t).signOut()}const Qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(){const t=ct();return Lm(t)||Vc(t)}const fA=1e3,hA=10;class _S extends yS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dA()&&RP(),this.fallbackToPolling=cS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_S.type="LOCAL";const pA=_S;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS extends yS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wS.type="SESSION";const ES=wS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await mA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=zm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function vA(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function yA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _A(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wA(){return SS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="firebaseLocalStorageDb",EA=1,Xu="firebaseLocalStorage",bS="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function SA(){const t=indexedDB.deleteDatabase(CS);return new Ja(t).toPromise()}function $h(){const t=indexedDB.open(CS,EA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xu,{keyPath:bS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xu)?e(r):(r.close(),await SA(),e(await $h()))})})}async function c_(t,e,n){const r=Hc(t,!0).put({[bS]:e,value:n});return new Ja(r).toPromise()}async function CA(t,e){const n=Hc(t,!1).get(e),r=await new Ja(n).toPromise();return r===void 0?null:r.value}function d_(t,e){const n=Hc(t,!0).delete(e);return new Ja(n).toPromise()}const bA=800,kA=3;class kS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bc._getInstance(wA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yA(),!this.activeServiceWorker)return;this.sender=new gA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await c_(e,Qu,"1"),await d_(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>d_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hc(i,!1).getAll();return new Ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kS.type="LOCAL";const xA=kS;new Ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e){return e?On(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Fm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TA(t){return gS(t.auth,new $m(t),t.bypassAuthState)}function NA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),nA(n,new $m(t),t.bypassAuthState)}async function RA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),tA(n,new $m(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return RA;case"reauthViaPopup":case"reauthViaRedirect":return NA;default:un(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new Ka(2e3,1e4);class ts extends xS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PA.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="pendingRedirect",au=new Map;class OA extends xS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=au.get(this.auth._key());if(!e){try{const r=await MA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}au.set(this.auth._key(),e)}return this.bypassAuthState||au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MA(t,e){const n=FA(e),r=LA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DA(t,e){au.set(t._key(),e)}function LA(t){return On(t._redirectPersistence)}function FA(t){return ou(AA,t.config.apiKey,t.name)}async function jA(t,e,n=!1){const r=Pi(t),i=IA(r,e),o=await new OA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=10*60*1e3;class zA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$A(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!IS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UA&&this.cachedEventUids.clear(),this.cachedEventUids.has(f_(e))}saveEventToCache(e){this.cachedEventUids.add(f_(e)),this.lastProcessedEventTime=Date.now()}}function f_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function IS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $A(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BA=/^https?/;async function HA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WA(t);for(const n of e)try{if(GA(n))return}catch{}un(t,"unauthorized-domain")}function GA(t){const e=zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BA.test(n))return!1;if(VA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new Ka(3e4,6e4);function h_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YA(t){return new Promise((e,n)=>{var r,i,s;function o(){h_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h_(),n(_n(t,"network-request-failed"))},timeout:qA.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=FP("iframefcb");return wn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},fS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lu=null,e})}let lu=null;function KA(t){return lu=lu||YA(t),lu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new Ka(5e3,15e3),XA="__/auth/iframe",JA="emulator/auth/iframe",ZA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tO(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mm(e,JA):`https://${t.config.authDomain}/${XA}`,r={apiKey:e.apiKey,appName:t.name,v:$s},i=eO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zs(r).slice(1)}`}async function nO(t){const e=await KA(t),n=wn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:tO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},QA.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iO=500,sO=600,oO="_blank",aO="http://localhost";class p_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lO(t,e,n,r=iO,i=sO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ct().toLowerCase();n&&(a=sS(u)?oO:n),iS(u)&&(e=e||aO,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[y,p])=>`${f}${y}=${p},`,"");if(TP(u)&&a!=="_self")return uO(e||"",a),new p_(null);const d=window.open(e||"",a,c);H(d,t,"popup-blocked");try{d.focus()}catch{}return new p_(d)}function uO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO="__/auth/handler",dO="emulator/auth/handler",fO=encodeURIComponent("fac");async function m_(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:i};if(e instanceof pS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Xa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${fO}=${encodeURIComponent(l)}`:"";return`${hO(t)}?${zs(a).slice(1)}${u}`}function hO({config:t}){return t.emulator?Mm(t,dO):`https://${t.authDomain}/${cO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="webStorageSupport";class pO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ES,this._completeRedirectFn=jA,this._overrideRedirectResult=DA}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await m_(e,n,r,zh(),i);return lO(e,o,zm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await m_(e,n,r,zh(),i);return vA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nO(e),r=new zA(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lf,{type:lf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lf];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cS()||Lm()||Vc()}}const mO=pO;var g_="@firebase/auth",v_="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yO(t){Ts(new _i("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dS(t)},u=new DP(r,i,s,l);return VP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new _i("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new gO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(g_,v_,vO(t)),Nr(g_,v_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=5*60,wO=$E("authIdTokenMaxAge")||_O;let y_=null;const EO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wO)return;const i=n==null?void 0:n.token;y_!==i&&(y_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TS(t=YE()){const e=Pm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:mO,persistence:[xA,pA,ES]}),r=$E("authTokenSyncURL");if(r){const s=EO(r);uA(n,s,()=>s(n.currentUser)),lA(n,o=>s(o))}const i=UE("auth");return i&&BP(n,`http://${i}`),n}yO("Browser");const __="@firebase/database",w_="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NS="";function SO(t){NS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:va(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CO(e)}}catch{}return new bO},ri=RS("localStorage"),Wh=RS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Nm("@firebase/database"),kO=function(){let t=1;return function(){return t++}}(),PS=function(t){const e=ZN(t),n=new KN;n.update(e);const r=n.digest();return km.encodeByteArray(r)},Za=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Za.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let ui=null,E_=!0;const xO=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hs.logLevel=ge.VERBOSE,ui=hs.log.bind(hs),e&&Wh.set("logging_enabled",!0)):typeof t=="function"?ui=t:(ui=null,Wh.remove("logging_enabled"))},lt=function(...t){if(E_===!0&&(E_=!1,ui===null&&Wh.get("logging_enabled")===!0&&xO(!0)),ui){const e=Za.apply(null,t);ui(e)}},el=function(t){return function(...e){lt(t,...e)}},Vh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Za(...t);hs.error(e)},qn=function(...t){const e=`FIREBASE FATAL ERROR: ${Za(...t)}`;throw hs.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Za(...t);hs.warn(e)},IO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},AS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ns="[MIN_NAME]",Ci="[MAX_NAME]",Vs=function(t,e){if(t===e)return 0;if(t===Ns||e===Ci)return-1;if(e===Ns||t===Ci)return 1;{const n=S_(t),r=S_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NO=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},Wm=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=Wm(t[e[r]]);return n+="}",n},OS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const MS=function(t){O(!AS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},RO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const OO=new RegExp("^-?(0*)\\d{1,10}$"),MO=-2147483648,DO=2147483647,S_=function(t){if(OO.test(t)){const e=Number(t);if(e>=MO&&e<=DO)return e}return null},Bs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},LO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="5",DS="v",LS="s",FS="r",jS="f",US=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zS="ls",$S="p",Bh="ac",WS="websocket",VS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function HS(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===WS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===VS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UO(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={},cf={};function Bm(t){const e=t.toString();return uf[e]||(uf[e]=new zO),uf[e]}function $O(t,e){const n=t.toString();return cf[n]||(cf[n]=e()),cf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Bs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="start",VO="close",BO="pLPCommand",HO="pRTLPCB",GS="id",qS="pw",YS="ser",GO="cb",qO="seg",YO="ts",KO="d",QO="dframe",KS=1870,QS=30,XO=KS-QS,JO=25e3,ZO=3e4;class ns{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=el(e),this.stats_=Bm(n),this.urlFn=l=>(this.appCheckToken&&(l[Bh]=this.appCheckToken),HS(n,VS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZO)),TO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===C_)this.id=a,this.password=l;else if(o===VO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[C_]="t",r[YS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[DS]=Vm,this.transportSessionId&&(r[LS]=this.transportSessionId),this.lastSessionId&&(r[zS]=this.lastSessionId),this.applicationId&&(r[$S]=this.applicationId),this.appCheckToken&&(r[Bh]=this.appCheckToken),typeof location<"u"&&location.hostname&&US.test(location.hostname)&&(r[FS]=jS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ns.forceAllow_=!0}static forceDisallow(){ns.forceDisallow_=!0}static isAvailable(){return ns.forceAllow_?!0:!ns.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RO()&&!PO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=FE(n),i=OS(r,XO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QO]="t",r[GS]=e,r[qS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kO(),window[BO+this.uniqueCallbackIdentifier]=e,window[HO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[GS]=this.myID,e[qS]=this.myPW,e[YS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+QS+r.length<=KS;){const o=this.pendingSegs.shift();r=r+"&"+qO+i+"="+o.seg+"&"+YO+i+"="+o.ts+"&"+KO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(JO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=16384,tM=45e3;let Ju=null;typeof MozWebSocket<"u"?Ju=MozWebSocket:typeof WebSocket<"u"&&(Ju=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=el(this.connId),this.stats_=Bm(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[DS]=Vm,typeof location<"u"&&location.hostname&&US.test(location.hostname)&&(o[FS]=jS),n&&(o[LS]=n),r&&(o[zS]=r),i&&(o[Bh]=i),s&&(o[$S]=s),HS(e,WS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ri.set("previous_websocket_failure",!0);try{let r;VE(),this.mySock=new Ju(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ju!==null&&!Zt.forceDisallow_}static previouslyFailed(){return ri.isInMemoryStorage||ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=va(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OS(n,eM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ns,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of Sa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Sa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=6e4,rM=5e3,iM=10*1024,sM=100*1024,df="t",b_="d",oM="s",k_="r",aM="e",x_="o",I_="a",T_="n",N_="p",lM="h";class uM{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=el("c:"+this.id+":"),this.transportManager_=new Sa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=jo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(df in e){const n=e[df];n===I_?this.upgradeIfSecondaryHealthy_():n===k_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===x_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:N_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:I_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:T_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(df,e);if(b_ in e){const r=e[b_];if(n===lM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===T_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oM?this.onConnectionShutdown_(r):n===k_?this.onReset_(r):n===aM?Vh("Server Error: "+r):n===x_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vm!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),jo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:N_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends JS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Im()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zu}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=32,P_=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new ye("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function ZS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function eC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return St(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gm(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class dM{constructor(e,n){this.errorPrefix_=n,this.parts_=eC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wc(this.parts_[r]);nC(this)}}function fM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wc(e),nC(t)}function hM(t){const e=t.parts_.pop();t.byteLength_-=Wc(e),t.parts_.length>0&&(t.byteLength_-=1)}function nC(t){if(t.byteLength_>P_)throw new Error(t.errorPrefix_+"has a key path longer than "+P_+" bytes ("+t.byteLength_+").");if(t.parts_.length>R_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+R_+") or object contains a cycle "+Qr(t))}function Qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends JS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qm}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=1e3,pM=60*5*1e3,A_=30*1e3,mM=1.3,gM=3e4,vM="server_kill",O_=3;class Fn extends XS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=el("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=co,this.maxReconnectDelay_=pM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!VE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new $c,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const r=Is(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=A_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vh("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gM&&(this.reconnectDelay_=co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new uM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{It(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(vM)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mh(this.interruptReasons_)&&(this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Wm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=O_&&(this.reconnectDelay_=A_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=O_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NS.replace(/\./g,"-")]=1,Im()?e["framework.cordova"]=1:WE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zu.getInstance().currentlyOnline();return Mh(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(Ns,e),i=new te(Ns,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;class rC extends Gc{static get __EMPTY_NODE(){return zl}static set __EMPTY_NODE(e){zl=e}compare(e,n){return Vs(e.name,n.name)}isDefinedOn(e){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Ci,zl)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,zl)}toString(){return".key"}}const ms=new rC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Ct.EMPTY_NODE,this.right=s??Ct.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class yM{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $l(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new yM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t,e){return Vs(t.name,e.name)}function Ym(t,e){return Vs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;function wM(t){Hh=t}const iC=function(t){return typeof t=="number"?"number:"+MS(t):"string:"+t},sC=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else O(t===Hh||t.isEmpty(),"priority of unexpected type.");O(t===Hh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M_;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sC(this.priorityNode_)}static set __childrenNodeConstructor(e){M_=e}static get __childrenNodeConstructor(){return M_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:ee(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=MS(this.value_):e+=this.value_,this.lazyHash_=PS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),s=Ye.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oC,aC;function EM(t){oC=t}function SM(t){aC=t}class CM extends Gc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Ci,new Ye("[PRIORITY-POST]",aC))}makePost(e,n){const r=oC(e);return new te(n,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new CM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=Math.log(2);class kM{constructor(e){const n=s=>parseInt(Math.log(s)/bM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ec=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Qe(f,d.node,Qe.BLACK,null,null);{const y=parseInt(c/2,10)+l,p=i(l,y),w=i(y+1,u);return d=t[y],f=n?n(d):d,new Qe(f,d.node,Qe.BLACK,p,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(p,w){const E=d-p,m=d;d-=p;const h=i(E+1,m),v=t[E],g=n?n(v):v;y(new Qe(g,v.node,w,null,h))},y=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(p+1));w?f(E,Qe.BLACK):(f(E,Qe.BLACK),f(E,Qe.RED))}return c},o=new kM(t.length),a=s(o);return new Ct(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;const Mi={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Mi&&De,"ChildrenNode.ts has not been loaded"),ff=ff||new Mn({".priority":Mi},{".priority":De}),ff}get(e){const n=Is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ec(r,e.getCompare()):a=Mi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Mn(c,u)}addToIndexes(e,n){const r=Vu(this.indexes_,(i,s)=>{const o=Is(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===Mi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ec(a,o.getCompare())}else return Mi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vu(this.indexes_,i=>{if(i===Mi)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sC(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fo||(fo=new G(new Ct(Ym),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fo:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fo:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{O(ee(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iC(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":PS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tl?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xM extends G{constructor(){super(new Ct(Ym),G.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const tl=new xM;Object.defineProperties(te,{MIN:{value:new te(Ns,G.EMPTY_NODE)},MAX:{value:new te(Ci,tl)}});rC.__EMPTY_NODE=G.EMPTY_NODE;Ye.__childrenNodeConstructor=G;wM(tl);SM(tl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=!0;function tt(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,tt(e))}if(!(t instanceof Array)&&IM){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return G.EMPTY_NODE;const s=ec(n,_M,o=>o.name,Ym);if(r){const o=ec(n,De.getCompare());return new G(s,tt(e),new Mn({".priority":o},{".priority":De}))}else return new G(s,tt(e),Mn.Default)}else{let n=G.EMPTY_NODE;return Tt(t,(r,i)=>{if(Xn(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}EM(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM extends Gc{constructor(e){super(),this.indexPath_=e,O(!ie(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vs(e.name,n.name):s}makePost(e,n){const r=tt(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,tl);return new te(Ci,e)}toString(){return eC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM extends Gc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=tt(e);return new te(n,r)}toString(){return".value"}}const RM=new NM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ca(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ba(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ca(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,r)):o.trackChildChange(ba(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ca(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ba(i,s,o))}else r.trackChildChange(Rs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.indexedFilter_=new Km(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ka.getStartPost_(e),this.endPost_=ka.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new te(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ka(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,y)=>d(y,f)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new te(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(c&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ba(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ca(n,d));const w=a.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Rs(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ca(u.name,u.node)),s.trackChildChange(Rs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ns}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Qm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OM(t){return t.loadsAllData()?new Km(t.getIndex()):t.hasLimit()?new AM(t):new ka(t)}function D_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===RM?n="$value":t.index_===ms?n="$key":(O(t.index_ instanceof TM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function L_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends XS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=el("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tc.getListenId_(e,r),a={};this.listens_[o]=a;const l=D_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Is(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=tc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=D_(e._queryParams),r=e._path.toString(),i=new $c;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=va(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){return{value:null,children:new Map}}function uC(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,nc());const i=t.children.get(r);e=_e(e),uC(i,e,n)}}function Gh(t,e,n){t.value!==null?n(e,t.value):DM(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);Gh(i,s,n)})}function DM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=10*1e3,FM=30*1e3,jM=5*60*1e3;class UM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LM(e);const r=F_+(FM-F_)*Math.random();jo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&Xn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),jo(this.reportStats_.bind(this),Math.floor(Math.random()*2*jM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function cC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=cC()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new rc(ce(),n,this.revert)}}else return O(ee(this.path)===e,"operationForChild called for unrelated child."),new rc(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new xa(this.source,ce()):new xa(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return ie(this.path)?new bi(this.source,ce(),this.snap.getImmediateChild(e)):new bi(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new bi(this.source,ce(),n.value):new Ia(this.source,ce(),n)}else return O(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ia(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $M(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(PM(o.childName,o.snapshotNode))}),ho(t,i,"child_removed",e,r,n),ho(t,i,"child_added",e,r,n),ho(t,i,"child_moved",s,r,n),ho(t,i,"child_changed",e,r,n),ho(t,i,"value",e,r,n),i}function ho(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>VM(t,a,l)),o.forEach(a=>{const l=WM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function WM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VM(t,e,n){if(e.childName==null||n.childName==null)throw Us("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e){return{eventCache:t,serverCache:e}}function Uo(t,e,n,r){return qc(new ki(e,n,r),t.serverCache)}function dC(t,e,n,r){return qc(t.eventCache,new ki(e,n,r))}function qh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf;const BM=()=>(hf||(hf=new Ct(NO)),hf);class Ce{constructor(e,n=BM()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Tt(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ie(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:Be(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new Ce(null)}}set(e,n){if(ie(e))return new Ce(n,this.children);{const r=ee(e),s=(this.children.get(r)||new Ce(null)).set(_e(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(ie(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(ie(e))return n;{const r=ee(e),s=(this.children.get(r)||new Ce(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ie(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),Be(n,i),r):new Ce(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Ce(null))}}function zo(t,e,n){if(ie(e))return new an(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=St(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function j_(t,e,n){let r=t;return Tt(n,(i,s)=>{r=zo(r,Be(e,i),s)}),r}function U_(t,e){if(ie(e))return an.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new an(n)}}function Yh(t,e){return Ai(t,e)!=null}function Ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function z_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function Rr(t,e){if(ie(e))return t;{const n=Ai(t,e);return n!=null?new an(new Ce(n)):new an(t.writeTree_.subtree(e))}}function Kh(t){return t.writeTree_.isEmpty()}function Ps(t,e){return fC(ce(),t.writeTree_,e)}function fC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=fC(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){return gC(e,t)}function HM(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=r}function GM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function qM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&YM(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return KM(t),!0;if(r.snap)t.visibleWrites=U_(t.visibleWrites,r.path);else{const a=r.children;Tt(a,l=>{t.visibleWrites=U_(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function YM(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Be(t.path,n),e))return!0;return!1}function KM(t){t.visibleWrites=hC(t.allWrites,QM,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QM(t){return t.visible}function hC(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=St(n,o),r=zo(r,a,s.snap)):tn(o,n)&&(a=St(o,n),r=zo(r,ce(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=St(n,o),r=j_(r,a,s.children);else if(tn(o,n))if(a=St(o,n),ie(a))r=j_(r,ce(),s.children);else{const l=Is(s.children,ee(a));if(l){const u=l.getChild(_e(a));r=zo(r,ce(),u)}}}else throw Us("WriteRecord should have .snap or .children")}}return r}function pC(t,e,n,r,i){if(!r&&!i){const s=Ai(t.visibleWrites,e);if(s!=null)return s;{const o=Rr(t.visibleWrites,e);if(Kh(o))return n;if(n==null&&!Yh(o,ce()))return null;{const a=n||G.EMPTY_NODE;return Ps(o,a)}}}else{const s=Rr(t.visibleWrites,e);if(!i&&Kh(s))return n;if(!i&&n==null&&!Yh(s,ce()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=hC(t.allWrites,o,e),l=n||G.EMPTY_NODE;return Ps(a,l)}}}function XM(t,e,n){let r=G.EMPTY_NODE;const i=Ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=Ps(Rr(s,new ye(o)),a);r=r.updateImmediateChild(o,l)}),z_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rr(t.visibleWrites,e);return z_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function JM(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(Yh(t.visibleWrites,s))return null;{const o=Rr(t.visibleWrites,s);return Kh(o)?i.getChild(n):Ps(o,i.getChild(n))}}function ZM(t,e,n,r){const i=Be(e,n),s=Ai(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rr(t.visibleWrites,i);return Ps(o,r.getNode().getImmediateChild(n))}else return null}function eD(t,e){return Ai(t.visibleWrites,e)}function tD(t,e,n,r,i,s,o){let a;const l=Rr(t.visibleWrites,e),u=Ai(l,ce());if(u!=null)a=u;else if(n!=null)a=Ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&c.length<i;)d(y,r)!==0&&c.push(y),y=f.getNext();return c}else return[]}function nD(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function ic(t,e,n,r){return pC(t.writeTree,t.treePath,e,n,r)}function eg(t,e){return XM(t.writeTree,t.treePath,e)}function $_(t,e,n,r){return JM(t.writeTree,t.treePath,e,n,r)}function sc(t,e){return eD(t.writeTree,Be(t.treePath,e))}function rD(t,e,n,r,i,s){return tD(t.writeTree,t.treePath,e,n,r,i,s)}function tg(t,e,n){return ZM(t.writeTree,t.treePath,e,n)}function mC(t,e){return gC(Be(t.treePath,e),t.writeTree)}function gC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ba(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ca(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Rs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ba(r,e.snapshotNode,i.oldSnap));else throw Us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const vC=new sD;class ng{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ki(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xi(this.viewCache_),s=rD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){return{filter:t}}function aD(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lD(t,e,n,r,i){const s=new iD;let o,a;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=Qh(t,e,u.path,u.snap,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ie(u.path),o=oc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=cD(t,e,u.path,u.children,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Xh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=hD(t,e,u.path,r,i,s):o=dD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=fD(t,e,n.path,r,s);else throw Us("Unknown operation type: "+n.type);const l=s.getChanges();return uD(e,o,l),{viewCache:o,changes:l}}function uD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(lC(qh(e)))}}function yC(t,e,n,r,i,s){const o=e.eventCache;if(sc(r,n)!=null)return e;{let a,l;if(ie(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xi(e),c=u instanceof G?u:G.EMPTY_NODE,d=eg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=ic(r,xi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ee(n);if(u===".priority"){O(Fr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=$_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=_e(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=$_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=tg(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Uo(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function oc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ie(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),y,null)}else{const y=ee(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const p=_e(n),E=l.getNode().getImmediateChild(y).updateChild(p,r);y===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),y,E,p,vC,null)}const d=dC(e,u,l.isFullyInitialized()||ie(n),c.filtersNodes()),f=new ng(i,d,s);return yC(t,d,n,i,f,a)}function Qh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new ng(i,e,s);if(ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Uo(e,u,!0,t.filter.filtersNodes());else{const d=ee(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Uo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=_e(n),y=a.getNode().getImmediateChild(d);let p;if(ie(f))p=r;else{const w=c.getCompleteChild(d);w!=null?ZS(f)===".priority"&&w.getChild(tC(f)).isEmpty()?p=w:p=w.updateChild(f,r):p=G.EMPTY_NODE}if(y.equals(p))l=e;else{const w=t.filter.updateChild(a.getNode(),d,p,f,c,o);l=Uo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function W_(t,e){return t.eventCache.isCompleteForChild(e)}function cD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Be(n,l);W_(e,ee(c))&&(a=Qh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Be(n,l);W_(e,ee(c))||(a=Qh(t,a,c,u,i,s,o))}),a}function V_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Xh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ie(n)?u=r:u=new Ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),p=V_(t,y,f);l=oc(t,l,new ye(d),p,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const y=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!y){const p=e.serverCache.getNode().getImmediateChild(d),w=V_(t,p,f);l=oc(t,l,new ye(d),w,i,s,o,a)}}),l}function dD(t,e,n,r,i,s,o){if(sc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ie(n)){let u=new Ce(null);return l.getNode().forEachChild(ms,(c,d)=>{u=u.set(new ye(c),d)}),Xh(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((c,d)=>{const f=Be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Xh(t,e,n,u,i,s,a,o)}}function fD(t,e,n,r,i){const s=e.serverCache,o=dC(e,s.getNode(),s.isFullyInitialized()||ie(n),s.isFiltered());return yC(t,o,n,r,vC,i)}function hD(t,e,n,r,i,s){let o;if(sc(r,n)!=null)return e;{const a=new ng(r,e,i),l=e.eventCache.getNode();let u;if(ie(n)||ee(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=ic(r,xi(e));else{const d=e.serverCache.getNode();O(d instanceof G,"serverChildren would be complete if leaf node"),c=eg(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ee(n);let d=tg(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,_e(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,G.EMPTY_NODE,_e(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ic(r,xi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||sc(r,ce())!=null,Uo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pD=class{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Km(r.getIndex()),s=OM(r);this.processor_=oD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),c=new ki(l,o.isFullyInitialized(),i.filtersNodes()),d=new ki(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qc(d,c),this.eventGenerator_=new zM(this.query_)}get query(){return this.query_}};function mD(t){return t.viewCache_.serverCache.getNode()}function gD(t,e){const n=xi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function B_(t){return t.eventRegistrations_.length===0}function vD(t,e){t.eventRegistrations_.push(e)}function H_(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function G_(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(O(xi(t.viewCache_),"We should always have a full cache before handling merges"),O(qh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=lD(t.processor_,i,e,n,r);return aD(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,_C(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(Rs(s,o))}),n.isFullyInitialized()&&r.push(lC(n.getNode())),_C(t,r,n.getNode(),e)}function _C(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $M(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;class _D{constructor(){this.views=new Map}}function wD(t){O(!ac,"__referenceConstructor has already been defined"),ac=t}function ED(){return O(ac,"Reference.ts has not been loaded"),ac}function SD(t){return t.views.size===0}function rg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),G_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(G_(o,e,n,r));return s}}function CD(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ic(n,i?r:null),l=!1;a?l=!0:r instanceof G?(a=eg(n,r),l=!1):(a=G.EMPTY_NODE,l=!1);const u=qc(new ki(a,l,!1),new ki(r,i,!1));return new pD(e,u)}return o}function bD(t,e,n,r,i,s){const o=CD(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vD(o,n),yD(o,n)}function kD(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=jr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(H_(u,n,r)),B_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(H_(l,n,r)),B_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!jr(t)&&s.push(new(ED())(e._repo,e._path)),{removed:s,events:o}}function wC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gs(t,e){let n=null;for(const r of t.views.values())n=n||gD(r,e);return n}function EC(t,e){if(e._queryParams.loadsAllData())return Yc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function SC(t,e){return EC(t,e)!=null}function jr(t){return Yc(t)!=null}function Yc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;function xD(t){O(!lc,"__referenceConstructor has already been defined"),lc=t}function ID(){return O(lc,"Reference.ts has not been loaded"),lc}let TD=1;class q_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=nD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function CC(t,e,n,r,i){return HM(t.pendingWriteTree_,e,n,r,i),i?nl(t,new bi(cC(),e,n)):[]}function ii(t,e,n=!1){const r=GM(t.pendingWriteTree_,e);if(qM(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(ce(),!0):Tt(r.children,o=>{s=s.set(new ye(o),!0)}),nl(t,new rc(r.path,s,n))}else return[]}function Kc(t,e,n){return nl(t,new bi(Xm(),e,n))}function ND(t,e,n){const r=Ce.fromObject(n);return nl(t,new Ia(Xm(),e,r))}function RD(t,e){return nl(t,new xa(Xm(),e))}function PD(t,e,n){const r=sg(t,n);if(r){const i=og(r),s=i.path,o=i.queryId,a=St(s,e),l=new xa(Jm(o),a);return ag(t,s,l)}else return[]}function Jh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||SC(o,e))){const l=kD(o,e,n,r);SD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,y)=>jr(y));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const y=MD(f);for(let p=0;p<y.length;++p){const w=y[p],E=w.query,m=xC(t,w);t.listenProvider_.startListening($o(E),uc(t,E),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening($o(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(Qc(f));t.listenProvider_.stopListening($o(f),y)}))}DD(t,u)}return a}function AD(t,e,n,r){const i=sg(t,r);if(i!=null){const s=og(i),o=s.path,a=s.queryId,l=St(o,e),u=new bi(Jm(a),l,n);return ag(t,o,u)}else return[]}function OD(t,e,n,r){const i=sg(t,r);if(i){const s=og(i),o=s.path,a=s.queryId,l=St(o,e),u=Ce.fromObject(n),c=new Ia(Jm(a),l,u);return ag(t,o,c)}else return[]}function Y_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,y)=>{const p=St(f,i);s=s||gs(y,p),o=o||jr(y)});let a=t.syncPointTree_.get(i);a?(o=o||jr(a),s=s||gs(a,ce())):(a=new _D,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,p)=>{const w=gs(p,ce());w&&(s=s.updateImmediateChild(y,w))}));const u=SC(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Qc(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=LD();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const c=Zm(t.pendingWriteTree_,i);let d=bD(a,e,n,c,s,l);if(!u&&!o&&!r){const f=EC(a,e);d=d.concat(FD(t,e,f))}return d}function ig(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=St(o,e),u=gs(a,l);if(u)return u});return pC(i,e,s,n,!0)}function nl(t,e){return bC(e,t.syncPointTree_,null,Zm(t.pendingWriteTree_,ce()))}function bC(t,e,n,r){if(ie(t.path))return kC(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=gs(i,ce()));let s=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=mC(r,o);s=s.concat(bC(a,l,u,c))}return i&&(s=s.concat(rg(i,t,r,n))),s}}function kC(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=gs(i,ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=mC(r,o),c=t.operationForChild(o);c&&(s=s.concat(kC(c,a,l,u)))}),i&&(s=s.concat(rg(i,t,r,n))),s}function xC(t,e){const n=e.query,r=uc(t,n);return{hashFn:()=>(mD(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?PD(t,n._path,r):RD(t,n._path);{const s=AO(i,n);return Jh(t,n,null,s)}}}}function uc(t,e){const n=Qc(e);return t.queryToTagMap.get(n)}function Qc(t){return t._path.toString()+"$"+t._queryIdentifier}function sg(t,e){return t.tagToQueryMap.get(e)}function og(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function ag(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=Zm(t.pendingWriteTree_,e);return rg(r,n,i,null)}function MD(t){return t.fold((e,n,r)=>{if(n&&jr(n))return[Yc(n)];{let i=[];return n&&(i=wC(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function $o(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ID())(t._repo,t._path):t}function DD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Qc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function LD(){return TD++}function FD(t,e,n){const r=e._path,i=uc(t,e),s=xC(t,n),o=t.listenProvider_.startListening($o(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ie(u)&&c&&jr(c))return[Yc(c).query];{let f=[];return c&&(f=f.concat(wC(c).map(y=>y.query))),Tt(d,(y,p)=>{f=f.concat(p)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening($o(c),uc(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lg(n)}node(){return this.node_}}class ug{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new ug(this.syncTree_,n)}node(){return ig(this.syncTree_,this.path_)}}const jD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},K_=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zD(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},zD=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$D=function(t,e,n,r){return cg(e,new ug(n,t),r)},IC=function(t,e,n){return cg(t,new lg(e),n)};function cg(t,e,n){const r=t.getPriority().val(),i=K_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=K_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ye(i))),o.forEachChild(De,(a,l)=>{const u=cg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fg(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=ee(n);for(;i!==null;){const s=Is(r.node.children,i)||{children:{},childCount:0};r=new dg(i,r,s),n=_e(n),i=ee(n)}return r}function Hs(t){return t.node.value}function TC(t,e){t.node.value=e,Zh(t)}function NC(t){return t.node.childCount>0}function WD(t){return Hs(t)===void 0&&!NC(t)}function Xc(t,e){Tt(t.node.children,(n,r)=>{e(new dg(n,t,r))})}function RC(t,e,n,r){n&&!r&&e(t),Xc(t,i=>{RC(i,e,!0,r)}),n&&r&&e(t)}function VD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function rl(t){return new ye(t.parent===null?t.name:rl(t.parent)+"/"+t.name)}function Zh(t){t.parent!==null&&BD(t.parent,t.name,t)}function BD(t,e,n){const r=WD(n),i=Xn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Zh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=/[\[\].#$\/\u0000-\u001F\u007F]/,GD=/[\[\].#$\u0000-\u001F\u007F]/,pf=10*1024*1024,PC=function(t){return typeof t=="string"&&t.length!==0&&!HD.test(t)},AC=function(t){return typeof t=="string"&&t.length!==0&&!GD.test(t)},qD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AC(t)},YD=function(t,e,n,r){r&&e===void 0||hg(Tm(t,"value"),e,n)},hg=function(t,e,n){const r=n instanceof ye?new dM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qr(r)+" with contents = "+e.toString());if(AS(e))throw new Error(t+"contains "+e.toString()+" "+Qr(r));if(typeof e=="string"&&e.length>pf/3&&Wc(e)>pf)throw new Error(t+"contains a string greater than "+pf+" utf8 bytes "+Qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!PC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fM(r,o),hg(t,a,r),hM(r)}),i&&s)throw new Error(t+' contains ".value" child '+Qr(r)+" in addition to actual children.")}},OC=function(t,e,n,r){if(!(r&&n===void 0)&&!AC(n))throw new Error(Tm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KD=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OC(t,e,n,r)},QD=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},XD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qD(n))throw new Error(Tm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function MC(t,e,n){pg(t,n),DC(t,r=>Gm(r,e))}function Yn(t,e,n){pg(t,n),DC(t,r=>tn(r,e)||tn(e,r))}function DC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ZD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ZD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ui&&lt("event: "+n.toString()),Bs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL="repo_interrupt",tL=25;class nL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nc(),this.transactionQueueTree_=new dg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rL(t,e,n){if(t.stats_=Bm(t.repoInfo_),t.forceRestClient_||LO())t.server_=new tc(t.repoInfo_,(r,i,s,o)=>{Q_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>X_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{Q_(t,r,i,s,o)},r=>{X_(t,r)},r=>{sL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$O(t.repoInfo_,()=>new UM(t.stats_,t.server_)),t.infoData_=new MM,t.infoSyncTree_=new q_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Kc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gg(t,"connected",!1),t.serverSyncTree_=new q_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Yn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iL(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mg(t){return jD({timestamp:iL(t)})}function Q_(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Vu(n,u=>tt(u));o=OD(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=AD(t.serverSyncTree_,s,l,i)}else if(r){const l=Vu(n,u=>tt(u));o=ND(t.serverSyncTree_,s,l)}else{const l=tt(n);o=Kc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Jc(t,s)),Yn(t.eventQueue_,a,o)}function X_(t,e){gg(t,"connected",e),e===!1&&aL(t)}function sL(t,e){Tt(e,(n,r)=>{gg(t,n,r)})}function gg(t,e,n){const r=new ye("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Kc(t.infoSyncTree_,r,i);Yn(t.eventQueue_,r,s)}function LC(t){return t.nextWriteId_++}function oL(t,e,n,r,i){vg(t,"set",{path:e.toString(),value:n,priority:r});const s=mg(t),o=tt(n,r),a=ig(t.serverSyncTree_,e),l=IC(o,a,s),u=LC(t),c=CC(t.serverSyncTree_,e,l,u,!0);pg(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const p=f==="ok";p||It("set at "+e+" failed: "+f);const w=ii(t.serverSyncTree_,u,!p);Yn(t.eventQueue_,e,w),cL(t,i,f,y)});const d=$C(t,e);Jc(t,d),Yn(t.eventQueue_,d,[])}function aL(t){vg(t,"onDisconnectEvents");const e=mg(t),n=nc();Gh(t.onDisconnect_,ce(),(i,s)=>{const o=$D(i,s,t.serverSyncTree_,e);uC(n,i,o)});let r=[];Gh(n,ce(),(i,s)=>{r=r.concat(Kc(t.serverSyncTree_,i,s));const o=$C(t,i);Jc(t,o)}),t.onDisconnect_=nc(),Yn(t.eventQueue_,ce(),r)}function lL(t,e,n){let r;ee(e._path)===".info"?r=Y_(t.infoSyncTree_,e,n):r=Y_(t.serverSyncTree_,e,n),MC(t.eventQueue_,e._path,r)}function ep(t,e,n){let r;ee(e._path)===".info"?r=Jh(t.infoSyncTree_,e,n):r=Jh(t.serverSyncTree_,e,n),MC(t.eventQueue_,e._path,r)}function uL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eL)}function vg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function cL(t,e,n,r){e&&Bs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function FC(t,e,n){return ig(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function yg(t,e=t.transactionQueueTree_){if(e||Zc(t,e),Hs(e)){const n=UC(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&dL(t,rl(e),n)}else NC(e)&&Xc(e,n=>{yg(t,n)})}function dL(t,e,n){const r=n.map(u=>u.currentWriteId),i=FC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];O(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=St(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{vg(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ii(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Zc(t,fg(t.transactionQueueTree_,e)),yg(t,t.transactionQueueTree_),Yn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Bs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Jc(t,e)}},o)}function Jc(t,e){const n=jC(t,e),r=rl(n),i=UC(t,n);return fL(t,i,r),r}function fL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=St(n,l.path);let c=!1,d;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ii(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tL)c=!0,d="maxretry",i=i.concat(ii(t.serverSyncTree_,l.currentWriteId,!0));else{const f=FC(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){hg("transaction failed: Data returned ",y,l.path);let p=tt(y);typeof y=="object"&&y!=null&&Xn(y,".priority")||(p=p.updatePriority(f.getPriority()));const E=l.currentWriteId,m=mg(t),h=IC(p,f,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=h,l.currentWriteId=LC(t),o.splice(o.indexOf(E),1),i=i.concat(CC(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ii(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(ii(t.serverSyncTree_,l.currentWriteId,!0))}Yn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Zc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Bs(r[a]);yg(t,t.transactionQueueTree_)}function jC(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&Hs(r)===void 0;)r=fg(r,n),e=_e(e),n=ee(e);return r}function UC(t,e){const n=[];return zC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zC(t,e,n){const r=Hs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xc(e,i=>{zC(t,i,n)})}function Zc(t,e){const n=Hs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,TC(e,n.length>0?n:void 0)}Xc(e,r=>{Zc(t,r)})}function $C(t,e){const n=rl(jC(t,e)),r=fg(t.transactionQueueTree_,e);return VD(r,i=>{mf(t,i)}),mf(t,r),RC(r,i=>{mf(t,i)}),n}function mf(t,e){const n=Hs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?TC(e,void 0):n.length=s+1,Yn(t.eventQueue_,rl(e),i);for(let o=0;o<r.length;o++)Bs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const J_=function(t,e){const n=mL(t),r=n.namespace;n.domain==="firebase.com"&&qn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new BS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},mL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=hL(t.substring(c,d)));const f=pL(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class VC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ie(this._path)?null:ZS(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=L_(this._queryParams),n=Wm(e);return n==="{}"?"default":n}get _queryObject(){return L_(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof _g))return!1;const n=this._repo===e._repo,r=Gm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cM(this._path)}}class Jn extends _g{constructor(e,n){super(e,n,new Qm,!1)}get parent(){const e=tC(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ta{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=cc(this.ref,e);return new Ta(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ta(i,cc(this.ref,r),De)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ed(t,e){return t=vt(t),t._checkNotDeleted("ref"),e!==void 0?cc(t._root,e):t._root}function cc(t,e){return t=vt(t),ee(t._path)===null?KD("child","path",e,!1):OC("child","path",e,!1),new Jn(t._repo,Be(t._path,e))}function HC(t,e){t=vt(t),QD("set",t._path),YD("set",e,t._path,!1);const n=new $c;return oL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class td{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new WC("value",this,new Ta(e.snapshotNode,new Jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new VC(this,e,n):null}matches(e){return e instanceof td?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new VC(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=cc(new Jn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new WC(e.type,this,new Ta(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function gL(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{ep(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new BC(n,s||void 0),a=e==="value"?new td(o):new nd(e,o);return lL(t._repo,t,a),()=>ep(t._repo,t,a)}function vL(t,e,n,r){return gL(t,"value",e,n,r)}function yL(t,e,n){let r=null;const i=n?new BC(n):null;e==="value"?r=new td(i):e&&(r=new nd(e,i)),ep(t._repo,t,r)}wD(Jn);xD(Jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="FIREBASE_DATABASE_EMULATOR_HOST",tp={};let wL=!1;function EL(t,e,n,r){t.repoInfo_=new BS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function SL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=J_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[_L]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=J_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ps(ps.OWNER):new jO(t.name,t.options,e);XD("Invalid Firebase Database URL",o),ie(o.path)||qn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=bL(a,t,c,new FO(t.name,n));return new kL(d,t)}function CL(t,e){const n=tp[e];(!n||n[t.key]!==t)&&qn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uL(t),delete n[t.key]}function bL(t,e,n,r){let i=tp[e.name];i||(i={},tp[e.name]=i);let s=i[t.toURLString()];return s&&qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new nL(t,wL,n,r),i[t.toURLString()]=s,s}class kL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qn("Cannot call "+e+" on a deleted database.")}}function xL(t=YE(),e){const n=Pm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=jN("database");r&&IL(n,...r)}return n}function IL(t,e,n,r={}){t=vt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ps(ps.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:UN(r.mockUserToken,t.app.options.projectId);s=new ps(o)}EL(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){SO($s),Ts(new _i("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Nr(__,w_,t),Nr(__,w_,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TL();const NL={apiKey:"AIzaSyAG8LJPNXNgDKnfopB-c1CVX-Uew4uRyqU",authDomain:"schedule-maker-8675b.firebaseapp.com",projectId:"schedule-maker-8675b",storageBucket:"schedule-maker-8675b.appspot.com",messagingSenderId:"198447247334",appId:"1:198447247334:web:f009e6e7b0b144923cf027",measurementId:"G-2NLFWYGS09"},wg=qE(NL),Eg=TS(wg);async function RL(t,e){return await sA(Eg,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}async function PL(t,e){return await oA(Eg,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}function Sg(){return TS(wg)}async function Cg(){return cA(Eg)}const rd=xL(wg);async function AL(t){const e=t.uid;await HC(ed(rd,"/users"+e),{...t})}async function OL(t,e){const n=ed(rd,"/users"+t+"/schedules");await HC(n,e)}function ML(t,e,n){const r=`/users${t}${n?"/"+n:""}`;vL(ed(rd,r),e)}function DL(t,e){const n=`/users${t}${e?"/"+e:""}`;yL(ed(rd,n))}async function LL(t){await aA(t)}function FL({notVerified:t}){const[e,n]=C.useState(""),[r,i]=C.useState(""),[s,o]=C.useState(!1),[a,l]=C.useState(!1);async function u(c){c.preventDefault(),(await PL(e,r)).status==="success"?l(!1):l(!0)}return _.jsxs("form",{className:"basis-full w-full box-border p-4 shrink-0 md:text-base text-sm",onSubmit:c=>void u(c),children:[_.jsx("p",{className:"w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg",children:"Sign in to your account"}),_.jsxs("label",{children:["Email",_.jsx("input",{name:"email",placeholder:"Email",className:`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border ${a?"border-red-500 border border-solid":""}`,type:"email",onChange:c=>n(c.target.value),required:!0,value:e})]}),_.jsxs("label",{className:"relative",children:[_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{children:"Password"}),_.jsx(da,{to:"/forgot",children:_.jsx("span",{className:"hover:text-c4 text-c7 transition",children:"Forgot?"})})]}),_.jsxs("div",{className:"relative mt-2 flex items-center",children:[_.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${a?"border-red-500 border border-solid":""}`,type:`${s?"text":"password"}`,onChange:c=>i(c.target.value),required:!0,value:r}),_.jsx(dn,{icon:s?CT:kT,className:"absolute right-2 cursor-pointer",onClick:()=>o(!s)})]})]}),_.jsxs("p",{className:"mt-2 text-sm text-red-500",children:[a?"Email or password incorrect":null,!t&&!a?"You have not verified your email":null]}),_.jsx("label",{children:_.jsx("button",{className:"mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition",type:"submit",children:"Sign In"})}),_.jsx(da,{to:"/schedule",children:_.jsx("p",{className:"mt-6 hover:text-c4 text-c7 transition",children:"Make a schedule without logging in"})})]})}function jL(){const[t,e]=C.useState(""),[n,r]=C.useState(""),[i,s]=C.useState(""),[o,a]=C.useState(!1),l=Ba();async function u(c){if(c.preventDefault(),n!==i){a(!0);return}const d=await RL(t,n);d.status==="success"?(a(!1),await LL(d.info.user),await AL({email:t,password:n,uid:d.info.user.uid}),l("/email-verification-confirmation")):d.status==="error"?(d.info.code==="auth/email-already-in-use"?a("alr-in-use"):d.info.code==="auth/weak-password"&&a("passWeak"),console.log("Denied")):console.log("Something when wrong. Please try again later.")}return _.jsxs("form",{className:"basis-full w-full box-border p-4 shrink-0 text-sm md:text-base",onSubmit:c=>void u(c),children:[_.jsx("p",{className:"w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg",children:"Sign up your account"}),_.jsxs("label",{children:["Email",_.jsx("input",{name:"email",placeholder:"Email",className:"w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md",type:"email",onChange:c=>e(c.target.value),required:!0,value:t})]}),_.jsxs("label",{className:"relative",children:[_.jsx("div",{className:"flex justify-between",children:_.jsx("span",{children:"Password"})}),_.jsx("div",{className:"relative mt-2 flex items-center",children:_.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md mb-6 box-border ${o?"border-red-500 border border-solid":""}`,type:"text",onChange:c=>r(c.target.value),required:!0,value:n})})]}),_.jsxs("label",{className:"relative",children:[_.jsx("div",{className:"flex justify-between",children:_.jsx("span",{children:"Confirm Password"})}),_.jsx("div",{className:"relative mt-2 flex items-center",children:_.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${o?"border-red-500 border border-solid":""}`,type:"text",onChange:c=>s(c.target.value),required:!0,value:i})})]}),_.jsxs("p",{className:"mt-2 text-sm text-red-500",children:[o===!0?"The passwords don't match":null,o==="alr-in-use"?"The account already exists. Sign In with your email.":null,o==="passWeak"?"Your password should be at least 6 characters long":null]}),_.jsx("label",{children:_.jsx("button",{className:"mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition",type:"submit",children:"Sign Up"})}),_.jsx(da,{to:"/schedule",children:_.jsx("p",{className:"mt-6 hover:text-c4 text-c7 transition",children:"Make a schedule without signing up"})})]})}var UL=Object.defineProperty,zL=(t,e)=>{for(var n in e)UL(t,n,{get:e[n],enumerable:!0})},cn={};zL(cn,{assign:()=>VL,colors:()=>Pr,createStringInterpolator:()=>Rg,skipAnimation:()=>JC,to:()=>XC,willAdvance:()=>Pg});var bg=sl(),J=t=>il(t,bg),kg=sl();J.write=t=>il(t,kg);var id=sl();J.onStart=t=>il(t,id);var xg=sl();J.onFrame=t=>il(t,xg);var Ig=sl();J.onFinish=t=>il(t,Ig);var vs=[];J.setTimeout=(t,e)=>{const n=J.now()+e,r=()=>{const s=vs.findIndex(o=>o.cancel==r);~s&&vs.splice(s,1),yr-=~s?1:0},i={time:n,handler:t,cancel:r};return vs.splice(GC(n),0,i),yr+=1,qC(),i};var GC=t=>~(~vs.findIndex(e=>e.time>t)||~vs.length);J.cancel=t=>{id.delete(t),xg.delete(t),Ig.delete(t),bg.delete(t),kg.delete(t)};J.sync=t=>{np=!0,J.batchedUpdates(t),np=!1};J.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,J.onStart(n)}return r.handler=t,r.cancel=()=>{id.delete(n),e=null},r};var Tg=typeof window<"u"?window.requestAnimationFrame:()=>{};J.use=t=>Tg=t;J.now=typeof performance<"u"?()=>performance.now():Date.now;J.batchedUpdates=t=>t();J.catch=console.error;J.frameLoop="always";J.advance=()=>{J.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):KC()};var vr=-1,yr=0,np=!1;function il(t,e){np?(e.delete(t),t(0)):(e.add(t),qC())}function qC(){vr<0&&(vr=0,J.frameLoop!=="demand"&&Tg(YC))}function $L(){vr=-1}function YC(){~vr&&(Tg(YC),J.batchedUpdates(KC))}function KC(){const t=vr;vr=J.now();const e=GC(vr);if(e&&(QC(vs.splice(0,e),n=>n.handler()),yr-=e),!yr){$L();return}id.flush(),bg.flush(t?Math.min(64,vr-t):16.667),xg.flush(),kg.flush(),Ig.flush()}function sl(){let t=new Set,e=t;return{add(n){yr+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return yr-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,yr-=e.size,QC(e,r=>r(n)&&t.add(r)),yr+=t.size,e=t)}}}function QC(t,e){t.forEach(n=>{try{e(n)}catch(r){J.catch(r)}})}function rp(){}var WL=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),N={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Tn(t,e){if(N.arr(t)){if(!N.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var K=(t,e)=>t.forEach(e);function Sn(t,e,n){if(N.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var ht=t=>N.und(t)?[]:N.arr(t)?t:[t];function Wo(t,e){if(t.size){const n=Array.from(t);t.clear(),K(n,e)}}var bo=(t,...e)=>Wo(t,n=>n(...e)),Ng=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Rg,XC,Pr=null,JC=!1,Pg=rp,VL=t=>{t.to&&(XC=t.to),t.now&&(J.now=t.now),t.colors!==void 0&&(Pr=t.colors),t.skipAnimation!=null&&(JC=t.skipAnimation),t.createStringInterpolator&&(Rg=t.createStringInterpolator),t.requestAnimationFrame&&J.use(t.requestAnimationFrame),t.batchedUpdates&&(J.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Pg=t.willAdvance),t.frameLoop&&(J.frameLoop=t.frameLoop)},Vo=new Set,$t=[],gf=[],dc=0,sd={get idle(){return!Vo.size&&!$t.length},start(t){dc>t.priority?(Vo.add(t),J.onStart(BL)):(ZC(t),J(ip))},advance:ip,sort(t){if(dc)J.onFrame(()=>sd.sort(t));else{const e=$t.indexOf(t);~e&&($t.splice(e,1),eb(t))}},clear(){$t=[],Vo.clear()}};function BL(){Vo.forEach(ZC),Vo.clear(),J(ip)}function ZC(t){$t.includes(t)||eb(t)}function eb(t){$t.splice(HL($t,e=>e.priority>t.priority),0,t)}function ip(t){const e=gf;for(let n=0;n<$t.length;n++){const r=$t[n];dc=r.priority,r.idle||(Pg(r),r.advance(t),r.idle||e.push(r))}return dc=0,gf=$t,gf.length=0,$t=e,$t.length>0}function HL(t,e){const n=t.findIndex(e);return n<0?t.length:n}var GL=(t,e,n)=>Math.min(Math.max(n,t),e),qL={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},rn="[-+]?\\d*\\.?\\d+",fc=rn+"%";function od(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var YL=new RegExp("rgb"+od(rn,rn,rn)),KL=new RegExp("rgba"+od(rn,rn,rn,rn)),QL=new RegExp("hsl"+od(rn,fc,fc)),XL=new RegExp("hsla"+od(rn,fc,fc,rn)),JL=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ZL=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,e4=/^#([0-9a-fA-F]{6})$/,t4=/^#([0-9a-fA-F]{8})$/;function n4(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=e4.exec(t))?parseInt(e[1]+"ff",16)>>>0:Pr&&Pr[t]!==void 0?Pr[t]:(e=YL.exec(t))?(Di(e[1])<<24|Di(e[2])<<16|Di(e[3])<<8|255)>>>0:(e=KL.exec(t))?(Di(e[1])<<24|Di(e[2])<<16|Di(e[3])<<8|t0(e[4]))>>>0:(e=JL.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=t4.exec(t))?parseInt(e[1],16)>>>0:(e=ZL.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=QL.exec(t))?(Z_(e0(e[1]),Wl(e[2]),Wl(e[3]))|255)>>>0:(e=XL.exec(t))?(Z_(e0(e[1]),Wl(e[2]),Wl(e[3]))|t0(e[4]))>>>0:null}function vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Z_(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=vf(i,r,t+1/3),o=vf(i,r,t),a=vf(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Di(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function e0(t){return(parseFloat(t)%360+360)%360/360}function t0(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Wl(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function n0(t){let e=n4(t);if(e===null)return t;e=e||0;const n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var Na=(t,e,n)=>{if(N.fun(t))return t;if(N.arr(t))return Na({range:t,output:e,extrapolate:n});if(N.str(t.output[0]))return Rg(t);const r=t,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=i4(u,s);return r4(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function r4(t,e,n,r,i,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function i4(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var s4=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return GL(0,1,i/t)},hc=1.70158,Vl=hc*1.525,r0=hc+1,i0=2*Math.PI/3,s0=2*Math.PI/4.5,Bl=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,o4={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>r0*t*t*t-hc*t*t,easeOutBack:t=>1+r0*Math.pow(t-1,3)+hc*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Vl+1)*2*t-Vl)/2:(Math.pow(2*t-2,2)*((Vl+1)*(t*2-2)+Vl)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*i0),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*i0)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*s0))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*s0)/2+1,easeInBounce:t=>1-Bl(1-t),easeOutBounce:Bl,easeInOutBounce:t=>t<.5?(1-Bl(1-2*t))/2:(1+Bl(2*t-1))/2,steps:s4},Ra=Symbol.for("FluidValue.get"),As=Symbol.for("FluidValue.observers"),zt=t=>!!(t&&t[Ra]),yt=t=>t&&t[Ra]?t[Ra]():t,o0=t=>t[As]||null;function a4(t,e){t.eventObserved?t.eventObserved(e):t(e)}function Pa(t,e){const n=t[As];n&&n.forEach(r=>{a4(r,e)})}var tb=class{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");l4(this,t)}},l4=(t,e)=>nb(t,Ra,e);function Gs(t,e){if(t[Ra]){let n=t[As];n||nb(t,As,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Aa(t,e){const n=t[As];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[As]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var nb=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),uu=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,u4=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,a0=new RegExp(`(${uu.source})(%|[a-z]+)`,"i"),c4=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ad=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,rb=t=>{const[e,n]=d4(t);if(!e||Ng())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||t}else{if(n&&ad.test(n))return rb(n);if(n)return n}return t},d4=t=>{const e=ad.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]},yf,f4=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,ib=t=>{yf||(yf=Pr?new RegExp(`(${Object.keys(Pr).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>yt(s).replace(ad,rb).replace(u4,n0).replace(yf,n0)),n=e.map(s=>s.match(uu).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>Na({...t,output:s}));return s=>{var l;const o=!a0.test(e[0])&&((l=e.find(u=>a0.test(u)))==null?void 0:l.replace(uu,""));let a=0;return e[0].replace(uu,()=>`${i[a++](s)}${o||""}`).replace(c4,f4)}},Ag="react-spring: ",sb=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${Ag}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},h4=sb(console.warn);function p4(){h4(`${Ag}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var m4=sb(console.warn);function g4(){m4(`${Ag}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function ld(t){return N.str(t)&&(t[0]=="#"||/\d/.test(t)||!Ng()&&ad.test(t)||t in(Pr||{}))}var si=Ng()?C.useEffect:C.useLayoutEffect,v4=()=>{const t=C.useRef(!1);return si(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function Og(){const t=C.useState()[1],e=v4();return()=>{e.current&&t(Math.random())}}function y4(t,e){const[n]=C.useState(()=>({inputs:e,result:t()})),r=C.useRef(),i=r.current;let s=i;return s?e&&s.inputs&&_4(e,s.inputs)||(s={inputs:e,result:t()}):s=n,C.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function _4(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var Mg=t=>C.useEffect(t,w4),w4=[];function sp(t){const e=C.useRef();return C.useEffect(()=>{e.current=t}),e.current}var Oa=Symbol.for("Animated:node"),E4=t=>!!t&&t[Oa]===t,pn=t=>t&&t[Oa],Dg=(t,e)=>WL(t,Oa,e),ud=t=>t&&t[Oa]&&t[Oa].getPayload(),ob=class{constructor(){Dg(this,this)}getPayload(){return this.payload||[]}},ol=class extends ob{constructor(t){super(),this._value=t,this.done=!0,this.durationProgress=0,N.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new ol(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return N.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,N.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},Ma=class extends ol{constructor(t){super(0),this._string=null,this._toString=Na({output:[t,t]})}static create(t){return new Ma(t)}getValue(){const t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(N.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=Na({output:[this.getValue(),t]})),this._value=0,super.reset()}},pc={dependencies:null},cd=class extends ob{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return Sn(this.source,(n,r)=>{E4(n)?e[r]=n.getValue(t):zt(n)?e[r]=yt(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&K(this.payload,t=>t.reset())}_makePayload(t){if(t){const e=new Set;return Sn(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){pc.dependencies&&zt(t)&&pc.dependencies.add(t);const e=ud(t);e&&K(e,n=>this.add(n))}},ab=class extends cd{constructor(t){super(t)}static create(t){return new ab(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const e=this.getPayload();return t.length==e.length?e.map((n,r)=>n.setValue(t[r])).some(Boolean):(super.setValue(t.map(S4)),!0)}};function S4(t){return(ld(t)?Ma:ol).create(t)}function op(t){const e=pn(t);return e?e.constructor:N.arr(t)?ab:ld(t)?Ma:ol}var l0=(t,e)=>{const n=!N.fun(t)||t.prototype&&t.prototype.isReactComponent;return C.forwardRef((r,i)=>{const s=C.useRef(null),o=n&&C.useCallback(p=>{s.current=k4(i,p)},[i]),[a,l]=b4(r,e),u=Og(),c=()=>{const p=s.current;if(n&&!p)return;(p?e.applyAnimatedValues(p,a.getValue(!0)):!1)===!1&&u()},d=new C4(c,l),f=C.useRef();si(()=>(f.current=d,K(l,p=>Gs(p,d)),()=>{f.current&&(K(f.current.deps,p=>Aa(p,f.current)),J.cancel(f.current.update))})),C.useEffect(c,[]),Mg(()=>()=>{const p=f.current;K(p.deps,w=>Aa(w,p))});const y=e.getComponentProps(a.getValue());return C.createElement(t,{...y,ref:o})})},C4=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&J.write(this.update)}};function b4(t,e){const n=new Set;return pc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new cd(t),pc.dependencies=null,[t,n]}function k4(t,e){return t&&(N.fun(t)?t(e):t.current=e),e}var u0=Symbol.for("AnimatedComponent"),x4=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new cd(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=c0(o)||"Anonymous";return N.str(o)?o=s[o]||(s[o]=l0(o,i)):o=o[u0]||(o[u0]=l0(o,i)),o.displayName=`Animated(${a})`,o};return Sn(t,(o,a)=>{N.arr(t)&&(a=c0(o)),s[a]=s(o)}),{animated:s}},c0=t=>N.str(t)?t:t&&N.str(t.displayName)?t.displayName:N.fun(t)&&t.name||null;function _t(t,...e){return N.fun(t)?t(...e):t}var Bo=(t,e)=>t===!0||!!(e&&t&&(N.fun(t)?t(e):ht(t).includes(e))),lb=(t,e)=>N.obj(t)?e&&t[e]:t,ub=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,I4=t=>t,dd=(t,e=I4)=>{let n=T4;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const s=e(t[i],i);N.und(s)||(r[i]=s)}return r},T4=["config","onProps","onStart","onChange","onPause","onResume","onRest"],N4={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function R4(t){const e={};let n=0;if(Sn(t,(r,i)=>{N4[i]||(e[i]=r,n++)}),n)return e}function Lg(t){const e=R4(t);if(e){const n={to:e};return Sn(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function Da(t){return t=yt(t),N.arr(t)?t.map(Da):ld(t)?cn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function cb(t){for(const e in t)return!0;return!1}function ap(t){return N.fun(t)||N.arr(t)&&N.obj(t[0])}function lp(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function db(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var P4={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},up={...P4.default,mass:1,damping:1,easing:o4.linear,clamp:!1},A4=class{constructor(){this.velocity=0,Object.assign(this,up)}};function O4(t,e,n){n&&(n={...n},d0(n,e),e={...n,...e}),d0(t,e),Object.assign(t,e);for(const o in up)t[o]==null&&(t[o]=up[o]);let{frequency:r,damping:i}=t;const{mass:s}=t;return N.und(r)||(r<.01&&(r=.01),i<0&&(i=0),t.tension=Math.pow(2*Math.PI/r,2)*s,t.friction=4*Math.PI*i*s/r),t}function d0(t,e){if(!N.und(e.decay))t.duration=void 0;else{const n=!N.und(e.tension)||!N.und(e.friction);(n||!N.und(e.frequency)||!N.und(e.damping)||!N.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var f0=[],M4=class{constructor(){this.changed=!1,this.values=f0,this.toValues=null,this.fromValues=f0,this.config=new A4,this.immediate=!1}};function fb(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{let l,u,c=Bo(n.cancel??(r==null?void 0:r.cancel),e);if(c)y();else{N.und(n.pause)||(i.paused=Bo(n.pause,e));let p=r==null?void 0:r.pause;p!==!0&&(p=i.paused||Bo(p,e)),l=_t(n.delay||0,e),p?(i.resumeQueue.add(f),s.pause()):(s.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),l=u.time-J.now()}function f(){l>0&&!cn.skipAnimation?(i.delayed=!0,u=J.setTimeout(y,l),i.pauseQueue.add(d),i.timeouts.add(u)):y()}function y(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),t<=(i.cancelId||0)&&(c=!0);try{s.start({...n,callId:t,cancel:c},o)}catch(p){a(p)}}})}var Fg=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?ys(t.get()):e.every(n=>n.noop)?hb(t.get()):Jt(t.get(),e.every(n=>n.finished)),hb=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Jt=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),ys=t=>({value:t,cancelled:!0,finished:!1});function pb(t,e,n,r){const{callId:i,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const u=dd(e,(E,m)=>m==="onRest"?void 0:E);let c,d;const f=new Promise((E,m)=>(c=E,d=m)),y=E=>{const m=i<=(n.cancelId||0)&&ys(r)||i!==n.asyncId&&Jt(r,!1);if(m)throw E.result=m,d(E),E},p=(E,m)=>{const h=new h0,v=new p0;return(async()=>{if(cn.skipAnimation)throw La(n),v.result=Jt(r,!1),d(v),v;y(h);const g=N.obj(E)?{...E}:{...m,to:E};g.parentId=i,Sn(u,(I,x)=>{N.und(g[x])&&(g[x]=I)});const S=await r.start(g);return y(h),n.paused&&await new Promise(I=>{n.resumeQueue.add(I)}),S})()};let w;if(cn.skipAnimation)return La(n),Jt(r,!1);try{let E;N.arr(t)?E=(async m=>{for(const h of m)await p(h)})(t):E=Promise.resolve(t(p,r.stop.bind(r))),await Promise.all([E.then(c),f]),w=Jt(r.get(),!0,!1)}catch(E){if(E instanceof h0)w=E.result;else if(E instanceof p0)w=E.result;else throw E}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return N.fun(o)&&J.batchedUpdates(()=>{o(w,r,r.item)}),w})()}function La(t,e){Wo(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var h0=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},p0=class extends Error{constructor(){super("SkipAnimationSignal")}},cp=t=>t instanceof jg,D4=1,jg=class extends tb{constructor(){super(...arguments),this.id=D4++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=pn(this);return t&&t.getValue()}to(...t){return cn.to(this,t)}interpolate(...t){return p4(),cn.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){Pa(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||sd.sort(this),Pa(this,{type:"priority",parent:this,priority:t})}},Ii=Symbol.for("SpringPhase"),mb=1,dp=2,fp=4,_f=t=>(t[Ii]&mb)>0,sr=t=>(t[Ii]&dp)>0,po=t=>(t[Ii]&fp)>0,m0=(t,e)=>e?t[Ii]|=dp|mb:t[Ii]&=~dp,g0=(t,e)=>e?t[Ii]|=fp:t[Ii]&=~fp,L4=class extends jg{constructor(t,e){if(super(),this.animation=new M4,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!N.und(t)||!N.und(e)){const n=N.obj(t)?{...t}:{...e,from:t};N.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(sr(this)||this._state.asyncTo)||po(this)}get goal(){return yt(this.animation.to)}get velocity(){const t=pn(this);return t instanceof ol?t.lastVelocity||0:t.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return _f(this)}get isAnimating(){return sr(this)}get isPaused(){return po(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:s}=r,o=ud(r.to);!o&&zt(r.to)&&(i=ht(yt(r.to))),r.values.forEach((u,c)=>{if(u.done)return;const d=u.constructor==Ma?1:o?o[c].lastPosition:i[c];let f=r.immediate,y=d;if(!f){if(y=u.lastPosition,s.tension<=0){u.done=!0;return}let p=u.elapsedTime+=t;const w=r.fromValues[c],E=u.v0!=null?u.v0:u.v0=N.arr(s.velocity)?s.velocity[c]:s.velocity;let m;const h=s.precision||(w==d?.005:Math.min(1,Math.abs(d-w)*.001));if(N.und(s.duration))if(s.decay){const v=s.decay===!0?.998:s.decay,g=Math.exp(-(1-v)*p);y=w+E/(1-v)*(1-g),f=Math.abs(u.lastPosition-y)<=h,m=E*g}else{m=u.lastVelocity==null?E:u.lastVelocity;const v=s.restVelocity||h/10,g=s.clamp?0:s.bounce,S=!N.und(g),I=w==d?u.v0>0:w<d;let x,A=!1;const M=1,L=Math.ceil(t/M);for(let oe=0;oe<L&&(x=Math.abs(m)>v,!(!x&&(f=Math.abs(d-y)<=h,f)));++oe){S&&(A=y==d||y>d==I,A&&(m=-m*g,y=d));const Z=-s.tension*1e-6*(y-d),Ie=-s.friction*.001*m,W=(Z+Ie)/s.mass;m=m+W*M,y=y+m*M}}else{let v=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,p=u.elapsedTime+=t)),v=(s.progress||0)+p/this._memoizedDuration,v=v>1?1:v<0?0:v,u.durationProgress=v),y=w+s.easing(v)*(d-w),m=(y-u.lastPosition)/t,f=v==1}u.lastVelocity=m,Number.isNaN(y)&&(console.warn("Got NaN while animating:",this),f=!0)}o&&!o[c].done&&(f=!1),f?u.done=!0:e=!1,u.setValue(y,s.round)&&(n=!0)});const a=pn(this),l=a.getValue();if(e){const u=yt(r.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(t){return J.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(sr(this)){const{to:t,config:e}=this.animation;J.batchedUpdates(()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return N.und(t)?(n=this.queue||[],this.queue=[]):n=[N.obj(t)?t:{...e,to:t}],Promise.all(n.map(r=>this._update(r))).then(r=>Fg(this,r))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),La(this._state,t&&this._lastCallId),J.batchedUpdates(()=>this._stop(e,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:r}=t;n=N.obj(n)?n[e]:n,(n==null||ap(n))&&(n=void 0),r=N.obj(r)?r[e]:r,r==null&&(r=void 0);const i={to:n,from:r};return _f(this)||(t.reverse&&([n,r]=[r,n]),r=yt(r),N.und(r)?pn(this)||this._set(n):this._set(r)),i}_update({...t},e){const{key:n,defaultProps:r}=this;t.default&&Object.assign(r,dd(t,(o,a)=>/^on/.test(a)?lb(o,n):o)),y0(this,t,"onProps"),go(this,"onProps",t,this);const i=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return fb(++this._lastCallId,{key:n,props:t,defaultProps:r,state:s,actions:{pause:()=>{po(this)||(g0(this,!0),bo(s.pauseQueue),go(this,"onPause",Jt(this,mo(this,this.animation.to)),this))},resume:()=>{po(this)&&(g0(this,!1),sr(this)&&this._resume(),bo(s.resumeQueue),go(this,"onResume",Jt(this,mo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(o=>{if(t.loop&&o.finished&&!(e&&o.noop)){const a=gb(t);if(a)return this._update(a,!0)}return o})}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(ys(this));const r=!N.und(t.to),i=!N.und(t.from);if(r||i)if(e.callId>this._lastToId)this._lastToId=e.callId;else return n(ys(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:d=u}=t;i&&!r&&(!e.default||N.und(c))&&(c=d),e.reverse&&([c,d]=[d,c]);const f=!Tn(d,u);f&&(a.from=d),d=yt(d);const y=!Tn(c,l);y&&this._focus(c);const p=ap(e.to),{config:w}=a,{decay:E,velocity:m}=w;(r||i)&&(w.velocity=0),e.config&&!p&&O4(w,_t(e.config,s),e.config!==o.config?_t(o.config,s):void 0);let h=pn(this);if(!h||N.und(c))return n(Jt(this,!0));const v=N.und(e.reset)?i&&!e.default:!N.und(d)&&Bo(e.reset,s),g=v?d:this.get(),S=Da(c),I=N.num(S)||N.arr(S)||ld(S),x=!p&&(!I||Bo(o.immediate||e.immediate,s));if(y){const oe=op(c);if(oe!==h.constructor)if(x)h=this._set(S);else throw Error(`Cannot animate between ${h.constructor.name} and ${oe.name}, as the "to" prop suggests`)}const A=h.constructor;let M=zt(c),L=!1;if(!M){const oe=v||!_f(this)&&f;(y||oe)&&(L=Tn(Da(g),S),M=!L),(!Tn(a.immediate,x)&&!x||!Tn(w.decay,E)||!Tn(w.velocity,m))&&(M=!0)}if(L&&sr(this)&&(a.changed&&!v?M=!0:M||this._stop(l)),!p&&((M||zt(l))&&(a.values=h.getPayload(),a.toValues=zt(c)?null:A==Ma?[1]:ht(S)),a.immediate!=x&&(a.immediate=x,!x&&!v&&this._set(l)),M)){const{onRest:oe}=a;K(j4,Ie=>y0(this,e,Ie));const Z=Jt(this,mo(this,l));bo(this._pendingCalls,Z),this._pendingCalls.add(n),a.changed&&J.batchedUpdates(()=>{var Ie;a.changed=!v,oe==null||oe(Z,this),v?_t(o.onRest,Z):(Ie=a.onStart)==null||Ie.call(a,Z,this)})}v&&this._set(g),p?n(pb(e.to,e,this._state,this)):M?this._start():sr(this)&&!y?this._pendingCalls.add(n):n(hb(g))}_focus(t){const e=this.animation;t!==e.to&&(o0(this)&&this._detach(),e.to=t,o0(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;zt(e)&&(Gs(e,this),cp(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;zt(t)&&Aa(t,this)}_set(t,e=!0){const n=yt(t);if(!N.und(n)){const r=pn(this);if(!r||!Tn(n,r.getValue())){const i=op(n);!r||r.constructor!=i?Dg(this,i.create(n)):r.setValue(n),r&&J.batchedUpdates(()=>{this._onChange(n,e)})}}return pn(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,go(this,"onStart",Jt(this,mo(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),_t(this.animation.onChange,t,this)),_t(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;pn(this).reset(yt(t.to)),t.immediate||(t.fromValues=t.values.map(e=>e.lastPosition)),sr(this)||(m0(this,!0),po(this)||this._resume())}_resume(){cn.skipAnimation?this.finish():sd.start(this)}_stop(t,e){if(sr(this)){m0(this,!1);const n=this.animation;K(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Pa(this,{type:"idle",parent:this});const r=e?ys(this.get()):Jt(this.get(),mo(this,t??n.to));bo(this._pendingCalls,r),n.changed&&(n.changed=!1,go(this,"onRest",r,this))}}};function mo(t,e){const n=Da(e),r=Da(t.get());return Tn(r,n)}function gb(t,e=t.loop,n=t.to){const r=_t(e);if(r){const i=r!==!0&&Lg(r),s=(i||t).reverse,o=!i||i.reset;return Fa({...t,loop:e,default:!1,pause:void 0,to:!s||ap(n)?n:void 0,from:o?t.from:void 0,reset:o,...i})}}function Fa(t){const{to:e,from:n}=t=Lg(t),r=new Set;return N.obj(e)&&v0(e,r),N.obj(n)&&v0(n,r),t.keys=r.size?Array.from(r):null,t}function F4(t){const e=Fa(t);return N.und(e.default)&&(e.default=dd(e)),e}function v0(t,e){Sn(t,(n,r)=>n!=null&&e.add(r))}var j4=["onStart","onRest","onChange","onPause","onResume"];function y0(t,e,n){t.animation[n]=e[n]!==ub(e,n)?lb(e[n],t.key):void 0}function go(t,e,...n){var r,i,s,o;(i=(r=t.animation)[e])==null||i.call(r,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var U4=["onStart","onChange","onRest"],z4=1,vb=class{constructor(t,e){this.id=z4++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(const e in t){const n=t[e];N.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(Fa(t)),this}start(t){let{queue:e}=this;return t?e=ht(t).map(Fa):this.queue=[],this._flush?this._flush(this,e):(Sb(this,e),hp(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;K(ht(e),r=>n[r].stop(!!t))}else La(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(N.und(t))this.start({pause:!0});else{const e=this.springs;K(ht(t),n=>e[n].pause())}return this}resume(t){if(N.und(t))this.start({pause:!1});else{const e=this.springs;K(ht(t),n=>e[n].resume())}return this}each(t){Sn(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Wo(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!r&&this._started,o=i||s&&n.size?this.get():null;i&&e.size&&Wo(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,Wo(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;J.onFrame(this._onFrame)}};function hp(t,e){return Promise.all(e.map(n=>yb(t,n))).then(n=>Fg(t,n))}async function yb(t,e,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=e,u=N.obj(e.default)&&e.default;o&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);const c=N.arr(i)||N.fun(i)?i:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):K(U4,w=>{const E=e[w];if(N.fun(E)){const m=t._events[w];e[w]=({finished:h,cancelled:v})=>{const g=m.get(E);g?(h||(g.finished=!1),v&&(g.cancelled=!0)):m.set(E,{value:null,finished:h||!1,cancelled:v||!1})},u&&(u[w]=e[w])}});const d=t._state;e.pause===!d.paused?(d.paused=e.pause,bo(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);const f=(r||Object.keys(t.springs)).map(w=>t.springs[w].start(e)),y=e.cancel===!0||ub(e,"cancel")===!0;(c||y&&d.asyncId)&&f.push(fb(++t._lastAsyncId,{props:e,state:d,actions:{pause:rp,resume:rp,start(w,E){y?(La(d,t._lastAsyncId),E(ys(t))):(w.onRest=a,E(pb(c,w,d,t)))}}})),d.paused&&await new Promise(w=>{d.resumeQueue.add(w)});const p=Fg(t,await Promise.all(f));if(o&&p.finished&&!(n&&p.noop)){const w=gb(e,o,i);if(w)return Sb(t,[w]),yb(t,w,!0)}return l&&J.batchedUpdates(()=>l(p,t,t.item)),p}function pp(t,e){const n={...t.springs};return e&&K(ht(e),r=>{N.und(r.keys)&&(r=Fa(r)),N.obj(r.to)||(r={...r,to:void 0}),Eb(n,r,i=>wb(i))}),_b(t,n),n}function _b(t,e){Sn(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Gs(n,t))})}function wb(t,e){const n=new L4;return n.key=t,e&&Gs(n,e),n}function Eb(t,e,n){e.keys&&K(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function Sb(t,e){K(e,n=>{Eb(t.springs,n,r=>wb(r,t))})}var al=({children:t,...e})=>{const n=C.useContext(mc),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=y4(()=>({pause:r,immediate:i}),[r,i]);const{Provider:s}=mc;return C.createElement(s,{value:e},t)},mc=$4(al,{});al.Provider=mc.Provider;al.Consumer=mc.Consumer;function $4(t,e){return Object.assign(t,C.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var Cb=()=>{const t=[],e=function(r){g4();const i=[];return K(t,(s,o)=>{if(N.und(r))i.push(s.start());else{const a=n(r,s,o);a&&i.push(s.start(a))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){const i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return K(t,r=>r.pause(...arguments)),this},e.resume=function(){return K(t,r=>r.resume(...arguments)),this},e.set=function(r){K(t,(i,s)=>{const o=N.fun(r)?r(s,i):r;o&&i.set(o)})},e.start=function(r){const i=[];return K(t,(s,o)=>{if(N.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},e.stop=function(){return K(t,r=>r.stop(...arguments)),this},e.update=function(r){return K(t,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(r,i,s){return N.fun(r)?r(s,i):r};return e._getProps=n,e};function W4(t,e,n){const r=N.fun(e)&&e;r&&!n&&(n=[]);const i=C.useMemo(()=>r||arguments.length==3?Cb():void 0,[]),s=C.useRef(0),o=Og(),a=C.useMemo(()=>({ctrls:[],queue:[],flush(m,h){const v=pp(m,h);return s.current>0&&!a.queue.length&&!Object.keys(v).some(S=>!m.springs[S])?hp(m,h):new Promise(S=>{_b(m,v),a.queue.push(()=>{S(hp(m,h))}),o()})}}),[]),l=C.useRef([...a.ctrls]),u=[],c=sp(t)||0;C.useMemo(()=>{K(l.current.slice(t,c),m=>{lp(m,i),m.stop(!0)}),l.current.length=t,d(c,t)},[t]),C.useMemo(()=>{d(0,Math.min(c,t))},n);function d(m,h){for(let v=m;v<h;v++){const g=l.current[v]||(l.current[v]=new vb(null,a.flush)),S=r?r(v,g):e[v];S&&(u[v]=F4(S))}}const f=l.current.map((m,h)=>pp(m,u[h])),y=C.useContext(al),p=sp(y),w=y!==p&&cb(y);si(()=>{s.current++,a.ctrls=l.current;const{queue:m}=a;m.length&&(a.queue=[],K(m,h=>h())),K(l.current,(h,v)=>{i==null||i.add(h),w&&h.start({default:y});const g=u[v];g&&(db(h,g.ref),h.ref?h.queue.push(g):h.start(g))})}),Mg(()=>()=>{K(a.ctrls,m=>m.stop(!0))});const E=f.map(m=>({...m}));return i?[E,i]:E}function jn(t,e){const n=N.fun(t),[[r],i]=W4(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,i]:r}function V4(t,e,n){const r=N.fun(e)&&e,{reset:i,sort:s,trail:o=0,expires:a=!0,exitBeforeEnter:l=!1,onDestroyed:u,ref:c,config:d}=r?r():e,f=C.useMemo(()=>r||arguments.length==3?Cb():void 0,[]),y=ht(t),p=[],w=C.useRef(null),E=i?null:w.current;si(()=>{w.current=p}),Mg(()=>(K(p,W=>{f==null||f.add(W.ctrl),W.ctrl.ref=f}),()=>{K(w.current,W=>{W.expired&&clearTimeout(W.expirationId),lp(W.ctrl,f),W.ctrl.stop(!0)})}));const m=H4(y,r?r():e,E),h=i&&w.current||[];si(()=>K(h,({ctrl:W,item:q,key:ue})=>{lp(W,f),_t(u,q,ue)}));const v=[];if(E&&K(E,(W,q)=>{W.expired?(clearTimeout(W.expirationId),h.push(W)):(q=v[q]=m.indexOf(W.key),~q&&(p[q]=W))}),K(y,(W,q)=>{p[q]||(p[q]={key:m[q],item:W,phase:"mount",ctrl:new vb},p[q].ctrl.item=W)}),v.length){let W=-1;const{leave:q}=r?r():e;K(v,(ue,le)=>{const P=E[le];~ue?(W=p.indexOf(P),p[W]={...P,item:y[ue]}):q&&p.splice(++W,0,P)})}N.fun(s)&&p.sort((W,q)=>s(W.item,q.item));let g=-o;const S=Og(),I=dd(e),x=new Map,A=C.useRef(new Map),M=C.useRef(!1);K(p,(W,q)=>{const ue=W.key,le=W.phase,P=r?r():e;let j,V;const Ee=_t(P.delay||0,ue);if(le=="mount")j=P.enter,V="enter";else{const Le=m.indexOf(ue)<0;if(le!="leave")if(Le)j=P.leave,V="leave";else if(j=P.update)V="update";else return;else if(!Le)j=P.enter,V="enter";else return}if(j=_t(j,W.item,q),j=N.obj(j)?Lg(j):{to:j},!j.config){const Le=d||I.config;j.config=_t(Le,W.item,q,V)}g+=o;const he={...I,delay:Ee+g,ref:c,immediate:P.immediate,reset:!1,...j};if(V=="enter"&&N.und(he.from)){const Le=r?r():e,it=N.und(Le.initial)||E?Le.from:Le.initial;he.from=_t(it,W.item,q)}const{onResolve:Zn}=he;he.onResolve=Le=>{_t(Zn,Le);const it=w.current,dt=it.find(Nt=>Nt.key===ue);if(dt&&!(Le.cancelled&&dt.phase!="update")&&dt.ctrl.idle){const Nt=it.every(bn=>bn.ctrl.idle);if(dt.phase=="leave"){const bn=_t(a,dt.item);if(bn!==!1){const qs=bn===!0?0:bn;if(dt.expired=!0,!Nt&&qs>0){qs<=2147483647&&(dt.expirationId=setTimeout(S,qs));return}}}Nt&&it.some(bn=>bn.expired)&&(A.current.delete(dt),l&&(M.current=!0),S())}};const de=pp(W.ctrl,he);V==="leave"&&l?A.current.set(W,{phase:V,springs:de,payload:he}):x.set(W,{phase:V,springs:de,payload:he})});const L=C.useContext(al),oe=sp(L),Z=L!==oe&&cb(L);si(()=>{Z&&K(p,W=>{W.ctrl.start({default:L})})},[L]),K(x,(W,q)=>{if(A.current.size){const ue=p.findIndex(le=>le.key===q.key);p.splice(ue,1)}}),si(()=>{K(A.current.size?A.current:x,({phase:W,payload:q},ue)=>{const{ctrl:le}=ue;ue.phase=W,f==null||f.add(le),Z&&W=="enter"&&le.start({default:L}),q&&(db(le,q.ref),(le.ref||f)&&!M.current?le.update(q):(le.start(q),M.current&&(M.current=!1)))})},i?void 0:n);const Ie=W=>C.createElement(C.Fragment,null,p.map((q,ue)=>{const{springs:le}=x.get(q)||q.ctrl,P=W({...le},q.item,q,ue);return P&&P.type?C.createElement(P.type,{...P.props,key:N.str(q.key)||N.num(q.key)?q.key:q.ctrl.id,ref:P.ref}):P}));return f?[Ie,f]:Ie}var B4=1;function H4(t,{key:e,keys:n=e},r){if(n===null){const i=new Set;return t.map(s=>{const o=r&&r.find(a=>a.item===s&&a.phase!=="leave"&&!i.has(a));return o?(i.add(o),o.key):B4++})}return N.und(n)?t:N.fun(n)?t.map(n):ht(n)}var G4=class extends jg{constructor(t,e){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=Na(...e);const n=this._get(),r=op(n);Dg(this,r.create(n))}advance(t){const e=this._get(),n=this.get();Tn(e,n)||(pn(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&_0(this._active)&&wf(this)}_get(){const t=N.arr(this.source)?this.source.map(yt):ht(yt(this.source));return this.calc(...t)}_start(){this.idle&&!_0(this._active)&&(this.idle=!1,K(ud(this),t=>{t.done=!1}),cn.skipAnimation?(J.batchedUpdates(()=>this.advance()),wf(this)):sd.start(this))}_attach(){let t=1;K(ht(this.source),e=>{zt(e)&&Gs(e,this),cp(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))}),this.priority=t,this._start()}_detach(){K(ht(this.source),t=>{zt(t)&&Aa(t,this)}),this._active.clear(),wf(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=ht(this.source).reduce((e,n)=>Math.max(e,(cp(n)?n.priority:0)+1),0))}};function q4(t){return t.idle!==!1}function _0(t){return!t.size||Array.from(t).every(q4)}function wf(t){t.idle||(t.idle=!0,K(ud(t),e=>{e.done=!0}),Pa(t,{type:"idle",parent:t}))}cn.assign({createStringInterpolator:ib,to:(t,e)=>new G4(t,e)});var bb=/^--/;function Y4(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!bb.test(t)&&!(Ho.hasOwnProperty(t)&&Ho[t])?e+"px":(""+e).trim()}var w0={};function K4(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:s,scrollLeft:o,viewBox:a,...l}=e,u=Object.values(l),c=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:w0[d]||(w0[d]=d.replace(/([A-Z])/g,f=>"-"+f.toLowerCase())));i!==void 0&&(t.textContent=i);for(const d in r)if(r.hasOwnProperty(d)){const f=Y4(d,r[d]);bb.test(d)?t.style.setProperty(d,f):t.style[d]=f}c.forEach((d,f)=>{t.setAttribute(d,u[f])}),s!==void 0&&(t.scrollTop=s),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var Ho={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q4=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),X4=["Webkit","Ms","Moz","O"];Ho=Object.keys(Ho).reduce((t,e)=>(X4.forEach(n=>t[Q4(n,e)]=t[e]),t),Ho);var J4=/^(matrix|translate|scale|rotate|skew)/,Z4=/^(translate)/,e3=/^(rotate|skew)/,Ef=(t,e)=>N.num(t)&&t!==0?t+e:t,cu=(t,e)=>N.arr(t)?t.every(n=>cu(n,e)):N.num(t)?t===e:parseFloat(t)===e,t3=class extends cd{constructor({x:t,y:e,z:n,...r}){const i=[],s=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>Ef(a,"px")).join(",")})`,cu(o,0)])),Sn(r,(o,a)=>{if(a==="transform")i.push([o||""]),s.push(l=>[l,l===""]);else if(J4.test(a)){if(delete r[a],N.und(o))return;const l=Z4.test(a)?"px":e3.test(a)?"deg":"";i.push(ht(o)),s.push(a==="rotate3d"?([u,c,d,f])=>[`rotate3d(${u},${c},${d},${Ef(f,l)})`,cu(f,0)]:u=>[`${a}(${u.map(c=>Ef(c,l)).join(",")})`,cu(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new n3(i,s)),super(r)}},n3=class extends tb{constructor(t,e){super(),this.inputs=t,this.transforms=e,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return K(this.inputs,(n,r)=>{const i=yt(n[0]),[s,o]=this.transforms[r](N.arr(i)?i:n.map(yt));t+=" "+s,e=e&&o}),e?"none":t}observerAdded(t){t==1&&K(this.inputs,e=>K(e,n=>zt(n)&&Gs(n,this)))}observerRemoved(t){t==0&&K(this.inputs,e=>K(e,n=>zt(n)&&Aa(n,this)))}eventObserved(t){t.type=="change"&&(this._value=null),Pa(this,t)}},r3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];cn.assign({batchedUpdates:Uw.unstable_batchedUpdates,createStringInterpolator:ib,colors:qL});var i3=x4(r3,{applyAnimatedValues:K4,createAnimatedStyle:t=>new t3(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),En=i3.animated;function s3(){const t=Ba(),[e,n]=C.useState(""),[r,i]=C.useState(!1),s=Sg();return C.useEffect(()=>{Um(s,o=>{o?(DL(o.uid,"schedules"),n(o.email?o.email:"User")):t("/")})},[]),_.jsxs("section",{className:"relative",children:[_.jsx(o3,{menuOpen:r}),_.jsxs("nav",{className:"flex justify-between box-border p-1 h-20",children:[_.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-color-logo-2.png"}),_.jsxs("div",{className:"flex gap-4 items-center box-border pr-4",children:[_.jsx("p",{children:e}),_.jsx(a3,{menuOpen:r,handleOnClick:()=>i(o=>!o)})]})]}),_.jsx(da,{to:"schedule",className:"text-c5",children:"Schedule"})]})}function o3({menuOpen:t}){const[e,n]=jn(()=>({from:{x:"0%"}}),[]);C.useEffect(()=>{n.start({to:{x:t?"-100%":"0%"}})},[t]);async function r(){await Cg()}return _.jsxs(En.div,{className:"absolute top-20 left-full bg-c1 z-10 p-2 w-28",style:e,children:[_.jsx("p",{className:"hover:underline cursor-pointer",children:"Settings"}),_.jsx("p",{onClick:()=>void r(),className:"mt-2 hover:underline cursor-pointer",children:"Sign Out"})]})}function a3({menuOpen:t,handleOnClick:e}){const i=["M1 20L100 20","M1 50L75 50","M1 80L50 80"],s=["M1 1L100 100","M1 100L100 1","M1 100L100 1"],o=jn({d:t?s[0]:i[0]}),a=jn({d:t?s[1]:i[1]}),l=jn({d:t?s[2]:i[2]});return _.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"none",className:"h-10 aspect-square",onClick:e,children:[_.jsx(En.path,{d:o.d,stroke:"#33363F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),_.jsx(En.path,{d:a.d,stroke:"#33363F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),_.jsx(En.path,{d:l.d,stroke:"#33363F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}function l3({viewData:t}){const[e,n]=C.useState([]);return C.useEffect(()=>{n(()=>t.map((r,i)=>_.jsx(C.Fragment,{children:_.jsx(u3,{blocksToShow:r})},i)))},[t]),_.jsxs("section",{className:"md:col-span-7 md:row-span-6 max-md:min-h-[60%] col-span-full bg-c1 rounded-lg md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-1",children:[_.jsx("div",{className:"col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]",children:[...Array(21).keys()].map(r=>_.jsxs("span",{className:"translate-y-1/2 box-border md:pr-4 md:text-xs text-[0.5rem] flex items-center justify-end pr-2",children:[Math.floor(r/2)+8,":",r%2===0?"00":"30"]},r))}),_.jsxs("div",{className:"col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative",children:[_.jsx("div",{className:"absolute w-full h-full grid grid-rows-[repeat(20,minmax(0,1fr))] row-start-2",children:[...Array(19).keys()].map(r=>_.jsx("div",{children:_.jsx(E0,{n:r,lineProperty:"width"})},`horizontal-${r}`))}),_.jsxs("div",{className:"absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]",children:[_.jsx("div",{className:"row-span-1 col-span-full"}),[...Array(4).keys()].map(r=>_.jsx("div",{className:"row-[span_20/span_20]",children:_.jsx(E0,{n:r,lineProperty:"height"})},`vertical-${r}`))]}),["Monday","Tuesday","Wednesday","Thursday","Friday"].map(r=>{const i=window.innerWidth>=1100?r:r.slice(0,3);return _.jsx("span",{className:"text-center font-semibold md:text-base text-xs",children:i},r)}),_.jsx("div",{className:"grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg md:shadow-lg shadow-md",children:e})]})]})}function E0({n:t,lineProperty:e}){const n=jn({from:{[e]:"0%"},to:{[e]:"100%"},delay:e==="height"?t*100:t*30}),r=e==="height"?"border-r-2 w-full left-[1px]":"border-b-2 h-full top-[1px]";return _.jsx(En.div,{className:`${e==="height"?"w-full py-2":"h-full px-2"} box-border`,style:n,children:_.jsx("div",{className:`${r} border-[hsl(0,0%,77%)] h-full w-full relative`})})}function u3({blocksToShow:t}){const e=V4(t,{from:{y:-20,scale:0},enter:{y:0,scale:1},leave:{y:-20,scale:0},trail:50}),{chosenClasses:n,setChosenClasses:r}=C.useContext(ll);return e((i,s)=>{const o=Object.entries(s.time).flat();return _.jsxs(En.div,{className:"md:text-[14px] md:leading-[14px] text-[8px] leading-[10px] z-10 p-1 border border-[black] outline outline-1 outline-[black] text-[black] cursor-pointer rounded-lg overflow-hidden",style:{gridColumnStart:o[0],gridRowStart:o[1][0],gridRowEnd:o[1][1],backgroundColor:s.color,...i},onClick:()=>{r(n.filter(a=>a.code!==s.code))},children:[_.jsx("p",{className:"line-clamp-2 font-semibold",children:s.title}),_.jsx("p",{className:"line-clamp-1 font-light mt-1",children:s.code}),_.jsx("p",{className:"font-light",children:s.section}),_.jsx("p",{className:"line-clamp-2 mt-1",children:s.teacher})]},s.code+s.section+o[0])})}function S0(){return _.jsxs("div",{className:"gap-2 w-full h-full flex flex-col items-center justify-center",children:[_.jsx("img",{src:"/me-schedule-maker/images/cooking-pot.gif",alt:"cooking-pot git",className:"h-20"}),_.jsx("p",{children:"Wait it's cooking"})]})}function c3({viewData:t,userData:e}){const n="jac-mock-schedule-maker",[r,i]=C.useState(()=>{if(e)return e.schedules?e.schedules:[];{const l=window.localStorage.getItem(n);return l?JSON.parse(l):[]}}),s=C.useRef(r.length),{chosenClasses:o}=C.useContext(ll);function a(l){do s.current+=1;while(r.map(u=>u.id).includes(s.current));i([...r,{id:s.current,vData:l,data:o}])}return C.useEffect(()=>{e?OL(e.uid,r).catch(l=>console.log(l)):window.localStorage.setItem(n,JSON.stringify(r))},[r]),_.jsxs("section",{className:"bg-c1 rounded-lg box-border flex w-full flex-wrap gap-2 p-2",children:[_.jsx("div",{className:"bg-c2 hover:bg-c3 active:bg-c4 transition rounded-md flex items-center justify-center md:p-4 p-2 cursor-pointer h-20",onClick:()=>a(t),children:_.jsx(dn,{icon:AT,className:"md:text-4xl text-xl"})}),r.map(l=>_.jsx(f3,{i:l,savedSchedule:r,setSavedSchedule:i},l.id))]})}function d3({blocksToShow:t}){return t.map(e=>{const n=Object.entries(e.time).flat();return _.jsx("div",{className:"z-10 border border-[black] box-border rounded-sm",style:{gridColumnStart:n[0],gridRowStart:n[1][0],gridRowEnd:n[1][1],backgroundColor:e.color}},e.code+e.section+n[0])})}function f3({i:t,savedSchedule:e,setSavedSchedule:n}){const{setChosenClasses:r}=C.useContext(ll),i=structuredClone(t);i.data||(i.data=[]),i.vData||(i.vData=[]);const[s,o]=jn(()=>({from:{opacity:0,y:30,scale:1},to:{opacity:1,y:0}}),[]);function a(u){u.stopPropagation(),o.start({from:{opacity:1,scale:1},to:{opacity:0,scale:0},onResolve:()=>{n(e.filter(c=>c.id!==t.id))}})}function l(){r(i.data)}return _.jsxs(En.div,{className:"min-w-[calc(5rem*1.6)] bg-[white] rounded-md grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 relative hover:bg-slate-200 md:shadow-lg shadow-md cursor-pointer h-20 overflow-hidden",style:s,onClick:l,children:[i.vData.map((u,c)=>_.jsx(d3,{blocksToShow:u},c)),_.jsx(dn,{icon:xT,className:"absolute opacity-10 m-1 bottom-0 right-0 hover:opacity-50 cursor-pointer",onClick:a})]},t.id)}function h3({setInput:t,setCurrent:e}){const[n,r]=C.useState(!1),i=C.useRef(null);function s(o){if(o.preventDefault(),!i.current){t(""),e("search");return}const a=i.current;function l(g){return a.elements.namedItem(g)}const u=l("courseName").value.toUpperCase(),c=l("className").value,d=l("teacherName").value.split(" ").flatMap(g=>g.split(",")).filter(g=>g!=="").map(g=>`p=${g}`),f=Number(l("ratingMax").value),y=Number(l("ratingMin").value),p=[y?`r>${y}`:"",f?`r<${f}`:""],w=Number(l("scoreMax").value),E=Number(l("scoreMin").value),m=[E?`s>${E}`:"",w?`s<${w}`:""],h=["monday","tuesday","wednesday","thursday","friday","honours","blended"].map(g=>l(g).checked).map((g,S)=>g?["M","T","W","R","F","honours","blended"].at(S):""),v=[u,c,...d,...p,...m,...h];console.log(v),t(v.filter(g=>g!=="").join(",")),e("search")}return _.jsx("div",{className:"box-border w-full h-full p-2 overflow-auto",children:_.jsxs("form",{onSubmit:s,className:"flex flex-col md:text-xl text-base gap-4",ref:i,children:[_.jsxs("label",{children:[_.jsx("p",{className:"font-semibold",children:"Course Name or Code"}),_.jsx("input",{placeholder:"English",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"courseName"})]}),_.jsxs("label",{children:[_.jsx("p",{className:"font-semibold",children:"Class Name"}),_.jsx("input",{placeholder:"Hockey is everything",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"className"})]}),_.jsxs("label",{children:[_.jsx("p",{className:"font-semibold",children:"Teacher Name"}),_.jsx("input",{placeholder:"Patrik Burger",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"teacherName"})]}),_.jsxs("div",{className:"flex gap-4 w-full",children:[_.jsxs("label",{className:"basis-1/2",children:[_.jsx("p",{className:"font-semibold",children:"Rating /5"}),_.jsxs("div",{className:"flex gap-1 w-full",children:[_.jsx("div",{className:"basis-full",children:_.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"ratingMin"})}),_.jsx("p",{className:"flex items-center",children:"to"}),_.jsx("div",{className:"basis-full",children:_.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"5",name:"ratingMax"})})]})]}),_.jsxs("label",{className:"basis-1/2",children:[_.jsxs("div",{className:"font-semibold relative",children:["Score /100",_.jsx(dn,{icon:tE,className:"ml-2",onMouseOver:()=>r(!0),onMouseOut:()=>r(!1)}),n&&_.jsx("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:_.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."})})]}),_.jsxs("div",{className:"flex gap-1 w-full",children:[_.jsx("div",{className:"basis-full",children:_.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"scoreMin"})}),_.jsx("p",{className:"flex items-center",children:"to"}),_.jsx("div",{className:"basis-full",children:_.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"100",name:"scoreMax"})})]})]})]}),_.jsxs("label",{className:"flex gap-4",children:[_.jsxs("div",{className:"basis-1/2",children:[_.jsx("p",{className:"font-semibold",children:"Days"}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"monday"})," Monday"]}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"tuesday"})," Tuesday"]}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"wednesday"})," Wednesday"]}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"thursday"})," Thursday"]}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"friday"})," Friday"]})]}),_.jsxs("div",{className:"basis-1/2",children:[_.jsx("p",{className:"font-semibold",children:"Special"}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"honours"})," Honours"]}),_.jsxs("p",{className:"pl-4",children:[_.jsx("input",{type:"checkbox",name:"blended"})," Blended"]})]})]}),_.jsxs("div",{className:"flex justify-end gap-2",children:[_.jsx("button",{type:"reset",className:"rounded-lg p-2 transition hover:outline-c9 outline outline-1 outline-c1",children:"Clear"}),_.jsx("button",{type:"submit",className:"rounded-lg bg-c9 p-2 text-c1 transition hover:bg-c7",children:"Apply"})]})]})})}function p3({input:t,classes:e,setLoading:n}){C.useEffect(()=>{n(!0)},[]);let r=t.split(",");r=r.map(u=>u.trim());const{chosenClasses:i,setChosenClasses:s}=C.useContext(ll);function o(u,c){const f=["[0-9]","[0-9]","[0-9]","-","[0-9A-Z]","[0-9A-Z]","[0-9A-Z]","-","[0-9A-Z]","[0-9A-Z]"].slice(0,u.length).join(""),y=new RegExp(f);if(["r>","r<","r="].includes(u.slice(0,2))&&u.length>2){if(!Number(u.slice(2)))return[];const p=Number(u.slice(2));switch(u[1]){case"=":return c.filter(w=>w.lecture.rating.avg===p);case">":return c.filter(w=>w.lecture.rating.avg>=p);case"<":return c.filter(w=>w.lecture.rating.avg<=p)}}else if(["s>","s<","s="].includes(u.slice(0,2))&&u.length>2){if(!Number(u.slice(2)))return[];const p=Number(u.slice(2));switch(u[1]){case"=":return c.filter(w=>w.lecture.rating.score===p);case">":return c.filter(w=>w.lecture.rating.score>=p);case"<":return c.filter(w=>w.lecture.rating.score<=p)}}else if(u.slice(0,2)==="p="){const p=u.slice(2).toLowerCase();return c.filter(w=>w.lecture.prof.toLowerCase().includes(p))}else{if(y.test(u))return c.filter(p=>p.code.startsWith(u));if(u.split("").every(p=>"MTWRF".includes(p)))return c.filter(p=>{const w=structuredClone(Object.keys(p.lecture)),E=structuredClone(Object.keys(p.lab));return w.filter(h=>!["title","prof","rating"].includes(h)).concat(E.filter(h=>!["title","prof","rating"].includes(h))).join("").includes(u)});if(u.toUpperCase()===u)return c.filter(p=>p.course.startsWith(u));if(["honours","blended"].some(p=>p.startsWith(u.toLowerCase()))){const p=u.toLowerCase();if("honours".startsWith(p))return c.filter(w=>w.more.startsWith("For Honours"));if("blended".startsWith(p))return c.filter(w=>w.more.startsWith("BLENDED"))}else return c.filter(p=>p.lecture.title.toLowerCase().startsWith(u.toLowerCase()))}return[]}let a=o(r[0],e);r.slice(1).forEach(u=>{a=o(u,a)});function l(u){if(i.some(c=>u.code===c.code&&u.section===c.section))s(i.filter(c=>!(u.code===c.code&&u.section===c.section)));else if(i.some(c=>u.code===c.code)){alert("You already have a class from this course");return}else s([...i,u])}return _.jsx(_.Fragment,{children:a.map((u,c)=>_.jsxs("div",{className:"bg-c2 p-2 box-border md:mb-3 mb-2 rounded-lg md:shadow-lg shadow-md hover:bg-c3 transition cursor-pointer md:text-base text-xs",onClick:()=>l(u),children:[_.jsxs("p",{className:"font-light",children:[u.program,": ",u.course," ",u.code]}),_.jsxs("p",{className:"md:text-xl font-bold text-base",children:[u.section," ",u.lecture.title]}),_.jsxs("div",{className:"ml-4 relative",children:[u.lecture.prof," ",_.jsx("span",{className:"font-bold",children:u.lecture.rating.score===0?"N/A":u.lecture.rating.score})," ",_.jsx(C0,{rating:u.lecture.rating})]}),Object.entries(u.lecture).filter(d=>!["title","prof","rating"].includes(d[0])).map((d,f)=>_.jsxs("p",{className:"ml-8 font-extralight",children:[_.jsx("span",{className:"font-normal",children:d[0]})," ",d[1]]},f)),"prof"in u.lab&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"ml-4 relative",children:[_.jsx("u",{children:"Lab"}),": ",u.lab.prof," ",_.jsx("span",{className:"font-bold",children:u.lab.rating.score===0?"N/A":u.lab.rating.score})," ",_.jsx(C0,{rating:u.lab.rating})]}),Object.entries(u.lab).filter(d=>!["title","prof","rating"].includes(d[0])).map((d,f)=>_.jsxs("p",{className:"ml-8 font-extralight",children:[_.jsx("span",{className:"font-normal",children:d[0]})," ",d[1]]},f))]}),u.more!==""&&_.jsx(_.Fragment,{children:_.jsx("p",{className:"text-c6",children:u.more})})]},`i.code + ${c}`))})}function m3({classes:t,setLoading:e,viewData:n,userData:r}){const[i,s]=C.useState(""),o=C.useDeferredValue(i),[a,l]=C.useState("search"),u=C.useDeferredValue(a),[c,d]=C.useState(!1);return _.jsxs("section",{className:"md:col-span-5 md:row-span-6 bg-c1 rounded-lg box-border flex flex-col max-md:order-2",children:[_.jsxs("nav",{className:"flex justify-between w-full p-2 box-border",children:[_.jsx(Sf,{current:a,setCurrent:l,text:"search"}),_.jsx(Sf,{current:a,setCurrent:l,text:"filter"}),_.jsx(Sf,{current:a,setCurrent:l,text:"saved"})]}),a==="search"&&u===a?_.jsxs(_.Fragment,{children:[_.jsxs("label",{className:"relative md:mx-4 mx-2 mt-2",children:[_.jsx(dn,{icon:TT,className:"absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer",onMouseOver:()=>d(!0),onMouseOut:()=>d(!1)}),c&&_.jsxs("div",{className:"absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-xs w-[70dvw]",children:[_.jsx("p",{children:"You can search any keyword for the class you are looking for."}),_.jsx("br",{}),_.jsx("p",{children:'Separate your keywords with commas. E.g. "Biology, 101" will search for all biology 101-NYA-05 and biology 101-DCN-05 classes.'}),_.jsx("br",{}),"Examples: ",_.jsx("br",{}),_.jsxs("ul",{className:"pl-4",children:[_.jsxs("li",{className:"list-disc",children:[_.jsxs("span",{className:"font-bold",children:["r",">","4.5"]})," (teachers with +4.5/5 rating. Symbol can be ","<"," , ",">"," or ","="," )"]}),_.jsxs("li",{className:"list-disc",children:[_.jsxs("span",{className:"font-bold",children:["s",">","80"]})," (teachers with +80/100 score. Symbol can be ","<"," , ",">"," or ","="," )"]}),_.jsxs("li",{className:"list-disc",children:[_.jsx("span",{className:"font-bold",children:"Linear Al, W, F"})," (Linear Algebra I/II/III that has classes on Wednesday and Friday. DAYS must be in ALL CAPS)"]}),_.jsxs("li",{className:"list-disc",children:[_.jsx("span",{className:"font-bold",children:"honours"}),' (honours classes. Special keywords include "honours" and "blended")']}),_.jsxs("li",{className:"list-disc",children:[_.jsx("span",{className:"font-bold",children:"p=Steven Randall, blended"})," ",'(blended classes by teacher who has "Steven Randall" in their name. Teachers must have "p=" before)']}),_.jsxs("li",{className:"list-disc",children:[_.jsx("span",{className:"font-bold",children:"ENGLISH, haunted house"})," ",'(all English class that has "haunted house" in their name. COURSE NAME must be in ALL CAPS)']})]})]}),_.jsx("input",{className:"bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md",placeholder:"COURSE, code, professor, rating, class name, ...",value:i,onChange:f=>s(f.target.value)})]}),_.jsx("div",{className:"w-full h-full box-border rounded-lg overflow-y-auto md:px-4 px-2 md:mt-4 mt-2",children:o===i?_.jsx(p3,{input:o,classes:t,setLoading:e}):_.jsx(S0,{})})]}):a==="search"&&_.jsx(S0,{}),a==="filter"&&_.jsx(h3,{setInput:s,setCurrent:l}),a==="saved"&&_.jsx(c3,{viewData:n,userData:r})]})}function Sf({current:t,setCurrent:e,text:n}){var o;const r={width:t===n?"100%":"0%"},[i,s]=jn(()=>({from:r}),[]);return C.useEffect(()=>{s.start({to:r})},[t]),_.jsxs("div",{className:"w-1/3 text-center cursor-pointer box-border border-c9 border-solid relative flex justify-center",onClick:()=>e(n),children:[(o=n.at(0))==null?void 0:o.toUpperCase().concat(n.slice(1)),_.jsx(En.p,{className:"absolute h-full box-border border-solid border-b-c9 border-b-2",style:i})]})}function C0({rating:t}){const[e,n]=C.useState(!1);return _.jsxs(_.Fragment,{children:[_.jsx(dn,{icon:tE,className:"cursor-pointer",onMouseOver:()=>n(!0),onMouseOut:()=>n(!1)}),e&&_.jsxs("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:[_.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."}),_.jsxs("ul",{className:"pl-4 shrink-0",children:[_.jsxs("li",{className:"list-disc",children:["Rating: ",t.avg===0?"N/A":`${t.avg}/5`]}),_.jsxs("li",{className:"list-disc",children:["Raters: ",t.avg===0?"N/A":t.nRating]}),_.jsxs("li",{className:"list-disc",children:["Take Again:"," ",t.avg===0?"N/A":`${t.takeAgain.toFixed(1)}%`]}),_.jsxs("li",{className:"list-disc",children:["Difficulty: ",t.avg===0?"N/A":`${t.difficulty}/5`]})]})]})]})}const ll=C.createContext({chosenClasses:[],setChosenClasses:()=>{}});function b0({user:t}){const e=Ba(),[n,r]=C.useState([]),[i,s]=C.useState(!1),[o,a]=C.useState([]),[l,u]=C.useState(null),c=C.useMemo(()=>d(o),[o]);C.useEffect(()=>{f(c)&&(a(o.slice(0,-1)),alert("The chosen class overlaps with another!"))},[c]),C.useEffect(()=>{t&&Um(Sg(),w=>{w?ML(w.uid,E=>{u({uid:w.uid,schedules:E.val()})},"schedules"):e("/")});async function p(w,E){try{const m=await fetch(w);if(!m.ok)throw new Error("Network response was not ok");const h=await m.json();E(h)}catch(m){console.log(m)}}p("/me-schedule-maker/data/all.json",r).catch(w=>console.log(w))},[]);function d(p){const w=["M","T","W","R","F"],E=[...Array(21).keys()].map(v=>(v%2===0?v*50+800:Math.floor(v/2)*2*50+830).toFixed(0)),m=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(190,97%,85%)"];return p.map((v,g)=>{const S=structuredClone(Object.entries(v.lecture)),I=structuredClone(Object.entries(v.lab?v.lab:{}));return S.filter(A=>!["title","prof","rating"].includes(A[0])).concat(I.filter(A=>!["title","prof","rating"].includes(A[0]))).flatMap(A=>{const M=A[0].split("").filter(Ie=>Ie==="S"?(alert("There is class on Saturday as well"),!1):!0),L=A[1],oe=L.split("-")[0],Z=L.split("-")[1];return M.flatMap(Ie=>{const W=E.findIndex(le=>Number(le)===Number(oe))+1,q=E.findIndex(le=>Number(le)===Number(Z))+1,ue=w.findIndex(le=>le===Ie)+1;return{code:v.code,section:v.section,time:{[`${ue}`]:[W,q]},color:m[g],teacher:v.lecture.prof,title:v.lecture.title}})})})}function f(p){const w=p.flat().map(S=>S.time),E=w.filter(S=>S[1]).flatMap(S=>Object.values(S)),m=w.filter(S=>S[2]).flatMap(S=>Object.values(S)),h=w.filter(S=>S[3]).flatMap(S=>Object.values(S)),v=w.filter(S=>S[4]).flatMap(S=>Object.values(S)),g=w.filter(S=>S[5]).flatMap(S=>Object.values(S));return!![E,m,h,v,g].some(S=>{if(S.length<=1)return!1;const I=S.at(-1);return!!S.slice(0,-1).some(x=>Number(x[0])>Number(I[0])?Number(I[1])>Number(x[0]):Number(x[0])<Number(I[0])?Number(I[0])<Number(x[1]):Number(x[0])===Number(I[0]))})}async function y(){await Cg()}return _.jsxs(ll.Provider,{value:{chosenClasses:o,setChosenClasses:a},children:[_.jsxs("nav",{className:"md:text-base text-xs w-full bg-c9 text-c1 shrink-0 flex justify-between items-center",children:[_.jsx(dn,{icon:RT,className:"ml-2 cursor-pointer transition hover:text-c4",onClick:()=>e("/")}),_.jsxs("p",{children:["Fall 2023 JAC"," ",_.jsx("span",{className:" max-md:hidden",children:"Mock Schedule Maker"})]}),_.jsx("p",{onClick:()=>void y(),className:"mr-2 cursor-pointer transition hover:text-c4",children:l?"Sign Out":""})]}),_.jsxs("section",{className:"w-full basis-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 px-2 pb-2 text-c9 flex flex-col md:text-base text-xs overflow-auto",children:[_.jsx(m3,{classes:n,setLoading:s,viewData:c,userData:l}),i&&n.length!==0&&_.jsx(_.Fragment,{children:_.jsx(l3,{viewData:c})})]})]})}function g3(){const[t,e]=C.useState("Login"),n=Ba(),[r,i]=C.useState(!0);C.useEffect(()=>{Um(Sg(),o=>{o&&(o.emailVerified?n(`/users/${o.uid}`):(i(!1),Cg().catch(a=>console.log(a))))})},[]);function s(o){o==="Login"?e("Login"):o==="Sign Up"&&e("Sign Up")}return _.jsx(_.Fragment,{children:_.jsxs("section",{className:"w-[100dvw] h-[100dvh] bg-white flex",children:[_.jsx("div",{className:"md:basis-5/12 w-full bg-white flex flex-col items-center justify-center box-border p-6",children:_.jsxs("div",{className:"bg-c1 w-full h-full flex flex-col items-center rounded-lg overflow-hidden",children:[_.jsx("nav",{className:"flex w-full shrink-0",children:["Login","Sign Up"].map(o=>_.jsx(v3,{meth:o,active:t,onClick:s},o))}),_.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-logo-black-on-transparent-background.png",className:"w-28 mt-12"}),_.jsx(y3,{active:t,notVerified:r})]})}),_.jsx("div",{className:"basis-7/12 bg-c1 text-xl p-4 md:block hidden",children:"The account creation feature is done! You can now create an account and access it anywhere. The home page is still being build."})]})})}function v3({meth:t,active:e,onClick:n}){const[r,i]=jn(()=>({from:{backgroundColor:t===e?"#03045e":"#caf0f8",color:t===e?"#caf0f8":"#03045e"}}),[]);return C.useEffect(()=>{i.start({to:{backgroundColor:t===e?"#03045e":"#caf0f8",color:t===e?"#caf0f8":"#03045e"}})},[e]),_.jsx(_.Fragment,{children:_.jsx(En.p,{className:"text-center basis-1/2 cursor-pointer p-2 box-border text-c9",style:r,onClick:()=>n(t),children:t},t)})}function y3({active:t,notVerified:e}){const[n,r]=jn(()=>({from:{x:"0%"}}),[]);return C.useEffect(()=>{r.start({to:{x:t==="Login"?"0%":"-100%"}})},[t]),_.jsx("div",{className:"overflow-hidden w-full h-full",children:_.jsxs(En.div,{className:"flex relative",style:n,children:[_.jsx(FL,{notVerified:e}),_.jsx(jL,{})]})})}function Li(){const t=eE();return _.jsxs("section",{className:"w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[_.jsx("h1",{className:"font-bold text-3xl",children:"Oops!"}),_.jsx("p",{children:"Something went wrong"}),_.jsx("p",{className:"font-light",children:t.statusText||t.message})]})}const _3=mT([{path:"/",element:_.jsx(g3,{}),errorElement:_.jsx(Li,{})},{path:"/forgot",element:_.jsx(ST,{}),errorElement:_.jsx(Li,{})},{path:"/schedule",element:_.jsx(b0,{}),errorElement:_.jsx(Li,{})},{path:"/users/:uid",element:_.jsx(s3,{}),errorElement:_.jsx(Li,{})},{path:"/email-verification-confirmation",element:_.jsx(ET,{}),errorElement:_.jsx(Li,{})},{path:"/users/:uid/schedule",element:_.jsx(b0,{user:!0}),errorElement:_.jsx(Li,{})}]);function w3(){return _.jsx("section",{className:"w-[100dvd] h-[100dvh] flex flex-col",children:_.jsx(aT,{router:_3})})}Cf.createRoot(document.getElementById("root")).render(_.jsx(vc.StrictMode,{children:_.jsx(w3,{})}));
