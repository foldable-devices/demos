var Ur=Object.defineProperty;var Lr=(e,t,r)=>t in e?Ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var w=(e,t,r)=>(Lr(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=window,de=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sr=Symbol(),ye=new WeakMap;let Tr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(de&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=ye.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ye.set(r,t))}return t}toString(){return this.cssText}};const Or=e=>new Tr(typeof e=="string"?e:e+"",void 0,sr),Mr=(e,t)=>{de?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=vt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},_e=de?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Or(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lt;const mt=window,$e=mt.trustedTypes,zr=$e?$e.emptyScript:"",we=mt.reactiveElementPolyfillSupport,Gt={toAttribute(e,t){switch(t){case Boolean:e=e?zr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},nr=(e,t)=>t!==e&&(t==t||e==e),Tt={attribute:!0,type:String,converter:Gt,reflect:!1,hasChanged:nr};let Q=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,r=Tt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){const s=this[t];this[r]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Tt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(_e(i))}else t!==void 0&&r.push(_e(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mr(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=Tt){var i;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Gt).toAttribute(r,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,r){var o;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Gt;this._$El=s,this[s]=c.fromAttribute(r,n.type),this._$El=null}}requestUpdate(t,r,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||nr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Q.finalized=!0,Q.elementProperties=new Map,Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},we==null||we({ReactiveElement:Q}),((Lt=mt.reactiveElementVersions)!==null&&Lt!==void 0?Lt:mt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ot;const yt=window,D=yt.trustedTypes,Ae=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,ar="?"+k,Rr=`<${ar}>`,j=document,at=(e="")=>j.createComment(e),lt=e=>e===null||typeof e!="object"&&typeof e!="function",lr=Array.isArray,Nr=e=>lr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,Se=/>/g,T=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,Ce=/"/g,dr=/^(?:script|style|textarea|title)$/i,Ir=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Hr=Ir(1),V=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ke=new WeakMap,H=j.createTreeWalker(j,129,null,!1),Br=(e,t)=>{const r=e.length-1,o=[];let i,s=t===2?"<svg>":"",n=Y;for(let l=0;l<r;l++){const a=e[l];let h,d,u=-1,f=0;for(;f<a.length&&(n.lastIndex=f,d=n.exec(a),d!==null);)f=n.lastIndex,n===Y?d[1]==="!--"?n=Ee:d[1]!==void 0?n=Se:d[2]!==void 0?(dr.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=T):d[3]!==void 0&&(n=T):n===T?d[0]===">"?(n=i??Y,u=-1):d[1]===void 0?u=-2:(u=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?T:d[3]==='"'?Ce:xe):n===Ce||n===xe?n=T:n===Ee||n===Se?n=Y:(n=T,i=void 0);const m=n===T&&e[l+1].startsWith("/>")?" ":"";s+=n===Y?a+Rr:u>=0?(o.push(h),a.slice(0,u)+"$lit$"+a.slice(u)+k+m):a+k+(u===-2?(o.push(void 0),l):m)}const c=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ae!==void 0?Ae.createHTML(c):c,o]};let Xt=class cr{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const c=t.length-1,l=this.parts,[a,h]=Br(t,r);if(this.el=cr.createElement(a,o),H.currentNode=this.el.content,r===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(i=H.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(k)){const f=h[n++];if(d.push(u),f!==void 0){const m=i.getAttribute(f.toLowerCase()+"$lit$").split(k),C=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:C[2],strings:m,ctor:C[1]==="."?jr:C[1]==="?"?Fr:C[1]==="@"?Wr:St})}else l.push({type:6,index:s})}for(const u of d)i.removeAttribute(u)}if(dr.test(i.tagName)){const d=i.textContent.split(k),u=d.length-1;if(u>0){i.textContent=D?D.emptyScript:"";for(let f=0;f<u;f++)i.append(d[f],at()),H.nextNode(),l.push({type:2,index:++s});i.append(d[u],at())}}}else if(i.nodeType===8)if(i.data===ar)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(k,d+1))!==-1;)l.push({type:7,index:s}),d+=k.length-1}s++}}static createElement(t,r){const o=j.createElement("template");return o.innerHTML=t,o}};function F(e,t,r=e,o){var i,s,n,c;if(t===V)return t;let l=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl;const a=lt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(e),l._$AT(e,r,o)),o!==void 0?((n=(c=r)._$Co)!==null&&n!==void 0?n:c._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=F(e,l._$AS(e,t.values),l,o)),t}let Dr=class{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:o},parts:i}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:j).importNode(o,!0);H.currentNode=s;let n=H.nextNode(),c=0,l=0,a=i[0];for(;a!==void 0;){if(c===a.index){let h;a.type===2?h=new ce(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new qr(n,this,t)),this.u.push(h),a=i[++l]}c!==(a==null?void 0:a.index)&&(n=H.nextNode(),c++)}return s}p(t){let r=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},ce=class hr{constructor(t,r,o,i){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cm=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=F(this,t,r),lt(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==V&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nr(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==$&&lt(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){var r;const{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Xt.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.p(o);else{const n=new Dr(s,this),c=n.v(this.options);n.p(o),this.T(c),this._$AH=n}}_$AC(t){let r=ke.get(t.strings);return r===void 0&&ke.set(t.strings,r=new Xt(t)),r}k(t){lr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of t)i===r.length?r.push(o=new hr(this.O(at()),this.O(at()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},St=class{constructor(t,r,o,i,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)t=F(this,t,r,0),n=!lt(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const c=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=F(this,c[o+l],r,l),a===V&&(a=this._$AH[l]),n||(n=!lt(a)||a!==this._$AH[l]),a===$?t=$:t!==$&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},jr=class extends St{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}};const Vr=D?D.emptyScript:"";let Fr=class extends St{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,Vr):this.element.removeAttribute(this.name)}},Wr=class extends St{constructor(t,r,o,i,s){super(t,r,o,i,s),this.type=5}_$AI(t,r=this){var o;if((t=(o=F(this,t,r,0))!==null&&o!==void 0?o:$)===V)return;const i=this._$AH,s=t===$&&i!==$||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},qr=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};const Pe=yt.litHtmlPolyfillSupport;Pe==null||Pe(Xt,ce),((Ot=yt.litHtmlVersions)!==null&&Ot!==void 0?Ot:yt.litHtmlVersions=[]).push("2.6.1");const Kr=(e,t,r)=>{var o,i;const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const c=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new ce(t.insertBefore(at(),c),c,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=window,he=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),Ue=new WeakMap;let ur=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(he&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Ue.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ue.set(r,t))}return t}toString(){return this.cssText}};const Zr=e=>new ur(typeof e=="string"?e:e+"",void 0,ue),Jr=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new ur(r,e,ue)},Gr=(e,t)=>{he?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=ft.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Le=he?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Zr(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mt;const _t=window,Te=_t.trustedTypes,Xr=Te?Te.emptyScript:"",Oe=_t.reactiveElementPolyfillSupport,Qt={toAttribute(e,t){switch(t){case Boolean:e=e?Xr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pr=(e,t)=>t!==e&&(t==t||e==e),zt={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:pr};let R=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,r=zt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){const s=this[t];this[r]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(Le(i))}else t!==void 0&&r.push(Le(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gr(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=zt){var i;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Qt).toAttribute(r,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,r){var o;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Qt;this._$El=s,this[s]=c.fromAttribute(r,n.type),this._$El=null}}requestUpdate(t,r,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||pr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};R.finalized=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},Oe==null||Oe({ReactiveElement:R}),((Mt=_t.reactiveElementVersions)!==null&&Mt!==void 0?Mt:_t.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt,Nt;let it=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kr(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return V}};it.finalized=!0,it._$litElement$=!0,(Rt=globalThis.litElementHydrateSupport)===null||Rt===void 0||Rt.call(globalThis,{LitElement:it});const Me=globalThis.litElementPolyfillSupport;Me==null||Me({LitElement:it});((Nt=globalThis.litElementVersions)!==null&&Nt!==void 0?Nt:globalThis.litElementVersions=[]).push("3.2.2");try{self["workbox:window:6.5.3"]&&_()}catch{}function Yt(e,t){return new Promise(function(r){var o=new MessageChannel;o.port1.onmessage=function(i){r(i.data)},e.postMessage(t,[o.port2])})}function Qr(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function Yr(e,t){var r;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=function(i,s){if(i){if(typeof i=="string")return ze(i,s);var n=Object.prototype.toString.call(i).slice(8,-1);return n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set"?Array.from(i):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ze(i,s):void 0}}(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch{}var It=function(){var e=this;this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})};function Ht(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var tt=function(e,t){this.type=e,Object.assign(this,t)};function ut(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function to(){}var eo={type:"SKIP_WAITING"};function Re(e,t){if(!t)return e&&e.then?e.then(to):Promise.resolve()}var ro=function(e){var t,r;function o(c,l){var a,h;return l===void 0&&(l={}),(a=e.call(this)||this).nn={},a.tn=0,a.rn=new It,a.en=new It,a.on=new It,a.un=0,a.an=new Set,a.cn=function(){var d=a.fn,u=d.installing;a.tn>0||!Ht(u.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=u,d.removeEventListener("updatefound",a.cn)):(a.hn=u,a.an.add(u),a.rn.resolve(u)),++a.tn,u.addEventListener("statechange",a.ln)},a.ln=function(d){var u=a.fn,f=d.target,m=f.state,C=f===a.vn,Ut={sw:f,isExternal:C,originalEvent:d};!C&&a.mn&&(Ut.isUpdate=!0),a.dispatchEvent(new tt(m,Ut)),m==="installed"?a.wn=self.setTimeout(function(){m==="installed"&&u.waiting===f&&a.dispatchEvent(new tt("waiting",Ut))},200):m==="activating"&&(clearTimeout(a.wn),C||a.en.resolve(f))},a.dn=function(d){var u=a.hn,f=u!==navigator.serviceWorker.controller;a.dispatchEvent(new tt("controlling",{isExternal:f,originalEvent:d,sw:u,isUpdate:a.mn})),f||a.on.resolve(u)},a.gn=(h=function(d){var u=d.data,f=d.ports,m=d.source;return ut(a.getSW(),function(){a.an.has(m)&&a.dispatchEvent(new tt("message",{data:u,originalEvent:d,ports:f,sw:m}))})},function(){for(var d=[],u=0;u<arguments.length;u++)d[u]=arguments[u];try{return Promise.resolve(h.apply(this,d))}catch(f){return Promise.reject(f)}}),a.sn=c,a.nn=l,navigator.serviceWorker.addEventListener("message",a.gn),a}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i,s,n=o.prototype;return n.register=function(c){var l=(c===void 0?{}:c).immediate,a=l!==void 0&&l;try{var h=this;return function(d,u){var f=d();return f&&f.then?f.then(u):u(f)}(function(){if(!a&&document.readyState!=="complete")return Re(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return h.mn=Boolean(navigator.serviceWorker.controller),h.yn=h.pn(),ut(h.bn(),function(d){h.fn=d,h.yn&&(h.hn=h.yn,h.en.resolve(h.yn),h.on.resolve(h.yn),h.yn.addEventListener("statechange",h.ln,{once:!0}));var u=h.fn.waiting;return u&&Ht(u.scriptURL,h.sn.toString())&&(h.hn=u,Promise.resolve().then(function(){h.dispatchEvent(new tt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),h.hn&&(h.rn.resolve(h.hn),h.an.add(h.hn)),h.fn.addEventListener("updatefound",h.cn),navigator.serviceWorker.addEventListener("controllerchange",h.dn),h.fn})})}catch(d){return Promise.reject(d)}},n.update=function(){try{return this.fn?Re(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(c){try{return ut(this.getSW(),function(l){return Yt(l,c)})}catch(l){return Promise.reject(l)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Yt(this.fn.waiting,eo)},n.pn=function(){var c=navigator.serviceWorker.controller;return c&&Ht(c.scriptURL,this.sn.toString())?c:void 0},n.bn=function(){try{var c=this;return function(l,a){try{var h=l()}catch(d){return a(d)}return h&&h.then?h.then(void 0,a):h}(function(){return ut(navigator.serviceWorker.register(c.sn,c.nn),function(l){return c.un=performance.now(),l})},function(l){throw l})}catch(l){return Promise.reject(l)}},i=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Qr(i.prototype,s),o}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(r,o){this.Sn(r).add(o)},t.removeEventListener=function(r,o){this.Sn(r).delete(o)},t.dispatchEvent=function(r){r.target=this;for(var o,i=Yr(this.Sn(r.type));!(o=i()).done;)(0,o.value)(r)},t.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},e}());var bt=window,pe=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),Ne=new WeakMap,vr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(pe&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Ne.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ne.set(r,t))}return t}toString(){return this.cssText}},oo=e=>new vr(typeof e=="string"?e:e+"",void 0,ve),M=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new vr(r,e,ve)},io=(e,t)=>{pe?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=bt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Ie=pe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return oo(r)})(e):e,Bt,$t=window,He=$t.trustedTypes,so=He?He.emptyScript:"",Be=$t.reactiveElementPolyfillSupport,te={toAttribute(e,t){switch(t){case Boolean:e=e?so:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},fr=(e,t)=>t!==e&&(t==t||e==e),Dt={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:fr},N=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Ep(r,t);o!==void 0&&(this._$Ev.set(o,r),e.push(o))}),e}static createProperty(e,t=Dt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Ie(o))}else e!==void 0&&t.push(Ie(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return io(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Dt){var o;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:te).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var r;const o=this.constructor,i=o._$Ev.get(e);if(i!==void 0&&this._$El!==i){const s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:te;this._$El=i,this[i]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||fr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};N.finalized=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},Be==null||Be({ReactiveElement:N}),((Bt=$t.reactiveElementVersions)!==null&&Bt!==void 0?Bt:$t.reactiveElementVersions=[]).push("1.6.1");var jt,wt=window,W=wt.trustedTypes,De=W?W.createPolicy("lit-html",{createHTML:e=>e}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,br="?"+P,no=`<${br}>`,q=document,dt=(e="")=>q.createComment(e),ct=e=>e===null||typeof e!="object"&&typeof e!="function",gr=Array.isArray,ao=e=>gr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Ve=/>/g,O=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fe=/'/g,We=/"/g,mr=/^(?:script|style|textarea|title)$/i,lo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),K=lo(1),U=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),qe=new WeakMap,B=q.createTreeWalker(q,129,null,!1),co=(e,t)=>{const r=e.length-1,o=[];let i,s=t===2?"<svg>":"",n=et;for(let l=0;l<r;l++){const a=e[l];let h,d,u=-1,f=0;for(;f<a.length&&(n.lastIndex=f,d=n.exec(a),d!==null);)f=n.lastIndex,n===et?d[1]==="!--"?n=je:d[1]!==void 0?n=Ve:d[2]!==void 0?(mr.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=O):d[3]!==void 0&&(n=O):n===O?d[0]===">"?(n=i??et,u=-1):d[1]===void 0?u=-2:(u=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?O:d[3]==='"'?We:Fe):n===We||n===Fe?n=O:n===je||n===Ve?n=et:(n=O,i=void 0);const m=n===O&&e[l+1].startsWith("/>")?" ":"";s+=n===et?a+no:u>=0?(o.push(h),a.slice(0,u)+"$lit$"+a.slice(u)+P+m):a+P+(u===-2?(o.push(void 0),l):m)}const c=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[De!==void 0?De.createHTML(c):c,o]},At=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0;const n=e.length-1,c=this.parts,[l,a]=co(e,t);if(this.el=At.createElement(l,r),B.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=B.nextNode())!==null&&c.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(P)){const u=a[s++];if(h.push(d),u!==void 0){const f=o.getAttribute(u.toLowerCase()+"$lit$").split(P),m=/([.?@])?(.*)/.exec(u);c.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?uo:m[1]==="?"?vo:m[1]==="@"?fo:Ct})}else c.push({type:6,index:i})}for(const d of h)o.removeAttribute(d)}if(mr.test(o.tagName)){const h=o.textContent.split(P),d=h.length-1;if(d>0){o.textContent=W?W.emptyScript:"";for(let u=0;u<d;u++)o.append(h[u],dt()),B.nextNode(),c.push({type:2,index:++i});o.append(h[d],dt())}}}else if(o.nodeType===8)if(o.data===br)c.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(P,h+1))!==-1;)c.push({type:7,index:i}),h+=P.length-1}i++}}static createElement(e,t){const r=q.createElement("template");return r.innerHTML=e,r}};function Z(e,t,r=e,o){var i,s,n,c;if(t===U)return t;let l=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl;const a=ct(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(e),l._$AT(e,r,o)),o!==void 0?((n=(c=r)._$Co)!==null&&n!==void 0?n:c._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=Z(e,l._$AS(e,t.values),l,o)),t}var ho=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:o}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:q).importNode(r,!0);B.currentNode=i;let s=B.nextNode(),n=0,c=0,l=o[0];for(;l!==void 0;){if(n===l.index){let a;l.type===2?a=new xt(s,s.nextSibling,this,e):l.type===1?a=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(a=new bo(s,this,e)),this.u.push(a),l=o[++c]}n!==(l==null?void 0:l.index)&&(s=B.nextNode(),n++)}return i}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},xt=class{constructor(e,t,r,o){var i;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cm=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ct(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==U&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ao(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==g&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=At.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.p(r);else{const s=new ho(i,this),n=s.v(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let t=qe.get(e.strings);return t===void 0&&qe.set(e.strings,t=new At(e)),t}k(e){gr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new xt(this.O(dt()),this.O(dt()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ct=class{constructor(e,t,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let s=!1;if(i===void 0)e=Z(this,e,t,0),s=!ct(e)||e!==this._$AH&&e!==U,s&&(this._$AH=e);else{const n=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=Z(this,n[r+c],t,c),l===U&&(l=this._$AH[c]),s||(s=!ct(l)||l!==this._$AH[c]),l===g?e=g:e!==g&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},uo=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},po=W?W.emptyScript:"",vo=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,po):this.element.removeAttribute(this.name)}},fo=class extends Ct{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!==null&&r!==void 0?r:g)===U)return;const o=this._$AH,i=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==g&&(o===g||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},bo=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}},Ke=wt.litHtmlPolyfillSupport;Ke==null||Ke(At,xt),((jt=wt.litHtmlVersions)!==null&&jt!==void 0?jt:wt.litHtmlVersions=[]).push("2.6.1");var go=(e,t,r)=>{var o,i;const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const c=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new xt(t.insertBefore(dt(),c),c,void 0,r??{})}return n._$AI(e),n},Vt,Ft,st=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=go(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return U}};st.finalized=!0,st._$litElement$=!0,(Vt=globalThis.litElementHydrateSupport)===null||Vt===void 0||Vt.call(globalThis,{LitElement:st});var Ze=globalThis.litElementPolyfillSupport;Ze==null||Ze({LitElement:st});((Ft=globalThis.litElementVersions)!==null&&Ft!==void 0?Ft:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var J=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,mo=M`
  ${J}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,fe=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},yr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_r=e=>(...t)=>({_$litDirective$:e,values:t}),$r=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var kt=_r(class extends $r{constructor(e){var t;if(super(e),e.type!==yr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(t)}const i=e.element.classList;this.nt.forEach(s=>{s in t||(i.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(i.add(s),this.nt.add(s)):(i.remove(s),this.nt.delete(s)))}return U}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var wr=Object.defineProperty,yo=Object.defineProperties,_o=Object.getOwnPropertyDescriptor,$o=Object.getOwnPropertyDescriptors,Je=Object.getOwnPropertySymbols,wo=Object.prototype.hasOwnProperty,Ao=Object.prototype.propertyIsEnumerable,Ge=(e,t,r)=>t in e?wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))wo.call(t,r)&&Ge(e,r,t[r]);if(Je)for(var r of Je(t))Ao.call(t,r)&&Ge(e,r,t[r]);return e},G=(e,t)=>yo(e,$o(t)),p=(e,t,r,o)=>{for(var i=o>1?void 0:o?_o(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&wr(t,r,i),i},X=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(r,n)}}})(e,t),Eo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?G(x({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function v(e){return(t,r)=>r!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(e,t,r):Eo(e,t)}function Pt(e){return v(G(x({},e),{state:!0}))}var So=({finisher:e,descriptor:t})=>(r,o)=>{var i;if(o===void 0){const s=(i=r.originalKey)!==null&&i!==void 0?i:r.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(r.key)}:G(x({},r),{key:s});return e!=null&&(n.finisher=function(c){e(c,s)}),n}{const s=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(s,o)}};function be(e,t){return So({descriptor:r=>{const o={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var s,n;return this[i]===void 0&&(this[i]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[i]}}return o}})}var Wt;((Wt=window.HTMLSlotElement)===null||Wt===void 0?void 0:Wt.prototype.assignedElements)!=null;var L=class extends st{emit(e,t){const r=new CustomEvent(e,x({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};p([v()],L.prototype,"dir",2);p([v()],L.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ee=class extends L{constructor(){super(...arguments),this.hasSlotController=new fe(this,"footer","header","image")}render(){return K`
      <div
        part="base"
        class=${kt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ee.styles=mo;ee=p([X("sl-card")],ee);var re="";function oe(e){re=e}function xo(){if(!re){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)oe(t.getAttribute("data-shoelace"));else{const r=e.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),oe(o.split("/").slice(0,-1).join("/"))}}return re.replace(/\/$/,"")}var Co={name:"default",resolver:e=>`${xo()}/assets/icons/${e}.svg`},ko=Co,Xe={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Po={name:"system",resolver:e=>e in Xe?`data:image/svg+xml,${encodeURIComponent(Xe[e])}`:""},Uo=Po,Lo=[ko,Uo],ie=[];function To(e){ie.push(e)}function Oo(e){ie=ie.filter(t=>t!==e)}function Qe(e){return Lo.find(t=>t.name===e)}var qt=new Map;function Mo(e,t="cors"){if(qt.has(e))return qt.get(e);const r=fetch(e,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return qt.set(e,r),r}var Kt=new Map;async function zo(e){if(Kt.has(e))return Kt.get(e);const t=await Mo(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const i=o.firstElementChild;r.svg=(i==null?void 0:i.tagName.toLowerCase())==="svg"?i.outerHTML:""}return Kt.set(e,r),r}var Ro=M`
  ${J}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function ht(e,t){const r=x({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(c){n.forEach(l=>{const a=l;if(c.has(a)){const h=c.get(a),d=this[a];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,d)}}),s.call(this,c)}}}var se=class extends $r{constructor(e){if(super(e),this.it=g,e.type!==yr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===U)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};se.directiveName="unsafeHTML",se.resultType=1;var ne=class extends se{};ne.directiveName="unsafeSVG",ne.resultType=2;var No=_r(ne),Zt,E=class extends L{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),To(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Oo(this)}getUrl(){const e=Qe(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Qe(this.library),r=this.getUrl();if(Zt||(Zt=new DOMParser),r)try{const o=await zo(r);if(r!==this.getUrl())return;if(o.ok){const s=Zt.parseFromString(o.svg,"text/html").body.querySelector("svg");s!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return K` ${No(this.svg)} `}};E.styles=Ro;p([Pt()],E.prototype,"svg",2);p([v({reflect:!0})],E.prototype,"name",2);p([v()],E.prototype,"src",2);p([v()],E.prototype,"label",2);p([v({reflect:!0})],E.prototype,"library",2);p([ht("label")],E.prototype,"handleLabelChange",1);p([ht(["name","src","library"])],E.prototype,"setIcon",1);E=p([X("sl-icon")],E);/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function Ye(e,t){return new Promise(r=>{function o(i){i.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function tr(e,t,r){return new Promise(o=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,G(x({},r),{duration:Io()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function Io(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function er(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const o=requestAnimationFrame(r);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}var Ar=new Map,Ho=new WeakMap;function Bo(e){return e??{keyframes:[],options:{duration:0}}}function rr(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Er(e,t){Ar.set(e,Bo(t))}function or(e,t,r){const o=Ho.get(e);if(o!=null&&o[t])return rr(o[t],r.dir);const i=Ar.get(t);return i?rr(i,r.dir):{keyframes:[],options:{duration:0}}}var ae=new Set,Do=new MutationObserver(Cr),I=new Map,Sr=document.documentElement.dir||"ltr",xr=document.documentElement.lang||navigator.language,nt;Do.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function jo(...e){e.map(t=>{const r=t.$code.toLowerCase();I.has(r)?I.set(r,Object.assign(Object.assign({},I.get(r)),t)):I.set(r,t),nt||(nt=t)}),Cr()}function Cr(){Sr=document.documentElement.dir||"ltr",xr=document.documentElement.lang||navigator.language,[...ae.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Vo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ae.add(this.host)}hostDisconnected(){ae.delete(this.host)}dir(){return`${this.host.dir||Sr}`.toLowerCase()}lang(){return`${this.host.lang||xr}`.toLowerCase()}term(e,...t){var r,o;const i=new Intl.Locale(this.lang()),s=i==null?void 0:i.language.toLowerCase(),n=(o=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",c=I.get(`${s}-${n}`),l=I.get(s);let a;if(c&&c[e])a=c[e];else if(l&&l[e])a=l[e];else if(nt&&nt[e])a=nt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},ge=class extends Vo{},Fo={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};jo(Fo);var Wo=M`
  ${J}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,z=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),S=class extends L{constructor(){super(...arguments),this.hasSlotController=new fe(this,"icon","suffix"),this.localize=new ge(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await er(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=or(this,"alert.show",{dir:this.localize.dir()});await tr(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await er(this.base);const{keyframes:e,options:t}=or(this,"alert.hide",{dir:this.localize.dir()});await tr(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ye(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ye(this,"sl-after-hide")}async toast(){return new Promise(e=>{z.parentElement===null&&document.body.append(z),z.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{z.removeChild(this),e(),z.querySelector("sl-alert")===null&&z.remove()},{once:!0})})}render(){return K`
      <div
        part="base"
        class=${kt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?K`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};S.styles=Wo;p([be('[part~="base"]')],S.prototype,"base",2);p([v({type:Boolean,reflect:!0})],S.prototype,"open",2);p([v({type:Boolean,reflect:!0})],S.prototype,"closable",2);p([v({reflect:!0})],S.prototype,"variant",2);p([v({type:Number})],S.prototype,"duration",2);p([ht("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);p([ht("duration")],S.prototype,"handleDurationChange",1);S=p([X("sl-alert")],S);Er("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Er("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var qo=M`
  ${J}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,kr=Symbol.for(""),Ko=e=>{if((e==null?void 0:e.r)===kr)return e==null?void 0:e._$litStatic$},Et=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:kr}),ir=new Map,Zo=e=>(t,...r)=>{const o=r.length;let i,s;const n=[],c=[];let l,a=0,h=!1;for(;a<o;){for(l=t[a];a<o&&(s=r[a],(i=Ko(s))!==void 0);)l+=i+t[++a],h=!0;c.push(s),n.push(l),a++}if(a===o&&n.push(t[o]),h){const d=n.join("$$lit$$");(t=ir.get(d))===void 0&&(n.raw=n,ir.set(d,t=n)),r=c}return e(t,...r)},gt=Zo(K);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var y=e=>e??g;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var A=class extends L{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Et`a`:Et`button`;return gt`
      <${t}
        part="base"
        class=${kt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:"button")}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e&&this.target?"noreferrer noopener":void 0)}
        role=${y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${y(this.name)}
          library=${y(this.library)}
          src=${y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};A.styles=qo;p([be(".icon-button")],A.prototype,"button",2);p([Pt()],A.prototype,"hasFocus",2);p([v()],A.prototype,"name",2);p([v()],A.prototype,"library",2);p([v()],A.prototype,"src",2);p([v()],A.prototype,"href",2);p([v()],A.prototype,"target",2);p([v()],A.prototype,"download",2);p([v()],A.prototype,"label",2);p([v({type:Boolean,reflect:!0})],A.prototype,"disabled",2);A=p([X("sl-icon-button")],A);var Jo=M`
  ${J}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,rt=new WeakMap,ot=new WeakMap,Jt=new Set,pt=new WeakMap,Go=class{constructor(e,t){(this.host=e).addController(this),this.options=x({form:r=>{if(r.hasAttribute("form")&&r.getAttribute("form")!==""){const o=r.getRootNode(),i=r.getAttribute("form");if(i)return o.getElementById(i)}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),pt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),pt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,rt.has(this.form)?rt.get(this.form).add(this.host):rt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ot.has(this.form)||(ot.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=rt.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ot.has(this.form)&&(this.form.reportValidity=ot.get(this.form),ot.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";!t&&!i&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(r,s.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=rt.get(this.form))==null||t.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),pt.set(this.host,[])}handleInteraction(e){const t=pt.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){t?Jt.add(e):Jt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=Boolean(Jt.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},me=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(G(x({},me),{valid:!1,valueMissing:!0}));Object.freeze(G(x({},me),{valid:!1,customError:!0}));var b=class extends L{constructor(){super(...arguments),this.formControlController=new Go(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new fe(this,"[default]","prefix","suffix"),this.localize=new ge(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:me}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Et`a`:Et`button`;return gt`
      <${t}
        part="base"
        class=${kt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:this.type)}
        title=${this.title}
        name=${y(e?void 0:this.name)}
        value=${y(e?void 0:this.value)}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e?this.rel:void 0)}
        role=${y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?gt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?gt`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};b.styles=Jo;p([be(".button")],b.prototype,"button",2);p([Pt()],b.prototype,"hasFocus",2);p([Pt()],b.prototype,"invalid",2);p([v()],b.prototype,"title",2);p([v({reflect:!0})],b.prototype,"variant",2);p([v({reflect:!0})],b.prototype,"size",2);p([v({type:Boolean,reflect:!0})],b.prototype,"caret",2);p([v({type:Boolean,reflect:!0})],b.prototype,"disabled",2);p([v({type:Boolean,reflect:!0})],b.prototype,"loading",2);p([v({type:Boolean,reflect:!0})],b.prototype,"outline",2);p([v({type:Boolean,reflect:!0})],b.prototype,"pill",2);p([v({type:Boolean,reflect:!0})],b.prototype,"circle",2);p([v()],b.prototype,"type",2);p([v()],b.prototype,"name",2);p([v()],b.prototype,"value",2);p([v()],b.prototype,"href",2);p([v()],b.prototype,"target",2);p([v()],b.prototype,"rel",2);p([v()],b.prototype,"download",2);p([v()],b.prototype,"form",2);p([v({attribute:"formaction"})],b.prototype,"formAction",2);p([v({attribute:"formenctype"})],b.prototype,"formEnctype",2);p([v({attribute:"formmethod"})],b.prototype,"formMethod",2);p([v({attribute:"formnovalidate",type:Boolean})],b.prototype,"formNoValidate",2);p([v({attribute:"formtarget"})],b.prototype,"formTarget",2);p([ht("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1);b=p([X("sl-button")],b);var Xo=M`
  ${J}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,le=class extends L{constructor(){super(...arguments),this.localize=new ge(this)}render(){return K`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};le.styles=Xo;le=p([X("sl-spinner")],le);oe("/demos/simple/");class Pr extends it{constructor(){super();w(this,"_swAlert");w(this,"_wb");w(this,"_wbRegistration");w(this,"_segmentContainer");w(this,"_col1");w(this,"_col1Text");w(this,"_col2");w(this,"_col2Text");w(this,"_cardText");w(this,"_foldedImage");w(this,"_continuousImage");w(this,"_colors",["blue","green","yellow","pink","red"])}static get properties(){return{currentTime:{type:String}}}set currentTime(r){let o=this._currentTime;this._currentTime=r,this.requestUpdate("currentTime",o)}get currentTime(){return this._currentTime}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._segmentContainer=this.shadowRoot.querySelector("#segment-container"),this._col1=this.shadowRoot.querySelector("#col1"),this._col1Text=this.shadowRoot.querySelector("#col1-text"),this._col2=this.shadowRoot.querySelector("#col1"),this._col2Text=this.shadowRoot.querySelector("#col2-text"),this._cardText=this.shadowRoot.querySelector("#card-text"),this._continuousImage=this.shadowRoot.querySelector("#continuous-image"),this._foldedImage=this.shadowRoot.querySelector("#folded-image"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new ro("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()});let r=window.matchMedia("(horizontal-viewport-segments: 2)");r.addEventListener("change",()=>this._viewportSegmentsEnabled),r.matches&&this._viewportSegmentsEnabled(),r=window.matchMedia("(vertical-viewport-segments: 2)"),r.addEventListener("change",()=>this._viewportSegmentsEnabled),r.matches&&this._viewportSegmentsEnabled(),navigator.devicePosture!=null?(console.log("Posture at page load : "+navigator.devicePosture.type),this._cardText.innerHTML=navigator.devicePosture.type,this._showDevicePostureImage(navigator.devicePosture.type),navigator.devicePosture.onchange=()=>{this._cardText.innerHTML=navigator.devicePosture.type,this._showDevicePostureImage(navigator.devicePosture.type)}):(this._cardText.innerHTML="Not supported by browser.",this._showDevicePostureImage())}_showDevicePostureImage(r){r==="continuous"?(this._foldedImage.style.display="none",this._continuousImage.style.display="block"):r==="folded"?(this._foldedImage.style.display="block",this._continuousImage.style.display="none"):(this._foldedImage.style.display="none",this._continuousImage.style.display="none")}_viewportSegmentsEnabled(){let r=getComputedStyle(this._col1),o=getComputedStyle(this._col2);this._col1Text.innerHTML="Viewport Segment #1 <br> Dimensions: "+r.width+" - "+r.height,this._col2Text.innerHTML="Viewport Segment #2 <br> Dimensions: "+o.width+" - "+o.height}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Yt(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}render(){return Hr`
      <sl-card class="posture-header">
        <img
          slot="image"
          src="images/folded-posture.svg"
          id="folded-image"
          alt="A picture showing a foldable device folded."
        />
        <img
          slot="image"
          src="images/continuous-posture.svg"
          alt="A picture showing a flat device like a tablet."
          id="continuous-image"
        />
        The current posture of the device is : 
        <div id="card-text"></div>
      </sl-card>
      <div id="segment-css-container">
        <div class="not-supported"> CSS Viewport Segments and Device Posture APIs are not supported in this browser.</div>
        <div id="col1">
          <div id="col1-text" class="segment-text"></div>
        </div>
        <div id="col2">
          <div id="col2-text" class="segment-text"></div>
        </div>
      </div>
      <div class="alert-sw">
        <sl-alert id="sw-alert" variant="primary" closable duration="10000">
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <div class="text-sw">
            <strong>A newer version of the application is available</strong>
          </div>
          Please reload to update: 
          <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
        </sl-alert>
      </div>
    `}}w(Pr,"styles",Jr`
    :host {
      width: 100vw;
      height: 100vh;
      color: black;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .alert-sw {
      position: absolute;
      bottom: 3vh;
      right: 1vw;
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }

    .posture-header {
      position: absolute;
      top: calc(50vh - 200px);
      width: 400px;
      left: calc(25vw - 200px);
      display: none;
    }

    .posture-header [slot='image'] {
      margin: 10px;
    }

    #segment-css-container {
        display: flex;
        height: 100%;
        width: 100%;
        background-color: black;
    }

    .not-supported {
      background-color: black;
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    #card-text {
      display: inline;
      font-weight: bold;
    }

    #col1 {
      flex: 0 0 200px;
      transition: background-color .2s linear;
      align-items: top;
      display: flex;
      justify-content: center;
    }

    #col2 {
      flex: 1;
      transition: background-color .2s linear;
      align-items: top;
      display: flex;
      justify-content: center;
    }

    .segment-text {
      margin: 20px;
      padding: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      background-color: white;
      height: 5%;
      border-radius: 20px;
      line-height: 30px;
      text-align: center;
      display: none;
    }

    @media(device-posture: continuous) {
      .not-supported {
        display: none;
      }

      #col1 {
        display: none;
      }

      #col2 {
        display: none;
      }

      .posture-header {
        top: calc(50vh - 200px);
        left: calc(50vw - 200px);
        display: block;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      .not-supported {
        display: none;
      }

      #col1 {
        display: flex;
        flex: 0 0 env(viewport-segment-right 0 0);
        margin-right: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        background-color: steelblue;
      }

      #col2 {
        display: flex;
        background-color: green;
      }

      .segment-text {
        display: block;
      }

      .posture-header {
        top: calc(50vh - 200px);
        left: calc(25vw - 200px);
        display: block;
      }
    }

    @media (vertical-viewport-segments: 2) {
      .not-supported {
        display: none;
      }

      .segment-text {
        height: 10%;
      }

      #segment-css-container {
        flex-direction: column;
      }

      #col1 {
        display: flex;
        flex: 0 0 env(viewport-segment-bottom 0 0);
        margin-bottom: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        background-color: pink;
      }

      #col2 {
        display: flex;
        background-color: seagreen;
      }

      .segment-text {
        display: block;
      }

      .posture-header {
        top: calc(25vh - 200px);
        left: calc(50vw - 200px);
        display: block;
      }
    }
  `);customElements.define("main-application",Pr);
