function Ck(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function U1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z1={exports:{}},$c={},$1={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),kk=Symbol.for("react.portal"),xk=Symbol.for("react.fragment"),Tk=Symbol.for("react.strict_mode"),Nk=Symbol.for("react.profiler"),Rk=Symbol.for("react.provider"),Pk=Symbol.for("react.context"),Ak=Symbol.for("react.forward_ref"),Ok=Symbol.for("react.suspense"),Mk=Symbol.for("react.memo"),Lk=Symbol.for("react.lazy"),zv=Symbol.iterator;function Dk(t){return t===null||typeof t!="object"?null:(t=zv&&t[zv]||t["@@iterator"],typeof t=="function"?t:null)}var V1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,B1={};function eo(t,e,n){this.props=t,this.context=e,this.refs=B1,this.updater=n||V1}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H1(){}H1.prototype=eo.prototype;function sm(t,e,n){this.props=t,this.context=e,this.refs=B1,this.updater=n||V1}var om=sm.prototype=new H1;om.constructor=sm;W1(om,eo.prototype);om.isPureReactComponent=!0;var $v=Array.isArray,q1=Object.prototype.hasOwnProperty,am={current:null},G1={key:!0,ref:!0,__self:!0,__source:!0};function K1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)q1.call(e,r)&&!G1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:il,type:t,key:s,ref:o,props:i,_owner:am.current}}function Fk(t,e){return{$$typeof:il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===il}function jk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vv=/\/+/g;function Qd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jk(""+t.key):e.toString(36)}function hu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case il:case kk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qd(o,0):r,$v(i)?(n="",t!=null&&(n=t.replace(Vv,"$&/")+"/"),hu(i,e,n,"",function(u){return u})):i!=null&&(lm(i)&&(i=Fk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$v(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Qd(s,a);o+=hu(s,e,n,l,i)}else if(l=Dk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Qd(s,a++),o+=hu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var r=[],i=0;return hu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Uk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},pu={transition:null},zk={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:pu,ReactCurrentOwner:am};ue.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=eo;ue.Fragment=xk;ue.Profiler=Nk;ue.PureComponent=sm;ue.StrictMode=Tk;ue.Suspense=Ok;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zk;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)q1.call(e,l)&&!G1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:il,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:Pk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rk,_context:t},t.Consumer=t};ue.createElement=K1;ue.createFactory=function(t){var e=K1.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:Ak,render:t}};ue.isValidElement=lm;ue.lazy=function(t){return{$$typeof:Lk,_payload:{_status:-1,_result:t},_init:Uk}};ue.memo=function(t,e){return{$$typeof:Mk,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=pu.transition;pu.transition={};try{t()}finally{pu.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return It.current.useCallback(t,e)};ue.useContext=function(t){return It.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return It.current.useDeferredValue(t)};ue.useEffect=function(t,e){return It.current.useEffect(t,e)};ue.useId=function(){return It.current.useId()};ue.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return It.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};ue.useRef=function(t){return It.current.useRef(t)};ue.useState=function(t){return It.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return It.current.useTransition()};ue.version="18.2.0";$1.exports=ue;var b=$1.exports;const Vc=U1(b),$k=Ck({__proto__:null,default:Vc},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vk=b,Wk=Symbol.for("react.element"),Bk=Symbol.for("react.fragment"),Hk=Object.prototype.hasOwnProperty,qk=Vk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gk={key:!0,ref:!0,__self:!0,__source:!0};function Y1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Hk.call(e,r)&&!Gk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Wk,type:t,key:s,ref:o,props:i,_owner:qk.current}}$c.Fragment=Bk;$c.jsx=Y1;$c.jsxs=Y1;z1.exports=$c;var h=z1.exports,sh={},Q1={exports:{}},Vt={},J1={exports:{}},X1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var H=N.length;N.push(z);e:for(;0<H;){var ke=H-1>>>1,ye=N[ke];if(0<i(ye,z))N[ke]=z,N[H]=ye,H=ke;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],H=N.pop();if(H!==z){N[0]=H;e:for(var ke=0,ye=N.length,_r=ye>>>1;ke<_r;){var me=2*(ke+1)-1,Be=N[me],ft=me+1,_t=N[ft];if(0>i(Be,H))ft<ye&&0>i(_t,Be)?(N[ke]=_t,N[ft]=H,ke=ft):(N[ke]=Be,N[me]=H,ke=me);else if(ft<ye&&0>i(_t,H))N[ke]=_t,N[ft]=H,ke=ft;else break e}}return z}function i(N,z){var H=N.sortIndex-z.sortIndex;return H!==0?H:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,p=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function g(N){if(_=!1,w(N),!p)if(n(l)!==null)p=!0,fe(I);else{var z=n(u);z!==null&&ve(g,z.startTime-N)}}function I(N,z){p=!1,_&&(_=!1,v(A),A=-1),y=!0;var H=f;try{for(w(z),d=n(l);d!==null&&(!(d.expirationTime>z)||N&&!ce());){var ke=d.callback;if(typeof ke=="function"){d.callback=null,f=d.priorityLevel;var ye=ke(d.expirationTime<=z);z=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&r(l),w(z)}else r(l);d=n(l)}if(d!==null)var _r=!0;else{var me=n(u);me!==null&&ve(g,me.startTime-z),_r=!1}return _r}finally{d=null,f=H,y=!1}}var C=!1,x=null,A=-1,D=5,F=-1;function ce(){return!(t.unstable_now()-F<D)}function re(){if(x!==null){var N=t.unstable_now();F=N;var z=!0;try{z=x(!0,N)}finally{z?Ue():(C=!1,x=null)}}else C=!1}var Ue;if(typeof m=="function")Ue=function(){m(re)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,Q=B.port2;B.port1.onmessage=re,Ue=function(){Q.postMessage(null)}}else Ue=function(){E(re,0)};function fe(N){x=N,C||(C=!0,Ue())}function ve(N,z){A=E(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){p||y||(p=!0,fe(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var H=f;f=z;try{return N()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=f;f=N;try{return z()}finally{f=H}},t.unstable_scheduleCallback=function(N,z,H){var ke=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ke+H:ke):H=ke,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=H+ye,N={id:c++,callback:z,priorityLevel:N,startTime:H,expirationTime:ye,sortIndex:-1},H>ke?(N.sortIndex=H,e(u,N),n(l)===null&&N===n(u)&&(_?(v(A),A=-1):_=!0,ve(g,H-ke))):(N.sortIndex=ye,e(l,N),p||y||(p=!0,fe(I))),N},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(N){var z=f;return function(){var H=f;f=z;try{return N.apply(this,arguments)}finally{f=H}}}})(X1);J1.exports=X1;var Kk=J1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=b,$t=Kk;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ew=new Set,ha={};function qi(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(ha[t]=e,t=0;t<e.length;t++)ew.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oh=Object.prototype.hasOwnProperty,Yk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wv={},Bv={};function Qk(t){return oh.call(Bv,t)?!0:oh.call(Wv,t)?!1:Yk.test(t)?Bv[t]=!0:(Wv[t]=!0,!1)}function Jk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xk(t,e,n,r){if(e===null||typeof e>"u"||Jk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var um=/[\-:]([a-z])/g;function cm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(um,cm);dt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(um,cm);dt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(um,cm);dt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function dm(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xk(e,n,i,r)&&(n=null),r||i===null?Qk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),uh=Symbol.for("react.suspense_list"),pm=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),rw=Symbol.for("react.offscreen"),Hv=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Hv&&t[Hv]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Jd;function jo(t){if(Jd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jd=e&&e[1]||""}return`
`+Jd+t}var Xd=!1;function Zd(t,e){if(!t||Xd)return"";Xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function Zk(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=Zd(t.type,!1),t;case 11:return t=Zd(t.type.render,!1),t;case 1:return t=Zd(t.type,!0),t;default:return""}}function ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case ah:return"Profiler";case fm:return"StrictMode";case lh:return"Suspense";case uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nw:return(t.displayName||"Context")+".Consumer";case tw:return(t._context.displayName||"Context")+".Provider";case hm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pm:return e=t.displayName||null,e!==null?e:ch(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return ch(t(e))}catch{}}return null}function ex(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ch(e);case 8:return e===fm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tx(t){var e=iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dl(t){t._valueTracker||(t._valueTracker=tx(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dh(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ow(t,e){e=e.checked,e!=null&&dm(t,"checked",e,!1)}function fh(t,e){ow(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||ju(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Uo(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function aw(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nx=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){nx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function cw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function dw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rx=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gh(t,e){if(e){if(rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _h=null,bs=null,Is=null;function Qv(t){if(t=al(t)){if(typeof _h!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Gc(e),_h(t.stateNode,t.type,e))}}function fw(t){bs?Is?Is.push(t):Is=[t]:bs=t}function hw(){if(bs){var t=bs,e=Is;if(Is=bs=null,Qv(t),e)for(t=0;t<e.length;t++)Qv(e[t])}}function pw(t,e){return t(e)}function mw(){}var ef=!1;function gw(t,e,n){if(ef)return t(e,n);ef=!0;try{return pw(t,e,n)}finally{ef=!1,(bs!==null||Is!==null)&&(mw(),hw())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var wh=!1;if(Zn)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){wh=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{wh=!1}function ix(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var qo=!1,Uu=null,zu=!1,Eh=null,sx={onError:function(t){qo=!0,Uu=t}};function ox(t,e,n,r,i,s,o,a,l){qo=!1,Uu=null,ix.apply(sx,arguments)}function ax(t,e,n,r,i,s,o,a,l){if(ox.apply(this,arguments),qo){if(qo){var u=Uu;qo=!1,Uu=null}else throw Error(P(198));zu||(zu=!0,Eh=u)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jv(t){if(Gi(t)!==t)throw Error(P(188))}function lx(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jv(i),t;if(s===r)return Jv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function yw(t){return t=lx(t),t!==null?_w(t):null}function _w(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_w(t);if(e!==null)return e;t=t.sibling}return null}var ww=$t.unstable_scheduleCallback,Xv=$t.unstable_cancelCallback,ux=$t.unstable_shouldYield,cx=$t.unstable_requestPaint,Ge=$t.unstable_now,dx=$t.unstable_getCurrentPriorityLevel,gm=$t.unstable_ImmediatePriority,Ew=$t.unstable_UserBlockingPriority,$u=$t.unstable_NormalPriority,fx=$t.unstable_LowPriority,bw=$t.unstable_IdlePriority,Wc=null,Nn=null;function hx(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:gx,px=Math.log,mx=Math.LN2;function gx(t){return t>>>=0,t===0?32:31-(px(t)/mx|0)|0}var jl=64,Ul=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zo(a):(s&=o,s!==0&&(r=zo(s)))}else o=n&~i,o!==0?r=zo(o):s!==0&&(r=zo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function vx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=vx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iw(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function _x(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function Sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cw,ym,kw,xw,Tw,Ih=!1,zl=[],$r=null,Vr=null,Wr=null,ga=new Map,va=new Map,Nr=[],wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zv(t,e){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=al(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ex(t,e,n,r,i){switch(e){case"focusin":return $r=Eo($r,t,e,n,r,i),!0;case"dragenter":return Vr=Eo(Vr,t,e,n,r,i),!0;case"mouseover":return Wr=Eo(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,Eo(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,va.set(s,Eo(va.get(s)||null,t,e,n,r,i)),!0}return!1}function Nw(t){var e=_i(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=vw(n),e!==null){t.blockedOn=e,Tw(t.priority,function(){kw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yh=r,n.target.dispatchEvent(r),yh=null}else return e=al(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function ey(t,e,n){mu(t)&&n.delete(e)}function bx(){Ih=!1,$r!==null&&mu($r)&&($r=null),Vr!==null&&mu(Vr)&&(Vr=null),Wr!==null&&mu(Wr)&&(Wr=null),ga.forEach(ey),va.forEach(ey)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ih||(Ih=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,bx)))}function ya(t){function e(i){return bo(i,t)}if(0<zl.length){bo(zl[0],t);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for($r!==null&&bo($r,t),Vr!==null&&bo(Vr,t),Wr!==null&&bo(Wr,t),ga.forEach(e),va.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Nw(n),n.blockedOn===null&&Nr.shift()}var Ss=dr.ReactCurrentBatchConfig,Wu=!0;function Ix(t,e,n,r){var i=ge,s=Ss.transition;Ss.transition=null;try{ge=1,_m(t,e,n,r)}finally{ge=i,Ss.transition=s}}function Sx(t,e,n,r){var i=ge,s=Ss.transition;Ss.transition=null;try{ge=4,_m(t,e,n,r)}finally{ge=i,Ss.transition=s}}function _m(t,e,n,r){if(Wu){var i=Sh(t,e,n,r);if(i===null)ff(t,e,r,Bu,n),Zv(t,r);else if(Ex(i,t,e,n,r))r.stopPropagation();else if(Zv(t,r),e&4&&-1<wx.indexOf(t)){for(;i!==null;){var s=al(i);if(s!==null&&Cw(s),s=Sh(t,e,n,r),s===null&&ff(t,e,r,Bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ff(t,e,r,null,n)}}var Bu=null;function Sh(t,e,n,r){if(Bu=null,t=mm(r),t=_i(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bu=t,null}function Rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dx()){case gm:return 1;case Ew:return 4;case $u:case fx:return 16;case bw:return 536870912;default:return 16}default:return 16}}var Lr=null,wm=null,gu=null;function Pw(){if(gu)return gu;var t,e=wm,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gu=i.slice(t,1<r?1-r:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function ty(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:ty,this.isPropagationStopped=ty,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Em=Wt(to),ol=je({},to,{view:0,detail:0}),Cx=Wt(ol),nf,rf,Io,Bc=je({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(nf=t.screenX-Io.screenX,rf=t.screenY-Io.screenY):rf=nf=0,Io=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),ny=Wt(Bc),kx=je({},Bc,{dataTransfer:0}),xx=Wt(kx),Tx=je({},ol,{relatedTarget:0}),sf=Wt(Tx),Nx=je({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=Wt(Nx),Px=je({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=Wt(Px),Ox=je({},to,{data:0}),ry=Wt(Ox),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dx[t])?!!e[t]:!1}function bm(){return Fx}var jx=je({},ol,{key:function(t){if(t.key){var e=Mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ux=Wt(jx),zx=je({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iy=Wt(zx),$x=je({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),Vx=Wt($x),Wx=je({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=Wt(Wx),Hx=je({},Bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=Wt(Hx),Gx=[9,13,27,32],Im=Zn&&"CompositionEvent"in window,Go=null;Zn&&"documentMode"in document&&(Go=document.documentMode);var Kx=Zn&&"TextEvent"in window&&!Go,Aw=Zn&&(!Im||Go&&8<Go&&11>=Go),sy=String.fromCharCode(32),oy=!1;function Ow(t,e){switch(t){case"keyup":return Gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Yx(t,e){switch(t){case"compositionend":return Mw(e);case"keypress":return e.which!==32?null:(oy=!0,sy);case"textInput":return t=e.data,t===sy&&oy?null:t;default:return null}}function Qx(t,e){if(is)return t==="compositionend"||!Im&&Ow(t,e)?(t=Pw(),gu=wm=Lr=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Aw&&e.locale!=="ko"?null:e.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ay(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jx[t.type]:e==="textarea"}function Lw(t,e,n,r){fw(r),e=Hu(e,"onChange"),0<e.length&&(n=new Em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ko=null,_a=null;function Xx(t){qw(t,0)}function Hc(t){var e=as(t);if(sw(e))return t}function Zx(t,e){if(t==="change")return e}var Dw=!1;if(Zn){var of;if(Zn){var af="oninput"in document;if(!af){var ly=document.createElement("div");ly.setAttribute("oninput","return;"),af=typeof ly.oninput=="function"}of=af}else of=!1;Dw=of&&(!document.documentMode||9<document.documentMode)}function uy(){Ko&&(Ko.detachEvent("onpropertychange",Fw),_a=Ko=null)}function Fw(t){if(t.propertyName==="value"&&Hc(_a)){var e=[];Lw(e,_a,t,mm(t)),gw(Xx,e)}}function eT(t,e,n){t==="focusin"?(uy(),Ko=e,_a=n,Ko.attachEvent("onpropertychange",Fw)):t==="focusout"&&uy()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(_a)}function nT(t,e){if(t==="click")return Hc(e)}function rT(t,e){if(t==="input"||t==="change")return Hc(e)}function iT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:iT;function wa(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oh.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function cy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dy(t,e){var n=cy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cy(n)}}function jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uw(){for(var t=window,e=ju();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ju(t.document)}return e}function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sT(t){var e=Uw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jw(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dy(n,s);var o=dy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oT=Zn&&"documentMode"in document&&11>=document.documentMode,ss=null,Ch=null,Yo=null,kh=!1;function fy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kh||ss==null||ss!==ju(r)||(r=ss,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&wa(Yo,r)||(Yo=r,r=Hu(Ch,"onSelect"),0<r.length&&(e=new Em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},lf={},zw={};Zn&&(zw=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function qc(t){if(lf[t])return lf[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zw)return lf[t]=e[n];return t}var $w=qc("animationend"),Vw=qc("animationiteration"),Ww=qc("animationstart"),Bw=qc("transitionend"),Hw=new Map,hy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(t,e){Hw.set(t,e),qi(e,[t])}for(var uf=0;uf<hy.length;uf++){var cf=hy[uf],aT=cf.toLowerCase(),lT=cf[0].toUpperCase()+cf.slice(1);ai(aT,"on"+lT)}ai($w,"onAnimationEnd");ai(Vw,"onAnimationIteration");ai(Ww,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(Bw,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function py(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ax(r,e,void 0,t),t.currentTarget=null}function qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;py(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;py(i,a,u),s=l}}}if(zu)throw t=Eh,zu=!1,Eh=null,t}function xe(t,e){var n=e[Ph];n===void 0&&(n=e[Ph]=new Set);var r=t+"__bubble";n.has(r)||(Gw(e,t,2,!1),n.add(r))}function df(t,e,n){var r=0;e&&(r|=4),Gw(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[Wl]){t[Wl]=!0,ew.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||df(n,!1,t),df(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,df("selectionchange",!1,e))}}function Gw(t,e,n,r){switch(Rw(e)){case 1:var i=Ix;break;case 4:i=Sx;break;default:i=_m}n=i.bind(null,e,n,t),i=void 0,!wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ff(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_i(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gw(function(){var u=s,c=mm(n),d=[];e:{var f=Hw.get(t);if(f!==void 0){var y=Em,p=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":y=Ux;break;case"focusin":p="focus",y=sf;break;case"focusout":p="blur",y=sf;break;case"beforeblur":case"afterblur":y=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vx;break;case $w:case Vw:case Ww:y=Rx;break;case Bw:y=Bx;break;case"scroll":y=Cx;break;case"wheel":y=qx;break;case"copy":case"cut":case"paste":y=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=iy}var _=(e&4)!==0,E=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var m=u,w;m!==null;){w=m;var g=w.stateNode;if(w.tag===5&&g!==null&&(w=g,v!==null&&(g=ma(m,v),g!=null&&_.push(ba(m,g,w)))),E)break;m=m.return}0<_.length&&(f=new y(f,p,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==yh&&(p=n.relatedTarget||n.fromElement)&&(_i(p)||p[er]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(p=n.relatedTarget||n.toElement,y=u,p=p?_i(p):null,p!==null&&(E=Gi(p),p!==E||p.tag!==5&&p.tag!==6)&&(p=null)):(y=null,p=u),y!==p)){if(_=ny,g="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=iy,g="onPointerLeave",v="onPointerEnter",m="pointer"),E=y==null?f:as(y),w=p==null?f:as(p),f=new _(g,m+"leave",y,n,c),f.target=E,f.relatedTarget=w,g=null,_i(c)===u&&(_=new _(v,m+"enter",p,n,c),_.target=w,_.relatedTarget=E,g=_),E=g,y&&p)t:{for(_=y,v=p,m=0,w=_;w;w=Ji(w))m++;for(w=0,g=v;g;g=Ji(g))w++;for(;0<m-w;)_=Ji(_),m--;for(;0<w-m;)v=Ji(v),w--;for(;m--;){if(_===v||v!==null&&_===v.alternate)break t;_=Ji(_),v=Ji(v)}_=null}else _=null;y!==null&&my(d,f,y,_,!1),p!==null&&E!==null&&my(d,E,p,_,!0)}}e:{if(f=u?as(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var I=Zx;else if(ay(f))if(Dw)I=rT;else{I=tT;var C=eT}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=nT);if(I&&(I=I(t,u))){Lw(d,I,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&hh(f,"number",f.value)}switch(C=u?as(u):window,t){case"focusin":(ay(C)||C.contentEditable==="true")&&(ss=C,Ch=u,Yo=null);break;case"focusout":Yo=Ch=ss=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,fy(d,n,c);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":fy(d,n,c)}var x;if(Im)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else is?Ow(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Aw&&n.locale!=="ko"&&(is||A!=="onCompositionStart"?A==="onCompositionEnd"&&is&&(x=Pw()):(Lr=c,wm="value"in Lr?Lr.value:Lr.textContent,is=!0)),C=Hu(u,A),0<C.length&&(A=new ry(A,t,null,n,c),d.push({event:A,listeners:C}),x?A.data=x:(x=Mw(n),x!==null&&(A.data=x)))),(x=Kx?Yx(t,n):Qx(t,n))&&(u=Hu(u,"onBeforeInput"),0<u.length&&(c=new ry("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}qw(d,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(ba(t,s,i)),s=ma(t,e),s!=null&&r.push(ba(t,s,i))),t=t.return}return r}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function my(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ma(n,s),l!=null&&o.unshift(ba(n,l,a))):i||(l=ma(n,s),l!=null&&o.push(ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function gy(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(dT,"")}function Bl(t,e,n){if(e=gy(e),gy(t)!==e&&n)throw Error(P(425))}function qu(){}var xh=null,Th=null;function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,fT=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,hT=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(t){return vy.resolve(null).then(t).catch(pT)}:Rh;function pT(t){setTimeout(function(){throw t})}function hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),Cn="__reactFiber$"+no,Ia="__reactProps$"+no,er="__reactContainer$"+no,Ph="__reactEvents$"+no,mT="__reactListeners$"+no,gT="__reactHandles$"+no;function _i(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yy(t);t!==null;){if(n=t[Cn])return n;t=yy(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[Cn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Gc(t){return t[Ia]||null}var Ah=[],ls=-1;function li(t){return{current:t}}function Pe(t){0>ls||(t.current=Ah[ls],Ah[ls]=null,ls--)}function Ce(t,e){ls++,Ah[ls]=t.current,t.current=e}var ei={},vt=li(ei),Pt=li(!1),Pi=ei;function js(t,e){var n=t.type.contextTypes;if(!n)return ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function Gu(){Pe(Pt),Pe(vt)}function _y(t,e,n){if(vt.current!==ei)throw Error(P(168));Ce(vt,e),Ce(Pt,n)}function Kw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,ex(t)||"Unknown",i));return je({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ei,Pi=vt.current,Ce(vt,t),Ce(Pt,Pt.current),!0}function wy(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=Kw(t,e,Pi),r.__reactInternalMemoizedMergedChildContext=t,Pe(Pt),Pe(vt),Ce(vt,t)):Pe(Pt),Ce(Pt,n)}var Vn=null,Kc=!1,pf=!1;function Yw(t){Vn===null?Vn=[t]:Vn.push(t)}function vT(t){Kc=!0,Yw(t)}function ui(){if(!pf&&Vn!==null){pf=!0;var t=0,e=ge;try{var n=Vn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Kc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),ww(gm,ui),i}finally{ge=e,pf=!1}}return null}var us=[],cs=0,Yu=null,Qu=0,qt=[],Gt=0,Ai=null,Wn=1,Bn="";function mi(t,e){us[cs++]=Qu,us[cs++]=Yu,Yu=t,Qu=e}function Qw(t,e,n){qt[Gt++]=Wn,qt[Gt++]=Bn,qt[Gt++]=Ai,Ai=t;var r=Wn;t=Bn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-mn(e)+i|n<<i|r,Bn=s+t}else Wn=1<<s|n<<i|r,Bn=t}function Cm(t){t.return!==null&&(mi(t,1),Qw(t,1,0))}function km(t){for(;t===Yu;)Yu=us[--cs],us[cs]=null,Qu=us[--cs],us[cs]=null;for(;t===Ai;)Ai=qt[--Gt],qt[Gt]=null,Bn=qt[--Gt],qt[Gt]=null,Wn=qt[--Gt],qt[Gt]=null}var Ut=null,jt=null,Me=!1,ln=null;function Jw(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ey(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,jt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:Wn,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,jt=null,!0):!1;default:return!1}}function Oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(Me){var e=jt;if(e){var n=e;if(!Ey(t,e)){if(Oh(t))throw Error(P(418));e=Br(n.nextSibling);var r=Ut;e&&Ey(t,e)?Jw(r,n):(t.flags=t.flags&-4097|2,Me=!1,Ut=t)}}else{if(Oh(t))throw Error(P(418));t.flags=t.flags&-4097|2,Me=!1,Ut=t}}}function by(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Hl(t){if(t!==Ut)return!1;if(!Me)return by(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nh(t.type,t.memoizedProps)),e&&(e=jt)){if(Oh(t))throw Xw(),Error(P(418));for(;e;)Jw(t,e),e=Br(e.nextSibling)}if(by(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Ut?Br(t.stateNode.nextSibling):null;return!0}function Xw(){for(var t=jt;t;)t=Br(t.nextSibling)}function Us(){jt=Ut=null,Me=!1}function xm(t){ln===null?ln=[t]:ln.push(t)}var yT=dr.ReactCurrentBatchConfig;function sn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ju=li(null),Xu=null,ds=null,Tm=null;function Nm(){Tm=ds=Xu=null}function Rm(t){var e=Ju.current;Pe(Ju),t._currentValue=e}function Lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Xu=t,Tm=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Tm!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Xu===null)throw Error(P(308));ds=t,Xu.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var wi=null;function Pm(t){wi===null?wi=[t]:wi.push(t)}function Zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pm(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Pm(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}function Iy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,_=a;switch(f=e,y=n,_.tag){case 1:if(p=_.payload,typeof p=="function"){d=p.call(y,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=_.payload,f=typeof p=="function"?p.call(y,d,f):p,f==null)break e;d=je({},d,f);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=d}}function Sy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var tE=new Z1.Component().refs;function Dh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Gr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(gn(e,t,i,r),yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Gr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(gn(e,t,i,r),yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Gr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(gn(e,t,r,n),yu(e,t,r))}};function Cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function nE(t,e,n){var r=!1,i=ei,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=At(e)?Pi:vt.current,r=e.contextTypes,s=(r=r!=null)?js(t,i):ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ky(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=tE,Am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=At(e)?Pi:vt.current,i.context=js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===tE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xy(t){var e=t._init;return e(t._payload)}function rE(t){function e(v,m){if(t){var w=v.deletions;w===null?(v.deletions=[m],v.flags|=16):w.push(m)}}function n(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=Kr(v,m),v.index=0,v.sibling=null,v}function s(v,m,w){return v.index=w,t?(w=v.alternate,w!==null?(w=w.index,w<m?(v.flags|=2,m):w):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,m,w,g){return m===null||m.tag!==6?(m=Ef(w,v.mode,g),m.return=v,m):(m=i(m,w),m.return=v,m)}function l(v,m,w,g){var I=w.type;return I===rs?c(v,m,w.props.children,g,w.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xr&&xy(I)===m.type)?(g=i(m,w.props),g.ref=So(v,m,w),g.return=v,g):(g=Su(w.type,w.key,w.props,null,v.mode,g),g.ref=So(v,m,w),g.return=v,g)}function u(v,m,w,g){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=bf(w,v.mode,g),m.return=v,m):(m=i(m,w.children||[]),m.return=v,m)}function c(v,m,w,g,I){return m===null||m.tag!==7?(m=Ni(w,v.mode,g,I),m.return=v,m):(m=i(m,w),m.return=v,m)}function d(v,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ef(""+m,v.mode,w),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ll:return w=Su(m.type,m.key,m.props,null,v.mode,w),w.ref=So(v,null,m),w.return=v,w;case ns:return m=bf(m,v.mode,w),m.return=v,m;case xr:var g=m._init;return d(v,g(m._payload),w)}if(Uo(m)||_o(m))return m=Ni(m,v.mode,w,null),m.return=v,m;ql(v,m)}return null}function f(v,m,w,g){var I=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return I!==null?null:a(v,m,""+w,g);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ll:return w.key===I?l(v,m,w,g):null;case ns:return w.key===I?u(v,m,w,g):null;case xr:return I=w._init,f(v,m,I(w._payload),g)}if(Uo(w)||_o(w))return I!==null?null:c(v,m,w,g,null);ql(v,w)}return null}function y(v,m,w,g,I){if(typeof g=="string"&&g!==""||typeof g=="number")return v=v.get(w)||null,a(m,v,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ll:return v=v.get(g.key===null?w:g.key)||null,l(m,v,g,I);case ns:return v=v.get(g.key===null?w:g.key)||null,u(m,v,g,I);case xr:var C=g._init;return y(v,m,w,C(g._payload),I)}if(Uo(g)||_o(g))return v=v.get(w)||null,c(m,v,g,I,null);ql(m,g)}return null}function p(v,m,w,g){for(var I=null,C=null,x=m,A=m=0,D=null;x!==null&&A<w.length;A++){x.index>A?(D=x,x=null):D=x.sibling;var F=f(v,x,w[A],g);if(F===null){x===null&&(x=D);break}t&&x&&F.alternate===null&&e(v,x),m=s(F,m,A),C===null?I=F:C.sibling=F,C=F,x=D}if(A===w.length)return n(v,x),Me&&mi(v,A),I;if(x===null){for(;A<w.length;A++)x=d(v,w[A],g),x!==null&&(m=s(x,m,A),C===null?I=x:C.sibling=x,C=x);return Me&&mi(v,A),I}for(x=r(v,x);A<w.length;A++)D=y(x,v,A,w[A],g),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?A:D.key),m=s(D,m,A),C===null?I=D:C.sibling=D,C=D);return t&&x.forEach(function(ce){return e(v,ce)}),Me&&mi(v,A),I}function _(v,m,w,g){var I=_o(w);if(typeof I!="function")throw Error(P(150));if(w=I.call(w),w==null)throw Error(P(151));for(var C=I=null,x=m,A=m=0,D=null,F=w.next();x!==null&&!F.done;A++,F=w.next()){x.index>A?(D=x,x=null):D=x.sibling;var ce=f(v,x,F.value,g);if(ce===null){x===null&&(x=D);break}t&&x&&ce.alternate===null&&e(v,x),m=s(ce,m,A),C===null?I=ce:C.sibling=ce,C=ce,x=D}if(F.done)return n(v,x),Me&&mi(v,A),I;if(x===null){for(;!F.done;A++,F=w.next())F=d(v,F.value,g),F!==null&&(m=s(F,m,A),C===null?I=F:C.sibling=F,C=F);return Me&&mi(v,A),I}for(x=r(v,x);!F.done;A++,F=w.next())F=y(x,v,A,F.value,g),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?A:F.key),m=s(F,m,A),C===null?I=F:C.sibling=F,C=F);return t&&x.forEach(function(re){return e(v,re)}),Me&&mi(v,A),I}function E(v,m,w,g){if(typeof w=="object"&&w!==null&&w.type===rs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ll:e:{for(var I=w.key,C=m;C!==null;){if(C.key===I){if(I=w.type,I===rs){if(C.tag===7){n(v,C.sibling),m=i(C,w.props.children),m.return=v,v=m;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xr&&xy(I)===C.type){n(v,C.sibling),m=i(C,w.props),m.ref=So(v,C,w),m.return=v,v=m;break e}n(v,C);break}else e(v,C);C=C.sibling}w.type===rs?(m=Ni(w.props.children,v.mode,g,w.key),m.return=v,v=m):(g=Su(w.type,w.key,w.props,null,v.mode,g),g.ref=So(v,m,w),g.return=v,v=g)}return o(v);case ns:e:{for(C=w.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(v,m.sibling),m=i(m,w.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else e(v,m);m=m.sibling}m=bf(w,v.mode,g),m.return=v,v=m}return o(v);case xr:return C=w._init,E(v,m,C(w._payload),g)}if(Uo(w))return p(v,m,w,g);if(_o(w))return _(v,m,w,g);ql(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,w),m.return=v,v=m):(n(v,m),m=Ef(w,v.mode,g),m.return=v,v=m),o(v)):n(v,m)}return E}var zs=rE(!0),iE=rE(!1),ll={},Rn=li(ll),Sa=li(ll),Ca=li(ll);function Ei(t){if(t===ll)throw Error(P(174));return t}function Om(t,e){switch(Ce(Ca,e),Ce(Sa,t),Ce(Rn,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mh(e,t)}Pe(Rn),Ce(Rn,e)}function $s(){Pe(Rn),Pe(Sa),Pe(Ca)}function sE(t){Ei(Ca.current);var e=Ei(Rn.current),n=mh(e,t.type);e!==n&&(Ce(Sa,t),Ce(Rn,n))}function Mm(t){Sa.current===t&&(Pe(Rn),Pe(Sa))}var De=li(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mf=[];function Lm(){for(var t=0;t<mf.length;t++)mf[t]._workInProgressVersionPrimary=null;mf.length=0}var _u=dr.ReactCurrentDispatcher,gf=dr.ReactCurrentBatchConfig,Oi=0,Fe=null,Je=null,rt=null,tc=!1,Qo=!1,ka=0,_T=0;function ht(){throw Error(P(321))}function Dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Fm(t,e,n,r,i,s){if(Oi=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_u.current=t===null||t.memoizedState===null?IT:ST,t=n(r,i),Qo){s=0;do{if(Qo=!1,ka=0,25<=s)throw Error(P(301));s+=1,rt=Je=null,e.updateQueue=null,_u.current=CT,t=n(r,i)}while(Qo)}if(_u.current=nc,e=Je!==null&&Je.next!==null,Oi=0,rt=Je=Fe=null,tc=!1,e)throw Error(P(300));return t}function jm(){var t=ka!==0;return ka=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Fe.memoizedState=rt=t:rt=rt.next=t,rt}function tn(){if(Je===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=rt===null?Fe.memoizedState:rt.next;if(e!==null)rt=e,Je=t;else{if(t===null)throw Error(P(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},rt===null?Fe.memoizedState=rt=t:rt=rt.next=t}return rt}function xa(t,e){return typeof e=="function"?e(t):e}function vf(t){var e=tn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Oi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Fe.lanes|=c,Mi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yf(t){var e=tn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oE(){}function aE(t,e){var n=Fe,r=tn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Um(cE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Ta(9,uE.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(P(349));Oi&30||lE(n,e,i)}return i}function lE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,r){e.value=n,e.getSnapshot=r,dE(e)&&fE(t)}function cE(t,e,n){return n(function(){dE(e)&&fE(t)})}function dE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function fE(t){var e=tr(t,1);e!==null&&gn(e,t,1,-1)}function Ty(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=bT.bind(null,Fe,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hE(){return tn().memoizedState}function wu(t,e,n,r){var i=In();Fe.flags|=t,i.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function Qc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Dm(r,o.deps)){i.memoizedState=Ta(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=Ta(1|e,n,s,r)}function Ny(t,e){return wu(8390656,8,t,e)}function Um(t,e){return Qc(2048,8,t,e)}function pE(t,e){return Qc(4,2,t,e)}function mE(t,e){return Qc(4,4,t,e)}function gE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vE(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,gE.bind(null,e,t),n)}function zm(){}function yE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _E(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wE(t,e,n){return Oi&21?(yn(n,e)||(n=Iw(),Fe.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function wT(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=gf.transition;gf.transition={};try{t(!1),e()}finally{ge=n,gf.transition=r}}function EE(){return tn().memoizedState}function ET(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bE(t))IE(e,n);else if(n=Zw(t,e,n,r),n!==null){var i=bt();gn(n,t,r,i),SE(n,e,r)}}function bT(t,e,n){var r=Gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bE(t))IE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=e.interleaved;l===null?(i.next=i,Pm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zw(t,e,i,r),n!==null&&(i=bt(),gn(n,t,r,i),SE(n,e,r))}}function bE(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function IE(t,e){Qo=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function SE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}var nc={readContext:en,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},IT={readContext:en,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wu(4194308,4,gE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return wu(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ET.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:Ty,useDebugValue:zm,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=Ty(!1),e=t[0];return t=wT.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=In();if(Me){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),ot===null)throw Error(P(349));Oi&30||lE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ny(cE.bind(null,r,s,t),[t]),r.flags|=2048,Ta(9,uE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=ot.identifierPrefix;if(Me){var n=Bn,r=Wn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_T++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ST={readContext:en,useCallback:yE,useContext:en,useEffect:Um,useImperativeHandle:vE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:_E,useReducer:vf,useRef:hE,useState:function(){return vf(xa)},useDebugValue:zm,useDeferredValue:function(t){var e=tn();return wE(e,Je.memoizedState,t)},useTransition:function(){var t=vf(xa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1},CT={readContext:en,useCallback:yE,useContext:en,useEffect:Um,useImperativeHandle:vE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:_E,useReducer:yf,useRef:hE,useState:function(){return yf(xa)},useDebugValue:zm,useDeferredValue:function(t){var e=tn();return Je===null?e.memoizedState=t:wE(e,Je.memoizedState,t)},useTransition:function(){var t=yf(xa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1};function Vs(t,e){try{var n="",r=e;do n+=Zk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kT=typeof WeakMap=="function"?WeakMap:Map;function CE(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,Kh=r),jh(t,e)},n}function kE(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jh(t,e),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ry(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zT.bind(null,t,e,n),e.then(t,t))}function Py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ay(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var xT=dr.ReactCurrentOwner,Tt=!1;function wt(t,e,n,r){e.child=t===null?iE(e,null,n,r):zs(e,t.child,n,r)}function Oy(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=Fm(t,e,n,r,s,i),n=jm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Me&&n&&Cm(e),e.flags|=1,wt(t,e,r,i),e.child)}function My(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Km(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xE(t,e,s,r,i)):(t=Su(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function xE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return Uh(t,e,n,r,i)}function TE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(hs,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(hs,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(hs,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ce(hs,Ft),Ft|=r;return wt(t,e,i,n),e.child}function NE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uh(t,e,n,r,i){var s=At(n)?Pi:vt.current;return s=js(e,s),Cs(e,i),n=Fm(t,e,n,r,s,i),r=jm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Me&&r&&Cm(e),e.flags|=1,wt(t,e,n,i),e.child)}function Ly(t,e,n,r,i){if(At(n)){var s=!0;Ku(e)}else s=!1;if(Cs(e,i),e.stateNode===null)Eu(t,e),nE(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=At(n)?Pi:vt.current,u=js(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ky(e,o,r,u),Tr=!1;var f=e.memoizedState;o.state=f,Zu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Pt.current||Tr?(typeof c=="function"&&(Dh(e,n,c,r),l=e.memoizedState),(a=Tr||Cy(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,eE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:sn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=At(n)?Pi:vt.current,l=js(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ky(e,o,r,l),Tr=!1,f=e.memoizedState,o.state=f,Zu(e,r,o,i);var p=e.memoizedState;a!==d||f!==p||Pt.current||Tr?(typeof y=="function"&&(Dh(e,n,y,r),p=e.memoizedState),(u=Tr||Cy(e,n,u,r,f,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,s,i)}function zh(t,e,n,r,i,s){NE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wy(e,n,!1),nr(t,e,s);r=e.stateNode,xT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&wy(e,n,!0),e.child}function RE(t){var e=t.stateNode;e.pendingContext?_y(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_y(t,e.context,!1),Om(t,e.containerInfo)}function Dy(t,e,n,r,i){return Us(),xm(i),e.flags|=256,wt(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function PE(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(De,i&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zc(o,r,0,null),t=Ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vh(n),e.memoizedState=$h,t):$m(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=Ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=Kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $m(t,e){return e=Zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,r){return r!==null&&xm(r),zs(e,t.child,null,n),t=$m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_f(Error(P(422))),Gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zc({mode:"visible",children:r.children},i,0,null),s=Ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Vh(o),e.memoizedState=$h,s);if(!(e.mode&1))return Gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=_f(s,r,void 0),Gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),gn(r,t,i,-1))}return Gm(),r=_f(Error(P(421))),Gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$T.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=Br(i.nextSibling),Ut=e,Me=!0,ln=null,t!==null&&(qt[Gt++]=Wn,qt[Gt++]=Bn,qt[Gt++]=Ai,Wn=t.id,Bn=t.overflow,Ai=e),e=$m(e,r.children),e.flags|=4096,e)}function Fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lh(t.return,e,n)}function wf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,n,e);else if(t.tag===19)Fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wf(e,!0,n,null,s);break;case"together":wf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NT(t,e,n){switch(e.tag){case 3:RE(e),Us();break;case 5:sE(e);break;case 1:At(e.type)&&Ku(e);break;case 4:Om(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(Ju,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?PE(t,e,n):(Ce(De,De.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ce(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return AE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,TE(t,e,n)}return nr(t,e,n)}var OE,Wh,ME,LE;OE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};ME=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ei(Rn.current);var s=null;switch(n){case"input":i=dh(t,i),r=dh(t,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=ph(t,i),r=ph(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}gh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ha.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ha.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};LE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RT(t,e,n){var r=e.pendingProps;switch(km(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return At(e.type)&&Gu(),pt(e),null;case 3:return r=e.stateNode,$s(),Pe(Pt),Pe(vt),Lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ln!==null&&(Jh(ln),ln=null))),Wh(t,e),pt(e),null;case 5:Mm(e);var i=Ei(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)ME(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return pt(e),null}if(t=Ei(Rn.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<$o.length;i++)xe($o[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":qv(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":Kv(r,s),xe("invalid",r)}gh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,a,t),i=["children",""+a]):ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Dl(r),Gv(r,s,!0);break;case"textarea":Dl(r),Yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[Ia]=r,OE(t,e,!1,!1),e.stateNode=t;e:{switch(o=vh(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<$o.length;i++)xe($o[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":qv(t,r),i=dh(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),xe("invalid",t);break;case"textarea":Kv(t,r),i=ph(t,r),xe("invalid",t);break;default:i=r}gh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xe("scroll",t):l!=null&&dm(t,s,l,o))}switch(n){case"input":Dl(t),Gv(t,r,!1);break;case"textarea":Dl(t),Yv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)LE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Ei(Ca.current),Ei(Rn.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return pt(e),null;case 13:if(Pe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&jt!==null&&e.mode&1&&!(e.flags&128))Xw(),Us(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[Cn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else ln!==null&&(Jh(ln),ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Ze===0&&(Ze=3):Gm())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return $s(),Wh(t,e),t===null&&Ea(e.stateNode.containerInfo),pt(e),null;case 10:return Rm(e.type._context),pt(e),null;case 17:return At(e.type)&&Gu(),pt(e),null;case 19:if(Pe(De),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>Ws&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Me)return pt(e),null}else 2*Ge()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=De.current,Ce(De,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function PT(t,e){switch(km(e),e.tag){case 1:return At(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Pe(Pt),Pe(vt),Lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(Pe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(De),null;case 4:return $s(),null;case 10:return Rm(e.type._context),null;case 22:case 23:return qm(),null;case 24:return null;default:return null}}var Kl=!1,mt=!1,AT=typeof WeakSet=="function"?WeakSet:Set,U=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){ze(t,e,r)}}var jy=!1;function OT(t,e){if(xh=Wu,t=Uw(),Sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Th={focusedElem:t,selectionRange:n},Wu=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var _=p.memoizedProps,E=p.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:sn(e.type,_),E);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(g){ze(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return p=jy,jy=!1,p}function Jo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bh(e,n,s)}i=i.next}while(i!==r)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function DE(t){var e=t.alternate;e!==null&&(t.alternate=null,DE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[Ia],delete e[Ph],delete e[mT],delete e[gT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function FE(t){return t.tag===5||t.tag===3||t.tag===4}function Uy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||FE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}var lt=null,on=!1;function br(t,e,n){for(n=n.child;n!==null;)jE(t,e,n),n=n.sibling}function jE(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:mt||fs(n,e);case 6:var r=lt,i=on;lt=null,br(t,e,n),lt=r,on=i,lt!==null&&(on?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(on?(t=lt,n=n.stateNode,t.nodeType===8?hf(t.parentNode,n):t.nodeType===1&&hf(t,n),ya(t)):hf(lt,n.stateNode));break;case 4:r=lt,i=on,lt=n.stateNode.containerInfo,on=!0,br(t,e,n),lt=r,on=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bh(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!mt&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,br(t,e,n),mt=r):br(t,e,n);break;default:br(t,e,n)}}function zy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AT),e.forEach(function(r){var i=VT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,on=!1;break e;case 3:lt=a.stateNode.containerInfo,on=!0;break e;case 4:lt=a.stateNode.containerInfo,on=!0;break e}a=a.return}if(lt===null)throw Error(P(160));jE(s,o,i),lt=null,on=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)UE(e,t),e=e.sibling}function UE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),bn(t),r&4){try{Jo(3,t,t.return),Jc(3,t)}catch(_){ze(t,t.return,_)}try{Jo(5,t,t.return)}catch(_){ze(t,t.return,_)}}break;case 1:rn(e,t),bn(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(rn(e,t),bn(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(_){ze(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ow(i,s),vh(a,o);var u=vh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?dw(i,d):c==="dangerouslySetInnerHTML"?uw(i,d):c==="children"?pa(i,d):dm(i,c,d,u)}switch(a){case"input":fh(i,s);break;case"textarea":aw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Es(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(_){ze(t,t.return,_)}}break;case 6:if(rn(e,t),bn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ze(t,t.return,_)}}break;case 3:if(rn(e,t),bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(_){ze(t,t.return,_)}break;case 4:rn(e,t),bn(t);break;case 13:rn(e,t),bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bm=Ge())),r&4&&zy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||c,rn(e,t),mt=u):rn(e,t),bn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(d=U=c;U!==null;){switch(f=U,y=f.child,f.tag){case 0:case 11:case 14:case 15:Jo(4,f,f.return);break;case 1:fs(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(_){ze(r,n,_)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){Vy(d);continue}}y!==null?(y.return=f,U=y):Vy(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cw("display",o))}catch(_){ze(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){ze(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rn(e,t),bn(t),r&4&&zy(t);break;case 21:break;default:rn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(FE(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=Uy(t);Gh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uy(t);qh(t,a,o);break;default:throw Error(P(161))}}catch(l){ze(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MT(t,e,n){U=t,zE(t)}function zE(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Kl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=Kl;var u=mt;if(Kl=o,(mt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?Wy(i):l!==null?(l.return=o,U=l):Wy(i);for(;s!==null;)U=s,zE(s),s=s.sibling;U=i,Kl=a,mt=u}$y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):$y(t)}}function $y(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}mt||e.flags&512&&Hh(e)}catch(f){ze(e,e.return,f)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function Vy(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function Wy(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(l){ze(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ze(e,i,l)}}var s=e.return;try{Hh(e)}catch(l){ze(e,s,l)}break;case 5:var o=e.return;try{Hh(e)}catch(l){ze(e,o,l)}}}catch(l){ze(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var LT=Math.ceil,rc=dr.ReactCurrentDispatcher,Vm=dr.ReactCurrentOwner,Jt=dr.ReactCurrentBatchConfig,de=0,ot=null,Ye=null,ct=0,Ft=0,hs=li(0),Ze=0,Na=null,Mi=0,Xc=0,Wm=0,Xo=null,xt=null,Bm=0,Ws=1/0,zn=null,ic=!1,Kh=null,qr=null,Yl=!1,Dr=null,sc=0,Zo=0,Yh=null,bu=-1,Iu=0;function bt(){return de&6?Ge():bu!==-1?bu:bu=Ge()}function Gr(t){return t.mode&1?de&2&&ct!==0?ct&-ct:yT.transition!==null?(Iu===0&&(Iu=Iw()),Iu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Rw(t.type)),t):1}function gn(t,e,n,r){if(50<Zo)throw Zo=0,Yh=null,Error(P(185));sl(t,n,r),(!(de&2)||t!==ot)&&(t===ot&&(!(de&2)&&(Xc|=n),Ze===4&&Rr(t,ct)),Ot(t,r),n===1&&de===0&&!(e.mode&1)&&(Ws=Ge()+500,Kc&&ui()))}function Ot(t,e){var n=t.callbackNode;yx(t,e);var r=Vu(t,t===ot?ct:0);if(r===0)n!==null&&Xv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xv(n),e===1)t.tag===0?vT(By.bind(null,t)):Yw(By.bind(null,t)),hT(function(){!(de&6)&&ui()}),n=null;else{switch(Sw(r)){case 1:n=gm;break;case 4:n=Ew;break;case 16:n=$u;break;case 536870912:n=bw;break;default:n=$u}n=KE(n,$E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $E(t,e){if(bu=-1,Iu=0,de&6)throw Error(P(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var r=Vu(t,t===ot?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=de;de|=2;var s=WE();(ot!==t||ct!==e)&&(zn=null,Ws=Ge()+500,Ti(t,e));do try{jT();break}catch(a){VE(t,a)}while(1);Nm(),rc.current=s,de=i,Ye!==null?e=0:(ot=null,ct=0,e=Ze)}if(e!==0){if(e===2&&(i=bh(t),i!==0&&(r=i,e=Qh(t,i))),e===1)throw n=Na,Ti(t,0),Rr(t,r),Ot(t,Ge()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!DT(i)&&(e=oc(t,r),e===2&&(s=bh(t),s!==0&&(r=s,e=Qh(t,s))),e===1))throw n=Na,Ti(t,0),Rr(t,r),Ot(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:gi(t,xt,zn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=Bm+500-Ge(),10<e)){if(Vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rh(gi.bind(null,t,xt,zn),e);break}gi(t,xt,zn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LT(r/1960))-r,10<r){t.timeoutHandle=Rh(gi.bind(null,t,xt,zn),r);break}gi(t,xt,zn);break;case 5:gi(t,xt,zn);break;default:throw Error(P(329))}}}return Ot(t,Ge()),t.callbackNode===n?$E.bind(null,t):null}function Qh(t,e){var n=Xo;return t.current.memoizedState.isDehydrated&&(Ti(t,e).flags|=256),t=oc(t,e),t!==2&&(e=xt,xt=n,e!==null&&Jh(e)),t}function Jh(t){xt===null?xt=t:xt.push.apply(xt,t)}function DT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Wm,e&=~Xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function By(t){if(de&6)throw Error(P(327));ks();var e=Vu(t,0);if(!(e&1))return Ot(t,Ge()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=bh(t);r!==0&&(e=r,n=Qh(t,r))}if(n===1)throw n=Na,Ti(t,0),Rr(t,e),Ot(t,Ge()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gi(t,xt,zn),Ot(t,Ge()),null}function Hm(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Ws=Ge()+500,Kc&&ui())}}function Li(t){Dr!==null&&Dr.tag===0&&!(de&6)&&ks();var e=de;de|=1;var n=Jt.transition,r=ge;try{if(Jt.transition=null,ge=1,t)return t()}finally{ge=r,Jt.transition=n,de=e,!(de&6)&&ui()}}function qm(){Ft=hs.current,Pe(hs)}function Ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fT(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(km(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:$s(),Pe(Pt),Pe(vt),Lm();break;case 5:Mm(r);break;case 4:$s();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:Rm(r.type._context);break;case 22:case 23:qm()}n=n.return}if(ot=t,Ye=t=Kr(t.current,null),ct=Ft=e,Ze=0,Na=null,Wm=Xc=Mi=0,xt=Xo=null,wi!==null){for(e=0;e<wi.length;e++)if(n=wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wi=null}return t}function VE(t,e){do{var n=Ye;try{if(Nm(),_u.current=nc,tc){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Oi=0,rt=Je=Fe=null,Qo=!1,ka=0,Vm.current=null,n===null||n.return===null){Ze=1,Na=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Py(o);if(y!==null){y.flags&=-257,Ay(y,o,a,s,e),y.mode&1&&Ry(s,u,e),e=y,l=u;var p=e.updateQueue;if(p===null){var _=new Set;_.add(l),e.updateQueue=_}else p.add(l);break e}else{if(!(e&1)){Ry(s,u,e),Gm();break e}l=Error(P(426))}}else if(Me&&a.mode&1){var E=Py(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ay(E,o,a,s,e),xm(Vs(l,a));break e}}s=l=Vs(l,a),Ze!==4&&(Ze=2),Xo===null?Xo=[s]:Xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=CE(s,l,e);Iy(s,v);break e;case 1:a=l;var m=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(qr===null||!qr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=kE(s,a,e);Iy(s,g);break e}}s=s.return}while(s!==null)}HE(n)}catch(I){e=I,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function WE(){var t=rc.current;return rc.current=nc,t===null?nc:t}function Gm(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),ot===null||!(Mi&268435455)&&!(Xc&268435455)||Rr(ot,ct)}function oc(t,e){var n=de;de|=2;var r=WE();(ot!==t||ct!==e)&&(zn=null,Ti(t,e));do try{FT();break}catch(i){VE(t,i)}while(1);if(Nm(),de=n,rc.current=r,Ye!==null)throw Error(P(261));return ot=null,ct=0,Ze}function FT(){for(;Ye!==null;)BE(Ye)}function jT(){for(;Ye!==null&&!ux();)BE(Ye)}function BE(t){var e=GE(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?HE(t):Ye=e,Vm.current=null}function HE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PT(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ye=null;return}}else if(n=RT(n,e,Ft),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);Ze===0&&(Ze=5)}function gi(t,e,n){var r=ge,i=Jt.transition;try{Jt.transition=null,ge=1,UT(t,e,n,r)}finally{Jt.transition=i,ge=r}return null}function UT(t,e,n,r){do ks();while(Dr!==null);if(de&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_x(t,s),t===ot&&(Ye=ot=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,KE($u,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=ge;ge=1;var a=de;de|=4,Vm.current=null,OT(t,n),UE(n,t),sT(Th),Wu=!!xh,Th=xh=null,t.current=n,MT(n),cx(),de=a,ge=o,Jt.transition=s}else t.current=n;if(Yl&&(Yl=!1,Dr=t,sc=i),s=t.pendingLanes,s===0&&(qr=null),hx(n.stateNode),Ot(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=Kh,Kh=null,t;return sc&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Yh?Zo++:(Zo=0,Yh=t):Zo=0,ui(),null}function ks(){if(Dr!==null){var t=Sw(sc),e=Jt.transition,n=ge;try{if(Jt.transition=null,ge=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,sc=0,de&6)throw Error(P(331));var i=de;for(de|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Jo(8,c,s)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var f=c.sibling,y=c.return;if(DE(c),c===u){U=null;break}if(f!==null){f.return=y,U=f;break}U=y}}}var p=s.alternate;if(p!==null){var _=p.child;if(_!==null){p.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,U=v;break e}U=s.return}}var m=t.current;for(U=m;U!==null;){o=U;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,U=w;else e:for(o=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jc(9,a)}}catch(I){ze(a,a.return,I)}if(a===o){U=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,U=g;break e}U=a.return}}if(de=i,ui(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Wc,t)}catch{}r=!0}return r}finally{ge=n,Jt.transition=e}}return!1}function Hy(t,e,n){e=Vs(n,e),e=CE(t,e,1),t=Hr(t,e,1),e=bt(),t!==null&&(sl(t,1,e),Ot(t,e))}function ze(t,e,n){if(t.tag===3)Hy(t,t,n);else for(;e!==null;){if(e.tag===3){Hy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){t=Vs(n,t),t=kE(e,t,1),e=Hr(e,t,1),t=bt(),e!==null&&(sl(e,1,t),Ot(e,t));break}}e=e.return}}function zT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(ct&n)===n&&(Ze===4||Ze===3&&(ct&130023424)===ct&&500>Ge()-Bm?Ti(t,0):Wm|=n),Ot(t,e)}function qE(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=bt();t=tr(t,e),t!==null&&(sl(t,e,n),Ot(t,n))}function $T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qE(t,n)}function VT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),qE(t,n)}var GE;GE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,NT(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Me&&e.flags&1048576&&Qw(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eu(t,e),t=e.pendingProps;var i=js(e,vt.current);Cs(e,n),i=Fm(null,e,r,t,i,n);var s=jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Am(e),i.updater=Yc,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=zh(null,e,r,!0,s,n)):(e.tag=0,Me&&s&&Cm(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BT(r),t=sn(r,t),i){case 0:e=Uh(null,e,r,t,n);break e;case 1:e=Ly(null,e,r,t,n);break e;case 11:e=Oy(null,e,r,t,n);break e;case 14:e=My(null,e,r,sn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Uh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Ly(t,e,r,i,n);case 3:e:{if(RE(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,eE(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(P(423)),e),e=Dy(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(P(424)),e),e=Dy(t,e,r,n,i);break e}else for(jt=Br(e.stateNode.containerInfo.firstChild),Ut=e,Me=!0,ln=null,n=iE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=nr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return sE(e),t===null&&Mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nh(r,i)?o=null:s!==null&&Nh(r,s)&&(e.flags|=32),NE(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return PE(t,e,n);case 4:return Om(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Oy(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ce(Ju,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Pt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cs(e,n),i=en(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),My(t,e,r,i,n);case 15:return xE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Eu(t,e),e.tag=1,At(r)?(t=!0,Ku(e)):t=!1,Cs(e,n),nE(e,r,i),Fh(e,r,i,n),zh(null,e,r,!0,t,n);case 19:return AE(t,e,n);case 22:return TE(t,e,n)}throw Error(P(156,e.tag))};function KE(t,e){return ww(t,e)}function WT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new WT(t,e,n,r)}function Km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BT(t){if(typeof t=="function")return Km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hm)return 11;if(t===pm)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Su(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Km(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ni(n.children,i,s,e);case fm:o=8,i|=8;break;case ah:return t=Qt(12,n,e,i|2),t.elementType=ah,t.lanes=s,t;case lh:return t=Qt(13,n,e,i),t.elementType=lh,t.lanes=s,t;case uh:return t=Qt(19,n,e,i),t.elementType=uh,t.lanes=s,t;case rw:return Zc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tw:o=10;break e;case nw:o=9;break e;case hm:o=11;break e;case pm:o=14;break e;case xr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ni(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Zc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=rw,t.lanes=n,t.stateNode={isHidden:!1},t}function Ef(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function bf(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ym(t,e,n,r,i,s,o,a,l){return t=new HT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function qT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YE(t){if(!t)return ei;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(At(n))return Kw(t,n,e)}return e}function QE(t,e,n,r,i,s,o,a,l){return t=Ym(n,r,!0,t,i,s,o,a,l),t.context=YE(null),n=t.current,r=bt(),i=Gr(n),s=Yn(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,sl(t,i,r),Ot(t,r),t}function ed(t,e,n,r){var i=e.current,s=bt(),o=Gr(i);return n=YE(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(gn(t,i,o,s),yu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qm(t,e){qy(t,e),(t=t.alternate)&&qy(t,e)}function GT(){return null}var JE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jm(t){this._internalRoot=t}td.prototype.render=Jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));ed(t,e,null,null)};td.prototype.unmount=Jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Li(function(){ed(null,t,null,null)}),e[er]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=xw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&Nw(t)}};function Xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gy(){}function KT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ac(o);s.call(u)}}var o=QE(e,r,t,0,null,!1,!1,"",Gy);return t._reactRootContainer=o,t[er]=o.current,Ea(t.nodeType===8?t.parentNode:t),Li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ac(l);a.call(u)}}var l=Ym(t,0,!1,null,null,!1,!1,"",Gy);return t._reactRootContainer=l,t[er]=l.current,Ea(t.nodeType===8?t.parentNode:t),Li(function(){ed(e,l,n,r)}),l}function rd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ac(o);a.call(l)}}ed(e,o,t,i)}else o=KT(n,e,t,i,r);return ac(o)}Cw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(vm(e,n|1),Ot(e,Ge()),!(de&6)&&(Ws=Ge()+500,ui()))}break;case 13:Li(function(){var r=tr(t,1);if(r!==null){var i=bt();gn(r,t,1,i)}}),Qm(t,1)}};ym=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=bt();gn(e,t,134217728,n)}Qm(t,134217728)}};kw=function(t){if(t.tag===13){var e=Gr(t),n=tr(t,e);if(n!==null){var r=bt();gn(n,t,e,r)}Qm(t,e)}};xw=function(){return ge};Tw=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};_h=function(t,e,n){switch(e){case"input":if(fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gc(r);if(!i)throw Error(P(90));sw(r),fh(r,i)}}}break;case"textarea":aw(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};pw=Hm;mw=Li;var YT={usingClientEntryPoint:!1,Events:[al,as,Gc,fw,hw,Hm]},ko={findFiberByHostInstance:_i,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QT={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yw(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||GT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Wc=Ql.inject(QT),Nn=Ql}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xm(e))throw Error(P(200));return qT(t,e,null,n)};Vt.createRoot=function(t,e){if(!Xm(t))throw Error(P(299));var n=!1,r="",i=JE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ym(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Jm(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=yw(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Li(t)};Vt.hydrate=function(t,e,n){if(!nd(e))throw Error(P(200));return rd(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Xm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=JE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=QE(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new td(e)};Vt.render=function(t,e,n){if(!nd(e))throw Error(P(200));return rd(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!nd(t))throw Error(P(40));return t._reactRootContainer?(Li(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Vt.unstable_batchedUpdates=Hm;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return rd(t,e,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function XE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XE)}catch(t){console.error(t)}}XE(),Q1.exports=Vt;var ZE=Q1.exports,Ky=ZE;sh.createRoot=Ky.createRoot,sh.hydrateRoot=Ky.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(){return Oe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oe.apply(this,arguments)}var Ke;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ke||(Ke={}));const Yy="popstate";function JT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Dn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ra("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Fi(s))}function r(i,s){Di(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return ZT(e,n,r,t)}function ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Di(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XT(){return Math.random().toString(36).substr(2,8)}function Qy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ra(t,e,n,r){return n===void 0&&(n=null),Oe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Dn(e):e,{state:n,key:e&&e.key||r||XT()})}function Fi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Dn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ke.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Oe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ke.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:v})}function f(E,v){a=Ke.Push;let m=Ra(_.location,E,v);n&&n(m,E),u=c()+1;let w=Qy(m,u),g=_.createHref(m);try{o.pushState(w,"",g)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(g)}s&&l&&l({action:a,location:_.location,delta:1})}function y(E,v){a=Ke.Replace;let m=Ra(_.location,E,v);n&&n(m,E),u=c();let w=Qy(m,u),g=_.createHref(m);o.replaceState(w,"",g),s&&l&&l({action:a,location:_.location,delta:0})}function p(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof E=="string"?E:Fi(E);return ae(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yy,d),l=E,()=>{i.removeEventListener(Yy,d),l=null}},createHref(E){return e(i,E)},createURL:p,encodeLocation(E){let v=p(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:y,go(E){return o.go(E)}};return _}var qe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qe||(qe={}));const e2=new Set(["lazy","caseSensitive","path","id","index","children"]);function t2(t){return t.index===!0}function Xh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ae(i.index!==!0||!i.children,"Cannot specify children on an index route"),ae(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),t2(i)){let l=Oe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Oe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Xh(i.children,e,o,r)),l}})}function ps(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Dn(e):e,i=ro(r.pathname||"/",n);if(i==null)return null;let s=eb(t);n2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=d2(s[a],p2(i));return o}function eb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Qn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),eb(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:u2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of tb(s.path))i(s,o,l)}),e}function tb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tb(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function n2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:c2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const r2=/^:\w+$/,i2=3,s2=2,o2=1,a2=10,l2=-2,Jy=t=>t==="*";function u2(t,e){let n=t.split("/"),r=n.length;return n.some(Jy)&&(r+=l2),e&&(r+=s2),n.filter(i=>!Jy(i)).reduce((i,s)=>i+(r2.test(s)?i2:s===""?o2:a2),r)}function c2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function d2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=f2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Qn([i,c.pathname]),pathnameBase:y2(Qn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Qn([i,c.pathnameBase]))}return s}function f2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=h2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=m2(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function h2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Di(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function p2(t){try{return decodeURI(t)}catch(e){return Di(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function m2(t,e){try{return decodeURIComponent(t)}catch(n){return Di(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ro(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function g2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Dn(t):t;return{pathname:n?n.startsWith("/")?n:v2(n,e):e,search:_2(r),hash:w2(i)}}function v2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function If(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function id(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Dn(t):(i=Oe({},t),ae(!i.pathname||!i.pathname.includes("?"),If("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),If("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),If("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=g2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Qn=t=>t.join("/").replace(/\/\/+/g,"/"),y2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,w2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class eg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function nb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rb=["post","put","patch","delete"],E2=new Set(rb),b2=["get",...rb],I2=new Set(b2),S2=new Set([301,302,303,307,308]),C2=new Set([307,308]),Sf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},k2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ib=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x2=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function T2(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ae(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let S=t.detectErrorBoundary;i=k=>({hasErrorBoundary:S(k)})}else i=x2;let s={},o=Xh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Oe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,y=null,p=null,_=t.hydrationData!=null,E=ps(o,t.history.location,l),v=null;if(E==null){let S=Ht(404,{pathname:t.history.location.pathname}),{matches:k,route:T}=s_(o);E=k,v={[T.id]:S}}let m=!E.some(S=>S.route.lazy)&&(!E.some(S=>S.route.loader)||t.hydrationData!=null),w,g={historyAction:t.history.action,location:t.history.location,matches:E,initialized:m,navigation:Sf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},I=Ke.Pop,C=!1,x,A=!1,D=!1,F=[],ce=[],re=new Map,Ue=0,B=-1,Q=new Map,fe=new Set,ve=new Map,N=new Map,z=new Map,H=!1;function ke(){return c=t.history.listen(S=>{let{action:k,location:T,delta:$}=S;if(H){H=!1;return}Di(z.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ee=Dv({currentLocation:g.location,nextLocation:T,historyAction:k});if(ee&&$!=null){H=!0,t.history.go($*-1),Al(ee,{state:"blocked",location:T,proceed(){Al(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go($)},reset(){let J=new Map(g.blockers);J.set(ee,xo),me({blockers:J})}});return}return Dt(k,T)}),g.initialized||Dt(Ke.Pop,g.location),w}function ye(){c&&c(),d.clear(),x&&x.abort(),g.fetchers.forEach((S,k)=>Wd(k)),g.blockers.forEach((S,k)=>Lv(k))}function _r(S){return d.add(S),()=>d.delete(S)}function me(S){g=Oe({},g,S),d.forEach(k=>k(g))}function Be(S,k){var T,$;let ee=g.actionData!=null&&g.navigation.formMethod!=null&&an(g.navigation.formMethod)&&g.navigation.state==="loading"&&((T=S.state)==null?void 0:T._isRedirect)!==!0,J;k.actionData?Object.keys(k.actionData).length>0?J=k.actionData:J=null:ee?J=g.actionData:J=null;let Z=k.loaderData?i_(g.loaderData,k.loaderData,k.matches||[],k.errors):g.loaderData,q=g.blockers;q.size>0&&(q=new Map(q),q.forEach((be,at)=>q.set(at,xo)));let W=C===!0||g.navigation.formMethod!=null&&an(g.navigation.formMethod)&&(($=S.state)==null?void 0:$._isRedirect)!==!0;a&&(o=a,a=void 0),A||I===Ke.Pop||(I===Ke.Push?t.history.push(S,S.state):I===Ke.Replace&&t.history.replace(S,S.state)),me(Oe({},k,{actionData:J,loaderData:Z,historyAction:I,location:S,initialized:!0,navigation:Sf,revalidation:"idle",restoreScrollPosition:jv(S,k.matches||g.matches),preventScrollReset:W,blockers:q})),I=Ke.Pop,C=!1,A=!1,D=!1,F=[],ce=[]}async function ft(S,k){if(typeof S=="number"){t.history.go(S);return}let T=Zh(g.location,g.matches,l,u.v7_prependBasename,S,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:$,submission:ee,error:J}=Xy(u.v7_normalizeFormMethod,!1,T,k),Z=g.location,q=Ra(g.location,$,k&&k.state);q=Oe({},q,t.history.encodeLocation(q));let W=k&&k.replace!=null?k.replace:void 0,be=Ke.Push;W===!0?be=Ke.Replace:W===!1||ee!=null&&an(ee.formMethod)&&ee.formAction===g.location.pathname+g.location.search&&(be=Ke.Replace);let at=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,_e=Dv({currentLocation:Z,nextLocation:q,historyAction:be});if(_e){Al(_e,{state:"blocked",location:q,proceed(){Al(_e,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),ft(S,k)},reset(){let He=new Map(g.blockers);He.set(_e,xo),me({blockers:He})}});return}return await Dt(be,q,{submission:ee,pendingError:J,preventScrollReset:at,replace:k&&k.replace})}function _t(){if(Vd(),me({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Dt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Dt(I||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Dt(S,k,T){x&&x.abort(),x=null,I=S,A=(T&&T.startUninterruptedRevalidation)===!0,bk(g.location,g.matches),C=(T&&T.preventScrollReset)===!0;let $=a||o,ee=T&&T.overrideNavigation,J=ps($,k,l);if(!J){let He=Ht(404,{pathname:k.pathname}),{matches:tt,route:hi}=s_($);Bd(),Be(k,{matches:tt,loaderData:{},errors:{[hi.id]:He}});return}if(g.initialized&&!D&&O2(g.location,k)&&!(T&&T.submission&&an(T.submission.formMethod))){Be(k,{matches:J});return}x=new AbortController;let Z=No(t.history,k,x.signal,T&&T.submission),q,W;if(T&&T.pendingError)W={[ms(J).route.id]:T.pendingError};else if(T&&T.submission&&an(T.submission.formMethod)){let He=await Fn(Z,k,T.submission,J,{replace:T.replace});if(He.shortCircuited)return;q=He.pendingActionData,W=He.pendingActionError,ee=Jl(k,T.submission),Z=new Request(Z.url,{signal:Z.signal})}let{shortCircuited:be,loaderData:at,errors:_e}=await mo(Z,k,J,ee,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,q,W);be||(x=null,Be(k,Oe({matches:J},q?{actionData:q}:{},{loaderData:at,errors:_e})))}async function Fn(S,k,T,$,ee){ee===void 0&&(ee={}),Vd();let J=j2(k,T);me({navigation:J});let Z,q=tp($,k);if(!q.route.action&&!q.route.lazy)Z={type:qe.error,error:Ht(405,{method:S.method,pathname:k.pathname,routeId:q.route.id})};else if(Z=await To("action",S,q,$,s,i,l),S.signal.aborted)return{shortCircuited:!0};if(xs(Z)){let W;return ee&&ee.replace!=null?W=ee.replace:W=Z.location===g.location.pathname+g.location.search,await go(g,Z,{submission:T,replace:W}),{shortCircuited:!0}}if(ea(Z)){let W=ms($,q.route.id);return(ee&&ee.replace)!==!0&&(I=Ke.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:Z.error}}}if(bi(Z))throw Ht(400,{type:"defer-action"});return{pendingActionData:{[q.route.id]:Z.data}}}async function mo(S,k,T,$,ee,J,Z,q,W){let be=$||Jl(k,ee),at=ee||J||l_(be),_e=a||o,[He,tt]=Zy(t.history,g,T,at,k,D,F,ce,ve,fe,_e,l,q,W);if(Bd(we=>!(T&&T.some(nn=>nn.route.id===we))||He&&He.some(nn=>nn.route.id===we)),B=++Ue,He.length===0&&tt.length===0){let we=Ov();return Be(k,Oe({matches:T,loaderData:{},errors:W||null},q?{actionData:q}:{},we?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!A){tt.forEach(nn=>{let Er=g.fetchers.get(nn.key),Yd=Ro(void 0,Er?Er.data:void 0);g.fetchers.set(nn.key,Yd)});let we=q||g.actionData;me(Oe({navigation:be},we?Object.keys(we).length===0?{actionData:null}:{actionData:we}:{},tt.length>0?{fetchers:new Map(g.fetchers)}:{}))}tt.forEach(we=>{re.has(we.key)&&wr(we.key),we.controller&&re.set(we.key,we.controller)});let hi=()=>tt.forEach(we=>wr(we.key));x&&x.signal.addEventListener("abort",hi);let{results:pi,loaderResults:vo,fetcherResults:Hd}=await Pv(g.matches,T,He,tt,S);if(S.signal.aborted)return{shortCircuited:!0};x&&x.signal.removeEventListener("abort",hi),tt.forEach(we=>re.delete(we.key));let jn=o_(pi);if(jn){if(jn.idx>=He.length){let we=tt[jn.idx-He.length].key;fe.add(we)}return await go(g,jn.result,{replace:Z}),{shortCircuited:!0}}let{loaderData:Un,errors:Ol}=r_(g,T,He,vo,W,tt,Hd,N);N.forEach((we,nn)=>{we.subscribe(Er=>{(Er||we.done)&&N.delete(nn)})});let qd=Ov(),Gd=Mv(B),Kd=qd||Gd||tt.length>0;return Oe({loaderData:Un,errors:Ol},Kd?{fetchers:new Map(g.fetchers)}:{})}function Rv(S){return g.fetchers.get(S)||k2}function vk(S,k,T,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");re.has(S)&&wr(S);let ee=a||o,J=Zh(g.location,g.matches,l,u.v7_prependBasename,T,k,$==null?void 0:$.relative),Z=ps(ee,J,l);if(!Z){Pl(S,k,Ht(404,{pathname:J}));return}let{path:q,submission:W,error:be}=Xy(u.v7_normalizeFormMethod,!0,J,$);if(be){Pl(S,k,be);return}let at=tp(Z,q);if(C=($&&$.preventScrollReset)===!0,W&&an(W.formMethod)){yk(S,k,q,at,Z,W);return}ve.set(S,{routeId:k,path:q}),_k(S,k,q,at,Z,W)}async function yk(S,k,T,$,ee,J){if(Vd(),ve.delete(S),!$.route.action&&!$.route.lazy){let Qe=Ht(405,{method:J.formMethod,pathname:T,routeId:k});Pl(S,k,Qe);return}let Z=g.fetchers.get(S),q=U2(J,Z);g.fetchers.set(S,q),me({fetchers:new Map(g.fetchers)});let W=new AbortController,be=No(t.history,T,W.signal,J);re.set(S,W);let at=Ue,_e=await To("action",be,$,ee,s,i,l);if(be.signal.aborted){re.get(S)===W&&re.delete(S);return}if(xs(_e))if(re.delete(S),B>at){let Qe=ts(void 0);g.fetchers.set(S,Qe),me({fetchers:new Map(g.fetchers)});return}else{fe.add(S);let Qe=Ro(J);return g.fetchers.set(S,Qe),me({fetchers:new Map(g.fetchers)}),go(g,_e,{submission:J,isFetchActionRedirect:!0})}if(ea(_e)){Pl(S,k,_e.error);return}if(bi(_e))throw Ht(400,{type:"defer-action"});let He=g.navigation.location||g.location,tt=No(t.history,He,W.signal),hi=a||o,pi=g.navigation.state!=="idle"?ps(hi,g.navigation.location,l):g.matches;ae(pi,"Didn't find any matches after fetcher action");let vo=++Ue;Q.set(S,vo);let Hd=Ro(J,_e.data);g.fetchers.set(S,Hd);let[jn,Un]=Zy(t.history,g,pi,J,He,D,F,ce,ve,fe,hi,l,{[$.route.id]:_e.data},void 0);Un.filter(Qe=>Qe.key!==S).forEach(Qe=>{let yo=Qe.key,Uv=g.fetchers.get(yo),Sk=Ro(void 0,Uv?Uv.data:void 0);g.fetchers.set(yo,Sk),re.has(yo)&&wr(yo),Qe.controller&&re.set(yo,Qe.controller)}),me({fetchers:new Map(g.fetchers)});let Ol=()=>Un.forEach(Qe=>wr(Qe.key));W.signal.addEventListener("abort",Ol);let{results:qd,loaderResults:Gd,fetcherResults:Kd}=await Pv(g.matches,pi,jn,Un,tt);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Ol),Q.delete(S),re.delete(S),Un.forEach(Qe=>re.delete(Qe.key));let we=o_(qd);if(we){if(we.idx>=jn.length){let Qe=Un[we.idx-jn.length].key;fe.add(Qe)}return go(g,we.result)}let{loaderData:nn,errors:Er}=r_(g,g.matches,jn,Gd,void 0,Un,Kd,N);if(g.fetchers.has(S)){let Qe=ts(_e.data);g.fetchers.set(S,Qe)}let Yd=Mv(vo);g.navigation.state==="loading"&&vo>B?(ae(I,"Expected pending action"),x&&x.abort(),Be(g.navigation.location,{matches:pi,loaderData:nn,errors:Er,fetchers:new Map(g.fetchers)})):(me(Oe({errors:Er,loaderData:i_(g.loaderData,nn,pi,Er)},Yd||Un.length>0?{fetchers:new Map(g.fetchers)}:{})),D=!1)}async function _k(S,k,T,$,ee,J){let Z=g.fetchers.get(S),q=Ro(J,Z?Z.data:void 0);g.fetchers.set(S,q),me({fetchers:new Map(g.fetchers)});let W=new AbortController,be=No(t.history,T,W.signal);re.set(S,W);let at=Ue,_e=await To("loader",be,$,ee,s,i,l);if(bi(_e)&&(_e=await ab(_e,be.signal,!0)||_e),re.get(S)===W&&re.delete(S),be.signal.aborted)return;if(xs(_e))if(B>at){let tt=ts(void 0);g.fetchers.set(S,tt),me({fetchers:new Map(g.fetchers)});return}else{fe.add(S),await go(g,_e);return}if(ea(_e)){let tt=ms(g.matches,k);g.fetchers.delete(S),me({fetchers:new Map(g.fetchers),errors:{[tt.route.id]:_e.error}});return}ae(!bi(_e),"Unhandled fetcher deferred data");let He=ts(_e.data);g.fetchers.set(S,He),me({fetchers:new Map(g.fetchers)})}async function go(S,k,T){let{submission:$,replace:ee,isFetchActionRedirect:J}=T===void 0?{}:T;k.revalidate&&(D=!0);let Z=Ra(S.location,k.location,Oe({_isRedirect:!0},J?{_isFetchActionRedirect:!0}:{}));if(ae(Z,"Expected a location on the redirect navigation"),n){let be=!1;if(k.reloadDocument)be=!0;else if(ib.test(k.location)){const at=t.history.createURL(k.location);be=at.origin!==e.location.origin||ro(at.pathname,l)==null}if(be){ee?e.location.replace(k.location):e.location.assign(k.location);return}}x=null;let q=ee===!0?Ke.Replace:Ke.Push,W=$||l_(S.navigation);if(C2.has(k.status)&&W&&an(W.formMethod))await Dt(q,Z,{submission:Oe({},W,{formAction:k.location}),preventScrollReset:C});else if(J)await Dt(q,Z,{overrideNavigation:Jl(Z),fetcherSubmission:W,preventScrollReset:C});else{let be=Jl(Z,W);await Dt(q,Z,{overrideNavigation:be,preventScrollReset:C})}}async function Pv(S,k,T,$,ee){let J=await Promise.all([...T.map(W=>To("loader",ee,W,k,s,i,l)),...$.map(W=>W.matches&&W.match&&W.controller?To("loader",No(t.history,W.path,W.controller.signal),W.match,W.matches,s,i,l):{type:qe.error,error:Ht(404,{pathname:W.path})})]),Z=J.slice(0,T.length),q=J.slice(T.length);return await Promise.all([a_(S,T,Z,Z.map(()=>ee.signal),!1,g.loaderData),a_(S,$.map(W=>W.match),q,$.map(W=>W.controller?W.controller.signal:null),!0)]),{results:J,loaderResults:Z,fetcherResults:q}}function Vd(){D=!0,F.push(...Bd()),ve.forEach((S,k)=>{re.has(k)&&(ce.push(k),wr(k))})}function Pl(S,k,T){let $=ms(g.matches,k);Wd(S),me({errors:{[$.route.id]:T},fetchers:new Map(g.fetchers)})}function Wd(S){let k=g.fetchers.get(S);re.has(S)&&!(k&&k.state==="loading"&&Q.has(S))&&wr(S),ve.delete(S),Q.delete(S),fe.delete(S),g.fetchers.delete(S)}function wr(S){let k=re.get(S);ae(k,"Expected fetch controller: "+S),k.abort(),re.delete(S)}function Av(S){for(let k of S){let T=Rv(k),$=ts(T.data);g.fetchers.set(k,$)}}function Ov(){let S=[],k=!1;for(let T of fe){let $=g.fetchers.get(T);ae($,"Expected fetcher: "+T),$.state==="loading"&&(fe.delete(T),S.push(T),k=!0)}return Av(S),k}function Mv(S){let k=[];for(let[T,$]of Q)if($<S){let ee=g.fetchers.get(T);ae(ee,"Expected fetcher: "+T),ee.state==="loading"&&(wr(T),Q.delete(T),k.push(T))}return Av(k),k.length>0}function wk(S,k){let T=g.blockers.get(S)||xo;return z.get(S)!==k&&z.set(S,k),T}function Lv(S){g.blockers.delete(S),z.delete(S)}function Al(S,k){let T=g.blockers.get(S)||xo;ae(T.state==="unblocked"&&k.state==="blocked"||T.state==="blocked"&&k.state==="blocked"||T.state==="blocked"&&k.state==="proceeding"||T.state==="blocked"&&k.state==="unblocked"||T.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+k.state);let $=new Map(g.blockers);$.set(S,k),me({blockers:$})}function Dv(S){let{currentLocation:k,nextLocation:T,historyAction:$}=S;if(z.size===0)return;z.size>1&&Di(!1,"A router only supports one blocker at a time");let ee=Array.from(z.entries()),[J,Z]=ee[ee.length-1],q=g.blockers.get(J);if(!(q&&q.state==="proceeding")&&Z({currentLocation:k,nextLocation:T,historyAction:$}))return J}function Bd(S){let k=[];return N.forEach((T,$)=>{(!S||S($))&&(T.cancel(),k.push($),N.delete($))}),k}function Ek(S,k,T){if(f=S,p=k,y=T||null,!_&&g.navigation===Sf){_=!0;let $=jv(g.location,g.matches);$!=null&&me({restoreScrollPosition:$})}return()=>{f=null,p=null,y=null}}function Fv(S,k){return y&&y(S,k.map($=>F2($,g.loaderData)))||S.key}function bk(S,k){if(f&&p){let T=Fv(S,k);f[T]=p()}}function jv(S,k){if(f){let T=Fv(S,k),$=f[T];if(typeof $=="number")return $}return null}function Ik(S){s={},a=Xh(S,i,void 0,s)}return w={get basename(){return l},get state(){return g},get routes(){return o},initialize:ke,subscribe:_r,enableScrollRestoration:Ek,navigate:ft,fetch:vk,revalidate:_t,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:Rv,deleteFetcher:Wd,dispose:ye,getBlocker:wk,deleteBlocker:Lv,_internalFetchControllers:re,_internalActiveDeferreds:N,_internalSetRoutes:Ik},w}function N2(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Zh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Zm(i||".",id(a).map(c=>c.pathnameBase),ro(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!tg(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Qn([n,u.pathname])),Fi(u)}function Xy(t,e,n,r){if(!r||!N2(r))return{path:n};if(r.formMethod&&!D2(r.formMethod))return{path:n,error:Ht(405,{method:r.formMethod})};let i=()=>({path:n,error:Ht(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=ob(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!an(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,p)=>{let[_,E]=p;return""+y+_+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!an(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ae(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=ep(r.formData),u=r.formData;else if(r.body instanceof FormData)l=ep(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=n_(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=n_(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(an(c.formMethod))return{path:n,submission:c};let d=Dn(n);return e&&d.search&&tg(d.search)&&l.append("index",""),d.search="?"+l,{path:Fi(d),submission:c}}function R2(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Zy(t,e,n,r,i,s,o,a,l,u,c,d,f,y){let p=y?Object.values(y)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),E=t.createURL(i),v=y?Object.keys(y)[0]:void 0,w=R2(n,v).filter((I,C)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(P2(e.loaderData,e.matches[C],I)||o.some(D=>D===I.route.id))return!0;let x=e.matches[C],A=I;return e_(I,Oe({currentUrl:_,currentParams:x.params,nextUrl:E,nextParams:A.params},r,{actionResult:p,defaultShouldRevalidate:s||_.pathname+_.search===E.pathname+E.search||_.search!==E.search||sb(x,A)}))}),g=[];return l.forEach((I,C)=>{if(!n.some(ce=>ce.route.id===I.routeId))return;let x=ps(c,I.path,d);if(!x){g.push({key:C,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(C),D=tp(x,I.path),F=!1;u.has(C)?F=!1:a.includes(C)?F=!0:A&&A.state!=="idle"&&A.data===void 0?F=s:F=e_(D,Oe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:p,defaultShouldRevalidate:s})),F&&g.push({key:C,routeId:I.routeId,path:I.path,matches:x,match:D,controller:new AbortController})}),[w,g]}function P2(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function sb(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function e_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function t_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ae(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Di(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!e2.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Oe({},e(i),{lazy:void 0}))}async function To(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=p=>{let _,E=new Promise((v,m)=>_=m);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([p({request:e,params:n.params,context:a.requestContext}),E])};try{let p=n.route[t];if(n.route.lazy)if(p)u=(await Promise.all([d(p),t_(n.route,s,i)]))[0];else if(await t_(n.route,s,i),p=n.route[t],p)u=await d(p);else if(t==="action"){let _=new URL(e.url),E=_.pathname+_.search;throw Ht(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:qe.data,data:void 0};else if(p)u=await d(p);else{let _=new URL(e.url),E=_.pathname+_.search;throw Ht(404,{pathname:E})}ae(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(p){l=qe.error,u=p}finally{c&&e.signal.removeEventListener("abort",c)}if(L2(u)){let p=u.status;if(S2.has(p)){let v=u.headers.get("Location");if(ae(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!ib.test(v))v=Zh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let m=new URL(e.url),w=v.startsWith("//")?new URL(m.protocol+v):new URL(v),g=ro(w.pathname,o)!=null;w.origin===m.origin&&g&&(v=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:qe.redirect,status:p,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===qe.error?qe.error:qe.data,response:u};let _,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?_=await u.json():_=await u.text(),l===qe.error?{type:l,error:new eg(p,u.statusText,_),headers:u.headers}:{type:qe.data,data:_,statusCode:u.status,headers:u.headers}}if(l===qe.error)return{type:l,error:u};if(M2(u)){var f,y;return{type:qe.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:qe.data,data:u}}function No(t,e,n,r){let i=t.createURL(ob(e)).toString(),s={signal:n};if(r&&an(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=ep(r.formData):s.body=r.formData}return new Request(i,s)}function ep(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function n_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function A2(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ae(!xs(c),"Cannot handle redirect results in processLoaderData"),ea(c)){let y=ms(t,f),p=c.error;r&&(p=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=p),s[f]=void 0,l||(l=!0,a=nb(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else bi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function r_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=A2(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:y}=s[c];ae(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let p=o[c];if(!(y&&y.signal.aborted))if(ea(p)){let _=ms(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Oe({},u,{[_.route.id]:p.error})),t.fetchers.delete(d)}else if(xs(p))ae(!1,"Unhandled fetcher revalidation redirect");else if(bi(p))ae(!1,"Unhandled fetcher deferred data");else{let _=ts(p.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function i_(t,e,n,r){let i=Oe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ms(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function s_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ht(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new eg(t||500,o,new Error(a),!0)}function o_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(xs(n))return{result:n,idx:e}}}function ob(t){let e=typeof t=="string"?Dn(t):t;return Fi(Oe({},e,{hash:""}))}function O2(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function bi(t){return t.type===qe.deferred}function ea(t){return t.type===qe.error}function xs(t){return(t&&t.type)===qe.redirect}function M2(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function L2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function D2(t){return I2.has(t.toLowerCase())}function an(t){return E2.has(t.toLowerCase())}async function a_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!sb(u,l)&&(s&&s[l.route.id])!==void 0;if(bi(a)&&(i||c)){let d=r[o];ae(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await ab(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function ab(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:qe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:qe.error,error:i}}return{type:qe.data,data:t.deferredData.data}}}function tg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function F2(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function tp(t,e){let n=typeof e=="string"?Dn(e).search:e.search;if(t[t.length-1].route.index&&tg(n||""))return t[t.length-1];let r=id(t);return r[r.length-1]}function l_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Jl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function j2(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ro(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function U2(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function ts(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lc.apply(this,arguments)}const sd=b.createContext(null),lb=b.createContext(null),io=b.createContext(null),od=b.createContext(null),Ki=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ub=b.createContext(null);function z2(t,e){let{relative:n}=e===void 0?{}:e;ul()||ae(!1);let{basename:r,navigator:i}=b.useContext(io),{hash:s,pathname:o,search:a}=db(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Qn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ul(){return b.useContext(od)!=null}function so(){return ul()||ae(!1),b.useContext(od).location}function cb(t){b.useContext(io).static||b.useLayoutEffect(t)}function ad(){let{isDataRoute:t}=b.useContext(Ki);return t?J2():$2()}function $2(){ul()||ae(!1);let t=b.useContext(sd),{basename:e,navigator:n}=b.useContext(io),{matches:r}=b.useContext(Ki),{pathname:i}=so(),s=JSON.stringify(id(r).map(l=>l.pathnameBase)),o=b.useRef(!1);return cb(()=>{o.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Zm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Qn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function db(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=b.useContext(Ki),{pathname:i}=so(),s=JSON.stringify(id(r).map(o=>o.pathnameBase));return b.useMemo(()=>Zm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function V2(t,e,n){ul()||ae(!1);let{navigator:r}=b.useContext(io),{matches:i}=b.useContext(Ki),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=so(),u;if(e){var c;let _=typeof e=="string"?Dn(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ae(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",y=ps(t,{pathname:f}),p=G2(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Qn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Qn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&p?b.createElement(od.Provider,{value:{location:lc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ke.Pop}},p):p}function W2(){let t=pb(),e=nb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const B2=b.createElement(W2,null);class H2 extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(Ki.Provider,{value:this.props.routeContext},b.createElement(ub.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q2(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Ki.Provider,{value:e},r)}function G2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ae(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||B2);let f=e.concat(s.slice(0,u+1)),y=()=>{let p;return c?p=d:l.route.Component?p=b.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,b.createElement(q2,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(H2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var fb=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fb||{}),uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uc||{});function K2(t){let e=b.useContext(sd);return e||ae(!1),e}function Y2(t){let e=b.useContext(lb);return e||ae(!1),e}function Q2(t){let e=b.useContext(Ki);return e||ae(!1),e}function hb(t){let e=Q2(),n=e.matches[e.matches.length-1];return n.route.id||ae(!1),n.route.id}function pb(){var t;let e=b.useContext(ub),n=Y2(uc.UseRouteError),r=hb(uc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function J2(){let{router:t}=K2(fb.UseNavigateStable),e=hb(uc.UseNavigateStable),n=b.useRef(!1);return cb(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,lc({fromRouteId:e},s)))},[t,e])}const X2="startTransition",u_=$k[X2];function Z2(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=b.useState(n.state),{v7_startTransition:o}=r||{},a=b.useCallback(d=>{o&&u_?u_(()=>s(d)):s(d)},[s,o]);b.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,y)=>n.navigate(d,{state:f,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(d,f,y)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),u=n.basename||"/",c=b.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return b.createElement(b.Fragment,null,b.createElement(sd.Provider,{value:c},b.createElement(lb.Provider,{value:i},b.createElement(tN,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?b.createElement(eN,{routes:n.routes,state:i}):e))),null)}function eN(t){let{routes:e,state:n}=t;return V2(e,void 0,n)}function tN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ke.Pop,navigator:s,static:o=!1}=t;ul()&&ae(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Dn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:y="default"}=r,p=b.useMemo(()=>{let _=ro(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:y},navigationType:i}},[a,u,c,d,f,y,i]);return p==null?null:b.createElement(io.Provider,{value:l},b.createElement(od.Provider,{children:n,value:p}))}new Promise(()=>{});function nN(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:b.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:b.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pa.apply(this,arguments)}function rN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sN(t,e){return t.button===0&&(!e||e==="_self")&&!iN(t)}const oN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function aN(t,e){return T2({basename:e==null?void 0:e.basename,future:Pa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:JT({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||lN(),routes:t,mapRouteProperties:nN}).initialize()}function lN(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Pa({},e,{errors:uN(e.errors)})),e}function uN(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new eg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const cN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mn=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=rN(e,oN),{basename:f}=b.useContext(io),y,p=!1;if(typeof u=="string"&&dN.test(u)&&(y=u,cN))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),g=ro(w.pathname,f);w.origin===m.origin&&g!=null?u=g+w.search+w.hash:p=!0}catch{}let _=z2(u,{relative:i}),E=fN(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(m){r&&r(m),m.defaultPrevented||E(m)}return b.createElement("a",Pa({},d,{href:y||_,onClick:p||s?r:v,ref:n,target:l}))});var c_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(c_||(c_={}));var d_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(d_||(d_={}));function fN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ad(),l=so(),u=db(t,{relative:o});return b.useCallback(c=>{if(sN(c,n)){c.preventDefault();let d=r!==void 0?r:Fi(l)===Fi(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function hN(){return h.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[h.jsx("p",{className:"font-bold text-2xl",children:"Email Verification"}),h.jsxs("p",{className:"w-[70%] text-center",children:["You have not verified your email. Please check your inbox for an email verification link. ",h.jsx("br",{}),"If you did not receive one, consider double checking your email when signing up."]}),h.jsx(Mn,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page"})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw oo(e)},oo=function(t){return new Error("Firebase Database ("+mb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[c],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new mN;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vb=function(t){const e=gb(t);return ng.encodeByteArray(e,!0)},cc=function(t){return vb(t).replace(/\./g,"")},Aa=function(t){try{return ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){return yb(void 0,t)}function yb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vN(n)||(t[n]=yb(t[n],e[n]));return t}function vN(t){return t!=="__proto__"}/**
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
 */function yN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _N=()=>yN().__FIREBASE_DEFAULTS__,wN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Aa(t[1]);return e&&JSON.parse(e)},rg=()=>{try{return _N()||wN()||EN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_b=t=>{var e,n;return(n=(e=rg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bN=t=>{const e=_b(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wb=()=>{var t;return(t=rg())===null||t===void 0?void 0:t.config},Eb=t=>{var e;return(e=rg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function IN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function bb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ib(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sb(){return mb.NODE_ADMIN===!0}function SN(){try{return typeof indexedDB=="object"}catch{return!1}}function CN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kN,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new En(i,a,r)}}function xN(t,e){return t.replace(TN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Oa(Aa(s[0])||""),n=Oa(Aa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},NN=function(t){const e=Cb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RN=function(t){const e=Cb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function fc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(f_(s)&&f_(o)){if(!fc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function f_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kb(t,e){const n=new AN(t,e);return n.subscribe.bind(n)}class AN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ON(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cf),i.error===void 0&&(i.error=Cf),i.complete===void 0&&(i.complete=Cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ON(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cf(){}function sg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vi="[DEFAULT]";/**
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
 */class LN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ld;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FN(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DN(t){return t===vi?void 0:t}function FN(t){return t.instantiationMode==="EAGER"}/**
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
 */class jN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const UN={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},zN=pe.INFO,$N={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},VN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$N[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=zN,this._logHandler=VN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const WN=(t,e)=>e.some(n=>t instanceof n);let h_,p_;function BN(){return h_||(h_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HN(){return p_||(p_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xb=new WeakMap,rp=new WeakMap,Tb=new WeakMap,kf=new WeakMap,og=new WeakMap;function qN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xb.set(n,t)}).catch(()=>{}),og.set(e,t),e}function GN(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KN(t){ip=t(ip)}function YN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xf(this),e,...n);return Tb.set(r,e.sort?e.sort():[e]),Yr(r)}:HN().includes(t)?function(...e){return t.apply(xf(this),e),Yr(xb.get(this))}:function(...e){return Yr(t.apply(xf(this),e))}}function QN(t){return typeof t=="function"?YN(t):(t instanceof IDBTransaction&&GN(t),WN(t,BN())?new Proxy(t,ip):t)}function Yr(t){if(t instanceof IDBRequest)return qN(t);if(kf.has(t))return kf.get(t);const e=QN(t);return e!==t&&(kf.set(t,e),og.set(e,t)),e}const xf=t=>og.get(t);function JN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yr(o.result),l.oldVersion,l.newVersion,Yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const XN=["get","getKey","getAll","getAllKeys","count"],ZN=["put","add","delete","clear"],Tf=new Map;function m_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tf.get(e))return Tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Tf.set(e,s),s}KN(t=>({...t,get:(e,n,r)=>m_(e,n)||t.get(e,n,r),has:(e,n)=>!!m_(e,n)||t.has(e,n)}));/**
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
 */class eR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sp="@firebase/app",g_="0.9.16";/**
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
 */const ji=new dd("@firebase/app"),nR="@firebase/app-compat",rR="@firebase/analytics-compat",iR="@firebase/analytics",sR="@firebase/app-check-compat",oR="@firebase/app-check",aR="@firebase/auth",lR="@firebase/auth-compat",uR="@firebase/database",cR="@firebase/database-compat",dR="@firebase/functions",fR="@firebase/functions-compat",hR="@firebase/installations",pR="@firebase/installations-compat",mR="@firebase/messaging",gR="@firebase/messaging-compat",vR="@firebase/performance",yR="@firebase/performance-compat",_R="@firebase/remote-config",wR="@firebase/remote-config-compat",ER="@firebase/storage",bR="@firebase/storage-compat",IR="@firebase/firestore",SR="@firebase/firestore-compat",CR="firebase",kR="10.2.0";/**
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
 */const op="[DEFAULT]",xR={[sp]:"fire-core",[nR]:"fire-core-compat",[iR]:"fire-analytics",[rR]:"fire-analytics-compat",[oR]:"fire-app-check",[sR]:"fire-app-check-compat",[aR]:"fire-auth",[lR]:"fire-auth-compat",[uR]:"fire-rtdb",[cR]:"fire-rtdb-compat",[dR]:"fire-fn",[fR]:"fire-fn-compat",[hR]:"fire-iid",[pR]:"fire-iid-compat",[mR]:"fire-fcm",[gR]:"fire-fcm-compat",[vR]:"fire-perf",[yR]:"fire-perf-compat",[_R]:"fire-rc",[wR]:"fire-rc-compat",[ER]:"fire-gcs",[bR]:"fire-gcs-compat",[IR]:"fire-fst",[SR]:"fire-fst-compat","fire-js":"fire-js",[CR]:"fire-js-all"};/**
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
 */const hc=new Map,ap=new Map;function TR(t,e){try{t.container.addComponent(e)}catch(n){ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(ap.has(e))return ji.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,t);for(const n of hc.values())TR(n,t);return!0}function ag(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const NR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qr=new ci("app","Firebase",NR);/**
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
 */class RR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=kR;function Nb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:op,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=wb()),!n)throw Qr.create("no-options");const s=hc.get(i);if(s){if(fc(n,s.options)&&fc(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new jN(i);for(const l of ap.values())o.addComponent(l);const a=new RR(n,r,o);return hc.set(i,a),a}function Rb(t=op){const e=hc.get(t);if(!e&&t===op&&wb())return Nb();if(!e)throw Qr.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=xR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ji.warn(a.join(" "));return}ti(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const PR="firebase-heartbeat-database",AR=1,Ma="firebase-heartbeat-store";let Nf=null;function Pb(){return Nf||(Nf=JN(PR,AR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ma)}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Nf}async function OR(t){try{return await(await Pb()).transaction(Ma).objectStore(Ma).get(Ab(t))}catch(e){if(e instanceof En)ji.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ji.warn(n.message)}}}async function v_(t,e){try{const r=(await Pb()).transaction(Ma,"readwrite");await r.objectStore(Ma).put(e,Ab(t)),await r.done}catch(n){if(n instanceof En)ji.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ji.warn(r.message)}}}function Ab(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MR=1024,LR=30*24*60*60*1e3;class DR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=y_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=LR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=y_(),{heartbeatsToSend:n,unsentEntries:r}=FR(this._heartbeatsCache.heartbeats),i=cc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function y_(){return new Date().toISOString().substring(0,10)}function FR(t,e=MR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),__(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),__(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SN()?CN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function __(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UR(t){ti(new rr("platform-logger",e=>new eR(e),"PRIVATE")),ti(new rr("heartbeat",e=>new DR(e),"PRIVATE")),Pn(sp,g_,t),Pn(sp,g_,"esm2017"),Pn("fire-js","")}UR("");var zR="firebase",$R="10.2.0";/**
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
 */Pn(zR,$R,"app");var lp=function(t,e){return lp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},lp(t,e)};function Le(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");lp(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ne=function(){return Ne=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ne.apply(this,arguments)};function ao(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function O(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function M(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Xt(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function w_(t){return t!==void 0&&t.enterprise!==void 0}let VR=class{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}};function Ob(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WR=Ob,Mb=new ci("auth","Firebase",Ob());/**
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
 */const pc=new dd("@firebase/auth");function BR(t,...e){pc.logLevel<=pe.WARN&&pc.warn(`Auth (${pr}): ${t}`,...e)}function Cu(t,...e){pc.logLevel<=pe.ERROR&&pc.error(`Auth (${pr}): ${t}`,...e)}/**
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
 */function _n(t,...e){throw lg(t,...e)}function An(t,...e){return lg(t,...e)}function HR(t,e,n){const r=Object.assign(Object.assign({},WR()),{[e]:n});return new ci("auth","Firebase",r).create(e,{appName:t.name})}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mb.create(t,...e)}function G(t,e,...n){if(!t)throw lg(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function ir(t,e){t||Hn(e)}/**
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
 */function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qR(){return E_()==="http:"||E_()==="https:"}function E_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qR()||bb()||"connection"in navigator)?navigator.onLine:!0}function KR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */let cl=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=ud()||ig()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function ug(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */let Lb=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QR=new cl(3e4,6e4);function di(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,i={}){return Db(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=hr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Lb.fetch()(Fb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Db(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YR),e);try{const i=new JR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw HR(t,c,u);_n(t,c)}}catch(i){if(i instanceof En)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function dl(t,e,n,r,i={}){const s=await mr(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Fb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ug(t.config,i):`${t.config.apiScheme}://${i}`}let JR=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),QR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}async function XR(t,e){return mr(t,"GET","/v2/recaptchaConfig",di(t,e))}/**
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
 */async function ZR(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function eP(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tP(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=cg(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ta(Rf(i.auth_time)),issuedAtTime:ta(Rf(i.iat)),expirationTime:ta(Rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rf(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Aa(n);return i?JSON.parse(i):(Cu("Failed to decode base64 JWT payload"),null)}catch(i){return Cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nP(t){const e=cg(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&rP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */let iP=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let jb=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ta(this.lastLoginAt),this.creationTime=ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function mc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hs(t,eP(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aP(s.providerUserInfo):[],a=oP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jb(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function sP(t){const e=We(t);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aP(t){return t.map(e=>{var{providerId:n}=e,r=ao(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lP(t,e){const n=await Db(t,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Fb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */let b_=class cp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cp;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cp,this.toJSON())}_performRefresh(){return Hn("not implemented")}};/**
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
 */function Ir(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let dp=class ku{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ao(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tP(this,e)}reload(){return sP(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ku(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hs(this,ZR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:g,isAnonymous:I,providerData:C,stsTokenManager:x}=n;G(w&&x,e,"internal-error");const A=b_.fromJSON(this.name,x);G(typeof w=="string",e,"internal-error"),Ir(d,e.name),Ir(f,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof I=="boolean",e,"internal-error"),Ir(y,e.name),Ir(p,e.name),Ir(_,e.name),Ir(E,e.name),Ir(v,e.name),Ir(m,e.name);const D=new ku({uid:w,auth:e,email:f,emailVerified:g,displayName:d,isAnonymous:I,photoURL:p,phoneNumber:y,tenantId:_,stsTokenManager:A,createdAt:v,lastLoginAt:m});return C&&Array.isArray(C)&&(D.providerData=C.map(F=>Object.assign({},F))),E&&(D._redirectEventId=E),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new b_;i.updateFromServerResponse(n);const s=new ku({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mc(s),s}};/**
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
 */const I_=new Map;function qn(t){ir(t instanceof Function,"Expected a class definition");let e=I_.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I_.set(t,e),e)}/**
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
 */let Ub=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};Ub.type="NONE";const S_=Ub;/**
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
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}let C_=class Tu{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xu(this.userKey,i.apiKey,s),this.fullPersistenceKey=xu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tu(qn(S_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qn(S_);const o=xu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=dp._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Tu(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Tu(s,e,r))}};/**
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
 */function k_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bb(e))return"Blackberry";if(Hb(e))return"Webos";if(dg(e))return"Safari";if((e.includes("chrome/")||$b(e))&&!e.includes("edge/"))return"Chrome";if(Wb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zb(t=Ee()){return/firefox\//i.test(t)}function dg(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $b(t=Ee()){return/crios\//i.test(t)}function Vb(t=Ee()){return/iemobile/i.test(t)}function Wb(t=Ee()){return/android/i.test(t)}function Bb(t=Ee()){return/blackberry/i.test(t)}function Hb(t=Ee()){return/webos/i.test(t)}function fd(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uP(t=Ee()){var e;return fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cP(){return Ib()&&document.documentMode===10}function qb(t=Ee()){return fd(t)||Wb(t)||Hb(t)||Bb(t)||/windows phone/i.test(t)||Vb(t)}function dP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gb(t,e=[]){let n;switch(t){case"Browser":n=k_(Ee());break;case"Worker":n=`${k_(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${r}`}/**
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
 */let fP=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function hP(t,e={}){return mr(t,"GET","/v2/passwordPolicy",di(t,e))}/**
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
 */const pP=6;let mP=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let gP=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x_(this),this.idTokenSubscription=new x_(this),this.beforeStateQueue=new fP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await C_.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hP(this),n=new mP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await C_.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function fi(t){return We(t)}let x_=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=kb(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */function vP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vP().appendChild(r)})}function yP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _P="https://www.google.com/recaptcha/enterprise.js?render=",wP="recaptcha-enterprise",EP="NO_RECAPTCHA";let bP=class{constructor(e){this.type=wP,this.auth=fi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{XR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new VR(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;w_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(EP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&w_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Kb(_P+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}};async function qs(t,e,n,r=!1){const i=new bP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function IP(t,e){const n=ag(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fc(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function SP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=fi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Yb(e),{host:o,port:a}=kP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xP()}function Yb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kP(t){const e=Yb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:T_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:T_(o)}}}function T_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */let fg=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}};async function TP(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Pf(t,e){return dl(t,"POST","/v1/accounts:signInWithPassword",di(t,e))}async function Qb(t,e){return mr(t,"POST","/v1/accounts:sendOobCode",di(t,e))}async function NP(t,e){return Qb(t,e)}async function Af(t,e){return Qb(t,e)}/**
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
 */async function RP(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}async function PP(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}/**
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
 */let N_=class fp extends fg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fp(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fp(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await qs(e,r,"signInWithPassword");return Pf(e,i)}else return Pf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await qs(e,r,"signInWithPassword");return Pf(e,s)}else return Promise.reject(i)});case"emailLink":return RP(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return TP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PP(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
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
 */async function Ts(t,e){return dl(t,"POST","/v1/accounts:signInWithIdp",di(t,e))}/**
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
 */const AP="http://localhost";let hd=class hp extends fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ao(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hp(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:AP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hr(n)}return e}};/**
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
 */function OP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MP(t){const e=kn(xn(t)).link,n=e?kn(xn(e)).deep_link_id:null,r=kn(xn(t)).deep_link_id;return(r?kn(xn(r)).link:null)||r||n||e||t}let LP=class Jb{constructor(e){var n,r,i,s,o,a;const l=kn(xn(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=OP((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MP(e);try{return new Jb(n)}catch{return null}}};/**
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
 */let pd=class Xb{constructor(){this.providerId=Xb.PROVIDER_ID}static credential(e,n){return N_._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=LP.parseLink(n);return G(r,"argument-error"),N_._fromEmailAndCode(e,r.code,r.tenantId)}};pd.PROVIDER_ID="password";pd.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pd.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */let Zb=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let fl=class extends Zb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
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
 */class Pr extends fl{constructor(){super("facebook.com")}static credential(e){return hd._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class Ar extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hd._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
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
 */class Or extends fl{constructor(){super("github.com")}static credential(e){return hd._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class Mr extends fl{constructor(){super("twitter.com")}static credential(e,n){return hd._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mr.credential(n,r)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
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
 */async function Of(t,e){return dl(t,"POST","/v1/accounts:signUp",di(t,e))}/**
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
 */let md=class pp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dp._fromIdTokenResponse(e,r,i),o=R_(r);return new pp({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=R_(r);return new pp({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function R_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */let DP=class mp extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mp.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mp(e,n,r,i)}};function eI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?DP._fromErrorAndOperation(t,s,e,r):s})}async function FP(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return md._forOperation(t,"link",r)}/**
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
 */async function tI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hs(t,eI(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=cg(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),md._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
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
 */async function nI(t,e,n=!1){const r="signIn",i=await eI(t,r,e),s=await md._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jP(t,e){return nI(fi(t),e)}async function UP(t,e){return tI(We(t),e)}/**
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
 */function Nu(t,e,n){var r;G(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),G(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(G(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(G(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function rI(t){const e=fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zP(t,e,n){var r;const i=fi(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await qs(i,s,"getOobCode",!0);n&&Nu(i,o,n),await Af(i,o)}else n&&Nu(i,s,n),await Af(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await qs(i,s,"getOobCode",!0);n&&Nu(i,a,n),await Af(i,a)}else return Promise.reject(o)})}async function $P(t,e,n){var r;const i=fi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await qs(i,s,"signUpPassword");o=Of(i,u)}else o=Of(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await qs(i,s,"signUpPassword");return Of(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rI(t),u}),l=await md._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function VP(t,e,n){return jP(We(t),pd.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rI(t),r})}async function WP(t,e){const n=We(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Nu(n.auth,i,e);const{email:s}=await NP(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function BP(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hs(r,BP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function GP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function KP(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function YP(t){return We(t).signOut()}async function QP(t){return We(t).delete()}const gc="__sak";/**
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
 */let iI=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
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
 */function JP(){const t=Ee();return dg(t)||fd(t)}const XP=1e3,ZP=10;class sI extends iI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JP()&&dP(),this.fallbackToPolling=qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sI.type="LOCAL";const eA=sI;/**
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
 */class oI extends iI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oI.type="SESSION";const aI=oI;/**
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
 */function tA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await tA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gd.receivers=[];/**
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
 */function hg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function On(){return window}function rA(t){On().location.href=t}/**
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
 */function lI(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function iA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oA(){return lI()?self:null}/**
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
 */const uI="firebaseLocalStorageDb",aA=1,vc="firebaseLocalStorage",cI="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vd(t,e){return t.transaction([vc],e?"readwrite":"readonly").objectStore(vc)}function lA(){const t=indexedDB.deleteDatabase(uI);return new hl(t).toPromise()}function gp(){const t=indexedDB.open(uI,aA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vc,{keyPath:cI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vc)?e(r):(r.close(),await lA(),e(await gp()))})})}async function P_(t,e,n){const r=vd(t,!0).put({[cI]:e,value:n});return new hl(r).toPromise()}async function uA(t,e){const n=vd(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function A_(t,e){const n=vd(t,!0).delete(e);return new hl(n).toPromise()}const cA=800,dA=3;class dI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gd._getInstance(oA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iA(),!this.activeServiceWorker)return;this.sender=new nA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gp();return await P_(e,gc,"1"),await A_(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>P_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vd(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dI.type="LOCAL";const fA=dI;new cl(3e4,6e4);/**
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
 */function hA(t,e){return e?qn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */let pg=class extends fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function pA(t){return nI(t.auth,new pg(t),t.bypassAuthState)}function mA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),tI(n,new pg(t),t.bypassAuthState)}async function gA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),FP(n,new pg(t),t.bypassAuthState)}/**
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
 */let fI=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pA;case"linkViaPopup":case"linkViaRedirect":return gA;case"reauthViaPopup":case"reauthViaRedirect":return mA;default:_n(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
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
 */const vA=new cl(2e3,1e4);class gs extends fI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vA.get())};e()}}gs.currentPopupAction=null;/**
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
 */const yA="pendingRedirect",Ru=new Map;class _A extends fI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const r=await wA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wA(t,e){const n=IA(e),r=bA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function EA(t,e){Ru.set(t._key(),e)}function bA(t){return qn(t._redirectPersistence)}function IA(t){return xu(yA,t.config.apiKey,t.name)}async function SA(t,e,n=!1){const r=fi(t),i=hA(r,e),o=await new _A(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const CA=10*60*1e3;let kA=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CA&&this.cachedEventUids.clear(),this.cachedEventUids.has(O_(e))}saveEventToCache(e){this.cachedEventUids.add(O_(e)),this.lastProcessedEventTime=Date.now()}};function O_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hI(t);default:return!1}}/**
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
 */async function TA(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
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
 */const NA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RA=/^https?/;async function PA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TA(t);for(const n of e)try{if(AA(n))return}catch{}_n(t,"unauthorized-domain")}function AA(t){const e=up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RA.test(n))return!1;if(NA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const OA=new cl(3e4,6e4);function M_(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MA(t){return new Promise((e,n)=>{var r,i,s;function o(){M_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{M_(),n(An(t,"network-request-failed"))},timeout:OA.get()})}if(!((i=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=On().gapi)===null||s===void 0)&&s.load)o();else{const a=yP("iframefcb");return On()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},Kb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function LA(t){return Pu=Pu||MA(t),Pu}/**
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
 */const DA=new cl(5e3,15e3),FA="__/auth/iframe",jA="emulator/auth/iframe",UA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $A(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ug(e,jA):`https://${t.config.authDomain}/${FA}`,r={apiKey:e.apiKey,appName:t.name,v:pr},i=zA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hr(r).slice(1)}`}async function VA(t){const e=await LA(t),n=On().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:$A(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},DA.get());function l(){On().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const WA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,HA=600,qA="_blank",GA="http://localhost";class L_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(t,e,n,r=BA,i=HA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=$b(u)?qA:n),zb(u)&&(e=e||GA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[y,p])=>`${f}${y}=${p},`,"");if(uP(u)&&a!=="_self")return YA(e||"",a),new L_(null);const d=window.open(e||"",a,c);G(d,t,"popup-blocked");try{d.focus()}catch{}return new L_(d)}function YA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QA="__/auth/handler",JA="emulator/auth/handler",XA=encodeURIComponent("fac");async function D_(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pr,eventId:i};if(e instanceof Zb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",np(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof fl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${XA}=${encodeURIComponent(l)}`:"";return`${ZA(t)}?${hr(a).slice(1)}${u}`}function ZA({config:t}){return t.emulator?ug(t,JA):`https://${t.authDomain}/${QA}`}/**
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
 */const Mf="webStorageSupport";class eO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aI,this._completeRedirectFn=SA,this._overrideRedirectResult=EA}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await D_(e,n,r,up(),i);return KA(e,o,hg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await D_(e,n,r,up(),i);return rA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VA(e),r=new kA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mf,{type:Mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mf];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qb()||dg()||fd()}}const tO=eO;var F_="@firebase/auth",j_="1.2.0";/**
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
 */let nO=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function rO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iO(t){ti(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gb(t)},u=new gP(r,i,s,l);return SP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new rr("auth-internal",e=>{const n=fi(e.getProvider("auth").getImmediate());return(r=>new nO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(F_,j_,rO(t)),Pn(F_,j_,"esm2017")}/**
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
 */const sO=5*60,oO=Eb("authIdTokenMaxAge")||sO;let U_=null;const aO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oO)return;const i=n==null?void 0:n.token;U_!==i&&(U_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pI(t=Rb()){const e=ag(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IP(t,{popupRedirectResolver:tO,persistence:[fA,eA,aI]}),r=Eb("authTokenSyncURL");if(r){const s=aO(r);GP(n,s,()=>s(n.currentUser)),qP(n,o=>s(o))}const i=_b("auth");return i&&CP(n,`http://${i}`),n}iO("Browser");const z_="@firebase/database",$_="1.0.1";/**
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
 */let mI="";function lO(t){mI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Oa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return fr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uO(e)}}catch{}return new cO},Ii=gI("localStorage"),vp=gI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new dd("@firebase/database"),dO=function(){let t=1;return function(){return t++}}(),vI=function(t){const e=MN(t),n=new PN;n.update(e);const r=n.digest();return ng.encodeByteArray(r)},pl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=pl.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let Ri=null,V_=!0;const fO=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ns.logLevel=pe.VERBOSE,Ri=Ns.log.bind(Ns),e&&vp.set("logging_enabled",!0)):typeof t=="function"?Ri=t:(Ri=null,vp.remove("logging_enabled"))},gt=function(...t){if(V_===!0&&(V_=!1,Ri===null&&vp.get("logging_enabled")===!0&&fO(!0)),Ri){const e=pl.apply(null,t);Ri(e)}},ml=function(t){return function(...e){gt(t,...e)}},yp=function(...t){const e="FIREBASE INTERNAL ERROR: "+pl(...t);Ns.error(e)},sr=function(...t){const e=`FIREBASE FATAL ERROR: ${pl(...t)}`;throw Ns.error(e),new Error(e)},Mt=function(...t){const e="FIREBASE WARNING: "+pl(...t);Ns.warn(e)},hO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gs="[MIN_NAME]",Ui="[MAX_NAME]",lo=function(t,e){if(t===e)return 0;if(t===Gs||e===Ui)return-1;if(e===Gs||t===Ui)return 1;{const n=W_(t),r=W_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mO=function(t,e){return t===e?0:t<e?-1:1},Po=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},mg=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=mg(t[e[r]]);return n+="}",n},_I=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wI=function(t){L(!yI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},gO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _O=new RegExp("^-?(0*)\\d{1,10}$"),wO=-2147483648,EO=2147483647,W_=function(t){if(_O.test(t)){const e=Number(t);if(e>=wO&&e<=EO)return e}return null},uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},bO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},na=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class IO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mt(e)}}class Rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="5",EI="v",bI="s",II="r",SI="f",CI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kI="ls",xI="p",_p="ac",TI="websocket",NI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ii.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ii.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function PI(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===TI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===NI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CO(t)&&(n.ns=t.namespace);const i=[];return Lt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(){this.counters_={}}incrementCounter(e,n=1){fr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf={},Df={};function vg(t){const e=t.toString();return Lf[e]||(Lf[e]=new kO),Lf[e]}function xO(t,e){const n=t.toString();return Df[n]||(Df[n]=e()),Df[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&uo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="start",NO="close",RO="pLPCommand",PO="pRTLPCB",AI="id",OI="pw",MI="ser",AO="cb",OO="seg",MO="ts",LO="d",DO="dframe",LI=1870,DI=30,FO=LI-DI,jO=25e3,UO=3e4;class vs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ml(e),this.stats_=vg(n),this.urlFn=l=>(this.appCheckToken&&(l[_p]=this.appCheckToken),PI(n,NI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UO)),pO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===B_)this.id=a,this.password=l;else if(o===NO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[B_]="t",r[MI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[AO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[EI]=gg,this.transportSessionId&&(r[bI]=this.transportSessionId),this.lastSessionId&&(r[kI]=this.lastSessionId),this.applicationId&&(r[xI]=this.applicationId),this.appCheckToken&&(r[_p]=this.appCheckToken),typeof location<"u"&&location.hostname&&CI.test(location.hostname)&&(r[II]=SI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vs.forceAllow_=!0}static forceDisallow(){vs.forceDisallow_=!0}static isAvailable(){return vs.forceAllow_?!0:!vs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gO()&&!vO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vb(n),i=_I(r,FO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[DO]="t",r[AI]=e,r[OI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dO(),window[RO+this.uniqueCallbackIdentifier]=e,window[PO+this.uniqueCallbackIdentifier]=n,this.myIFrame=yg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AI]=this.myID,e[OI]=this.myPW,e[MI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DI+r.length<=LI;){const o=this.pendingSegs.shift();r=r+"&"+OO+i+"="+o.seg+"&"+MO+i+"="+o.ts+"&"+LO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=16384,$O=45e3;let yc=null;typeof MozWebSocket<"u"?yc=MozWebSocket:typeof WebSocket<"u"&&(yc=WebSocket);class cn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ml(this.connId),this.stats_=vg(n),this.connURL=cn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[EI]=gg,typeof location<"u"&&location.hostname&&CI.test(location.hostname)&&(o[II]=SI),n&&(o[bI]=n),r&&(o[kI]=r),i&&(o[_p]=i),s&&(o[xI]=s),PI(e,TI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ii.set("previous_websocket_failure",!0);try{let r;Sb(),this.mySock=new yc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yc!==null&&!cn.forceDisallow_}static previouslyFailed(){return Ii.isInMemoryStorage||Ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ii.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Oa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_I(n,zO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($O))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cn.responsesRequiredToBeHealthy=2;cn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vs,cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=cn&&cn.isAvailable();let r=n&&!cn.previouslyFailed();if(e.webSocketOnly&&(n||Mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cn];else{const i=this.transports_=[];for(const s of La.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);La.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}La.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=6e4,WO=5e3,BO=10*1024,HO=100*1024,Ff="t",H_="d",qO="s",q_="r",GO="e",G_="o",K_="a",Y_="n",Q_="p",KO="h";class YO{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ml("c:"+this.id+":"),this.transportManager_=new La(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=na(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ff in e){const n=e[Ff];n===K_?this.upgradeIfSecondaryHealthy_():n===q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===G_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Po("t",e),r=Po("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Q_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:K_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Y_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Po("t",e),r=Po("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Po(Ff,e);if(H_ in e){const r=e[H_];if(n===KO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Y_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qO?this.onConnectionShutdown_(r):n===q_?this.onReset_(r):n===GO?yp("Server Error: "+r):n===G_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gg!==r&&Mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),na(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):na(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Q_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends jI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _c}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=32,X_=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new Ie("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ni(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function UI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $I(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ie(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Nt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Nt(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _g(t,e){if(ni(t)!==ni(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ni(t)>ni(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JO{constructor(e,n){this.errorPrefix_=n,this.parts_=zI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cd(this.parts_[r]);VI(this)}}function XO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cd(e),VI(t)}function ZO(t){const e=t.parts_.pop();t.byteLength_-=cd(e),t.parts_.length>0&&(t.byteLength_-=1)}function VI(t){if(t.byteLength_>X_)throw new Error(t.errorPrefix_+"has a key path longer than "+X_+" bytes ("+t.byteLength_+").");if(t.parts_.length>J_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+J_+") or object contains a cycle "+yi(t))}function yi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends jI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wg}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=1e3,eM=60*5*1e3,Z_=30*1e3,tM=1.3,nM=3e4,rM="server_kill",e0=3;class Jn extends FI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Jn.nextPersistentConnectionId_++,this.log_=ml("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ao,this.maxReconnectDelay_=eM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Sb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(st(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ld,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Jn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&fr(e,"w")){const r=Bs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Z_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=NN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yp("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nM&&(this.reconnectDelay_=Ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Jn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new YO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Mt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(rM)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Mt(d),l())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],np(this.interruptReasons_)&&(this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>mg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e0&&(this.reconnectDelay_=Z_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mI.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:ig()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_c.getInstance().currentlyOnline();return np(this.interruptReasons_)&&e}}Jn.nextPersistentConnectionId_=0;Jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Gs,e),i=new se(Gs,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;class WI extends yd{static get __EMPTY_NODE(){return Zl}static set __EMPTY_NODE(e){Zl=e}compare(e,n){return lo(e.name,n.name)}isDefinedOn(e){throw oo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Ui,Zl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Zl)}toString(){return".key"}}const Ps=new WI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??Rt.EMPTY_NODE,this.right=s??Rt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class iM{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,n=Rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new eu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new eu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new eu(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new iM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t,e){return lo(t.name,e.name)}function Eg(t,e){return lo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wp;function oM(t){wp=t}const BI=function(t){return typeof t=="number"?"number:"+wI(t):"string:"+t},HI=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fr(e,".sv"),"Priority must be a string or number.")}else L(t===wp||t.isEmpty(),"priority of unexpected type.");L(t===wp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),HI(this.priorityNode_)}static set __childrenNodeConstructor(e){t0=e}static get __childrenNodeConstructor(){return t0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||ni(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wI(this.value_):e+=this.value_,this.lazyHash_=vI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=nt.VALUE_TYPE_ORDER.indexOf(n),s=nt.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qI,GI;function aM(t){qI=t}function lM(t){GI=t}class uM extends yd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?lo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Ui,new nt("[PRIORITY-POST]",GI))}makePost(e,n){const r=qI(e);return new se(n,new nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ve=new uM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=Math.log(2);class dM{constructor(e){const n=s=>parseInt(Math.log(s)/cM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new it(f,d.node,it.BLACK,null,null);{const y=parseInt(c/2,10)+l,p=i(l,y),_=i(y+1,u);return d=t[y],f=n?n(d):d,new it(f,d.node,it.BLACK,p,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(p,_){const E=d-p,v=d;d-=p;const m=i(E+1,v),w=t[E],g=n?n(w):w;y(new it(g,w.node,_,null,m))},y=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(p+1));_?f(E,it.BLACK):(f(E,it.BLACK),f(E,it.RED))}return c},o=new dM(t.length),a=s(o);return new Rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf;const Xi={};class Gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Xi&&Ve,"ChildrenNode.ts has not been loaded"),jf=jf||new Gn({".priority":Xi},{".priority":Ve}),jf}get(e){const n=Bs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rt?n:null}hasIndex(e){return fr(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=wc(r,e.getCompare()):a=Xi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Gn(c,u)}addToIndexes(e,n){const r=dc(this.indexes_,(i,s)=>{const o=Bs(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Xi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(se.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),wc(a,o.getCompare())}else return Xi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new Gn(r,this.indexSet_)}removeFromIndexes(e,n){const r=dc(this.indexes_,i=>{if(i===Xi)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new Gn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&HI(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oo||(Oo=new Y(new Rt(Eg),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oo}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oo:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Oo:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{L(ie(e)!==".priority"||ni(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BI(this.getPriority().val())+":"),this.forEachChild(Ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gl?-1:0}withIndex(e){if(e===Ps||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ve),i=n.getIterator(Ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ps?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fM extends Y{constructor(){super(new Rt(Eg),Y.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const gl=new fM;Object.defineProperties(se,{MIN:{value:new se(Gs,Y.EMPTY_NODE)},MAX:{value:new se(Ui,gl)}});WI.__EMPTY_NODE=Y.EMPTY_NODE;nt.__childrenNodeConstructor=Y;oM(gl);lM(gl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=!0;function ut(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,ut(e))}if(!(t instanceof Array)&&hM){const n=[];let r=!1;if(Lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ut(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new se(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const s=wc(n,sM,o=>o.name,Eg);if(r){const o=wc(n,Ve.getCompare());return new Y(s,ut(e),new Gn({".priority":o},{".priority":Ve}))}else return new Y(s,ut(e),Gn.Default)}else{let n=Y.EMPTY_NODE;return Lt(t,(r,i)=>{if(fr(t,r)&&r.substring(0,1)!=="."){const s=ut(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ut(e))}}aM(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM extends yd{constructor(e){super(),this.indexPath_=e,L(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?lo(e.name,n.name):s}makePost(e,n){const r=ut(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,gl);return new se(Ui,e)}toString(){return zI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM extends yd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?lo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=ut(e);return new se(n,r)}toString(){return".value"}}const gM=new mM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){return{type:"value",snapshotNode:t}}function Ks(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Da(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Da(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ks(n,r)):o.trackChildChange(Fa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(Da(i,s))}),n.isLeafNode()||n.forEachChild(Ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fa(i,s,o))}else r.trackChildChange(Ks(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.indexedFilter_=new bg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ja.getStartPost_(e),this.endPost_=ja.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new se(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(Ve,(o,a)=>{s.matches(new se(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ja(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new se(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,y)=>d(y,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new se(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(c&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Fa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Da(n,d));const _=a.updateImmediateChild(n,Y.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ks(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Da(u.name,u.node)),s.trackChildChange(Ks(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gs}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Ig;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _M(t){return t.loadsAllData()?new bg(t.getIndex()):t.hasLimit()?new yM(t):new ja(t)}function n0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===gM?n="$value":t.index_===Ps?n="$key":(L(t.index_ instanceof pM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=st(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+st(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=st(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function r0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends FI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ml("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ec.getListenId_(e,r),a={};this.listens_[o]=a;const l=n0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Bs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ec.getListenId_(e,n);delete this.listens_[r]}get(e){const n=n0(e._queryParams),r=e._path.toString(),i=new ld;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Oa(a.responseText)}catch{Mt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Mt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return{value:null,children:new Map}}function YI(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,bc());const i=t.children.get(r);e=Se(e),YI(i,e,n)}}function Ep(t,e,n){t.value!==null?n(e,t.value):EM(t,(r,i)=>{const s=new Ie(e.toString()+"/"+r);Ep(i,s,n)})}function EM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Lt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=10*1e3,IM=30*1e3,SM=5*60*1e3;class CM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bM(e);const r=i0+(IM-i0)*Math.random();na(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Lt(e,(i,s)=>{s>0&&fr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),na(this.reportStats_.bind(this),Math.floor(Math.random()*2*SM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function QI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=QI()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new Ic(he(),n,this.revert)}}else return L(ie(this.path)===e,"operationForChild called for unrelated child."),new Ic(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.source=e,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Ua(this.source,he()):new Ua(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(e){return le(this.path)?new zi(this.source,he(),this.snap.getImmediateChild(e)):new zi(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new zi(this.source,he(),n.value):new za(this.source,he(),n)}else return L(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new za(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(vM(o.childName,o.snapshotNode))}),Mo(t,i,"child_removed",e,r,n),Mo(t,i,"child_added",e,r,n),Mo(t,i,"child_moved",s,r,n),Mo(t,i,"child_changed",e,r,n),Mo(t,i,"value",e,r,n),i}function Mo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>NM(t,a,l)),o.forEach(a=>{const l=TM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function TM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function NM(t,e,n){if(e.childName==null||n.childName==null)throw oo("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){return{eventCache:t,serverCache:e}}function ra(t,e,n,r){return _d(new $i(e,n,r),t.serverCache)}function JI(t,e,n,r){return _d(t.eventCache,new $i(e,n,r))}function bp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf;const RM=()=>(Uf||(Uf=new Rt(mO)),Uf);class Te{constructor(e,n=RM()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return Lt(e,(r,i)=>{n=n.set(new Ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(le(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:Xe(new Ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new Te(null)}}set(e,n){if(le(e))return new Te(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Te(null)).set(Se(e),n),o=this.children.insert(r,s);return new Te(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Te(null):new Te(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(le(e))return n;{const r=ie(e),s=(this.children.get(r)||new Te(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Te(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),Xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),Xe(n,i),r):new Te(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.writeTree_=e}static empty(){return new vn(new Te(null))}}function ia(t,e,n){if(le(e))return new vn(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Nt(i,e);return s=s.updateChild(o,n),new vn(t.writeTree_.set(i,s))}else{const i=new Te(n),s=t.writeTree_.setTree(e,i);return new vn(s)}}}function s0(t,e,n){let r=t;return Lt(n,(i,s)=>{r=ia(r,Xe(e,i),s)}),r}function o0(t,e){if(le(e))return vn.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new vn(n)}}function Ip(t,e){return Yi(t,e)!=null}function Yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Nt(n.path,e)):null}function a0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function Jr(t,e){if(le(e))return t;{const n=Yi(t,e);return n!=null?new vn(new Te(n)):new vn(t.writeTree_.subtree(e))}}function Sp(t){return t.writeTree_.isEmpty()}function Ys(t,e){return XI(he(),t.writeTree_,e)}function XI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=XI(Xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e){return nS(e,t)}function PM(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ia(t.visibleWrites,e,n)),t.lastWriteId=r}function AM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&MM(a,r.path)?i=!1:dn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return LM(t),!0;if(r.snap)t.visibleWrites=o0(t.visibleWrites,r.path);else{const a=r.children;Lt(a,l=>{t.visibleWrites=o0(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function MM(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(Xe(t.path,n),e))return!0;return!1}function LM(t){t.visibleWrites=ZI(t.allWrites,DM,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DM(t){return t.visible}function ZI(t,e,n){let r=vn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dn(n,o)?(a=Nt(n,o),r=ia(r,a,s.snap)):dn(o,n)&&(a=Nt(o,n),r=ia(r,he(),s.snap.getChild(a)));else if(s.children){if(dn(n,o))a=Nt(n,o),r=s0(r,a,s.children);else if(dn(o,n))if(a=Nt(o,n),le(a))r=s0(r,he(),s.children);else{const l=Bs(s.children,ie(a));if(l){const u=l.getChild(Se(a));r=ia(r,he(),u)}}}else throw oo("WriteRecord should have .snap or .children")}}return r}function eS(t,e,n,r,i){if(!r&&!i){const s=Yi(t.visibleWrites,e);if(s!=null)return s;{const o=Jr(t.visibleWrites,e);if(Sp(o))return n;if(n==null&&!Ip(o,he()))return null;{const a=n||Y.EMPTY_NODE;return Ys(o,a)}}}else{const s=Jr(t.visibleWrites,e);if(!i&&Sp(s))return n;if(!i&&n==null&&!Ip(s,he()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(dn(u.path,e)||dn(e,u.path))},a=ZI(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return Ys(a,l)}}}function FM(t,e,n){let r=Y.EMPTY_NODE;const i=Yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jr(t.visibleWrites,e);return n.forEachChild(Ve,(o,a)=>{const l=Ys(Jr(s,new Ie(o)),a);r=r.updateImmediateChild(o,l)}),a0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jr(t.visibleWrites,e);return a0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jM(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Xe(e,n);if(Ip(t.visibleWrites,s))return null;{const o=Jr(t.visibleWrites,s);return Sp(o)?i.getChild(n):Ys(o,i.getChild(n))}}function UM(t,e,n,r){const i=Xe(e,n),s=Yi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jr(t.visibleWrites,i);return Ys(o,r.getNode().getImmediateChild(n))}else return null}function zM(t,e){return Yi(t.visibleWrites,e)}function $M(t,e,n,r,i,s,o){let a;const l=Jr(t.visibleWrites,e),u=Yi(l,he());if(u!=null)a=u;else if(n!=null)a=Ys(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&c.length<i;)d(y,r)!==0&&c.push(y),y=f.getNext();return c}else return[]}function VM(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function Sc(t,e,n,r){return eS(t.writeTree,t.treePath,e,n,r)}function xg(t,e){return FM(t.writeTree,t.treePath,e)}function l0(t,e,n,r){return jM(t.writeTree,t.treePath,e,n,r)}function Cc(t,e){return zM(t.writeTree,Xe(t.treePath,e))}function WM(t,e,n,r,i,s){return $M(t.writeTree,t.treePath,e,n,r,i,s)}function Tg(t,e,n){return UM(t.writeTree,t.treePath,e,n)}function tS(t,e){return nS(Xe(t.treePath,e),t.writeTree)}function nS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Fa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Da(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ks(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fa(r,e.snapshotNode,i.oldSnap));else throw oo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rS=new HM;class Ng{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vi(this.viewCache_),s=WM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(t){return{filter:t}}function GM(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KM(t,e,n,r,i){const s=new BM;let o,a;if(n.type===fn.OVERWRITE){const u=n;u.source.fromUser?o=Cp(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=kc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===fn.MERGE){const u=n;u.source.fromUser?o=QM(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=kp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===fn.ACK_USER_WRITE){const u=n;u.revert?o=ZM(t,e,u.path,r,i,s):o=JM(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===fn.LISTEN_COMPLETE)o=XM(t,e,n.path,r,s);else throw oo("Unknown operation type: "+n.type);const l=s.getChanges();return YM(e,o,l),{viewCache:o,changes:l}}function YM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=bp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(KI(bp(e)))}}function iS(t,e,n,r,i,s){const o=e.eventCache;if(Cc(r,n)!=null)return e;{let a,l;if(le(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Vi(e),c=u instanceof Y?u:Y.EMPTY_NODE,d=xg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Sc(r,Vi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ie(n);if(u===".priority"){L(ni(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=l0(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Se(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=l0(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Tg(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ra(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function kc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),y,null)}else{const y=ie(n);if(!l.isCompleteForPath(n)&&ni(n)>1)return e;const p=Se(n),E=l.getNode().getImmediateChild(y).updateChild(p,r);y===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),y,E,p,rS,null)}const d=JI(e,u,l.isFullyInitialized()||le(n),c.filtersNodes()),f=new Ng(i,d,s);return iS(t,d,n,i,f,a)}function Cp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Ng(i,e,s);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ra(e,u,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ra(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Se(n),y=a.getNode().getImmediateChild(d);let p;if(le(f))p=r;else{const _=c.getCompleteChild(d);_!=null?UI(f)===".priority"&&_.getChild($I(f)).isEmpty()?p=_:p=_.updateChild(f,r):p=Y.EMPTY_NODE}if(y.equals(p))l=e;else{const _=t.filter.updateChild(a.getNode(),d,p,f,c,o);l=ra(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function u0(t,e){return t.eventCache.isCompleteForChild(e)}function QM(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Xe(n,l);u0(e,ie(c))&&(a=Cp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Xe(n,l);u0(e,ie(c))||(a=Cp(t,a,c,u,i,s,o))}),a}function c0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function kp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;le(n)?u=r:u=new Te(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),p=c0(t,y,f);l=kc(t,l,new Ie(d),p,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const y=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!y){const p=e.serverCache.getNode().getImmediateChild(d),_=c0(t,p,f);l=kc(t,l,new Ie(d),_,i,s,o,a)}}),l}function JM(t,e,n,r,i,s,o){if(Cc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return kc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(le(n)){let u=new Te(null);return l.getNode().forEachChild(Ps,(c,d)=>{u=u.set(new Ie(c),d)}),kp(t,e,n,u,i,s,a,o)}else return e}else{let u=new Te(null);return r.foreach((c,d)=>{const f=Xe(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),kp(t,e,n,u,i,s,a,o)}}function XM(t,e,n,r,i){const s=e.serverCache,o=JI(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return iS(t,o,n,r,rS,i)}function ZM(t,e,n,r,i,s){let o;if(Cc(r,n)!=null)return e;{const a=new Ng(r,e,i),l=e.eventCache.getNode();let u;if(le(n)||ie(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Sc(r,Vi(e));else{const d=e.serverCache.getNode();L(d instanceof Y,"serverChildren would be complete if leaf node"),c=xg(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ie(n);let d=Tg(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Se(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,Y.EMPTY_NODE,Se(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sc(r,Vi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Cc(r,he())!=null,ra(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eL=class{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new bg(r.getIndex()),s=_M(r);this.processor_=qM(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),c=new $i(l,o.isFullyInitialized(),i.filtersNodes()),d=new $i(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_d(d,c),this.eventGenerator_=new kM(this.query_)}get query(){return this.query_}};function tL(t){return t.viewCache_.serverCache.getNode()}function nL(t,e){const n=Vi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function d0(t){return t.eventRegistrations_.length===0}function rL(t,e){t.eventRegistrations_.push(e)}function f0(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function h0(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&(L(Vi(t.viewCache_),"We should always have a full cache before handling merges"),L(bp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KM(t.processor_,i,e,n,r);return GM(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,sS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iL(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(s,o)=>{r.push(Ks(s,o))}),n.isFullyInitialized()&&r.push(KI(n.getNode())),sS(t,r,n.getNode(),e)}function sS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xM(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;class sL{constructor(){this.views=new Map}}function oL(t){L(!xc,"__referenceConstructor has already been defined"),xc=t}function aL(){return L(xc,"Reference.ts has not been loaded"),xc}function lL(t){return t.views.size===0}function Rg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),h0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(h0(o,e,n,r));return s}}function uL(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Sc(n,i?r:null),l=!1;a?l=!0:r instanceof Y?(a=xg(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const u=_d(new $i(a,l,!1),new $i(r,i,!1));return new eL(e,u)}return o}function cL(t,e,n,r,i,s){const o=uL(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rL(o,n),iL(o,n)}function dL(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ri(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(f0(u,n,r)),d0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(f0(l,n,r)),d0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ri(t)&&s.push(new(aL())(e._repo,e._path)),{removed:s,events:o}}function oS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function As(t,e){let n=null;for(const r of t.views.values())n=n||nL(r,e);return n}function aS(t,e){if(e._queryParams.loadsAllData())return wd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function lS(t,e){return aS(t,e)!=null}function ri(t){return wd(t)!=null}function wd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;function fL(t){L(!Tc,"__referenceConstructor has already been defined"),Tc=t}function hL(){return L(Tc,"Reference.ts has not been loaded"),Tc}let pL=1;class p0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=VM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uS(t,e,n,r,i){return PM(t.pendingWriteTree_,e,n,r,i),i?vl(t,new zi(QI(),e,n)):[]}function Si(t,e,n=!1){const r=AM(t.pendingWriteTree_,e);if(OM(t.pendingWriteTree_,e)){let s=new Te(null);return r.snap!=null?s=s.set(he(),!0):Lt(r.children,o=>{s=s.set(new Ie(o),!0)}),vl(t,new Ic(r.path,s,n))}else return[]}function Ed(t,e,n){return vl(t,new zi(Sg(),e,n))}function mL(t,e,n){const r=Te.fromObject(n);return vl(t,new za(Sg(),e,r))}function gL(t,e){return vl(t,new Ua(Sg(),e))}function vL(t,e,n){const r=Ag(t,n);if(r){const i=Og(r),s=i.path,o=i.queryId,a=Nt(s,e),l=new Ua(Cg(o),a);return Mg(t,s,l)}else return[]}function xp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||lS(o,e))){const l=dL(o,e,n,r);lL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,y)=>ri(y));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const y=wL(f);for(let p=0;p<y.length;++p){const _=y[p],E=_.query,v=fS(t,_);t.listenProvider_.startListening(sa(E),Nc(t,E),v.hashFn,v.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(sa(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(bd(f));t.listenProvider_.stopListening(sa(f),y)}))}EL(t,u)}return a}function yL(t,e,n,r){const i=Ag(t,r);if(i!=null){const s=Og(i),o=s.path,a=s.queryId,l=Nt(o,e),u=new zi(Cg(a),l,n);return Mg(t,o,u)}else return[]}function _L(t,e,n,r){const i=Ag(t,r);if(i){const s=Og(i),o=s.path,a=s.queryId,l=Nt(o,e),u=Te.fromObject(n),c=new za(Cg(a),l,u);return Mg(t,o,c)}else return[]}function m0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,y)=>{const p=Nt(f,i);s=s||As(y,p),o=o||ri(y)});let a=t.syncPointTree_.get(i);a?(o=o||ri(a),s=s||As(a,he())):(a=new sL,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,p)=>{const _=As(p,he());_&&(s=s.updateImmediateChild(y,_))}));const u=lS(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=bd(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=bL();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const c=kg(t.pendingWriteTree_,i);let d=cL(a,e,n,c,s,l);if(!u&&!o&&!r){const f=aS(a,e);d=d.concat(IL(t,e,f))}return d}function Pg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Nt(o,e),u=As(a,l);if(u)return u});return eS(i,e,s,n,!0)}function vl(t,e){return cS(e,t.syncPointTree_,null,kg(t.pendingWriteTree_,he()))}function cS(t,e,n,r){if(le(t.path))return dS(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=As(i,he()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=tS(r,o);s=s.concat(cS(a,l,u,c))}return i&&(s=s.concat(Rg(i,t,r,n))),s}}function dS(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=As(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tS(r,o),c=t.operationForChild(o);c&&(s=s.concat(dS(c,a,l,u)))}),i&&(s=s.concat(Rg(i,t,r,n))),s}function fS(t,e){const n=e.query,r=Nc(t,n);return{hashFn:()=>(tL(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?vL(t,n._path,r):gL(t,n._path);{const s=yO(i,n);return xp(t,n,null,s)}}}}function Nc(t,e){const n=bd(e);return t.queryToTagMap.get(n)}function bd(t){return t._path.toString()+"$"+t._queryIdentifier}function Ag(t,e){return t.tagToQueryMap.get(e)}function Og(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function Mg(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=kg(t.pendingWriteTree_,e);return Rg(r,n,i,null)}function wL(t){return t.fold((e,n,r)=>{if(n&&ri(n))return[wd(n)];{let i=[];return n&&(i=oS(n)),Lt(r,(s,o)=>{i=i.concat(o)}),i}})}function sa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hL())(t._repo,t._path):t}function EL(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=bd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function bL(){return pL++}function IL(t,e,n){const r=e._path,i=Nc(t,e),s=fS(t,n),o=t.listenProvider_.startListening(sa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!ri(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!le(u)&&c&&ri(c))return[wd(c).query];{let f=[];return c&&(f=f.concat(oS(c).map(y=>y.query))),Lt(d,(y,p)=>{f=f.concat(p)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(sa(c),Nc(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lg(n)}node(){return this.node_}}class Dg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new Dg(this.syncTree_,n)}node(){return Pg(this.syncTree_,this.path_)}}const SL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},g0=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kL(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},kL=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xL=function(t,e,n,r){return Fg(e,new Dg(n,t),r)},hS=function(t,e,n){return Fg(t,new Lg(e),n)};function Fg(t,e,n){const r=t.getPriority().val(),i=g0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=g0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new nt(a,ut(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new nt(i))),o.forEachChild(Ve,(a,l)=>{const u=Fg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ug(t,e){let n=e instanceof Ie?e:new Ie(e),r=t,i=ie(n);for(;i!==null;){const s=Bs(r.node.children,i)||{children:{},childCount:0};r=new jg(i,r,s),n=Se(n),i=ie(n)}return r}function co(t){return t.node.value}function pS(t,e){t.node.value=e,Tp(t)}function mS(t){return t.node.childCount>0}function TL(t){return co(t)===void 0&&!mS(t)}function Id(t,e){Lt(t.node.children,(n,r)=>{e(new jg(n,t,r))})}function gS(t,e,n,r){n&&!r&&e(t),Id(t,i=>{gS(i,e,!0,r)}),n&&r&&e(t)}function NL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yl(t){return new Ie(t.parent===null?t.name:yl(t.parent)+"/"+t.name)}function Tp(t){t.parent!==null&&RL(t.parent,t.name,t)}function RL(t,e,n){const r=TL(n),i=fr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Tp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Tp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=/[\[\].#$\/\u0000-\u001F\u007F]/,AL=/[\[\].#$\u0000-\u001F\u007F]/,zf=10*1024*1024,vS=function(t){return typeof t=="string"&&t.length!==0&&!PL.test(t)},yS=function(t){return typeof t=="string"&&t.length!==0&&!AL.test(t)},OL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yS(t)},ML=function(t,e,n,r){r&&e===void 0||zg(sg(t,"value"),e,n)},zg=function(t,e,n){const r=n instanceof Ie?new JO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yi(r));if(typeof e=="function")throw new Error(t+"contains a function "+yi(r)+" with contents = "+e.toString());if(yI(e))throw new Error(t+"contains "+e.toString()+" "+yi(r));if(typeof e=="string"&&e.length>zf/3&&cd(e)>zf)throw new Error(t+"contains a string greater than "+zf+" utf8 bytes "+yi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vS(o)))throw new Error(t+" contains an invalid key ("+o+") "+yi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XO(r,o),zg(t,a,r),ZO(r)}),i&&s)throw new Error(t+' contains ".value" child '+yi(r)+" in addition to actual children.")}},_S=function(t,e,n,r){if(!(r&&n===void 0)&&!yS(n))throw new Error(sg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_S(t,e,n,r)},wS=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},DL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!OL(n))throw new Error(sg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $g(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_g(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ES(t,e,n){$g(t,n),bS(t,r=>_g(r,e))}function or(t,e,n){$g(t,n),bS(t,r=>dn(r,e)||dn(e,r))}function bS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ri&&gt("event: "+n.toString()),uo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL="repo_interrupt",zL=25;class $L{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bc(),this.transactionQueueTree_=new jg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VL(t,e,n){if(t.stats_=vg(t.repoInfo_),t.forceRestClient_||bO())t.server_=new Ec(t.repoInfo_,(r,i,s,o)=>{v0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>y0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Jn(t.repoInfo_,e,(r,i,s,o)=>{v0(t,r,i,s,o)},r=>{y0(t,r)},r=>{BL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xO(t.repoInfo_,()=>new CM(t.stats_,t.server_)),t.infoData_=new wM,t.infoSyncTree_=new p0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ed(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wg(t,"connected",!1),t.serverSyncTree_=new p0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);or(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function WL(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vg(t){return SL({timestamp:WL(t)})}function v0(t,e,n,r,i){t.dataUpdateCount++;const s=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=dc(n,u=>ut(u));o=_L(t.serverSyncTree_,s,l,i)}else{const l=ut(n);o=yL(t.serverSyncTree_,s,l,i)}else if(r){const l=dc(n,u=>ut(u));o=mL(t.serverSyncTree_,s,l)}else{const l=ut(n);o=Ed(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Sd(t,s)),or(t.eventQueue_,a,o)}function y0(t,e){Wg(t,"connected",e),e===!1&&qL(t)}function BL(t,e){Lt(e,(n,r)=>{Wg(t,n,r)})}function Wg(t,e,n){const r=new Ie("/.info/"+e),i=ut(n);t.infoData_.updateSnapshot(r,i);const s=Ed(t.infoSyncTree_,r,i);or(t.eventQueue_,r,s)}function IS(t){return t.nextWriteId_++}function HL(t,e,n,r,i){Bg(t,"set",{path:e.toString(),value:n,priority:r});const s=Vg(t),o=ut(n,r),a=Pg(t.serverSyncTree_,e),l=hS(o,a,s),u=IS(t),c=uS(t.serverSyncTree_,e,l,u,!0);$g(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const p=f==="ok";p||Mt("set at "+e+" failed: "+f);const _=Si(t.serverSyncTree_,u,!p);or(t.eventQueue_,e,_),YL(t,i,f,y)});const d=TS(t,e);Sd(t,d),or(t.eventQueue_,d,[])}function qL(t){Bg(t,"onDisconnectEvents");const e=Vg(t),n=bc();Ep(t.onDisconnect_,he(),(i,s)=>{const o=xL(i,s,t.serverSyncTree_,e);YI(n,i,o)});let r=[];Ep(n,he(),(i,s)=>{r=r.concat(Ed(t.serverSyncTree_,i,s));const o=TS(t,i);Sd(t,o)}),t.onDisconnect_=bc(),or(t.eventQueue_,he(),r)}function GL(t,e,n){let r;ie(e._path)===".info"?r=m0(t.infoSyncTree_,e,n):r=m0(t.serverSyncTree_,e,n),ES(t.eventQueue_,e._path,r)}function _0(t,e,n){let r;ie(e._path)===".info"?r=xp(t.infoSyncTree_,e,n):r=xp(t.serverSyncTree_,e,n),ES(t.eventQueue_,e._path,r)}function KL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(UL)}function Bg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function YL(t,e,n,r){e&&uo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function SS(t,e,n){return Pg(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function Hg(t,e=t.transactionQueueTree_){if(e||Cd(t,e),co(e)){const n=kS(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&QL(t,yl(e),n)}else mS(e)&&Id(e,n=>{Hg(t,n)})}function QL(t,e,n){const r=n.map(u=>u.currentWriteId),i=SS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Nt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Bg(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Si(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Cd(t,Ug(t.transactionQueueTree_,e)),Hg(t,t.transactionQueueTree_),or(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)uo(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Mt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Sd(t,e)}},o)}function Sd(t,e){const n=CS(t,e),r=yl(n),i=kS(t,n);return JL(t,i,r),r}function JL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Nt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Si(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zL)c=!0,d="maxretry",i=i.concat(Si(t.serverSyncTree_,l.currentWriteId,!0));else{const f=SS(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){zg("transaction failed: Data returned ",y,l.path);let p=ut(y);typeof y=="object"&&y!=null&&fr(y,".priority")||(p=p.updatePriority(f.getPriority()));const E=l.currentWriteId,v=Vg(t),m=hS(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=IS(t),o.splice(o.indexOf(E),1),i=i.concat(uS(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Si(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(Si(t.serverSyncTree_,l.currentWriteId,!0))}or(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Cd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)uo(r[a]);Hg(t,t.transactionQueueTree_)}function CS(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&co(r)===void 0;)r=Ug(r,n),e=Se(e),n=ie(e);return r}function kS(t,e){const n=[];return xS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function xS(t,e,n){const r=co(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Id(e,i=>{xS(t,i,n)})}function Cd(t,e){const n=co(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,pS(e,n.length>0?n:void 0)}Id(e,r=>{Cd(t,r)})}function TS(t,e){const n=yl(CS(t,e)),r=Ug(t.transactionQueueTree_,e);return NL(r,i=>{$f(t,i)}),$f(t,r),gS(r,i=>{$f(t,i)}),n}function $f(t,e){const n=co(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Si(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?pS(e,void 0):n.length=s+1,or(t.eventQueue_,yl(e),i);for(let o=0;o<r.length;o++)uo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const w0=function(t,e){const n=e4(t),r=n.namespace;n.domain==="firebase.com"&&sr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ie(n.pathString)}},e4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=XL(t.substring(c,d)));const f=ZL(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class RS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:UI(this._path)}get ref(){return new gr(this._repo,this._path)}get _queryIdentifier(){const e=r0(this._queryParams),n=mg(e);return n==="{}"?"default":n}get _queryObject(){return r0(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof qg))return!1;const n=this._repo===e._repo,r=_g(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+QO(this._path)}}class gr extends qg{constructor(e,n){super(e,n,new Ig,!1)}get parent(){const e=$I(this._path);return e===null?null:new gr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $a{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),r=Rc(this.ref,e);return new $a(this._node.getChild(n),r,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new $a(i,Rc(this.ref,r),Ve)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _l(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?Rc(t._root,e):t._root}function Rc(t,e){return t=We(t),ie(t._path)===null?LL("child","path",e,!1):_S("child","path",e,!1),new gr(t._repo,Xe(t._path,e))}function n4(t){return wS("remove",t._path),kd(t,null)}function kd(t,e){t=We(t),wS("set",t._path),ML("set",e,t._path,!1);const n=new ld;return HL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Gg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new NS("value",this,new $a(e.snapshotNode,new gr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RS(this,e,n):null}matches(e){return e instanceof Gg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Kg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RS(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=Rc(new gr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new NS(e.type,this,new $a(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Kg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function r4(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{_0(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new t4(n,s||void 0),a=e==="value"?new Gg(o):new Kg(e,o);return GL(t._repo,t,a),()=>_0(t._repo,t,a)}function i4(t,e,n,r){return r4(t,"value",e,n,r)}oL(gr);fL(gr);/**
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
 */const s4="FIREBASE_DATABASE_EMULATOR_HOST",Np={};let o4=!1;function a4(t,e,n,r){t.repoInfo_=new RI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function l4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=w0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[s4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=w0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Rs(Rs.OWNER):new SO(t.name,t.options,e);DL("Invalid Firebase Database URL",o),le(o.path)||sr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=c4(a,t,c,new IO(t.name,n));return new d4(d,t)}function u4(t,e){const n=Np[e];(!n||n[t.key]!==t)&&sr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KL(t),delete n[t.key]}function c4(t,e,n,r){let i=Np[e.name];i||(i={},Np[e.name]=i);let s=i[t.toURLString()];return s&&sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $L(t,o4,n,r),i[t.toURLString()]=s,s}class d4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gr(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(u4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&sr("Cannot call "+e+" on a deleted database.")}}function f4(t=Rb(),e){const n=ag(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=bN("database");r&&h4(n,...r)}return n}function h4(t,e,n,r={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&sr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Rs(Rs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:IN(r.mockUserToken,t.app.options.projectId);s=new Rs(o)}a4(i,e,n,s)}/**
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
 */function p4(t){lO(pr),ti(new rr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return l4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pn(z_,$_,t),Pn(z_,$_,"esm2017")}Jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};p4();const Vf={serviceId:"service_cm3a5fr",templateId:"template_v6s0ygl",publicKey:"QLw-2olFqTFzTBHug"},m4={apiKey:"AIzaSyAG8LJPNXNgDKnfopB-c1CVX-Uew4uRyqU",authDomain:"schedule-maker-8675b.firebaseapp.com",projectId:"schedule-maker-8675b",storageBucket:"schedule-maker-8675b.appspot.com",messagingSenderId:"198447247334",appId:"1:198447247334:web:f009e6e7b0b144923cf027",measurementId:"G-2NLFWYGS09"},Yg=Nb(m4),xd=pI(Yg);async function g4(t,e){return await $P(xd,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}async function v4(t,e){return await VP(xd,t,e).then(n=>({info:n,status:"success"})).catch(n=>({info:n,status:"error"}))}function y4(){return pI(Yg)}async function Qg(){return YP(xd)}async function PS(t){return await zP(xd,t).then(()=>null).catch(e=>e)}const wl=f4(Yg);async function _4(t){const e=t.uid;await kd(_l(wl,"/users"+e),{...t})}async function w4(t,e){const n=_l(wl,"/users"+t+"/schedules");await kd(n,e)}async function E4(t,e,n){const r=_l(wl,`/users${t}/schedules/${n}/name`);await kd(r,e)}function AS(t,e,n){const r=`/users${t}${n?"/"+n:""}`;i4(_l(wl,r),e)}async function b4(t){await n4(_l(wl,`/users${t}`))}async function I4(t){await WP(t)}function E0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E0(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pc(t){"@babel/helpers - typeof";return Pc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pc(t)}function S4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C4(t,e,n){return e&&b0(t.prototype,e),n&&b0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jg(t,e){return x4(t)||N4(t,e)||OS(t,e)||P4()}function El(t){return k4(t)||T4(t)||OS(t)||R4()}function k4(t){if(Array.isArray(t))return Rp(t)}function x4(t){if(Array.isArray(t))return t}function T4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function N4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function OS(t,e){if(t){if(typeof t=="string")return Rp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rp(t,e)}}function Rp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function R4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I0=function(){},Xg={},MS={},LS=null,DS={mark:I0,measure:I0};try{typeof window<"u"&&(Xg=window),typeof document<"u"&&(MS=document),typeof MutationObserver<"u"&&(LS=MutationObserver),typeof performance<"u"&&(DS=performance)}catch{}var A4=Xg.navigator||{},S0=A4.userAgent,C0=S0===void 0?"":S0,ii=Xg,Ae=MS,k0=LS,tu=DS;ii.document;var vr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",FS=~C0.indexOf("MSIE")||~C0.indexOf("Trident/"),nu,ru,iu,su,ou,ar="___FONT_AWESOME___",Pp=16,jS="fa",US="svg-inline--fa",Wi="data-fa-i2svg",Ap="data-fa-pseudo-element",O4="data-fa-pseudo-element-pending",Zg="data-prefix",ev="data-icon",x0="fontawesome-i2svg",M4="async",L4=["HTML","HEAD","STYLE","SCRIPT"],zS=function(){try{return!0}catch{return!1}}(),Re="classic",$e="sharp",tv=[Re,$e];function bl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Re]}})}var Va=bl((nu={},et(nu,Re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),et(nu,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),nu)),Wa=bl((ru={},et(ru,Re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(ru,$e,{solid:"fass",regular:"fasr",light:"fasl"}),ru)),Ba=bl((iu={},et(iu,Re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(iu,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),iu)),D4=bl((su={},et(su,Re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(su,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),su)),F4=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,$S="fa-layers-text",j4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,U4=bl((ou={},et(ou,Re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(ou,$e,{900:"fass",400:"fasr",300:"fasl"}),ou)),VS=[1,2,3,4,5,6,7,8,9,10],z4=VS.concat([11,12,13,14,15,16,17,18,19,20]),$4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ci={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ha=new Set;Object.keys(Wa[Re]).map(Ha.add.bind(Ha));Object.keys(Wa[$e]).map(Ha.add.bind(Ha));var V4=[].concat(tv,El(Ha),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ci.GROUP,Ci.SWAP_OPACITY,Ci.PRIMARY,Ci.SECONDARY]).concat(VS.map(function(t){return"".concat(t,"x")})).concat(z4.map(function(t){return"w-".concat(t)})),oa=ii.FontAwesomeConfig||{};function W4(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function B4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var H4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];H4.forEach(function(t){var e=Jg(t,2),n=e[0],r=e[1],i=B4(W4(n));i!=null&&(oa[r]=i)})}var WS={styleDefault:"solid",familyDefault:"classic",cssPrefix:jS,replacementClass:US,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oa.familyPrefix&&(oa.cssPrefix=oa.familyPrefix);var Qs=j(j({},WS),oa);Qs.autoReplaceSvg||(Qs.observeMutations=!1);var V={};Object.keys(WS).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){Qs[t]=n,aa.forEach(function(r){return r(V)})},get:function(){return Qs[t]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){Qs.cssPrefix=e,aa.forEach(function(n){return n(V)})},get:function(){return Qs.cssPrefix}});ii.FontAwesomeConfig=V;var aa=[];function q4(t){return aa.push(t),function(){aa.splice(aa.indexOf(t),1)}}var Sr=Pp,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function G4(t){if(!(!t||!vr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var K4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qa(){for(var t=12,e="";t-- >0;)e+=K4[Math.random()*62|0];return e}function fo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function nv(t){return t.classList?fo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function BS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Y4(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(BS(t[n]),'" ')},"").trim()}function Td(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function rv(t){return t.size!==Tn.size||t.x!==Tn.x||t.y!==Tn.y||t.rotate!==Tn.rotate||t.flipX||t.flipY}function Q4(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function J4(t){var e=t.transform,n=t.width,r=n===void 0?Pp:n,i=t.height,s=i===void 0?Pp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&FS?l+="translate(".concat(e.x/Sr-r/2,"em, ").concat(e.y/Sr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Sr,"em), calc(-50% + ").concat(e.y/Sr,"em)) "):l+="translate(".concat(e.x/Sr,"em, ").concat(e.y/Sr,"em) "),l+="scale(".concat(e.size/Sr*(e.flipX?-1:1),", ").concat(e.size/Sr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var X4=`:root, :host {
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
}`;function HS(){var t=jS,e=US,n=V.cssPrefix,r=V.replacementClass,i=X4;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var T0=!1;function Wf(){V.autoAddCss&&!T0&&(G4(HS()),T0=!0)}var Z4={mixout:function(){return{dom:{css:HS,insertCss:Wf}}},hooks:function(){return{beforeDOMElementCreation:function(){Wf()},beforeI2svg:function(){Wf()}}}},lr=ii||{};lr[ar]||(lr[ar]={});lr[ar].styles||(lr[ar].styles={});lr[ar].hooks||(lr[ar].hooks={});lr[ar].shims||(lr[ar].shims=[]);var hn=lr[ar],qS=[],eD=function t(){Ae.removeEventListener("DOMContentLoaded",t),Ac=1,qS.map(function(e){return e()})},Ac=!1;vr&&(Ac=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),Ac||Ae.addEventListener("DOMContentLoaded",eD));function tD(t){vr&&(Ac?setTimeout(t,0):qS.push(t))}function Il(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?BS(t):"<".concat(e," ").concat(Y4(r),">").concat(s.map(Il).join(""),"</").concat(e,">")}function N0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var nD=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Bf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?nD(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function rD(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Op(t){var e=rD(t);return e.length===1?e[0].toString(16):null}function iD(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function R0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Mp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=R0(e);typeof hn.hooks.addPack=="function"&&!i?hn.hooks.addPack(t,R0(e)):hn.styles[t]=j(j({},hn.styles[t]||{}),s),t==="fas"&&Mp("fa",e)}var au,lu,uu,ys=hn.styles,sD=hn.shims,oD=(au={},et(au,Re,Object.values(Ba[Re])),et(au,$e,Object.values(Ba[$e])),au),iv=null,GS={},KS={},YS={},QS={},JS={},aD=(lu={},et(lu,Re,Object.keys(Va[Re])),et(lu,$e,Object.keys(Va[$e])),lu);function lD(t){return~V4.indexOf(t)}function uD(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!lD(i)?i:null}var XS=function(){var e=function(s){return Bf(ys,function(o,a,l){return o[l]=Bf(a,s,{}),o},{})};GS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),KS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),JS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ys||V.autoFetchSvg,r=Bf(sD,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});YS=r.names,QS=r.unicodes,iv=Nd(V.styleDefault,{family:V.familyDefault})};q4(function(t){iv=Nd(t.styleDefault,{family:V.familyDefault})});XS();function sv(t,e){return(GS[t]||{})[e]}function cD(t,e){return(KS[t]||{})[e]}function ki(t,e){return(JS[t]||{})[e]}function ZS(t){return YS[t]||{prefix:null,iconName:null}}function dD(t){var e=QS[t],n=sv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function si(){return iv}var ov=function(){return{prefix:null,iconName:null,rest:[]}};function Nd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Re:n,i=Va[r][t],s=Wa[r][t]||Wa[r][i],o=t in hn.styles?t:null;return s||o||null}var P0=(uu={},et(uu,Re,Object.keys(Ba[Re])),et(uu,$e,Object.keys(Ba[$e])),uu);function Rd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},et(e,Re,"".concat(V.cssPrefix,"-").concat(Re)),et(e,$e,"".concat(V.cssPrefix,"-").concat($e)),e),o=null,a=Re;(t.includes(s[Re])||t.some(function(u){return P0[Re].includes(u)}))&&(a=Re),(t.includes(s[$e])||t.some(function(u){return P0[$e].includes(u)}))&&(a=$e);var l=t.reduce(function(u,c){var d=uD(V.cssPrefix,c);if(ys[c]?(c=oD[a].includes(c)?D4[a][c]:c,o=c,u.prefix=c):aD[a].indexOf(c)>-1?(o=c,u.prefix=Nd(c,{family:a})):d?u.iconName=d:c!==V.replacementClass&&c!==s[Re]&&c!==s[$e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?ZS(u.iconName):{},y=ki(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||y||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ys.far&&ys.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},ov());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===$e&&(ys.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=ki(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=si()||"fas"),l}var fD=function(){function t(){S4(this,t),this.definitions={}}return C4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),Mp(a,o[a]);var l=Ba[Re][a];l&&Mp(l,o[a]),XS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),A0=[],_s={},Os={},hD=Object.keys(Os);function pD(t,e){var n=e.mixoutsTo;return A0=t,_s={},Object.keys(Os).forEach(function(r){hD.indexOf(r)===-1&&delete Os[r]}),A0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Pc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){_s[o]||(_s[o]=[]),_s[o].push(s[o])})}r.provides&&r.provides(Os)}),n}function Lp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=_s[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Bi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=_s[t]||[];i.forEach(function(s){s.apply(null,n)})}function ur(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Os[t]?Os[t].apply(null,e):void 0}function Dp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||si();if(e)return e=ki(n,e)||e,N0(eC.definitions,n,e)||N0(hn.styles,n,e)}var eC=new fD,mD=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Bi("noAuto")},gD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vr?(Bi("beforeI2svg",e),ur("pseudoElements2svg",e),ur("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,tD(function(){yD({autoReplaceSvgRoot:n}),Bi("watch",e)})}},vD={icon:function(e){if(e===null)return null;if(Pc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ki(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Nd(e[0]);return{prefix:r,iconName:ki(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.cssPrefix,"-"))>-1||e.match(F4))){var i=Rd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||si(),iconName:ki(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=si();return{prefix:s,iconName:ki(s,e)||e}}}},Bt={noAuto:mD,config:V,dom:gD,parse:vD,library:eC,findIconDefinition:Dp,toHtml:Il},yD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(hn.styles).length>0||V.autoFetchSvg)&&vr&&V.autoReplaceSvg&&Bt.dom.i2svg({node:r})};function Pd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Il(r)})}}),Object.defineProperty(t,"node",{get:function(){if(vr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function _D(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(rv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Td(j(j({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function wD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function av(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,y=f===void 0?!1:f,p=r.found?r:n,_=p.width,E=p.height,v=i==="fak",m=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),w={children:[],attributes:j(j({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(E)})},g=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/E*16*.0625,"em")}:{};y&&(w.attributes[Wi]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||qa())},children:[l]}),delete w.attributes.title);var I=j(j({},w),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:j(j({},g),d.styles)}),C=r.found&&n.found?ur("generateAbstractMask",I)||{children:[],attributes:{}}:ur("generateAbstractIcon",I)||{children:[],attributes:{}},x=C.children,A=C.attributes;return I.children=x,I.attributes=A,a?wD(I):_D(I)}function O0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=j(j(j({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Wi]="");var c=j({},o.styles);rv(i)&&(c.transform=J4({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Td(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function ED(t){var e=t.content,n=t.title,r=t.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Td(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Hf=hn.styles;function Fp(t){var e=t[0],n=t[1],r=t.slice(4),i=Jg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Ci.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Ci.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Ci.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var bD={found:!1,width:512,height:512};function ID(t,e){!zS&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jp(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=si()),new Promise(function(r,i){if(ur("missingIconAbstract"),n==="fa"){var s=ZS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Hf[e]&&Hf[e][t]){var o=Hf[e][t];return r(Fp(o))}ID(t,e),r(j(j({},bD),{},{icon:V.showMissingIcons&&t?ur("missingIconAbstract")||{}:{}}))})}var M0=function(){},Up=V.measurePerformance&&tu&&tu.mark&&tu.measure?tu:{mark:M0,measure:M0},Vo='FA "6.4.0"',SD=function(e){return Up.mark("".concat(Vo," ").concat(e," begins")),function(){return tC(e)}},tC=function(e){Up.mark("".concat(Vo," ").concat(e," ends")),Up.measure("".concat(Vo," ").concat(e),"".concat(Vo," ").concat(e," begins"),"".concat(Vo," ").concat(e," ends"))},lv={begin:SD,end:tC},Au=function(){};function L0(t){var e=t.getAttribute?t.getAttribute(Wi):null;return typeof e=="string"}function CD(t){var e=t.getAttribute?t.getAttribute(Zg):null,n=t.getAttribute?t.getAttribute(ev):null;return e&&n}function kD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function xD(){if(V.autoReplaceSvg===!0)return Ou.replace;var t=Ou[V.autoReplaceSvg];return t||Ou.replace}function TD(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function ND(t){return Ae.createElement(t)}function nC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?TD:ND:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(nC(o,{ceFn:r}))}),i}function RD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ou={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(nC(i),n)}),n.getAttribute(Wi)===null&&V.keepOriginalSource){var r=Ae.createComment(RD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~nv(n).indexOf(V.replacementClass))return Ou.replace(e);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Il(a)}).join(`
`);n.setAttribute(Wi,""),n.innerHTML=o}};function D0(t){t()}function rC(t,e){var n=typeof e=="function"?e:Au;if(t.length===0)n();else{var r=D0;V.mutateApproach===M4&&(r=ii.requestAnimationFrame||D0),r(function(){var i=xD(),s=lv.begin("mutate");t.map(i),s(),n()})}}var uv=!1;function iC(){uv=!0}function zp(){uv=!1}var Oc=null;function F0(t){if(k0&&V.observeMutations){var e=t.treeCallback,n=e===void 0?Au:e,r=t.nodeCallback,i=r===void 0?Au:r,s=t.pseudoElementsCallback,o=s===void 0?Au:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;Oc=new k0(function(u){if(!uv){var c=si();fo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!L0(d.addedNodes[0])&&(V.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&V.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&L0(d.target)&&~$4.indexOf(d.attributeName))if(d.attributeName==="class"&&CD(d.target)){var f=Rd(nv(d.target)),y=f.prefix,p=f.iconName;d.target.setAttribute(Zg,y||c),p&&d.target.setAttribute(ev,p)}else kD(d.target)&&i(d.target)})}}),vr&&Oc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function PD(){Oc&&Oc.disconnect()}function AD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function OD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Rd(nv(t));return i.prefix||(i.prefix=si()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=cD(i.prefix,t.innerText)||sv(i.prefix,Op(t.innerText))),!i.iconName&&V.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function MD(t){var e=fo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||qa()):(e["aria-hidden"]="true",e.focusable="false")),e}function LD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=OD(t),r=n.iconName,i=n.prefix,s=n.rest,o=MD(t),a=Lp("parseNodeAttributes",{},t),l=e.styleParser?AD(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var DD=hn.styles;function sC(t){var e=V.autoReplaceSvg==="nest"?j0(t,{styleParser:!1}):j0(t);return~e.extra.classes.indexOf($S)?ur("generateLayersText",t,e):ur("generateSvgReplacementMutation",t,e)}var oi=new Set;tv.map(function(t){oi.add("fa-".concat(t))});Object.keys(Va[Re]).map(oi.add.bind(oi));Object.keys(Va[$e]).map(oi.add.bind(oi));oi=El(oi);function U0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(d){return n.add("".concat(x0,"-").concat(d))},i=function(d){return n.remove("".concat(x0,"-").concat(d))},s=V.autoFetchSvg?oi:tv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(DD));s.includes("fa")||s.push("fa");var o=[".".concat($S,":not([").concat(Wi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Wi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=lv.begin("onTree"),u=a.reduce(function(c,d){try{var f=sC(d);f&&c.push(f)}catch(y){zS||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){rC(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function FD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sC(t).then(function(n){n&&rC([n],e)})}function jD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Dp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dp(i||{})),t(r,j(j({},n),{},{mask:i}))}}var UD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Tn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,y=n.titleId,p=y===void 0?null:y,_=n.classes,E=_===void 0?[]:_,v=n.attributes,m=v===void 0?{}:v,w=n.styles,g=w===void 0?{}:w;if(e){var I=e.prefix,C=e.iconName,x=e.icon;return Pd(j({type:"icon"},e),function(){return Bi("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(f?m["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(p||qa()):(m["aria-hidden"]="true",m.focusable="false")),av({icons:{main:Fp(x),mask:l?Fp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:C,transform:j(j({},Tn),i),symbol:o,title:f,maskId:c,titleId:p,extra:{attributes:m,styles:g,classes:E}})})}},zD={mixout:function(){return{icon:jD(UD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=U0,n.nodeCallback=FD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return U0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(y,p){Promise.all([jp(i,a),c.iconName?jp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var E=Jg(_,2),v=E[0],m=E[1];y([n,av({icons:{main:v,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Td(a);l.length>0&&(i.style=l);var u;return rv(o)&&(u=ur("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},$D={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Pd({type:"layer"},function(){Bi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(El(s)).join(" ")},children:o}]})}}}},VD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Pd({type:"counter",content:n},function(){return Bi("beforeDOMElementCreation",{content:n,params:r}),ED({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(El(a))}})})}}}},WD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Tn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,y=f===void 0?{}:f;return Pd({type:"text",content:n},function(){return Bi("beforeDOMElementCreation",{content:n,params:r}),O0({content:n,transform:j(j({},Tn),s),title:a,extra:{attributes:d,styles:y,classes:["".concat(V.cssPrefix,"-layers-text")].concat(El(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(FS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,O0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},BD=new RegExp('"',"ug"),z0=[1105920,1112319];function HD(t){var e=t.replace(BD,""),n=iD(e,0),r=n>=z0[0]&&n<=z0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Op(i?e[0]:e),isSecondary:r||i}}function $0(t,e){var n="".concat(O4).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fo(t.children),o=s.filter(function(x){return x.getAttribute(Ap)===e})[0],a=ii.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(j4),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Re,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Wa[f][l[2].toLowerCase()]:U4[f][u],p=HD(d),_=p.value,E=p.isSecondary,v=l[0].startsWith("FontAwesome"),m=sv(y,_),w=m;if(v){var g=dD(_);g.iconName&&g.prefix&&(m=g.iconName,y=g.prefix)}if(m&&!E&&(!o||o.getAttribute(Zg)!==y||o.getAttribute(ev)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var I=LD(),C=I.extra;C.attributes[Ap]=e,jp(m,y).then(function(x){var A=av(j(j({},I),{},{icons:{main:x,mask:ov()},prefix:y,iconName:w,extra:C,watchable:!0})),D=Ae.createElement("svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=A.map(function(F){return Il(F)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function qD(t){return Promise.all([$0(t,"::before"),$0(t,"::after")])}function GD(t){return t.parentNode!==document.head&&!~L4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ap)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function V0(t){if(vr)return new Promise(function(e,n){var r=fo(t.querySelectorAll("*")).filter(GD).map(qD),i=lv.begin("searchPseudoElements");iC(),Promise.all(r).then(function(){i(),zp(),e()}).catch(function(){i(),zp(),n()})})}var KD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=V0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;V.searchPseudoElements&&V0(i)}}},W0=!1,YD={mixout:function(){return{dom:{unwatch:function(){iC(),W0=!0}}}},hooks:function(){return{bootstrap:function(){F0(Lp("mutationObserverCallbacks",{}))},noAuto:function(){PD()},watch:function(n){var r=n.observeMutationsRoot;W0?zp():F0(Lp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},B0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},QD={mixout:function(){return{parse:{transform:function(n){return B0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=B0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:d,path:f};return{tag:"g",attributes:j({},y.outer),children:[{tag:"g",attributes:j({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),y.path)}]}]}}}},qf={x:0,y:0,width:"100%",height:"100%"};function H0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function JD(t){return t.tag==="g"?t.children:[t]}var XD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Rd(i.split(" ").map(function(o){return o.trim()})):ov();return s.prefix||(s.prefix=si()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,y=Q4({transform:l,containerWidth:d,iconWidth:u}),p={tag:"rect",attributes:j(j({},qf),{},{fill:"white"})},_=c.children?{children:c.children.map(H0)}:{},E={tag:"g",attributes:j({},y.inner),children:[H0(j({tag:c.tag,attributes:j(j({},c.attributes),y.path)},_))]},v={tag:"g",attributes:j({},y.outer),children:[E]},m="mask-".concat(a||qa()),w="clip-".concat(a||qa()),g={tag:"mask",attributes:j(j({},qf),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:JD(f)},g]};return r.push(I,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(m,")")},qf)}),{children:r,attributes:i}}}},ZD={provides:function(e){var n=!1;ii.matchMedia&&(n=ii.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},e3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},t3=[Z4,zD,$D,VD,WD,KD,YD,QD,XD,ZD,e3];pD(t3,{mixoutsTo:Bt});Bt.noAuto;Bt.config;Bt.library;Bt.dom;var $p=Bt.parse;Bt.findIconDefinition;Bt.toHtml;var n3=Bt.icon;Bt.layer;Bt.text;Bt.counter;var oC={exports:{}},r3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i3=r3,s3=i3;function aC(){}function lC(){}lC.resetWarningCache=aC;var o3=function(){function t(r,i,s,o,a,l){if(l!==s3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lC,resetWarningCache:aC};return n.PropTypes=n,n};oC.exports=o3();var a3=oC.exports;const oe=U1(a3);function q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Fr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q0(Object(n),!0).forEach(function(r){ws(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mc(t){"@babel/helpers - typeof";return Mc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(t)}function ws(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function u3(t,e){if(t==null)return{};var n=l3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vp(t){return c3(t)||d3(t)||f3(t)||h3()}function c3(t){if(Array.isArray(t))return Wp(t)}function d3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function f3(t,e){if(t){if(typeof t=="string")return Wp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wp(t,e)}}function Wp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,y=t.inverse,p=t.border,_=t.listItem,E=t.flip,v=t.size,m=t.rotation,w=t.pull,g=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":y,"fa-border":p,"fa-li":_,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},ws(e,"fa-".concat(v),typeof v<"u"&&v!==null),ws(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),ws(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),ws(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(g).map(function(I){return g[I]?I:null}).filter(function(I){return I})}function m3(t){return t=t-0,t===t}function uC(t){return m3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var g3=["style"];function v3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function y3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=uC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[v3(i)]=s:e[i]=s,e},{})}function cC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return cC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=y3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[uC(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=u3(n,g3);return i.attrs.style=Fr(Fr({},i.attrs.style),o),t.apply(void 0,[e.tag,Fr(Fr({},i.attrs),a)].concat(Vp(r)))}var dC=!1;try{dC=!0}catch{}function _3(){if(!dC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function G0(t){if(t&&Mc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if($p.icon)return $p.icon(t);if(t===null)return null;if(t&&Mc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ws({},t,e):{}}var yt=Vc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=G0(n),c=Gf("classes",[].concat(Vp(p3(t)),Vp(s.split(" ")))),d=Gf("transform",typeof t.transform=="string"?$p.transform(t.transform):t.transform),f=Gf("mask",G0(r)),y=n3(u,Fr(Fr(Fr(Fr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!y)return _3("Could not find icon",u),null;var p=y.abstract,_={ref:e};return Object.keys(t).forEach(function(E){yt.defaultProps.hasOwnProperty(E)||(_[E]=t[E])}),w3(p[0],_)});yt.displayName="FontAwesomeIcon";yt.propTypes={beat:oe.bool,border:oe.bool,beatFade:oe.bool,bounce:oe.bool,className:oe.string,fade:oe.bool,flash:oe.bool,mask:oe.oneOfType([oe.object,oe.array,oe.string]),maskId:oe.string,fixedWidth:oe.bool,inverse:oe.bool,flip:oe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:oe.oneOfType([oe.object,oe.array,oe.string]),listItem:oe.bool,pull:oe.oneOf(["right","left"]),pulse:oe.bool,rotation:oe.oneOf([0,90,180,270]),shake:oe.bool,size:oe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:oe.bool,spinPulse:oe.bool,spinReverse:oe.bool,symbol:oe.oneOfType([oe.bool,oe.string]),title:oe.string,titleId:oe.string,transform:oe.oneOfType([oe.string,oe.object]),swapOpacity:oe.bool};yt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w3=cC.bind(null,Vc.createElement),fC={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},hC={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},E3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},b3={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},pC=b3,mC={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},I3={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},S3={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},C3=S3,k3={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},x3=k3,T3={prefix:"fas",iconName:"skull",icon:[512,512,[128128],"f54c","M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},N3={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},R3=N3;function P3(){const[t,e]=b.useState(!1),[n,r]=b.useState(""),[i,s]=b.useState(null);async function o(a){a.preventDefault();const l=await PS(n);if(!l){e(!0);return}s(l.code.split("/")[1].replaceAll("-"," "))}return h.jsxs("section",{className:"gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[h.jsxs("div",{className:"font-bold text-2xl",children:["I forgor",h.jsx(yt,{icon:T3,className:"ml-2"})]}),t?h.jsxs("div",{children:[h.jsx("p",{className:"text-center",children:"A reset password link has been sent to your email."}),h.jsx("p",{className:"text-center",children:"If you did not recieve and email, try again."})]}):h.jsxs(h.Fragment,{children:[h.jsxs("form",{className:"flex gap-4",onSubmit:a=>void o(a),children:[h.jsx("input",{placeholder:"email",className:"outline-none p-2 rounded shadow-c9 shadow-lg w-80",onChange:a=>r(a.target.value),type:"email"}),h.jsx("input",{type:"submit",className:"hidden"}),h.jsx("button",{className:"p-2 rounded bg-c9 transition text-c1 hover:text-c9 hover:bg-c1",children:"Send reset link"})]}),i&&h.jsx("p",{className:"text-red-500",children:i})]}),h.jsx(Mn,{to:"/",className:"hover:text-c4 text-c7 transition",children:"Back to sign in page."})]})}function A3({notVerified:t}){const[e,n]=b.useState(""),[r,i]=b.useState(""),[s,o]=b.useState(!1),[a,l]=b.useState(!1);async function u(c){c.preventDefault(),(await v4(e,r)).status==="success"?l(!1):l(!0)}return h.jsxs("form",{className:"basis-full w-full box-border p-4 shrink-0 md:text-base text-sm",onSubmit:c=>void u(c),children:[h.jsx("p",{className:"w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg",children:"Sign in to your account"}),h.jsxs("label",{children:["Email",h.jsx("input",{name:"email",placeholder:"Email",className:`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border ${a?"border-red-500 border border-solid":""}`,type:"email",onChange:c=>n(c.target.value),required:!0,value:e})]}),h.jsxs("label",{className:"relative",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:"Password"}),h.jsx(Mn,{to:"/forgot",children:h.jsx("span",{className:"hover:text-c4 text-c7 transition",children:"Forgot?"})})]}),h.jsxs("div",{className:"relative mt-2 flex items-center",children:[h.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${a?"border-red-500 border border-solid":""}`,type:`${s?"text":"password"}`,onChange:c=>i(c.target.value),required:!0,value:r}),h.jsx(yt,{icon:s?hC:mC,className:"absolute right-2 cursor-pointer",onClick:()=>o(!s)})]})]}),h.jsxs("div",{className:"mt-2 text-sm text-red-500",children:[a?"Email or password incorrect":null,!a&&t?h.jsx("p",{children:"You have not verified your email. "}):null]}),h.jsx("label",{children:h.jsx("button",{className:"mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition",type:"submit",children:"Sign In"})}),h.jsx(Mn,{to:"/schedule",children:h.jsx("p",{className:"mt-6 hover:text-c4 text-c7 transition",children:"Make a schedule without logging in"})})]})}function O3(){const[t,e]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,a]=b.useState(!1);async function l(u){if(u.preventDefault(),n!==i){a(!0);return}const c=await g4(t,n);c.status==="success"?(a(!1),await _4({email:t,uid:c.info.user.uid})):a(c.info.code.split("/")[1].replaceAll("-"," "))}return h.jsxs("form",{className:"basis-full w-full box-border p-4 shrink-0 text-sm md:text-base",onSubmit:u=>void l(u),children:[h.jsx("p",{className:"w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg",children:"Sign up your account"}),h.jsxs("label",{children:["Email",h.jsx("input",{name:"email",placeholder:"Email",className:`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md ${o?"border-red-500 border border-solid":""}`,type:"email",onChange:u=>e(u.target.value),required:!0,value:t})]}),h.jsxs("label",{className:"relative",children:[h.jsx("div",{className:"flex justify-between",children:h.jsx("span",{children:"Password"})}),h.jsx("div",{className:"relative mt-2 flex items-center",children:h.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md mb-6 box-border ${o?"border-red-500 border border-solid":""}`,type:"text",onChange:u=>r(u.target.value),required:!0,value:n})})]}),h.jsxs("label",{className:"relative",children:[h.jsx("div",{className:"flex justify-between",children:h.jsx("span",{children:"Confirm Password"})}),h.jsx("div",{className:"relative mt-2 flex items-center",children:h.jsx("input",{name:"password",placeholder:"Password",className:`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${o?"border-red-500 border border-solid":""}`,type:"text",onChange:u=>s(u.target.value),required:!0,value:i})})]}),h.jsxs("p",{className:"mt-2 text-sm text-red-500",children:[o===!0?"The passwords don't match":null,o&&o!==!0?o:null]}),h.jsx("label",{children:h.jsx("button",{className:"mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition",type:"submit",children:"Sign Up"})}),h.jsx(Mn,{to:"/schedule",children:h.jsx("p",{className:"mt-6 hover:text-c4 text-c7 transition",children:"Make a schedule without signing up"})})]})}var M3=Object.defineProperty,L3=(t,e)=>{for(var n in e)M3(t,n,{get:e[n],enumerable:!0})},wn={};L3(wn,{assign:()=>j3,colors:()=>Xr,createStringInterpolator:()=>gv,skipAnimation:()=>bC,to:()=>EC,willAdvance:()=>vv});var cv=Cl(),te=t=>Sl(t,cv),dv=Cl();te.write=t=>Sl(t,dv);var Ad=Cl();te.onStart=t=>Sl(t,Ad);var fv=Cl();te.onFrame=t=>Sl(t,fv);var hv=Cl();te.onFinish=t=>Sl(t,hv);var Ms=[];te.setTimeout=(t,e)=>{const n=te.now()+e,r=()=>{const s=Ms.findIndex(o=>o.cancel==r);~s&&Ms.splice(s,1),Ur-=~s?1:0},i={time:n,handler:t,cancel:r};return Ms.splice(gC(n),0,i),Ur+=1,vC(),i};var gC=t=>~(~Ms.findIndex(e=>e.time>t)||~Ms.length);te.cancel=t=>{Ad.delete(t),fv.delete(t),hv.delete(t),cv.delete(t),dv.delete(t)};te.sync=t=>{Bp=!0,te.batchedUpdates(t),Bp=!1};te.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,te.onStart(n)}return r.handler=t,r.cancel=()=>{Ad.delete(n),e=null},r};var pv=typeof window<"u"?window.requestAnimationFrame:()=>{};te.use=t=>pv=t;te.now=typeof performance<"u"?()=>performance.now():Date.now;te.batchedUpdates=t=>t();te.catch=console.error;te.frameLoop="always";te.advance=()=>{te.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):_C()};var jr=-1,Ur=0,Bp=!1;function Sl(t,e){Bp?(e.delete(t),t(0)):(e.add(t),vC())}function vC(){jr<0&&(jr=0,te.frameLoop!=="demand"&&pv(yC))}function D3(){jr=-1}function yC(){~jr&&(pv(yC),te.batchedUpdates(_C))}function _C(){const t=jr;jr=te.now();const e=gC(jr);if(e&&(wC(Ms.splice(0,e),n=>n.handler()),Ur-=e),!Ur){D3();return}Ad.flush(),cv.flush(t?Math.min(64,jr-t):16.667),fv.flush(),dv.flush(),hv.flush()}function Cl(){let t=new Set,e=t;return{add(n){Ur+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return Ur-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,Ur-=e.size,wC(e,r=>r(n)&&t.add(r)),Ur+=t.size,e=t)}}}function wC(t,e){t.forEach(n=>{try{e(n)}catch(r){te.catch(r)}})}function Hp(){}var F3=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),R={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function $n(t,e){if(R.arr(t)){if(!R.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var X=(t,e)=>t.forEach(e);function Ln(t,e,n){if(R.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var Et=t=>R.und(t)?[]:R.arr(t)?t:[t];function la(t,e){if(t.size){const n=Array.from(t);t.clear(),X(n,e)}}var Wo=(t,...e)=>la(t,n=>n(...e)),mv=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),gv,EC,Xr=null,bC=!1,vv=Hp,j3=t=>{t.to&&(EC=t.to),t.now&&(te.now=t.now),t.colors!==void 0&&(Xr=t.colors),t.skipAnimation!=null&&(bC=t.skipAnimation),t.createStringInterpolator&&(gv=t.createStringInterpolator),t.requestAnimationFrame&&te.use(t.requestAnimationFrame),t.batchedUpdates&&(te.batchedUpdates=t.batchedUpdates),t.willAdvance&&(vv=t.willAdvance),t.frameLoop&&(te.frameLoop=t.frameLoop)},ua=new Set,Yt=[],Kf=[],Lc=0,Od={get idle(){return!ua.size&&!Yt.length},start(t){Lc>t.priority?(ua.add(t),te.onStart(U3)):(IC(t),te(qp))},advance:qp,sort(t){if(Lc)te.onFrame(()=>Od.sort(t));else{const e=Yt.indexOf(t);~e&&(Yt.splice(e,1),SC(t))}},clear(){Yt=[],ua.clear()}};function U3(){ua.forEach(IC),ua.clear(),te(qp)}function IC(t){Yt.includes(t)||SC(t)}function SC(t){Yt.splice(z3(Yt,e=>e.priority>t.priority),0,t)}function qp(t){const e=Kf;for(let n=0;n<Yt.length;n++){const r=Yt[n];Lc=r.priority,r.idle||(vv(r),r.advance(t),r.idle||e.push(r))}return Lc=0,Kf=Yt,Kf.length=0,Yt=e,Yt.length>0}function z3(t,e){const n=t.findIndex(e);return n<0?t.length:n}var $3=(t,e,n)=>Math.min(Math.max(n,t),e),V3={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},pn="[-+]?\\d*\\.?\\d+",Dc=pn+"%";function Md(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var W3=new RegExp("rgb"+Md(pn,pn,pn)),B3=new RegExp("rgba"+Md(pn,pn,pn,pn)),H3=new RegExp("hsl"+Md(pn,Dc,Dc)),q3=new RegExp("hsla"+Md(pn,Dc,Dc,pn)),G3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,K3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Y3=/^#([0-9a-fA-F]{6})$/,Q3=/^#([0-9a-fA-F]{8})$/;function J3(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=Y3.exec(t))?parseInt(e[1]+"ff",16)>>>0:Xr&&Xr[t]!==void 0?Xr[t]:(e=W3.exec(t))?(Zi(e[1])<<24|Zi(e[2])<<16|Zi(e[3])<<8|255)>>>0:(e=B3.exec(t))?(Zi(e[1])<<24|Zi(e[2])<<16|Zi(e[3])<<8|Q0(e[4]))>>>0:(e=G3.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=Q3.exec(t))?parseInt(e[1],16)>>>0:(e=K3.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=H3.exec(t))?(K0(Y0(e[1]),cu(e[2]),cu(e[3]))|255)>>>0:(e=q3.exec(t))?(K0(Y0(e[1]),cu(e[2]),cu(e[3]))|Q0(e[4]))>>>0:null}function Yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function K0(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=Yf(i,r,t+1/3),o=Yf(i,r,t),a=Yf(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Zi(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function Y0(t){return(parseFloat(t)%360+360)%360/360}function Q0(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function cu(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function J0(t){let e=J3(t);if(e===null)return t;e=e||0;const n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}var Ga=(t,e,n)=>{if(R.fun(t))return t;if(R.arr(t))return Ga({range:t,output:e,extrapolate:n});if(R.str(t.output[0]))return gv(t);const r=t,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=Z3(u,s);return X3(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function X3(t,e,n,r,i,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function Z3(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var e5=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*t,i=e==="end"?Math.floor(r):Math.ceil(r);return $3(0,1,i/t)},Fc=1.70158,du=Fc*1.525,X0=Fc+1,Z0=2*Math.PI/3,e1=2*Math.PI/4.5,fu=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,t5={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>X0*t*t*t-Fc*t*t,easeOutBack:t=>1+X0*Math.pow(t-1,3)+Fc*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((du+1)*2*t-du)/2:(Math.pow(2*t-2,2)*((du+1)*(t*2-2)+du)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Z0),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Z0)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*e1))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*e1)/2+1,easeInBounce:t=>1-fu(1-t),easeOutBounce:fu,easeInOutBounce:t=>t<.5?(1-fu(1-2*t))/2:(1+fu(2*t-1))/2,steps:e5},Ka=Symbol.for("FluidValue.get"),Js=Symbol.for("FluidValue.observers"),Kt=t=>!!(t&&t[Ka]),Ct=t=>t&&t[Ka]?t[Ka]():t,t1=t=>t[Js]||null;function n5(t,e){t.eventObserved?t.eventObserved(e):t(e)}function Ya(t,e){const n=t[Js];n&&n.forEach(r=>{n5(r,e)})}var CC=class{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");r5(this,t)}},r5=(t,e)=>kC(t,Ka,e);function ho(t,e){if(t[Ka]){let n=t[Js];n||kC(t,Js,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function Qa(t,e){const n=t[Js];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[Js]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var kC=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),Mu=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i5=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,n1=new RegExp(`(${Mu.source})(%|[a-z]+)`,"i"),s5=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ld=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,xC=t=>{const[e,n]=o5(t);if(!e||mv())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||t}else{if(n&&Ld.test(n))return xC(n);if(n)return n}return t},o5=t=>{const e=Ld.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]},Qf,a5=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,TC=t=>{Qf||(Qf=Xr?new RegExp(`(${Object.keys(Xr).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>Ct(s).replace(Ld,xC).replace(i5,J0).replace(Qf,J0)),n=e.map(s=>s.match(Mu).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>Ga({...t,output:s}));return s=>{var l;const o=!n1.test(e[0])&&((l=e.find(u=>n1.test(u)))==null?void 0:l.replace(Mu,""));let a=0;return e[0].replace(Mu,()=>`${i[a++](s)}${o||""}`).replace(s5,a5)}},yv="react-spring: ",NC=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${yv}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},l5=NC(console.warn);function u5(){l5(`${yv}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var c5=NC(console.warn);function d5(){c5(`${yv}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Dd(t){return R.str(t)&&(t[0]=="#"||/\d/.test(t)||!mv()&&Ld.test(t)||t in(Xr||{}))}var xi=mv()?b.useEffect:b.useLayoutEffect,f5=()=>{const t=b.useRef(!1);return xi(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function _v(){const t=b.useState()[1],e=f5();return()=>{e.current&&t(Math.random())}}function h5(t,e){const[n]=b.useState(()=>({inputs:e,result:t()})),r=b.useRef(),i=r.current;let s=i;return s?e&&s.inputs&&p5(e,s.inputs)||(s={inputs:e,result:t()}):s=n,b.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function p5(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var wv=t=>b.useEffect(t,m5),m5=[];function Gp(t){const e=b.useRef();return b.useEffect(()=>{e.current=t}),e.current}var Ja=Symbol.for("Animated:node"),g5=t=>!!t&&t[Ja]===t,Sn=t=>t&&t[Ja],Ev=(t,e)=>F3(t,Ja,e),Fd=t=>t&&t[Ja]&&t[Ja].getPayload(),RC=class{constructor(){Ev(this,this)}getPayload(){return this.payload||[]}},kl=class extends RC{constructor(t){super(),this._value=t,this.done=!0,this.durationProgress=0,R.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new kl(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return R.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,R.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},Xa=class extends kl{constructor(t){super(0),this._string=null,this._toString=Ga({output:[t,t]})}static create(t){return new Xa(t)}getValue(){const t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(R.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=Ga({output:[this.getValue(),t]})),this._value=0,super.reset()}},jc={dependencies:null},jd=class extends RC{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return Ln(this.source,(n,r)=>{g5(n)?e[r]=n.getValue(t):Kt(n)?e[r]=Ct(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&X(this.payload,t=>t.reset())}_makePayload(t){if(t){const e=new Set;return Ln(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){jc.dependencies&&Kt(t)&&jc.dependencies.add(t);const e=Fd(t);e&&X(e,n=>this.add(n))}},PC=class extends jd{constructor(t){super(t)}static create(t){return new PC(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const e=this.getPayload();return t.length==e.length?e.map((n,r)=>n.setValue(t[r])).some(Boolean):(super.setValue(t.map(v5)),!0)}};function v5(t){return(Dd(t)?Xa:kl).create(t)}function Kp(t){const e=Sn(t);return e?e.constructor:R.arr(t)?PC:Dd(t)?Xa:kl}var r1=(t,e)=>{const n=!R.fun(t)||t.prototype&&t.prototype.isReactComponent;return b.forwardRef((r,i)=>{const s=b.useRef(null),o=n&&b.useCallback(p=>{s.current=w5(i,p)},[i]),[a,l]=_5(r,e),u=_v(),c=()=>{const p=s.current;if(n&&!p)return;(p?e.applyAnimatedValues(p,a.getValue(!0)):!1)===!1&&u()},d=new y5(c,l),f=b.useRef();xi(()=>(f.current=d,X(l,p=>ho(p,d)),()=>{f.current&&(X(f.current.deps,p=>Qa(p,f.current)),te.cancel(f.current.update))})),b.useEffect(c,[]),wv(()=>()=>{const p=f.current;X(p.deps,_=>Qa(_,p))});const y=e.getComponentProps(a.getValue());return b.createElement(t,{...y,ref:o})})},y5=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&te.write(this.update)}};function _5(t,e){const n=new Set;return jc.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new jd(t),jc.dependencies=null,[t,n]}function w5(t,e){return t&&(R.fun(t)?t(e):t.current=e),e}var i1=Symbol.for("AnimatedComponent"),E5=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new jd(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=s1(o)||"Anonymous";return R.str(o)?o=s[o]||(s[o]=r1(o,i)):o=o[i1]||(o[i1]=r1(o,i)),o.displayName=`Animated(${a})`,o};return Ln(t,(o,a)=>{R.arr(t)&&(a=s1(o)),s[a]=s(o)}),{animated:s}},s1=t=>R.str(t)?t:t&&R.str(t.displayName)?t.displayName:R.fun(t)&&t.name||null;function kt(t,...e){return R.fun(t)?t(...e):t}var ca=(t,e)=>t===!0||!!(e&&t&&(R.fun(t)?t(e):Et(t).includes(e))),AC=(t,e)=>R.obj(t)?e&&t[e]:t,OC=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,b5=t=>t,Ud=(t,e=b5)=>{let n=I5;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const s=e(t[i],i);R.und(s)||(r[i]=s)}return r},I5=["config","onProps","onStart","onChange","onPause","onResume","onRest"],S5={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function C5(t){const e={};let n=0;if(Ln(t,(r,i)=>{S5[i]||(e[i]=r,n++)}),n)return e}function bv(t){const e=C5(t);if(e){const n={to:e};return Ln(t,(r,i)=>i in e||(n[i]=r)),n}return{...t}}function Za(t){return t=Ct(t),R.arr(t)?t.map(Za):Dd(t)?wn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function MC(t){for(const e in t)return!0;return!1}function Yp(t){return R.fun(t)||R.arr(t)&&R.obj(t[0])}function Qp(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function LC(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var k5={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Jp={...k5.default,mass:1,damping:1,easing:t5.linear,clamp:!1},x5=class{constructor(){this.velocity=0,Object.assign(this,Jp)}};function T5(t,e,n){n&&(n={...n},o1(n,e),e={...n,...e}),o1(t,e),Object.assign(t,e);for(const o in Jp)t[o]==null&&(t[o]=Jp[o]);let{frequency:r,damping:i}=t;const{mass:s}=t;return R.und(r)||(r<.01&&(r=.01),i<0&&(i=0),t.tension=Math.pow(2*Math.PI/r,2)*s,t.friction=4*Math.PI*i*s/r),t}function o1(t,e){if(!R.und(e.decay))t.duration=void 0;else{const n=!R.und(e.tension)||!R.und(e.friction);(n||!R.und(e.frequency)||!R.und(e.damping)||!R.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var a1=[],N5=class{constructor(){this.changed=!1,this.values=a1,this.toValues=null,this.fromValues=a1,this.config=new x5,this.immediate=!1}};function DC(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{let l,u,c=ca(n.cancel??(r==null?void 0:r.cancel),e);if(c)y();else{R.und(n.pause)||(i.paused=ca(n.pause,e));let p=r==null?void 0:r.pause;p!==!0&&(p=i.paused||ca(p,e)),l=kt(n.delay||0,e),p?(i.resumeQueue.add(f),s.pause()):(s.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),l=u.time-te.now()}function f(){l>0&&!wn.skipAnimation?(i.delayed=!0,u=te.setTimeout(y,l),i.pauseQueue.add(d),i.timeouts.add(u)):y()}function y(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),t<=(i.cancelId||0)&&(c=!0);try{s.start({...n,callId:t,cancel:c},o)}catch(p){a(p)}}})}var Iv=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?Ls(t.get()):e.every(n=>n.noop)?FC(t.get()):un(t.get(),e.every(n=>n.finished)),FC=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),un=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),Ls=t=>({value:t,cancelled:!0,finished:!1});function jC(t,e,n,r){const{callId:i,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const u=Ud(e,(E,v)=>v==="onRest"?void 0:E);let c,d;const f=new Promise((E,v)=>(c=E,d=v)),y=E=>{const v=i<=(n.cancelId||0)&&Ls(r)||i!==n.asyncId&&un(r,!1);if(v)throw E.result=v,d(E),E},p=(E,v)=>{const m=new l1,w=new u1;return(async()=>{if(wn.skipAnimation)throw el(n),w.result=un(r,!1),d(w),w;y(m);const g=R.obj(E)?{...E}:{...v,to:E};g.parentId=i,Ln(u,(C,x)=>{R.und(g[x])&&(g[x]=C)});const I=await r.start(g);return y(m),n.paused&&await new Promise(C=>{n.resumeQueue.add(C)}),I})()};let _;if(wn.skipAnimation)return el(n),un(r,!1);try{let E;R.arr(t)?E=(async v=>{for(const m of v)await p(m)})(t):E=Promise.resolve(t(p,r.stop.bind(r))),await Promise.all([E.then(c),f]),_=un(r.get(),!0,!1)}catch(E){if(E instanceof l1)_=E.result;else if(E instanceof u1)_=E.result;else throw E}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return R.fun(o)&&te.batchedUpdates(()=>{o(_,r,r.item)}),_})()}function el(t,e){la(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var l1=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},u1=class extends Error{constructor(){super("SkipAnimationSignal")}},Xp=t=>t instanceof Sv,R5=1,Sv=class extends CC{constructor(){super(...arguments),this.id=R5++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=Sn(this);return t&&t.getValue()}to(...t){return wn.to(this,t)}interpolate(...t){return u5(),wn.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){Ya(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||Od.sort(this),Ya(this,{type:"priority",parent:this,priority:t})}},Hi=Symbol.for("SpringPhase"),UC=1,Zp=2,em=4,Jf=t=>(t[Hi]&UC)>0,Cr=t=>(t[Hi]&Zp)>0,Lo=t=>(t[Hi]&em)>0,c1=(t,e)=>e?t[Hi]|=Zp|UC:t[Hi]&=~Zp,d1=(t,e)=>e?t[Hi]|=em:t[Hi]&=~em,P5=class extends Sv{constructor(t,e){if(super(),this.animation=new N5,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!R.und(t)||!R.und(e)){const n=R.obj(t)?{...t}:{...e,from:t};R.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Cr(this)||this._state.asyncTo)||Lo(this)}get goal(){return Ct(this.animation.to)}get velocity(){const t=Sn(this);return t instanceof kl?t.lastVelocity||0:t.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return Jf(this)}get isAnimating(){return Cr(this)}get isPaused(){return Lo(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:s}=r,o=Fd(r.to);!o&&Kt(r.to)&&(i=Et(Ct(r.to))),r.values.forEach((u,c)=>{if(u.done)return;const d=u.constructor==Xa?1:o?o[c].lastPosition:i[c];let f=r.immediate,y=d;if(!f){if(y=u.lastPosition,s.tension<=0){u.done=!0;return}let p=u.elapsedTime+=t;const _=r.fromValues[c],E=u.v0!=null?u.v0:u.v0=R.arr(s.velocity)?s.velocity[c]:s.velocity;let v;const m=s.precision||(_==d?.005:Math.min(1,Math.abs(d-_)*.001));if(R.und(s.duration))if(s.decay){const w=s.decay===!0?.998:s.decay,g=Math.exp(-(1-w)*p);y=_+E/(1-w)*(1-g),f=Math.abs(u.lastPosition-y)<=m,v=E*g}else{v=u.lastVelocity==null?E:u.lastVelocity;const w=s.restVelocity||m/10,g=s.clamp?0:s.bounce,I=!R.und(g),C=_==d?u.v0>0:_<d;let x,A=!1;const D=1,F=Math.ceil(t/D);for(let ce=0;ce<F&&(x=Math.abs(v)>w,!(!x&&(f=Math.abs(d-y)<=m,f)));++ce){I&&(A=y==d||y>d==C,A&&(v=-v*g,y=d));const re=-s.tension*1e-6*(y-d),Ue=-s.friction*.001*v,B=(re+Ue)/s.mass;v=v+B*D,y=y+v*D}}else{let w=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,u.durationProgress>0&&(u.elapsedTime=s.duration*u.durationProgress,p=u.elapsedTime+=t)),w=(s.progress||0)+p/this._memoizedDuration,w=w>1?1:w<0?0:w,u.durationProgress=w),y=_+s.easing(w)*(d-_),v=(y-u.lastPosition)/t,f=w==1}u.lastVelocity=v,Number.isNaN(y)&&(console.warn("Got NaN while animating:",this),f=!0)}o&&!o[c].done&&(f=!1),f?u.done=!0:e=!1,u.setValue(y,s.round)&&(n=!0)});const a=Sn(this),l=a.getValue();if(e){const u=Ct(r.to);(l!==u||n)&&!s.decay?(a.setValue(u),this._onChange(u)):n&&s.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(t){return te.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Cr(this)){const{to:t,config:e}=this.animation;te.batchedUpdates(()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return R.und(t)?(n=this.queue||[],this.queue=[]):n=[R.obj(t)?t:{...e,to:t}],Promise.all(n.map(r=>this._update(r))).then(r=>Iv(this,r))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),el(this._state,t&&this._lastCallId),te.batchedUpdates(()=>this._stop(e,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:r}=t;n=R.obj(n)?n[e]:n,(n==null||Yp(n))&&(n=void 0),r=R.obj(r)?r[e]:r,r==null&&(r=void 0);const i={to:n,from:r};return Jf(this)||(t.reverse&&([n,r]=[r,n]),r=Ct(r),R.und(r)?Sn(this)||this._set(n):this._set(r)),i}_update({...t},e){const{key:n,defaultProps:r}=this;t.default&&Object.assign(r,Ud(t,(o,a)=>/^on/.test(a)?AC(o,n):o)),h1(this,t,"onProps"),Fo(this,"onProps",t,this);const i=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return DC(++this._lastCallId,{key:n,props:t,defaultProps:r,state:s,actions:{pause:()=>{Lo(this)||(d1(this,!0),Wo(s.pauseQueue),Fo(this,"onPause",un(this,Do(this,this.animation.to)),this))},resume:()=>{Lo(this)&&(d1(this,!1),Cr(this)&&this._resume(),Wo(s.resumeQueue),Fo(this,"onResume",un(this,Do(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(o=>{if(t.loop&&o.finished&&!(e&&o.noop)){const a=zC(t);if(a)return this._update(a,!0)}return o})}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(Ls(this));const r=!R.und(t.to),i=!R.und(t.from);if(r||i)if(e.callId>this._lastToId)this._lastToId=e.callId;else return n(Ls(this));const{key:s,defaultProps:o,animation:a}=this,{to:l,from:u}=a;let{to:c=l,from:d=u}=t;i&&!r&&(!e.default||R.und(c))&&(c=d),e.reverse&&([c,d]=[d,c]);const f=!$n(d,u);f&&(a.from=d),d=Ct(d);const y=!$n(c,l);y&&this._focus(c);const p=Yp(e.to),{config:_}=a,{decay:E,velocity:v}=_;(r||i)&&(_.velocity=0),e.config&&!p&&T5(_,kt(e.config,s),e.config!==o.config?kt(o.config,s):void 0);let m=Sn(this);if(!m||R.und(c))return n(un(this,!0));const w=R.und(e.reset)?i&&!e.default:!R.und(d)&&ca(e.reset,s),g=w?d:this.get(),I=Za(c),C=R.num(I)||R.arr(I)||Dd(I),x=!p&&(!C||ca(o.immediate||e.immediate,s));if(y){const ce=Kp(c);if(ce!==m.constructor)if(x)m=this._set(I);else throw Error(`Cannot animate between ${m.constructor.name} and ${ce.name}, as the "to" prop suggests`)}const A=m.constructor;let D=Kt(c),F=!1;if(!D){const ce=w||!Jf(this)&&f;(y||ce)&&(F=$n(Za(g),I),D=!F),(!$n(a.immediate,x)&&!x||!$n(_.decay,E)||!$n(_.velocity,v))&&(D=!0)}if(F&&Cr(this)&&(a.changed&&!w?D=!0:D||this._stop(l)),!p&&((D||Kt(l))&&(a.values=m.getPayload(),a.toValues=Kt(c)?null:A==Xa?[1]:Et(I)),a.immediate!=x&&(a.immediate=x,!x&&!w&&this._set(l)),D)){const{onRest:ce}=a;X(O5,Ue=>h1(this,e,Ue));const re=un(this,Do(this,l));Wo(this._pendingCalls,re),this._pendingCalls.add(n),a.changed&&te.batchedUpdates(()=>{var Ue;a.changed=!w,ce==null||ce(re,this),w?kt(o.onRest,re):(Ue=a.onStart)==null||Ue.call(a,re,this)})}w&&this._set(g),p?n(jC(e.to,e,this._state,this)):D?this._start():Cr(this)&&!y?this._pendingCalls.add(n):n(FC(g))}_focus(t){const e=this.animation;t!==e.to&&(t1(this)&&this._detach(),e.to=t,t1(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;Kt(e)&&(ho(e,this),Xp(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;Kt(t)&&Qa(t,this)}_set(t,e=!0){const n=Ct(t);if(!R.und(n)){const r=Sn(this);if(!r||!$n(n,r.getValue())){const i=Kp(n);!r||r.constructor!=i?Ev(this,i.create(n)):r.setValue(n),r&&te.batchedUpdates(()=>{this._onChange(n,e)})}}return Sn(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,Fo(this,"onStart",un(this,Do(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),kt(this.animation.onChange,t,this)),kt(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;Sn(this).reset(Ct(t.to)),t.immediate||(t.fromValues=t.values.map(e=>e.lastPosition)),Cr(this)||(c1(this,!0),Lo(this)||this._resume())}_resume(){wn.skipAnimation?this.finish():Od.start(this)}_stop(t,e){if(Cr(this)){c1(this,!1);const n=this.animation;X(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ya(this,{type:"idle",parent:this});const r=e?Ls(this.get()):un(this.get(),Do(this,t??n.to));Wo(this._pendingCalls,r),n.changed&&(n.changed=!1,Fo(this,"onRest",r,this))}}};function Do(t,e){const n=Za(e),r=Za(t.get());return $n(r,n)}function zC(t,e=t.loop,n=t.to){const r=kt(e);if(r){const i=r!==!0&&bv(r),s=(i||t).reverse,o=!i||i.reset;return tl({...t,loop:e,default:!1,pause:void 0,to:!s||Yp(n)?n:void 0,from:o?t.from:void 0,reset:o,...i})}}function tl(t){const{to:e,from:n}=t=bv(t),r=new Set;return R.obj(e)&&f1(e,r),R.obj(n)&&f1(n,r),t.keys=r.size?Array.from(r):null,t}function A5(t){const e=tl(t);return R.und(e.default)&&(e.default=Ud(e)),e}function f1(t,e){Ln(t,(n,r)=>n!=null&&e.add(r))}var O5=["onStart","onRest","onChange","onPause","onResume"];function h1(t,e,n){t.animation[n]=e[n]!==OC(e,n)?AC(e[n],t.key):void 0}function Fo(t,e,...n){var r,i,s,o;(i=(r=t.animation)[e])==null||i.call(r,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var M5=["onStart","onChange","onRest"],L5=1,$C=class{constructor(t,e){this.id=L5++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(const e in t){const n=t[e];R.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(tl(t)),this}start(t){let{queue:e}=this;return t?e=Et(t).map(tl):this.queue=[],this._flush?this._flush(this,e):(qC(this,e),tm(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;X(Et(e),r=>n[r].stop(!!t))}else el(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(R.und(t))this.start({pause:!0});else{const e=this.springs;X(Et(t),n=>e[n].pause())}return this}resume(t){if(R.und(t))this.start({pause:!1});else{const e=this.springs;X(Et(t),n=>e[n].resume())}return this}each(t){Ln(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,la(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const s=!r&&this._started,o=i||s&&n.size?this.get():null;i&&e.size&&la(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,la(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;te.onFrame(this._onFrame)}};function tm(t,e){return Promise.all(e.map(n=>VC(t,n))).then(n=>Iv(t,n))}async function VC(t,e,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=e,u=R.obj(e.default)&&e.default;o&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);const c=R.arr(i)||R.fun(i)?i:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):X(M5,_=>{const E=e[_];if(R.fun(E)){const v=t._events[_];e[_]=({finished:m,cancelled:w})=>{const g=v.get(E);g?(m||(g.finished=!1),w&&(g.cancelled=!0)):v.set(E,{value:null,finished:m||!1,cancelled:w||!1})},u&&(u[_]=e[_])}});const d=t._state;e.pause===!d.paused?(d.paused=e.pause,Wo(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);const f=(r||Object.keys(t.springs)).map(_=>t.springs[_].start(e)),y=e.cancel===!0||OC(e,"cancel")===!0;(c||y&&d.asyncId)&&f.push(DC(++t._lastAsyncId,{props:e,state:d,actions:{pause:Hp,resume:Hp,start(_,E){y?(el(d,t._lastAsyncId),E(Ls(t))):(_.onRest=a,E(jC(c,_,d,t)))}}})),d.paused&&await new Promise(_=>{d.resumeQueue.add(_)});const p=Iv(t,await Promise.all(f));if(o&&p.finished&&!(n&&p.noop)){const _=zC(e,o,i);if(_)return qC(t,[_]),VC(t,_,!0)}return l&&te.batchedUpdates(()=>l(p,t,t.item)),p}function nm(t,e){const n={...t.springs};return e&&X(Et(e),r=>{R.und(r.keys)&&(r=tl(r)),R.obj(r.to)||(r={...r,to:void 0}),HC(n,r,i=>BC(i))}),WC(t,n),n}function WC(t,e){Ln(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,ho(n,t))})}function BC(t,e){const n=new P5;return n.key=t,e&&ho(n,e),n}function HC(t,e,n){e.keys&&X(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function qC(t,e){X(e,n=>{HC(t.springs,n,r=>BC(r,t))})}var xl=({children:t,...e})=>{const n=b.useContext(Uc),r=e.pause||!!n.pause,i=e.immediate||!!n.immediate;e=h5(()=>({pause:r,immediate:i}),[r,i]);const{Provider:s}=Uc;return b.createElement(s,{value:e},t)},Uc=D5(xl,{});xl.Provider=Uc.Provider;xl.Consumer=Uc.Consumer;function D5(t,e){return Object.assign(t,b.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var GC=()=>{const t=[],e=function(r){d5();const i=[];return X(t,(s,o)=>{if(R.und(r))i.push(s.start());else{const a=n(r,s,o);a&&i.push(s.start(a))}}),i};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){const i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return X(t,r=>r.pause(...arguments)),this},e.resume=function(){return X(t,r=>r.resume(...arguments)),this},e.set=function(r){X(t,(i,s)=>{const o=R.fun(r)?r(s,i):r;o&&i.set(o)})},e.start=function(r){const i=[];return X(t,(s,o)=>{if(R.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},e.stop=function(){return X(t,r=>r.stop(...arguments)),this},e.update=function(r){return X(t,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(r,i,s){return R.fun(r)?r(s,i):r};return e._getProps=n,e};function F5(t,e,n){const r=R.fun(e)&&e;r&&!n&&(n=[]);const i=b.useMemo(()=>r||arguments.length==3?GC():void 0,[]),s=b.useRef(0),o=_v(),a=b.useMemo(()=>({ctrls:[],queue:[],flush(v,m){const w=nm(v,m);return s.current>0&&!a.queue.length&&!Object.keys(w).some(I=>!v.springs[I])?tm(v,m):new Promise(I=>{WC(v,w),a.queue.push(()=>{I(tm(v,m))}),o()})}}),[]),l=b.useRef([...a.ctrls]),u=[],c=Gp(t)||0;b.useMemo(()=>{X(l.current.slice(t,c),v=>{Qp(v,i),v.stop(!0)}),l.current.length=t,d(c,t)},[t]),b.useMemo(()=>{d(0,Math.min(c,t))},n);function d(v,m){for(let w=v;w<m;w++){const g=l.current[w]||(l.current[w]=new $C(null,a.flush)),I=r?r(w,g):e[w];I&&(u[w]=A5(I))}}const f=l.current.map((v,m)=>nm(v,u[m])),y=b.useContext(xl),p=Gp(y),_=y!==p&&MC(y);xi(()=>{s.current++,a.ctrls=l.current;const{queue:v}=a;v.length&&(a.queue=[],X(v,m=>m())),X(l.current,(m,w)=>{i==null||i.add(m),_&&m.start({default:y});const g=u[w];g&&(LC(m,g.ref),m.ref?m.queue.push(g):m.start(g))})}),wv(()=>()=>{X(a.ctrls,v=>v.stop(!0))});const E=f.map(v=>({...v}));return i?[E,i]:E}function Zt(t,e){const n=R.fun(t),[[r],i]=F5(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,i]:r}function j5(t,e,n){const r=R.fun(e)&&e,{reset:i,sort:s,trail:o=0,expires:a=!0,exitBeforeEnter:l=!1,onDestroyed:u,ref:c,config:d}=r?r():e,f=b.useMemo(()=>r||arguments.length==3?GC():void 0,[]),y=Et(t),p=[],_=b.useRef(null),E=i?null:_.current;xi(()=>{_.current=p}),wv(()=>(X(p,B=>{f==null||f.add(B.ctrl),B.ctrl.ref=f}),()=>{X(_.current,B=>{B.expired&&clearTimeout(B.expirationId),Qp(B.ctrl,f),B.ctrl.stop(!0)})}));const v=z5(y,r?r():e,E),m=i&&_.current||[];xi(()=>X(m,({ctrl:B,item:Q,key:fe})=>{Qp(B,f),kt(u,Q,fe)}));const w=[];if(E&&X(E,(B,Q)=>{B.expired?(clearTimeout(B.expirationId),m.push(B)):(Q=w[Q]=v.indexOf(B.key),~Q&&(p[Q]=B))}),X(y,(B,Q)=>{p[Q]||(p[Q]={key:v[Q],item:B,phase:"mount",ctrl:new $C},p[Q].ctrl.item=B)}),w.length){let B=-1;const{leave:Q}=r?r():e;X(w,(fe,ve)=>{const N=E[ve];~fe?(B=p.indexOf(N),p[B]={...N,item:y[fe]}):Q&&p.splice(++B,0,N)})}R.fun(s)&&p.sort((B,Q)=>s(B.item,Q.item));let g=-o;const I=_v(),C=Ud(e),x=new Map,A=b.useRef(new Map),D=b.useRef(!1);X(p,(B,Q)=>{const fe=B.key,ve=B.phase,N=r?r():e;let z,H;const ke=kt(N.delay||0,fe);if(ve=="mount")z=N.enter,H="enter";else{const Be=v.indexOf(fe)<0;if(ve!="leave")if(Be)z=N.leave,H="leave";else if(z=N.update)H="update";else return;else if(!Be)z=N.enter,H="enter";else return}if(z=kt(z,B.item,Q),z=R.obj(z)?bv(z):{to:z},!z.config){const Be=d||C.config;z.config=kt(Be,B.item,Q,H)}g+=o;const ye={...C,delay:ke+g,ref:c,immediate:N.immediate,reset:!1,...z};if(H=="enter"&&R.und(ye.from)){const Be=r?r():e,ft=R.und(Be.initial)||E?Be.from:Be.initial;ye.from=kt(ft,B.item,Q)}const{onResolve:_r}=ye;ye.onResolve=Be=>{kt(_r,Be);const ft=_.current,_t=ft.find(Dt=>Dt.key===fe);if(_t&&!(Be.cancelled&&_t.phase!="update")&&_t.ctrl.idle){const Dt=ft.every(Fn=>Fn.ctrl.idle);if(_t.phase=="leave"){const Fn=kt(a,_t.item);if(Fn!==!1){const mo=Fn===!0?0:Fn;if(_t.expired=!0,!Dt&&mo>0){mo<=2147483647&&(_t.expirationId=setTimeout(I,mo));return}}}Dt&&ft.some(Fn=>Fn.expired)&&(A.current.delete(_t),l&&(D.current=!0),I())}};const me=nm(B.ctrl,ye);H==="leave"&&l?A.current.set(B,{phase:H,springs:me,payload:ye}):x.set(B,{phase:H,springs:me,payload:ye})});const F=b.useContext(xl),ce=Gp(F),re=F!==ce&&MC(F);xi(()=>{re&&X(p,B=>{B.ctrl.start({default:F})})},[F]),X(x,(B,Q)=>{if(A.current.size){const fe=p.findIndex(ve=>ve.key===Q.key);p.splice(fe,1)}}),xi(()=>{X(A.current.size?A.current:x,({phase:B,payload:Q},fe)=>{const{ctrl:ve}=fe;fe.phase=B,f==null||f.add(ve),re&&B=="enter"&&ve.start({default:F}),Q&&(LC(ve,Q.ref),(ve.ref||f)&&!D.current?ve.update(Q):(ve.start(Q),D.current&&(D.current=!1)))})},i?void 0:n);const Ue=B=>b.createElement(b.Fragment,null,p.map((Q,fe)=>{const{springs:ve}=x.get(Q)||Q.ctrl,N=B({...ve},Q.item,Q,fe);return N&&N.type?b.createElement(N.type,{...N.props,key:R.str(Q.key)||R.num(Q.key)?Q.key:Q.ctrl.id,ref:N.ref}):N}));return f?[Ue,f]:Ue}var U5=1;function z5(t,{key:e,keys:n=e},r){if(n===null){const i=new Set;return t.map(s=>{const o=r&&r.find(a=>a.item===s&&a.phase!=="leave"&&!i.has(a));return o?(i.add(o),o.key):U5++})}return R.und(n)?t:R.fun(n)?t.map(n):Et(n)}var $5=class extends Sv{constructor(t,e){super(),this.source=t,this.idle=!0,this._active=new Set,this.calc=Ga(...e);const n=this._get(),r=Kp(n);Ev(this,r.create(n))}advance(t){const e=this._get(),n=this.get();$n(e,n)||(Sn(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&p1(this._active)&&Xf(this)}_get(){const t=R.arr(this.source)?this.source.map(Ct):Et(Ct(this.source));return this.calc(...t)}_start(){this.idle&&!p1(this._active)&&(this.idle=!1,X(Fd(this),t=>{t.done=!1}),wn.skipAnimation?(te.batchedUpdates(()=>this.advance()),Xf(this)):Od.start(this))}_attach(){let t=1;X(Et(this.source),e=>{Kt(e)&&ho(e,this),Xp(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))}),this.priority=t,this._start()}_detach(){X(Et(this.source),t=>{Kt(t)&&Qa(t,this)}),this._active.clear(),Xf(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=Et(this.source).reduce((e,n)=>Math.max(e,(Xp(n)?n.priority:0)+1),0))}};function V5(t){return t.idle!==!1}function p1(t){return!t.size||Array.from(t).every(V5)}function Xf(t){t.idle||(t.idle=!0,X(Fd(t),e=>{e.done=!0}),Ya(t,{type:"idle",parent:t}))}wn.assign({createStringInterpolator:TC,to:(t,e)=>new $5(t,e)});var KC=/^--/;function W5(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!KC.test(t)&&!(da.hasOwnProperty(t)&&da[t])?e+"px":(""+e).trim()}var m1={};function B5(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:i,scrollTop:s,scrollLeft:o,viewBox:a,...l}=e,u=Object.values(l),c=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:m1[d]||(m1[d]=d.replace(/([A-Z])/g,f=>"-"+f.toLowerCase())));i!==void 0&&(t.textContent=i);for(const d in r)if(r.hasOwnProperty(d)){const f=W5(d,r[d]);KC.test(d)?t.style.setProperty(d,f):t.style[d]=f}c.forEach((d,f)=>{t.setAttribute(d,u[f])}),s!==void 0&&(t.scrollTop=s),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var da={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H5=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),q5=["Webkit","Ms","Moz","O"];da=Object.keys(da).reduce((t,e)=>(q5.forEach(n=>t[H5(n,e)]=t[e]),t),da);var G5=/^(matrix|translate|scale|rotate|skew)/,K5=/^(translate)/,Y5=/^(rotate|skew)/,Zf=(t,e)=>R.num(t)&&t!==0?t+e:t,Lu=(t,e)=>R.arr(t)?t.every(n=>Lu(n,e)):R.num(t)?t===e:parseFloat(t)===e,Q5=class extends jd{constructor({x:t,y:e,z:n,...r}){const i=[],s=[];(t||e||n)&&(i.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>Zf(a,"px")).join(",")})`,Lu(o,0)])),Ln(r,(o,a)=>{if(a==="transform")i.push([o||""]),s.push(l=>[l,l===""]);else if(G5.test(a)){if(delete r[a],R.und(o))return;const l=K5.test(a)?"px":Y5.test(a)?"deg":"";i.push(Et(o)),s.push(a==="rotate3d"?([u,c,d,f])=>[`rotate3d(${u},${c},${d},${Zf(f,l)})`,Lu(f,0)]:u=>[`${a}(${u.map(c=>Zf(c,l)).join(",")})`,Lu(u,a.startsWith("scale")?1:0)])}}),i.length&&(r.transform=new J5(i,s)),super(r)}},J5=class extends CC{constructor(t,e){super(),this.inputs=t,this.transforms=e,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return X(this.inputs,(n,r)=>{const i=Ct(n[0]),[s,o]=this.transforms[r](R.arr(i)?i:n.map(Ct));t+=" "+s,e=e&&o}),e?"none":t}observerAdded(t){t==1&&X(this.inputs,e=>X(e,n=>Kt(n)&&ho(n,this)))}observerRemoved(t){t==0&&X(this.inputs,e=>X(e,n=>Kt(n)&&Qa(n,this)))}eventObserved(t){t.type=="change"&&(this._value=null),Ya(this,t)}},X5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];wn.assign({batchedUpdates:ZE.unstable_batchedUpdates,createStringInterpolator:TC,colors:V3});var Z5=E5(X5,{applyAnimatedValues:B5,createAnimatedStyle:t=>new Q5(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),zt=Z5.animated;function g1(){return h.jsxs("div",{className:"gap-2 w-full h-full flex flex-col items-center justify-center",children:[h.jsx("img",{src:"/me-schedule-maker/images/cooking-pot.gif",alt:"cooking-pot git",className:"h-20"}),h.jsx("p",{children:"Wait it's cooking"})]})}function eF({viewData:t,userData:e}){const n="jac-mock-schedule-maker",[r,i]=b.useState(()=>{if(e)return e.schedules?e.schedules:[];{const l=window.localStorage.getItem(n);return l?JSON.parse(l):[]}}),s=b.useRef(r.length),{chosenClasses:o}=b.useContext(Tl);function a(l){do s.current+=1;while(r.map(u=>u.id).includes(s.current));i([...r,{id:s.current,vData:l,data:o}])}return b.useEffect(()=>{e?w4(e.uid,r).catch(l=>console.log(l)):window.localStorage.setItem(n,JSON.stringify(r))},[r]),h.jsxs("section",{className:"bg-c1 rounded-lg box-border flex w-full flex-wrap gap-2 p-2",children:[h.jsx("div",{className:"bg-c2 hover:bg-c3 active:bg-c4 transition rounded-md flex items-center justify-center md:p-4 p-2 cursor-pointer h-20",onClick:()=>a(t),children:h.jsx(yt,{icon:R3,className:"md:text-4xl text-xl"})}),r.map(l=>h.jsx(nF,{i:l,savedSchedule:r,setSavedSchedule:i},l.id))]})}function tF({blocksToShow:t}){return t.map(e=>{const n=Object.entries(e.time).flat();return h.jsx("div",{className:"z-10 border border-[black] box-border rounded-sm",style:{gridColumnStart:n[0],gridRowStart:n[1][0],gridRowEnd:n[1][1],backgroundColor:e.color}},e.code+e.section+n[0])})}function nF({i:t,savedSchedule:e,setSavedSchedule:n}){const{setChosenClasses:r}=b.useContext(Tl),i=structuredClone(t);i.data||(i.data=[]),i.vData||(i.vData=[]);const[s,o]=Zt(()=>({from:{opacity:0,y:30,scale:1},to:{opacity:1,y:0}}),[]);function a(u){u.stopPropagation(),o.start({from:{opacity:1,scale:1},to:{opacity:0,scale:0},onResolve:()=>{n(e.filter(c=>c.id!==t.id))}})}function l(){r(i.data)}return h.jsxs(zt.div,{className:"min-w-[calc(5rem*1.6)] bg-[white] rounded-md grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 relative hover:bg-slate-200 md:shadow-lg shadow-md cursor-pointer h-20 overflow-hidden",style:s,onClick:l,children:[i.vData.map((u,c)=>h.jsx(tF,{blocksToShow:u},c)),h.jsx(yt,{icon:I3,className:"absolute opacity-10 m-1 bottom-0 right-0 hover:opacity-50 cursor-pointer",onClick:a})]},t.id)}function rF({setInput:t,setCurrent:e}){const[n,r]=b.useState(!1),i=b.useRef(null);function s(o){if(o.preventDefault(),!i.current){t(""),e("search");return}const a=i.current;function l(g){return a.elements.namedItem(g)}const u=l("courseName").value.toUpperCase(),c=l("className").value,d=l("teacherName").value.split(" ").flatMap(g=>g.split(",")).filter(g=>g!=="").map(g=>`p=${g}`),f=Number(l("ratingMax").value),y=Number(l("ratingMin").value),p=[y?`r>${y}`:"",f?`r<${f}`:""],_=Number(l("scoreMax").value),E=Number(l("scoreMin").value),v=[E?`s>${E}`:"",_?`s<${_}`:""],m=["monday","tuesday","wednesday","thursday","friday","honours","blended"].map(g=>l(g).checked).map((g,I)=>g?["M","T","W","R","F","honours","blended"].at(I):""),w=[u,c,...d,...p,...v,...m];console.log(w),t(w.filter(g=>g!=="").join(",")),e("search")}return h.jsx("div",{className:"box-border w-full h-full p-2 overflow-auto",children:h.jsxs("form",{onSubmit:s,className:"flex flex-col md:text-xl text-base gap-4",ref:i,children:[h.jsxs("label",{children:[h.jsx("p",{className:"font-semibold",children:"Course Name or Code"}),h.jsx("input",{placeholder:"English",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"courseName"})]}),h.jsxs("label",{children:[h.jsx("p",{className:"font-semibold",children:"Class Name"}),h.jsx("input",{placeholder:"Hockey is everything",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"className"})]}),h.jsxs("label",{children:[h.jsx("p",{className:"font-semibold",children:"Teacher Name"}),h.jsx("input",{placeholder:"Patrik Burger",className:"outline-none focus:bg-c2 w-full rounded-lg p-1",name:"teacherName"})]}),h.jsxs("div",{className:"flex gap-4 w-full",children:[h.jsxs("label",{className:"basis-1/2",children:[h.jsx("p",{className:"font-semibold",children:"Rating /5"}),h.jsxs("div",{className:"flex gap-1 w-full",children:[h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"ratingMin"})}),h.jsx("p",{className:"flex items-center",children:"to"}),h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"5",name:"ratingMax"})})]})]}),h.jsxs("label",{className:"basis-1/2",children:[h.jsxs("div",{className:"font-semibold relative",children:["Score /100",h.jsx(yt,{icon:pC,className:"ml-2",onMouseOver:()=>r(!0),onMouseOut:()=>r(!1)}),n&&h.jsx("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:h.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."})})]}),h.jsxs("div",{className:"flex gap-1 w-full",children:[h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"0",name:"scoreMin"})}),h.jsx("p",{className:"flex items-center",children:"to"}),h.jsx("div",{className:"basis-full",children:h.jsx("input",{className:"outline-none focus:bg-c2 w-full rounded-lg p-1",placeholder:"100",name:"scoreMax"})})]})]})]}),h.jsxs("label",{className:"flex gap-4",children:[h.jsxs("div",{className:"basis-1/2",children:[h.jsx("p",{className:"font-semibold",children:"Days"}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"monday"})," Monday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"tuesday"})," Tuesday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"wednesday"})," Wednesday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"thursday"})," Thursday"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"friday"})," Friday"]})]}),h.jsxs("div",{className:"basis-1/2",children:[h.jsx("p",{className:"font-semibold",children:"Special"}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"honours"})," Honours"]}),h.jsxs("p",{className:"pl-4",children:[h.jsx("input",{type:"checkbox",name:"blended"})," Blended"]})]})]}),h.jsxs("div",{className:"flex justify-end gap-2",children:[h.jsx("button",{type:"reset",className:"rounded-lg p-2 transition hover:outline-c9 outline outline-1 outline-c1",children:"Clear"}),h.jsx("button",{type:"submit",className:"rounded-lg bg-c9 p-2 text-c1 transition hover:bg-c7",children:"Apply"})]})]})})}function iF({input:t,classes:e,setLoading:n}){b.useEffect(()=>{n(!0)},[]);let r=t.split(",");r=r.map(u=>u.trim());const{chosenClasses:i,setChosenClasses:s}=b.useContext(Tl);function o(u,c){const f=["[0-9]","[0-9]","[0-9]","-","[0-9A-Z]","[0-9A-Z]","[0-9A-Z]","-","[0-9A-Z]","[0-9A-Z]"].slice(0,u.length).join(""),y=new RegExp(f);if(["r>","r<","r="].includes(u.slice(0,2))&&u.length>2){if(!Number(u.slice(2)))return[];const p=Number(u.slice(2));switch(u[1]){case"=":return c.filter(_=>_.lecture.rating.avg===p);case">":return c.filter(_=>_.lecture.rating.avg>=p);case"<":return c.filter(_=>_.lecture.rating.avg<=p)}}else if(["s>","s<","s="].includes(u.slice(0,2))&&u.length>2){if(!Number(u.slice(2)))return[];const p=Number(u.slice(2));switch(u[1]){case"=":return c.filter(_=>_.lecture.rating.score===p);case">":return c.filter(_=>_.lecture.rating.score>=p);case"<":return c.filter(_=>_.lecture.rating.score<=p)}}else if(u.slice(0,2)==="p="){const p=u.slice(2).toLowerCase();return c.filter(_=>_.lecture.prof.toLowerCase().includes(p))}else{if(y.test(u))return c.filter(p=>p.code.startsWith(u));if(u.split("").every(p=>"MTWRF".includes(p)))return c.filter(p=>{const _=structuredClone(Object.keys(p.lecture)),E=structuredClone(Object.keys(p.lab));return _.filter(m=>!["title","prof","rating"].includes(m)).concat(E.filter(m=>!["title","prof","rating"].includes(m))).join("").includes(u)});if(u.toUpperCase()===u)return c.filter(p=>p.course.startsWith(u));if(["honours","blended"].some(p=>p.startsWith(u.toLowerCase()))){const p=u.toLowerCase();if("honours".startsWith(p))return c.filter(_=>_.more.startsWith("For Honours"));if("blended".startsWith(p))return c.filter(_=>_.more.startsWith("BLENDED"))}else return c.filter(p=>p.lecture.title.toLowerCase().startsWith(u.toLowerCase()))}return[]}let a=o(r[0],e);r.slice(1).forEach(u=>{a=o(u,a)});function l(u){if(i.some(c=>u.code===c.code&&u.section===c.section))s(i.filter(c=>!(u.code===c.code&&u.section===c.section)));else if(i.some(c=>u.code===c.code)){alert("You already have a class from this course");return}else s([...i,u])}return h.jsx(h.Fragment,{children:a.map((u,c)=>h.jsxs("div",{className:"bg-c2 p-2 box-border md:mb-3 mb-2 rounded-lg md:shadow-lg shadow-md hover:bg-c3 transition cursor-pointer md:text-base text-xs",onClick:()=>l(u),children:[h.jsxs("p",{className:"font-light",children:[u.program,": ",u.course," ",u.code]}),h.jsxs("p",{className:"md:text-xl font-bold text-base",children:[u.section," ",u.lecture.title]}),h.jsxs("div",{className:"ml-4 relative",children:[u.lecture.prof," ",h.jsx("span",{className:"font-bold",children:u.lecture.rating.score===0?"N/A":u.lecture.rating.score})," ",h.jsx(v1,{rating:u.lecture.rating})]}),Object.entries(u.lecture).filter(d=>!["title","prof","rating"].includes(d[0])).map((d,f)=>h.jsxs("p",{className:"ml-8 font-extralight",children:[h.jsx("span",{className:"font-normal",children:d[0]})," ",d[1]]},f)),"prof"in u.lab&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"ml-4 relative",children:[h.jsx("u",{children:"Lab"}),": ",u.lab.prof," ",h.jsx("span",{className:"font-bold",children:u.lab.rating.score===0?"N/A":u.lab.rating.score})," ",h.jsx(v1,{rating:u.lab.rating})]}),Object.entries(u.lab).filter(d=>!["title","prof","rating"].includes(d[0])).map((d,f)=>h.jsxs("p",{className:"ml-8 font-extralight",children:[h.jsx("span",{className:"font-normal",children:d[0]})," ",d[1]]},f))]}),u.more!==""&&h.jsx(h.Fragment,{children:h.jsx("p",{className:"text-c6",children:u.more})})]},`i.code + ${c}`))})}function sF({classes:t,setLoading:e,viewData:n,userData:r}){const[i,s]=b.useState(""),o=b.useDeferredValue(i),[a,l]=b.useState("search"),u=b.useDeferredValue(a),[c,d]=b.useState(!1);return h.jsxs("section",{className:"md:col-span-5 md:row-span-6 bg-c1 rounded-lg box-border flex flex-col max-md:order-2",children:[h.jsxs("nav",{className:"flex justify-between w-full p-2 box-border",children:[h.jsx(eh,{current:a,setCurrent:l,text:"search"}),h.jsx(eh,{current:a,setCurrent:l,text:"filter"}),h.jsx(eh,{current:a,setCurrent:l,text:"saved"})]}),a==="search"&&u===a?h.jsxs(h.Fragment,{children:[h.jsxs("label",{className:"relative md:mx-4 mx-2 mt-2",children:[h.jsx(yt,{icon:C3,className:"absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer",onMouseOver:()=>d(!0),onMouseOut:()=>d(!1)}),c&&h.jsxs("div",{className:"absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-xs w-[70dvw]",children:[h.jsx("p",{children:"You can search any keyword for the class you are looking for."}),h.jsx("br",{}),h.jsx("p",{children:'Separate your keywords with commas. E.g. "Biology, 101" will search for all biology 101-NYA-05 and biology 101-DCN-05 classes.'}),h.jsx("br",{}),"Examples: ",h.jsx("br",{}),h.jsxs("ul",{className:"pl-4",children:[h.jsxs("li",{className:"list-disc",children:[h.jsxs("span",{className:"font-bold",children:["r",">","4.5"]})," (teachers with +4.5/5 rating. Symbol can be ","<"," , ",">"," or ","="," )"]}),h.jsxs("li",{className:"list-disc",children:[h.jsxs("span",{className:"font-bold",children:["s",">","80"]})," (teachers with +80/100 score. Symbol can be ","<"," , ",">"," or ","="," )"]}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"Linear Al, W, F"})," (Linear Algebra I/II/III that has classes on Wednesday and Friday. DAYS must be in ALL CAPS)"]}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"honours"}),' (honours classes. Special keywords include "honours" and "blended")']}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"p=Steven Randall, blended"})," ",'(blended classes by teacher who has "Steven Randall" in their name. Teachers must have "p=" before)']}),h.jsxs("li",{className:"list-disc",children:[h.jsx("span",{className:"font-bold",children:"ENGLISH, haunted house"})," ",'(all English class that has "haunted house" in their name. COURSE NAME must be in ALL CAPS)']})]})]}),h.jsx("input",{className:"bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md",placeholder:"COURSE, code, professor, rating, class name, ...",value:i,onChange:f=>s(f.target.value)})]}),h.jsx("div",{className:"w-full h-full box-border rounded-lg overflow-y-auto md:px-4 px-2 md:mt-4 mt-2",children:o===i?h.jsx(iF,{input:o,classes:t,setLoading:e}):h.jsx(g1,{})})]}):a==="search"&&h.jsx(g1,{}),a==="filter"&&h.jsx(rF,{setInput:s,setCurrent:l}),a==="saved"&&h.jsx(eF,{viewData:n,userData:r})]})}function eh({current:t,setCurrent:e,text:n}){var o;const r={width:t===n?"100%":"0%"},[i,s]=Zt(()=>({from:r}),[]);return b.useEffect(()=>{s.start({to:r})},[t]),h.jsxs("div",{className:"w-1/3 text-center cursor-pointer box-border border-c9 border-solid relative flex justify-center",onClick:()=>e(n),children:[(o=n.at(0))==null?void 0:o.toUpperCase().concat(n.slice(1)),h.jsx(zt.p,{className:"absolute h-full box-border border-solid border-b-c9 border-b-2",style:i})]})}function v1({rating:t}){const[e,n]=b.useState(!1);return h.jsxs(h.Fragment,{children:[h.jsx(yt,{icon:pC,className:"cursor-pointer",onMouseOver:()=>n(!0),onMouseOut:()=>n(!1)}),e&&h.jsxs("div",{className:"absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex",children:[h.jsx("p",{className:"w-full",children:"The score is calculated to take into account the number of raters. A high rating with low raters will perform worse in comparison to a lower rating with many raters."}),h.jsxs("ul",{className:"pl-4 shrink-0",children:[h.jsxs("li",{className:"list-disc",children:["Rating: ",t.avg===0?"N/A":`${t.avg}/5`]}),h.jsxs("li",{className:"list-disc",children:["Raters: ",t.avg===0?"N/A":t.nRating]}),h.jsxs("li",{className:"list-disc",children:["Take Again:"," ",t.avg===0?"N/A":`${t.takeAgain.toFixed(1)}%`]}),h.jsxs("li",{className:"list-disc",children:["Difficulty: ",t.avg===0?"N/A":`${t.difficulty}/5`]})]})]})]})}const zd=b.createContext({user:null,setUser:()=>{}}),Tl=b.createContext({chosenClasses:[],setChosenClasses:()=>{}});function y1({login:t}){const e=ad(),[n,r]=b.useState([]),[i,s]=b.useState(!1),[o,a]=b.useState([]),[l,u]=b.useState(null),c=b.useMemo(()=>f(o),[o]),{user:d}=b.useContext(zd);b.useEffect(()=>{y(c)&&(a(o.slice(0,-1)),alert("The chosen class overlaps with another!"))},[c]),b.useEffect(()=>{t&&(d?AS(d.uid,E=>{u({uid:d.uid,schedules:E.val()})},"schedules"):e("/"));async function _(E,v){try{const m=await fetch(E);if(!m.ok)throw new Error("Network response was not ok");const w=await m.json();v(w)}catch(m){console.log(m)}}_("/me-schedule-maker/data/all.json",r).catch(E=>console.log(E))},[d,t]);function f(_){const E=["M","T","W","R","F"],v=[...Array(21).keys()].map(g=>(g%2===0?g*50+800:Math.floor(g/2)*2*50+830).toFixed(0)),m=["hsl(150,97%,85%)","hsl(230,97%,85%)","hsl(110,97%,85%)","hsl(270,97%,85%)","hsl(70,97%,85%)","hsl(310,97%,85%)","hsl(30,97%,85%)","hsl(350,97%,85%)","hsl(190,97%,85%)"];return _.map((g,I)=>{const C=structuredClone(Object.entries(g.lecture)),x=structuredClone(Object.entries(g.lab?g.lab:{}));return C.filter(D=>!["title","prof","rating"].includes(D[0])).concat(x.filter(D=>!["title","prof","rating"].includes(D[0]))).flatMap(D=>{const F=D[0].split("").filter(B=>B==="S"?(alert("There is class on Saturday as well"),!1):!0),ce=D[1],re=ce.split("-")[0],Ue=ce.split("-")[1];return F.flatMap(B=>{const Q=v.findIndex(N=>Number(N)===Number(re))+1,fe=v.findIndex(N=>Number(N)===Number(Ue))+1,ve=E.findIndex(N=>N===B)+1;return{code:g.code,section:g.section,time:{[`${ve}`]:[Q,fe]},color:m[I],teacher:g.lecture.prof,title:g.lecture.title}})})})}function y(_){const E=_.flat().map(C=>C.time),v=E.filter(C=>C[1]).flatMap(C=>Object.values(C)),m=E.filter(C=>C[2]).flatMap(C=>Object.values(C)),w=E.filter(C=>C[3]).flatMap(C=>Object.values(C)),g=E.filter(C=>C[4]).flatMap(C=>Object.values(C)),I=E.filter(C=>C[5]).flatMap(C=>Object.values(C));return!![v,m,w,g,I].some(C=>{if(C.length<=1)return!1;const x=C.at(-1);return!!C.slice(0,-1).some(A=>Number(A[0])>Number(x[0])?Number(x[1])>Number(A[0]):Number(A[0])<Number(x[0])?Number(x[0])<Number(A[1]):Number(A[0])===Number(x[0]))})}async function p(){await Qg()}return h.jsxs(Tl.Provider,{value:{chosenClasses:o,setChosenClasses:a},children:[h.jsxs("nav",{className:"md:text-base text-xs w-full bg-c9 text-c1 shrink-0 flex justify-between items-center",children:[h.jsx(yt,{icon:x3,className:"ml-2 cursor-pointer transition hover:text-c4",onClick:()=>e("/")}),h.jsxs("p",{children:["Fall 2023 JAC"," ",h.jsx("span",{className:" max-md:hidden",children:"Mock Schedule Maker"})]}),h.jsx("p",{onClick:()=>void p(),className:"mr-2 cursor-pointer transition hover:text-c4",children:l?"Sign Out":""})]}),h.jsxs("section",{className:"w-full basis-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 px-2 pb-2 text-c9 flex flex-col md:text-base text-xs overflow-auto",children:[h.jsx(sF,{classes:n,setLoading:s,viewData:c,userData:l}),i&&n.length!==0&&h.jsx(h.Fragment,{children:h.jsx(YC,{viewData:c})})]})]})}function YC({viewData:t,login:e}){const[n,r]=b.useState([]);return b.useEffect(()=>{r(()=>t.map((i,s)=>h.jsx(b.Fragment,{children:h.jsx(oF,{blocksToShow:i,login:e})},s)))},[t]),h.jsxs("section",{className:"rounded-lg md:col-span-7 md:row-span-6 max-md:min-h-[60%] col-span-full bg-c1 md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-1",children:[h.jsx("div",{className:"col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]",children:[...Array(21).keys()].map(i=>h.jsxs("span",{className:"translate-y-1/2 box-border md:pr-4 md:text-xs text-[0.5rem] flex items-center justify-end pr-2",children:[Math.floor(i/2)+8,":",i%2===0?"00":"30"]},i))}),h.jsxs("div",{className:"col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative",children:[h.jsx("div",{className:"absolute w-full h-full grid grid-rows-[repeat(20,minmax(0,1fr))] row-start-2",children:[...Array(19).keys()].map(i=>h.jsx("div",{children:h.jsx(_1,{n:i,lineProperty:"width"})},`horizontal-${i}`))}),h.jsxs("div",{className:"absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]",children:[h.jsx("div",{className:"row-span-1 col-span-full"}),[...Array(4).keys()].map(i=>h.jsx("div",{className:"row-[span_20/span_20]",children:h.jsx(_1,{n:i,lineProperty:"height"})},`vertical-${i}`))]}),["Monday","Tuesday","Wednesday","Thursday","Friday"].map(i=>{const s=window.innerWidth>=1100?i:i.slice(0,3);return h.jsx("span",{className:"text-center font-semibold md:text-base text-xs",children:s},i)}),h.jsx("div",{className:"grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg md:shadow-lg shadow-md",children:n})]})]})}function _1({n:t,lineProperty:e}){const n=Zt({from:{[e]:"0%"},to:{[e]:"100%"},delay:e==="height"?t*100:t*30}),r=e==="height"?"border-r-2 w-full left-[1px]":"border-b-2 h-full top-[1px]";return h.jsx(zt.div,{className:`${e==="height"?"w-full py-2":"h-full px-2"} box-border`,style:n,children:h.jsx("div",{className:`${r} border-[hsl(0,0%,77%)] h-full w-full relative`})})}function oF({blocksToShow:t,login:e}){const n=j5(t,{from:{y:-20,scale:0},enter:{y:0,scale:1},leave:{y:-20,scale:0},trail:50}),{chosenClasses:r,setChosenClasses:i}=b.useContext(Tl);return n((s,o)=>{const a=Object.entries(o.time).flat();return h.jsxs(zt.div,{className:`md:text-[14px] md:leading-[14px] text-[8px] leading-[10px] z-10 p-1 border border-[black] outline outline-1 outline-[black] text-[black] ${e?"":"cursor-pointer"} rounded-lg overflow-hidden`,style:{gridColumnStart:a[0],gridRowStart:a[1][0],gridRowEnd:a[1][1],backgroundColor:o.color,...s},onClick:()=>{e||i(r.filter(l=>l.code!==o.code))},children:[h.jsx("p",{className:"line-clamp-2 font-semibold",children:o.title}),h.jsx("p",{className:"line-clamp-1 font-light mt-1",children:o.code}),h.jsx("p",{className:"font-light",children:o.section}),h.jsx("p",{className:"line-clamp-2 mt-1",children:o.teacher})]},o.code+o.section+a[0])})}function aF(){return h.jsx("div",{className:"absolute w-full h-full top-0 left-0 -z-10"})}function lF({setIndex:t,viewData:e,uid:n,currentIndex:r}){return h.jsxs("section",{className:"flex flex-col justify-between relative row-span-full col-start-8 col-span-2 rounded-lg overflow-hidden",children:[h.jsx("div",{className:"relative max-h-full rounded-lg box-border bg-c1 p-2 flex flex-col overflow-auto",children:e?e.map((i,s)=>h.jsx(uF,{data:i,index:s,setIndex:t,uid:n,currentIndex:r},s)):"Open the editor to make a new schedule"}),h.jsx(Mn,{to:"schedule",className:"w-full flex justify-center",children:h.jsx("button",{className:"text-c1 hover:font-bold transition",children:"Open Editor"})})]})}function uF({data:t,setIndex:e,index:n,uid:r,currentIndex:i}){const[s,o]=b.useState(!1),[a,l]=b.useState(""),[u,c]=b.useState(t.name??`Untitled ${n+1}`);function d(p){p.stopPropagation(),s?c(a):l(u),o(_=>!_)}async function f(p){p.preventDefault(),o(!1),r&&await E4(r,u,n)}const y=Zt({backgroundColor:i===n?"#03045e":"#caf0f8",color:i!==n?"#03045e":"#caf0f8"});return h.jsxs(zt.div,{onClick:()=>!s&&e(n),className:"relative cursor-pointer w-full px-2 py-4 rounded hover:font-bold flex items-center",style:y,children:[h.jsx(yt,{icon:fC,className:"pr-2 hover:text-c5 transition cursor-pointer",onClick:d}),s?h.jsxs("form",{onSubmit:p=>void f(p),className:"w-full",children:[h.jsx("input",{className:"outline-none rounded p-2 w-full text-c9",value:u,onChange:p=>c(p.target.value)}),h.jsx("input",{type:"submit",className:"hidden"})]}):u,n===0?null:h.jsx("div",{className:"absolute mx-1 w-[calc(100%-0.5rem)] h-[2px] bg-c5 -top-[1px] left-0"})]},t.id)}function cF(){return h.jsxs("div",{className:"basis-full box-border flex flex-col items-center justify-center gap-2",children:[h.jsx("h1",{className:"text-7xl font-bold text-c9",children:"Welcome!"}),h.jsx("p",{className:"font-bold text-xl",children:"Ready to make your dream schedule?"}),h.jsxs("div",{className:"flex gap-2 mt-4",children:[h.jsx("button",{onClick:()=>{var t;return(t=document.getElementById("schedules"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"text-c5 hover:underline",children:"Check current schedules"}),h.jsx(Mn,{to:"schedule",children:h.jsxs("button",{className:"text-c1 mr-4 hover:bg-c1 hover:text-c9 transition bg-c9 p-2 rounded",children:["New ",h.jsx(yt,{icon:E3})]})})]})]})}function dF({user:t,setNavDisplayName:e}){const[n,r]=b.useState(!1),[i,s]=b.useState((t==null?void 0:t.displayName)??(t==null?void 0:t.email)??"User"),[o,a]=b.useState("");b.useEffect(()=>{t&&s(t.displayName??t.email??"User")},[t]);function l(c){c.preventDefault(),r(!1),e(i),t&&HP(t,{displayName:i}).catch(d=>console.log(d))}function u(c){c.stopPropagation(),n?s(o):a(i),r(d=>!d)}return h.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-c8 hover:text-c2",children:[h.jsx("h2",{className:"font-semibold text-xl",children:"Display Name"}),h.jsx("p",{children:"This name will be displayed instead of your email at the top"}),h.jsxs("div",{className:"mt-4 flex items-center",children:[h.jsx(yt,{icon:fC,className:"pr-2 hover:text-c5 transition cursor-pointer",onClick:u}),n?h.jsxs("form",{className:"w-full",onSubmit:c=>void l(c),children:[h.jsx("input",{className:"outline-none rounded p-2 w-full text-c9",value:i,onChange:c=>s(c.target.value)}),h.jsx("input",{type:"submit",className:"hidden"})]}):i]})]})}var w1="__sak";function E1(t){return t!==void 0&&t.enterprise!==void 0}var fF=function(){function t(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(function(n){return n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF"})}return t}();function QC(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var hF=QC,rm=new ci("auth","Firebase",QC());/**
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
 */var Ds=new dd("@firebase/auth");function pF(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Ds.logLevel<=pe.WARN&&Ds.warn.apply(Ds,Xt(["Auth (".concat(pr,"): ").concat(t)],e,!1))}function Du(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Ds.logLevel<=pe.ERROR&&Ds.error.apply(Ds,Xt(["Auth (".concat(pr,"): ").concat(t)],e,!1))}/**
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
 */function cr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw Cv.apply(void 0,Xt([t],e,!1))}function $d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Cv.apply(void 0,Xt([t],e,!1))}function mF(t,e,n){var r,i=Ne(Ne({},hF()),(r={},r[e]=n,r)),s=new ci("auth","Firebase",i);return s.create(e,{appName:t.name})}function Cv(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],s=Xt([],n.slice(1),!0);return s[0]&&(s[0].appName=t.name),(e=t._errorFactory).create.apply(e,Xt([i],s,!1))}return rm.create.apply(rm,Xt([t],n,!1))}function ne(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw Cv.apply(void 0,Xt([e],n,!1))}function Kn(t){var e="INTERNAL ASSERTION FAILED: "+t;throw Du(e),new Error(e)}function Xs(t,e){t||Kn(e)}function gF(){return b1()==="http:"||b1()==="https:"}function b1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gF()||bb()||"connection"in navigator)?navigator.onLine:!0}function yF(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */var _F=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,Xs(n>e,"Short delay should be less than long delay!"),this.isMobile=ud()||ig()}return t.prototype.get=function(){return vF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
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
 */function wF(t,e){Xs(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
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
 */var JC=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
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
 */var K,EF=(K={},K.CREDENTIAL_MISMATCH="custom-token-mismatch",K.MISSING_CUSTOM_TOKEN="internal-error",K.INVALID_IDENTIFIER="invalid-email",K.MISSING_CONTINUE_URI="internal-error",K.INVALID_PASSWORD="wrong-password",K.MISSING_PASSWORD="missing-password",K.EMAIL_EXISTS="email-already-in-use",K.PASSWORD_LOGIN_DISABLED="operation-not-allowed",K.INVALID_IDP_RESPONSE="invalid-credential",K.INVALID_PENDING_TOKEN="invalid-credential",K.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",K.MISSING_REQ_TYPE="internal-error",K.EMAIL_NOT_FOUND="user-not-found",K.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",K.EXPIRED_OOB_CODE="expired-action-code",K.INVALID_OOB_CODE="invalid-action-code",K.MISSING_OOB_CODE="internal-error",K.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",K.INVALID_ID_TOKEN="invalid-user-token",K.TOKEN_EXPIRED="user-token-expired",K.USER_NOT_FOUND="user-token-expired",K.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",K.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",K.INVALID_CODE="invalid-verification-code",K.INVALID_SESSION_INFO="invalid-verification-id",K.INVALID_TEMPORARY_PROOF="invalid-credential",K.MISSING_SESSION_INFO="missing-verification-id",K.SESSION_EXPIRED="code-expired",K.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",K.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",K.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",K.ADMIN_ONLY_OPERATION="admin-restricted-operation",K.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",K.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",K.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",K.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",K.SECOND_FACTOR_EXISTS="second-factor-already-in-use",K.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",K.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",K.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",K.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",K.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",K.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",K.MISSING_CLIENT_TYPE="missing-client-type",K.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",K.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",K.INVALID_REQ_TYPE="invalid-req-type",K);/**
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
 */var bF=new _F(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Ne(Ne({},e),{tenantId:t.tenantId}):e}function po(t,e,n,r,i){return i===void 0&&(i={}),O(this,void 0,void 0,function(){var s=this;return M(this,function(o){return[2,XC(t,i,function(){return O(s,void 0,void 0,function(){var a,l,u,c;return M(this,function(d){switch(d.label){case 0:return a={},l={},r&&(e==="GET"?l=r:a={body:JSON.stringify(r)}),u=hr(Ne({key:t.config.apiKey},l)).slice(1),[4,t._getAdditionalHeaders()];case 1:return c=d.sent(),c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),[2,JC.fetch()(ZC(t,t.config.apiHost,n,u),Ne({method:e,headers:c,referrerPolicy:"no-referrer"},a))]}})})})]})})}function XC(t,e,n){return O(this,void 0,void 0,function(){var r,i,s,o,a,l,u,c,d,f;return M(this,function(y){switch(y.label){case 0:t._canInitEmulator=!1,r=Ne(Ne({},EF),e),y.label=1;case 1:return y.trys.push([1,4,,5]),i=new IF(t),[4,Promise.race([n(),i.promise])];case 2:return s=y.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=y.sent(),"needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(a=s.ok?o.errorMessage:o.error.message,l=a.split(" : "),u=l[0],c=l[1],u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Bo(t,"user-disabled",o);if(d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-"),c)throw mF(t,d,c);return cr(t,d),[3,5];case 4:if(f=y.sent(),f instanceof En)throw f;return cr(t,"network-request-failed",{message:String(f)}),[3,5];case 5:return[2]}})})}function Qi(t,e,n,r,i){return i===void 0&&(i={}),O(this,void 0,void 0,function(){var s;return M(this,function(o){switch(o.label){case 0:return[4,po(t,e,n,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&cr(t,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function ZC(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?wF(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}var IF=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i($d(n.auth,"network-request-failed"))},bF.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function Bo(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=$d(t,e,r);return i.customData._tokenResponse=n,i}function SF(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,po(t,"GET","/v2/recaptchaConfig",yr(t,e))]})})}/**
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
 */function CF(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,po(t,"POST","/v1/accounts:delete",e)]})})}function kF(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,po(t,"POST","/v1/accounts:lookup",e)]})})}/**
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
 */function fa(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function xF(t,e){return e===void 0&&(e=!1),O(this,void 0,void 0,function(){var n,r,i,s,o;return M(this,function(a){switch(a.label){case 0:return n=We(t),[4,n.getIdToken(e)];case 1:return r=a.sent(),i=kv(r),ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:fa(th(i.auth_time)),issuedAtTime:fa(th(i.iat)),expirationTime:fa(th(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function th(t){return Number(t)*1e3}function kv(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{var s=Aa(r);return s?JSON.parse(s):(Du("Failed to decode base64 JWT payload"),null)}catch(o){return Du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function TF(t){var e=kv(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function nl(t,e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){var r;return M(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof En&&NF(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function NF(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
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
 */var RF=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return O(n,void 0,void 0,function(){return M(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return O(this,void 0,void 0,function(){var e;return M(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
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
 */var ek=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
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
 */function zc(t){var e;return O(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,c,d;return M(this,function(f){switch(f.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=f.sent(),[4,nl(t,kF(n,{idToken:r}))];case 2:return i=f.sent(),ne(i==null?void 0:i.users.length,n,"internal-error"),s=i.users[0],t._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OF(s.providerUserInfo):[],a=AF(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ek(s.createdAt,s.lastLoginAt),isAnonymous:c},Object.assign(t,d),[2]}})})}function PF(t){return O(this,void 0,void 0,function(){var e;return M(this,function(n){switch(n.label){case 0:return e=We(t),[4,zc(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function AF(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return Xt(Xt([],n,!0),e,!0)}function OF(t){return t.map(function(e){var n=e.providerId,r=ao(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */function MF(t,e){return O(this,void 0,void 0,function(){var n,r=this;return M(this,function(i){switch(i.label){case 0:return[4,XC(t,{},function(){return O(r,void 0,void 0,function(){var s,o,a,l,u,c;return M(this,function(d){switch(d.label){case 0:return s=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),o=t.config,a=o.tokenApiHost,l=o.apiKey,u=ZC(t,a,"/v1/token","key=".concat(l)),[4,t._getAdditionalHeaders()];case 1:return c=d.sent(),c["Content-Type"]="application/x-www-form-urlencoded",[2,JC.fetch()(u,{method:"POST",headers:c,body:s})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}/**
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
 */var I1=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TF(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){return M(this,function(r){switch(r.label){case 0:return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return O(this,void 0,void 0,function(){var r,i,s,o;return M(this,function(a){switch(a.label){case 0:return[4,MF(e,n)];case 1:return r=a.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,s=n.expirationTime,o=new t;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return Kn("not implemented")},t}();/**
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
 */function kr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var im=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,s=ao(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?Xt([],s.providerData,!0):[],this.metadata=new ek(s.createdAt||void 0,s.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return[4,nl(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),ne(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return xF(this,e)},t.prototype.reload=function(){return PF(this)},t.prototype._assign=function(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return Ne({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(Ne(Ne({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){var r;return M(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,zc(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return O(this,void 0,void 0,function(){var e;return M(this,function(n){switch(n.label){case 0:return[4,this.getIdToken()];case 1:return e=n.sent(),[4,nl(this,CF(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return Ne(Ne({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return Ne({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,s,o,a,l,u,c,d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,w=n.uid,g=n.emailVerified,I=n.isAnonymous,C=n.providerData,x=n.stsTokenManager;ne(w&&x,e,"internal-error");var A=I1.fromJSON(this.name,x);ne(typeof w=="string",e,"internal-error"),kr(d,e.name),kr(f,e.name),ne(typeof g=="boolean",e,"internal-error"),ne(typeof I=="boolean",e,"internal-error"),kr(y,e.name),kr(p,e.name),kr(_,e.name),kr(E,e.name),kr(v,e.name),kr(m,e.name);var D=new t({uid:w,auth:e,email:f,emailVerified:g,displayName:d,isAnonymous:I,photoURL:p,phoneNumber:y,tenantId:_,stsTokenManager:A,createdAt:v,lastLoginAt:m});return C&&Array.isArray(C)&&(D.providerData=C.map(function(F){return Ne({},F)})),E&&(D._redirectEventId=E),D},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),O(this,void 0,void 0,function(){var i,s;return M(this,function(o){switch(o.label){case 0:return i=new I1,i.updateFromServerResponse(n),s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,zc(s)];case 1:return o.sent(),[2,s]}})})},t}();/**
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
 */var S1=new Map;function zr(t){Xs(t instanceof Function,"Expected a class definition");var e=S1.get(t);return e?(Xs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,S1.set(t,e),e)}/**
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
 */var LF=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return O(this,void 0,void 0,function(){return M(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return O(this,void 0,void 0,function(){return M(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return O(this,void 0,void 0,function(){return M(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),C1=LF;/**
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
 */function Fu(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var k1=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=Fu(this.userKey,s.apiKey,o),this.fullPersistenceKey=Fu("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return O(this,void 0,void 0,function(){var e;return M(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?im._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),O(this,void 0,void 0,function(){var i,s,o,a,l,u,c,d,f,y,p=this;return M(this,function(_){switch(_.label){case 0:return n.length?[4,Promise.all(n.map(function(E){return O(p,void 0,void 0,function(){return M(this,function(v){switch(v.label){case 0:return[4,E._isAvailable()];case 1:return v.sent()?[2,E]:[2,void 0]}})})}))]:[2,new t(zr(C1),e,r)];case 1:i=_.sent().filter(function(E){return E}),s=i[0]||zr(C1),o=Fu(r,e.config.apiKey,e.name),a=null,l=0,u=n,_.label=2;case 2:if(!(l<u.length))return[3,7];c=u[l],_.label=3;case 3:return _.trys.push([3,5,,6]),[4,c._get(o)];case 4:return d=_.sent(),d?(f=im._fromJSON(e,d),c!==s&&(a=f),s=c,[3,7]):[3,6];case 5:return _.sent(),[3,6];case 6:return l++,[3,2];case 7:return y=i.filter(function(E){return E._shouldAllowMigration}),!s._shouldAllowMigration||!y.length?[2,new t(s,e,r)]:(s=y[0],a?[4,s._set(o,a.toJSON())]:[3,9]);case 8:_.sent(),_.label=9;case 9:return[4,Promise.all(n.map(function(E){return O(p,void 0,void 0,function(){return M(this,function(v){switch(v.label){case 0:if(E===s)return[3,4];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,E._remove(o)];case 2:return v.sent(),[3,4];case 3:return v.sent(),[3,4];case 4:return[2]}})})}))];case 10:return _.sent(),[2,new t(s,e,r)]}})})},t}();/**
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
 */function x1(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DF(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ik(e))return"Blackberry";if(sk(e))return"Webos";if(tk(e))return"Safari";if((e.includes("chrome/")||FF(e))&&!e.includes("edge/"))return"Chrome";if(rk(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function DF(t){return t===void 0&&(t=Ee()),/firefox\//i.test(t)}function tk(t){t===void 0&&(t=Ee());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FF(t){return t===void 0&&(t=Ee()),/crios\//i.test(t)}function nk(t){return t===void 0&&(t=Ee()),/iemobile/i.test(t)}function rk(t){return t===void 0&&(t=Ee()),/android/i.test(t)}function ik(t){return t===void 0&&(t=Ee()),/blackberry/i.test(t)}function sk(t){return t===void 0&&(t=Ee()),/webos/i.test(t)}function ok(t){return t===void 0&&(t=Ee()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jF(){return Ib()&&document.documentMode===10}function UF(t){return t===void 0&&(t=Ee()),ok(t)||rk(t)||sk(t)||ik(t)||/windows phone/i.test(t)||nk(t)}function zF(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ak(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=x1(Ee());break;case"Worker":n="".concat(x1(Ee()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(pr,"/").concat(r)}/**
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
 */var $F=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(o){return new Promise(function(a,l){try{var u=e(o);a(u)}catch(c){l(c)}})};i.onAbort=n,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return O(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u;return M(this,function(c){switch(c.label){case 0:if(this.auth.currentUser===e)return[2];n=[],c.label=1;case 1:c.trys.push([1,6,,7]),r=0,i=this.queue,c.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:c.sent(),s.onAbort&&n.push(s.onAbort),c.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=c.sent(),n.reverse(),a=0,l=n;a<l.length;a++){u=l[a];try{u()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},t}();/**
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
 */function VF(t,e){return e===void 0&&(e={}),O(this,void 0,void 0,function(){return M(this,function(n){return[2,po(t,"GET","/v2/passwordPolicy",yr(t,e))]})})}/**
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
 */var WF=6,BF=function(){function t(e){var n,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WF,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return t.prototype.validatePassword=function(e){var n,r,i,s,o,a,l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l},t.prototype.validatePasswordLengthOptions=function(e,n){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)},t.prototype.validatePasswordCharacterOptions=function(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.prototype.updatePasswordCharacterOptionsStatuses=function(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},t}();/**
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
 */var HF=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new T1(this),this.idTokenSubscription=new T1(this),this.beforeStateQueue=new $F(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=zr(n)),this._initializationPromise=this.queue(function(){return O(r,void 0,void 0,function(){var i,s,o;return M(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,k1.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return a.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return O(this,void 0,void 0,function(){var e;return M(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return O(this,void 0,void 0,function(){var r,i,s,o,a,l,u;return M(this,function(c){switch(c.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=c.sent(),i=r,s=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return c.sent(),o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:l=c.sent(),(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0),c.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!s)return[3,8];c.label=5;case 5:return c.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return c.sent(),[3,8];case 7:return u=c.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(u)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return ne(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return c.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},t.prototype.tryRedirectSignIn=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,zc(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=yF()},t.prototype._delete=function(){return O(this,void 0,void 0,function(){return M(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){return n=e?We(e):null,n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))]})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){var r=this;return M(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return O(r,void 0,void 0,function(){return M(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return O(this,void 0,void 0,function(){return M(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return this.queue(function(){return O(n,void 0,void 0,function(){return M(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(zr(e))];case 1:return r.sent(),[2]}})})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype.validatePassword=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return n=this._getPasswordPolicyInternal(),n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,n.validatePassword(e)]}})})},t.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},t.prototype._updatePasswordPolicy=function(){return O(this,void 0,void 0,function(){var e,n;return M(this,function(r){switch(r.label){case 0:return[4,VF(this)];case 1:return e=r.sent(),n=new BF(e),this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n,[2]}})})},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new ci("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.authStateReady=function(){var e=this;return new Promise(function(n,r){if(e.currentUser)n();else var i=e.onAuthStateChanged(function(){i(),n()},r)})},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return O(this,void 0,void 0,function(){var r;return M(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return O(this,void 0,void 0,function(){var n,r,i;return M(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&zr(e)||this._popupRedirectResolver,ne(n,this,"argument-error"),r=this,[4,k1.create(this,[zr(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return O(this,void 0,void 0,function(){var i=this;return M(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return O(i,void 0,void 0,function(){return M(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return O(this,void 0,void 0,function(){var n=this;return M(this,function(r){return e===this.currentUser?[2,this.queue(function(){return O(n,void 0,void 0,function(){return M(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var s=this;if(this._deleted)return function(){};var o=typeof n=="function"?n:n.next.bind(n),a=!1,l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(function(){a||o(s.currentUser)}),typeof n=="function"){var u=e.addObserver(n,r,i);return function(){a=!0,u()}}else{var c=e.addObserver(n);return function(){a=!0,c()}}},t.prototype.directlySetCurrentUser=function(e){return O(this,void 0,void 0,function(){return M(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ak(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return O(this,void 0,void 0,function(){var n,r,i,s;return M(this,function(o){switch(o.label){case 0:return n=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&pF("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function lk(t){return We(t)}var T1=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=kb(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();/**
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
 */function qF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GF(t){return new Promise(function(e,n){var r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=function(i){var s=$d("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qF().appendChild(r)})}var KF="https://www.google.com/recaptcha/enterprise.js?render=",YF="recaptcha-enterprise",QF="NO_RECAPTCHA",JF=function(){function t(e){this.type=YF,this.auth=lk(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),O(this,void 0,void 0,function(){function r(o){return O(this,void 0,void 0,function(){var a=this;return M(this,function(l){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(u,c){return O(a,void 0,void 0,function(){return M(this,function(d){return SF(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(f){if(f.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{var y=new fF(f);return o.tenantId==null?o._agentRecaptchaConfig=y:o._tenantRecaptchaConfigs[o.tenantId]=y,u(y.siteKey)}}).catch(function(f){c(f)}),[2]})})})]})})}function i(o,a,l){var u=window.grecaptcha;E1(u)?u.enterprise.ready(function(){u.enterprise.execute(o,{action:e}).then(function(c){a(c)}).catch(function(){a(QF)})}):l(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return M(this,function(o){return[2,new Promise(function(a,l){r(s.auth).then(function(u){if(!n&&E1(window.grecaptcha))i(u,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}GF(KF+u).then(function(){i(u,a,l)}).catch(function(c){l(c)})}}).catch(function(u){l(u)})})]})})},t}();function N1(t,e,n,r){return r===void 0&&(r=!1),O(this,void 0,void 0,function(){var i,s,o;return M(this,function(a){switch(a.label){case 0:i=new JF(t),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return s=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(n,!0)];case 4:return s=a.sent(),[3,5];case 5:return o=Ne({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function XF(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */var Nl=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return Kn("not implemented")},t.prototype._getIdTokenResponse=function(e){return Kn("not implemented")},t.prototype._linkToIdToken=function(e,n){return Kn("not implemented")},t.prototype._getReauthenticationResolver=function(e){return Kn("not implemented")},t}();function ZF(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,po(t,"POST","/v1/accounts:update",e)]})})}/**
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
 */function nh(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,Qi(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))]})})}/**
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
 */function ej(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,Qi(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))]})})}function tj(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,Qi(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))]})})}/**
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
 */var R1=function(t){Le(e,t);function e(n,r,i,s){s===void 0&&(s=null);var o=t.call(this,"password",i)||this;return o._email=n,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){var r;return O(this,void 0,void 0,function(){var i,s,o,a=this;return M(this,function(l){switch(l.label){case 0:switch(i=this.signInMethod,i){case"password":return[3,1];case"emailLink":return[3,4]}return[3,5];case 1:return s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled?[4,N1(n,s,"signInWithPassword")]:[3,3];case 2:return o=l.sent(),[2,nh(n,o)];case 3:return[2,nh(n,s).catch(function(u){return O(a,void 0,void 0,function(){var c;return M(this,function(d){switch(d.label){case 0:return u.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),[4,N1(n,s,"signInWithPassword")]);case 1:return c=d.sent(),[2,nh(n,c)];case 2:return[2,Promise.reject(u)]}})})})];case 4:return[2,ej(n,{email:this._email,oobCode:this._password})];case 5:cr(n,"internal-error"),l.label=6;case 6:return[2]}})})},e.prototype._linkToIdToken=function(n,r){return O(this,void 0,void 0,function(){return M(this,function(i){switch(this.signInMethod){case"password":return[2,ZF(n,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password})];case"emailLink":return[2,tj(n,{idToken:r,email:this._email,oobCode:this._password})];default:cr(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e}(Nl);/**
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
 */function Xn(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,Qi(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))]})})}/**
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
 */var nj="http://localhost",Zs=function(t){Le(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):cr("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=ao(r,["providerId","signInMethod"]);if(!i||!s)return null;var a=new e(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return Xn(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,Xn(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,Xn(n,r)},e.prototype.buildRequest=function(){var n={requestUri:nj,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=hr(r)}return n},e}(Nl);/**
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
 */var rh;function rj(t,e){return O(this,void 0,void 0,function(){return M(this,function(n){return[2,Qi(t,"POST","/v1/accounts:signInWithPhoneNumber",yr(t,e))]})})}function ij(t,e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return[4,Qi(t,"POST","/v1/accounts:signInWithPhoneNumber",yr(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw Bo(t,"account-exists-with-different-credential",n);return[2,n]}})})}var sj=(rh={},rh.USER_NOT_FOUND="user-not-found",rh);function oj(t,e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){return n=Ne(Ne({},e),{operation:"REAUTH"}),[2,Qi(t,"POST","/v1/accounts:signInWithPhoneNumber",yr(t,n),sj)]})})}/**
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
 */(function(t){Le(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return rj(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return ij(n,Ne({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return oj(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,s=n.verificationId,o=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,a=r.temporaryProof;return!s&&!i&&!o&&!a?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:a})},e})(Nl);/**
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
 */function aj(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lj(t){var e=kn(xn(t)).link,n=e?kn(xn(e)).deep_link_id:null,r=kn(xn(t)).deep_link_id,i=r?kn(xn(r)).link:null;return i||r||n||e||t}var uj=function(){function t(e){var n,r,i,s,o,a,l=kn(xn(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=aj((i=l.mode)!==null&&i!==void 0?i:null);ne(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}return t.parseLink=function(e){var n=lj(e);try{return new t(n)}catch{return null}},t}();/**
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
 */var cj=function(){function t(){this.providerId=t.PROVIDER_ID}return t.credential=function(e,n){return R1._fromEmailAndPassword(e,n)},t.credentialWithLink=function(e,n){var r=uj.parseLink(n);return ne(r,"argument-error"),R1._fromEmailAndCode(e,r.code,r.tenantId)},t.PROVIDER_ID="password",t.EMAIL_PASSWORD_SIGN_IN_METHOD="password",t.EMAIL_LINK_SIGN_IN_METHOD="emailLink",t}();/**
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
 */var uk=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
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
 */var Rl=function(t){Le(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return Xt([],this.scopes,!0)},e}(uk);(function(t){Le(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return ne("providerId"in r&&"signInMethod"in r,"argument-error"),Zs._fromParams(r)},e.prototype.credential=function(n){return this._credential(Ne(Ne({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return ne(n.idToken||n.accessToken,"argument-error"),Zs._fromParams(Ne(Ne({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,a=i.oauthTokenSecret,l=i.pendingToken,u=i.nonce,c=i.providerId;if(!o&&!a&&!s&&!l||!c)return null;try{return new e(c)._credential({idToken:s,accessToken:o,nonce:u,pendingToken:l})}catch{return null}},e})(Rl);/**
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
 */(function(t){Le(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return Zs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(Rl);/**
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
 */(function(t){Le(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return Zs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(Rl);/**
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
 */(function(t){Le(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return Zs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(Rl);/**
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
 */var dj="http://localhost",P1=function(t){Le(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return Xn(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,Xn(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,Xn(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:dj,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(Nl);/**
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
 */var fj="saml.";(function(t){Le(e,t);function e(n){return ne(n.startsWith(fj),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=P1.fromJSON(n);return ne(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return P1._create(o,s)}catch{return null}},e})(uk);/**
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
 */(function(t){Le(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return Zs._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(Rl);/**
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
 */var xv=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),O(this,void 0,void 0,function(){var s,o,a;return M(this,function(l){switch(l.label){case 0:return[4,im._fromIdTokenResponse(e,r,i)];case 1:return s=l.sent(),o=A1(r),a=new t({user:s,providerId:o,_tokenResponse:r,operationType:n}),[2,a]}})})},t._forOperation=function(e,n,r){return O(this,void 0,void 0,function(){var i;return M(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=A1(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function A1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */var hj=function(t){Le(e,t);function e(n,r,i,s){var o=this,a;return o=t.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:n.name,tenantId:(a=n.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(n,r,i,s){return new e(n,r,i,s)},e}(En);function ck(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?hj._fromErrorAndOperation(t,s,e,r):s})}function pj(t,e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){var r,i,s,o,a,l;return M(this,function(u){switch(u.label){case 0:return i=nl,s=[t],a=(o=e)._linkToIdToken,l=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([a.apply(o,l.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,xv._forOperation(t,"link",r)]}})})}/**
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
 */function mj(t,e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){var r,i,s,o,a,l;return M(this,function(u){switch(u.label){case 0:r=t.auth,i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,nl(t,ck(r,i,e,t),n)];case 2:return s=u.sent(),ne(s.idToken,r,"internal-error"),o=kv(s.idToken),ne(o,r,"internal-error"),a=o.sub,ne(t.uid===a,r,"user-mismatch"),[2,xv._forOperation(t,i,s)];case 3:throw l=u.sent(),(l==null?void 0:l.code)==="auth/".concat("user-not-found")&&cr(r,"user-mismatch"),l;case 4:return[2]}})})}/**
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
 */function gj(t,e,n){return n===void 0&&(n=!1),O(this,void 0,void 0,function(){var r,i,s;return M(this,function(o){switch(o.label){case 0:return r="signIn",[4,ck(t,r,e)];case 1:return i=o.sent(),[4,xv._fromIdTokenResponse(t,r,i)];case 2:return s=o.sent(),n?[3,4]:[4,t._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}/**
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
 */var dk=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?vj._fromServerResponse(e,n):"totpInfo"in n?yj._fromServerResponse(e,n):cr(e,"internal-error")},t}(),vj=function(t){Le(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(dk),yj=function(t){Le(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(dk),Tv=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),fk=function(t){Le(e,t);function e(n,r,i,s){var o=t.call(this,n,r,i)||this;return o.username=s,o}return e}(Tv);(function(t){Le(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(Tv);(function(t){Le(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(fk);(function(t){Le(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(Tv);(function(t){Le(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(fk);var O1="@firebase/auth",M1="1.2.0";/**
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
 */var _j=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return O(this,void 0,void 0,function(){var n;return M(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
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
 */function wj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ej(t){ti(new rr("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=i.options,l=a.apiKey,u=a.authDomain;ne(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});var c={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ak(t)},d=new HF(i,s,o,c);return XF(d,r),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),ti(new rr("auth-internal",function(e){var n=lk(e.getProvider("auth").getImmediate());return function(r){return new _j(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(O1,M1,wj(t)),Pn(O1,M1,"esm5")}/**
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
 */var hk=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(w1,"1"),this.storage.removeItem(w1),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
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
 */function bj(){var t=Ee();return tk(t)||ok(t)}var Ij=1e3,Sj=10;(function(t){Le(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.safariLocalStorageNotSynced=bj()&&zF(),n.fallbackToPolling=UF(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),a=this.localCache[s];o!==a&&n(s,a,o)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(u,c,d){i.notifyListeners(u,d)});return}var s=n.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var o=this.storage.getItem(s);if(n.newValue!==o)n.newValue!==null?this.storage.setItem(s,n.newValue):this.storage.removeItem(s);else if(this.localCache[s]===n.newValue&&!r)return}var a=function(){var u=i.storage.getItem(s);!r&&i.localCache[s]===u||i.notifyListeners(s,u)},l=this.storage.getItem(s);jF()&&l!==n.newValue&&n.newValue!==n.oldValue?setTimeout(a,Sj):a()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var a=o[s];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,s){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},Ij)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return O(this,void 0,void 0,function(){return M(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return O(this,void 0,void 0,function(){var r;return M(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return O(this,void 0,void 0,function(){return M(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e})(hk);/**
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
 */(function(t){Le(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e})(hk);/**
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
 */var Nv=function(t){Le(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return Xn(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return Xn(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return Xn(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(Nl);function Cj(t){return gj(t.auth,new Nv(t),t.bypassAuthState)}function kj(t){var e=t.auth,n=t.user;return ne(n,e,"internal-error"),mj(n,new Nv(t),t.bypassAuthState)}function xj(t){return O(this,void 0,void 0,function(){var e,n;return M(this,function(r){return e=t.auth,n=t.user,ne(n,e,"internal-error"),[2,pj(n,new Nv(t),t.bypassAuthState)]})})}/**
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
 */var Tj=function(){function t(e,n,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return O(e,void 0,void 0,function(){var i,s;return M(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:n,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return O(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,c;return M(this,function(d){switch(d.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,a=e.type,o)return this.reject(o),[2];l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},d.label=1;case 1:return d.trys.push([1,3,,4]),u=this.resolve,[4,this.getIdpTask(a)(l)];case 2:return u.apply(this,[d.sent()]),[3,4];case 3:return c=d.sent(),this.reject(c),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cj;case"linkViaPopup":case"linkViaRedirect":return xj;case"reauthViaPopup":case"reauthViaRedirect":return kj;default:cr(this.auth,"internal-error")}},t.prototype.resolve=function(e){Xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){Xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
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
 */var Nj="pendingRedirect",ih=new Map;(function(t){Le(e,t);function e(n,r,i){i===void 0&&(i=!1);var s=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return O(this,void 0,void 0,function(){var n,r,i,s,o;return M(this,function(a){switch(a.label){case 0:if(n=ih.get(this.auth._key()),n)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,Rj(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return s=a.sent(),[3,5];case 4:s=null,a.label=5;case 5:return i=s,n=function(){return Promise.resolve(i)},[3,7];case 6:return o=a.sent(),n=function(){return Promise.reject(o)},[3,7];case 7:ih.set(this.auth._key(),n),a.label=8;case 8:return this.bypassAuthState||ih.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return O(this,void 0,void 0,function(){var r;return M(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return O(this,void 0,void 0,function(){return M(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e})(Tj);function Rj(t,e){return O(this,void 0,void 0,function(){var n,r,i;return M(this,function(s){switch(s.label){case 0:return n=Aj(e),r=Pj(t),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(n)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(n)];case 3:return s.sent(),[2,i]}})})}function Pj(t){return zr(t._redirectPersistence)}function Aj(t){return Fu(Nj,t.config.apiKey,t.name)}/**
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
 */var Oj=10*60*1e3,Mj=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lj(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!pk(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($d(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=Oj&&this.cachedEventUids.clear(),this.cachedEventUids.has(L1(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(L1(e)),this.lastProcessedEventTime=Date.now()},t}();function L1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function pk(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function Lj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pk(t);default:return!1}}(function(t){Le(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return O(this,void 0,void 0,function(){return M(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e})(Mj);Ej("Cordova");function Dj({user:t}){const[e,n]=b.useState(!1),[r,i]=b.useState(""),[s,o]=b.useState(""),[a,l]=b.useState(!1),[u,c]=b.useState(!1),d=b.useRef(null);function f(){d.current&&d.current.reset(),n(!0)}async function y(p){if(p.preventDefault(),!t)return;const _=cj.credential(r,s);await UP(t,_).catch(()=>{c(!0)})&&(await b4(t.uid),await QP(t).catch(()=>{c(!0)}))}return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-red-800 hover:text-red-200 group",children:[h.jsx("h2",{className:"font-semibold text-xl",children:"Delete Account"}),h.jsx("p",{children:"This action can't be undone"}),h.jsx("div",{className:"mt-4 flex items-center",children:h.jsx("button",{onClick:()=>void f(),className:"hover:font-bold group-hover:text-red-400",children:"Delete Account"})})]}),e&&h.jsx("div",{className:"w-full z-20 h-full absolute bg-red-800 text-red-200 top-0 left-0 flex flex-col items-center justify-center",children:h.jsxs("form",{className:"w-full box-border p-4 shrink-0 md:text-base text-sm",onSubmit:p=>void y(p),ref:d,children:[h.jsxs("h1",{className:"text-3xl mb-4 w-full text-center",children:[h.jsx("span",{className:"font-bold",children:"Warning: "}),"This action can't be undone"]}),h.jsxs("label",{children:["Enter your email",h.jsx("input",{name:"email",placeholder:"Email",className:"w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border text-black",type:"email",onChange:p=>i(p.target.value),required:!0,value:r})]}),h.jsxs("label",{className:"relative",children:["Enter your password",h.jsxs("div",{className:"relative mt-2 flex items-center",children:[h.jsx("input",{name:"password",placeholder:"Password",className:"w-full p-2 md:text-lg text-base outline-none rounded-md box-border text-black",type:`${a?"text":"password"}`,onChange:p=>o(p.target.value),required:!0,value:s}),h.jsx(yt,{icon:a?hC:mC,className:"absolute right-2 cursor-pointer",onClick:()=>l(!a)})]})]}),u&&h.jsx("p",{className:"mt-1",children:"Email or password incorrect"}),h.jsxs("div",{className:"flex justify-between gap-2",children:[h.jsx("button",{className:"mt-6 basis-full p-2 text-center bg-red-900 rounded-lg hover:bg-red-100 hover:text-black active:bg-red-400 transition",type:"reset",onClick:()=>n(!1),children:"Cancel"}),h.jsx("button",{className:"mt-6 basis-full p-2 text-center bg-red-900 rounded-lg hover:bg-red-100 hover:text-black active:bg-red-400 transition",type:"submit",children:"Confirm"})]})]})})]})}function Fj({email:t}){async function e(){t&&(await PS(t),alert("Check your inbox."))}return h.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-green-800 hover:text-green-200 group",children:[h.jsx("h2",{className:"font-semibold text-xl",children:"Password"}),h.jsx("p",{children:"The password to your account"}),h.jsx("div",{className:"mt-4 flex items-center",children:h.jsx("button",{onClick:()=>void e(),className:"hover:font-bold group-hover:text-green-400",children:"Send password reset link"})})]})}function jj({user:t,setDisplayName:e}){const[n,r]=b.useState(0);return h.jsxs("div",{className:"basis-full p-4 box-border flex w-full gap-4",children:[h.jsx("nav",{className:"basis-3/12 h-full shadow shadow-c9 rounded-l-xl rounded-r box-border p-2 gap-2 flex flex-col",children:["Account","Other"].map((i,s)=>h.jsx(Uj,{active:n,index:s,name:i,setActive:r},s))}),h.jsxs("div",{className:"basis-9/12 h-full shadow shadow-c9 rounded-r-xl rounded-l box-border p-2 relative overflow-hidden",children:[h.jsx(D1,{active:n,index:0,children:h.jsxs(h.Fragment,{children:[h.jsx("h1",{className:"font-bold text-3xl",children:"Account Settings"}),h.jsx("hr",{}),h.jsxs("div",{className:"flex flex-col w-full gap-4 mt-4",children:[h.jsx(dF,{user:t,setNavDisplayName:e}),h.jsx(Fj,{email:(t==null?void 0:t.email)??void 0}),h.jsx(Dj,{user:t})]})]})}),h.jsx(D1,{active:n,index:1,children:h.jsxs("div",{className:"w-full h-full flex flex-col",children:[h.jsx("h1",{className:"font-bold text-3xl shrink-0",children:"Other"}),h.jsx("hr",{}),h.jsx("div",{className:"flex flex-col w-full gap-4 mt-4 basis-full",children:h.jsx(Hj,{userEmail:(t==null?void 0:t.email)??void 0,displayName:(t==null?void 0:t.displayName)??void 0})})]})})]})]})}function Uj({active:t,index:e,name:n,setActive:r}){const i=Zt({backgroundColor:t===e?"#0f172a":"#f1f5f9",color:t!==e?"#0f172a":"#f1f5f9"});return h.jsx(zt.div,{className:"box-border cursor-pointer p-4 rounded-lg relative hover:font-bold",onClick:()=>r(e),style:i,children:n})}function D1({active:t,index:e,children:n}){const r=t===e,i=Zt({opacity:r?1:0,delay:r?300:0,zIndex:r?5:0});return h.jsx(zt.div,{style:i,className:"absolute w-full h-full box-border top-0 left-0 p-4",children:n})}const rl={_origin:"https://api.emailjs.com"},zj=(t,e="https://api.emailjs.com")=>{rl._userID=t,rl._origin=e},mk=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class F1{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const gk=(t,e,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new F1(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new F1(o))}),s.open("POST",rl._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),$j=(t,e,n,r)=>{const i=r||rl._userID;return mk(i,t,e),gk("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},Vj=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Wj=(t,e,n,r)=>{const i=r||rl._userID,s=Vj(n);mk(i,t,e);const o=new FormData(s);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",i),gk("/api/v1.0/email/send-form",o)},Bj={init:zj,send:$j,sendForm:Wj};function Hj({userEmail:t,displayName:e}){const[n,r]=b.useState(""),[i,s]=b.useState(!1);async function o(a){a.preventDefault(),s(!0),t&&(await Bj.send(Vf.serviceId,Vf.templateId,{userEmail:t,displayName:e??"User",message:n},Vf.publicKey),s(!1),r(""),alert("Sent! You should have received a carbon copy of your email. We will in touch with you ASAP"),console.log("sent"))}return h.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-c8 hover:text-c2 group h-full flex flex-col",children:[h.jsx("h2",{className:"font-semibold text-xl shrink-0",children:"Chat with the Dev"}),h.jsx("p",{className:"mb-4 shrink-0",children:"Unsatisfied with the app? Missing feature you want to add? Baffled by how good the editor looks? Bugs? Tell me what you want!"}),h.jsxs("form",{className:"basis-full flex flex-col gap-2",onSubmit:a=>void o(a),children:[h.jsx("label",{className:"h-full",children:h.jsx("textarea",{className:"w-full h-full resize-none outline-none text-c9 rounded-xl p-2 bg-slate-100 group-hover:bg-c1",value:n,onChange:a=>r(a.target.value)})}),h.jsx("div",{className:"flex justify-center",children:h.jsx("button",{className:"rounded-full bg-c9 text-c1 p-2 hover:text-c9 hover:bg-c1",children:i?"Sending":"Send"})})]})]})}function j1(){var d,f;const t=ad(),e=so(),[n,r]=b.useState(""),[i,s]=b.useState(!1),[o,a]=b.useState(null),[l,u]=b.useState(0),{user:c}=b.useContext(zd);return b.useEffect(()=>{c?(r(c.displayName??c.email??"User"),AS(c.uid,y=>{a({user:c,schedules:y.val()})},"schedules")):t("/")},[c]),h.jsxs("section",{className:"w-[100dvw] h-[100dvh] relative overflow-x-hidden flex flex-col",children:[h.jsxs("nav",{className:"shrink-0 flex justify-between box-border p-1 h-20 w-full items-center bg-white",children:[h.jsx(Mn,{to:"",className:"h-20",children:h.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-color-logo-2.png",className:"h-full aspect-[4/3] cursor-pointer"})}),h.jsxs("div",{className:"flex gap-4 items-center box-border pr-4",children:[h.jsx("p",{children:n}),h.jsx(Gj,{menuOpen:i,handleOnClick:()=>s(y=>!y)})]})]}),h.jsx(qj,{menuOpen:i,setMenuOpen:s}),e.pathname.includes("/settings")?h.jsx(jj,{user:o==null?void 0:o.user,setDisplayName:r}):h.jsxs(h.Fragment,{children:[h.jsx(Kj,{}),h.jsx(aF,{}),h.jsx(cF,{}),h.jsx("div",{className:"shrink-0 flex justify-center box-border p-6 items-center",children:h.jsx("h1",{className:"font-bold text-4xl z-10 text-c1",children:"My Schedules"})}),h.jsxs("div",{className:"bg-c9 h-full box-border p-2 w-full grid grid-rows-6 grid-cols-9 gap-2 grow-0 absolute top-[100dvh]",id:"schedules",children:[h.jsx(YC,{viewData:((f=(d=o==null?void 0:o.schedules)==null?void 0:d[l])==null?void 0:f.vData)??[],login:!0}),h.jsx(lF,{uid:o==null?void 0:o.user.uid,setIndex:u,viewData:o==null?void 0:o.schedules,currentIndex:l})]})]})]})}function qj({menuOpen:t,setMenuOpen:e}){const n=Zt({x:t?"-100%":"0%"}),r=so();async function i(){await Qg()}function s(){e(!1)}return h.jsxs(zt.div,{className:"absolute top-20 left-full bg-c1 z-10 p-2 w-28",style:n,children:[r.pathname.includes("settings")?h.jsx(Mn,{to:"",children:h.jsx("p",{onClick:s,className:"hover:underline cursor-pointer",children:"Back"})}):h.jsx(Mn,{to:"settings",children:h.jsx("p",{onClick:s,className:"hover:underline cursor-pointer",children:"Settings"})}),h.jsx("p",{onClick:()=>void i(),className:"mt-2 hover:underline cursor-pointer",children:"Sign Out"})]})}function Gj({menuOpen:t,handleOnClick:e}){const i=["M1 20L100 20","M1 50L75 50","M1 80L50 80"],s=["M1 1L99 99","M1 99L99 1","M1 99L99 1"],o=Zt({d:t?s[0]:i[0]}),a=Zt({d:t?s[1]:i[1]}),l=Zt({d:t?s[2]:i[2]});return h.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"none",className:"h-10 aspect-square",onClick:e,children:[h.jsx(zt.path,{d:o.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx(zt.path,{d:a.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx(zt.path,{d:l.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Kj(){return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180 flex flex-col",children:[h.jsx("div",{className:"w-full h-10 bg-c1 order-1 relative bottom-0"}),h.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32 order-2 top-0",children:h.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c1"})})]}),h.jsxs("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180 flex flex-col",children:[h.jsx("div",{className:"w-full h-5 bg-c5 order-1 relative bottom-0"}),h.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32 order-2 top-0",children:h.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c5"})})]}),h.jsx("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180",children:h.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32",children:h.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c9"})})})]})}function Yj(){const[t,e]=b.useState("Login"),n=ad(),[r,i]=b.useState(!1),{user:s}=b.useContext(zd);b.useEffect(()=>{s&&(s.emailVerified?n(`/users/${s.uid}`):(n("/email-verification-confirmation"),I4(s).catch(a=>console.log(a)),i(!0),Qg().catch(a=>console.log(a))))},[s]);function o(a){a==="Login"?e("Login"):a==="Sign Up"&&e("Sign Up")}return h.jsx(h.Fragment,{children:h.jsxs("section",{className:"w-[100dvw] h-[100dvh] bg-white flex",children:[h.jsx("div",{className:"md:basis-5/12 w-full bg-white flex flex-col items-center justify-center box-border p-6",children:h.jsxs("div",{className:"bg-c1 w-full h-full flex flex-col items-center rounded-lg overflow-hidden",children:[h.jsx("nav",{className:"flex w-full shrink-0",children:["Login","Sign Up"].map(a=>h.jsx(Qj,{meth:a,active:t,onClick:o},a))}),h.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-logo-black-on-transparent-background.png",className:"w-28 mt-12"}),h.jsx(Jj,{active:t,notVerified:r})]})}),h.jsxs("div",{className:"basis-7/12 bg-c1 text-xl p-4 md:block hidden",children:[h.jsx("p",{children:"The app is in theory completed! Everything from the schedule making to the account creation is done."}),h.jsx("p",{children:"It's in beta right now with extensive testing."}),h.jsx("p",{children:"Also there's going to be some art here being made."})]})]})})}function Qj({meth:t,active:e,onClick:n}){const[r,i]=Zt(()=>({from:{backgroundColor:t===e?"#03045e":"#caf0f8",color:t===e?"#caf0f8":"#03045e"}}),[]);return b.useEffect(()=>{i.start({to:{backgroundColor:t===e?"#03045e":"#caf0f8",color:t===e?"#caf0f8":"#03045e"}})},[e]),h.jsx(h.Fragment,{children:h.jsx(zt.p,{className:"text-center basis-1/2 cursor-pointer p-2 box-border text-c9",style:r,onClick:()=>n(t),children:t},t)})}function Jj({active:t,notVerified:e}){const[n,r]=Zt(()=>({from:{x:"0%"}}),[]);return b.useEffect(()=>{r.start({to:{x:t==="Login"?"0%":"-100%"}})},[t]),h.jsx("div",{className:"overflow-hidden w-full h-full",children:h.jsxs(zt.div,{className:"flex relative",style:n,children:[h.jsx(A3,{notVerified:e}),h.jsx(O3,{})]})})}function es(){const t=pb();return h.jsxs("section",{className:"w-[100dvw] h-[100dvh] flex flex-col justify-center items-center",children:[h.jsx("h1",{className:"font-bold text-3xl",children:"Oops!"}),h.jsx("p",{children:"Something went wrong"}),h.jsx("p",{className:"font-light",children:t.statusText||t.message})]})}function Xj(){const[t,e]=b.useState(null);b.useEffect(()=>{KP(y4(),r=>{e(r||null)})});const n=aN([{path:"/",element:h.jsx(Yj,{}),errorElement:h.jsx(es,{})},{path:"/forgot",element:h.jsx(P3,{}),errorElement:h.jsx(es,{})},{path:"/schedule",element:h.jsx(y1,{}),errorElement:h.jsx(es,{})},{path:"/users/:uid",element:h.jsx(j1,{}),errorElement:h.jsx(es,{}),children:[{path:"/users/:uid/settings",element:h.jsx(j1,{})}]},{path:"/email-verification-confirmation",element:h.jsx(hN,{}),errorElement:h.jsx(es,{})},{path:"/users/:uid/schedule",element:h.jsx(y1,{login:!0}),errorElement:h.jsx(es,{})}]);return h.jsx("section",{className:"w-[100dvd] h-[100dvh] flex flex-col",children:h.jsx(zd.Provider,{value:{user:t,setUser:e},children:h.jsx(Z2,{router:n})})})}sh.createRoot(document.getElementById("root")).render(h.jsx(Vc.StrictMode,{children:h.jsx(Xj,{})}));
