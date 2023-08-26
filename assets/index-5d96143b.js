function yk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function l0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u0={exports:{}},dc={},c0={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),_k=Symbol.for("react.portal"),wk=Symbol.for("react.fragment"),Ek=Symbol.for("react.strict_mode"),Sk=Symbol.for("react.profiler"),Ck=Symbol.for("react.provider"),kk=Symbol.for("react.context"),Ik=Symbol.for("react.forward_ref"),bk=Symbol.for("react.suspense"),Tk=Symbol.for("react.memo"),xk=Symbol.for("react.lazy"),Mg=Symbol.iterator;function Rk(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var d0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,h0={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||d0}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p0(){}p0.prototype=Ps.prototype;function op(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||d0}var ap=op.prototype=new p0;ap.constructor=op;f0(ap,Ps.prototype);ap.isPureReactComponent=!0;var Lg=Array.isArray,m0=Object.prototype.hasOwnProperty,lp={current:null},g0={key:!0,ref:!0,__self:!0,__source:!0};function v0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)m0.call(e,r)&&!g0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ma,type:t,key:s,ref:o,props:i,_owner:lp.current}}function Pk(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function Nk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nk(""+t.key):e.toString(36)}function Vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case _k:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hd(o,0):r,Lg(i)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),Vl(i,e,n,"",function(u){return u})):i!=null&&(up(i)&&(i=Pk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hd(s,a);o+=Vl(s,e,n,l,i)}else if(l=Rk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hd(s,a++),o+=Vl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ak(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},Wl={transition:null},Ok={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:lp};se.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ps;se.Fragment=wk;se.Profiler=Sk;se.PureComponent=op;se.StrictMode=Ek;se.Suspense=bk;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ok;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)m0.call(e,l)&&!g0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ma,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:kk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ck,_context:t},t.Consumer=t};se.createElement=v0;se.createFactory=function(t){var e=v0.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:Ik,render:t}};se.isValidElement=up;se.lazy=function(t){return{$$typeof:xk,_payload:{_status:-1,_result:t},_init:Ak}};se.memo=function(t,e){return{$$typeof:Tk,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return gt.current.useCallback(t,e)};se.useContext=function(t){return gt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};se.useEffect=function(t,e){return gt.current.useEffect(t,e)};se.useId=function(){return gt.current.useId()};se.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return gt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};se.useRef=function(t){return gt.current.useRef(t)};se.useState=function(t){return gt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return gt.current.useTransition()};se.version="18.2.0";c0.exports=se;var k=c0.exports;const fc=l0(k),Dk=yk({__proto__:null,default:fc},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mk=k,Lk=Symbol.for("react.element"),Fk=Symbol.for("react.fragment"),Uk=Object.prototype.hasOwnProperty,jk=Mk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zk={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Uk.call(e,r)&&!zk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lk,type:t,key:s,ref:o,props:i,_owner:jk.current}}dc.Fragment=Fk;dc.jsx=y0;dc.jsxs=y0;u0.exports=dc;var O=u0.exports,mf={},_0={exports:{}},Dt={},w0={exports:{}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,U){var $=P.length;P.push(U);e:for(;0<$;){var Ee=$-1>>>1,fe=P[Ee];if(0<i(fe,U))P[Ee]=U,P[$]=fe,$=Ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var U=P[0],$=P.pop();if($!==U){P[0]=$;e:for(var Ee=0,fe=P.length,Qn=fe>>>1;Ee<Qn;){var ce=2*(Ee+1)-1,Me=P[ce],it=ce+1,dt=P[it];if(0>i(Me,$))it<fe&&0>i(dt,Me)?(P[Ee]=dt,P[it]=$,Ee=it):(P[Ee]=Me,P[ce]=$,Ee=ce);else if(it<fe&&0>i(dt,$))P[Ee]=dt,P[it]=$,Ee=it;else break e}}return U}function i(P,U){var $=P.sortIndex-U.sortIndex;return $!==0?$:P.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,v=!1,g=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=P)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function m(P){if(_=!1,y(P),!g)if(n(l)!==null)g=!0,ue(E);else{var U=n(u);U!==null&&ye(m,U.startTime-P)}}function E(P,U){g=!1,_&&(_=!1,p(N),N=-1),v=!0;var $=f;try{for(y(U),d=n(l);d!==null&&(!(d.expirationTime>U)||P&&!oe());){var Ee=d.callback;if(typeof Ee=="function"){d.callback=null,f=d.priorityLevel;var fe=Ee(d.expirationTime<=U);U=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),y(U)}else r(l);d=n(l)}if(d!==null)var Qn=!0;else{var ce=n(u);ce!==null&&ye(m,ce.startTime-U),Qn=!1}return Qn}finally{d=null,f=$,v=!1}}var b=!1,I=null,N=-1,D=5,F=-1;function oe(){return!(t.unstable_now()-F<D)}function Z(){if(I!==null){var P=t.unstable_now();F=P;var U=!0;try{U=I(!0,P)}finally{U?je():(b=!1,I=null)}}else b=!1}var je;if(typeof h=="function")je=function(){h(Z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=Z,je=function(){q.postMessage(null)}}else je=function(){w(Z,0)};function ue(P){I=P,b||(b=!0,je())}function ye(P,U){N=w(function(){P(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||v||(g=!0,ue(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var $=f;f=U;try{return P()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,U){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=f;f=P;try{return U()}finally{f=$}},t.unstable_scheduleCallback=function(P,U,$){var Ee=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Ee+$:Ee):$=Ee,P){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=$+fe,P={id:c++,callback:U,priorityLevel:P,startTime:$,expirationTime:fe,sortIndex:-1},$>Ee?(P.sortIndex=$,e(u,P),n(l)===null&&P===n(u)&&(_?(p(N),N=-1):_=!0,ye(m,$-Ee))):(P.sortIndex=fe,e(l,P),g||v||(g=!0,ue(E))),P},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(P){var U=f;return function(){var $=f;f=U;try{return P.apply(this,arguments)}finally{f=$}}}})(E0);w0.exports=E0;var Vk=w0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=k,Ot=Vk;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,$o={};function Ii(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for($o[t]=e,t=0;t<e.length;t++)C0.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=Object.prototype.hasOwnProperty,Wk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},jg={};function $k(t){return gf.call(jg,t)?!0:gf.call(Ug,t)?!1:Wk.test(t)?jg[t]=!0:(Ug[t]=!0,!1)}function Bk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hk(t,e,n,r){if(e===null||typeof e>"u"||Bk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cp=/[\-:]([a-z])/g;function dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cp,dp);rt[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cp,dp);rt[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cp,dp);rt[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fp(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hk(e,n,i,r)&&(n=null),r||i===null?$k(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),pp=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),mp=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),b0=Symbol.for("react.offscreen"),zg=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,pd;function po(t){if(pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pd=e&&e[1]||""}return`
`+pd+t}var md=!1;function gd(t,e){if(!t||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?po(t):""}function Gk(t){switch(t.tag){case 5:return po(t.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return t=gd(t.type,!1),t;case 11:return t=gd(t.type.render,!1),t;case 1:return t=gd(t.type,!0),t;default:return""}}function wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Li:return"Fragment";case Mi:return"Portal";case vf:return"Profiler";case hp:return"StrictMode";case yf:return"Suspense";case _f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case pp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mp:return e=t.displayName||null,e!==null?e:wf(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return wf(t(e))}catch{}}return null}function Kk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wf(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yk(t){var e=T0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=Yk(t))}function x0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=T0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function R0(t,e){e=e.checked,e!=null&&fp(t,"checked",e,!1)}function Sf(t,e){R0(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mo=Array.isArray;function es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $g(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(mo(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function P0(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function If(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qk=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){qk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function O0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function D0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=O0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Qk=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(Qk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,ts=null,ns=null;function Hg(t){if(t=Ua(t)){if(typeof Rf!="function")throw Error(R(280));var e=t.stateNode;e&&(e=vc(e),Rf(t.stateNode,t.type,e))}}function M0(t){ts?ns?ns.push(t):ns=[t]:ts=t}function L0(){if(ts){var t=ts,e=ns;if(ns=ts=null,Hg(t),e)for(t=0;t<e.length;t++)Hg(e[t])}}function F0(t,e){return t(e)}function U0(){}var vd=!1;function j0(t,e,n){if(vd)return t(e,n);vd=!0;try{return F0(t,e,n)}finally{vd=!1,(ts!==null||ns!==null)&&(U0(),L0())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Pf=!1;if(Ln)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Pf=!1}function Xk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Co=!1,lu=null,uu=!1,Nf=null,Jk={onError:function(t){Co=!0,lu=t}};function Zk(t,e,n,r,i,s,o,a,l){Co=!1,lu=null,Xk.apply(Jk,arguments)}function eI(t,e,n,r,i,s,o,a,l){if(Zk.apply(this,arguments),Co){if(Co){var u=lu;Co=!1,lu=null}else throw Error(R(198));uu||(uu=!0,Nf=u)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gg(t){if(bi(t)!==t)throw Error(R(188))}function tI(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gg(i),t;if(s===r)return Gg(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function V0(t){return t=tI(t),t!==null?W0(t):null}function W0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W0(t);if(e!==null)return e;t=t.sibling}return null}var $0=Ot.unstable_scheduleCallback,Kg=Ot.unstable_cancelCallback,nI=Ot.unstable_shouldYield,rI=Ot.unstable_requestPaint,Ue=Ot.unstable_now,iI=Ot.unstable_getCurrentPriorityLevel,vp=Ot.unstable_ImmediatePriority,B0=Ot.unstable_UserBlockingPriority,cu=Ot.unstable_NormalPriority,sI=Ot.unstable_LowPriority,H0=Ot.unstable_IdlePriority,hc=null,gn=null;function oI(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:uI,aI=Math.log,lI=Math.LN2;function uI(t){return t>>>=0,t===0?32:31-(aI(t)/lI|0)|0}var fl=64,hl=4194304;function go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function du(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=go(a):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function cI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G0(){var t=fl;return fl<<=1,!(fl&4194240)&&(fl=64),t}function yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function fI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function K0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,_p,q0,Q0,X0,Of=!1,pl=[],gr=null,vr=null,yr=null,Go=new Map,Ko=new Map,sr=[],hI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ua(e),e!==null&&_p(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pI(t,e,n,r,i){switch(e){case"focusin":return gr=Qs(gr,t,e,n,r,i),!0;case"dragenter":return vr=Qs(vr,t,e,n,r,i),!0;case"mouseover":return yr=Qs(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,Qs(Go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,Qs(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function J0(t){var e=Qr(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=z0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xf=r,n.target.dispatchEvent(r),xf=null}else return e=Ua(n),e!==null&&_p(e),t.blockedOn=n,!1;e.shift()}return!0}function qg(t,e,n){$l(t)&&n.delete(e)}function mI(){Of=!1,gr!==null&&$l(gr)&&(gr=null),vr!==null&&$l(vr)&&(vr=null),yr!==null&&$l(yr)&&(yr=null),Go.forEach(qg),Ko.forEach(qg)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,mI)))}function Yo(t){function e(i){return Xs(i,t)}if(0<pl.length){Xs(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&Xs(gr,t),vr!==null&&Xs(vr,t),yr!==null&&Xs(yr,t),Go.forEach(e),Ko.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&sr.shift()}var rs=Hn.ReactCurrentBatchConfig,fu=!0;function gI(t,e,n,r){var i=de,s=rs.transition;rs.transition=null;try{de=1,wp(t,e,n,r)}finally{de=i,rs.transition=s}}function vI(t,e,n,r){var i=de,s=rs.transition;rs.transition=null;try{de=4,wp(t,e,n,r)}finally{de=i,rs.transition=s}}function wp(t,e,n,r){if(fu){var i=Df(t,e,n,r);if(i===null)xd(t,e,r,hu,n),Yg(t,r);else if(pI(i,t,e,n,r))r.stopPropagation();else if(Yg(t,r),e&4&&-1<hI.indexOf(t)){for(;i!==null;){var s=Ua(i);if(s!==null&&Y0(s),s=Df(t,e,n,r),s===null&&xd(t,e,r,hu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xd(t,e,r,null,n)}}var hu=null;function Df(t,e,n,r){if(hu=null,t=gp(r),t=Qr(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hu=t,null}function Z0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iI()){case vp:return 1;case B0:return 4;case cu:case sI:return 16;case H0:return 536870912;default:return 16}default:return 16}}var dr=null,Ep=null,Bl=null;function e1(){if(Bl)return Bl;var t,e=Ep,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bl=i.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Qg(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Qg,this.isPropagationStopped=Qg,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sp=Mt(Ns),Fa=Ne({},Ns,{view:0,detail:0}),yI=Mt(Fa),_d,wd,Js,pc=Ne({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(_d=t.screenX-Js.screenX,wd=t.screenY-Js.screenY):wd=_d=0,Js=t),_d)},movementY:function(t){return"movementY"in t?t.movementY:wd}}),Xg=Mt(pc),_I=Ne({},pc,{dataTransfer:0}),wI=Mt(_I),EI=Ne({},Fa,{relatedTarget:0}),Ed=Mt(EI),SI=Ne({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),CI=Mt(SI),kI=Ne({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),II=Mt(kI),bI=Ne({},Ns,{data:0}),Jg=Mt(bI),TI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RI[t])?!!e[t]:!1}function Cp(){return PI}var NI=Ne({},Fa,{key:function(t){if(t.key){var e=TI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AI=Mt(NI),OI=Ne({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=Mt(OI),DI=Ne({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),MI=Mt(DI),LI=Ne({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),FI=Mt(LI),UI=Ne({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jI=Mt(UI),zI=[9,13,27,32],kp=Ln&&"CompositionEvent"in window,ko=null;Ln&&"documentMode"in document&&(ko=document.documentMode);var VI=Ln&&"TextEvent"in window&&!ko,t1=Ln&&(!kp||ko&&8<ko&&11>=ko),ev=String.fromCharCode(32),tv=!1;function n1(t,e){switch(t){case"keyup":return zI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fi=!1;function WI(t,e){switch(t){case"compositionend":return r1(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return t=e.data,t===ev&&tv?null:t;default:return null}}function $I(t,e){if(Fi)return t==="compositionend"||!kp&&n1(t,e)?(t=e1(),Bl=Ep=dr=null,Fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return t1&&e.locale!=="ko"?null:e.data;default:return null}}var BI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BI[t.type]:e==="textarea"}function i1(t,e,n,r){M0(r),e=pu(e,"onChange"),0<e.length&&(n=new Sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,qo=null;function HI(t){m1(t,0)}function mc(t){var e=zi(t);if(x0(e))return t}function GI(t,e){if(t==="change")return e}var s1=!1;if(Ln){var Sd;if(Ln){var Cd="oninput"in document;if(!Cd){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),Cd=typeof rv.oninput=="function"}Sd=Cd}else Sd=!1;s1=Sd&&(!document.documentMode||9<document.documentMode)}function iv(){Io&&(Io.detachEvent("onpropertychange",o1),qo=Io=null)}function o1(t){if(t.propertyName==="value"&&mc(qo)){var e=[];i1(e,qo,t,gp(t)),j0(HI,e)}}function KI(t,e,n){t==="focusin"?(iv(),Io=e,qo=n,Io.attachEvent("onpropertychange",o1)):t==="focusout"&&iv()}function YI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(qo)}function qI(t,e){if(t==="click")return mc(e)}function QI(t,e){if(t==="input"||t==="change")return mc(e)}function XI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:XI;function Qo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gf.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ov(t,e){var n=sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function a1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?a1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function l1(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JI(t){var e=l1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&a1(n.ownerDocument.documentElement,n)){if(r!==null&&Ip(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ov(n,s);var o=ov(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZI=Ln&&"documentMode"in document&&11>=document.documentMode,Ui=null,Mf=null,bo=null,Lf=!1;function av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||Ui==null||Ui!==au(r)||(r=Ui,"selectionStart"in r&&Ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Qo(bo,r)||(bo=r,r=pu(Mf,"onSelect"),0<r.length&&(e=new Sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ui)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},kd={},u1={};Ln&&(u1=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function gc(t){if(kd[t])return kd[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u1)return kd[t]=e[n];return t}var c1=gc("animationend"),d1=gc("animationiteration"),f1=gc("animationstart"),h1=gc("transitionend"),p1=new Map,lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){p1.set(t,e),Ii(e,[t])}for(var Id=0;Id<lv.length;Id++){var bd=lv[Id],eb=bd.toLowerCase(),tb=bd[0].toUpperCase()+bd.slice(1);Ur(eb,"on"+tb)}Ur(c1,"onAnimationEnd");Ur(d1,"onAnimationIteration");Ur(f1,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(h1,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eI(r,e,void 0,t),t.currentTarget=null}function m1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}}}if(uu)throw t=Nf,uu=!1,Nf=null,t}function Se(t,e){var n=e[Vf];n===void 0&&(n=e[Vf]=new Set);var r=t+"__bubble";n.has(r)||(g1(e,t,2,!1),n.add(r))}function Td(t,e,n){var r=0;e&&(r|=4),g1(n,t,r,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[vl]){t[vl]=!0,C0.forEach(function(n){n!=="selectionchange"&&(nb.has(n)||Td(n,!1,t),Td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,Td("selectionchange",!1,e))}}function g1(t,e,n,r){switch(Z0(e)){case 1:var i=gI;break;case 4:i=vI;break;default:i=wp}n=i.bind(null,e,n,t),i=void 0,!Pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}j0(function(){var u=s,c=gp(n),d=[];e:{var f=p1.get(t);if(f!==void 0){var v=Sp,g=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":v=AI;break;case"focusin":g="focus",v=Ed;break;case"focusout":g="blur",v=Ed;break;case"beforeblur":case"afterblur":v=Ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=MI;break;case c1:case d1:case f1:v=CI;break;case h1:v=FI;break;case"scroll":v=yI;break;case"wheel":v=jI;break;case"copy":case"cut":case"paste":v=II;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zg}var _=(e&4)!==0,w=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var m=y.stateNode;if(y.tag===5&&m!==null&&(y=m,p!==null&&(m=Ho(h,p),m!=null&&_.push(Jo(h,m,y)))),w)break;h=h.return}0<_.length&&(f=new v(f,g,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==xf&&(g=n.relatedTarget||n.fromElement)&&(Qr(g)||g[Fn]))break e;if((v||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Qr(g):null,g!==null&&(w=bi(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(_=Xg,m="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Zg,m="onPointerLeave",p="onPointerEnter",h="pointer"),w=v==null?f:zi(v),y=g==null?f:zi(g),f=new _(m,h+"leave",v,n,c),f.target=w,f.relatedTarget=y,m=null,Qr(c)===u&&(_=new _(p,h+"enter",g,n,c),_.target=y,_.relatedTarget=w,m=_),w=m,v&&g)t:{for(_=v,p=g,h=0,y=_;y;y=Ni(y))h++;for(y=0,m=p;m;m=Ni(m))y++;for(;0<h-y;)_=Ni(_),h--;for(;0<y-h;)p=Ni(p),y--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Ni(_),p=Ni(p)}_=null}else _=null;v!==null&&cv(d,f,v,_,!1),g!==null&&w!==null&&cv(d,w,g,_,!0)}}e:{if(f=u?zi(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var E=GI;else if(nv(f))if(s1)E=QI;else{E=YI;var b=KI}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=qI);if(E&&(E=E(t,u))){i1(d,E,n,c);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Cf(f,"number",f.value)}switch(b=u?zi(u):window,t){case"focusin":(nv(b)||b.contentEditable==="true")&&(Ui=b,Mf=u,bo=null);break;case"focusout":bo=Mf=Ui=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,av(d,n,c);break;case"selectionchange":if(ZI)break;case"keydown":case"keyup":av(d,n,c)}var I;if(kp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Fi?n1(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(t1&&n.locale!=="ko"&&(Fi||N!=="onCompositionStart"?N==="onCompositionEnd"&&Fi&&(I=e1()):(dr=c,Ep="value"in dr?dr.value:dr.textContent,Fi=!0)),b=pu(u,N),0<b.length&&(N=new Jg(N,t,null,n,c),d.push({event:N,listeners:b}),I?N.data=I:(I=r1(n),I!==null&&(N.data=I)))),(I=VI?WI(t,n):$I(t,n))&&(u=pu(u,"onBeforeInput"),0<u.length&&(c=new Jg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}m1(d,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(Jo(t,s,i)),s=Ho(t,e),s!=null&&r.push(Jo(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ho(n,s),l!=null&&o.unshift(Jo(n,l,a))):i||(l=Ho(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rb=/\r\n?/g,ib=/\u0000|\uFFFD/g;function dv(t){return(typeof t=="string"?t:""+t).replace(rb,`
`).replace(ib,"")}function yl(t,e,n){if(e=dv(e),dv(t)!==e&&n)throw Error(R(425))}function mu(){}var Ff=null,Uf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,sb=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,ob=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(ab)}:zf;function ab(t){setTimeout(function(){throw t})}function Rd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),pn="__reactFiber$"+As,Zo="__reactProps$"+As,Fn="__reactContainer$"+As,Vf="__reactEvents$"+As,lb="__reactListeners$"+As,ub="__reactHandles$"+As;function Qr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hv(t);t!==null;){if(n=t[pn])return n;t=hv(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[pn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function vc(t){return t[Zo]||null}var Wf=[],Vi=-1;function jr(t){return{current:t}}function Ie(t){0>Vi||(t.current=Wf[Vi],Wf[Vi]=null,Vi--)}function we(t,e){Vi++,Wf[Vi]=t.current,t.current=e}var Nr={},ut=jr(Nr),Ct=jr(!1),ui=Nr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function gu(){Ie(Ct),Ie(ut)}function pv(t,e,n){if(ut.current!==Nr)throw Error(R(168));we(ut,e),we(Ct,n)}function v1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,Kk(t)||"Unknown",i));return Ne({},n,r)}function vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ui=ut.current,we(ut,t),we(Ct,Ct.current),!0}function mv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=v1(t,e,ui),r.__reactInternalMemoizedMergedChildContext=t,Ie(Ct),Ie(ut),we(ut,t)):Ie(Ct),we(Ct,n)}var Tn=null,yc=!1,Pd=!1;function y1(t){Tn===null?Tn=[t]:Tn.push(t)}function cb(t){yc=!0,y1(t)}function zr(){if(!Pd&&Tn!==null){Pd=!0;var t=0,e=de;try{var n=Tn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,yc=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),$0(vp,zr),i}finally{de=e,Pd=!1}}return null}var Wi=[],$i=0,yu=null,_u=0,Ut=[],jt=0,ci=null,xn=1,Rn="";function Gr(t,e){Wi[$i++]=_u,Wi[$i++]=yu,yu=t,_u=e}function _1(t,e,n){Ut[jt++]=xn,Ut[jt++]=Rn,Ut[jt++]=ci,ci=t;var r=xn;t=Rn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-sn(e)+i|n<<i|r,Rn=s+t}else xn=1<<s|n<<i|r,Rn=t}function bp(t){t.return!==null&&(Gr(t,1),_1(t,1,0))}function Tp(t){for(;t===yu;)yu=Wi[--$i],Wi[$i]=null,_u=Wi[--$i],Wi[$i]=null;for(;t===ci;)ci=Ut[--jt],Ut[jt]=null,Rn=Ut[--jt],Ut[jt]=null,xn=Ut[--jt],Ut[jt]=null}var At=null,Nt=null,xe=!1,Xt=null;function w1(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,Nt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ci!==null?{id:xn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,Nt=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(xe){var e=Nt;if(e){var n=e;if(!gv(t,e)){if($f(t))throw Error(R(418));e=_r(n.nextSibling);var r=At;e&&gv(t,e)?w1(r,n):(t.flags=t.flags&-4097|2,xe=!1,At=t)}}else{if($f(t))throw Error(R(418));t.flags=t.flags&-4097|2,xe=!1,At=t}}}function vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function _l(t){if(t!==At)return!1;if(!xe)return vv(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=Nt)){if($f(t))throw E1(),Error(R(418));for(;e;)w1(t,e),e=_r(e.nextSibling)}if(vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=At?_r(t.stateNode.nextSibling):null;return!0}function E1(){for(var t=Nt;t;)t=_r(t.nextSibling)}function vs(){Nt=At=null,xe=!1}function xp(t){Xt===null?Xt=[t]:Xt.push(t)}var db=Hn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wu=jr(null),Eu=null,Bi=null,Rp=null;function Pp(){Rp=Bi=Eu=null}function Np(t){var e=wu.current;Ie(wu),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function is(t,e){Eu=t,Rp=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Rp!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(Eu===null)throw Error(R(308));Bi=t,Eu.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var Xr=null;function Ap(t){Xr===null?Xr=[t]:Xr.push(t)}function S1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,Ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yp(t,n)}}function yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Su(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,v=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(v,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(v,d,f):g,f==null)break e;d=Ne({},d,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=d}}function _v(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var k1=new S0.Component().refs;function Gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Sr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(on(e,t,i,r),Gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Sr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(on(e,t,i,r),Gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Sr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(on(e,t,r,n),Gl(e,t,r))}};function wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function I1(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=kt(e)?ui:ut.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ev(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=k1,Op(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=kt(e)?ui:ut.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),Su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===k1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sv(t){var e=t._init;return e(t._payload)}function b1(t){function e(p,h){if(t){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Cr(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,y,m){return h===null||h.tag!==6?(h=Fd(y,p.mode,m),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,m){var E=y.type;return E===Li?c(p,h,y.props.children,m,y.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rr&&Sv(E)===h.type)?(m=i(h,y.props),m.ref=Zs(p,h,y),m.return=p,m):(m=Jl(y.type,y.key,y.props,null,p.mode,m),m.ref=Zs(p,h,y),m.return=p,m)}function u(p,h,y,m){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Ud(y,p.mode,m),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,m,E){return h===null||h.tag!==7?(h=oi(y,p.mode,m,E),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Fd(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ul:return y=Jl(h.type,h.key,h.props,null,p.mode,y),y.ref=Zs(p,null,h),y.return=p,y;case Mi:return h=Ud(h,p.mode,y),h.return=p,h;case rr:var m=h._init;return d(p,m(h._payload),y)}if(mo(h)||Ys(h))return h=oi(h,p.mode,y,null),h.return=p,h;wl(p,h)}return null}function f(p,h,y,m){var E=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(p,h,""+y,m);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return y.key===E?l(p,h,y,m):null;case Mi:return y.key===E?u(p,h,y,m):null;case rr:return E=y._init,f(p,h,E(y._payload),m)}if(mo(y)||Ys(y))return E!==null?null:c(p,h,y,m,null);wl(p,y)}return null}function v(p,h,y,m,E){if(typeof m=="string"&&m!==""||typeof m=="number")return p=p.get(y)||null,a(h,p,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ul:return p=p.get(m.key===null?y:m.key)||null,l(h,p,m,E);case Mi:return p=p.get(m.key===null?y:m.key)||null,u(h,p,m,E);case rr:var b=m._init;return v(p,h,y,b(m._payload),E)}if(mo(m)||Ys(m))return p=p.get(y)||null,c(h,p,m,E,null);wl(h,m)}return null}function g(p,h,y,m){for(var E=null,b=null,I=h,N=h=0,D=null;I!==null&&N<y.length;N++){I.index>N?(D=I,I=null):D=I.sibling;var F=f(p,I,y[N],m);if(F===null){I===null&&(I=D);break}t&&I&&F.alternate===null&&e(p,I),h=s(F,h,N),b===null?E=F:b.sibling=F,b=F,I=D}if(N===y.length)return n(p,I),xe&&Gr(p,N),E;if(I===null){for(;N<y.length;N++)I=d(p,y[N],m),I!==null&&(h=s(I,h,N),b===null?E=I:b.sibling=I,b=I);return xe&&Gr(p,N),E}for(I=r(p,I);N<y.length;N++)D=v(I,p,N,y[N],m),D!==null&&(t&&D.alternate!==null&&I.delete(D.key===null?N:D.key),h=s(D,h,N),b===null?E=D:b.sibling=D,b=D);return t&&I.forEach(function(oe){return e(p,oe)}),xe&&Gr(p,N),E}function _(p,h,y,m){var E=Ys(y);if(typeof E!="function")throw Error(R(150));if(y=E.call(y),y==null)throw Error(R(151));for(var b=E=null,I=h,N=h=0,D=null,F=y.next();I!==null&&!F.done;N++,F=y.next()){I.index>N?(D=I,I=null):D=I.sibling;var oe=f(p,I,F.value,m);if(oe===null){I===null&&(I=D);break}t&&I&&oe.alternate===null&&e(p,I),h=s(oe,h,N),b===null?E=oe:b.sibling=oe,b=oe,I=D}if(F.done)return n(p,I),xe&&Gr(p,N),E;if(I===null){for(;!F.done;N++,F=y.next())F=d(p,F.value,m),F!==null&&(h=s(F,h,N),b===null?E=F:b.sibling=F,b=F);return xe&&Gr(p,N),E}for(I=r(p,I);!F.done;N++,F=y.next())F=v(I,p,N,F.value,m),F!==null&&(t&&F.alternate!==null&&I.delete(F.key===null?N:F.key),h=s(F,h,N),b===null?E=F:b.sibling=F,b=F);return t&&I.forEach(function(Z){return e(p,Z)}),xe&&Gr(p,N),E}function w(p,h,y,m){if(typeof y=="object"&&y!==null&&y.type===Li&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:e:{for(var E=y.key,b=h;b!==null;){if(b.key===E){if(E=y.type,E===Li){if(b.tag===7){n(p,b.sibling),h=i(b,y.props.children),h.return=p,p=h;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rr&&Sv(E)===b.type){n(p,b.sibling),h=i(b,y.props),h.ref=Zs(p,b,y),h.return=p,p=h;break e}n(p,b);break}else e(p,b);b=b.sibling}y.type===Li?(h=oi(y.props.children,p.mode,m,y.key),h.return=p,p=h):(m=Jl(y.type,y.key,y.props,null,p.mode,m),m.ref=Zs(p,h,y),m.return=p,p=m)}return o(p);case Mi:e:{for(b=y.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Ud(y,p.mode,m),h.return=p,p=h}return o(p);case rr:return b=y._init,w(p,h,b(y._payload),m)}if(mo(y))return g(p,h,y,m);if(Ys(y))return _(p,h,y,m);wl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=Fd(y,p.mode,m),h.return=p,p=h),o(p)):n(p,h)}return w}var ys=b1(!0),T1=b1(!1),ja={},vn=jr(ja),ea=jr(ja),ta=jr(ja);function Jr(t){if(t===ja)throw Error(R(174));return t}function Dp(t,e){switch(we(ta,e),we(ea,t),we(vn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:If(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=If(e,t)}Ie(vn),we(vn,e)}function _s(){Ie(vn),Ie(ea),Ie(ta)}function x1(t){Jr(ta.current);var e=Jr(vn.current),n=If(e,t.type);e!==n&&(we(ea,t),we(vn,n))}function Mp(t){ea.current===t&&(Ie(vn),Ie(ea))}var Re=jr(0);function Cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function Lp(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var Kl=Hn.ReactCurrentDispatcher,Ad=Hn.ReactCurrentBatchConfig,di=0,Pe=null,$e=null,Qe=null,ku=!1,To=!1,na=0,fb=0;function st(){throw Error(R(321))}function Fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Up(t,e,n,r,i,s){if(di=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?gb:vb,t=n(r,i),To){s=0;do{if(To=!1,na=0,25<=s)throw Error(R(301));s+=1,Qe=$e=null,e.updateQueue=null,Kl.current=yb,t=n(r,i)}while(To)}if(Kl.current=Iu,e=$e!==null&&$e.next!==null,di=0,Qe=$e=Pe=null,ku=!1,e)throw Error(R(300));return t}function jp(){var t=na!==0;return na=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Ht(){if($e===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Qe===null?Pe.memoizedState:Qe.next;if(e!==null)Qe=e,$e=t;else{if(t===null)throw Error(R(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ra(t,e){return typeof e=="function"?e(t):e}function Od(t){var e=Ht(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((di&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Pe.lanes|=c,fi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function R1(){}function P1(t,e){var n=Pe,r=Ht(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,zp(O1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ia(9,A1.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(R(349));di&30||N1(n,e,i)}return i}function N1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A1(t,e,n,r){e.value=n,e.getSnapshot=r,D1(e)&&M1(t)}function O1(t,e,n){return n(function(){D1(e)&&M1(t)})}function D1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function M1(t){var e=Un(t,1);e!==null&&on(e,t,1,-1)}function Cv(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=mb.bind(null,Pe,t),[e.memoizedState,t]}function ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function L1(){return Ht().memoizedState}function Yl(t,e,n,r){var i=fn();Pe.flags|=t,i.memoizedState=ia(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Fp(r,o.deps)){i.memoizedState=ia(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=ia(1|e,n,s,r)}function kv(t,e){return Yl(8390656,8,t,e)}function zp(t,e){return wc(2048,8,t,e)}function F1(t,e){return wc(4,2,t,e)}function U1(t,e){return wc(4,4,t,e)}function j1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z1(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,j1.bind(null,e,t),n)}function Vp(){}function V1(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W1(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $1(t,e,n){return di&21?(ln(n,e)||(n=G0(),Pe.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function hb(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Ad.transition;Ad.transition={};try{t(!1),e()}finally{de=n,Ad.transition=r}}function B1(){return Ht().memoizedState}function pb(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H1(t))G1(e,n);else if(n=S1(t,e,n,r),n!==null){var i=mt();on(n,t,r,i),K1(n,e,r)}}function mb(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H1(t))G1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,Ap(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=S1(t,e,i,r),n!==null&&(i=mt(),on(n,t,r,i),K1(n,e,r))}}function H1(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function G1(t,e){To=ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yp(t,n)}}var Iu={readContext:Bt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},gb={readContext:Bt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:kv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,j1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pb.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Cv,useDebugValue:Vp,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Cv(!1),e=t[0];return t=hb.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=fn();if(xe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Ze===null)throw Error(R(349));di&30||N1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kv(O1.bind(null,r,s,t),[t]),r.flags|=2048,ia(9,A1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=Ze.identifierPrefix;if(xe){var n=Rn,r=xn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vb={readContext:Bt,useCallback:V1,useContext:Bt,useEffect:zp,useImperativeHandle:z1,useInsertionEffect:F1,useLayoutEffect:U1,useMemo:W1,useReducer:Od,useRef:L1,useState:function(){return Od(ra)},useDebugValue:Vp,useDeferredValue:function(t){var e=Ht();return $1(e,$e.memoizedState,t)},useTransition:function(){var t=Od(ra)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:R1,useSyncExternalStore:P1,useId:B1,unstable_isNewReconciler:!1},yb={readContext:Bt,useCallback:V1,useContext:Bt,useEffect:zp,useImperativeHandle:z1,useInsertionEffect:F1,useLayoutEffect:U1,useMemo:W1,useReducer:Dd,useRef:L1,useState:function(){return Dd(ra)},useDebugValue:Vp,useDeferredValue:function(t){var e=Ht();return $e===null?e.memoizedState=t:$1(e,$e.memoizedState,t)},useTransition:function(){var t=Dd(ra)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:R1,useSyncExternalStore:P1,useId:B1,unstable_isNewReconciler:!1};function ws(t,e){try{var n="",r=e;do n+=Gk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _b=typeof WeakMap=="function"?WeakMap:Map;function Y1(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,ih=r),Yf(t,e)},n}function q1(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yf(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Iv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _b;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ob.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var wb=Hn.ReactCurrentOwner,Et=!1;function ft(t,e,n,r){e.child=t===null?T1(e,null,n,r):ys(e,t.child,n,r)}function xv(t,e,n,r,i){n=n.render;var s=e.ref;return is(e,i),r=Up(t,e,n,r,s,i),n=jp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(xe&&n&&bp(e),e.flags|=1,ft(t,e,r,i),e.child)}function Rv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Q1(t,e,s,r,i)):(t=Jl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Q1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,jn(t,e,i)}return qf(t,e,n,r,i)}function X1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Gi,Pt),Pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Gi,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Gi,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Gi,Pt),Pt|=r;return ft(t,e,i,n),e.child}function J1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qf(t,e,n,r,i){var s=kt(n)?ui:ut.current;return s=gs(e,s),is(e,i),n=Up(t,e,n,r,s,i),r=jp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(xe&&r&&bp(e),e.flags|=1,ft(t,e,n,i),e.child)}function Pv(t,e,n,r,i){if(kt(n)){var s=!0;vu(e)}else s=!1;if(is(e,i),e.stateNode===null)ql(t,e),I1(e,n,r),Kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=kt(n)?ui:ut.current,u=gs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ev(e,o,r,u),ir=!1;var f=e.memoizedState;o.state=f,Su(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ct.current||ir?(typeof c=="function"&&(Gf(e,n,c,r),l=e.memoizedState),(a=ir||wv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,C1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=kt(n)?ui:ut.current,l=gs(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ev(e,o,r,l),ir=!1,f=e.memoizedState,o.state=f,Su(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||Ct.current||ir?(typeof v=="function"&&(Gf(e,n,v,r),g=e.memoizedState),(u=ir||wv(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Qf(t,e,n,r,s,i)}function Qf(t,e,n,r,i,s){J1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mv(e,n,!1),jn(t,e,s);r=e.stateNode,wb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&mv(e,n,!0),e.child}function Z1(t){var e=t.stateNode;e.pendingContext?pv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pv(t,e.context,!1),Dp(t,e.containerInfo)}function Nv(t,e,n,r,i){return vs(),xp(i),e.flags|=256,ft(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ew(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Re,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cc(o,r,0,null),t=oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Xf,t):Wp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Eb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wp(t,e){return e=Cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&xp(r),ys(e,t.child,null,n),t=Wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Eb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Md(Error(R(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cc({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Md(s,r,void 0),El(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),on(r,t,i,-1))}return Yp(),r=Md(Error(R(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Db.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=_r(i.nextSibling),At=e,xe=!0,Xt=null,t!==null&&(Ut[jt++]=xn,Ut[jt++]=Rn,Ut[jt++]=ci,xn=t.id,Rn=t.overflow,ci=e),e=Wp(e,r.children),e.flags|=4096,e)}function Av(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hf(t.return,e,n)}function Ld(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Av(t,n,e);else if(t.tag===19)Av(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ld(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ld(e,!0,n,null,s);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sb(t,e,n){switch(e.tag){case 3:Z1(e),vs();break;case 5:x1(e);break;case 1:kt(e.type)&&vu(e);break;case 4:Dp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?ew(t,e,n):(we(Re,Re.current&1),t=jn(t,e,n),t!==null?t.sibling:null);we(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,X1(t,e,n)}return jn(t,e,n)}var nw,Zf,rw,iw;nw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};rw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(vn.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=kf(t,i),r=kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mu)}bf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($o.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iw=function(t,e,n,r){n!==r&&(e.flags|=4)};function eo(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cb(t,e,n){var r=e.pendingProps;switch(Tp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&gu(),ot(e),null;case 3:return r=e.stateNode,_s(),Ie(Ct),Ie(ut),Lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(ah(Xt),Xt=null))),Zf(t,e),ot(e),null;case 5:Mp(e);var i=Jr(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)rw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return ot(e),null}if(t=Jr(vn.current),_l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<vo.length;i++)Se(vo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Vg(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":$g(r,s),Se("invalid",r)}bf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":cl(r),Wg(r,s,!0);break;case"textarea":cl(r),Bg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Zo]=r,nw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<vo.length;i++)Se(vo[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Vg(t,r),i=Ef(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Se("invalid",t);break;case"textarea":$g(t,r),i=kf(t,r),Se("invalid",t);break;default:i=r}bf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?D0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&A0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&fp(t,s,l,o))}switch(n){case"input":cl(t),Wg(t,r,!1);break;case"textarea":cl(t),Bg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?es(t,!!r.multiple,s,!1):r.defaultValue!=null&&es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)iw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Jr(ta.current),Jr(vn.current),_l(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ot(e),null;case 13:if(Ie(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Nt!==null&&e.mode&1&&!(e.flags&128))E1(),vs(),e.flags|=98560,s=!1;else if(s=_l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[pn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Xt!==null&&(ah(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Ge===0&&(Ge=3):Yp())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return _s(),Zf(t,e),t===null&&Xo(e.stateNode.containerInfo),ot(e),null;case 10:return Np(e.type._context),ot(e),null;case 17:return kt(e.type)&&gu(),ot(e),null;case 19:if(Ie(Re),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)eo(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cu(t),o!==null){for(e.flags|=128,eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Es&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return ot(e),null}else 2*Ue()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Re.current,we(Re,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function kb(t,e){switch(Tp(e),e.tag){case 1:return kt(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ie(Ct),Ie(ut),Lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mp(e),null;case 13:if(Ie(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Re),null;case 4:return _s(),null;case 10:return Np(e.type._context),null;case 22:case 23:return Kp(),null;case 24:return null;default:return null}}var Sl=!1,at=!1,Ib=typeof WeakSet=="function"?WeakSet:Set,L=null;function Hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function eh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Ov=!1;function bb(t,e){if(Ff=fu,t=l1(),Ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},fu=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,w=g.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yt(e.type,_),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(m){Ae(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return g=Ov,Ov=!1,g}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&eh(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sw(t){var e=t.alternate;e!==null&&(t.alternate=null,sw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Zo],delete e[Vf],delete e[lb],delete e[ub])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ow(t){return t.tag===5||t.tag===3||t.tag===4}function Dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ow(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}function rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var tt=null,qt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)aw(t,e,n),n=n.sibling}function aw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:at||Hi(n,e);case 6:var r=tt,i=qt;tt=null,Zn(t,e,n),tt=r,qt=i,tt!==null&&(qt?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(qt?(t=tt,n=n.stateNode,t.nodeType===8?Rd(t.parentNode,n):t.nodeType===1&&Rd(t,n),Yo(t)):Rd(tt,n.stateNode));break;case 4:r=tt,i=qt,tt=n.stateNode.containerInfo,qt=!0,Zn(t,e,n),tt=r,qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&eh(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!at&&(Hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Zn(t,e,n),at=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function Mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ib),e.forEach(function(r){var i=Mb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,qt=!1;break e;case 3:tt=a.stateNode.containerInfo,qt=!0;break e;case 4:tt=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(tt===null)throw Error(R(160));aw(s,o,i),tt=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lw(e,t),e=e.sibling}function lw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),dn(t),r&4){try{xo(3,t,t.return),Ec(3,t)}catch(_){Ae(t,t.return,_)}try{xo(5,t,t.return)}catch(_){Ae(t,t.return,_)}}break;case 1:Kt(e,t),dn(t),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(Kt(e,t),dn(t),r&512&&n!==null&&Hi(n,n.return),t.flags&32){var i=t.stateNode;try{Bo(i,"")}catch(_){Ae(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&R0(i,s),Tf(a,o);var u=Tf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?D0(i,d):c==="dangerouslySetInnerHTML"?A0(i,d):c==="children"?Bo(i,d):fp(i,c,d,u)}switch(a){case"input":Sf(i,s);break;case"textarea":P0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?es(i,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?es(i,!!s.multiple,s.defaultValue,!0):es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zo]=s}catch(_){Ae(t,t.return,_)}}break;case 6:if(Kt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ae(t,t.return,_)}}break;case 3:if(Kt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(_){Ae(t,t.return,_)}break;case 4:Kt(e,t),dn(t);break;case 13:Kt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hp=Ue())),r&4&&Mv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,Kt(e,t),at=u):Kt(e,t),dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(d=L=c;L!==null;){switch(f=L,v=f.child,f.tag){case 0:case 11:case 14:case 15:xo(4,f,f.return);break;case 1:Hi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Ae(r,n,_)}}break;case 5:Hi(f,f.return);break;case 22:if(f.memoizedState!==null){Fv(d);continue}}v!==null?(v.return=f,L=v):Fv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=O0("display",o))}catch(_){Ae(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ae(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),dn(t),r&4&&Mv(t);break;case 21:break;default:Kt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ow(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=Dv(t);rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dv(t);nh(t,a,o);break;default:throw Error(R(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tb(t,e,n){L=t,uw(t)}function uw(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Sl;var u=at;if(Sl=o,(at=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Uv(i):l!==null?(l.return=o,L=l):Uv(i);for(;s!==null;)L=s,uw(s),s=s.sibling;L=i,Sl=a,at=u}Lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Lv(t)}}function Lv(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_v(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_v(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}at||e.flags&512&&th(e)}catch(f){Ae(e,e.return,f)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Fv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Uv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{th(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{th(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var xb=Math.ceil,bu=Hn.ReactCurrentDispatcher,$p=Hn.ReactCurrentOwner,$t=Hn.ReactCurrentBatchConfig,ae=0,Ze=null,Ve=null,nt=0,Pt=0,Gi=jr(0),Ge=0,sa=null,fi=0,Sc=0,Bp=0,Ro=null,wt=null,Hp=0,Es=1/0,In=null,Tu=!1,ih=null,Er=null,Cl=!1,fr=null,xu=0,Po=0,sh=null,Ql=-1,Xl=0;function mt(){return ae&6?Ue():Ql!==-1?Ql:Ql=Ue()}function Sr(t){return t.mode&1?ae&2&&nt!==0?nt&-nt:db.transition!==null?(Xl===0&&(Xl=G0()),Xl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Z0(t.type)),t):1}function on(t,e,n,r){if(50<Po)throw Po=0,sh=null,Error(R(185));La(t,n,r),(!(ae&2)||t!==Ze)&&(t===Ze&&(!(ae&2)&&(Sc|=n),Ge===4&&or(t,nt)),It(t,r),n===1&&ae===0&&!(e.mode&1)&&(Es=Ue()+500,yc&&zr()))}function It(t,e){var n=t.callbackNode;dI(t,e);var r=du(t,t===Ze?nt:0);if(r===0)n!==null&&Kg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kg(n),e===1)t.tag===0?cb(jv.bind(null,t)):y1(jv.bind(null,t)),ob(function(){!(ae&6)&&zr()}),n=null;else{switch(K0(r)){case 1:n=vp;break;case 4:n=B0;break;case 16:n=cu;break;case 536870912:n=H0;break;default:n=cu}n=vw(n,cw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cw(t,e){if(Ql=-1,Xl=0,ae&6)throw Error(R(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var r=du(t,t===Ze?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var i=ae;ae|=2;var s=fw();(Ze!==t||nt!==e)&&(In=null,Es=Ue()+500,si(t,e));do try{Nb();break}catch(a){dw(t,a)}while(1);Pp(),bu.current=s,ae=i,Ve!==null?e=0:(Ze=null,nt=0,e=Ge)}if(e!==0){if(e===2&&(i=Af(t),i!==0&&(r=i,e=oh(t,i))),e===1)throw n=sa,si(t,0),or(t,r),It(t,Ue()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!Rb(i)&&(e=Ru(t,r),e===2&&(s=Af(t),s!==0&&(r=s,e=oh(t,s))),e===1))throw n=sa,si(t,0),or(t,r),It(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Kr(t,wt,In);break;case 3:if(or(t,r),(r&130023424)===r&&(e=Hp+500-Ue(),10<e)){if(du(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zf(Kr.bind(null,t,wt,In),e);break}Kr(t,wt,In);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xb(r/1960))-r,10<r){t.timeoutHandle=zf(Kr.bind(null,t,wt,In),r);break}Kr(t,wt,In);break;case 5:Kr(t,wt,In);break;default:throw Error(R(329))}}}return It(t,Ue()),t.callbackNode===n?cw.bind(null,t):null}function oh(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=wt,wt=n,e!==null&&ah(e)),t}function ah(t){wt===null?wt=t:wt.push.apply(wt,t)}function Rb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Bp,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function jv(t){if(ae&6)throw Error(R(327));ss();var e=du(t,0);if(!(e&1))return It(t,Ue()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=Af(t);r!==0&&(e=r,n=oh(t,r))}if(n===1)throw n=sa,si(t,0),or(t,e),It(t,Ue()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,wt,In),It(t,Ue()),null}function Gp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Es=Ue()+500,yc&&zr())}}function hi(t){fr!==null&&fr.tag===0&&!(ae&6)&&ss();var e=ae;ae|=1;var n=$t.transition,r=de;try{if($t.transition=null,de=1,t)return t()}finally{de=r,$t.transition=n,ae=e,!(ae&6)&&zr()}}function Kp(){Pt=Gi.current,Ie(Gi)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sb(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Tp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:_s(),Ie(Ct),Ie(ut),Lp();break;case 5:Mp(r);break;case 4:_s();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:Np(r.type._context);break;case 22:case 23:Kp()}n=n.return}if(Ze=t,Ve=t=Cr(t.current,null),nt=Pt=e,Ge=0,sa=null,Bp=Sc=fi=0,wt=Ro=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xr=null}return t}function dw(t,e){do{var n=Ve;try{if(Pp(),Kl.current=Iu,ku){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ku=!1}if(di=0,Qe=$e=Pe=null,To=!1,na=0,$p.current=null,n===null||n.return===null){Ge=1,sa=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=bv(o);if(v!==null){v.flags&=-257,Tv(v,o,a,s,e),v.mode&1&&Iv(s,u,e),e=v,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Iv(s,u,e),Yp();break e}l=Error(R(426))}}else if(xe&&a.mode&1){var w=bv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Tv(w,o,a,s,e),xp(ws(l,a));break e}}s=l=ws(l,a),Ge!==4&&(Ge=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Y1(s,l,e);yv(s,p);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Er===null||!Er.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=q1(s,a,e);yv(s,m);break e}}s=s.return}while(s!==null)}pw(n)}catch(E){e=E,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function fw(){var t=bu.current;return bu.current=Iu,t===null?Iu:t}function Yp(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(fi&268435455)&&!(Sc&268435455)||or(Ze,nt)}function Ru(t,e){var n=ae;ae|=2;var r=fw();(Ze!==t||nt!==e)&&(In=null,si(t,e));do try{Pb();break}catch(i){dw(t,i)}while(1);if(Pp(),ae=n,bu.current=r,Ve!==null)throw Error(R(261));return Ze=null,nt=0,Ge}function Pb(){for(;Ve!==null;)hw(Ve)}function Nb(){for(;Ve!==null&&!nI();)hw(Ve)}function hw(t){var e=gw(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?pw(t):Ve=e,$p.current=null}function pw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kb(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Ve=null;return}}else if(n=Cb(n,e,Pt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ge===0&&(Ge=5)}function Kr(t,e,n){var r=de,i=$t.transition;try{$t.transition=null,de=1,Ab(t,e,n,r)}finally{$t.transition=i,de=r}return null}function Ab(t,e,n,r){do ss();while(fr!==null);if(ae&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fI(t,s),t===Ze&&(Ve=Ze=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,vw(cu,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=de;de=1;var a=ae;ae|=4,$p.current=null,bb(t,n),lw(n,t),JI(Uf),fu=!!Ff,Uf=Ff=null,t.current=n,Tb(n),rI(),ae=a,de=o,$t.transition=s}else t.current=n;if(Cl&&(Cl=!1,fr=t,xu=i),s=t.pendingLanes,s===0&&(Er=null),oI(n.stateNode),It(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=ih,ih=null,t;return xu&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===sh?Po++:(Po=0,sh=t):Po=0,zr(),null}function ss(){if(fr!==null){var t=K0(xu),e=$t.transition,n=de;try{if($t.transition=null,de=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,xu=0,ae&6)throw Error(R(331));var i=ae;for(ae|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:xo(8,c,s)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var f=c.sibling,v=c.return;if(sw(c),c===u){L=null;break}if(f!==null){f.return=v,L=f;break}L=v}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var h=t.current;for(L=h;L!==null;){o=L;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,L=y;else e:for(o=h;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(E){Ae(a,a.return,E)}if(a===o){L=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,L=m;break e}L=a.return}}if(ae=i,zr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(hc,t)}catch{}r=!0}return r}finally{de=n,$t.transition=e}}return!1}function zv(t,e,n){e=ws(n,e),e=Y1(t,e,1),t=wr(t,e,1),e=mt(),t!==null&&(La(t,1,e),It(t,e))}function Ae(t,e,n){if(t.tag===3)zv(t,t,n);else for(;e!==null;){if(e.tag===3){zv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=ws(n,t),t=q1(e,t,1),e=wr(e,t,1),t=mt(),e!==null&&(La(e,1,t),It(e,t));break}}e=e.return}}function Ob(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(nt&n)===n&&(Ge===4||Ge===3&&(nt&130023424)===nt&&500>Ue()-Hp?si(t,0):Bp|=n),It(t,e)}function mw(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=mt();t=Un(t,e),t!==null&&(La(t,e,n),It(t,n))}function Db(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mw(t,n)}function Mb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),mw(t,n)}var gw;gw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,Sb(t,e,n);Et=!!(t.flags&131072)}else Et=!1,xe&&e.flags&1048576&&_1(e,_u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ql(t,e),t=e.pendingProps;var i=gs(e,ut.current);is(e,n),i=Up(null,e,r,t,i,n);var s=jp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,vu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Op(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,Kf(e,r,t,n),e=Qf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&bp(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Fb(r),t=Yt(r,t),i){case 0:e=qf(null,e,r,t,n);break e;case 1:e=Pv(null,e,r,t,n);break e;case 11:e=xv(null,e,r,t,n);break e;case 14:e=Rv(null,e,r,Yt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Pv(t,e,r,i,n);case 3:e:{if(Z1(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,C1(t,e),Su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(R(423)),e),e=Nv(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(R(424)),e),e=Nv(t,e,r,n,i);break e}else for(Nt=_r(e.stateNode.containerInfo.firstChild),At=e,xe=!0,Xt=null,n=T1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=jn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return x1(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jf(r,i)?o=null:s!==null&&jf(r,s)&&(e.flags|=32),J1(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return ew(t,e,n);case 4:return Dp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),xv(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(wu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Ct.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=On(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,is(e,n),i=Bt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Rv(t,e,r,i,n);case 15:return Q1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),ql(t,e),e.tag=1,kt(r)?(t=!0,vu(e)):t=!1,is(e,n),I1(e,r,i),Kf(e,r,i,n),Qf(null,e,r,!0,t,n);case 19:return tw(t,e,n);case 22:return X1(t,e,n)}throw Error(R(156,e.tag))};function vw(t,e){return $0(t,e)}function Lb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new Lb(t,e,n,r)}function qp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fb(t){if(typeof t=="function")return qp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pp)return 11;if(t===mp)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Li:return oi(n.children,i,s,e);case hp:o=8,i|=8;break;case vf:return t=Wt(12,n,e,i|2),t.elementType=vf,t.lanes=s,t;case yf:return t=Wt(13,n,e,i),t.elementType=yf,t.lanes=s,t;case _f:return t=Wt(19,n,e,i),t.elementType=_f,t.lanes=s,t;case b0:return Cc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case I0:o=9;break e;case pp:o=11;break e;case mp:o=14;break e;case rr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function oi(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Cc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=b0,t.lanes=n,t.stateNode={isHidden:!1},t}function Fd(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Ud(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ub(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yd(0),this.expirationTimes=yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qp(t,e,n,r,i,s,o,a,l){return t=new Ub(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(s),t}function jb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yw(t){if(!t)return Nr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(kt(n))return v1(t,n,e)}return e}function _w(t,e,n,r,i,s,o,a,l){return t=Qp(n,r,!0,t,i,s,o,a,l),t.context=yw(null),n=t.current,r=mt(),i=Sr(n),s=On(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,La(t,i,r),It(t,r),t}function kc(t,e,n,r){var i=e.current,s=mt(),o=Sr(i);return n=yw(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(on(t,i,o,s),Gl(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Vv(t,e),(t=t.alternate)&&Vv(t,e)}function zb(){return null}var ww=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jp(t){this._internalRoot=t}Ic.prototype.render=Jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));kc(t,e,null,null)};Ic.prototype.unmount=Jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){kc(null,t,null,null)}),e[Fn]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&J0(t)}};function Zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function Vb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pu(o);s.call(u)}}var o=_w(e,r,t,0,null,!1,!1,"",Wv);return t._reactRootContainer=o,t[Fn]=o.current,Xo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pu(l);a.call(u)}}var l=Qp(t,0,!1,null,null,!1,!1,"",Wv);return t._reactRootContainer=l,t[Fn]=l.current,Xo(t.nodeType===8?t.parentNode:t),hi(function(){kc(e,l,n,r)}),l}function Tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pu(o);a.call(l)}}kc(e,o,t,i)}else o=Vb(n,e,t,i,r);return Pu(o)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=go(e.pendingLanes);n!==0&&(yp(e,n|1),It(e,Ue()),!(ae&6)&&(Es=Ue()+500,zr()))}break;case 13:hi(function(){var r=Un(t,1);if(r!==null){var i=mt();on(r,t,1,i)}}),Xp(t,1)}};_p=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=mt();on(e,t,134217728,n)}Xp(t,134217728)}};q0=function(t){if(t.tag===13){var e=Sr(t),n=Un(t,e);if(n!==null){var r=mt();on(n,t,e,r)}Xp(t,e)}};Q0=function(){return de};X0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Rf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(R(90));x0(r),Sf(r,i)}}}break;case"textarea":P0(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};F0=Gp;U0=hi;var Wb={usingClientEntryPoint:!1,Events:[Ua,zi,vc,M0,L0,Gp]},to={findFiberByHostInstance:Qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$b={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V0(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||zb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{hc=kl.inject($b),gn=kl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zp(e))throw Error(R(200));return jb(t,e,null,n)};Dt.createRoot=function(t,e){if(!Zp(t))throw Error(R(299));var n=!1,r="",i=ww;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qp(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Xo(t.nodeType===8?t.parentNode:t),new Jp(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=V0(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return hi(t)};Dt.hydrate=function(t,e,n){if(!bc(e))throw Error(R(200));return Tc(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Zp(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ww;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_w(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ic(e)};Dt.render=function(t,e,n){if(!bc(e))throw Error(R(200));return Tc(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!bc(t))throw Error(R(40));return t._reactRootContainer?(hi(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Dt.unstable_batchedUpdates=Gp;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Tc(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function Ew(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ew)}catch(t){console.error(t)}}Ew(),_0.exports=Dt;var Sw=_0.exports,$v=Sw;mf.createRoot=$v.createRoot,mf.hydrateRoot=$v.hydrateRoot;const Bb="modulepreload",Hb=function(t){return"/me-schedule-maker/"+t},Bv={},em=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Hb(s),s in Bv)return;Bv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Bb,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Te.apply(this,arguments)}var ze;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ze||(ze={}));const Hv="popstate";function Gb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return oa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pi(i)}return Yb(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ss(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kb(){return Math.random().toString(36).substr(2,8)}function Gv(t,e){return{usr:t.state,key:t.key,idx:e}}function oa(t,e,n,r){return n===void 0&&(n=null),Te({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gn(e):e,{state:n,key:e&&e.key||r||Kb()})}function pi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Yb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ze.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Te({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ze.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=ze.Push;let h=oa(_.location,w,p);n&&n(h,w),u=c()+1;let y=Gv(h,u),m=_.createHref(h);try{o.pushState(y,"",m)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(m)}s&&l&&l({action:a,location:_.location,delta:1})}function v(w,p){a=ze.Replace;let h=oa(_.location,w,p);n&&n(h,w),u=c();let y=Gv(h,u),m=_.createHref(h);o.replaceState(y,"",m),s&&l&&l({action:a,location:_.location,delta:0})}function g(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:pi(w);return ne(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hv,d),l=w,()=>{i.removeEventListener(Hv,d),l=null}},createHref(w){return e(i,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:v,go(w){return o.go(w)}};return _}var Fe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fe||(Fe={}));const qb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Qb(t){return t.index===!0}function lh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Qb(i)){let l=Te({},i,e(i),{id:a});return r[a]=l,l}else{let l=Te({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=lh(i.children,e,o,r)),l}})}function Ki(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gn(e):e,i=Os(r.pathname||"/",n);if(i==null)return null;let s=Cw(t);Xb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=oT(s[a],uT(i));return o}function Cw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of kw(s.path))i(s,o,l)}),e}function kw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Xb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jb=/^:\w+$/,Zb=3,eT=2,tT=1,nT=10,rT=-2,Kv=t=>t==="*";function iT(t,e){let n=t.split("/"),r=n.length;return n.some(Kv)&&(r+=rT),e&&(r+=eT),n.filter(i=>!Kv(i)).reduce((i,s)=>i+(Jb.test(s)?Zb:s===""?tT:nT),r)}function sT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Dn([i,c.pathname]),pathnameBase:hT(Dn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Dn([i,c.pathnameBase]))}return s}function aT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=cT(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ss(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uT(t){try{return decodeURI(t)}catch(e){return Ss(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cT(t,e){try{return decodeURIComponent(t)}catch(n){return Ss(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function dT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gn(t):t;return{pathname:n?n.startsWith("/")?n:fT(n,e):e,search:pT(r),hash:mT(i)}}function fT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gn(t):(i=Te({},t),ne(!i.pathname||!i.pathname.includes("?"),jd("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),jd("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),jd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=dT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Dn=t=>t.join("/").replace(/\/\/+/g,"/"),hT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class nm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Iw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bw=["post","put","patch","delete"],gT=new Set(bw),vT=["get",...bw],yT=new Set(vT),_T=new Set([301,302,303,307,308]),wT=new Set([307,308]),zd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ET={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},no={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ST=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function CT(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ne(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let S=t.detectErrorBoundary;i=C=>({hasErrorBoundary:S(C)})}else i=ST;let s={},o=lh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Te({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,v=null,g=null,_=t.hydrationData!=null,w=Ki(o,t.history.location,l),p=null;if(w==null){let S=Ft(404,{pathname:t.history.location.pathname}),{matches:C,route:T}=ty(o);w=C,p={[T.id]:S}}let h=!w.some(S=>S.route.lazy)&&(!w.some(S=>S.route.loader)||t.hydrationData!=null),y,m={historyAction:t.history.action,location:t.history.location,matches:w,initialized:h,navigation:zd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,blockers:new Map},E=ze.Pop,b=!1,I,N=!1,D=!1,F=[],oe=[],Z=new Map,je=0,W=-1,q=new Map,ue=new Set,ye=new Map,P=new Map,U=new Map,$=!1;function Ee(){return c=t.history.listen(S=>{let{action:C,location:T,delta:j}=S;if($){$=!1;return}Ss(U.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=Ng({currentLocation:m.location,nextLocation:T,historyAction:C});if(X&&j!=null){$=!0,t.history.go(j*-1),ol(X,{state:"blocked",location:T,proceed(){ol(X,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(j)},reset(){let K=new Map(m.blockers);K.set(X,no),ce({blockers:K})}});return}return Rt(C,T)}),m.initialized||Rt(ze.Pop,m.location),y}function fe(){c&&c(),d.clear(),I&&I.abort(),m.fetchers.forEach((S,C)=>od(C)),m.blockers.forEach((S,C)=>Pg(C))}function Qn(S){return d.add(S),()=>d.delete(S)}function ce(S){m=Te({},m,S),d.forEach(C=>C(m))}function Me(S,C){var T,j;let X=m.actionData!=null&&m.navigation.formMethod!=null&&Qt(m.navigation.formMethod)&&m.navigation.state==="loading"&&((T=S.state)==null?void 0:T._isRedirect)!==!0,K;C.actionData?Object.keys(C.actionData).length>0?K=C.actionData:K=null:X?K=m.actionData:K=null;let Q=C.loaderData?ey(m.loaderData,C.loaderData,C.matches||[],C.errors):m.loaderData,B=m.blockers;B.size>0&&(B=new Map(B),B.forEach((ge,et)=>B.set(et,no)));let V=b===!0||m.navigation.formMethod!=null&&Qt(m.navigation.formMethod)&&((j=S.state)==null?void 0:j._isRedirect)!==!0;a&&(o=a,a=void 0),N||E===ze.Pop||(E===ze.Push?t.history.push(S,S.state):E===ze.Replace&&t.history.replace(S,S.state)),ce(Te({},C,{actionData:K,loaderData:Q,historyAction:E,location:S,initialized:!0,navigation:zd,revalidation:"idle",restoreScrollPosition:Og(S,C.matches||m.matches),preventScrollReset:V,blockers:B})),E=ze.Pop,b=!1,N=!1,D=!1,F=[],oe=[]}async function it(S,C){if(typeof S=="number"){t.history.go(S);return}let T=uh(m.location,m.matches,l,u.v7_prependBasename,S,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:j,submission:X,error:K}=Yv(u.v7_normalizeFormMethod,!1,T,C),Q=m.location,B=oa(m.location,j,C&&C.state);B=Te({},B,t.history.encodeLocation(B));let V=C&&C.replace!=null?C.replace:void 0,ge=ze.Push;V===!0?ge=ze.Replace:V===!1||X!=null&&Qt(X.formMethod)&&X.formAction===m.location.pathname+m.location.search&&(ge=ze.Replace);let et=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,he=Ng({currentLocation:Q,nextLocation:B,historyAction:ge});if(he){ol(he,{state:"blocked",location:B,proceed(){ol(he,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),it(S,C)},reset(){let Le=new Map(m.blockers);Le.set(he,no),ce({blockers:Le})}});return}return await Rt(ge,B,{submission:X,pendingError:K,preventScrollReset:et,replace:C&&C.replace})}function dt(){if(sd(),ce({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Rt(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Rt(E||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Rt(S,C,T){I&&I.abort(),I=null,E=S,N=(T&&T.startUninterruptedRevalidation)===!0,mk(m.location,m.matches),b=(T&&T.preventScrollReset)===!0;let j=a||o,X=T&&T.overrideNavigation,K=Ki(j,C,l);if(!K){let Le=Ft(404,{pathname:C.pathname}),{matches:Ye,route:Br}=ty(j);ad(),Me(C,{matches:Ye,loaderData:{},errors:{[Br.id]:Le}});return}if(m.initialized&&!D&&xT(m.location,C)&&!(T&&T.submission&&Qt(T.submission.formMethod))){Me(C,{matches:K});return}I=new AbortController;let Q=io(t.history,C,I.signal,T&&T.submission),B,V;if(T&&T.pendingError)V={[Yi(K).route.id]:T.pendingError};else if(T&&T.submission&&Qt(T.submission.formMethod)){let Le=await Sn(Q,C,T.submission,K,{replace:T.replace});if(Le.shortCircuited)return;B=Le.pendingActionData,V=Le.pendingActionError,X=Il(C,T.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ge,loaderData:et,errors:he}=await Bs(Q,C,K,X,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,B,V);ge||(I=null,Me(C,Te({matches:K},B?{actionData:B}:{},{loaderData:et,errors:he})))}async function Sn(S,C,T,j,X){X===void 0&&(X={}),sd();let K=OT(C,T);ce({navigation:K});let Q,B=dh(j,C);if(!B.route.action&&!B.route.lazy)Q={type:Fe.error,error:Ft(405,{method:S.method,pathname:C.pathname,routeId:B.route.id})};else if(Q=await ro("action",S,B,j,s,i,l),S.signal.aborted)return{shortCircuited:!0};if(os(Q)){let V;return X&&X.replace!=null?V=X.replace:V=Q.location===m.location.pathname+m.location.search,await Hs(m,Q,{submission:T,replace:V}),{shortCircuited:!0}}if(No(Q)){let V=Yi(j,B.route.id);return(X&&X.replace)!==!0&&(E=ze.Push),{pendingActionData:{},pendingActionError:{[V.route.id]:Q.error}}}if(Zr(Q))throw Ft(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:Q.data}}}async function Bs(S,C,T,j,X,K,Q,B,V){let ge=j||Il(C,X),et=X||K||iy(ge),he=a||o,[Le,Ye]=qv(t.history,m,T,et,C,D,F,oe,ye,ue,he,l,B,V);if(ad(pe=>!(T&&T.some(Gt=>Gt.route.id===pe))||Le&&Le.some(Gt=>Gt.route.id===pe)),W=++je,Le.length===0&&Ye.length===0){let pe=xg();return Me(C,Te({matches:T,loaderData:{},errors:V||null},B?{actionData:B}:{},pe?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!N){Ye.forEach(Gt=>{let Jn=m.fetchers.get(Gt.key),fd=so(void 0,Jn?Jn.data:void 0);m.fetchers.set(Gt.key,fd)});let pe=B||m.actionData;ce(Te({navigation:ge},pe?Object.keys(pe).length===0?{actionData:null}:{actionData:pe}:{},Ye.length>0?{fetchers:new Map(m.fetchers)}:{}))}Ye.forEach(pe=>{Z.has(pe.key)&&Xn(pe.key),pe.controller&&Z.set(pe.key,pe.controller)});let Br=()=>Ye.forEach(pe=>Xn(pe.key));I&&I.signal.addEventListener("abort",Br);let{results:Hr,loaderResults:Gs,fetcherResults:ld}=await bg(m.matches,T,Le,Ye,S);if(S.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Br),Ye.forEach(pe=>Z.delete(pe.key));let Cn=ny(Hr);if(Cn){if(Cn.idx>=Le.length){let pe=Ye[Cn.idx-Le.length].key;ue.add(pe)}return await Hs(m,Cn.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:kn,errors:al}=Zv(m,T,Le,Gs,V,Ye,ld,P);P.forEach((pe,Gt)=>{pe.subscribe(Jn=>{(Jn||pe.done)&&P.delete(Gt)})});let ud=xg(),cd=Rg(W),dd=ud||cd||Ye.length>0;return Te({loaderData:kn,errors:al},dd?{fetchers:new Map(m.fetchers)}:{})}function Ig(S){return m.fetchers.get(S)||ET}function ck(S,C,T,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(S)&&Xn(S);let X=a||o,K=uh(m.location,m.matches,l,u.v7_prependBasename,T,C,j==null?void 0:j.relative),Q=Ki(X,K,l);if(!Q){sl(S,C,Ft(404,{pathname:K}));return}let{path:B,submission:V,error:ge}=Yv(u.v7_normalizeFormMethod,!0,K,j);if(ge){sl(S,C,ge);return}let et=dh(Q,B);if(b=(j&&j.preventScrollReset)===!0,V&&Qt(V.formMethod)){dk(S,C,B,et,Q,V);return}ye.set(S,{routeId:C,path:B}),fk(S,C,B,et,Q,V)}async function dk(S,C,T,j,X,K){if(sd(),ye.delete(S),!j.route.action&&!j.route.lazy){let We=Ft(405,{method:K.formMethod,pathname:T,routeId:C});sl(S,C,We);return}let Q=m.fetchers.get(S),B=DT(K,Q);m.fetchers.set(S,B),ce({fetchers:new Map(m.fetchers)});let V=new AbortController,ge=io(t.history,T,V.signal,K);Z.set(S,V);let et=je,he=await ro("action",ge,j,X,s,i,l);if(ge.signal.aborted){Z.get(S)===V&&Z.delete(S);return}if(os(he))if(Z.delete(S),W>et){let We=Di(void 0);m.fetchers.set(S,We),ce({fetchers:new Map(m.fetchers)});return}else{ue.add(S);let We=so(K);return m.fetchers.set(S,We),ce({fetchers:new Map(m.fetchers)}),Hs(m,he,{submission:K,isFetchActionRedirect:!0})}if(No(he)){sl(S,C,he.error);return}if(Zr(he))throw Ft(400,{type:"defer-action"});let Le=m.navigation.location||m.location,Ye=io(t.history,Le,V.signal),Br=a||o,Hr=m.navigation.state!=="idle"?Ki(Br,m.navigation.location,l):m.matches;ne(Hr,"Didn't find any matches after fetcher action");let Gs=++je;q.set(S,Gs);let ld=so(K,he.data);m.fetchers.set(S,ld);let[Cn,kn]=qv(t.history,m,Hr,K,Le,D,F,oe,ye,ue,Br,l,{[j.route.id]:he.data},void 0);kn.filter(We=>We.key!==S).forEach(We=>{let Ks=We.key,Dg=m.fetchers.get(Ks),vk=so(void 0,Dg?Dg.data:void 0);m.fetchers.set(Ks,vk),Z.has(Ks)&&Xn(Ks),We.controller&&Z.set(Ks,We.controller)}),ce({fetchers:new Map(m.fetchers)});let al=()=>kn.forEach(We=>Xn(We.key));V.signal.addEventListener("abort",al);let{results:ud,loaderResults:cd,fetcherResults:dd}=await bg(m.matches,Hr,Cn,kn,Ye);if(V.signal.aborted)return;V.signal.removeEventListener("abort",al),q.delete(S),Z.delete(S),kn.forEach(We=>Z.delete(We.key));let pe=ny(ud);if(pe){if(pe.idx>=Cn.length){let We=kn[pe.idx-Cn.length].key;ue.add(We)}return Hs(m,pe.result)}let{loaderData:Gt,errors:Jn}=Zv(m,m.matches,Cn,cd,void 0,kn,dd,P);if(m.fetchers.has(S)){let We=Di(he.data);m.fetchers.set(S,We)}let fd=Rg(Gs);m.navigation.state==="loading"&&Gs>W?(ne(E,"Expected pending action"),I&&I.abort(),Me(m.navigation.location,{matches:Hr,loaderData:Gt,errors:Jn,fetchers:new Map(m.fetchers)})):(ce(Te({errors:Jn,loaderData:ey(m.loaderData,Gt,Hr,Jn)},fd||kn.length>0?{fetchers:new Map(m.fetchers)}:{})),D=!1)}async function fk(S,C,T,j,X,K){let Q=m.fetchers.get(S),B=so(K,Q?Q.data:void 0);m.fetchers.set(S,B),ce({fetchers:new Map(m.fetchers)});let V=new AbortController,ge=io(t.history,T,V.signal);Z.set(S,V);let et=je,he=await ro("loader",ge,j,X,s,i,l);if(Zr(he)&&(he=await Pw(he,ge.signal,!0)||he),Z.get(S)===V&&Z.delete(S),ge.signal.aborted)return;if(os(he))if(W>et){let Ye=Di(void 0);m.fetchers.set(S,Ye),ce({fetchers:new Map(m.fetchers)});return}else{ue.add(S),await Hs(m,he);return}if(No(he)){let Ye=Yi(m.matches,C);m.fetchers.delete(S),ce({fetchers:new Map(m.fetchers),errors:{[Ye.route.id]:he.error}});return}ne(!Zr(he),"Unhandled fetcher deferred data");let Le=Di(he.data);m.fetchers.set(S,Le),ce({fetchers:new Map(m.fetchers)})}async function Hs(S,C,T){let{submission:j,replace:X,isFetchActionRedirect:K}=T===void 0?{}:T;C.revalidate&&(D=!0);let Q=oa(S.location,C.location,Te({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(ne(Q,"Expected a location on the redirect navigation"),n){let ge=!1;if(C.reloadDocument)ge=!0;else if(Tw.test(C.location)){const et=t.history.createURL(C.location);ge=et.origin!==e.location.origin||Os(et.pathname,l)==null}if(ge){X?e.location.replace(C.location):e.location.assign(C.location);return}}I=null;let B=X===!0?ze.Replace:ze.Push,V=j||iy(S.navigation);if(wT.has(C.status)&&V&&Qt(V.formMethod))await Rt(B,Q,{submission:Te({},V,{formAction:C.location}),preventScrollReset:b});else if(K)await Rt(B,Q,{overrideNavigation:Il(Q),fetcherSubmission:V,preventScrollReset:b});else{let ge=Il(Q,V);await Rt(B,Q,{overrideNavigation:ge,preventScrollReset:b})}}async function bg(S,C,T,j,X){let K=await Promise.all([...T.map(V=>ro("loader",X,V,C,s,i,l)),...j.map(V=>V.matches&&V.match&&V.controller?ro("loader",io(t.history,V.path,V.controller.signal),V.match,V.matches,s,i,l):{type:Fe.error,error:Ft(404,{pathname:V.path})})]),Q=K.slice(0,T.length),B=K.slice(T.length);return await Promise.all([ry(S,T,Q,Q.map(()=>X.signal),!1,m.loaderData),ry(S,j.map(V=>V.match),B,j.map(V=>V.controller?V.controller.signal:null),!0)]),{results:K,loaderResults:Q,fetcherResults:B}}function sd(){D=!0,F.push(...ad()),ye.forEach((S,C)=>{Z.has(C)&&(oe.push(C),Xn(C))})}function sl(S,C,T){let j=Yi(m.matches,C);od(S),ce({errors:{[j.route.id]:T},fetchers:new Map(m.fetchers)})}function od(S){let C=m.fetchers.get(S);Z.has(S)&&!(C&&C.state==="loading"&&q.has(S))&&Xn(S),ye.delete(S),q.delete(S),ue.delete(S),m.fetchers.delete(S)}function Xn(S){let C=Z.get(S);ne(C,"Expected fetch controller: "+S),C.abort(),Z.delete(S)}function Tg(S){for(let C of S){let T=Ig(C),j=Di(T.data);m.fetchers.set(C,j)}}function xg(){let S=[],C=!1;for(let T of ue){let j=m.fetchers.get(T);ne(j,"Expected fetcher: "+T),j.state==="loading"&&(ue.delete(T),S.push(T),C=!0)}return Tg(S),C}function Rg(S){let C=[];for(let[T,j]of q)if(j<S){let X=m.fetchers.get(T);ne(X,"Expected fetcher: "+T),X.state==="loading"&&(Xn(T),q.delete(T),C.push(T))}return Tg(C),C.length>0}function hk(S,C){let T=m.blockers.get(S)||no;return U.get(S)!==C&&U.set(S,C),T}function Pg(S){m.blockers.delete(S),U.delete(S)}function ol(S,C){let T=m.blockers.get(S)||no;ne(T.state==="unblocked"&&C.state==="blocked"||T.state==="blocked"&&C.state==="blocked"||T.state==="blocked"&&C.state==="proceeding"||T.state==="blocked"&&C.state==="unblocked"||T.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+C.state);let j=new Map(m.blockers);j.set(S,C),ce({blockers:j})}function Ng(S){let{currentLocation:C,nextLocation:T,historyAction:j}=S;if(U.size===0)return;U.size>1&&Ss(!1,"A router only supports one blocker at a time");let X=Array.from(U.entries()),[K,Q]=X[X.length-1],B=m.blockers.get(K);if(!(B&&B.state==="proceeding")&&Q({currentLocation:C,nextLocation:T,historyAction:j}))return K}function ad(S){let C=[];return P.forEach((T,j)=>{(!S||S(j))&&(T.cancel(),C.push(j),P.delete(j))}),C}function pk(S,C,T){if(f=S,g=C,v=T||null,!_&&m.navigation===zd){_=!0;let j=Og(m.location,m.matches);j!=null&&ce({restoreScrollPosition:j})}return()=>{f=null,g=null,v=null}}function Ag(S,C){return v&&v(S,C.map(j=>AT(j,m.loaderData)))||S.key}function mk(S,C){if(f&&g){let T=Ag(S,C);f[T]=g()}}function Og(S,C){if(f){let T=Ag(S,C),j=f[T];if(typeof j=="number")return j}return null}function gk(S){s={},a=lh(S,i,void 0,s)}return y={get basename(){return l},get state(){return m},get routes(){return o},initialize:Ee,subscribe:Qn,enableScrollRestoration:pk,navigate:it,fetch:ck,revalidate:dt,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:Ig,deleteFetcher:od,dispose:fe,getBlocker:hk,deleteBlocker:Pg,_internalFetchControllers:Z,_internalActiveDeferreds:P,_internalSetRoutes:gk},y}function kT(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function uh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=tm(i||".",xc(a).map(c=>c.pathnameBase),Os(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!rm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Dn([n,u.pathname])),pi(u)}function Yv(t,e,n,r){if(!r||!kT(r))return{path:n};if(r.formMethod&&!NT(r.formMethod))return{path:n,error:Ft(405,{method:r.formMethod})};let i=()=>({path:n,error:Ft(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Rw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,g)=>{let[_,w]=g;return""+v+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Qt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=ch(r.formData),u=r.formData;else if(r.body instanceof FormData)l=ch(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Jv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Jv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Qt(c.formMethod))return{path:n,submission:c};let d=Gn(n);return e&&d.search&&rm(d.search)&&l.append("index",""),d.search="?"+l,{path:pi(d),submission:c}}function IT(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function qv(t,e,n,r,i,s,o,a,l,u,c,d,f,v){let g=v?Object.values(v)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),p=v?Object.keys(v)[0]:void 0,y=IT(n,p).filter((E,b)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(bT(e.loaderData,e.matches[b],E)||o.some(D=>D===E.route.id))return!0;let I=e.matches[b],N=E;return Qv(E,Te({currentUrl:_,currentParams:I.params,nextUrl:w,nextParams:N.params},r,{actionResult:g,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||xw(I,N)}))}),m=[];return l.forEach((E,b)=>{if(!n.some(oe=>oe.route.id===E.routeId))return;let I=Ki(c,E.path,d);if(!I){m.push({key:b,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(b),D=dh(I,E.path),F=!1;u.has(b)?F=!1:a.includes(b)?F=!0:N&&N.state!=="idle"&&N.data===void 0?F=s:F=Qv(D,Te({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:s})),F&&m.push({key:b,routeId:E.routeId,path:E.path,matches:I,match:D,controller:new AbortController})}),[y,m]}function bT(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function xw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Qv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Xv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ne(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Ss(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!qb.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Te({},e(i),{lazy:void 0}))}async function ro(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=g=>{let _,w=new Promise((p,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([g({request:e,params:n.params,context:a.requestContext}),w])};try{let g=n.route[t];if(n.route.lazy)if(g)u=(await Promise.all([d(g),Xv(n.route,s,i)]))[0];else if(await Xv(n.route,s,i),g=n.route[t],g)u=await d(g);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw Ft(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Fe.data,data:void 0};else if(g)u=await d(g);else{let _=new URL(e.url),w=_.pathname+_.search;throw Ft(404,{pathname:w})}ne(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){l=Fe.error,u=g}finally{c&&e.signal.removeEventListener("abort",c)}if(PT(u)){let g=u.status;if(_T.has(g)){let p=u.headers.get("Location");if(ne(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!Tw.test(p))p=uh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,p);else if(!a.isStaticRequest){let h=new URL(e.url),y=p.startsWith("//")?new URL(h.protocol+p):new URL(p),m=Os(y.pathname,o)!=null;y.origin===h.origin&&m&&(p=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",p),u;return{type:Fe.redirect,status:g,location:p,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Fe.error?Fe.error:Fe.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Fe.error?{type:l,error:new nm(g,u.statusText,_),headers:u.headers}:{type:Fe.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Fe.error)return{type:l,error:u};if(RT(u)){var f,v;return{type:Fe.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((v=u.init)==null?void 0:v.headers)&&new Headers(u.init.headers)}}return{type:Fe.data,data:u}}function io(t,e,n,r){let i=t.createURL(Rw(e)).toString(),s={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=ch(r.formData):s.body=r.formData}return new Request(i,s)}function ch(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Jv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function TT(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ne(!os(c),"Cannot handle redirect results in processLoaderData"),No(c)){let v=Yi(t,f),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[v.route.id]==null&&(o[v.route.id]=g),s[f]=void 0,l||(l=!0,a=Iw(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Zr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Zv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=TT(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:v}=s[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(v&&v.signal.aborted))if(No(g)){let _=Yi(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Te({},u,{[_.route.id]:g.error})),t.fetchers.delete(d)}else if(os(g))ne(!1,"Unhandled fetcher revalidation redirect");else if(Zr(g))ne(!1,"Unhandled fetcher deferred data");else{let _=Di(g.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function ey(t,e,n,r){let i=Te({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Yi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ty(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ft(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new nm(t||500,o,new Error(a),!0)}function ny(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(os(n))return{result:n,idx:e}}}function Rw(t){let e=typeof t=="string"?Gn(t):t;return pi(Te({},e,{hash:""}))}function xT(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Zr(t){return t.type===Fe.deferred}function No(t){return t.type===Fe.error}function os(t){return(t&&t.type)===Fe.redirect}function RT(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function PT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function NT(t){return yT.has(t.toLowerCase())}function Qt(t){return gT.has(t.toLowerCase())}async function ry(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!xw(u,l)&&(s&&s[l.route.id])!==void 0;if(Zr(a)&&(i||c)){let d=r[o];ne(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Pw(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function Pw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Fe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Fe.error,error:i}}return{type:Fe.data,data:t.deferredData.data}}}function rm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function AT(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function dh(t,e){let n=typeof e=="string"?Gn(e).search:e.search;if(t[t.length-1].route.index&&rm(n||""))return t[t.length-1];let r=xc(t);return r[r.length-1]}function iy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Il(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function OT(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function so(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function DT(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Di(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nu(){return Nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nu.apply(this,arguments)}const Rc=k.createContext(null),Nw=k.createContext(null),Ds=k.createContext(null),Pc=k.createContext(null),Ti=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Aw=k.createContext(null);function MT(t,e){let{relative:n}=e===void 0?{}:e;za()||ne(!1);let{basename:r,navigator:i}=k.useContext(Ds),{hash:s,pathname:o,search:a}=Mw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Dn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function za(){return k.useContext(Pc)!=null}function Nc(){return za()||ne(!1),k.useContext(Pc).location}function Ow(t){k.useContext(Ds).static||k.useLayoutEffect(t)}function Dw(){let{isDataRoute:t}=k.useContext(Ti);return t?KT():LT()}function LT(){za()||ne(!1);let t=k.useContext(Rc),{basename:e,navigator:n}=k.useContext(Ds),{matches:r}=k.useContext(Ti),{pathname:i}=Nc(),s=JSON.stringify(xc(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return Ow(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=tm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Dn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Mw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(Ti),{pathname:i}=Nc(),s=JSON.stringify(xc(r).map(o=>o.pathnameBase));return k.useMemo(()=>tm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function FT(t,e,n){za()||ne(!1);let{navigator:r}=k.useContext(Ds),{matches:i}=k.useContext(Ti),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Nc(),u;if(e){var c;let _=typeof e=="string"?Gn(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ne(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",v=Ki(t,{pathname:f}),g=WT(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Dn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Dn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&g?k.createElement(Pc.Provider,{value:{location:Nu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ze.Pop}},g):g}function UT(){let t=GT(),e=Iw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const jT=k.createElement(UT,null);class zT extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(Ti.Provider,{value:this.props.routeContext},k.createElement(Aw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VT(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Rc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Ti.Provider,{value:e},r)}function WT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||jT);let f=e.concat(s.slice(0,u+1)),v=()=>{let g;return c?g=d:l.route.Component?g=k.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,k.createElement(VT,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(zT,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var Lw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Lw||{}),Au=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Au||{});function $T(t){let e=k.useContext(Rc);return e||ne(!1),e}function BT(t){let e=k.useContext(Nw);return e||ne(!1),e}function HT(t){let e=k.useContext(Ti);return e||ne(!1),e}function Fw(t){let e=HT(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function GT(){var t;let e=k.useContext(Aw),n=BT(Au.UseRouteError),r=Fw(Au.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function KT(){let{router:t}=$T(Lw.UseNavigateStable),e=Fw(Au.UseNavigateStable),n=k.useRef(!1);return Ow(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Nu({fromRouteId:e},s)))},[t,e])}const YT="startTransition",sy=Dk[YT];function qT(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=k.useState(n.state),{v7_startTransition:o}=r||{},a=k.useCallback(d=>{o&&sy?sy(()=>s(d)):s(d)},[s,o]);k.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,v)=>n.navigate(d,{state:f,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(d,f,v)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),u=n.basename||"/",c=k.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return k.createElement(k.Fragment,null,k.createElement(Rc.Provider,{value:c},k.createElement(Nw.Provider,{value:i},k.createElement(XT,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?k.createElement(QT,{routes:n.routes,state:i}):e))),null)}function QT(t){let{routes:e,state:n}=t;return FT(e,void 0,n)}function XT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ze.Pop,navigator:s,static:o=!1}=t;za()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Gn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:v="default"}=r,g=k.useMemo(()=>{let _=Os(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:v},navigationType:i}},[a,u,c,d,f,v,i]);return g==null?null:k.createElement(Ds.Provider,{value:l},k.createElement(Pc.Provider,{children:n,value:g}))}new Promise(()=>{});function JT(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}function ZT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ex(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tx(t,e){return t.button===0&&(!e||e==="_self")&&!ex(t)}const nx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function rx(t,e){return CT({basename:e==null?void 0:e.basename,future:aa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Gb({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||ix(),routes:t,mapRouteProperties:JT}).initialize()}function ix(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=aa({},e,{errors:sx(e.errors)})),e}function sx(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new nm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const ox=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J4=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=ZT(e,nx),{basename:f}=k.useContext(Ds),v,g=!1;if(typeof u=="string"&&ax.test(u)&&(v=u,ox))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),m=Os(y.pathname,f);y.origin===h.origin&&m!=null?u=m+y.search+y.hash:g=!0}catch{}let _=MT(u,{relative:i}),w=lx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return k.createElement("a",aa({},d,{href:v||_,onClick:g||s?r:p,ref:n,target:l}))});var oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(oy||(oy={}));var ay;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ay||(ay={}));function lx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Dw(),l=Nc(),u=Mw(t,{relative:o});return k.useCallback(c=>{if(tx(c,n)){c.preventDefault();let d=r!==void 0?r:pi(l)===pi(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function ux(){return O.jsx("section",{className:"w-[100dvw] h-[100dvh] flex flex-col",children:O.jsx("p",{className:"",children:"Email Verification"})})}function cx(){return O.jsx("p",{children:"I forgor"})}var Z4={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},dx={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},e3=dx,t3={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},fx={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},hx={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},px=hx,mx={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},gx=mx;function ly(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ly(Object(n),!0).forEach(function(r){Ke(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ly(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ou(t){"@babel/helpers - typeof";return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ou(t)}function vx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yx(t,e,n){return e&&uy(t.prototype,e),n&&uy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ke(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function im(t,e){return wx(t)||Sx(t,e)||Uw(t,e)||kx()}function Va(t){return _x(t)||Ex(t)||Uw(t)||Cx()}function _x(t){if(Array.isArray(t))return fh(t)}function wx(t){if(Array.isArray(t))return t}function Ex(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Sx(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Uw(t,e){if(t){if(typeof t=="string")return fh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fh(t,e)}}function fh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Cx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cy=function(){},sm={},jw={},zw=null,Vw={mark:cy,measure:cy};try{typeof window<"u"&&(sm=window),typeof document<"u"&&(jw=document),typeof MutationObserver<"u"&&(zw=MutationObserver),typeof performance<"u"&&(Vw=performance)}catch{}var Ix=sm.navigator||{},dy=Ix.userAgent,fy=dy===void 0?"":dy,Ar=sm,be=jw,hy=zw,bl=Vw;Ar.document;var Kn=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",Ww=~fy.indexOf("MSIE")||~fy.indexOf("Trident/"),Tl,xl,Rl,Pl,Nl,zn="___FONT_AWESOME___",hh=16,$w="fa",Bw="svg-inline--fa",mi="data-fa-i2svg",ph="data-fa-pseudo-element",bx="data-fa-pseudo-element-pending",om="data-prefix",am="data-icon",py="fontawesome-i2svg",Tx="async",xx=["HTML","HEAD","STYLE","SCRIPT"],Hw=function(){try{return!0}catch{return!1}}(),ke="classic",Oe="sharp",lm=[ke,Oe];function Wa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ke]}})}var la=Wa((Tl={},Ke(Tl,ke,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ke(Tl,Oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Tl)),ua=Wa((xl={},Ke(xl,ke,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ke(xl,Oe,{solid:"fass",regular:"fasr",light:"fasl"}),xl)),ca=Wa((Rl={},Ke(Rl,ke,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ke(Rl,Oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Rl)),Rx=Wa((Pl={},Ke(Pl,ke,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ke(Pl,Oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pl)),Px=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Gw="fa-layers-text",Nx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ax=Wa((Nl={},Ke(Nl,ke,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ke(Nl,Oe,{900:"fass",400:"fasr",300:"fasl"}),Nl)),Kw=[1,2,3,4,5,6,7,8,9,10],Ox=Kw.concat([11,12,13,14,15,16,17,18,19,20]),Dx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ei={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},da=new Set;Object.keys(ua[ke]).map(da.add.bind(da));Object.keys(ua[Oe]).map(da.add.bind(da));var Mx=[].concat(lm,Va(da),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ei.GROUP,ei.SWAP_OPACITY,ei.PRIMARY,ei.SECONDARY]).concat(Kw.map(function(t){return"".concat(t,"x")})).concat(Ox.map(function(t){return"w-".concat(t)})),Ao=Ar.FontAwesomeConfig||{};function Lx(t){var e=be.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(be&&typeof be.querySelector=="function"){var Ux=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ux.forEach(function(t){var e=im(t,2),n=e[0],r=e[1],i=Fx(Lx(n));i!=null&&(Ao[r]=i)})}var Yw={styleDefault:"solid",familyDefault:"classic",cssPrefix:$w,replacementClass:Bw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ao.familyPrefix&&(Ao.cssPrefix=Ao.familyPrefix);var Cs=M(M({},Yw),Ao);Cs.autoReplaceSvg||(Cs.observeMutations=!1);var z={};Object.keys(Yw).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Cs[t]=n,Oo.forEach(function(r){return r(z)})},get:function(){return Cs[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Cs.cssPrefix=e,Oo.forEach(function(n){return n(z)})},get:function(){return Cs.cssPrefix}});Ar.FontAwesomeConfig=z;var Oo=[];function jx(t){return Oo.push(t),function(){Oo.splice(Oo.indexOf(t),1)}}var er=hh,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zx(t){if(!(!t||!Kn)){var e=be.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=be.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return be.head.insertBefore(e,r),t}}var Vx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var t=12,e="";t-- >0;)e+=Vx[Math.random()*62|0];return e}function Ms(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function um(t){return t.classList?Ms(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function qw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wx(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(qw(t[n]),'" ')},"").trim()}function Ac(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function cm(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function $x(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Bx(t){var e=t.transform,n=t.width,r=n===void 0?hh:n,i=t.height,s=i===void 0?hh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Ww?l+="translate(".concat(e.x/er-r/2,"em, ").concat(e.y/er-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/er,"em), calc(-50% + ").concat(e.y/er,"em)) "):l+="translate(".concat(e.x/er,"em, ").concat(e.y/er,"em) "),l+="scale(".concat(e.size/er*(e.flipX?-1:1),", ").concat(e.size/er*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Hx=`:root, :host {
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
}`;function Qw(){var t=$w,e=Bw,n=z.cssPrefix,r=z.replacementClass,i=Hx;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var my=!1;function Vd(){z.autoAddCss&&!my&&(zx(Qw()),my=!0)}var Gx={mixout:function(){return{dom:{css:Qw,insertCss:Vd}}},hooks:function(){return{beforeDOMElementCreation:function(){Vd()},beforeI2svg:function(){Vd()}}}},Vn=Ar||{};Vn[zn]||(Vn[zn]={});Vn[zn].styles||(Vn[zn].styles={});Vn[zn].hooks||(Vn[zn].hooks={});Vn[zn].shims||(Vn[zn].shims=[]);var en=Vn[zn],Xw=[],Kx=function t(){be.removeEventListener("DOMContentLoaded",t),Du=1,Xw.map(function(e){return e()})},Du=!1;Kn&&(Du=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),Du||be.addEventListener("DOMContentLoaded",Kx));function Yx(t){Kn&&(Du?setTimeout(t,0):Xw.push(t))}function $a(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?qw(t):"<".concat(e," ").concat(Wx(r),">").concat(s.map($a).join(""),"</").concat(e,">")}function gy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var qx=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Wd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?qx(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function Qx(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function mh(t){var e=Qx(t);return e.length===1?e[0].toString(16):null}function Xx(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function vy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function gh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=vy(e);typeof en.hooks.addPack=="function"&&!i?en.hooks.addPack(t,vy(e)):en.styles[t]=M(M({},en.styles[t]||{}),s),t==="fas"&&gh("fa",e)}var Al,Ol,Dl,qi=en.styles,Jx=en.shims,Zx=(Al={},Ke(Al,ke,Object.values(ca[ke])),Ke(Al,Oe,Object.values(ca[Oe])),Al),dm=null,Jw={},Zw={},eE={},tE={},nE={},eR=(Ol={},Ke(Ol,ke,Object.keys(la[ke])),Ke(Ol,Oe,Object.keys(la[Oe])),Ol);function tR(t){return~Mx.indexOf(t)}function nR(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!tR(i)?i:null}var rE=function(){var e=function(s){return Wd(qi,function(o,a,l){return o[l]=Wd(a,s,{}),o},{})};Jw=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Zw=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),nE=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in qi||z.autoFetchSvg,r=Wd(Jx,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});eE=r.names,tE=r.unicodes,dm=Oc(z.styleDefault,{family:z.familyDefault})};jx(function(t){dm=Oc(t.styleDefault,{family:z.familyDefault})});rE();function fm(t,e){return(Jw[t]||{})[e]}function rR(t,e){return(Zw[t]||{})[e]}function ti(t,e){return(nE[t]||{})[e]}function iE(t){return eE[t]||{prefix:null,iconName:null}}function iR(t){var e=tE[t],n=fm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Or(){return dm}var hm=function(){return{prefix:null,iconName:null,rest:[]}};function Oc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ke:n,i=la[r][t],s=ua[r][t]||ua[r][i],o=t in en.styles?t:null;return s||o||null}var yy=(Dl={},Ke(Dl,ke,Object.keys(ca[ke])),Ke(Dl,Oe,Object.keys(ca[Oe])),Dl);function Dc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ke(e,ke,"".concat(z.cssPrefix,"-").concat(ke)),Ke(e,Oe,"".concat(z.cssPrefix,"-").concat(Oe)),e),o=null,a=ke;(t.includes(s[ke])||t.some(function(u){return yy[ke].includes(u)}))&&(a=ke),(t.includes(s[Oe])||t.some(function(u){return yy[Oe].includes(u)}))&&(a=Oe);var l=t.reduce(function(u,c){var d=nR(z.cssPrefix,c);if(qi[c]?(c=Zx[a].includes(c)?Rx[a][c]:c,o=c,u.prefix=c):eR[a].indexOf(c)>-1?(o=c,u.prefix=Oc(c,{family:a})):d?u.iconName=d:c!==z.replacementClass&&c!==s[ke]&&c!==s[Oe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?iE(u.iconName):{},v=ti(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||v||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!qi.far&&qi.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},hm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Oe&&(qi.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ti(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Or()||"fas"),l}var sR=function(){function t(){vx(this,t),this.definitions={}}return yx(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),gh(a,o[a]);var l=ca[ke][a];l&&gh(l,o[a]),rE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),_y=[],Qi={},as={},oR=Object.keys(as);function aR(t,e){var n=e.mixoutsTo;return _y=t,Qi={},Object.keys(as).forEach(function(r){oR.indexOf(r)===-1&&delete as[r]}),_y.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ou(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Qi[o]||(Qi[o]=[]),Qi[o].push(s[o])})}r.provides&&r.provides(as)}),n}function vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Qi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function gi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Qi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Wn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return as[t]?as[t].apply(null,e):void 0}function yh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Or();if(e)return e=ti(n,e)||e,gy(sE.definitions,n,e)||gy(en.styles,n,e)}var sE=new sR,lR=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,gi("noAuto")},uR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kn?(gi("beforeI2svg",e),Wn("pseudoElements2svg",e),Wn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Yx(function(){dR({autoReplaceSvgRoot:n}),gi("watch",e)})}},cR={icon:function(e){if(e===null)return null;if(Ou(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ti(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Oc(e[0]);return{prefix:r,iconName:ti(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(Px))){var i=Dc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Or(),iconName:ti(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Or();return{prefix:s,iconName:ti(s,e)||e}}}},Lt={noAuto:lR,config:z,dom:uR,parse:cR,library:sE,findIconDefinition:yh,toHtml:$a},dR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?be:n;(Object.keys(en.styles).length>0||z.autoFetchSvg)&&Kn&&z.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function Mc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return $a(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kn){var r=be.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function fR(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(cm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ac(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function hR(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function pm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,v=f===void 0?!1:f,g=r.found?r:n,_=g.width,w=g.height,p=i==="fak",h=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),y={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},m=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};v&&(y.attributes[mi]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||fa())},children:[l]}),delete y.attributes.title);var E=M(M({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},m),d.styles)}),b=r.found&&n.found?Wn("generateAbstractMask",E)||{children:[],attributes:{}}:Wn("generateAbstractIcon",E)||{children:[],attributes:{}},I=b.children,N=b.attributes;return E.children=I,E.attributes=N,a?hR(E):fR(E)}function wy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[mi]="");var c=M({},o.styles);cm(i)&&(c.transform=Bx({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ac(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function pR(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ac(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $d=en.styles;function _h(t){var e=t[0],n=t[1],r=t.slice(4),i=im(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(ei.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ei.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ei.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var mR={found:!1,width:512,height:512};function gR(t,e){!Hw&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wh(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Or()),new Promise(function(r,i){if(Wn("missingIconAbstract"),n==="fa"){var s=iE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&$d[e]&&$d[e][t]){var o=$d[e][t];return r(_h(o))}gR(t,e),r(M(M({},mR),{},{icon:z.showMissingIcons&&t?Wn("missingIconAbstract")||{}:{}}))})}var Ey=function(){},Eh=z.measurePerformance&&bl&&bl.mark&&bl.measure?bl:{mark:Ey,measure:Ey},yo='FA "6.4.0"',vR=function(e){return Eh.mark("".concat(yo," ").concat(e," begins")),function(){return oE(e)}},oE=function(e){Eh.mark("".concat(yo," ").concat(e," ends")),Eh.measure("".concat(yo," ").concat(e),"".concat(yo," ").concat(e," begins"),"".concat(yo," ").concat(e," ends"))},mm={begin:vR,end:oE},Zl=function(){};function Sy(t){var e=t.getAttribute?t.getAttribute(mi):null;return typeof e=="string"}function yR(t){var e=t.getAttribute?t.getAttribute(om):null,n=t.getAttribute?t.getAttribute(am):null;return e&&n}function _R(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function wR(){if(z.autoReplaceSvg===!0)return eu.replace;var t=eu[z.autoReplaceSvg];return t||eu.replace}function ER(t){return be.createElementNS("http://www.w3.org/2000/svg",t)}function SR(t){return be.createElement(t)}function aE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ER:SR:n;if(typeof t=="string")return be.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(aE(o,{ceFn:r}))}),i}function CR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var eu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(aE(i),n)}),n.getAttribute(mi)===null&&z.keepOriginalSource){var r=be.createComment(CR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~um(n).indexOf(z.replacementClass))return eu.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return $a(a)}).join(`
`);n.setAttribute(mi,""),n.innerHTML=o}};function Cy(t){t()}function lE(t,e){var n=typeof e=="function"?e:Zl;if(t.length===0)n();else{var r=Cy;z.mutateApproach===Tx&&(r=Ar.requestAnimationFrame||Cy),r(function(){var i=wR(),s=mm.begin("mutate");t.map(i),s(),n()})}}var gm=!1;function uE(){gm=!0}function Sh(){gm=!1}var Mu=null;function ky(t){if(hy&&z.observeMutations){var e=t.treeCallback,n=e===void 0?Zl:e,r=t.nodeCallback,i=r===void 0?Zl:r,s=t.pseudoElementsCallback,o=s===void 0?Zl:s,a=t.observeMutationsRoot,l=a===void 0?be:a;Mu=new hy(function(u){if(!gm){var c=Or();Ms(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Sy(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Sy(d.target)&&~Dx.indexOf(d.attributeName))if(d.attributeName==="class"&&yR(d.target)){var f=Dc(um(d.target)),v=f.prefix,g=f.iconName;d.target.setAttribute(om,v||c),g&&d.target.setAttribute(am,g)}else _R(d.target)&&i(d.target)})}}),Kn&&Mu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kR(){Mu&&Mu.disconnect()}function IR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function bR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Dc(um(t));return i.prefix||(i.prefix=Or()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=rR(i.prefix,t.innerText)||fm(i.prefix,mh(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function TR(t){var e=Ms(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function xR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bR(t),r=n.iconName,i=n.prefix,s=n.rest,o=TR(t),a=vh("parseNodeAttributes",{},t),l=e.styleParser?IR(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var RR=en.styles;function cE(t){var e=z.autoReplaceSvg==="nest"?Iy(t,{styleParser:!1}):Iy(t);return~e.extra.classes.indexOf(Gw)?Wn("generateLayersText",t,e):Wn("generateSvgReplacementMutation",t,e)}var Dr=new Set;lm.map(function(t){Dr.add("fa-".concat(t))});Object.keys(la[ke]).map(Dr.add.bind(Dr));Object.keys(la[Oe]).map(Dr.add.bind(Dr));Dr=Va(Dr);function by(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kn)return Promise.resolve();var n=be.documentElement.classList,r=function(d){return n.add("".concat(py,"-").concat(d))},i=function(d){return n.remove("".concat(py,"-").concat(d))},s=z.autoFetchSvg?Dr:lm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(RR));s.includes("fa")||s.push("fa");var o=[".".concat(Gw,":not([").concat(mi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(mi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ms(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=mm.begin("onTree"),u=a.reduce(function(c,d){try{var f=cE(d);f&&c.push(f)}catch(v){Hw||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){lE(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function PR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cE(t).then(function(n){n&&lE([n],e)})}function NR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:yh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:yh(i||{})),t(r,M(M({},n),{},{mask:i}))}}var AR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,v=n.titleId,g=v===void 0?null:v,_=n.classes,w=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,y=n.styles,m=y===void 0?{}:y;if(e){var E=e.prefix,b=e.iconName,I=e.icon;return Mc(M({type:"icon"},e),function(){return gi("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||fa()):(h["aria-hidden"]="true",h.focusable="false")),pm({icons:{main:_h(I),mask:l?_h(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:b,transform:M(M({},mn),i),symbol:o,title:f,maskId:c,titleId:g,extra:{attributes:h,styles:m,classes:w}})})}},OR={mixout:function(){return{icon:NR(AR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=by,n.nodeCallback=PR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?be:r,s=n.callback,o=s===void 0?function(){}:s;return by(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(v,g){Promise.all([wh(i,a),c.iconName?wh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=im(_,2),p=w[0],h=w[1];v([n,pm({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ac(a);l.length>0&&(i.style=l);var u;return cm(o)&&(u=Wn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},DR={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Mc({type:"layer"},function(){gi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Va(s)).join(" ")},children:o}]})}}}},MR={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Mc({type:"counter",content:n},function(){return gi("beforeDOMElementCreation",{content:n,params:r}),pR({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Va(a))}})})}}}},LR={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,v=f===void 0?{}:f;return Mc({type:"text",content:n},function(){return gi("beforeDOMElementCreation",{content:n,params:r}),wy({content:n,transform:M(M({},mn),s),title:a,extra:{attributes:d,styles:v,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Va(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Ww){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},FR=new RegExp('"',"ug"),Ty=[1105920,1112319];function UR(t){var e=t.replace(FR,""),n=Xx(e,0),r=n>=Ty[0]&&n<=Ty[1],i=e.length===2?e[0]===e[1]:!1;return{value:mh(i?e[0]:e),isSecondary:r||i}}function xy(t,e){var n="".concat(bx).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ms(t.children),o=s.filter(function(I){return I.getAttribute(ph)===e})[0],a=Ar.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Nx),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Oe:ke,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ua[f][l[2].toLowerCase()]:Ax[f][u],g=UR(d),_=g.value,w=g.isSecondary,p=l[0].startsWith("FontAwesome"),h=fm(v,_),y=h;if(p){var m=iR(_);m.iconName&&m.prefix&&(h=m.iconName,v=m.prefix)}if(h&&!w&&(!o||o.getAttribute(om)!==v||o.getAttribute(am)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var E=xR(),b=E.extra;b.attributes[ph]=e,wh(h,v).then(function(I){var N=pm(M(M({},E),{},{icons:{main:I,mask:hm()},prefix:v,iconName:y,extra:b,watchable:!0})),D=be.createElement("svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=N.map(function(F){return $a(F)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function jR(t){return Promise.all([xy(t,"::before"),xy(t,"::after")])}function zR(t){return t.parentNode!==document.head&&!~xx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ph)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ry(t){if(Kn)return new Promise(function(e,n){var r=Ms(t.querySelectorAll("*")).filter(zR).map(jR),i=mm.begin("searchPseudoElements");uE(),Promise.all(r).then(function(){i(),Sh(),e()}).catch(function(){i(),Sh(),n()})})}var VR={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ry,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?be:r;z.searchPseudoElements&&Ry(i)}}},Py=!1,WR={mixout:function(){return{dom:{unwatch:function(){uE(),Py=!0}}}},hooks:function(){return{bootstrap:function(){ky(vh("mutationObserverCallbacks",{}))},noAuto:function(){kR()},watch:function(n){var r=n.observeMutationsRoot;Py?Sh():ky(vh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ny=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},$R={mixout:function(){return{parse:{transform:function(n){return Ny(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ny(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},v={outer:a,inner:d,path:f};return{tag:"g",attributes:M({},v.outer),children:[{tag:"g",attributes:M({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),v.path)}]}]}}}},Bd={x:0,y:0,width:"100%",height:"100%"};function Ay(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function BR(t){return t.tag==="g"?t.children:[t]}var HR={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Dc(i.split(" ").map(function(o){return o.trim()})):hm();return s.prefix||(s.prefix=Or()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,v=$x({transform:l,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:M(M({},Bd),{},{fill:"white"})},_=c.children?{children:c.children.map(Ay)}:{},w={tag:"g",attributes:M({},v.inner),children:[Ay(M({tag:c.tag,attributes:M(M({},c.attributes),v.path)},_))]},p={tag:"g",attributes:M({},v.outer),children:[w]},h="mask-".concat(a||fa()),y="clip-".concat(a||fa()),m={tag:"mask",attributes:M(M({},Bd),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:BR(f)},m]};return r.push(E,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(h,")")},Bd)}),{children:r,attributes:i}}}},GR={provides:function(e){var n=!1;Ar.matchMedia&&(n=Ar.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},KR={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},YR=[Gx,OR,DR,MR,LR,VR,WR,$R,HR,GR,KR];aR(YR,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Ch=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var qR=Lt.icon;Lt.layer;Lt.text;Lt.counter;var dE={exports:{}},QR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",XR=QR,JR=XR;function fE(){}function hE(){}hE.resetWarningCache=fE;var ZR=function(){function t(r,i,s,o,a,l){if(l!==JR){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:hE,resetWarningCache:fE};return n.PropTypes=n,n};dE.exports=ZR();var e2=dE.exports;const te=l0(e2);function Oy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function hr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oy(Object(n),!0).forEach(function(r){Xi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lu(t){"@babel/helpers - typeof";return Lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lu(t)}function Xi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function t2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function n2(t,e){if(t==null)return{};var n=t2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function kh(t){return r2(t)||i2(t)||s2(t)||o2()}function r2(t){if(Array.isArray(t))return Ih(t)}function i2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function s2(t,e){if(t){if(typeof t=="string")return Ih(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ih(t,e)}}function Ih(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a2(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,v=t.inverse,g=t.border,_=t.listItem,w=t.flip,p=t.size,h=t.rotation,y=t.pull,m=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":v,"fa-border":g,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Xi(e,"fa-".concat(p),typeof p<"u"&&p!==null),Xi(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Xi(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Xi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(m).map(function(E){return m[E]?E:null}).filter(function(E){return E})}function l2(t){return t=t-0,t===t}function pE(t){return l2(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var u2=["style"];function c2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function d2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=pE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[c2(i)]=s:e[i]=s,e},{})}function mE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return mE(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=d2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[pE(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=n2(n,u2);return i.attrs.style=hr(hr({},i.attrs.style),o),t.apply(void 0,[e.tag,hr(hr({},i.attrs),a)].concat(kh(r)))}var gE=!1;try{gE=!0}catch{}function f2(){if(!gE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Dy(t){if(t&&Lu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ch.icon)return Ch.icon(t);if(t===null)return null;if(t&&Lu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Hd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Xi({},t,e):{}}var xi=fc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Dy(n),c=Hd("classes",[].concat(kh(a2(t)),kh(s.split(" ")))),d=Hd("transform",typeof t.transform=="string"?Ch.transform(t.transform):t.transform),f=Hd("mask",Dy(r)),v=qR(u,hr(hr(hr(hr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!v)return f2("Could not find icon",u),null;var g=v.abstract,_={ref:e};return Object.keys(t).forEach(function(w){xi.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),h2(g[0],_)});xi.displayName="FontAwesomeIcon";xi.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};xi.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var h2=mE.bind(null,fc.createElement);/**
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
 */const vE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw Ls(e)},Ls=function(t){return new Error("Firebase Database ("+vE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const yE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},p2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(f=64)),r.push(n[c],n[d],n[f],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):p2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new m2;const f=s<<2|a>>4;if(r.push(f),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class m2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(t){const e=yE(t);return vm.encodeByteArray(e,!0)},Fu=function(t){return _E(t).replace(/\./g,"")},Uu=function(t){try{return vm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function g2(t){return wE(void 0,t)}function wE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!v2(n)||(t[n]=wE(t[n],e[n]));return t}function v2(t){return t!=="__proto__"}/**
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
 */function y2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _2=()=>y2().__FIREBASE_DEFAULTS__,w2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uu(t[1]);return e&&JSON.parse(e)},ym=()=>{try{return _2()||w2()||E2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EE=t=>{var e,n;return(n=(e=ym())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},S2=t=>{const e=EE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},SE=()=>{var t;return(t=ym())===null||t===void 0?void 0:t.config},CE=t=>{var e;return(e=ym())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function C2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),a].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function k2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I2(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IE(){return vE.NODE_ADMIN===!0}function b2(){try{return typeof indexedDB=="object"}catch{return!1}}function T2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const x2="FirebaseError";class Vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=x2,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?R2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vr(i,a,r)}}function R2(t,e){return t.replace(P2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const P2=/\{\$([^}]+)}/g;/**
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
 */const bE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ha(Uu(s[0])||""),n=ha(Uu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},N2=function(t){const e=bE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},A2=function(t){const e=bE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function bh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ju(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!zu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
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
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class O2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function D2(t,e){const n=new M2(t,e);return n.subscribe.bind(n)}class M2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");L2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gd),i.error===void 0&&(i.error=Gd),i.complete===void 0&&(i.complete=Gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gd(){}function wm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const F2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class U2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(z2(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j2(t){return t===Yr?void 0:t}function z2(t){return t.instantiationMode==="EAGER"}/**
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
 */class V2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const W2={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},$2=me.INFO,B2={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},H2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=B2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Em{constructor(e){this.name=e,this._logLevel=$2,this._logHandler=H2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const G2=(t,e)=>e.some(n=>t instanceof n);let Ly,Fy;function K2(){return Ly||(Ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y2(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TE=new WeakMap,Th=new WeakMap,xE=new WeakMap,Kd=new WeakMap,Sm=new WeakMap;function q2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TE.set(n,t)}).catch(()=>{}),Sm.set(e,t),e}function Q2(t){if(Th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Th.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X2(t){xh=t(xh)}function J2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yd(this),e,...n);return xE.set(r,e.sort?e.sort():[e]),kr(r)}:Y2().includes(t)?function(...e){return t.apply(Yd(this),e),kr(TE.get(this))}:function(...e){return kr(t.apply(Yd(this),e))}}function Z2(t){return typeof t=="function"?J2(t):(t instanceof IDBTransaction&&Q2(t),G2(t,K2())?new Proxy(t,xh):t)}function kr(t){if(t instanceof IDBRequest)return q2(t);if(Kd.has(t))return Kd.get(t);const e=Z2(t);return e!==t&&(Kd.set(t,e),Sm.set(e,t)),e}const Yd=t=>Sm.get(t);function eP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const tP=["get","getKey","getAll","getAllKeys","count"],nP=["put","add","delete","clear"],qd=new Map;function Uy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qd.get(e))return qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qd.set(e,s),s}X2(t=>({...t,get:(e,n,r)=>Uy(e,n)||t.get(e,n,r),has:(e,n)=>!!Uy(e,n)||t.has(e,n)}));/**
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
 */class rP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",jy="0.9.16";/**
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
 */const yi=new Em("@firebase/app"),sP="@firebase/app-compat",oP="@firebase/analytics-compat",aP="@firebase/analytics",lP="@firebase/app-check-compat",uP="@firebase/app-check",cP="@firebase/auth",dP="@firebase/auth-compat",fP="@firebase/database",hP="@firebase/database-compat",pP="@firebase/functions",mP="@firebase/functions-compat",gP="@firebase/installations",vP="@firebase/installations-compat",yP="@firebase/messaging",_P="@firebase/messaging-compat",wP="@firebase/performance",EP="@firebase/performance-compat",SP="@firebase/remote-config",CP="@firebase/remote-config-compat",kP="@firebase/storage",IP="@firebase/storage-compat",bP="@firebase/firestore",TP="@firebase/firestore-compat",xP="firebase",RP="10.2.0";/**
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
 */const Ph="[DEFAULT]",PP={[Rh]:"fire-core",[sP]:"fire-core-compat",[aP]:"fire-analytics",[oP]:"fire-analytics-compat",[uP]:"fire-app-check",[lP]:"fire-app-check-compat",[cP]:"fire-auth",[dP]:"fire-auth-compat",[fP]:"fire-rtdb",[hP]:"fire-rtdb-compat",[pP]:"fire-fn",[mP]:"fire-fn-compat",[gP]:"fire-iid",[vP]:"fire-iid-compat",[yP]:"fire-fcm",[_P]:"fire-fcm-compat",[wP]:"fire-perf",[EP]:"fire-perf-compat",[SP]:"fire-rc",[CP]:"fire-rc-compat",[kP]:"fire-gcs",[IP]:"fire-gcs-compat",[bP]:"fire-fst",[TP]:"fire-fst-compat","fire-js":"fire-js",[xP]:"fire-js-all"};/**
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
 */const Vu=new Map,Nh=new Map;function NP(t,e){try{t.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(Nh.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,t);for(const n of Vu.values())NP(n,t);return!0}function Cm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const AP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ir=new Ba("app","Firebase",AP);/**
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
 */class OP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=RP;function RE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=SE()),!n)throw Ir.create("no-options");const s=Vu.get(i);if(s){if(zu(n,s.options)&&zu(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new V2(i);for(const l of Nh.values())o.addComponent(l);const a=new OP(n,r,o);return Vu.set(i,a),a}function PE(t=Ph){const e=Vu.get(t);if(!e&&t===Ph&&SE())return RE();if(!e)throw Ir.create("no-app",{appName:t});return e}function br(t,e,n){var r;let i=(r=PP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(a.join(" "));return}Is(new vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DP="firebase-heartbeat-database",MP=1,pa="firebase-heartbeat-store";let Qd=null;function NE(){return Qd||(Qd=eP(DP,MP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pa)}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function LP(t){try{return await(await NE()).transaction(pa).objectStore(pa).get(AE(t))}catch(e){if(e instanceof Vr)yi.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function zy(t,e){try{const r=(await NE()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,AE(t)),await r.done}catch(n){if(n instanceof Vr)yi.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function AE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const FP=1024,UP=30*24*60*60*1e3;class jP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=UP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vy(),{heartbeatsToSend:n,unsentEntries:r}=zP(this._heartbeatsCache.heartbeats),i=Fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vy(){return new Date().toISOString().substring(0,10)}function zP(t,e=FP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b2()?T2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wy(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function WP(t){Is(new vi("platform-logger",e=>new rP(e),"PRIVATE")),Is(new vi("heartbeat",e=>new jP(e),"PRIVATE")),br(Rh,jy,t),br(Rh,jy,"esm2017"),br("fire-js","")}WP("");var $P="firebase",BP="10.2.0";/**
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
 */br($P,BP,"app");function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $y(t){return t!==void 0&&t.enterprise!==void 0}class HP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function OE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GP=OE,DE=new Ba("auth","Firebase",OE());/**
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
 */const Wu=new Em("@firebase/auth");function KP(t,...e){Wu.logLevel<=me.WARN&&Wu.warn(`Auth (${Us}): ${t}`,...e)}function tu(t,...e){Wu.logLevel<=me.ERROR&&Wu.error(`Auth (${Us}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Im(t,...e)}function yn(t,...e){return Im(t,...e)}function YP(t,e,n){const r=Object.assign(Object.assign({},GP()),{[e]:n});return new Ba("auth","Firebase",r).create(e,{appName:t.name})}function Im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DE.create(t,...e)}function H(t,e,...n){if(!t)throw Im(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function $n(t,e){t||Pn(e)}/**
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
 */function Ah(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qP(){return By()==="http:"||By()==="https:"}function By(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function QP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qP()||k2()||"connection"in navigator)?navigator.onLine:!0}function XP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=_m()||kE()}get(){return QP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ME{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZP=new Ha(3e4,6e4);function Wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return LE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ME.fetch()(FE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function LE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JP),e);try{const i=new eN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ml(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw YP(t,c,u);un(t,c)}}catch(i){if(i instanceof Vr)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Ga(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function FE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}class eN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),ZP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}async function tN(t,e){return $r(t,"GET","/v2/recaptchaConfig",Wr(t,e))}/**
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
 */async function nN(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function rN(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iN(t,e=!1){const n=xt(t),r=await n.getIdToken(e),i=Tm(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Do(Xd(i.auth_time)),issuedAtTime:Do(Xd(i.iat)),expirationTime:Do(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xd(t){return Number(t)*1e3}function Tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uu(n);return i?JSON.parse(i):(tu("Failed to decode base64 JWT payload"),null)}catch(i){return tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sN(t){const e=Tm(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vr&&oN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class UE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ma(t,rN(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cN(s.providerUserInfo):[],a=uN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new UE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function lN(t){const e=xt(t);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cN(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dN(t,e){const n=await LE(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=FE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ME.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function tr(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new UE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iN(this,e)}reload(){return lN(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ma(this,nN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:m,isAnonymous:E,providerData:b,stsTokenManager:I}=n;H(y&&I,e,"internal-error");const N=ga.fromJSON(this.name,I);H(typeof y=="string",e,"internal-error"),tr(d,e.name),tr(f,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof E=="boolean",e,"internal-error"),tr(v,e.name),tr(g,e.name),tr(_,e.name),tr(w,e.name),tr(p,e.name),tr(h,e.name);const D=new ai({uid:y,auth:e,email:f,emailVerified:m,displayName:d,isAnonymous:E,photoURL:g,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:p,lastLoginAt:h});return b&&Array.isArray(b)&&(D.providerData=b.map(F=>Object.assign({},F))),w&&(D._redirectEventId=w),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new ai({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $u(s),s}}/**
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
 */const Hy=new Map;function Nn(t){$n(t instanceof Function,"Expected a class definition");let e=Hy.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hy.set(t,e),e)}/**
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
 */class jE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jE.type="NONE";const Gy=jE;/**
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
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Nn(Gy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(Gy);const o=nu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ai._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ls(s,e,r))}}/**
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
 */function Ky(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BE(e))return"Blackberry";if(HE(e))return"Webos";if(xm(e))return"Safari";if((e.includes("chrome/")||VE(e))&&!e.includes("edge/"))return"Chrome";if($E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zE(t=ct()){return/firefox\//i.test(t)}function xm(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VE(t=ct()){return/crios\//i.test(t)}function WE(t=ct()){return/iemobile/i.test(t)}function $E(t=ct()){return/android/i.test(t)}function BE(t=ct()){return/blackberry/i.test(t)}function HE(t=ct()){return/webos/i.test(t)}function Uc(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fN(t=ct()){var e;return Uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hN(){return I2()&&document.documentMode===10}function GE(t=ct()){return Uc(t)||$E(t)||HE(t)||BE(t)||/windows phone/i.test(t)||WE(t)}function pN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function KE(t,e=[]){let n;switch(t){case"Browser":n=Ky(ct());break;case"Worker":n=`${Ky(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
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
 */class mN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gN(t,e={}){return $r(t,"GET","/v2/passwordPolicy",Wr(t,e))}/**
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
 */const vN=6;class yN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _N{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yy(this),this.idTokenSubscription=new Yy(this),this.beforeStateQueue=new mN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gN(this),n=new yN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ri(t){return xt(t)}class Yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=D2(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wN().appendChild(r)})}function EN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SN="https://www.google.com/recaptcha/enterprise.js?render=",CN="recaptcha-enterprise",kN="NO_RECAPTCHA";class IN{constructor(e){this.type=CN,this.auth=Ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new HP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$y(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$y(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}YE(SN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Bu(t,e,n,r=!1){const i=new IN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function bN(t,e){const n=Cm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zu(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function TN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xN(t,e,n){const r=Ri(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qE(e),{host:o,port:a}=RN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PN()}function qE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RN(t){const e=qE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function NN(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jd(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",Wr(t,e))}async function AN(t,e){return $r(t,"POST","/v1/accounts:sendOobCode",Wr(t,e))}async function ON(t,e){return AN(t,e)}/**
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
 */async function DN(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}async function MN(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}/**
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
 */class va extends Rm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new va(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new va(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Bu(e,r,"signInWithPassword");return Jd(e,i)}else return Jd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Bu(e,r,"signInWithPassword");return Jd(e,s)}else return Promise.reject(i)});case"emailLink":return DN(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return NN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MN(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",Wr(t,e))}/**
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
 */const LN="http://localhost";class _i extends Rm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:LN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
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
 */function FN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UN(t){const e=_o(wo(t)).link,n=e?_o(wo(e)).deep_link_id:null,r=_o(wo(t)).deep_link_id;return(r?_o(wo(r)).link:null)||r||n||e||t}class Pm{constructor(e){var n,r,i,s,o,a;const l=_o(wo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=FN((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UN(e);try{return new Pm(n)}catch{return null}}}/**
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
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pm.parseLink(n);return H(r,"argument-error"),va._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class QE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends QE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Ka{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class lr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
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
 */class ur extends Ka{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class cr extends Ka{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */async function Zd(t,e){return Ga(t,"POST","/v1/accounts:signUp",Wr(t,e))}/**
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
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ai._fromIdTokenResponse(e,r,i),o=Qy(r);return new wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qy(r);return new wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hu extends Vr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hu(e,n,r,i)}}function XE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(t,s,e,r):s})}async function jN(t,e,n=!1){const r=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
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
 */async function zN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ma(t,XE(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Tm(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
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
 */async function JE(t,e,n=!1){const r="signIn",i=await XE(t,r,e),s=await wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VN(t,e){return JE(Ri(t),e)}/**
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
 */function WN(t,e,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ZE(t){const e=Ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $N(t,e,n){var r;const i=Ri(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Bu(i,s,"signUpPassword");o=Zd(i,u)}else o=Zd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Bu(i,s,"signUpPassword");return Zd(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ZE(t),u}),l=await wi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function BN(t,e,n){return VN(xt(t),js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZE(t),r})}async function HN(t,e){const n=xt(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&WN(n.auth,i,e);const{email:s}=await ON(n.auth,i);s!==t.email&&await t.reload()}function GN(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function KN(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}const Gu="__sak";/**
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
 */class eS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YN(){const t=ct();return xm(t)||Uc(t)}const qN=1e3,QN=10;class tS extends eS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YN()&&pN(),this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tS.type="LOCAL";const XN=tS;/**
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
 */class nS extends eS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nS.type="SESSION";const rS=nS;/**
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
 */function JN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await JN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
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
 */function Nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Nm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function eA(t){_n().location.href=t}/**
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
 */function iS(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function tA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rA(){return iS()?self:null}/**
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
 */const sS="firebaseLocalStorageDb",iA=1,Ku="firebaseLocalStorage",oS="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zc(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function sA(){const t=indexedDB.deleteDatabase(sS);return new Ya(t).toPromise()}function Oh(){const t=indexedDB.open(sS,iA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:oS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await sA(),e(await Oh()))})})}async function Xy(t,e,n){const r=zc(t,!0).put({[oS]:e,value:n});return new Ya(r).toPromise()}async function oA(t,e){const n=zc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function Jy(t,e){const n=zc(t,!0).delete(e);return new Ya(n).toPromise()}const aA=800,lA=3;class aS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(rA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tA(),!this.activeServiceWorker)return;this.sender=new ZN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oh();return await Xy(e,Gu,"1"),await Jy(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zc(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aS.type="LOCAL";const uA=aS;new Ha(3e4,6e4);/**
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
 */function cA(t,e){return e?Nn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Am extends Rm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dA(t){return JE(t.auth,new Am(t),t.bypassAuthState)}function fA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),zN(n,new Am(t),t.bypassAuthState)}async function hA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),jN(n,new Am(t),t.bypassAuthState)}/**
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
 */class lS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dA;case"linkViaPopup":case"linkViaRedirect":return hA;case"reauthViaPopup":case"reauthViaRedirect":return fA;default:un(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pA=new Ha(2e3,1e4);class Ji extends lS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pA.get())};e()}}Ji.currentPopupAction=null;/**
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
 */const mA="pendingRedirect",ru=new Map;class gA extends lS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await vA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vA(t,e){const n=wA(e),r=_A(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yA(t,e){ru.set(t._key(),e)}function _A(t){return Nn(t._redirectPersistence)}function wA(t){return nu(mA,t.config.apiKey,t.name)}async function EA(t,e,n=!1){const r=Ri(t),i=cA(r,e),o=await new gA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SA=10*60*1e3;class CA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uS(t);default:return!1}}/**
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
 */async function IA(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
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
 */const bA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TA=/^https?/;async function xA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IA(t);for(const n of e)try{if(RA(n))return}catch{}un(t,"unauthorized-domain")}function RA(t){const e=Ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TA.test(n))return!1;if(bA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const PA=new Ha(3e4,6e4);function e_(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NA(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(yn(t,"network-request-failed"))},timeout:PA.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=EN("iframefcb");return _n()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},YE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw iu=null,e})}let iu=null;function AA(t){return iu=iu||NA(t),iu}/**
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
 */const OA=new Ha(5e3,15e3),DA="__/auth/iframe",MA="emulator/auth/iframe",LA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UA(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,MA):`https://${t.config.authDomain}/${DA}`,r={apiKey:e.apiKey,appName:t.name,v:Us},i=FA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function jA(t){const e=await AA(t),n=_n().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:UA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},OA.get());function l(){_n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const zA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VA=500,WA=600,$A="_blank",BA="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HA(t,e,n,r=VA,i=WA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ct().toLowerCase();n&&(a=VE(u)?$A:n),zE(u)&&(e=e||BA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[v,g])=>`${f}${v}=${g},`,"");if(fN(u)&&a!=="_self")return GA(e||"",a),new t_(null);const d=window.open(e||"",a,c);H(d,t,"popup-blocked");try{d.focus()}catch{}return new t_(d)}function GA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KA="__/auth/handler",YA="emulator/auth/handler",qA=encodeURIComponent("fac");async function n_(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:i};if(e instanceof QE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ka){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${qA}=${encodeURIComponent(l)}`:"";return`${QA(t)}?${Fs(a).slice(1)}${u}`}function QA({config:t}){return t.emulator?bm(t,YA):`https://${t.authDomain}/${KA}`}/**
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
 */const ef="webStorageSupport";class XA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rS,this._completeRedirectFn=EA,this._overrideRedirectResult=yA}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,Ah(),i);return HA(e,o,Nm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await n_(e,n,r,Ah(),i);return eA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jA(e),r=new CA(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ef];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||xm()||Uc()}}const JA=XA;var r_="@firebase/auth",i_="1.2.0";/**
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
 */class ZA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tO(t){Is(new vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KE(t)},u=new _N(r,i,s,l);return TN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new vi("auth-internal",e=>{const n=Ri(e.getProvider("auth").getImmediate());return(r=>new ZA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),br(r_,i_,eO(t)),br(r_,i_,"esm2017")}/**
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
 */const nO=5*60,rO=CE("authIdTokenMaxAge")||nO;let s_=null;const iO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rO)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sO(t=PE()){const e=Cm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bN(t,{popupRedirectResolver:JA,persistence:[uA,XN,rS]}),r=CE("authTokenSyncURL");if(r){const s=iO(r);KN(n,s,()=>s(n.currentUser)),GN(n,o=>s(o))}const i=EE("auth");return i&&xN(n,`http://${i}`),n}tO("Browser");const o_="@firebase/database",a_="1.0.1";/**
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
 */let cS="";function oO(t){cS=t}/**
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
 */class aO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class lO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const dS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aO(e)}}catch{}return new lO},ni=dS("localStorage"),Dh=dS("sessionStorage");/**
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
 */const cs=new Em("@firebase/database"),uO=function(){let t=1;return function(){return t++}}(),fS=function(t){const e=F2(t),n=new O2;n.update(e);const r=n.digest();return vm.encodeByteArray(r)},qa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qa.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let li=null,l_=!0;const cO=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cs.logLevel=me.VERBOSE,li=cs.log.bind(cs),e&&Dh.set("logging_enabled",!0)):typeof t=="function"?li=t:(li=null,Dh.remove("logging_enabled"))},lt=function(...t){if(l_===!0&&(l_=!1,li===null&&Dh.get("logging_enabled")===!0&&cO(!0)),li){const e=qa.apply(null,t);li(e)}},Qa=function(t){return function(...e){lt(t,...e)}},Mh=function(...t){const e="FIREBASE INTERNAL ERROR: "+qa(...t);cs.error(e)},Bn=function(...t){const e=`FIREBASE FATAL ERROR: ${qa(...t)}`;throw cs.error(e),new Error(e)},bt=function(...t){const e="FIREBASE WARNING: "+qa(...t);cs.warn(e)},dO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bs="[MIN_NAME]",Ei="[MAX_NAME]",zs=function(t,e){if(t===e)return 0;if(t===bs||e===Ei)return-1;if(e===bs||t===Ei)return 1;{const n=u_(t),r=u_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},hO=function(t,e){return t===e?0:t<e?-1:1},oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},Om=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Be(e[r]),n+=":",n+=Om(t[e[r]]);return n+="}",n},pS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mS=function(t){A(!hS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},pO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const vO=new RegExp("^-?(0*)\\d{1,10}$"),yO=-2147483648,_O=2147483647,u_=function(t){if(vO.test(t)){const e=Number(t);if(e>=yO&&e<=_O)return e}return null},Vs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},wO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class EO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class SO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
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
 */const Dm="5",gS="v",vS="s",yS="r",_S="f",wS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ES="ls",SS="p",Lh="ac",CS="websocket",kS="long_polling";/**
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
 */class IS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bS(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===CS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CO(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class kO{constructor(){this.counters_={}}incrementCounter(e,n=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return g2(this.counters_)}}/**
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
 */const tf={},nf={};function Mm(t){const e=t.toString();return tf[e]||(tf[e]=new kO),tf[e]}function IO(t,e){const n=t.toString();return nf[n]||(nf[n]=e()),nf[n]}/**
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
 */class bO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const c_="start",TO="close",xO="pLPCommand",RO="pRTLPCB",TS="id",xS="pw",RS="ser",PO="cb",NO="seg",AO="ts",OO="d",DO="dframe",PS=1870,NS=30,MO=PS-NS,LO=25e3,FO=3e4;class Zi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qa(e),this.stats_=Mm(n),this.urlFn=l=>(this.appCheckToken&&(l[Lh]=this.appCheckToken),bS(n,kS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FO)),fO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===c_)this.id=a,this.password=l;else if(o===TO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[c_]="t",r[RS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gS]=Dm,this.transportSessionId&&(r[vS]=this.transportSessionId),this.lastSessionId&&(r[ES]=this.lastSessionId),this.applicationId&&(r[SS]=this.applicationId),this.appCheckToken&&(r[Lh]=this.appCheckToken),typeof location<"u"&&location.hostname&&wS.test(location.hostname)&&(r[yS]=_S);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pO()&&!mO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_E(n),i=pS(r,MO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[DO]="t",r[TS]=e,r[xS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uO(),window[xO+this.uniqueCallbackIdentifier]=e,window[RO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[TS]=this.myID,e[xS]=this.myPW,e[RS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+NS+r.length<=PS;){const o=this.pendingSegs.shift();r=r+"&"+NO+i+"="+o.seg+"&"+AO+i+"="+o.ts+"&"+OO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const UO=16384,jO=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qa(this.connId),this.stats_=Mm(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[gS]=Dm,typeof location<"u"&&location.hostname&&wS.test(location.hostname)&&(o[yS]=_S),n&&(o[vS]=n),r&&(o[ES]=r),i&&(o[Lh]=i),s&&(o[SS]=s),bS(e,CS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let r;IE(),this.mySock=new Yu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!Zt.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pS(n,UO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
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
 */class ya{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zi,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of ya.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ya.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ya.globalTransportInitialized_=!1;/**
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
 */const zO=6e4,VO=5e3,WO=10*1024,$O=100*1024,rf="t",d_="d",BO="s",f_="r",HO="e",h_="o",p_="a",m_="n",g_="p",GO="h";class KO{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qa("c:"+this.id+":"),this.transportManager_=new ya(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$O?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rf in e){const n=e[rf];n===p_?this.upgradeIfSecondaryHealthy_():n===f_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===h_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oo("t",e),r=oo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:g_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:p_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:m_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oo("t",e),r=oo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oo(rf,e);if(d_ in e){const r=e[d_];if(n===GO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===m_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BO?this.onConnectionShutdown_(r):n===f_?this.onReset_(r):n===HO?Mh("Server Error: "+r):n===h_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dm!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:g_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class AS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class OS{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qu extends OS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_m()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qu}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const v_=32,y_=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new ve("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function DS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function LS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function He(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function ht(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return ht(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function FS(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class qO{constructor(e,n){this.errorPrefix_=n,this.parts_=MS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fc(this.parts_[r]);US(this)}}function QO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fc(e),US(t)}function XO(t){const e=t.parts_.pop();t.byteLength_-=Fc(e),t.parts_.length>0&&(t.byteLength_-=1)}function US(t){if(t.byteLength_>y_)throw new Error(t.errorPrefix_+"has a key path longer than "+y_+" bytes ("+t.byteLength_+").");if(t.parts_.length>v_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+v_+") or object contains a cycle "+qr(t))}function qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Fm extends OS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Fm}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ao=1e3,JO=60*5*1e3,__=30*1e3,ZO=1.3,eD=3e4,tD="server_kill",w_=3;class Mn extends AS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mn.nextPersistentConnectionId_++,this.log_=Qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=JO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!IE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Be(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Lc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Mn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yn(e,"w")){const r=ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||A2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=__)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=N2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mh("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eD&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ZO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new KO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{bt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(tD)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&bt(d),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bh(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Om(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w_&&(this.reconnectDelay_=__,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cS.replace(/\./g,"-")]=1,_m()?e["framework.cordova"]=1:kE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qu.getInstance().currentlyOnline();return bh(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
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
 */class Vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ee(bs,e),i=new ee(bs,n);return this.compare(r,i)!==0}minPost(){return ee.MIN}}/**
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
 */let Ll;class jS extends Vc{static get __EMPTY_NODE(){return Ll}static set __EMPTY_NODE(e){Ll=e}compare(e,n){return zs(e.name,n.name)}isDefinedOn(e){throw Ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Ei,Ll)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Ll)}toString(){return".key"}}const fs=new jS;/**
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
 */class Fl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??St.EMPTY_NODE,this.right=s??St.EMPTY_NODE}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class nD{copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fl(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new nD;/**
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
 */function rD(t,e){return zs(t.name,e.name)}function Um(t,e){return zs(t,e)}/**
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
 */let Fh;function iD(t){Fh=t}const zS=function(t){return typeof t=="number"?"number:"+mS(t):"string:"+t},VS=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else A(t===Fh||t.isEmpty(),"priority of unexpected type.");A(t===Fh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let E_;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),VS(this.priorityNode_)}static set __childrenNodeConstructor(e){E_=e}static get __childrenNodeConstructor(){return E_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ie(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mS(this.value_):e+=this.value_,this.lazyHash_=fS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let WS,$S;function sD(t){WS=t}function oD(t){$S=t}class aD extends Vc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Ei,new qe("[PRIORITY-POST]",$S))}makePost(e,n){const r=WS(e);return new ee(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new aD;/**
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
 */const lD=Math.log(2);class uD{constructor(e){const n=s=>parseInt(Math.log(s)/lD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Xe(f,d.node,Xe.BLACK,null,null);{const v=parseInt(c/2,10)+l,g=i(l,v),_=i(v+1,u);return d=t[v],f=n?n(d):d,new Xe(f,d.node,Xe.BLACK,g,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,_){const w=d-g,p=d;d-=g;const h=i(w+1,p),y=t[w],m=n?n(y):y;v(new Xe(m,y.node,_,null,h))},v=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));_?f(w,Xe.BLACK):(f(w,Xe.BLACK),f(w,Xe.RED))}return c},o=new uD(t.length),a=s(o);return new St(r||e,a)};/**
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
 */let sf;const Ai={};class An{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(Ai&&De,"ChildrenNode.ts has not been loaded"),sf=sf||new An({".priority":Ai},{".priority":De}),sf}get(e){const n=ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,n){A(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Qu(r,e.getCompare()):a=Ai;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new An(c,u)}addToIndexes(e,n){const r=ju(this.indexes_,(i,s)=>{const o=ks(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===Ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Qu(a,o.getCompare())}else return Ai;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new An(r,this.indexSet_)}removeFromIndexes(e,n){const r=ju(this.indexes_,i=>{if(i===Ai)return i;{const s=n.get(e.name);return s?i.remove(new ee(e.name,s)):i}});return new An(r,this.indexSet_)}}/**
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
 */let lo;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&VS(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lo||(lo=new G(new St(Um),null,An.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lo:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?lo:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{A(ie(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zS(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xa?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cD extends G{constructor(){super(new St(Um),G.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Xa=new cD;Object.defineProperties(ee,{MIN:{value:new ee(bs,G.EMPTY_NODE)},MAX:{value:new ee(Ei,Xa)}});jS.__EMPTY_NODE=G.EMPTY_NODE;qe.__childrenNodeConstructor=G;iD(Xa);oD(Xa);/**
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
 */const dD=!0;function Je(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,Je(e))}if(!(t instanceof Array)&&dD){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Je(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return G.EMPTY_NODE;const s=Qu(n,rD,o=>o.name,Um);if(r){const o=Qu(n,De.getCompare());return new G(s,Je(e),new An({".priority":o},{".priority":De}))}else return new G(s,Je(e),An.Default)}else{let n=G.EMPTY_NODE;return Tt(t,(r,i)=>{if(Yn(t,r)&&r.substring(0,1)!=="."){const s=Je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Je(e))}}sD(Je);/**
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
 */class fD extends Vc{constructor(e){super(),this.indexPath_=e,A(!re(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zs(e.name,n.name):s}makePost(e,n){const r=Je(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Xa);return new ee(Ei,e)}toString(){return MS(this.indexPath_,0).join("/")}}/**
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
 */class hD extends Vc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const r=Je(e);return new ee(n,r)}toString(){return".value"}}const pD=new hD;/**
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
 */function BS(t){return{type:"value",snapshotNode:t}}function Ts(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _a(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class jm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_a(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ts(n,r)):o.trackChildChange(wa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(_a(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(wa(i,s,o))}else r.trackChildChange(Ts(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ea{constructor(e){this.indexedFilter_=new jm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ea.getStartPost_(e),this.endPost_=Ea.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ee(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new ee(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class gD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ea(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ee(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,v)=>d(v,f)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new ee(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const v=f==null?1:o(f,l);if(c&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(wa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_a(n,d));const _=a.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ts(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(_a(u.name,u.node)),s.trackChildChange(Ts(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
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
 */class zm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new zm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vD(t){return t.loadsAllData()?new jm(t.getIndex()):t.hasLimit()?new gD(t):new Ea(t)}function S_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===pD?n="$value":t.index_===fs?n="$key":(A(t.index_ instanceof fD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function C_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
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
 */class Xu extends AS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xu.getListenId_(e,r),a={};this.listens_[o]=a;const l=S_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ks(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Xu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=S_(e._queryParams),r=e._path.toString(),i=new Lc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ha(a.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class yD{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ju(){return{value:null,children:new Map}}function HS(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,Ju());const i=t.children.get(r);e=_e(e),HS(i,e,n)}}function Uh(t,e,n){t.value!==null?n(e,t.value):_D(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);Uh(i,s,n)})}function _D(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class wD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const k_=10*1e3,ED=30*1e3,SD=5*60*1e3;class CD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wD(e);const r=k_+(ED-k_)*Math.random();Mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&Yn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*SD))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function GS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Zu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=GS()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Zu(le(),n,this.revert)}}else return A(ie(this.path)===e,"operationForChild called for unrelated child."),new Zu(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class Sa{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Sa(this.source,le()):new Sa(this.source,_e(this.path))}}/**
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
 */class Si{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return re(this.path)?new Si(this.source,le(),this.snap.getImmediateChild(e)):new Si(this.source,_e(this.path),this.snap)}}/**
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
 */class Ca{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Si(this.source,le(),n.value):new Ca(this.source,le(),n)}else return A(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ca(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Lr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class kD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ID(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mD(o.childName,o.snapshotNode))}),uo(t,i,"child_removed",e,r,n),uo(t,i,"child_added",e,r,n),uo(t,i,"child_moved",s,r,n),uo(t,i,"child_changed",e,r,n),uo(t,i,"value",e,r,n),i}function uo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>TD(t,a,l)),o.forEach(a=>{const l=bD(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function bD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function TD(t,e,n){if(e.childName==null||n.childName==null)throw Ls("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wc(t,e){return{eventCache:t,serverCache:e}}function Lo(t,e,n,r){return Wc(new Lr(e,n,r),t.serverCache)}function KS(t,e,n,r){return Wc(t.eventCache,new Lr(e,n,r))}function ec(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let of;const xD=()=>(of||(of=new St(hO)),of);class Ce{constructor(e,n=xD()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Tt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(re(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:He(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new Ce(null)}}set(e,n){if(re(e))return new Ce(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Ce(null)).set(_e(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(re(e))return n;{const r=ie(e),s=(this.children.get(r)||new Ce(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(He(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),He(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),He(n,i),r):new Ce(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(He(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Ce(null))}}function Fo(t,e,n){if(re(e))return new an(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ht(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function I_(t,e,n){let r=t;return Tt(n,(i,s)=>{r=Fo(r,He(e,i),s)}),r}function b_(t,e){if(re(e))return an.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new an(n)}}function jh(t,e){return Pi(t,e)!=null}function Pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ht(n.path,e)):null}function T_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ee(r,i.value))}),e}function Tr(t,e){if(re(e))return t;{const n=Pi(t,e);return n!=null?new an(new Ce(n)):new an(t.writeTree_.subtree(e))}}function zh(t){return t.writeTree_.isEmpty()}function xs(t,e){return YS(le(),t.writeTree_,e)}function YS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=YS(He(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(He(t,".priority"),r)),n}}/**
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
 */function $c(t,e){return JS(e,t)}function RD(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Fo(t.visibleWrites,e,n)),t.lastWriteId=r}function PD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ND(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&AD(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return OD(t),!0;if(r.snap)t.visibleWrites=b_(t.visibleWrites,r.path);else{const a=r.children;Tt(a,l=>{t.visibleWrites=b_(t.visibleWrites,He(r.path,l))})}return!0}else return!1}function AD(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(He(t.path,n),e))return!0;return!1}function OD(t){t.visibleWrites=qS(t.allWrites,DD,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DD(t){return t.visible}function qS(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=ht(n,o),r=Fo(r,a,s.snap)):tn(o,n)&&(a=ht(o,n),r=Fo(r,le(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=ht(n,o),r=I_(r,a,s.children);else if(tn(o,n))if(a=ht(o,n),re(a))r=I_(r,le(),s.children);else{const l=ks(s.children,ie(a));if(l){const u=l.getChild(_e(a));r=Fo(r,le(),u)}}}else throw Ls("WriteRecord should have .snap or .children")}}return r}function QS(t,e,n,r,i){if(!r&&!i){const s=Pi(t.visibleWrites,e);if(s!=null)return s;{const o=Tr(t.visibleWrites,e);if(zh(o))return n;if(n==null&&!jh(o,le()))return null;{const a=n||G.EMPTY_NODE;return xs(o,a)}}}else{const s=Tr(t.visibleWrites,e);if(!i&&zh(s))return n;if(!i&&n==null&&!jh(s,le()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=qS(t.allWrites,o,e),l=n||G.EMPTY_NODE;return xs(a,l)}}}function MD(t,e,n){let r=G.EMPTY_NODE;const i=Pi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=xs(Tr(s,new ve(o)),a);r=r.updateImmediateChild(o,l)}),T_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(t.visibleWrites,e);return T_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LD(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=He(e,n);if(jh(t.visibleWrites,s))return null;{const o=Tr(t.visibleWrites,s);return zh(o)?i.getChild(n):xs(o,i.getChild(n))}}function FD(t,e,n,r){const i=He(e,n),s=Pi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(t.visibleWrites,i);return xs(o,r.getNode().getImmediateChild(n))}else return null}function UD(t,e){return Pi(t.visibleWrites,e)}function jD(t,e,n,r,i,s,o){let a;const l=Tr(t.visibleWrites,e),u=Pi(l,le());if(u!=null)a=u;else if(n!=null)a=xs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=f.getNext();for(;v&&c.length<i;)d(v,r)!==0&&c.push(v),v=f.getNext();return c}else return[]}function zD(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function tc(t,e,n,r){return QS(t.writeTree,t.treePath,e,n,r)}function $m(t,e){return MD(t.writeTree,t.treePath,e)}function x_(t,e,n,r){return LD(t.writeTree,t.treePath,e,n,r)}function nc(t,e){return UD(t.writeTree,He(t.treePath,e))}function VD(t,e,n,r,i,s){return jD(t.writeTree,t.treePath,e,n,r,i,s)}function Bm(t,e,n){return FD(t.writeTree,t.treePath,e,n)}function XS(t,e){return JS(He(t.treePath,e),t.writeTree)}function JS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class WD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,wa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_a(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ts(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,wa(r,e.snapshotNode,i.oldSnap));else throw Ls("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $D{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ZS=new $D;class Hm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Lr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ci(this.viewCache_),s=VD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function BD(t){return{filter:t}}function HD(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GD(t,e,n,r,i){const s=new WD;let o,a;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=Vh(t,e,u.path,u.snap,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=rc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=YD(t,e,u.path,u.children,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=XD(t,e,u.path,r,i,s):o=qD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=QD(t,e,n.path,r,s);else throw Ls("Unknown operation type: "+n.type);const l=s.getChanges();return KD(e,o,l),{viewCache:o,changes:l}}function KD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ec(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(BS(ec(e)))}}function eC(t,e,n,r,i,s){const o=e.eventCache;if(nc(r,n)!=null)return e;{let a,l;if(re(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ci(e),c=u instanceof G?u:G.EMPTY_NODE,d=$m(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=tc(r,Ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ie(n);if(u===".priority"){A(Mr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=x_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=_e(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=x_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Bm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Lo(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function rc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),v,null)}else{const v=ie(n);if(!l.isCompleteForPath(n)&&Mr(n)>1)return e;const g=_e(n),w=l.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),v,w,g,ZS,null)}const d=KS(e,u,l.isFullyInitialized()||re(n),c.filtersNodes()),f=new Hm(i,d,s);return eC(t,d,n,i,f,a)}function Vh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Hm(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Lo(e,u,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Lo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=_e(n),v=a.getNode().getImmediateChild(d);let g;if(re(f))g=r;else{const _=c.getCompleteChild(d);_!=null?DS(f)===".priority"&&_.getChild(LS(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=G.EMPTY_NODE}if(v.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=Lo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function R_(t,e){return t.eventCache.isCompleteForChild(e)}function YD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=He(n,l);R_(e,ie(c))&&(a=Vh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=He(n,l);R_(e,ie(c))||(a=Vh(t,a,c,u,i,s,o))}),a}function P_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;re(n)?u=r:u=new Ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const v=e.serverCache.getNode().getImmediateChild(d),g=P_(t,v,f);l=rc(t,l,new ve(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const v=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!v){const g=e.serverCache.getNode().getImmediateChild(d),_=P_(t,g,f);l=rc(t,l,new ve(d),_,i,s,o,a)}}),l}function qD(t,e,n,r,i,s,o){if(nc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(re(n)){let u=new Ce(null);return l.getNode().forEachChild(fs,(c,d)=>{u=u.set(new ve(c),d)}),Wh(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((c,d)=>{const f=He(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Wh(t,e,n,u,i,s,a,o)}}function QD(t,e,n,r,i){const s=e.serverCache,o=KS(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return eC(t,o,n,r,ZS,i)}function XD(t,e,n,r,i,s){let o;if(nc(r,n)!=null)return e;{const a=new Hm(r,e,i),l=e.eventCache.getNode();let u;if(re(n)||ie(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=tc(r,Ci(e));else{const d=e.serverCache.getNode();A(d instanceof G,"serverChildren would be complete if leaf node"),c=$m(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ie(n);let d=Bm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,_e(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,G.EMPTY_NODE,_e(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tc(r,Ci(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||nc(r,le())!=null,Lo(e,u,o,t.filter.filtersNodes())}}/**
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
 */let JD=class{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new jm(r.getIndex()),s=vD(r);this.processor_=BD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),c=new Lr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Lr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wc(d,c),this.eventGenerator_=new kD(this.query_)}get query(){return this.query_}};function ZD(t){return t.viewCache_.serverCache.getNode()}function eM(t){return ec(t.viewCache_)}function tM(t,e){const n=Ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function N_(t){return t.eventRegistrations_.length===0}function nM(t,e){t.eventRegistrations_.push(e)}function A_(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function O_(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(A(Ci(t.viewCache_),"We should always have a full cache before handling merges"),A(ec(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=GD(t.processor_,i,e,n,r);return HD(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,tC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(Ts(s,o))}),n.isFullyInitialized()&&r.push(BS(n.getNode())),tC(t,r,n.getNode(),e)}function tC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ID(t.eventGenerator_,e,n,i)}/**
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
 */let ic;class nC{constructor(){this.views=new Map}}function iM(t){A(!ic,"__referenceConstructor has already been defined"),ic=t}function sM(){return A(ic,"Reference.ts has not been loaded"),ic}function oM(t){return t.views.size===0}function Gm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),O_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(O_(o,e,n,r));return s}}function rC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=tc(n,i?r:null),l=!1;a?l=!0:r instanceof G?(a=$m(n,r),l=!1):(a=G.EMPTY_NODE,l=!1);const u=Wc(new Lr(a,l,!1),new Lr(r,i,!1));return new JD(e,u)}return o}function aM(t,e,n,r,i,s){const o=rC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nM(o,n),rM(o,n)}function lM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(A_(u,n,r)),N_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(A_(l,n,r)),N_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Fr(t)&&s.push(new(sM())(e._repo,e._path)),{removed:s,events:o}}function iC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xr(t,e){let n=null;for(const r of t.views.values())n=n||tM(r,e);return n}function sC(t,e){if(e._queryParams.loadsAllData())return Bc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function oC(t,e){return sC(t,e)!=null}function Fr(t){return Bc(t)!=null}function Bc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sc;function uM(t){A(!sc,"__referenceConstructor has already been defined"),sc=t}function cM(){return A(sc,"Reference.ts has not been loaded"),sc}let dM=1;class D_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=zD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aC(t,e,n,r,i){return RD(t.pendingWriteTree_,e,n,r,i),i?Za(t,new Si(GS(),e,n)):[]}function ri(t,e,n=!1){const r=PD(t.pendingWriteTree_,e);if(ND(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(le(),!0):Tt(r.children,o=>{s=s.set(new ve(o),!0)}),Za(t,new Zu(r.path,s,n))}else return[]}function Ja(t,e,n){return Za(t,new Si(Vm(),e,n))}function fM(t,e,n){const r=Ce.fromObject(n);return Za(t,new Ca(Vm(),e,r))}function hM(t,e){return Za(t,new Sa(Vm(),e))}function pM(t,e,n){const r=Ym(t,n);if(r){const i=qm(r),s=i.path,o=i.queryId,a=ht(s,e),l=new Sa(Wm(o),a);return Qm(t,s,l)}else return[]}function lC(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||oC(o,e))){const l=lM(o,e,n,r);oM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,v)=>Fr(v));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const v=yM(f);for(let g=0;g<v.length;++g){const _=v[g],w=_.query,p=fC(t,_);t.listenProvider_.startListening(Uo(w),ka(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Uo(e),null):u.forEach(f=>{const v=t.queryToTagMap.get(Hc(f));t.listenProvider_.stopListening(Uo(f),v)}))}_M(t,u)}return a}function uC(t,e,n,r){const i=Ym(t,r);if(i!=null){const s=qm(i),o=s.path,a=s.queryId,l=ht(o,e),u=new Si(Wm(a),l,n);return Qm(t,o,u)}else return[]}function mM(t,e,n,r){const i=Ym(t,r);if(i){const s=qm(i),o=s.path,a=s.queryId,l=ht(o,e),u=Ce.fromObject(n),c=new Ca(Wm(a),l,u);return Qm(t,o,c)}else return[]}function gM(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,v)=>{const g=ht(f,i);s=s||xr(v,g),o=o||Fr(v)});let a=t.syncPointTree_.get(i);a?(o=o||Fr(a),s=s||xr(a,le())):(a=new nC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,g)=>{const _=xr(g,le());_&&(s=s.updateImmediateChild(v,_))}));const u=oC(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Hc(e);A(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const v=wM();t.queryToTagMap.set(f,v),t.tagToQueryMap.set(v,f)}const c=$c(t.pendingWriteTree_,i);let d=aM(a,e,n,c,s,l);if(!u&&!o&&!r){const f=sC(a,e);d=d.concat(EM(t,e,f))}return d}function Km(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ht(o,e),u=xr(a,l);if(u)return u});return QS(i,e,s,n,!0)}function vM(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=ht(u,n);r=r||xr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||xr(i,le()):(i=new nC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Lr(r,!0,!1):null,a=$c(t.pendingWriteTree_,e._path),l=rC(i,e,a,s?o.getNode():G.EMPTY_NODE,s);return eM(l)}function Za(t,e){return cC(e,t.syncPointTree_,null,$c(t.pendingWriteTree_,le()))}function cC(t,e,n,r){if(re(t.path))return dC(t,e,n,r);{const i=e.get(le());n==null&&i!=null&&(n=xr(i,le()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=XS(r,o);s=s.concat(cC(a,l,u,c))}return i&&(s=s.concat(Gm(i,t,r,n))),s}}function dC(t,e,n,r){const i=e.get(le());n==null&&i!=null&&(n=xr(i,le()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=XS(r,o),c=t.operationForChild(o);c&&(s=s.concat(dC(c,a,l,u)))}),i&&(s=s.concat(Gm(i,t,r,n))),s}function fC(t,e){const n=e.query,r=ka(t,n);return{hashFn:()=>(ZD(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?pM(t,n._path,r):hM(t,n._path);{const s=gO(i,n);return lC(t,n,null,s)}}}}function ka(t,e){const n=Hc(e);return t.queryToTagMap.get(n)}function Hc(t){return t._path.toString()+"$"+t._queryIdentifier}function Ym(t,e){return t.tagToQueryMap.get(e)}function qm(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Qm(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=$c(t.pendingWriteTree_,e);return Gm(r,n,i,null)}function yM(t){return t.fold((e,n,r)=>{if(n&&Fr(n))return[Bc(n)];{let i=[];return n&&(i=iC(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function Uo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(cM())(t._repo,t._path):t}function _M(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function wM(){return dM++}function EM(t,e,n){const r=e._path,i=ka(t,e),s=fC(t,n),o=t.listenProvider_.startListening(Uo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!re(u)&&c&&Fr(c))return[Bc(c).query];{let f=[];return c&&(f=f.concat(iC(c).map(v=>v.query))),Tt(d,(v,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Uo(c),ka(t,c))}}return o}/**
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
 */class Xm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xm(n)}node(){return this.node_}}class Jm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new Jm(this.syncTree_,n)}node(){return Km(this.syncTree_,this.path_)}}const SM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},M_=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kM(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},kM=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},IM=function(t,e,n,r){return Zm(e,new Jm(n,t),r)},hC=function(t,e,n){return Zm(t,new Xm(e),n)};function Zm(t,e,n){const r=t.getPriority().val(),i=M_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=M_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,Je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(De,(a,l)=>{const u=Zm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class eg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function tg(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=ie(n);for(;i!==null;){const s=ks(r.node.children,i)||{children:{},childCount:0};r=new eg(i,r,s),n=_e(n),i=ie(n)}return r}function Ws(t){return t.node.value}function pC(t,e){t.node.value=e,$h(t)}function mC(t){return t.node.childCount>0}function bM(t){return Ws(t)===void 0&&!mC(t)}function Gc(t,e){Tt(t.node.children,(n,r)=>{e(new eg(n,t,r))})}function gC(t,e,n,r){n&&!r&&e(t),Gc(t,i=>{gC(i,e,!0,r)}),n&&r&&e(t)}function TM(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function el(t){return new ve(t.parent===null?t.name:el(t.parent)+"/"+t.name)}function $h(t){t.parent!==null&&xM(t.parent,t.name,t)}function xM(t,e,n){const r=bM(n),i=Yn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,$h(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$h(t))}/**
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
 */const RM=/[\[\].#$\/\u0000-\u001F\u007F]/,PM=/[\[\].#$\u0000-\u001F\u007F]/,af=10*1024*1024,vC=function(t){return typeof t=="string"&&t.length!==0&&!RM.test(t)},yC=function(t){return typeof t=="string"&&t.length!==0&&!PM.test(t)},NM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yC(t)},AM=function(t,e,n,r){r&&e===void 0||ng(wm(t,"value"),e,n)},ng=function(t,e,n){const r=n instanceof ve?new qO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+qr(r)+" with contents = "+e.toString());if(hS(e))throw new Error(t+"contains "+e.toString()+" "+qr(r));if(typeof e=="string"&&e.length>af/3&&Fc(e)>af)throw new Error(t+"contains a string greater than "+af+" utf8 bytes "+qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vC(o)))throw new Error(t+" contains an invalid key ("+o+") "+qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);QO(r,o),ng(t,a,r),XO(r)}),i&&s)throw new Error(t+' contains ".value" child '+qr(r)+" in addition to actual children.")}},_C=function(t,e,n,r){if(!(r&&n===void 0)&&!yC(n))throw new Error(wm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OM=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_C(t,e,n,r)},DM=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},MM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!NM(n))throw new Error(wm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wC(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!FS(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function wn(t,e,n){wC(t,n),FM(t,r=>tn(r,e)||tn(e,r))}function FM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(UM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();li&&lt("event: "+n.toString()),Vs(r)}}}/**
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
 */const jM="repo_interrupt",zM=25;class VM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ju(),this.transactionQueueTree_=new eg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WM(t,e,n){if(t.stats_=Mm(t.repoInfo_),t.forceRestClient_||wO())t.server_=new Xu(t.repoInfo_,(r,i,s,o)=>{L_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>F_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,i,s,o)=>{L_(t,r,i,s,o)},r=>{F_(t,r)},r=>{BM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=IO(t.repoInfo_,()=>new CD(t.stats_,t.server_)),t.infoData_=new yD,t.infoSyncTree_=new D_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ja(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ig(t,"connected",!1),t.serverSyncTree_=new D_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);wn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function $M(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rg(t){return SM({timestamp:$M(t)})}function L_(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ju(n,u=>Je(u));o=mM(t.serverSyncTree_,s,l,i)}else{const l=Je(n);o=uC(t.serverSyncTree_,s,l,i)}else if(r){const l=ju(n,u=>Je(u));o=fM(t.serverSyncTree_,s,l)}else{const l=Je(n);o=Ja(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Yc(t,s)),wn(t.eventQueue_,a,o)}function F_(t,e){ig(t,"connected",e),e===!1&&KM(t)}function BM(t,e){Tt(e,(n,r)=>{ig(t,n,r)})}function ig(t,e,n){const r=new ve("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(r,i);const s=Ja(t.infoSyncTree_,r,i);wn(t.eventQueue_,r,s)}function EC(t){return t.nextWriteId_++}function HM(t,e,n){const r=vM(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Je(i).withIndex(e._queryParams.getIndex());gM(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ja(t.serverSyncTree_,e._path,s);else{const a=ka(t.serverSyncTree_,e);o=uC(t.serverSyncTree_,e._path,s,a)}return wn(t.eventQueue_,e._path,o),lC(t.serverSyncTree_,e,n,null,!0),s},i=>(Kc(t,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function GM(t,e,n,r,i){Kc(t,"set",{path:e.toString(),value:n,priority:r});const s=rg(t),o=Je(n,r),a=Km(t.serverSyncTree_,e),l=hC(o,a,s),u=EC(t),c=aC(t.serverSyncTree_,e,l,u,!0);wC(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,v)=>{const g=f==="ok";g||bt("set at "+e+" failed: "+f);const _=ri(t.serverSyncTree_,u,!g);wn(t.eventQueue_,e,_),qM(t,i,f,v)});const d=bC(t,e);Yc(t,d),wn(t.eventQueue_,d,[])}function KM(t){Kc(t,"onDisconnectEvents");const e=rg(t),n=Ju();Uh(t.onDisconnect_,le(),(i,s)=>{const o=IM(i,s,t.serverSyncTree_,e);HS(n,i,o)});let r=[];Uh(n,le(),(i,s)=>{r=r.concat(Ja(t.serverSyncTree_,i,s));const o=bC(t,i);Yc(t,o)}),t.onDisconnect_=Ju(),wn(t.eventQueue_,le(),r)}function YM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jM)}function Kc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function qM(t,e,n,r){e&&Vs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function SC(t,e,n){return Km(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function sg(t,e=t.transactionQueueTree_){if(e||qc(t,e),Ws(e)){const n=kC(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&QM(t,el(e),n)}else mC(e)&&Gc(e,n=>{sg(t,n)})}function QM(t,e,n){const r=n.map(u=>u.currentWriteId),i=SC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ht(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Kc(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ri(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();qc(t,tg(t.transactionQueueTree_,e)),sg(t,t.transactionQueueTree_),wn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Vs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{bt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Yc(t,e)}},o)}function Yc(t,e){const n=CC(t,e),r=el(n),i=kC(t,n);return XM(t,i,r),r}function XM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ht(n,l.path);let c=!1,d;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zM)c=!0,d="maxretry",i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else{const f=SC(t,l.path,o);l.currentInputSnapshot=f;const v=e[a].update(f.val());if(v!==void 0){ng("transaction failed: Data returned ",v,l.path);let g=Je(v);typeof v=="object"&&v!=null&&Yn(v,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,p=rg(t),h=hC(g,f,p);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=EC(t),o.splice(o.indexOf(w),1),i=i.concat(aC(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ri(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0))}wn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}qc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Vs(r[a]);sg(t,t.transactionQueueTree_)}function CC(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ws(r)===void 0;)r=tg(r,n),e=_e(e),n=ie(e);return r}function kC(t,e){const n=[];return IC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function IC(t,e,n){const r=Ws(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Gc(e,i=>{IC(t,i,n)})}function qc(t,e){const n=Ws(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,pC(e,n.length>0?n:void 0)}Gc(e,r=>{qc(t,r)})}function bC(t,e){const n=el(CC(t,e)),r=tg(t.transactionQueueTree_,e);return TM(r,i=>{lf(t,i)}),lf(t,r),gC(r,i=>{lf(t,i)}),n}function lf(t,e){const n=Ws(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?pC(e,void 0):n.length=s+1,wn(t.eventQueue_,el(e),i);for(let o=0;o<r.length;o++)Vs(r[o])}}/**
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
 */function JM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const U_=function(t,e){const n=eL(t),r=n.namespace;n.domain==="firebase.com"&&Bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new IS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},eL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=JM(t.substring(c,d)));const f=ZM(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class tL{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class nL{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class rL{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class og{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:DS(this._path)}get ref(){return new qn(this._repo,this._path)}get _queryIdentifier(){const e=C_(this._queryParams),n=Om(e);return n==="{}"?"default":n}get _queryObject(){return C_(this._queryParams)}isEqual(e){if(e=xt(e),!(e instanceof og))return!1;const n=this._repo===e._repo,r=FS(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+YO(this._path)}}class qn extends og{constructor(e,n){super(e,n,new zm,!1)}get parent(){const e=LS(this._path);return e===null?null:new qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ia{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Bh(this.ref,e);return new Ia(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ia(i,Bh(this.ref,r),De)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function TC(t,e){return t=xt(t),t._checkNotDeleted("ref"),e!==void 0?Bh(t._root,e):t._root}function Bh(t,e){return t=xt(t),ie(t._path)===null?OM("child","path",e,!1):_C("child","path",e,!1),new qn(t._repo,He(t._path,e))}function iL(t,e){t=xt(t),DM("set",t._path),AM("set",e,t._path,!1);const n=new Lc;return GM(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function sL(t){t=xt(t);const e=new rL(()=>{}),n=new ag(e);return HM(t._repo,t,n).then(r=>new Ia(r,new qn(t._repo,t._path),t._queryParams.getIndex()))}class ag{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new tL("value",this,new Ia(e.snapshotNode,new qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nL(this,e,n):null}matches(e){return e instanceof ag?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}iM(qn);uM(qn);/**
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
 */const oL="FIREBASE_DATABASE_EMULATOR_HOST",Hh={};let aL=!1;function lL(t,e,n,r){t.repoInfo_=new IS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function uL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=U_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[oL]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=U_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ds(ds.OWNER):new SO(t.name,t.options,e);MM("Invalid Firebase Database URL",o),re(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=dL(a,t,c,new EO(t.name,n));return new fL(d,t)}function cL(t,e){const n=Hh[e];(!n||n[t.key]!==t)&&Bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YM(t),delete n[t.key]}function dL(t,e,n,r){let i=Hh[e.name];i||(i={},Hh[e.name]=i);let s=i[t.toURLString()];return s&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VM(t,aL,n,r),i[t.toURLString()]=s,s}class fL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function hL(t=PE(),e){const n=Cm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=S2("database");r&&pL(n,...r)}return n}function pL(t,e,n,r={}){t=xt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ds(ds.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:C2(r.mockUserToken,t.app.options.projectId);s=new ds(o)}lL(i,e,n,s)}/**
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
 */function mL(t){oO(Us),Is(new vi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),br(o_,a_,t),br(o_,a_,"esm2017")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mL();const gL={apiKey:"AIzaSyAG8LJPNXNgDKnfopB-c1CVX-Uew4uRyqU",authDomain:"schedule-maker-8675b.firebaseapp.com",projectId:"schedule-maker-8675b",storageBucket:"schedule-maker-8675b.appspot.com",messagingSenderId:"198447247334",appId:"1:198447247334:web:f009e6e7b0b144923cf027",measurementId:"G-2NLFWYGS09"},xC=RE(gL),lg=sO(xC);async function r3(t,e){return await $N(lg,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}async function i3(t,e){return await BN(lg,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}function vL(){return lg}const RC=hL(xC);async function s3(t){const e=t.uid;await iL(TC(RC,"/users"+e),{...t})}async function o3(t){const e=await sL(TC(RC,"/users"+t));return e.exists()?e.val():null}async function a3(t){await HN(t)}function yL(){const t=Dw(),e=vL();return k.useEffect(()=>{e.currentUser||t("/")},[]),console.log(e),O.jsx("p",{children:"Home page"})}var _L=Object.defineProperty,wL=(t,e)=>{for(var n in e)_L(t,n,{get:e[n],enumerable:!0})},cn={};wL(cn,{assign:()=>CL,colors:()=>Rr,createStringInterpolator:()=>mg,skipAnimation:()=>LC,to:()=>MC,willAdvance:()=>gg});var ug=nl(),J=t=>tl(t,ug),cg=nl();J.write=t=>tl(t,cg);var Qc=nl();J.onStart=t=>tl(t,Qc);var dg=nl();J.onFrame=t=>tl(t,dg);var fg=nl();J.onFinish=t=>tl(t,fg);var hs=[];J.setTimeout=(t,e)=>{const n=J.now()+e,r=()=>{const s=hs.findIndex(o=>o.cancel==r);~s&&hs.splice(s,1),mr-=~s?1:0},i={time:n,handler:t,cancel:r};return hs.splice(PC(n),0,i),mr+=1,NC(),i};var PC=t=>~(~hs.findIndex(e=>e.time>t)||~hs.length);J.cancel=t=>{Qc.delete(t),dg.delete(t),fg.delete(t),ug.delete(t),cg.delete(t)};J.sync=t=>{Gh=!0,J.batchedUpdates(t),Gh=!1};J.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,J.onStart(n)}return r.handler=t,r.cancel=()=>{Qc.delete(n),e=null},r};var hg=typeof window<"u"?window.requestAnimationFrame:()=>{};J.use=t=>hg=t;J.now=typeof performance<"u"?()=>performance.now():Date.now;J.batchedUpdates=t=>t();J.catch=console.error;J.frameLoop="always";J.advance=()=>{J.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):OC()};var pr=-1,mr=0,Gh=!1;function tl(t,e){Gh?(e.delete(t),t(0)):(e.add(t),NC())}function NC(){pr<0&&(pr=0,J.frameLoop!=="demand"&&hg(AC))}function EL(){pr=-1}function AC(){~pr&&(hg(AC),J.batchedUpdates(OC))}function OC(){const t=pr;pr=J.now();const e=PC(pr);if(e&&(DC(hs.splice(0,e),n=>n.handler()),mr-=e),!mr){EL();return}Qc.flush(),ug.flush(t?Math.min(64,pr-t):16.667),dg.flush(),cg.flush(),fg.flush()}function nl(){let t=new Set,e=t;return{add(n){mr+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return mr-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,mr-=e.size,DC(e,r=>r(n)&&t.add(r)),mr+=t.size,e=t)}}}function DC(t,e){t.forEach(n=>{try{e(n)}catch(r){J.catch(r)}})}function Kh(){}var SL=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),x={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function bn(t,e){if(x.arr(t)){if(!x.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var Y=(t,e)=>t.forEach(e);function En(t,e,n){if(x.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var pt=t=>x.und(t)?[]:x.arr(t)?t:[t];function jo(t,e){if(t.size){const n=Array.from(t);t.clear(),Y(n,e)}}var Eo=(t,...e)=>jo(t,n=>n(...e)),pg=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),mg,MC,Rr=null,LC=!1,gg=Kh,CL=t=>{t.to&&(MC=t.to),t.now&&(J.now=t.now),t.colors!==void 0&&(Rr=t.colors),t.skipAnimation!=null&&(LC=t.skipAnimation),t.createStringInterpolator&&(mg=t.createStringInterpolator),t.requestAnimationFrame&&J.use(t.requestAnimationFrame),t.batchedUpdates&&(J.batchedUpdates=t.batchedUpdates),t.willAdvance&&(gg=t.willAdvance),t.frameLoop&&(J.frameLoop=t.frameLoop)},zo=new Set,Vt=[],uf=[],oc=0,Xc={get idle(){return!zo.size&&!Vt.length},start(t){oc>t.priority?(zo.add(t),J.onStart(kL)):(FC(t),J(Yh))},advance:Yh,sort(t){if(oc)J.onFrame(()=>Xc.sort(t));else{const e=Vt.indexOf(t);~e&&(Vt.splice(e,1),UC(t))}},clear(){Vt=[],zo.clear()}};function kL(){zo.forEach(FC),zo.clear(),J(Yh)}function FC(t){Vt.includes(t)||UC(t)}function UC(t){Vt.splice(IL(Vt,e=>e.priority>t.priority),0,t)}function Yh(t){const e=uf;for(let n=0;n<Vt.length;n++){const r=Vt[n];oc=r.priority,r.idle||(gg(r),r.advance(t),r.idle||e.push(r))}return oc=0,uf=Vt,uf.length=0,Vt=e,Vt.length>0}function IL(t,e){const n=t.findIndex(e);return n<0?t.length:n}var bL=(t,e,n)=>Math.min(Math.max(n,t),e),TL={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},rn="[-+]?\\d*\\.?\\d+",ac=rn+"%";function Jc(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var xL=new RegExp("rgb"+Jc(rn,rn,rn)),RL=new RegExp("rgba"+Jc(rn,rn,rn,rn)),PL=new RegExp("hsl"+Jc(rn,ac,ac)),NL=new RegExp("hsla"+Jc(rn,ac,ac,rn)),AL=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,OL=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,DL=/^#([0-9a-fA-F]{6})$/,ML=/^#([0-9a-fA-F]{8})$/;function LL(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=DL.exec(t))?parseInt(e[1]+"ff",16)>>>0:Rr&&Rr[t]!==void 0?Rr[t]:(e=xL.exec(t))?(Oi(e[1])<<24|Oi(e[2])<<16|Oi(e[3])<<8|255)>>>0:(e=RL.exec(t))?(Oi(e[1])<<24|Oi(e[2])<<16|Oi(e[3])<<8|V_(e[4]))>>>0:(e=AL.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=ML.exec(t))?parseInt(e[1],16)>>>0:(e=OL.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=PL.exec(t))?(j_(z_(e[1]),Ul(e[2]),Ul(e[3]))|255)>>>0:(e=NL.exec(t))?(j_(z_(e[1]),Ul(e[2]),Ul(e[3]))|V_(e[4]))>>>0:null}function cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function j_(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=cf(i,r,t+1/3),o=cf(i,r,t),a=cf(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Oi(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function z_(t){return(parseFloat(t)%360+360)%360/360}function V_(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Ul(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function W_(t){let e=LL(t);if(e===null)return t;e=e||0;const n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var ba=(t,e,n)=>{if(x.fun(t))return t;if(x.arr(t))return ba({range:t,output:e,extrapolate:n});if(x.str(t.output[0]))return mg(t);const r=t,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=UL(u,s);return FL(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function FL(t,e,n,r,i,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function UL(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var jL=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return bL(0,1,i/t)},lc=1.70158,jl=lc*1.525,$_=lc+1,B_=2*Math.PI/3,H_=2*Math.PI/4.5,zl=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,zL={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>$_*t*t*t-lc*t*t,easeOutBack:t=>1+$_*Math.pow(t-1,3)+lc*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((jl+1)*2*t-jl)/2:(Math.pow(2*t-2,2)*((jl+1)*(t*2-2)+jl)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*B_),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*B_)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*H_))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*H_)/2+1,easeInBounce:t=>1-zl(1-t),easeOutBounce:zl,easeInOutBounce:t=>t<.5?(1-zl(1-2*t))/2:(1+zl(2*t-1))/2,steps:jL},Ta=Symbol.for("FluidValue.get"),Rs=Symbol.for("FluidValue.observers"),zt=t=>!!(t&&t[Ta]),yt=t=>t&&t[Ta]?t[Ta]():t,G_=t=>t[Rs]||null;function VL(t,e){t.eventObserved?t.eventObserved(e):t(e)}function xa(t,e){const n=t[Rs];n&&n.forEach(r=>{VL(r,e)})}var jC=class{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");WL(this,t)}},WL=(t,e)=>zC(t,Ta,e);function $s(t,e){if(t[Ta]){let n=t[Rs];n||zC(t,Rs,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Ra(t,e){const n=t[Rs];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[Rs]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var zC=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),su=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,$L=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,K_=new RegExp(`(${su.source})(%|[a-z]+)`,"i"),BL=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Zc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,VC=t=>{const[e,n]=HL(t);if(!e||pg())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||t}else{if(n&&Zc.test(n))return VC(n);if(n)return n}return t},HL=t=>{const e=Zc.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]},df,GL=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,WC=t=>{df||(df=Rr?new RegExp(`(${Object.keys(Rr).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>yt(s).replace(Zc,VC).replace($L,W_).replace(df,W_)),n=e.map(s=>s.match(su).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>ba({...t,output:s}));return s=>{var l;const o=!K_.test(e[0])&&((l=e.find(u=>K_.test(u)))==null?void 0:l.replace(su,""));let a=0;return e[0].replace(su,()=>`${i[a++](s)}${o||""}`).replace(BL,GL)}},vg="react-spring: ",$C=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${vg}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},KL=$C(console.warn);function YL(){KL(`${vg}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var qL=$C(console.warn);function QL(){qL(`${vg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function ed(t){return x.str(t)&&(t[0]=="#"||/\d/.test(t)||!pg()&&Zc.test(t)||t in(Rr||{}))}var ii=pg()?k.useEffect:k.useLayoutEffect,XL=()=>{const t=k.useRef(!1);return ii(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function yg(){const t=k.useState()[1],e=XL();return()=>{e.current&&t(Math.random())}}function JL(t,e){const[n]=k.useState(()=>({inputs:e,result:t()})),r=k.useRef(),i=r.current;let s=i;return s?e&&s.inputs&&ZL(e,s.inputs)||(s={inputs:e,result:t()}):s=n,k.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function ZL(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var _g=t=>k.useEffect(t,e4),e4=[];function qh(t){const e=k.useRef();return k.useEffect(()=>{e.current=t}),e.current}var Pa=Symbol.for("Animated:node"),t4=t=>!!t&&t[Pa]===t,hn=t=>t&&t[Pa],wg=(t,e)=>SL(t,Pa,e),td=t=>t&&t[Pa]&&t[Pa].getPayload(),BC=class{constructor(){wg(this,this)}getPayload(){return this.payload||[]}},rl=class extends BC{constructor(t){super(),this._value=t,this.done=!0,this.durationProgress=0,x.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new rl(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return x.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,x.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},Na=class extends rl{constructor(t){super(0),this._string=null,this._toString=ba({output:[t,t]})}static create(t){return new Na(t)}getValue(){const t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(x.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=ba({output:[this.getValue(),t]})),this._value=0,super.reset()}},uc={dependencies:null},nd=class extends BC{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return En(this.source,(n,r)=>{t4(n)?e[r]=n.getValue(t):zt(n)?e[r]=yt(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&Y(this.payload,t=>t.reset())}_makePayload(t){if(t){const e=new Set;return En(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){uc.dependencies&&zt(t)&&uc.dependencies.add(t);const e=td(t);e&&Y(e,n=>this.add(n))}},HC=class extends nd{constructor(t){super(t)}static create(t){return new HC(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const e=this.getPayload();return t.length==e.length?e.map((n,r)=>n.setValue(t[r])).some(Boolean):(super.setValue(t.map(n4)),!0)}};function n4(t){return(ed(t)?Na:rl).create(t)}function Qh(t){const e=hn(t);return e?e.constructor:x.arr(t)?HC:ed(t)?Na:rl}var Y_=(t,e)=>{const n=!x.fun(t)||t.prototype&&t.prototype.isReactComponent;return k.forwardRef((r,i)=>{const s=k.useRef(null),o=n&&k.useCallback(g=>{s.current=s4(i,g)},[i]),[a,l]=i4(r,e),u=yg(),c=()=>{const g=s.current;if(n&&!g)return;(g?e.applyAnimatedValues(g,a.getValue(!0)):!1)===!1&&u()},d=new r4(c,l),f=k.useRef();ii(()=>(f.current=d,Y(l,g=>$s(g,d)),()=>{f.current&&(Y(f.current.deps,g=>Ra(g,f.current)),J.cancel(f.current.update))})),k.useEffect(c,[]),_g(()=>()=>{const g=f.current;Y(g.deps,_=>Ra(_,g))});const v=e.getComponentProps(a.getValue());return k.createElement(t,{...v,ref:o})})},r4=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&J.write(this.update)}};function i4(t,e){const n=new Set;return uc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new nd(t),uc.dependencies=null,[t,n]}function s4(t,e){return t&&(x.fun(t)?t(e):t.current=e),e}var q_=Symbol.for("AnimatedComponent"),o4=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new nd(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=Q_(o)||"Anonymous";return x.str(o)?o=s[o]||(s[o]=Y_(o,i)):o=o[q_]||(o[q_]=Y_(o,i)),o.displayName=`Animated(${a})`,o};return En(t,(o,a)=>{x.arr(t)&&(a=Q_(o)),s[a]=s(o)}),{animated:s}},Q_=t=>x.str(t)?t:t&&x.str(t.displayName)?t.displayName:x.fun(t)&&t.name||null;function _t(t,...e){return x.fun(t)?t(...e):t}var Vo=(t,e)=>t===!0||!!(e&&t&&(x.fun(t)?t(e):pt(t).includes(e))),GC=(t,e)=>x.obj(t)?e&&t[e]:t,KC=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,a4=t=>t,rd=(t,e=a4)=>{let n=l4;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const s=e(t[i],i);x.und(s)||(r[i]=s)}return r},l4=["config","onProps","onStart","onChange","onPause","onResume","onRest"],u4={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function c4(t){const e={};let n=0;if(En(t,(r,i)=>{u4[i]||(e[i]=r,n++)}),n)return e}function Eg(t){const e=c4(t);if(e){const n={to:e};return En(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function Aa(t){return t=yt(t),x.arr(t)?t.map(Aa):ed(t)?cn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function YC(t){for(const e in t)return!0;return!1}function Xh(t){return x.fun(t)||x.arr(t)&&x.obj(t[0])}function Jh(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function qC(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var d4={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Zh={...d4.default,mass:1,damping:1,easing:zL.linear,clamp:!1},f4=class{constructor(){this.velocity=0,Object.assign(this,Zh)}};function h4(t,e,n){n&&(n={...n},X_(n,e),e={...n,...e}),X_(t,e),Object.assign(t,e);for(const o in Zh)t[o]==null&&(t[o]=Zh[o]);let{frequency:r,damping:i}=t;const{mass:s}=t;return x.und(r)||(r<.01&&(r=.01),i<0&&(i=0),t.tension=Math.pow(2*Math.PI/r,2)*s,t.friction=4*Math.PI*i*s/r),t}function X_(t,e){if(!x.und(e.decay))t.duration=void 0;else{const n=!x.und(e.tension)||!x.und(e.friction);(n||!x.und(e.frequency)||!x.und(e.damping)||!x.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var J_=[],p4=class{constructor(){this.changed=!1,this.values=J_,this.toValues=null,this.fromValues=J_,this.config=new f4,this.immediate=!1}};function QC(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{let l,u,c=Vo(n.cancel??(r==null?void 0:r.cancel),e);if(c)v();else{x.und(n.pause)||(i.paused=Vo(n.pause,e));let g=r==null?void 0:r.pause;g!==!0&&(g=i.paused||Vo(g,e)),l=_t(n.delay||0,e),g?(i.resumeQueue.add(f),s.pause()):(s.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),l=u.time-J.now()}function f(){l>0&&!cn.skipAnimation?(i.delayed=!0,u=J.setTimeout(v,l),i.pauseQueue.add(d),i.timeouts.add(u)):v()}function v(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),t<=(i.cancelId||0)&&(c=!0);try{s.start({...n,callId:t,cancel:c},o)}catch(g){a(g)}}})}var Sg=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?ps(t.get()):e.every(n=>n.noop)?XC(t.get()):Jt(t.get(),e.every(n=>n.finished)),XC=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Jt=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),ps=t=>({value:t,cancelled:!0,finished:!1});function JC(t,e,n,r){const{callId:i,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const u=rd(e,(w,p)=>p==="onRest"?void 0:w);let c,d;const f=new Promise((w,p)=>(c=w,d=p)),v=w=>{const p=i<=(n.cancelId||0)&&ps(r)||i!==n.asyncId&&Jt(r,!1);if(p)throw w.result=p,d(w),w},g=(w,p)=>{const h=new Z_,y=new e0;return(async()=>{if(cn.skipAnimation)throw Oa(n),y.result=Jt(r,!1),d(y),y;v(h);const m=x.obj(w)?{...w}:{...p,to:w};m.parentId=i,En(u,(b,I)=>{x.und(m[I])&&(m[I]=b)});const E=await r.start(m);return v(h),n.paused&&await new Promise(b=>{n.resumeQueue.add(b)}),E})()};let _;if(cn.skipAnimation)return Oa(n),Jt(r,!1);try{let w;x.arr(t)?w=(async p=>{for(const h of p)await g(h)})(t):w=Promise.resolve(t(g,r.stop.bind(r))),await Promise.all([w.then(c),f]),_=Jt(r.get(),!0,!1)}catch(w){if(w instanceof Z_)_=w.result;else if(w instanceof e0)_=w.result;else throw w}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return x.fun(o)&&J.batchedUpdates(()=>{o(_,r,r.item)}),_})()}function Oa(t,e){jo(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var Z_=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},e0=class extends Error{constructor(){super("SkipAnimationSignal")}},ep=t=>t instanceof Cg,m4=1,Cg=class extends jC{constructor(){super(...arguments),this.id=m4++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=hn(this);return t&&t.getValue()}to(...t){return cn.to(this,t)}interpolate(...t){return YL(),cn.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){xa(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||Xc.sort(this),xa(this,{type:"priority",parent:this,priority:t})}},ki=Symbol.for("SpringPhase"),ZC=1,tp=2,np=4,ff=t=>(t[ki]&ZC)>0,nr=t=>(t[ki]&tp)>0,co=t=>(t[ki]&np)>0,t0=(t,e)=>e?t[ki]|=tp|ZC:t[ki]&=~tp,n0=(t,e)=>e?t[ki]|=np:t[ki]&=~np,g4=class extends Cg{constructor(t,e){if(super(),this.animation=new p4,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!x.und(t)||!x.und(e)){const n=x.obj(t)?{...t}:{...e,from:t};x.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(nr(this)||this._state.asyncTo)||co(this)}get goal(){return yt(this.animation.to)}get velocity(){const t=hn(this);return t instanceof rl?t.lastVelocity||0:t.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return ff(this)}get isAnimating(){return nr(this)}get isPaused(){return co(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:s}=r,o=td(r.to);!o&&zt(r.to)&&(i=pt(yt(r.to))),r.values.forEach((u,c)=>{if(u.done)return;const d=u.constructor==Na?1:o?o[c].lastPosition:i[c];let f=r.immediate,v=d;if(!f){if(v=u.lastPosition,s.tension<=0){u.done=!0;return}let g=u.elapsedTime+=t;const _=r.fromValues[c],w=u.v0!=null?u.v0:u.v0=x.arr(s.velocity)?s.velocity[c]:s.velocity;let p;const h=s.precision||(_==d?.005:Math.min(1,Math.abs(d-_)*.001));if(x.und(s.duration))if(s.decay){const y=s.decay===!0?.998:s.decay,m=Math.exp(-(1-y)*g);v=_+w/(1-y)*(1-m),f=Math.abs(u.lastPosition-v)<=h,p=w*m}else{p=u.lastVelocity==null?w:u.lastVelocity;const y=s.restVelocity||h/10,m=s.clamp?0:s.bounce,E=!x.und(m),b=_==d?u.v0>0:_<d;let I,N=!1;const D=1,F=Math.ceil(t/D);for(let oe=0;oe<F&&(I=Math.abs(p)>y,!(!I&&(f=Math.abs(d-v)<=h,f)));++oe){E&&(N=v==d||v>d==b,N&&(p=-p*m,v=d));const Z=-s.tension*1e-6*(v-d),je=-s.friction*.001*p,W=(Z+je)/s.mass;p=p+W*D,v=v+p*D}}else{let y=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,g=u.elapsedTime+=t)),y=(s.progress||0)+g/this._memoizedDuration,y=y>1?1:y<0?0:y,u.durationProgress=y),v=_+s.easing(y)*(d-_),p=(v-u.lastPosition)/t,f=y==1}u.lastVelocity=p,Number.isNaN(v)&&(console.warn("Got NaN while animating:",this),f=!0)}o&&!o[c].done&&(f=!1),f?u.done=!0:e=!1,u.setValue(v,s.round)&&(n=!0)});const a=hn(this),l=a.getValue();if(e){const u=yt(r.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(t){return J.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(nr(this)){const{to:t,config:e}=this.animation;J.batchedUpdates(()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return x.und(t)?(n=this.queue||[],this.queue=[]):n=[x.obj(t)?t:{...e,to:t}],Promise.all(n.map(r=>this._update(r))).then(r=>Sg(this,r))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),Oa(this._state,t&&this._lastCallId),J.batchedUpdates(()=>this._stop(e,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:r}=t;n=x.obj(n)?n[e]:n,(n==null||Xh(n))&&(n=void 0),r=x.obj(r)?r[e]:r,r==null&&(r=void 0);const i={to:n,from:r};return ff(this)||(t.reverse&&([n,r]=[r,n]),r=yt(r),x.und(r)?hn(this)||this._set(n):this._set(r)),i}_update({...t},e){const{key:n,defaultProps:r}=this;t.default&&Object.assign(r,rd(t,(o,a)=>/^on/.test(a)?GC(o,n):o)),i0(this,t,"onProps"),ho(this,"onProps",t,this);const i=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return QC(++this._lastCallId,{key:n,props:t,defaultProps:r,state:s,actions:{pause:()=>{co(this)||(n0(this,!0),Eo(s.pauseQueue),ho(this,"onPause",Jt(this,fo(this,this.animation.to)),this))},resume:()=>{co(this)&&(n0(this,!1),nr(this)&&this._resume(),Eo(s.resumeQueue),ho(this,"onResume",Jt(this,fo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(o=>{if(t.loop&&o.finished&&!(e&&o.noop)){const a=ek(t);if(a)return this._update(a,!0)}return o})}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(ps(this));const r=!x.und(t.to),i=!x.und(t.from);if(r||i)if(e.callId>this._lastToId)this._lastToId=e.callId;else return n(ps(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:d=u}=t;i&&!r&&(!e.default||x.und(c))&&(c=d),e.reverse&&([c,d]=[d,c]);const f=!bn(d,u);f&&(a.from=d),d=yt(d);const v=!bn(c,l);v&&this._focus(c);const g=Xh(e.to),{config:_}=a,{decay:w,velocity:p}=_;(r||i)&&(_.velocity=0),e.config&&!g&&h4(_,_t(e.config,s),e.config!==o.config?_t(o.config,s):void 0);let h=hn(this);if(!h||x.und(c))return n(Jt(this,!0));const y=x.und(e.reset)?i&&!e.default:!x.und(d)&&Vo(e.reset,s),m=y?d:this.get(),E=Aa(c),b=x.num(E)||x.arr(E)||ed(E),I=!g&&(!b||Vo(o.immediate||e.immediate,s));if(v){const oe=Qh(c);if(oe!==h.constructor)if(I)h=this._set(E);else throw Error(`Cannot animate between ${h.constructor.name} and ${oe.name}, as the "to" prop suggests`)}const N=h.constructor;let D=zt(c),F=!1;if(!D){const oe=y||!ff(this)&&f;(v||oe)&&(F=bn(Aa(m),E),D=!F),(!bn(a.immediate,I)&&!I||!bn(_.decay,w)||!bn(_.velocity,p))&&(D=!0)}if(F&&nr(this)&&(a.changed&&!y?D=!0:D||this._stop(l)),!g&&((D||zt(l))&&(a.values=h.getPayload(),a.toValues=zt(c)?null:N==Na?[1]:pt(E)),a.immediate!=I&&(a.immediate=I,!I&&!y&&this._set(l)),D)){const{onRest:oe}=a;Y(y4,je=>i0(this,e,je));const Z=Jt(this,fo(this,l));Eo(this._pendingCalls,Z),this._pendingCalls.add(n),a.changed&&J.batchedUpdates(()=>{var je;a.changed=!y,oe==null||oe(Z,this),y?_t(o.onRest,Z):(je=a.onStart)==null||je.call(a,Z,this)})}y&&this._set(m),g?n(JC(e.to,e,this._state,this)):D?this._start():nr(this)&&!v?this._pendingCalls.add(n):n(XC(m))}_focus(t){const e=this.animation;t!==e.to&&(G_(this)&&this._detach(),e.to=t,G_(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;zt(e)&&($s(e,this),ep(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;zt(t)&&Ra(t,this)}_set(t,e=!0){const n=yt(t);if(!x.und(n)){const r=hn(this);if(!r||!bn(n,r.getValue())){const i=Qh(n);!r||r.constructor!=i?wg(this,i.create(n)):r.setValue(n),r&&J.batchedUpdates(()=>{this._onChange(n,e)})}}return hn(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,ho(this,"onStart",Jt(this,fo(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),_t(this.animation.onChange,t,this)),_t(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;hn(this).reset(yt(t.to)),t.immediate||(t.fromValues=t.values.map(e=>e.lastPosition)),nr(this)||(t0(this,!0),co(this)||this._resume())}_resume(){cn.skipAnimation?this.finish():Xc.start(this)}_stop(t,e){if(nr(this)){t0(this,!1);const n=this.animation;Y(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),xa(this,{type:"idle",parent:this});const r=e?ps(this.get()):Jt(this.get(),fo(this,t??n.to));Eo(this._pendingCalls,r),n.changed&&(n.changed=!1,ho(this,"onRest",r,this))}}};function fo(t,e){const n=Aa(e),r=Aa(t.get());return bn(r,n)}function ek(t,e=t.loop,n=t.to){const r=_t(e);if(r){const i=r!==!0&&Eg(r),s=(i||t).reverse,o=!i||i.reset;return Da({...t,loop:e,default:!1,pause:void 0,to:!s||Xh(n)?n:void 0,from:o?t.from:void 0,reset:o,...i})}}function Da(t){const{to:e,from:n}=t=Eg(t),r=new Set;return x.obj(e)&&r0(e,r),x.obj(n)&&r0(n,r),t.keys=r.size?Array.from(r):null,t}function v4(t){const e=Da(t);return x.und(e.default)&&(e.default=rd(e)),e}function r0(t,e){En(t,(n,r)=>n!=null&&e.add(r))}var y4=["onStart","onRest","onChange","onPause","onResume"];function i0(t,e,n){t.animation[n]=e[n]!==KC(e,n)?GC(e[n],t.key):void 0}function ho(t,e,...n){var r,i,s,o;(i=(r=t.animation)[e])==null||i.call(r,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var _4=["onStart","onChange","onRest"],w4=1,tk=class{constructor(t,e){this.id=w4++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(const e in t){const n=t[e];x.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(Da(t)),this}start(t){let{queue:e}=this;return t?e=pt(t).map(Da):this.queue=[],this._flush?this._flush(this,e):(ok(this,e),rp(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;Y(pt(e),r=>n[r].stop(!!t))}else Oa(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(x.und(t))this.start({pause:!0});else{const e=this.springs;Y(pt(t),n=>e[n].pause())}return this}resume(t){if(x.und(t))this.start({pause:!1});else{const e=this.springs;Y(pt(t),n=>e[n].resume())}return this}each(t){En(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,jo(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!r&&this._started,o=i||s&&n.size?this.get():null;i&&e.size&&jo(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,jo(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;J.onFrame(this._onFrame)}};function rp(t,e){return Promise.all(e.map(n=>nk(t,n))).then(n=>Sg(t,n))}async function nk(t,e,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=e,u=x.obj(e.default)&&e.default;o&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);const c=x.arr(i)||x.fun(i)?i:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):Y(_4,_=>{const w=e[_];if(x.fun(w)){const p=t._events[_];e[_]=({finished:h,cancelled:y})=>{const m=p.get(w);m?(h||(m.finished=!1),y&&(m.cancelled=!0)):p.set(w,{value:null,finished:h||!1,cancelled:y||!1})},u&&(u[_]=e[_])}});const d=t._state;e.pause===!d.paused?(d.paused=e.pause,Eo(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);const f=(r||Object.keys(t.springs)).map(_=>t.springs[_].start(e)),v=e.cancel===!0||KC(e,"cancel")===!0;(c||v&&d.asyncId)&&f.push(QC(++t._lastAsyncId,{props:e,state:d,actions:{pause:Kh,resume:Kh,start(_,w){v?(Oa(d,t._lastAsyncId),w(ps(t))):(_.onRest=a,w(JC(c,_,d,t)))}}})),d.paused&&await new Promise(_=>{d.resumeQueue.add(_)});const g=Sg(t,await Promise.all(f));if(o&&g.finished&&!(n&&g.noop)){const _=ek(e,o,i);if(_)return ok(t,[_]),nk(t,_,!0)}return l&&J.batchedUpdates(()=>l(g,t,t.item)),g}function ip(t,e){const n={...t.springs};return e&&Y(pt(e),r=>{x.und(r.keys)&&(r=Da(r)),x.obj(r.to)||(r={...r,to:void 0}),sk(n,r,i=>ik(i))}),rk(t,n),n}function rk(t,e){En(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,$s(n,t))})}function ik(t,e){const n=new g4;return n.key=t,e&&$s(n,e),n}function sk(t,e,n){e.keys&&Y(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function ok(t,e){Y(e,n=>{sk(t.springs,n,r=>ik(r,t))})}var il=({children:t,...e})=>{const n=k.useContext(cc),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=JL(()=>({pause:r,immediate:i}),[r,i]);const{Provider:s}=cc;return k.createElement(s,{value:e},t)},cc=E4(il,{});il.Provider=cc.Provider;il.Consumer=cc.Consumer;function E4(t,e){return Object.assign(t,k.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var ak=()=>{const t=[],e=function(r){QL();const i=[];return Y(t,(s,o)=>{if(x.und(r))i.push(s.start());else{const a=n(r,s,o);a&&i.push(s.start(a))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){const i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return Y(t,r=>r.pause(...arguments)),this},e.resume=function(){return Y(t,r=>r.resume(...arguments)),this},e.set=function(r){Y(t,(i,s)=>{const o=x.fun(r)?r(s,i):r;o&&i.set(o)})},e.start=function(r){const i=[];return Y(t,(s,o)=>{if(x.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},e.stop=function(){return Y(t,r=>r.stop(...arguments)),this},e.update=function(r){return Y(t,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(r,i,s){return x.fun(r)?r(s,i):r};return e._getProps=n,e};function S4(t,e,n){const r=x.fun(e)&&e;r&&!n&&(n=[]);const i=k.useMemo(()=>r||arguments.length==3?ak():void 0,[]),s=k.useRef(0),o=yg(),a=k.useMemo(()=>({ctrls:[],queue:[],flush(p,h){const y=ip(p,h);return s.current>0&&!a.queue.length&&!Object.keys(y).some(E=>!p.springs[E])?rp(p,h):new Promise(E=>{rk(p,y),a.queue.push(()=>{E(rp(p,h))}),o()})}}),[]),l=k.useRef([...a.ctrls]),u=[],c=qh(t)||0;k.useMemo(()=>{Y(l.current.slice(t,c),p=>{Jh(p,i),p.stop(!0)}),l.current.length=t,d(c,t)},[t]),k.useMemo(()=>{d(0,Math.min(c,t))},n);function d(p,h){for(let y=p;y<h;y++){const m=l.current[y]||(l.current[y]=new tk(null,a.flush)),E=r?r(y,m):e[y];E&&(u[y]=v4(E))}}const f=l.current.map((p,h)=>ip(p,u[h])),v=k.useContext(il),g=qh(v),_=v!==g&&YC(v);ii(()=>{s.current++,a.ctrls=l.current;const{queue:p}=a;p.length&&(a.queue=[],Y(p,h=>h())),Y(l.current,(h,y)=>{i==null||i.add(h),_&&h.start({default:v});const m=u[y];m&&(qC(h,m.ref),h.ref?h.queue.push(m):h.start(m))})}),_g(()=>()=>{Y(a.ctrls,p=>p.stop(!0))});const w=f.map(p=>({...p}));return i?[w,i]:w}function lk(t,e){const n=x.fun(t),[[r],i]=S4(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,i]:r}function C4(t,e,n){const r=x.fun(e)&&e,{reset:i,sort:s,trail:o=0,expires:a=!0,exitBeforeEnter:l=!1,onDestroyed:u,ref:c,config:d}=r?r():e,f=k.useMemo(()=>r||arguments.length==3?ak():void 0,[]),v=pt(t),g=[],_=k.useRef(null),w=i?null:_.current;ii(()=>{_.current=g}),_g(()=>(Y(g,W=>{f==null||f.add(W.ctrl),W.ctrl.ref=f}),()=>{Y(_.current,W=>{W.expired&&clearTimeout(W.expirationId),Jh(W.ctrl,f),W.ctrl.stop(!0)})}));const p=I4(v,r?r():e,w),h=i&&_.current||[];ii(()=>Y(h,({ctrl:W,item:q,key:ue})=>{Jh(W,f),_t(u,q,ue)}));const y=[];if(w&&Y(w,(W,q)=>{W.expired?(clearTimeout(W.expirationId),h.push(W)):(q=y[q]=p.indexOf(W.key),~q&&(g[q]=W))}),Y(v,(W,q)=>{g[q]||(g[q]={key:p[q],item:W,phase:"mount",ctrl:new tk},g[q].ctrl.item=W)}),y.length){let W=-1;const{leave:q}=r?r():e;Y(y,(ue,ye)=>{const P=w[ye];~ue?(W=g.indexOf(P),g[W]={...P,item:v[ue]}):q&&g.splice(++W,0,P)})}x.fun(s)&&g.sort((W,q)=>s(W.item,q.item));let m=-o;const E=yg(),b=rd(e),I=new Map,N=k.useRef(new Map),D=k.useRef(!1);Y(g,(W,q)=>{const ue=W.key,ye=W.phase,P=r?r():e;let U,$;const Ee=_t(P.delay||0,ue);if(ye=="mount")U=P.enter,$="enter";else{const Me=p.indexOf(ue)<0;if(ye!="leave")if(Me)U=P.leave,$="leave";else if(U=P.update)$="update";else return;else if(!Me)U=P.enter,$="enter";else return}if(U=_t(U,W.item,q),U=x.obj(U)?Eg(U):{to:U},!U.config){const Me=d||b.config;U.config=_t(Me,W.item,q,$)}m+=o;const fe={...b,delay:Ee+m,ref:c,immediate:P.immediate,reset:!1,...U};if($=="enter"&&x.und(fe.from)){const Me=r?r():e,it=x.und(Me.initial)||w?Me.from:Me.initial;fe.from=_t(it,W.item,q)}const{onResolve:Qn}=fe;fe.onResolve=Me=>{_t(Qn,Me);const it=_.current,dt=it.find(Rt=>Rt.key===ue);if(dt&&!(Me.cancelled&&dt.phase!="update")&&dt.ctrl.idle){const Rt=it.every(Sn=>Sn.ctrl.idle);if(dt.phase=="leave"){const Sn=_t(a,dt.item);if(Sn!==!1){const Bs=Sn===!0?0:Sn;if(dt.expired=!0,!Rt&&Bs>0){Bs<=2147483647&&(dt.expirationId=setTimeout(E,Bs));return}}}Rt&&it.some(Sn=>Sn.expired)&&(N.current.delete(dt),l&&(D.current=!0),E())}};const ce=ip(W.ctrl,fe);$==="leave"&&l?N.current.set(W,{phase:$,springs:ce,payload:fe}):I.set(W,{phase:$,springs:ce,payload:fe})});const F=k.useContext(il),oe=qh(F),Z=F!==oe&&YC(F);ii(()=>{Z&&Y(g,W=>{W.ctrl.start({default:F})})},[F]),Y(I,(W,q)=>{if(N.current.size){const ue=g.findIndex(ye=>ye.key===q.key);g.splice(ue,1)}}),ii(()=>{Y(N.current.size?N.current:I,({phase:W,payload:q},ue)=>{const{ctrl:ye}=ue;ue.phase=W,f==null||f.add(ye),Z&&W=="enter"&&ye.start({default:F}),q&&(qC(ye,q.ref),(ye.ref||f)&&!D.current?ye.update(q):(ye.start(q),D.current&&(D.current=!1)))})},i?void 0:n);const je=W=>k.createElement(k.Fragment,null,g.map((q,ue)=>{const{springs:ye}=I.get(q)||q.ctrl,P=W({...ye},q.item,q,ue);return P&&P.type?k.createElement(P.type,{...P.props,key:x.str(q.key)||x.num(q.key)?q.key:q.ctrl.id,ref:P.ref}):P}));return f?[je,f]:je}var k4=1;function I4(t,{key:e,keys:n=e},r){if(n===null){const i=new Set;return t.map(s=>{const o=r&&r.find(a=>a.item===s&&a.phase!=="leave"&&!i.has(a));return o?(i.add(o),o.key):k4++})}return x.und(n)?t:x.fun(n)?t.map(n):pt(n)}var b4=class extends Cg{constructor(t,e){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=ba(...e);const n=this._get(),r=Qh(n);wg(this,r.create(n))}advance(t){const e=this._get(),n=this.get();bn(e,n)||(hn(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&s0(this._active)&&hf(this)}_get(){const t=x.arr(this.source)?this.source.map(yt):pt(yt(this.source));return this.calc(...t)}_start(){this.idle&&!s0(this._active)&&(this.idle=!1,Y(td(this),t=>{t.done=!1}),cn.skipAnimation?(J.batchedUpdates(()=>this.advance()),hf(this)):Xc.start(this))}_attach(){let t=1;Y(pt(this.source),e=>{zt(e)&&$s(e,this),ep(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))}),this.priority=t,this._start()}_detach(){Y(pt(this.source),t=>{zt(t)&&Ra(t,this)}),this._active.clear(),hf(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=pt(this.source).reduce((e,n)=>Math.max(e,(ep(n)?n.priority:0)+1),0))}};function T4(t){return t.idle!==!1}function s0(t){return!t.size||Array.from(t).every(T4)}function hf(t){t.idle||(t.idle=!0,Y(td(t),e=>{e.done=!0}),xa(t,{type:"idle",parent:t}))}cn.assign({createStringInterpolator:WC,to:(t,e)=>new b4(t,e)});var uk=/^--/;function x4(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!uk.test(t)&&!(Wo.hasOwnProperty(t)&&Wo[t])?e+"px":(""+e).trim()}var o0={};function R4(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:s,scrollLeft:o,viewBox:a,...l}=e,u=Object.values(l),c=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:o0[d]||(o0[d]=d.replace(/([A-Z])/g,f=>"-"+f.toLowerCase())));i!==void 0&&(t.textContent=i);for(const d in r)if(r.hasOwnProperty(d)){const f=x4(d,r[d]);uk.test(d)?t.style.setProperty(d,f):t.style[d]=f}c.forEach((d,f)=>{t.setAttribute(d,u[f])}),s!==void 0&&(t.scrollTop=s),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var Wo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P4=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),N4=["Webkit","Ms","Moz","O"];Wo=Object.keys(Wo).reduce((t,e)=>(N4.forEach(n=>t[P4(n,e)]=t[e]),t),Wo);var A4=/^(matrix|translate|scale|rotate|skew)/,O4=/^(translate)/,D4=/^(rotate|skew)/,pf=(t,e)=>x.num(t)&&t!==0?t+e:t,ou=(t,e)=>x.arr(t)?t.every(n=>ou(n,e)):x.num(t)?t===e:parseFloat(t)===e,M4=class extends nd{constructor({x:t,y:e,z:n,...r}){const i=[],s=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>pf(a,"px")).join(",")})`,ou(o,0)])),En(r,(o,a)=>{if(a==="transform")i.push([o||""]),s.push(l=>[l,l===""]);else if(A4.test(a)){if(delete r[a],x.und(o))return;const l=O4.test(a)?"px":D4.test(a)?"deg":"";i.push(pt(o)),s.push(a==="rotate3d"?([u,c,d,f])=>[`rotate3d(${u},${c},${d},${pf(f,l)})`,ou(f,0)]:u=>[`${a}(${u.map(c=>pf(c,l)).join(",")})`,ou(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new L4(i,s)),super(r)}},L4=class extends jC{constructor(t,e){super(),this.inputs=t,this.transforms=e,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return Y(this.inputs,(n,r)=>{const i=yt(n[0]),[s,o]=this.transforms[r](x.arr(i)?i:n.map(yt));t+=" "+s,e=e&&o}),e?"none":t}observerAdded(t){t==1&&Y(this.inputs,e=>Y(e,n=>zt(n)&&$s(n,this)))}observerRemoved(t){t==0&&Y(this.inputs,e=>Y(e,n=>zt(n)&&Ra(n,this)))}eventObserved(t){t.type=="change"&&(this._value=null),xa(this,t)}},F4=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];cn.assign({batchedUpdates:Sw.unstable_batchedUpdates,createStringInterpolator:WC,colors:TL});var U4=o4(F4,{applyAnimatedValues:R4,createAnimatedStyle:t=>new M4(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),kg=U4.animated;function j4({viewData:t}){const e="jac-mock-schedule-maker",[n,r]=k.useState(()=>{const a=window.localStorage.getItem(e);return a?JSON.parse(a):[]}),i=k.useRef(n.length),{chosenClasses:s}=k.useContext(id);function o(a){r([...n,{id:i.current,vData:a,data:s}]);do i.current+=1;while(n.map(l=>l.id).includes(i.current))}return k.useEffect(()=>{window.localStorage.setItem(e,JSON.stringify(n))},[n]),O.jsxs("section",{className:"md:row-span-1 md:col-span-full bg-c1 rounded-xl box-border flex max-md:order-1",children:[O.jsx("div",{className:"md:m-4 m-2 bg-c2 hover:bg-c3 active:bg-c4 transition rounded-md flex items-center justify-center md:p-4 p-2 cursor-pointer shrink-0",onClick:()=>o(t),children:O.jsx(xi,{icon:gx,className:"md:text-4xl text-xl"})}),O.jsx("div",{className:"flex gap-2 overflow-auto md:p-4 p-2 basis-full md:mr-4 mr-2",children:n.map(a=>O.jsx(V4,{i:a,savedSchedule:n,setSavedSchedule:r},a.id))})]})}function z4({blocksToShow:t}){return t.map(e=>{const n=Object.entries(e.time).flat();return O.jsx("div",{className:"z-10 border border-[black] box-border rounded-md",style:{gridColumnStart:n[0],gridRowStart:n[1][0],gridRowEnd:n[1][1],backgroundColor:e.color}},e.code+e.section+n[0])})}function V4({i:t,savedSchedule:e,setSavedSchedule:n}){const{setChosenClasses:r}=k.useContext(id),[i,s]=lk(()=>({from:{opacity:0,y:30,scale:1},to:{opacity:1,y:0}}),[]);function o(l){l.stopPropagation(),s.start({from:{opacity:1,scale:1},to:{opacity:0,scale:0},onResolve:()=>{n(e.filter(u=>u.id!==t.id))}})}function a(){r(t.data)}return O.jsxs(kg.div,{className:"h-full aspect-[1.61/1] bg-[white] rounded-md grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 relative hover:bg-slate-200 md:shadow-lg shadow-md cursor-pointer",style:i,onClick:a,children:[t.vData.map((l,u)=>O.jsx(z4,{blocksToShow:l},u)),O.jsx(xi,{icon:fx,className:"absolute opacity-10 m-1 bottom-0 right-0 hover:opacity-50 cursor-pointer",onClick:o})]},t.id)}function W4({viewData:t}){const[e,n]=k.useState([]);return k.useEffect(()=>{n(()=>t.map((r,i)=>O.jsx(k.Fragment,{children:O.jsx($4,{blocksToShow:r})},i)))},[t]),O.jsxs("section",{className:"md:col-span-7 md:row-span-5 max-md:min-h-[60%] col-span-full bg-c1 rounded-lg md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-2",children:[O.jsx("div",{className:"col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]",children:[...Array(21).keys()].map(r=>O.jsxs("span",{className:"translate-y-1/2 box-border md:pr-4 md:text-xs text-[0.5rem] flex items-center justify-end pr-2",children:[Math.floor(r/2)+8,":",r%2===0?"00":"30"]},r))}),O.jsxs("div",{className:"col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative",children:[O.jsx("div",{className:"absolute w-full h-full grid grid-rows-[repeat(20,minmax(0,1fr))] row-start-2",children:[...Array(19).keys()].map(r=>O.jsx("div",{children:O.jsx(a0,{n:r,lineProperty:"width"})},`horizontal-${r}`))}),O.jsxs("div",{className:"absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]",children:[O.jsx("div",{className:"row-span-1 col-span-full"}),[...Array(4).keys()].map(r=>O.jsx("div",{className:"row-[span_20/span_20]",children:O.jsx(a0,{n:r,lineProperty:"height"})},`vertical-${r}`))]}),["Monday","Tuesday","Wednesday","Thursday","Friday"].map(r=>{const i=window.innerWidth>=1100?r:r.slice(0,3);return O.jsx("span",{className:"text-center font-semibold md:text-base text-xs",children:i},r)}),O.jsx("div",{className:"grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg md:shadow-lg shadow-md",children:e})]})]})}function a0({n:t,lineProperty:e}){const n=lk({from:{[e]:"0%"},to:{[e]:"100%"},delay:e==="height"?t*100:t*30}),r=e==="height"?"border-r-2 w-full left-[1px]":"border-b-2 h-full top-[1px]";return O.jsx(kg.div,{className:`${e==="height"?"w-full py-2":"h-full px-2"} box-border`,style:n,children:O.jsx("div",{className:`${r} border-[hsl(0,0%,77%)] h-full w-full relative`})})}function $4({blocksToShow:t}){const e=C4(t,{from:{y:-20,scale:0},enter:{y:0,scale:1},leave:{y:-20,scale:0},trail:50}),{chosenClasses:n,setChosenClasses:r}=k.useContext(id);return e((i,s)=>{const o=Object.entries(s.time).flat();return O.jsxs(kg.div,{className:"lg:text-base sm:text-xs text-[8px] leading-[10px] z-10 p-2 border border-[black] outline outline-1 outline-[black] text-[black] cursor-pointer rounded-xl",style:{gridColumnStart:o[0],gridRowStart:o[1][0],gridRowEnd:o[1][1],backgroundColor:s.color,...i},onClick:()=>{r(n.filter(a=>a.code!==s.code))},children:[O.jsx("p",{className:"lg:line-clamp-1",children:s.code}),O.jsx("p",{children:s.section})]},s.code+s.section+o[0])})}function sp(){return O.jsx("div",{className:"w-full h-full flex items-center justify-center",children:O.jsx("p",{children:"Wait it's cooking"})})}const B4=k.lazy(()=>em(()=>import("./Classes-21721700.js"),[]));function H4({classes:t,setLoading:e}){const[n,r]=k.useState(""),i=k.useDeferredValue(n),[s,o]=k.useState(!1);return O.jsxs("section",{className:"md:col-span-5 md:row-span-5 bg-c1 rounded-lg box-border flex flex-col max-md:order-3",children:[O.jsxs("label",{className:"relative md:mx-4 mx-2 md:mt-4 mt-2",children:[O.jsx(xi,{icon:px,className:"absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer",onMouseOver:()=>o(!0),onMouseOut:()=>o(!1)}),s&&O.jsxs("div",{className:"absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-xs w-[70dvw]",children:[O.jsx("p",{children:"You can search any keyword for the class you are looking for."}),O.jsx("br",{}),O.jsx("p",{children:'Separate your keywords with commas. E.g. "Biology, 101" will search for all biology 101-NYA-05 and biology 101-DCN-05 classes.'}),O.jsx("br",{}),"Examples: ",O.jsx("br",{}),O.jsxs("ul",{className:"pl-4",children:[O.jsxs("li",{className:"list-disc",children:[O.jsxs("span",{className:"font-bold",children:["r",">","4.5"]})," (teachers with +4.5/5 rating. Symbol can be ","<"," , ",">"," or ","="," )"]}),O.jsxs("li",{className:"list-disc",children:[O.jsxs("span",{className:"font-bold",children:["s",">","80"]})," (teachers with +80/100 score. Symbol can be ","<"," , ",">"," or ","="," )"]}),O.jsxs("li",{className:"list-disc",children:[O.jsx("span",{className:"font-bold",children:"Linear Al, WF"})," (Linear Algebra I/II/III that has classes on Wednesday and Friday. DAYS must be in ALL CAPS)"]}),O.jsxs("li",{className:"list-disc",children:[O.jsx("span",{className:"font-bold",children:"honours"}),' (honours classes. Special keywords include "honours" and "blended")']}),O.jsxs("li",{className:"list-disc",children:[O.jsx("span",{className:"font-bold",children:"p=Steven Randall, blended"})," ",'(blended classes by teacher who has "Steven Randall" in their name. Must have "p=" before)']}),O.jsxs("li",{className:"list-disc",children:[O.jsx("span",{className:"font-bold",children:"ENGLISH, haunted house"}),' (all English class that has "haunted house" in their name. COURSE NAME must be in ALL CAPS)']})]})]}),O.jsx("input",{className:"bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md",placeholder:"COURSE, code, professor, rating, ...",value:n,onChange:a=>r(a.target.value)})]}),O.jsx("div",{className:"w-full h-full box-border rounded-lg overflow-y-auto md:p-4 p-2",children:O.jsx(k.Suspense,{fallback:O.jsx(sp,{}),children:i===n?O.jsx(B4,{input:i,classes:t,setLoading:e}):O.jsx(sp,{})})})]})}const G4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),K4=k.lazy(()=>em(()=>Promise.resolve().then(()=>G4),void 0)),id=k.createContext({chosenClasses:[],setChosenClasses:()=>{}});function Y4(){const[t,e]=k.useState([]),[n,r]=k.useState(!1),[i,s]=k.useState([]),o=k.useMemo(()=>a(i),[i]);k.useEffect(()=>{l(o)&&(s(i.slice(0,-1)),alert("The chosen class overlaps with another!"))},[o]),k.useEffect(()=>{async function u(c,d){try{const f=await fetch(c);if(!f.ok)throw new Error("Network response was not ok");const v=await f.json();d(v)}catch(f){console.log(f)}}u("/me-schedule-maker/data/all.json",e)},[]);function a(u){const c=["M","T","W","R","F"],d=[...Array(21).keys()].map(g=>(g%2===0?g*50+800:Math.floor(g/2)*2*50+830).toFixed(0)),f=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(190,97%,85%)"];return u.map((g,_)=>{const w=structuredClone(Object.entries(g.lecture)),p=structuredClone(Object.entries(g.lab));return w.filter(y=>!["title","prof","rating"].includes(y[0])).concat(p.filter(y=>!["title","prof","rating"].includes(y[0]))).flatMap(y=>{const m=y[0].split("").filter(N=>N!=="\0").filter(N=>N==="S"?(alert("There is class on Saturday as well"),!1):!0),E=y[1],b=E.split("-")[0].replace("\0",""),I=E.split("-")[1].replace("\0","");return m.flatMap(N=>{const D=d.findIndex(Z=>Number(Z)===Number(b))+1,F=d.findIndex(Z=>Number(Z)===Number(I))+1,oe=c.findIndex(Z=>Z===N.replace("\0",""))+1;return{code:g.code,section:g.section,time:{[`${oe}`]:[D,F]},color:f[_]}})})})}function l(u){const c=u.flat().map(w=>w.time),d=c.filter(w=>w[1]).flatMap(w=>Object.values(w)),f=c.filter(w=>w[2]).flatMap(w=>Object.values(w)),v=c.filter(w=>w[3]).flatMap(w=>Object.values(w)),g=c.filter(w=>w[4]).flatMap(w=>Object.values(w)),_=c.filter(w=>w[5]).flatMap(w=>Object.values(w));return!![d,f,v,g,_].some(w=>{if(w.length<=1)return!1;const p=w.at(-1);return!!w.slice(0,-1).some(h=>Number(h[0])>Number(p[0])?Number(p[1])>Number(h[0]):Number(h[0])<Number(p[0])?Number(p[0])<Number(h[1]):Number(h[0])===Number(p[0]))})}return O.jsx(id.Provider,{value:{chosenClasses:i,setChosenClasses:s},children:O.jsx("section",{className:"w-full h-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border md:gap-4 gap-2 md:p-4 p-2 text-c9 flex flex-col md:text-base text-xs overflow-auto",children:O.jsxs(k.Suspense,{fallback:O.jsx(sp,{}),children:[O.jsx(K4,{classes:t,setLoading:r}),n&&O.jsxs(O.Fragment,{children:[O.jsx(W4,{viewData:o}),O.jsx(j4,{viewData:o})]})]})})})}const q4=k.lazy(()=>em(()=>import("./LoginPage-b6dd0d54.js"),[])),Q4=rx([{path:"/",element:O.jsx(q4,{})},{path:"/forgot",element:O.jsx(cx,{})},{path:"/schedule",element:O.jsx(Y4,{})},{path:"/users/:uid",element:O.jsx(yL,{})},{path:"/email-verification-confirmation",element:O.jsx(ux,{})}],{basename:"/me-schedule-maker/"});function X4(){return O.jsx(O.Fragment,{children:O.jsx(qT,{router:Q4})})}mf.createRoot(document.getElementById("root")).render(O.jsx(fc.StrictMode,{children:O.jsx(X4,{})}));export{id as C,xi as F,J4 as L,t3 as a,r3 as b,s3 as c,lk as d,kg as e,Z4 as f,o3 as g,e3 as h,O as j,k as r,i3 as s,Dw as u,a3 as v};
