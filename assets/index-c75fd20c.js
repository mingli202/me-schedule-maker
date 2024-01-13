function Mk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C0={exports:{}},vc={},k0={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Lk=Symbol.for("react.portal"),Fk=Symbol.for("react.fragment"),Uk=Symbol.for("react.strict_mode"),zk=Symbol.for("react.profiler"),jk=Symbol.for("react.provider"),Vk=Symbol.for("react.context"),Wk=Symbol.for("react.forward_ref"),$k=Symbol.for("react.suspense"),Bk=Symbol.for("react.memo"),Hk=Symbol.for("react.lazy"),Hg=Symbol.iterator;function Gk(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b0=Object.assign,T0={};function Os(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||I0}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R0(){}R0.prototype=Os.prototype;function mp(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||I0}var gp=mp.prototype=new R0;gp.constructor=mp;b0(gp,Os.prototype);gp.isPureReactComponent=!0;var Gg=Array.isArray,P0=Object.prototype.hasOwnProperty,vp={current:null},x0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P0.call(e,r)&&!x0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ua,type:t,key:s,ref:o,props:i,_owner:vp.current}}function Kk(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function Yk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kg=/\/+/g;function Ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yk(""+t.key):e.toString(36)}function Hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case Lk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ed(o,0):r,Gg(i)?(n="",t!=null&&(n=t.replace(Kg,"$&/")+"/"),Hl(i,e,n,"",function(u){return u})):i!=null&&(yp(i)&&(i=Kk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ed(s,a);o+=Hl(s,e,n,l,i)}else if(l=Gk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ed(s,a++),o+=Hl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],i=0;return Hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Gl={transition:null},Qk={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:vp};se.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Os;se.Fragment=Fk;se.Profiler=zk;se.PureComponent=mp;se.StrictMode=Uk;se.Suspense=$k;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qk;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=b0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P0.call(e,l)&&!x0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ua,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Vk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jk,_context:t},t.Consumer=t};se.createElement=N0;se.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:Wk,render:t}};se.isValidElement=yp;se.lazy=function(t){return{$$typeof:Hk,_payload:{_status:-1,_result:t},_init:qk}};se.memo=function(t,e){return{$$typeof:Bk,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return vt.current.useCallback(t,e)};se.useContext=function(t){return vt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};se.useEffect=function(t,e){return vt.current.useEffect(t,e)};se.useId=function(){return vt.current.useId()};se.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return vt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};se.useRef=function(t){return vt.current.useRef(t)};se.useState=function(t){return vt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return vt.current.useTransition()};se.version="18.2.0";k0.exports=se;var k=k0.exports;const yc=S0(k),Xk=Mk({__proto__:null,default:yc},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jk=k,Zk=Symbol.for("react.element"),eI=Symbol.for("react.fragment"),tI=Object.prototype.hasOwnProperty,nI=Jk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rI={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tI.call(e,r)&&!rI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zk,type:t,key:s,ref:o,props:i,_owner:nI.current}}vc.Fragment=eI;vc.jsx=A0;vc.jsxs=A0;C0.exports=vc;var G=C0.exports,kf={},O0={exports:{}},Dt={},D0={exports:{}},M0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,F){var W=x.length;x.push(F);e:for(;0<W;){var Ee=W-1>>>1,fe=x[Ee];if(0<i(fe,F))x[Ee]=F,x[W]=fe,W=Ee;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var F=x[0],W=x.pop();if(W!==F){x[0]=W;e:for(var Ee=0,fe=x.length,Xn=fe>>>1;Ee<Xn;){var ce=2*(Ee+1)-1,Me=x[ce],st=ce+1,ft=x[st];if(0>i(Me,W))st<fe&&0>i(ft,Me)?(x[Ee]=ft,x[st]=W,Ee=st):(x[Ee]=Me,x[ce]=W,Ee=ce);else if(st<fe&&0>i(ft,W))x[Ee]=ft,x[st]=W,Ee=st;else break e}}return F}function i(x,F){var W=x.sortIndex-F.sortIndex;return W!==0?W:x.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(x){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=x)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function m(x){if(_=!1,y(x),!v)if(n(l)!==null)v=!0,ue(S);else{var F=n(u);F!==null&&ye(m,F.startTime-x)}}function S(x,F){v=!1,_&&(_=!1,p(A),A=-1),g=!0;var W=f;try{for(y(F),d=n(l);d!==null&&(!(d.expirationTime>F)||x&&!ae());){var Ee=d.callback;if(typeof Ee=="function"){d.callback=null,f=d.priorityLevel;var fe=Ee(d.expirationTime<=F);F=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),y(F)}else r(l);d=n(l)}if(d!==null)var Xn=!0;else{var ce=n(u);ce!==null&&ye(m,ce.startTime-F),Xn=!1}return Xn}finally{d=null,f=W,g=!1}}var T=!1,I=null,A=-1,M=5,L=-1;function ae(){return!(t.unstable_now()-L<M)}function ie(){if(I!==null){var x=t.unstable_now();L=x;var F=!0;try{F=I(!0,x)}finally{F?ze():(T=!1,I=null)}}else T=!1}var ze;if(typeof h=="function")ze=function(){h(ie)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,q=V.port2;V.port1.onmessage=ie,ze=function(){q.postMessage(null)}}else ze=function(){w(ie,0)};function ue(x){I=x,T||(T=!0,ze())}function ye(x,F){A=w(function(){x(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ue(S))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var W=f;f=F;try{return x()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,F){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var W=f;f=x;try{return F()}finally{f=W}},t.unstable_scheduleCallback=function(x,F,W){var Ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Ee+W:Ee):W=Ee,x){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=W+fe,x={id:c++,callback:F,priorityLevel:x,startTime:W,expirationTime:fe,sortIndex:-1},W>Ee?(x.sortIndex=W,e(u,x),n(l)===null&&x===n(u)&&(_?(p(A),A=-1):_=!0,ye(m,W-Ee))):(x.sortIndex=fe,e(l,x),v||g||(v=!0,ue(S))),x},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(x){var F=f;return function(){var W=f;f=F;try{return x.apply(this,arguments)}finally{f=W}}}})(M0);D0.exports=M0;var iI=D0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=k,Ot=iI;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F0=new Set,Yo={};function Ti(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)F0.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=Object.prototype.hasOwnProperty,sI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yg={},qg={};function oI(t){return If.call(qg,t)?!0:If.call(Yg,t)?!1:sI.test(t)?qg[t]=!0:(Yg[t]=!0,!1)}function aI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lI(t,e,n,r){if(e===null||typeof e>"u"||aI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _p=/[\-:]([a-z])/g;function wp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_p,wp);it[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_p,wp);it[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_p,wp);it[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ep(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lI(e,n,i,r)&&(n=null),r||i===null?oI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),U0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),Cp=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Rf=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),j0=Symbol.for("react.offscreen"),Qg=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=Qg&&t[Qg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Sd;function _o(t){if(Sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sd=e&&e[1]||""}return`
`+Sd+t}var Cd=!1;function kd(t,e){if(!t||Cd)return"";Cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function uI(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=kd(t.type,!1),t;case 11:return t=kd(t.type.render,!1),t;case 1:return t=kd(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Li:return"Portal";case bf:return"Profiler";case Sp:return"StrictMode";case Tf:return"Suspense";case Rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z0:return(t.displayName||"Context")+".Consumer";case U0:return(t._context.displayName||"Context")+".Provider";case Cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kp:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function cI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===Sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dI(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=dI(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=V0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $0(t,e){e=e.checked,e!=null&&Ep(t,"checked",e,!1)}function Nf(t,e){$0(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Af(t,e.type,n):e.hasOwnProperty("defaultValue")&&Af(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Af(t,e,n){(e!=="number"||fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(wo(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function B0(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,G0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fI=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){fI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function Y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=K0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hI=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(hI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uf=null,ns=null,rs=null;function tv(t){if(t=Va(t)){if(typeof Uf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Cc(e),Uf(t.stateNode,t.type,e))}}function q0(t){ns?rs?rs.push(t):rs=[t]:ns=t}function Q0(){if(ns){var t=ns,e=rs;if(rs=ns=null,tv(t),e)for(t=0;t<e.length;t++)tv(e[t])}}function X0(t,e){return t(e)}function J0(){}var Id=!1;function Z0(t,e,n){if(Id)return t(e,n);Id=!0;try{return X0(t,e,n)}finally{Id=!1,(ns!==null||rs!==null)&&(J0(),Q0())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var zf=!1;if(Un)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){zf=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{zf=!1}function pI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ro=!1,hu=null,pu=!1,jf=null,mI={onError:function(t){Ro=!0,hu=t}};function gI(t,e,n,r,i,s,o,a,l){Ro=!1,hu=null,pI.apply(mI,arguments)}function vI(t,e,n,r,i,s,o,a,l){if(gI.apply(this,arguments),Ro){if(Ro){var u=hu;Ro=!1,hu=null}else throw Error(P(198));pu||(pu=!0,jf=u)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if(Ri(t)!==t)throw Error(P(188))}function yI(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nv(i),t;if(s===r)return nv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function t1(t){return t=yI(t),t!==null?n1(t):null}function n1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n1(t);if(e!==null)return e;t=t.sibling}return null}var r1=Ot.unstable_scheduleCallback,rv=Ot.unstable_cancelCallback,_I=Ot.unstable_shouldYield,wI=Ot.unstable_requestPaint,Ue=Ot.unstable_now,EI=Ot.unstable_getCurrentPriorityLevel,bp=Ot.unstable_ImmediatePriority,i1=Ot.unstable_UserBlockingPriority,mu=Ot.unstable_NormalPriority,SI=Ot.unstable_LowPriority,s1=Ot.unstable_IdlePriority,_c=null,gn=null;function CI(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:bI,kI=Math.log,II=Math.LN2;function bI(t){return t>>>=0,t===0?32:31-(kI(t)/II|0)|0}var gl=64,vl=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Eo(a):(s&=o,s!==0&&(r=Eo(s)))}else o=n&~i,o!==0?r=Eo(o):s!==0&&(r=Eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function TI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o1(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function PI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function a1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l1,Rp,u1,c1,d1,Wf=!1,yl=[],vr=null,yr=null,_r=null,Xo=new Map,Jo=new Map,or=[],xI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iv(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Va(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NI(t,e,n,r,i){switch(e){case"focusin":return vr=to(vr,t,e,n,r,i),!0;case"dragenter":return yr=to(yr,t,e,n,r,i),!0;case"mouseover":return _r=to(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xo.set(s,to(Xo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Jo.set(s,to(Jo.get(s)||null,t,e,n,r,i)),!0}return!1}function f1(t){var e=Xr(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=e1(n),e!==null){t.blockedOn=e,d1(t.priority,function(){u1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=Va(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function sv(t,e,n){Kl(t)&&n.delete(e)}function AI(){Wf=!1,vr!==null&&Kl(vr)&&(vr=null),yr!==null&&Kl(yr)&&(yr=null),_r!==null&&Kl(_r)&&(_r=null),Xo.forEach(sv),Jo.forEach(sv)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,AI)))}function Zo(t){function e(i){return no(i,t)}if(0<yl.length){no(yl[0],t);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&no(vr,t),yr!==null&&no(yr,t),_r!==null&&no(_r,t),Xo.forEach(e),Jo.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)f1(n),n.blockedOn===null&&or.shift()}var is=Kn.ReactCurrentBatchConfig,vu=!0;function OI(t,e,n,r){var i=de,s=is.transition;is.transition=null;try{de=1,Pp(t,e,n,r)}finally{de=i,is.transition=s}}function DI(t,e,n,r){var i=de,s=is.transition;is.transition=null;try{de=4,Pp(t,e,n,r)}finally{de=i,is.transition=s}}function Pp(t,e,n,r){if(vu){var i=$f(t,e,n,r);if(i===null)Ld(t,e,r,yu,n),iv(t,r);else if(NI(i,t,e,n,r))r.stopPropagation();else if(iv(t,r),e&4&&-1<xI.indexOf(t)){for(;i!==null;){var s=Va(i);if(s!==null&&l1(s),s=$f(t,e,n,r),s===null&&Ld(t,e,r,yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ld(t,e,r,null,n)}}var yu=null;function $f(t,e,n,r){if(yu=null,t=Ip(r),t=Xr(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function h1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EI()){case bp:return 1;case i1:return 4;case mu:case SI:return 16;case s1:return 536870912;default:return 16}default:return 16}}var fr=null,xp=null,Yl=null;function p1(){if(Yl)return Yl;var t,e=xp,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yl=i.slice(t,1<r?1-r:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function ov(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:ov,this.isPropagationStopped=ov,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=Mt(Ds),ja=Ne({},Ds,{view:0,detail:0}),MI=Mt(ja),Td,Rd,ro,wc=Ne({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Td=t.screenX-ro.screenX,Rd=t.screenY-ro.screenY):Rd=Td=0,ro=t),Td)},movementY:function(t){return"movementY"in t?t.movementY:Rd}}),av=Mt(wc),LI=Ne({},wc,{dataTransfer:0}),FI=Mt(LI),UI=Ne({},ja,{relatedTarget:0}),Pd=Mt(UI),zI=Ne({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),jI=Mt(zI),VI=Ne({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WI=Mt(VI),$I=Ne({},Ds,{data:0}),lv=Mt($I),BI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GI[t])?!!e[t]:!1}function Ap(){return KI}var YI=Ne({},ja,{key:function(t){if(t.key){var e=BI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qI=Mt(YI),QI=Ne({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=Mt(QI),XI=Ne({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),JI=Mt(XI),ZI=Ne({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),eb=Mt(ZI),tb=Ne({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=Mt(tb),rb=[9,13,27,32],Op=Un&&"CompositionEvent"in window,Po=null;Un&&"documentMode"in document&&(Po=document.documentMode);var ib=Un&&"TextEvent"in window&&!Po,m1=Un&&(!Op||Po&&8<Po&&11>=Po),cv=String.fromCharCode(32),dv=!1;function g1(t,e){switch(t){case"keyup":return rb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function sb(t,e){switch(t){case"compositionend":return v1(e);case"keypress":return e.which!==32?null:(dv=!0,cv);case"textInput":return t=e.data,t===cv&&dv?null:t;default:return null}}function ob(t,e){if(Ui)return t==="compositionend"||!Op&&g1(t,e)?(t=p1(),Yl=xp=fr=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m1&&e.locale!=="ko"?null:e.data;default:return null}}var ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ab[t.type]:e==="textarea"}function y1(t,e,n,r){q0(r),e=_u(e,"onChange"),0<e.length&&(n=new Np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,ea=null;function lb(t){P1(t,0)}function Ec(t){var e=Vi(t);if(W0(e))return t}function ub(t,e){if(t==="change")return e}var _1=!1;if(Un){var xd;if(Un){var Nd="oninput"in document;if(!Nd){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),Nd=typeof hv.oninput=="function"}xd=Nd}else xd=!1;_1=xd&&(!document.documentMode||9<document.documentMode)}function pv(){xo&&(xo.detachEvent("onpropertychange",w1),ea=xo=null)}function w1(t){if(t.propertyName==="value"&&Ec(ea)){var e=[];y1(e,ea,t,Ip(t)),Z0(lb,e)}}function cb(t,e,n){t==="focusin"?(pv(),xo=e,ea=n,xo.attachEvent("onpropertychange",w1)):t==="focusout"&&pv()}function db(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(ea)}function fb(t,e){if(t==="click")return Ec(e)}function hb(t,e){if(t==="input"||t==="change")return Ec(e)}function pb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:pb;function ta(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!If.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gv(t,e){var n=mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function E1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S1(){for(var t=window,e=fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fu(t.document)}return e}function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mb(t){var e=S1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E1(n.ownerDocument.documentElement,n)){if(r!==null&&Dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gv(n,s);var o=gv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gb=Un&&"documentMode"in document&&11>=document.documentMode,zi=null,Bf=null,No=null,Hf=!1;function vv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||zi==null||zi!==fu(r)||(r=zi,"selectionStart"in r&&Dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&ta(No,r)||(No=r,r=_u(Bf,"onSelect"),0<r.length&&(e=new Np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Ad={},C1={};Un&&(C1=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Sc(t){if(Ad[t])return Ad[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C1)return Ad[t]=e[n];return t}var k1=Sc("animationend"),I1=Sc("animationiteration"),b1=Sc("animationstart"),T1=Sc("transitionend"),R1=new Map,yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){R1.set(t,e),Ti(e,[t])}for(var Od=0;Od<yv.length;Od++){var Dd=yv[Od],vb=Dd.toLowerCase(),yb=Dd[0].toUpperCase()+Dd.slice(1);zr(vb,"on"+yb)}zr(k1,"onAnimationEnd");zr(I1,"onAnimationIteration");zr(b1,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(T1,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function _v(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vI(r,e,void 0,t),t.currentTarget=null}function P1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_v(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_v(i,a,u),s=l}}}if(pu)throw t=jf,pu=!1,jf=null,t}function Se(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var r=t+"__bubble";n.has(r)||(x1(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),x1(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[El]){t[El]=!0,F0.forEach(function(n){n!=="selectionchange"&&(_b.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Md("selectionchange",!1,e))}}function x1(t,e,n,r){switch(h1(e)){case 1:var i=OI;break;case 4:i=DI;break;default:i=Pp}n=i.bind(null,e,n,t),i=void 0,!zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ld(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Z0(function(){var u=s,c=Ip(n),d=[];e:{var f=R1.get(t);if(f!==void 0){var g=Np,v=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":g=qI;break;case"focusin":v="focus",g=Pd;break;case"focusout":v="blur",g=Pd;break;case"beforeblur":case"afterblur":g=Pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=FI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=JI;break;case k1:case I1:case b1:g=jI;break;case T1:g=eb;break;case"scroll":g=MI;break;case"wheel":g=nb;break;case"copy":case"cut":case"paste":g=WI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uv}var _=(e&4)!==0,w=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var m=y.stateNode;if(y.tag===5&&m!==null&&(y=m,p!==null&&(m=Qo(h,p),m!=null&&_.push(ra(h,m,y)))),w)break;h=h.return}0<_.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Ff&&(v=n.relatedTarget||n.fromElement)&&(Xr(v)||v[zn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Xr(v):null,v!==null&&(w=Ri(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=av,m="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=uv,m="onPointerLeave",p="onPointerEnter",h="pointer"),w=g==null?f:Vi(g),y=v==null?f:Vi(v),f=new _(m,h+"leave",g,n,c),f.target=w,f.relatedTarget=y,m=null,Xr(c)===u&&(_=new _(p,h+"enter",v,n,c),_.target=y,_.relatedTarget=w,m=_),w=m,g&&v)t:{for(_=g,p=v,h=0,y=_;y;y=Ni(y))h++;for(y=0,m=p;m;m=Ni(m))y++;for(;0<h-y;)_=Ni(_),h--;for(;0<y-h;)p=Ni(p),y--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Ni(_),p=Ni(p)}_=null}else _=null;g!==null&&wv(d,f,g,_,!1),v!==null&&w!==null&&wv(d,w,v,_,!0)}}e:{if(f=u?Vi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=ub;else if(fv(f))if(_1)S=hb;else{S=db;var T=cb}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=fb);if(S&&(S=S(t,u))){y1(d,S,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Af(f,"number",f.value)}switch(T=u?Vi(u):window,t){case"focusin":(fv(T)||T.contentEditable==="true")&&(zi=T,Bf=u,No=null);break;case"focusout":No=Bf=zi=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,vv(d,n,c);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":vv(d,n,c)}var I;if(Op)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ui?g1(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(m1&&n.locale!=="ko"&&(Ui||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ui&&(I=p1()):(fr=c,xp="value"in fr?fr.value:fr.textContent,Ui=!0)),T=_u(u,A),0<T.length&&(A=new lv(A,t,null,n,c),d.push({event:A,listeners:T}),I?A.data=I:(I=v1(n),I!==null&&(A.data=I)))),(I=ib?sb(t,n):ob(t,n))&&(u=_u(u,"onBeforeInput"),0<u.length&&(c=new lv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}P1(d,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qo(t,n),s!=null&&r.unshift(ra(t,s,i)),s=Qo(t,e),s!=null&&r.push(ra(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qo(n,s),l!=null&&o.unshift(ra(n,l,a))):i||(l=Qo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wb=/\r\n?/g,Eb=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(wb,`
`).replace(Eb,"")}function Sl(t,e,n){if(e=Ev(e),Ev(t)!==e&&n)throw Error(P(425))}function wu(){}var Gf=null,Kf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,Sb=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,Cb=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(t){return Sv.resolve(null).then(t).catch(kb)}:qf;function kb(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ms,ia="__reactProps$"+Ms,zn="__reactContainer$"+Ms,Qf="__reactEvents$"+Ms,Ib="__reactListeners$"+Ms,bb="__reactHandles$"+Ms;function Xr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cv(t);t!==null;){if(n=t[pn])return n;t=Cv(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[pn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Cc(t){return t[ia]||null}var Xf=[],Wi=-1;function jr(t){return{current:t}}function Ie(t){0>Wi||(t.current=Xf[Wi],Xf[Wi]=null,Wi--)}function we(t,e){Wi++,Xf[Wi]=t.current,t.current=e}var Ar={},ct=jr(Ar),kt=jr(!1),ci=Ar;function vs(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Eu(){Ie(kt),Ie(ct)}function kv(t,e,n){if(ct.current!==Ar)throw Error(P(168));we(ct,e),we(kt,n)}function N1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,cI(t)||"Unknown",i));return Ne({},n,r)}function Su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ci=ct.current,we(ct,t),we(kt,kt.current),!0}function Iv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=N1(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,Ie(kt),Ie(ct),we(ct,t)):Ie(kt),we(kt,n)}var Pn=null,kc=!1,Ud=!1;function A1(t){Pn===null?Pn=[t]:Pn.push(t)}function Tb(t){kc=!0,A1(t)}function Vr(){if(!Ud&&Pn!==null){Ud=!0;var t=0,e=de;try{var n=Pn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,kc=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),r1(bp,Vr),i}finally{de=e,Ud=!1}}return null}var $i=[],Bi=0,Cu=null,ku=0,Ut=[],zt=0,di=null,xn=1,Nn="";function Kr(t,e){$i[Bi++]=ku,$i[Bi++]=Cu,Cu=t,ku=e}function O1(t,e,n){Ut[zt++]=xn,Ut[zt++]=Nn,Ut[zt++]=di,di=t;var r=xn;t=Nn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-sn(e)+i|n<<i|r,Nn=s+t}else xn=1<<s|n<<i|r,Nn=t}function Mp(t){t.return!==null&&(Kr(t,1),O1(t,1,0))}function Lp(t){for(;t===Cu;)Cu=$i[--Bi],$i[Bi]=null,ku=$i[--Bi],$i[Bi]=null;for(;t===di;)di=Ut[--zt],Ut[zt]=null,Nn=Ut[--zt],Ut[zt]=null,xn=Ut[--zt],Ut[zt]=null}var At=null,Nt=null,Re=!1,Xt=null;function D1(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,Nt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:xn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,Nt=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Re){var e=Nt;if(e){var n=e;if(!bv(t,e)){if(Jf(t))throw Error(P(418));e=wr(n.nextSibling);var r=At;e&&bv(t,e)?D1(r,n):(t.flags=t.flags&-4097|2,Re=!1,At=t)}}else{if(Jf(t))throw Error(P(418));t.flags=t.flags&-4097|2,Re=!1,At=t}}}function Tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Cl(t){if(t!==At)return!1;if(!Re)return Tv(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Nt)){if(Jf(t))throw M1(),Error(P(418));for(;e;)D1(t,e),e=wr(e.nextSibling)}if(Tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=At?wr(t.stateNode.nextSibling):null;return!0}function M1(){for(var t=Nt;t;)t=wr(t.nextSibling)}function ys(){Nt=At=null,Re=!1}function Fp(t){Xt===null?Xt=[t]:Xt.push(t)}var Rb=Kn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Iu=jr(null),bu=null,Hi=null,Up=null;function zp(){Up=Hi=bu=null}function jp(t){var e=Iu.current;Ie(Iu),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){bu=t,Up=Hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Up!==t)if(t={context:t,memoizedValue:e,next:null},Hi===null){if(bu===null)throw Error(P(308));Hi=t,bu.dependencies={lanes:0,firstContext:t}}else Hi=Hi.next=t;return e}var Jr=null;function Vp(t){Jr===null?Jr=[t]:Jr.push(t)}function L1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vp(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Vp(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}function Rv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=Ne({},d,f);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=d}}function Pv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var U1=new L0.Component().refs;function th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Cr(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(on(e,t,i,r),Ql(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Cr(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(on(e,t,i,r),Ql(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Cr(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(on(e,t,r,n),Ql(e,t,r))}};function xv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,r)||!ta(i,s):!0}function z1(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=It(e)?ci:ct.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=U1,Wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=It(e)?ci:ct.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ic.enqueueReplaceState(i,i.state,null),Tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===U1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Av(t){var e=t._init;return e(t._payload)}function j1(t){function e(p,h){if(t){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=kr(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,y,m){return h===null||h.tag!==6?(h=Hd(y,p.mode,m),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,m){var S=y.type;return S===Fi?c(p,h,y.props.children,m,y.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ir&&Av(S)===h.type)?(m=i(h,y.props),m.ref=io(p,h,y),m.return=p,m):(m=nu(y.type,y.key,y.props,null,p.mode,m),m.ref=io(p,h,y),m.return=p,m)}function u(p,h,y,m){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Gd(y,p.mode,m),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,m,S){return h===null||h.tag!==7?(h=ai(y,p.mode,m,S),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Hd(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hl:return y=nu(h.type,h.key,h.props,null,p.mode,y),y.ref=io(p,null,h),y.return=p,y;case Li:return h=Gd(h,p.mode,y),h.return=p,h;case ir:var m=h._init;return d(p,m(h._payload),y)}if(wo(h)||Zs(h))return h=ai(h,p.mode,y,null),h.return=p,h;kl(p,h)}return null}function f(p,h,y,m){var S=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(p,h,""+y,m);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:return y.key===S?l(p,h,y,m):null;case Li:return y.key===S?u(p,h,y,m):null;case ir:return S=y._init,f(p,h,S(y._payload),m)}if(wo(y)||Zs(y))return S!==null?null:c(p,h,y,m,null);kl(p,y)}return null}function g(p,h,y,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return p=p.get(y)||null,a(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hl:return p=p.get(m.key===null?y:m.key)||null,l(h,p,m,S);case Li:return p=p.get(m.key===null?y:m.key)||null,u(h,p,m,S);case ir:var T=m._init;return g(p,h,y,T(m._payload),S)}if(wo(m)||Zs(m))return p=p.get(y)||null,c(h,p,m,S,null);kl(h,m)}return null}function v(p,h,y,m){for(var S=null,T=null,I=h,A=h=0,M=null;I!==null&&A<y.length;A++){I.index>A?(M=I,I=null):M=I.sibling;var L=f(p,I,y[A],m);if(L===null){I===null&&(I=M);break}t&&I&&L.alternate===null&&e(p,I),h=s(L,h,A),T===null?S=L:T.sibling=L,T=L,I=M}if(A===y.length)return n(p,I),Re&&Kr(p,A),S;if(I===null){for(;A<y.length;A++)I=d(p,y[A],m),I!==null&&(h=s(I,h,A),T===null?S=I:T.sibling=I,T=I);return Re&&Kr(p,A),S}for(I=r(p,I);A<y.length;A++)M=g(I,p,A,y[A],m),M!==null&&(t&&M.alternate!==null&&I.delete(M.key===null?A:M.key),h=s(M,h,A),T===null?S=M:T.sibling=M,T=M);return t&&I.forEach(function(ae){return e(p,ae)}),Re&&Kr(p,A),S}function _(p,h,y,m){var S=Zs(y);if(typeof S!="function")throw Error(P(150));if(y=S.call(y),y==null)throw Error(P(151));for(var T=S=null,I=h,A=h=0,M=null,L=y.next();I!==null&&!L.done;A++,L=y.next()){I.index>A?(M=I,I=null):M=I.sibling;var ae=f(p,I,L.value,m);if(ae===null){I===null&&(I=M);break}t&&I&&ae.alternate===null&&e(p,I),h=s(ae,h,A),T===null?S=ae:T.sibling=ae,T=ae,I=M}if(L.done)return n(p,I),Re&&Kr(p,A),S;if(I===null){for(;!L.done;A++,L=y.next())L=d(p,L.value,m),L!==null&&(h=s(L,h,A),T===null?S=L:T.sibling=L,T=L);return Re&&Kr(p,A),S}for(I=r(p,I);!L.done;A++,L=y.next())L=g(I,p,A,L.value,m),L!==null&&(t&&L.alternate!==null&&I.delete(L.key===null?A:L.key),h=s(L,h,A),T===null?S=L:T.sibling=L,T=L);return t&&I.forEach(function(ie){return e(p,ie)}),Re&&Kr(p,A),S}function w(p,h,y,m){if(typeof y=="object"&&y!==null&&y.type===Fi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:e:{for(var S=y.key,T=h;T!==null;){if(T.key===S){if(S=y.type,S===Fi){if(T.tag===7){n(p,T.sibling),h=i(T,y.props.children),h.return=p,p=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ir&&Av(S)===T.type){n(p,T.sibling),h=i(T,y.props),h.ref=io(p,T,y),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}y.type===Fi?(h=ai(y.props.children,p.mode,m,y.key),h.return=p,p=h):(m=nu(y.type,y.key,y.props,null,p.mode,m),m.ref=io(p,h,y),m.return=p,p=m)}return o(p);case Li:e:{for(T=y.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Gd(y,p.mode,m),h.return=p,p=h}return o(p);case ir:return T=y._init,w(p,h,T(y._payload),m)}if(wo(y))return v(p,h,y,m);if(Zs(y))return _(p,h,y,m);kl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=Hd(y,p.mode,m),h.return=p,p=h),o(p)):n(p,h)}return w}var _s=j1(!0),V1=j1(!1),Wa={},vn=jr(Wa),sa=jr(Wa),oa=jr(Wa);function Zr(t){if(t===Wa)throw Error(P(174));return t}function $p(t,e){switch(we(oa,e),we(sa,t),we(vn,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}Ie(vn),we(vn,e)}function ws(){Ie(vn),Ie(sa),Ie(oa)}function W1(t){Zr(oa.current);var e=Zr(vn.current),n=Df(e,t.type);e!==n&&(we(sa,t),we(vn,n))}function Bp(t){sa.current===t&&(Ie(vn),Ie(sa))}var Pe=jr(0);function Ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zd=[];function Hp(){for(var t=0;t<zd.length;t++)zd[t]._workInProgressVersionPrimary=null;zd.length=0}var Xl=Kn.ReactCurrentDispatcher,jd=Kn.ReactCurrentBatchConfig,fi=0,xe=null,$e=null,Xe=null,Pu=!1,Ao=!1,aa=0,Pb=0;function ot(){throw Error(P(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Kp(t,e,n,r,i,s){if(fi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?Ob:Db,t=n(r,i),Ao){s=0;do{if(Ao=!1,aa=0,25<=s)throw Error(P(301));s+=1,Xe=$e=null,e.updateQueue=null,Xl.current=Mb,t=n(r,i)}while(Ao)}if(Xl.current=xu,e=$e!==null&&$e.next!==null,fi=0,Xe=$e=xe=null,Pu=!1,e)throw Error(P(300));return t}function Yp(){var t=aa!==0;return aa=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?xe.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Ht(){if($e===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Xe===null?xe.memoizedState:Xe.next;if(e!==null)Xe=e,$e=t;else{if(t===null)throw Error(P(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Xe===null?xe.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function la(t,e){return typeof e=="function"?e(t):e}function Vd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,xe.lanes|=c,hi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $1(){}function B1(t,e){var n=xe,r=Ht(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,qp(K1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,ua(9,G1.bind(null,n,r,i,e),void 0,null),et===null)throw Error(P(349));fi&30||H1(n,e,i)}return i}function H1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G1(t,e,n,r){e.value=n,e.getSnapshot=r,Y1(e)&&q1(t)}function K1(t,e,n){return n(function(){Y1(e)&&q1(t)})}function Y1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function q1(t){var e=jn(t,1);e!==null&&on(e,t,1,-1)}function Ov(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=Ab.bind(null,xe,t),[e.memoizedState,t]}function ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q1(){return Ht().memoizedState}function Jl(t,e,n,r){var i=fn();xe.flags|=t,i.memoizedState=ua(1|e,n,void 0,r===void 0?null:r)}function bc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Gp(r,o.deps)){i.memoizedState=ua(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ua(1|e,n,s,r)}function Dv(t,e){return Jl(8390656,8,t,e)}function qp(t,e){return bc(2048,8,t,e)}function X1(t,e){return bc(4,2,t,e)}function J1(t,e){return bc(4,4,t,e)}function Z1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ew(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,Z1.bind(null,e,t),n)}function Qp(){}function tw(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nw(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rw(t,e,n){return fi&21?(ln(n,e)||(n=o1(),xe.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function xb(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{de=n,jd.transition=r}}function iw(){return Ht().memoizedState}function Nb(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sw(t))ow(e,n);else if(n=L1(t,e,n,r),n!==null){var i=gt();on(n,t,r,i),aw(n,e,r)}}function Ab(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sw(t))ow(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,Vp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=L1(t,e,i,r),n!==null&&(i=gt(),on(n,t,r,i),aw(n,e,r))}}function sw(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function ow(t,e){Ao=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}var xu={readContext:Bt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Ob={readContext:Bt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Dv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,Z1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nb.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Ov,useDebugValue:Qp,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Ov(!1),e=t[0];return t=xb.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=fn();if(Re){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),et===null)throw Error(P(349));fi&30||H1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dv(K1.bind(null,r,s,t),[t]),r.flags|=2048,ua(9,G1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=et.identifierPrefix;if(Re){var n=Nn,r=xn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Db={readContext:Bt,useCallback:tw,useContext:Bt,useEffect:qp,useImperativeHandle:ew,useInsertionEffect:X1,useLayoutEffect:J1,useMemo:nw,useReducer:Vd,useRef:Q1,useState:function(){return Vd(la)},useDebugValue:Qp,useDeferredValue:function(t){var e=Ht();return rw(e,$e.memoizedState,t)},useTransition:function(){var t=Vd(la)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:$1,useSyncExternalStore:B1,useId:iw,unstable_isNewReconciler:!1},Mb={readContext:Bt,useCallback:tw,useContext:Bt,useEffect:qp,useImperativeHandle:ew,useInsertionEffect:X1,useLayoutEffect:J1,useMemo:nw,useReducer:Wd,useRef:Q1,useState:function(){return Wd(la)},useDebugValue:Qp,useDeferredValue:function(t){var e=Ht();return $e===null?e.memoizedState=t:rw(e,$e.memoizedState,t)},useTransition:function(){var t=Wd(la)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:$1,useSyncExternalStore:B1,useId:iw,unstable_isNewReconciler:!1};function Es(t,e){try{var n="",r=e;do n+=uI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Lb=typeof WeakMap=="function"?WeakMap:Map;function lw(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Au||(Au=!0,hh=r),rh(t,e)},n}function uw(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Lb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Qb.bind(null,t,e,n),e.then(t,t))}function Lv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var Fb=Kn.ReactCurrentOwner,St=!1;function ht(t,e,n,r){e.child=t===null?V1(e,null,n,r):_s(e,t.child,n,r)}function Uv(t,e,n,r,i){n=n.render;var s=e.ref;return ss(e,i),r=Kp(t,e,n,r,s,i),n=Yp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Re&&n&&Mp(e),e.flags|=1,ht(t,e,r,i),e.child)}function zv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cw(t,e,s,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ta(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return ih(t,e,n,r,i)}function dw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ki,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ki,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Ki,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Ki,xt),xt|=r;return ht(t,e,i,n),e.child}function fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,i){var s=It(n)?ci:ct.current;return s=vs(e,s),ss(e,i),n=Kp(t,e,n,r,s,i),r=Yp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Re&&r&&Mp(e),e.flags|=1,ht(t,e,n,i),e.child)}function jv(t,e,n,r,i){if(It(n)){var s=!0;Su(e)}else s=!1;if(ss(e,i),e.stateNode===null)Zl(t,e),z1(e,n,r),nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=It(n)?ci:ct.current,u=vs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Nv(e,o,r,u),sr=!1;var f=e.memoizedState;o.state=f,Tu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||kt.current||sr?(typeof c=="function"&&(th(e,n,c,r),l=e.memoizedState),(a=sr||xv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,F1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=It(n)?ci:ct.current,l=vs(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Nv(e,o,r,l),sr=!1,f=e.memoizedState,o.state=f,Tu(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||kt.current||sr?(typeof g=="function"&&(th(e,n,g,r),v=e.memoizedState),(u=sr||xv(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,s,i)}function sh(t,e,n,r,i,s){fw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Iv(e,n,!1),Vn(t,e,s);r=e.stateNode,Fb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&Iv(e,n,!0),e.child}function hw(t){var e=t.stateNode;e.pendingContext?kv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kv(t,e.context,!1),$p(t,e.containerInfo)}function Vv(t,e,n,r,i){return ys(),Fp(i),e.flags|=256,ht(t,e,n,r),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function pw(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Pe,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pc(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):Xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ub(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xp(t,e){return e=Pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Il(t,e,n,r){return r!==null&&Fp(r),_s(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ub(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(P(422))),Il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pc({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return Il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=$d(s,r,void 0),Il(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),on(r,t,i,-1))}return rm(),r=$d(Error(P(421))),Il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Xb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=wr(i.nextSibling),At=e,Re=!0,Xt=null,t!==null&&(Ut[zt++]=xn,Ut[zt++]=Nn,Ut[zt++]=di,xn=t.id,Nn=t.overflow,di=e),e=Xp(e,r.children),e.flags|=4096,e)}function Wv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eh(t.return,e,n)}function Bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wv(t,n,e);else if(t.tag===19)Wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zb(t,e,n){switch(e.tag){case 3:hw(e),ys();break;case 5:W1(e);break;case 1:It(e.type)&&Su(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?pw(t,e,n):(we(Pe,Pe.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);we(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,dw(t,e,n)}return Vn(t,e,n)}var gw,lh,vw,yw;gw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(vn.current);var s=null;switch(n){case"input":i=xf(t,i),r=xf(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wu)}Mf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yw=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jb(t,e,n){var r=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return It(e.type)&&Eu(),at(e),null;case 3:return r=e.stateNode,ws(),Ie(kt),Ie(ct),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(gh(Xt),Xt=null))),lh(t,e),at(e),null;case 5:Bp(e);var i=Zr(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return at(e),null}if(t=Zr(vn.current),Cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[ia]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<So.length;i++)Se(So[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Xg(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Zg(r,s),Se("invalid",r)}Mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(r.textContent,a,t),i=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":pl(r),Jg(r,s,!0);break;case"textarea":pl(r),ev(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[ia]=r,gw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<So.length;i++)Se(So[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Xg(t,r),i=xf(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Zg(t,r),i=Of(t,r),Se("invalid",t);break;default:i=r}Mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Y0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&Ep(t,s,l,o))}switch(n){case"input":pl(t),Jg(t,r,!1);break;case"textarea":pl(t),ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)yw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Zr(oa.current),Zr(vn.current),Cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return at(e),null;case 13:if(Ie(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Nt!==null&&e.mode&1&&!(e.flags&128))M1(),ys(),e.flags|=98560,s=!1;else if(s=Cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[pn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else Xt!==null&&(gh(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ge===0&&(Ge=3):rm())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return ws(),lh(t,e),t===null&&na(e.stateNode.containerInfo),at(e),null;case 10:return jp(e.type._context),at(e),null;case 17:return It(e.type)&&Eu(),at(e),null;case 19:if(Ie(Pe),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ru(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Ss&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return at(e),null}else 2*Ue()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,we(Pe,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return nm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function Vb(t,e){switch(Lp(e),e.tag){case 1:return It(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),Ie(kt),Ie(ct),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(Ie(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Pe),null;case 4:return ws(),null;case 10:return jp(e.type._context),null;case 22:case 23:return nm(),null;case 24:return null;default:return null}}var bl=!1,lt=!1,Wb=typeof WeakSet=="function"?WeakSet:Set,D=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function uh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var $v=!1;function $b(t,e){if(Gf=vu,t=S1(),Dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},vu=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yt(e.type,_),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(m){Ae(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=$v,$v=!1,v}function Oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uh(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _w(t){var e=t.alternate;e!==null&&(t.alternate=null,_w(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[ia],delete e[Qf],delete e[Ib],delete e[bb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ww(t){return t.tag===5||t.tag===3||t.tag===4}function Bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var nt=null,qt=!1;function er(t,e,n){for(n=n.child;n!==null;)Ew(t,e,n),n=n.sibling}function Ew(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:lt||Gi(n,e);case 6:var r=nt,i=qt;nt=null,er(t,e,n),nt=r,qt=i,nt!==null&&(qt?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(qt?(t=nt,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),Zo(t)):Fd(nt,n.stateNode));break;case 4:r=nt,i=qt,nt=n.stateNode.containerInfo,qt=!0,er(t,e,n),nt=r,qt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!lt&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,er(t,e,n),lt=r):er(t,e,n);break;default:er(t,e,n)}}function Hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wb),e.forEach(function(r){var i=Jb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,qt=!1;break e;case 3:nt=a.stateNode.containerInfo,qt=!0;break e;case 4:nt=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(nt===null)throw Error(P(160));Ew(s,o,i),nt=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sw(e,t),e=e.sibling}function Sw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),dn(t),r&4){try{Oo(3,t,t.return),Tc(3,t)}catch(_){Ae(t,t.return,_)}try{Oo(5,t,t.return)}catch(_){Ae(t,t.return,_)}}break;case 1:Kt(e,t),dn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(Kt(e,t),dn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(_){Ae(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$0(i,s),Lf(a,o);var u=Lf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Y0(i,d):c==="dangerouslySetInnerHTML"?G0(i,d):c==="children"?qo(i,d):Ep(i,c,d,u)}switch(a){case"input":Nf(i,s);break;case"textarea":B0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ts(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ts(i,!!s.multiple,s.defaultValue,!0):ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[ia]=s}catch(_){Ae(t,t.return,_)}}break;case 6:if(Kt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ae(t,t.return,_)}}break;case 3:if(Kt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(_){Ae(t,t.return,_)}break;case 4:Kt(e,t),dn(t);break;case 13:Kt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(em=Ue())),r&4&&Hv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,Kt(e,t),lt=u):Kt(e,t),dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(f=D,g=f.child,f.tag){case 0:case 11:case 14:case 15:Oo(4,f,f.return);break;case 1:Gi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ae(r,n,_)}}break;case 5:Gi(f,f.return);break;case 22:if(f.memoizedState!==null){Kv(d);continue}}g!==null?(g.return=f,D=g):Kv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=K0("display",o))}catch(_){Ae(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ae(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),dn(t),r&4&&Hv(t);break;case 21:break;default:Kt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ww(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=Bv(t);fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bv(t);dh(t,a,o);break;default:throw Error(P(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bb(t,e,n){D=t,Cw(t)}function Cw(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=bl;var u=lt;if(bl=o,(lt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Yv(i):l!==null?(l.return=o,D=l):Yv(i);for(;s!==null;)D=s,Cw(s),s=s.sibling;D=i,bl=a,lt=u}Gv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Gv(t)}}function Gv(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}lt||e.flags&512&&ch(e)}catch(f){Ae(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Kv(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Yv(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{ch(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var Hb=Math.ceil,Nu=Kn.ReactCurrentDispatcher,Jp=Kn.ReactCurrentOwner,$t=Kn.ReactCurrentBatchConfig,oe=0,et=null,Ve=null,rt=0,xt=0,Ki=jr(0),Ge=0,ca=null,hi=0,Rc=0,Zp=0,Do=null,Et=null,em=0,Ss=1/0,Tn=null,Au=!1,hh=null,Sr=null,Tl=!1,hr=null,Ou=0,Mo=0,ph=null,eu=-1,tu=0;function gt(){return oe&6?Ue():eu!==-1?eu:eu=Ue()}function Cr(t){return t.mode&1?oe&2&&rt!==0?rt&-rt:Rb.transition!==null?(tu===0&&(tu=o1()),tu):(t=de,t!==0||(t=window.event,t=t===void 0?16:h1(t.type)),t):1}function on(t,e,n,r){if(50<Mo)throw Mo=0,ph=null,Error(P(185));za(t,n,r),(!(oe&2)||t!==et)&&(t===et&&(!(oe&2)&&(Rc|=n),Ge===4&&ar(t,rt)),bt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ss=Ue()+500,kc&&Vr()))}function bt(t,e){var n=t.callbackNode;RI(t,e);var r=gu(t,t===et?rt:0);if(r===0)n!==null&&rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rv(n),e===1)t.tag===0?Tb(qv.bind(null,t)):A1(qv.bind(null,t)),Cb(function(){!(oe&6)&&Vr()}),n=null;else{switch(a1(r)){case 1:n=bp;break;case 4:n=i1;break;case 16:n=mu;break;case 536870912:n=s1;break;default:n=mu}n=Nw(n,kw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kw(t,e){if(eu=-1,tu=0,oe&6)throw Error(P(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var r=gu(t,t===et?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Du(t,r);else{e=r;var i=oe;oe|=2;var s=bw();(et!==t||rt!==e)&&(Tn=null,Ss=Ue()+500,oi(t,e));do try{Yb();break}catch(a){Iw(t,a)}while(1);zp(),Nu.current=s,oe=i,Ve!==null?e=0:(et=null,rt=0,e=Ge)}if(e!==0){if(e===2&&(i=Vf(t),i!==0&&(r=i,e=mh(t,i))),e===1)throw n=ca,oi(t,0),ar(t,r),bt(t,Ue()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!Gb(i)&&(e=Du(t,r),e===2&&(s=Vf(t),s!==0&&(r=s,e=mh(t,s))),e===1))throw n=ca,oi(t,0),ar(t,r),bt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Yr(t,Et,Tn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=em+500-Ue(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qf(Yr.bind(null,t,Et,Tn),e);break}Yr(t,Et,Tn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hb(r/1960))-r,10<r){t.timeoutHandle=qf(Yr.bind(null,t,Et,Tn),r);break}Yr(t,Et,Tn);break;case 5:Yr(t,Et,Tn);break;default:throw Error(P(329))}}}return bt(t,Ue()),t.callbackNode===n?kw.bind(null,t):null}function mh(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=Du(t,e),t!==2&&(e=Et,Et=n,e!==null&&gh(e)),t}function gh(t){Et===null?Et=t:Et.push.apply(Et,t)}function Gb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Zp,e&=~Rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function qv(t){if(oe&6)throw Error(P(327));os();var e=gu(t,0);if(!(e&1))return bt(t,Ue()),null;var n=Du(t,e);if(t.tag!==0&&n===2){var r=Vf(t);r!==0&&(e=r,n=mh(t,r))}if(n===1)throw n=ca,oi(t,0),ar(t,e),bt(t,Ue()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,Et,Tn),bt(t,Ue()),null}function tm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ss=Ue()+500,kc&&Vr())}}function pi(t){hr!==null&&hr.tag===0&&!(oe&6)&&os();var e=oe;oe|=1;var n=$t.transition,r=de;try{if($t.transition=null,de=1,t)return t()}finally{de=r,$t.transition=n,oe=e,!(oe&6)&&Vr()}}function nm(){xt=Ki.current,Ie(Ki)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sb(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eu();break;case 3:ws(),Ie(kt),Ie(ct),Hp();break;case 5:Bp(r);break;case 4:ws();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:jp(r.type._context);break;case 22:case 23:nm()}n=n.return}if(et=t,Ve=t=kr(t.current,null),rt=xt=e,Ge=0,ca=null,Zp=Rc=hi=0,Et=Do=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function Iw(t,e){do{var n=Ve;try{if(zp(),Xl.current=xu,Pu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pu=!1}if(fi=0,Xe=$e=xe=null,Ao=!1,aa=0,Jp.current=null,n===null||n.return===null){Ge=1,ca=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Lv(o);if(g!==null){g.flags&=-257,Fv(g,o,a,s,e),g.mode&1&&Mv(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Mv(s,u,e),rm();break e}l=Error(P(426))}}else if(Re&&a.mode&1){var w=Lv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Fv(w,o,a,s,e),Fp(Es(l,a));break e}}s=l=Es(l,a),Ge!==4&&(Ge=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=lw(s,l,e);Rv(s,p);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=uw(s,a,e);Rv(s,m);break e}}s=s.return}while(s!==null)}Rw(n)}catch(S){e=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function bw(){var t=Nu.current;return Nu.current=xu,t===null?xu:t}function rm(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(hi&268435455)&&!(Rc&268435455)||ar(et,rt)}function Du(t,e){var n=oe;oe|=2;var r=bw();(et!==t||rt!==e)&&(Tn=null,oi(t,e));do try{Kb();break}catch(i){Iw(t,i)}while(1);if(zp(),oe=n,Nu.current=r,Ve!==null)throw Error(P(261));return et=null,rt=0,Ge}function Kb(){for(;Ve!==null;)Tw(Ve)}function Yb(){for(;Ve!==null&&!_I();)Tw(Ve)}function Tw(t){var e=xw(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?Rw(t):Ve=e,Jp.current=null}function Rw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vb(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Ve=null;return}}else if(n=jb(n,e,xt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ge===0&&(Ge=5)}function Yr(t,e,n){var r=de,i=$t.transition;try{$t.transition=null,de=1,qb(t,e,n,r)}finally{$t.transition=i,de=r}return null}function qb(t,e,n,r){do os();while(hr!==null);if(oe&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PI(t,s),t===et&&(Ve=et=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,Nw(mu,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=de;de=1;var a=oe;oe|=4,Jp.current=null,$b(t,n),Sw(n,t),mb(Kf),vu=!!Gf,Kf=Gf=null,t.current=n,Bb(n),wI(),oe=a,de=o,$t.transition=s}else t.current=n;if(Tl&&(Tl=!1,hr=t,Ou=i),s=t.pendingLanes,s===0&&(Sr=null),CI(n.stateNode),bt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,t=hh,hh=null,t;return Ou&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===ph?Mo++:(Mo=0,ph=t):Mo=0,Vr(),null}function os(){if(hr!==null){var t=a1(Ou),e=$t.transition,n=de;try{if($t.transition=null,de=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,Ou=0,oe&6)throw Error(P(331));var i=oe;for(oe|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Oo(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var f=c.sibling,g=c.return;if(_w(c),c===u){D=null;break}if(f!==null){f.return=g,D=f;break}D=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var h=t.current;for(D=h;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=h;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(S){Ae(a,a.return,S)}if(a===o){D=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,D=m;break e}D=a.return}}if(oe=i,Vr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(_c,t)}catch{}r=!0}return r}finally{de=n,$t.transition=e}}return!1}function Qv(t,e,n){e=Es(n,e),e=lw(t,e,1),t=Er(t,e,1),e=gt(),t!==null&&(za(t,1,e),bt(t,e))}function Ae(t,e,n){if(t.tag===3)Qv(t,t,n);else for(;e!==null;){if(e.tag===3){Qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Es(n,t),t=uw(e,t,1),e=Er(e,t,1),t=gt(),e!==null&&(za(e,1,t),bt(e,t));break}}e=e.return}}function Qb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>Ue()-em?oi(t,0):Zp|=n),bt(t,e)}function Pw(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=gt();t=jn(t,e),t!==null&&(za(t,e,n),bt(t,n))}function Xb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pw(t,n)}function Jb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),Pw(t,n)}var xw;xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,zb(t,e,n);St=!!(t.flags&131072)}else St=!1,Re&&e.flags&1048576&&O1(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=vs(e,ct.current);ss(e,n),i=Kp(null,e,r,t,i,n);var s=Yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wp(e),i.updater=Ic,e.stateNode=i,i._reactInternals=e,nh(e,r,t,n),e=sh(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Mp(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eT(r),t=Yt(r,t),i){case 0:e=ih(null,e,r,t,n);break e;case 1:e=jv(null,e,r,t,n);break e;case 11:e=Uv(null,e,r,t,n);break e;case 14:e=zv(null,e,r,Yt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),jv(t,e,r,i,n);case 3:e:{if(hw(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,F1(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Es(Error(P(423)),e),e=Vv(t,e,r,n,i);break e}else if(r!==i){i=Es(Error(P(424)),e),e=Vv(t,e,r,n,i);break e}else for(Nt=wr(e.stateNode.containerInfo.firstChild),At=e,Re=!0,Xt=null,n=V1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=Vn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return W1(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yf(r,i)?o=null:s!==null&&Yf(r,s)&&(e.flags|=32),fw(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return pw(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Uv(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Iu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!kt.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Mn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ss(e,n),i=Bt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),zv(t,e,r,i,n);case 15:return cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Zl(t,e),e.tag=1,It(r)?(t=!0,Su(e)):t=!1,ss(e,n),z1(e,r,i),nh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return mw(t,e,n);case 22:return dw(t,e,n)}throw Error(P(156,e.tag))};function Nw(t,e){return r1(t,e)}function Zb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new Zb(t,e,n,r)}function im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eT(t){if(typeof t=="function")return im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cp)return 11;if(t===kp)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ai(n.children,i,s,e);case Sp:o=8,i|=8;break;case bf:return t=Wt(12,n,e,i|2),t.elementType=bf,t.lanes=s,t;case Tf:return t=Wt(13,n,e,i),t.elementType=Tf,t.lanes=s,t;case Rf:return t=Wt(19,n,e,i),t.elementType=Rf,t.lanes=s,t;case j0:return Pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U0:o=10;break e;case z0:o=9;break e;case Cp:o=11;break e;case kp:o=14;break e;case ir:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Pc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=j0,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,r,i,s,o,a,l){return t=new tT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wp(s),t}function nT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Aw(t){if(!t)return Ar;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(It(n))return N1(t,n,e)}return e}function Ow(t,e,n,r,i,s,o,a,l){return t=sm(n,r,!0,t,i,s,o,a,l),t.context=Aw(null),n=t.current,r=gt(),i=Cr(n),s=Mn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,za(t,i,r),bt(t,r),t}function xc(t,e,n,r){var i=e.current,s=gt(),o=Cr(i);return n=Aw(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(on(t,i,o,s),Ql(t,i,o)),o}function Mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function om(t,e){Xv(t,e),(t=t.alternate)&&Xv(t,e)}function rT(){return null}var Dw=typeof reportError=="function"?reportError:function(t){console.error(t)};function am(t){this._internalRoot=t}Nc.prototype.render=am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));xc(t,e,null,null)};Nc.prototype.unmount=am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){xc(null,t,null,null)}),e[zn]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=c1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&f1(t)}};function lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jv(){}function iT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mu(o);s.call(u)}}var o=Ow(e,r,t,0,null,!1,!1,"",Jv);return t._reactRootContainer=o,t[zn]=o.current,na(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Mu(l);a.call(u)}}var l=sm(t,0,!1,null,null,!1,!1,"",Jv);return t._reactRootContainer=l,t[zn]=l.current,na(t.nodeType===8?t.parentNode:t),pi(function(){xc(e,l,n,r)}),l}function Oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Mu(o);a.call(l)}}xc(e,o,t,i)}else o=iT(n,e,t,i,r);return Mu(o)}l1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Tp(e,n|1),bt(e,Ue()),!(oe&6)&&(Ss=Ue()+500,Vr()))}break;case 13:pi(function(){var r=jn(t,1);if(r!==null){var i=gt();on(r,t,1,i)}}),om(t,1)}};Rp=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=gt();on(e,t,134217728,n)}om(t,134217728)}};u1=function(t){if(t.tag===13){var e=Cr(t),n=jn(t,e);if(n!==null){var r=gt();on(n,t,e,r)}om(t,e)}};c1=function(){return de};d1=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Uf=function(t,e,n){switch(e){case"input":if(Nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cc(r);if(!i)throw Error(P(90));W0(r),Nf(r,i)}}}break;case"textarea":B0(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};X0=tm;J0=pi;var sT={usingClientEntryPoint:!1,Events:[Va,Vi,Cc,q0,Q0,tm]},oo={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oT={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t1(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||rT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{_c=Rl.inject(oT),gn=Rl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lm(e))throw Error(P(200));return nT(t,e,null,n)};Dt.createRoot=function(t,e){if(!lm(t))throw Error(P(299));var n=!1,r="",i=Dw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,na(t.nodeType===8?t.parentNode:t),new am(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=t1(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return pi(t)};Dt.hydrate=function(t,e,n){if(!Ac(e))throw Error(P(200));return Oc(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!lm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ow(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nc(e)};Dt.render=function(t,e,n){if(!Ac(e))throw Error(P(200));return Oc(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(P(40));return t._reactRootContainer?(pi(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Dt.unstable_batchedUpdates=tm;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ac(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Oc(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function Mw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mw)}catch(t){console.error(t)}}Mw(),O0.exports=Dt;var Lw=O0.exports,Zv=Lw;kf.createRoot=Zv.createRoot,kf.hydrateRoot=Zv.hydrateRoot;const aT="modulepreload",lT=function(t){return"/me-schedule-maker/"+t},ey={},um=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=lT(s),s in ey)return;ey[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":aT,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Te.apply(this,arguments)}var je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(je||(je={}));const ty="popstate";function uT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Sn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),da("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:gi(s))}function r(i,s){mi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return dT(e,n,r,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cT(){return Math.random().toString(36).substr(2,8)}function ny(t,e){return{usr:t.state,key:t.key,idx:e}}function da(t,e,n,r){return n===void 0&&(n=null),Te({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Sn(e):e,{state:n,key:e&&e.key||r||cT()})}function gi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Sn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Te({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=je.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=je.Push;let h=da(_.location,w,p);n&&n(h,w),u=c()+1;let y=ny(h,u),m=_.createHref(h);try{o.pushState(y,"",m)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(m)}s&&l&&l({action:a,location:_.location,delta:1})}function g(w,p){a=je.Replace;let h=da(_.location,w,p);n&&n(h,w),u=c();let y=ny(h,u),m=_.createHref(h);o.replaceState(y,"",m),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:gi(w);return ne(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ty,d),l=w,()=>{i.removeEventListener(ty,d),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(w){return o.go(w)}};return _}var Fe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fe||(Fe={}));const fT=new Set(["lazy","caseSensitive","path","id","index","children"]);function hT(t){return t.index===!0}function vh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),hT(i)){let l=Te({},i,e(i),{id:a});return r[a]=l,l}else{let l=Te({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=vh(i.children,e,o,r)),l}})}function Yi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Sn(e):e,i=Ls(r.pathname||"/",n);if(i==null)return null;let s=Fw(t);pT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=CT(s[a],bT(i));return o}function Fw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ln([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ET(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Uw(s.path))i(s,o,l)}),e}function Uw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Uw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ST(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mT=/^:\w+$/,gT=3,vT=2,yT=1,_T=10,wT=-2,ry=t=>t==="*";function ET(t,e){let n=t.split("/"),r=n.length;return n.some(ry)&&(r+=wT),e&&(r+=vT),n.filter(i=>!ry(i)).reduce((i,s)=>i+(mT.test(s)?gT:s===""?yT:_T),r)}function ST(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function CT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=kT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ln([i,c.pathname]),pathnameBase:xT(Ln([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ln([i,c.pathnameBase]))}return s}function kT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=TT(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bT(t){try{return decodeURI(t)}catch(e){return mi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function TT(t,e){try{return decodeURIComponent(t)}catch(n){return mi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ls(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Sn(t):t;return{pathname:n?n.startsWith("/")?n:PT(n,e):e,search:NT(r),hash:AT(i)}}function PT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Sn(t):(i=Te({},t),ne(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=RT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ln=t=>t.join("/").replace(/\/\/+/g,"/"),xT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function zw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jw=["post","put","patch","delete"],OT=new Set(jw),DT=["get",...jw],MT=new Set(DT),LT=new Set([301,302,303,307,308]),FT=new Set([307,308]),Yd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},UT={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ao={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zT=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function jT(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ne(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let E=t.detectErrorBoundary;i=C=>({hasErrorBoundary:E(C)})}else i=zT;let s={},o=vh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Te({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,g=null,v=null,_=t.hydrationData!=null,w=Yi(o,t.history.location,l),p=null;if(w==null){let E=Ft(404,{pathname:t.history.location.pathname}),{matches:C,route:b}=dy(o);w=C,p={[b.id]:E}}let h=!w.some(E=>E.route.lazy)&&(!w.some(E=>E.route.loader)||t.hydrationData!=null),y,m={historyAction:t.history.action,location:t.history.location,matches:w,initialized:h,navigation:Yd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,blockers:new Map},S=je.Pop,T=!1,I,A=!1,M=!1,L=[],ae=[],ie=new Map,ze=0,V=-1,q=new Map,ue=new Set,ye=new Map,x=new Map,F=new Map,W=!1;function Ee(){return c=t.history.listen(E=>{let{action:C,location:b,delta:U}=E;if(W){W=!1;return}mi(F.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=Vg({currentLocation:m.location,nextLocation:b,historyAction:C});if(X&&U!=null){W=!0,t.history.go(U*-1),cl(X,{state:"blocked",location:b,proceed(){cl(X,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),t.history.go(U)},reset(){let K=new Map(m.blockers);K.set(X,ao),ce({blockers:K})}});return}return Pt(C,b)}),m.initialized||Pt(je.Pop,m.location),y}function fe(){c&&c(),d.clear(),I&&I.abort(),m.fetchers.forEach((E,C)=>pd(C)),m.blockers.forEach((E,C)=>jg(C))}function Xn(E){return d.add(E),()=>d.delete(E)}function ce(E){m=Te({},m,E),d.forEach(C=>C(m))}function Me(E,C){var b,U;let X=m.actionData!=null&&m.navigation.formMethod!=null&&Qt(m.navigation.formMethod)&&m.navigation.state==="loading"&&((b=E.state)==null?void 0:b._isRedirect)!==!0,K;C.actionData?Object.keys(C.actionData).length>0?K=C.actionData:K=null:X?K=m.actionData:K=null;let Q=C.loaderData?cy(m.loaderData,C.loaderData,C.matches||[],C.errors):m.loaderData,$=m.blockers;$.size>0&&($=new Map($),$.forEach((ge,tt)=>$.set(tt,ao)));let j=T===!0||m.navigation.formMethod!=null&&Qt(m.navigation.formMethod)&&((U=E.state)==null?void 0:U._isRedirect)!==!0;a&&(o=a,a=void 0),A||S===je.Pop||(S===je.Push?t.history.push(E,E.state):S===je.Replace&&t.history.replace(E,E.state)),ce(Te({},C,{actionData:K,loaderData:Q,historyAction:S,location:E,initialized:!0,navigation:Yd,revalidation:"idle",restoreScrollPosition:$g(E,C.matches||m.matches),preventScrollReset:j,blockers:$})),S=je.Pop,T=!1,A=!1,M=!1,L=[],ae=[]}async function st(E,C){if(typeof E=="number"){t.history.go(E);return}let b=yh(m.location,m.matches,l,u.v7_prependBasename,E,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:U,submission:X,error:K}=iy(u.v7_normalizeFormMethod,!1,b,C),Q=m.location,$=da(m.location,U,C&&C.state);$=Te({},$,t.history.encodeLocation($));let j=C&&C.replace!=null?C.replace:void 0,ge=je.Push;j===!0?ge=je.Replace:j===!1||X!=null&&Qt(X.formMethod)&&X.formAction===m.location.pathname+m.location.search&&(ge=je.Replace);let tt=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,he=Vg({currentLocation:Q,nextLocation:$,historyAction:ge});if(he){cl(he,{state:"blocked",location:$,proceed(){cl(he,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),st(E,C)},reset(){let Le=new Map(m.blockers);Le.set(he,ao),ce({blockers:Le})}});return}return await Pt(ge,$,{submission:X,pendingError:K,preventScrollReset:tt,replace:C&&C.replace})}function ft(){if(hd(),ce({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Pt(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Pt(S||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Pt(E,C,b){I&&I.abort(),I=null,S=E,A=(b&&b.startUninterruptedRevalidation)===!0,Ak(m.location,m.matches),T=(b&&b.preventScrollReset)===!0;let U=a||o,X=b&&b.overrideNavigation,K=Yi(U,C,l);if(!K){let Le=Ft(404,{pathname:C.pathname}),{matches:qe,route:Hr}=dy(U);md(),Me(C,{matches:qe,loaderData:{},errors:{[Hr.id]:Le}});return}if(m.initialized&&!M&&HT(m.location,C)&&!(b&&b.submission&&Qt(b.submission.formMethod))){Me(C,{matches:K});return}I=new AbortController;let Q=uo(t.history,C,I.signal,b&&b.submission),$,j;if(b&&b.pendingError)j={[qi(K).route.id]:b.pendingError};else if(b&&b.submission&&Qt(b.submission.formMethod)){let Le=await kn(Q,C,b.submission,K,{replace:b.replace});if(Le.shortCircuited)return;$=Le.pendingActionData,j=Le.pendingActionError,X=Pl(C,b.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ge,loaderData:tt,errors:he}=await qs(Q,C,K,X,b&&b.submission,b&&b.fetcherSubmission,b&&b.replace,$,j);ge||(I=null,Me(C,Te({matches:K},$?{actionData:$}:{},{loaderData:tt,errors:he})))}async function kn(E,C,b,U,X){X===void 0&&(X={}),hd();let K=QT(C,b);ce({navigation:K});let Q,$=wh(U,C);if(!$.route.action&&!$.route.lazy)Q={type:Fe.error,error:Ft(405,{method:E.method,pathname:C.pathname,routeId:$.route.id})};else if(Q=await lo("action",E,$,U,s,i,l),E.signal.aborted)return{shortCircuited:!0};if(as(Q)){let j;return X&&X.replace!=null?j=X.replace:j=Q.location===m.location.pathname+m.location.search,await Qs(m,Q,{submission:b,replace:j}),{shortCircuited:!0}}if(Lo(Q)){let j=qi(U,$.route.id);return(X&&X.replace)!==!0&&(S=je.Push),{pendingActionData:{},pendingActionError:{[j.route.id]:Q.error}}}if(ei(Q))throw Ft(400,{type:"defer-action"});return{pendingActionData:{[$.route.id]:Q.data}}}async function qs(E,C,b,U,X,K,Q,$,j){let ge=U||Pl(C,X),tt=X||K||py(ge),he=a||o,[Le,qe]=sy(t.history,m,b,tt,C,M,L,ae,ye,ue,he,l,$,j);if(md(pe=>!(b&&b.some(Gt=>Gt.route.id===pe))||Le&&Le.some(Gt=>Gt.route.id===pe)),V=++ze,Le.length===0&&qe.length===0){let pe=Ug();return Me(C,Te({matches:b,loaderData:{},errors:j||null},$?{actionData:$}:{},pe?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!A){qe.forEach(Gt=>{let Zn=m.fetchers.get(Gt.key),wd=co(void 0,Zn?Zn.data:void 0);m.fetchers.set(Gt.key,wd)});let pe=$||m.actionData;ce(Te({navigation:ge},pe?Object.keys(pe).length===0?{actionData:null}:{actionData:pe}:{},qe.length>0?{fetchers:new Map(m.fetchers)}:{}))}qe.forEach(pe=>{ie.has(pe.key)&&Jn(pe.key),pe.controller&&ie.set(pe.key,pe.controller)});let Hr=()=>qe.forEach(pe=>Jn(pe.key));I&&I.signal.addEventListener("abort",Hr);let{results:Gr,loaderResults:Xs,fetcherResults:gd}=await Lg(m.matches,b,Le,qe,E);if(E.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Hr),qe.forEach(pe=>ie.delete(pe.key));let In=fy(Gr);if(In){if(In.idx>=Le.length){let pe=qe[In.idx-Le.length].key;ue.add(pe)}return await Qs(m,In.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:bn,errors:dl}=uy(m,b,Le,Xs,j,qe,gd,x);x.forEach((pe,Gt)=>{pe.subscribe(Zn=>{(Zn||pe.done)&&x.delete(Gt)})});let vd=Ug(),yd=zg(V),_d=vd||yd||qe.length>0;return Te({loaderData:bn,errors:dl},_d?{fetchers:new Map(m.fetchers)}:{})}function Mg(E){return m.fetchers.get(E)||UT}function Tk(E,C,b,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(E)&&Jn(E);let X=a||o,K=yh(m.location,m.matches,l,u.v7_prependBasename,b,C,U==null?void 0:U.relative),Q=Yi(X,K,l);if(!Q){ul(E,C,Ft(404,{pathname:K}));return}let{path:$,submission:j,error:ge}=iy(u.v7_normalizeFormMethod,!0,K,U);if(ge){ul(E,C,ge);return}let tt=wh(Q,$);if(T=(U&&U.preventScrollReset)===!0,j&&Qt(j.formMethod)){Rk(E,C,$,tt,Q,j);return}ye.set(E,{routeId:C,path:$}),Pk(E,C,$,tt,Q,j)}async function Rk(E,C,b,U,X,K){if(hd(),ye.delete(E),!U.route.action&&!U.route.lazy){let We=Ft(405,{method:K.formMethod,pathname:b,routeId:C});ul(E,C,We);return}let Q=m.fetchers.get(E),$=XT(K,Q);m.fetchers.set(E,$),ce({fetchers:new Map(m.fetchers)});let j=new AbortController,ge=uo(t.history,b,j.signal,K);ie.set(E,j);let tt=ze,he=await lo("action",ge,U,X,s,i,l);if(ge.signal.aborted){ie.get(E)===j&&ie.delete(E);return}if(as(he))if(ie.delete(E),V>tt){let We=Mi(void 0);m.fetchers.set(E,We),ce({fetchers:new Map(m.fetchers)});return}else{ue.add(E);let We=co(K);return m.fetchers.set(E,We),ce({fetchers:new Map(m.fetchers)}),Qs(m,he,{submission:K,isFetchActionRedirect:!0})}if(Lo(he)){ul(E,C,he.error);return}if(ei(he))throw Ft(400,{type:"defer-action"});let Le=m.navigation.location||m.location,qe=uo(t.history,Le,j.signal),Hr=a||o,Gr=m.navigation.state!=="idle"?Yi(Hr,m.navigation.location,l):m.matches;ne(Gr,"Didn't find any matches after fetcher action");let Xs=++ze;q.set(E,Xs);let gd=co(K,he.data);m.fetchers.set(E,gd);let[In,bn]=sy(t.history,m,Gr,K,Le,M,L,ae,ye,ue,Hr,l,{[U.route.id]:he.data},void 0);bn.filter(We=>We.key!==E).forEach(We=>{let Js=We.key,Bg=m.fetchers.get(Js),Dk=co(void 0,Bg?Bg.data:void 0);m.fetchers.set(Js,Dk),ie.has(Js)&&Jn(Js),We.controller&&ie.set(Js,We.controller)}),ce({fetchers:new Map(m.fetchers)});let dl=()=>bn.forEach(We=>Jn(We.key));j.signal.addEventListener("abort",dl);let{results:vd,loaderResults:yd,fetcherResults:_d}=await Lg(m.matches,Gr,In,bn,qe);if(j.signal.aborted)return;j.signal.removeEventListener("abort",dl),q.delete(E),ie.delete(E),bn.forEach(We=>ie.delete(We.key));let pe=fy(vd);if(pe){if(pe.idx>=In.length){let We=bn[pe.idx-In.length].key;ue.add(We)}return Qs(m,pe.result)}let{loaderData:Gt,errors:Zn}=uy(m,m.matches,In,yd,void 0,bn,_d,x);if(m.fetchers.has(E)){let We=Mi(he.data);m.fetchers.set(E,We)}let wd=zg(Xs);m.navigation.state==="loading"&&Xs>V?(ne(S,"Expected pending action"),I&&I.abort(),Me(m.navigation.location,{matches:Gr,loaderData:Gt,errors:Zn,fetchers:new Map(m.fetchers)})):(ce(Te({errors:Zn,loaderData:cy(m.loaderData,Gt,Gr,Zn)},wd||bn.length>0?{fetchers:new Map(m.fetchers)}:{})),M=!1)}async function Pk(E,C,b,U,X,K){let Q=m.fetchers.get(E),$=co(K,Q?Q.data:void 0);m.fetchers.set(E,$),ce({fetchers:new Map(m.fetchers)});let j=new AbortController,ge=uo(t.history,b,j.signal);ie.set(E,j);let tt=ze,he=await lo("loader",ge,U,X,s,i,l);if(ei(he)&&(he=await Bw(he,ge.signal,!0)||he),ie.get(E)===j&&ie.delete(E),ge.signal.aborted)return;if(as(he))if(V>tt){let qe=Mi(void 0);m.fetchers.set(E,qe),ce({fetchers:new Map(m.fetchers)});return}else{ue.add(E),await Qs(m,he);return}if(Lo(he)){let qe=qi(m.matches,C);m.fetchers.delete(E),ce({fetchers:new Map(m.fetchers),errors:{[qe.route.id]:he.error}});return}ne(!ei(he),"Unhandled fetcher deferred data");let Le=Mi(he.data);m.fetchers.set(E,Le),ce({fetchers:new Map(m.fetchers)})}async function Qs(E,C,b){let{submission:U,replace:X,isFetchActionRedirect:K}=b===void 0?{}:b;C.revalidate&&(M=!0);let Q=da(E.location,C.location,Te({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(ne(Q,"Expected a location on the redirect navigation"),n){let ge=!1;if(C.reloadDocument)ge=!0;else if(Vw.test(C.location)){const tt=t.history.createURL(C.location);ge=tt.origin!==e.location.origin||Ls(tt.pathname,l)==null}if(ge){X?e.location.replace(C.location):e.location.assign(C.location);return}}I=null;let $=X===!0?je.Replace:je.Push,j=U||py(E.navigation);if(FT.has(C.status)&&j&&Qt(j.formMethod))await Pt($,Q,{submission:Te({},j,{formAction:C.location}),preventScrollReset:T});else if(K)await Pt($,Q,{overrideNavigation:Pl(Q),fetcherSubmission:j,preventScrollReset:T});else{let ge=Pl(Q,j);await Pt($,Q,{overrideNavigation:ge,preventScrollReset:T})}}async function Lg(E,C,b,U,X){let K=await Promise.all([...b.map(j=>lo("loader",X,j,C,s,i,l)),...U.map(j=>j.matches&&j.match&&j.controller?lo("loader",uo(t.history,j.path,j.controller.signal),j.match,j.matches,s,i,l):{type:Fe.error,error:Ft(404,{pathname:j.path})})]),Q=K.slice(0,b.length),$=K.slice(b.length);return await Promise.all([hy(E,b,Q,Q.map(()=>X.signal),!1,m.loaderData),hy(E,U.map(j=>j.match),$,U.map(j=>j.controller?j.controller.signal:null),!0)]),{results:K,loaderResults:Q,fetcherResults:$}}function hd(){M=!0,L.push(...md()),ye.forEach((E,C)=>{ie.has(C)&&(ae.push(C),Jn(C))})}function ul(E,C,b){let U=qi(m.matches,C);pd(E),ce({errors:{[U.route.id]:b},fetchers:new Map(m.fetchers)})}function pd(E){let C=m.fetchers.get(E);ie.has(E)&&!(C&&C.state==="loading"&&q.has(E))&&Jn(E),ye.delete(E),q.delete(E),ue.delete(E),m.fetchers.delete(E)}function Jn(E){let C=ie.get(E);ne(C,"Expected fetch controller: "+E),C.abort(),ie.delete(E)}function Fg(E){for(let C of E){let b=Mg(C),U=Mi(b.data);m.fetchers.set(C,U)}}function Ug(){let E=[],C=!1;for(let b of ue){let U=m.fetchers.get(b);ne(U,"Expected fetcher: "+b),U.state==="loading"&&(ue.delete(b),E.push(b),C=!0)}return Fg(E),C}function zg(E){let C=[];for(let[b,U]of q)if(U<E){let X=m.fetchers.get(b);ne(X,"Expected fetcher: "+b),X.state==="loading"&&(Jn(b),q.delete(b),C.push(b))}return Fg(C),C.length>0}function xk(E,C){let b=m.blockers.get(E)||ao;return F.get(E)!==C&&F.set(E,C),b}function jg(E){m.blockers.delete(E),F.delete(E)}function cl(E,C){let b=m.blockers.get(E)||ao;ne(b.state==="unblocked"&&C.state==="blocked"||b.state==="blocked"&&C.state==="blocked"||b.state==="blocked"&&C.state==="proceeding"||b.state==="blocked"&&C.state==="unblocked"||b.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+b.state+" -> "+C.state);let U=new Map(m.blockers);U.set(E,C),ce({blockers:U})}function Vg(E){let{currentLocation:C,nextLocation:b,historyAction:U}=E;if(F.size===0)return;F.size>1&&mi(!1,"A router only supports one blocker at a time");let X=Array.from(F.entries()),[K,Q]=X[X.length-1],$=m.blockers.get(K);if(!($&&$.state==="proceeding")&&Q({currentLocation:C,nextLocation:b,historyAction:U}))return K}function md(E){let C=[];return x.forEach((b,U)=>{(!E||E(U))&&(b.cancel(),C.push(U),x.delete(U))}),C}function Nk(E,C,b){if(f=E,v=C,g=b||null,!_&&m.navigation===Yd){_=!0;let U=$g(m.location,m.matches);U!=null&&ce({restoreScrollPosition:U})}return()=>{f=null,v=null,g=null}}function Wg(E,C){return g&&g(E,C.map(U=>qT(U,m.loaderData)))||E.key}function Ak(E,C){if(f&&v){let b=Wg(E,C);f[b]=v()}}function $g(E,C){if(f){let b=Wg(E,C),U=f[b];if(typeof U=="number")return U}return null}function Ok(E){s={},a=vh(E,i,void 0,s)}return y={get basename(){return l},get state(){return m},get routes(){return o},initialize:Ee,subscribe:Xn,enableScrollRestoration:Nk,navigate:st,fetch:Tk,revalidate:ft,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:Mg,deleteFetcher:pd,dispose:fe,getBlocker:xk,deleteBlocker:jg,_internalFetchControllers:ie,_internalActiveDeferreds:x,_internalSetRoutes:Ok},y}function VT(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function yh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=cm(i||".",Dc(a).map(c=>c.pathnameBase),Ls(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!fm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Ln([n,u.pathname])),gi(u)}function iy(t,e,n,r){if(!r||!VT(r))return{path:n};if(r.formMethod&&!YT(r.formMethod))return{path:n,error:Ft(405,{method:r.formMethod})};let i=()=>({path:n,error:Ft(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=$w(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,v)=>{let[_,w]=v;return""+g+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Qt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=_h(r.formData),u=r.formData;else if(r.body instanceof FormData)l=_h(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=ly(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=ly(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Qt(c.formMethod))return{path:n,submission:c};let d=Sn(n);return e&&d.search&&fm(d.search)&&l.append("index",""),d.search="?"+l,{path:gi(d),submission:c}}function WT(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function sy(t,e,n,r,i,s,o,a,l,u,c,d,f,g){let v=g?Object.values(g)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),p=g?Object.keys(g)[0]:void 0,y=WT(n,p).filter((S,T)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if($T(e.loaderData,e.matches[T],S)||o.some(M=>M===S.route.id))return!0;let I=e.matches[T],A=S;return oy(S,Te({currentUrl:_,currentParams:I.params,nextUrl:w,nextParams:A.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||Ww(I,A)}))}),m=[];return l.forEach((S,T)=>{if(!n.some(ae=>ae.route.id===S.routeId))return;let I=Yi(c,S.path,d);if(!I){m.push({key:T,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(T),M=wh(I,S.path),L=!1;u.has(T)?L=!1:a.includes(T)?L=!0:A&&A.state!=="idle"&&A.data===void 0?L=s:L=oy(M,Te({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),L&&m.push({key:T,routeId:S.routeId,path:S.path,matches:I,match:M,controller:new AbortController})}),[y,m]}function $T(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Ww(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function oy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function ay(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ne(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";mi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!fT.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Te({},e(i),{lazy:void 0}))}async function lo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=v=>{let _,w=new Promise((p,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),w])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([d(v),ay(n.route,s,i)]))[0];else if(await ay(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw Ft(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Fe.data,data:void 0};else if(v)u=await d(v);else{let _=new URL(e.url),w=_.pathname+_.search;throw Ft(404,{pathname:w})}ne(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Fe.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(KT(u)){let v=u.status;if(LT.has(v)){let p=u.headers.get("Location");if(ne(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vw.test(p))p=yh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,p);else if(!a.isStaticRequest){let h=new URL(e.url),y=p.startsWith("//")?new URL(h.protocol+p):new URL(p),m=Ls(y.pathname,o)!=null;y.origin===h.origin&&m&&(p=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",p),u;return{type:Fe.redirect,status:v,location:p,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Fe.error?Fe.error:Fe.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Fe.error?{type:l,error:new dm(v,u.statusText,_),headers:u.headers}:{type:Fe.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Fe.error)return{type:l,error:u};if(GT(u)){var f,g;return{type:Fe.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((g=u.init)==null?void 0:g.headers)&&new Headers(u.init.headers)}}return{type:Fe.data,data:u}}function uo(t,e,n,r){let i=t.createURL($w(e)).toString(),s={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=_h(r.formData):s.body=r.formData}return new Request(i,s)}function _h(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ly(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function BT(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ne(!as(c),"Cannot handle redirect results in processLoaderData"),Lo(c)){let g=qi(t,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=v),s[f]=void 0,l||(l=!0,a=zw(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else ei(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function uy(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=BT(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:g}=s[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(g&&g.signal.aborted))if(Lo(v)){let _=qi(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Te({},u,{[_.route.id]:v.error})),t.fetchers.delete(d)}else if(as(v))ne(!1,"Unhandled fetcher revalidation redirect");else if(ei(v))ne(!1,"Unhandled fetcher deferred data");else{let _=Mi(v.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function cy(t,e,n,r){let i=Te({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function qi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function dy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ft(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new dm(t||500,o,new Error(a),!0)}function fy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(as(n))return{result:n,idx:e}}}function $w(t){let e=typeof t=="string"?Sn(t):t;return gi(Te({},e,{hash:""}))}function HT(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ei(t){return t.type===Fe.deferred}function Lo(t){return t.type===Fe.error}function as(t){return(t&&t.type)===Fe.redirect}function GT(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function KT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function YT(t){return MT.has(t.toLowerCase())}function Qt(t){return OT.has(t.toLowerCase())}async function hy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!Ww(u,l)&&(s&&s[l.route.id])!==void 0;if(ei(a)&&(i||c)){let d=r[o];ne(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Bw(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function Bw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Fe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Fe.error,error:i}}return{type:Fe.data,data:t.deferredData.data}}}function fm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function qT(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function wh(t,e){let n=typeof e=="string"?Sn(e).search:e.search;if(t[t.length-1].route.index&&fm(n||""))return t[t.length-1];let r=Dc(t);return r[r.length-1]}function py(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Pl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function QT(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function co(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function XT(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Mi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lu(){return Lu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lu.apply(this,arguments)}const Mc=k.createContext(null),Hw=k.createContext(null),Fs=k.createContext(null),Lc=k.createContext(null),Pi=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Gw=k.createContext(null);function JT(t,e){let{relative:n}=e===void 0?{}:e;$a()||ne(!1);let{basename:r,navigator:i}=k.useContext(Fs),{hash:s,pathname:o,search:a}=Yw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ln([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $a(){return k.useContext(Lc)!=null}function Fc(){return $a()||ne(!1),k.useContext(Lc).location}function Kw(t){k.useContext(Fs).static||k.useLayoutEffect(t)}function ZT(){let{isDataRoute:t}=k.useContext(Pi);return t?c2():e2()}function e2(){$a()||ne(!1);let t=k.useContext(Mc),{basename:e,navigator:n}=k.useContext(Fs),{matches:r}=k.useContext(Pi),{pathname:i}=Fc(),s=JSON.stringify(Dc(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return Kw(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=cm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ln([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Yw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(Pi),{pathname:i}=Fc(),s=JSON.stringify(Dc(r).map(o=>o.pathnameBase));return k.useMemo(()=>cm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function t2(t,e,n){$a()||ne(!1);let{navigator:r}=k.useContext(Fs),{matches:i}=k.useContext(Pi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Fc(),u;if(e){var c;let _=typeof e=="string"?Sn(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ne(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=Yi(t,{pathname:f}),v=o2(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Ln([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Ln([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?k.createElement(Lc.Provider,{value:{location:Lu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:je.Pop}},v):v}function n2(){let t=Xw(),e=zw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const r2=k.createElement(n2,null);class i2 extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(Pi.Provider,{value:this.props.routeContext},k.createElement(Gw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s2(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Mc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Pi.Provider,{value:e},r)}function o2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||r2);let f=e.concat(s.slice(0,u+1)),g=()=>{let v;return c?v=d:l.route.Component?v=k.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,k.createElement(s2,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(i2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var qw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qw||{}),Fu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fu||{});function a2(t){let e=k.useContext(Mc);return e||ne(!1),e}function l2(t){let e=k.useContext(Hw);return e||ne(!1),e}function u2(t){let e=k.useContext(Pi);return e||ne(!1),e}function Qw(t){let e=u2(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function Xw(){var t;let e=k.useContext(Gw),n=l2(Fu.UseRouteError),r=Qw(Fu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function c2(){let{router:t}=a2(qw.UseNavigateStable),e=Qw(Fu.UseNavigateStable),n=k.useRef(!1);return Kw(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Lu({fromRouteId:e},s)))},[t,e])}const d2="startTransition",my=Xk[d2];function f2(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=k.useState(n.state),{v7_startTransition:o}=r||{},a=k.useCallback(d=>{o&&my?my(()=>s(d)):s(d)},[s,o]);k.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,g)=>n.navigate(d,{state:f,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(d,f,g)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[n]),u=n.basename||"/",c=k.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return k.createElement(k.Fragment,null,k.createElement(Mc.Provider,{value:c},k.createElement(Hw.Provider,{value:i},k.createElement(p2,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?k.createElement(h2,{routes:n.routes,state:i}):e))),null)}function h2(t){let{routes:e,state:n}=t;return t2(e,void 0,n)}function p2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=je.Pop,navigator:s,static:o=!1}=t;$a()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Sn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,v=k.useMemo(()=>{let _=Ls(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return v==null?null:k.createElement(Fs.Provider,{value:l},k.createElement(Lc.Provider,{children:n,value:v}))}new Promise(()=>{});function m2(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}function g2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function v2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function y2(t,e){return t.button===0&&(!e||e==="_self")&&!v2(t)}const _2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function w2(t,e){return jT({basename:e==null?void 0:e.basename,future:fa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:uT({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||E2(),routes:t,mapRouteProperties:m2}).initialize()}function E2(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=fa({},e,{errors:S2(e.errors)})),e}function S2(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new dm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const C2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jw=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=g2(e,_2),{basename:f}=k.useContext(Fs),g,v=!1;if(typeof u=="string"&&k2.test(u)&&(g=u,C2))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),m=Ls(y.pathname,f);y.origin===h.origin&&m!=null?u=m+y.search+y.hash:v=!0}catch{}let _=JT(u,{relative:i}),w=I2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return k.createElement("a",fa({},d,{href:g||_,onClick:v||s?r:p,ref:n,target:l}))});var gy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(gy||(gy={}));var vy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vy||(vy={}));function I2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ZT(),l=Fc(),u=Yw(t,{relative:o});return k.useCallback(c=>{if(y2(c,n)){c.preventDefault();let d=r!==void 0?r:gi(l)===gi(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function b2(){return G.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[G.jsx("p",{className:"font-bold text-2xl",children:"Email Verification"}),G.jsxs("p",{className:"w-[70%] text-center",children:["You have not verified your email. Please check your inbox for an email verification link. ",G.jsx("br",{}),"If you did not receive one, consider double checking your email when signing up."]}),G.jsx(Jw,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page"})]})}/**
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
 */const Zw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(t,e){if(!t)throw Us(e)},Us=function(t){return new Error("Firebase Database ("+Zw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const eE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},T2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new R2;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tE=function(t){const e=eE(t);return hm.encodeByteArray(e,!0)},Uu=function(t){return tE(t).replace(/\./g,"")},zu=function(t){try{return hm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P2(t){return nE(void 0,t)}function nE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!x2(n)||(t[n]=nE(t[n],e[n]));return t}function x2(t){return t!=="__proto__"}/**
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
 */function N2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A2=()=>N2().__FIREBASE_DEFAULTS__,O2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zu(t[1]);return e&&JSON.parse(e)},pm=()=>{try{return A2()||O2()||D2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rE=t=>{var e,n;return(n=(e=pm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M2=t=>{const e=rE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iE=()=>{var t;return(t=pm())===null||t===void 0?void 0:t.config},sE=t=>{var e;return(e=pm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function L2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uu(JSON.stringify(n)),Uu(JSON.stringify(o)),a].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function F2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U2(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aE(){return Zw.NODE_ADMIN===!0}function z2(){try{return typeof indexedDB=="object"}catch{return!1}}function j2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const V2="FirebaseError";class Wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=V2,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?W2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wr(i,a,r)}}function W2(t,e){return t.replace($2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $2=/\{\$([^}]+)}/g;/**
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
 */function ha(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
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
 */const lE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ha(zu(s[0])||""),n=ha(zu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},B2=function(t){const e=lE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},H2=function(t){const e=lE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ju(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yy(s)&&yy(o)){if(!Vu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yy(t){return t!==null&&typeof t=="object"}/**
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
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class G2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function K2(t,e){const n=new Y2(t,e);return n.subscribe.bind(n)}class Y2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");q2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qd),i.error===void 0&&(i.error=qd),i.complete===void 0&&(i.complete=qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qd(){}function gm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Q2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class X2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Uc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z2(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J2(t){return t===qr?void 0:t}function Z2(t){return t.instantiationMode==="EAGER"}/**
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
 */class eR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const tR={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},nR=me.INFO,rR={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},iR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vm{constructor(e){this.name=e,this._logLevel=nR,this._logHandler=iR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const sR=(t,e)=>e.some(n=>t instanceof n);let _y,wy;function oR(){return _y||(_y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aR(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,Sh=new WeakMap,cE=new WeakMap,Qd=new WeakMap,ym=new WeakMap;function lR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uE.set(n,t)}).catch(()=>{}),ym.set(e,t),e}function uR(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cR(t){Ch=t(Ch)}function dR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xd(this),e,...n);return cE.set(r,e.sort?e.sort():[e]),Ir(r)}:aR().includes(t)?function(...e){return t.apply(Xd(this),e),Ir(uE.get(this))}:function(...e){return Ir(t.apply(Xd(this),e))}}function fR(t){return typeof t=="function"?dR(t):(t instanceof IDBTransaction&&uR(t),sR(t,oR())?new Proxy(t,Ch):t)}function Ir(t){if(t instanceof IDBRequest)return lR(t);if(Qd.has(t))return Qd.get(t);const e=fR(t);return e!==t&&(Qd.set(t,e),ym.set(e,t)),e}const Xd=t=>ym.get(t);function hR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pR=["get","getKey","getAll","getAllKeys","count"],mR=["put","add","delete","clear"],Jd=new Map;function Ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jd.set(e,s),s}cR(t=>({...t,get:(e,n,r)=>Ey(e,n)||t.get(e,n,r),has:(e,n)=>!!Ey(e,n)||t.has(e,n)}));/**
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
 */class gR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kh="@firebase/app",Sy="0.9.16";/**
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
 */const yi=new vm("@firebase/app"),yR="@firebase/app-compat",_R="@firebase/analytics-compat",wR="@firebase/analytics",ER="@firebase/app-check-compat",SR="@firebase/app-check",CR="@firebase/auth",kR="@firebase/auth-compat",IR="@firebase/database",bR="@firebase/database-compat",TR="@firebase/functions",RR="@firebase/functions-compat",PR="@firebase/installations",xR="@firebase/installations-compat",NR="@firebase/messaging",AR="@firebase/messaging-compat",OR="@firebase/performance",DR="@firebase/performance-compat",MR="@firebase/remote-config",LR="@firebase/remote-config-compat",FR="@firebase/storage",UR="@firebase/storage-compat",zR="@firebase/firestore",jR="@firebase/firestore-compat",VR="firebase",WR="10.2.0";/**
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
 */const Ih="[DEFAULT]",$R={[kh]:"fire-core",[yR]:"fire-core-compat",[wR]:"fire-analytics",[_R]:"fire-analytics-compat",[SR]:"fire-app-check",[ER]:"fire-app-check-compat",[CR]:"fire-auth",[kR]:"fire-auth-compat",[IR]:"fire-rtdb",[bR]:"fire-rtdb-compat",[TR]:"fire-fn",[RR]:"fire-fn-compat",[PR]:"fire-iid",[xR]:"fire-iid-compat",[NR]:"fire-fcm",[AR]:"fire-fcm-compat",[OR]:"fire-perf",[DR]:"fire-perf-compat",[MR]:"fire-rc",[LR]:"fire-rc-compat",[FR]:"fire-gcs",[UR]:"fire-gcs-compat",[zR]:"fire-fst",[jR]:"fire-fst-compat","fire-js":"fire-js",[VR]:"fire-js-all"};/**
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
 */const Wu=new Map,bh=new Map;function BR(t,e){try{t.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(bh.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;bh.set(e,t);for(const n of Wu.values())BR(n,t);return!0}function _m(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const HR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},br=new Ba("app","Firebase",HR);/**
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
 */class GR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const js=WR;function dE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw br.create("bad-app-name",{appName:String(i)});if(n||(n=iE()),!n)throw br.create("no-options");const s=Wu.get(i);if(s){if(Vu(n,s.options)&&Vu(r,s.config))return s;throw br.create("duplicate-app",{appName:i})}const o=new eR(i);for(const l of bh.values())o.addComponent(l);const a=new GR(n,r,o);return Wu.set(i,a),a}function fE(t=Ih){const e=Wu.get(t);if(!e&&t===Ih&&iE())return dE();if(!e)throw br.create("no-app",{appName:t});return e}function Tr(t,e,n){var r;let i=(r=$R[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(a.join(" "));return}ks(new vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const KR="firebase-heartbeat-database",YR=1,pa="firebase-heartbeat-store";let Zd=null;function hE(){return Zd||(Zd=hR(KR,YR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pa)}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),Zd}async function qR(t){try{return await(await hE()).transaction(pa).objectStore(pa).get(pE(t))}catch(e){if(e instanceof Wr)yi.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function Cy(t,e){try{const r=(await hE()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,pE(t)),await r.done}catch(n){if(n instanceof Wr)yi.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function pE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QR=1024,XR=30*24*60*60*1e3;class JR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ky();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=XR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ky(),{heartbeatsToSend:n,unsentEntries:r}=ZR(this._heartbeatsCache.heartbeats),i=Uu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ky(){return new Date().toISOString().substring(0,10)}function ZR(t,e=QR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z2()?j2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Iy(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tP(t){ks(new vi("platform-logger",e=>new gR(e),"PRIVATE")),ks(new vi("heartbeat",e=>new JR(e),"PRIVATE")),Tr(kh,Sy,t),Tr(kh,Sy,"esm2017"),Tr("fire-js","")}tP("");var nP="firebase",rP="10.2.0";/**
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
 */Tr(nP,rP,"app");var Th=function(t,e){return Th=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Th(t,e)};function nL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Th(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var by=function(){return by=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},by.apply(this,arguments)};function wm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rL(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function iL(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function sL(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Ty(t){return t!==void 0&&t.enterprise!==void 0}class iP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function mE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sP=mE,gE=new Ba("auth","Firebase",mE());/**
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
 */const $u=new vm("@firebase/auth");function oP(t,...e){$u.logLevel<=me.WARN&&$u.warn(`Auth (${js}): ${t}`,...e)}function ru(t,...e){$u.logLevel<=me.ERROR&&$u.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Em(t,...e)}function yn(t,...e){return Em(t,...e)}function aP(t,e,n){const r=Object.assign(Object.assign({},sP()),{[e]:n});return new Ba("auth","Firebase",r).create(e,{appName:t.name})}function Em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gE.create(t,...e)}function B(t,e,...n){if(!t)throw Em(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ru(e),new Error(e)}function Wn(t,e){t||An(e)}/**
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
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lP(){return Ry()==="http:"||Ry()==="https:"}function Ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lP()||F2()||"connection"in navigator)?navigator.onLine:!0}function cP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=mm()||oE()}get(){return uP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sm(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fP=new Ha(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,i={}){return yE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),vE.fetch()(_E(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function yE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dP),e);try{const i=new hP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aP(t,c,u);un(t,c)}}catch(i){if(i instanceof Wr)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Ga(t,e,n,r,i={}){const s=await qn(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _E(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sm(t.config,i):`${t.config.apiScheme}://${i}`}class hP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),fP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}async function pP(t,e){return qn(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function mP(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function gP(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vP(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Cm(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo(ef(i.auth_time)),issuedAtTime:Fo(ef(i.iat)),expirationTime:Fo(ef(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ef(t){return Number(t)*1e3}function Cm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=zu(n);return i?JSON.parse(i):(ru("Failed to decode base64 JWT payload"),null)}catch(i){return ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yP(t){const e=Cm(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wr&&_P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Is(t,gP(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?CP(s.providerUserInfo):[],a=SP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function EP(t){const e=Ye(t);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CP(t){return t.map(e=>{var{providerId:n}=e,r=wm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kP(t,e){const n=await yE(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_E(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ma;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function tr(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vP(this,e)}reload(){return EP(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Is(this,mP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:m,isAnonymous:S,providerData:T,stsTokenManager:I}=n;B(y&&I,e,"internal-error");const A=ma.fromJSON(this.name,I);B(typeof y=="string",e,"internal-error"),tr(d,e.name),tr(f,e.name),B(typeof m=="boolean",e,"internal-error"),B(typeof S=="boolean",e,"internal-error"),tr(g,e.name),tr(v,e.name),tr(_,e.name),tr(w,e.name),tr(p,e.name),tr(h,e.name);const M=new li({uid:y,auth:e,email:f,emailVerified:m,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:A,createdAt:p,lastLoginAt:h});return T&&Array.isArray(T)&&(M.providerData=T.map(L=>Object.assign({},L))),w&&(M._redirectEventId=w),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new ma;i.updateFromServerResponse(n);const s=new li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bu(s),s}}/**
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
 */const Py=new Map;function On(t){Wn(t instanceof Function,"Expected a class definition");let e=Py.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Py.set(t,e),e)}/**
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
 */class EE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}EE.type="NONE";const xy=EE;/**
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
 */function iu(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(On(xy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||On(xy);const o=iu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=li._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ls(s,e,r))}}/**
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
 */function Ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bE(e))return"Blackberry";if(TE(e))return"Webos";if(km(e))return"Safari";if((e.includes("chrome/")||CE(e))&&!e.includes("edge/"))return"Chrome";if(IE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SE(t=dt()){return/firefox\//i.test(t)}function km(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CE(t=dt()){return/crios\//i.test(t)}function kE(t=dt()){return/iemobile/i.test(t)}function IE(t=dt()){return/android/i.test(t)}function bE(t=dt()){return/blackberry/i.test(t)}function TE(t=dt()){return/webos/i.test(t)}function jc(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IP(t=dt()){var e;return jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bP(){return U2()&&document.documentMode===10}function RE(t=dt()){return jc(t)||IE(t)||TE(t)||bE(t)||/windows phone/i.test(t)||kE(t)}function TP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function PE(t,e=[]){let n;switch(t){case"Browser":n=Ny(dt());break;case"Worker":n=`${Ny(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class RP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PP(t,e={}){return qn(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const xP=6;class NP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class AP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new RP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PP(this),n=new NP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(t){return Ye(t)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=K2(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function OP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OP().appendChild(r)})}function DP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const MP="https://www.google.com/recaptcha/enterprise.js?render=",LP="recaptcha-enterprise",FP="NO_RECAPTCHA";class UP{constructor(e){this.type=LP,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new iP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ty(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(FP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ty(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xE(MP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bs(t,e,n,r=!1){const i=new UP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function zP(t,e){const n=_m(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vu(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function jP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VP(t,e,n){const r=Br(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=NE(e),{host:o,port:a}=WP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$P()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WP(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Oy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Oy(o)}}}function Oy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $P(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function BP(t,e){return qn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tf(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}async function AE(t,e){return qn(t,"POST","/v1/accounts:sendOobCode",$r(t,e))}async function HP(t,e){return AE(t,e)}async function nf(t,e){return AE(t,e)}/**
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
 */async function GP(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function KP(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class ga extends Im{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await bs(e,r,"signInWithPassword");return tf(e,i)}else return tf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await bs(e,r,"signInWithPassword");return tf(e,s)}else return Promise.reject(i)});case"emailLink":return GP(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return BP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KP(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const YP="http://localhost";class _i extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:YP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
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
 */function qP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QP(t){const e=Co(ko(t)).link,n=e?Co(ko(e)).deep_link_id:null,r=Co(ko(t)).deep_link_id;return(r?Co(ko(r)).link:null)||r||n||e||t}class bm{constructor(e){var n,r,i,s,o,a;const l=Co(ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=qP((i=l.mode)!==null&&i!==void 0?i:null);B(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QP(e);try{return new bm(n)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bm.parseLink(n);return B(r,"argument-error"),ga._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends Ka{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class cr extends Ka{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class dr extends Ka{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function rf(t,e){return Ga(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await li._fromIdTokenResponse(e,r,i),o=Dy(r);return new wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dy(r);return new wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hu extends Wr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hu(e,n,r,i)}}function DE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(t,s,e,r):s})}async function XP(t,e,n=!1){const r=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
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
 */async function ME(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Is(t,DE(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=Cm(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
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
 */async function LE(t,e,n=!1){const r="signIn",i=await DE(t,r,e),s=await wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JP(t,e){return LE(Br(t),e)}async function oL(t,e){return ME(Ye(t),e)}/**
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
 */function su(t,e,n){var r;B(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function FE(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZP(t,e,n){var r;const i=Br(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await bs(i,s,"getOobCode",!0);n&&su(i,o,n),await nf(i,o)}else n&&su(i,s,n),await nf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await bs(i,s,"getOobCode",!0);n&&su(i,a,n),await nf(i,a)}else return Promise.reject(o)})}async function ex(t,e,n){var r;const i=Br(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await bs(i,s,"signUpPassword");o=rf(i,u)}else o=rf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await bs(i,s,"signUpPassword");return rf(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&FE(t),u}),l=await wi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function tx(t,e,n){return JP(Ye(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&FE(t),r})}async function nx(t,e){const n=Ye(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&su(n.auth,i,e);const{email:s}=await HP(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function rx(t,e){return qn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function aL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Is(r,rx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ix(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function sx(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function ox(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function ax(t){return Ye(t).signOut()}async function lL(t){return Ye(t).delete()}const Gu="__sak";/**
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
 */class UE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lx(){const t=dt();return km(t)||jc(t)}const ux=1e3,cx=10;class zE extends UE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lx()&&TP(),this.fallbackToPolling=RE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zE.type="LOCAL";const dx=zE;/**
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
 */class jE extends UE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jE.type="SESSION";const VE=jE;/**
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
 */function fx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await fx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
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
 */function Tm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Tm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function px(t){_n().location.href=t}/**
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
 */function WE(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function mx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vx(){return WE()?self:null}/**
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
 */const $E="firebaseLocalStorageDb",yx=1,Ku="firebaseLocalStorage",BE="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function _x(){const t=indexedDB.deleteDatabase($E);return new Ya(t).toPromise()}function Ph(){const t=indexedDB.open($E,yx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:BE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await _x(),e(await Ph()))})})}async function My(t,e,n){const r=Wc(t,!0).put({[BE]:e,value:n});return new Ya(r).toPromise()}async function wx(t,e){const n=Wc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function Ly(t,e){const n=Wc(t,!0).delete(e);return new Ya(n).toPromise()}const Ex=800,Sx=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(vx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mx(),!this.activeServiceWorker)return;this.sender=new hx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ph();return await My(e,Gu,"1"),await Ly(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>My(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wc(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const Cx=HE;new Ha(3e4,6e4);/**
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
 */function kx(t,e){return e?On(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rm extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ix(t){return LE(t.auth,new Rm(t),t.bypassAuthState)}function bx(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),ME(n,new Rm(t),t.bypassAuthState)}async function Tx(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),XP(n,new Rm(t),t.bypassAuthState)}/**
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
 */class GE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ix;case"linkViaPopup":case"linkViaRedirect":return Tx;case"reauthViaPopup":case"reauthViaRedirect":return bx;default:un(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Rx=new Ha(2e3,1e4);class Qi extends GE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rx.get())};e()}}Qi.currentPopupAction=null;/**
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
 */const Px="pendingRedirect",ou=new Map;class xx extends GE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ou.get(this.auth._key());if(!e){try{const r=await Nx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ou.set(this.auth._key(),e)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nx(t,e){const n=Dx(e),r=Ox(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ax(t,e){ou.set(t._key(),e)}function Ox(t){return On(t._redirectPersistence)}function Dx(t){return iu(Px,t.config.apiKey,t.name)}async function Mx(t,e,n=!1){const r=Br(t),i=kx(r,e),o=await new xx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Lx=10*60*1e3;class Fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ux(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fy(e))}saveEventToCache(e){this.cachedEventUids.add(Fy(e)),this.lastProcessedEventTime=Date.now()}}function Fy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ux(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KE(t);default:return!1}}/**
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
 */async function zx(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const jx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vx=/^https?/;async function Wx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zx(t);for(const n of e)try{if($x(n))return}catch{}un(t,"unauthorized-domain")}function $x(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vx.test(n))return!1;if(jx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Bx=new Ha(3e4,6e4);function Uy(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hx(t){return new Promise((e,n)=>{var r,i,s;function o(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),n(yn(t,"network-request-failed"))},timeout:Bx.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=DP("iframefcb");return _n()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},xE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw au=null,e})}let au=null;function Gx(t){return au=au||Hx(t),au}/**
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
 */const Kx=new Ha(5e3,15e3),Yx="__/auth/iframe",qx="emulator/auth/iframe",Qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jx(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sm(e,qx):`https://${t.config.authDomain}/${Yx}`,r={apiKey:e.apiKey,appName:t.name,v:js},i=Xx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zs(r).slice(1)}`}async function Zx(t){const e=await Gx(t),n=_n().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Jx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},Kx.get());function l(){_n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const eN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tN=500,nN=600,rN="_blank",iN="http://localhost";class zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sN(t,e,n,r=tN,i=nN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=dt().toLowerCase();n&&(a=CE(u)?rN:n),SE(u)&&(e=e||iN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(IP(u)&&a!=="_self")return oN(e||"",a),new zy(null);const d=window.open(e||"",a,c);B(d,t,"popup-blocked");try{d.focus()}catch{}return new zy(d)}function oN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aN="__/auth/handler",lN="emulator/auth/handler",uN=encodeURIComponent("fac");async function jy(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:i};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Eh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ka){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${uN}=${encodeURIComponent(l)}`:"";return`${cN(t)}?${zs(a).slice(1)}${u}`}function cN({config:t}){return t.emulator?Sm(t,lN):`https://${t.authDomain}/${aN}`}/**
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
 */const sf="webStorageSupport";class dN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VE,this._completeRedirectFn=Mx,this._overrideRedirectResult=Ax}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jy(e,n,r,Rh(),i);return sN(e,o,Tm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jy(e,n,r,Rh(),i);return px(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Zx(e),r=new Fx(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sf,{type:sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sf];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RE()||km()||jc()}}const fN=dN;var Vy="@firebase/auth",Wy="1.2.0";/**
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
 */class hN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mN(t){ks(new vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PE(t)},u=new AP(r,i,s,l);return jP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ks(new vi("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new hN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(Vy,Wy,pN(t)),Tr(Vy,Wy,"esm2017")}/**
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
 */const gN=5*60,vN=sE("authIdTokenMaxAge")||gN;let $y=null;const yN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vN)return;const i=n==null?void 0:n.token;$y!==i&&($y=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YE(t=fE()){const e=_m(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zP(t,{popupRedirectResolver:fN,persistence:[Cx,dx,VE]}),r=sE("authTokenSyncURL");if(r){const s=yN(r);sx(n,s,()=>s(n.currentUser)),ix(n,o=>s(o))}const i=rE("auth");return i&&VP(n,`http://${i}`),n}mN("Browser");const By="@firebase/database",Hy="1.0.1";/**
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
 */let qE="";function _N(t){qE=t}/**
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
 */class wN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class EN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const QE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wN(e)}}catch{}return new EN},ti=QE("localStorage"),xh=QE("sessionStorage");/**
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
 */const cs=new vm("@firebase/database"),SN=function(){let t=1;return function(){return t++}}(),XE=function(t){const e=Q2(t),n=new G2;n.update(e);const r=n.digest();return hm.encodeByteArray(r)},qa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qa.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let ui=null,Gy=!0;const CN=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cs.logLevel=me.VERBOSE,ui=cs.log.bind(cs),e&&xh.set("logging_enabled",!0)):typeof t=="function"?ui=t:(ui=null,xh.remove("logging_enabled"))},ut=function(...t){if(Gy===!0&&(Gy=!1,ui===null&&xh.get("logging_enabled")===!0&&CN(!0)),ui){const e=qa.apply(null,t);ui(e)}},Qa=function(t){return function(...e){ut(t,...e)}},Nh=function(...t){const e="FIREBASE INTERNAL ERROR: "+qa(...t);cs.error(e)},$n=function(...t){const e=`FIREBASE FATAL ERROR: ${qa(...t)}`;throw cs.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+qa(...t);cs.warn(e)},kN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},JE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ts="[MIN_NAME]",Ei="[MAX_NAME]",Ws=function(t,e){if(t===e)return 0;if(t===Ts||e===Ei)return-1;if(e===Ts||t===Ei)return 1;{const n=Ky(t),r=Ky(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bN=function(t,e){return t===e?0:t<e?-1:1},fo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},Pm=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Be(e[r]),n+=":",n+=Pm(t[e[r]]);return n+="}",n},ZE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const eS=function(t){N(!JE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},TN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function PN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xN=new RegExp("^-?(0*)\\d{1,10}$"),NN=-2147483648,AN=2147483647,Ky=function(t){if(xN.test(t)){const e=Number(t);if(e>=NN&&e<=AN)return e}return null},$s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ON=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Uo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class MN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
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
 */const xm="5",tS="v",nS="s",rS="r",iS="f",sS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oS="ls",aS="p",Ah="ac",lS="websocket",uS="long_polling";/**
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
 */class cS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dS(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===lS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LN(t)&&(n.ns=t.namespace);const i=[];return Rt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class FN{constructor(){this.counters_={}}incrementCounter(e,n=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return P2(this.counters_)}}/**
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
 */const of={},af={};function Nm(t){const e=t.toString();return of[e]||(of[e]=new FN),of[e]}function UN(t,e){const n=t.toString();return af[n]||(af[n]=e()),af[n]}/**
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
 */class zN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$s(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Yy="start",jN="close",VN="pLPCommand",WN="pRTLPCB",fS="id",hS="pw",pS="ser",$N="cb",BN="seg",HN="ts",GN="d",KN="dframe",mS=1870,gS=30,YN=mS-gS,qN=25e3,QN=3e4;class Xi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qa(e),this.stats_=Nm(n),this.urlFn=l=>(this.appCheckToken&&(l[Ah]=this.appCheckToken),dS(n,uS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QN)),IN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Am((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yy)this.id=a,this.password=l;else if(o===jN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Yy]="t",r[pS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$N]=this.scriptTagHolder.uniqueCallbackIdentifier),r[tS]=xm,this.transportSessionId&&(r[nS]=this.transportSessionId),this.lastSessionId&&(r[oS]=this.lastSessionId),this.applicationId&&(r[aS]=this.applicationId),this.appCheckToken&&(r[Ah]=this.appCheckToken),typeof location<"u"&&location.hostname&&sS.test(location.hostname)&&(r[rS]=iS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xi.forceAllow_=!0}static forceDisallow(){Xi.forceDisallow_=!0}static isAvailable(){return Xi.forceAllow_?!0:!Xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TN()&&!RN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tE(n),i=ZE(r,YN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[KN]="t",r[fS]=e,r[hS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Am{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SN(),window[VN+this.uniqueCallbackIdentifier]=e,window[WN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Am.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ut("frame writing exception"),a.stack&&ut(a.stack),ut(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ut("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fS]=this.myID,e[hS]=this.myPW,e[pS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gS+r.length<=mS;){const o=this.pendingSegs.shift();r=r+"&"+BN+i+"="+o.seg+"&"+HN+i+"="+o.ts+"&"+GN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(qN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const XN=16384,JN=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qa(this.connId),this.stats_=Nm(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[tS]=xm,typeof location<"u"&&location.hostname&&sS.test(location.hostname)&&(o[rS]=iS),n&&(o[nS]=n),r&&(o[oS]=r),i&&(o[Ah]=i),s&&(o[aS]=s),dS(e,lS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;aE(),this.mySock=new Yu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!Zt.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ZE(n,XN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
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
 */class va{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xi,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of va.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);va.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}va.globalTransportInitialized_=!1;/**
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
 */const ZN=6e4,eA=5e3,tA=10*1024,nA=100*1024,lf="t",qy="d",rA="s",Qy="r",iA="e",Xy="o",Jy="a",Zy="n",e_="p",sA="h";class oA{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qa("c:"+this.id+":"),this.transportManager_=new va(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lf in e){const n=e[lf];n===Jy?this.upgradeIfSecondaryHealthy_():n===Qy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fo("t",e),r=fo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:e_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fo("t",e),r=fo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fo(lf,e);if(qy in e){const r=e[qy];if(n===sA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rA?this.onConnectionShutdown_(r):n===Qy?this.onReset_(r):n===iA?Nh("Server Error: "+r):n===Xy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xm!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:e_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class yS{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qu extends yS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qu}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const t_=32,n_=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new ve("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Or(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function _S(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ES(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function He(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function pt(t,e){const n=Z(t),r=Z(e);if(n===null)return e;if(n===r)return pt(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Om(t,e){if(Or(t)!==Or(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function en(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Or(t)>Or(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class lA{constructor(e,n){this.errorPrefix_=n,this.parts_=wS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zc(this.parts_[r]);SS(this)}}function uA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zc(e),SS(t)}function cA(t){const e=t.parts_.pop();t.byteLength_-=zc(e),t.parts_.length>0&&(t.byteLength_-=1)}function SS(t){if(t.byteLength_>n_)throw new Error(t.errorPrefix_+"has a key path longer than "+n_+" bytes ("+t.byteLength_+").");if(t.parts_.length>t_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t_+") or object contains a cycle "+Qr(t))}function Qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Dm extends yS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dm}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ho=1e3,dA=60*5*1e3,r_=30*1e3,fA=1.3,hA=3e4,pA="server_kill",i_=3;class Fn extends vS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=dA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!aE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Be(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Uc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yn(e,"w")){const r=Cs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||H2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=r_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=B2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nh("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hA&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new oA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Tt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(pA)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Tt(d),l())}}}interrupt(e){ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eh(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Pm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ut("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=i_&&(this.reconnectDelay_=r_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ut("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=i_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qE.replace(/\./g,"-")]=1,mm()?e["framework.cordova"]=1:oE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qu.getInstance().currentlyOnline();return Eh(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class $c{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ee(Ts,e),i=new ee(Ts,n);return this.compare(r,i)!==0}minPost(){return ee.MIN}}/**
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
 */let Nl;class CS extends $c{static get __EMPTY_NODE(){return Nl}static set __EMPTY_NODE(e){Nl=e}compare(e,n){return Ws(e.name,n.name)}isDefinedOn(e){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Ei,Nl)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Nl)}toString(){return".key"}}const fs=new CS;/**
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
 */class Al{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Ct.EMPTY_NODE,this.right=s??Ct.EMPTY_NODE}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class mA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Al(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Al(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Al(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Al(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new mA;/**
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
 */function gA(t,e){return Ws(t.name,e.name)}function Mm(t,e){return Ws(t,e)}/**
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
 */let Oh;function vA(t){Oh=t}const kS=function(t){return typeof t=="number"?"number:"+eS(t):"string:"+t},IS=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else N(t===Oh||t.isEmpty(),"priority of unexpected type.");N(t===Oh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let s_;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),IS(this.priorityNode_)}static set __childrenNodeConstructor(e){s_=e}static get __childrenNodeConstructor(){return s_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:Z(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=eS(this.value_):e+=this.value_,this.lazyHash_=XE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bS,TS;function yA(t){bS=t}function _A(t){TS=t}class wA extends $c{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ws(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Ei,new Qe("[PRIORITY-POST]",TS))}makePost(e,n){const r=bS(e);return new ee(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new wA;/**
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
 */const EA=Math.log(2);class SA{constructor(e){const n=s=>parseInt(Math.log(s)/EA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Je(f,d.node,Je.BLACK,null,null);{const g=parseInt(c/2,10)+l,v=i(l,g),_=i(g+1,u);return d=t[g],f=n?n(d):d,new Je(f,d.node,Je.BLACK,v,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,_){const w=d-v,p=d;d-=v;const h=i(w+1,p),y=t[w],m=n?n(y):y;g(new Je(m,y.node,_,null,h))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(v+1));_?f(w,Je.BLACK):(f(w,Je.BLACK),f(w,Je.RED))}return c},o=new SA(t.length),a=s(o);return new Ct(r||e,a)};/**
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
 */let uf;const Ai={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Ai&&De,"ChildrenNode.ts has not been loaded"),uf=uf||new Dn({".priority":Ai},{".priority":De}),uf}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Qu(r,e.getCompare()):a=Ai;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Dn(c,u)}addToIndexes(e,n){const r=ju(this.indexes_,(i,s)=>{const o=Cs(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Qu(a,o.getCompare())}else return Ai;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Dn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ju(this.indexes_,i=>{if(i===Ai)return i;{const s=n.get(e.name);return s?i.remove(new ee(e.name,s)):i}});return new Dn(r,this.indexSet_)}}/**
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
 */let po;class H{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&IS(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return po||(po=new H(new Ct(Mm),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||po}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?po:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?po:this.priorityNode_;return new H(i,o,s)}}updateChild(e,n){const r=Z(e);if(r===null)return n;{N(Z(e)!==".priority"||Or(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kS(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":XE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xa?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CA extends H{constructor(){super(new Ct(Mm),H.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Xa=new CA;Object.defineProperties(ee,{MIN:{value:new ee(Ts,H.EMPTY_NODE)},MAX:{value:new ee(Ei,Xa)}});CS.__EMPTY_NODE=H.EMPTY_NODE;Qe.__childrenNodeConstructor=H;vA(Xa);_A(Xa);/**
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
 */const kA=!0;function Ze(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,Ze(e))}if(!(t instanceof Array)&&kA){const n=[];let r=!1;if(Rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ze(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return H.EMPTY_NODE;const s=Qu(n,gA,o=>o.name,Mm);if(r){const o=Qu(n,De.getCompare());return new H(s,Ze(e),new Dn({".priority":o},{".priority":De}))}else return new H(s,Ze(e),Dn.Default)}else{let n=H.EMPTY_NODE;return Rt(t,(r,i)=>{if(Yn(t,r)&&r.substring(0,1)!=="."){const s=Ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ze(e))}}yA(Ze);/**
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
 */class IA extends $c{constructor(e){super(),this.indexPath_=e,N(!re(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ws(e.name,n.name):s}makePost(e,n){const r=Ze(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Xa);return new ee(Ei,e)}toString(){return wS(this.indexPath_,0).join("/")}}/**
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
 */class bA extends $c{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ws(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const r=Ze(e);return new ee(n,r)}toString(){return".value"}}const TA=new bA;/**
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
 */function RS(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ya(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _a(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Lm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ya(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,r)):o.trackChildChange(_a(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(ya(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_a(i,s,o))}else r.trackChildChange(Rs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wa{constructor(e){this.indexedFilter_=new Lm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wa.getStartPost_(e),this.endPost_=wa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ee(n,r))||(r=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new ee(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class PA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new wa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ee(n,r))||(r=H.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new ee(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(_a(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ya(n,d));const _=a.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Rs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ya(u.name,u.node)),s.trackChildChange(Rs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,H.EMPTY_NODE)):e}}/**
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
 */class Fm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ts}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Fm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xA(t){return t.loadsAllData()?new Lm(t.getIndex()):t.hasLimit()?new PA(t):new wa(t)}function o_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===TA?n="$value":t.index_===fs?n="$key":(N(t.index_ instanceof IA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function a_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
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
 */class Xu extends vS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xu.getListenId_(e,r),a={};this.listens_[o]=a;const l=o_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Cs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Xu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=o_(e._queryParams),r=e._path.toString(),i=new Uc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ha(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class NA{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ju(){return{value:null,children:new Map}}function PS(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Z(e);t.children.has(r)||t.children.set(r,Ju());const i=t.children.get(r);e=_e(e),PS(i,e,n)}}function Dh(t,e,n){t.value!==null?n(e,t.value):AA(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);Dh(i,s,n)})}function AA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class OA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Rt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const l_=10*1e3,DA=30*1e3,MA=5*60*1e3;class LA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OA(e);const r=l_+(DA-l_)*Math.random();Uo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Rt(e,(i,s)=>{s>0&&Yn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*MA))}}/**
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
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function xS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Um(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Zu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=xS()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Zu(le(),n,this.revert)}}else return N(Z(this.path)===e,"operationForChild called for unrelated child."),new Zu(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ea{constructor(e,n){this.source=e,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Ea(this.source,le()):new Ea(this.source,_e(this.path))}}/**
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
 */class Si{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(e){return re(this.path)?new Si(this.source,le(),this.snap.getImmediateChild(e)):new Si(this.source,_e(this.path),this.snap)}}/**
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
 */class Sa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Si(this.source,le(),n.value):new Sa(this.source,le(),n)}else return N(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sa(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Dr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class FA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(RA(o.childName,o.snapshotNode))}),mo(t,i,"child_removed",e,r,n),mo(t,i,"child_added",e,r,n),mo(t,i,"child_moved",s,r,n),mo(t,i,"child_changed",e,r,n),mo(t,i,"value",e,r,n),i}function mo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>jA(t,a,l)),o.forEach(a=>{const l=zA(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function zA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jA(t,e,n){if(e.childName==null||n.childName==null)throw Us("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Bc(t,e){return{eventCache:t,serverCache:e}}function zo(t,e,n,r){return Bc(new Dr(e,n,r),t.serverCache)}function NS(t,e,n,r){return Bc(t.eventCache,new Dr(e,n,r))}function ec(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let cf;const VA=()=>(cf||(cf=new Ct(bN)),cf);class Ce{constructor(e,n=VA()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Rt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(re(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:He(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=Z(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new Ce(null)}}set(e,n){if(re(e))return new Ce(n,this.children);{const r=Z(e),s=(this.children.get(r)||new Ce(null)).set(_e(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=Z(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=Z(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(re(e))return n;{const r=Z(e),s=(this.children.get(r)||new Ce(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(He(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),He(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),He(n,i),r):new Ce(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(He(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Ce(null))}}function jo(t,e,n){if(re(e))return new an(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=pt(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function u_(t,e,n){let r=t;return Rt(n,(i,s)=>{r=jo(r,He(e,i),s)}),r}function c_(t,e){if(re(e))return an.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new an(n)}}function Mh(t,e){return xi(t,e)!=null}function xi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function d_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ee(r,i.value))}),e}function Rr(t,e){if(re(e))return t;{const n=xi(t,e);return n!=null?new an(new Ce(n)):new an(t.writeTree_.subtree(e))}}function Lh(t){return t.writeTree_.isEmpty()}function Ps(t,e){return AS(le(),t.writeTree_,e)}function AS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=AS(He(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(He(t,".priority"),r)),n}}/**
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
 */function Hc(t,e){return LS(e,t)}function WA(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=jo(t.visibleWrites,e,n)),t.lastWriteId=r}function $A(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HA(a,r.path)?i=!1:en(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return GA(t),!0;if(r.snap)t.visibleWrites=c_(t.visibleWrites,r.path);else{const a=r.children;Rt(a,l=>{t.visibleWrites=c_(t.visibleWrites,He(r.path,l))})}return!0}else return!1}function HA(t,e){if(t.snap)return en(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&en(He(t.path,n),e))return!0;return!1}function GA(t){t.visibleWrites=OS(t.allWrites,KA,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KA(t){return t.visible}function OS(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)en(n,o)?(a=pt(n,o),r=jo(r,a,s.snap)):en(o,n)&&(a=pt(o,n),r=jo(r,le(),s.snap.getChild(a)));else if(s.children){if(en(n,o))a=pt(n,o),r=u_(r,a,s.children);else if(en(o,n))if(a=pt(o,n),re(a))r=u_(r,le(),s.children);else{const l=Cs(s.children,Z(a));if(l){const u=l.getChild(_e(a));r=jo(r,le(),u)}}}else throw Us("WriteRecord should have .snap or .children")}}return r}function DS(t,e,n,r,i){if(!r&&!i){const s=xi(t.visibleWrites,e);if(s!=null)return s;{const o=Rr(t.visibleWrites,e);if(Lh(o))return n;if(n==null&&!Mh(o,le()))return null;{const a=n||H.EMPTY_NODE;return Ps(o,a)}}}else{const s=Rr(t.visibleWrites,e);if(!i&&Lh(s))return n;if(!i&&n==null&&!Mh(s,le()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(en(u.path,e)||en(e,u.path))},a=OS(t.allWrites,o,e),l=n||H.EMPTY_NODE;return Ps(a,l)}}}function YA(t,e,n){let r=H.EMPTY_NODE;const i=xi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=Ps(Rr(s,new ve(o)),a);r=r.updateImmediateChild(o,l)}),d_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rr(t.visibleWrites,e);return d_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qA(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=He(e,n);if(Mh(t.visibleWrites,s))return null;{const o=Rr(t.visibleWrites,s);return Lh(o)?i.getChild(n):Ps(o,i.getChild(n))}}function QA(t,e,n,r){const i=He(e,n),s=xi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rr(t.visibleWrites,i);return Ps(o,r.getNode().getImmediateChild(n))}else return null}function XA(t,e){return xi(t.visibleWrites,e)}function JA(t,e,n,r,i,s,o){let a;const l=Rr(t.visibleWrites,e),u=xi(l,le());if(u!=null)a=u;else if(n!=null)a=Ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function ZA(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function tc(t,e,n,r){return DS(t.writeTree,t.treePath,e,n,r)}function jm(t,e){return YA(t.writeTree,t.treePath,e)}function f_(t,e,n,r){return qA(t.writeTree,t.treePath,e,n,r)}function nc(t,e){return XA(t.writeTree,He(t.treePath,e))}function eO(t,e,n,r,i,s){return JA(t.writeTree,t.treePath,e,n,r,i,s)}function Vm(t,e,n){return QA(t.writeTree,t.treePath,e,n)}function MS(t,e){return LS(He(t.treePath,e),t.writeTree)}function LS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class tO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_a(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ya(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Rs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_a(r,e.snapshotNode,i.oldSnap));else throw Us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class nO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const FS=new nO;class Wm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ci(this.viewCache_),s=eO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function rO(t){return{filter:t}}function iO(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sO(t,e,n,r,i){const s=new tO;let o,a;if(n.type===tn.OVERWRITE){const u=n;u.source.fromUser?o=Fh(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=rc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===tn.MERGE){const u=n;u.source.fromUser?o=aO(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Uh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===tn.ACK_USER_WRITE){const u=n;u.revert?o=cO(t,e,u.path,r,i,s):o=lO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=uO(t,e,n.path,r,s);else throw Us("Unknown operation type: "+n.type);const l=s.getChanges();return oO(e,o,l),{viewCache:o,changes:l}}function oO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ec(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(RS(ec(e)))}}function US(t,e,n,r,i,s){const o=e.eventCache;if(nc(r,n)!=null)return e;{let a,l;if(re(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ci(e),c=u instanceof H?u:H.EMPTY_NODE,d=jm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=tc(r,Ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Z(n);if(u===".priority"){N(Or(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=f_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=_e(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=f_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Vm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return zo(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function rc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=Z(n);if(!l.isCompleteForPath(n)&&Or(n)>1)return e;const v=_e(n),w=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),g,w,v,FS,null)}const d=NS(e,u,l.isFullyInitialized()||re(n),c.filtersNodes()),f=new Wm(i,d,s);return US(t,d,n,i,f,a)}function Fh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Wm(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=zo(e,u,!0,t.filter.filtersNodes());else{const d=Z(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=zo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=_e(n),g=a.getNode().getImmediateChild(d);let v;if(re(f))v=r;else{const _=c.getCompleteChild(d);_!=null?_S(f)===".priority"&&_.getChild(ES(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=H.EMPTY_NODE}if(g.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=zo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function h_(t,e){return t.eventCache.isCompleteForChild(e)}function aO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=He(n,l);h_(e,Z(c))&&(a=Fh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=He(n,l);h_(e,Z(c))||(a=Fh(t,a,c,u,i,s,o))}),a}function p_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Uh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;re(n)?u=r:u=new Ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=p_(t,g,f);l=rc(t,l,new ve(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),_=p_(t,v,f);l=rc(t,l,new ve(d),_,i,s,o,a)}}),l}function lO(t,e,n,r,i,s,o){if(nc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(re(n)){let u=new Ce(null);return l.getNode().forEachChild(fs,(c,d)=>{u=u.set(new ve(c),d)}),Uh(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((c,d)=>{const f=He(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Uh(t,e,n,u,i,s,a,o)}}function uO(t,e,n,r,i){const s=e.serverCache,o=NS(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return US(t,o,n,r,FS,i)}function cO(t,e,n,r,i,s){let o;if(nc(r,n)!=null)return e;{const a=new Wm(r,e,i),l=e.eventCache.getNode();let u;if(re(n)||Z(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=tc(r,Ci(e));else{const d=e.serverCache.getNode();N(d instanceof H,"serverChildren would be complete if leaf node"),c=jm(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=Z(n);let d=Vm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,_e(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,H.EMPTY_NODE,_e(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tc(r,Ci(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||nc(r,le())!=null,zo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class dO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Lm(r.getIndex()),s=xA(r);this.processor_=rO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(H.EMPTY_NODE,a.getNode(),null),c=new Dr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Dr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bc(d,c),this.eventGenerator_=new FA(this.query_)}get query(){return this.query_}}function fO(t){return t.viewCache_.serverCache.getNode()}function hO(t){return ec(t.viewCache_)}function pO(t,e){const n=Ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function m_(t){return t.eventRegistrations_.length===0}function mO(t,e){t.eventRegistrations_.push(e)}function g_(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function v_(t,e,n,r){e.type===tn.MERGE&&e.source.queryId!==null&&(N(Ci(t.viewCache_),"We should always have a full cache before handling merges"),N(ec(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=sO(t.processor_,i,e,n,r);return iO(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function gO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(Rs(s,o))}),n.isFullyInitialized()&&r.push(RS(n.getNode())),zS(t,r,n.getNode(),e)}function zS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UA(t.eventGenerator_,e,n,i)}/**
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
 */let ic;class jS{constructor(){this.views=new Map}}function vO(t){N(!ic,"__referenceConstructor has already been defined"),ic=t}function yO(){return N(ic,"Reference.ts has not been loaded"),ic}function _O(t){return t.views.size===0}function $m(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),v_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(v_(o,e,n,r));return s}}function VS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=tc(n,i?r:null),l=!1;a?l=!0:r instanceof H?(a=jm(n,r),l=!1):(a=H.EMPTY_NODE,l=!1);const u=Bc(new Dr(a,l,!1),new Dr(r,i,!1));return new dO(e,u)}return o}function wO(t,e,n,r,i,s){const o=VS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mO(o,n),gO(o,n)}function EO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Mr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(g_(u,n,r)),m_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(g_(l,n,r)),m_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Mr(t)&&s.push(new(yO())(e._repo,e._path)),{removed:s,events:o}}function WS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const r of t.views.values())n=n||pO(r,e);return n}function $S(t,e){if(e._queryParams.loadsAllData())return Gc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function BS(t,e){return $S(t,e)!=null}function Mr(t){return Gc(t)!=null}function Gc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sc;function SO(t){N(!sc,"__referenceConstructor has already been defined"),sc=t}function CO(){return N(sc,"Reference.ts has not been loaded"),sc}let kO=1;class y_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=ZA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function HS(t,e,n,r,i){return WA(t.pendingWriteTree_,e,n,r,i),i?Za(t,new Si(xS(),e,n)):[]}function ni(t,e,n=!1){const r=$A(t.pendingWriteTree_,e);if(BA(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(le(),!0):Rt(r.children,o=>{s=s.set(new ve(o),!0)}),Za(t,new Zu(r.path,s,n))}else return[]}function Ja(t,e,n){return Za(t,new Si(Um(),e,n))}function IO(t,e,n){const r=Ce.fromObject(n);return Za(t,new Sa(Um(),e,r))}function bO(t,e){return Za(t,new Ea(Um(),e))}function TO(t,e,n){const r=Hm(t,n);if(r){const i=Gm(r),s=i.path,o=i.queryId,a=pt(s,e),l=new Ea(zm(o),a);return Km(t,s,l)}else return[]}function oc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||BS(o,e))){const l=EO(o,e,n,r);_O(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>Mr(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=xO(f);for(let v=0;v<g.length;++v){const _=g[v],w=_.query,p=qS(t,_);t.listenProvider_.startListening(Vo(w),Ca(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Vo(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Kc(f));t.listenProvider_.stopListening(Vo(f),g)}))}NO(t,u)}return a}function GS(t,e,n,r){const i=Hm(t,r);if(i!=null){const s=Gm(i),o=s.path,a=s.queryId,l=pt(o,e),u=new Si(zm(a),l,n);return Km(t,o,u)}else return[]}function RO(t,e,n,r){const i=Hm(t,r);if(i){const s=Gm(i),o=s.path,a=s.queryId,l=pt(o,e),u=Ce.fromObject(n),c=new Sa(zm(a),l,u);return Km(t,o,c)}else return[]}function zh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=pt(f,i);s=s||Pr(g,v),o=o||Mr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Mr(a),s=s||Pr(a,le())):(a=new jS,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const _=Pr(v,le());_&&(s=s.updateImmediateChild(g,_))}));const u=BS(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Kc(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=AO();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=Hc(t.pendingWriteTree_,i);let d=wO(a,e,n,c,s,l);if(!u&&!o&&!r){const f=$S(a,e);d=d.concat(OO(t,e,f))}return d}function Bm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=pt(o,e),u=Pr(a,l);if(u)return u});return DS(i,e,s,n,!0)}function PO(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=pt(u,n);r=r||Pr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Pr(i,le()):(i=new jS,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Dr(r,!0,!1):null,a=Hc(t.pendingWriteTree_,e._path),l=VS(i,e,a,s?o.getNode():H.EMPTY_NODE,s);return hO(l)}function Za(t,e){return KS(e,t.syncPointTree_,null,Hc(t.pendingWriteTree_,le()))}function KS(t,e,n,r){if(re(t.path))return YS(t,e,n,r);{const i=e.get(le());n==null&&i!=null&&(n=Pr(i,le()));let s=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=MS(r,o);s=s.concat(KS(a,l,u,c))}return i&&(s=s.concat($m(i,t,r,n))),s}}function YS(t,e,n,r){const i=e.get(le());n==null&&i!=null&&(n=Pr(i,le()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=MS(r,o),c=t.operationForChild(o);c&&(s=s.concat(YS(c,a,l,u)))}),i&&(s=s.concat($m(i,t,r,n))),s}function qS(t,e){const n=e.query,r=Ca(t,n);return{hashFn:()=>(fO(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?TO(t,n._path,r):bO(t,n._path);{const s=PN(i,n);return oc(t,n,null,s)}}}}function Ca(t,e){const n=Kc(e);return t.queryToTagMap.get(n)}function Kc(t){return t._path.toString()+"$"+t._queryIdentifier}function Hm(t,e){return t.tagToQueryMap.get(e)}function Gm(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Km(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=Hc(t.pendingWriteTree_,e);return $m(r,n,i,null)}function xO(t){return t.fold((e,n,r)=>{if(n&&Mr(n))return[Gc(n)];{let i=[];return n&&(i=WS(n)),Rt(r,(s,o)=>{i=i.concat(o)}),i}})}function Vo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CO())(t._repo,t._path):t}function NO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Kc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function AO(){return kO++}function OO(t,e,n){const r=e._path,i=Ca(t,e),s=qS(t,n),o=t.listenProvider_.startListening(Vo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!Mr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!re(u)&&c&&Mr(c))return[Gc(c).query];{let f=[];return c&&(f=f.concat(WS(c).map(g=>g.query))),Rt(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Vo(c),Ca(t,c))}}return o}/**
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
 */class Ym{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ym(n)}node(){return this.node_}}class qm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new qm(this.syncTree_,n)}node(){return Bm(this.syncTree_,this.path_)}}const DO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},__=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LO(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},LO=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FO=function(t,e,n,r){return Qm(e,new qm(n,t),r)},QS=function(t,e,n){return Qm(t,new Ym(e),n)};function Qm(t,e,n){const r=t.getPriority().val(),i=__(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=__(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,Ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(De,(a,l)=>{const u=Qm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Xm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jm(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=Z(n);for(;i!==null;){const s=Cs(r.node.children,i)||{children:{},childCount:0};r=new Xm(i,r,s),n=_e(n),i=Z(n)}return r}function Bs(t){return t.node.value}function XS(t,e){t.node.value=e,jh(t)}function JS(t){return t.node.childCount>0}function UO(t){return Bs(t)===void 0&&!JS(t)}function Yc(t,e){Rt(t.node.children,(n,r)=>{e(new Xm(n,t,r))})}function ZS(t,e,n,r){n&&!r&&e(t),Yc(t,i=>{ZS(i,e,!0,r)}),n&&r&&e(t)}function zO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function el(t){return new ve(t.parent===null?t.name:el(t.parent)+"/"+t.name)}function jh(t){t.parent!==null&&jO(t.parent,t.name,t)}function jO(t,e,n){const r=UO(n),i=Yn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jh(t))}/**
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
 */const VO=/[\[\].#$\/\u0000-\u001F\u007F]/,WO=/[\[\].#$\u0000-\u001F\u007F]/,df=10*1024*1024,eC=function(t){return typeof t=="string"&&t.length!==0&&!VO.test(t)},tC=function(t){return typeof t=="string"&&t.length!==0&&!WO.test(t)},$O=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tC(t)},BO=function(t,e,n,r){r&&e===void 0||Zm(gm(t,"value"),e,n)},Zm=function(t,e,n){const r=n instanceof ve?new lA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qr(r)+" with contents = "+e.toString());if(JE(e))throw new Error(t+"contains "+e.toString()+" "+Qr(r));if(typeof e=="string"&&e.length>df/3&&zc(e)>df)throw new Error(t+"contains a string greater than "+df+" utf8 bytes "+Qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!eC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uA(r,o),Zm(t,a,r),cA(r)}),i&&s)throw new Error(t+' contains ".value" child '+Qr(r)+" in addition to actual children.")}},nC=function(t,e,n,r){if(!(r&&n===void 0)&&!tC(n))throw new Error(gm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nC(t,e,n,r)},rC=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$O(n))throw new Error(gm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Om(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function iC(t,e,n){eg(t,n),sC(t,r=>Om(r,e))}function wn(t,e,n){eg(t,n),sC(t,r=>en(r,e)||en(e,r))}function sC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(YO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ui&&ut("event: "+n.toString()),$s(r)}}}/**
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
 */const qO="repo_interrupt",QO=25;class XO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ju(),this.transactionQueueTree_=new Xm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JO(t,e,n){if(t.stats_=Nm(t.repoInfo_),t.forceRestClient_||ON())t.server_=new Xu(t.repoInfo_,(r,i,s,o)=>{w_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>E_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{w_(t,r,i,s,o)},r=>{E_(t,r)},r=>{e4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=UN(t.repoInfo_,()=>new LA(t.stats_,t.server_)),t.infoData_=new NA,t.infoSyncTree_=new y_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ja(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ng(t,"connected",!1),t.serverSyncTree_=new y_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);wn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ZO(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tg(t){return DO({timestamp:ZO(t)})}function w_(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ju(n,u=>Ze(u));o=RO(t.serverSyncTree_,s,l,i)}else{const l=Ze(n);o=GS(t.serverSyncTree_,s,l,i)}else if(r){const l=ju(n,u=>Ze(u));o=IO(t.serverSyncTree_,s,l)}else{const l=Ze(n);o=Ja(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Qc(t,s)),wn(t.eventQueue_,a,o)}function E_(t,e){ng(t,"connected",e),e===!1&&r4(t)}function e4(t,e){Rt(e,(n,r)=>{ng(t,n,r)})}function ng(t,e,n){const r=new ve("/.info/"+e),i=Ze(n);t.infoData_.updateSnapshot(r,i);const s=Ja(t.infoSyncTree_,r,i);wn(t.eventQueue_,r,s)}function oC(t){return t.nextWriteId_++}function t4(t,e,n){const r=PO(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ze(i).withIndex(e._queryParams.getIndex());zh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ja(t.serverSyncTree_,e._path,s);else{const a=Ca(t.serverSyncTree_,e);o=GS(t.serverSyncTree_,e._path,s,a)}return wn(t.eventQueue_,e._path,o),oc(t.serverSyncTree_,e,n,null,!0),s},i=>(qc(t,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function n4(t,e,n,r,i){qc(t,"set",{path:e.toString(),value:n,priority:r});const s=tg(t),o=Ze(n,r),a=Bm(t.serverSyncTree_,e),l=QS(o,a,s),u=oC(t),c=HS(t.serverSyncTree_,e,l,u,!0);eg(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Tt("set at "+e+" failed: "+f);const _=ni(t.serverSyncTree_,u,!v);wn(t.eventQueue_,e,_),o4(t,i,f,g)});const d=dC(t,e);Qc(t,d),wn(t.eventQueue_,d,[])}function r4(t){qc(t,"onDisconnectEvents");const e=tg(t),n=Ju();Dh(t.onDisconnect_,le(),(i,s)=>{const o=FO(i,s,t.serverSyncTree_,e);PS(n,i,o)});let r=[];Dh(n,le(),(i,s)=>{r=r.concat(Ja(t.serverSyncTree_,i,s));const o=dC(t,i);Qc(t,o)}),t.onDisconnect_=Ju(),wn(t.eventQueue_,le(),r)}function i4(t,e,n){let r;Z(e._path)===".info"?r=zh(t.infoSyncTree_,e,n):r=zh(t.serverSyncTree_,e,n),iC(t.eventQueue_,e._path,r)}function S_(t,e,n){let r;Z(e._path)===".info"?r=oc(t.infoSyncTree_,e,n):r=oc(t.serverSyncTree_,e,n),iC(t.eventQueue_,e._path,r)}function s4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qO)}function qc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ut(n,...e)}function o4(t,e,n,r){e&&$s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function aC(t,e,n){return Bm(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function rg(t,e=t.transactionQueueTree_){if(e||Xc(t,e),Bs(e)){const n=uC(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&a4(t,el(e),n)}else JS(e)&&Yc(e,n=>{rg(t,n)})}function a4(t,e,n){const r=n.map(u=>u.currentWriteId),i=aC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=pt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{qc(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ni(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Xc(t,Jm(t.transactionQueueTree_,e)),rg(t,t.transactionQueueTree_),wn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)$s(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Qc(t,e)}},o)}function Qc(t,e){const n=lC(t,e),r=el(n),i=uC(t,n);return l4(t,i,r),r}function l4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=pt(n,l.path);let c=!1,d;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QO)c=!0,d="maxretry",i=i.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else{const f=aC(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Zm("transaction failed: Data returned ",g,l.path);let v=Ze(g);typeof g=="object"&&g!=null&&Yn(g,".priority")||(v=v.updatePriority(f.getPriority()));const w=l.currentWriteId,p=tg(t),h=QS(v,f,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=oC(t),o.splice(o.indexOf(w),1),i=i.concat(HS(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ni(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(ni(t.serverSyncTree_,l.currentWriteId,!0))}wn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Xc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$s(r[a]);rg(t,t.transactionQueueTree_)}function lC(t,e){let n,r=t.transactionQueueTree_;for(n=Z(e);n!==null&&Bs(r)===void 0;)r=Jm(r,n),e=_e(e),n=Z(e);return r}function uC(t,e){const n=[];return cC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cC(t,e,n){const r=Bs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yc(e,i=>{cC(t,i,n)})}function Xc(t,e){const n=Bs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,XS(e,n.length>0?n:void 0)}Yc(e,r=>{Xc(t,r)})}function dC(t,e){const n=el(lC(t,e)),r=Jm(t.transactionQueueTree_,e);return zO(r,i=>{ff(t,i)}),ff(t,r),ZS(r,i=>{ff(t,i)}),n}function ff(t,e){const n=Bs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?XS(e,void 0):n.length=s+1,wn(t.eventQueue_,el(e),i);for(let o=0;o<r.length;o++)$s(r[o])}}/**
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
 */function u4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function c4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const C_=function(t,e){const n=d4(t),r=n.namespace;n.domain==="firebase.com"&&$n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},d4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=u4(t.substring(c,d)));const f=c4(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class fC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class hC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class pC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ig{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:_S(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=a_(this._queryParams),n=Pm(e);return n==="{}"?"default":n}get _queryObject(){return a_(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof ig))return!1;const n=this._repo===e._repo,r=Om(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+aA(this._path)}}class Cn extends ig{constructor(e,n){super(e,n,new Fm,!1)}get parent(){const e=ES(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=ac(this.ref,e);return new xs(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xs(i,ac(this.ref,r),De)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hs(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?ac(t._root,e):t._root}function ac(t,e){return t=Ye(t),Z(t._path)===null?HO("child","path",e,!1):nC("child","path",e,!1),new Cn(t._repo,He(t._path,e))}function f4(t){return rC("remove",t._path),Jc(t,null)}function Jc(t,e){t=Ye(t),rC("set",t._path),BO("set",e,t._path,!1);const n=new Uc;return n4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function h4(t){t=Ye(t);const e=new pC(()=>{}),n=new Zc(e);return t4(t._repo,t,n).then(r=>new xs(r,new Cn(t._repo,t._path),t._queryParams.getIndex()))}class Zc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fC("value",this,new xs(e.snapshotNode,new Cn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hC(this,e,n):null}matches(e){return e instanceof Zc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class sg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hC(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=ac(new Cn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fC(e.type,this,new xs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function p4(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{S_(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new pC(n,s||void 0),a=e==="value"?new Zc(o):new sg(e,o);return i4(t._repo,t,a),()=>S_(t._repo,t,a)}function m4(t,e,n,r){return p4(t,"value",e,n,r)}vO(Cn);SO(Cn);/**
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
 */const g4="FIREBASE_DATABASE_EMULATOR_HOST",Vh={};let v4=!1;function y4(t,e,n,r){t.repoInfo_=new cS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=C_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[g4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=C_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ds(ds.OWNER):new MN(t.name,t.options,e);GO("Invalid Firebase Database URL",o),re(o.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const d=E4(a,t,c,new DN(t.name,n));return new S4(d,t)}function w4(t,e){const n=Vh[e];(!n||n[t.key]!==t)&&$n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),s4(t),delete n[t.key]}function E4(t,e,n,r){let i=Vh[e.name];i||(i={},Vh[e.name]=i);let s=i[t.toURLString()];return s&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XO(t,v4,n,r),i[t.toURLString()]=s,s}class S4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(w4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function C4(t=fE(),e){const n=_m(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=M2("database");r&&k4(n,...r)}return n}function k4(t,e,n,r={}){t=Ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$n("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ds(ds.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:L2(r.mockUserToken,t.app.options.projectId);s=new ds(o)}y4(i,e,n,s)}/**
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
 */function I4(t){_N(js),ks(new vi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Tr(By,Hy,t),Tr(By,Hy,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};I4();const uL={serviceId:"service_cm3a5fr",templateId:"template_v6s0ygl",publicKey:"QLw-2olFqTFzTBHug"},b4={apiKey:"AIzaSyAG8LJPNXNgDKnfopB-c1CVX-Uew4uRyqU",authDomain:"schedule-maker-8675b.firebaseapp.com",projectId:"schedule-maker-8675b",storageBucket:"schedule-maker-8675b.appspot.com",messagingSenderId:"198447247334",appId:"1:198447247334:web:f009e6e7b0b144923cf027",measurementId:"G-2NLFWYGS09"},og=dE(b4),ed=YE(og);async function cL(t,e){return await ex(ed,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}async function dL(t,e){return await tx(ed,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}function T4(){return YE(og)}async function fL(){return ax(ed)}async function R4(t){return await ZP(ed,t).then(()=>null).catch(e=>e)}const Gs=C4(og);async function hL(t){const e=t.uid;await Jc(Hs(Gs,"/users/"+e+"/public"),{...t})}async function pL(t,e){const n=`/users/${t}/${e??""}`,r=await h4(Hs(Gs,n));return r.exists()?r.val():null}async function mL(t,e){const n=Hs(Gs,"/users/"+t+"/schedules");await Jc(n,e)}async function gL(t,e,n){const r=Hs(Gs,`/users/${t}/schedules/${n}/name`);await Jc(r,e)}function vL(t,e,n){const r=`/users/${t}/${n??""}`;m4(Hs(Gs,r),e)}async function yL(t){await f4(Hs(Gs,`/users/${t}`))}async function _L(t){await nx(t)}function k_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k_(Object(n),!0).forEach(function(r){Ke(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lc(t){"@babel/helpers - typeof";return lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lc(t)}function P4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x4(t,e,n){return e&&I_(t.prototype,e),n&&I_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ke(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ag(t,e){return A4(t)||D4(t,e)||mC(t,e)||L4()}function tl(t){return N4(t)||O4(t)||mC(t)||M4()}function N4(t){if(Array.isArray(t))return Wh(t)}function A4(t){if(Array.isArray(t))return t}function O4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function D4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function mC(t,e){if(t){if(typeof t=="string")return Wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wh(t,e)}}function Wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function M4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b_=function(){},lg={},gC={},vC=null,yC={mark:b_,measure:b_};try{typeof window<"u"&&(lg=window),typeof document<"u"&&(gC=document),typeof MutationObserver<"u"&&(vC=MutationObserver),typeof performance<"u"&&(yC=performance)}catch{}var F4=lg.navigator||{},T_=F4.userAgent,R_=T_===void 0?"":T_,Lr=lg,be=gC,P_=vC,Ol=yC;Lr.document;var Qn=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",_C=~R_.indexOf("MSIE")||~R_.indexOf("Trident/"),Dl,Ml,Ll,Fl,Ul,Bn="___FONT_AWESOME___",$h=16,wC="fa",EC="svg-inline--fa",ki="data-fa-i2svg",Bh="data-fa-pseudo-element",U4="data-fa-pseudo-element-pending",ug="data-prefix",cg="data-icon",x_="fontawesome-i2svg",z4="async",j4=["HTML","HEAD","STYLE","SCRIPT"],SC=function(){try{return!0}catch{return!1}}(),ke="classic",Oe="sharp",dg=[ke,Oe];function nl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ke]}})}var ka=nl((Dl={},Ke(Dl,ke,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ke(Dl,Oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Dl)),Ia=nl((Ml={},Ke(Ml,ke,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ke(Ml,Oe,{solid:"fass",regular:"fasr",light:"fasl"}),Ml)),ba=nl((Ll={},Ke(Ll,ke,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ke(Ll,Oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ll)),V4=nl((Fl={},Ke(Fl,ke,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ke(Fl,Oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Fl)),W4=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,CC="fa-layers-text",$4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,B4=nl((Ul={},Ke(Ul,ke,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ke(Ul,Oe,{900:"fass",400:"fasr",300:"fasl"}),Ul)),kC=[1,2,3,4,5,6,7,8,9,10],H4=kC.concat([11,12,13,14,15,16,17,18,19,20]),G4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ri={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ta=new Set;Object.keys(Ia[ke]).map(Ta.add.bind(Ta));Object.keys(Ia[Oe]).map(Ta.add.bind(Ta));var K4=[].concat(dg,tl(Ta),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ri.GROUP,ri.SWAP_OPACITY,ri.PRIMARY,ri.SECONDARY]).concat(kC.map(function(t){return"".concat(t,"x")})).concat(H4.map(function(t){return"w-".concat(t)})),Wo=Lr.FontAwesomeConfig||{};function Y4(t){var e=be.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function q4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(be&&typeof be.querySelector=="function"){var Q4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Q4.forEach(function(t){var e=ag(t,2),n=e[0],r=e[1],i=q4(Y4(n));i!=null&&(Wo[r]=i)})}var IC={styleDefault:"solid",familyDefault:"classic",cssPrefix:wC,replacementClass:EC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wo.familyPrefix&&(Wo.cssPrefix=Wo.familyPrefix);var Ns=O(O({},IC),Wo);Ns.autoReplaceSvg||(Ns.observeMutations=!1);var z={};Object.keys(IC).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Ns[t]=n,$o.forEach(function(r){return r(z)})},get:function(){return Ns[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Ns.cssPrefix=e,$o.forEach(function(n){return n(z)})},get:function(){return Ns.cssPrefix}});Lr.FontAwesomeConfig=z;var $o=[];function X4(t){return $o.push(t),function(){$o.splice($o.indexOf(t),1)}}var nr=$h,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function J4(t){if(!(!t||!Qn)){var e=be.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=be.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return be.head.insertBefore(e,r),t}}var Z4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ra(){for(var t=12,e="";t-- >0;)e+=Z4[Math.random()*62|0];return e}function Ks(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fg(t){return t.classList?Ks(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bC(t[n]),'" ')},"").trim()}function td(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function hg(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function t3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function n3(t){var e=t.transform,n=t.width,r=n===void 0?$h:n,i=t.height,s=i===void 0?$h:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&_C?l+="translate(".concat(e.x/nr-r/2,"em, ").concat(e.y/nr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/nr,"em), calc(-50% + ").concat(e.y/nr,"em)) "):l+="translate(".concat(e.x/nr,"em, ").concat(e.y/nr,"em) "),l+="scale(".concat(e.size/nr*(e.flipX?-1:1),", ").concat(e.size/nr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var r3=`:root, :host {
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
}`;function TC(){var t=wC,e=EC,n=z.cssPrefix,r=z.replacementClass,i=r3;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var N_=!1;function hf(){z.autoAddCss&&!N_&&(J4(TC()),N_=!0)}var i3={mixout:function(){return{dom:{css:TC,insertCss:hf}}},hooks:function(){return{beforeDOMElementCreation:function(){hf()},beforeI2svg:function(){hf()}}}},Hn=Lr||{};Hn[Bn]||(Hn[Bn]={});Hn[Bn].styles||(Hn[Bn].styles={});Hn[Bn].hooks||(Hn[Bn].hooks={});Hn[Bn].shims||(Hn[Bn].shims=[]);var nn=Hn[Bn],RC=[],s3=function t(){be.removeEventListener("DOMContentLoaded",t),uc=1,RC.map(function(e){return e()})},uc=!1;Qn&&(uc=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),uc||be.addEventListener("DOMContentLoaded",s3));function o3(t){Qn&&(uc?setTimeout(t,0):RC.push(t))}function rl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?bC(t):"<".concat(e," ").concat(e3(r),">").concat(s.map(rl).join(""),"</").concat(e,">")}function A_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var a3=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},pf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?a3(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function l3(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hh(t){var e=l3(t);return e.length===1?e[0].toString(16):null}function u3(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function O_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Gh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=O_(e);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(t,O_(e)):nn.styles[t]=O(O({},nn.styles[t]||{}),s),t==="fas"&&Gh("fa",e)}var zl,jl,Vl,Ji=nn.styles,c3=nn.shims,d3=(zl={},Ke(zl,ke,Object.values(ba[ke])),Ke(zl,Oe,Object.values(ba[Oe])),zl),pg=null,PC={},xC={},NC={},AC={},OC={},f3=(jl={},Ke(jl,ke,Object.keys(ka[ke])),Ke(jl,Oe,Object.keys(ka[Oe])),jl);function h3(t){return~K4.indexOf(t)}function p3(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!h3(i)?i:null}var DC=function(){var e=function(s){return pf(Ji,function(o,a,l){return o[l]=pf(a,s,{}),o},{})};PC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),xC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),OC=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ji||z.autoFetchSvg,r=pf(c3,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});NC=r.names,AC=r.unicodes,pg=nd(z.styleDefault,{family:z.familyDefault})};X4(function(t){pg=nd(t.styleDefault,{family:z.familyDefault})});DC();function mg(t,e){return(PC[t]||{})[e]}function m3(t,e){return(xC[t]||{})[e]}function ii(t,e){return(OC[t]||{})[e]}function MC(t){return NC[t]||{prefix:null,iconName:null}}function g3(t){var e=AC[t],n=mg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fr(){return pg}var gg=function(){return{prefix:null,iconName:null,rest:[]}};function nd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ke:n,i=ka[r][t],s=Ia[r][t]||Ia[r][i],o=t in nn.styles?t:null;return s||o||null}var D_=(Vl={},Ke(Vl,ke,Object.keys(ba[ke])),Ke(Vl,Oe,Object.keys(ba[Oe])),Vl);function rd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ke(e,ke,"".concat(z.cssPrefix,"-").concat(ke)),Ke(e,Oe,"".concat(z.cssPrefix,"-").concat(Oe)),e),o=null,a=ke;(t.includes(s[ke])||t.some(function(u){return D_[ke].includes(u)}))&&(a=ke),(t.includes(s[Oe])||t.some(function(u){return D_[Oe].includes(u)}))&&(a=Oe);var l=t.reduce(function(u,c){var d=p3(z.cssPrefix,c);if(Ji[c]?(c=d3[a].includes(c)?V4[a][c]:c,o=c,u.prefix=c):f3[a].indexOf(c)>-1?(o=c,u.prefix=nd(c,{family:a})):d?u.iconName=d:c!==z.replacementClass&&c!==s[ke]&&c!==s[Oe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?MC(u.iconName):{},g=ii(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||g||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Ji.far&&Ji.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},gg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Oe&&(Ji.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ii(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Fr()||"fas"),l}var v3=function(){function t(){P4(this,t),this.definitions={}}return x4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),Gh(a,o[a]);var l=ba[ke][a];l&&Gh(l,o[a]),DC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),M_=[],Zi={},hs={},y3=Object.keys(hs);function _3(t,e){var n=e.mixoutsTo;return M_=t,Zi={},Object.keys(hs).forEach(function(r){y3.indexOf(r)===-1&&delete hs[r]}),M_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),lc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Zi[o]||(Zi[o]=[]),Zi[o].push(s[o])})}r.provides&&r.provides(hs)}),n}function Kh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Zi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ii(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Zi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Gn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hs[t]?hs[t].apply(null,e):void 0}function Yh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Fr();if(e)return e=ii(n,e)||e,A_(LC.definitions,n,e)||A_(nn.styles,n,e)}var LC=new v3,w3=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ii("noAuto")},E3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qn?(Ii("beforeI2svg",e),Gn("pseudoElements2svg",e),Gn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,o3(function(){C3({autoReplaceSvgRoot:n}),Ii("watch",e)})}},S3={icon:function(e){if(e===null)return null;if(lc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ii(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=nd(e[0]);return{prefix:r,iconName:ii(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(W4))){var i=rd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Fr(),iconName:ii(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Fr();return{prefix:s,iconName:ii(s,e)||e}}}},Lt={noAuto:w3,config:z,dom:E3,parse:S3,library:LC,findIconDefinition:Yh,toHtml:rl},C3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?be:n;(Object.keys(nn.styles).length>0||z.autoFetchSvg)&&Qn&&z.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function id(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return rl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Qn){var r=be.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function k3(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(hg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=td(O(O({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function I3(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function vg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,v=r.found?r:n,_=v.width,w=v.height,p=i==="fak",h=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),y={children:[],attributes:O(O({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},m=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};g&&(y.attributes[ki]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Ra())},children:[l]}),delete y.attributes.title);var S=O(O({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:O(O({},m),d.styles)}),T=r.found&&n.found?Gn("generateAbstractMask",S)||{children:[],attributes:{}}:Gn("generateAbstractIcon",S)||{children:[],attributes:{}},I=T.children,A=T.attributes;return S.children=I,S.attributes=A,a?I3(S):k3(S)}function L_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ki]="");var c=O({},o.styles);hg(i)&&(c.transform=n3({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=td(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function b3(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=td(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mf=nn.styles;function qh(t){var e=t[0],n=t[1],r=t.slice(4),i=ag(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(ri.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ri.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ri.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var T3={found:!1,width:512,height:512};function R3(t,e){!SC&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qh(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Fr()),new Promise(function(r,i){if(Gn("missingIconAbstract"),n==="fa"){var s=MC(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&mf[e]&&mf[e][t]){var o=mf[e][t];return r(qh(o))}R3(t,e),r(O(O({},T3),{},{icon:z.showMissingIcons&&t?Gn("missingIconAbstract")||{}:{}}))})}var F_=function(){},Xh=z.measurePerformance&&Ol&&Ol.mark&&Ol.measure?Ol:{mark:F_,measure:F_},Io='FA "6.4.0"',P3=function(e){return Xh.mark("".concat(Io," ").concat(e," begins")),function(){return FC(e)}},FC=function(e){Xh.mark("".concat(Io," ").concat(e," ends")),Xh.measure("".concat(Io," ").concat(e),"".concat(Io," ").concat(e," begins"),"".concat(Io," ").concat(e," ends"))},yg={begin:P3,end:FC},lu=function(){};function U_(t){var e=t.getAttribute?t.getAttribute(ki):null;return typeof e=="string"}function x3(t){var e=t.getAttribute?t.getAttribute(ug):null,n=t.getAttribute?t.getAttribute(cg):null;return e&&n}function N3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function A3(){if(z.autoReplaceSvg===!0)return uu.replace;var t=uu[z.autoReplaceSvg];return t||uu.replace}function O3(t){return be.createElementNS("http://www.w3.org/2000/svg",t)}function D3(t){return be.createElement(t)}function UC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?O3:D3:n;if(typeof t=="string")return be.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(UC(o,{ceFn:r}))}),i}function M3(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var uu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(UC(i),n)}),n.getAttribute(ki)===null&&z.keepOriginalSource){var r=be.createComment(M3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~fg(n).indexOf(z.replacementClass))return uu.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return rl(a)}).join(`
`);n.setAttribute(ki,""),n.innerHTML=o}};function z_(t){t()}function zC(t,e){var n=typeof e=="function"?e:lu;if(t.length===0)n();else{var r=z_;z.mutateApproach===z4&&(r=Lr.requestAnimationFrame||z_),r(function(){var i=A3(),s=yg.begin("mutate");t.map(i),s(),n()})}}var _g=!1;function jC(){_g=!0}function Jh(){_g=!1}var cc=null;function j_(t){if(P_&&z.observeMutations){var e=t.treeCallback,n=e===void 0?lu:e,r=t.nodeCallback,i=r===void 0?lu:r,s=t.pseudoElementsCallback,o=s===void 0?lu:s,a=t.observeMutationsRoot,l=a===void 0?be:a;cc=new P_(function(u){if(!_g){var c=Fr();Ks(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!U_(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&U_(d.target)&&~G4.indexOf(d.attributeName))if(d.attributeName==="class"&&x3(d.target)){var f=rd(fg(d.target)),g=f.prefix,v=f.iconName;d.target.setAttribute(ug,g||c),v&&d.target.setAttribute(cg,v)}else N3(d.target)&&i(d.target)})}}),Qn&&cc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function L3(){cc&&cc.disconnect()}function F3(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function U3(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=rd(fg(t));return i.prefix||(i.prefix=Fr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=m3(i.prefix,t.innerText)||mg(i.prefix,Hh(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function z3(t){var e=Ks(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Ra()):(e["aria-hidden"]="true",e.focusable="false")),e}function j3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=U3(t),r=n.iconName,i=n.prefix,s=n.rest,o=z3(t),a=Kh("parseNodeAttributes",{},t),l=e.styleParser?F3(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var V3=nn.styles;function VC(t){var e=z.autoReplaceSvg==="nest"?V_(t,{styleParser:!1}):V_(t);return~e.extra.classes.indexOf(CC)?Gn("generateLayersText",t,e):Gn("generateSvgReplacementMutation",t,e)}var Ur=new Set;dg.map(function(t){Ur.add("fa-".concat(t))});Object.keys(ka[ke]).map(Ur.add.bind(Ur));Object.keys(ka[Oe]).map(Ur.add.bind(Ur));Ur=tl(Ur);function W_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qn)return Promise.resolve();var n=be.documentElement.classList,r=function(d){return n.add("".concat(x_,"-").concat(d))},i=function(d){return n.remove("".concat(x_,"-").concat(d))},s=z.autoFetchSvg?Ur:dg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(V3));s.includes("fa")||s.push("fa");var o=[".".concat(CC,":not([").concat(ki,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ki,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ks(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=yg.begin("onTree"),u=a.reduce(function(c,d){try{var f=VC(d);f&&c.push(f)}catch(g){SC||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){zC(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function W3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;VC(t).then(function(n){n&&zC([n],e)})}function $3(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Yh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Yh(i||{})),t(r,O(O({},n),{},{mask:i}))}}var B3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,v=g===void 0?null:g,_=n.classes,w=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,y=n.styles,m=y===void 0?{}:y;if(e){var S=e.prefix,T=e.iconName,I=e.icon;return id(O({type:"icon"},e),function(){return Ii("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(v||Ra()):(h["aria-hidden"]="true",h.focusable="false")),vg({icons:{main:qh(I),mask:l?qh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:O(O({},mn),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:h,styles:m,classes:w}})})}},H3={mixout:function(){return{icon:$3(B3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=W_,n.nodeCallback=W3,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?be:r,s=n.callback,o=s===void 0?function(){}:s;return W_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,v){Promise.all([Qh(i,a),c.iconName?Qh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=ag(_,2),p=w[0],h=w[1];g([n,vg({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=td(a);l.length>0&&(i.style=l);var u;return hg(o)&&(u=Gn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},G3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return id({type:"layer"},function(){Ii("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(tl(s)).join(" ")},children:o}]})}}}},K3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return id({type:"counter",content:n},function(){return Ii("beforeDOMElementCreation",{content:n,params:r}),b3({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(tl(a))}})})}}}},Y3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return id({type:"text",content:n},function(){return Ii("beforeDOMElementCreation",{content:n,params:r}),L_({content:n,transform:O(O({},mn),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(z.cssPrefix,"-layers-text")].concat(tl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(_C){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,L_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},q3=new RegExp('"',"ug"),$_=[1105920,1112319];function Q3(t){var e=t.replace(q3,""),n=u3(e,0),r=n>=$_[0]&&n<=$_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hh(i?e[0]:e),isSecondary:r||i}}function B_(t,e){var n="".concat(U4).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ks(t.children),o=s.filter(function(I){return I.getAttribute(Bh)===e})[0],a=Lr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match($4),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Oe:ke,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ia[f][l[2].toLowerCase()]:B4[f][u],v=Q3(d),_=v.value,w=v.isSecondary,p=l[0].startsWith("FontAwesome"),h=mg(g,_),y=h;if(p){var m=g3(_);m.iconName&&m.prefix&&(h=m.iconName,g=m.prefix)}if(h&&!w&&(!o||o.getAttribute(ug)!==g||o.getAttribute(cg)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var S=j3(),T=S.extra;T.attributes[Bh]=e,Qh(h,g).then(function(I){var A=vg(O(O({},S),{},{icons:{main:I,mask:gg()},prefix:g,iconName:y,extra:T,watchable:!0})),M=be.createElement("svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=A.map(function(L){return rl(L)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function X3(t){return Promise.all([B_(t,"::before"),B_(t,"::after")])}function J3(t){return t.parentNode!==document.head&&!~j4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function H_(t){if(Qn)return new Promise(function(e,n){var r=Ks(t.querySelectorAll("*")).filter(J3).map(X3),i=yg.begin("searchPseudoElements");jC(),Promise.all(r).then(function(){i(),Jh(),e()}).catch(function(){i(),Jh(),n()})})}var Z3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=H_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?be:r;z.searchPseudoElements&&H_(i)}}},G_=!1,eD={mixout:function(){return{dom:{unwatch:function(){jC(),G_=!0}}}},hooks:function(){return{bootstrap:function(){j_(Kh("mutationObserverCallbacks",{}))},noAuto:function(){L3()},watch:function(n){var r=n.observeMutationsRoot;G_?Jh():j_(Kh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},K_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},tD={mixout:function(){return{parse:{transform:function(n){return K_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=K_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:O({},g.outer),children:[{tag:"g",attributes:O({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),g.path)}]}]}}}},gf={x:0,y:0,width:"100%",height:"100%"};function Y_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nD(t){return t.tag==="g"?t.children:[t]}var rD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?rd(i.split(" ").map(function(o){return o.trim()})):gg();return s.prefix||(s.prefix=Fr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=t3({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:O(O({},gf),{},{fill:"white"})},_=c.children?{children:c.children.map(Y_)}:{},w={tag:"g",attributes:O({},g.inner),children:[Y_(O({tag:c.tag,attributes:O(O({},c.attributes),g.path)},_))]},p={tag:"g",attributes:O({},g.outer),children:[w]},h="mask-".concat(a||Ra()),y="clip-".concat(a||Ra()),m={tag:"mask",attributes:O(O({},gf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:nD(f)},m]};return r.push(S,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(h,")")},gf)}),{children:r,attributes:i}}}},iD={provides:function(e){var n=!1;Lr.matchMedia&&(n=Lr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},sD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},oD=[i3,H3,G3,K3,Y3,Z3,eD,tD,rD,iD,sD];_3(oD,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Zh=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var aD=Lt.icon;Lt.layer;Lt.text;Lt.counter;var WC={exports:{}},lD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uD=lD,cD=uD;function $C(){}function BC(){}BC.resetWarningCache=$C;var dD=function(){function t(r,i,s,o,a,l){if(l!==cD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:BC,resetWarningCache:$C};return n.PropTypes=n,n};WC.exports=dD();var fD=WC.exports;const te=S0(fD);function q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q_(Object(n),!0).forEach(function(r){es(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dc(t){"@babel/helpers - typeof";return dc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dc(t)}function es(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pD(t,e){if(t==null)return{};var n=hD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ep(t){return mD(t)||gD(t)||vD(t)||yD()}function mD(t){if(Array.isArray(t))return tp(t)}function gD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vD(t,e){if(t){if(typeof t=="string")return tp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tp(t,e)}}function tp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _D(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,v=t.border,_=t.listItem,w=t.flip,p=t.size,h=t.rotation,y=t.pull,m=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":v,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},es(e,"fa-".concat(p),typeof p<"u"&&p!==null),es(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),es(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),es(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(m).map(function(S){return m[S]?S:null}).filter(function(S){return S})}function wD(t){return t=t-0,t===t}function HC(t){return wD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ED=["style"];function SD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function CD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[SD(i)]=s:e[i]=s,e},{})}function GC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return GC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=CD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[HC(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=pD(n,ED);return i.attrs.style=pr(pr({},i.attrs.style),o),t.apply(void 0,[e.tag,pr(pr({},i.attrs),a)].concat(ep(r)))}var KC=!1;try{KC=!0}catch{}function kD(){if(!KC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Q_(t){if(t&&dc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zh.icon)return Zh.icon(t);if(t===null)return null;if(t&&dc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function vf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?es({},t,e):{}}var il=yc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Q_(n),c=vf("classes",[].concat(ep(_D(t)),ep(s.split(" ")))),d=vf("transform",typeof t.transform=="string"?Zh.transform(t.transform):t.transform),f=vf("mask",Q_(r)),g=aD(u,pr(pr(pr(pr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return kD("Could not find icon",u),null;var v=g.abstract,_={ref:e};return Object.keys(t).forEach(function(w){il.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),ID(v[0],_)});il.displayName="FontAwesomeIcon";il.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};il.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ID=GC.bind(null,yc.createElement),wL={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},EL={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},SL={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},bD={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},CL=bD,kL={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},IL={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},TD={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},bL=TD,RD={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},TL=RD,PD={prefix:"fas",iconName:"skull",icon:[512,512,[128128],"f54c","M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},RL={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},xD={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},PL=xD;function ND(){const[t,e]=k.useState(!1),[n,r]=k.useState(""),[i,s]=k.useState(null);async function o(a){a.preventDefault();const l=await R4(n);if(!l){e(!0);return}s(l.code.split("/")[1].replaceAll("-"," "))}return G.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[G.jsxs("div",{className:"font-bold text-2xl",children:["I forgor",G.jsx(il,{icon:PD,className:"ml-2"})]}),t?G.jsxs("div",{children:[G.jsx("p",{className:"text-center",children:"A reset password link has been sent to your email."}),G.jsx("p",{className:"text-center",children:"If you did not recieve and email, try again."})]}):G.jsxs(G.Fragment,{children:[G.jsxs("form",{className:"flex gap-4",onSubmit:a=>void o(a),children:[G.jsx("input",{placeholder:"email",className:"outline-none p-2 rounded shadow-c9 shadow-lg w-80",onChange:a=>r(a.target.value),type:"email"}),G.jsx("input",{type:"submit",className:"hidden"}),G.jsx("button",{className:"p-2 rounded bg-c9 transition text-c1 hover:text-c9 hover:bg-c1",children:"Send reset link"})]}),i&&G.jsx("p",{className:"text-red-500",children:i})]}),G.jsx(Jw,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page."})]})}var AD=Object.defineProperty,OD=(t,e)=>{for(var n in e)AD(t,n,{get:e[n],enumerable:!0})},cn={};OD(cn,{assign:()=>LD,colors:()=>xr,createStringInterpolator:()=>bg,skipAnimation:()=>ek,to:()=>ZC,willAdvance:()=>Tg});var wg=ol(),J=t=>sl(t,wg),Eg=ol();J.write=t=>sl(t,Eg);var sd=ol();J.onStart=t=>sl(t,sd);var Sg=ol();J.onFrame=t=>sl(t,Sg);var Cg=ol();J.onFinish=t=>sl(t,Cg);var ps=[];J.setTimeout=(t,e)=>{const n=J.now()+e,r=()=>{const s=ps.findIndex(o=>o.cancel==r);~s&&ps.splice(s,1),gr-=~s?1:0},i={time:n,handler:t,cancel:r};return ps.splice(YC(n),0,i),gr+=1,qC(),i};var YC=t=>~(~ps.findIndex(e=>e.time>t)||~ps.length);J.cancel=t=>{sd.delete(t),Sg.delete(t),Cg.delete(t),wg.delete(t),Eg.delete(t)};J.sync=t=>{np=!0,J.batchedUpdates(t),np=!1};J.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,J.onStart(n)}return r.handler=t,r.cancel=()=>{sd.delete(n),e=null},r};var kg=typeof window<"u"?window.requestAnimationFrame:()=>{};J.use=t=>kg=t;J.now=typeof performance<"u"?()=>performance.now():Date.now;J.batchedUpdates=t=>t();J.catch=console.error;J.frameLoop="always";J.advance=()=>{J.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):XC()};var mr=-1,gr=0,np=!1;function sl(t,e){np?(e.delete(t),t(0)):(e.add(t),qC())}function qC(){mr<0&&(mr=0,J.frameLoop!=="demand"&&kg(QC))}function DD(){mr=-1}function QC(){~mr&&(kg(QC),J.batchedUpdates(XC))}function XC(){const t=mr;mr=J.now();const e=YC(mr);if(e&&(JC(ps.splice(0,e),n=>n.handler()),gr-=e),!gr){DD();return}sd.flush(),wg.flush(t?Math.min(64,mr-t):16.667),Sg.flush(),Eg.flush(),Cg.flush()}function ol(){let t=new Set,e=t;return{add(n){gr+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return gr-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,gr-=e.size,JC(e,r=>r(n)&&t.add(r)),gr+=t.size,e=t)}}}function JC(t,e){t.forEach(n=>{try{e(n)}catch(r){J.catch(r)}})}function rp(){}var MD=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),R={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Rn(t,e){if(R.arr(t)){if(!R.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var Y=(t,e)=>t.forEach(e);function En(t,e,n){if(R.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var mt=t=>R.und(t)?[]:R.arr(t)?t:[t];function Bo(t,e){if(t.size){const n=Array.from(t);t.clear(),Y(n,e)}}var bo=(t,...e)=>Bo(t,n=>n(...e)),Ig=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),bg,ZC,xr=null,ek=!1,Tg=rp,LD=t=>{t.to&&(ZC=t.to),t.now&&(J.now=t.now),t.colors!==void 0&&(xr=t.colors),t.skipAnimation!=null&&(ek=t.skipAnimation),t.createStringInterpolator&&(bg=t.createStringInterpolator),t.requestAnimationFrame&&J.use(t.requestAnimationFrame),t.batchedUpdates&&(J.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Tg=t.willAdvance),t.frameLoop&&(J.frameLoop=t.frameLoop)},Ho=new Set,Vt=[],yf=[],fc=0,od={get idle(){return!Ho.size&&!Vt.length},start(t){fc>t.priority?(Ho.add(t),J.onStart(FD)):(tk(t),J(ip))},advance:ip,sort(t){if(fc)J.onFrame(()=>od.sort(t));else{const e=Vt.indexOf(t);~e&&(Vt.splice(e,1),nk(t))}},clear(){Vt=[],Ho.clear()}};function FD(){Ho.forEach(tk),Ho.clear(),J(ip)}function tk(t){Vt.includes(t)||nk(t)}function nk(t){Vt.splice(UD(Vt,e=>e.priority>t.priority),0,t)}function ip(t){const e=yf;for(let n=0;n<Vt.length;n++){const r=Vt[n];fc=r.priority,r.idle||(Tg(r),r.advance(t),r.idle||e.push(r))}return fc=0,yf=Vt,yf.length=0,Vt=e,Vt.length>0}function UD(t,e){const n=t.findIndex(e);return n<0?t.length:n}var zD=(t,e,n)=>Math.min(Math.max(n,t),e),jD={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},rn="[-+]?\\d*\\.?\\d+",hc=rn+"%";function ad(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var VD=new RegExp("rgb"+ad(rn,rn,rn)),WD=new RegExp("rgba"+ad(rn,rn,rn,rn)),$D=new RegExp("hsl"+ad(rn,hc,hc)),BD=new RegExp("hsla"+ad(rn,hc,hc,rn)),HD=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,GD=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,KD=/^#([0-9a-fA-F]{6})$/,YD=/^#([0-9a-fA-F]{8})$/;function qD(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=KD.exec(t))?parseInt(e[1]+"ff",16)>>>0:xr&&xr[t]!==void 0?xr[t]:(e=VD.exec(t))?(Oi(e[1])<<24|Oi(e[2])<<16|Oi(e[3])<<8|255)>>>0:(e=WD.exec(t))?(Oi(e[1])<<24|Oi(e[2])<<16|Oi(e[3])<<8|Z_(e[4]))>>>0:(e=HD.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=YD.exec(t))?parseInt(e[1],16)>>>0:(e=GD.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=$D.exec(t))?(X_(J_(e[1]),Wl(e[2]),Wl(e[3]))|255)>>>0:(e=BD.exec(t))?(X_(J_(e[1]),Wl(e[2]),Wl(e[3]))|Z_(e[4]))>>>0:null}function _f(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function X_(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=_f(i,r,t+1/3),o=_f(i,r,t),a=_f(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Oi(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function J_(t){return(parseFloat(t)%360+360)%360/360}function Z_(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Wl(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function e0(t){let e=qD(t);if(e===null)return t;e=e||0;const n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var Pa=(t,e,n)=>{if(R.fun(t))return t;if(R.arr(t))return Pa({range:t,output:e,extrapolate:n});if(R.str(t.output[0]))return bg(t);const r=t,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=XD(u,s);return QD(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function QD(t,e,n,r,i,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function XD(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var JD=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return zD(0,1,i/t)},pc=1.70158,$l=pc*1.525,t0=pc+1,n0=2*Math.PI/3,r0=2*Math.PI/4.5,Bl=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,ZD={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>t0*t*t*t-pc*t*t,easeOutBack:t=>1+t0*Math.pow(t-1,3)+pc*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*(($l+1)*2*t-$l)/2:(Math.pow(2*t-2,2)*(($l+1)*(t*2-2)+$l)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*n0),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*n0)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*r0))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*r0)/2+1,easeInBounce:t=>1-Bl(1-t),easeOutBounce:Bl,easeInOutBounce:t=>t<.5?(1-Bl(1-2*t))/2:(1+Bl(2*t-1))/2,steps:JD},xa=Symbol.for("FluidValue.get"),As=Symbol.for("FluidValue.observers"),jt=t=>!!(t&&t[xa]),_t=t=>t&&t[xa]?t[xa]():t,i0=t=>t[As]||null;function eM(t,e){t.eventObserved?t.eventObserved(e):t(e)}function Na(t,e){const n=t[As];n&&n.forEach(r=>{eM(r,e)})}var rk=class{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");tM(this,t)}},tM=(t,e)=>ik(t,xa,e);function Ys(t,e){if(t[xa]){let n=t[As];n||ik(t,As,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Aa(t,e){const n=t[As];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[As]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var ik=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),cu=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,nM=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,s0=new RegExp(`(${cu.source})(%|[a-z]+)`,"i"),rM=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ld=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,sk=t=>{const[e,n]=iM(t);if(!e||Ig())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||t}else{if(n&&ld.test(n))return sk(n);if(n)return n}return t},iM=t=>{const e=ld.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]},wf,sM=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,ok=t=>{wf||(wf=xr?new RegExp(`(${Object.keys(xr).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>_t(s).replace(ld,sk).replace(nM,e0).replace(wf,e0)),n=e.map(s=>s.match(cu).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>Pa({...t,output:s}));return s=>{var l;const o=!s0.test(e[0])&&((l=e.find(u=>s0.test(u)))==null?void 0:l.replace(cu,""));let a=0;return e[0].replace(cu,()=>`${i[a++](s)}${o||""}`).replace(rM,sM)}},Rg="react-spring: ",ak=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${Rg}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},oM=ak(console.warn);function aM(){oM(`${Rg}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var lM=ak(console.warn);function uM(){lM(`${Rg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function ud(t){return R.str(t)&&(t[0]=="#"||/\d/.test(t)||!Ig()&&ld.test(t)||t in(xr||{}))}var si=Ig()?k.useEffect:k.useLayoutEffect,cM=()=>{const t=k.useRef(!1);return si(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function Pg(){const t=k.useState()[1],e=cM();return()=>{e.current&&t(Math.random())}}function dM(t,e){const[n]=k.useState(()=>({inputs:e,result:t()})),r=k.useRef(),i=r.current;let s=i;return s?e&&s.inputs&&fM(e,s.inputs)||(s={inputs:e,result:t()}):s=n,k.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function fM(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var xg=t=>k.useEffect(t,hM),hM=[];function sp(t){const e=k.useRef();return k.useEffect(()=>{e.current=t}),e.current}var Oa=Symbol.for("Animated:node"),pM=t=>!!t&&t[Oa]===t,hn=t=>t&&t[Oa],Ng=(t,e)=>MD(t,Oa,e),cd=t=>t&&t[Oa]&&t[Oa].getPayload(),lk=class{constructor(){Ng(this,this)}getPayload(){return this.payload||[]}},al=class extends lk{constructor(t){super(),this._value=t,this.done=!0,this.durationProgress=0,R.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new al(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return R.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,R.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},Da=class extends al{constructor(t){super(0),this._string=null,this._toString=Pa({output:[t,t]})}static create(t){return new Da(t)}getValue(){const t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(R.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=Pa({output:[this.getValue(),t]})),this._value=0,super.reset()}},mc={dependencies:null},dd=class extends lk{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return En(this.source,(n,r)=>{pM(n)?e[r]=n.getValue(t):jt(n)?e[r]=_t(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&Y(this.payload,t=>t.reset())}_makePayload(t){if(t){const e=new Set;return En(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){mc.dependencies&&jt(t)&&mc.dependencies.add(t);const e=cd(t);e&&Y(e,n=>this.add(n))}},uk=class extends dd{constructor(t){super(t)}static create(t){return new uk(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const e=this.getPayload();return t.length==e.length?e.map((n,r)=>n.setValue(t[r])).some(Boolean):(super.setValue(t.map(mM)),!0)}};function mM(t){return(ud(t)?Da:al).create(t)}function op(t){const e=hn(t);return e?e.constructor:R.arr(t)?uk:ud(t)?Da:al}var o0=(t,e)=>{const n=!R.fun(t)||t.prototype&&t.prototype.isReactComponent;return k.forwardRef((r,i)=>{const s=k.useRef(null),o=n&&k.useCallback(v=>{s.current=yM(i,v)},[i]),[a,l]=vM(r,e),u=Pg(),c=()=>{const v=s.current;if(n&&!v)return;(v?e.applyAnimatedValues(v,a.getValue(!0)):!1)===!1&&u()},d=new gM(c,l),f=k.useRef();si(()=>(f.current=d,Y(l,v=>Ys(v,d)),()=>{f.current&&(Y(f.current.deps,v=>Aa(v,f.current)),J.cancel(f.current.update))})),k.useEffect(c,[]),xg(()=>()=>{const v=f.current;Y(v.deps,_=>Aa(_,v))});const g=e.getComponentProps(a.getValue());return k.createElement(t,{...g,ref:o})})},gM=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&J.write(this.update)}};function vM(t,e){const n=new Set;return mc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new dd(t),mc.dependencies=null,[t,n]}function yM(t,e){return t&&(R.fun(t)?t(e):t.current=e),e}var a0=Symbol.for("AnimatedComponent"),_M=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new dd(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=l0(o)||"Anonymous";return R.str(o)?o=s[o]||(s[o]=o0(o,i)):o=o[a0]||(o[a0]=o0(o,i)),o.displayName=`Animated(${a})`,o};return En(t,(o,a)=>{R.arr(t)&&(a=l0(o)),s[a]=s(o)}),{animated:s}},l0=t=>R.str(t)?t:t&&R.str(t.displayName)?t.displayName:R.fun(t)&&t.name||null;function wt(t,...e){return R.fun(t)?t(...e):t}var Go=(t,e)=>t===!0||!!(e&&t&&(R.fun(t)?t(e):mt(t).includes(e))),ck=(t,e)=>R.obj(t)?e&&t[e]:t,dk=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,wM=t=>t,fd=(t,e=wM)=>{let n=EM;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const s=e(t[i],i);R.und(s)||(r[i]=s)}return r},EM=["config","onProps","onStart","onChange","onPause","onResume","onRest"],SM={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function CM(t){const e={};let n=0;if(En(t,(r,i)=>{SM[i]||(e[i]=r,n++)}),n)return e}function Ag(t){const e=CM(t);if(e){const n={to:e};return En(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function Ma(t){return t=_t(t),R.arr(t)?t.map(Ma):ud(t)?cn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function fk(t){for(const e in t)return!0;return!1}function ap(t){return R.fun(t)||R.arr(t)&&R.obj(t[0])}function lp(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function hk(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var kM={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},up={...kM.default,mass:1,damping:1,easing:ZD.linear,clamp:!1},IM=class{constructor(){this.velocity=0,Object.assign(this,up)}};function bM(t,e,n){n&&(n={...n},u0(n,e),e={...n,...e}),u0(t,e),Object.assign(t,e);for(const o in up)t[o]==null&&(t[o]=up[o]);let{frequency:r,damping:i}=t;const{mass:s}=t;return R.und(r)||(r<.01&&(r=.01),i<0&&(i=0),t.tension=Math.pow(2*Math.PI/r,2)*s,t.friction=4*Math.PI*i*s/r),t}function u0(t,e){if(!R.und(e.decay))t.duration=void 0;else{const n=!R.und(e.tension)||!R.und(e.friction);(n||!R.und(e.frequency)||!R.und(e.damping)||!R.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var c0=[],TM=class{constructor(){this.changed=!1,this.values=c0,this.toValues=null,this.fromValues=c0,this.config=new IM,this.immediate=!1}};function pk(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{let l,u,c=Go(n.cancel??(r==null?void 0:r.cancel),e);if(c)g();else{R.und(n.pause)||(i.paused=Go(n.pause,e));let v=r==null?void 0:r.pause;v!==!0&&(v=i.paused||Go(v,e)),l=wt(n.delay||0,e),v?(i.resumeQueue.add(f),s.pause()):(s.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),l=u.time-J.now()}function f(){l>0&&!cn.skipAnimation?(i.delayed=!0,u=J.setTimeout(g,l),i.pauseQueue.add(d),i.timeouts.add(u)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),t<=(i.cancelId||0)&&(c=!0);try{s.start({...n,callId:t,cancel:c},o)}catch(v){a(v)}}})}var Og=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?ms(t.get()):e.every(n=>n.noop)?mk(t.get()):Jt(t.get(),e.every(n=>n.finished)),mk=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Jt=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),ms=t=>({value:t,cancelled:!0,finished:!1});function gk(t,e,n,r){const{callId:i,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const u=fd(e,(w,p)=>p==="onRest"?void 0:w);let c,d;const f=new Promise((w,p)=>(c=w,d=p)),g=w=>{const p=i<=(n.cancelId||0)&&ms(r)||i!==n.asyncId&&Jt(r,!1);if(p)throw w.result=p,d(w),w},v=(w,p)=>{const h=new d0,y=new f0;return(async()=>{if(cn.skipAnimation)throw La(n),y.result=Jt(r,!1),d(y),y;g(h);const m=R.obj(w)?{...w}:{...p,to:w};m.parentId=i,En(u,(T,I)=>{R.und(m[I])&&(m[I]=T)});const S=await r.start(m);return g(h),n.paused&&await new Promise(T=>{n.resumeQueue.add(T)}),S})()};let _;if(cn.skipAnimation)return La(n),Jt(r,!1);try{let w;R.arr(t)?w=(async p=>{for(const h of p)await v(h)})(t):w=Promise.resolve(t(v,r.stop.bind(r))),await Promise.all([w.then(c),f]),_=Jt(r.get(),!0,!1)}catch(w){if(w instanceof d0)_=w.result;else if(w instanceof f0)_=w.result;else throw w}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return R.fun(o)&&J.batchedUpdates(()=>{o(_,r,r.item)}),_})()}function La(t,e){Bo(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var d0=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},f0=class extends Error{constructor(){super("SkipAnimationSignal")}},cp=t=>t instanceof Dg,RM=1,Dg=class extends rk{constructor(){super(...arguments),this.id=RM++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=hn(this);return t&&t.getValue()}to(...t){return cn.to(this,t)}interpolate(...t){return aM(),cn.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){Na(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||od.sort(this),Na(this,{type:"priority",parent:this,priority:t})}},bi=Symbol.for("SpringPhase"),vk=1,dp=2,fp=4,Ef=t=>(t[bi]&vk)>0,rr=t=>(t[bi]&dp)>0,go=t=>(t[bi]&fp)>0,h0=(t,e)=>e?t[bi]|=dp|vk:t[bi]&=~dp,p0=(t,e)=>e?t[bi]|=fp:t[bi]&=~fp,PM=class extends Dg{constructor(t,e){if(super(),this.animation=new TM,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!R.und(t)||!R.und(e)){const n=R.obj(t)?{...t}:{...e,from:t};R.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(rr(this)||this._state.asyncTo)||go(this)}get goal(){return _t(this.animation.to)}get velocity(){const t=hn(this);return t instanceof al?t.lastVelocity||0:t.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return Ef(this)}get isAnimating(){return rr(this)}get isPaused(){return go(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:s}=r,o=cd(r.to);!o&&jt(r.to)&&(i=mt(_t(r.to))),r.values.forEach((u,c)=>{if(u.done)return;const d=u.constructor==Da?1:o?o[c].lastPosition:i[c];let f=r.immediate,g=d;if(!f){if(g=u.lastPosition,s.tension<=0){u.done=!0;return}let v=u.elapsedTime+=t;const _=r.fromValues[c],w=u.v0!=null?u.v0:u.v0=R.arr(s.velocity)?s.velocity[c]:s.velocity;let p;const h=s.precision||(_==d?.005:Math.min(1,Math.abs(d-_)*.001));if(R.und(s.duration))if(s.decay){const y=s.decay===!0?.998:s.decay,m=Math.exp(-(1-y)*v);g=_+w/(1-y)*(1-m),f=Math.abs(u.lastPosition-g)<=h,p=w*m}else{p=u.lastVelocity==null?w:u.lastVelocity;const y=s.restVelocity||h/10,m=s.clamp?0:s.bounce,S=!R.und(m),T=_==d?u.v0>0:_<d;let I,A=!1;const M=1,L=Math.ceil(t/M);for(let ae=0;ae<L&&(I=Math.abs(p)>y,!(!I&&(f=Math.abs(d-g)<=h,f)));++ae){S&&(A=g==d||g>d==T,A&&(p=-p*m,g=d));const ie=-s.tension*1e-6*(g-d),ze=-s.friction*.001*p,V=(ie+ze)/s.mass;p=p+V*M,g=g+p*M}}else{let y=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,v=u.elapsedTime+=t)),y=(s.progress||0)+v/this._memoizedDuration,y=y>1?1:y<0?0:y,u.durationProgress=y),g=_+s.easing(y)*(d-_),p=(g-u.lastPosition)/t,f=y==1}u.lastVelocity=p,Number.isNaN(g)&&(console.warn("Got NaN while animating:",this),f=!0)}o&&!o[c].done&&(f=!1),f?u.done=!0:e=!1,u.setValue(g,s.round)&&(n=!0)});const a=hn(this),l=a.getValue();if(e){const u=_t(r.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(t){return J.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(rr(this)){const{to:t,config:e}=this.animation;J.batchedUpdates(()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return R.und(t)?(n=this.queue||[],this.queue=[]):n=[R.obj(t)?t:{...e,to:t}],Promise.all(n.map(r=>this._update(r))).then(r=>Og(this,r))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),La(this._state,t&&this._lastCallId),J.batchedUpdates(()=>this._stop(e,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:r}=t;n=R.obj(n)?n[e]:n,(n==null||ap(n))&&(n=void 0),r=R.obj(r)?r[e]:r,r==null&&(r=void 0);const i={to:n,from:r};return Ef(this)||(t.reverse&&([n,r]=[r,n]),r=_t(r),R.und(r)?hn(this)||this._set(n):this._set(r)),i}_update({...t},e){const{key:n,defaultProps:r}=this;t.default&&Object.assign(r,fd(t,(o,a)=>/^on/.test(a)?ck(o,n):o)),g0(this,t,"onProps"),yo(this,"onProps",t,this);const i=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return pk(++this._lastCallId,{key:n,props:t,defaultProps:r,state:s,actions:{pause:()=>{go(this)||(p0(this,!0),bo(s.pauseQueue),yo(this,"onPause",Jt(this,vo(this,this.animation.to)),this))},resume:()=>{go(this)&&(p0(this,!1),rr(this)&&this._resume(),bo(s.resumeQueue),yo(this,"onResume",Jt(this,vo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(o=>{if(t.loop&&o.finished&&!(e&&o.noop)){const a=yk(t);if(a)return this._update(a,!0)}return o})}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(ms(this));const r=!R.und(t.to),i=!R.und(t.from);if(r||i)if(e.callId>this._lastToId)this._lastToId=e.callId;else return n(ms(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:d=u}=t;i&&!r&&(!e.default||R.und(c))&&(c=d),e.reverse&&([c,d]=[d,c]);const f=!Rn(d,u);f&&(a.from=d),d=_t(d);const g=!Rn(c,l);g&&this._focus(c);const v=ap(e.to),{config:_}=a,{decay:w,velocity:p}=_;(r||i)&&(_.velocity=0),e.config&&!v&&bM(_,wt(e.config,s),e.config!==o.config?wt(o.config,s):void 0);let h=hn(this);if(!h||R.und(c))return n(Jt(this,!0));const y=R.und(e.reset)?i&&!e.default:!R.und(d)&&Go(e.reset,s),m=y?d:this.get(),S=Ma(c),T=R.num(S)||R.arr(S)||ud(S),I=!v&&(!T||Go(o.immediate||e.immediate,s));if(g){const ae=op(c);if(ae!==h.constructor)if(I)h=this._set(S);else throw Error(`Cannot animate between ${h.constructor.name} and ${ae.name}, as the "to" prop suggests`)}const A=h.constructor;let M=jt(c),L=!1;if(!M){const ae=y||!Ef(this)&&f;(g||ae)&&(L=Rn(Ma(m),S),M=!L),(!Rn(a.immediate,I)&&!I||!Rn(_.decay,w)||!Rn(_.velocity,p))&&(M=!0)}if(L&&rr(this)&&(a.changed&&!y?M=!0:M||this._stop(l)),!v&&((M||jt(l))&&(a.values=h.getPayload(),a.toValues=jt(c)?null:A==Da?[1]:mt(S)),a.immediate!=I&&(a.immediate=I,!I&&!y&&this._set(l)),M)){const{onRest:ae}=a;Y(NM,ze=>g0(this,e,ze));const ie=Jt(this,vo(this,l));bo(this._pendingCalls,ie),this._pendingCalls.add(n),a.changed&&J.batchedUpdates(()=>{var ze;a.changed=!y,ae==null||ae(ie,this),y?wt(o.onRest,ie):(ze=a.onStart)==null||ze.call(a,ie,this)})}y&&this._set(m),v?n(gk(e.to,e,this._state,this)):M?this._start():rr(this)&&!g?this._pendingCalls.add(n):n(mk(m))}_focus(t){const e=this.animation;t!==e.to&&(i0(this)&&this._detach(),e.to=t,i0(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;jt(e)&&(Ys(e,this),cp(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;jt(t)&&Aa(t,this)}_set(t,e=!0){const n=_t(t);if(!R.und(n)){const r=hn(this);if(!r||!Rn(n,r.getValue())){const i=op(n);!r||r.constructor!=i?Ng(this,i.create(n)):r.setValue(n),r&&J.batchedUpdates(()=>{this._onChange(n,e)})}}return hn(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,yo(this,"onStart",Jt(this,vo(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),wt(this.animation.onChange,t,this)),wt(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;hn(this).reset(_t(t.to)),t.immediate||(t.fromValues=t.values.map(e=>e.lastPosition)),rr(this)||(h0(this,!0),go(this)||this._resume())}_resume(){cn.skipAnimation?this.finish():od.start(this)}_stop(t,e){if(rr(this)){h0(this,!1);const n=this.animation;Y(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Na(this,{type:"idle",parent:this});const r=e?ms(this.get()):Jt(this.get(),vo(this,t??n.to));bo(this._pendingCalls,r),n.changed&&(n.changed=!1,yo(this,"onRest",r,this))}}};function vo(t,e){const n=Ma(e),r=Ma(t.get());return Rn(r,n)}function yk(t,e=t.loop,n=t.to){const r=wt(e);if(r){const i=r!==!0&&Ag(r),s=(i||t).reverse,o=!i||i.reset;return Fa({...t,loop:e,default:!1,pause:void 0,to:!s||ap(n)?n:void 0,from:o?t.from:void 0,reset:o,...i})}}function Fa(t){const{to:e,from:n}=t=Ag(t),r=new Set;return R.obj(e)&&m0(e,r),R.obj(n)&&m0(n,r),t.keys=r.size?Array.from(r):null,t}function xM(t){const e=Fa(t);return R.und(e.default)&&(e.default=fd(e)),e}function m0(t,e){En(t,(n,r)=>n!=null&&e.add(r))}var NM=["onStart","onRest","onChange","onPause","onResume"];function g0(t,e,n){t.animation[n]=e[n]!==dk(e,n)?ck(e[n],t.key):void 0}function yo(t,e,...n){var r,i,s,o;(i=(r=t.animation)[e])==null||i.call(r,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var AM=["onStart","onChange","onRest"],OM=1,_k=class{constructor(t,e){this.id=OM++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(const e in t){const n=t[e];R.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(Fa(t)),this}start(t){let{queue:e}=this;return t?e=mt(t).map(Fa):this.queue=[],this._flush?this._flush(this,e):(kk(this,e),hp(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;Y(mt(e),r=>n[r].stop(!!t))}else La(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(R.und(t))this.start({pause:!0});else{const e=this.springs;Y(mt(t),n=>e[n].pause())}return this}resume(t){if(R.und(t))this.start({pause:!1});else{const e=this.springs;Y(mt(t),n=>e[n].resume())}return this}each(t){En(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Bo(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!r&&this._started,o=i||s&&n.size?this.get():null;i&&e.size&&Bo(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,Bo(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;J.onFrame(this._onFrame)}};function hp(t,e){return Promise.all(e.map(n=>wk(t,n))).then(n=>Og(t,n))}async function wk(t,e,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=e,u=R.obj(e.default)&&e.default;o&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);const c=R.arr(i)||R.fun(i)?i:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):Y(AM,_=>{const w=e[_];if(R.fun(w)){const p=t._events[_];e[_]=({finished:h,cancelled:y})=>{const m=p.get(w);m?(h||(m.finished=!1),y&&(m.cancelled=!0)):p.set(w,{value:null,finished:h||!1,cancelled:y||!1})},u&&(u[_]=e[_])}});const d=t._state;e.pause===!d.paused?(d.paused=e.pause,bo(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);const f=(r||Object.keys(t.springs)).map(_=>t.springs[_].start(e)),g=e.cancel===!0||dk(e,"cancel")===!0;(c||g&&d.asyncId)&&f.push(pk(++t._lastAsyncId,{props:e,state:d,actions:{pause:rp,resume:rp,start(_,w){g?(La(d,t._lastAsyncId),w(ms(t))):(_.onRest=a,w(gk(c,_,d,t)))}}})),d.paused&&await new Promise(_=>{d.resumeQueue.add(_)});const v=Og(t,await Promise.all(f));if(o&&v.finished&&!(n&&v.noop)){const _=yk(e,o,i);if(_)return kk(t,[_]),wk(t,_,!0)}return l&&J.batchedUpdates(()=>l(v,t,t.item)),v}function pp(t,e){const n={...t.springs};return e&&Y(mt(e),r=>{R.und(r.keys)&&(r=Fa(r)),R.obj(r.to)||(r={...r,to:void 0}),Ck(n,r,i=>Sk(i))}),Ek(t,n),n}function Ek(t,e){En(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Ys(n,t))})}function Sk(t,e){const n=new PM;return n.key=t,e&&Ys(n,e),n}function Ck(t,e,n){e.keys&&Y(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function kk(t,e){Y(e,n=>{Ck(t.springs,n,r=>Sk(r,t))})}var ll=({children:t,...e})=>{const n=k.useContext(gc),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=dM(()=>({pause:r,immediate:i}),[r,i]);const{Provider:s}=gc;return k.createElement(s,{value:e},t)},gc=DM(ll,{});ll.Provider=gc.Provider;ll.Consumer=gc.Consumer;function DM(t,e){return Object.assign(t,k.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var Ik=()=>{const t=[],e=function(r){uM();const i=[];return Y(t,(s,o)=>{if(R.und(r))i.push(s.start());else{const a=n(r,s,o);a&&i.push(s.start(a))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){const i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return Y(t,r=>r.pause(...arguments)),this},e.resume=function(){return Y(t,r=>r.resume(...arguments)),this},e.set=function(r){Y(t,(i,s)=>{const o=R.fun(r)?r(s,i):r;o&&i.set(o)})},e.start=function(r){const i=[];return Y(t,(s,o)=>{if(R.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},e.stop=function(){return Y(t,r=>r.stop(...arguments)),this},e.update=function(r){return Y(t,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(r,i,s){return R.fun(r)?r(s,i):r};return e._getProps=n,e};function MM(t,e,n){const r=R.fun(e)&&e;r&&!n&&(n=[]);const i=k.useMemo(()=>r||arguments.length==3?Ik():void 0,[]),s=k.useRef(0),o=Pg(),a=k.useMemo(()=>({ctrls:[],queue:[],flush(p,h){const y=pp(p,h);return s.current>0&&!a.queue.length&&!Object.keys(y).some(S=>!p.springs[S])?hp(p,h):new Promise(S=>{Ek(p,y),a.queue.push(()=>{S(hp(p,h))}),o()})}}),[]),l=k.useRef([...a.ctrls]),u=[],c=sp(t)||0;k.useMemo(()=>{Y(l.current.slice(t,c),p=>{lp(p,i),p.stop(!0)}),l.current.length=t,d(c,t)},[t]),k.useMemo(()=>{d(0,Math.min(c,t))},n);function d(p,h){for(let y=p;y<h;y++){const m=l.current[y]||(l.current[y]=new _k(null,a.flush)),S=r?r(y,m):e[y];S&&(u[y]=xM(S))}}const f=l.current.map((p,h)=>pp(p,u[h])),g=k.useContext(ll),v=sp(g),_=g!==v&&fk(g);si(()=>{s.current++,a.ctrls=l.current;const{queue:p}=a;p.length&&(a.queue=[],Y(p,h=>h())),Y(l.current,(h,y)=>{i==null||i.add(h),_&&h.start({default:g});const m=u[y];m&&(hk(h,m.ref),h.ref?h.queue.push(m):h.start(m))})}),xg(()=>()=>{Y(a.ctrls,p=>p.stop(!0))});const w=f.map(p=>({...p}));return i?[w,i]:w}function xL(t,e){const n=R.fun(t),[[r],i]=MM(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,i]:r}function LM(t,e,n){const r=R.fun(e)&&e,{reset:i,sort:s,trail:o=0,expires:a=!0,exitBeforeEnter:l=!1,onDestroyed:u,ref:c,config:d}=r?r():e,f=k.useMemo(()=>r||arguments.length==3?Ik():void 0,[]),g=mt(t),v=[],_=k.useRef(null),w=i?null:_.current;si(()=>{_.current=v}),xg(()=>(Y(v,V=>{f==null||f.add(V.ctrl),V.ctrl.ref=f}),()=>{Y(_.current,V=>{V.expired&&clearTimeout(V.expirationId),lp(V.ctrl,f),V.ctrl.stop(!0)})}));const p=UM(g,r?r():e,w),h=i&&_.current||[];si(()=>Y(h,({ctrl:V,item:q,key:ue})=>{lp(V,f),wt(u,q,ue)}));const y=[];if(w&&Y(w,(V,q)=>{V.expired?(clearTimeout(V.expirationId),h.push(V)):(q=y[q]=p.indexOf(V.key),~q&&(v[q]=V))}),Y(g,(V,q)=>{v[q]||(v[q]={key:p[q],item:V,phase:"mount",ctrl:new _k},v[q].ctrl.item=V)}),y.length){let V=-1;const{leave:q}=r?r():e;Y(y,(ue,ye)=>{const x=w[ye];~ue?(V=v.indexOf(x),v[V]={...x,item:g[ue]}):q&&v.splice(++V,0,x)})}R.fun(s)&&v.sort((V,q)=>s(V.item,q.item));let m=-o;const S=Pg(),T=fd(e),I=new Map,A=k.useRef(new Map),M=k.useRef(!1);Y(v,(V,q)=>{const ue=V.key,ye=V.phase,x=r?r():e;let F,W;const Ee=wt(x.delay||0,ue);if(ye=="mount")F=x.enter,W="enter";else{const Me=p.indexOf(ue)<0;if(ye!="leave")if(Me)F=x.leave,W="leave";else if(F=x.update)W="update";else return;else if(!Me)F=x.enter,W="enter";else return}if(F=wt(F,V.item,q),F=R.obj(F)?Ag(F):{to:F},!F.config){const Me=d||T.config;F.config=wt(Me,V.item,q,W)}m+=o;const fe={...T,delay:Ee+m,ref:c,immediate:x.immediate,reset:!1,...F};if(W=="enter"&&R.und(fe.from)){const Me=r?r():e,st=R.und(Me.initial)||w?Me.from:Me.initial;fe.from=wt(st,V.item,q)}const{onResolve:Xn}=fe;fe.onResolve=Me=>{wt(Xn,Me);const st=_.current,ft=st.find(Pt=>Pt.key===ue);if(ft&&!(Me.cancelled&&ft.phase!="update")&&ft.ctrl.idle){const Pt=st.every(kn=>kn.ctrl.idle);if(ft.phase=="leave"){const kn=wt(a,ft.item);if(kn!==!1){const qs=kn===!0?0:kn;if(ft.expired=!0,!Pt&&qs>0){qs<=2147483647&&(ft.expirationId=setTimeout(S,qs));return}}}Pt&&st.some(kn=>kn.expired)&&(A.current.delete(ft),l&&(M.current=!0),S())}};const ce=pp(V.ctrl,fe);W==="leave"&&l?A.current.set(V,{phase:W,springs:ce,payload:fe}):I.set(V,{phase:W,springs:ce,payload:fe})});const L=k.useContext(ll),ae=sp(L),ie=L!==ae&&fk(L);si(()=>{ie&&Y(v,V=>{V.ctrl.start({default:L})})},[L]),Y(I,(V,q)=>{if(A.current.size){const ue=v.findIndex(ye=>ye.key===q.key);v.splice(ue,1)}}),si(()=>{Y(A.current.size?A.current:I,({phase:V,payload:q},ue)=>{const{ctrl:ye}=ue;ue.phase=V,f==null||f.add(ye),ie&&V=="enter"&&ye.start({default:L}),q&&(hk(ye,q.ref),(ye.ref||f)&&!M.current?ye.update(q):(ye.start(q),M.current&&(M.current=!1)))})},i?void 0:n);const ze=V=>k.createElement(k.Fragment,null,v.map((q,ue)=>{const{springs:ye}=I.get(q)||q.ctrl,x=V({...ye},q.item,q,ue);return x&&x.type?k.createElement(x.type,{...x.props,key:R.str(q.key)||R.num(q.key)?q.key:q.ctrl.id,ref:x.ref}):x}));return f?[ze,f]:ze}var FM=1;function UM(t,{key:e,keys:n=e},r){if(n===null){const i=new Set;return t.map(s=>{const o=r&&r.find(a=>a.item===s&&a.phase!=="leave"&&!i.has(a));return o?(i.add(o),o.key):FM++})}return R.und(n)?t:R.fun(n)?t.map(n):mt(n)}var zM=class extends Dg{constructor(t,e){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=Pa(...e);const n=this._get(),r=op(n);Ng(this,r.create(n))}advance(t){const e=this._get(),n=this.get();Rn(e,n)||(hn(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&v0(this._active)&&Sf(this)}_get(){const t=R.arr(this.source)?this.source.map(_t):mt(_t(this.source));return this.calc(...t)}_start(){this.idle&&!v0(this._active)&&(this.idle=!1,Y(cd(this),t=>{t.done=!1}),cn.skipAnimation?(J.batchedUpdates(()=>this.advance()),Sf(this)):od.start(this))}_attach(){let t=1;Y(mt(this.source),e=>{jt(e)&&Ys(e,this),cp(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))}),this.priority=t,this._start()}_detach(){Y(mt(this.source),t=>{jt(t)&&Aa(t,this)}),this._active.clear(),Sf(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=mt(this.source).reduce((e,n)=>Math.max(e,(cp(n)?n.priority:0)+1),0))}};function jM(t){return t.idle!==!1}function v0(t){return!t.size||Array.from(t).every(jM)}function Sf(t){t.idle||(t.idle=!0,Y(cd(t),e=>{e.done=!0}),Na(t,{type:"idle",parent:t}))}cn.assign({createStringInterpolator:ok,to:(t,e)=>new zM(t,e)});var bk=/^--/;function VM(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!bk.test(t)&&!(Ko.hasOwnProperty(t)&&Ko[t])?e+"px":(""+e).trim()}var y0={};function WM(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:s,scrollLeft:o,viewBox:a,...l}=e,u=Object.values(l),c=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:y0[d]||(y0[d]=d.replace(/([A-Z])/g,f=>"-"+f.toLowerCase())));i!==void 0&&(t.textContent=i);for(const d in r)if(r.hasOwnProperty(d)){const f=VM(d,r[d]);bk.test(d)?t.style.setProperty(d,f):t.style[d]=f}c.forEach((d,f)=>{t.setAttribute(d,u[f])}),s!==void 0&&(t.scrollTop=s),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var Ko={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$M=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),BM=["Webkit","Ms","Moz","O"];Ko=Object.keys(Ko).reduce((t,e)=>(BM.forEach(n=>t[$M(n,e)]=t[e]),t),Ko);var HM=/^(matrix|translate|scale|rotate|skew)/,GM=/^(translate)/,KM=/^(rotate|skew)/,Cf=(t,e)=>R.num(t)&&t!==0?t+e:t,du=(t,e)=>R.arr(t)?t.every(n=>du(n,e)):R.num(t)?t===e:parseFloat(t)===e,YM=class extends dd{constructor({x:t,y:e,z:n,...r}){const i=[],s=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>Cf(a,"px")).join(",")})`,du(o,0)])),En(r,(o,a)=>{if(a==="transform")i.push([o||""]),s.push(l=>[l,l===""]);else if(HM.test(a)){if(delete r[a],R.und(o))return;const l=GM.test(a)?"px":KM.test(a)?"deg":"";i.push(mt(o)),s.push(a==="rotate3d"?([u,c,d,f])=>[`rotate3d(${u},${c},${d},${Cf(f,l)})`,du(f,0)]:u=>[`${a}(${u.map(c=>Cf(c,l)).join(",")})`,du(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new qM(i,s)),super(r)}},qM=class extends rk{constructor(t,e){super(),this.inputs=t,this.transforms=e,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return Y(this.inputs,(n,r)=>{const i=_t(n[0]),[s,o]=this.transforms[r](R.arr(i)?i:n.map(_t));t+=" "+s,e=e&&o}),e?"none":t}observerAdded(t){t==1&&Y(this.inputs,e=>Y(e,n=>jt(n)&&Ys(n,this)))}observerRemoved(t){t==0&&Y(this.inputs,e=>Y(e,n=>jt(n)&&Aa(n,this)))}eventObserved(t){t.type=="change"&&(this._value=null),Na(this,t)}},QM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];cn.assign({batchedUpdates:Lw.unstable_batchedUpdates,createStringInterpolator:ok,colors:jD});var XM=_M(QM,{applyAnimatedValues:WM,createAnimatedStyle:t=>new YM(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),JM=XM.animated;function Di(){const t=Xw();return G.jsxs("section",{className:"w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[G.jsx("h1",{className:"font-bold text-3xl",children:"Oops!"}),G.jsx("p",{children:"Something went wrong"}),G.jsx("p",{className:"font-light",children:t.statusText||t.message})]})}const ZM=k.createContext({user:null,setUser:()=>{}});function _0(){const t=LM([0,1,2,3,4,5],{from:{scale:.5,opacity:0},enter:{scale:1.5,opacity:1},config:{damping:0,frequency:1},trail:166.66666666666666});return G.jsx("section",{className:"w-full h-full flex items-center justify-center",children:G.jsx("div",{className:"relative",children:t((e,n)=>G.jsx(JM.div,{className:"w-5 h-5 rounded-full bg-c9 absolute",style:{...e,x:50*Math.cos(n*Math.PI/3),y:50*Math.sin(n*Math.PI/3)}},n))})})}const w0=k.lazy(()=>um(()=>import("./Home-9dd2cbc9.js"),["assets/Home-9dd2cbc9.js","assets/CurrentClassses-06f5e58e.js"])),E0=k.lazy(()=>um(()=>import("./Schedule-68c1d6ff.js"),["assets/Schedule-68c1d6ff.js","assets/CurrentClassses-06f5e58e.js"])),eL=k.lazy(()=>um(()=>import("./LoginPage-794a4c49.js"),[]));function tL(){const[t,e]=k.useState(null);k.useEffect(()=>{ox(T4(),r=>{e(r||null)})},[]);const n=w2([{path:"/",element:G.jsx(eL,{}),errorElement:G.jsx(Di,{})},{path:"/forgot",element:G.jsx(ND,{}),errorElement:G.jsx(Di,{})},{path:"/schedule",element:G.jsx(E0,{}),errorElement:G.jsx(Di,{})},{path:"/users/:uid",element:G.jsx(w0,{}),errorElement:G.jsx(Di,{}),children:[{path:"/users/:uid/settings",element:G.jsx(w0,{})}]},{path:"/email-verification-confirmation",element:G.jsx(b2,{}),errorElement:G.jsx(Di,{})},{path:"/users/:uid/schedule",element:G.jsx(E0,{login:!0}),errorElement:G.jsx(Di,{})},{path:"/loading",element:G.jsx(_0,{})}]);return G.jsx("section",{className:"w-[100dvd] h-[100dvh] flex flex-col",children:G.jsx(ZM.Provider,{value:{user:t,setUser:e},children:G.jsx(k.Suspense,{fallback:G.jsx(_0,{}),children:G.jsx(f2,{router:n})})})})}kf.createRoot(document.getElementById("root")).render(G.jsx(yc.StrictMode,{children:G.jsx(tL,{})}));export{fL as $,F2 as A,Co as B,vi as C,ko as D,Ba as E,il as F,EL as G,kL as H,oL as I,yL as J,lL as K,Jw as L,R4 as M,uL as N,ZT as O,Fc as P,Hs as Q,Gs as R,js as S,Jc as T,ZM as U,pL as V,hL as W,vL as X,TL as Y,RL as Z,rL as _,JM as a,LM as a0,bL as a1,um as a2,mL as a3,PL as a4,IL as a5,CL as a6,dL as a7,cL as a8,ZD as a9,_L as aa,gL as b,SL as c,aL as d,nL as e,wL as f,sL as g,iL as h,by as i,G as j,wm as k,Wr as l,ks as m,Tr as n,me as o,mm as p,zs as q,k as r,oE as s,zu as t,xL as u,U2 as v,dt as w,Ye as x,K2 as y,vm as z};
