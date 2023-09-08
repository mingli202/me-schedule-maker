function jC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function T0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N0={exports:{}},yc={},R0={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),FC=Symbol.for("react.portal"),UC=Symbol.for("react.fragment"),zC=Symbol.for("react.strict_mode"),$C=Symbol.for("react.profiler"),WC=Symbol.for("react.provider"),VC=Symbol.for("react.context"),BC=Symbol.for("react.forward_ref"),HC=Symbol.for("react.suspense"),GC=Symbol.for("react.memo"),qC=Symbol.for("react.lazy"),Xg=Symbol.iterator;function YC(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var P0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A0=Object.assign,O0={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||P0}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M0(){}M0.prototype=Ds.prototype;function mp(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||P0}var gp=mp.prototype=new M0;gp.constructor=mp;A0(gp,Ds.prototype);gp.isPureReactComponent=!0;var Jg=Array.isArray,D0=Object.prototype.hasOwnProperty,vp={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)D0.call(e,r)&&!L0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ua,type:t,key:s,ref:o,props:i,_owner:vp.current}}function KC(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function QC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zg=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QC(""+t.key):e.toString(36)}function ql(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case FC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wd(o,0):r,Jg(i)?(n="",t!=null&&(n=t.replace(Zg,"$&/")+"/"),ql(i,e,n,"",function(u){return u})):i!=null&&(yp(i)&&(i=KC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wd(s,a);o+=ql(s,e,n,l,i)}else if(l=YC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wd(s,a++),o+=ql(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var r=[],i=0;return ql(t,r,"","",function(s){return e.call(n,s,i++)}),r}function XC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},Yl={transition:null},JC={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:vp};se.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ds;se.Fragment=UC;se.Profiler=$C;se.PureComponent=mp;se.StrictMode=zC;se.Suspense=HC;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JC;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=A0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)D0.call(e,l)&&!L0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ua,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:VC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WC,_context:t},t.Consumer=t};se.createElement=j0;se.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:BC,render:t}};se.isValidElement=yp;se.lazy=function(t){return{$$typeof:qC,_payload:{_status:-1,_result:t},_init:XC}};se.memo=function(t,e){return{$$typeof:GC,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return mt.current.useCallback(t,e)};se.useContext=function(t){return mt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};se.useEffect=function(t,e){return mt.current.useEffect(t,e)};se.useId=function(){return mt.current.useId()};se.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return mt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};se.useRef=function(t){return mt.current.useRef(t)};se.useState=function(t){return mt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return mt.current.useTransition()};se.version="18.2.0";R0.exports=se;var S=R0.exports;const _c=T0(S),ZC=jC({__proto__:null,default:_c},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=S,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,ix=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rx.call(e,r)&&!sx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tx,type:t,key:s,ref:o,props:i,_owner:ix.current}}yc.Fragment=nx;yc.jsx=F0;yc.jsxs=F0;N0.exports=yc;var h=N0.exports,Cf={},U0={exports:{}},Mt={},z0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var V=P.length;P.push(F);e:for(;0<V;){var Ee=V-1>>>1,he=P[Ee];if(0<i(he,F))P[Ee]=F,P[V]=he,V=Ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var F=P[0],V=P.pop();if(V!==F){P[0]=V;e:for(var Ee=0,he=P.length,er=he>>>1;Ee<er;){var de=2*(Ee+1)-1,Le=P[de],it=de+1,dt=P[it];if(0>i(Le,V))it<he&&0>i(dt,Le)?(P[Ee]=dt,P[it]=V,Ee=it):(P[Ee]=Le,P[de]=V,Ee=de);else if(it<he&&0>i(dt,V))P[Ee]=dt,P[it]=V,Ee=it;else break e}}return F}function i(P,F){var V=P.sortIndex-F.sortIndex;return V!==0?V:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,m=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=P)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function v(P){if(w=!1,_(P),!m)if(n(l)!==null)m=!0,ue(b);else{var F=n(u);F!==null&&le(v,F.startTime-P)}}function b(P,F){m=!1,w&&(w=!1,g(A),A=-1),y=!0;var V=f;try{for(_(F),d=n(l);d!==null&&(!(d.expirationTime>F)||P&&!oe());){var Ee=d.callback;if(typeof Ee=="function"){d.callback=null,f=d.priorityLevel;var he=Ee(d.expirationTime<=F);F=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&r(l),_(F)}else r(l);d=n(l)}if(d!==null)var er=!0;else{var de=n(u);de!==null&&le(v,de.startTime-F),er=!1}return er}finally{d=null,f=V,y=!1}}var I=!1,k=null,A=-1,M=5,L=-1;function oe(){return!(t.unstable_now()-L<M)}function Z(){if(k!==null){var P=t.unstable_now();L=P;var F=!0;try{F=k(!0,P)}finally{F?Ie():(I=!1,k=null)}}else I=!1}var Ie;if(typeof p=="function")Ie=function(){p(Z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=Z,Ie=function(){q.postMessage(null)}}else Ie=function(){E(Z,0)};function ue(P){k=P,I||(I=!0,Ie())}function le(P,F){A=E(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){m||y||(m=!0,ue(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return P()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=f;f=P;try{return F()}finally{f=V}},t.unstable_scheduleCallback=function(P,F,V){var Ee=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Ee+V:Ee):V=Ee,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=V+he,P={id:c++,callback:F,priorityLevel:P,startTime:V,expirationTime:he,sortIndex:-1},V>Ee?(P.sortIndex=V,e(u,P),n(l)===null&&P===n(u)&&(w?(g(A),A=-1):w=!0,le(v,V-Ee))):(P.sortIndex=he,e(l,P),m||y||(m=!0,ue(b))),P},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(P){var F=f;return function(){var V=f;f=F;try{return P.apply(this,arguments)}finally{f=V}}}})($0);z0.exports=$0;var ox=z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=S,Ot=ox;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V0=new Set,Yo={};function Pi(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(Yo[t]=e,t=0;t<e.length;t++)V0.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ev={},tv={};function lx(t){return xf.call(tv,t)?!0:xf.call(ev,t)?!1:ax.test(t)?tv[t]=!0:(ev[t]=!0,!1)}function ux(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cx(t,e,n,r){if(e===null||typeof e>"u"||ux(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _p=/[\-:]([a-z])/g;function wp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_p,wp);rt[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_p,wp);rt[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_p,wp);rt[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ep(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cx(e,n,i,r)&&(n=null),r||i===null?lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),nv=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Ed;function _o(t){if(Ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+t}var bd=!1;function Sd(t,e){if(!t||bd)return"";bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function dx(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function Nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Ui:return"Portal";case kf:return"Profiler";case bp:return"StrictMode";case If:return"Suspense";case Tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case B0:return(t._context.displayName||"Context")+".Provider";case Sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:Nf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Nf(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nf(e);case 8:return e===bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(t){var e=q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=hx(t))}function Y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=q0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K0(t,e){e=e.checked,e!=null&&Ep(t,"checked",e,!1)}function Pf(t,e){K0(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Af(t,e.type,n):e.hasOwnProperty("defaultValue")&&Af(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function iv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Af(t,e,n){(e!=="number"||pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(wo(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function Q0(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ov(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,J0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function Z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function e1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mx=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(t,e){if(e){if(mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,ss=null,os=null;function av(t){if(t=Wa(t)){if(typeof Ff!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Cc(e),Ff(t.stateNode,t.type,e))}}function t1(t){ss?os?os.push(t):os=[t]:ss=t}function n1(){if(ss){var t=ss,e=os;if(os=ss=null,av(t),e)for(t=0;t<e.length;t++)av(e[t])}}function r1(t,e){return t(e)}function i1(){}var Cd=!1;function s1(t,e,n){if(Cd)return t(e,n);Cd=!0;try{return r1(t,e,n)}finally{Cd=!1,(ss!==null||os!==null)&&(i1(),n1())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Uf=!1;if(Un)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Uf=!1}function gx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var To=!1,mu=null,gu=!1,zf=null,vx={onError:function(t){To=!0,mu=t}};function yx(t,e,n,r,i,s,o,a,l){To=!1,mu=null,gx.apply(vx,arguments)}function _x(t,e,n,r,i,s,o,a,l){if(yx.apply(this,arguments),To){if(To){var u=mu;To=!1,mu=null}else throw Error(R(198));gu||(gu=!0,zf=u)}}function Ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lv(t){if(Ai(t)!==t)throw Error(R(188))}function wx(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lv(i),t;if(s===r)return lv(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function a1(t){return t=wx(t),t!==null?l1(t):null}function l1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l1(t);if(e!==null)return e;t=t.sibling}return null}var u1=Ot.unstable_scheduleCallback,uv=Ot.unstable_cancelCallback,Ex=Ot.unstable_shouldYield,bx=Ot.unstable_requestPaint,Ue=Ot.unstable_now,Sx=Ot.unstable_getCurrentPriorityLevel,kp=Ot.unstable_ImmediatePriority,c1=Ot.unstable_UserBlockingPriority,vu=Ot.unstable_NormalPriority,Cx=Ot.unstable_LowPriority,d1=Ot.unstable_IdlePriority,wc=null,yn=null;function xx(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Tx,kx=Math.log,Ix=Math.LN2;function Tx(t){return t>>>=0,t===0?32:31-(kx(t)/Ix|0)|0}var yl=64,_l=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Eo(a):(s&=o,s!==0&&(r=Eo(s)))}else o=n&~i,o!==0?r=Eo(o):s!==0&&(r=Eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function Nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Nx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f1(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function Px(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function h1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p1,Tp,m1,g1,v1,Wf=!1,wl=[],wr=null,Er=null,br=null,Xo=new Map,Jo=new Map,ur=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cv(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wa(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ox(t,e,n,r,i){switch(e){case"focusin":return wr=to(wr,t,e,n,r,i),!0;case"dragenter":return Er=to(Er,t,e,n,r,i),!0;case"mouseover":return br=to(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xo.set(s,to(Xo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Jo.set(s,to(Jo.get(s)||null,t,e,n,r,i)),!0}return!1}function y1(t){var e=ei(t.target);if(e!==null){var n=Ai(e);if(n!==null){if(e=n.tag,e===13){if(e=o1(n),e!==null){t.blockedOn=e,v1(t.priority,function(){m1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jf=r,n.target.dispatchEvent(r),jf=null}else return e=Wa(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function dv(t,e,n){Kl(t)&&n.delete(e)}function Mx(){Wf=!1,wr!==null&&Kl(wr)&&(wr=null),Er!==null&&Kl(Er)&&(Er=null),br!==null&&Kl(br)&&(br=null),Xo.forEach(dv),Jo.forEach(dv)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Mx)))}function Zo(t){function e(i){return no(i,t)}if(0<wl.length){no(wl[0],t);for(var n=1;n<wl.length;n++){var r=wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&no(wr,t),Er!==null&&no(Er,t),br!==null&&no(br,t),Xo.forEach(e),Jo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)y1(n),n.blockedOn===null&&ur.shift()}var as=Qn.ReactCurrentBatchConfig,_u=!0;function Dx(t,e,n,r){var i=fe,s=as.transition;as.transition=null;try{fe=1,Np(t,e,n,r)}finally{fe=i,as.transition=s}}function Lx(t,e,n,r){var i=fe,s=as.transition;as.transition=null;try{fe=4,Np(t,e,n,r)}finally{fe=i,as.transition=s}}function Np(t,e,n,r){if(_u){var i=Vf(t,e,n,r);if(i===null)Dd(t,e,r,wu,n),cv(t,r);else if(Ox(i,t,e,n,r))r.stopPropagation();else if(cv(t,r),e&4&&-1<Ax.indexOf(t)){for(;i!==null;){var s=Wa(i);if(s!==null&&p1(s),s=Vf(t,e,n,r),s===null&&Dd(t,e,r,wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dd(t,e,r,null,n)}}var wu=null;function Vf(t,e,n,r){if(wu=null,t=xp(r),t=ei(t),t!==null)if(e=Ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wu=t,null}function _1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case kp:return 1;case c1:return 4;case vu:case Cx:return 16;case d1:return 536870912;default:return 16}default:return 16}}var mr=null,Rp=null,Ql=null;function w1(){if(Ql)return Ql;var t,e=Rp,n=e.length,r,i="value"in mr?mr.value:mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ql=i.slice(t,1<r?1-r:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function fv(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:fv,this.isPropagationStopped=fv,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=Dt(Ls),$a=Ae({},Ls,{view:0,detail:0}),jx=Dt($a),kd,Id,ro,Ec=Ae({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(kd=t.screenX-ro.screenX,Id=t.screenY-ro.screenY):Id=kd=0,ro=t),kd)},movementY:function(t){return"movementY"in t?t.movementY:Id}}),hv=Dt(Ec),Fx=Ae({},Ec,{dataTransfer:0}),Ux=Dt(Fx),zx=Ae({},$a,{relatedTarget:0}),Td=Dt(zx),$x=Ae({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=Dt($x),Vx=Ae({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=Dt(Vx),Hx=Ae({},Ls,{data:0}),pv=Dt(Hx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yx[t])?!!e[t]:!1}function Ap(){return Kx}var Qx=Ae({},$a,{key:function(t){if(t.key){var e=Gx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xx=Dt(Qx),Jx=Ae({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mv=Dt(Jx),Zx=Ae({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),ek=Dt(Zx),tk=Ae({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),nk=Dt(tk),rk=Ae({},Ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ik=Dt(rk),sk=[9,13,27,32],Op=Un&&"CompositionEvent"in window,No=null;Un&&"documentMode"in document&&(No=document.documentMode);var ok=Un&&"TextEvent"in window&&!No,E1=Un&&(!Op||No&&8<No&&11>=No),gv=String.fromCharCode(32),vv=!1;function b1(t,e){switch(t){case"keyup":return sk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function ak(t,e){switch(t){case"compositionend":return S1(e);case"keypress":return e.which!==32?null:(vv=!0,gv);case"textInput":return t=e.data,t===gv&&vv?null:t;default:return null}}function lk(t,e){if($i)return t==="compositionend"||!Op&&b1(t,e)?(t=w1(),Ql=Rp=mr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E1&&e.locale!=="ko"?null:e.data;default:return null}}var uk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uk[t.type]:e==="textarea"}function C1(t,e,n,r){t1(r),e=Eu(e,"onChange"),0<e.length&&(n=new Pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ro=null,ea=null;function ck(t){D1(t,0)}function bc(t){var e=Bi(t);if(Y0(e))return t}function dk(t,e){if(t==="change")return e}var x1=!1;if(Un){var Nd;if(Un){var Rd="oninput"in document;if(!Rd){var _v=document.createElement("div");_v.setAttribute("oninput","return;"),Rd=typeof _v.oninput=="function"}Nd=Rd}else Nd=!1;x1=Nd&&(!document.documentMode||9<document.documentMode)}function wv(){Ro&&(Ro.detachEvent("onpropertychange",k1),ea=Ro=null)}function k1(t){if(t.propertyName==="value"&&bc(ea)){var e=[];C1(e,ea,t,xp(t)),s1(ck,e)}}function fk(t,e,n){t==="focusin"?(wv(),Ro=e,ea=n,Ro.attachEvent("onpropertychange",k1)):t==="focusout"&&wv()}function hk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(ea)}function pk(t,e){if(t==="click")return bc(e)}function mk(t,e){if(t==="input"||t==="change")return bc(e)}function gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:gk;function ta(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xf.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function Ev(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bv(t,e){var n=Ev(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ev(n)}}function I1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T1(){for(var t=window,e=pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pu(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vk(t){var e=T1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I1(n.ownerDocument.documentElement,n)){if(r!==null&&Mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bv(n,s);var o=bv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yk=Un&&"documentMode"in document&&11>=document.documentMode,Wi=null,Bf=null,Po=null,Hf=!1;function Sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||Wi==null||Wi!==pu(r)||(r=Wi,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&ta(Po,r)||(Po=r,r=Eu(Bf,"onSelect"),0<r.length&&(e=new Pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Pd={},N1={};Un&&(N1=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function Sc(t){if(Pd[t])return Pd[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N1)return Pd[t]=e[n];return t}var R1=Sc("animationend"),P1=Sc("animationiteration"),A1=Sc("animationstart"),O1=Sc("transitionend"),M1=new Map,Cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){M1.set(t,e),Pi(e,[t])}for(var Ad=0;Ad<Cv.length;Ad++){var Od=Cv[Ad],_k=Od.toLowerCase(),wk=Od[0].toUpperCase()+Od.slice(1);zr(_k,"on"+wk)}zr(R1,"onAnimationEnd");zr(P1,"onAnimationIteration");zr(A1,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(O1,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ek=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function xv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_x(r,e,void 0,t),t.currentTarget=null}function D1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;xv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;xv(i,a,u),s=l}}}if(gu)throw t=zf,gu=!1,zf=null,t}function be(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var r=t+"__bubble";n.has(r)||(L1(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),L1(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Sl]){t[Sl]=!0,V0.forEach(function(n){n!=="selectionchange"&&(Ek.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Md("selectionchange",!1,e))}}function L1(t,e,n,r){switch(_1(e)){case 1:var i=Dx;break;case 4:i=Lx;break;default:i=Np}n=i.bind(null,e,n,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ei(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s1(function(){var u=s,c=xp(n),d=[];e:{var f=M1.get(t);if(f!==void 0){var y=Pp,m=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":y=Xx;break;case"focusin":m="focus",y=Td;break;case"focusout":m="blur",y=Td;break;case"beforeblur":case"afterblur":y=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=hv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ek;break;case R1:case P1:case A1:y=Wx;break;case O1:y=nk;break;case"scroll":y=jx;break;case"wheel":y=ik;break;case"copy":case"cut":case"paste":y=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mv}var w=(e&4)!==0,E=!w&&t==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,_;p!==null;){_=p;var v=_.stateNode;if(_.tag===5&&v!==null&&(_=v,g!==null&&(v=Qo(p,g),v!=null&&w.push(ra(p,v,_)))),E)break;p=p.return}0<w.length&&(f=new y(f,m,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==jf&&(m=n.relatedTarget||n.fromElement)&&(ei(m)||m[zn]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(m=n.relatedTarget||n.toElement,y=u,m=m?ei(m):null,m!==null&&(E=Ai(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(w=hv,v="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=mv,v="onPointerLeave",g="onPointerEnter",p="pointer"),E=y==null?f:Bi(y),_=m==null?f:Bi(m),f=new w(v,p+"leave",y,n,c),f.target=E,f.relatedTarget=_,v=null,ei(c)===u&&(w=new w(g,p+"enter",m,n,c),w.target=_,w.relatedTarget=E,v=w),E=v,y&&m)t:{for(w=y,g=m,p=0,_=w;_;_=Mi(_))p++;for(_=0,v=g;v;v=Mi(v))_++;for(;0<p-_;)w=Mi(w),p--;for(;0<_-p;)g=Mi(g),_--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Mi(w),g=Mi(g)}w=null}else w=null;y!==null&&kv(d,f,y,w,!1),m!==null&&E!==null&&kv(d,E,m,w,!0)}}e:{if(f=u?Bi(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var b=dk;else if(yv(f))if(x1)b=mk;else{b=hk;var I=fk}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=pk);if(b&&(b=b(t,u))){C1(d,b,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Af(f,"number",f.value)}switch(I=u?Bi(u):window,t){case"focusin":(yv(I)||I.contentEditable==="true")&&(Wi=I,Bf=u,Po=null);break;case"focusout":Po=Bf=Wi=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Sv(d,n,c);break;case"selectionchange":if(yk)break;case"keydown":case"keyup":Sv(d,n,c)}var k;if(Op)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else $i?b1(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(E1&&n.locale!=="ko"&&($i||A!=="onCompositionStart"?A==="onCompositionEnd"&&$i&&(k=w1()):(mr=c,Rp="value"in mr?mr.value:mr.textContent,$i=!0)),I=Eu(u,A),0<I.length&&(A=new pv(A,t,null,n,c),d.push({event:A,listeners:I}),k?A.data=k:(k=S1(n),k!==null&&(A.data=k)))),(k=ok?ak(t,n):lk(t,n))&&(u=Eu(u,"onBeforeInput"),0<u.length&&(c=new pv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}D1(d,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qo(t,n),s!=null&&r.unshift(ra(t,s,i)),s=Qo(t,e),s!=null&&r.push(ra(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qo(n,s),l!=null&&o.unshift(ra(n,l,a))):i||(l=Qo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bk=/\r\n?/g,Sk=/\u0000|\uFFFD/g;function Iv(t){return(typeof t=="string"?t:""+t).replace(bk,`
`).replace(Sk,"")}function Cl(t,e,n){if(e=Iv(e),Iv(t)!==e&&n)throw Error(R(425))}function bu(){}var Gf=null,qf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,Ck=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,xk=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(kk)}:Kf;function kk(t){setTimeout(function(){throw t})}function Ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),gn="__reactFiber$"+js,ia="__reactProps$"+js,zn="__reactContainer$"+js,Qf="__reactEvents$"+js,Ik="__reactListeners$"+js,Tk="__reactHandles$"+js;function ei(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[gn])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[gn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Cc(t){return t[ia]||null}var Xf=[],Hi=-1;function $r(t){return{current:t}}function xe(t){0>Hi||(t.current=Xf[Hi],Xf[Hi]=null,Hi--)}function we(t,e){Hi++,Xf[Hi]=t.current,t.current=e}var Mr={},ut=$r(Mr),Ct=$r(!1),hi=Mr;function Es(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Su(){xe(Ct),xe(ut)}function Rv(t,e,n){if(ut.current!==Mr)throw Error(R(168));we(ut,e),we(Ct,n)}function j1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,fx(t)||"Unknown",i));return Ae({},n,r)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,hi=ut.current,we(ut,t),we(Ct,Ct.current),!0}function Pv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=j1(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,xe(Ct),xe(ut),we(ut,t)):xe(Ct),we(Ct,n)}var Rn=null,xc=!1,jd=!1;function F1(t){Rn===null?Rn=[t]:Rn.push(t)}function Nk(t){xc=!0,F1(t)}function Wr(){if(!jd&&Rn!==null){jd=!0;var t=0,e=fe;try{var n=Rn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,xc=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),u1(kp,Wr),i}finally{fe=e,jd=!1}}return null}var Gi=[],qi=0,xu=null,ku=0,Ut=[],zt=0,pi=null,Pn=1,An="";function Qr(t,e){Gi[qi++]=ku,Gi[qi++]=xu,xu=t,ku=e}function U1(t,e,n){Ut[zt++]=Pn,Ut[zt++]=An,Ut[zt++]=pi,pi=t;var r=Pn;t=An;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-on(e)+i|n<<i|r,An=s+t}else Pn=1<<s|n<<i|r,An=t}function Dp(t){t.return!==null&&(Qr(t,1),U1(t,1,0))}function Lp(t){for(;t===xu;)xu=Gi[--qi],Gi[qi]=null,ku=Gi[--qi],Gi[qi]=null;for(;t===pi;)pi=Ut[--zt],Ut[zt]=null,An=Ut[--zt],Ut[zt]=null,Pn=Ut[--zt],Ut[zt]=null}var At=null,Pt=null,Ne=!1,Jt=null;function z1(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Av(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,Pt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:Pn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,Pt=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Ne){var e=Pt;if(e){var n=e;if(!Av(t,e)){if(Jf(t))throw Error(R(418));e=Sr(n.nextSibling);var r=At;e&&Av(t,e)?z1(r,n):(t.flags=t.flags&-4097|2,Ne=!1,At=t)}}else{if(Jf(t))throw Error(R(418));t.flags=t.flags&-4097|2,Ne=!1,At=t}}}function Ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function xl(t){if(t!==At)return!1;if(!Ne)return Ov(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Pt)){if(Jf(t))throw $1(),Error(R(418));for(;e;)z1(t,e),e=Sr(e.nextSibling)}if(Ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=At?Sr(t.stateNode.nextSibling):null;return!0}function $1(){for(var t=Pt;t;)t=Sr(t.nextSibling)}function bs(){Pt=At=null,Ne=!1}function jp(t){Jt===null?Jt=[t]:Jt.push(t)}var Rk=Qn.ReactCurrentBatchConfig;function Kt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Iu=$r(null),Tu=null,Yi=null,Fp=null;function Up(){Fp=Yi=Tu=null}function zp(t){var e=Iu.current;xe(Iu),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){Tu=t,Fp=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Fp!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(Tu===null)throw Error(R(308));Yi=t,Tu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var ti=null;function $p(t){ti===null?ti=[t]:ti.push(t)}function W1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$p(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,$p(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}function Mv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nu(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,w=a;switch(f=e,y=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){d=m.call(y,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,f=typeof m=="function"?m.call(y,d,f):m,f==null)break e;d=Ae({},d,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=d}}function Dv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var B1=new W0.Component().refs;function th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kc={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=kr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(an(e,t,i,r),Jl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=kr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(an(e,t,i,r),Jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=kr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cr(t,i,r),e!==null&&(an(e,t,r,n),Jl(e,t,r))}};function Lv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,r)||!ta(i,s):!0}function H1(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=xt(e)?hi:ut.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kc.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=B1,Wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=xt(e)?hi:ut.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kc.enqueueReplaceState(i,i.state,null),Nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===B1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fv(t){var e=t._init;return e(t._payload)}function G1(t){function e(g,p){if(t){var _=g.deletions;_===null?(g.deletions=[p],g.flags|=16):_.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Ir(g,p),g.index=0,g.sibling=null,g}function s(g,p,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<p?(g.flags|=2,p):_):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,_,v){return p===null||p.tag!==6?(p=Bd(_,g.mode,v),p.return=g,p):(p=i(p,_),p.return=g,p)}function l(g,p,_,v){var b=_.type;return b===zi?c(g,p,_.props.children,v,_.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ar&&Fv(b)===p.type)?(v=i(p,_.props),v.ref=io(g,p,_),v.return=g,v):(v=iu(_.type,_.key,_.props,null,g.mode,v),v.ref=io(g,p,_),v.return=g,v)}function u(g,p,_,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Hd(_,g.mode,v),p.return=g,p):(p=i(p,_.children||[]),p.return=g,p)}function c(g,p,_,v,b){return p===null||p.tag!==7?(p=ci(_,g.mode,v,b),p.return=g,p):(p=i(p,_),p.return=g,p)}function d(g,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bd(""+p,g.mode,_),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ml:return _=iu(p.type,p.key,p.props,null,g.mode,_),_.ref=io(g,null,p),_.return=g,_;case Ui:return p=Hd(p,g.mode,_),p.return=g,p;case ar:var v=p._init;return d(g,v(p._payload),_)}if(wo(p)||Zs(p))return p=ci(p,g.mode,_,null),p.return=g,p;kl(g,p)}return null}function f(g,p,_,v){var b=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(g,p,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:return _.key===b?l(g,p,_,v):null;case Ui:return _.key===b?u(g,p,_,v):null;case ar:return b=_._init,f(g,p,b(_._payload),v)}if(wo(_)||Zs(_))return b!==null?null:c(g,p,_,v,null);kl(g,_)}return null}function y(g,p,_,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(_)||null,a(p,g,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:return g=g.get(v.key===null?_:v.key)||null,l(p,g,v,b);case Ui:return g=g.get(v.key===null?_:v.key)||null,u(p,g,v,b);case ar:var I=v._init;return y(g,p,_,I(v._payload),b)}if(wo(v)||Zs(v))return g=g.get(_)||null,c(p,g,v,b,null);kl(p,v)}return null}function m(g,p,_,v){for(var b=null,I=null,k=p,A=p=0,M=null;k!==null&&A<_.length;A++){k.index>A?(M=k,k=null):M=k.sibling;var L=f(g,k,_[A],v);if(L===null){k===null&&(k=M);break}t&&k&&L.alternate===null&&e(g,k),p=s(L,p,A),I===null?b=L:I.sibling=L,I=L,k=M}if(A===_.length)return n(g,k),Ne&&Qr(g,A),b;if(k===null){for(;A<_.length;A++)k=d(g,_[A],v),k!==null&&(p=s(k,p,A),I===null?b=k:I.sibling=k,I=k);return Ne&&Qr(g,A),b}for(k=r(g,k);A<_.length;A++)M=y(k,g,A,_[A],v),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?A:M.key),p=s(M,p,A),I===null?b=M:I.sibling=M,I=M);return t&&k.forEach(function(oe){return e(g,oe)}),Ne&&Qr(g,A),b}function w(g,p,_,v){var b=Zs(_);if(typeof b!="function")throw Error(R(150));if(_=b.call(_),_==null)throw Error(R(151));for(var I=b=null,k=p,A=p=0,M=null,L=_.next();k!==null&&!L.done;A++,L=_.next()){k.index>A?(M=k,k=null):M=k.sibling;var oe=f(g,k,L.value,v);if(oe===null){k===null&&(k=M);break}t&&k&&oe.alternate===null&&e(g,k),p=s(oe,p,A),I===null?b=oe:I.sibling=oe,I=oe,k=M}if(L.done)return n(g,k),Ne&&Qr(g,A),b;if(k===null){for(;!L.done;A++,L=_.next())L=d(g,L.value,v),L!==null&&(p=s(L,p,A),I===null?b=L:I.sibling=L,I=L);return Ne&&Qr(g,A),b}for(k=r(g,k);!L.done;A++,L=_.next())L=y(k,g,A,L.value,v),L!==null&&(t&&L.alternate!==null&&k.delete(L.key===null?A:L.key),p=s(L,p,A),I===null?b=L:I.sibling=L,I=L);return t&&k.forEach(function(Z){return e(g,Z)}),Ne&&Qr(g,A),b}function E(g,p,_,v){if(typeof _=="object"&&_!==null&&_.type===zi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:e:{for(var b=_.key,I=p;I!==null;){if(I.key===b){if(b=_.type,b===zi){if(I.tag===7){n(g,I.sibling),p=i(I,_.props.children),p.return=g,g=p;break e}}else if(I.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ar&&Fv(b)===I.type){n(g,I.sibling),p=i(I,_.props),p.ref=io(g,I,_),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}_.type===zi?(p=ci(_.props.children,g.mode,v,_.key),p.return=g,g=p):(v=iu(_.type,_.key,_.props,null,g.mode,v),v.ref=io(g,p,_),v.return=g,g=v)}return o(g);case Ui:e:{for(I=_.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(g,p.sibling),p=i(p,_.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Hd(_,g.mode,v),p.return=g,g=p}return o(g);case ar:return I=_._init,E(g,p,I(_._payload),v)}if(wo(_))return m(g,p,_,v);if(Zs(_))return w(g,p,_,v);kl(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,_),p.return=g,g=p):(n(g,p),p=Bd(_,g.mode,v),p.return=g,g=p),o(g)):n(g,p)}return E}var Ss=G1(!0),q1=G1(!1),Va={},_n=$r(Va),sa=$r(Va),oa=$r(Va);function ni(t){if(t===Va)throw Error(R(174));return t}function Vp(t,e){switch(we(oa,e),we(sa,t),we(_n,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mf(e,t)}xe(_n),we(_n,e)}function Cs(){xe(_n),xe(sa),xe(oa)}function Y1(t){ni(oa.current);var e=ni(_n.current),n=Mf(e,t.type);e!==n&&(we(sa,t),we(_n,n))}function Bp(t){sa.current===t&&(xe(_n),xe(sa))}var Re=$r(0);function Ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function Hp(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Zl=Qn.ReactCurrentDispatcher,Ud=Qn.ReactCurrentBatchConfig,mi=0,Pe=null,Ve=null,Ke=null,Pu=!1,Ao=!1,aa=0,Pk=0;function st(){throw Error(R(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function qp(t,e,n,r,i,s){if(mi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?Dk:Lk,t=n(r,i),Ao){s=0;do{if(Ao=!1,aa=0,25<=s)throw Error(R(301));s+=1,Ke=Ve=null,e.updateQueue=null,Zl.current=jk,t=n(r,i)}while(Ao)}if(Zl.current=Au,e=Ve!==null&&Ve.next!==null,mi=0,Ke=Ve=Pe=null,Pu=!1,e)throw Error(R(300));return t}function Yp(){var t=aa!==0;return aa=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Gt(){if(Ve===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ke===null?Pe.memoizedState:Ke.next;if(e!==null)Ke=e,Ve=t;else{if(t===null)throw Error(R(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function la(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=Gt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Pe.lanes|=c,gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $d(t){var e=Gt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K1(){}function Q1(t,e){var n=Pe,r=Gt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Kp(Z1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ua(9,J1.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(R(349));mi&30||X1(n,e,i)}return i}function X1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J1(t,e,n,r){e.value=n,e.getSnapshot=r,ew(e)&&tw(t)}function Z1(t,e,n){return n(function(){ew(e)&&tw(t)})}function ew(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function tw(t){var e=$n(t,1);e!==null&&an(e,t,1,-1)}function Uv(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=Mk.bind(null,Pe,t),[e.memoizedState,t]}function ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nw(){return Gt().memoizedState}function eu(t,e,n,r){var i=pn();Pe.flags|=t,i.memoizedState=ua(1|e,n,void 0,r===void 0?null:r)}function Ic(t,e,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Gp(r,o.deps)){i.memoizedState=ua(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=ua(1|e,n,s,r)}function zv(t,e){return eu(8390656,8,t,e)}function Kp(t,e){return Ic(2048,8,t,e)}function rw(t,e){return Ic(4,2,t,e)}function iw(t,e){return Ic(4,4,t,e)}function sw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ow(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,sw.bind(null,e,t),n)}function Qp(){}function aw(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lw(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uw(t,e,n){return mi&21?(cn(n,e)||(n=f1(),Pe.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function Ak(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Ud.transition;Ud.transition={};try{t(!1),e()}finally{fe=n,Ud.transition=r}}function cw(){return Gt().memoizedState}function Ok(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dw(t))fw(e,n);else if(n=W1(t,e,n,r),n!==null){var i=pt();an(n,t,r,i),hw(n,e,r)}}function Mk(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dw(t))fw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,$p(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=W1(t,e,i,r),n!==null&&(i=pt(),an(n,t,r,i),hw(n,e,r))}}function dw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function fw(t,e){Ao=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}var Au={readContext:Ht,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Dk={readContext:Ht,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eu(4194308,4,sw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return eu(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ok.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:Uv,useDebugValue:Qp,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=Uv(!1),e=t[0];return t=Ak.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=pn();if(Ne){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Je===null)throw Error(R(349));mi&30||X1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zv(Z1.bind(null,r,s,t),[t]),r.flags|=2048,ua(9,J1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Je.identifierPrefix;if(Ne){var n=An,r=Pn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lk={readContext:Ht,useCallback:aw,useContext:Ht,useEffect:Kp,useImperativeHandle:ow,useInsertionEffect:rw,useLayoutEffect:iw,useMemo:lw,useReducer:zd,useRef:nw,useState:function(){return zd(la)},useDebugValue:Qp,useDeferredValue:function(t){var e=Gt();return uw(e,Ve.memoizedState,t)},useTransition:function(){var t=zd(la)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:K1,useSyncExternalStore:Q1,useId:cw,unstable_isNewReconciler:!1},jk={readContext:Ht,useCallback:aw,useContext:Ht,useEffect:Kp,useImperativeHandle:ow,useInsertionEffect:rw,useLayoutEffect:iw,useMemo:lw,useReducer:$d,useRef:nw,useState:function(){return $d(la)},useDebugValue:Qp,useDeferredValue:function(t){var e=Gt();return Ve===null?e.memoizedState=t:uw(e,Ve.memoizedState,t)},useTransition:function(){var t=$d(la)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:K1,useSyncExternalStore:Q1,useId:cw,unstable_isNewReconciler:!1};function xs(t,e){try{var n="",r=e;do n+=dx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fk=typeof WeakMap=="function"?WeakMap:Map;function pw(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,hh=r),rh(t,e)},n}function mw(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $v(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Fk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Jk.bind(null,t,e,n),e.then(t,t))}function Wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var Uk=Qn.ReactCurrentOwner,Et=!1;function ft(t,e,n,r){e.child=t===null?q1(e,null,n,r):Ss(e,t.child,n,r)}function Bv(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=qp(t,e,n,r,s,i),n=Yp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ne&&n&&Dp(e),e.flags|=1,ft(t,e,r,i),e.child)}function Hv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gw(t,e,s,r,i)):(t=iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function gw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ta(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return ih(t,e,n,r,i)}function vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Qi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Qi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Qi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Qi,Rt),Rt|=r;return ft(t,e,i,n),e.child}function yw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,i){var s=xt(n)?hi:ut.current;return s=Es(e,s),ls(e,i),n=qp(t,e,n,r,s,i),r=Yp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ne&&r&&Dp(e),e.flags|=1,ft(t,e,n,i),e.child)}function Gv(t,e,n,r,i){if(xt(n)){var s=!0;Cu(e)}else s=!1;if(ls(e,i),e.stateNode===null)tu(t,e),H1(e,n,r),nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=xt(n)?hi:ut.current,u=Es(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&jv(e,o,r,u),lr=!1;var f=e.memoizedState;o.state=f,Nu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ct.current||lr?(typeof c=="function"&&(th(e,n,c,r),l=e.memoizedState),(a=lr||Lv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,V1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=xt(n)?hi:ut.current,l=Es(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&jv(e,o,r,l),lr=!1,f=e.memoizedState,o.state=f,Nu(e,r,o,i);var m=e.memoizedState;a!==d||f!==m||Ct.current||lr?(typeof y=="function"&&(th(e,n,y,r),m=e.memoizedState),(u=lr||Lv(e,n,u,r,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,s,i)}function sh(t,e,n,r,i,s){yw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pv(e,n,!1),Wn(t,e,s);r=e.stateNode,Uk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&Pv(e,n,!0),e.child}function _w(t){var e=t.stateNode;e.pendingContext?Rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rv(t,e.context,!1),Vp(t,e.containerInfo)}function qv(t,e,n,r,i){return bs(),jp(i),e.flags|=256,ft(t,e,n,r),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Re,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):Xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ir(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,r}return s=t.child,t=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xp(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Il(t,e,n,r){return r!==null&&jp(r),Ss(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(R(422))),Il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return Il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Wd(s,r,void 0),Il(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),an(r,t,i,-1))}return rm(),r=Wd(Error(R(421))),Il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Zk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=Sr(i.nextSibling),At=e,Ne=!0,Jt=null,t!==null&&(Ut[zt++]=Pn,Ut[zt++]=An,Ut[zt++]=pi,Pn=t.id,An=t.overflow,pi=e),e=Xp(e,r.children),e.flags|=4096,e)}function Yv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eh(t.return,e,n)}function Vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yv(t,n,e);else if(t.tag===19)Yv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $k(t,e,n){switch(e.tag){case 3:_w(e),bs();break;case 5:Y1(e);break;case 1:xt(e.type)&&Cu(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(we(Re,Re.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);we(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,vw(t,e,n)}return Wn(t,e,n)}var bw,lh,Sw,Cw;bw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};Sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(_n.current);var s=null;switch(n){case"input":i=Rf(t,i),r=Rf(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bu)}Df(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Wk(t,e,n){var r=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return xt(e.type)&&Su(),ot(e),null;case 3:return r=e.stateNode,Cs(),xe(Ct),xe(ut),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(gh(Jt),Jt=null))),lh(t,e),ot(e),null;case 5:Bp(e);var i=ni(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return ot(e),null}if(t=ni(_n.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[ia]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<bo.length;i++)be(bo[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":rv(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":sv(r,s),be("invalid",r)}Df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,a,t),i=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":gl(r),iv(r,s,!0);break;case"textarea":gl(r),ov(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[ia]=r,bw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lf(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)be(bo[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":rv(t,r),i=Rf(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),be("invalid",t);break;case"textarea":sv(t,r),i=Of(t,r),be("invalid",t);break;default:i=r}Df(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?e1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&J0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",t):l!=null&&Ep(t,s,l,o))}switch(n){case"input":gl(t),iv(t,r,!1);break;case"textarea":gl(t),ov(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=ni(oa.current),ni(_n.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return ot(e),null;case 13:if(xe(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Pt!==null&&e.mode&1&&!(e.flags&128))$1(),bs(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[gn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Jt!==null&&(gh(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?He===0&&(He=3):rm())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Cs(),lh(t,e),t===null&&na(e.stateNode.containerInfo),ot(e),null;case 10:return zp(e.type._context),ot(e),null;case 17:return xt(e.type)&&Su(),ot(e),null;case 19:if(xe(Re),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ru(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>ks&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return ot(e),null}else 2*Ue()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Re.current,we(Re,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return nm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Vk(t,e){switch(Lp(e),e.tag){case 1:return xt(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),xe(Ct),xe(ut),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(xe(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Re),null;case 4:return Cs(),null;case 10:return zp(e.type._context),null;case 22:case 23:return nm(),null;case 24:return null;default:return null}}var Tl=!1,at=!1,Bk=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function uh(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Kv=!1;function Hk(t,e){if(Gf=_u,t=T1(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:t,selectionRange:n},_u=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,E=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Kt(e.type,w),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(v){Oe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return m=Kv,Kv=!1,m}function Oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uh(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xw(t){var e=t.alternate;e!==null&&(t.alternate=null,xw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[ia],delete e[Qf],delete e[Ik],delete e[Tk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kw(t){return t.tag===5||t.tag===3||t.tag===4}function Qv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bu));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var et=null,Qt=!1;function rr(t,e,n){for(n=n.child;n!==null;)Iw(t,e,n),n=n.sibling}function Iw(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:at||Ki(n,e);case 6:var r=et,i=Qt;et=null,rr(t,e,n),et=r,Qt=i,et!==null&&(Qt?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Qt?(t=et,n=n.stateNode,t.nodeType===8?Ld(t.parentNode,n):t.nodeType===1&&Ld(t,n),Zo(t)):Ld(et,n.stateNode));break;case 4:r=et,i=Qt,et=n.stateNode.containerInfo,Qt=!0,rr(t,e,n),et=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!at&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,rr(t,e,n),at=r):rr(t,e,n);break;default:rr(t,e,n)}}function Xv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bk),e.forEach(function(r){var i=eI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,Qt=!1;break e;case 3:et=a.stateNode.containerInfo,Qt=!0;break e;case 4:et=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(et===null)throw Error(R(160));Iw(s,o,i),et=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tw(e,t),e=e.sibling}function Tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),hn(t),r&4){try{Oo(3,t,t.return),Tc(3,t)}catch(w){Oe(t,t.return,w)}try{Oo(5,t,t.return)}catch(w){Oe(t,t.return,w)}}break;case 1:Yt(e,t),hn(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(Yt(e,t),hn(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{Ko(i,"")}catch(w){Oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&K0(i,s),Lf(a,o);var u=Lf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?e1(i,d):c==="dangerouslySetInnerHTML"?J0(i,d):c==="children"?Ko(i,d):Ep(i,c,d,u)}switch(a){case"input":Pf(i,s);break;case"textarea":Q0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?is(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[ia]=s}catch(w){Oe(t,t.return,w)}}break;case 6:if(Yt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Oe(t,t.return,w)}}break;case 3:if(Yt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(w){Oe(t,t.return,w)}break;case 4:Yt(e,t),hn(t);break;case 13:Yt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(em=Ue())),r&4&&Xv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,Yt(e,t),at=u):Yt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(f=j,y=f.child,f.tag){case 0:case 11:case 14:case 15:Oo(4,f,f.return);break;case 1:Ki(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){Oe(r,n,w)}}break;case 5:Ki(f,f.return);break;case 22:if(f.memoizedState!==null){Zv(d);continue}}y!==null?(y.return=f,j=y):Zv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Z0("display",o))}catch(w){Oe(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Oe(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yt(e,t),hn(t),r&4&&Xv(t);break;case 21:break;default:Yt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kw(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ko(i,""),r.flags&=-33);var s=Qv(t);fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qv(t);dh(t,a,o);break;default:throw Error(R(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gk(t,e,n){j=t,Nw(t)}function Nw(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Tl;var u=at;if(Tl=o,(at=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?ey(i):l!==null?(l.return=o,j=l):ey(i);for(;s!==null;)j=s,Nw(s),s=s.sibling;j=i,Tl=a,at=u}Jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Jv(t)}}function Jv(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}at||e.flags&512&&ch(e)}catch(f){Oe(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Zv(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function ey(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{ch(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var qk=Math.ceil,Ou=Qn.ReactCurrentDispatcher,Jp=Qn.ReactCurrentOwner,Bt=Qn.ReactCurrentBatchConfig,ae=0,Je=null,$e=null,nt=0,Rt=0,Qi=$r(0),He=0,ca=null,gi=0,Nc=0,Zp=0,Mo=null,wt=null,em=0,ks=1/0,Tn=null,Mu=!1,hh=null,xr=null,Nl=!1,gr=null,Du=0,Do=0,ph=null,nu=-1,ru=0;function pt(){return ae&6?Ue():nu!==-1?nu:nu=Ue()}function kr(t){return t.mode&1?ae&2&&nt!==0?nt&-nt:Rk.transition!==null?(ru===0&&(ru=f1()),ru):(t=fe,t!==0||(t=window.event,t=t===void 0?16:_1(t.type)),t):1}function an(t,e,n,r){if(50<Do)throw Do=0,ph=null,Error(R(185));za(t,n,r),(!(ae&2)||t!==Je)&&(t===Je&&(!(ae&2)&&(Nc|=n),He===4&&cr(t,nt)),kt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ks=Ue()+500,xc&&Wr()))}function kt(t,e){var n=t.callbackNode;Rx(t,e);var r=yu(t,t===Je?nt:0);if(r===0)n!==null&&uv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&uv(n),e===1)t.tag===0?Nk(ty.bind(null,t)):F1(ty.bind(null,t)),xk(function(){!(ae&6)&&Wr()}),n=null;else{switch(h1(r)){case 1:n=kp;break;case 4:n=c1;break;case 16:n=vu;break;case 536870912:n=d1;break;default:n=vu}n=jw(n,Rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rw(t,e){if(nu=-1,ru=0,ae&6)throw Error(R(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=yu(t,t===Je?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lu(t,r);else{e=r;var i=ae;ae|=2;var s=Aw();(Je!==t||nt!==e)&&(Tn=null,ks=Ue()+500,ui(t,e));do try{Qk();break}catch(a){Pw(t,a)}while(1);Up(),Ou.current=s,ae=i,$e!==null?e=0:(Je=null,nt=0,e=He)}if(e!==0){if(e===2&&(i=$f(t),i!==0&&(r=i,e=mh(t,i))),e===1)throw n=ca,ui(t,0),cr(t,r),kt(t,Ue()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Yk(i)&&(e=Lu(t,r),e===2&&(s=$f(t),s!==0&&(r=s,e=mh(t,s))),e===1))throw n=ca,ui(t,0),cr(t,r),kt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Xr(t,wt,Tn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=em+500-Ue(),10<e)){if(yu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Kf(Xr.bind(null,t,wt,Tn),e);break}Xr(t,wt,Tn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qk(r/1960))-r,10<r){t.timeoutHandle=Kf(Xr.bind(null,t,wt,Tn),r);break}Xr(t,wt,Tn);break;case 5:Xr(t,wt,Tn);break;default:throw Error(R(329))}}}return kt(t,Ue()),t.callbackNode===n?Rw.bind(null,t):null}function mh(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=wt,wt=n,e!==null&&gh(e)),t}function gh(t){wt===null?wt=t:wt.push.apply(wt,t)}function Yk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Zp,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function ty(t){if(ae&6)throw Error(R(327));us();var e=yu(t,0);if(!(e&1))return kt(t,Ue()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var r=$f(t);r!==0&&(e=r,n=mh(t,r))}if(n===1)throw n=ca,ui(t,0),cr(t,e),kt(t,Ue()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,wt,Tn),kt(t,Ue()),null}function tm(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ks=Ue()+500,xc&&Wr())}}function vi(t){gr!==null&&gr.tag===0&&!(ae&6)&&us();var e=ae;ae|=1;var n=Bt.transition,r=fe;try{if(Bt.transition=null,fe=1,t)return t()}finally{fe=r,Bt.transition=n,ae=e,!(ae&6)&&Wr()}}function nm(){Rt=Qi.current,xe(Qi)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ck(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Su();break;case 3:Cs(),xe(Ct),xe(ut),Hp();break;case 5:Bp(r);break;case 4:Cs();break;case 13:xe(Re);break;case 19:xe(Re);break;case 10:zp(r.type._context);break;case 22:case 23:nm()}n=n.return}if(Je=t,$e=t=Ir(t.current,null),nt=Rt=e,He=0,ca=null,Zp=Nc=gi=0,wt=Mo=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function Pw(t,e){do{var n=$e;try{if(Up(),Zl.current=Au,Pu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pu=!1}if(mi=0,Ke=Ve=Pe=null,Ao=!1,aa=0,Jp.current=null,n===null||n.return===null){He=1,ca=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Wv(o);if(y!==null){y.flags&=-257,Vv(y,o,a,s,e),y.mode&1&&$v(s,u,e),e=y,l=u;var m=e.updateQueue;if(m===null){var w=new Set;w.add(l),e.updateQueue=w}else m.add(l);break e}else{if(!(e&1)){$v(s,u,e),rm();break e}l=Error(R(426))}}else if(Ne&&a.mode&1){var E=Wv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Vv(E,o,a,s,e),jp(xs(l,a));break e}}s=l=xs(l,a),He!==4&&(He=2),Mo===null?Mo=[s]:Mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=pw(s,l,e);Mv(s,g);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(xr===null||!xr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=mw(s,a,e);Mv(s,v);break e}}s=s.return}while(s!==null)}Mw(n)}catch(b){e=b,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Aw(){var t=Ou.current;return Ou.current=Au,t===null?Au:t}function rm(){(He===0||He===3||He===2)&&(He=4),Je===null||!(gi&268435455)&&!(Nc&268435455)||cr(Je,nt)}function Lu(t,e){var n=ae;ae|=2;var r=Aw();(Je!==t||nt!==e)&&(Tn=null,ui(t,e));do try{Kk();break}catch(i){Pw(t,i)}while(1);if(Up(),ae=n,Ou.current=r,$e!==null)throw Error(R(261));return Je=null,nt=0,He}function Kk(){for(;$e!==null;)Ow($e)}function Qk(){for(;$e!==null&&!Ex();)Ow($e)}function Ow(t){var e=Lw(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Mw(t):$e=e,Jp.current=null}function Mw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vk(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}else if(n=Wk(n,e,Rt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function Xr(t,e,n){var r=fe,i=Bt.transition;try{Bt.transition=null,fe=1,Xk(t,e,n,r)}finally{Bt.transition=i,fe=r}return null}function Xk(t,e,n,r){do us();while(gr!==null);if(ae&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Px(t,s),t===Je&&($e=Je=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,jw(vu,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=fe;fe=1;var a=ae;ae|=4,Jp.current=null,Hk(t,n),Tw(n,t),vk(qf),_u=!!Gf,qf=Gf=null,t.current=n,Gk(n),bx(),ae=a,fe=o,Bt.transition=s}else t.current=n;if(Nl&&(Nl=!1,gr=t,Du=i),s=t.pendingLanes,s===0&&(xr=null),xx(n.stateNode),kt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=hh,hh=null,t;return Du&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===ph?Do++:(Do=0,ph=t):Do=0,Wr(),null}function us(){if(gr!==null){var t=h1(Du),e=Bt.transition,n=fe;try{if(Bt.transition=null,fe=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,Du=0,ae&6)throw Error(R(331));var i=ae;for(ae|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Oo(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var f=c.sibling,y=c.return;if(xw(c),c===u){j=null;break}if(f!==null){f.return=y,j=f;break}j=y}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,j=g;break e}j=s.return}}var p=t.current;for(j=p;j!==null;){o=j;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,j=_;else e:for(o=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(b){Oe(a,a.return,b)}if(a===o){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(ae=i,Wr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(wc,t)}catch{}r=!0}return r}finally{fe=n,Bt.transition=e}}return!1}function ny(t,e,n){e=xs(n,e),e=pw(t,e,1),t=Cr(t,e,1),e=pt(),t!==null&&(za(t,1,e),kt(t,e))}function Oe(t,e,n){if(t.tag===3)ny(t,t,n);else for(;e!==null;){if(e.tag===3){ny(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=xs(n,t),t=mw(e,t,1),e=Cr(e,t,1),t=pt(),e!==null&&(za(e,1,t),kt(e,t));break}}e=e.return}}function Jk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(nt&n)===n&&(He===4||He===3&&(nt&130023424)===nt&&500>Ue()-em?ui(t,0):Zp|=n),kt(t,e)}function Dw(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=pt();t=$n(t,e),t!==null&&(za(t,e,n),kt(t,n))}function Zk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dw(t,n)}function eI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Dw(t,n)}var Lw;Lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,$k(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ne&&e.flags&1048576&&U1(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tu(t,e),t=e.pendingProps;var i=Es(e,ut.current);ls(e,n),i=qp(null,e,r,t,i,n);var s=Yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Cu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wp(e),i.updater=kc,e.stateNode=i,i._reactInternals=e,nh(e,r,t,n),e=sh(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Dp(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nI(r),t=Kt(r,t),i){case 0:e=ih(null,e,r,t,n);break e;case 1:e=Gv(null,e,r,t,n);break e;case 11:e=Bv(null,e,r,t,n);break e;case 14:e=Hv(null,e,r,Kt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Gv(t,e,r,i,n);case 3:e:{if(_w(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,V1(t,e),Nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xs(Error(R(423)),e),e=qv(t,e,r,n,i);break e}else if(r!==i){i=xs(Error(R(424)),e),e=qv(t,e,r,n,i);break e}else for(Pt=Sr(e.stateNode.containerInfo.firstChild),At=e,Ne=!0,Jt=null,n=q1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=Wn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return Y1(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yf(r,i)?o=null:s!==null&&Yf(r,s)&&(e.flags|=32),yw(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return ww(t,e,n);case 4:return Vp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Bv(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Iu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Ct.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=Ht(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),Hv(t,e,r,i,n);case 15:return gw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),tu(t,e),e.tag=1,xt(r)?(t=!0,Cu(e)):t=!1,ls(e,n),H1(e,r,i),nh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return Ew(t,e,n);case 22:return vw(t,e,n)}throw Error(R(156,e.tag))};function jw(t,e){return u1(t,e)}function tI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new tI(t,e,n,r)}function im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nI(t){if(typeof t=="function")return im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sp)return 11;if(t===Cp)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return ci(n.children,i,s,e);case bp:o=8,i|=8;break;case kf:return t=Vt(12,n,e,i|2),t.elementType=kf,t.lanes=s,t;case If:return t=Vt(13,n,e,i),t.elementType=If,t.lanes=s,t;case Tf:return t=Vt(19,n,e,i),t.elementType=Tf,t.lanes=s,t;case G0:return Rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B0:o=10;break e;case H0:o=9;break e;case Sp:o=11;break e;case Cp:o=14;break e;case ar:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function Rc(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function Bd(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Hd(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,r,i,s,o,a,l){return t=new rI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wp(s),t}function iI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fw(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(xt(n))return j1(t,n,e)}return e}function Uw(t,e,n,r,i,s,o,a,l){return t=sm(n,r,!0,t,i,s,o,a,l),t.context=Fw(null),n=t.current,r=pt(),i=kr(n),s=Ln(r,i),s.callback=e??null,Cr(n,s,i),t.current.lanes=i,za(t,i,r),kt(t,r),t}function Pc(t,e,n,r){var i=e.current,s=pt(),o=kr(i);return n=Fw(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(i,e,o),t!==null&&(an(t,i,o,s),Jl(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ry(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function om(t,e){ry(t,e),(t=t.alternate)&&ry(t,e)}function sI(){return null}var zw=typeof reportError=="function"?reportError:function(t){console.error(t)};function am(t){this._internalRoot=t}Ac.prototype.render=am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Pc(t,e,null,null)};Ac.prototype.unmount=am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){Pc(null,t,null,null)}),e[zn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=g1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&y1(t)}};function lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function iy(){}function oI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ju(o);s.call(u)}}var o=Uw(e,r,t,0,null,!1,!1,"",iy);return t._reactRootContainer=o,t[zn]=o.current,na(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ju(l);a.call(u)}}var l=sm(t,0,!1,null,null,!1,!1,"",iy);return t._reactRootContainer=l,t[zn]=l.current,na(t.nodeType===8?t.parentNode:t),vi(function(){Pc(e,l,n,r)}),l}function Mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ju(o);a.call(l)}}Pc(e,o,t,i)}else o=oI(n,e,t,i,r);return ju(o)}p1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Ip(e,n|1),kt(e,Ue()),!(ae&6)&&(ks=Ue()+500,Wr()))}break;case 13:vi(function(){var r=$n(t,1);if(r!==null){var i=pt();an(r,t,1,i)}}),om(t,1)}};Tp=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=pt();an(e,t,134217728,n)}om(t,134217728)}};m1=function(t){if(t.tag===13){var e=kr(t),n=$n(t,e);if(n!==null){var r=pt();an(n,t,e,r)}om(t,e)}};g1=function(){return fe};v1=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ff=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cc(r);if(!i)throw Error(R(90));Y0(r),Pf(r,i)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};r1=tm;i1=vi;var aI={usingClientEntryPoint:!1,Events:[Wa,Bi,Cc,t1,n1,tm]},oo={findFiberByHostInstance:ei,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lI={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a1(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||sI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{wc=Rl.inject(lI),yn=Rl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aI;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lm(e))throw Error(R(200));return iI(t,e,null,n)};Mt.createRoot=function(t,e){if(!lm(t))throw Error(R(299));var n=!1,r="",i=zw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,na(t.nodeType===8?t.parentNode:t),new am(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=a1(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return vi(t)};Mt.hydrate=function(t,e,n){if(!Oc(e))throw Error(R(200));return Mc(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!lm(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uw(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ac(e)};Mt.render=function(t,e,n){if(!Oc(e))throw Error(R(200));return Mc(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(R(40));return t._reactRootContainer?(vi(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Mt.unstable_batchedUpdates=tm;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Oc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Mc(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),U0.exports=Mt;var Ww=U0.exports,sy=Ww;Cf.createRoot=sy.createRoot,Cf.hydrateRoot=sy.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Te.apply(this,arguments)}var ze;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ze||(ze={}));const oy="popstate";function uI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Cn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),da("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:_i(s))}function r(i,s){yi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return dI(e,n,r,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cI(){return Math.random().toString(36).substr(2,8)}function ay(t,e){return{usr:t.state,key:t.key,idx:e}}function da(t,e,n,r){return n===void 0&&(n=null),Te({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cn(e):e,{state:n,key:e&&e.key||r||cI()})}function _i(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ze.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Te({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ze.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:g})}function f(E,g){a=ze.Push;let p=da(w.location,E,g);n&&n(p,E),u=c()+1;let _=ay(p,u),v=w.createHref(p);try{o.pushState(_,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function y(E,g){a=ze.Replace;let p=da(w.location,E,g);n&&n(p,E),u=c();let _=ay(p,u),v=w.createHref(p);o.replaceState(_,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function m(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:_i(E);return re(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(oy,d),l=E,()=>{i.removeEventListener(oy,d),l=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let g=m(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(E){return o.go(E)}};return w}var Fe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fe||(Fe={}));const fI=new Set(["lazy","caseSensitive","path","id","index","children"]);function hI(t){return t.index===!0}function vh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),hI(i)){let l=Te({},i,e(i),{id:a});return r[a]=l,l}else{let l=Te({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=vh(i.children,e,o,r)),l}})}function Xi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cn(e):e,i=Fs(r.pathname||"/",n);if(i==null)return null;let s=Vw(t);pI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=SI(s[a],kI(i));return o}function Vw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:EI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Bw(s.path))i(s,o,l)}),e}function Bw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Bw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mI=/^:\w+$/,gI=3,vI=2,yI=1,_I=10,wI=-2,ly=t=>t==="*";function EI(t,e){let n=t.split("/"),r=n.length;return n.some(ly)&&(r+=wI),e&&(r+=vI),n.filter(i=>!ly(i)).reduce((i,s)=>i+(mI.test(s)?gI:s===""?yI:_I),r)}function bI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=CI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:jn([i,c.pathname]),pathnameBase:RI(jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=jn([i,c.pathnameBase]))}return s}function CI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=II(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function xI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kI(t){try{return decodeURI(t)}catch(e){return yi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function II(t,e){try{return decodeURIComponent(t)}catch(n){return yi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Fs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function TI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cn(t):t;return{pathname:n?n.startsWith("/")?n:NI(n,e):e,search:PI(r),hash:AI(i)}}function NI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function um(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cn(t):(i=Te({},t),re(!i.pathname||!i.pathname.includes("?"),Gd("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Gd("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Gd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=TI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),RI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class cm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Hw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gw=["post","put","patch","delete"],OI=new Set(Gw),MI=["get",...Gw],DI=new Set(MI),LI=new Set([301,302,303,307,308]),jI=new Set([307,308]),qd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},FI={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ao={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UI=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function zI(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;re(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let C=t.detectErrorBoundary;i=x=>({hasErrorBoundary:C(x)})}else i=UI;let s={},o=vh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Te({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,y=null,m=null,w=t.hydrationData!=null,E=Xi(o,t.history.location,l),g=null;if(E==null){let C=Ft(404,{pathname:t.history.location.pathname}),{matches:x,route:T}=gy(o);E=x,g={[T.id]:C}}let p=!E.some(C=>C.route.lazy)&&(!E.some(C=>C.route.loader)||t.hydrationData!=null),_,v={historyAction:t.history.action,location:t.history.location,matches:E,initialized:p,navigation:qd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},b=ze.Pop,I=!1,k,A=!1,M=!1,L=[],oe=[],Z=new Map,Ie=0,W=-1,q=new Map,ue=new Set,le=new Map,P=new Map,F=new Map,V=!1;function Ee(){return c=t.history.listen(C=>{let{action:x,location:T,delta:U}=C;if(V){V=!1;return}yi(F.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=qg({currentLocation:v.location,nextLocation:T,historyAction:x});if(X&&U!=null){V=!0,t.history.go(U*-1),fl(X,{state:"blocked",location:T,proceed(){fl(X,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(U)},reset(){let Y=new Map(v.blockers);Y.set(X,ao),de({blockers:Y})}});return}return Nt(x,T)}),v.initialized||Nt(ze.Pop,v.location),_}function he(){c&&c(),d.clear(),k&&k.abort(),v.fetchers.forEach((C,x)=>hd(x)),v.blockers.forEach((C,x)=>Gg(x))}function er(C){return d.add(C),()=>d.delete(C)}function de(C){v=Te({},v,C),d.forEach(x=>x(v))}function Le(C,x){var T,U;let X=v.actionData!=null&&v.navigation.formMethod!=null&&Xt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((T=C.state)==null?void 0:T._isRedirect)!==!0,Y;x.actionData?Object.keys(x.actionData).length>0?Y=x.actionData:Y=null:X?Y=v.actionData:Y=null;let Q=x.loaderData?my(v.loaderData,x.loaderData,x.matches||[],x.errors):v.loaderData,B=v.blockers;B.size>0&&(B=new Map(B),B.forEach((ve,Ze)=>B.set(Ze,ao)));let $=I===!0||v.navigation.formMethod!=null&&Xt(v.navigation.formMethod)&&((U=C.state)==null?void 0:U._isRedirect)!==!0;a&&(o=a,a=void 0),A||b===ze.Pop||(b===ze.Push?t.history.push(C,C.state):b===ze.Replace&&t.history.replace(C,C.state)),de(Te({},x,{actionData:Y,loaderData:Q,historyAction:b,location:C,initialized:!0,navigation:qd,revalidation:"idle",restoreScrollPosition:Kg(C,x.matches||v.matches),preventScrollReset:$,blockers:B})),b=ze.Pop,I=!1,A=!1,M=!1,L=[],oe=[]}async function it(C,x){if(typeof C=="number"){t.history.go(C);return}let T=yh(v.location,v.matches,l,u.v7_prependBasename,C,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:U,submission:X,error:Y}=uy(u.v7_normalizeFormMethod,!1,T,x),Q=v.location,B=da(v.location,U,x&&x.state);B=Te({},B,t.history.encodeLocation(B));let $=x&&x.replace!=null?x.replace:void 0,ve=ze.Push;$===!0?ve=ze.Replace:$===!1||X!=null&&Xt(X.formMethod)&&X.formAction===v.location.pathname+v.location.search&&(ve=ze.Replace);let Ze=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,pe=qg({currentLocation:Q,nextLocation:B,historyAction:ve});if(pe){fl(pe,{state:"blocked",location:B,proceed(){fl(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),it(C,x)},reset(){let je=new Map(v.blockers);je.set(pe,ao),de({blockers:je})}});return}return await Nt(ve,B,{submission:X,pendingError:Y,preventScrollReset:Ze,replace:x&&x.replace})}function dt(){if(fd(),de({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Nt(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Nt(b||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Nt(C,x,T){k&&k.abort(),k=null,b=C,A=(T&&T.startUninterruptedRevalidation)===!0,MC(v.location,v.matches),I=(T&&T.preventScrollReset)===!0;let U=a||o,X=T&&T.overrideNavigation,Y=Xi(U,x,l);if(!Y){let je=Ft(404,{pathname:x.pathname}),{matches:qe,route:Yr}=gy(U);pd(),Le(x,{matches:qe,loaderData:{},errors:{[Yr.id]:je}});return}if(v.initialized&&!M&&HI(v.location,x)&&!(T&&T.submission&&Xt(T.submission.formMethod))){Le(x,{matches:Y});return}k=new AbortController;let Q=uo(t.history,x,k.signal,T&&T.submission),B,$;if(T&&T.pendingError)$={[Ji(Y).route.id]:T.pendingError};else if(T&&T.submission&&Xt(T.submission.formMethod)){let je=await xn(Q,x,T.submission,Y,{replace:T.replace});if(je.shortCircuited)return;B=je.pendingActionData,$=je.pendingActionError,X=Pl(x,T.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ve,loaderData:Ze,errors:pe}=await Ks(Q,x,Y,X,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,B,$);ve||(k=null,Le(x,Te({matches:Y},B?{actionData:B}:{},{loaderData:Ze,errors:pe})))}async function xn(C,x,T,U,X){X===void 0&&(X={}),fd();let Y=QI(x,T);de({navigation:Y});let Q,B=wh(U,x);if(!B.route.action&&!B.route.lazy)Q={type:Fe.error,error:Ft(405,{method:C.method,pathname:x.pathname,routeId:B.route.id})};else if(Q=await lo("action",C,B,U,s,i,l),C.signal.aborted)return{shortCircuited:!0};if(cs(Q)){let $;return X&&X.replace!=null?$=X.replace:$=Q.location===v.location.pathname+v.location.search,await Qs(v,Q,{submission:T,replace:$}),{shortCircuited:!0}}if(Lo(Q)){let $=Ji(U,B.route.id);return(X&&X.replace)!==!0&&(b=ze.Push),{pendingActionData:{},pendingActionError:{[$.route.id]:Q.error}}}if(ri(Q))throw Ft(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:Q.data}}}async function Ks(C,x,T,U,X,Y,Q,B,$){let ve=U||Pl(x,X),Ze=X||Y||_y(ve),pe=a||o,[je,qe]=cy(t.history,v,T,Ze,x,M,L,oe,le,ue,pe,l,B,$);if(pd(me=>!(T&&T.some(qt=>qt.route.id===me))||je&&je.some(qt=>qt.route.id===me)),W=++Ie,je.length===0&&qe.length===0){let me=Bg();return Le(x,Te({matches:T,loaderData:{},errors:$||null},B?{actionData:B}:{},me?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!A){qe.forEach(qt=>{let nr=v.fetchers.get(qt.key),_d=co(void 0,nr?nr.data:void 0);v.fetchers.set(qt.key,_d)});let me=B||v.actionData;de(Te({navigation:ve},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},qe.length>0?{fetchers:new Map(v.fetchers)}:{}))}qe.forEach(me=>{Z.has(me.key)&&tr(me.key),me.controller&&Z.set(me.key,me.controller)});let Yr=()=>qe.forEach(me=>tr(me.key));k&&k.signal.addEventListener("abort",Yr);let{results:Kr,loaderResults:Xs,fetcherResults:md}=await Wg(v.matches,T,je,qe,C);if(C.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Yr),qe.forEach(me=>Z.delete(me.key));let kn=vy(Kr);if(kn){if(kn.idx>=je.length){let me=qe[kn.idx-je.length].key;ue.add(me)}return await Qs(v,kn.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:In,errors:hl}=py(v,T,je,Xs,$,qe,md,P);P.forEach((me,qt)=>{me.subscribe(nr=>{(nr||me.done)&&P.delete(qt)})});let gd=Bg(),vd=Hg(W),yd=gd||vd||qe.length>0;return Te({loaderData:In,errors:hl},yd?{fetchers:new Map(v.fetchers)}:{})}function $g(C){return v.fetchers.get(C)||FI}function NC(C,x,T,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(C)&&tr(C);let X=a||o,Y=yh(v.location,v.matches,l,u.v7_prependBasename,T,x,U==null?void 0:U.relative),Q=Xi(X,Y,l);if(!Q){dl(C,x,Ft(404,{pathname:Y}));return}let{path:B,submission:$,error:ve}=uy(u.v7_normalizeFormMethod,!0,Y,U);if(ve){dl(C,x,ve);return}let Ze=wh(Q,B);if(I=(U&&U.preventScrollReset)===!0,$&&Xt($.formMethod)){RC(C,x,B,Ze,Q,$);return}le.set(C,{routeId:x,path:B}),PC(C,x,B,Ze,Q,$)}async function RC(C,x,T,U,X,Y){if(fd(),le.delete(C),!U.route.action&&!U.route.lazy){let We=Ft(405,{method:Y.formMethod,pathname:T,routeId:x});dl(C,x,We);return}let Q=v.fetchers.get(C),B=XI(Y,Q);v.fetchers.set(C,B),de({fetchers:new Map(v.fetchers)});let $=new AbortController,ve=uo(t.history,T,$.signal,Y);Z.set(C,$);let Ze=Ie,pe=await lo("action",ve,U,X,s,i,l);if(ve.signal.aborted){Z.get(C)===$&&Z.delete(C);return}if(cs(pe))if(Z.delete(C),W>Ze){let We=Fi(void 0);v.fetchers.set(C,We),de({fetchers:new Map(v.fetchers)});return}else{ue.add(C);let We=co(Y);return v.fetchers.set(C,We),de({fetchers:new Map(v.fetchers)}),Qs(v,pe,{submission:Y,isFetchActionRedirect:!0})}if(Lo(pe)){dl(C,x,pe.error);return}if(ri(pe))throw Ft(400,{type:"defer-action"});let je=v.navigation.location||v.location,qe=uo(t.history,je,$.signal),Yr=a||o,Kr=v.navigation.state!=="idle"?Xi(Yr,v.navigation.location,l):v.matches;re(Kr,"Didn't find any matches after fetcher action");let Xs=++Ie;q.set(C,Xs);let md=co(Y,pe.data);v.fetchers.set(C,md);let[kn,In]=cy(t.history,v,Kr,Y,je,M,L,oe,le,ue,Yr,l,{[U.route.id]:pe.data},void 0);In.filter(We=>We.key!==C).forEach(We=>{let Js=We.key,Qg=v.fetchers.get(Js),LC=co(void 0,Qg?Qg.data:void 0);v.fetchers.set(Js,LC),Z.has(Js)&&tr(Js),We.controller&&Z.set(Js,We.controller)}),de({fetchers:new Map(v.fetchers)});let hl=()=>In.forEach(We=>tr(We.key));$.signal.addEventListener("abort",hl);let{results:gd,loaderResults:vd,fetcherResults:yd}=await Wg(v.matches,Kr,kn,In,qe);if($.signal.aborted)return;$.signal.removeEventListener("abort",hl),q.delete(C),Z.delete(C),In.forEach(We=>Z.delete(We.key));let me=vy(gd);if(me){if(me.idx>=kn.length){let We=In[me.idx-kn.length].key;ue.add(We)}return Qs(v,me.result)}let{loaderData:qt,errors:nr}=py(v,v.matches,kn,vd,void 0,In,yd,P);if(v.fetchers.has(C)){let We=Fi(pe.data);v.fetchers.set(C,We)}let _d=Hg(Xs);v.navigation.state==="loading"&&Xs>W?(re(b,"Expected pending action"),k&&k.abort(),Le(v.navigation.location,{matches:Kr,loaderData:qt,errors:nr,fetchers:new Map(v.fetchers)})):(de(Te({errors:nr,loaderData:my(v.loaderData,qt,Kr,nr)},_d||In.length>0?{fetchers:new Map(v.fetchers)}:{})),M=!1)}async function PC(C,x,T,U,X,Y){let Q=v.fetchers.get(C),B=co(Y,Q?Q.data:void 0);v.fetchers.set(C,B),de({fetchers:new Map(v.fetchers)});let $=new AbortController,ve=uo(t.history,T,$.signal);Z.set(C,$);let Ze=Ie,pe=await lo("loader",ve,U,X,s,i,l);if(ri(pe)&&(pe=await Qw(pe,ve.signal,!0)||pe),Z.get(C)===$&&Z.delete(C),ve.signal.aborted)return;if(cs(pe))if(W>Ze){let qe=Fi(void 0);v.fetchers.set(C,qe),de({fetchers:new Map(v.fetchers)});return}else{ue.add(C),await Qs(v,pe);return}if(Lo(pe)){let qe=Ji(v.matches,x);v.fetchers.delete(C),de({fetchers:new Map(v.fetchers),errors:{[qe.route.id]:pe.error}});return}re(!ri(pe),"Unhandled fetcher deferred data");let je=Fi(pe.data);v.fetchers.set(C,je),de({fetchers:new Map(v.fetchers)})}async function Qs(C,x,T){let{submission:U,replace:X,isFetchActionRedirect:Y}=T===void 0?{}:T;x.revalidate&&(M=!0);let Q=da(C.location,x.location,Te({_isRedirect:!0},Y?{_isFetchActionRedirect:!0}:{}));if(re(Q,"Expected a location on the redirect navigation"),n){let ve=!1;if(x.reloadDocument)ve=!0;else if(qw.test(x.location)){const Ze=t.history.createURL(x.location);ve=Ze.origin!==e.location.origin||Fs(Ze.pathname,l)==null}if(ve){X?e.location.replace(x.location):e.location.assign(x.location);return}}k=null;let B=X===!0?ze.Replace:ze.Push,$=U||_y(C.navigation);if(jI.has(x.status)&&$&&Xt($.formMethod))await Nt(B,Q,{submission:Te({},$,{formAction:x.location}),preventScrollReset:I});else if(Y)await Nt(B,Q,{overrideNavigation:Pl(Q),fetcherSubmission:$,preventScrollReset:I});else{let ve=Pl(Q,$);await Nt(B,Q,{overrideNavigation:ve,preventScrollReset:I})}}async function Wg(C,x,T,U,X){let Y=await Promise.all([...T.map($=>lo("loader",X,$,x,s,i,l)),...U.map($=>$.matches&&$.match&&$.controller?lo("loader",uo(t.history,$.path,$.controller.signal),$.match,$.matches,s,i,l):{type:Fe.error,error:Ft(404,{pathname:$.path})})]),Q=Y.slice(0,T.length),B=Y.slice(T.length);return await Promise.all([yy(C,T,Q,Q.map(()=>X.signal),!1,v.loaderData),yy(C,U.map($=>$.match),B,U.map($=>$.controller?$.controller.signal:null),!0)]),{results:Y,loaderResults:Q,fetcherResults:B}}function fd(){M=!0,L.push(...pd()),le.forEach((C,x)=>{Z.has(x)&&(oe.push(x),tr(x))})}function dl(C,x,T){let U=Ji(v.matches,x);hd(C),de({errors:{[U.route.id]:T},fetchers:new Map(v.fetchers)})}function hd(C){let x=v.fetchers.get(C);Z.has(C)&&!(x&&x.state==="loading"&&q.has(C))&&tr(C),le.delete(C),q.delete(C),ue.delete(C),v.fetchers.delete(C)}function tr(C){let x=Z.get(C);re(x,"Expected fetch controller: "+C),x.abort(),Z.delete(C)}function Vg(C){for(let x of C){let T=$g(x),U=Fi(T.data);v.fetchers.set(x,U)}}function Bg(){let C=[],x=!1;for(let T of ue){let U=v.fetchers.get(T);re(U,"Expected fetcher: "+T),U.state==="loading"&&(ue.delete(T),C.push(T),x=!0)}return Vg(C),x}function Hg(C){let x=[];for(let[T,U]of q)if(U<C){let X=v.fetchers.get(T);re(X,"Expected fetcher: "+T),X.state==="loading"&&(tr(T),q.delete(T),x.push(T))}return Vg(x),x.length>0}function AC(C,x){let T=v.blockers.get(C)||ao;return F.get(C)!==x&&F.set(C,x),T}function Gg(C){v.blockers.delete(C),F.delete(C)}function fl(C,x){let T=v.blockers.get(C)||ao;re(T.state==="unblocked"&&x.state==="blocked"||T.state==="blocked"&&x.state==="blocked"||T.state==="blocked"&&x.state==="proceeding"||T.state==="blocked"&&x.state==="unblocked"||T.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+x.state);let U=new Map(v.blockers);U.set(C,x),de({blockers:U})}function qg(C){let{currentLocation:x,nextLocation:T,historyAction:U}=C;if(F.size===0)return;F.size>1&&yi(!1,"A router only supports one blocker at a time");let X=Array.from(F.entries()),[Y,Q]=X[X.length-1],B=v.blockers.get(Y);if(!(B&&B.state==="proceeding")&&Q({currentLocation:x,nextLocation:T,historyAction:U}))return Y}function pd(C){let x=[];return P.forEach((T,U)=>{(!C||C(U))&&(T.cancel(),x.push(U),P.delete(U))}),x}function OC(C,x,T){if(f=C,m=x,y=T||null,!w&&v.navigation===qd){w=!0;let U=Kg(v.location,v.matches);U!=null&&de({restoreScrollPosition:U})}return()=>{f=null,m=null,y=null}}function Yg(C,x){return y&&y(C,x.map(U=>KI(U,v.loaderData)))||C.key}function MC(C,x){if(f&&m){let T=Yg(C,x);f[T]=m()}}function Kg(C,x){if(f){let T=Yg(C,x),U=f[T];if(typeof U=="number")return U}return null}function DC(C){s={},a=vh(C,i,void 0,s)}return _={get basename(){return l},get state(){return v},get routes(){return o},initialize:Ee,subscribe:er,enableScrollRestoration:OC,navigate:it,fetch:NC,revalidate:dt,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:$g,deleteFetcher:hd,dispose:he,getBlocker:AC,deleteBlocker:Gg,_internalFetchControllers:Z,_internalActiveDeferreds:P,_internalSetRoutes:DC},_}function $I(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function yh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=um(i||".",Dc(a).map(c=>c.pathnameBase),Fs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!dm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:jn([n,u.pathname])),_i(u)}function uy(t,e,n,r){if(!r||!$I(r))return{path:n};if(r.formMethod&&!YI(r.formMethod))return{path:n,error:Ft(405,{method:r.formMethod})};let i=()=>({path:n,error:Ft(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Kw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Xt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,m)=>{let[w,E]=m;return""+y+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Xt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}re(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=_h(r.formData),u=r.formData;else if(r.body instanceof FormData)l=_h(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=hy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=hy(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Xt(c.formMethod))return{path:n,submission:c};let d=Cn(n);return e&&d.search&&dm(d.search)&&l.append("index",""),d.search="?"+l,{path:_i(d),submission:c}}function WI(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function cy(t,e,n,r,i,s,o,a,l,u,c,d,f,y){let m=y?Object.values(y)[0]:f?Object.values(f)[0]:void 0,w=t.createURL(e.location),E=t.createURL(i),g=y?Object.keys(y)[0]:void 0,_=WI(n,g).filter((b,I)=>{if(b.route.lazy)return!0;if(b.route.loader==null)return!1;if(VI(e.loaderData,e.matches[I],b)||o.some(M=>M===b.route.id))return!0;let k=e.matches[I],A=b;return dy(b,Te({currentUrl:w,currentParams:k.params,nextUrl:E,nextParams:A.params},r,{actionResult:m,defaultShouldRevalidate:s||w.pathname+w.search===E.pathname+E.search||w.search!==E.search||Yw(k,A)}))}),v=[];return l.forEach((b,I)=>{if(!n.some(oe=>oe.route.id===b.routeId))return;let k=Xi(c,b.path,d);if(!k){v.push({key:I,routeId:b.routeId,path:b.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(I),M=wh(k,b.path),L=!1;u.has(I)?L=!1:a.includes(I)?L=!0:A&&A.state!=="idle"&&A.data===void 0?L=s:L=dy(M,Te({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:s})),L&&v.push({key:I,routeId:b.routeId,path:b.path,matches:k,match:M,controller:new AbortController})}),[_,v]}function VI(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Yw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function dy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function fy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];re(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";yi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!fI.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Te({},e(i),{lazy:void 0}))}async function lo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=m=>{let w,E=new Promise((g,p)=>w=p);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([m({request:e,params:n.params,context:a.requestContext}),E])};try{let m=n.route[t];if(n.route.lazy)if(m)u=(await Promise.all([d(m),fy(n.route,s,i)]))[0];else if(await fy(n.route,s,i),m=n.route[t],m)u=await d(m);else if(t==="action"){let w=new URL(e.url),E=w.pathname+w.search;throw Ft(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:Fe.data,data:void 0};else if(m)u=await d(m);else{let w=new URL(e.url),E=w.pathname+w.search;throw Ft(404,{pathname:E})}re(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){l=Fe.error,u=m}finally{c&&e.signal.removeEventListener("abort",c)}if(qI(u)){let m=u.status;if(LI.has(m)){let g=u.headers.get("Location");if(re(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!qw.test(g))g=yh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let p=new URL(e.url),_=g.startsWith("//")?new URL(p.protocol+g):new URL(g),v=Fs(_.pathname,o)!=null;_.origin===p.origin&&v&&(g=_.pathname+_.search+_.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Fe.redirect,status:m,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Fe.error?Fe.error:Fe.data,response:u};let w,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?w=await u.json():w=await u.text(),l===Fe.error?{type:l,error:new cm(m,u.statusText,w),headers:u.headers}:{type:Fe.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Fe.error)return{type:l,error:u};if(GI(u)){var f,y;return{type:Fe.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:Fe.data,data:u}}function uo(t,e,n,r){let i=t.createURL(Kw(e)).toString(),s={signal:n};if(r&&Xt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=_h(r.formData):s.body=r.formData}return new Request(i,s)}function _h(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function hy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function BI(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(re(!cs(c),"Cannot handle redirect results in processLoaderData"),Lo(c)){let y=Ji(t,f),m=c.error;r&&(m=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=m),s[f]=void 0,l||(l=!0,a=Hw(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else ri(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function py(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=BI(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:y}=s[c];re(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let m=o[c];if(!(y&&y.signal.aborted))if(Lo(m)){let w=Ji(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=Te({},u,{[w.route.id]:m.error})),t.fetchers.delete(d)}else if(cs(m))re(!1,"Unhandled fetcher revalidation redirect");else if(ri(m))re(!1,"Unhandled fetcher deferred data");else{let w=Fi(m.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function my(t,e,n,r){let i=Te({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ji(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function gy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ft(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new cm(t||500,o,new Error(a),!0)}function vy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(cs(n))return{result:n,idx:e}}}function Kw(t){let e=typeof t=="string"?Cn(t):t;return _i(Te({},e,{hash:""}))}function HI(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ri(t){return t.type===Fe.deferred}function Lo(t){return t.type===Fe.error}function cs(t){return(t&&t.type)===Fe.redirect}function GI(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function qI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function YI(t){return DI.has(t.toLowerCase())}function Xt(t){return OI.has(t.toLowerCase())}async function yy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!Yw(u,l)&&(s&&s[l.route.id])!==void 0;if(ri(a)&&(i||c)){let d=r[o];re(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Qw(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function Qw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Fe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Fe.error,error:i}}return{type:Fe.data,data:t.deferredData.data}}}function dm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function KI(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function wh(t,e){let n=typeof e=="string"?Cn(e).search:e.search;if(t[t.length-1].route.index&&dm(n||""))return t[t.length-1];let r=Dc(t);return r[r.length-1]}function _y(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Pl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function QI(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function co(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function XI(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Fi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}const Lc=S.createContext(null),Xw=S.createContext(null),Us=S.createContext(null),jc=S.createContext(null),Vr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Jw=S.createContext(null);function JI(t,e){let{relative:n}=e===void 0?{}:e;Ba()||re(!1);let{basename:r,navigator:i}=S.useContext(Us),{hash:s,pathname:o,search:a}=eE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ba(){return S.useContext(jc)!=null}function Ha(){return Ba()||re(!1),S.useContext(jc).location}function Zw(t){S.useContext(Us).static||S.useLayoutEffect(t)}function Ga(){let{isDataRoute:t}=S.useContext(Vr);return t?d2():ZI()}function ZI(){Ba()||re(!1);let t=S.useContext(Lc),{basename:e,navigator:n}=S.useContext(Us),{matches:r}=S.useContext(Vr),{pathname:i}=Ha(),s=JSON.stringify(Dc(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return Zw(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=um(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:jn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const e2=S.createContext(null);function t2(t){let e=S.useContext(Vr).outlet;return e&&S.createElement(e2.Provider,{value:t},e)}function eE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Vr),{pathname:i}=Ha(),s=JSON.stringify(Dc(r).map(o=>o.pathnameBase));return S.useMemo(()=>um(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function n2(t,e,n){Ba()||re(!1);let{navigator:r}=S.useContext(Us),{matches:i}=S.useContext(Vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ha(),u;if(e){var c;let w=typeof e=="string"?Cn(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||re(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",y=Xi(t,{pathname:f}),m=a2(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:jn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:jn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&m?S.createElement(jc.Provider,{value:{location:Fu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ze.Pop}},m):m}function r2(){let t=rE(),e=Hw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const i2=S.createElement(r2,null);class s2 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Vr.Provider,{value:this.props.routeContext},S.createElement(Jw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o2(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Lc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Vr.Provider,{value:e},r)}function a2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||i2);let f=e.concat(s.slice(0,u+1)),y=()=>{let m;return c?m=d:l.route.Component?m=S.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,S.createElement(o2,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(s2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var tE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tE||{}),Uu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uu||{});function l2(t){let e=S.useContext(Lc);return e||re(!1),e}function u2(t){let e=S.useContext(Xw);return e||re(!1),e}function c2(t){let e=S.useContext(Vr);return e||re(!1),e}function nE(t){let e=c2(),n=e.matches[e.matches.length-1];return n.route.id||re(!1),n.route.id}function rE(){var t;let e=S.useContext(Jw),n=u2(Uu.UseRouteError),r=nE(Uu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function d2(){let{router:t}=l2(tE.UseNavigateStable),e=nE(Uu.UseNavigateStable),n=S.useRef(!1);return Zw(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fu({fromRouteId:e},s)))},[t,e])}const f2="startTransition",wy=ZC[f2];function h2(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),{v7_startTransition:o}=r||{},a=S.useCallback(d=>{o&&wy?wy(()=>s(d)):s(d)},[s,o]);S.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,y)=>n.navigate(d,{state:f,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(d,f,y)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),u=n.basename||"/",c=S.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return S.createElement(S.Fragment,null,S.createElement(Lc.Provider,{value:c},S.createElement(Xw.Provider,{value:i},S.createElement(g2,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?S.createElement(p2,{routes:n.routes,state:i}):e))),null)}function p2(t){let{routes:e,state:n}=t;return n2(e,void 0,n)}function m2(t){return t2(t.context)}function g2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ze.Pop,navigator:s,static:o=!1}=t;Ba()&&re(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:y="default"}=r,m=S.useMemo(()=>{let w=Fs(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:y},navigationType:i}},[a,u,c,d,f,y,i]);return m==null?null:S.createElement(Us.Provider,{value:l},S.createElement(jc.Provider,{children:n,value:m}))}new Promise(()=>{});function v2(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}function y2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function w2(t,e){return t.button===0&&(!e||e==="_self")&&!_2(t)}const E2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function b2(t,e){return zI({basename:e==null?void 0:e.basename,future:fa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:uI({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||S2(),routes:t,mapRouteProperties:v2}).initialize()}function S2(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=fa({},e,{errors:C2(e.errors)})),e}function C2(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new cm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const x2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vn=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=y2(e,E2),{basename:f}=S.useContext(Us),y,m=!1;if(typeof u=="string"&&k2.test(u)&&(y=u,x2))try{let p=new URL(window.location.href),_=u.startsWith("//")?new URL(p.protocol+u):new URL(u),v=Fs(_.pathname,f);_.origin===p.origin&&v!=null?u=v+_.search+_.hash:m=!0}catch{}let w=JI(u,{relative:i}),E=I2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||E(p)}return S.createElement("a",fa({},d,{href:y||w,onClick:m||s?r:g,ref:n,target:l}))});var Ey;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ey||(Ey={}));var by;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(by||(by={}));function I2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ga(),l=Ha(),u=eE(t,{relative:o});return S.useCallback(c=>{if(w2(c,n)){c.preventDefault();let d=r!==void 0?r:_i(l)===_i(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function T2(){return h.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[h.jsx("p",{className:"font-bold text-2xl",children:"Email Verification"}),h.jsx("p",{className:"",children:"You should have received a verification email. If you did not receive one, consider signing up again."}),h.jsx(Vn,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page"})]})}/**
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
 */const iE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw zs(e)},zs=function(t){return new Error("Firebase Database ("+iE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const sE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[c],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new R2;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oE=function(t){const e=sE(t);return fm.encodeByteArray(e,!0)},zu=function(t){return oE(t).replace(/\./g,"")},$u=function(t){try{return fm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P2(t){return aE(void 0,t)}function aE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!A2(n)||(t[n]=aE(t[n],e[n]));return t}function A2(t){return t!=="__proto__"}/**
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
 */function O2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const M2=()=>O2().__FIREBASE_DEFAULTS__,D2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$u(t[1]);return e&&JSON.parse(e)},hm=()=>{try{return M2()||D2()||L2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lE=t=>{var e,n;return(n=(e=hm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},j2=t=>{const e=lE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uE=()=>{var t;return(t=hm())===null||t===void 0?void 0:t.config},cE=t=>{var e;return(e=hm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function F2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zu(JSON.stringify(n)),zu(JSON.stringify(o)),a].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function U2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z2(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fE(){return iE.NODE_ADMIN===!0}function $2(){try{return typeof indexedDB=="object"}catch{return!1}}function W2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const V2="FirebaseError";class Br extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=V2,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?B2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Br(i,a,r)}}function B2(t,e){return t.replace(H2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const H2=/\{\$([^}]+)}/g;/**
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
 */function ha(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
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
 */const hE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ha($u(s[0])||""),n=ha($u(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},G2=function(t){const e=hE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},q2=function(t){const e=hE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Is(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sy(s)&&Sy(o)){if(!Vu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sy(t){return t!==null&&typeof t=="object"}/**
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
 */function $s(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function So(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Y2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function K2(t,e){const n=new Q2(t,e);return n.subscribe.bind(n)}class Q2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yd),i.error===void 0&&(i.error=Yd),i.complete===void 0&&(i.complete=Yd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yd(){}function mm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const J2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Uc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class Z2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tT(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eT(t){return t===Jr?void 0:t}function tT(t){return t.instantiationMode==="EAGER"}/**
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
 */class nT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const rT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},iT=ge.INFO,sT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},oT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gm{constructor(e){this.name=e,this._logLevel=iT,this._logHandler=oT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const aT=(t,e)=>e.some(n=>t instanceof n);let Cy,xy;function lT(){return Cy||(Cy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return xy||(xy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pE=new WeakMap,bh=new WeakMap,mE=new WeakMap,Kd=new WeakMap,vm=new WeakMap;function cT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pE.set(n,t)}).catch(()=>{}),vm.set(e,t),e}function dT(t){if(bh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bh.set(t,e)}let Sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fT(t){Sh=t(Sh)}function hT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qd(this),e,...n);return mE.set(r,e.sort?e.sort():[e]),Tr(r)}:uT().includes(t)?function(...e){return t.apply(Qd(this),e),Tr(pE.get(this))}:function(...e){return Tr(t.apply(Qd(this),e))}}function pT(t){return typeof t=="function"?hT(t):(t instanceof IDBTransaction&&dT(t),aT(t,lT())?new Proxy(t,Sh):t)}function Tr(t){if(t instanceof IDBRequest)return cT(t);if(Kd.has(t))return Kd.get(t);const e=pT(t);return e!==t&&(Kd.set(t,e),vm.set(e,t)),e}const Qd=t=>vm.get(t);function mT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gT=["get","getKey","getAll","getAllKeys","count"],vT=["put","add","delete","clear"],Xd=new Map;function ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Xd.set(e,s),s}fT(t=>({...t,get:(e,n,r)=>ky(e,n)||t.get(e,n,r),has:(e,n)=>!!ky(e,n)||t.has(e,n)}));/**
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
 */class yT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_T(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _T(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ch="@firebase/app",Iy="0.9.16";/**
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
 */const Ei=new gm("@firebase/app"),wT="@firebase/app-compat",ET="@firebase/analytics-compat",bT="@firebase/analytics",ST="@firebase/app-check-compat",CT="@firebase/app-check",xT="@firebase/auth",kT="@firebase/auth-compat",IT="@firebase/database",TT="@firebase/database-compat",NT="@firebase/functions",RT="@firebase/functions-compat",PT="@firebase/installations",AT="@firebase/installations-compat",OT="@firebase/messaging",MT="@firebase/messaging-compat",DT="@firebase/performance",LT="@firebase/performance-compat",jT="@firebase/remote-config",FT="@firebase/remote-config-compat",UT="@firebase/storage",zT="@firebase/storage-compat",$T="@firebase/firestore",WT="@firebase/firestore-compat",VT="firebase",BT="10.2.0";/**
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
 */const xh="[DEFAULT]",HT={[Ch]:"fire-core",[wT]:"fire-core-compat",[bT]:"fire-analytics",[ET]:"fire-analytics-compat",[CT]:"fire-app-check",[ST]:"fire-app-check-compat",[xT]:"fire-auth",[kT]:"fire-auth-compat",[IT]:"fire-rtdb",[TT]:"fire-rtdb-compat",[NT]:"fire-fn",[RT]:"fire-fn-compat",[PT]:"fire-iid",[AT]:"fire-iid-compat",[OT]:"fire-fcm",[MT]:"fire-fcm-compat",[DT]:"fire-perf",[LT]:"fire-perf-compat",[jT]:"fire-rc",[FT]:"fire-rc-compat",[UT]:"fire-gcs",[zT]:"fire-gcs-compat",[$T]:"fire-fst",[WT]:"fire-fst-compat","fire-js":"fire-js",[VT]:"fire-js-all"};/**
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
 */const Bu=new Map,kh=new Map;function GT(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(kh.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of Bu.values())GT(n,t);return!0}function ym(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const qT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nr=new qa("app","Firebase",qT);/**
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
 */class YT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=BT;function gE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=uE()),!n)throw Nr.create("no-options");const s=Bu.get(i);if(s){if(Vu(n,s.options)&&Vu(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new nT(i);for(const l of kh.values())o.addComponent(l);const a=new YT(n,r,o);return Bu.set(i,a),a}function vE(t=xh){const e=Bu.get(t);if(!e&&t===xh&&uE())return gE();if(!e)throw Nr.create("no-app",{appName:t});return e}function Rr(t,e,n){var r;let i=(r=HT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}Ts(new wi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const KT="firebase-heartbeat-database",QT=1,pa="firebase-heartbeat-store";let Jd=null;function yE(){return Jd||(Jd=mT(KT,QT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pa)}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Jd}async function XT(t){try{return await(await yE()).transaction(pa).objectStore(pa).get(_E(t))}catch(e){if(e instanceof Br)Ei.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function Ty(t,e){try{const r=(await yE()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,_E(t)),await r.done}catch(n){if(n instanceof Br)Ei.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(r.message)}}}function _E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JT=1024,ZT=30*24*60*60*1e3;class eN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ny();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ZT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ny(),{heartbeatsToSend:n,unsentEntries:r}=tN(this._heartbeatsCache.heartbeats),i=zu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ny(){return new Date().toISOString().substring(0,10)}function tN(t,e=JT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ry(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $2()?W2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ry(t){return zu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rN(t){Ts(new wi("platform-logger",e=>new yT(e),"PRIVATE")),Ts(new wi("heartbeat",e=>new eN(e),"PRIVATE")),Rr(Ch,Iy,t),Rr(Ch,Iy,"esm2017"),Rr("fire-js","")}rN("");var iN="firebase",sN="10.2.0";/**
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
 */Rr(iN,sN,"app");function _m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Py(t){return t!==void 0&&t.enterprise!==void 0}class oN{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function wE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aN=wE,EE=new qa("auth","Firebase",wE());/**
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
 */const Hu=new gm("@firebase/auth");function lN(t,...e){Hu.logLevel<=ge.WARN&&Hu.warn(`Auth (${Ws}): ${t}`,...e)}function su(t,...e){Hu.logLevel<=ge.ERROR&&Hu.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw wm(t,...e)}function wn(t,...e){return wm(t,...e)}function uN(t,e,n){const r=Object.assign(Object.assign({},aN()),{[e]:n});return new qa("auth","Firebase",r).create(e,{appName:t.name})}function wm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EE.create(t,...e)}function H(t,e,...n){if(!t)throw wm(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw su(e),new Error(e)}function Bn(t,e){t||On(e)}/**
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
 */function Ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cN(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cN()||U2()||"connection"in navigator)?navigator.onLine:!0}function fN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=pm()||dE()}get(){return dN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Em(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pN=new Ya(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,i={}){return SE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bE.fetch()(CE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function SE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hN),e);try{const i=new mN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Al(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uN(t,c,u);dn(t,c)}}catch(i){if(i instanceof Br)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function Ka(t,e,n,r,i={}){const s=await Gr(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function CE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Em(t.config,i):`${t.config.apiScheme}://${i}`}class mN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),pN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}async function gN(t,e){return Gr(t,"GET","/v2/recaptchaConfig",Hr(t,e))}/**
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
 */async function vN(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function yN(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _N(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=bm(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(Zd(i.auth_time)),issuedAtTime:jo(Zd(i.iat)),expirationTime:jo(Zd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zd(t){return Number(t)*1e3}function bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return su("JWT malformed, contained fewer than 3 sections"),null;try{const i=$u(n);return i?JSON.parse(i):(su("Failed to decode base64 JWT payload"),null)}catch(i){return su("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wN(t){const e=bm(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Br&&EN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ma(t,yN(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xN(s.providerUserInfo):[],a=CN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function SN(t){const e=vt(t);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xN(t){return t.map(e=>{var{providerId:n}=e,r=_m(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kN(t,e){const n=await SE(t,{},async()=>{const r=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=CE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function ir(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class di{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_m(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _N(this,e)}reload(){return SN(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ma(this,vN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:I,stsTokenManager:k}=n;H(_&&k,e,"internal-error");const A=ga.fromJSON(this.name,k);H(typeof _=="string",e,"internal-error"),ir(d,e.name),ir(f,e.name),H(typeof v=="boolean",e,"internal-error"),H(typeof b=="boolean",e,"internal-error"),ir(y,e.name),ir(m,e.name),ir(w,e.name),ir(E,e.name),ir(g,e.name),ir(p,e.name);const M=new di({uid:_,auth:e,email:f,emailVerified:v,displayName:d,isAnonymous:b,photoURL:m,phoneNumber:y,tenantId:w,stsTokenManager:A,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(M.providerData=I.map(L=>Object.assign({},L))),E&&(M._redirectEventId=E),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new di({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gu(s),s}}/**
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
 */const Oy=new Map;function Mn(t){Bn(t instanceof Function,"Expected a class definition");let e=Oy.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oy.set(t,e),e)}/**
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
 */class kE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kE.type="NONE";const My=kE;/**
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
 */function ou(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ou(this.userKey,i.apiKey,s),this.fullPersistenceKey=ou("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Mn(My),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mn(My);const o=ou(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=di._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ds(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ds(s,e,r))}}/**
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
 */function Dy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PE(e))return"Blackberry";if(AE(e))return"Webos";if(Sm(e))return"Safari";if((e.includes("chrome/")||TE(e))&&!e.includes("edge/"))return"Chrome";if(RE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IE(t=ct()){return/firefox\//i.test(t)}function Sm(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TE(t=ct()){return/crios\//i.test(t)}function NE(t=ct()){return/iemobile/i.test(t)}function RE(t=ct()){return/android/i.test(t)}function PE(t=ct()){return/blackberry/i.test(t)}function AE(t=ct()){return/webos/i.test(t)}function zc(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IN(t=ct()){var e;return zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TN(){return z2()&&document.documentMode===10}function OE(t=ct()){return zc(t)||RE(t)||AE(t)||PE(t)||/windows phone/i.test(t)||NE(t)}function NN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ME(t,e=[]){let n;switch(t){case"Browser":n=Dy(ct());break;case"Worker":n=`${Dy(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class RN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PN(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",Hr(t,e))}/**
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
 */const AN=6;class ON{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class MN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ly(this),this.idTokenSubscription=new Ly(this),this.beforeStateQueue=new RN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PN(this),n=new ON(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ME(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return vt(t)}class Ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=K2(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function DN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function DE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DN().appendChild(r)})}function LN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jN="https://www.google.com/recaptcha/enterprise.js?render=",FN="recaptcha-enterprise",UN="NO_RECAPTCHA";class zN{constructor(e){this.type=FN,this.auth=qr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new oN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Py(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(UN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Py(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}DE(jN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ns(t,e,n,r=!1){const i=new zN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function $N(t,e){const n=ym(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vu(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function WN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VN(t,e,n){const r=qr(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=LE(e),{host:o,port:a}=BN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||HN()}function LE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BN(t){const e=LE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jy(o)}}}function jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function GN(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ef(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}async function jE(t,e){return Gr(t,"POST","/v1/accounts:sendOobCode",Hr(t,e))}async function qN(t,e){return jE(t,e)}async function tf(t,e){return jE(t,e)}/**
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
 */async function YN(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function KN(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
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
 */class va extends Cm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new va(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new va(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ns(e,r,"signInWithPassword");return ef(e,i)}else return ef(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ns(e,r,"signInWithPassword");return ef(e,s)}else return Promise.reject(i)});case"emailLink":return YN(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return GN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KN(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fs(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
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
 */const QN="http://localhost";class bi extends Cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_m(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:QN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
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
 */function XN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JN(t){const e=So(Co(t)).link,n=e?So(Co(e)).deep_link_id:null,r=So(Co(t)).deep_link_id;return(r?So(Co(r)).link:null)||r||n||e||t}class xm{constructor(e){var n,r,i,s,o,a;const l=So(Co(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=XN((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JN(e);try{return new xm(n)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xm.parseLink(n);return H(r,"argument-error"),va._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class FE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qa extends FE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends Qa{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class hr extends Qa{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class pr extends Qa{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */async function nf(t,e){return Ka(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
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
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await di._fromIdTokenResponse(e,r,i),o=Fy(r);return new Si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fy(r);return new Si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qu extends Br{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qu(e,n,r,i)}}function UE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,s,e,r):s})}async function ZN(t,e,n=!1){const r=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",r)}/**
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
 */async function eR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ma(t,UE(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=bm(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function zE(t,e,n=!1){const r="signIn",i=await UE(t,r,e),s=await Si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tR(t,e){return zE(qr(t),e)}/**
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
 */function au(t,e,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function $E(t){const e=qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nR(t,e,n){var r;const i=qr(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Ns(i,s,"getOobCode",!0);n&&au(i,o,n),await tf(i,o)}else n&&au(i,s,n),await tf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Ns(i,s,"getOobCode",!0);n&&au(i,a,n),await tf(i,a)}else return Promise.reject(o)})}async function rR(t,e,n){var r;const i=qr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ns(i,s,"signUpPassword");o=nf(i,u)}else o=nf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ns(i,s,"signUpPassword");return nf(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$E(t),u}),l=await Si._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function iR(t,e,n){return tR(vt(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$E(t),r})}async function sR(t,e){const n=vt(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&au(n.auth,i,e);const{email:s}=await qN(n.auth,i);s!==t.email&&await t.reload()}function oR(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function aR(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function km(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function lR(t){return vt(t).signOut()}const Yu="__sak";/**
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
 */class WE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uR(){const t=ct();return Sm(t)||zc(t)}const cR=1e3,dR=10;class VE extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uR()&&NN(),this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VE.type="LOCAL";const fR=VE;/**
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
 */class BE extends WE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const HE=BE;/**
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
 */function hR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
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
 */function Im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Im("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function mR(t){En().location.href=t}/**
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
 */function GE(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function gR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yR(){return GE()?self:null}/**
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
 */const qE="firebaseLocalStorageDb",_R=1,Ku="firebaseLocalStorage",YE="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function wR(){const t=indexedDB.deleteDatabase(qE);return new Xa(t).toPromise()}function Th(){const t=indexedDB.open(qE,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:YE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await wR(),e(await Th()))})})}async function Uy(t,e,n){const r=Wc(t,!0).put({[YE]:e,value:n});return new Xa(r).toPromise()}async function ER(t,e){const n=Wc(t,!1).get(e),r=await new Xa(n).toPromise();return r===void 0?null:r.value}function zy(t,e){const n=Wc(t,!0).delete(e);return new Xa(n).toPromise()}const bR=800,SR=3;class KE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gR(),!this.activeServiceWorker)return;this.sender=new pR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Th();return await Uy(e,Yu,"1"),await zy(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ER(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wc(i,!1).getAll();return new Xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KE.type="LOCAL";const CR=KE;new Ya(3e4,6e4);/**
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
 */function xR(t,e){return e?Mn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tm extends Cm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kR(t){return zE(t.auth,new Tm(t),t.bypassAuthState)}function IR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),eR(n,new Tm(t),t.bypassAuthState)}async function TR(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),ZN(n,new Tm(t),t.bypassAuthState)}/**
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
 */class QE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kR;case"linkViaPopup":case"linkViaRedirect":return TR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:dn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NR=new Ya(2e3,1e4);class Zi extends QE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NR.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const RR="pendingRedirect",lu=new Map;class PR extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const r=await AR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(t,e){const n=DR(e),r=MR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OR(t,e){lu.set(t._key(),e)}function MR(t){return Mn(t._redirectPersistence)}function DR(t){return ou(RR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){const r=qr(t),i=xR(r,e),o=await new PR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jR=10*60*1e3;class FR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jR&&this.cachedEventUids.clear(),this.cachedEventUids.has($y(e))}saveEventToCache(e){this.cachedEventUids.add($y(e)),this.lastProcessedEventTime=Date.now()}}function $y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XE(t);default:return!1}}/**
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
 */async function zR(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
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
 */const $R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zR(t);for(const n of e)try{if(BR(n))return}catch{}dn(t,"unauthorized-domain")}function BR(t){const e=Ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WR.test(n))return!1;if($R.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const HR=new Ya(3e4,6e4);function Wy(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GR(t){return new Promise((e,n)=>{var r,i,s;function o(){Wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wy(),n(wn(t,"network-request-failed"))},timeout:HR.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=LN("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},DE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw uu=null,e})}let uu=null;function qR(t){return uu=uu||GR(t),uu}/**
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
 */const YR=new Ya(5e3,15e3),KR="__/auth/iframe",QR="emulator/auth/iframe",XR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZR(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Em(e,QR):`https://${t.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=JR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$s(r).slice(1)}`}async function eP(t){const e=await qR(t),n=En().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:ZR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},YR.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nP=500,rP=600,iP="_blank",sP="http://localhost";class Vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oP(t,e,n,r=nP,i=rP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ct().toLowerCase();n&&(a=TE(u)?iP:n),IE(u)&&(e=e||sP,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[y,m])=>`${f}${y}=${m},`,"");if(IN(u)&&a!=="_self")return aP(e||"",a),new Vy(null);const d=window.open(e||"",a,c);H(d,t,"popup-blocked");try{d.focus()}catch{}return new Vy(d)}function aP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lP="__/auth/handler",uP="emulator/auth/handler",cP=encodeURIComponent("fac");async function By(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof FE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Eh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Qa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${cP}=${encodeURIComponent(l)}`:"";return`${dP(t)}?${$s(a).slice(1)}${u}`}function dP({config:t}){return t.emulator?Em(t,uP):`https://${t.authDomain}/${lP}`}/**
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
 */const rf="webStorageSupport";class fP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HE,this._completeRedirectFn=LR,this._overrideRedirectResult=OR}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await By(e,n,r,Ih(),i);return oP(e,o,Im())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await By(e,n,r,Ih(),i);return mR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eP(e),r=new FR(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rf];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OE()||Sm()||zc()}}const hP=fP;var Hy="@firebase/auth",Gy="1.2.0";/**
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
 */class pP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gP(t){Ts(new wi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ME(t)},u=new MN(r,i,s,l);return WN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new wi("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(r=>new pP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rr(Hy,Gy,mP(t)),Rr(Hy,Gy,"esm2017")}/**
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
 */const vP=5*60,yP=cE("authIdTokenMaxAge")||vP;let qy=null;const _P=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yP)return;const i=n==null?void 0:n.token;qy!==i&&(qy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JE(t=vE()){const e=ym(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$N(t,{popupRedirectResolver:hP,persistence:[CR,fR,HE]}),r=cE("authTokenSyncURL");if(r){const s=_P(r);aR(n,s,()=>s(n.currentUser)),oR(n,o=>s(o))}const i=lE("auth");return i&&VN(n,`http://${i}`),n}gP("Browser");const Yy="@firebase/database",Ky="1.0.1";/**
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
 */let ZE="";function wP(t){ZE=t}/**
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
 */class EP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class bP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const eb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EP(e)}}catch{}return new bP},ii=eb("localStorage"),Nh=eb("sessionStorage");/**
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
 */const hs=new gm("@firebase/database"),SP=function(){let t=1;return function(){return t++}}(),tb=function(t){const e=J2(t),n=new Y2;n.update(e);const r=n.digest();return fm.encodeByteArray(r)},Ja=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ja.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let fi=null,Qy=!0;const CP=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hs.logLevel=ge.VERBOSE,fi=hs.log.bind(hs),e&&Nh.set("logging_enabled",!0)):typeof t=="function"?fi=t:(fi=null,Nh.remove("logging_enabled"))},lt=function(...t){if(Qy===!0&&(Qy=!1,fi===null&&Nh.get("logging_enabled")===!0&&CP(!0)),fi){const e=Ja.apply(null,t);fi(e)}},Za=function(t){return function(...e){lt(t,...e)}},Rh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ja(...t);hs.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ja(...t)}`;throw hs.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Ja(...t);hs.warn(e)},xP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rs="[MIN_NAME]",Ci="[MAX_NAME]",Bs=function(t,e){if(t===e)return 0;if(t===Rs||e===Ci)return-1;if(e===Rs||t===Ci)return 1;{const n=Xy(t),r=Xy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IP=function(t,e){return t===e?0:t<e?-1:1},fo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},Nm=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=Nm(t[e[r]]);return n+="}",n},rb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ib=function(t){O(!nb(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},TP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const PP=new RegExp("^-?(0*)\\d{1,10}$"),AP=-2147483648,OP=2147483647,Xy=function(t){if(PP.test(t)){const e=Number(t);if(e>=AP&&e<=OP)return e}return null},Hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},MP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class LP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
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
 */const Rm="5",sb="v",ob="s",ab="r",lb="f",ub=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cb="ls",db="p",Ph="ac",fb="websocket",hb="long_polling";/**
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
 */class pb{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ii.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ii.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mb(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===fb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jP(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class FP{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return P2(this.counters_)}}/**
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
 */const sf={},of={};function Pm(t){const e=t.toString();return sf[e]||(sf[e]=new FP),sf[e]}function UP(t,e){const n=t.toString();return of[n]||(of[n]=e()),of[n]}/**
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
 */class zP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Hs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jy="start",$P="close",WP="pLPCommand",VP="pRTLPCB",gb="id",vb="pw",yb="ser",BP="cb",HP="seg",GP="ts",qP="d",YP="dframe",_b=1870,wb=30,KP=_b-wb,QP=25e3,XP=3e4;class es{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Za(e),this.stats_=Pm(n),this.urlFn=l=>(this.appCheckToken&&(l[Ph]=this.appCheckToken),mb(n,hb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XP)),kP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Am((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jy)this.id=a,this.password=l;else if(o===$P)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jy]="t",r[yb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[sb]=Rm,this.transportSessionId&&(r[ob]=this.transportSessionId),this.lastSessionId&&(r[cb]=this.lastSessionId),this.applicationId&&(r[db]=this.applicationId),this.appCheckToken&&(r[Ph]=this.appCheckToken),typeof location<"u"&&location.hostname&&ub.test(location.hostname)&&(r[ab]=lb);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TP()&&!NP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oE(n),i=rb(r,KP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[YP]="t",r[gb]=e,r[vb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Am{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SP(),window[WP+this.uniqueCallbackIdentifier]=e,window[VP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Am.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gb]=this.myID,e[vb]=this.myPW,e[yb]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wb+r.length<=_b;){const o=this.pendingSegs.shift();r=r+"&"+HP+i+"="+o.seg+"&"+GP+i+"="+o.ts+"&"+qP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const JP=16384,ZP=45e3;let Qu=null;typeof MozWebSocket<"u"?Qu=MozWebSocket:typeof WebSocket<"u"&&(Qu=WebSocket);class en{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Za(this.connId),this.stats_=Pm(n),this.connURL=en.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[sb]=Rm,typeof location<"u"&&location.hostname&&ub.test(location.hostname)&&(o[ab]=lb),n&&(o[ob]=n),r&&(o[cb]=r),i&&(o[Ph]=i),s&&(o[db]=s),mb(e,fb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ii.set("previous_websocket_failure",!0);try{let r;fE(),this.mySock=new Qu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Qu!==null&&!en.forceDisallow_}static previouslyFailed(){return ii.isInMemoryStorage||ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){ii.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rb(n,JP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class ya{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const i=this.transports_=[];for(const s of ya.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ya.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ya.globalTransportInitialized_=!1;/**
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
 */const eA=6e4,tA=5e3,nA=10*1024,rA=100*1024,af="t",Zy="d",iA="s",e_="r",sA="e",t_="o",n_="a",r_="n",i_="p",oA="h";class aA{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Za("c:"+this.id+":"),this.transportManager_=new ya(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(af in e){const n=e[af];n===n_?this.upgradeIfSecondaryHealthy_():n===e_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===t_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fo("t",e),r=fo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:i_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:n_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fo("t",e),r=fo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fo(af,e);if(Zy in e){const r=e[Zy];if(n===oA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===r_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iA?this.onConnectionShutdown_(r):n===e_?this.onReset_(r):n===sA?Rh("Server Error: "+r):n===t_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rm!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:i_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Eb{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class bb{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Xu extends bb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xu}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const s_=32,o_=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new ye("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dr(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Sb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cb(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return bt(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Om(t,e){if(Dr(t)!==Dr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dr(t)>Dr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class uA{constructor(e,n){this.errorPrefix_=n,this.parts_=Cb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Uc(this.parts_[r]);kb(this)}}function cA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Uc(e),kb(t)}function dA(t){const e=t.parts_.pop();t.byteLength_-=Uc(e),t.parts_.length>0&&(t.byteLength_-=1)}function kb(t){if(t.byteLength_>o_)throw new Error(t.errorPrefix_+"has a key path longer than "+o_+" bytes ("+t.byteLength_+").");if(t.parts_.length>s_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+s_+") or object contains a cycle "+Zr(t))}function Zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mm extends bb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Mm}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ho=1e3,fA=60*5*1e3,a_=30*1e3,hA=1.3,pA=3e4,mA="server_kill",l_=3;class Fn extends Eb{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Za("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=fA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!fE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const r=Is(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||q2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=a_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=G2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rh("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pA&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new aA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{It(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(mA)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eh(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Nm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=l_&&(this.reconnectDelay_=a_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=l_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ZE.replace(/\./g,"-")]=1,pm()?e["framework.cordova"]=1:dE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xu.getInstance().currentlyOnline();return Eh(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class Vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(Rs,e),i=new te(Rs,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let Ol;class Ib extends Vc{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return Bs(e.name,n.name)}isDefinedOn(e){throw zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Ci,Ol)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Ol)}toString(){return".key"}}const ms=new Ib;/**
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
 */class Ml{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??St.EMPTY_NODE,this.right=s??St.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class gA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ml(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new gA;/**
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
 */function vA(t,e){return Bs(t.name,e.name)}function Dm(t,e){return Bs(t,e)}/**
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
 */let Ah;function yA(t){Ah=t}const Tb=function(t){return typeof t=="number"?"number:"+ib(t):"string:"+t},Nb=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else O(t===Ah||t.isEmpty(),"priority of unexpected type.");O(t===Ah||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let u_;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nb(this.priorityNode_)}static set __childrenNodeConstructor(e){u_=e}static get __childrenNodeConstructor(){return u_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:ee(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ib(this.value_):e+=this.value_,this.lazyHash_=tb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),s=Ye.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Rb,Pb;function _A(t){Rb=t}function wA(t){Pb=t}class EA extends Vc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Bs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Ci,new Ye("[PRIORITY-POST]",Pb))}makePost(e,n){const r=Rb(e);return new te(n,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new EA;/**
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
 */const bA=Math.log(2);class SA{constructor(e){const n=s=>parseInt(Math.log(s)/bA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ju=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Qe(f,d.node,Qe.BLACK,null,null);{const y=parseInt(c/2,10)+l,m=i(l,y),w=i(y+1,u);return d=t[y],f=n?n(d):d,new Qe(f,d.node,Qe.BLACK,m,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(m,w){const E=d-m,g=d;d-=m;const p=i(E+1,g),_=t[E],v=n?n(_):_;y(new Qe(v,_.node,w,null,p))},y=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));w?f(E,Qe.BLACK):(f(E,Qe.BLACK),f(E,Qe.RED))}return c},o=new SA(t.length),a=s(o);return new St(r||e,a)};/**
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
 */let lf;const Di={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Di&&De,"ChildrenNode.ts has not been loaded"),lf=lf||new Dn({".priority":Di},{".priority":De}),lf}get(e){const n=Is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ju(r,e.getCompare()):a=Di;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Dn(c,u)}addToIndexes(e,n){const r=Wu(this.indexes_,(i,s)=>{const o=Is(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===Di)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ju(a,o.getCompare())}else return Di;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new Dn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wu(this.indexes_,i=>{if(i===Di)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Dn(r,this.indexSet_)}}/**
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
 */let po;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Nb(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return po||(po=new G(new St(Dm),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||po}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?po:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?po:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{O(ee(e)!==".priority"||Dr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tb(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tb(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===el?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CA extends G{constructor(){super(new St(Dm),G.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const el=new CA;Object.defineProperties(te,{MIN:{value:new te(Rs,G.EMPTY_NODE)},MAX:{value:new te(Ci,el)}});Ib.__EMPTY_NODE=G.EMPTY_NODE;Ye.__childrenNodeConstructor=G;yA(el);wA(el);/**
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
 */const xA=!0;function tt(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,tt(e))}if(!(t instanceof Array)&&xA){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return G.EMPTY_NODE;const s=Ju(n,vA,o=>o.name,Dm);if(r){const o=Ju(n,De.getCompare());return new G(s,tt(e),new Dn({".priority":o},{".priority":De}))}else return new G(s,tt(e),Dn.Default)}else{let n=G.EMPTY_NODE;return Tt(t,(r,i)=>{if(Xn(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}_A(tt);/**
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
 */class kA extends Vc{constructor(e){super(),this.indexPath_=e,O(!ie(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Bs(e.name,n.name):s}makePost(e,n){const r=tt(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,el);return new te(Ci,e)}toString(){return Cb(this.indexPath_,0).join("/")}}/**
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
 */class IA extends Vc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Bs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=tt(e);return new te(n,r)}toString(){return".value"}}const TA=new IA;/**
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
 */function Ab(t){return{type:"value",snapshotNode:t}}function Ps(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _a(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function NA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Lm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_a(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ps(n,r)):o.trackChildChange(wa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(_a(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(wa(i,s,o))}else r.trackChildChange(Ps(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ea{constructor(e){this.indexedFilter_=new Lm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ea.getStartPost_(e),this.endPost_=Ea.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new te(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class RA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ea(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,y)=>d(y,f)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new te(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(c&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(wa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_a(n,d));const w=a.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ps(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(_a(u.name,u.node)),s.trackChildChange(Ps(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
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
 */class jm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rs}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new jm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PA(t){return t.loadsAllData()?new Lm(t.getIndex()):t.hasLimit()?new RA(t):new Ea(t)}function c_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===TA?n="$value":t.index_===ms?n="$key":(O(t.index_ instanceof kA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function d_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
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
 */class Zu extends Eb{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Za("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Zu.getListenId_(e,r),a={};this.listens_[o]=a;const l=c_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Is(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Zu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=c_(e._queryParams),r=e._path.toString(),i=new Fc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ha(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class AA{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ec(){return{value:null,children:new Map}}function Ob(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,ec());const i=t.children.get(r);e=_e(e),Ob(i,e,n)}}function Oh(t,e,n){t.value!==null?n(e,t.value):OA(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);Oh(i,s,n)})}function OA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class MA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const f_=10*1e3,DA=30*1e3,LA=5*60*1e3;class jA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new MA(e);const r=f_+(DA-f_)*Math.random();Fo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&Xn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*LA))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function Mb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Um(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class tc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=Mb()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new tc(ce(),n,this.revert)}}else return O(ee(this.path)===e,"operationForChild called for unrelated child."),new tc(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class ba{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new ba(this.source,ce()):new ba(this.source,_e(this.path))}}/**
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
 */class xi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return ie(this.path)?new xi(this.source,ce(),this.snap.getImmediateChild(e)):new xi(this.source,_e(this.path),this.snap)}}/**
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
 */class Sa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new xi(this.source,ce(),n.value):new Sa(this.source,ce(),n)}else return O(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sa(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class FA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(NA(o.childName,o.snapshotNode))}),mo(t,i,"child_removed",e,r,n),mo(t,i,"child_added",e,r,n),mo(t,i,"child_moved",s,r,n),mo(t,i,"child_changed",e,r,n),mo(t,i,"value",e,r,n),i}function mo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>$A(t,a,l)),o.forEach(a=>{const l=zA(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function zA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $A(t,e,n){if(e.childName==null||n.childName==null)throw zs("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Bc(t,e){return{eventCache:t,serverCache:e}}function Uo(t,e,n,r){return Bc(new ki(e,n,r),t.serverCache)}function Db(t,e,n,r){return Bc(t.eventCache,new ki(e,n,r))}function Mh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let uf;const WA=()=>(uf||(uf=new St(IP)),uf);class Se{constructor(e,n=WA()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Tt(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ie(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:Be(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new Se(null)}}set(e,n){if(ie(e))return new Se(n,this.children);{const r=ee(e),s=(this.children.get(r)||new Se(null)).set(_e(e),n),o=this.children.insert(r,s);return new Se(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(ie(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(ie(e))return n;{const r=ee(e),s=(this.children.get(r)||new Se(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Se(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ie(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),Be(n,i),r):new Se(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new Se(null))}}function zo(t,e,n){if(ie(e))return new ln(new Se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new Se(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function h_(t,e,n){let r=t;return Tt(n,(i,s)=>{r=zo(r,Be(e,i),s)}),r}function p_(t,e){if(ie(e))return ln.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new ln(n)}}function Dh(t,e){return Oi(t,e)!=null}function Oi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function m_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function Pr(t,e){if(ie(e))return t;{const n=Oi(t,e);return n!=null?new ln(new Se(n)):new ln(t.writeTree_.subtree(e))}}function Lh(t){return t.writeTree_.isEmpty()}function As(t,e){return Lb(ce(),t.writeTree_,e)}function Lb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Lb(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
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
 */function zm(t,e){return zb(e,t)}function VA(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=r}function BA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GA(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return qA(t),!0;if(r.snap)t.visibleWrites=p_(t.visibleWrites,r.path);else{const a=r.children;Tt(a,l=>{t.visibleWrites=p_(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function GA(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Be(t.path,n),e))return!0;return!1}function qA(t){t.visibleWrites=jb(t.allWrites,YA,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function YA(t){return t.visible}function jb(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=bt(n,o),r=zo(r,a,s.snap)):tn(o,n)&&(a=bt(o,n),r=zo(r,ce(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=bt(n,o),r=h_(r,a,s.children);else if(tn(o,n))if(a=bt(o,n),ie(a))r=h_(r,ce(),s.children);else{const l=Is(s.children,ee(a));if(l){const u=l.getChild(_e(a));r=zo(r,ce(),u)}}}else throw zs("WriteRecord should have .snap or .children")}}return r}function Fb(t,e,n,r,i){if(!r&&!i){const s=Oi(t.visibleWrites,e);if(s!=null)return s;{const o=Pr(t.visibleWrites,e);if(Lh(o))return n;if(n==null&&!Dh(o,ce()))return null;{const a=n||G.EMPTY_NODE;return As(o,a)}}}else{const s=Pr(t.visibleWrites,e);if(!i&&Lh(s))return n;if(!i&&n==null&&!Dh(s,ce()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=jb(t.allWrites,o,e),l=n||G.EMPTY_NODE;return As(a,l)}}}function KA(t,e,n){let r=G.EMPTY_NODE;const i=Oi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=As(Pr(s,new ye(o)),a);r=r.updateImmediateChild(o,l)}),m_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pr(t.visibleWrites,e);return m_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function QA(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(Dh(t.visibleWrites,s))return null;{const o=Pr(t.visibleWrites,s);return Lh(o)?i.getChild(n):As(o,i.getChild(n))}}function XA(t,e,n,r){const i=Be(e,n),s=Oi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pr(t.visibleWrites,i);return As(o,r.getNode().getImmediateChild(n))}else return null}function JA(t,e){return Oi(t.visibleWrites,e)}function ZA(t,e,n,r,i,s,o){let a;const l=Pr(t.visibleWrites,e),u=Oi(l,ce());if(u!=null)a=u;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&c.length<i;)d(y,r)!==0&&c.push(y),y=f.getNext();return c}else return[]}function eO(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function nc(t,e,n,r){return Fb(t.writeTree,t.treePath,e,n,r)}function $m(t,e){return KA(t.writeTree,t.treePath,e)}function g_(t,e,n,r){return QA(t.writeTree,t.treePath,e,n,r)}function rc(t,e){return JA(t.writeTree,Be(t.treePath,e))}function tO(t,e,n,r,i,s){return ZA(t.writeTree,t.treePath,e,n,r,i,s)}function Wm(t,e,n){return XA(t.writeTree,t.treePath,e,n)}function Ub(t,e){return zb(Be(t.treePath,e),t.writeTree)}function zb(t,e){return{treePath:t,writeTree:e}}/**
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
 */class nO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,wa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_a(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ps(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,wa(r,e.snapshotNode,i.oldSnap));else throw zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class rO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const $b=new rO;class Vm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ki(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ii(this.viewCache_),s=tO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function iO(t){return{filter:t}}function sO(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oO(t,e,n,r,i){const s=new nO;let o,a;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=jh(t,e,u.path,u.snap,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ie(u.path),o=ic(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=lO(t,e,u.path,u.children,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Fh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=dO(t,e,u.path,r,i,s):o=uO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=cO(t,e,n.path,r,s);else throw zs("Unknown operation type: "+n.type);const l=s.getChanges();return aO(e,o,l),{viewCache:o,changes:l}}function aO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ab(Mh(e)))}}function Wb(t,e,n,r,i,s){const o=e.eventCache;if(rc(r,n)!=null)return e;{let a,l;if(ie(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ii(e),c=u instanceof G?u:G.EMPTY_NODE,d=$m(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=nc(r,Ii(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ee(n);if(u===".priority"){O(Dr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=g_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=_e(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=g_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Wm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Uo(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function ic(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ie(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),y,null)}else{const y=ee(n);if(!l.isCompleteForPath(n)&&Dr(n)>1)return e;const m=_e(n),E=l.getNode().getImmediateChild(y).updateChild(m,r);y===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),y,E,m,$b,null)}const d=Db(e,u,l.isFullyInitialized()||ie(n),c.filtersNodes()),f=new Vm(i,d,s);return Wb(t,d,n,i,f,a)}function jh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Vm(i,e,s);if(ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Uo(e,u,!0,t.filter.filtersNodes());else{const d=ee(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Uo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=_e(n),y=a.getNode().getImmediateChild(d);let m;if(ie(f))m=r;else{const w=c.getCompleteChild(d);w!=null?Sb(f)===".priority"&&w.getChild(xb(f)).isEmpty()?m=w:m=w.updateChild(f,r):m=G.EMPTY_NODE}if(y.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),d,m,f,c,o);l=Uo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function v_(t,e){return t.eventCache.isCompleteForChild(e)}function lO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Be(n,l);v_(e,ee(c))&&(a=jh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Be(n,l);v_(e,ee(c))||(a=jh(t,a,c,u,i,s,o))}),a}function y_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Fh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ie(n)?u=r:u=new Se(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),m=y_(t,y,f);l=ic(t,l,new ye(d),m,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const y=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!y){const m=e.serverCache.getNode().getImmediateChild(d),w=y_(t,m,f);l=ic(t,l,new ye(d),w,i,s,o,a)}}),l}function uO(t,e,n,r,i,s,o){if(rc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ic(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ie(n)){let u=new Se(null);return l.getNode().forEachChild(ms,(c,d)=>{u=u.set(new ye(c),d)}),Fh(t,e,n,u,i,s,a,o)}else return e}else{let u=new Se(null);return r.foreach((c,d)=>{const f=Be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Fh(t,e,n,u,i,s,a,o)}}function cO(t,e,n,r,i){const s=e.serverCache,o=Db(e,s.getNode(),s.isFullyInitialized()||ie(n),s.isFiltered());return Wb(t,o,n,r,$b,i)}function dO(t,e,n,r,i,s){let o;if(rc(r,n)!=null)return e;{const a=new Vm(r,e,i),l=e.eventCache.getNode();let u;if(ie(n)||ee(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=nc(r,Ii(e));else{const d=e.serverCache.getNode();O(d instanceof G,"serverChildren would be complete if leaf node"),c=$m(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ee(n);let d=Wm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,_e(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,G.EMPTY_NODE,_e(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nc(r,Ii(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||rc(r,ce())!=null,Uo(e,u,o,t.filter.filtersNodes())}}/**
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
 */let fO=class{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Lm(r.getIndex()),s=PA(r);this.processor_=iO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),c=new ki(l,o.isFullyInitialized(),i.filtersNodes()),d=new ki(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bc(d,c),this.eventGenerator_=new FA(this.query_)}get query(){return this.query_}};function hO(t){return t.viewCache_.serverCache.getNode()}function pO(t,e){const n=Ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function __(t){return t.eventRegistrations_.length===0}function mO(t,e){t.eventRegistrations_.push(e)}function w_(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function E_(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(O(Ii(t.viewCache_),"We should always have a full cache before handling merges"),O(Mh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=oO(t.processor_,i,e,n,r);return sO(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Vb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function gO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(Ps(s,o))}),n.isFullyInitialized()&&r.push(Ab(n.getNode())),Vb(t,r,n.getNode(),e)}function Vb(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UA(t.eventGenerator_,e,n,i)}/**
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
 */let sc;class vO{constructor(){this.views=new Map}}function yO(t){O(!sc,"__referenceConstructor has already been defined"),sc=t}function _O(){return O(sc,"Reference.ts has not been loaded"),sc}function wO(t){return t.views.size===0}function Bm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),E_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(E_(o,e,n,r));return s}}function EO(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=nc(n,i?r:null),l=!1;a?l=!0:r instanceof G?(a=$m(n,r),l=!1):(a=G.EMPTY_NODE,l=!1);const u=Bc(new ki(a,l,!1),new ki(r,i,!1));return new fO(e,u)}return o}function bO(t,e,n,r,i,s){const o=EO(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mO(o,n),gO(o,n)}function SO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Lr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(w_(u,n,r)),__(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(w_(l,n,r)),__(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Lr(t)&&s.push(new(_O())(e._repo,e._path)),{removed:s,events:o}}function Bb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gs(t,e){let n=null;for(const r of t.views.values())n=n||pO(r,e);return n}function Hb(t,e){if(e._queryParams.loadsAllData())return Hc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Gb(t,e){return Hb(t,e)!=null}function Lr(t){return Hc(t)!=null}function Hc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let oc;function CO(t){O(!oc,"__referenceConstructor has already been defined"),oc=t}function xO(){return O(oc,"Reference.ts has not been loaded"),oc}let kO=1;class b_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=eO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qb(t,e,n,r,i){return VA(t.pendingWriteTree_,e,n,r,i),i?tl(t,new xi(Mb(),e,n)):[]}function si(t,e,n=!1){const r=BA(t.pendingWriteTree_,e);if(HA(t.pendingWriteTree_,e)){let s=new Se(null);return r.snap!=null?s=s.set(ce(),!0):Tt(r.children,o=>{s=s.set(new ye(o),!0)}),tl(t,new tc(r.path,s,n))}else return[]}function Gc(t,e,n){return tl(t,new xi(Fm(),e,n))}function IO(t,e,n){const r=Se.fromObject(n);return tl(t,new Sa(Fm(),e,r))}function TO(t,e){return tl(t,new ba(Fm(),e))}function NO(t,e,n){const r=Gm(t,n);if(r){const i=qm(r),s=i.path,o=i.queryId,a=bt(s,e),l=new ba(Um(o),a);return Ym(t,s,l)}else return[]}function Uh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Gb(o,e))){const l=SO(o,e,n,r);wO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,y)=>Lr(y));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const y=AO(f);for(let m=0;m<y.length;++m){const w=y[m],E=w.query,g=Qb(t,w);t.listenProvider_.startListening($o(E),ac(t,E),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening($o(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(qc(f));t.listenProvider_.stopListening($o(f),y)}))}OO(t,u)}return a}function RO(t,e,n,r){const i=Gm(t,r);if(i!=null){const s=qm(i),o=s.path,a=s.queryId,l=bt(o,e),u=new xi(Um(a),l,n);return Ym(t,o,u)}else return[]}function PO(t,e,n,r){const i=Gm(t,r);if(i){const s=qm(i),o=s.path,a=s.queryId,l=bt(o,e),u=Se.fromObject(n),c=new Sa(Um(a),l,u);return Ym(t,o,c)}else return[]}function S_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,y)=>{const m=bt(f,i);s=s||gs(y,m),o=o||Lr(y)});let a=t.syncPointTree_.get(i);a?(o=o||Lr(a),s=s||gs(a,ce())):(a=new vO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,m)=>{const w=gs(m,ce());w&&(s=s.updateImmediateChild(y,w))}));const u=Gb(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=qc(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=MO();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const c=zm(t.pendingWriteTree_,i);let d=bO(a,e,n,c,s,l);if(!u&&!o&&!r){const f=Hb(a,e);d=d.concat(DO(t,e,f))}return d}function Hm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),u=gs(a,l);if(u)return u});return Fb(i,e,s,n,!0)}function tl(t,e){return Yb(e,t.syncPointTree_,null,zm(t.pendingWriteTree_,ce()))}function Yb(t,e,n,r){if(ie(t.path))return Kb(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=gs(i,ce()));let s=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Ub(r,o);s=s.concat(Yb(a,l,u,c))}return i&&(s=s.concat(Bm(i,t,r,n))),s}}function Kb(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=gs(i,ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ub(r,o),c=t.operationForChild(o);c&&(s=s.concat(Kb(c,a,l,u)))}),i&&(s=s.concat(Bm(i,t,r,n))),s}function Qb(t,e){const n=e.query,r=ac(t,n);return{hashFn:()=>(hO(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?NO(t,n._path,r):TO(t,n._path);{const s=RP(i,n);return Uh(t,n,null,s)}}}}function ac(t,e){const n=qc(e);return t.queryToTagMap.get(n)}function qc(t){return t._path.toString()+"$"+t._queryIdentifier}function Gm(t,e){return t.tagToQueryMap.get(e)}function qm(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Ym(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=zm(t.pendingWriteTree_,e);return Bm(r,n,i,null)}function AO(t){return t.fold((e,n,r)=>{if(n&&Lr(n))return[Hc(n)];{let i=[];return n&&(i=Bb(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function $o(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xO())(t._repo,t._path):t}function OO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=qc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function MO(){return kO++}function DO(t,e,n){const r=e._path,i=ac(t,e),s=Qb(t,n),o=t.listenProvider_.startListening($o(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Lr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ie(u)&&c&&Lr(c))return[Hc(c).query];{let f=[];return c&&(f=f.concat(Bb(c).map(y=>y.query))),Tt(d,(y,m)=>{f=f.concat(m)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening($o(c),ac(t,c))}}return o}/**
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
 */class Km{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Km(n)}node(){return this.node_}}class Qm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Qm(this.syncTree_,n)}node(){return Hm(this.syncTree_,this.path_)}}const LO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},C_=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FO(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},FO=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},UO=function(t,e,n,r){return Xm(e,new Qm(n,t),r)},Xb=function(t,e,n){return Xm(t,new Km(e),n)};function Xm(t,e,n){const r=t.getPriority().val(),i=C_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=C_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ye(i))),o.forEachChild(De,(a,l)=>{const u=Xm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Jm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zm(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=ee(n);for(;i!==null;){const s=Is(r.node.children,i)||{children:{},childCount:0};r=new Jm(i,r,s),n=_e(n),i=ee(n)}return r}function Gs(t){return t.node.value}function Jb(t,e){t.node.value=e,zh(t)}function Zb(t){return t.node.childCount>0}function zO(t){return Gs(t)===void 0&&!Zb(t)}function Yc(t,e){Tt(t.node.children,(n,r)=>{e(new Jm(n,t,r))})}function eS(t,e,n,r){n&&!r&&e(t),Yc(t,i=>{eS(i,e,!0,r)}),n&&r&&e(t)}function $O(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function nl(t){return new ye(t.parent===null?t.name:nl(t.parent)+"/"+t.name)}function zh(t){t.parent!==null&&WO(t.parent,t.name,t)}function WO(t,e,n){const r=zO(n),i=Xn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zh(t))}/**
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
 */const VO=/[\[\].#$\/\u0000-\u001F\u007F]/,BO=/[\[\].#$\u0000-\u001F\u007F]/,cf=10*1024*1024,tS=function(t){return typeof t=="string"&&t.length!==0&&!VO.test(t)},nS=function(t){return typeof t=="string"&&t.length!==0&&!BO.test(t)},HO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nS(t)},GO=function(t,e,n,r){r&&e===void 0||eg(mm(t,"value"),e,n)},eg=function(t,e,n){const r=n instanceof ye?new uA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zr(r)+" with contents = "+e.toString());if(nb(e))throw new Error(t+"contains "+e.toString()+" "+Zr(r));if(typeof e=="string"&&e.length>cf/3&&Uc(e)>cf)throw new Error(t+"contains a string greater than "+cf+" utf8 bytes "+Zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cA(r,o),eg(t,a,r),dA(r)}),i&&s)throw new Error(t+' contains ".value" child '+Zr(r)+" in addition to actual children.")}},rS=function(t,e,n,r){if(!(r&&n===void 0)&&!nS(n))throw new Error(mm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rS(t,e,n,r)},YO=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},KO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HO(n))throw new Error(mm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class QO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Om(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function iS(t,e,n){tg(t,n),sS(t,r=>Om(r,e))}function Gn(t,e,n){tg(t,n),sS(t,r=>tn(r,e)||tn(e,r))}function sS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(XO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function XO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();fi&&lt("event: "+n.toString()),Hs(r)}}}/**
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
 */const JO="repo_interrupt",ZO=25;class eM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new Jm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tM(t,e,n){if(t.stats_=Pm(t.repoInfo_),t.forceRestClient_||MP())t.server_=new Zu(t.repoInfo_,(r,i,s,o)=>{x_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>k_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{x_(t,r,i,s,o)},r=>{k_(t,r)},r=>{rM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=UP(t.repoInfo_,()=>new jA(t.stats_,t.server_)),t.infoData_=new AA,t.infoSyncTree_=new b_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Gc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rg(t,"connected",!1),t.serverSyncTree_=new b_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Gn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function nM(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ng(t){return LO({timestamp:nM(t)})}function x_(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Wu(n,u=>tt(u));o=PO(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=RO(t.serverSyncTree_,s,l,i)}else if(r){const l=Wu(n,u=>tt(u));o=IO(t.serverSyncTree_,s,l)}else{const l=tt(n);o=Gc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Kc(t,s)),Gn(t.eventQueue_,a,o)}function k_(t,e){rg(t,"connected",e),e===!1&&sM(t)}function rM(t,e){Tt(e,(n,r)=>{rg(t,n,r)})}function rg(t,e,n){const r=new ye("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Gc(t.infoSyncTree_,r,i);Gn(t.eventQueue_,r,s)}function oS(t){return t.nextWriteId_++}function iM(t,e,n,r,i){ig(t,"set",{path:e.toString(),value:n,priority:r});const s=ng(t),o=tt(n,r),a=Hm(t.serverSyncTree_,e),l=Xb(o,a,s),u=oS(t),c=qb(t.serverSyncTree_,e,l,u,!0);tg(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const m=f==="ok";m||It("set at "+e+" failed: "+f);const w=si(t.serverSyncTree_,u,!m);Gn(t.eventQueue_,e,w),lM(t,i,f,y)});const d=dS(t,e);Kc(t,d),Gn(t.eventQueue_,d,[])}function sM(t){ig(t,"onDisconnectEvents");const e=ng(t),n=ec();Oh(t.onDisconnect_,ce(),(i,s)=>{const o=UO(i,s,t.serverSyncTree_,e);Ob(n,i,o)});let r=[];Oh(n,ce(),(i,s)=>{r=r.concat(Gc(t.serverSyncTree_,i,s));const o=dS(t,i);Kc(t,o)}),t.onDisconnect_=ec(),Gn(t.eventQueue_,ce(),r)}function oM(t,e,n){let r;ee(e._path)===".info"?r=S_(t.infoSyncTree_,e,n):r=S_(t.serverSyncTree_,e,n),iS(t.eventQueue_,e._path,r)}function I_(t,e,n){let r;ee(e._path)===".info"?r=Uh(t.infoSyncTree_,e,n):r=Uh(t.serverSyncTree_,e,n),iS(t.eventQueue_,e._path,r)}function aM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(JO)}function ig(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function lM(t,e,n,r){e&&Hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function aS(t,e,n){return Hm(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function sg(t,e=t.transactionQueueTree_){if(e||Qc(t,e),Gs(e)){const n=uS(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uM(t,nl(e),n)}else Zb(e)&&Yc(e,n=>{sg(t,n)})}function uM(t,e,n){const r=n.map(u=>u.currentWriteId),i=aS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];O(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=bt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ig(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(si(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Qc(t,Zm(t.transactionQueueTree_,e)),sg(t,t.transactionQueueTree_),Gn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Hs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Kc(t,e)}},o)}function Kc(t,e){const n=lS(t,e),r=nl(n),i=uS(t,n);return cM(t,i,r),r}function cM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bt(n,l.path);let c=!1,d;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(si(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ZO)c=!0,d="maxretry",i=i.concat(si(t.serverSyncTree_,l.currentWriteId,!0));else{const f=aS(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){eg("transaction failed: Data returned ",y,l.path);let m=tt(y);typeof y=="object"&&y!=null&&Xn(y,".priority")||(m=m.updatePriority(f.getPriority()));const E=l.currentWriteId,g=ng(t),p=Xb(m,f,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=oS(t),o.splice(o.indexOf(E),1),i=i.concat(qb(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(si(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(si(t.serverSyncTree_,l.currentWriteId,!0))}Gn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Qc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Hs(r[a]);sg(t,t.transactionQueueTree_)}function lS(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&Gs(r)===void 0;)r=Zm(r,n),e=_e(e),n=ee(e);return r}function uS(t,e){const n=[];return cS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cS(t,e,n){const r=Gs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yc(e,i=>{cS(t,i,n)})}function Qc(t,e){const n=Gs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Jb(e,n.length>0?n:void 0)}Yc(e,r=>{Qc(t,r)})}function dS(t,e){const n=nl(lS(t,e)),r=Zm(t.transactionQueueTree_,e);return $O(r,i=>{df(t,i)}),df(t,r),eS(r,i=>{df(t,i)}),n}function df(t,e){const n=Gs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(si(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Jb(e,void 0):n.length=s+1,Gn(t.eventQueue_,nl(e),i);for(let o=0;o<r.length;o++)Hs(r[o])}}/**
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
 */function dM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const T_=function(t,e){const n=hM(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pb(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},hM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=dM(t.substring(c,d)));const f=fM(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class fS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class hS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class pM{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class og{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ie(this._path)?null:Sb(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=d_(this._queryParams),n=Nm(e);return n==="{}"?"default":n}get _queryObject(){return d_(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof og))return!1;const n=this._repo===e._repo,r=Om(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lA(this._path)}}class Jn extends og{constructor(e,n){super(e,n,new jm,!1)}get parent(){const e=xb(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ca{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=lc(this.ref,e);return new Ca(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ca(i,lc(this.ref,r),De)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xc(t,e){return t=vt(t),t._checkNotDeleted("ref"),e!==void 0?lc(t._root,e):t._root}function lc(t,e){return t=vt(t),ee(t._path)===null?qO("child","path",e,!1):rS("child","path",e,!1),new Jn(t._repo,Be(t._path,e))}function ag(t,e){t=vt(t),YO("set",t._path),GO("set",e,t._path,!1);const n=new Fc;return iM(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class lg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fS("value",this,new Ca(e.snapshotNode,new Jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hS(this,e,n):null}matches(e){return e instanceof lg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ug{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hS(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=lc(new Jn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fS(e.type,this,new Ca(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ug?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mM(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{I_(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new pM(n,s||void 0),a=e==="value"?new lg(o):new ug(e,o);return oM(t._repo,t,a),()=>I_(t._repo,t,a)}function gM(t,e,n,r){return mM(t,"value",e,n,r)}yO(Jn);CO(Jn);/**
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
 */const vM="FIREBASE_DATABASE_EMULATOR_HOST",$h={};let yM=!1;function _M(t,e,n,r){t.repoInfo_=new pb(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function wM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=T_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[vM]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=T_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ps(ps.OWNER):new LP(t.name,t.options,e);KO("Invalid Firebase Database URL",o),ie(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=bM(a,t,c,new DP(t.name,n));return new SM(d,t)}function EM(t,e){const n=$h[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aM(t),delete n[t.key]}function bM(t,e,n,r){let i=$h[e.name];i||(i={},$h[e.name]=i);let s=i[t.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eM(t,yM,n,r),i[t.toURLString()]=s,s}class SM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function CM(t=vE(),e){const n=ym(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=j2("database");r&&xM(n,...r)}return n}function xM(t,e,n,r={}){t=vt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ps(ps.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:F2(r.mockUserToken,t.app.options.projectId);s=new ps(o)}_M(i,e,n,s)}/**
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
 */function kM(t){wP(Ws),Ts(new wi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rr(Yy,Ky,t),Rr(Yy,Ky,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kM();const IM={apiKey:"AIzaSyAG8LJPNXNgDKnfopB-c1CVX-Uew4uRyqU",authDomain:"schedule-maker-8675b.firebaseapp.com",projectId:"schedule-maker-8675b",storageBucket:"schedule-maker-8675b.appspot.com",messagingSenderId:"198447247334",appId:"1:198447247334:web:f009e6e7b0b144923cf027",measurementId:"G-2NLFWYGS09"},cg=gE(IM),Jc=JE(cg);async function TM(t,e){return await rR(Jc,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}async function NM(t,e){return await iR(Jc,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}function dg(){return JE(cg)}async function fg(){return lR(Jc)}async function RM(t){return await nR(Jc,t).then(()=>null).catch(e=>e)}const Zc=CM(cg);async function PM(t){const e=t.uid;await ag(Xc(Zc,"/users"+e),{...t})}async function AM(t,e){const n=Xc(Zc,"/users"+t+"/schedules");await ag(n,e)}async function OM(t,e,n){const r=Xc(Zc,`/users${t}/schedules/${n}/name`);await ag(r,e)}function pS(t,e,n){const r=`/users${t}${n?"/"+n:""}`;gM(Xc(Zc,r),e)}async function MM(t){await sR(t)}function DM(){const[t,e]=S.useState(!1),[n,r]=S.useState(""),[i,s]=S.useState(null);async function o(a){a.preventDefault();const l=await RM(n);if(!l){e(!0);return}s(l.code.split("/")[1].split("-").join(" "))}return h.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[h.jsx("p",{className:"font-bold text-2xl",children:"I forgor"}),t?h.jsxs("div",{children:[h.jsx("p",{className:"text-center",children:"A reset password link has been sent to your email."}),h.jsx("p",{className:"text-center",children:"If you did not recieve and email, try again."})]}):h.jsxs(h.Fragment,{children:[h.jsxs("form",{className:"flex gap-4",onSubmit:a=>void o(a),children:[h.jsx("input",{placeholder:"email",className:"outline-none p-2 rounded shadow-c9 shadow-lg w-80",onChange:a=>r(a.target.value),type:"email"}),h.jsx("input",{type:"submit",className:"hidden"}),h.jsx("button",{className:"p-2 rounded bg-c9 transition text-c1 hover:text-c9 hover:bg-c1",children:"Send"})]}),i&&h.jsx("p",{className:"text-red-500",children:i})]}),h.jsx(Vn,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page."})]})}var LM={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},jM={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},FM={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},UM={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},mS=UM,zM={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},$M={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},WM={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},VM=WM,BM={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},HM=BM,GM={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},qM=GM;function N_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uc(t){"@babel/helpers - typeof";return uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uc(t)}function YM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function KM(t,e,n){return e&&R_(t.prototype,e),n&&R_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hg(t,e){return XM(t)||ZM(t,e)||gS(t,e)||t3()}function rl(t){return QM(t)||JM(t)||gS(t)||e3()}function QM(t){if(Array.isArray(t))return Wh(t)}function XM(t){if(Array.isArray(t))return t}function JM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ZM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function gS(t,e){if(t){if(typeof t=="string")return Wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wh(t,e)}}function Wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P_=function(){},pg={},vS={},yS=null,_S={mark:P_,measure:P_};try{typeof window<"u"&&(pg=window),typeof document<"u"&&(vS=document),typeof MutationObserver<"u"&&(yS=MutationObserver),typeof performance<"u"&&(_S=performance)}catch{}var n3=pg.navigator||{},A_=n3.userAgent,O_=A_===void 0?"":A_,jr=pg,ke=vS,M_=yS,Dl=_S;jr.document;var Zn=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",wS=~O_.indexOf("MSIE")||~O_.indexOf("Trident/"),Ll,jl,Fl,Ul,zl,qn="___FONT_AWESOME___",Vh=16,ES="fa",bS="svg-inline--fa",Ti="data-fa-i2svg",Bh="data-fa-pseudo-element",r3="data-fa-pseudo-element-pending",mg="data-prefix",gg="data-icon",D_="fontawesome-i2svg",i3="async",s3=["HTML","HEAD","STYLE","SCRIPT"],SS=function(){try{return!0}catch{return!1}}(),Ce="classic",Me="sharp",vg=[Ce,Me];function il(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ce]}})}var xa=il((Ll={},Ge(Ll,Ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(Ll,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ll)),ka=il((jl={},Ge(jl,Ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(jl,Me,{solid:"fass",regular:"fasr",light:"fasl"}),jl)),Ia=il((Fl={},Ge(Fl,Ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(Fl,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Fl)),o3=il((Ul={},Ge(Ul,Ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(Ul,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ul)),a3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,CS="fa-layers-text",l3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,u3=il((zl={},Ge(zl,Ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(zl,Me,{900:"fass",400:"fasr",300:"fasl"}),zl)),xS=[1,2,3,4,5,6,7,8,9,10],c3=xS.concat([11,12,13,14,15,16,17,18,19,20]),d3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ta=new Set;Object.keys(ka[Ce]).map(Ta.add.bind(Ta));Object.keys(ka[Me]).map(Ta.add.bind(Ta));var f3=[].concat(vg,rl(Ta),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oi.GROUP,oi.SWAP_OPACITY,oi.PRIMARY,oi.SECONDARY]).concat(xS.map(function(t){return"".concat(t,"x")})).concat(c3.map(function(t){return"w-".concat(t)})),Wo=jr.FontAwesomeConfig||{};function h3(t){var e=ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function p3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ke&&typeof ke.querySelector=="function"){var m3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];m3.forEach(function(t){var e=hg(t,2),n=e[0],r=e[1],i=p3(h3(n));i!=null&&(Wo[r]=i)})}var kS={styleDefault:"solid",familyDefault:"classic",cssPrefix:ES,replacementClass:bS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wo.familyPrefix&&(Wo.cssPrefix=Wo.familyPrefix);var Os=D(D({},kS),Wo);Os.autoReplaceSvg||(Os.observeMutations=!1);var z={};Object.keys(kS).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Os[t]=n,Vo.forEach(function(r){return r(z)})},get:function(){return Os[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Os.cssPrefix=e,Vo.forEach(function(n){return n(z)})},get:function(){return Os.cssPrefix}});jr.FontAwesomeConfig=z;var Vo=[];function g3(t){return Vo.push(t),function(){Vo.splice(Vo.indexOf(t),1)}}var sr=Vh,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v3(t){if(!(!t||!Zn)){var e=ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ke.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ke.head.insertBefore(e,r),t}}var y3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Na(){for(var t=12,e="";t-- >0;)e+=y3[Math.random()*62|0];return e}function qs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yg(t){return t.classList?qs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function IS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(IS(t[n]),'" ')},"").trim()}function ed(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _g(t){return t.size!==vn.size||t.x!==vn.x||t.y!==vn.y||t.rotate!==vn.rotate||t.flipX||t.flipY}function w3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function E3(t){var e=t.transform,n=t.width,r=n===void 0?Vh:n,i=t.height,s=i===void 0?Vh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&wS?l+="translate(".concat(e.x/sr-r/2,"em, ").concat(e.y/sr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/sr,"em), calc(-50% + ").concat(e.y/sr,"em)) "):l+="translate(".concat(e.x/sr,"em, ").concat(e.y/sr,"em) "),l+="scale(".concat(e.size/sr*(e.flipX?-1:1),", ").concat(e.size/sr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var b3=`:root, :host {
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
}`;function TS(){var t=ES,e=bS,n=z.cssPrefix,r=z.replacementClass,i=b3;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var L_=!1;function ff(){z.autoAddCss&&!L_&&(v3(TS()),L_=!0)}var S3={mixout:function(){return{dom:{css:TS,insertCss:ff}}},hooks:function(){return{beforeDOMElementCreation:function(){ff()},beforeI2svg:function(){ff()}}}},Yn=jr||{};Yn[qn]||(Yn[qn]={});Yn[qn].styles||(Yn[qn].styles={});Yn[qn].hooks||(Yn[qn].hooks={});Yn[qn].shims||(Yn[qn].shims=[]);var rn=Yn[qn],NS=[],C3=function t(){ke.removeEventListener("DOMContentLoaded",t),cc=1,NS.map(function(e){return e()})},cc=!1;Zn&&(cc=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),cc||ke.addEventListener("DOMContentLoaded",C3));function x3(t){Zn&&(cc?setTimeout(t,0):NS.push(t))}function sl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?IS(t):"<".concat(e," ").concat(_3(r),">").concat(s.map(sl).join(""),"</").concat(e,">")}function j_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var k3=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},hf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?k3(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function I3(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hh(t){var e=I3(t);return e.length===1?e[0].toString(16):null}function T3(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function F_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Gh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=F_(e);typeof rn.hooks.addPack=="function"&&!i?rn.hooks.addPack(t,F_(e)):rn.styles[t]=D(D({},rn.styles[t]||{}),s),t==="fas"&&Gh("fa",e)}var $l,Wl,Vl,ts=rn.styles,N3=rn.shims,R3=($l={},Ge($l,Ce,Object.values(Ia[Ce])),Ge($l,Me,Object.values(Ia[Me])),$l),wg=null,RS={},PS={},AS={},OS={},MS={},P3=(Wl={},Ge(Wl,Ce,Object.keys(xa[Ce])),Ge(Wl,Me,Object.keys(xa[Me])),Wl);function A3(t){return~f3.indexOf(t)}function O3(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!A3(i)?i:null}var DS=function(){var e=function(s){return hf(ts,function(o,a,l){return o[l]=hf(a,s,{}),o},{})};RS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),PS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),MS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ts||z.autoFetchSvg,r=hf(N3,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});AS=r.names,OS=r.unicodes,wg=td(z.styleDefault,{family:z.familyDefault})};g3(function(t){wg=td(t.styleDefault,{family:z.familyDefault})});DS();function Eg(t,e){return(RS[t]||{})[e]}function M3(t,e){return(PS[t]||{})[e]}function ai(t,e){return(MS[t]||{})[e]}function LS(t){return AS[t]||{prefix:null,iconName:null}}function D3(t){var e=OS[t],n=Eg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fr(){return wg}var bg=function(){return{prefix:null,iconName:null,rest:[]}};function td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ce:n,i=xa[r][t],s=ka[r][t]||ka[r][i],o=t in rn.styles?t:null;return s||o||null}var U_=(Vl={},Ge(Vl,Ce,Object.keys(Ia[Ce])),Ge(Vl,Me,Object.keys(Ia[Me])),Vl);function nd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ge(e,Ce,"".concat(z.cssPrefix,"-").concat(Ce)),Ge(e,Me,"".concat(z.cssPrefix,"-").concat(Me)),e),o=null,a=Ce;(t.includes(s[Ce])||t.some(function(u){return U_[Ce].includes(u)}))&&(a=Ce),(t.includes(s[Me])||t.some(function(u){return U_[Me].includes(u)}))&&(a=Me);var l=t.reduce(function(u,c){var d=O3(z.cssPrefix,c);if(ts[c]?(c=R3[a].includes(c)?o3[a][c]:c,o=c,u.prefix=c):P3[a].indexOf(c)>-1?(o=c,u.prefix=td(c,{family:a})):d?u.iconName=d:c!==z.replacementClass&&c!==s[Ce]&&c!==s[Me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?LS(u.iconName):{},y=ai(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||y||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ts.far&&ts.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},bg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(ts.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ai(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Fr()||"fas"),l}var L3=function(){function t(){YM(this,t),this.definitions={}}return KM(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Gh(a,o[a]);var l=Ia[Ce][a];l&&Gh(l,o[a]),DS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),z_=[],ns={},vs={},j3=Object.keys(vs);function F3(t,e){var n=e.mixoutsTo;return z_=t,ns={},Object.keys(vs).forEach(function(r){j3.indexOf(r)===-1&&delete vs[r]}),z_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),uc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ns[o]||(ns[o]=[]),ns[o].push(s[o])})}r.provides&&r.provides(vs)}),n}function qh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ns[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ni(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ns[t]||[];i.forEach(function(s){s.apply(null,n)})}function Kn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vs[t]?vs[t].apply(null,e):void 0}function Yh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Fr();if(e)return e=ai(n,e)||e,j_(jS.definitions,n,e)||j_(rn.styles,n,e)}var jS=new L3,U3=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ni("noAuto")},z3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(Ni("beforeI2svg",e),Kn("pseudoElements2svg",e),Kn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,x3(function(){W3({autoReplaceSvgRoot:n}),Ni("watch",e)})}},$3={icon:function(e){if(e===null)return null;if(uc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ai(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=td(e[0]);return{prefix:r,iconName:ai(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(a3))){var i=nd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Fr(),iconName:ai(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Fr();return{prefix:s,iconName:ai(s,e)||e}}}},Lt={noAuto:U3,config:z,dom:z3,parse:$3,library:jS,findIconDefinition:Yh,toHtml:sl},W3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ke:n;(Object.keys(rn.styles).length>0||z.autoFetchSvg)&&Zn&&z.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function rd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return sl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zn){var r=ke.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function V3(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(_g(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ed(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function B3(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function Sg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,y=f===void 0?!1:f,m=r.found?r:n,w=m.width,E=m.height,g=i==="fak",p=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),_={children:[],attributes:D(D({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},v=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};y&&(_.attributes[Ti]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Na())},children:[l]}),delete _.attributes.title);var b=D(D({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},v),d.styles)}),I=r.found&&n.found?Kn("generateAbstractMask",b)||{children:[],attributes:{}}:Kn("generateAbstractIcon",b)||{children:[],attributes:{}},k=I.children,A=I.attributes;return b.children=k,b.attributes=A,a?B3(b):V3(b)}function $_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ti]="");var c=D({},o.styles);_g(i)&&(c.transform=E3({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=ed(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function H3(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ed(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pf=rn.styles;function Kh(t){var e=t[0],n=t[1],r=t.slice(4),i=hg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(oi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(oi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(oi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var G3={found:!1,width:512,height:512};function q3(t,e){!SS&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qh(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Fr()),new Promise(function(r,i){if(Kn("missingIconAbstract"),n==="fa"){var s=LS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&pf[e]&&pf[e][t]){var o=pf[e][t];return r(Kh(o))}q3(t,e),r(D(D({},G3),{},{icon:z.showMissingIcons&&t?Kn("missingIconAbstract")||{}:{}}))})}var W_=function(){},Xh=z.measurePerformance&&Dl&&Dl.mark&&Dl.measure?Dl:{mark:W_,measure:W_},xo='FA "6.4.0"',Y3=function(e){return Xh.mark("".concat(xo," ").concat(e," begins")),function(){return FS(e)}},FS=function(e){Xh.mark("".concat(xo," ").concat(e," ends")),Xh.measure("".concat(xo," ").concat(e),"".concat(xo," ").concat(e," begins"),"".concat(xo," ").concat(e," ends"))},Cg={begin:Y3,end:FS},cu=function(){};function V_(t){var e=t.getAttribute?t.getAttribute(Ti):null;return typeof e=="string"}function K3(t){var e=t.getAttribute?t.getAttribute(mg):null,n=t.getAttribute?t.getAttribute(gg):null;return e&&n}function Q3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function X3(){if(z.autoReplaceSvg===!0)return du.replace;var t=du[z.autoReplaceSvg];return t||du.replace}function J3(t){return ke.createElementNS("http://www.w3.org/2000/svg",t)}function Z3(t){return ke.createElement(t)}function US(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?J3:Z3:n;if(typeof t=="string")return ke.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(US(o,{ceFn:r}))}),i}function e4(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var du={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(US(i),n)}),n.getAttribute(Ti)===null&&z.keepOriginalSource){var r=ke.createComment(e4(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~yg(n).indexOf(z.replacementClass))return du.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return sl(a)}).join(`
`);n.setAttribute(Ti,""),n.innerHTML=o}};function B_(t){t()}function zS(t,e){var n=typeof e=="function"?e:cu;if(t.length===0)n();else{var r=B_;z.mutateApproach===i3&&(r=jr.requestAnimationFrame||B_),r(function(){var i=X3(),s=Cg.begin("mutate");t.map(i),s(),n()})}}var xg=!1;function $S(){xg=!0}function Jh(){xg=!1}var dc=null;function H_(t){if(M_&&z.observeMutations){var e=t.treeCallback,n=e===void 0?cu:e,r=t.nodeCallback,i=r===void 0?cu:r,s=t.pseudoElementsCallback,o=s===void 0?cu:s,a=t.observeMutationsRoot,l=a===void 0?ke:a;dc=new M_(function(u){if(!xg){var c=Fr();qs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!V_(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&V_(d.target)&&~d3.indexOf(d.attributeName))if(d.attributeName==="class"&&K3(d.target)){var f=nd(yg(d.target)),y=f.prefix,m=f.iconName;d.target.setAttribute(mg,y||c),m&&d.target.setAttribute(gg,m)}else Q3(d.target)&&i(d.target)})}}),Zn&&dc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t4(){dc&&dc.disconnect()}function n4(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function r4(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=nd(yg(t));return i.prefix||(i.prefix=Fr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=M3(i.prefix,t.innerText)||Eg(i.prefix,Hh(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function i4(t){var e=qs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Na()):(e["aria-hidden"]="true",e.focusable="false")),e}function s4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function G_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=r4(t),r=n.iconName,i=n.prefix,s=n.rest,o=i4(t),a=qh("parseNodeAttributes",{},t),l=e.styleParser?n4(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var o4=rn.styles;function WS(t){var e=z.autoReplaceSvg==="nest"?G_(t,{styleParser:!1}):G_(t);return~e.extra.classes.indexOf(CS)?Kn("generateLayersText",t,e):Kn("generateSvgReplacementMutation",t,e)}var Ur=new Set;vg.map(function(t){Ur.add("fa-".concat(t))});Object.keys(xa[Ce]).map(Ur.add.bind(Ur));Object.keys(xa[Me]).map(Ur.add.bind(Ur));Ur=rl(Ur);function q_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();var n=ke.documentElement.classList,r=function(d){return n.add("".concat(D_,"-").concat(d))},i=function(d){return n.remove("".concat(D_,"-").concat(d))},s=z.autoFetchSvg?Ur:vg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(o4));s.includes("fa")||s.push("fa");var o=[".".concat(CS,":not([").concat(Ti,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Ti,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=qs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Cg.begin("onTree"),u=a.reduce(function(c,d){try{var f=WS(d);f&&c.push(f)}catch(y){SS||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){zS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function a4(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;WS(t).then(function(n){n&&zS([n],e)})}function l4(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Yh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Yh(i||{})),t(r,D(D({},n),{},{mask:i}))}}var u4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,y=n.titleId,m=y===void 0?null:y,w=n.classes,E=w===void 0?[]:w,g=n.attributes,p=g===void 0?{}:g,_=n.styles,v=_===void 0?{}:_;if(e){var b=e.prefix,I=e.iconName,k=e.icon;return rd(D({type:"icon"},e),function(){return Ni("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?p["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(m||Na()):(p["aria-hidden"]="true",p.focusable="false")),Sg({icons:{main:Kh(k),mask:l?Kh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:I,transform:D(D({},vn),i),symbol:o,title:f,maskId:c,titleId:m,extra:{attributes:p,styles:v,classes:E}})})}},c4={mixout:function(){return{icon:l4(u4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=q_,n.nodeCallback=a4,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ke:r,s=n.callback,o=s===void 0?function(){}:s;return q_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(y,m){Promise.all([Qh(i,a),c.iconName?Qh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=hg(w,2),g=E[0],p=E[1];y([n,Sg({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ed(a);l.length>0&&(i.style=l);var u;return _g(o)&&(u=Kn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},d4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return rd({type:"layer"},function(){Ni("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(rl(s)).join(" ")},children:o}]})}}}},f4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return rd({type:"counter",content:n},function(){return Ni("beforeDOMElementCreation",{content:n,params:r}),H3({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(rl(a))}})})}}}},h4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?vn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,y=f===void 0?{}:f;return rd({type:"text",content:n},function(){return Ni("beforeDOMElementCreation",{content:n,params:r}),$_({content:n,transform:D(D({},vn),s),title:a,extra:{attributes:d,styles:y,classes:["".concat(z.cssPrefix,"-layers-text")].concat(rl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(wS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},p4=new RegExp('"',"ug"),Y_=[1105920,1112319];function m4(t){var e=t.replace(p4,""),n=T3(e,0),r=n>=Y_[0]&&n<=Y_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hh(i?e[0]:e),isSecondary:r||i}}function K_(t,e){var n="".concat(r3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=qs(t.children),o=s.filter(function(k){return k.getAttribute(Bh)===e})[0],a=jr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(l3),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Me:Ce,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ka[f][l[2].toLowerCase()]:u3[f][u],m=m4(d),w=m.value,E=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=Eg(y,w),_=p;if(g){var v=D3(w);v.iconName&&v.prefix&&(p=v.iconName,y=v.prefix)}if(p&&!E&&(!o||o.getAttribute(mg)!==y||o.getAttribute(gg)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var b=s4(),I=b.extra;I.attributes[Bh]=e,Qh(p,y).then(function(k){var A=Sg(D(D({},b),{},{icons:{main:k,mask:bg()},prefix:y,iconName:_,extra:I,watchable:!0})),M=ke.createElement("svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=A.map(function(L){return sl(L)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function g4(t){return Promise.all([K_(t,"::before"),K_(t,"::after")])}function v4(t){return t.parentNode!==document.head&&!~s3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Q_(t){if(Zn)return new Promise(function(e,n){var r=qs(t.querySelectorAll("*")).filter(v4).map(g4),i=Cg.begin("searchPseudoElements");$S(),Promise.all(r).then(function(){i(),Jh(),e()}).catch(function(){i(),Jh(),n()})})}var y4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Q_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ke:r;z.searchPseudoElements&&Q_(i)}}},X_=!1,_4={mixout:function(){return{dom:{unwatch:function(){$S(),X_=!0}}}},hooks:function(){return{bootstrap:function(){H_(qh("mutationObserverCallbacks",{}))},noAuto:function(){t4()},watch:function(n){var r=n.observeMutationsRoot;X_?Jh():H_(qh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},J_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},w4={mixout:function(){return{parse:{transform:function(n){return J_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=J_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:d,path:f};return{tag:"g",attributes:D({},y.outer),children:[{tag:"g",attributes:D({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),y.path)}]}]}}}},mf={x:0,y:0,width:"100%",height:"100%"};function Z_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function E4(t){return t.tag==="g"?t.children:[t]}var b4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?nd(i.split(" ").map(function(o){return o.trim()})):bg();return s.prefix||(s.prefix=Fr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,y=w3({transform:l,containerWidth:d,iconWidth:u}),m={tag:"rect",attributes:D(D({},mf),{},{fill:"white"})},w=c.children?{children:c.children.map(Z_)}:{},E={tag:"g",attributes:D({},y.inner),children:[Z_(D({tag:c.tag,attributes:D(D({},c.attributes),y.path)},w))]},g={tag:"g",attributes:D({},y.outer),children:[E]},p="mask-".concat(a||Na()),_="clip-".concat(a||Na()),v={tag:"mask",attributes:D(D({},mf),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:E4(f)},v]};return r.push(b,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(p,")")},mf)}),{children:r,attributes:i}}}},S4={provides:function(e){var n=!1;jr.matchMedia&&(n=jr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},C4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},x4=[S3,c4,d4,f4,h4,y4,_4,w4,b4,S4,C4];F3(x4,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Zh=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var k4=Lt.icon;Lt.layer;Lt.text;Lt.counter;var VS={exports:{}},I4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T4=I4,N4=T4;function BS(){}function HS(){}HS.resetWarningCache=BS;var R4=function(){function t(r,i,s,o,a,l){if(l!==N4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:HS,resetWarningCache:BS};return n.PropTypes=n,n};VS.exports=R4();var P4=VS.exports;const ne=T0(P4);function e0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e0(Object(n),!0).forEach(function(r){rs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fc(t){"@babel/helpers - typeof";return fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fc(t)}function rs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function O4(t,e){if(t==null)return{};var n=A4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ep(t){return M4(t)||D4(t)||L4(t)||j4()}function M4(t){if(Array.isArray(t))return tp(t)}function D4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L4(t,e){if(t){if(typeof t=="string")return tp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tp(t,e)}}function tp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,y=t.inverse,m=t.border,w=t.listItem,E=t.flip,g=t.size,p=t.rotation,_=t.pull,v=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":y,"fa-border":m,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},rs(e,"fa-".concat(g),typeof g<"u"&&g!==null),rs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),rs(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),rs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(v).map(function(b){return v[b]?b:null}).filter(function(b){return b})}function U4(t){return t=t-0,t===t}function GS(t){return U4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var z4=["style"];function $4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function W4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=GS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[$4(i)]=s:e[i]=s,e},{})}function qS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return qS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=W4(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[GS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=O4(n,z4);return i.attrs.style=vr(vr({},i.attrs.style),o),t.apply(void 0,[e.tag,vr(vr({},i.attrs),a)].concat(ep(r)))}var YS=!1;try{YS=!0}catch{}function V4(){if(!YS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function t0(t){if(t&&fc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zh.icon)return Zh.icon(t);if(t===null)return null;if(t&&fc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function gf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rs({},t,e):{}}var jt=_c.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=t0(n),c=gf("classes",[].concat(ep(F4(t)),ep(s.split(" ")))),d=gf("transform",typeof t.transform=="string"?Zh.transform(t.transform):t.transform),f=gf("mask",t0(r)),y=k4(u,vr(vr(vr(vr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!y)return V4("Could not find icon",u),null;var m=y.abstract,w={ref:e};return Object.keys(t).forEach(function(E){jt.defaultProps.hasOwnProperty(E)||(w[E]=t[E])}),B4(m[0],w)});jt.displayName="FontAwesomeIcon";jt.propTypes={beat:ne.bool,border:ne.bool,beatFade:ne.bool,bounce:ne.bool,className:ne.string,fade:ne.bool,flash:ne.bool,mask:ne.oneOfType([ne.object,ne.array,ne.string]),maskId:ne.string,fixedWidth:ne.bool,inverse:ne.bool,flip:ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ne.oneOfType([ne.object,ne.array,ne.string]),listItem:ne.bool,pull:ne.oneOf(["right","left"]),pulse:ne.bool,rotation:ne.oneOf([0,90,180,270]),shake:ne.bool,size:ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ne.bool,spinPulse:ne.bool,spinReverse:ne.bool,symbol:ne.oneOfType([ne.bool,ne.string]),title:ne.string,titleId:ne.string,transform:ne.oneOfType([ne.string,ne.object]),swapOpacity:ne.bool};jt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var B4=qS.bind(null,_c.createElement);function H4({notVerified:t}){const[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState(!1),[a,l]=S.useState(!1);async function u(c){c.preventDefault(),(await NM(e,r)).status==="success"?l(!1):l(!0)}return h.jsxs("form",{className:"basis-full w-full box-border p-4 shrink-0 md:text-base text-sm",onSubmit:c=>void u(c),children:[h.jsx("p",{className:"w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg",children:"Sign in to your account"}),h.jsxs("label",{children:["Email",h.jsx("input",{name:"email",placeholder:"Email",className:`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border ${a?"border-red-500 border border-solid":""}`,type:"email",onChange:c=>n(c.target.value),required:!0,value:e})]}),h.jsxs("label",{className:"relative",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:"Password"}),h.jsx(Vn,{to:"/forgot",children:h.jsx("span",{className:"hover:text-c4 text-c7 transition",children:"Forgot?"})})]}),h.jsxs("div",{className:"relative mt-2 flex items-center",children:[h.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${a?"border-red-500 border border-solid":""}`,type:`${s?"text":"password"}`,onChange:c=>i(c.target.value),required:!0,value:r}),h.jsx(jt,{icon:s?jM:zM,className:"absolute right-2 cursor-pointer",onClick:()=>o(!s)})]})]}),h.jsxs("div",{className:"mt-2 text-sm text-red-500",children:[a?"Email or password incorrect":null,!a&&t?h.jsx("p",{children:"You have not verified your email. "}):null]}),h.jsx("label",{children:h.jsx("button",{className:"mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition",type:"submit",children:"Sign In"})}),h.jsx(Vn,{to:"/schedule",children:h.jsx("p",{className:"mt-6 hover:text-c4 text-c7 transition",children:"Make a schedule without logging in"})})]})}function G4(){const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(!1),l=Ga();async function u(c){if(c.preventDefault(),n!==i){a(!0);return}const d=await TM(t,n);d.status==="success"?(a(!1),await PM({email:t,uid:d.info.user.uid,schedules:[{id:0,vData:[],data:[]}]}),l("/email-verification-confirmation")):a(d.info.code.split("/")[1].split("-").join(" "))}return h.jsxs("form",{className:"basis-full w-full box-border p-4 shrink-0 text-sm md:text-base",onSubmit:c=>void u(c),children:[h.jsx("p",{className:"w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg",children:"Sign up your account"}),h.jsxs("label",{children:["Email",h.jsx("input",{name:"email",placeholder:"Email",className:"w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md",type:"email",onChange:c=>e(c.target.value),required:!0,value:t})]}),h.jsxs("label",{className:"relative",children:[h.jsx("div",{className:"flex justify-between",children:h.jsx("span",{children:"Password"})}),h.jsx("div",{className:"relative mt-2 flex items-center",children:h.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md mb-6 box-border ${o?"border-red-500 border border-solid":""}`,type:"text",onChange:c=>r(c.target.value),required:!0,value:n})})]}),h.jsxs("label",{className:"relative",children:[h.jsx("div",{className:"flex justify-between",children:h.jsx("span",{children:"Confirm Password"})}),h.jsx("div",{className:"relative mt-2 flex items-center",children:h.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${o?"border-red-500 border border-solid":""}`,type:"text",onChange:c=>s(c.target.value),required:!0,value:i})})]}),h.jsxs("p",{className:"mt-2 text-sm text-red-500",children:[o===!0?"The passwords don't match":null,o&&o!==!0?o:null]}),h.jsx("label",{children:h.jsx("button",{className:"mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition",type:"submit",children:"Sign Up"})}),h.jsx(Vn,{to:"/schedule",children:h.jsx("p",{className:"mt-6 hover:text-c4 text-c7 transition",children:"Make a schedule without signing up"})})]})}var q4=Object.defineProperty,Y4=(t,e)=>{for(var n in e)q4(t,n,{get:e[n],enumerable:!0})},fn={};Y4(fn,{assign:()=>X4,colors:()=>Ar,createStringInterpolator:()=>Ag,skipAnimation:()=>tC,to:()=>eC,willAdvance:()=>Og});var kg=al(),J=t=>ol(t,kg),Ig=al();J.write=t=>ol(t,Ig);var id=al();J.onStart=t=>ol(t,id);var Tg=al();J.onFrame=t=>ol(t,Tg);var Ng=al();J.onFinish=t=>ol(t,Ng);var ys=[];J.setTimeout=(t,e)=>{const n=J.now()+e,r=()=>{const s=ys.findIndex(o=>o.cancel==r);~s&&ys.splice(s,1),_r-=~s?1:0},i={time:n,handler:t,cancel:r};return ys.splice(KS(n),0,i),_r+=1,QS(),i};var KS=t=>~(~ys.findIndex(e=>e.time>t)||~ys.length);J.cancel=t=>{id.delete(t),Tg.delete(t),Ng.delete(t),kg.delete(t),Ig.delete(t)};J.sync=t=>{np=!0,J.batchedUpdates(t),np=!1};J.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,J.onStart(n)}return r.handler=t,r.cancel=()=>{id.delete(n),e=null},r};var Rg=typeof window<"u"?window.requestAnimationFrame:()=>{};J.use=t=>Rg=t;J.now=typeof performance<"u"?()=>performance.now():Date.now;J.batchedUpdates=t=>t();J.catch=console.error;J.frameLoop="always";J.advance=()=>{J.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):JS()};var yr=-1,_r=0,np=!1;function ol(t,e){np?(e.delete(t),t(0)):(e.add(t),QS())}function QS(){yr<0&&(yr=0,J.frameLoop!=="demand"&&Rg(XS))}function K4(){yr=-1}function XS(){~yr&&(Rg(XS),J.batchedUpdates(JS))}function JS(){const t=yr;yr=J.now();const e=KS(yr);if(e&&(ZS(ys.splice(0,e),n=>n.handler()),_r-=e),!_r){K4();return}id.flush(),kg.flush(t?Math.min(64,yr-t):16.667),Tg.flush(),Ig.flush(),Ng.flush()}function al(){let t=new Set,e=t;return{add(n){_r+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return _r-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,_r-=e.size,ZS(e,r=>r(n)&&t.add(r)),_r+=t.size,e=t)}}}function ZS(t,e){t.forEach(n=>{try{e(n)}catch(r){J.catch(r)}})}function rp(){}var Q4=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),N={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Nn(t,e){if(N.arr(t)){if(!N.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var K=(t,e)=>t.forEach(e);function Sn(t,e,n){if(N.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var ht=t=>N.und(t)?[]:N.arr(t)?t:[t];function Bo(t,e){if(t.size){const n=Array.from(t);t.clear(),K(n,e)}}var ko=(t,...e)=>Bo(t,n=>n(...e)),Pg=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ag,eC,Ar=null,tC=!1,Og=rp,X4=t=>{t.to&&(eC=t.to),t.now&&(J.now=t.now),t.colors!==void 0&&(Ar=t.colors),t.skipAnimation!=null&&(tC=t.skipAnimation),t.createStringInterpolator&&(Ag=t.createStringInterpolator),t.requestAnimationFrame&&J.use(t.requestAnimationFrame),t.batchedUpdates&&(J.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Og=t.willAdvance),t.frameLoop&&(J.frameLoop=t.frameLoop)},Ho=new Set,Wt=[],vf=[],hc=0,sd={get idle(){return!Ho.size&&!Wt.length},start(t){hc>t.priority?(Ho.add(t),J.onStart(J4)):(nC(t),J(ip))},advance:ip,sort(t){if(hc)J.onFrame(()=>sd.sort(t));else{const e=Wt.indexOf(t);~e&&(Wt.splice(e,1),rC(t))}},clear(){Wt=[],Ho.clear()}};function J4(){Ho.forEach(nC),Ho.clear(),J(ip)}function nC(t){Wt.includes(t)||rC(t)}function rC(t){Wt.splice(Z4(Wt,e=>e.priority>t.priority),0,t)}function ip(t){const e=vf;for(let n=0;n<Wt.length;n++){const r=Wt[n];hc=r.priority,r.idle||(Og(r),r.advance(t),r.idle||e.push(r))}return hc=0,vf=Wt,vf.length=0,Wt=e,Wt.length>0}function Z4(t,e){const n=t.findIndex(e);return n<0?t.length:n}var eD=(t,e,n)=>Math.min(Math.max(n,t),e),tD={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},sn="[-+]?\\d*\\.?\\d+",pc=sn+"%";function od(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var nD=new RegExp("rgb"+od(sn,sn,sn)),rD=new RegExp("rgba"+od(sn,sn,sn,sn)),iD=new RegExp("hsl"+od(sn,pc,pc)),sD=new RegExp("hsla"+od(sn,pc,pc,sn)),oD=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,aD=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,lD=/^#([0-9a-fA-F]{6})$/,uD=/^#([0-9a-fA-F]{8})$/;function cD(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=lD.exec(t))?parseInt(e[1]+"ff",16)>>>0:Ar&&Ar[t]!==void 0?Ar[t]:(e=nD.exec(t))?(Li(e[1])<<24|Li(e[2])<<16|Li(e[3])<<8|255)>>>0:(e=rD.exec(t))?(Li(e[1])<<24|Li(e[2])<<16|Li(e[3])<<8|i0(e[4]))>>>0:(e=oD.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=uD.exec(t))?parseInt(e[1],16)>>>0:(e=aD.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=iD.exec(t))?(n0(r0(e[1]),Bl(e[2]),Bl(e[3]))|255)>>>0:(e=sD.exec(t))?(n0(r0(e[1]),Bl(e[2]),Bl(e[3]))|i0(e[4]))>>>0:null}function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function n0(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=yf(i,r,t+1/3),o=yf(i,r,t),a=yf(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Li(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function r0(t){return(parseFloat(t)%360+360)%360/360}function i0(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Bl(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function s0(t){let e=cD(t);if(e===null)return t;e=e||0;const n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var Ra=(t,e,n)=>{if(N.fun(t))return t;if(N.arr(t))return Ra({range:t,output:e,extrapolate:n});if(N.str(t.output[0]))return Ag(t);const r=t,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=fD(u,s);return dD(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function dD(t,e,n,r,i,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function fD(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var hD=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return eD(0,1,i/t)},mc=1.70158,Hl=mc*1.525,o0=mc+1,a0=2*Math.PI/3,l0=2*Math.PI/4.5,Gl=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,pD={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>o0*t*t*t-mc*t*t,easeOutBack:t=>1+o0*Math.pow(t-1,3)+mc*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Hl+1)*2*t-Hl)/2:(Math.pow(2*t-2,2)*((Hl+1)*(t*2-2)+Hl)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*a0),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*a0)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*l0))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*l0)/2+1,easeInBounce:t=>1-Gl(1-t),easeOutBounce:Gl,easeInOutBounce:t=>t<.5?(1-Gl(1-2*t))/2:(1+Gl(2*t-1))/2,steps:hD},Pa=Symbol.for("FluidValue.get"),Ms=Symbol.for("FluidValue.observers"),$t=t=>!!(t&&t[Pa]),yt=t=>t&&t[Pa]?t[Pa]():t,u0=t=>t[Ms]||null;function mD(t,e){t.eventObserved?t.eventObserved(e):t(e)}function Aa(t,e){const n=t[Ms];n&&n.forEach(r=>{mD(r,e)})}var iC=class{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");gD(this,t)}},gD=(t,e)=>sC(t,Pa,e);function Ys(t,e){if(t[Pa]){let n=t[Ms];n||sC(t,Ms,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Oa(t,e){const n=t[Ms];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[Ms]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var sC=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),fu=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,vD=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,c0=new RegExp(`(${fu.source})(%|[a-z]+)`,"i"),yD=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ad=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,oC=t=>{const[e,n]=_D(t);if(!e||Pg())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||t}else{if(n&&ad.test(n))return oC(n);if(n)return n}return t},_D=t=>{const e=ad.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]},_f,wD=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,aC=t=>{_f||(_f=Ar?new RegExp(`(${Object.keys(Ar).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>yt(s).replace(ad,oC).replace(vD,s0).replace(_f,s0)),n=e.map(s=>s.match(fu).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>Ra({...t,output:s}));return s=>{var l;const o=!c0.test(e[0])&&((l=e.find(u=>c0.test(u)))==null?void 0:l.replace(fu,""));let a=0;return e[0].replace(fu,()=>`${i[a++](s)}${o||""}`).replace(yD,wD)}},Mg="react-spring: ",lC=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${Mg}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},ED=lC(console.warn);function bD(){ED(`${Mg}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var SD=lC(console.warn);function CD(){SD(`${Mg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function ld(t){return N.str(t)&&(t[0]=="#"||/\d/.test(t)||!Pg()&&ad.test(t)||t in(Ar||{}))}var li=Pg()?S.useEffect:S.useLayoutEffect,xD=()=>{const t=S.useRef(!1);return li(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function Dg(){const t=S.useState()[1],e=xD();return()=>{e.current&&t(Math.random())}}function kD(t,e){const[n]=S.useState(()=>({inputs:e,result:t()})),r=S.useRef(),i=r.current;let s=i;return s?e&&s.inputs&&ID(e,s.inputs)||(s={inputs:e,result:t()}):s=n,S.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function ID(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var Lg=t=>S.useEffect(t,TD),TD=[];function sp(t){const e=S.useRef();return S.useEffect(()=>{e.current=t}),e.current}var Ma=Symbol.for("Animated:node"),ND=t=>!!t&&t[Ma]===t,mn=t=>t&&t[Ma],jg=(t,e)=>Q4(t,Ma,e),ud=t=>t&&t[Ma]&&t[Ma].getPayload(),uC=class{constructor(){jg(this,this)}getPayload(){return this.payload||[]}},ll=class extends uC{constructor(t){super(),this._value=t,this.done=!0,this.durationProgress=0,N.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new ll(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return N.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,N.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},Da=class extends ll{constructor(t){super(0),this._string=null,this._toString=Ra({output:[t,t]})}static create(t){return new Da(t)}getValue(){const t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(N.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=Ra({output:[this.getValue(),t]})),this._value=0,super.reset()}},gc={dependencies:null},cd=class extends uC{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return Sn(this.source,(n,r)=>{ND(n)?e[r]=n.getValue(t):$t(n)?e[r]=yt(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&K(this.payload,t=>t.reset())}_makePayload(t){if(t){const e=new Set;return Sn(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){gc.dependencies&&$t(t)&&gc.dependencies.add(t);const e=ud(t);e&&K(e,n=>this.add(n))}},cC=class extends cd{constructor(t){super(t)}static create(t){return new cC(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const e=this.getPayload();return t.length==e.length?e.map((n,r)=>n.setValue(t[r])).some(Boolean):(super.setValue(t.map(RD)),!0)}};function RD(t){return(ld(t)?Da:ll).create(t)}function op(t){const e=mn(t);return e?e.constructor:N.arr(t)?cC:ld(t)?Da:ll}var d0=(t,e)=>{const n=!N.fun(t)||t.prototype&&t.prototype.isReactComponent;return S.forwardRef((r,i)=>{const s=S.useRef(null),o=n&&S.useCallback(m=>{s.current=OD(i,m)},[i]),[a,l]=AD(r,e),u=Dg(),c=()=>{const m=s.current;if(n&&!m)return;(m?e.applyAnimatedValues(m,a.getValue(!0)):!1)===!1&&u()},d=new PD(c,l),f=S.useRef();li(()=>(f.current=d,K(l,m=>Ys(m,d)),()=>{f.current&&(K(f.current.deps,m=>Oa(m,f.current)),J.cancel(f.current.update))})),S.useEffect(c,[]),Lg(()=>()=>{const m=f.current;K(m.deps,w=>Oa(w,m))});const y=e.getComponentProps(a.getValue());return S.createElement(t,{...y,ref:o})})},PD=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&J.write(this.update)}};function AD(t,e){const n=new Set;return gc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new cd(t),gc.dependencies=null,[t,n]}function OD(t,e){return t&&(N.fun(t)?t(e):t.current=e),e}var f0=Symbol.for("AnimatedComponent"),MD=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new cd(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=h0(o)||"Anonymous";return N.str(o)?o=s[o]||(s[o]=d0(o,i)):o=o[f0]||(o[f0]=d0(o,i)),o.displayName=`Animated(${a})`,o};return Sn(t,(o,a)=>{N.arr(t)&&(a=h0(o)),s[a]=s(o)}),{animated:s}},h0=t=>N.str(t)?t:t&&N.str(t.displayName)?t.displayName:N.fun(t)&&t.name||null;function _t(t,...e){return N.fun(t)?t(...e):t}var Go=(t,e)=>t===!0||!!(e&&t&&(N.fun(t)?t(e):ht(t).includes(e))),dC=(t,e)=>N.obj(t)?e&&t[e]:t,fC=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,DD=t=>t,dd=(t,e=DD)=>{let n=LD;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const s=e(t[i],i);N.und(s)||(r[i]=s)}return r},LD=["config","onProps","onStart","onChange","onPause","onResume","onRest"],jD={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function FD(t){const e={};let n=0;if(Sn(t,(r,i)=>{jD[i]||(e[i]=r,n++)}),n)return e}function Fg(t){const e=FD(t);if(e){const n={to:e};return Sn(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function La(t){return t=yt(t),N.arr(t)?t.map(La):ld(t)?fn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function hC(t){for(const e in t)return!0;return!1}function ap(t){return N.fun(t)||N.arr(t)&&N.obj(t[0])}function lp(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function pC(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var UD={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},up={...UD.default,mass:1,damping:1,easing:pD.linear,clamp:!1},zD=class{constructor(){this.velocity=0,Object.assign(this,up)}};function $D(t,e,n){n&&(n={...n},p0(n,e),e={...n,...e}),p0(t,e),Object.assign(t,e);for(const o in up)t[o]==null&&(t[o]=up[o]);let{frequency:r,damping:i}=t;const{mass:s}=t;return N.und(r)||(r<.01&&(r=.01),i<0&&(i=0),t.tension=Math.pow(2*Math.PI/r,2)*s,t.friction=4*Math.PI*i*s/r),t}function p0(t,e){if(!N.und(e.decay))t.duration=void 0;else{const n=!N.und(e.tension)||!N.und(e.friction);(n||!N.und(e.frequency)||!N.und(e.damping)||!N.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var m0=[],WD=class{constructor(){this.changed=!1,this.values=m0,this.toValues=null,this.fromValues=m0,this.config=new zD,this.immediate=!1}};function mC(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{let l,u,c=Go(n.cancel??(r==null?void 0:r.cancel),e);if(c)y();else{N.und(n.pause)||(i.paused=Go(n.pause,e));let m=r==null?void 0:r.pause;m!==!0&&(m=i.paused||Go(m,e)),l=_t(n.delay||0,e),m?(i.resumeQueue.add(f),s.pause()):(s.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),l=u.time-J.now()}function f(){l>0&&!fn.skipAnimation?(i.delayed=!0,u=J.setTimeout(y,l),i.pauseQueue.add(d),i.timeouts.add(u)):y()}function y(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),t<=(i.cancelId||0)&&(c=!0);try{s.start({...n,callId:t,cancel:c},o)}catch(m){a(m)}}})}var Ug=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?_s(t.get()):e.every(n=>n.noop)?gC(t.get()):Zt(t.get(),e.every(n=>n.finished)),gC=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Zt=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),_s=t=>({value:t,cancelled:!0,finished:!1});function vC(t,e,n,r){const{callId:i,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const u=dd(e,(E,g)=>g==="onRest"?void 0:E);let c,d;const f=new Promise((E,g)=>(c=E,d=g)),y=E=>{const g=i<=(n.cancelId||0)&&_s(r)||i!==n.asyncId&&Zt(r,!1);if(g)throw E.result=g,d(E),E},m=(E,g)=>{const p=new g0,_=new v0;return(async()=>{if(fn.skipAnimation)throw ja(n),_.result=Zt(r,!1),d(_),_;y(p);const v=N.obj(E)?{...E}:{...g,to:E};v.parentId=i,Sn(u,(I,k)=>{N.und(v[k])&&(v[k]=I)});const b=await r.start(v);return y(p),n.paused&&await new Promise(I=>{n.resumeQueue.add(I)}),b})()};let w;if(fn.skipAnimation)return ja(n),Zt(r,!1);try{let E;N.arr(t)?E=(async g=>{for(const p of g)await m(p)})(t):E=Promise.resolve(t(m,r.stop.bind(r))),await Promise.all([E.then(c),f]),w=Zt(r.get(),!0,!1)}catch(E){if(E instanceof g0)w=E.result;else if(E instanceof v0)w=E.result;else throw E}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return N.fun(o)&&J.batchedUpdates(()=>{o(w,r,r.item)}),w})()}function ja(t,e){Bo(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var g0=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},v0=class extends Error{constructor(){super("SkipAnimationSignal")}},cp=t=>t instanceof zg,VD=1,zg=class extends iC{constructor(){super(...arguments),this.id=VD++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=mn(this);return t&&t.getValue()}to(...t){return fn.to(this,t)}interpolate(...t){return bD(),fn.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){Aa(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||sd.sort(this),Aa(this,{type:"priority",parent:this,priority:t})}},Ri=Symbol.for("SpringPhase"),yC=1,dp=2,fp=4,wf=t=>(t[Ri]&yC)>0,or=t=>(t[Ri]&dp)>0,go=t=>(t[Ri]&fp)>0,y0=(t,e)=>e?t[Ri]|=dp|yC:t[Ri]&=~dp,_0=(t,e)=>e?t[Ri]|=fp:t[Ri]&=~fp,BD=class extends zg{constructor(t,e){if(super(),this.animation=new WD,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!N.und(t)||!N.und(e)){const n=N.obj(t)?{...t}:{...e,from:t};N.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(or(this)||this._state.asyncTo)||go(this)}get goal(){return yt(this.animation.to)}get velocity(){const t=mn(this);return t instanceof ll?t.lastVelocity||0:t.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return wf(this)}get isAnimating(){return or(this)}get isPaused(){return go(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:s}=r,o=ud(r.to);!o&&$t(r.to)&&(i=ht(yt(r.to))),r.values.forEach((u,c)=>{if(u.done)return;const d=u.constructor==Da?1:o?o[c].lastPosition:i[c];let f=r.immediate,y=d;if(!f){if(y=u.lastPosition,s.tension<=0){u.done=!0;return}let m=u.elapsedTime+=t;const w=r.fromValues[c],E=u.v0!=null?u.v0:u.v0=N.arr(s.velocity)?s.velocity[c]:s.velocity;let g;const p=s.precision||(w==d?.005:Math.min(1,Math.abs(d-w)*.001));if(N.und(s.duration))if(s.decay){const _=s.decay===!0?.998:s.decay,v=Math.exp(-(1-_)*m);y=w+E/(1-_)*(1-v),f=Math.abs(u.lastPosition-y)<=p,g=E*v}else{g=u.lastVelocity==null?E:u.lastVelocity;const _=s.restVelocity||p/10,v=s.clamp?0:s.bounce,b=!N.und(v),I=w==d?u.v0>0:w<d;let k,A=!1;const M=1,L=Math.ceil(t/M);for(let oe=0;oe<L&&(k=Math.abs(g)>_,!(!k&&(f=Math.abs(d-y)<=p,f)));++oe){b&&(A=y==d||y>d==I,A&&(g=-g*v,y=d));const Z=-s.tension*1e-6*(y-d),Ie=-s.friction*.001*g,W=(Z+Ie)/s.mass;g=g+W*M,y=y+g*M}}else{let _=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,m=u.elapsedTime+=t)),_=(s.progress||0)+m/this._memoizedDuration,_=_>1?1:_<0?0:_,u.durationProgress=_),y=w+s.easing(_)*(d-w),g=(y-u.lastPosition)/t,f=_==1}u.lastVelocity=g,Number.isNaN(y)&&(console.warn("Got NaN while animating:",this),f=!0)}o&&!o[c].done&&(f=!1),f?u.done=!0:e=!1,u.setValue(y,s.round)&&(n=!0)});const a=mn(this),l=a.getValue();if(e){const u=yt(r.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(t){return J.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(or(this)){const{to:t,config:e}=this.animation;J.batchedUpdates(()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return N.und(t)?(n=this.queue||[],this.queue=[]):n=[N.obj(t)?t:{...e,to:t}],Promise.all(n.map(r=>this._update(r))).then(r=>Ug(this,r))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),ja(this._state,t&&this._lastCallId),J.batchedUpdates(()=>this._stop(e,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:r}=t;n=N.obj(n)?n[e]:n,(n==null||ap(n))&&(n=void 0),r=N.obj(r)?r[e]:r,r==null&&(r=void 0);const i={to:n,from:r};return wf(this)||(t.reverse&&([n,r]=[r,n]),r=yt(r),N.und(r)?mn(this)||this._set(n):this._set(r)),i}_update({...t},e){const{key:n,defaultProps:r}=this;t.default&&Object.assign(r,dd(t,(o,a)=>/^on/.test(a)?dC(o,n):o)),E0(this,t,"onProps"),yo(this,"onProps",t,this);const i=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return mC(++this._lastCallId,{key:n,props:t,defaultProps:r,state:s,actions:{pause:()=>{go(this)||(_0(this,!0),ko(s.pauseQueue),yo(this,"onPause",Zt(this,vo(this,this.animation.to)),this))},resume:()=>{go(this)&&(_0(this,!1),or(this)&&this._resume(),ko(s.resumeQueue),yo(this,"onResume",Zt(this,vo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(o=>{if(t.loop&&o.finished&&!(e&&o.noop)){const a=_C(t);if(a)return this._update(a,!0)}return o})}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(_s(this));const r=!N.und(t.to),i=!N.und(t.from);if(r||i)if(e.callId>this._lastToId)this._lastToId=e.callId;else return n(_s(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:d=u}=t;i&&!r&&(!e.default||N.und(c))&&(c=d),e.reverse&&([c,d]=[d,c]);const f=!Nn(d,u);f&&(a.from=d),d=yt(d);const y=!Nn(c,l);y&&this._focus(c);const m=ap(e.to),{config:w}=a,{decay:E,velocity:g}=w;(r||i)&&(w.velocity=0),e.config&&!m&&$D(w,_t(e.config,s),e.config!==o.config?_t(o.config,s):void 0);let p=mn(this);if(!p||N.und(c))return n(Zt(this,!0));const _=N.und(e.reset)?i&&!e.default:!N.und(d)&&Go(e.reset,s),v=_?d:this.get(),b=La(c),I=N.num(b)||N.arr(b)||ld(b),k=!m&&(!I||Go(o.immediate||e.immediate,s));if(y){const oe=op(c);if(oe!==p.constructor)if(k)p=this._set(b);else throw Error(`Cannot animate between ${p.constructor.name} and ${oe.name}, as the "to" prop suggests`)}const A=p.constructor;let M=$t(c),L=!1;if(!M){const oe=_||!wf(this)&&f;(y||oe)&&(L=Nn(La(v),b),M=!L),(!Nn(a.immediate,k)&&!k||!Nn(w.decay,E)||!Nn(w.velocity,g))&&(M=!0)}if(L&&or(this)&&(a.changed&&!_?M=!0:M||this._stop(l)),!m&&((M||$t(l))&&(a.values=p.getPayload(),a.toValues=$t(c)?null:A==Da?[1]:ht(b)),a.immediate!=k&&(a.immediate=k,!k&&!_&&this._set(l)),M)){const{onRest:oe}=a;K(GD,Ie=>E0(this,e,Ie));const Z=Zt(this,vo(this,l));ko(this._pendingCalls,Z),this._pendingCalls.add(n),a.changed&&J.batchedUpdates(()=>{var Ie;a.changed=!_,oe==null||oe(Z,this),_?_t(o.onRest,Z):(Ie=a.onStart)==null||Ie.call(a,Z,this)})}_&&this._set(v),m?n(vC(e.to,e,this._state,this)):M?this._start():or(this)&&!y?this._pendingCalls.add(n):n(gC(v))}_focus(t){const e=this.animation;t!==e.to&&(u0(this)&&this._detach(),e.to=t,u0(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;$t(e)&&(Ys(e,this),cp(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;$t(t)&&Oa(t,this)}_set(t,e=!0){const n=yt(t);if(!N.und(n)){const r=mn(this);if(!r||!Nn(n,r.getValue())){const i=op(n);!r||r.constructor!=i?jg(this,i.create(n)):r.setValue(n),r&&J.batchedUpdates(()=>{this._onChange(n,e)})}}return mn(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,yo(this,"onStart",Zt(this,vo(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),_t(this.animation.onChange,t,this)),_t(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;mn(this).reset(yt(t.to)),t.immediate||(t.fromValues=t.values.map(e=>e.lastPosition)),or(this)||(y0(this,!0),go(this)||this._resume())}_resume(){fn.skipAnimation?this.finish():sd.start(this)}_stop(t,e){if(or(this)){y0(this,!1);const n=this.animation;K(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Aa(this,{type:"idle",parent:this});const r=e?_s(this.get()):Zt(this.get(),vo(this,t??n.to));ko(this._pendingCalls,r),n.changed&&(n.changed=!1,yo(this,"onRest",r,this))}}};function vo(t,e){const n=La(e),r=La(t.get());return Nn(r,n)}function _C(t,e=t.loop,n=t.to){const r=_t(e);if(r){const i=r!==!0&&Fg(r),s=(i||t).reverse,o=!i||i.reset;return Fa({...t,loop:e,default:!1,pause:void 0,to:!s||ap(n)?n:void 0,from:o?t.from:void 0,reset:o,...i})}}function Fa(t){const{to:e,from:n}=t=Fg(t),r=new Set;return N.obj(e)&&w0(e,r),N.obj(n)&&w0(n,r),t.keys=r.size?Array.from(r):null,t}function HD(t){const e=Fa(t);return N.und(e.default)&&(e.default=dd(e)),e}function w0(t,e){Sn(t,(n,r)=>n!=null&&e.add(r))}var GD=["onStart","onRest","onChange","onPause","onResume"];function E0(t,e,n){t.animation[n]=e[n]!==fC(e,n)?dC(e[n],t.key):void 0}function yo(t,e,...n){var r,i,s,o;(i=(r=t.animation)[e])==null||i.call(r,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var qD=["onStart","onChange","onRest"],YD=1,wC=class{constructor(t,e){this.id=YD++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(const e in t){const n=t[e];N.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(Fa(t)),this}start(t){let{queue:e}=this;return t?e=ht(t).map(Fa):this.queue=[],this._flush?this._flush(this,e):(xC(this,e),hp(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;K(ht(e),r=>n[r].stop(!!t))}else ja(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(N.und(t))this.start({pause:!0});else{const e=this.springs;K(ht(t),n=>e[n].pause())}return this}resume(t){if(N.und(t))this.start({pause:!1});else{const e=this.springs;K(ht(t),n=>e[n].resume())}return this}each(t){Sn(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Bo(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!r&&this._started,o=i||s&&n.size?this.get():null;i&&e.size&&Bo(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,Bo(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;J.onFrame(this._onFrame)}};function hp(t,e){return Promise.all(e.map(n=>EC(t,n))).then(n=>Ug(t,n))}async function EC(t,e,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=e,u=N.obj(e.default)&&e.default;o&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);const c=N.arr(i)||N.fun(i)?i:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):K(qD,w=>{const E=e[w];if(N.fun(E)){const g=t._events[w];e[w]=({finished:p,cancelled:_})=>{const v=g.get(E);v?(p||(v.finished=!1),_&&(v.cancelled=!0)):g.set(E,{value:null,finished:p||!1,cancelled:_||!1})},u&&(u[w]=e[w])}});const d=t._state;e.pause===!d.paused?(d.paused=e.pause,ko(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);const f=(r||Object.keys(t.springs)).map(w=>t.springs[w].start(e)),y=e.cancel===!0||fC(e,"cancel")===!0;(c||y&&d.asyncId)&&f.push(mC(++t._lastAsyncId,{props:e,state:d,actions:{pause:rp,resume:rp,start(w,E){y?(ja(d,t._lastAsyncId),E(_s(t))):(w.onRest=a,E(vC(c,w,d,t)))}}})),d.paused&&await new Promise(w=>{d.resumeQueue.add(w)});const m=Ug(t,await Promise.all(f));if(o&&m.finished&&!(n&&m.noop)){const w=_C(e,o,i);if(w)return xC(t,[w]),EC(t,w,!0)}return l&&J.batchedUpdates(()=>l(m,t,t.item)),m}function pp(t,e){const n={...t.springs};return e&&K(ht(e),r=>{N.und(r.keys)&&(r=Fa(r)),N.obj(r.to)||(r={...r,to:void 0}),CC(n,r,i=>SC(i))}),bC(t,n),n}function bC(t,e){Sn(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Ys(n,t))})}function SC(t,e){const n=new BD;return n.key=t,e&&Ys(n,e),n}function CC(t,e,n){e.keys&&K(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function xC(t,e){K(e,n=>{CC(t.springs,n,r=>SC(r,t))})}var ul=({children:t,...e})=>{const n=S.useContext(vc),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=kD(()=>({pause:r,immediate:i}),[r,i]);const{Provider:s}=vc;return S.createElement(s,{value:e},t)},vc=KD(ul,{});ul.Provider=vc.Provider;ul.Consumer=vc.Consumer;function KD(t,e){return Object.assign(t,S.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var kC=()=>{const t=[],e=function(r){CD();const i=[];return K(t,(s,o)=>{if(N.und(r))i.push(s.start());else{const a=n(r,s,o);a&&i.push(s.start(a))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){const i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return K(t,r=>r.pause(...arguments)),this},e.resume=function(){return K(t,r=>r.resume(...arguments)),this},e.set=function(r){K(t,(i,s)=>{const o=N.fun(r)?r(s,i):r;o&&i.set(o)})},e.start=function(r){const i=[];return K(t,(s,o)=>{if(N.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},e.stop=function(){return K(t,r=>r.stop(...arguments)),this},e.update=function(r){return K(t,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(r,i,s){return N.fun(r)?r(s,i):r};return e._getProps=n,e};function QD(t,e,n){const r=N.fun(e)&&e;r&&!n&&(n=[]);const i=S.useMemo(()=>r||arguments.length==3?kC():void 0,[]),s=S.useRef(0),o=Dg(),a=S.useMemo(()=>({ctrls:[],queue:[],flush(g,p){const _=pp(g,p);return s.current>0&&!a.queue.length&&!Object.keys(_).some(b=>!g.springs[b])?hp(g,p):new Promise(b=>{bC(g,_),a.queue.push(()=>{b(hp(g,p))}),o()})}}),[]),l=S.useRef([...a.ctrls]),u=[],c=sp(t)||0;S.useMemo(()=>{K(l.current.slice(t,c),g=>{lp(g,i),g.stop(!0)}),l.current.length=t,d(c,t)},[t]),S.useMemo(()=>{d(0,Math.min(c,t))},n);function d(g,p){for(let _=g;_<p;_++){const v=l.current[_]||(l.current[_]=new wC(null,a.flush)),b=r?r(_,v):e[_];b&&(u[_]=HD(b))}}const f=l.current.map((g,p)=>pp(g,u[p])),y=S.useContext(ul),m=sp(y),w=y!==m&&hC(y);li(()=>{s.current++,a.ctrls=l.current;const{queue:g}=a;g.length&&(a.queue=[],K(g,p=>p())),K(l.current,(p,_)=>{i==null||i.add(p),w&&p.start({default:y});const v=u[_];v&&(pC(p,v.ref),p.ref?p.queue.push(v):p.start(v))})}),Lg(()=>()=>{K(a.ctrls,g=>g.stop(!0))});const E=f.map(g=>({...g}));return i?[E,i]:E}function bn(t,e){const n=N.fun(t),[[r],i]=QD(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,i]:r}function XD(t,e,n){const r=N.fun(e)&&e,{reset:i,sort:s,trail:o=0,expires:a=!0,exitBeforeEnter:l=!1,onDestroyed:u,ref:c,config:d}=r?r():e,f=S.useMemo(()=>r||arguments.length==3?kC():void 0,[]),y=ht(t),m=[],w=S.useRef(null),E=i?null:w.current;li(()=>{w.current=m}),Lg(()=>(K(m,W=>{f==null||f.add(W.ctrl),W.ctrl.ref=f}),()=>{K(w.current,W=>{W.expired&&clearTimeout(W.expirationId),lp(W.ctrl,f),W.ctrl.stop(!0)})}));const g=ZD(y,r?r():e,E),p=i&&w.current||[];li(()=>K(p,({ctrl:W,item:q,key:ue})=>{lp(W,f),_t(u,q,ue)}));const _=[];if(E&&K(E,(W,q)=>{W.expired?(clearTimeout(W.expirationId),p.push(W)):(q=_[q]=g.indexOf(W.key),~q&&(m[q]=W))}),K(y,(W,q)=>{m[q]||(m[q]={key:g[q],item:W,phase:"mount",ctrl:new wC},m[q].ctrl.item=W)}),_.length){let W=-1;const{leave:q}=r?r():e;K(_,(ue,le)=>{const P=E[le];~ue?(W=m.indexOf(P),m[W]={...P,item:y[ue]}):q&&m.splice(++W,0,P)})}N.fun(s)&&m.sort((W,q)=>s(W.item,q.item));let v=-o;const b=Dg(),I=dd(e),k=new Map,A=S.useRef(new Map),M=S.useRef(!1);K(m,(W,q)=>{const ue=W.key,le=W.phase,P=r?r():e;let F,V;const Ee=_t(P.delay||0,ue);if(le=="mount")F=P.enter,V="enter";else{const Le=g.indexOf(ue)<0;if(le!="leave")if(Le)F=P.leave,V="leave";else if(F=P.update)V="update";else return;else if(!Le)F=P.enter,V="enter";else return}if(F=_t(F,W.item,q),F=N.obj(F)?Fg(F):{to:F},!F.config){const Le=d||I.config;F.config=_t(Le,W.item,q,V)}v+=o;const he={...I,delay:Ee+v,ref:c,immediate:P.immediate,reset:!1,...F};if(V=="enter"&&N.und(he.from)){const Le=r?r():e,it=N.und(Le.initial)||E?Le.from:Le.initial;he.from=_t(it,W.item,q)}const{onResolve:er}=he;he.onResolve=Le=>{_t(er,Le);const it=w.current,dt=it.find(Nt=>Nt.key===ue);if(dt&&!(Le.cancelled&&dt.phase!="update")&&dt.ctrl.idle){const Nt=it.every(xn=>xn.ctrl.idle);if(dt.phase=="leave"){const xn=_t(a,dt.item);if(xn!==!1){const Ks=xn===!0?0:xn;if(dt.expired=!0,!Nt&&Ks>0){Ks<=2147483647&&(dt.expirationId=setTimeout(b,Ks));return}}}Nt&&it.some(xn=>xn.expired)&&(A.current.delete(dt),l&&(M.current=!0),b())}};const de=pp(W.ctrl,he);V==="leave"&&l?A.current.set(W,{phase:V,springs:de,payload:he}):k.set(W,{phase:V,springs:de,payload:he})});const L=S.useContext(ul),oe=sp(L),Z=L!==oe&&hC(L);li(()=>{Z&&K(m,W=>{W.ctrl.start({default:L})})},[L]),K(k,(W,q)=>{if(A.current.size){const ue=m.findIndex(le=>le.key===q.key);m.splice(ue,1)}}),li(()=>{K(A.current.size?A.current:k,({phase:W,payload:q},ue)=>{const{ctrl:le}=ue;ue.phase=W,f==null||f.add(le),Z&&W=="enter"&&le.start({default:L}),q&&(pC(le,q.ref),(le.ref||f)&&!M.current?le.update(q):(le.start(q),M.current&&(M.current=!1)))})},i?void 0:n);const Ie=W=>S.createElement(S.Fragment,null,m.map((q,ue)=>{const{springs:le}=k.get(q)||q.ctrl,P=W({...le},q.item,q,ue);return P&&P.type?S.createElement(P.type,{...P.props,key:N.str(q.key)||N.num(q.key)?q.key:q.ctrl.id,ref:P.ref}):P}));return f?[Ie,f]:Ie}var JD=1;function ZD(t,{key:e,keys:n=e},r){if(n===null){const i=new Set;return t.map(s=>{const o=r&&r.find(a=>a.item===s&&a.phase!=="leave"&&!i.has(a));return o?(i.add(o),o.key):JD++})}return N.und(n)?t:N.fun(n)?t.map(n):ht(n)}var eL=class extends zg{constructor(t,e){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=Ra(...e);const n=this._get(),r=op(n);jg(this,r.create(n))}advance(t){const e=this._get(),n=this.get();Nn(e,n)||(mn(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&b0(this._active)&&Ef(this)}_get(){const t=N.arr(this.source)?this.source.map(yt):ht(yt(this.source));return this.calc(...t)}_start(){this.idle&&!b0(this._active)&&(this.idle=!1,K(ud(this),t=>{t.done=!1}),fn.skipAnimation?(J.batchedUpdates(()=>this.advance()),Ef(this)):sd.start(this))}_attach(){let t=1;K(ht(this.source),e=>{$t(e)&&Ys(e,this),cp(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))}),this.priority=t,this._start()}_detach(){K(ht(this.source),t=>{$t(t)&&Oa(t,this)}),this._active.clear(),Ef(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=ht(this.source).reduce((e,n)=>Math.max(e,(cp(n)?n.priority:0)+1),0))}};function tL(t){return t.idle!==!1}function b0(t){return!t.size||Array.from(t).every(tL)}function Ef(t){t.idle||(t.idle=!0,K(ud(t),e=>{e.done=!0}),Aa(t,{type:"idle",parent:t}))}fn.assign({createStringInterpolator:aC,to:(t,e)=>new eL(t,e)});var IC=/^--/;function nL(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!IC.test(t)&&!(qo.hasOwnProperty(t)&&qo[t])?e+"px":(""+e).trim()}var S0={};function rL(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:s,scrollLeft:o,viewBox:a,...l}=e,u=Object.values(l),c=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:S0[d]||(S0[d]=d.replace(/([A-Z])/g,f=>"-"+f.toLowerCase())));i!==void 0&&(t.textContent=i);for(const d in r)if(r.hasOwnProperty(d)){const f=nL(d,r[d]);IC.test(d)?t.style.setProperty(d,f):t.style[d]=f}c.forEach((d,f)=>{t.setAttribute(d,u[f])}),s!==void 0&&(t.scrollTop=s),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var qo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iL=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),sL=["Webkit","Ms","Moz","O"];qo=Object.keys(qo).reduce((t,e)=>(sL.forEach(n=>t[iL(n,e)]=t[e]),t),qo);var oL=/^(matrix|translate|scale|rotate|skew)/,aL=/^(translate)/,lL=/^(rotate|skew)/,bf=(t,e)=>N.num(t)&&t!==0?t+e:t,hu=(t,e)=>N.arr(t)?t.every(n=>hu(n,e)):N.num(t)?t===e:parseFloat(t)===e,uL=class extends cd{constructor({x:t,y:e,z:n,...r}){const i=[],s=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>bf(a,"px")).join(",")})`,hu(o,0)])),Sn(r,(o,a)=>{if(a==="transform")i.push([o||""]),s.push(l=>[l,l===""]);else if(oL.test(a)){if(delete r[a],N.und(o))return;const l=aL.test(a)?"px":lL.test(a)?"deg":"";i.push(ht(o)),s.push(a==="rotate3d"?([u,c,d,f])=>[`rotate3d(${u},${c},${d},${bf(f,l)})`,hu(f,0)]:u=>[`${a}(${u.map(c=>bf(c,l)).join(",")})`,hu(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new cL(i,s)),super(r)}},cL=class extends iC{constructor(t,e){super(),this.inputs=t,this.transforms=e,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return K(this.inputs,(n,r)=>{const i=yt(n[0]),[s,o]=this.transforms[r](N.arr(i)?i:n.map(yt));t+=" "+s,e=e&&o}),e?"none":t}observerAdded(t){t==1&&K(this.inputs,e=>K(e,n=>$t(n)&&Ys(n,this)))}observerRemoved(t){t==0&&K(this.inputs,e=>K(e,n=>$t(n)&&Oa(n,this)))}eventObserved(t){t.type=="change"&&(this._value=null),Aa(this,t)}},dL=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];fn.assign({batchedUpdates:Ww.unstable_batchedUpdates,createStringInterpolator:aC,colors:tD});var fL=MD(dL,{applyAnimatedValues:rL,createAnimatedStyle:t=>new uL(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),un=fL.animated;function C0(){return h.jsxs("div",{className:"gap-2 w-full h-full flex flex-col items-center justify-center",children:[h.jsx("img",{src:"/me-schedule-maker/images/cooking-pot.gif",alt:"cooking-pot git",className:"h-20"}),h.jsx("p",{children:"Wait it's cooking"})]})}function hL({viewData:t,userData:e}){const n="jac-mock-schedule-maker",[r,i]=S.useState(()=>{if(e)return e.schedules?e.schedules:[];{const l=window.localStorage.getItem(n);return l?JSON.parse(l):[]}}),s=S.useRef(r.length),{chosenClasses:o}=S.useContext(cl);function a(l){do s.current+=1;while(r.map(u=>u.id).includes(s.current));i([...r,{id:s.current,vData:l,data:o}])}return S.useEffect(()=>{e?AM(e.uid,r).catch(l=>console.log(l)):window.localStorage.setItem(n,JSON.stringify(r))},[r]),h.jsxs("section",{className:"bg-c1 rounded-lg box-border flex w-full flex-wrap gap-2 p-2",children:[h.jsx("div",{className:"bg-c2 hover:bg-c3 active:bg-c4 transition rounded-md flex items-center justify-center md:p-4 p-2 cursor-pointer h-20",onClick:()=>a(t),children:h.jsx(jt,{icon:qM,className:"md:text-4xl text-xl"})}),r.map(l=>h.jsx(mL,{i:l,savedSchedule:r,setSavedSchedule:i},l.id))]})}function pL({blocksToShow:t}){return t.map(e=>{const n=Object.entries(e.time).flat();return h.jsx("div",{className:"z-10 border border-[black] box-border rounded-sm",style:{gridColumnStart:n[0],gridRowStart:n[1][0],gridRowEnd:n[1][1],backgroundColor:e.color}},e.code+e.section+n[0])})}function mL({i:t,savedSchedule:e,setSavedSchedule:n}){const{setChosenClasses:r}=S.useContext(cl),i=structuredClone(t);i.data||(i.data=[]),i.vData||(i.vData=[]);const[s,o]=bn(()=>({from:{opacity:0,y:30,scale:1},to:{opacity:1,y:0}}),[]);function a(u){u.stopPropagation(),o.start({from:{opacity:1,scale:1},to:{opacity:0,scale:0},onResolve:()=>{n(e.filter(c=>c.id!==t.id))}})}function l(){r(i.data)}return h.jsxs(un.div,{className:"min-w-[calc(5rem*1.6)] bg-[white] rounded-md grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 relative hover:bg-slate-200 md:shadow-lg shadow-md cursor-pointer h-20 overflow-hidden",style:s,onClick:l,children:[i.vData.map((u,c)=>h.jsx(pL,{blocksToShow:u},c)),h.jsx(jt,{icon:$M,className:"absolute opacity-10 m-1 bottom-0 right-0 hover:opacity-50 cursor-pointer",onClick:a})]},t.id)}function gL({setInput:t,setCurrent:e}){const[n,r]=S.useState(!1),i=S.useRef(null);function s(o){if(o.preventDefault(),!i.current){t(""),e("search");return}const a=i.current;function l(v){return a.elements.namedItem(v)}const u=l("courseName").value.toUpperCase(),c=l("className").value,d=l("teacherName").value.split(" ").flatMap(v=>v.split(",")).filter(v=>v!=="").map(v=>`p=${v}`),f=Number(l("ratingMax").value),y=Number(l("ratingMin").value),m=[y?`r>${y}`:"",f?`r<${f}`:""],w=Number(l("scoreMax").value),E=Number(l("scoreMin").value),g=[E?`s>${E}`:"",w?`s<${w}`:""],p=["monday","tuesday","wednesday","thursday","friday","honours","blended"].map(v=>l(v).checked).map((v,b)=>v?["M","T","W","R","F","honours","blended"].at(b):""),_=[u,c,...d,...m,...g,...p];console.log(_),t(_.filter(v=>v!=="").join(",")),e("search")}return h.jsx("div",{className:"box-border w-full h-full p-2 overflow-auto",children:h.jsxs("form",{onSubmit:s,className:"flex flex-col md:text-xl text-base gap-4",ref:i,children:[h.jsxs("label",{children:[h.jsx("p",{className:"font-semibold",children:"Course Name or Code"}),h.jsx("input",{placeholder:"English",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"courseName"})]}),h.jsxs("label",{children:[h.jsx("p",{className:"font-semibold",children:"Class Name"}),h.jsx("input",{placeholder:"Hockey is everything",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"className"})]}),h.jsxs("label",{children:[h.jsx("p",{className:"font-semibold",children:"Teacher Name"}),h.jsx("input",{placeholder:"Patrik Burger",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"teacherName"})]}),h.jsxs("div",{className:"flex gap-4 w-full",children:[h.jsxs("label",{className:"basis-1/2",children:[h.jsx("p",{className:"font-semibold",children:"Rating /5"}),h.jsxs("div",{className:"flex gap-1 w-full",children:[h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"ratingMin"})}),h.jsx("p",{className:"flex items-center",children:"to"}),h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"5",name:"ratingMax"})})]})]}),h.jsxs("label",{className:"basis-1/2",children:[h.jsxs("div",{className:"font-semibold relative",children:["Score /100",h.jsx(jt,{icon:mS,className:"ml-2",onMouseOver:()=>r(!0),onMouseOut:()=>r(!1)}),n&&h.jsx("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:h.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."})})]}),h.jsxs("div",{className:"flex gap-1 w-full",children:[h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"scoreMin"})}),h.jsx("p",{className:"flex items-center",children:"to"}),h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"100",name:"scoreMax"})})]})]})]}),h.jsxs("label",{className:"flex gap-4",children:[h.jsxs("div",{className:"basis-1/2",children:[h.jsx("p",{className:"font-semibold",children:"Days"}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"monday"})," Monday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"tuesday"})," Tuesday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"wednesday"})," Wednesday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"thursday"})," Thursday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"friday"})," Friday"]})]}),h.jsxs("div",{className:"basis-1/2",children:[h.jsx("p",{className:"font-semibold",children:"Special"}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"honours"})," Honours"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"blended"})," Blended"]})]})]}),h.jsxs("div",{className:"flex justify-end gap-2",children:[h.jsx("button",{type:"reset",className:"rounded-lg p-2 transition hover:outline-c9 outline outline-1 outline-c1",children:"Clear"}),h.jsx("button",{type:"submit",className:"rounded-lg bg-c9 p-2 text-c1 transition hover:bg-c7",children:"Apply"})]})]})})}function vL({input:t,classes:e,setLoading:n}){S.useEffect(()=>{n(!0)},[]);let r=t.split(",");r=r.map(u=>u.trim());const{chosenClasses:i,setChosenClasses:s}=S.useContext(cl);function o(u,c){const f=["[0-9]","[0-9]","[0-9]","-","[0-9A-Z]","[0-9A-Z]","[0-9A-Z]","-","[0-9A-Z]","[0-9A-Z]"].slice(0,u.length).join(""),y=new RegExp(f);if(["r>","r<","r="].includes(u.slice(0,2))&&u.length>2){if(!Number(u.slice(2)))return[];const m=Number(u.slice(2));switch(u[1]){case"=":return c.filter(w=>w.lecture.rating.avg===m);case">":return c.filter(w=>w.lecture.rating.avg>=m);case"<":return c.filter(w=>w.lecture.rating.avg<=m)}}else if(["s>","s<","s="].includes(u.slice(0,2))&&u.length>2){if(!Number(u.slice(2)))return[];const m=Number(u.slice(2));switch(u[1]){case"=":return c.filter(w=>w.lecture.rating.score===m);case">":return c.filter(w=>w.lecture.rating.score>=m);case"<":return c.filter(w=>w.lecture.rating.score<=m)}}else if(u.slice(0,2)==="p="){const m=u.slice(2).toLowerCase();return c.filter(w=>w.lecture.prof.toLowerCase().includes(m))}else{if(y.test(u))return c.filter(m=>m.code.startsWith(u));if(u.split("").every(m=>"MTWRF".includes(m)))return c.filter(m=>{const w=structuredClone(Object.keys(m.lecture)),E=structuredClone(Object.keys(m.lab));return w.filter(p=>!["title","prof","rating"].includes(p)).concat(E.filter(p=>!["title","prof","rating"].includes(p))).join("").includes(u)});if(u.toUpperCase()===u)return c.filter(m=>m.course.startsWith(u));if(["honours","blended"].some(m=>m.startsWith(u.toLowerCase()))){const m=u.toLowerCase();if("honours".startsWith(m))return c.filter(w=>w.more.startsWith("For Honours"));if("blended".startsWith(m))return c.filter(w=>w.more.startsWith("BLENDED"))}else return c.filter(m=>m.lecture.title.toLowerCase().startsWith(u.toLowerCase()))}return[]}let a=o(r[0],e);r.slice(1).forEach(u=>{a=o(u,a)});function l(u){if(i.some(c=>u.code===c.code&&u.section===c.section))s(i.filter(c=>!(u.code===c.code&&u.section===c.section)));else if(i.some(c=>u.code===c.code)){alert("You already have a class from this course");return}else s([...i,u])}return h.jsx(h.Fragment,{children:a.map((u,c)=>h.jsxs("div",{className:"bg-c2 p-2 box-border md:mb-3 mb-2 rounded-lg md:shadow-lg shadow-md hover:bg-c3 transition cursor-pointer md:text-base text-xs",onClick:()=>l(u),children:[h.jsxs("p",{className:"font-light",children:[u.program,": ",u.course," ",u.code]}),h.jsxs("p",{className:"md:text-xl font-bold text-base",children:[u.section," ",u.lecture.title]}),h.jsxs("div",{className:"ml-4 relative",children:[u.lecture.prof," ",h.jsx("span",{className:"font-bold",children:u.lecture.rating.score===0?"N/A":u.lecture.rating.score})," ",h.jsx(x0,{rating:u.lecture.rating})]}),Object.entries(u.lecture).filter(d=>!["title","prof","rating"].includes(d[0])).map((d,f)=>h.jsxs("p",{className:"ml-8 font-extralight",children:[h.jsx("span",{className:"font-normal",children:d[0]})," ",d[1]]},f)),"prof"in u.lab&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"ml-4 relative",children:[h.jsx("u",{children:"Lab"}),": ",u.lab.prof," ",h.jsx("span",{className:"font-bold",children:u.lab.rating.score===0?"N/A":u.lab.rating.score})," ",h.jsx(x0,{rating:u.lab.rating})]}),Object.entries(u.lab).filter(d=>!["title","prof","rating"].includes(d[0])).map((d,f)=>h.jsxs("p",{className:"ml-8 font-extralight",children:[h.jsx("span",{className:"font-normal",children:d[0]})," ",d[1]]},f))]}),u.more!==""&&h.jsx(h.Fragment,{children:h.jsx("p",{className:"text-c6",children:u.more})})]},`i.code + ${c}`))})}function yL({classes:t,setLoading:e,viewData:n,userData:r}){const[i,s]=S.useState(""),o=S.useDeferredValue(i),[a,l]=S.useState("search"),u=S.useDeferredValue(a),[c,d]=S.useState(!1);return h.jsxs("section",{className:"md:col-span-5 md:row-span-6 bg-c1 rounded-lg box-border flex flex-col max-md:order-2",children:[h.jsxs("nav",{className:"flex justify-between w-full p-2 box-border",children:[h.jsx(Sf,{current:a,setCurrent:l,text:"search"}),h.jsx(Sf,{current:a,setCurrent:l,text:"filter"}),h.jsx(Sf,{current:a,setCurrent:l,text:"saved"})]}),a==="search"&&u===a?h.jsxs(h.Fragment,{children:[h.jsxs("label",{className:"relative md:mx-4 mx-2 mt-2",children:[h.jsx(jt,{icon:VM,className:"absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer",onMouseOver:()=>d(!0),onMouseOut:()=>d(!1)}),c&&h.jsxs("div",{className:"absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-xs w-[70dvw]",children:[h.jsx("p",{children:"You can search any keyword for the class you are looking for."}),h.jsx("br",{}),h.jsx("p",{children:'Separate your keywords with commas. E.g. "Biology, 101" will search for all biology 101-NYA-05 and biology 101-DCN-05 classes.'}),h.jsx("br",{}),"Examples: ",h.jsx("br",{}),h.jsxs("ul",{className:"pl-4",children:[h.jsxs("li",{className:"list-disc",children:[h.jsxs("span",{className:"font-bold",children:["r",">","4.5"]})," (teachers with +4.5/5 rating. Symbol can be ","<"," , ",">"," or ","="," )"]}),h.jsxs("li",{className:"list-disc",children:[h.jsxs("span",{className:"font-bold",children:["s",">","80"]})," (teachers with +80/100 score. Symbol can be ","<"," , ",">"," or ","="," )"]}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"Linear Al, W, F"})," (Linear Algebra I/II/III that has classes on Wednesday and Friday. DAYS must be in ALL CAPS)"]}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"honours"}),' (honours classes. Special keywords include "honours" and "blended")']}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"p=Steven Randall, blended"})," ",'(blended classes by teacher who has "Steven Randall" in their name. Teachers must have "p=" before)']}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"ENGLISH, haunted house"})," ",'(all English class that has "haunted house" in their name. COURSE NAME must be in ALL CAPS)']})]})]}),h.jsx("input",{className:"bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md",placeholder:"COURSE, code, professor, rating, class name, ...",value:i,onChange:f=>s(f.target.value)})]}),h.jsx("div",{className:"w-full h-full box-border rounded-lg overflow-y-auto md:px-4 px-2 md:mt-4 mt-2",children:o===i?h.jsx(vL,{input:o,classes:t,setLoading:e}):h.jsx(C0,{})})]}):a==="search"&&h.jsx(C0,{}),a==="filter"&&h.jsx(gL,{setInput:s,setCurrent:l}),a==="saved"&&h.jsx(hL,{viewData:n,userData:r})]})}function Sf({current:t,setCurrent:e,text:n}){var o;const r={width:t===n?"100%":"0%"},[i,s]=bn(()=>({from:r}),[]);return S.useEffect(()=>{s.start({to:r})},[t]),h.jsxs("div",{className:"w-1/3 text-center cursor-pointer box-border border-c9 border-solid relative flex justify-center",onClick:()=>e(n),children:[(o=n.at(0))==null?void 0:o.toUpperCase().concat(n.slice(1)),h.jsx(un.p,{className:"absolute h-full box-border border-solid border-b-c9 border-b-2",style:i})]})}function x0({rating:t}){const[e,n]=S.useState(!1);return h.jsxs(h.Fragment,{children:[h.jsx(jt,{icon:mS,className:"cursor-pointer",onMouseOver:()=>n(!0),onMouseOut:()=>n(!1)}),e&&h.jsxs("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:[h.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."}),h.jsxs("ul",{className:"pl-4 shrink-0",children:[h.jsxs("li",{className:"list-disc",children:["Rating: ",t.avg===0?"N/A":`${t.avg}/5`]}),h.jsxs("li",{className:"list-disc",children:["Raters: ",t.avg===0?"N/A":t.nRating]}),h.jsxs("li",{className:"list-disc",children:["Take Again:"," ",t.avg===0?"N/A":`${t.takeAgain.toFixed(1)}%`]}),h.jsxs("li",{className:"list-disc",children:["Difficulty: ",t.avg===0?"N/A":`${t.difficulty}/5`]})]})]})]})}const cl=S.createContext({chosenClasses:[],setChosenClasses:()=>{}});function k0({user:t}){const e=Ga(),[n,r]=S.useState([]),[i,s]=S.useState(!1),[o,a]=S.useState([]),[l,u]=S.useState(null),c=S.useMemo(()=>d(o),[o]);S.useEffect(()=>{f(c)&&(a(o.slice(0,-1)),alert("The chosen class overlaps with another!"))},[c]),S.useEffect(()=>{t&&km(dg(),w=>{w?pS(w.uid,E=>{u({uid:w.uid,schedules:E.val()})},"schedules"):e("/")});async function m(w,E){try{const g=await fetch(w);if(!g.ok)throw new Error("Network response was not ok");const p=await g.json();E(p)}catch(g){console.log(g)}}m("/me-schedule-maker/data/all.json",r).catch(w=>console.log(w))},[]);function d(m){const w=["M","T","W","R","F"],E=[...Array(21).keys()].map(_=>(_%2===0?_*50+800:Math.floor(_/2)*2*50+830).toFixed(0)),g=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(190,97%,85%)"];return m.map((_,v)=>{const b=structuredClone(Object.entries(_.lecture)),I=structuredClone(Object.entries(_.lab?_.lab:{}));return b.filter(A=>!["title","prof","rating"].includes(A[0])).concat(I.filter(A=>!["title","prof","rating"].includes(A[0]))).flatMap(A=>{const M=A[0].split("").filter(Ie=>Ie==="S"?(alert("There is class on Saturday as well"),!1):!0),L=A[1],oe=L.split("-")[0],Z=L.split("-")[1];return M.flatMap(Ie=>{const W=E.findIndex(le=>Number(le)===Number(oe))+1,q=E.findIndex(le=>Number(le)===Number(Z))+1,ue=w.findIndex(le=>le===Ie)+1;return{code:_.code,section:_.section,time:{[`${ue}`]:[W,q]},color:g[v],teacher:_.lecture.prof,title:_.lecture.title}})})})}function f(m){const w=m.flat().map(b=>b.time),E=w.filter(b=>b[1]).flatMap(b=>Object.values(b)),g=w.filter(b=>b[2]).flatMap(b=>Object.values(b)),p=w.filter(b=>b[3]).flatMap(b=>Object.values(b)),_=w.filter(b=>b[4]).flatMap(b=>Object.values(b)),v=w.filter(b=>b[5]).flatMap(b=>Object.values(b));return!![E,g,p,_,v].some(b=>{if(b.length<=1)return!1;const I=b.at(-1);return!!b.slice(0,-1).some(k=>Number(k[0])>Number(I[0])?Number(I[1])>Number(k[0]):Number(k[0])<Number(I[0])?Number(I[0])<Number(k[1]):Number(k[0])===Number(I[0]))})}async function y(){await fg()}return h.jsxs(cl.Provider,{value:{chosenClasses:o,setChosenClasses:a},children:[h.jsxs("nav",{className:"md:text-base text-xs w-full bg-c9 text-c1 shrink-0 flex justify-between items-center",children:[h.jsx(jt,{icon:HM,className:"ml-2 cursor-pointer transition hover:text-c4",onClick:()=>e("/")}),h.jsxs("p",{children:["Fall 2023 JAC"," ",h.jsx("span",{className:" max-md:hidden",children:"Mock Schedule Maker"})]}),h.jsx("p",{onClick:()=>void y(),className:"mr-2 cursor-pointer transition hover:text-c4",children:l?"Sign Out":""})]}),h.jsxs("section",{className:"w-full basis-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 px-2 pb-2 text-c9 flex flex-col md:text-base text-xs overflow-auto",children:[h.jsx(yL,{classes:n,setLoading:s,viewData:c,userData:l}),i&&n.length!==0&&h.jsx(h.Fragment,{children:h.jsx(TC,{viewData:c})})]})]})}function TC({viewData:t,login:e}){const[n,r]=S.useState([]);return S.useEffect(()=>{r(()=>t.map((i,s)=>h.jsx(S.Fragment,{children:h.jsx(_L,{blocksToShow:i,login:e})},s)))},[t]),h.jsxs("section",{className:"rounded-lg md:col-span-7 md:row-span-6 max-md:min-h-[60%] col-span-full bg-c1 md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-1",children:[h.jsx("div",{className:"col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]",children:[...Array(21).keys()].map(i=>h.jsxs("span",{className:"translate-y-1/2 box-border md:pr-4 md:text-xs text-[0.5rem] flex items-center justify-end pr-2",children:[Math.floor(i/2)+8,":",i%2===0?"00":"30"]},i))}),h.jsxs("div",{className:"col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative",children:[h.jsx("div",{className:"absolute w-full h-full grid grid-rows-[repeat(20,minmax(0,1fr))] row-start-2",children:[...Array(19).keys()].map(i=>h.jsx("div",{children:h.jsx(I0,{n:i,lineProperty:"width"})},`horizontal-${i}`))}),h.jsxs("div",{className:"absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]",children:[h.jsx("div",{className:"row-span-1 col-span-full"}),[...Array(4).keys()].map(i=>h.jsx("div",{className:"row-[span_20/span_20]",children:h.jsx(I0,{n:i,lineProperty:"height"})},`vertical-${i}`))]}),["Monday","Tuesday","Wednesday","Thursday","Friday"].map(i=>{const s=window.innerWidth>=1100?i:i.slice(0,3);return h.jsx("span",{className:"text-center font-semibold md:text-base text-xs",children:s},i)}),h.jsx("div",{className:"grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg md:shadow-lg shadow-md",children:n})]})]})}function I0({n:t,lineProperty:e}){const n=bn({from:{[e]:"0%"},to:{[e]:"100%"},delay:e==="height"?t*100:t*30}),r=e==="height"?"border-r-2 w-full left-[1px]":"border-b-2 h-full top-[1px]";return h.jsx(un.div,{className:`${e==="height"?"w-full py-2":"h-full px-2"} box-border`,style:n,children:h.jsx("div",{className:`${r} border-[hsl(0,0%,77%)] h-full w-full relative`})})}function _L({blocksToShow:t,login:e}){const n=XD(t,{from:{y:-20,scale:0},enter:{y:0,scale:1},leave:{y:-20,scale:0},trail:50}),{chosenClasses:r,setChosenClasses:i}=S.useContext(cl);return n((s,o)=>{const a=Object.entries(o.time).flat();return h.jsxs(un.div,{className:`md:text-[14px] md:leading-[14px] text-[8px] leading-[10px] z-10 p-1 border border-[black] outline outline-1 outline-[black] text-[black] ${e?"":"cursor-pointer"} rounded-lg overflow-hidden`,style:{gridColumnStart:a[0],gridRowStart:a[1][0],gridRowEnd:a[1][1],backgroundColor:o.color,...s},onClick:()=>{e||i(r.filter(l=>l.code!==o.code))},children:[h.jsx("p",{className:"line-clamp-2 font-semibold",children:o.title}),h.jsx("p",{className:"line-clamp-1 font-light mt-1",children:o.code}),h.jsx("p",{className:"font-light",children:o.section}),h.jsx("p",{className:"line-clamp-2 mt-1",children:o.teacher})]},o.code+o.section+a[0])})}function wL({setIndex:t,viewData:e,uid:n,currentIndex:r}){return h.jsxs("section",{className:"flex flex-col justify-between relative row-span-full col-start-8 col-span-2 rounded-lg overflow-hidden",children:[h.jsx("div",{className:"relative max-h-full rounded-lg box-border bg-c1 p-2 flex flex-col overflow-auto",children:e?e.map((i,s)=>h.jsx(EL,{data:i,index:s,setIndex:t,uid:n,currentIndex:r},s)):"Open the editor to make a new schedule"}),h.jsx(Vn,{to:"schedule",className:"w-full flex justify-center",children:h.jsx("button",{className:"text-c1 hover:font-bold transition",children:"Open Editor"})})]})}function EL({data:t,setIndex:e,index:n,uid:r,currentIndex:i}){const[s,o]=S.useState(!1),[a,l]=S.useState(""),[u,c]=S.useState(t.name??`Untitled ${n+1}`);function d(m){m.stopPropagation(),s?c(a):l(u),o(w=>!w)}async function f(m){m.preventDefault(),o(!1),r&&await OM(r,u,n)}const y=bn({backgroundColor:i===n?"#03045e":"#caf0f8",color:i!==n?"#03045e":"#caf0f8"});return h.jsxs(un.div,{onClick:()=>!s&&e(n),className:"relative cursor-pointer w-full px-2 py-4 rounded hover:font-bold flex items-center",style:y,children:[h.jsx(jt,{icon:LM,className:"pr-2 hover:text-c5 transition",onClick:d}),s?h.jsxs("form",{onSubmit:m=>void f(m),className:"w-full",children:[h.jsx("input",{className:"outline-none rounded p-2 w-full text-c9",value:u,onChange:m=>c(m.target.value)}),h.jsx("input",{type:"submit",className:"hidden"})]}):u,n===0?null:h.jsx("div",{className:"absolute mx-2 w-[calc(100%-1rem)] h-[1px] bg-c5 top-[-0.5px] left-0"})]},t.id)}function bL(){return h.jsxs("div",{className:"basis-full box-border flex flex-col items-center justify-center gap-2",children:[h.jsx("h1",{className:"text-7xl font-bold text-c9",children:"Welcome!"}),h.jsx("p",{className:"font-bold text-xl",children:"Ready to make your dream schedule?"}),h.jsxs("div",{className:"flex gap-2 mt-4",children:[h.jsx("button",{onClick:()=>{var t;return(t=document.getElementById("schedules"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"text-c5 hover:underline",children:"Check current schedules"}),h.jsx(Vn,{to:"schedule",children:h.jsxs("button",{className:"text-c1 mr-4 hover:bg-c1 hover:text-c9 transition bg-c9 p-2 rounded",children:["New ",h.jsx(jt,{icon:FM})]})})]})]})}function SL(){return h.jsx("div",{className:"absolute w-full h-full top-0 left-0 -z-10"})}function CL(){var c,d;const t=Ga(),e=Ha(),[n,r]=S.useState(""),[i,s]=S.useState(!1),[o,a]=S.useState(null),[l,u]=S.useState(0);return S.useEffect(()=>{km(dg(),f=>{f?(r(f.email?f.email:"User"),pS(f.uid,y=>{a({uid:f.uid,schedules:y.val()})},"schedules")):t("/")})},[]),h.jsxs("section",{className:"w-[100dvw] h-[100dvh] relative overflow-x-hidden flex flex-col",children:[h.jsxs("nav",{className:"shrink-0 flex justify-between box-border p-1 h-20 w-full items-center bg-white",children:[h.jsx(Vn,{to:"/",className:"h-20",children:h.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-color-logo-2.png",className:"h-full aspect-[4/3] cursor-pointer"})}),h.jsxs("div",{className:"flex gap-4 items-center box-border pr-4",children:[h.jsx("p",{children:n}),h.jsx(kL,{menuOpen:i,handleOnClick:()=>s(f=>!f)})]})]}),h.jsx(xL,{menuOpen:i}),e.pathname.includes("/settings")?h.jsx(m2,{}):h.jsxs(h.Fragment,{children:[h.jsx(IL,{}),h.jsx(SL,{}),h.jsx(bL,{}),h.jsx("div",{className:"shrink-0 flex justify-center box-border p-6 items-center",children:h.jsx("h1",{className:"font-bold text-4xl z-10 text-c1",children:"My Schedules"})}),h.jsxs("div",{className:"bg-c9 h-full box-border p-2 w-full grid grid-rows-6 grid-cols-9 gap-2 grow-0 absolute top-[100dvh]",id:"schedules",children:[h.jsx(TC,{viewData:((d=(c=o==null?void 0:o.schedules)==null?void 0:c[l])==null?void 0:d.vData)??[],login:!0}),h.jsx(wL,{uid:o==null?void 0:o.uid,setIndex:u,viewData:o==null?void 0:o.schedules,currentIndex:l})]})]})]})}function xL({menuOpen:t}){const e=bn({x:t?"-100%":"0%"});async function n(){await fg()}return h.jsxs(un.div,{className:"absolute top-20 left-full bg-c1 z-10 p-2 w-28",style:e,children:[h.jsx(Vn,{to:"settings",children:h.jsx("p",{className:"hover:underline cursor-pointer",children:"Settings"})}),h.jsx("p",{onClick:()=>void n(),className:"mt-2 hover:underline cursor-pointer",children:"Sign Out"})]})}function kL({menuOpen:t,handleOnClick:e}){const i=["M1 20L100 20","M1 50L75 50","M1 80L50 80"],s=["M1 1L100 100","M1 100L100 1","M1 100L100 1"],o=bn({d:t?s[0]:i[0]}),a=bn({d:t?s[1]:i[1]}),l=bn({d:t?s[2]:i[2]});return h.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"none",className:"h-10 aspect-square",onClick:e,children:[h.jsx(un.path,{d:o.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx(un.path,{d:a.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx(un.path,{d:l.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function IL(){return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180 flex flex-col",children:[h.jsx("div",{className:"w-full h-10 bg-c1 order-1 relative bottom-0"}),h.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32 order-2 top-0",children:h.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c1"})})]}),h.jsxs("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180 flex flex-col",children:[h.jsx("div",{className:"w-full h-5 bg-c5 order-1 relative bottom-0"}),h.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32 order-2 top-0",children:h.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c5"})})]}),h.jsx("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180",children:h.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32",children:h.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c9"})})})]})}function TL(){const[t,e]=S.useState("Login"),n=Ga(),[r,i]=S.useState(!1);S.useEffect(()=>{km(dg(),o=>{o&&(o.emailVerified?n(`/users/${o.uid}`):(MM(o).catch(a=>console.log(a)),i(!0),fg().catch(a=>console.log(a))))})},[]);function s(o){o==="Login"?e("Login"):o==="Sign Up"&&e("Sign Up")}return h.jsx(h.Fragment,{children:h.jsxs("section",{className:"w-[100dvw] h-[100dvh] bg-white flex",children:[h.jsx("div",{className:"md:basis-5/12 w-full bg-white flex flex-col items-center justify-center box-border p-6",children:h.jsxs("div",{className:"bg-c1 w-full h-full flex flex-col items-center rounded-lg overflow-hidden",children:[h.jsx("nav",{className:"flex w-full shrink-0",children:["Login","Sign Up"].map(o=>h.jsx(NL,{meth:o,active:t,onClick:s},o))}),h.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-logo-black-on-transparent-background.png",className:"w-28 mt-12"}),h.jsx(RL,{active:t,notVerified:r})]})}),h.jsx("div",{className:"basis-7/12 bg-c1 text-xl p-4 md:block hidden",children:"The account creation feature is done! You can now create an account and access it anywhere. The home page is still being build."})]})})}function NL({meth:t,active:e,onClick:n}){const[r,i]=bn(()=>({from:{backgroundColor:t===e?"#03045e":"#caf0f8",color:t===e?"#caf0f8":"#03045e"}}),[]);return S.useEffect(()=>{i.start({to:{backgroundColor:t===e?"#03045e":"#caf0f8",color:t===e?"#caf0f8":"#03045e"}})},[e]),h.jsx(h.Fragment,{children:h.jsx(un.p,{className:"text-center basis-1/2 cursor-pointer p-2 box-border text-c9",style:r,onClick:()=>n(t),children:t},t)})}function RL({active:t,notVerified:e}){const[n,r]=bn(()=>({from:{x:"0%"}}),[]);return S.useEffect(()=>{r.start({to:{x:t==="Login"?"0%":"-100%"}})},[t]),h.jsx("div",{className:"overflow-hidden w-full h-full",children:h.jsxs(un.div,{className:"flex relative",style:n,children:[h.jsx(H4,{notVerified:e}),h.jsx(G4,{})]})})}function ji(){const t=rE();return h.jsxs("section",{className:"w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[h.jsx("h1",{className:"font-bold text-3xl",children:"Oops!"}),h.jsx("p",{children:"Something went wrong"}),h.jsx("p",{className:"font-light",children:t.statusText||t.message})]})}function PL(){return h.jsxs("div",{className:"basis-full p-4 box-border flex w-full",children:[h.jsx("nav",{className:"",children:"Nav"}),h.jsx("div",{children:"Content"})]})}const AL=b2([{path:"/",element:h.jsx(TL,{}),errorElement:h.jsx(ji,{})},{path:"/forgot",element:h.jsx(DM,{}),errorElement:h.jsx(ji,{})},{path:"/schedule",element:h.jsx(k0,{}),errorElement:h.jsx(ji,{})},{path:"/users/:uid",element:h.jsx(CL,{}),errorElement:h.jsx(ji,{}),children:[{path:"/users/:uid/settings",element:h.jsx(PL,{})}]},{path:"/email-verification-confirmation",element:h.jsx(T2,{}),errorElement:h.jsx(ji,{})},{path:"/users/:uid/schedule",element:h.jsx(k0,{user:!0}),errorElement:h.jsx(ji,{})}]);function OL(){return h.jsx("section",{className:"w-[100dvd] h-[100dvh] flex flex-col",children:h.jsx(h2,{router:AL})})}Cf.createRoot(document.getElementById("root")).render(h.jsx(_c.StrictMode,{children:h.jsx(OL,{})}));
