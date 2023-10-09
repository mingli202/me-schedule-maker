import{j as u,L as G,r as T,u as L,a as U,F as Z,f as Be,b as _t,c as yt,d as Tt,E as he,_ as d,e as _,g as N,h,i as y,S as fe,k as pe,q as ve,l as me,m as Ee,C as Pe,n as Re,o as Je,p as wt,s as bt,t as kt,v as Nt,w as E,x as ee,y as Et,z as Pt,A as Rt,B as q,D as H,G as St,H as xt,I as Ct,J as At,K as Ot,M as Lt,N as se,O as Ut,P as $e,U as Mt,Q as Dt,$ as jt}from"./index-b0873f20.js";import{V as Ft}from"./View-dfffabb3.js";function Vt(){return u.jsx("div",{className:"absolute w-full h-full top-0 left-0 -z-10"})}function qt({setIndex:n,viewData:e,uid:t,currentIndex:r}){return u.jsxs("section",{className:"flex flex-col justify-between relative md:row-span-full md:col-start-8 md:col-span-2 col-span-full rounded-lg overflow-hidden max-md:order-2 md:text-base text-xs",children:[u.jsx("div",{className:"relative max-h-full rounded-lg box-border bg-c1 md:p-2 p-1 flex flex-col overflow-auto",children:e?e.map((i,s)=>u.jsx(Ht,{data:i,index:s,setIndex:n,uid:t,currentIndex:r},s)):"Open the editor to make a new schedule"}),u.jsx(G,{to:"schedule",className:"w-full flex justify-center",children:u.jsx("button",{className:"text-c1 hover:font-bold transition",children:"Open Editor"})})]})}function Ht({data:n,setIndex:e,index:t,uid:r,currentIndex:i}){const[s,o]=T.useState(!1),[a,c]=T.useState(""),[f,l]=T.useState(n.name??`Untitled ${t+1}`);function p(w){w.stopPropagation(),s?l(a):c(f),o(b=>!b)}async function g(w){w.preventDefault(),o(!1),r&&await _t(r,f,t)}const I=L({backgroundColor:i===t?"#03045e":"#caf0f8",color:i!==t?"#03045e":"#caf0f8"});return u.jsxs(U.div,{onClick:()=>!s&&e(t),className:"relative cursor-pointer w-full md:px-2 px-1 md:py-4 py-2 rounded hover:font-bold flex items-center",style:I,children:[u.jsx(Z,{icon:Be,className:"md:pr-2 pr-1 hover:text-c5 transition cursor-pointer",onClick:p}),s?u.jsxs("form",{onSubmit:w=>void g(w),className:"w-full",children:[u.jsx("input",{className:"outline-none rounded md:p-2 p-1 w-full text-c9",value:f,onChange:w=>l(w.target.value)}),u.jsx("input",{type:"submit",className:"hidden"})]}):f,t===0?null:u.jsx("div",{className:"absolute mx-1 w-[calc(100%-0.5rem)] h-[2px] bg-c5 -top-[1px] left-0"})]},n.id)}function Wt(){return u.jsxs("div",{className:"basis-full box-border flex flex-col items-center justify-center gap-2",children:[u.jsx("h1",{className:"md:text-7xl text-4xl font-bold text-c9",children:"Welcome!"}),u.jsx("p",{className:"font-bold text-base",children:"Ready to make your dream schedule?"}),u.jsxs("div",{className:"flex gap-2 mt-4 md:text-base text-sm",children:[u.jsx("button",{onClick:()=>{var n;return(n=document.getElementById("schedules"))==null?void 0:n.scrollIntoView({behavior:"smooth"})},className:"text-c5 hover:underline",children:"Check current schedules"}),u.jsx(G,{to:"schedule",children:u.jsxs("button",{className:"text-c1 mr-4 hover:bg-c1 hover:text-c9 transition bg-c9 p-2 rounded",children:["New ",u.jsx(Z,{icon:yt})]})})]})]})}function Kt({user:n,setNavDisplayName:e}){const[t,r]=T.useState(!1),[i,s]=T.useState((n==null?void 0:n.displayName)??(n==null?void 0:n.email)??"User"),[o,a]=T.useState("");T.useEffect(()=>{n&&s(n.displayName??n.email??"User")},[n]);function c(l){l.preventDefault(),r(!1),e(i),n&&Tt(n,{displayName:i}).catch(p=>console.log(p))}function f(l){l.stopPropagation(),t?s(o):a(i),r(p=>!p)}return u.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-c8 hover:text-c2",children:[u.jsx("h2",{className:"font-semibold md:text-xl text-base",children:"Display Name"}),u.jsx("p",{children:"This name will be displayed instead of your email at the top"}),u.jsxs("div",{className:"mt-4 flex items-center",children:[u.jsx(Z,{icon:Be,className:"md:pr-2 pr-1 hover:text-c5 transition cursor-pointer",onClick:f}),t?u.jsxs("form",{className:"w-full",onSubmit:l=>void c(l),children:[u.jsx("input",{className:"outline-none rounded md:p-2 p-1 w-full text-c9",value:i,onChange:l=>s(l.target.value)}),u.jsx("input",{type:"submit",className:"hidden"})]}):i]})]})}var Se="__sak";function xe(n){return n!==void 0&&n.enterprise!==void 0}var Gt=function(){function n(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(function(t){return t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF"})}return n}();function Ye(){var n;return n={},n["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",n}var zt=Ye,le=new he("auth","Firebase",Ye());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D=new Pt("@firebase/auth");function Bt(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];D.logLevel<=Je.WARN&&D.warn.apply(D,N(["Auth (".concat(fe,"): ").concat(n)],e,!1))}function Y(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];D.logLevel<=Je.ERROR&&D.error.apply(D,N(["Auth (".concat(fe,"): ").concat(n)],e,!1))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];throw ge.apply(void 0,N([n],e,!1))}function te(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return ge.apply(void 0,N([n],e,!1))}function Jt(n,e,t){var r,i=y(y({},zt()),(r={},r[e]=t,r)),s=new he("auth","Firebase",i);return s.create(e,{appName:n.name})}function ge(n){for(var e,t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(typeof n!="string"){var i=t[0],s=N([],t.slice(1),!0);return s[0]&&(s[0].appName=n.name),(e=n._errorFactory).create.apply(e,N([i],s,!1))}return le.create.apply(le,N([n],t,!1))}function m(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(!n)throw ge.apply(void 0,N([e],t,!1))}function R(n){var e="INTERNAL ASSERTION FAILED: "+n;throw Y(e),new Error(e)}function j(n,e){n||R(e)}function $t(){return Ce()==="http:"||Ce()==="https:"}function Ce(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($t()||Rt()||"connection"in navigator)?navigator.onLine:!0}function Xt(){if(typeof navigator>"u")return null;var n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt=function(){function n(e,t){this.shortDelay=e,this.longDelay=t,j(t>e,"Short delay should be less than long delay!"),this.isMobile=wt()||bt()}return n.prototype.get=function(){return Yt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,e){j(n.emulator,"Emulator should always be set here");var t=n.emulator.url;return e?"".concat(t).concat(e.startsWith("/")?e.slice(1):e):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe=function(){function n(){}return n.initialize=function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)},n.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;R("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;R("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;R("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v,en=(v={},v.CREDENTIAL_MISMATCH="custom-token-mismatch",v.MISSING_CUSTOM_TOKEN="internal-error",v.INVALID_IDENTIFIER="invalid-email",v.MISSING_CONTINUE_URI="internal-error",v.INVALID_PASSWORD="wrong-password",v.MISSING_PASSWORD="missing-password",v.EMAIL_EXISTS="email-already-in-use",v.PASSWORD_LOGIN_DISABLED="operation-not-allowed",v.INVALID_IDP_RESPONSE="invalid-credential",v.INVALID_PENDING_TOKEN="invalid-credential",v.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",v.MISSING_REQ_TYPE="internal-error",v.EMAIL_NOT_FOUND="user-not-found",v.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",v.EXPIRED_OOB_CODE="expired-action-code",v.INVALID_OOB_CODE="invalid-action-code",v.MISSING_OOB_CODE="internal-error",v.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",v.INVALID_ID_TOKEN="invalid-user-token",v.TOKEN_EXPIRED="user-token-expired",v.USER_NOT_FOUND="user-token-expired",v.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",v.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",v.INVALID_CODE="invalid-verification-code",v.INVALID_SESSION_INFO="invalid-verification-id",v.INVALID_TEMPORARY_PROOF="invalid-credential",v.MISSING_SESSION_INFO="missing-verification-id",v.SESSION_EXPIRED="code-expired",v.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",v.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",v.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",v.ADMIN_ONLY_OPERATION="admin-restricted-operation",v.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",v.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",v.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",v.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",v.SECOND_FACTOR_EXISTS="second-factor-already-in-use",v.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",v.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",v.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",v.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",v.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",v.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",v.MISSING_CLIENT_TYPE="missing-client-type",v.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",v.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",v.INVALID_REQ_TYPE="invalid-req-type",v);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn=new Qt(3e4,6e4);function C(n,e){return n.tenantId&&!e.tenantId?y(y({},e),{tenantId:n.tenantId}):e}function V(n,e,t,r,i){return i===void 0&&(i={}),d(this,void 0,void 0,function(){var s=this;return h(this,function(o){return[2,Qe(n,i,function(){return d(s,void 0,void 0,function(){var a,c,f,l;return h(this,function(p){switch(p.label){case 0:return a={},c={},r&&(e==="GET"?c=r:a={body:JSON.stringify(r)}),f=ve(y({key:n.config.apiKey},c)).slice(1),[4,n._getAdditionalHeaders()];case 1:return l=p.sent(),l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),[2,Xe.fetch()(Ze(n,n.config.apiHost,t,f),y({method:e,headers:l,referrerPolicy:"no-referrer"},a))]}})})})]})})}function Qe(n,e,t){return d(this,void 0,void 0,function(){var r,i,s,o,a,c,f,l,p,g;return h(this,function(I){switch(I.label){case 0:n._canInitEmulator=!1,r=y(y({},en),e),I.label=1;case 1:return I.trys.push([1,4,,5]),i=new nn(n),[4,Promise.race([t(),i.promise])];case 2:return s=I.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=I.sent(),"needConfirmation"in o)throw W(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(a=s.ok?o.errorMessage:o.error.message,c=a.split(" : "),f=c[0],l=c[1],f==="FEDERATED_USER_ID_ALREADY_LINKED")throw W(n,"credential-already-in-use",o);if(f==="EMAIL_EXISTS")throw W(n,"email-already-in-use",o);if(f==="USER_DISABLED")throw W(n,"user-disabled",o);if(p=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),l)throw Jt(n,p,l);return x(n,p),[3,5];case 4:if(g=I.sent(),g instanceof me)throw g;return x(n,"network-request-failed",{message:String(g)}),[3,5];case 5:return[2]}})})}function M(n,e,t,r,i){return i===void 0&&(i={}),d(this,void 0,void 0,function(){var s;return h(this,function(o){switch(o.label){case 0:return[4,V(n,e,t,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&x(n,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function Ze(n,e,t,r){var i="".concat(e).concat(t,"?").concat(r);return n.config.emulator?Zt(n.config,i):"".concat(n.config.apiScheme,"://").concat(i)}var nn=function(){function n(e){var t=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){t.timer=setTimeout(function(){return i(te(t.auth,"network-request-failed"))},tn.get())})}return n.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},n}();function W(n,e,t){var r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);var i=te(n,e,r);return i.customData._tokenResponse=t,i}function rn(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,V(n,"GET","/v2/recaptchaConfig",C(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,V(n,"POST","/v1/accounts:delete",e)]})})}function on(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,V(n,"POST","/v1/accounts:lookup",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n){if(n)try{var e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function an(n,e){return e===void 0&&(e=!1),d(this,void 0,void 0,function(){var t,r,i,s,o;return h(this,function(a){switch(a.label){case 0:return t=ee(n),[4,t.getIdToken(e)];case 1:return r=a.sent(),i=Ie(r),m(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:K(oe(i.auth_time)),issuedAtTime:K(oe(i.iat)),expirationTime:K(oe(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function oe(n){return Number(n)*1e3}function Ie(n){var e=n.split("."),t=e[0],r=e[1],i=e[2];if(t===void 0||r===void 0||i===void 0)return Y("JWT malformed, contained fewer than 3 sections"),null;try{var s=kt(r);return s?JSON.parse(s):(Y("Failed to decode base64 JWT payload"),null)}catch(o){return Y("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function un(n){var e=Ie(n);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){var r;return h(this,function(i){switch(i.label){case 0:if(t)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof me&&cn(r)?n.auth.currentUser!==n?[3,5]:[4,n.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function cn(n){var e=n.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln=function(){function n(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},n.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},n.prototype.getInterval=function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0,r=i-Date.now()-3e5;return Math.max(0,r)}},n.prototype.schedule=function(e){var t=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return d(t,void 0,void 0,function(){return h(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},n.prototype.iteration=function(){return d(this,void 0,void 0,function(){var e;return h(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et=function(){function n(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}return n.prototype._initializeTime=function(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)},n.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},n.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},n}();/**
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
 */function Q(n){var e;return d(this,void 0,void 0,function(){var t,r,i,s,o,a,c,f,l,p;return h(this,function(g){switch(g.label){case 0:return t=n.auth,[4,n.getIdToken()];case 1:return r=g.sent(),[4,z(n,on(t,{idToken:r}))];case 2:return i=g.sent(),m(i==null?void 0:i.users.length,t,"internal-error"),s=i.users[0],n._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fn(s.providerUserInfo):[],a=hn(n.providerData,o),c=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?f:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new et(s.createdAt,s.lastLoginAt),isAnonymous:l},Object.assign(n,p),[2]}})})}function dn(n){return d(this,void 0,void 0,function(){var e;return h(this,function(t){switch(t.label){case 0:return e=ee(n),[4,Q(e)];case 1:return t.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return t.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function hn(n,e){var t=n.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return N(N([],t,!0),e,!0)}function fn(n){return n.map(function(e){var t=e.providerId,r=pe(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n,e){return d(this,void 0,void 0,function(){var t,r=this;return h(this,function(i){switch(i.label){case 0:return[4,Qe(n,{},function(){return d(r,void 0,void 0,function(){var s,o,a,c,f,l;return h(this,function(p){switch(p.label){case 0:return s=ve({grant_type:"refresh_token",refresh_token:e}).slice(1),o=n.config,a=o.tokenApiHost,c=o.apiKey,f=Ze(n,a,"/v1/token","key=".concat(c)),[4,n._getAdditionalHeaders()];case 1:return l=p.sent(),l["Content-Type"]="application/x-www-form-urlencoded",[2,Xe.fetch()(f,{method:"POST",headers:l,body:s})]}})})})];case 1:return t=i.sent(),[2,{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(){function n(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(n.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),n.prototype.updateFromServerResponse=function(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");var t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):un(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)},n.prototype.getToken=function(e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){return h(this,function(r){switch(r.label){case 0:return m(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},n.prototype.clearRefreshToken=function(){this.refreshToken=null},n.prototype.refresh=function(e,t){return d(this,void 0,void 0,function(){var r,i,s,o;return h(this,function(a){switch(a.label){case 0:return[4,pn(e,t)];case 1:return r=a.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},n.prototype.updateTokensAndExpiration=function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},n.fromJSON=function(e,t){var r=t.refreshToken,i=t.accessToken,s=t.expirationTime,o=new n;return r&&(m(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(m(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(m(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},n.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},n.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},n.prototype._clone=function(){return Object.assign(new n,this.toJSON())},n.prototype._performRefresh=function(){return R("not implemented")},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n,e){m(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var de=function(){function n(e){var t=e.uid,r=e.auth,i=e.stsTokenManager,s=pe(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ln(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?N([],s.providerData,!0):[],this.metadata=new et(s.createdAt||void 0,s.lastLoginAt||void 0)}return n.prototype.getIdToken=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return[4,z(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return t=r.sent(),m(t,this.auth,"internal-error"),this.accessToken===t?[3,3]:(this.accessToken=t,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,t]}})})},n.prototype.getIdTokenResult=function(e){return an(this,e)},n.prototype.reload=function(){return dn(this)},n.prototype._assign=function(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(t){return y({},t)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},n.prototype._clone=function(e){var t=new n(y(y({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t},n.prototype._onReload=function(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},n.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},n.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},n.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},n.prototype._updateTokensIfNecessary=function(e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){var r;return h(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t?[4,Q(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},n.prototype.delete=function(){return d(this,void 0,void 0,function(){var e;return h(this,function(t){switch(t.label){case 0:return[4,this.getIdToken()];case 1:return e=t.sent(),[4,z(this,sn(this.auth,{idToken:e}))];case 2:return t.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},n.prototype.toJSON=function(){return y(y({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return y({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(n.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),n._fromJSON=function(e,t){var r,i,s,o,a,c,f,l,p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(f=t.createdAt)!==null&&f!==void 0?f:void 0,we=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,ne=t.uid,be=t.emailVerified,ke=t.isAnonymous,re=t.providerData,Ne=t.stsTokenManager;m(ne&&Ne,e,"internal-error");var gt=Ae.fromJSON(this.name,Ne);m(typeof ne=="string",e,"internal-error"),A(p,e.name),A(g,e.name),m(typeof be=="boolean",e,"internal-error"),m(typeof ke=="boolean",e,"internal-error"),A(I,e.name),A(w,e.name),A(b,e.name),A(k,e.name),A(P,e.name),A(we,e.name);var ie=new n({uid:ne,auth:e,email:g,emailVerified:be,displayName:p,isAnonymous:ke,photoURL:w,phoneNumber:I,tenantId:b,stsTokenManager:gt,createdAt:P,lastLoginAt:we});return re&&Array.isArray(re)&&(ie.providerData=re.map(function(It){return y({},It)})),k&&(ie._redirectEventId=k),ie},n._fromIdTokenResponse=function(e,t,r){return r===void 0&&(r=!1),d(this,void 0,void 0,function(){var i,s;return h(this,function(o){switch(o.label){case 0:return i=new Ae,i.updateFromServerResponse(t),s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,Q(s)];case 1:return o.sent(),[2,s]}})})},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe=new Map;function O(n){j(n instanceof Function,"Expected a class definition");var e=Oe.get(n);return e?(j(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oe.set(n,e),e)}/**
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
 */var vn=function(){function n(){this.type="NONE",this.storage={}}return n.prototype._isAvailable=function(){return d(this,void 0,void 0,function(){return h(this,function(e){return[2,!0]})})},n.prototype._set=function(e,t){return d(this,void 0,void 0,function(){return h(this,function(r){return this.storage[e]=t,[2]})})},n.prototype._get=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){return t=this.storage[e],[2,t===void 0?null:t]})})},n.prototype._remove=function(e){return d(this,void 0,void 0,function(){return h(this,function(t){return delete this.storage[e],[2]})})},n.prototype._addListener=function(e,t){},n.prototype._removeListener=function(e,t){},n.type="NONE",n}(),Le=vn;/**
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
 */function X(n,e,t){return"".concat("firebase",":").concat(n,":").concat(e,":").concat(t)}var Ue=function(){function n(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=X(this.userKey,s.apiKey,o),this.fullPersistenceKey=X("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},n.prototype.getCurrentUser=function(){return d(this,void 0,void 0,function(){var e;return h(this,function(t){switch(t.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=t.sent(),[2,e?de._fromJSON(this.auth,e):null]}})})},n.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},n.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},n.prototype.setPersistence=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return t=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,t?[2,this.setCurrentUser(t)]:[2]}})})},n.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},n.create=function(e,t,r){return r===void 0&&(r="authUser"),d(this,void 0,void 0,function(){var i,s,o,a,c,f,l,p,g,I,w=this;return h(this,function(b){switch(b.label){case 0:return t.length?[4,Promise.all(t.map(function(k){return d(w,void 0,void 0,function(){return h(this,function(P){switch(P.label){case 0:return[4,k._isAvailable()];case 1:return P.sent()?[2,k]:[2,void 0]}})})}))]:[2,new n(O(Le),e,r)];case 1:i=b.sent().filter(function(k){return k}),s=i[0]||O(Le),o=X(r,e.config.apiKey,e.name),a=null,c=0,f=t,b.label=2;case 2:if(!(c<f.length))return[3,7];l=f[c],b.label=3;case 3:return b.trys.push([3,5,,6]),[4,l._get(o)];case 4:return p=b.sent(),p?(g=de._fromJSON(e,p),l!==s&&(a=g),s=l,[3,7]):[3,6];case 5:return b.sent(),[3,6];case 6:return c++,[3,2];case 7:return I=i.filter(function(k){return k._shouldAllowMigration}),!s._shouldAllowMigration||!I.length?[2,new n(s,e,r)]:(s=I[0],a?[4,s._set(o,a.toJSON())]:[3,9]);case 8:b.sent(),b.label=9;case 9:return[4,Promise.all(t.map(function(k){return d(w,void 0,void 0,function(){return h(this,function(P){switch(P.label){case 0:if(k===s)return[3,4];P.label=1;case 1:return P.trys.push([1,3,,4]),[4,k._remove(o)];case 2:return P.sent(),[3,4];case 3:return P.sent(),[3,4];case 4:return[2]}})})}))];case 10:return b.sent(),[2,new n(s,e,r)]}})})},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n){var e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(it(e))return"Blackberry";if(st(e))return"Webos";if(tt(e))return"Safari";if((e.includes("chrome/")||gn(e))&&!e.includes("edge/"))return"Chrome";if(rt(e))return"Android";var t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);return(r==null?void 0:r.length)===2?r[1]:"Other"}function mn(n){return n===void 0&&(n=E()),/firefox\//i.test(n)}function tt(n){n===void 0&&(n=E());var e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gn(n){return n===void 0&&(n=E()),/crios\//i.test(n)}function nt(n){return n===void 0&&(n=E()),/iemobile/i.test(n)}function rt(n){return n===void 0&&(n=E()),/android/i.test(n)}function it(n){return n===void 0&&(n=E()),/blackberry/i.test(n)}function st(n){return n===void 0&&(n=E()),/webos/i.test(n)}function ot(n){return n===void 0&&(n=E()),/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function In(){return Nt()&&document.documentMode===10}function _n(n){return n===void 0&&(n=E()),ot(n)||rt(n)||st(n)||it(n)||/windows phone/i.test(n)||nt(n)}function yn(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,e){e===void 0&&(e=[]);var t;switch(n){case"Browser":t=Me(E());break;case"Worker":t="".concat(Me(E()),"-").concat(n);break;default:t=n}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(t,"/").concat("JsCore","/").concat(fe,"/").concat(r)}/**
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
 */var Tn=function(){function n(e){this.auth=e,this.queue=[]}return n.prototype.pushCallback=function(e,t){var r=this,i=function(o){return new Promise(function(a,c){try{var f=e(o);a(f)}catch(l){c(l)}})};i.onAbort=t,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},n.prototype.runMiddleware=function(e){return d(this,void 0,void 0,function(){var t,r,i,s,o,a,c,f;return h(this,function(l){switch(l.label){case 0:if(this.auth.currentUser===e)return[2];t=[],l.label=1;case 1:l.trys.push([1,6,,7]),r=0,i=this.queue,l.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:l.sent(),s.onAbort&&t.push(s.onAbort),l.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=l.sent(),t.reverse(),a=0,c=t;a<c.length;a++){f=c[a];try{f()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},n}();/**
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
 */function wn(n,e){return e===void 0&&(e={}),d(this,void 0,void 0,function(){return h(this,function(t){return[2,V(n,"GET","/v2/passwordPolicy",C(n,e))]})})}/**
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
 */var bn=6,kn=function(){function n(e){var t,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:bn,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return n.prototype.validatePassword=function(e){var t,r,i,s,o,a,c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c},n.prototype.validatePasswordLengthOptions=function(e,t){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)},n.prototype.validatePasswordCharacterOptions=function(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},n.prototype.updatePasswordCharacterOptionsStatuses=function(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn=function(){function n(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Tn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=le,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return n.prototype._initializeWithPersistence=function(e,t){var r=this;return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(function(){return d(r,void 0,void 0,function(){var i,s,o;return h(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Ue.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(t)];case 6:return a.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},n.prototype._onStorageEvent=function(){return d(this,void 0,void 0,function(){var e;return h(this,function(t){switch(t.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=t.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return t.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return t.sent(),[2]}})})},n.prototype.initializeCurrentUser=function(e){var t;return d(this,void 0,void 0,function(){var r,i,s,o,a,c,f;return h(this,function(l){switch(l.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=l.sent(),i=r,s=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return l.sent(),o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:c=l.sent(),(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0),l.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!s)return[3,8];l.label=5;case 5:return l.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return l.sent(),[3,8];case 7:return f=l.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(f)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return m(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return l.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},n.prototype.tryRedirectSignIn=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:t=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return t=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,t]}})})},n.prototype.reloadAndSetCurrentUserOrClear=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Q(e)];case 1:return r.sent(),[3,3];case 2:return t=r.sent(),(t==null?void 0:t.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},n.prototype.useDeviceLanguage=function(){this.languageCode=Xt()},n.prototype._delete=function(){return d(this,void 0,void 0,function(){return h(this,function(e){return this._deleted=!0,[2]})})},n.prototype.updateCurrentUser=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){return t=e?ee(e):null,t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(t&&t._clone(this))]})})},n.prototype._updateCurrentUser=function(e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){var r=this;return h(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return d(r,void 0,void 0,function(){return h(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},n.prototype.signOut=function(){return d(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},n.prototype.setPersistence=function(e){var t=this;return this.queue(function(){return d(t,void 0,void 0,function(){return h(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(O(e))];case 1:return r.sent(),[2]}})})})},n.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},n.prototype.validatePassword=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return t=this._getPasswordPolicyInternal(),t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,t.validatePassword(e)]}})})},n.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},n.prototype._updatePasswordPolicy=function(){return d(this,void 0,void 0,function(){var e,t;return h(this,function(r){switch(r.label){case 0:return[4,wn(this)];case 1:return e=r.sent(),t=new kn(e),this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t,[2]}})})},n.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},n.prototype._updateErrorMap=function(e){this._errorFactory=new he("auth","Firebase",e())},n.prototype.onAuthStateChanged=function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)},n.prototype.beforeAuthStateChanged=function(e,t){return this.beforeStateQueue.pushCallback(e,t)},n.prototype.onIdTokenChanged=function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)},n.prototype.authStateReady=function(){var e=this;return new Promise(function(t,r){if(e.currentUser)t();else var i=e.onAuthStateChanged(function(){i(),t()},r)})},n.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},n.prototype._setRedirectUser=function(e,t){return d(this,void 0,void 0,function(){var r;return h(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(t)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},n.prototype.getOrInitRedirectPersistenceManager=function(e){return d(this,void 0,void 0,function(){var t,r,i;return h(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(t=e&&O(e)||this._popupRedirectResolver,m(t,this,"argument-error"),r=this,[4,Ue.create(this,[O(t._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},n.prototype._redirectUserForId=function(e){var t,r;return d(this,void 0,void 0,function(){var i=this;return h(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return d(i,void 0,void 0,function(){return h(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},n.prototype._persistUserIfCurrent=function(e){return d(this,void 0,void 0,function(){var t=this;return h(this,function(r){return e===this.currentUser?[2,this.queue(function(){return d(t,void 0,void 0,function(){return h(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},n.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},n.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},n.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},n.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(n.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),n.prototype.notifyAuthListeners=function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},n.prototype.registerStateListener=function(e,t,r,i){var s=this;if(this._deleted)return function(){};var o=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(c,this,"internal-error"),c.then(function(){a||o(s.currentUser)}),typeof t=="function"){var f=e.addObserver(t,r,i);return function(){a=!0,f()}}else{var l=e.addObserver(t);return function(){a=!0,l()}}},n.prototype.directlySetCurrentUser=function(e){return d(this,void 0,void 0,function(){return h(this,function(t){switch(t.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:t.sent(),t.label=4;case 4:return[2]}})})},n.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(n.prototype,"assertedPersistence",{get:function(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),n.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=at(this.config.clientPlatform,this._getFrameworks()))},n.prototype._getFrameworks=function(){return this.frameworks},n.prototype._getAdditionalHeaders=function(){var e;return d(this,void 0,void 0,function(){var t,r,i,s;return h(this,function(o){switch(o.label){case 0:return t=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(t["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(t["X-Firebase-AppCheck"]=i),[2,t]}})})},n.prototype._getAppCheckToken=function(){var e;return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return t=r.sent(),t!=null&&t.error&&Bt("Error while retrieving App Check token: ".concat(t.error)),[2,t==null?void 0:t.token]}})})},n}();function ut(n){return ee(n)}var De=function(){function n(e){var t=this;this.auth=e,this.observer=null,this.addObserver=Et(function(r){return t.observer=r})}return Object.defineProperty(n.prototype,"next",{get:function(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Pn(n){return new Promise(function(e,t){var r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=function(i){var s=te("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",En().appendChild(r)})}var Rn="https://www.google.com/recaptcha/enterprise.js?render=",Sn="recaptcha-enterprise",xn="NO_RECAPTCHA",Cn=function(){function n(e){this.type=Sn,this.auth=ut(e)}return n.prototype.verify=function(e,t){return e===void 0&&(e="verify"),t===void 0&&(t=!1),d(this,void 0,void 0,function(){function r(o){return d(this,void 0,void 0,function(){var a=this;return h(this,function(c){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(f,l){return d(a,void 0,void 0,function(){return h(this,function(p){return rn(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(g){if(g.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{var I=new Gt(g);return o.tenantId==null?o._agentRecaptchaConfig=I:o._tenantRecaptchaConfigs[o.tenantId]=I,f(I.siteKey)}}).catch(function(g){l(g)}),[2]})})})]})})}function i(o,a,c){var f=window.grecaptcha;xe(f)?f.enterprise.ready(function(){f.enterprise.execute(o,{action:e}).then(function(l){a(l)}).catch(function(){a(xn)})}):c(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return h(this,function(o){return[2,new Promise(function(a,c){r(s.auth).then(function(f){if(!t&&xe(window.grecaptcha))i(f,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}Pn(Rn+f).then(function(){i(f,a,c)}).catch(function(l){c(l)})}}).catch(function(f){c(f)})})]})})},n}();function je(n,e,t,r){return r===void 0&&(r=!1),d(this,void 0,void 0,function(){var i,s,o;return h(this,function(a){switch(a.label){case 0:i=new Cn(n),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(t)];case 2:return s=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(t,!0)];case 4:return s=a.sent(),[3,5];case 5:return o=y({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function An(n,e){var t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(O);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J=function(){function n(e,t){this.providerId=e,this.signInMethod=t}return n.prototype.toJSON=function(){return R("not implemented")},n.prototype._getIdTokenResponse=function(e){return R("not implemented")},n.prototype._linkToIdToken=function(e,t){return R("not implemented")},n.prototype._getReauthenticationResolver=function(e){return R("not implemented")},n}();function On(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,V(n,"POST","/v1/accounts:update",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,M(n,"POST","/v1/accounts:signInWithPassword",C(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,M(n,"POST","/v1/accounts:signInWithEmailLink",C(n,e))]})})}function Un(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,M(n,"POST","/v1/accounts:signInWithEmailLink",C(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe=function(n){_(e,n);function e(t,r,i,s){s===void 0&&(s=null);var o=n.call(this,"password",i)||this;return o._email=t,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(t,r){return new e(t,r,"password")},e._fromEmailAndCode=function(t,r,i){return i===void 0&&(i=null),new e(t,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(t){var r;return d(this,void 0,void 0,function(){var i,s,o,a=this;return h(this,function(c){switch(c.label){case 0:switch(i=this.signInMethod,i){case"password":return[3,1];case"emailLink":return[3,4]}return[3,5];case 1:return s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled?[4,je(t,s,"signInWithPassword")]:[3,3];case 2:return o=c.sent(),[2,ae(t,o)];case 3:return[2,ae(t,s).catch(function(f){return d(a,void 0,void 0,function(){var l;return h(this,function(p){switch(p.label){case 0:return f.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),[4,je(t,s,"signInWithPassword")]);case 1:return l=p.sent(),[2,ae(t,l)];case 2:return[2,Promise.reject(f)]}})})})];case 4:return[2,Ln(t,{email:this._email,oobCode:this._password})];case 5:x(t,"internal-error"),c.label=6;case 6:return[2]}})})},e.prototype._linkToIdToken=function(t,r){return d(this,void 0,void 0,function(){return h(this,function(i){switch(this.signInMethod){case"password":return[2,On(t,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password})];case"emailLink":return[2,Un(t,{idToken:r,email:this._email,oobCode:this._password})];default:x(t,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(t){return this._getIdTokenResponse(t)},e}(J);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,M(n,"POST","/v1/accounts:signInWithIdp",C(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn="http://localhost",F=function(n){_(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.pendingToken=null,t}return e._fromParams=function(t){var r=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):x("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t,i=r.providerId,s=r.signInMethod,o=pe(r,["providerId","signInMethod"]);if(!i||!s)return null;var a=new e(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a},e.prototype._getIdTokenResponse=function(t){var r=this.buildRequest();return S(t,r)},e.prototype._linkToIdToken=function(t,r){var i=this.buildRequest();return i.idToken=r,S(t,i)},e.prototype._getReauthenticationResolver=function(t){var r=this.buildRequest();return r.autoCreate=!1,S(t,r)},e.prototype.buildRequest=function(){var t={requestUri:Mn,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=ve(r)}return t},e}(J);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;function Dn(n,e){return d(this,void 0,void 0,function(){return h(this,function(t){return[2,M(n,"POST","/v1/accounts:signInWithPhoneNumber",C(n,e))]})})}function jn(n,e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return[4,M(n,"POST","/v1/accounts:signInWithPhoneNumber",C(n,e))];case 1:if(t=r.sent(),t.temporaryProof)throw W(n,"account-exists-with-different-credential",t);return[2,t]}})})}var Fn=(ue={},ue.USER_NOT_FOUND="user-not-found",ue);function Vn(n,e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){return t=y(y({},e),{operation:"REAUTH"}),[2,M(n,"POST","/v1/accounts:signInWithPhoneNumber",C(n,t),Fn)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){_(e,n);function e(t){var r=n.call(this,"phone","phone")||this;return r.params=t,r}return e._fromVerification=function(t,r){return new e({verificationId:t,verificationCode:r})},e._fromTokenResponse=function(t,r){return new e({phoneNumber:t,temporaryProof:r})},e.prototype._getIdTokenResponse=function(t){return Dn(t,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(t,r){return jn(t,y({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(t){return Vn(t,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var t=this.params,r=t.temporaryProof,i=t.phoneNumber,s=t.verificationId,o=t.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t},e.fromJSON=function(t){typeof t=="string"&&(t=JSON.parse(t));var r=t,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,a=r.temporaryProof;return!s&&!i&&!o&&!a?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:a})},e})(J);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hn(n){var e=q(H(n)).link,t=e?q(H(e)).deep_link_id:null,r=q(H(n)).deep_link_id,i=r?q(H(r)).link:null;return i||r||t||e||n}var Wn=function(){function n(e){var t,r,i,s,o,a,c=q(H(e)),f=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,p=qn((i=c.mode)!==null&&i!==void 0?i:null);m(f&&l&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}return n.parseLink=function(e){var t=Hn(e);try{return new n(t)}catch{return null}},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn=function(){function n(){this.providerId=n.PROVIDER_ID}return n.credential=function(e,t){return Fe._fromEmailAndPassword(e,t)},n.credentialWithLink=function(e,t){var r=Wn.parseLink(t);return m(r,"argument-error"),Fe._fromEmailAndCode(e,r.code,r.tenantId)},n.PROVIDER_ID="password",n.EMAIL_PASSWORD_SIGN_IN_METHOD="password",n.EMAIL_LINK_SIGN_IN_METHOD="emailLink",n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct=function(){function n(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return n.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},n.prototype.setCustomParameters=function(e){return this.customParameters=e,this},n.prototype.getCustomParameters=function(){return this.customParameters},n}();/**
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
 */var $=function(n){_(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.scopes=[],t}return e.prototype.addScope=function(t){return this.scopes.includes(t)||this.scopes.push(t),this},e.prototype.getScopes=function(){return N([],this.scopes,!0)},e}(ct);(function(n){_(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.credentialFromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t;return m("providerId"in r&&"signInMethod"in r,"argument-error"),F._fromParams(r)},e.prototype.credential=function(t){return this._credential(y(y({},t),{nonce:t.rawNonce}))},e.prototype._credential=function(t){return m(t.idToken||t.accessToken,"argument-error"),F._fromParams(y(y({},t),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(t){return e.oauthCredentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.oauthCredentialFromTaggedObject(t.customData||{})},e.oauthCredentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,a=i.oauthTokenSecret,c=i.pendingToken,f=i.nonce,l=i.providerId;if(!o&&!a&&!s&&!c||!l)return null;try{return new e(l)._credential({idToken:s,accessToken:o,nonce:f,pendingToken:c})}catch{return null}},e})($);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){_(e,n);function e(){return n.call(this,"facebook.com")||this}return e.credential=function(t){return F._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})($);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){_(e,n);function e(){var t=n.call(this,"google.com")||this;return t.addScope("profile"),t}return e.credential=function(t,r){return F._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})($);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){_(e,n);function e(){return n.call(this,"github.com")||this}return e.credential=function(t){return F._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})($);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn="http://localhost",Ve=function(n){_(e,n);function e(t,r){var i=n.call(this,t,t)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(t){var r=this.buildRequest();return S(t,r)},e.prototype._linkToIdToken=function(t,r){var i=this.buildRequest();return i.idToken=r,S(t,i)},e.prototype._getReauthenticationResolver=function(t){var r=this.buildRequest();return r.autoCreate=!1,S(t,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(t,r){return new e(t,r)},e.prototype.buildRequest=function(){return{requestUri:Gn,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(J);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn="saml.";(function(n){_(e,n);function e(t){return m(t.startsWith(zn),"argument-error"),n.call(this,t)||this}return e.credentialFromResult=function(t){return e.samlCredentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.samlCredentialFromTaggedObject(t.customData||{})},e.credentialFromJSON=function(t){var r=Ve.fromJSON(t);return m(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return Ve._create(o,s)}catch{return null}},e})(ct);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){_(e,n);function e(){return n.call(this,"twitter.com")||this}return e.credential=function(t,r){return F._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})($);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e=function(){function n(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return n._fromIdTokenResponse=function(e,t,r,i){return i===void 0&&(i=!1),d(this,void 0,void 0,function(){var s,o,a;return h(this,function(c){switch(c.label){case 0:return[4,de._fromIdTokenResponse(e,r,i)];case 1:return s=c.sent(),o=qe(r),a=new n({user:s,providerId:o,_tokenResponse:r,operationType:t}),[2,a]}})})},n._forOperation=function(e,t,r){return d(this,void 0,void 0,function(){var i;return h(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=qe(r),[2,new n({user:e,providerId:i,_tokenResponse:r,operationType:t})]}})})},n}();function qe(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn=function(n){_(e,n);function e(t,r,i,s){var o=this,a;return o=n.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(t,r,i,s){return new e(t,r,i,s)},e}(me);function lt(n,e,t,r){var i=e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?Bn._fromErrorAndOperation(n,s,e,r):s})}function Jn(n,e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){var r,i,s,o,a,c;return h(this,function(f){switch(f.label){case 0:return i=z,s=[n],a=(o=e)._linkToIdToken,c=[n.auth],[4,n.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([a.apply(o,c.concat([f.sent()])),t]))];case 2:return r=f.sent(),[2,_e._forOperation(n,"link",r)]}})})}/**
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
 */function $n(n,e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){var r,i,s,o,a,c;return h(this,function(f){switch(f.label){case 0:r=n.auth,i="reauthenticate",f.label=1;case 1:return f.trys.push([1,3,,4]),[4,z(n,lt(r,i,e,n),t)];case 2:return s=f.sent(),m(s.idToken,r,"internal-error"),o=Ie(s.idToken),m(o,r,"internal-error"),a=o.sub,m(n.uid===a,r,"user-mismatch"),[2,_e._forOperation(n,i,s)];case 3:throw c=f.sent(),(c==null?void 0:c.code)==="auth/".concat("user-not-found")&&x(r,"user-mismatch"),c;case 4:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e,t){return t===void 0&&(t=!1),d(this,void 0,void 0,function(){var r,i,s;return h(this,function(o){switch(o.label){case 0:return r="signIn",[4,lt(n,r,e)];case 1:return i=o.sent(),[4,_e._fromIdTokenResponse(n,r,i)];case 2:return s=o.sent(),t?[3,4]:[4,n._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=function(){function n(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}return n._fromServerResponse=function(e,t){return"phoneInfo"in t?Xn._fromServerResponse(e,t):"totpInfo"in t?Qn._fromServerResponse(e,t):x(e,"internal-error")},n}(),Xn=function(n){_(e,n);function e(t){var r=n.call(this,"phone",t)||this;return r.phoneNumber=t.phoneInfo,r}return e._fromServerResponse=function(t,r){return new e(r)},e}(dt),Qn=function(n){_(e,n);function e(t){return n.call(this,"totp",t)||this}return e._fromServerResponse=function(t,r){return new e(r)},e}(dt),ye=function(){function n(e,t,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=t,this.profile=r}return n}(),ht=function(n){_(e,n);function e(t,r,i,s){var o=n.call(this,t,r,i)||this;return o.username=s,o}return e}(ye);(function(n){_(e,n);function e(t,r){return n.call(this,t,"facebook.com",r)||this}return e})(ye);(function(n){_(e,n);function e(t,r){return n.call(this,t,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(ht);(function(n){_(e,n);function e(t,r){return n.call(this,t,"google.com",r)||this}return e})(ye);(function(n){_(e,n);function e(t,r,i){return n.call(this,t,"twitter.com",r,i)||this}return e})(ht);var He="@firebase/auth",We="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn=function(){function n(e){this.auth=e,this.internalListeners=new Map}return n.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},n.prototype.getToken=function(e){return d(this,void 0,void 0,function(){var t;return h(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return t=r.sent(),[2,{accessToken:t}]}})})},n.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}},n.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())},n.prototype.assertAuthConfigured=function(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},n.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tr(n){Ee(new Pe("auth",function(e,t){var r=t.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=i.options,c=a.apiKey,f=a.authDomain;m(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});var l={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:at(n)},p=new Nn(i,s,o,l);return An(p,r),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,t,r){var i=e.getProvider("auth-internal");i.initialize()})),Ee(new Pe("auth-internal",function(e){var t=ut(e.getProvider("auth").getImmediate());return function(r){return new Zn(r)}(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(He,We,er(n)),Re(He,We,"esm5")}/**
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
 */var ft=function(){function n(e,t){this.storageRetriever=e,this.type=t}return n.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(Se,"1"),this.storage.removeItem(Se),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},n.prototype._set=function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()},n.prototype._get=function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)},n.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(n.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){var n=E();return tt(n)||ot(n)}var rr=1e3,ir=10;(function(n){_(e,n);function e(){var t=n.call(this,function(){return window.localStorage},"LOCAL")||this;return t.boundEventHandler=function(r,i){return t.onStorageEvent(r,i)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=nr()&&yn(),t.fallbackToPolling=_n(),t._shouldAllowMigration=!0,t}return e.prototype.forAllChangedKeys=function(t){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),a=this.localCache[s];o!==a&&t(s,a,o)}},e.prototype.onStorageEvent=function(t,r){var i=this;if(r===void 0&&(r=!1),!t.key){this.forAllChangedKeys(function(f,l,p){i.notifyListeners(f,p)});return}var s=t.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!r)return}var a=function(){var f=i.storage.getItem(s);!r&&i.localCache[s]===f||i.notifyListeners(s,f)},c=this.storage.getItem(s);In()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,ir):a()},e.prototype.notifyListeners=function(t,r){this.localCache[t]=r;var i=this.listeners[t];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var a=o[s];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var t=this;this.stopPolling(),this.pollTimer=setInterval(function(){t.forAllChangedKeys(function(r,i,s){t.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},rr)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)},e.prototype._removeListener=function(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(t,r){return d(this,void 0,void 0,function(){return h(this,function(i){switch(i.label){case 0:return[4,n.prototype._set.call(this,t,r)];case 1:return i.sent(),this.localCache[t]=JSON.stringify(r),[2]}})})},e.prototype._get=function(t){return d(this,void 0,void 0,function(){var r;return h(this,function(i){switch(i.label){case 0:return[4,n.prototype._get.call(this,t)];case 1:return r=i.sent(),this.localCache[t]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(t){return d(this,void 0,void 0,function(){return h(this,function(r){switch(r.label){case 0:return[4,n.prototype._remove.call(this,t)];case 1:return r.sent(),delete this.localCache[t],[2]}})})},e.type="LOCAL",e})(ft);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){_(e,n);function e(){return n.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(t,r){},e.prototype._removeListener=function(t,r){},e.type="SESSION",e})(ft);/**
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
 */var Te=function(n){_(e,n);function e(t){var r=n.call(this,"custom","custom")||this;return r.params=t,r}return e.prototype._getIdTokenResponse=function(t){return S(t,this._buildIdpRequest())},e.prototype._linkToIdToken=function(t,r){return S(t,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(t){return S(t,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(t){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r},e}(J);function sr(n){return Yn(n.auth,new Te(n),n.bypassAuthState)}function or(n){var e=n.auth,t=n.user;return m(t,e,"internal-error"),$n(t,new Te(n),n.bypassAuthState)}function ar(n){return d(this,void 0,void 0,function(){var e,t;return h(this,function(r){return e=n.auth,t=n.user,m(t,e,"internal-error"),[2,Jn(t,new Te(n),n.bypassAuthState)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ur=function(){function n(e,t,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}return n.prototype.execute=function(){var e=this;return new Promise(function(t,r){return d(e,void 0,void 0,function(){var i,s;return h(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:t,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},n.prototype.onAuthEvent=function(e){return d(this,void 0,void 0,function(){var t,r,i,s,o,a,c,f,l;return h(this,function(p){switch(p.label){case 0:if(t=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,a=e.type,o)return this.reject(o),[2];c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},p.label=1;case 1:return p.trys.push([1,3,,4]),f=this.resolve,[4,this.getIdpTask(a)(c)];case 2:return f.apply(this,[p.sent()]),[3,4];case 3:return l=p.sent(),this.reject(l),[3,4];case 4:return[2]}})})},n.prototype.onError=function(e){this.reject(e)},n.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sr;case"linkViaPopup":case"linkViaRedirect":return ar;case"reauthViaPopup":case"reauthViaRedirect":return or;default:x(this.auth,"internal-error")}},n.prototype.resolve=function(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},n.prototype.reject=function(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},n.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr="pendingRedirect",ce=new Map;(function(n){_(e,n);function e(t,r,i){i===void 0&&(i=!1);var s=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return d(this,void 0,void 0,function(){var t,r,i,s,o;return h(this,function(a){switch(a.label){case 0:if(t=ce.get(this.auth._key()),t)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,lr(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,n.prototype.execute.call(this)]:[3,4];case 3:return s=a.sent(),[3,5];case 4:s=null,a.label=5;case 5:return i=s,t=function(){return Promise.resolve(i)},[3,7];case 6:return o=a.sent(),t=function(){return Promise.reject(o)},[3,7];case 7:ce.set(this.auth._key(),t),a.label=8;case 8:return this.bypassAuthState||ce.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,t()]}})})},e.prototype.onAuthEvent=function(t){return d(this,void 0,void 0,function(){var r;return h(this,function(i){switch(i.label){case 0:return t.type==="signInViaRedirect"?[2,n.prototype.onAuthEvent.call(this,t)]:t.type==="unknown"?(this.resolve(null),[2]):t.eventId?[4,this.auth._redirectUserForId(t.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,n.prototype.onAuthEvent.call(this,t)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return d(this,void 0,void 0,function(){return h(this,function(t){return[2]})})},e.prototype.cleanUp=function(){},e})(ur);function lr(n,e){return d(this,void 0,void 0,function(){var t,r,i;return h(this,function(s){switch(s.label){case 0:return t=hr(e),r=dr(n),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(t)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(t)];case 3:return s.sent(),[2,i]}})})}function dr(n){return O(n._redirectPersistence)}function hr(n){return X(cr,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr=10*60*1e3,pr=function(){function n(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},n.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},n.prototype.onEvent=function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){t.isEventForConsumer(e,i)&&(r=!0,t.sendToConsumer(e,i),t.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vr(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},n.prototype.sendToConsumer=function(e,t){var r;if(e.error&&!pt(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(te(this.auth,i))}else t.onAuthEvent(e)},n.prototype.isEventForConsumer=function(e,t){var r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r},n.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=fr&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ke(e))},n.prototype.saveEventToCache=function(e){this.cachedEventUids.add(Ke(e)),this.lastProcessedEventTime=Date.now()},n}();function Ke(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(function(e){return e}).join("-")}function pt(n){var e=n.type,t=n.error;return e==="unknown"&&(t==null?void 0:t.code)==="auth/".concat("no-auth-event")}function vr(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pt(n);default:return!1}}(function(n){_(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.passiveListeners=new Set,t.initPromise=new Promise(function(r){t.resolveInialized=r}),t}return e.prototype.addPassiveListener=function(t){this.passiveListeners.add(t)},e.prototype.removePassiveListener=function(t){this.passiveListeners.delete(t)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(t){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(t)}),n.prototype.onEvent.call(this,t)},e.prototype.initialized=function(){return d(this,void 0,void 0,function(){return h(this,function(t){switch(t.label){case 0:return[4,this.initPromise];case 1:return t.sent(),[2]}})})},e})(pr);tr("Cordova");function mr({user:n}){const[e,t]=T.useState(!1),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,c]=T.useState(!1),[f,l]=T.useState(!1),p=T.useRef(null);function g(){p.current&&p.current.reset(),t(!0)}async function I(w){if(w.preventDefault(),!n)return;const b=Kn.credential(r,s);await Ct(n,b).catch(()=>{l(!0)})&&(await At(n.uid),await Ot(n).catch(()=>{l(!0)}))}return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-red-800 hover:text-red-200 group",children:[u.jsx("h2",{className:"font-semibold md:text-xl text-base",children:"Delete Account"}),u.jsx("p",{children:"This action can't be undone"}),u.jsx("div",{className:"mt-4 flex items-center",children:u.jsx("button",{onClick:()=>void g(),className:"hover:font-bold group-hover:text-red-400",children:"Delete Account"})})]}),e&&u.jsx("div",{className:"w-full z-20 h-full absolute bg-red-800 text-red-200 top-0 left-0 flex flex-col items-center justify-center",children:u.jsxs("form",{className:"w-full box-border p-4 shrink-0 md:text-base text-sm",onSubmit:w=>void I(w),ref:p,children:[u.jsxs("h1",{className:"text-3xl mb-4 w-full text-center",children:[u.jsx("span",{className:"font-bold",children:"Warning: "}),"This action can't be undone"]}),u.jsxs("label",{children:["Enter your email",u.jsx("input",{name:"email",placeholder:"Email",className:"w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border text-black",type:"email",onChange:w=>i(w.target.value),required:!0,value:r})]}),u.jsxs("label",{className:"relative",children:["Enter your password",u.jsxs("div",{className:"relative mt-2 flex items-center",children:[u.jsx("input",{name:"password",placeholder:"Password",className:"w-full p-2 md:text-lg text-base outline-none rounded-md box-border text-black",type:`${a?"text":"password"}`,onChange:w=>o(w.target.value),required:!0,value:s}),u.jsx(Z,{icon:a?St:xt,className:"absolute right-2 cursor-pointer",onClick:()=>c(!a)})]})]}),f&&u.jsx("p",{className:"mt-1",children:"Email or password incorrect"}),u.jsxs("div",{className:"flex justify-between gap-2",children:[u.jsx("button",{className:"mt-6 basis-full p-2 text-center bg-red-900 rounded-lg hover:bg-red-100 hover:text-black active:bg-red-400 transition",type:"reset",onClick:()=>t(!1),children:"Cancel"}),u.jsx("button",{className:"mt-6 basis-full p-2 text-center bg-red-900 rounded-lg hover:bg-red-100 hover:text-black active:bg-red-400 transition",type:"submit",children:"Confirm"})]})]})})]})}function gr({email:n}){async function e(){n&&(await Lt(n),alert("Check your inbox."))}return u.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-green-800 hover:text-green-200 group",children:[u.jsx("h2",{className:"font-semibold md:text-xl text-base",children:"Password"}),u.jsx("p",{children:"The password to your account"}),u.jsx("div",{className:"mt-4 flex items-center",children:u.jsx("button",{onClick:()=>void e(),className:"hover:font-bold group-hover:text-green-400",children:"Send password reset link"})})]})}function Ir({user:n,setDisplayName:e}){const[t,r]=T.useState(0);return u.jsxs("div",{className:"basis-full md:p-4 p-2 box-border flex max-md:flex-col w-full md:gap-4 gap-2 md:text-base text-sm",children:[u.jsx("nav",{className:"md:basis-3/12 md:h-full shadow shadow-c9 md:rounded-l-xl rounded-t-xl md:rounded-r rounded-b box-border p-2 gap-2 flex md:flex-col",children:["Account","Other"].map((i,s)=>u.jsx(_r,{active:t,index:s,name:i,setActive:r},s))}),u.jsxs("div",{className:"md:basis-9/12 h-full shadow shadow-c9 md:rounded-r-xl rounded-t md:rounded-l rounded-b-xl box-border p-2 relative overflow-hidden",children:[u.jsx(Ge,{active:t,index:0,children:u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"font-bold md:text-3xl text-xl",children:"Account Settings"}),u.jsx("hr",{}),u.jsxs("div",{className:"flex flex-col w-full gap-4 mt-4",children:[u.jsx(Kt,{user:n,setNavDisplayName:e}),u.jsx(gr,{email:(n==null?void 0:n.email)??void 0}),u.jsx(mr,{user:n})]})]})}),u.jsx(Ge,{active:t,index:1,children:u.jsxs("div",{className:"w-full h-full flex flex-col",children:[u.jsx("h1",{className:"font-bold md:text-3xl text-xl shrink-0",children:"Other"}),u.jsx("hr",{}),u.jsx("div",{className:"flex flex-col w-full gap-4 mt-4 basis-full",children:u.jsx(Nr,{userEmail:(n==null?void 0:n.email)??void 0,displayName:(n==null?void 0:n.displayName)??void 0})})]})})]})]})}function _r({active:n,index:e,name:t,setActive:r}){const i=L({backgroundColor:n===e?"#0f172a":"#f1f5f9",color:n!==e?"#0f172a":"#f1f5f9"});return u.jsx(U.div,{className:"box-border cursor-pointer md:p-4 p-2 rounded-lg relative hover:font-bold",onClick:()=>r(e),style:i,children:t})}function Ge({active:n,index:e,children:t}){const r=n===e,i=L({opacity:r?1:0,delay:r?300:0,zIndex:r?5:0});return u.jsx(U.div,{style:i,className:"absolute w-full h-full box-border top-0 left-0 p-4",children:t})}const B={_origin:"https://api.emailjs.com"},yr=(n,e="https://api.emailjs.com")=>{B._userID=n,B._origin=e},vt=(n,e,t)=>{if(!n)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ze{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const mt=(n,e,t={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new ze(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new ze(o))}),s.open("POST",B._origin+n,!0),Object.keys(t).forEach(o=>{s.setRequestHeader(o,t[o])}),s.send(e)}),Tr=(n,e,t,r)=>{const i=r||B._userID;return vt(i,n,e),mt("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},wr=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},br=(n,e,t,r)=>{const i=r||B._userID,s=wr(t);vt(i,n,e);const o=new FormData(s);return o.append("lib_version","3.11.0"),o.append("service_id",n),o.append("template_id",e),o.append("user_id",i),mt("/api/v1.0/email/send-form",o)},kr={init:yr,send:Tr,sendForm:br};function Nr({userEmail:n,displayName:e}){const[t,r]=T.useState(""),[i,s]=T.useState(!1);async function o(a){a.preventDefault(),s(!0),n&&(await kr.send(se.serviceId,se.templateId,{userEmail:n,displayName:e??"User",message:t},se.publicKey),s(!1),r(""),alert("Sent! You should have received a carbon copy of your email. We will in touch with you ASAP"),console.log("sent"))}return u.jsxs("div",{className:"rounded-xl border border-c9 border-solid p-4 transition hover:bg-c8 hover:text-c2 group h-full flex flex-col",children:[u.jsx("h2",{className:"font-semibold md:text-xl text-base shrink-0",children:"Chat with the Dev"}),u.jsx("p",{className:"mb-4 shrink-0",children:"Unsatisfied with the app? Missing feature you want to add? Baffled by how good the editor looks? Bugs? Tell me what you want!"}),u.jsxs("form",{className:"basis-full flex flex-col gap-2",onSubmit:a=>void o(a),children:[u.jsx("label",{className:"h-full",children:u.jsx("textarea",{className:"w-full h-full resize-none outline-none text-c9 rounded-xl p-2 bg-slate-100 group-hover:bg-c1",value:t,onChange:a=>r(a.target.value)})}),u.jsx("div",{className:"flex justify-center",children:u.jsx("button",{className:"rounded-full bg-c9 text-c1 p-2 hover:text-c9 hover:bg-c1",children:i?"Sending":"Send"})})]})]})}function Cr(){var p,g;const n=Ut(),e=$e(),[t,r]=T.useState(""),[i,s]=T.useState(!1),[o,a]=T.useState(null),[c,f]=T.useState(0),{user:l}=T.useContext(Mt);return T.useEffect(()=>{l?(r(l.displayName??l.email??"User"),Dt(l.uid,I=>{a({user:l,schedules:I.val()})},"schedules")):n("/")},[l]),u.jsxs("section",{className:"w-[100dvw] h-[100dvh] relative overflow-x-hidden flex flex-col",children:[u.jsxs("nav",{className:"shrink-0 flex justify-between box-border p-1 h-20 w-full items-center bg-white",children:[u.jsx(G,{to:"",className:"h-20",children:u.jsx("img",{src:"/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-color-logo-2.png",className:"h-full aspect-[4/3] cursor-pointer"})}),u.jsxs("div",{className:"flex gap-4 items-center box-border pr-4",children:[u.jsx("p",{children:t}),u.jsx(Pr,{menuOpen:i,handleOnClick:()=>s(I=>!I)})]})]}),u.jsx(Er,{menuOpen:i,setMenuOpen:s}),e.pathname.includes("/settings")?u.jsx(Ir,{user:o==null?void 0:o.user,setDisplayName:r}):u.jsxs(u.Fragment,{children:[u.jsx(Rr,{}),u.jsx(Vt,{}),u.jsx(Wt,{}),u.jsx("div",{className:"shrink-0 flex justify-center box-border p-6 items-center",children:u.jsx("h1",{className:"font-bold md:text-4xl text-xl z-10 text-c1",children:"My Schedules"})}),u.jsxs("div",{className:"bg-c9 h-full box-border p-2 w-full md:grid flex flex-col md:grid-rows-6 md:grid-cols-9 gap-2 grow-0 absolute top-[100dvh]",id:"schedules",children:[u.jsx(Ft,{viewData:((g=(p=o==null?void 0:o.schedules)==null?void 0:p[c])==null?void 0:g.vData)??[],login:!0}),u.jsx(qt,{uid:o==null?void 0:o.user.uid,setIndex:f,viewData:o==null?void 0:o.schedules,currentIndex:c})]})]})]})}function Er({menuOpen:n,setMenuOpen:e}){const t=L({x:n?"-100%":"0%"}),r=$e();async function i(){await jt()}function s(){e(!1)}return u.jsxs(U.div,{className:"absolute top-20 left-full bg-c1 z-10 p-2 w-28",style:t,children:[r.pathname.includes("settings")?u.jsx(G,{to:"",children:u.jsx("p",{onClick:s,className:"hover:underline cursor-pointer",children:"Back"})}):u.jsx(G,{to:"settings",children:u.jsx("p",{onClick:s,className:"hover:underline cursor-pointer",children:"Settings"})}),u.jsx("p",{onClick:()=>void i(),className:"mt-2 hover:underline cursor-pointer",children:"Sign Out"})]})}function Pr({menuOpen:n,handleOnClick:e}){const i=["M1 20L100 20","M1 50L75 50","M1 80L50 80"],s=["M1 1L99 99","M1 99L99 1","M1 99L99 1"],o=L({d:n?s[0]:i[0]}),a=L({d:n?s[1]:i[1]}),c=L({d:n?s[2]:i[2]});return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"none",className:"h-10 aspect-square",onClick:e,children:[u.jsx(U.path,{d:o.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx(U.path,{d:a.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx(U.path,{d:c.d,stroke:"#33363F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Rr(){return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180 flex flex-col",children:[u.jsx("div",{className:"w-full h-10 bg-c1 order-1 relative bottom-0"}),u.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32 order-2 top-0",children:u.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c1"})})]}),u.jsxs("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180 flex flex-col",children:[u.jsx("div",{className:"w-full h-5 bg-c5 order-1 relative bottom-0"}),u.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32 order-2 top-0",children:u.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c5"})})]}),u.jsx("div",{className:"absolute bottom-0 left-0 w-full overflow-hidden rotate-180",children:u.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative block w-[calc(100%+1.3px)] h-32",children:u.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"fill-c9"})})})]})}export{Cr as default};
