var Fs=Object.defineProperty;var js=(i,t,e)=>t in i?Fs(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var v=(i,t,e)=>(js(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=window,Ji=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qo=Symbol(),ur=new WeakMap;let Bs=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==qo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ji&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=ur.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ur.set(e,t))}return t}toString(){return this.cssText}};const Ws=i=>new Bs(typeof i=="string"?i:i+"",void 0,qo),qs=(i,t)=>{Ji?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),o=be.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)})},pr=Ji?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Ws(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We;const Ae=window,vr=Ae.trustedTypes,Ks=vr?vr.emptyScript:"",fr=Ae.reactiveElementPolyfillSupport,Ci={toAttribute(i,t){switch(t){case Boolean:i=i?Ks:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ko=(i,t)=>t!==i&&(t==t||i==i),qe={attribute:!0,type:String,converter:Ci,reflect:!1,hasChanged:Ko};let Ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const o=this._$Ep(r,e);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,e=qe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(pr(o))}else t!==void 0&&e.push(pr(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return qs(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=qe){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Ci).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Ci;this._$El=s,this[s]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Ko)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ht.finalized=!0,Ht.elementProperties=new Map,Ht.elementStyles=[],Ht.shadowRootOptions={mode:"open"},fr==null||fr({ReactiveElement:Ht}),((We=Ae.reactiveElementVersions)!==null&&We!==void 0?We:Ae.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke;const xe=window,yt=xe.trustedTypes,mr=yt?yt.createPolicy("lit-html",{createHTML:i=>i}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Zo="?"+X,Zs=`<${Zo}>`,wt=document,ie=(i="")=>wt.createComment(i),re=i=>i===null||typeof i!="object"&&typeof i!="function",Jo=Array.isArray,Js=i=>Jo(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gr=/-->/g,br=/>/g,tt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_r=/'/g,yr=/"/g,Xo=/^(?:script|style|textarea|title)$/i,Xs=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ki=Xs(1),ot=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),wr=new WeakMap,vt=wt.createTreeWalker(wt,129,null,!1),Ys=(i,t)=>{const e=i.length-1,r=[];let o,s=t===2?"<svg>":"",n=It;for(let a=0;a<e;a++){const l=i[a];let d,c,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===It?c[1]==="!--"?n=gr:c[1]!==void 0?n=br:c[2]!==void 0?(Xo.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=tt):c[3]!==void 0&&(n=tt):n===tt?c[0]===">"?(n=o??It,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?tt:c[3]==='"'?yr:_r):n===yr||n===_r?n=tt:n===gr||n===br?n=It:(n=tt,o=void 0);const b=n===tt&&i[a+1].startsWith("/>")?" ":"";s+=n===It?l+Zs:u>=0?(r.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+X+b):l+X+(u===-2?(r.push(void 0),a):b)}const h=s+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[mr!==void 0?mr.createHTML(h):h,r]};let zi=class Yo{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Ys(t,e);if(this.el=Yo.createElement(l,r),vt.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=vt.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(X)){const p=d[n++];if(c.push(u),p!==void 0){const b=o.getAttribute(p.toLowerCase()+"$lit$").split(X),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?Qs:g[1]==="?"?en:g[1]==="@"?rn:Me})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(Xo.test(o.tagName)){const c=o.textContent.split(X),u=c.length-1;if(u>0){o.textContent=yt?yt.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],ie()),vt.nextNode(),a.push({type:2,index:++s});o.append(c[u],ie())}}}else if(o.nodeType===8)if(o.data===Zo)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(X,c+1))!==-1;)a.push({type:7,index:s}),c+=X.length-1}s++}}static createElement(t,e){const r=wt.createElement("template");return r.innerHTML=t,r}};function $t(i,t,e=i,r){var o,s,n,h;if(t===ot)return t;let a=r!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[r]:e._$Cl;const l=re(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=$t(i,a._$AS(i,t.values),a,r)),t}let Gs=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:o}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:wt).importNode(r,!0);vt.currentNode=s;let n=vt.nextNode(),h=0,a=0,l=o[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Xi(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new on(n,this,t)),this.u.push(d),l=o[++a]}h!==(l==null?void 0:l.index)&&(n=vt.nextNode(),h++)}return s}p(t){let e=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Xi=class Go{constructor(t,e,r,o){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=$t(this,t,e),re(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==ot&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Js(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&re(this._$AH)?this._$AA.nextSibling.data=t:this.T(wt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=zi.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(r);else{const n=new Gs(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(t){let e=wr.get(t.strings);return e===void 0&&wr.set(t.strings,e=new zi(t)),e}k(t){Jo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new Go(this.O(ie()),this.O(ie()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Me=class{constructor(t,e,r,o,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=$t(this,t,e,0),n=!re(t)||t!==this._$AH&&t!==ot,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=$t(this,h[r+a],e,a),l===ot&&(l=this._$AH[a]),n||(n=!re(l)||l!==this._$AH[a]),l===O?t=O:t!==O&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qs=class extends Me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const tn=yt?yt.emptyScript:"";let en=class extends Me{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,tn):this.element.removeAttribute(this.name)}},rn=class extends Me{constructor(t,e,r,o,s){super(t,e,r,o,s),this.type=5}_$AI(t,e=this){var r;if((t=(r=$t(this,t,e,0))!==null&&r!==void 0?r:O)===ot)return;const o=this._$AH,s=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},on=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){$t(this,t)}};const $r=xe.litHtmlPolyfillSupport;$r==null||$r(zi,Xi),((Ke=xe.litHtmlVersions)!==null&&Ke!==void 0?Ke:xe.litHtmlVersions=[]).push("2.6.1");const sn=(i,t,e)=>{var r,o;const s=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const h=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new Xi(t.insertBefore(ie(),h),h,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=window,Yi=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gi=Symbol(),Sr=new WeakMap;let Qo=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Yi&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Sr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Sr.set(e,t))}return t}toString(){return this.cssText}};const nn=i=>new Qo(typeof i=="string"?i:i+"",void 0,Gi),an=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Qo(e,i,Gi)},ln=(i,t)=>{Yi?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),o=_e.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)})},Ar=Yi?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return nn(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ze;const Ee=window,xr=Ee.trustedTypes,hn=xr?xr.emptyScript:"",Er=Ee.reactiveElementPolyfillSupport,Pi={toAttribute(i,t){switch(t){case Boolean:i=i?hn:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ts=(i,t)=>t!==i&&(t==t||i==i),Je={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:ts};let lt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const o=this._$Ep(r,e);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,e=Je){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Je}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(Ar(o))}else t!==void 0&&e.push(Ar(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ln(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=Je){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Pi).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Pi;this._$El=s,this[s]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||ts)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};lt.finalized=!0,lt.elementProperties=new Map,lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},Er==null||Er({ReactiveElement:lt}),((Ze=Ee.reactiveElementVersions)!==null&&Ze!==void 0?Ze:Ee.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe,Ye;let ft=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ot}};ft.finalized=!0,ft._$litElement$=!0,(Xe=globalThis.litElementHydrateSupport)===null||Xe===void 0||Xe.call(globalThis,{LitElement:ft});const Cr=globalThis.litElementPolyfillSupport;Cr==null||Cr({LitElement:ft});((Ye=globalThis.litElementVersions)!==null&&Ye!==void 0?Ye:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dn=i=>(...t)=>({_$litDirective$:i,values:t});let un=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn=dn(class extends un{constructor(i){var t;if(super(i),i.type!==cn.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((e=this.st)===null||e===void 0)&&e.has(s))&&this.nt.add(s);return this.render(t)}const o=i.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return ot}});var Ti="";function Ri(i){Ti=i}function vn(){if(!Ti){const i=[...document.getElementsByTagName("script")],t=i.find(e=>e.hasAttribute("data-shoelace"));if(t)Ri(t.getAttribute("data-shoelace"));else{const e=i.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let r="";e&&(r=e.getAttribute("src")),Ri(r.split("/").slice(0,-1).join("/"))}}return Ti.replace(/\/$/,"")}var fn={name:"default",resolver:i=>`${vn()}/assets/icons/${i}.svg`},mn=fn,kr={caret:`
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
  `},gn={name:"system",resolver:i=>i in kr?`data:image/svg+xml,${encodeURIComponent(kr[i])}`:""},bn=gn,_n=[mn,bn],Ui=[];function yn(i){Ui.push(i)}function wn(i){Ui=Ui.filter(t=>t!==i)}function zr(i){return _n.find(t=>t.name===i)}var Ge=new Map;function $n(i,t="cors"){if(Ge.has(i))return Ge.get(i);const e=fetch(i,{mode:t}).then(async r=>({ok:r.ok,status:r.status,html:await r.text()}));return Ge.set(i,e),e}var Qe=new Map;async function Sn(i){if(Qe.has(i))return Qe.get(i);const t=await $n(i),e={ok:t.ok,status:t.status,svg:null};if(t.ok){const r=document.createElement("div");r.innerHTML=t.html;const o=r.firstElementChild;e.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return Qe.set(i,e),e}var ye=window,Qi=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tr=Symbol(),Pr=new WeakMap,es=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qi&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Pr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Pr.set(e,t))}return t}toString(){return this.cssText}},An=i=>new es(typeof i=="string"?i:i+"",void 0,tr),Ut=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new es(e,i,tr)},xn=(i,t)=>{Qi?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),o=ye.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)})},Tr=Qi?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return An(e)})(i):i,ti,Ce=window,Rr=Ce.trustedTypes,En=Rr?Rr.emptyScript:"",Ur=Ce.reactiveElementPolyfillSupport,Oi={toAttribute(i,t){switch(t){case Boolean:i=i?En:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},is=(i,t)=>t!==i&&(t==t||i==i),ei={attribute:!0,type:String,converter:Oi,reflect:!1,hasChanged:is},ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const o=this._$Ep(r,e);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,e=ei){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ei}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(Tr(o))}else t!==void 0&&e.push(Tr(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return xn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=ei){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Oi).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Oi;this._$El=s,this[s]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||is)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},Ur==null||Ur({ReactiveElement:ht}),((ti=Ce.reactiveElementVersions)!==null&&ti!==void 0?ti:Ce.reactiveElementVersions=[]).push("1.6.1");var ii,ke=window,St=ke.trustedTypes,Or=St?St.createPolicy("lit-html",{createHTML:i=>i}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,rs="?"+Y,Cn=`<${rs}>`,At=document,oe=(i="")=>At.createComment(i),se=i=>i===null||typeof i!="object"&&typeof i!="function",os=Array.isArray,kn=i=>os(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vr=/-->/g,Lr=/>/g,et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,Nr=/"/g,ss=/^(?:script|style|textarea|title)$/i,zn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ne=zn(1),Q=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Hr=new WeakMap,mt=At.createTreeWalker(At,129,null,!1),Pn=(i,t)=>{const e=i.length-1,r=[];let o,s=t===2?"<svg>":"",n=Dt;for(let a=0;a<e;a++){const l=i[a];let d,c,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===Dt?c[1]==="!--"?n=Vr:c[1]!==void 0?n=Lr:c[2]!==void 0?(ss.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=et):c[3]!==void 0&&(n=et):n===et?c[0]===">"?(n=o??Dt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?et:c[3]==='"'?Nr:Mr):n===Nr||n===Mr?n=et:n===Vr||n===Lr?n=Dt:(n=et,o=void 0);const b=n===et&&i[a+1].startsWith("/>")?" ":"";s+=n===Dt?l+Cn:u>=0?(r.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+Y+b):l+Y+(u===-2?(r.push(void 0),a):b)}const h=s+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Or!==void 0?Or.createHTML(h):h,r]},ze=class{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Pn(t,e);if(this.el=ze.createElement(l,r),mt.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=mt.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Y)){const p=d[n++];if(c.push(u),p!==void 0){const b=o.getAttribute(p.toLowerCase()+"$lit$").split(Y),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?Rn:g[1]==="?"?On:g[1]==="@"?Vn:He})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(ss.test(o.tagName)){const c=o.textContent.split(Y),u=c.length-1;if(u>0){o.textContent=St?St.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],oe()),mt.nextNode(),a.push({type:2,index:++s});o.append(c[u],oe())}}}else if(o.nodeType===8)if(o.data===rs)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Y,c+1))!==-1;)a.push({type:7,index:s}),c+=Y.length-1}s++}}static createElement(t,e){const r=At.createElement("template");return r.innerHTML=t,r}};function xt(i,t,e=i,r){var o,s,n,h;if(t===Q)return t;let a=r!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[r]:e._$Cl;const l=se(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=xt(i,a._$AS(i,t.values),a,r)),t}var Tn=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:o}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:At).importNode(r,!0);mt.currentNode=s;let n=mt.nextNode(),h=0,a=0,l=o[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Ne(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Ln(n,this,t)),this.u.push(d),l=o[++a]}h!==(l==null?void 0:l.index)&&(n=mt.nextNode(),h++)}return s}p(t){let e=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Ne=class{constructor(t,e,r,o){var s;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),se(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Q&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kn(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&se(this._$AH)?this._$AA.nextSibling.data=t:this.T(At.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ze.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(r);else{const n=new Tn(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(t){let e=Hr.get(t.strings);return e===void 0&&Hr.set(t.strings,e=new ze(t)),e}k(t){os(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new Ne(this.O(oe()),this.O(oe()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},He=class{constructor(i,t,e,r,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=i,this.name=t,this._$AM=r,this.options=o,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,r){const o=this.strings;let s=!1;if(o===void 0)i=xt(this,i,t,0),s=!se(i)||i!==this._$AH&&i!==Q,s&&(this._$AH=i);else{const n=i;let h,a;for(i=o[0],h=0;h<o.length-1;h++)a=xt(this,n[e+h],t,h),a===Q&&(a=this._$AH[h]),s||(s=!se(a)||a!==this._$AH[h]),a===P?i=P:i!==P&&(i+=(a??"")+o[h+1]),this._$AH[h]=a}s&&!r&&this.j(i)}j(i){i===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Rn=class extends He{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},Un=St?St.emptyScript:"",On=class extends He{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,Un):this.element.removeAttribute(this.name)}},Vn=class extends He{constructor(t,e,r,o,s){super(t,e,r,o,s),this.type=5}_$AI(t,e=this){var r;if((t=(r=xt(this,t,e,0))!==null&&r!==void 0?r:P)===Q)return;const o=this._$AH,s=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==P&&(o===P||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Ln=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}},Ir=ke.litHtmlPolyfillSupport;Ir==null||Ir(ze,Ne),((ii=ke.litHtmlVersions)!==null&&ii!==void 0?ii:ke.litHtmlVersions=[]).push("2.6.1");var Mn=(i,t,e)=>{var r,o;const s=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const h=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new Ne(t.insertBefore(oe(),h),h,void 0,e??{})}return n._$AI(i),n},ri,oi,Yt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=Mn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return Q}};Yt.finalized=!0,Yt._$litElement$=!0,(ri=globalThis.litElementHydrateSupport)===null||ri===void 0||ri.call(globalThis,{LitElement:Yt});var Dr=globalThis.litElementPolyfillSupport;Dr==null||Dr({LitElement:Yt});((oi=globalThis.litElementVersions)!==null&&oi!==void 0?oi:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var ue=Ut`
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
`,Nn=Ut`
  ${ue}

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
`,ns=Object.defineProperty,Hn=Object.defineProperties,In=Object.getOwnPropertyDescriptor,Dn=Object.getOwnPropertyDescriptors,Fr=Object.getOwnPropertySymbols,Fn=Object.prototype.hasOwnProperty,jn=Object.prototype.propertyIsEnumerable,jr=(i,t,e)=>t in i?ns(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,st=(i,t)=>{for(var e in t||(t={}))Fn.call(t,e)&&jr(i,e,t[e]);if(Fr)for(var e of Fr(t))jn.call(t,e)&&jr(i,e,t[e]);return i},Ie=(i,t)=>Hn(i,Dn(t)),m=(i,t,e,r)=>{for(var o=r>1?void 0:r?In(t,e):t,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&ns(t,e,o),o};function pe(i,t){const e=st({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r,n=Array.isArray(i)?i:[i];r.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[o](d,c)}}),s.call(this,h)}}}var as={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ls=i=>(...t)=>({_$litDirective$:i,values:t}),hs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ve=i=>t=>typeof t=="function"?((e,r)=>(customElements.define(e,r),r))(i,t):((e,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(e,n)}}})(i,t),Bn=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ie(st({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function w(i){return(t,e)=>e!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(i,t,e):Bn(i,t)}function De(i){return w(Ie(st({},i),{state:!0}))}var Wn=({finisher:i,descriptor:t})=>(e,r)=>{var o;if(r===void 0){const s=(o=e.originalKey)!==null&&o!==void 0?o:e.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:Ie(st({},e),{key:s});return i!=null&&(n.finisher=function(h){i(h,s)}),n}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(s,r)}};function er(i,t){return Wn({descriptor:e=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&n!==void 0?n:null),this[o]}}return r}})}var si;((si=window.HTMLSlotElement)===null||si===void 0?void 0:si.prototype.assignedElements)!=null;var nt=class extends Yt{emit(i,t){const e=new CustomEvent(i,st({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}};m([w()],nt.prototype,"dir",2);m([w()],nt.prototype,"lang",2);/*! Bundled license information:

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
*/var Vi=class extends hs{constructor(i){if(super(i),this.it=P,i.type!==as.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===P||i==null)return this._t=void 0,this.it=i;if(i===Q)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const t=[i];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Vi.directiveName="unsafeHTML",Vi.resultType=1;var Li=class extends Vi{};Li.directiveName="unsafeSVG",Li.resultType=2;var qn=ls(Li),ni,W=class extends nt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),yn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),wn(this)}getUrl(){const i=zr(this.library);return this.name&&i?i.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const t=zr(this.library),e=this.getUrl();if(ni||(ni=new DOMParser),e)try{const r=await Sn(e);if(e!==this.getUrl())return;if(r.ok){const s=ni.parseFromString(r.svg,"text/html").body.querySelector("svg");s!==null?((i=t==null?void 0:t.mutator)==null||i.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return ne` ${qn(this.svg)} `}};W.styles=Nn;m([De()],W.prototype,"svg",2);m([w({reflect:!0})],W.prototype,"name",2);m([w()],W.prototype,"src",2);m([w()],W.prototype,"label",2);m([w({reflect:!0})],W.prototype,"library",2);m([pe("label")],W.prototype,"handleLabelChange",1);m([pe(["name","src","library"])],W.prototype,"setIcon",1);W=m([ve("sl-icon")],W);/*! Bundled license information:

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
*/function Br(i,t){return new Promise(e=>{function r(o){o.target===i&&(i.removeEventListener(t,r),e())}i.addEventListener(t,r)})}function Wr(i,t,e){return new Promise(r=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=i.animate(t,Ie(st({},e),{duration:Kn()?0:e.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Kn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qr(i){return Promise.all(i.getAnimations().map(t=>new Promise(e=>{const r=requestAnimationFrame(e);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}var cs=new Map,Zn=new WeakMap;function Jn(i){return i??{keyframes:[],options:{duration:0}}}function Kr(i,t){return t.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function ds(i,t){cs.set(i,Jn(t))}function Zr(i,t,e){const r=Zn.get(i);if(r!=null&&r[t])return Kr(r[t],e.dir);const o=cs.get(t);return o?Kr(o,e.dir):{keyframes:[],options:{duration:0}}}var Mi=new Set,Xn=new MutationObserver(vs),ut=new Map,us=document.documentElement.dir||"ltr",ps=document.documentElement.lang||navigator.language,Gt;Xn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Yn(...i){i.map(t=>{const e=t.$code.toLowerCase();ut.has(e)?ut.set(e,Object.assign(Object.assign({},ut.get(e)),t)):ut.set(e,t),Gt||(Gt=t)}),vs()}function vs(){us=document.documentElement.dir||"ltr",ps=document.documentElement.lang||navigator.language,[...Mi.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}var Gn=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Mi.add(this.host)}hostDisconnected(){Mi.delete(this.host)}dir(){return`${this.host.dir||us}`.toLowerCase()}lang(){return`${this.host.lang||ps}`.toLowerCase()}term(i,...t){var e,r;const o=new Intl.Locale(this.lang()),s=o==null?void 0:o.language.toLowerCase(),n=(r=(e=o==null?void 0:o.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",h=ut.get(`${s}-${n}`),a=ut.get(s);let l;if(h&&h[i])l=h[i];else if(a&&a[i])l=a[i];else if(Gt&&Gt[i])l=Gt[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof l=="function"?l(...t):l}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}},ir=class extends Gn{},Qn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Yn(Qn);var fs=class{constructor(i,...t){this.slotNames=[],(this.host=i).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(i){const t=i.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},ta=Ut`
  ${ue}

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
`,rr=ls(class extends hs{constructor(i){var t;if(super(i),i.type!==as.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((e=this.st)===null||e===void 0)&&e.has(s))&&this.nt.add(s);return this.render(t)}const o=i.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return Q}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var at=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),q=class extends nt{constructor(){super(...arguments),this.hasSlotController=new fs(this,"icon","suffix"),this.localize=new ir(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await qr(this.base),this.base.hidden=!1;const{keyframes:i,options:t}=Zr(this,"alert.show",{dir:this.localize.dir()});await Wr(this.base,i,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await qr(this.base);const{keyframes:i,options:t}=Zr(this,"alert.hide",{dir:this.localize.dir()});await Wr(this.base,i,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Br(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Br(this,"sl-after-hide")}async toast(){return new Promise(i=>{at.parentElement===null&&document.body.append(at),at.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{at.removeChild(this),i(),at.querySelector("sl-alert")===null&&at.remove()},{once:!0})})}render(){return ne`
      <div
        part="base"
        class=${rr({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?ne`
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
    `}};q.styles=ta;m([er('[part~="base"]')],q.prototype,"base",2);m([w({type:Boolean,reflect:!0})],q.prototype,"open",2);m([w({type:Boolean,reflect:!0})],q.prototype,"closable",2);m([w({reflect:!0})],q.prototype,"variant",2);m([w({type:Number})],q.prototype,"duration",2);m([pe("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);m([pe("duration")],q.prototype,"handleDurationChange",1);q=m([ve("sl-alert")],q);ds("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ds("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var ea=Ut`
  ${ue}

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
`,ms=Symbol.for(""),ia=i=>{if((i==null?void 0:i.r)===ms)return i==null?void 0:i._$litStatic$},Pe=(i,...t)=>({_$litStatic$:t.reduce((e,r,o)=>e+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+i[o+1],i[0]),r:ms}),Jr=new Map,ra=i=>(t,...e)=>{const r=e.length;let o,s;const n=[],h=[];let a,l=0,d=!1;for(;l<r;){for(a=t[l];l<r&&(s=e[l],(o=ia(s))!==void 0);)a+=o+t[++l],d=!0;h.push(s),n.push(a),l++}if(l===r&&n.push(t[r]),d){const c=n.join("$$lit$$");(t=Jr.get(c))===void 0&&(n.raw=n,Jr.set(c,t=n)),e=h}return i(t,...e)},we=ra(ne);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var U=i=>i??P;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var j=class extends nt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){const i=!!this.href,t=i?Pe`a`:Pe`button`;return we`
      <${t}
        part="base"
        class=${rr({"icon-button":!0,"icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${U(i?void 0:this.disabled)}
        type=${U(i?void 0:"button")}
        href=${U(i?this.href:void 0)}
        target=${U(i?this.target:void 0)}
        download=${U(i?this.download:void 0)}
        rel=${U(i&&this.target?"noreferrer noopener":void 0)}
        role=${U(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${U(this.name)}
          library=${U(this.library)}
          src=${U(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};j.styles=ea;m([er(".icon-button")],j.prototype,"button",2);m([De()],j.prototype,"hasFocus",2);m([w()],j.prototype,"name",2);m([w()],j.prototype,"library",2);m([w()],j.prototype,"src",2);m([w()],j.prototype,"href",2);m([w()],j.prototype,"target",2);m([w()],j.prototype,"download",2);m([w()],j.prototype,"label",2);m([w({type:Boolean,reflect:!0})],j.prototype,"disabled",2);j=m([ve("sl-icon-button")],j);var Ft=new WeakMap,Xr=new WeakMap,jt=new WeakMap,oa=class{constructor(i,t){(this.host=i).addController(this),this.options=st({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const r=e.getRootNode(),o=e.getAttribute("form");if(o)return r.getElementById(o)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var r;return(r=e.disabled)!=null?r:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,setValue:(e,r)=>e.value=r},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(i){i?(this.form=i,Ft.has(this.form)?Ft.get(this.form).add(this.host):Ft.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),jt.has(this.form)||(jt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var i;this.form&&((i=Ft.get(this.form))==null||i.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),jt.has(this.form)&&(this.form.reportValidity=jt.get(this.form),jt.delete(this.form))),this.form=void 0}handleFormData(i){const t=this.options.disabled(this.host),e=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof e=="string"&&e.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(s=>{i.formData.append(e,s.toString())}):i.formData.append(e,r.toString()))}handleFormSubmit(i){var t;const e=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Ft.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!e&&!r(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const t of i)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(i,t){Xr.set(i,t),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&e.setAttribute(r,t.getAttribute(r))})),this.form.append(e),e.click(),e.remove()}}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){var t;const e=this.host,r=Boolean(Xr.get(e)),o=Boolean(e.required);(t=this.form)!=null&&t.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!i),e.toggleAttribute("data-valid",i),e.toggleAttribute("data-user-invalid",!i&&r),e.toggleAttribute("data-user-valid",i&&r))}updateValidity(){const i=this.host;this.setValidity(i.checkValidity())}},sa=Ut`
  ${ue}

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

  /* When disabled, prevent mouse events from bubbling up */
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
`,$=class extends nt{constructor(){super(...arguments),this.formControlController=new oa(this,{form:i=>{if(i.hasAttribute("form")){const t=i.getRootNode(),e=i.getAttribute("form");return t.getElementById(e)}return i.closest("form")}}),this.hasSlotController=new fs(this,"[default]","prefix","suffix"),this.localize=new ir(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){if(this.disabled||this.loading){i.preventDefault(),i.stopPropagation();return}this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),t=i?Pe`a`:Pe`button`;return we`
      <${t}
        part="base"
        class=${rr({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${U(i?void 0:this.disabled)}
        type=${U(i?void 0:this.type)}
        title=${this.title}
        name=${U(i?void 0:this.name)}
        value=${U(i?void 0:this.value)}
        href=${U(i?this.href:void 0)}
        target=${U(i?this.target:void 0)}
        download=${U(i?this.download:void 0)}
        rel=${U(i&&this.target?"noreferrer noopener":void 0)}
        role=${U(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?we` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?we`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};$.styles=sa;m([er(".button")],$.prototype,"button",2);m([De()],$.prototype,"hasFocus",2);m([De()],$.prototype,"invalid",2);m([w()],$.prototype,"title",2);m([w({reflect:!0})],$.prototype,"variant",2);m([w({reflect:!0})],$.prototype,"size",2);m([w({type:Boolean,reflect:!0})],$.prototype,"caret",2);m([w({type:Boolean,reflect:!0})],$.prototype,"disabled",2);m([w({type:Boolean,reflect:!0})],$.prototype,"loading",2);m([w({type:Boolean,reflect:!0})],$.prototype,"outline",2);m([w({type:Boolean,reflect:!0})],$.prototype,"pill",2);m([w({type:Boolean,reflect:!0})],$.prototype,"circle",2);m([w()],$.prototype,"type",2);m([w()],$.prototype,"name",2);m([w()],$.prototype,"value",2);m([w()],$.prototype,"href",2);m([w()],$.prototype,"target",2);m([w()],$.prototype,"download",2);m([w()],$.prototype,"form",2);m([w({attribute:"formaction"})],$.prototype,"formAction",2);m([w({attribute:"formenctype"})],$.prototype,"formEnctype",2);m([w({attribute:"formmethod"})],$.prototype,"formMethod",2);m([w({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);m([w({attribute:"formtarget"})],$.prototype,"formTarget",2);m([pe("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$=m([ve("sl-button")],$);var na=Ut`
  ${ue}

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
`,Ni=class extends nt{constructor(){super(...arguments),this.localize=new ir(this)}render(){return ne`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ni.styles=na;Ni=m([ve("sl-spinner")],Ni);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=window,or=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sr=Symbol(),Yr=new WeakMap;let gs=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(or&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Yr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Yr.set(e,t))}return t}toString(){return this.cssText}};const bs=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new gs(e,i,sr)},Gr=or?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(r=>new gs(typeof r=="string"?r:r+"",void 0,sr))(e)})(i):i;var ai;const Te=window,Qr=Te.trustedTypes,aa=Qr?Qr.emptyScript:"",to=Te.reactiveElementPolyfillSupport,Hi={toAttribute(i,t){switch(t){case Boolean:i=i?aa:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},_s=(i,t)=>t!==i&&(t==t||i==i),li={attribute:!0,type:String,converter:Hi,reflect:!1,hasChanged:_s};let ct=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const o=this._$Ep(r,e);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,e=li){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||li}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(Gr(o))}else t!==void 0&&e.push(Gr(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((r,o)=>{or?r.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const n=document.createElement("style"),h=$e.litNonce;h!==void 0&&n.setAttribute("nonce",h),n.textContent=s.cssText,r.appendChild(n)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=li){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Hi).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Hi;this._$El=s,this[s]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||_s)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hi;ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},to==null||to({ReactiveElement:ct}),((ai=Te.reactiveElementVersions)!==null&&ai!==void 0?ai:Te.reactiveElementVersions=[]).push("1.6.1");const Re=window,Et=Re.trustedTypes,eo=Et?Et.createPolicy("lit-html",{createHTML:i=>i}):void 0,Z=`lit$${(Math.random()+"").slice(9)}$`,ys="?"+Z,la=`<${ys}>`,Ct=document,ae=(i="")=>Ct.createComment(i),le=i=>i===null||typeof i!="object"&&typeof i!="function",io=Array.isArray,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ro=/-->/g,oo=/>/g,it=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),so=/'/g,no=/"/g,ao=/^(?:script|style|textarea|title)$/i,Ot=(i=>(t,...e)=>({_$litType$:i,strings:t,values:e}))(1),kt=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),lo=new WeakMap,gt=Ct.createTreeWalker(Ct,129,null,!1);let Ii=class ws{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=((c,u)=>{const p=c.length-1,b=[];let g,f=u===2?"<svg>":"",y=Bt;for(let k=0;k<p;k++){const D=c[k];let x,S,z=-1,A=0;for(;A<D.length&&(y.lastIndex=A,S=y.exec(D),S!==null);)A=y.lastIndex,y===Bt?S[1]==="!--"?y=ro:S[1]!==void 0?y=oo:S[2]!==void 0?(ao.test(S[2])&&(g=RegExp("</"+S[2],"g")),y=it):S[3]!==void 0&&(y=it):y===it?S[0]===">"?(y=g??Bt,z=-1):S[1]===void 0?z=-2:(z=y.lastIndex-S[2].length,x=S[1],y=S[3]===void 0?it:S[3]==='"'?no:so):y===no||y===so?y=it:y===ro||y===oo?y=Bt:(y=it,g=void 0);const fe=y===it&&c[k+1].startsWith("/>")?" ":"";f+=y===Bt?D+la:z>=0?(b.push(x),D.slice(0,z)+"$lit$"+D.slice(z)+Z+fe):D+Z+(z===-2?(b.push(void 0),k):fe)}const T=f+(c[p]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[eo!==void 0?eo.createHTML(T):T,b]})(t,e);if(this.el=ws.createElement(l,r),gt.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=gt.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Z)){const p=d[n++];if(c.push(u),p!==void 0){const b=o.getAttribute(p.toLowerCase()+"$lit$").split(Z),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?ha:g[1]==="?"?da:g[1]==="@"?ua:Fe})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(ao.test(o.tagName)){const c=o.textContent.split(Z),u=c.length-1;if(u>0){o.textContent=Et?Et.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],ae()),gt.nextNode(),a.push({type:2,index:++s});o.append(c[u],ae())}}}else if(o.nodeType===8)if(o.data===ys)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Z,c+1))!==-1;)a.push({type:7,index:s}),c+=Z.length-1}s++}}static createElement(t,e){const r=Ct.createElement("template");return r.innerHTML=t,r}};function zt(i,t,e=i,r){var o,s,n,h;if(t===kt)return t;let a=r!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[r]:e._$Cl;const l=le(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=zt(i,a._$AS(i,t.values),a,r)),t}let nr=class $s{constructor(t,e,r,o){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=zt(this,t,e),le(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==kt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(r=>io(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==V&&le(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ct.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ii.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(r);else{const n=new class{constructor(a,l){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var l;const{el:{content:d},parts:c}=this._$AD,u=((l=a==null?void 0:a.creationScope)!==null&&l!==void 0?l:Ct).importNode(d,!0);gt.currentNode=u;let p=gt.nextNode(),b=0,g=0,f=c[0];for(;f!==void 0;){if(b===f.index){let y;f.type===2?y=new nr(p,p.nextSibling,this,a):f.type===1?y=new f.ctor(p,f.name,f.strings,this,a):f.type===6&&(y=new pa(p,this,a)),this.u.push(y),f=c[++g]}b!==(f==null?void 0:f.index)&&(p=gt.nextNode(),b++)}return u}p(a){let l=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,l),l+=d.strings.length-2):d._$AI(a[l])),l++}}(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(t){let e=lo.get(t.strings);return e===void 0&&lo.set(t.strings,e=new Ii(t)),e}k(t){io(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new $s(this.O(ae()),this.O(ae()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Fe=class{constructor(i,t,e,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=i,this.name=t,this._$AM=r,this.options=o,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,r){const o=this.strings;let s=!1;if(o===void 0)i=zt(this,i,t,0),s=!le(i)||i!==this._$AH&&i!==kt,s&&(this._$AH=i);else{const n=i;let h,a;for(i=o[0],h=0;h<o.length-1;h++)a=zt(this,n[e+h],t,h),a===kt&&(a=this._$AH[h]),s||(s=!le(a)||a!==this._$AH[h]),a===V?i=V:i!==V&&(i+=(a??"")+o[h+1]),this._$AH[h]=a}s&&!r&&this.j(i)}j(i){i===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},ha=class extends Fe{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===V?void 0:i}};const ca=Et?Et.emptyScript:"";let da=class extends Fe{constructor(){super(...arguments),this.type=4}j(i){i&&i!==V?this.element.setAttribute(this.name,ca):this.element.removeAttribute(this.name)}},ua=class extends Fe{constructor(i,t,e,r,o){super(i,t,e,r,o),this.type=5}_$AI(i,t=this){var e;if((i=(e=zt(this,i,t,0))!==null&&e!==void 0?e:V)===kt)return;const r=this._$AH,o=i===V&&r!==V||i.capture!==r.capture||i.once!==r.once||i.passive!==r.passive,s=i!==V&&(r===V||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}},pa=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){zt(this,i)}};const ho=Re.litHtmlPolyfillSupport;ho==null||ho(Ii,nr),((hi=Re.litHtmlVersions)!==null&&hi!==void 0?hi:Re.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ci,di;let bt=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=((e,r,o)=>{var s,n;const h=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:r;let a=h._$litPart$;if(a===void 0){const l=(n=o==null?void 0:o.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new nr(r.insertBefore(ae(),l),l,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)===null||i===void 0||i.setConnected(!1)}render(){return kt}};bt.finalized=!0,bt._$litElement$=!0,(ci=globalThis.litElementHydrateSupport)===null||ci===void 0||ci.call(globalThis,{LitElement:bt});const co=globalThis.litElementPolyfillSupport;co==null||co({LitElement:bt}),((di=globalThis.litElementVersions)!==null&&di!==void 0?di:globalThis.litElementVersions=[]).push("3.2.2");var ui,pi,Se=window,ar=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lr=Symbol(),uo=new WeakMap,Ss=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(ar&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=uo.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&uo.set(t,i))}return i}toString(){return this.cssText}},vi=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Ss(e,i,lr)},po=ar?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(r=>new Ss(typeof r=="string"?r:r+"",void 0,lr))(e)})(i):i,Ue=window,vo=Ue.trustedTypes,va=vo?vo.emptyScript:"",fo=Ue.reactiveElementPolyfillSupport,he={toAttribute(i,t){switch(t){case Boolean:i=i?va:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},As=(i,t)=>t!==i&&(t==t||i==i),fi={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:As},dt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(i){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((t,e)=>{const r=this._$Ep(e,t);r!==void 0&&(this._$Ev.set(r,e),i.push(r))}),i}static createProperty(i,t=fi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(i,t),!t.noAccessor&&!this.prototype.hasOwnProperty(i)){const e=typeof i=="symbol"?Symbol():"__"+i,r=this.getPropertyDescriptor(i,e,t);r!==void 0&&Object.defineProperty(this.prototype,i,r)}}static getPropertyDescriptor(i,t,e){return{get(){return this[t]},set(r){const o=this[i];this[t]=r,this.requestUpdate(i,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||fi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),i.h!==void 0&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const r of e)t.unshift(po(r))}else i!==void 0&&t.push(po(i));return t}static _$Ep(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}u(){var i;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(i=this.constructor.h)===null||i===void 0||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)===null||e===void 0||e.call(i))}removeController(i){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((i,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var i;const t=(i=this.shadowRoot)!==null&&i!==void 0?i:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{ar?e.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):r.forEach(o=>{const s=document.createElement("style"),n=Se.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=o.cssText,e.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var i;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostConnected)===null||e===void 0?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostDisconnected)===null||e===void 0?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$EO(i,t,e=fi){var r;const o=this.constructor._$Ep(i,e);if(o!==void 0&&e.reflect===!0){const s=(((r=e.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?e.converter:he).toAttribute(t,e.type);this._$El=i,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(i,t){var e;const r=this.constructor,o=r._$Ev.get(i);if(o!==void 0&&this._$El!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((e=s.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?s.converter:he;this._$El=o,this[o]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(i,t,e){let r=!0;i!==void 0&&(((e=e||this.constructor.getPropertyOptions(i)).hasChanged||As)(this[i],t)?(this._$AL.has(i)||this._$AL.set(i,t),e.reflect===!0&&this._$El!==i&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(i,e))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(e)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostUpdated)===null||r===void 0?void 0:r.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){this._$EC!==void 0&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}};dt.finalized=!0,dt.elementProperties=new Map,dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},fo==null||fo({ReactiveElement:dt}),((ui=Ue.reactiveElementVersions)!==null&&ui!==void 0?ui:Ue.reactiveElementVersions=[]).push("1.6.1");var mo,Oe=window,Pt=Oe.trustedTypes,go=Pt?Pt.createPolicy("lit-html",{createHTML:i=>i}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,xs="?"+J,fa=`<${xs}>`,Tt=document,ce=(i="")=>Tt.createComment(i),de=i=>i===null||typeof i!="object"&&typeof i!="function",bo=Array.isArray,Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_o=/-->/g,yo=/>/g,rt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wo=/'/g,$o=/"/g,So=/^(?:script|style|textarea|title)$/i,Ao=(mo=1,(i,...t)=>({_$litType$:mo,strings:i,values:t})),B=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),xo=new WeakMap,_t=Tt.createTreeWalker(Tt,129,null,!1),Ve=class{constructor({strings:i,_$litType$:t},e){let r;this.parts=[];let o=0,s=0;const n=i.length-1,h=this.parts,[a,l]=((d,c)=>{const u=d.length-1,p=[];let b,g=c===2?"<svg>":"",f=Wt;for(let T=0;T<u;T++){const k=d[T];let D,x,S=-1,z=0;for(;z<k.length&&(f.lastIndex=z,x=f.exec(k),x!==null);)z=f.lastIndex,f===Wt?x[1]==="!--"?f=_o:x[1]!==void 0?f=yo:x[2]!==void 0?(So.test(x[2])&&(b=RegExp("</"+x[2],"g")),f=rt):x[3]!==void 0&&(f=rt):f===rt?x[0]===">"?(f=b??Wt,S=-1):x[1]===void 0?S=-2:(S=f.lastIndex-x[2].length,D=x[1],f=x[3]===void 0?rt:x[3]==='"'?$o:wo):f===$o||f===wo?f=rt:f===_o||f===yo?f=Wt:(f=rt,b=void 0);const A=f===rt&&d[T+1].startsWith("/>")?" ":"";g+=f===Wt?k+fa:S>=0?(p.push(D),k.slice(0,S)+"$lit$"+k.slice(S)+J+A):k+J+(S===-2?(p.push(void 0),T):A)}const y=g+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[go!==void 0?go.createHTML(y):y,p]})(i,t);if(this.el=Ve.createElement(a,e),_t.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(r=_t.nextNode())!==null&&h.length<n;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const c of r.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(J)){const u=l[s++];if(d.push(c),u!==void 0){const p=r.getAttribute(u.toLowerCase()+"$lit$").split(J),b=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:b[2],strings:p,ctor:b[1]==="."?ma:b[1]==="?"?ba:b[1]==="@"?_a:je})}else h.push({type:6,index:o})}for(const c of d)r.removeAttribute(c)}if(So.test(r.tagName)){const d=r.textContent.split(J),c=d.length-1;if(c>0){r.textContent=Pt?Pt.emptyScript:"";for(let u=0;u<c;u++)r.append(d[u],ce()),_t.nextNode(),h.push({type:2,index:++o});r.append(d[c],ce())}}}else if(r.nodeType===8)if(r.data===xs)h.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(J,d+1))!==-1;)h.push({type:7,index:o}),d+=J.length-1}o++}}static createElement(i,t){const e=Tt.createElement("template");return e.innerHTML=i,e}};function Rt(i,t,e=i,r){var o,s,n,h;if(t===B)return t;let a=r!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[r]:e._$Cl;const l=de(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=Rt(i,a._$AS(i,t.values),a,r)),t}var Le=class{constructor(i,t,e,r){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=r,this._$Cm=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var i,t;return(t=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let i=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&i.nodeType===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=Rt(this,i,t),de(i)?i===R||i==null||i===""?(this._$AH!==R&&this._$AR(),this._$AH=R):i!==this._$AH&&i!==B&&this.g(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):(e=>bo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function")(i)?this.k(i):this.g(i)}O(i,t=this._$AB){return this._$AA.parentNode.insertBefore(i,t)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}g(i){this._$AH!==R&&de(this._$AH)?this._$AA.nextSibling.data=i:this.T(Tt.createTextNode(i)),this._$AH=i}$(i){var t;const{values:e,_$litType$:r}=i,o=typeof r=="number"?this._$AC(i):(r.el===void 0&&(r.el=Ve.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(e);else{const s=new class{constructor(h,a){this.u=[],this._$AN=void 0,this._$AD=h,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(h){var a;const{el:{content:l},parts:d}=this._$AD,c=((a=h==null?void 0:h.creationScope)!==null&&a!==void 0?a:Tt).importNode(l,!0);_t.currentNode=c;let u=_t.nextNode(),p=0,b=0,g=d[0];for(;g!==void 0;){if(p===g.index){let f;g.type===2?f=new Le(u,u.nextSibling,this,h):g.type===1?f=new g.ctor(u,g.name,g.strings,this,h):g.type===6&&(f=new ya(u,this,h)),this.u.push(f),g=d[++b]}p!==(g==null?void 0:g.index)&&(u=_t.nextNode(),p++)}return c}p(h){let a=0;for(const l of this.u)l!==void 0&&(l.strings!==void 0?(l._$AI(h,l,a),a+=l.strings.length-2):l._$AI(h[a])),a++}}(o,this),n=s.v(this.options);s.p(e),this.T(n),this._$AH=s}}_$AC(i){let t=xo.get(i.strings);return t===void 0&&xo.set(i.strings,t=new Ve(i)),t}k(i){bo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let e,r=0;for(const o of i)r===t.length?t.push(e=new Le(this.O(ce()),this.O(ce()),this,this.options)):e=t[r],e._$AI(o),r++;r<t.length&&(this._$AR(e&&e._$AB.nextSibling,r),t.length=r)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,t);i&&i!==this._$AB;){const r=i.nextSibling;i.remove(),i=r}}setConnected(i){var t;this._$AM===void 0&&(this._$Cm=i,(t=this._$AP)===null||t===void 0||t.call(this,i))}},je=class{constructor(i,t,e,r,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=i,this.name=t,this._$AM=r,this.options=o,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,r){const o=this.strings;let s=!1;if(o===void 0)i=Rt(this,i,t,0),s=!de(i)||i!==this._$AH&&i!==B,s&&(this._$AH=i);else{const n=i;let h,a;for(i=o[0],h=0;h<o.length-1;h++)a=Rt(this,n[e+h],t,h),a===B&&(a=this._$AH[h]),s||(s=!de(a)||a!==this._$AH[h]),a===R?i=R:i!==R&&(i+=(a??"")+o[h+1]),this._$AH[h]=a}s&&!r&&this.j(i)}j(i){i===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},ma=class extends je{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===R?void 0:i}},ga=Pt?Pt.emptyScript:"",ba=class extends je{constructor(){super(...arguments),this.type=4}j(i){i&&i!==R?this.element.setAttribute(this.name,ga):this.element.removeAttribute(this.name)}},_a=class extends je{constructor(i,t,e,r,o){super(i,t,e,r,o),this.type=5}_$AI(i,t=this){var e;if((i=(e=Rt(this,i,t,0))!==null&&e!==void 0?e:R)===B)return;const r=this._$AH,o=i===R&&r!==R||i.capture!==r.capture||i.once!==r.once||i.passive!==r.passive,s=i!==R&&(r===R||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}},ya=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){Rt(this,i)}},Eo=Oe.litHtmlPolyfillSupport;Eo==null||Eo(Ve,Le),((pi=Oe.litHtmlVersions)!==null&&pi!==void 0?pi:Oe.litHtmlVersions=[]).push("2.6.1");var mi,gi,Qt=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=((e,r,o)=>{var s,n;const h=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:r;let a=h._$litPart$;if(a===void 0){const l=(n=o==null?void 0:o.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new Le(r.insertBefore(ce(),l),l,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return B}};Qt.finalized=!0,Qt._$litElement$=!0,(mi=globalThis.litElementHydrateSupport)===null||mi===void 0||mi.call(globalThis,{LitElement:Qt});var Co=globalThis.litElementPolyfillSupport;Co==null||Co({LitElement:Qt}),((gi=globalThis.litElementVersions)!==null&&gi!==void 0?gi:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var te,wa=vi`
  ${vi`
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
  ${vi`
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
`,Di=1,ko=3,zo=4,Es=i=>(...t)=>({_$litDirective$:i,values:t}),Cs=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}},$a={},Sa=Es(class extends Cs{constructor(i){if(super(i),i.type!==ko&&i.type!==Di&&i.type!==zo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===B||t===R)return t;const e=i.element,r=i.name;if(i.type===ko){if(t===e[r])return B}else if(i.type===zo){if(!!t===e.hasAttribute(r))return B}else if(i.type===Di&&e.getAttribute(r)===t+"")return B;return((o,s=$a)=>{o._$AH=s})(i),t}}),ks=Object.defineProperty,Aa=Object.defineProperties,xa=Object.getOwnPropertyDescriptor,Ea=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,Ca=Object.prototype.hasOwnProperty,ka=Object.prototype.propertyIsEnumerable,To=(i,t,e)=>t in i?ks(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Vt=(i,t)=>{for(var e in t||(t={}))Ca.call(t,e)&&To(i,e,t[e]);if(Po)for(var e of Po(t))ka.call(t,e)&&To(i,e,t[e]);return i},hr=(i,t)=>Aa(i,Ea(t)),C=(i,t,e,r)=>{for(var o,s=r>1?void 0:r?xa(t,e):t,n=i.length-1;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&ks(t,e,s),s},qt=new WeakMap,Ro=new WeakMap,Kt=new WeakMap,Fi=new Set,za=new MutationObserver(Ts),pt=new Map,zs=document.documentElement.dir||"ltr",Ps=document.documentElement.lang||navigator.language;function Ts(){zs=document.documentElement.dir||"ltr",Ps=document.documentElement.lang||navigator.language,[...Fi.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}za.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Pa=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Fi.add(this.host)}hostDisconnected(){Fi.delete(this.host)}dir(){return`${this.host.dir||zs}`.toLowerCase()}lang(){return`${this.host.lang||Ps}`.toLowerCase()}term(i,...t){var e,r;const o=new Intl.Locale(this.lang()),s=o==null?void 0:o.language.toLowerCase(),n=(r=(e=o==null?void 0:o.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",h=pt.get(`${s}-${n}`),a=pt.get(s);let l;if(h&&h[i])l=h[i];else if(a&&a[i])l=a[i];else{if(!te||!te[i])return console.error(`No translation found for: ${String(i)}`),String(i);l=te[i]}return typeof l=="function"?l(...t):l}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}},Ta=class extends Pa{};(function(...i){i.map(t=>{const e=t.$code.toLowerCase();pt.has(e)?pt.set(e,Object.assign(Object.assign({},pt.get(e)),t)):pt.set(e,t),te||(te=t)}),Ts()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var me=i=>i??R;function bi(i,t){const e=Vt({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r,n=Array.isArray(i)?i:[i];r.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(e.waitUntilFirstUpdate&&!this.hasUpdated||this[o](d,c))}}),s.call(this,h)}}}var Uo=Es(class extends Cs{constructor(i){var t;if(super(i),i.type!==Di||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((e=this.st)===null||e===void 0)&&e.has(s))&&this.nt.add(s);return this.render(t)}const o=i.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return B}}),Ra=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?hr(Vt({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function N(i){return(t,e)=>e!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(i,t,e):Ra(i,t)}function Oo(i){return N(hr(Vt({},i),{state:!0}))}var _i,Ua=({finisher:i,descriptor:t})=>(e,r)=>{var o;if(r===void 0){const s=(o=e.originalKey)!==null&&o!==void 0?o:e.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:hr(Vt({},e),{key:s});return i!=null&&(n.finisher=function(h){i(h,s)}),n}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(s,r)}};function Vo(i,t){return Ua({descriptor:e=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&n!==void 0?n:null),this[o]}}return r}})}(_i=window.HTMLSlotElement)===null||_i===void 0||_i.prototype.assignedElements;var ji=class extends Qt{emit(i,t){const e=new CustomEvent(i,Vt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}};C([N()],ji.prototype,"dir",2),C([N()],ji.prototype,"lang",2);/*! Bundled license information:

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
*/var yi,E=class extends ji{constructor(){super(...arguments),this.formControlController=new class{constructor(i,t){(this.host=i).addController(this),this.options=Vt({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const r=e.getRootNode(),o=e.getAttribute("form");if(o)return r.getElementById(o)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var r;return(r=e.disabled)!=null&&r},reportValidity:e=>typeof e.reportValidity!="function"||e.reportValidity(),setValue:(e,r)=>e.value=r},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(i){i?(this.form=i,qt.has(this.form)?qt.get(this.form).add(this.host):qt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var i;this.form&&((i=qt.get(this.form))==null||i.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form))),this.form=void 0}handleFormData(i){const t=this.options.disabled(this.host),e=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof e=="string"&&e.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(s=>{i.formData.append(e,s.toString())}):i.formData.append(e,r.toString()))}handleFormSubmit(i){var t;const e=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=qt.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),!this.form||this.form.noValidate||e||r(this.host)||(i.preventDefault(),i.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const t of i)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(i,t){Ro.set(i,t),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&e.setAttribute(r,t.getAttribute(r))})),this.form.append(e),e.click(),e.remove()}}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){var t;const e=this.host,r=Boolean(Ro.get(e)),o=Boolean(e.required);(t=this.form)!=null&&t.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!i),e.toggleAttribute("data-valid",i),e.toggleAttribute("data-user-invalid",!i&&r),e.toggleAttribute("data-user-valid",i&&r))}updateValidity(){const i=this.host;this.setValidity(i.checkValidity())}}(this),this.hasSlotController=new class{constructor(i,...t){this.slotNames=[],(this.host=i).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(i){const t=i.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new Ta(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=i=>i.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(i){this.input.style.setProperty("--percent",100*i+"%")}syncTooltip(i){if(this.output!==null){const t=this.input.offsetWidth,e=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=t*i;if(this.localize.dir()==="rtl"){const s=`${t-o}px + ${i} * ${r}`;this.output.style.translate=`calc((${s} - ${e/2}px - ${r} / 2))`}else{const s=`${o}px - ${i} * ${r}`;this.output.style.translate=`calc(${s} - ${e/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const i=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(i),this.tooltip!=="none"&&this.syncTooltip(i)}focus(i){this.input.focus(i)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=!!this.label||!!i,r=!!this.helpText||!!t;return Ao`
      <div
        part="form-control"
        class=${Uo({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":r})}
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
            class=${Uo({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${Sa(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":Ao`
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
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};function Lo(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=i[e];return r}E.styles=wa,C([Vo(".range__control")],E.prototype,"input",2),C([Vo(".range__tooltip")],E.prototype,"output",2),C([Oo()],E.prototype,"hasFocus",2),C([Oo()],E.prototype,"hasTooltip",2),C([N()],E.prototype,"title",2),C([N()],E.prototype,"name",2),C([N({type:Number})],E.prototype,"value",2),C([N()],E.prototype,"label",2),C([N({attribute:"help-text"})],E.prototype,"helpText",2),C([N({type:Boolean,reflect:!0})],E.prototype,"disabled",2),C([N({type:Number})],E.prototype,"min",2),C([N({type:Number})],E.prototype,"max",2),C([N({type:Number})],E.prototype,"step",2),C([N()],E.prototype,"tooltip",2),C([N({attribute:!1})],E.prototype,"tooltipFormatter",2),C([N({reflect:!0})],E.prototype,"form",2),C([((i="value")=>(t,e)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,h){var a;const l=r.getPropertyOptions(i);if(s===(typeof l.attribute=="string"?l.attribute:i)){const d=l.converter||he,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:he.fromAttribute)(h,l.type);this[i]!==c&&(this[e]=c)}o.call(this,s,n,h)}})()],E.prototype,"defaultValue",2),C([bi("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),C([bi("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),C([bi("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=C([(yi="sl-range",i=>typeof i=="function"?((t,e)=>(customElements.define(t,e),e))(yi,i):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(s){customElements.define(t,s)}}})(yi,i))],E);var Zt=function(){try{window[H].updateSegments();var i=function(){if(!wi)return wi=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){wi=t,window[H].dispatchEvent(new Event("change"))})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},H="__foldables__",wi=!1,cr=function(){function i(){var r=this;if(window[H]!==void 0)return window[H];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof r[n]=="function"&&r[n](s),o.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(r,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(Zt(),200)})}var t,e=i.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var r=[];if(this.verticalViewportSegments>1)for(var o=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=o/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)r[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=r[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)r[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=r[u].width,c+=this.foldSize;window.visualViewport.segments=r},e.randomizeSegmentsConfiguration=function(r){var o=Math.random()<.5,s=Math.round(Math.random()*(r-1)+1);o?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(H+"-horizontal-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(H+"-horizontal-viewport-segments",r),Zt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(H+"-vertical-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(H+"-vertical-viewport-segments",r),Zt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(H+"-fold-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(H+"-fold-size",r),Zt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(H+"-browser-shell-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(H+"-browser-shell-size",r),Zt()}}])&&function(r,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(i.prototype,t),i}();window[H]=new cr,window.visualViewport.segments===void 0&&window[H].updateSegments();var Rs="-viewport-segments",Bi="(\\s*)(@media.*?\\b"+Rs+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Oa=/\((.*?)\)/gi,Va=/@media[^\(]+/gi,La=/(horizontal-viewport-segments:)\s?(\d)/gi,Ma=/(vertical-viewport-segments:)\s?(\d)/gi,Na=function(i){return new RegExp("env\\(\\s*"+i+"\\s*\\)","gi")};function Mo(i,t){var e=i.matchAll(t);return e===null?[]:Array.from(e,function(r){return r[2]})[0]}function Ha(i){var t=function(r){var o,s=new RegExp(Bi,"gi");if(typeof r.matchAll=="function")o=Array.from(r.matchAll(s));else{for(o=[];o[o.length]=s.exec(r););o.length--}return o}(i),e=[[]];return t.forEach(function(r){var o=r[1],s=r[2],n=r[3],h=r[4],a=s.match(Va)||[],l=s.match(Oa)||[],d=Mo(s,Ma);d===void 0&&(d=1);var c=Mo(s,La);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(Rs)}).join(" and "),e[d]===void 0&&(e[d]=new Array),e[d][c]=""+o+a+l+"{"+n+h+"}"}),e}var Wi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Wi);var No,Us=new cr;if(!Wi){var $i=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(No=$i,Promise.all(No.map(function(i){return i.href?fetch(i.href).then(function(t){return t.text()}):i.textContent}))).then(function(i){var t=new DocumentFragment;i.forEach(function(e,r){for(var o,s=function(T,k){return T.replace(new RegExp(Bi,"gi"),k)}(e,""),n=Ha(e),h=$i[r].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];ee[c]==null&&(ee[c]=[]);for(var p=0,b=Object.entries(u);p<b.length;p++){var g=b[p];ee[c][g[0]]="/* origin: "+h+" */"+g[1]}}if(h=="inline"||(o=e,new RegExp(Bi,"gi").test(o))){var f=document.createElement("style");f.setAttribute("data-css-origin",h),f.textContent=s,t.appendChild(f)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=h,t.appendChild(y)}}),$i.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(t),function(e){Wi||(Ho(e),Us.addEventListener("change",function(){return Ho(e)}))}()})}var ee=[[]];function Ho(i){var t,e=Us,r=null;(t=i?ee[i.nodeName.toLowerCase()]:ee)[e.verticalViewportSegments]&&(r=t[e.verticalViewportSegments][e.horizontalViewportSegments]);var o,s=t[0][0]?t[0][0]:null;if(r){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var b=p[u],g=b[0];o=b[1]+"px",r=r.replace(Na(h?"viewport-segment-"+g+" "+c+" 0":"viewport-segment-"+g+" 0 "+c),o)}var f="__foldables_sheet__",y=function(k,D){for(var x,S=function(A,fe){var M=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(M)return(M=M.call(A)).next.bind(M);if(Array.isArray(A)||(M=function(L,Nt){if(L){if(typeof L=="string")return Lo(L,Nt);var F=Object.prototype.toString.call(L).slice(8,-1);return F==="Object"&&L.constructor&&(F=L.constructor.name),F==="Map"||F==="Set"?Array.from(L):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?Lo(L,Nt):void 0}}(A))){M&&(A=M);var Mt=0;return function(){return Mt>=A.length?{done:!0}:{done:!1,value:A[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+f));!(x=S()).done;)x.value.remove();var z=document.createElement("style");z.className=f,z.textContent=D,k===document?document.head.appendChild(z):k.appendChild(z)};if(i){var T=i.shadowRoot;"adoptedStyleSheets"in T&&T.adoptedStyleSheets.length>0?T.adoptedStyleSheets[0].replace(s+r):y(T,r)}else y(document,r)}}const K={Foldable:"foldable",Dual:"dual"};class Lt extends bt{}v(Lt,"styles",bs`
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
  `);customElements.define("close-icon",class extends Lt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Lt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Lt{render(){return Ot`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Lt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Lt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Os extends bt{constructor(){super();v(this,"_mini_configurator_header");v(this,"_mini_configurator");v(this,"_configurator");v(this,"_configurator_header");v(this,"_device_type_select");v(this,"_orientation_select");v(this,"_seam_slider");v(this,"_seam_container");v(this,"_preview");v(this,"_preview_container");v(this,"_device");v(this,"_frame");v(this,"_device_hinge");v(this,"_currentOrientation");v(this,"_currentDevice");v(this,"_isFullscreen",!1);v(this,"_verticalViewportSegments",1);v(this,"_horizontalViewportSegments",1);v(this,"_fold_width");v(this,"_browser_shell_size");v(this,"_x",0);v(this,"_y",0);v(this,"_offset_x",0);v(this,"_offset_y",0);v(this,"_resizeHandler");v(this,"_handleKeyUp",e=>{e.keyCode==73&&e.ctrlKey&&this._showMiniConfigurator()});v(this,"_startDragMiniConfigurator",async e=>{this._startDrag(e),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});v(this,"_startDragConfigurator",async e=>{this._startDrag(e),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});v(this,"_startDrag",async e=>{this._isFullscreen||(this._moved=!1,this._x=e.clientX-this._offset_x,this._y=e.clientY-this._offset_y,this._pointerId=e.pointerId,e.preventDefault())});v(this,"_miniConfiguratorMove",async e=>{this._pointerMove(e),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});v(this,"_pointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight)return;let r=e.clientX-this._x,o=e.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),h=parseFloat(s.height);r<0&&(r=0),o<0&&(o=0),o+h>=window.innerHeight&&(o=window.innerHeight-h),r+n>=window.innerWidth&&(r=window.innerWidth-n),this._updateConfiguratorPosition(r,o),e.preventDefault()});v(this,"_stopDragConfigurator",async e=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});v(this,"_stopDragMiniConfigurator",async e=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});v(this,"_stopDrag",async e=>{this._x=this._offset_x,this._y=this._offset_y});v(this,"_onResize",async e=>{this._handleAsusSpanning()});v(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});v(this,"_rotationFinished",e=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const e=window.getComputedStyle(this.shadowRoot.host);parseFloat(e.width);const r=parseFloat(e.height);this._updateConfiguratorPosition(20,window.innerHeight-r-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=K.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const r=this._orientation_select.selectedIndex;this._orientation_select[r].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(e){let r=this._horizontalViewportSegments;this._orientation_select.selectedIndex=e===2?0:1,this._horizontalViewportSegments=e,this.requestUpdate("horizontalViewportSegments",r)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(e){let r=this._verticalViewportSegments;this._orientation_select.selectedIndex=e===2?1:0,this._verticalViewportSegments=e,this.requestUpdate("verticalViewportSegments",r)}_deviceTypeChanged(e){const r=this._device_type_select.selectedIndex,o=this._device_type_select[r].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),o){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=K.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=K.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=K.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=K.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=K.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=K.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),r=window.getComputedStyle(this._device),o=parseInt(e.width,10),s=parseInt(e.height,10);let n=parseInt(r.width,10),h=parseInt(r.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(r.height,10),h=parseInt(r.width,10)),h>s||n>o){const l=s/h,d=o/n;a=d<l?d:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===K.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new cr;e.foldSize=this.foldWidth,e.horizontalViewportSegments=this.horizontalViewportSegments,e.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(e,r){let o;return function(){clearTimeout(o),o=setTimeout(()=>e.apply(this,arguments),r)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let e=this._offset_x,r=this._offset_y;const o=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(o.width),n=parseFloat(o.height);this._offset_y+n>=window.innerHeight&&(r=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(e=window.innerWidth-s),this._updateConfiguratorPosition(e,r),this._updatePreviewConfiguration()}_updateConfiguratorPosition(e,r){this._offset_x=e,this._offset_y=r,this.shadowRoot.host.style.transform="translate3d("+e+"px, "+r+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Ot`
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
    </div>`}}v(Os,"styles",bs`
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
  `);customElements.define("foldable-device-configurator",Os);function Io(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=i[e];return r}var Jt=function(){try{window[I].updateSegments();var i=function(){if(!Si)return Si=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Si=t,window[I].dispatchEvent(new Event("change"))})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},I="__foldables__",Si=!1,Vs=function(){function i(){var r=this;if(window[I]!==void 0)return window[I];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof r[n]=="function"&&r[n](s),o.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(r,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(Jt(),200)})}var t,e=i.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var r=[];if(this.verticalViewportSegments>1)for(var o=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=o/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)r[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=r[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)r[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=r[u].width,c+=this.foldSize;window.visualViewport.segments=r},e.randomizeSegmentsConfiguration=function(r){var o=Math.random()<.5,s=Math.round(Math.random()*(r-1)+1);o?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-horizontal-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(I+"-horizontal-viewport-segments",r),Jt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-vertical-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(I+"-vertical-viewport-segments",r),Jt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(I+"-fold-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(I+"-fold-size",r),Jt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(I+"-browser-shell-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(I+"-browser-shell-size",r),Jt()}}])&&function(r,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(i.prototype,t),i}();window[I]=new Vs,window.visualViewport.segments===void 0&&window[I].updateSegments();var Ls="-viewport-segments",dr="(\\s*)(@media.*?\\b"+Ls+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Ia=/\((.*?)\)/gi,Da=/@media[^\(]+/gi,Fa=/(horizontal-viewport-segments:)\s?(\d)/gi,ja=/(vertical-viewport-segments:)\s?(\d)/gi,Ba=function(i){return new RegExp("env\\(\\s*"+i+"\\s*\\)","gi")};function Ms(i,t){return i.replace(new RegExp(dr,"gi"),t)}function Do(i,t){var e=i.matchAll(t);return e===null?[]:Array.from(e,function(r){return r[2]})[0]}function Ns(i){var t=function(r){var o,s=new RegExp(dr,"gi");if(typeof r.matchAll=="function")o=Array.from(r.matchAll(s));else{for(o=[];o[o.length]=s.exec(r););o.length--}return o}(i),e=[[]];return t.forEach(function(r){var o=r[1],s=r[2],n=r[3],h=r[4],a=s.match(Da)||[],l=s.match(Ia)||[],d=Do(s,ja);d===void 0&&(d=1);var c=Do(s,Fa);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(Ls)}).join(" and "),e[d]===void 0&&(e[d]=new Array),e[d][c]=""+o+a+l+"{"+n+h+"}"}),e}var Be=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Be);var Fo,Hs=new Vs;if(!Be){var Ai=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Fo=Ai,Promise.all(Fo.map(function(i){return i.href?fetch(i.href).then(function(t){return t.text()}):i.textContent}))).then(function(i){var t=new DocumentFragment;i.forEach(function(e,r){for(var o,s=Ms(e,""),n=Ns(e),h=Ai[r].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];G[c]==null&&(G[c]=[]);for(var p=0,b=Object.entries(u);p<b.length;p++){var g=b[p];G[c][g[0]]="/* origin: "+h+" */"+g[1]}}if(h=="inline"||(o=e,new RegExp(dr,"gi").test(o))){var f=document.createElement("style");f.setAttribute("data-css-origin",h),f.textContent=s,t.appendChild(f)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=h,t.appendChild(y)}}),Ai.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(t),Is()})}var G=[[]];function Wa(i,t){if(Be)return i;var e=Ms(i,""),r=Ns(i);t&&(G[t]=[[]]);for(var o=t?G[t]:G,s=t?"":"/* origin: inline */",n=0,h=Object.entries(r);n<h.length;n++){var a=h[n],l=a[0],d=a[1];o[l]==null&&(o[l]=[]);for(var c=0,u=Object.entries(d);c<u.length;c++){var p=u[c];o[l][p[0]]=""+s+p[1]}}return o[0][0]=e,e}function Is(i){Be||(jo(i),Hs.addEventListener("change",function(){return jo(i)}))}function jo(i){var t,e=Hs,r=null;(t=i?G[i.nodeName.toLowerCase()]:G)[e.verticalViewportSegments]&&(r=t[e.verticalViewportSegments][e.horizontalViewportSegments]);var o,s=t[0][0]?t[0][0]:null;if(r){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var b=p[u],g=b[0];o=b[1]+"px",r=r.replace(Ba(h?"viewport-segment-"+g+" "+c+" 0":"viewport-segment-"+g+" 0 "+c),o)}var f="__foldables_sheet__",y=function(k,D){for(var x,S=function(A,fe){var M=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(M)return(M=M.call(A)).next.bind(M);if(Array.isArray(A)||(M=function(L,Nt){if(L){if(typeof L=="string")return Io(L,Nt);var F=Object.prototype.toString.call(L).slice(8,-1);return F==="Object"&&L.constructor&&(F=L.constructor.name),F==="Map"||F==="Set"?Array.from(L):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?Io(L,Nt):void 0}}(A))){M&&(A=M);var Mt=0;return function(){return Mt>=A.length?{done:!0}:{done:!1,value:A[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+f));!(x=S()).done;)x.value.remove();var z=document.createElement("style");z.className=f,z.textContent=D,k===document?document.head.appendChild(z):k.appendChild(z)};if(i){var T=i.shadowRoot;"adoptedStyleSheets"in T&&T.adoptedStyleSheets.length>0?T.adoptedStyleSheets[0].replace(s+r):y(T,r)}else y(document,r)}}try{self["workbox:window:6.5.3"]&&_()}catch{}function qi(i,t){return new Promise(function(e){var r=new MessageChannel;r.port1.onmessage=function(o){e(o.data)},i.postMessage(t,[r.port2])})}function qa(i,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function Bo(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=i[e];return r}function Ka(i,t){var e;if(typeof Symbol>"u"||i[Symbol.iterator]==null){if(Array.isArray(i)||(e=function(o,s){if(o){if(typeof o=="string")return Bo(o,s);var n=Object.prototype.toString.call(o).slice(8,-1);return n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set"?Array.from(o):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Bo(o,s):void 0}}(i))||t&&i&&typeof i.length=="number"){e&&(i=e);var r=0;return function(){return r>=i.length?{done:!0}:{done:!1,value:i[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=i[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch{}var xi=function(){var i=this;this.promise=new Promise(function(t,e){i.resolve=t,i.reject=e})};function Ei(i,t){var e=location.href;return new URL(i,e).href===new URL(t,e).href}var Xt=function(i,t){this.type=i,Object.assign(this,t)};function ge(i,t,e){return e?t?t(i):i:(i&&i.then||(i=Promise.resolve(i)),t?i.then(t):i)}function Za(){}var Ja={type:"SKIP_WAITING"};function Wo(i,t){if(!t)return i&&i.then?i.then(Za):Promise.resolve()}var Xa=function(i){var t,e;function r(h,a){var l,d;return a===void 0&&(a={}),(l=i.call(this)||this).nn={},l.tn=0,l.rn=new xi,l.en=new xi,l.on=new xi,l.un=0,l.an=new Set,l.cn=function(){var c=l.fn,u=c.installing;l.tn>0||!Ei(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,c.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(c){var u=l.fn,p=c.target,b=p.state,g=p===l.vn,f={sw:p,isExternal:g,originalEvent:c};!g&&l.mn&&(f.isUpdate=!0),l.dispatchEvent(new Xt(b,f)),b==="installed"?l.wn=self.setTimeout(function(){b==="installed"&&u.waiting===p&&l.dispatchEvent(new Xt("waiting",f))},200):b==="activating"&&(clearTimeout(l.wn),g||l.en.resolve(p))},l.dn=function(c){var u=l.hn,p=u!==navigator.serviceWorker.controller;l.dispatchEvent(new Xt("controlling",{isExternal:p,originalEvent:c,sw:u,isUpdate:l.mn})),p||l.on.resolve(u)},l.gn=(d=function(c){var u=c.data,p=c.ports,b=c.source;return ge(l.getSW(),function(){l.an.has(b)&&l.dispatchEvent(new Xt("message",{data:u,originalEvent:c,ports:p,sw:b}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(p){return Promise.reject(p)}}),l.sn=h,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}e=i,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var o,s,n=r.prototype;return n.register=function(h){var a=(h===void 0?{}:h).immediate,l=a!==void 0&&a;try{var d=this;return function(c,u){var p=c();return p&&p.then?p.then(u):u(p)}(function(){if(!l&&document.readyState!=="complete")return Wo(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=Boolean(navigator.serviceWorker.controller),d.yn=d.pn(),ge(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Ei(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new Xt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?Wo(this.fn.update()):void 0}catch(h){return Promise.reject(h)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(h){try{return ge(this.getSW(),function(a){return qi(a,h)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&qi(this.fn.waiting,Ja)},n.pn=function(){var h=navigator.serviceWorker.controller;return h&&Ei(h.scriptURL,this.sn.toString())?h:void 0},n.bn=function(){try{var h=this;return function(a,l){try{var d=a()}catch(c){return l(c)}return d&&d.then?d.then(void 0,l):d}(function(){return ge(navigator.serviceWorker.register(h.sn,h.nn),function(a){return h.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},o=r,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&qa(o.prototype,s),r}(function(){function i(){this.Pn=new Map}var t=i.prototype;return t.addEventListener=function(e,r){this.Sn(e).add(r)},t.removeEventListener=function(e,r){this.Sn(e).delete(r)},t.dispatchEvent=function(e){e.target=this;for(var r,o=Ka(this.Sn(e.type));!(r=o()).done;)(0,r.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},i}());Ri("/demos/photo-gallery/");const Ds=(i,...t)=>{const e=Wa(i[0],"main-application");return an([e],...t)};class Ki extends ft{constructor(){super(...arguments);v(this,"_spinner");v(this,"_image");v(this,"_legend")}firstUpdated(){this._spinner=this.shadowRoot.querySelector("sl-spinner"),this._image=this.shadowRoot.querySelector("img"),this._legend=this.shadowRoot.querySelector("#text")}updated(e){e.has("src")&&(this._spinner.style.visibility="visible",this._image.addEventListener("load",()=>{this._spinner.style.visibility="hidden",this.style.visibility="visible",this._legend.innerText=this.description},{once:!0}),this._image.src=this.src)}render(){return ki`
      <div id="wrapper">
        <img/>
        <div id="text"></div>
        <sl-spinner></sl-spinner>
      </div>
    `}}v(Ki,"styles",Ds`
    :host {
      width: 100%;
      height: 100%;
    }

    #wrapper {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: start;
      align-items: center;
    }

    #text {
      margin: 16px;
      color: white;
      font-size: 1.5em;
      word-wrap: break-word;
      text-align: center;
      height: 20%;
      margin-top: 15px;
    }

    img {
      min-height: 75%;
      height: 90%;
      width: 90%;
      object-fit: contain;
      margin-top: 40px;
    }

    sl-spinner {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      --track-width: 8px;
    }
  `),v(Ki,"properties",{src:{type:String},description:{type:String}});customElements.define("detail-img",Ki);class Zi extends ft{constructor(){super();v(this,"_full_img");v(this,"_detail_img");v(this,"_detail_container");v(this,"_detail");v(this,"_detail_select");v(this,"_drawer");v(this,"_spinner");v(this,"_fold");v(this,"_gallery");v(this,"_fullview_container");v(this,"_swAlert");v(this,"_wb");v(this,"_wbRegistration");this._full_view_container_classes={hidden:!0}}firstUpdated(){this._gallery=this.shadowRoot.querySelector(".gallery"),this._full_img=this.shadowRoot.querySelector("#full-img"),this._detail_img=this.shadowRoot.querySelector("detail-img"),this._detail_container=this.shadowRoot.querySelector(".detail-container"),this._detail=this.shadowRoot.querySelector(".detail"),this._detail_select=this.shadowRoot.querySelector(".detail-select"),this._spinner=this.shadowRoot.querySelector("sl-spinner"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._fold=this.shadowRoot.querySelector(".fold"),this._fullview_container=this.shadowRoot.querySelector(".fullview-container"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Xa("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),Is(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&qi(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_openPicture(e){const o=e.currentTarget.children[1].currentSrc.replace("-l",""),s=window.matchMedia("(vertical-viewport-segments: 2)").matches,n=window.matchMedia("(horizontal-viewport-segments: 2)").matches;if(navigator.devicePosture!=null&&(navigator.devicePosture.type==="folded"&&n||navigator.devicePosture.type==="continuous"&&(s||n))){if(this._detail_select.style.display="none",this._detail.style.visibility="visible",this._detail_img.src===o)return;this._detail_img.description=e.currentTarget.children[1].alt,this._detail_img.src=o,this._detail_img.style.visibility="hidden"}else this._full_view_container_classes={hidden:!1},this._full_img.setAttribute("src",o),this._spinner.style.visibility="visible",this._full_img.addEventListener("load",()=>{this._spinner.style.visibility="hidden"},{once:!0}),this._current_image=e.currentTarget}_closePicture(){this._full_view_container_classes={hidden:!0}}_previousPicture(e){if(e.stopPropagation(),this._current_image.parentNode.previousElementSibling){const r=this._current_image.parentNode.previousElementSibling.children[0],s=r.children[1].currentSrc.replace("-l","");this._full_img.setAttribute("src",s),this._current_image=r}}_nextPicture(e){if(e.stopPropagation(),this._current_image.parentNode.nextElementSibling){const r=this._current_image.parentNode.nextElementSibling.children[0],s=r.children[1].currentSrc.replace("-l","");this._full_img.setAttribute("src",s),this._current_image=r}}render(){const e=[{name:"images/air-balloon-l",alt:"This is a beautiful picture of an air balloon in the sky."},{name:"images/asia-l",alt:"This photo depicts a woman on a boat somewhere in Asia."},{name:"images/china-l",alt:"Architecture in China, a tower of a building."},{name:"images/church-l",alt:"A black church in the middle of nowhere."},{name:"images/city-l",alt:"A modern city somewhere in Asia."},{name:"images/waterfall2-l",alt:"River with a tiny waterfall."},{name:"images/cloud-l",alt:"Clouds in the sky, view from high altitude."},{name:"images/desert-l",alt:"A desert with cactus."},{name:"images/river2-l",alt:"A river inside a canyon."},{name:"images/disney-l",alt:"The Disney castle in Orlando"},{name:"images/forest-l",alt:"A road crossing a green forest"},{name:"images/greece-l",alt:"Greece architecture"},{name:"images/city2-l",alt:"A city street with an arch"},{name:"images/lake-l",alt:"Women coming out of a lake somewhere lost in the nature"},{name:"images/mountain-l",alt:"Peak of a high mountain and a cloudy sky"},{name:"images/new-york-l",alt:"A street in New York"},{name:"images/pool-l",alt:"Relaxing pool in a luxury hotel"},{name:"images/restaurant-l",alt:"Restaurant on the edge of a river somewhere in France"},{name:"images/river-l",alt:"River with people kayaking"},{name:"images/road-l",alt:"Long straight road somewhere in USA"},{name:"images/sand-l",alt:"Desert with rocky mountains on the background"},{name:"images/sea-l",alt:"Beautiful transparent sea water somewhere in the pacific"},{name:"images/sfo-l",alt:"Golden gate in San Francisco"},{name:"images/stars-l",alt:"Wonderful astronomy shot of stars in the sky"},{name:"images/tents-l",alt:"Camping tents hanging on a cliff"},{name:"images/waterfall-l",alt:"Picture of a waterfall between big rocks"},{name:"images/mountain2-l",alt:"Beautiful picture of a mountain landscape"},{name:"images/wave-l",alt:"This is a picture from a wave in the ocean"},{name:"images/aerial-l",alt:"This is an aerial picture of a city"},{name:"images/building-l",alt:"This is a picture from inside a building"},{name:"images/catamaran-l",alt:"This is a picture of a catamaran with blue water"},{name:"images/cats-l",alt:"Thisa picture of two cats sleeping"},{name:"images/egypt-l",alt:"This is a picture from somewhere in Egypt"},{name:"images/feather-l",alt:"This is a picture of colorful feathers"},{name:"images/fruits-l",alt:"This is a picture of a water bottle and fruits"},{name:"images/golden-gate-l",alt:"This is a picture of the Golden Gate"},{name:"images/marocco-l",alt:"This is a picture of ancient building in Marocco"},{name:"images/milky-way-l",alt:"This is a picture from the Milky Way"},{name:"images/palm-tree-l",alt:"This is a picture of palm trees with beautiful weather"},{name:"images/rainbow-l",alt:"This is a picture of a rainbow from a light"},{name:"images/road2-l",alt:"This is a picture from a road with a lot of trees"},{name:"images/surf-l",alt:"This is a picture of a surfer"},{name:"images/volcano-l",alt:"This is an aerial picture of a volcano"}];return ki`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
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
          <div class="gallery">
            ${e.map(r=>ki`
              <figure class="gallery-item">
                <picture @click="${this._openPicture}">
                  <source srcset="${r.name}.webp" type="image/webp">
                  <img src="${r.name}.jpg" class="gallery-img" alt=${r.alt}>
                </picture>
              </figure>
            `)}
          </div>

          <div class="fold"></div>

          <div class="detail-container">
            <div class="detail-select">Select an image in the gallery.</div>
            <div class="detail">
              <detail-img></detail-img>
            </div>
          </div>

          <div class="fullview-container ${pn(this._full_view_container_classes)}" @click="${this._closePicture}">
            <div class="close" @click="${this._closePicture}"></div>
            <div class="arrow-left" @click="${this._previousPicture}"></div>
            <sl-spinner></sl-spinner>
            <img id="full-img">
            <div class="arrow-right" @click="${this._nextPicture}"></div>
          </div>
        </div>
    `}}v(Zi,"styles",Ds`
    :host {
      width: 100vw;
      height: 100vh;
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

    .fullview-container {
      height: 100%;
      width: 100%;
      backdrop-filter: blur(5px) contrast(.8);
      -webkit-backdrop-filter: blur(5px) contrast(.8);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: row;
    }

    .fullview-container.hidden {
      display: none;
    }

    .arrow-left {
      width: 30px;
      height: 30px;
      border-bottom: solid 10px white;
      border-left: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right {
      width: 30px;
      height: 30px;
      border-top: solid 10px white;
      border-right: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right:hover, .arrow-left:hover {
      opacity: 1;
    }

    #full-img {
      height: 95%;
      width: 85%;
      object-fit: contain;
      user-select: none;
    }

    .loading {
      min-height: 70%;
      height: 70%;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      visibility: hidden;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      background-color: white;
    }

    .close:hover {
      opacity: 1;
    }

    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    .close:before {
      transform: rotate(45deg);
    }

    .close:after {
      transform: rotate(-45deg);
    }

    .gallery {
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-template-rows: repeat(auto-fit, 1fr);
      grid-gap: 2px;
      background-color: black;
      grid-auto-flow: dense;
      overflow-y: scroll;
      scrollbar-width: thin;
      --scrollbar-background: #dfdfdf;
      --scrollbar-thumb: #84898b;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }

    .gallery::-webkit-scrollbar {
      width: 11px;
    }
    .gallery {
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-track {
      background: var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb) ;
      border-radius: 10px;
      border: 3px solid var(--scrollbar-background);
    }

    .detail-container {
      height: 0vh;
      width: 0vw;
      background-color: black;
      color: white;
      overflow: hidden;
    }

    .fold {
      height: 0;
      width: 0;
      background-color: black;
    }

    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }

    .detail-select {
      color: white;
      font-size: 2em;
      text-align: center;
      margin-top : 20px;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    sl-spinner {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      --track-width: 8px;
    }

    @media (horizontal-viewport-segments: 2) {
      .gallery {
        width: env(viewport-segment-right 0 0);
        height: 100vh;
      }

      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 100vh;
        width: env(viewport-segment-width 1 0);
      }
    }

    @media (vertical-viewport-segments: 2) {
      .gallery {
        width: 100vw;
        height: var(--zenbook-span1-height, env(viewport-segment-top 0 1));
      }

      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
      }

      .content {
        flex-direction: column-reverse;
      }

      .detail-container {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100vw;
      }
    }

    @media (vertical-viewport-segments: 2) and (device-posture: folded) {
      .gallery {
        width: 100vw;
        height: 100vh;
      }

      .fold {
        height: 0;
        width: 0;
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 0vh;
        width: 0vw;
      }

      #full-img {
        height: env(viewport-segment-bottom 0 0);
      }

      .fullview-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }

      .arrow-left {
        margin-top: calc(env(viewport-segment-bottom 0 0) / 2);
      }

      .arrow-right {
        margin-top: calc(env(viewport-segment-bottom 0 0) / 2);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .gallery {
        width: 100vw;
        height: 100vh;
      }

      .fold {
        height: 0;
        width: 0;
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 0vh;
        width: 0vw;
      }

      /* This is only temporary for the Neo emulator, otherwise background blur is awfully slow */
      .fullview-container {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgb(0, 0, 0, 0.5);
        height: 100vh;
      }
    }
  `),v(Zi,"properties",{_full_view_container_classes:{type:String}});customElements.define("main-application",Zi);
