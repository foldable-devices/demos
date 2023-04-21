var Tr=Object.defineProperty;var Rr=(i,t,e)=>t in i?Tr(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var p=(i,t,e)=>(Rr(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=window,Fi=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Is=Symbol(),ho=new WeakMap;let Or=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Is)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Fi&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=ho.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ho.set(e,t))}return t}toString(){return this.cssText}};const Ur=i=>new Or(typeof i=="string"?i:i+"",void 0,Is),Mr=(i,t)=>{Fi?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),s=ge.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)})},co=Fi?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Ur(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const $e=window,uo=$e.trustedTypes,Lr=uo?uo.emptyScript:"",po=$e.reactiveElementPolyfillSupport,xi={toAttribute(i,t){switch(t){case Boolean:i=i?Lr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ns=(i,t)=>t!==i&&(t==t||i==i),je={attribute:!0,type:String,converter:xi,reflect:!1,hasChanged:Ns};let Vt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const s=this._$Ep(o,e);s!==void 0&&(this._$Ev.set(s,o),t.push(s))}),t}static createProperty(t,e=je){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||je}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of o)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(co(s))}else t!==void 0&&e.push(co(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mr(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=je){var s;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:xi).toAttribute(e,o.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:xi;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Ns)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(o)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Vt.finalized=!0,Vt.elementProperties=new Map,Vt.elementStyles=[],Vt.shadowRootOptions={mode:"open"},po==null||po({ReactiveElement:Vt}),((De=$e.reactiveElementVersions)!==null&&De!==void 0?De:$e.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe;const Se=window,_t=Se.trustedTypes,vo=_t?_t.createPolicy("lit-html",{createHTML:i=>i}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,Hs="?"+G,Vr=`<${Hs}>`,bt=document,te=(i="")=>bt.createComment(i),ee=i=>i===null||typeof i!="object"&&typeof i!="function",Bs=Array.isArray,Ir=i=>Bs(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,go=/>/g,Q=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fo=/'/g,_o=/"/g,Ds=/^(?:script|style|textarea|title)$/i,Nr=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),js=Nr(1),yt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),bo=new WeakMap,ut=bt.createTreeWalker(bt,129,null,!1),Hr=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":"",n=It;for(let a=0;a<e;a++){const l=i[a];let d,c,u=-1,v=0;for(;v<l.length&&(n.lastIndex=v,c=n.exec(l),c!==null);)v=n.lastIndex,n===It?c[1]==="!--"?n=mo:c[1]!==void 0?n=go:c[2]!==void 0?(Ds.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=Q):c[3]!==void 0&&(n=Q):n===Q?c[0]===">"?(n=s??It,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?Q:c[3]==='"'?_o:fo):n===_o||n===fo?n=Q:n===mo||n===go?n=It:(n=Q,s=void 0);const b=n===Q&&i[a+1].startsWith("/>")?" ":"";r+=n===It?l+Vr:u>=0?(o.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+G+b):l+G+(u===-2?(o.push(void 0),a):b)}const h=r+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vo!==void 0?vo.createHTML(h):h,o]};let Ai=class Fs{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Hr(t,e);if(this.el=Fs.createElement(l,o),ut.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=ut.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(G)){const v=d[n++];if(c.push(u),v!==void 0){const b=s.getAttribute(v.toLowerCase()+"$lit$").split(G),f=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:f[2],strings:b,ctor:f[1]==="."?Dr:f[1]==="?"?Fr:f[1]==="@"?Wr:Me})}else a.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Ds.test(s.tagName)){const c=s.textContent.split(G),u=c.length-1;if(u>0){s.textContent=_t?_t.emptyScript:"";for(let v=0;v<u;v++)s.append(c[v],te()),ut.nextNode(),a.push({type:2,index:++r});s.append(c[u],te())}}}else if(s.nodeType===8)if(s.data===Hs)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(G,c+1))!==-1;)a.push({type:7,index:r}),c+=G.length-1}r++}}static createElement(t,e){const o=bt.createElement("template");return o.innerHTML=t,o}};function wt(i,t,e=i,o){var s,r,n,h;if(t===yt)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=ee(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=wt(i,a._$AS(i,t.values),a,o)),t}let Br=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:bt).importNode(o,!0);ut.currentNode=r;let n=ut.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Wi(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new qr(n,this,t)),this.u.push(d),l=s[++a]}h!==(l==null?void 0:l.index)&&(n=ut.nextNode(),h++)}return r}p(t){let e=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},Wi=class Ws{constructor(t,e,o,s){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wt(this,t,e),ee(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==yt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ir(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ai.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new Br(r,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let e=bo.get(t.strings);return e===void 0&&bo.set(t.strings,e=new Ai(t)),e}k(t){Bs(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new Ws(this.O(te()),this.O(te()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Me=class{constructor(t,e,o,s,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,s){const r=this.strings;let n=!1;if(r===void 0)t=wt(this,t,e,0),n=!ee(t)||t!==this._$AH&&t!==yt,n&&(this._$AH=t);else{const h=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=wt(this,h[o+a],e,a),l===yt&&(l=this._$AH[a]),n||(n=!ee(l)||l!==this._$AH[a]),l===T?t=T:t!==T&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!s&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Dr=class extends Me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}};const jr=_t?_t.emptyScript:"";let Fr=class extends Me{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,jr):this.element.removeAttribute(this.name)}},Wr=class extends Me{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=wt(this,t,e,0))!==null&&o!==void 0?o:T)===yt)return;const s=this._$AH,r=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==T&&(s===T||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},qr=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}};const yo=Se.litHtmlPolyfillSupport;yo==null||yo(Ai,Wi),((Fe=Se.litHtmlVersions)!==null&&Fe!==void 0?Fe:Se.litHtmlVersions=[]).push("2.6.1");const Yr=(i,t,e)=>{var o,s;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let n=r._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new Wi(t.insertBefore(te(),h),h,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=window,qi=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yi=Symbol(),wo=new WeakMap;let qs=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Yi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(qi&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=wo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&wo.set(e,t))}return t}toString(){return this.cssText}};const Kr=i=>new qs(typeof i=="string"?i:i+"",void 0,Yi),Ys=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new qs(e,i,Yi)},Gr=(i,t)=>{qi?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),s=fe.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)})},$o=qi?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Kr(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We;const xe=window,So=xe.trustedTypes,Xr=So?So.emptyScript:"",xo=xe.reactiveElementPolyfillSupport,Ci={toAttribute(i,t){switch(t){case Boolean:i=i?Xr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ks=(i,t)=>t!==i&&(t==t||i==i),qe={attribute:!0,type:String,converter:Ci,reflect:!1,hasChanged:Ks};let nt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const s=this._$Ep(o,e);s!==void 0&&(this._$Ev.set(s,o),t.push(s))}),t}static createProperty(t,e=qe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of o)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift($o(s))}else t!==void 0&&e.push($o(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gr(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=qe){var s;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:Ci).toAttribute(e,o.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Ci;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Ks)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(o)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};nt.finalized=!0,nt.elementProperties=new Map,nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},xo==null||xo({ReactiveElement:nt}),((We=xe.reactiveElementVersions)!==null&&We!==void 0?We:xe.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ye,Ke;let pt=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return yt}};pt.finalized=!0,pt._$litElement$=!0,(Ye=globalThis.litElementHydrateSupport)===null||Ye===void 0||Ye.call(globalThis,{LitElement:pt});const Ao=globalThis.litElementPolyfillSupport;Ao==null||Ao({LitElement:pt});((Ke=globalThis.litElementVersions)!==null&&Ke!==void 0?Ke:globalThis.litElementVersions=[]).push("3.2.2");var Nt=function(){try{window[V].updateSegments();var i=function(){if(!Ge)return Ge=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Ge=t,window[V].dispatchEvent(new Event("change"))})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},V="__foldables__",Ge=!1;function Zr(i,t){var e;return function(){var o=arguments,s=this;clearTimeout(e),e=setTimeout(function(){return i.apply(s,o)},t)}}var Ei=function(){function i(){var o=this;if(window.visualViewport==null){if(window[V]!==void 0)return window[V];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return Zr(Nt(),200)})}}var t,e=i.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,h=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+h,right:n,width:n,height:h},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(V+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(V+"-horizontal-viewport-segments",o),Nt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(V+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(V+"-vertical-viewport-segments",o),Nt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(V+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(V+"-fold-size",o),Nt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(V+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(V+"-browser-shell-size",o),Nt()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(i.prototype,t),i}();window[V]=new Ei,window.visualViewport===void 0&&window.visualViewport.segments===void 0&&window[V].updateSegments();try{self["workbox:window:6.5.3"]&&_()}catch{}function ki(i,t){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(s){e(s.data)},i.postMessage(t,[o.port2])})}function Jr(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function Co(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=i[e];return o}function Qr(i,t){var e;if(typeof Symbol>"u"||i[Symbol.iterator]==null){if(Array.isArray(i)||(e=function(s,r){if(s){if(typeof s=="string")return Co(s,r);var n=Object.prototype.toString.call(s).slice(8,-1);return n==="Object"&&s.constructor&&(n=s.constructor.name),n==="Map"||n==="Set"?Array.from(s):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Co(s,r):void 0}}(i))||t&&i&&typeof i.length=="number"){e&&(i=e);var o=0;return function(){return o>=i.length?{done:!0}:{done:!1,value:i[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=i[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch{}var Xe=function(){var i=this;this.promise=new Promise(function(t,e){i.resolve=t,i.reject=e})};function Ze(i,t){var e=location.href;return new URL(i,e).href===new URL(t,e).href}var Ht=function(i,t){this.type=i,Object.assign(this,t)};function pe(i,t,e){return e?t?t(i):i:(i&&i.then||(i=Promise.resolve(i)),t?i.then(t):i)}function tn(){}var en={type:"SKIP_WAITING"};function Eo(i,t){if(!t)return i&&i.then?i.then(tn):Promise.resolve()}var on=function(i){var t,e;function o(h,a){var l,d;return a===void 0&&(a={}),(l=i.call(this)||this).nn={},l.tn=0,l.rn=new Xe,l.en=new Xe,l.on=new Xe,l.un=0,l.an=new Set,l.cn=function(){var c=l.fn,u=c.installing;l.tn>0||!Ze(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,c.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(c){var u=l.fn,v=c.target,b=v.state,f=v===l.vn,g={sw:v,isExternal:f,originalEvent:c};!f&&l.mn&&(g.isUpdate=!0),l.dispatchEvent(new Ht(b,g)),b==="installed"?l.wn=self.setTimeout(function(){b==="installed"&&u.waiting===v&&l.dispatchEvent(new Ht("waiting",g))},200):b==="activating"&&(clearTimeout(l.wn),f||l.en.resolve(v))},l.dn=function(c){var u=l.hn,v=u!==navigator.serviceWorker.controller;l.dispatchEvent(new Ht("controlling",{isExternal:v,originalEvent:c,sw:u,isUpdate:l.mn})),v||l.on.resolve(u)},l.gn=(d=function(c){var u=c.data,v=c.ports,b=c.source;return pe(l.getSW(),function(){l.an.has(b)&&l.dispatchEvent(new Ht("message",{data:u,originalEvent:c,ports:v,sw:b}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(v){return Promise.reject(v)}}),l.sn=h,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}e=i,(t=o).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var s,r,n=o.prototype;return n.register=function(h){var a=(h===void 0?{}:h).immediate,l=a!==void 0&&a;try{var d=this;return function(c,u){var v=c();return v&&v.then?v.then(u):u(v)}(function(){if(!l&&document.readyState!=="complete")return Eo(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=Boolean(navigator.serviceWorker.controller),d.yn=d.pn(),pe(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Ze(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new Ht("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?Eo(this.fn.update()):void 0}catch(h){return Promise.reject(h)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(h){try{return pe(this.getSW(),function(a){return ki(a,h)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ki(this.fn.waiting,en)},n.pn=function(){var h=navigator.serviceWorker.controller;return h&&Ze(h.scriptURL,this.sn.toString())?h:void 0},n.bn=function(){try{var h=this;return function(a,l){try{var d=a()}catch(c){return l(c)}return d&&d.then?d.then(void 0,l):d}(function(){return pe(navigator.serviceWorker.register(h.sn,h.nn),function(a){return h.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},s=o,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Jr(s.prototype,r),o}(function(){function i(){this.Pn=new Map}var t=i.prototype;return t.addEventListener=function(e,o){this.Sn(e).add(o)},t.removeEventListener=function(e,o){this.Sn(e).delete(o)},t.dispatchEvent=function(e){e.target=this;for(var o,s=Qr(this.Sn(e.type));!(o=s()).done;)(0,o.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},i}());var zi="";function Pi(i){zi=i}function sn(){if(!zi){const i=[...document.getElementsByTagName("script")],t=i.find(e=>e.hasAttribute("data-shoelace"));if(t)Pi(t.getAttribute("data-shoelace"));else{const e=i.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src));let o="";e&&(o=e.getAttribute("src")),Pi(o.split("/").slice(0,-1).join("/"))}}return zi.replace(/\/$/,"")}var rn={name:"default",resolver:i=>`${sn()}/assets/icons/${i}.svg`},nn=rn,ko={caret:`
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
  `},an={name:"system",resolver:i=>i in ko?`data:image/svg+xml,${encodeURIComponent(ko[i])}`:""},ln=an,hn=[nn,ln],Ti=[];function cn(i){Ti.push(i)}function dn(i){Ti=Ti.filter(t=>t!==i)}function zo(i){return hn.find(t=>t.name===i)}var Je=new Map;function un(i,t="cors"){if(Je.has(i))return Je.get(i);const e=fetch(i,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return Je.set(i,e),e}var Qe=new Map;async function pn(i){if(Qe.has(i))return Qe.get(i);const t=await un(i),e={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const s=o.firstElementChild;e.svg=(s==null?void 0:s.tagName.toLowerCase())==="svg"?s.outerHTML:""}return Qe.set(i,e),e}var _e=window,Ki=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gi=Symbol(),Po=new WeakMap,Gs=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ki&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Po.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Po.set(e,t))}return t}toString(){return this.cssText}},vn=i=>new Gs(typeof i=="string"?i:i+"",void 0,Gi),Rt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new Gs(e,i,Gi)},mn=(i,t)=>{Ki?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),s=_e.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)})},To=Ki?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return vn(e)})(i):i,ti,Ae=window,Ro=Ae.trustedTypes,gn=Ro?Ro.emptyScript:"",Oo=Ae.reactiveElementPolyfillSupport,Ri={toAttribute(i,t){switch(t){case Boolean:i=i?gn:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Xs=(i,t)=>t!==i&&(t==t||i==i),ei={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:Xs},at=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const s=this._$Ep(o,e);s!==void 0&&(this._$Ev.set(s,o),t.push(s))}),t}static createProperty(t,e=ei){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ei}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of o)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(To(s))}else t!==void 0&&e.push(To(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return mn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=ei){var s;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:Ri).toAttribute(e,o.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Ri;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Xs)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(o)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};at.finalized=!0,at.elementProperties=new Map,at.elementStyles=[],at.shadowRootOptions={mode:"open"},Oo==null||Oo({ReactiveElement:at}),((ti=Ae.reactiveElementVersions)!==null&&ti!==void 0?ti:Ae.reactiveElementVersions=[]).push("1.6.1");var ii,Ce=window,$t=Ce.trustedTypes,Uo=$t?$t.createPolicy("lit-html",{createHTML:i=>i}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Zs="?"+X,fn=`<${Zs}>`,St=document,ie=(i="")=>St.createComment(i),oe=i=>i===null||typeof i!="object"&&typeof i!="function",Js=Array.isArray,_n=i=>Js(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mo=/-->/g,Lo=/>/g,tt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vo=/'/g,Io=/"/g,Qs=/^(?:script|style|textarea|title)$/i,bn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),se=bn(1),Z=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),No=new WeakMap,vt=St.createTreeWalker(St,129,null,!1),yn=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":"",n=Bt;for(let a=0;a<e;a++){const l=i[a];let d,c,u=-1,v=0;for(;v<l.length&&(n.lastIndex=v,c=n.exec(l),c!==null);)v=n.lastIndex,n===Bt?c[1]==="!--"?n=Mo:c[1]!==void 0?n=Lo:c[2]!==void 0?(Qs.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=tt):c[3]!==void 0&&(n=tt):n===tt?c[0]===">"?(n=s??Bt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?tt:c[3]==='"'?Io:Vo):n===Io||n===Vo?n=tt:n===Mo||n===Lo?n=Bt:(n=tt,s=void 0);const b=n===tt&&i[a+1].startsWith("/>")?" ":"";r+=n===Bt?l+fn:u>=0?(o.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+X+b):l+X+(u===-2?(o.push(void 0),a):b)}const h=r+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Uo!==void 0?Uo.createHTML(h):h,o]},Ee=class{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,d]=yn(t,e);if(this.el=Ee.createElement(l,o),vt.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=vt.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(X)){const v=d[n++];if(c.push(u),v!==void 0){const b=s.getAttribute(v.toLowerCase()+"$lit$").split(X),f=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:f[2],strings:b,ctor:f[1]==="."?$n:f[1]==="?"?xn:f[1]==="@"?An:Ve})}else a.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Qs.test(s.tagName)){const c=s.textContent.split(X),u=c.length-1;if(u>0){s.textContent=$t?$t.emptyScript:"";for(let v=0;v<u;v++)s.append(c[v],ie()),vt.nextNode(),a.push({type:2,index:++r});s.append(c[u],ie())}}}else if(s.nodeType===8)if(s.data===Zs)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(X,c+1))!==-1;)a.push({type:7,index:r}),c+=X.length-1}r++}}static createElement(t,e){const o=St.createElement("template");return o.innerHTML=t,o}};function xt(i,t,e=i,o){var s,r,n,h;if(t===Z)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=oe(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=xt(i,a._$AS(i,t.values),a,o)),t}var wn=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:St).importNode(o,!0);vt.currentNode=r;let n=vt.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Le(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Cn(n,this,t)),this.u.push(d),l=s[++a]}h!==(l==null?void 0:l.index)&&(n=vt.nextNode(),h++)}return r}p(t){let e=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},Le=class{constructor(t,e,o,s){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),oe(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==Z&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_n(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==C&&oe(this._$AH)?this._$AA.nextSibling.data=t:this.T(St.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ee.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new wn(r,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let e=No.get(t.strings);return e===void 0&&No.set(t.strings,e=new Ee(t)),e}k(t){Js(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new Le(this.O(ie()),this.O(ie()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ve=class{constructor(i,t,e,o,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=i,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,o){const s=this.strings;let r=!1;if(s===void 0)i=xt(this,i,t,0),r=!oe(i)||i!==this._$AH&&i!==Z,r&&(this._$AH=i);else{const n=i;let h,a;for(i=s[0],h=0;h<s.length-1;h++)a=xt(this,n[e+h],t,h),a===Z&&(a=this._$AH[h]),r||(r=!oe(a)||a!==this._$AH[h]),a===C?i=C:i!==C&&(i+=(a??"")+s[h+1]),this._$AH[h]=a}r&&!o&&this.j(i)}j(i){i===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},$n=class extends Ve{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}},Sn=$t?$t.emptyScript:"",xn=class extends Ve{constructor(){super(...arguments),this.type=4}j(t){t&&t!==C?this.element.setAttribute(this.name,Sn):this.element.removeAttribute(this.name)}},An=class extends Ve{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=xt(this,t,e,0))!==null&&o!==void 0?o:C)===Z)return;const s=this._$AH,r=t===C&&s!==C||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==C&&(s===C||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Cn=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}},Ho=Ce.litHtmlPolyfillSupport;Ho==null||Ho(Ee,Le),((ii=Ce.litHtmlVersions)!==null&&ii!==void 0?ii:Ce.litHtmlVersions=[]).push("2.6.1");var En=(i,t,e)=>{var o,s;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let n=r._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new Le(t.insertBefore(ie(),h),h,void 0,e??{})}return n._$AI(i),n},oi,si,Gt=class extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=En(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return Z}};Gt.finalized=!0,Gt._$litElement$=!0,(oi=globalThis.litElementHydrateSupport)===null||oi===void 0||oi.call(globalThis,{LitElement:Gt});var Bo=globalThis.litElementPolyfillSupport;Bo==null||Bo({LitElement:Gt});((si=globalThis.litElementVersions)!==null&&si!==void 0?si:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var ce=Rt`
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
`,kn=Rt`
  ${ce}

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
`,tr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},er=i=>(...t)=>({_$litDirective$:i,values:t}),ir=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var or=Object.defineProperty,zn=Object.defineProperties,Pn=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,Rn=Object.prototype.hasOwnProperty,On=Object.prototype.propertyIsEnumerable,jo=(i,t,e)=>t in i?or(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,F=(i,t)=>{for(var e in t||(t={}))Rn.call(t,e)&&jo(i,e,t[e]);if(Do)for(var e of Do(t))On.call(t,e)&&jo(i,e,t[e]);return i},Ot=(i,t)=>zn(i,Tn(t)),m=(i,t,e,o)=>{for(var s=o>1?void 0:o?Pn(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&or(t,e,s),s};function de(i,t){const e=F({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:r}=o,n=Array.isArray(i)?i:[i];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](d,c)}}),r.call(this,h)}}}var ue=i=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:s,elements:r}=o;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(i,t),Un=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ot(F({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function y(i){return(t,e)=>e!==void 0?((o,s,r)=>{s.constructor.createProperty(r,o)})(i,t,e):Un(i,t)}function Ie(i){return y(Ot(F({},i),{state:!0}))}var Mn=({finisher:i,descriptor:t})=>(e,o)=>{var s;if(o===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:Ot(F({},e),{key:r});return i!=null&&(n.finisher=function(h){i(h,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),i==null||i(r,o)}};function Xi(i,t){return Mn({descriptor:e=>{const o={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null),this[s]}}return o}})}var ri;((ri=window.HTMLSlotElement)===null||ri===void 0?void 0:ri.prototype.assignedElements)!=null;var ot=class extends Gt{emit(i,t){const e=new CustomEvent(i,F({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}};m([y()],ot.prototype,"dir",2);m([y()],ot.prototype,"lang",2);/*! Bundled license information:

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
*/var Oi=class extends ir{constructor(i){if(super(i),this.it=C,i.type!==tr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===C||i==null)return this._t=void 0,this.it=i;if(i===Z)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const t=[i];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Oi.directiveName="unsafeHTML",Oi.resultType=1;var Ui=class extends Oi{};Ui.directiveName="unsafeSVG",Ui.resultType=2;var Ln=er(Ui),ni,D=class extends ot{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),cn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),dn(this)}getUrl(){const i=zo(this.library);return this.name&&i?i.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const t=zo(this.library),e=this.getUrl();if(ni||(ni=new DOMParser),e)try{const o=await pn(e);if(e!==this.getUrl())return;if(o.ok){const r=ni.parseFromString(o.svg,"text/html").body.querySelector("svg");r!==null?((i=t==null?void 0:t.mutator)==null||i.call(t,r),this.svg=r.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return se` ${Ln(this.svg)} `}};D.styles=kn;m([Ie()],D.prototype,"svg",2);m([y({reflect:!0})],D.prototype,"name",2);m([y()],D.prototype,"src",2);m([y()],D.prototype,"label",2);m([y({reflect:!0})],D.prototype,"library",2);m([de("label")],D.prototype,"handleLabelChange",1);m([de(["name","src","library"])],D.prototype,"setIcon",1);D=m([ue("sl-icon")],D);/*! Bundled license information:

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
*/function Fo(i,t){return new Promise(e=>{function o(s){s.target===i&&(i.removeEventListener(t,o),e())}i.addEventListener(t,o)})}function Wo(i,t,e){return new Promise(o=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=i.animate(t,Ot(F({},e),{duration:Vn()?0:e.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function Vn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qo(i){return Promise.all(i.getAnimations().map(t=>new Promise(e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}var sr=new Map,In=new WeakMap;function Nn(i){return i??{keyframes:[],options:{duration:0}}}function Yo(i,t){return t.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function rr(i,t){sr.set(i,Nn(t))}function Ko(i,t,e){const o=In.get(i);if(o!=null&&o[t])return Yo(o[t],e.dir);const s=sr.get(t);return s?Yo(s,e.dir):{keyframes:[],options:{duration:0}}}var Mi=new Set,Hn=new MutationObserver(lr),ct=new Map,nr=document.documentElement.dir||"ltr",ar=document.documentElement.lang||navigator.language,Xt;Hn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Bn(...i){i.map(t=>{const e=t.$code.toLowerCase();ct.has(e)?ct.set(e,Object.assign(Object.assign({},ct.get(e)),t)):ct.set(e,t),Xt||(Xt=t)}),lr()}function lr(){nr=document.documentElement.dir||"ltr",ar=document.documentElement.lang||navigator.language,[...Mi.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}var Dn=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Mi.add(this.host)}hostDisconnected(){Mi.delete(this.host)}dir(){return`${this.host.dir||nr}`.toLowerCase()}lang(){return`${this.host.lang||ar}`.toLowerCase()}term(i,...t){var e,o;const s=new Intl.Locale(this.lang()),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",h=ct.get(`${r}-${n}`),a=ct.get(r);let l;if(h&&h[i])l=h[i];else if(a&&a[i])l=a[i];else if(Xt&&Xt[i])l=Xt[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof l=="function"?l(...t):l}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}},Zi=class extends Dn{},jn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Bn(jn);var hr=class{constructor(i,...t){this.slotNames=[],(this.host=i).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(i){const t=i.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},Fn=Rt`
  ${ce}

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
`,Ji=er(class extends ir{constructor(i){var t;if(super(i),i.type!==tr.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(t)}const s=i.element.classList;this.nt.forEach(r=>{r in t||(s.remove(r),this.nt.delete(r))});for(const r in t){const n=!!t[r];n===this.nt.has(r)||!((o=this.st)===null||o===void 0)&&o.has(r)||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return Z}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var rt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),j=class extends ot{constructor(){super(...arguments),this.hasSlotController=new hr(this,"icon","suffix"),this.localize=new Zi(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await qo(this.base),this.base.hidden=!1;const{keyframes:i,options:t}=Ko(this,"alert.show",{dir:this.localize.dir()});await Wo(this.base,i,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await qo(this.base);const{keyframes:i,options:t}=Ko(this,"alert.hide",{dir:this.localize.dir()});await Wo(this.base,i,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Fo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fo(this,"sl-after-hide")}async toast(){return new Promise(i=>{rt.parentElement===null&&document.body.append(rt),rt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{rt.removeChild(this),i(),rt.querySelector("sl-alert")===null&&rt.remove()},{once:!0})})}render(){return se`
      <div
        part="base"
        class=${Ji({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?se`
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
    `}};j.styles=Fn;m([Xi('[part~="base"]')],j.prototype,"base",2);m([y({type:Boolean,reflect:!0})],j.prototype,"open",2);m([y({type:Boolean,reflect:!0})],j.prototype,"closable",2);m([y({reflect:!0})],j.prototype,"variant",2);m([y({type:Number})],j.prototype,"duration",2);m([de("open",{waitUntilFirstUpdate:!0})],j.prototype,"handleOpenChange",1);m([de("duration")],j.prototype,"handleDurationChange",1);j=m([ue("sl-alert")],j);rr("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});rr("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Wn=Rt`
  ${ce}

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
`,cr=Symbol.for(""),qn=i=>{if((i==null?void 0:i.r)===cr)return i==null?void 0:i._$litStatic$},ke=(i,...t)=>({_$litStatic$:t.reduce((e,o,s)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+i[s+1],i[0]),r:cr}),Go=new Map,Yn=i=>(t,...e)=>{const o=e.length;let s,r;const n=[],h=[];let a,l=0,d=!1;for(;l<o;){for(a=t[l];l<o&&(r=e[l],(s=qn(r))!==void 0);)a+=s+t[++l],d=!0;h.push(r),n.push(a),l++}if(l===o&&n.push(t[o]),d){const c=n.join("$$lit$$");(t=Go.get(c))===void 0&&(n.raw=n,Go.set(c,t=n)),e=h}return i(t,...e)},be=Yn(se);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var z=i=>i??C;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var N=class extends ot{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){const i=!!this.href,t=i?ke`a`:ke`button`;return be`
      <${t}
        part="base"
        class=${Ji({"icon-button":!0,"icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${z(i?void 0:this.disabled)}
        type=${z(i?void 0:"button")}
        href=${z(i?this.href:void 0)}
        target=${z(i?this.target:void 0)}
        download=${z(i?this.download:void 0)}
        rel=${z(i&&this.target?"noreferrer noopener":void 0)}
        role=${z(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${z(this.name)}
          library=${z(this.library)}
          src=${z(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};N.styles=Wn;m([Xi(".icon-button")],N.prototype,"button",2);m([Ie()],N.prototype,"hasFocus",2);m([y()],N.prototype,"name",2);m([y()],N.prototype,"library",2);m([y()],N.prototype,"src",2);m([y()],N.prototype,"href",2);m([y()],N.prototype,"target",2);m([y()],N.prototype,"download",2);m([y()],N.prototype,"label",2);m([y({type:Boolean,reflect:!0})],N.prototype,"disabled",2);N=m([ue("sl-icon-button")],N);var Kn=Rt`
  ${ce}

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
`,Dt=new WeakMap,jt=new WeakMap,ai=new Set,ve=new WeakMap,Gn=class{constructor(i,t){(this.host=i).addController(this),this.options=F({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const o=e.getRootNode(),s=e.getAttribute("form");if(s)return o.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,setValue:(e,o)=>e.value=o,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),ve.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ve.delete(this.host),this.options.assumeInteractionOn.forEach(i=>{this.host.removeEventListener(i,this.handleInteraction)})}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(i){i?(this.form=i,Dt.has(this.form)?Dt.get(this.form).add(this.host):Dt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),jt.has(this.form)||(jt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var i;this.form&&((i=Dt.get(this.form))==null||i.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),jt.has(this.form)&&(this.form.reportValidity=jt.get(this.form),jt.delete(this.form))),this.form=void 0}handleFormData(i){const t=this.options.disabled(this.host),e=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!t&&!s&&typeof e=="string"&&e.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(r=>{i.formData.append(e,r.toString())}):i.formData.append(e,o.toString()))}handleFormSubmit(i){var t;const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Dt.get(this.form))==null||t.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!e&&!o(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ve.set(this.host,[])}handleInteraction(i){const t=ve.get(this.host);t.includes(i.type)||t.push(i.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const t of i)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(i,t){t?ai.add(i):ai.delete(i),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}getForm(){var i;return(i=this.form)!=null?i:null}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){const t=this.host,e=Boolean(ai.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!i),t.toggleAttribute("data-valid",i),t.toggleAttribute("data-user-invalid",!i&&e),t.toggleAttribute("data-user-valid",i&&e)}updateValidity(){const i=this.host;this.setValidity(i.validity.valid)}emitInvalidEvent(i){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0});i||t.preventDefault(),this.host.dispatchEvent(t)||i==null||i.preventDefault()}},Qi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ot(F({},Qi),{valid:!1,valueMissing:!0}));Object.freeze(Ot(F({},Qi),{valid:!1,customError:!0}));var $=class extends ot{constructor(){super(...arguments),this.formControlController=new Gn(this,{form:i=>{if(i.hasAttribute("form")){const t=i.getRootNode(),e=i.getAttribute("form");return t.getElementById(e)}return i.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new hr(this,"[default]","prefix","suffix"),this.localize=new Zi(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Qi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(i){(this.disabled||this.loading)&&(i.preventDefault(),i.stopImmediatePropagation())}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),t=i?ke`a`:ke`button`;return be`
      <${t}
        part="base"
        class=${Ji({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(i?void 0:this.disabled)}
        type=${z(i?void 0:this.type)}
        title=${this.title}
        name=${z(i?void 0:this.name)}
        value=${z(i?void 0:this.value)}
        href=${z(i?this.href:void 0)}
        target=${z(i?this.target:void 0)}
        download=${z(i?this.download:void 0)}
        rel=${z(i?this.rel:void 0)}
        role=${z(i?void 0:"button")}
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
        ${this.caret?be` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?be`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};$.styles=Kn;m([Xi(".button")],$.prototype,"button",2);m([Ie()],$.prototype,"hasFocus",2);m([Ie()],$.prototype,"invalid",2);m([y()],$.prototype,"title",2);m([y({reflect:!0})],$.prototype,"variant",2);m([y({reflect:!0})],$.prototype,"size",2);m([y({type:Boolean,reflect:!0})],$.prototype,"caret",2);m([y({type:Boolean,reflect:!0})],$.prototype,"disabled",2);m([y({type:Boolean,reflect:!0})],$.prototype,"loading",2);m([y({type:Boolean,reflect:!0})],$.prototype,"outline",2);m([y({type:Boolean,reflect:!0})],$.prototype,"pill",2);m([y({type:Boolean,reflect:!0})],$.prototype,"circle",2);m([y()],$.prototype,"type",2);m([y()],$.prototype,"name",2);m([y()],$.prototype,"value",2);m([y()],$.prototype,"href",2);m([y()],$.prototype,"target",2);m([y()],$.prototype,"rel",2);m([y()],$.prototype,"download",2);m([y()],$.prototype,"form",2);m([y({attribute:"formaction"})],$.prototype,"formAction",2);m([y({attribute:"formenctype"})],$.prototype,"formEnctype",2);m([y({attribute:"formmethod"})],$.prototype,"formMethod",2);m([y({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);m([y({attribute:"formtarget"})],$.prototype,"formTarget",2);m([de("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$=m([ue("sl-button")],$);var Xn=Rt`
  ${ce}

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
`,Li=class extends ot{constructor(){super(...arguments),this.localize=new Zi(this)}render(){return se`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Li.styles=Xn;Li=m([ue("sl-spinner")],Li);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=window,to=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eo=Symbol(),Xo=new WeakMap;let dr=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==eo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(to&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=Xo.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Xo.set(t,i))}return i}toString(){return this.cssText}};const ur=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new dr(e,i,eo)},Zo=to?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(o=>new dr(typeof o=="string"?o:o+"",void 0,eo))(e)})(i):i;var li;const ze=window,Jo=ze.trustedTypes,Zn=Jo?Jo.emptyScript:"",Qo=ze.reactiveElementPolyfillSupport,Vi={toAttribute(i,t){switch(t){case Boolean:i=i?Zn:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},pr=(i,t)=>t!==i&&(t==t||i==i),hi={attribute:!0,type:String,converter:Vi,reflect:!1,hasChanged:pr};let lt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(i){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((t,e)=>{const o=this._$Ep(e,t);o!==void 0&&(this._$Ev.set(o,e),i.push(o))}),i}static createProperty(i,t=hi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(i,t),!t.noAccessor&&!this.prototype.hasOwnProperty(i)){const e=typeof i=="symbol"?Symbol():"__"+i,o=this.getPropertyDescriptor(i,e,t);o!==void 0&&Object.defineProperty(this.prototype,i,o)}}static getPropertyDescriptor(i,t,e){return{get(){return this[t]},set(o){const s=this[i];this[t]=o,this.requestUpdate(i,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||hi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),i.h!==void 0&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const o of e)t.unshift(Zo(o))}else i!==void 0&&t.push(Zo(i));return t}static _$Ep(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}u(){var i;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(i=this.constructor.h)===null||i===void 0||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)===null||e===void 0||e.call(i))}removeController(i){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((i,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var i;const t=(i=this.shadowRoot)!==null&&i!==void 0?i:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{to?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=ye.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(t,this.constructor.elementStyles),t}connectedCallback(){var i;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostConnected)===null||e===void 0?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostDisconnected)===null||e===void 0?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$EO(i,t,e=hi){var o;const s=this.constructor._$Ep(i,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:Vi).toAttribute(t,e.type);this._$El=i,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(i,t){var e;const o=this.constructor,s=o._$Ev.get(i);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:Vi;this._$El=s,this[s]=n.fromAttribute(t,r.type),this._$El=null}}requestUpdate(i,t,e){let o=!0;i!==void 0&&(((e=e||this.constructor.getPropertyOptions(i)).hasChanged||pr)(this[i],t)?(this._$AL.has(i)||this._$AL.set(i,t),e.reflect===!0&&this._$El!==i&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(i,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)===null||i===void 0||i.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){this._$EC!==void 0&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ci;lt.finalized=!0,lt.elementProperties=new Map,lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},Qo==null||Qo({ReactiveElement:lt}),((li=ze.reactiveElementVersions)!==null&&li!==void 0?li:ze.reactiveElementVersions=[]).push("1.6.1");const Pe=window,At=Pe.trustedTypes,ts=At?At.createPolicy("lit-html",{createHTML:i=>i}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,vr="?"+Y,Jn=`<${vr}>`,Ct=document,re=(i="")=>Ct.createComment(i),ne=i=>i===null||typeof i!="object"&&typeof i!="function",es=Array.isArray,Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,is=/-->/g,os=/>/g,et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ss=/'/g,rs=/"/g,ns=/^(?:script|style|textarea|title)$/i,Ut=(i=>(t,...e)=>({_$litType$:i,strings:t,values:e}))(1),Et=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),as=new WeakMap,mt=Ct.createTreeWalker(Ct,129,null,!1);let Ii=class mr{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,d]=((c,u)=>{const v=c.length-1,b=[];let f,g=u===2?"<svg>":"",w=Ft;for(let P=0;P<v;P++){const H=c[P];let E,S,O=-1,M=0;for(;M<H.length&&(w.lastIndex=M,S=w.exec(H),S!==null);)M=w.lastIndex,w===Ft?S[1]==="!--"?w=is:S[1]!==void 0?w=os:S[2]!==void 0?(ns.test(S[2])&&(f=RegExp("</"+S[2],"g")),w=et):S[3]!==void 0&&(w=et):w===et?S[0]===">"?(w=f??Ft,O=-1):S[1]===void 0?O=-2:(O=w.lastIndex-S[2].length,E=S[1],w=S[3]===void 0?et:S[3]==='"'?rs:ss):w===rs||w===ss?w=et:w===is||w===os?w=Ft:(w=et,f=void 0);const Be=w===et&&c[P+1].startsWith("/>")?" ":"";g+=w===Ft?H+Jn:O>=0?(b.push(E),H.slice(0,O)+"$lit$"+H.slice(O)+Y+Be):H+Y+(O===-2?(b.push(void 0),P):Be)}const U=g+(c[v]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ts!==void 0?ts.createHTML(U):U,b]})(t,e);if(this.el=mr.createElement(l,o),mt.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=mt.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Y)){const v=d[n++];if(c.push(u),v!==void 0){const b=s.getAttribute(v.toLowerCase()+"$lit$").split(Y),f=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:f[2],strings:b,ctor:f[1]==="."?Qn:f[1]==="?"?ea:f[1]==="@"?ia:Ne})}else a.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(ns.test(s.tagName)){const c=s.textContent.split(Y),u=c.length-1;if(u>0){s.textContent=At?At.emptyScript:"";for(let v=0;v<u;v++)s.append(c[v],re()),mt.nextNode(),a.push({type:2,index:++r});s.append(c[u],re())}}}else if(s.nodeType===8)if(s.data===vr)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(Y,c+1))!==-1;)a.push({type:7,index:r}),c+=Y.length-1}r++}}static createElement(t,e){const o=Ct.createElement("template");return o.innerHTML=t,o}};function kt(i,t,e=i,o){var s,r,n,h;if(t===Et)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=ne(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=kt(i,a._$AS(i,t.values),a,o)),t}let io=class gr{constructor(t,e,o,s){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=kt(this,t,e),ne(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Et&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(o=>es(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&ne(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ct.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ii.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new class{constructor(a,l){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var l;const{el:{content:d},parts:c}=this._$AD,u=((l=a==null?void 0:a.creationScope)!==null&&l!==void 0?l:Ct).importNode(d,!0);mt.currentNode=u;let v=mt.nextNode(),b=0,f=0,g=c[0];for(;g!==void 0;){if(b===g.index){let w;g.type===2?w=new io(v,v.nextSibling,this,a):g.type===1?w=new g.ctor(v,g.name,g.strings,this,a):g.type===6&&(w=new oa(v,this,a)),this.u.push(w),g=c[++f]}b!==(g==null?void 0:g.index)&&(v=mt.nextNode(),b++)}return u}p(a){let l=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,l),l+=d.strings.length-2):d._$AI(a[l])),l++}}(r,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let e=as.get(t.strings);return e===void 0&&as.set(t.strings,e=new Ii(t)),e}k(t){es(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new gr(this.O(re()),this.O(re()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ne=class{constructor(i,t,e,o,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=i,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,o){const s=this.strings;let r=!1;if(s===void 0)i=kt(this,i,t,0),r=!ne(i)||i!==this._$AH&&i!==Et,r&&(this._$AH=i);else{const n=i;let h,a;for(i=s[0],h=0;h<s.length-1;h++)a=kt(this,n[e+h],t,h),a===Et&&(a=this._$AH[h]),r||(r=!ne(a)||a!==this._$AH[h]),a===R?i=R:i!==R&&(i+=(a??"")+s[h+1]),this._$AH[h]=a}r&&!o&&this.j(i)}j(i){i===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Qn=class extends Ne{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===R?void 0:i}};const ta=At?At.emptyScript:"";let ea=class extends Ne{constructor(){super(...arguments),this.type=4}j(i){i&&i!==R?this.element.setAttribute(this.name,ta):this.element.removeAttribute(this.name)}},ia=class extends Ne{constructor(i,t,e,o,s){super(i,t,e,o,s),this.type=5}_$AI(i,t=this){var e;if((i=(e=kt(this,i,t,0))!==null&&e!==void 0?e:R)===Et)return;const o=this._$AH,s=i===R&&o!==R||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,r=i!==R&&(o===R||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}},oa=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){kt(this,i)}};const ls=Pe.litHtmlPolyfillSupport;ls==null||ls(Ii,io),((ci=Pe.litHtmlVersions)!==null&&ci!==void 0?ci:Pe.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var di,ui;let gt=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=((e,o,s)=>{var r,n;const h=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=h._$litPart$;if(a===void 0){const l=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new io(o.insertBefore(re(),l),l,void 0,s??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)===null||i===void 0||i.setConnected(!1)}render(){return Et}};gt.finalized=!0,gt._$litElement$=!0,(di=globalThis.litElementHydrateSupport)===null||di===void 0||di.call(globalThis,{LitElement:gt});const hs=globalThis.litElementPolyfillSupport;hs==null||hs({LitElement:gt}),((ui=globalThis.litElementVersions)!==null&&ui!==void 0?ui:globalThis.litElementVersions=[]).push("3.2.2");var pi,vi,we=window,oo=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,so=Symbol(),cs=new WeakMap,fr=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==so)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(oo&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=cs.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&cs.set(t,i))}return i}toString(){return this.cssText}},mi=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new fr(e,i,so)},ds=oo?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(o=>new fr(typeof o=="string"?o:o+"",void 0,so))(e)})(i):i,Te=window,us=Te.trustedTypes,sa=us?us.emptyScript:"",ps=Te.reactiveElementPolyfillSupport,ae={toAttribute(i,t){switch(t){case Boolean:i=i?sa:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},_r=(i,t)=>t!==i&&(t==t||i==i),gi={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:_r},ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(i){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((t,e)=>{const o=this._$Ep(e,t);o!==void 0&&(this._$Ev.set(o,e),i.push(o))}),i}static createProperty(i,t=gi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(i,t),!t.noAccessor&&!this.prototype.hasOwnProperty(i)){const e=typeof i=="symbol"?Symbol():"__"+i,o=this.getPropertyDescriptor(i,e,t);o!==void 0&&Object.defineProperty(this.prototype,i,o)}}static getPropertyDescriptor(i,t,e){return{get(){return this[t]},set(o){const s=this[i];this[t]=o,this.requestUpdate(i,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||gi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),i.h!==void 0&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const o of e)t.unshift(ds(o))}else i!==void 0&&t.push(ds(i));return t}static _$Ep(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}u(){var i;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(i=this.constructor.h)===null||i===void 0||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)===null||e===void 0||e.call(i))}removeController(i){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((i,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var i;const t=(i=this.shadowRoot)!==null&&i!==void 0?i:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{oo?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=we.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(t,this.constructor.elementStyles),t}connectedCallback(){var i;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostConnected)===null||e===void 0?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostDisconnected)===null||e===void 0?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$EO(i,t,e=gi){var o;const s=this.constructor._$Ep(i,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:ae).toAttribute(t,e.type);this._$El=i,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(i,t){var e;const o=this.constructor,s=o._$Ev.get(i);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:ae;this._$El=s,this[s]=n.fromAttribute(t,r.type),this._$El=null}}requestUpdate(i,t,e){let o=!0;i!==void 0&&(((e=e||this.constructor.getPropertyOptions(i)).hasChanged||_r)(this[i],t)?(this._$AL.has(i)||this._$AL.set(i,t),e.reflect===!0&&this._$El!==i&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(i,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)===null||i===void 0||i.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){this._$EC!==void 0&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}};ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ps==null||ps({ReactiveElement:ht}),((pi=Te.reactiveElementVersions)!==null&&pi!==void 0?pi:Te.reactiveElementVersions=[]).push("1.6.1");var vs,Re=window,zt=Re.trustedTypes,ms=zt?zt.createPolicy("lit-html",{createHTML:i=>i}):void 0,K=`lit$${(Math.random()+"").slice(9)}$`,br="?"+K,ra=`<${br}>`,Pt=document,le=(i="")=>Pt.createComment(i),he=i=>i===null||typeof i!="object"&&typeof i!="function",gs=Array.isArray,Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fs=/-->/g,_s=/>/g,it=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bs=/'/g,ys=/"/g,ws=/^(?:script|style|textarea|title)$/i,$s=(vs=1,(i,...t)=>({_$litType$:vs,strings:i,values:t})),B=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Ss=new WeakMap,ft=Pt.createTreeWalker(Pt,129,null,!1),Oe=class{constructor({strings:i,_$litType$:t},e){let o;this.parts=[];let s=0,r=0;const n=i.length-1,h=this.parts,[a,l]=((d,c)=>{const u=d.length-1,v=[];let b,f=c===2?"<svg>":"",g=Wt;for(let U=0;U<u;U++){const P=d[U];let H,E,S=-1,O=0;for(;O<P.length&&(g.lastIndex=O,E=g.exec(P),E!==null);)O=g.lastIndex,g===Wt?E[1]==="!--"?g=fs:E[1]!==void 0?g=_s:E[2]!==void 0?(ws.test(E[2])&&(b=RegExp("</"+E[2],"g")),g=it):E[3]!==void 0&&(g=it):g===it?E[0]===">"?(g=b??Wt,S=-1):E[1]===void 0?S=-2:(S=g.lastIndex-E[2].length,H=E[1],g=E[3]===void 0?it:E[3]==='"'?ys:bs):g===ys||g===bs?g=it:g===fs||g===_s?g=Wt:(g=it,b=void 0);const M=g===it&&d[U+1].startsWith("/>")?" ":"";f+=g===Wt?P+ra:S>=0?(v.push(H),P.slice(0,S)+"$lit$"+P.slice(S)+K+M):P+K+(S===-2?(v.push(void 0),U):M)}const w=f+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ms!==void 0?ms.createHTML(w):w,v]})(i,t);if(this.el=Oe.createElement(a,e),ft.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(o=ft.nextNode())!==null&&h.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(K)){const u=l[r++];if(d.push(c),u!==void 0){const v=o.getAttribute(u.toLowerCase()+"$lit$").split(K),b=/([.?@])?(.*)/.exec(u);h.push({type:1,index:s,name:b[2],strings:v,ctor:b[1]==="."?na:b[1]==="?"?la:b[1]==="@"?ha:He})}else h.push({type:6,index:s})}for(const c of d)o.removeAttribute(c)}if(ws.test(o.tagName)){const d=o.textContent.split(K),c=d.length-1;if(c>0){o.textContent=zt?zt.emptyScript:"";for(let u=0;u<c;u++)o.append(d[u],le()),ft.nextNode(),h.push({type:2,index:++s});o.append(d[c],le())}}}else if(o.nodeType===8)if(o.data===br)h.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(K,d+1))!==-1;)h.push({type:7,index:s}),d+=K.length-1}s++}}static createElement(i,t){const e=Pt.createElement("template");return e.innerHTML=i,e}};function Tt(i,t,e=i,o){var s,r,n,h;if(t===B)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=he(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=Tt(i,a._$AS(i,t.values),a,o)),t}var Ue=class{constructor(i,t,e,o){var s;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var i,t;return(t=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let i=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&i.nodeType===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=Tt(this,i,t),he(i)?i===k||i==null||i===""?(this._$AH!==k&&this._$AR(),this._$AH=k):i!==this._$AH&&i!==B&&this.g(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):(e=>gs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function")(i)?this.k(i):this.g(i)}O(i,t=this._$AB){return this._$AA.parentNode.insertBefore(i,t)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}g(i){this._$AH!==k&&he(this._$AH)?this._$AA.nextSibling.data=i:this.T(Pt.createTextNode(i)),this._$AH=i}$(i){var t;const{values:e,_$litType$:o}=i,s=typeof o=="number"?this._$AC(i):(o.el===void 0&&(o.el=Oe.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(e);else{const r=new class{constructor(h,a){this.u=[],this._$AN=void 0,this._$AD=h,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(h){var a;const{el:{content:l},parts:d}=this._$AD,c=((a=h==null?void 0:h.creationScope)!==null&&a!==void 0?a:Pt).importNode(l,!0);ft.currentNode=c;let u=ft.nextNode(),v=0,b=0,f=d[0];for(;f!==void 0;){if(v===f.index){let g;f.type===2?g=new Ue(u,u.nextSibling,this,h):f.type===1?g=new f.ctor(u,f.name,f.strings,this,h):f.type===6&&(g=new ca(u,this,h)),this.u.push(g),f=d[++b]}v!==(f==null?void 0:f.index)&&(u=ft.nextNode(),v++)}return c}p(h){let a=0;for(const l of this.u)l!==void 0&&(l.strings!==void 0?(l._$AI(h,l,a),a+=l.strings.length-2):l._$AI(h[a])),a++}}(s,this),n=r.v(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(i){let t=Ss.get(i.strings);return t===void 0&&Ss.set(i.strings,t=new Oe(i)),t}k(i){gs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let e,o=0;for(const s of i)o===t.length?t.push(e=new Ue(this.O(le()),this.O(le()),this,this.options)):e=t[o],e._$AI(s),o++;o<t.length&&(this._$AR(e&&e._$AB.nextSibling,o),t.length=o)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,t);i&&i!==this._$AB;){const o=i.nextSibling;i.remove(),i=o}}setConnected(i){var t;this._$AM===void 0&&(this._$Cm=i,(t=this._$AP)===null||t===void 0||t.call(this,i))}},He=class{constructor(i,t,e,o,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=i,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,o){const s=this.strings;let r=!1;if(s===void 0)i=Tt(this,i,t,0),r=!he(i)||i!==this._$AH&&i!==B,r&&(this._$AH=i);else{const n=i;let h,a;for(i=s[0],h=0;h<s.length-1;h++)a=Tt(this,n[e+h],t,h),a===B&&(a=this._$AH[h]),r||(r=!he(a)||a!==this._$AH[h]),a===k?i=k:i!==k&&(i+=(a??"")+s[h+1]),this._$AH[h]=a}r&&!o&&this.j(i)}j(i){i===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},na=class extends He{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===k?void 0:i}},aa=zt?zt.emptyScript:"",la=class extends He{constructor(){super(...arguments),this.type=4}j(i){i&&i!==k?this.element.setAttribute(this.name,aa):this.element.removeAttribute(this.name)}},ha=class extends He{constructor(i,t,e,o,s){super(i,t,e,o,s),this.type=5}_$AI(i,t=this){var e;if((i=(e=Tt(this,i,t,0))!==null&&e!==void 0?e:k)===B)return;const o=this._$AH,s=i===k&&o!==k||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,r=i!==k&&(o===k||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}},ca=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){Tt(this,i)}},xs=Re.litHtmlPolyfillSupport;xs==null||xs(Oe,Ue),((vi=Re.litHtmlVersions)!==null&&vi!==void 0?vi:Re.litHtmlVersions=[]).push("2.6.1");var fi,_i,Zt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=((e,o,s)=>{var r,n;const h=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=h._$litPart$;if(a===void 0){const l=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new Ue(o.insertBefore(le(),l),l,void 0,s??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return B}};Zt.finalized=!0,Zt._$litElement$=!0,(fi=globalThis.litElementHydrateSupport)===null||fi===void 0||fi.call(globalThis,{LitElement:Zt});var As=globalThis.litElementPolyfillSupport;As==null||As({LitElement:Zt}),((_i=globalThis.litElementVersions)!==null&&_i!==void 0?_i:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var Jt,da=mi`
  ${mi`
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
`}
  ${mi`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Ni=1,Cs=3,Es=4,yr=i=>(...t)=>({_$litDirective$:i,values:t}),wr=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}},ua={},pa=yr(class extends wr{constructor(i){if(super(i),i.type!==Cs&&i.type!==Ni&&i.type!==Es)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===B||t===k)return t;const e=i.element,o=i.name;if(i.type===Cs){if(t===e[o])return B}else if(i.type===Es){if(!!t===e.hasAttribute(o))return B}else if(i.type===Ni&&e.getAttribute(o)===t+"")return B;return((s,r=ua)=>{s._$AH=r})(i),t}}),$r=Object.defineProperty,va=Object.defineProperties,ma=Object.getOwnPropertyDescriptor,ga=Object.getOwnPropertyDescriptors,ks=Object.getOwnPropertySymbols,fa=Object.prototype.hasOwnProperty,_a=Object.prototype.propertyIsEnumerable,zs=(i,t,e)=>t in i?$r(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Mt=(i,t)=>{for(var e in t||(t={}))fa.call(t,e)&&zs(i,e,t[e]);if(ks)for(var e of ks(t))_a.call(t,e)&&zs(i,e,t[e]);return i},ro=(i,t)=>va(i,ga(t)),A=(i,t,e,o)=>{for(var s,r=o>1?void 0:o?ma(t,e):t,n=i.length-1;n>=0;n--)(s=i[n])&&(r=(o?s(t,e,r):s(r))||r);return o&&r&&$r(t,e,r),r},qt=new WeakMap,Ps=new WeakMap,Yt=new WeakMap,Hi=new Set,ba=new MutationObserver(Ar),dt=new Map,Sr=document.documentElement.dir||"ltr",xr=document.documentElement.lang||navigator.language;function Ar(){Sr=document.documentElement.dir||"ltr",xr=document.documentElement.lang||navigator.language,[...Hi.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}ba.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var ya=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Hi.add(this.host)}hostDisconnected(){Hi.delete(this.host)}dir(){return`${this.host.dir||Sr}`.toLowerCase()}lang(){return`${this.host.lang||xr}`.toLowerCase()}term(i,...t){var e,o;const s=new Intl.Locale(this.lang()),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",h=dt.get(`${r}-${n}`),a=dt.get(r);let l;if(h&&h[i])l=h[i];else if(a&&a[i])l=a[i];else{if(!Jt||!Jt[i])return console.error(`No translation found for: ${String(i)}`),String(i);l=Jt[i]}return typeof l=="function"?l(...t):l}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}},wa=class extends ya{};(function(...i){i.map(t=>{const e=t.$code.toLowerCase();dt.has(e)?dt.set(e,Object.assign(Object.assign({},dt.get(e)),t)):dt.set(e,t),Jt||(Jt=t)}),Ar()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var me=i=>i??k;function bi(i,t){const e=Mt({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:r}=o,n=Array.isArray(i)?i:[i];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(e.waitUntilFirstUpdate&&!this.hasUpdated||this[s](d,c))}}),r.call(this,h)}}}var Ts=yr(class extends wr{constructor(i){var t;if(super(i),i.type!==Ni||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(t)}const s=i.element.classList;this.nt.forEach(r=>{r in t||(s.remove(r),this.nt.delete(r))});for(const r in t){const n=!!t[r];n===this.nt.has(r)||!((o=this.st)===null||o===void 0)&&o.has(r)||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return B}}),$a=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ro(Mt({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function L(i){return(t,e)=>e!==void 0?((o,s,r)=>{s.constructor.createProperty(r,o)})(i,t,e):$a(i,t)}function Rs(i){return L(ro(Mt({},i),{state:!0}))}var yi,Sa=({finisher:i,descriptor:t})=>(e,o)=>{var s;if(o===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:ro(Mt({},e),{key:r});return i!=null&&(n.finisher=function(h){i(h,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),i==null||i(r,o)}};function Os(i,t){return Sa({descriptor:e=>{const o={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null),this[s]}}return o}})}(yi=window.HTMLSlotElement)===null||yi===void 0||yi.prototype.assignedElements;var Bi=class extends Zt{emit(i,t){const e=new CustomEvent(i,Mt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}};A([L()],Bi.prototype,"dir",2),A([L()],Bi.prototype,"lang",2);/*! Bundled license information:

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
*/var wi,x=class extends Bi{constructor(){super(...arguments),this.formControlController=new class{constructor(i,t){(this.host=i).addController(this),this.options=Mt({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const o=e.getRootNode(),s=e.getAttribute("form");if(s)return o.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null&&o},reportValidity:e=>typeof e.reportValidity!="function"||e.reportValidity(),setValue:(e,o)=>e.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(i){i?(this.form=i,qt.has(this.form)?qt.get(this.form).add(this.host):qt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Yt.has(this.form)||(Yt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var i;this.form&&((i=qt.get(this.form))==null||i.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Yt.has(this.form)&&(this.form.reportValidity=Yt.get(this.form),Yt.delete(this.form))),this.form=void 0}handleFormData(i){const t=this.options.disabled(this.host),e=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!t&&!s&&typeof e=="string"&&e.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(r=>{i.formData.append(e,r.toString())}):i.formData.append(e,o.toString()))}handleFormSubmit(i){var t;const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=qt.get(this.form))==null||t.forEach(s=>{this.setUserInteracted(s,!0)})),!this.form||this.form.noValidate||e||o(this.host)||(i.preventDefault(),i.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const t of i)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(i,t){Ps.set(i,t),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){var t;const e=this.host,o=Boolean(Ps.get(e)),s=Boolean(e.required);(t=this.form)!=null&&t.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!i),e.toggleAttribute("data-valid",i),e.toggleAttribute("data-user-invalid",!i&&o),e.toggleAttribute("data-user-valid",i&&o))}updateValidity(){const i=this.host;this.setValidity(i.checkValidity())}}(this),this.hasSlotController=new class{constructor(i,...t){this.slotNames=[],(this.host=i).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(i){const t=i.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new wa(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=i=>i.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(i){this.input.style.setProperty("--percent",100*i+"%")}syncTooltip(i){if(this.output!==null){const t=this.input.offsetWidth,e=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=t*i;if(this.localize.dir()==="rtl"){const r=`${t-s}px + ${i} * ${o}`;this.output.style.translate=`calc((${r} - ${e/2}px - ${o} / 2))`}else{const r=`${s}px - ${i} * ${o}`;this.output.style.translate=`calc(${r} - ${e/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const i=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(i),this.tooltip!=="none"&&this.syncTooltip(i)}focus(i){this.input.focus(i)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=!!this.label||!!i,o=!!this.helpText||!!t;return $s`
      <div
        part="form-control"
        class=${Ts({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ts({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${me(this.name)}
              ?disabled=${this.disabled}
              min=${me(this.min)}
              max=${me(this.max)}
              step=${me(this.step)}
              .value=${pa(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":$s`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};function Us(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=i[e];return o}x.styles=da,A([Os(".range__control")],x.prototype,"input",2),A([Os(".range__tooltip")],x.prototype,"output",2),A([Rs()],x.prototype,"hasFocus",2),A([Rs()],x.prototype,"hasTooltip",2),A([L()],x.prototype,"title",2),A([L()],x.prototype,"name",2),A([L({type:Number})],x.prototype,"value",2),A([L()],x.prototype,"label",2),A([L({attribute:"help-text"})],x.prototype,"helpText",2),A([L({type:Boolean,reflect:!0})],x.prototype,"disabled",2),A([L({type:Number})],x.prototype,"min",2),A([L({type:Number})],x.prototype,"max",2),A([L({type:Number})],x.prototype,"step",2),A([L()],x.prototype,"tooltip",2),A([L({attribute:!1})],x.prototype,"tooltipFormatter",2),A([L({reflect:!0})],x.prototype,"form",2),A([((i="value")=>(t,e)=>{const o=t.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,n,h){var a;const l=o.getPropertyOptions(i);if(r===(typeof l.attribute=="string"?l.attribute:i)){const d=l.converter||ae,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:ae.fromAttribute)(h,l.type);this[i]!==c&&(this[e]=c)}s.call(this,r,n,h)}})()],x.prototype,"defaultValue",2),A([bi("value",{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1),A([bi("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1),A([bi("hasTooltip",{waitUntilFirstUpdate:!0})],x.prototype,"syncRange",1),x=A([(wi="sl-range",i=>typeof i=="function"?((t,e)=>(customElements.define(t,e),e))(wi,i):((t,e)=>{const{kind:o,elements:s}=e;return{kind:o,elements:s,finisher(r){customElements.define(t,r)}}})(wi,i))],x);var Kt=function(){try{window[I].updateSegments();var i=function(){if(!$i)return $i=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){$i=t,window[I].dispatchEvent(new Event("change"))})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},I="__foldables__",$i=!1,no=function(){function i(){var o=this;if(window[I]!==void 0)return window[I];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return function(r,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return r.apply(l,a)},n)}}(Kt(),200)})}var t,e=i.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,h=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+h,right:n,width:n,height:h},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-horizontal-viewport-segments",o),Kt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-vertical-viewport-segments",o),Kt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(I+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-fold-size",o),Kt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(I+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-browser-shell-size",o),Kt()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(i.prototype,t),i}();window[I]=new no,window.visualViewport.segments===void 0&&window[I].updateSegments();var Cr="-viewport-segments",Di="(\\s*)(@media.*?\\b"+Cr+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",xa=/\((.*?)\)/gi,Aa=/@media[^\(]+/gi,Ca=/(horizontal-viewport-segments:)\s?(\d)/gi,Ea=/(vertical-viewport-segments:)\s?(\d)/gi,ka=function(i){return new RegExp("env\\(\\s*"+i+"\\s*\\)","gi")};function Ms(i,t){var e=i.matchAll(t);return e===null?[]:Array.from(e,function(o){return o[2]})[0]}function za(i){var t=function(o){var s,r=new RegExp(Di,"gi");if(typeof o.matchAll=="function")s=Array.from(o.matchAll(r));else{for(s=[];s[s.length]=r.exec(o););s.length--}return s}(i),e=[[]];return t.forEach(function(o){var s=o[1],r=o[2],n=o[3],h=o[4],a=r.match(Aa)||[],l=r.match(xa)||[],d=Ms(r,Ea);d===void 0&&(d=1);var c=Ms(r,Ca);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(Cr)}).join(" and "),e[d]===void 0&&(e[d]=new Array),e[d][c]=""+s+a+l+"{"+n+h+"}"}),e}var ji=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+ji);var Ls,Er=new no;if(!ji){var Si=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Ls=Si,Promise.all(Ls.map(function(i){return i.href?fetch(i.href).then(function(t){return t.text()}):i.textContent}))).then(function(i){var t=new DocumentFragment;i.forEach(function(e,o){for(var s,r=function(U,P){return U.replace(new RegExp(Di,"gi"),P)}(e,""),n=za(e),h=Si[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];Qt[c]==null&&(Qt[c]=[]);for(var v=0,b=Object.entries(u);v<b.length;v++){var f=b[v];Qt[c][f[0]]="/* origin: "+h+" */"+f[1]}}if(h=="inline"||(s=e,new RegExp(Di,"gi").test(s))){var g=document.createElement("style");g.setAttribute("data-css-origin",h),g.textContent=r,t.appendChild(g)}else{var w=document.createElement("link");w.type="text/css",w.rel="stylesheet",w.href=h,t.appendChild(w)}}),Si.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(t),function(e){ji||(Vs(e),Er.addEventListener("change",function(){return Vs(e)}))}()})}var Qt=[[]];function Vs(i){var t,e=Er,o=null;(t=i?Qt[i.nodeName.toLowerCase()]:Qt)[e.verticalViewportSegments]&&(o=t[e.verticalViewportSegments][e.horizontalViewportSegments]);var s,r=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,v=Object.entries(d[1]);u<v.length;u++){var b=v[u],f=b[0];s=b[1]+"px",o=o.replace(ka(h?"viewport-segment-"+f+" "+c+" 0":"viewport-segment-"+f+" 0 "+c),s)}var g="__foldables_sheet__",w=function(P,H){for(var E,S=function(M,Be){var J=typeof Symbol<"u"&&M[Symbol.iterator]||M["@@iterator"];if(J)return(J=J.call(M)).next.bind(J);if(Array.isArray(M)||(J=function(W,lo){if(W){if(typeof W=="string")return Us(W,lo);var st=Object.prototype.toString.call(W).slice(8,-1);return st==="Object"&&W.constructor&&(st=W.constructor.name),st==="Map"||st==="Set"?Array.from(W):st==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)?Us(W,lo):void 0}}(M))){J&&(M=J);var ao=0;return function(){return ao>=M.length?{done:!0}:{done:!1,value:M[ao++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(P.querySelectorAll("."+g));!(E=S()).done;)E.value.remove();var O=document.createElement("style");O.className=g,O.textContent=H,P===document?document.head.appendChild(O):P.appendChild(O)};if(i){var U=i.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(r+o):w(U,o)}else w(document,o)}}const q={Foldable:"foldable",Dual:"dual"};class Lt extends gt{}p(Lt,"styles",ur`
    :host {
      width: 20px;
      height: 20px;
      cursor: pointer;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host(:hover) {
      opacity: 1;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `);customElements.define("close-icon",class extends Lt{render(){return Ut`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Lt{render(){return Ut`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Lt{render(){return Ut`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Lt{render(){return Ut`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Lt{render(){return Ut`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class kr extends gt{constructor(){super();p(this,"_mini_configurator_header");p(this,"_mini_configurator");p(this,"_configurator");p(this,"_configurator_header");p(this,"_device_type_select");p(this,"_orientation_select");p(this,"_seam_slider");p(this,"_seam_container");p(this,"_preview");p(this,"_preview_container");p(this,"_device");p(this,"_frame");p(this,"_device_hinge");p(this,"_currentOrientation");p(this,"_currentDevice");p(this,"_isFullscreen",!1);p(this,"_verticalViewportSegments",1);p(this,"_horizontalViewportSegments",1);p(this,"_fold_width");p(this,"_browser_shell_size");p(this,"_x",0);p(this,"_y",0);p(this,"_offset_x",0);p(this,"_offset_y",0);p(this,"_resizeHandler");p(this,"_handleKeyUp",e=>{e.keyCode==73&&e.ctrlKey&&this._showMiniConfigurator()});p(this,"_startDragMiniConfigurator",async e=>{this._startDrag(e),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});p(this,"_startDragConfigurator",async e=>{this._startDrag(e),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});p(this,"_startDrag",async e=>{this._isFullscreen||(this._moved=!1,this._x=e.clientX-this._offset_x,this._y=e.clientY-this._offset_y,this._pointerId=e.pointerId,e.preventDefault())});p(this,"_miniConfiguratorMove",async e=>{this._pointerMove(e),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});p(this,"_pointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight)return;let o=e.clientX-this._x,s=e.clientY-this._y;const r=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(r.width),h=parseFloat(r.height);o<0&&(o=0),s<0&&(s=0),s+h>=window.innerHeight&&(s=window.innerHeight-h),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,s),e.preventDefault()});p(this,"_stopDragConfigurator",async e=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});p(this,"_stopDragMiniConfigurator",async e=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});p(this,"_stopDrag",async e=>{this._x=this._offset_x,this._y=this._offset_y});p(this,"_onResize",async e=>{this._handleAsusSpanning()});p(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});p(this,"_rotationFinished",e=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const e=window.getComputedStyle(this.shadowRoot.host);parseFloat(e.width);const o=parseFloat(e.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=q.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(e){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=e===2?0:1,this._horizontalViewportSegments=e,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(e){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=e===2?1:0,this._verticalViewportSegments=e,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(e){const o=this._device_type_select.selectedIndex,s=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),s){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=q.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=q.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=q.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=q.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=q.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=q.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),s=parseInt(e.width,10),r=parseInt(e.height,10);let n=parseInt(o.width,10),h=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),h=parseInt(o.width,10)),h>r||n>s){const l=r/h,d=s/n;a=d<l?d:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===q.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new no;e.foldSize=this.foldWidth,e.horizontalViewportSegments=this.horizontalViewportSegments,e.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(e,o){let s;return function(){clearTimeout(s),s=setTimeout(()=>e.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let e=this._offset_x,o=this._offset_y;const s=window.getComputedStyle(this.shadowRoot.host),r=parseFloat(s.width),n=parseFloat(s.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+r>=window.innerWidth&&(e=window.innerWidth-r),this._updateConfiguratorPosition(e,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(e,o){this._offset_x=e,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+e+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Ut`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${this.verticalViewportSegments===1&&this.horizontalViewportSegments===1?"":"toggle"}"></splitview-icon>
        <rotate-icon @click="${this._changeOrientation}"></rotate-icon>
        <fullscreen-icon @click="${this._showConfigurator}"></fullscreen-icon>
        <close-icon @click="${this._closeConfigurator}"></close-icon>
      </div>
    </div>
    <div id="configurator">
      <div class="header-background header-configurator">
        <div id="configurator-header">Foldable Configurator</div>
        <div class="icons">
          <minimize-icon @click="${this._showMiniConfigurator}"></minimize-icon>
          <fullscreen-icon @click="${this._toggleFullscreen}"></fullscreen-icon>
          <close-icon @click="${this._closeConfigurator}"></close-icon>
        </div>
      </div>
      <div id="content">
        <label for="device-select" class="category">Device</label>
        <select id="device-select">
          <option value="standard">Off</option>
          <option value="custom">Custom...</option>
          <optgroup label="Presets">
            <option value="neo">Surface Neo</option>
            <option value="duo">Surface Duo</option>
            <option value="asus">Asus Zenbook Pro Duo</option>
            <option value="fold">Samsung Galaxy Fold</option>
          </optgroup>
        </select>
        <label for="orientation-select" class="category">Orientation</label>
        <select id="orientation-select" disabled>
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
        <div id="preview-text">Below is an emulated version on the device when spanning :</div>
        <div id="preview-container">
          <div id="preview">
            <div id="device">
              <div class="screen right"></div>
              <div class="hinge" id="device-hinge">
                <div class="hinge-element"></div>
                <div class="hole"></div>
                <div class="hinge-element"></div>
              </div>
              <div class="screen left"></div>
            </div>
            <iframe id="frame" title="Preview of the device"></iframe>
          </div>
        </div>
        <div id="seam-container">
          <sl-range @sl-change="${()=>this._seamValueUpdated()}" label="Seam width" step="5" value="30" min="0" max="200" id="seam" disabled>
          </sl-range>
        </div>
        <div class="legend"> If you close the configurator use CTRL + i to show it again </div>
      </div>
    </div>`}}p(kr,"styles",ur`
    :host {
      z-index: 9999;
      position: absolute;
      font-size: 12px;
      width: 12vw;
      height: 50px;

      /* Surface Duo */
      --device-screen1-width: 450px;
      --device-screen2-width: 450px;
      --device-screen1-height: 600px;
      --device-screen2-height: 600px;
      --device-border: 7px;
      --device-bezel-vertical: 19px;
      --device-bezel-horizontal: 8px;
      --device-fold-width: 28px;
      --scale-factor: 0.44;
      /* This is the customize the thumb of the sl range */
      --sl-color-primary-500: grey;
      --sl-color-primary-600: black;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      :host {
        width: 30vw;
      }
    }

    :host(.fullscreen) {
      height: 100vh;
      width: 100vw;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    :host(.configurator) {
      width: 450px;
      height: 430px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #f2f2f2;
      border: 1px solid #cccccc;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator-header {
      font-size: 0.9em;
      height: 20px;
      margin-bottom: 5px;
    }

    .icon-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .toggle {
      background-color: #b8b8b8;
      opacity: 1;
      border-radius: 4px;
    }

    #main-icon:hover {
      opacity: 0.8;
    }

    #main-icon {
      width: 100%;
      height: auto;
    }

    .header-background {
      background-color: #f2f2f2;
      border-bottom: 1px solid #cccccc;
      height: 28px;
    }

    .header {
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      touch-action: none;
    }

    .header-configurator {
      cursor: move;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    #configurator {
      display: flex;
      flex-direction: column;
      background-color: white;
      overscroll-behavior: contain;
      width: 100%;
      height: 100%;
      visibility: hidden;
      border: 2px solid grey;
    }

    #configurator-header {
      flex-grow: 2;
      align-self: stretch;
      user-select: none;
      touch-action: none;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icons {
      flex-basis: 90px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    #content {
      display: grid;
      grid-template-columns: 100px auto;
      grid-template-rows: auto auto auto 1fr auto auto;
      align-items: center;
      justify-items: start;
      height: 95%;
    }

    #content > * {
      margin: 12px 12px 0px 12px;
    }

    #seam {
      --track-color-active: black;
      width: 80%;
      margin-left: 12px;
    }

    #seam-container {
      grid-column: span 2;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% - 32px);
      display: none;
    }

    #preview-text {
      grid-column: span 2;
      font-size : 1em;
    }

    #preview-container {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      width: calc(100% - 34px);
    }

    #preview {
      transform: scale(var(--scale-factor));
      transform-origin: top left;
      position: fixed;
    }

    .preview-center {
      transform-origin: top left;
      transform: scale(var(--scale-factor)) translateX(-50%);
      left: 50%;
    }

    #device {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: calc( var(--device-screen2-width) + var(--device-screen1-width) +
          var(--device-fold-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
      background-color: black;
      border-radius: 10px;
      border: var(--device-border) solid #b8b8b8;
    }

    .screen {
      pointer-events: none;
      background-color: black;
      border-radius: 10px;
    }

    .left {
      width: calc(var(--device-screen1-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
    }

    .right {
      width: calc(var(--device-screen2-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen2 -height) + 2 * var(--device-bezel-vertical));
    }

    .hole {
      background-color: white;
      width: 5px;
      height: 100%;
    }

    .hinge-element {
      background-color: #b8b8b8;
      width: var(--device-fold-width);
      height: calc(var(--device-bezel-vertical) / 2);
      border-radius: 5px;
    }

    .hinge {
      width: var(--device-fold-width);
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      z-index: 6;
      background-color: black;
      border: var(--device-border) solid black;
      border-top: var(--device-border) solid #b8b8b8;
      border-bottom: var(--device-border) solid #b8b8b8;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 10px;
    }

    .fold {
      width: calc(var(--device-fold-width) + 2 * var(--device-border));
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      opacity: 0.4;
      z-index: 6;
      background-color: white;
    }

    .fold > * {
      display: none;
    }

    #frame {
      position: absolute;
      top: calc(var(--device-bezel-vertical) + var(--device-border));
      left: calc(var(--device-bezel-horizontal) + var(--device-border));
      width: calc(var(--device-screen1-width) + var(--device-screen2-width) +
        var(--device-fold-width));
      height: var(--device-screen1-height);
      z-index: 3;
      border: none;
      border-radius: 10px;
      transform-origin: top left;
    }

    .legend {
      font-size : 0.8em;
      height: 20px;
      text-align: center;
      grid-column: span 2;
    }
  `);customElements.define("foldable-device-configurator",kr);class zr extends pt{constructor(){super();p(this,"_spanning",!1)}firstUpdated(){}handleSpanning(){const e=window.visualViewport.segments;this._spanning=e&&e.length>1;let o=this.shadowRoot.host.style;if(this._spanning){const s=e[0];s.width>s.height?(o.top="calc(25vh - 12.5vh)",o.left="calc(50vw - 20vw)",o.width="40vw",o.height=s.height/2+"px"):(o.top="calc(50vh - 12.5vh)",o.width="25vw",o.left="calc(25vw - 12.5vw)",o.height=e[0].height/3+"px")}else o.top="",o.left="",o.width="",o.height=""}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return js`
      <div id="content">
          <div id="menu">
            <div class="title">
              <slot name="title"></slot>
            </div>
            <div class="grow"></div>
            <div class="menu-button">
              <slot name="button"></slot>
            </div>
            <div class="menu-button">
              <slot name="button2"></slot>
            </div>
            <div class="grow last-item"></div>
          </div>
      </div>
    `}}p(zr,"styles",Ys`
    :host {
      width: 25vw;
      height: 30vh;
      position: absolute;
      top: calc(50vh - 15vh);
      left: calc(50vw - 12.5vw);
      z-index: 4;
      visibility: hidden;
      user-select: none;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    #content {
      width: 100%;
      height: 100%;
      background-image: url("images/menu.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: top left;
      padding: 20px;
    }

    #menu {
      border: solid 1px #5ac6bb;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: black;
      background-image: url("images/metal.jpg");
      background-repeat: no-repeat;
      background-position: top left;
      background-size: 100% 100%;
    }

    .title {
      color: white;
      font-family: 'Russo One', sans-serif;
      font-size: 1.2em;
      margin-top: 20px;
    }

    .grow {
      flex-grow: 2;
    }

    .menu-button {
      margin-top: 10px;
    }

    .last-item {
      margin-bottom: 20px;
    }

    @media (min-width: 320px) and (max-width: 1024px) and (orientation: portrait) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 60vw;
        height: 30vh;
        top: calc(50vh - 20vh);
        left: calc(50vw - 35vw);
      }
    }

    @media (min-width: 320px) and (max-width: 1024px) and (orientation: landscape) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 60vh;
        top: 10vh;
        left: calc(50vw - 30vw);
      }
    }
  `);customElements.define("game-menu",zr);Pi("/demos/starfold/");class Pr extends pt{constructor(){super();p(this,"_swAlert");p(this,"_wb");p(this,"_wbRegistration");p(this,"_mainMenu");p(this,"_pauseMenu");p(this,"_aboutMenu");p(this,"_lostMenu");p(this,"_pauseButton");p(this,"_pauseButtonPos",{x:0,y:0});p(this,"_pauseButtonSize",80);p(this,"_ship");p(this,"_shipSize",80);p(this,"_controllerSize",70);p(this,"_controllerSizeTouch",60);p(this,"_shipObject",{x:0,y:0});p(this,"_background1Y",0);p(this,"_background2Y",0);p(this,"_meteorSize",80);p(this,"_meteorImage");p(this,"_meteorImage2");p(this,"_meteors",[]);p(this,"_explosionImage");p(this,"_currentTime",0);p(this,"_startTime",0);p(this,"_timeSize");p(this,"_timeX");p(this,"_timeY");p(this,"_velocity",1);p(this,"_paused",!0);p(this,"_dead",!0);p(this,"_spanning",!1);p(this,"_playAreaSize");p(this,"_controllerArea");p(this,"_enableDebug",!1);p(this,"_pointerDown",!1);p(this,"_currentPointerTimeout",[]);p(this,"_pointerId");p(this,"_touchSensitivity",10);p(this,"_touchingLeftController",!1);p(this,"_touchingRightController",!1);p(this,"_touchingUpController",!1);p(this,"_touchingDownController",!1);p(this,"_yButtonImage");p(this,"_yButtonSize",100);p(this,"_yButtonPos",{x:0,y:0});p(this,"_touchingYButton",!1);p(this,"_missileImage");p(this,"_missileWidth",20);p(this,"_missileHeight",30);p(this,"_missiles",[]);p(this,"_handleKeyDown",e=>{this._paused||(e.keyCode==37?this._moveShipLeft():e.keyCode==39?this._moveShipRight():e.keyCode==27?this._pauseGame():e.keyCode==40?this._moveShipDown():e.keyCode==38?this._moveShipUp():e.keyCode==32&&this._fireMissile())});p(this,"_onPointerDown",async e=>{if(!(this._paused||this._dead)){if(this._clearPointerTimeout(),this._isTouchingPauseButton(e)){this._pauseGame();return}this._touchingLeftController=this._isTouchingAController(this._leftControllerPos,e),this._touchingRightController=this._isTouchingAController(this._rightControllerPos,e),this._touchingUpController=this._isTouchingAController(this._upControllerPos,e),this._touchingDownController=this._isTouchingAController(this._downControllerPos,e),(this._touchingLeftController||this._touchingRightController||this._touchingUpController||this._touchingDownController)&&(this._pointerDown=!0,this._pointerId=e.pointerId,this._canvas.setPointerCapture(this._pointerId),e.preventDefault(),this._touchingLeftController?this._moveShipLeft():this._touchingRightController?this._moveShipRight():this._touchingUpController?this._moveShipUp():this._touchingDownController&&this._moveShipDown(),this._currentPointerTimeout.push(setTimeout(o=>this._simulateLongPress(this._touchingLeftController,this._touchingRightController,this._touchingUpController,this._touchingDownController),300))),this._touchingYButton=this._isTouchingYButton(e),this._touchingYButton&&this._fireMissile()}});p(this,"_onPointerMove",async e=>{this._paused||this._dead||this._isTouchingController(e)||(this._pointerDown=!1,this._clearPointerTimeout())});p(this,"_onPointerUp",async e=>{this._paused||this._dead||(this._pointerDown=!1,this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=this._touchingYButton=!1,this._clearPointerTimeout(),this._pointerId&&this._canvas.releasePointerCapture(this._pointerId))});p(this,"_simulateLongPress",async(e,o,s,r)=>{this._pointerDown&&(e?this._moveShipLeft():o?this._moveShipRight():s?this._moveShipUp():r&&this._moveShipDown(),this._currentPointerTimeout.push(setTimeout(n=>this._simulateLongPress(e,o,s,r),50)))});p(this,"_drawCanvas",e=>{if(this._paused)return;this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground(),this._drawMeteors(),this._drawMissiles(),this._drawShip(),this._drawTime(),this._spanning?(this._drawControllerSegment(),this._drawController(this._controllerSize),this._drawControllerHighlight(this._controllerSize),this._drawPauseButton()):(this._drawController(this._controllerSizeTouch),this._drawControllerHighlight(this._controllerSizeTouch)),this._drawYButton();let o=Math.round(window.performance.now()/1e3)-this._startTime;if(this.currentTime==o){requestAnimationFrame(this._drawCanvas);return}this.currentTime=o;const s=5-this._velocity<=0?1:5-this._velocity;this.currentTime%s===0&&this._addNewMeteors(),this.currentTime%30==0&&this._velocity++,requestAnimationFrame(this._drawCanvas)});p(this,"_onResize",async e=>{const o=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(o.width,10),this._canvas.height=parseInt(o.height,10),this._handleSpanning(),this._paused&&this._drawBackground()});this._currentTime=0}static get properties(){return{currentTime:{type:String}}}set currentTime(e){let o=this._currentTime;this._currentTime=e,this.requestUpdate("currentTime",o)}get currentTime(){return this._currentTime}firstUpdated(){if(this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d")),!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new on("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()});const e=window.getComputedStyle(this._canvas);if(this._canvas.width=parseInt(e.width,10),this._canvas.height=parseInt(e.height,10),console.log("canvas size : "+this._canvas.width+"x"+this._canvas.height),this._context.font="20px Russo One",window.addEventListener("resize",this._onResize),this._mainMenu=this.shadowRoot.querySelector("#main-menu"),this._mainMenu.open(),this._pauseMenu=this.shadowRoot.querySelector("#pause-menu"),this._aboutMenu=this.shadowRoot.querySelector("#about-menu"),this._lostMenu=this.shadowRoot.querySelector("#lost-menu"),this._pauseButton=this.shadowRoot.querySelector("#pause-button"),this._ship=this.shadowRoot.querySelector("#ship"),this._meteorImage=this.shadowRoot.querySelector("#meteor"),this._meteorImage2=this.shadowRoot.querySelector("#meteor2"),this._background=this.shadowRoot.querySelector("#background"),this._explosionImage=this.shadowRoot.querySelector("#explosion"),this._controllerLeftImage=this.shadowRoot.querySelector("#left-controller"),this._controllerRightImage=this.shadowRoot.querySelector("#right-controller"),this._controllerUpImage=this.shadowRoot.querySelector("#up-controller"),this._controllerDownImage=this.shadowRoot.querySelector("#down-controller"),this._missileImage=this.shadowRoot.querySelector("#missile"),this._yButtonImage=this.shadowRoot.querySelector("#y-button"),document.addEventListener("keydown",this._handleKeyDown,!1),this._canvas.onpointerdown=this._onPointerDown.bind(this),this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointercancel=this._onPointerUp.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),this._timeSize=this._context.measureText("Elapsed Time : 2222s").width,this._handleSpanning(),this._background.onload=this._drawBackground.bind(this),window.visualViewport==null&&typeof Ei<"u"){const o=new Ei;o.onchange=()=>this._handleSpanning()}window.onorientationchange=o=>this._handleOrientationChange(o)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&ki(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_deviceSupportsSpanningMQs(){return window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1}_startGame(){this._mainMenu.close(),this._lostMenu.close(),this._pauseMenu.close(),this._paused=!1,this._dead=!1,this._meteors=[],this._missiles=[],this.currentTime=0,this._velocity=2,this._startTime=Math.round(window.performance.now()/1e3),this._updateGameLayout(),this._shipObject={x:this._playAreaSize.width/2-this._shipSize/2,y:this._playAreaSize.height-this._shipSize,size:this._shipSize},this._background2Y=-this._playAreaSize.height,this._background1Y=-this._playAreaSize.height,this._touchingYButton=this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=!1,this._pointerDown=!1,this._addNewMeteors(),this._spanning||this._showPauseButton(),requestAnimationFrame(this._drawCanvas)}_hidePauseButton(){this._pauseButton.classList.add("hidden")}_showPauseButton(){this._pauseButton.classList.remove("hidden")}_pauseGame(){this._paused||(this._paused=!0,this._touchingYButton=this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=!1,this._hidePauseButton(),this._pauseMenu.open())}_resumeGame(){this._paused&&(this._paused=!1,this._pauseMenu.close(),this._spanning||this._showPauseButton(),requestAnimationFrame(this._drawCanvas))}_lostGame(){this._paused||(this._paused=!0,this._dead=!0,this._clearPointerTimeout(),this._lostMenu.open())}_showAbout(){this._mainMenu.close(),this._aboutMenu.open()}_openMainMenu(){this._mainMenu.open(),this._aboutMenu.close()}_addNewMeteors(){let e=Math.round(this._playAreaSize.width/this._meteorSize/4);for(let o=0;o<e;++o)this._addRandomMeteor()}_addRandomMeteor(){let e=this._getRandomInt(0,this._playAreaSize.width-this._meteorSize),o=this._getRandomInt(0,-500);for(const s of this._meteors)if(this._checkCollision(s,{x:e,y:o,size:this._meteorSize}))return this._addRandomMeteor();this._meteors.push({x:e,y:o,destroyed:!1,size:this._meteorSize,spriteId:Math.random()>=.5})}_removeMeteor(e){for(let o=this._meteors.length;o--;){const s=this._meteors[o];if(s.destroyed&&e.y==s.y&&e.x==s.x){this._meteors.splice(o,1);break}}}_getRandomInt(e,o){return Math.floor(Math.random()*(o-e+1))+e}_drawShip(){this._dead?this._context.drawImage(this._explosionImage,this._shipObject.x,this._shipObject.y,this._shipObject.size+10,this._shipObject.size+10):this._context.drawImage(this._ship,this._shipObject.x,this._shipObject.y,this._shipObject.size,this._shipObject.size)}_drawBackground(){this._background1Y=this._background1Y-1,this._background2Y=this._background2Y+1,this._background1Y<-2*this._playAreaSize.height&&(this._background1Y=0),this._background2Y>this._playAreaSize.height&&(this._background2Y=-this._playAreaSize.height),this._context.drawImage(this._background,0,this._background2Y,this._playAreaSize.width,this._playAreaSize.height),this._context.save(),this._context.scale(-1,-1),this._context.drawImage(this._background,-this._playAreaSize.width,this._background1Y,this._playAreaSize.width,this._playAreaSize.height),this._context.restore()}_drawMeteors(){for(const e of this._meteors){const o=e.spriteId?this._meteorImage:this._meteorImage2;if(e.destroyed?this._context.drawImage(this._explosionImage,e.x,e.y,e.size,e.size):this._context.drawImage(o,e.x,e.y,e.size,e.size),this._enableDebug){this._context.save();const s=e.x+" "+e.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,e.x,e.y+e.size/2),this._context.restore()}!e.destroyed&&this._checkCollision(e,this._shipObject)&&this._lostGame(),e.y+=this._velocity}for(let e=this._meteors.length;e--;)this._meteors[e].y>this._playAreaSize.height&&this._meteors.splice(e,1)}_drawMissiles(){for(let e=this._missiles.length;e--;){const o=this._missiles[e];if(this._context.drawImage(this._missileImage,o.x,o.y,this._missileWidth,this._missileHeight),this._enableDebug){this._context.save();const s=o.x+" "+o.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,o.x,o.y+this._missileWidth/2),this._context.restore()}for(const s of this._meteors)if(this._checkCollision(o,s)){s.destroyed=!0,this._missiles.splice(e,1),setTimeout(()=>this._removeMeteor(s),300);break}o.y-=10}for(let e=this._missiles.length;e--;)this._missiles[e].y<0&&this._missiles.splice(e,1)}_checkCollision(e,o){return e.x+e.size>=o.x&&e.x<=o.x+o.size&&e.y+e.size>=o.y&&e.y<=o.y+o.size}_drawTime(){const e="Elapsed Time : "+this.currentTime+"s";this._context.font="20px Russo One",this._context.fillStyle="#fbc02d",this._context.fillText(e,this._timeX,this._timeY)}_drawControllerSegment(){this._context.save(),this._context.fillStyle="black",this._context.fillRect(this._controllerArea.left,this._controllerArea.top,this._controllerArea.width,this._controllerArea.height),this._context.restore()}_drawController(e){this._context.save(),this._context.drawImage(this._controllerLeftImage,this._leftControllerPos.x,this._leftControllerPos.y,e,e),this._drawMiddleController(e),this._context.drawImage(this._controllerRightImage,this._rightControllerPos.x,this._rightControllerPos.y,e,e),this._context.drawImage(this._controllerUpImage,this._upControllerPos.x,this._upControllerPos.y,e,e),this._context.drawImage(this._controllerDownImage,this._downControllerPos.x,this._downControllerPos.y,e,e),this._context.restore()}_drawMiddleController(e){this._context.fillStyle="white",this._context.strokeStyle="#333333",this._context.lineWidth="3",this._context.fillRect(this._leftControllerPos.x+e,this._leftControllerPos.y+1,e,e-2),this._context.beginPath(),this._context.rect(this._leftControllerPos.x+e,this._leftControllerPos.y+1,e,e-2),this._context.stroke()}_drawControllerHighlight(e){this._context.save(),this._context.globalAlpha=.7,this._context.fillStyle="black",this._touchingLeftController?this._context.fillRect(this._leftControllerPos.x,this._leftControllerPos.y,e,e):this._touchingRightController?this._context.fillRect(this._rightControllerPos.x,this._rightControllerPos.y,e,e):this._touchingUpController?this._context.fillRect(this._upControllerPos.x,this._upControllerPos.y,e,e):this._touchingDownController&&this._context.fillRect(this._downControllerPos.x,this._downControllerPos.y,e,e),this._context.restore()}_drawPauseButton(){this._context.drawImage(this._pauseButton,this._pauseButtonPos.x,this._pauseButtonPos.y,this._pauseButtonSize,this._pauseButtonSize)}_drawYButton(){this._context.drawImage(this._yButtonImage,this._yButtonPos.x,this._yButtonPos.y,this._yButtonSize,this._yButtonSize),this._touchingYButton&&(this._context.save(),this._context.globalAlpha=.7,this._context.beginPath(),this._context.arc(this._yButtonPos.x+this._yButtonSize/2,this._yButtonPos.y+this._yButtonSize/2,this._yButtonSize/2,0,2*Math.PI),this._context.strokeStyle="black",this._context.stroke(),this._context.fillStyle="black",this._context.fill(),this._context.restore())}_isTouchingPauseButton(e){return e.clientX>=this._pauseButtonPos.x-this._touchSensitivity&&e.clientX<=this._pauseButtonPos.x+this._pauseButtonSize+this._touchSensitivity&&e.clientY>=this._pauseButtonPos.y-this._touchSensitivity&&e.clientY<=this._pauseButtonPos.y+this._pauseButtonSize+this._touchSensitivity}_isTouchingYButton(e){return e.clientX>=this._yButtonPos.x-this._touchSensitivity&&e.clientX<=this._yButtonPos.x+this._yButtonSize+this._touchSensitivity&&e.clientY>=this._yButtonPos.y-this._touchSensitivity&&e.clientY<=this._yButtonPos.y+this._yButtonSize+this._touchSensitivity}_isTouchingAController(e,o){return o.clientX>=e.x-this._touchSensitivity&&o.clientX<=e.x+this._controllerSize+this._touchSensitivity&&o.clientY>=e.y-this._touchSensitivity&&o.clientY<=e.y+this._controllerSize+this._touchSensitivity}_isTouchingController(e){const o=this._isTouchingAController(this._leftControllerPos,e),s=this._isTouchingAController(this._rightControllerPos,e),r=this._isTouchingAController(this._upControllerPos,e),n=this._isTouchingAController(this._downControllerPos,e);return o||s||r||n}_clearPointerTimeout(){for(const e of this._currentPointerTimeout)clearTimeout(e);this._currentPointerTimeout=[]}_moveShipLeft(){this._shipObject.x<=5||this._paused||(this._shipObject.x-=5)}_moveShipRight(){this._shipObject.x+5>=this._playAreaSize.width-this._shipObject.size||this._paused||(this._shipObject.x+=5)}_moveShipDown(){this._shipObject.y+5>=this._playAreaSize.height-this._shipObject.size||this._paused||(this._shipObject.y+=5)}_moveShipUp(){this._shipObject.y<=5||this._paused||(this._shipObject.y-=5)}_fireMissile(){this._missiles.push({x:this._shipObject.x+this._shipSize/2-this._missileWidth/2,y:this._shipObject.y-10,size:this._missileWidth})}_handleSpanning(){console.log(window.visualViewport.segments),this._spanning=window.visualViewport.segments&&window.visualViewport.segments.length>1,this._updateGameLayout(),this._spanning?this._hidePauseButton():this._showPauseButton(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_handleOrientationChange(e){this._pauseGame(),this._updateGameLayout(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_updateGameLayout(){let e;this._playAreaSize&&(e={width:this._playAreaSize.width,height:this._playAreaSize.height});const o=window.visualViewport.segments;if(o&&o.length>1?(this._playAreaSize={left:o[0].left,top:o[0].top,width:o[0].width,height:o[0].height},this._controllerArea={left:o[1].left,top:o[1].top,width:o[1].width,height:o[1].height},this._pauseButtonPos={x:this._controllerArea.left+this._controllerArea.width/2-this._pauseButtonSize/2,y:this._controllerArea.top+this._controllerArea.height/2-this._pauseButtonSize/2},this._yButtonPos={x:this._controllerArea.left+this._controllerArea.width-this._yButtonSize*1.5,y:this._controllerArea.top+this._controllerArea.height/2-this._yButtonSize/2},this._leftControllerPos={x:this._controllerArea.left,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize/2},this._rightControllerPos={x:this._controllerArea.left+2*this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize/2},this._upControllerPos={x:this._controllerArea.left+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize*3/2},this._downControllerPos={x:this._controllerArea.left+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2+this._controllerSize/2}):(this._playAreaSize={width:this._canvas.width,height:this._canvas.height},this._controllerArea={left:0,top:0,width:0,height:0},this._leftControllerPos={x:0,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._upControllerPos={x:this._controllerSizeTouch,y:this._playAreaSize.height-3*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._downControllerPos={x:this._controllerSizeTouch,y:this._playAreaSize.height-this._controllerSizeTouch},this._pauseButtonPos={x:0,y:0},this._yButtonPos={x:this._playAreaSize.width-this._yButtonSize-10,y:this._playAreaSize.height-this._yButtonSize-10}),e){const s=this._shipObject.x/e.width;this._shipObject.x=this._playAreaSize.width*s;const r=this._shipObject.y/e.height;this._shipObject.y=this._playAreaSize.height*r,this._makeObjectFitInPlayBoundaries(this._shipObject);for(const a of this._meteors){const l=a.x/e.width;a.x=this._playAreaSize.width*l;let d=a.y/e.height;a.y=this._playAreaSize.height*d,this._makeObjectFitInPlayBoundaries(a)}const n=this._background1Y/e.height;this._background1Y=this._playAreaSize.height*n;const h=this._background2Y/e.height;this._background2Y=this._playAreaSize.height*h}this._timeX=this._playAreaSize.width-this._timeSize,this._timeY=30}_makeObjectFitInPlayBoundaries(e){e.x<this._playAreaSize.left?e.x=this._playAreaSize.left:e.x+e.size>this._playAreaSize.width&&(e.x=this._playAreaSize.width-e.size),e.y<this._playAreaSize.top?e.y=this._playAreaSize.top:e.y+e.size>this._playAreaSize.height&&(e.y=this._playAreaSize.height-e.size)}render(){return js`
      <foldable-device-configurator></foldable-device-configurator>
      <canvas id="canvas"></canvas>
      <picture>
        <source srcset="images/pause-button.webp" type="image/webp"/>
        <img class="hidden" id="pause-button" src="images/pause-button.png" @click="${this._pauseGame}">
      </picture>
      <picture class="hidden">
        <source srcset="images/ship.webp" type="image/webp"/>
        <img id="ship" src="images/ship.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/meteor.webp" type="image/webp"/>
        <img id="meteor" src="images/meteor.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/meteor2.webp" type="image/webp"/>
        <img id="meteor2" src="images/meteor2.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/explosion.webp" type="image/webp"/>
        <img id="explosion" src="images/explosion.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/left-controller.webp" type="image/webp"/>
        <img id="left-controller" src="images/left-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/right-controller.webp" type="image/webp"/>
        <img id="right-controller" src="images/right-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/up-controller.webp" type="image/webp"/>
        <img id="up-controller" src="images/up-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/down-controller.webp" type="image/webp"/>
        <img id="down-controller" src="images/down-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/y-button.webp" type="image/webp"/>
        <img id="y-button" src="images/y-button.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/missile.webp" type="image/webp"/>
        <img id="missile" src="images/missile.png">
      </picture>
      <picture class="hidden">
        <source media="(max-width: 767px)"
                srcset="images/starfield-412.webp 412w, images/starfield-768.webp 768w, images/starfield-800.webp 800w"
                sizes="(max-width: 767px) 412px, 768px, 800px" type="image/webp"/>
        <source media="(max-width: 767px)"
                srcset="images/starfield-412.jpg 412w, images/starfield-768.jpg 768w, images/starfield-800.jpg 800w"
                sizes="(max-width: 767px) 412px, 768px, 800px" type="image/jpeg"/>
        <source media="(max-width: 1366px)"
                srcset="images/starfield-1024.webp 1024w, images/starfield-1366.webp 1366w"
                sizes="(max-width: 1366px) 1024px, 1366px" type="image/webp"/>
        <source media="(max-width: 1366px)"
                srcset="images/starfield-1024.jpg 1024w, images/starfield-1366.jpg 1366w"
                sizes="(max-width: 1366px) 1024px, 1366px" type="image/jpeg"/>
        <source media="(max-width: 1440px)"
                srcset="images/starfield-1440.webp 1440w, images/starfield-1366.webp 1366w"
                sizes="(max-width: 1440px) 1440px, 1366px" type="image/webp"/>
        <source media="(max-width: 1440px)"
                srcset="images/starfield-1440.jpg 1440w, images/starfield-1366.jpg 1366w"
                sizes="(max-width: 1440px) 1440px, 1366px" type="image/jpeg"/>
        <source media="(max-width: 1920px)"
                srcset="images/starfield-1920.webp 1920w, images/starfield-1440.webp 1440w"
                sizes="(max-width: 1920px) 1920px, 1440px" type="image/webp"/>
        <source media="(max-width: 1920px)"
                srcset="images/starfield-1920.jpg 1920w, images/starfield-1440.jpg 1440w"
                sizes="(max-width: 1920px) 1920px, 1440px" type="image/jpeg"/>
        <source media="(min-width: 1920px)"
                srcset="images/starfield-4k.webp 2560w, images/starfield-1920.webp 1920w"
                sizes="(max-width: 1920px) 2560px, 1920px" type="image/webp"/>
        <source media="(min-width: 1920px)"
                srcset="images/starfield-4k.jpg 2560w, images/starfield-1920.jpg 1920w"
                sizes="(max-width: 1920px) 2560px, 1920px" type="image/jpeg"/>
        <img id="background" src="images/starfield-1024.jpg" alt="Background of a starfield">
      </picture>
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
      <game-menu id="main-menu">
        <div slot="title">Welcome to Star Fold</div>
        <picture slot="button">
          <source srcset="images/play-button.webp" type="image/webp"/>
          <img alt="Image of a play button" class="menu-button" src="images/play-button.jpg" @click="${this._startGame}">
        </picture>
        <picture slot="button2">
          <source srcset="images/about-button.webp" type="image/webp"/>
          <img alt="Image of an about button" class="menu-button" src="images/about-button.jpg" @click="${this._showAbout}">
        </picture>
      </game-menu>
      <game-menu id="pause-menu">
        <div slot="title">Game paused</div>
        <picture slot="button">
          <source srcset="images/resume-button.webp" type="image/webp"/>
          <img alt="Image of a resume button" class="menu-button" src="images/resume-button.jpg" @click="${this._resumeGame}">
        </picture>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
      <game-menu id="about-menu">
        <div slot="title">
          <div class="detail-about">About<br><br>This demo provides a specific experience on dual screens and foldable devices. Make sure to span the window.
          </div>
        </div>
        <picture slot="button">
          <source srcset="images/close-button.webp" type="image/webp"/>
          <img alt="Image of a close button" class="menu-button" src="images/close-button.jpg" @click="${this._openMainMenu}">
        </picture>
      </game-menu>
      <game-menu id="lost-menu">
        <div slot="title">You Lost!</div>
        <div slot="button" class="score">Your time was ${this.currentTime} seconds</div>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
    `}}p(Pr,"styles",Ys`
    :host {
      width: 100vw;
      height: 100vh;
      color: white;
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

    #canvas {
      width: 100%;
      height: 100%;
    }

    .hidden {
      display: none;
    }

    #fullscreen-rotate {
      width: 100%;
      height: 100%;
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      color: white;
      display: none;
    }

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) contrast(150%);
      cursor: pointer;
    }

    .detail-about {
      font-size: 0.8em;
      margin: 5px;
      text-align: justify;
      text-justify: inter-character;
    }

    .score {
      color: white;
      font-family: 'Russo One', sans-serif;
      font-size: 1em;
      margin-bottom: 20px;
    }

    #pause-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      user-select: none;
      cursor: pointer;
    }
  `);customElements.define("main-application",Pr);
